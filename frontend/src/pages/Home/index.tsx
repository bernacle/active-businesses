/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import api from '../../services/api';

import {
  Container,
  Header,
  Body,
  ButtonContainer,
  ButtonOptions,
  Button,
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

  useEffect(() => {
    async function fetchBusinesses() {
      const { data } = await api.get('/businesses');

      setBusinesses(data.businesses);
      setBusinessWithMostLocations(data.businessWithMostLocations);
      setOldestBusiness(data.oldestBusiness);
    }

    fetchBusinesses();
  }, []);

  const renderBusiness = useCallback(() => {
    if (isOldestBusinessSelected) {
      return <BusinessCard business={oldestBusiness} />;
    }
    if (isBusinessWithMostLocationsSelected) {
      return <BusinessCard business={businessWithMostLocations} />;
    }

    return <BusinessesList businesses={businesses} />;
  }, []);

  return (
    <Container>
      <Header>
        <p>Active Businesses</p>
      </Header>
      <ButtonContainer>
        <ButtonOptions>
          <Button>
            <p>Business wih most locations</p>
          </Button>

          <Button>
            <p>Oldest Business</p>
          </Button>
        </ButtonOptions>
      </ButtonContainer>
      <Body>{renderBusiness()}</Body>
    </Container>
  );
};

export default Home;
