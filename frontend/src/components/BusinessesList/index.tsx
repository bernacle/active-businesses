import React from 'react';

import { Container } from './styles';
import BusinessProps from '../../interfaces/BusinessProps';
import BusinessCard from '../BusinessCard';

const BusinessesList: React.FC<any> = ({ businesses }: any) => {
  return (
    <Container>
      {businesses.map((business: BusinessProps) => (
        <li key={business.location_account}>
          <BusinessCard business={business} />
        </li>
      ))}
    </Container>
  );
};

export default BusinessesList;
