export default interface BusinessProps {
  location_account: string;
  business_name: string;
  street_address: string;
  city: string;
  dba_name?: string;
  zip_code: string;
  location_description: string;
  naics: string;
  primary_naics_description: string;
  council_district: string;
  location_start_date: string;
  location_1?: {
    latitude: string;
    longitude: string;
  };
}
