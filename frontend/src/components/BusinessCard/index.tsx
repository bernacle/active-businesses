import React, { useCallback, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FiMap } from 'react-icons/fi';
import { Container, AdressInfo, MapInfo, Top, Bottom, Card } from './styles';
import { MAP_URL } from '../../config/url';

const BusinessCard: React.FC<any> = ({ business }: any) => {
  const parseIsoDate = useCallback(date => {
    const parsedDate = new Date(date);
    const month = parsedDate.getMonth() + 1;
    const finalDate = `${parsedDate.getFullYear()}-${month}-${parsedDate.getDate()}`;
    return finalDate;
  }, []);

  const showStartDate = useCallback(() => {
    return `START DATE: ${parseIsoDate(business.location_start_date)}`;
  }, []);

  return (
    <Container>
      <Card>
        <Top>
          <strong>{business.business_name}</strong>
        </Top>
        <Bottom>
          <span>{showStartDate()}</span>
          <AdressInfo>
            <p>{business.street_address}</p>
            <p>{business.city}</p>
          </AdressInfo>
          <MapInfo locationExists={!!business.location_1}>
            <Link
              to="route"
              target="_blank"
              onClick={event => {
                event.preventDefault();
                if (business.location_1) {
                  window.open(
                    `${MAP_URL} / ${business.location_1.latitude}, ${business.location_1.longitude}`,
                  );
                }
              }}
            >
              <FiMap size={30} style={{ margin: 10 }} />
              <span>
                {business.location_1
                  ? 'Open in Google maps'
                  : 'No coordinates found'}
              </span>
            </Link>
          </MapInfo>
        </Bottom>
      </Card>
    </Container>
  );
};

export default BusinessCard;
