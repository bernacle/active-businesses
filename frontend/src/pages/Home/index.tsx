/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useState, useCallback } from 'react';
import { LineScalePulseOut } from 'react-pure-loaders';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Container,
  Header,
  Body,
  ButtonContainer,
  ButtonOptions,
  Button,
  LoadingContainer,
} from './styles';
import BusinessesList from '../../components/BusinessesList';
import BusinessCard from '../../components/BusinessCard';

const Home: React.FC = () => {
  const [businesses, setBusinesses] = useState([]);
  const [businessWithMostLocations, setBusinessWithMostLocations] = useState();
  const [
    isBusinessWithMostLocationsSelected,
    setIsBusinessWithMostLocationsSelected,
  ] = useState(false);
  const [oldestBusiness, setOldestBusiness] = useState();
  const [isOldestBusinessSelected, setIsOldestBusinessSelected] = useState(
    false,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchBusinesses() {
      const { data } = await api.get('/businesses');
      setBusinesses(data.businesses);
      setBusinessWithMostLocations(data.businessWithMostLocations);
      setOldestBusiness(data.oldestBusiness);
      setLoading(false);
    }

    fetchBusinesses();
  }, []);

  const renderBusiness = useCallback(() => {
    if (isOldestBusinessSelected) {
      return <BusinessCard loading={loading} business={oldestBusiness} />;
    }
    if (isBusinessWithMostLocationsSelected) {
      return (
        <BusinessCard loading={loading} business={businessWithMostLocations} />
      );
    }

    return <BusinessesList loading={loading} businesses={businesses} />;
  }, [
    isOldestBusinessSelected,
    isBusinessWithMostLocationsSelected,
    loading,
    businesses,
    oldestBusiness,
    businessWithMostLocations,
  ]);

  const showBusinessWithMostLocations = useCallback(() => {
    setIsBusinessWithMostLocationsSelected(true);
    setIsOldestBusinessSelected(false);
  }, []);
  const showOldestBusiness = useCallback(() => {
    setIsOldestBusinessSelected(true);
    setIsBusinessWithMostLocationsSelected(false);
  }, []);

  const renderBusinessWithMoreLocationsButton = useCallback(() => {
    if (isBusinessWithMostLocationsSelected) {
      return (
        <Button onClick={() => setIsBusinessWithMostLocationsSelected(false)}>
          <p>
            <FiArrowLeft />
          </p>
        </Button>
      );
    }
    return (
      <Button onClick={showBusinessWithMostLocations}>
        <p>Business wih most locations</p>
      </Button>
    );
  }, [isBusinessWithMostLocationsSelected, showBusinessWithMostLocations]);

  const renderOldestBusinessButton = useCallback(() => {
    if (isOldestBusinessSelected) {
      return (
        <Button onClick={() => setIsOldestBusinessSelected(false)}>
          <p>
            <FiArrowLeft />
          </p>
        </Button>
      );
    }
    return (
      <Button onClick={showOldestBusiness}>
        <p>Oldest Business</p>
      </Button>
    );
  }, [isOldestBusinessSelected, showOldestBusiness]);

  if (loading) {
    return (
      <LoadingContainer>
        <LineScalePulseOut color="#fb6c63" loading={loading} />
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <Header>
        <p>Active Businesses</p>
      </Header>
      <ButtonContainer>
        <ButtonOptions>
          {renderBusinessWithMoreLocationsButton()}
          {renderOldestBusinessButton()}
        </ButtonOptions>
      </ButtonContainer>
      <Body>{renderBusiness()}</Body>
    </Container>
  );
};

export default Home;
