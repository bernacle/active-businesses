import _ from 'lodash';
import Business from '../entities/Business';

export function findBusinessWithMostLocations(
  businesses: Business[],
): Business | undefined {
  const response = _.chain(businesses)
    .countBy(item => {
      return item.business_name;
    })
    .toPairs()
    .sortBy(item => {
      return item[1];
    })
    .reverse()
    .map(element => {
      return _.find(businesses, { business_name: element[0] });
    })
    .value();

  return response[0];
}

export function findOldestBusiness(businesses: Business[]): Business {
  return businesses.reduce((previous: Business, current: Business) =>
    current.location_start_date < previous.location_start_date
      ? current
      : previous,
  );
}
