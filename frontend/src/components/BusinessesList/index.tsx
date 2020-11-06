import React, { ReactElement, useCallback } from 'react';

import { JsxElement } from 'typescript';
import { Container } from './styles';
import BusinessProps from '../../interfaces/BusinessProps';
import BusinessCard from '../BusinessCard';

interface BusinessListProps {
  businesses: BusinessProps[];
}

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
