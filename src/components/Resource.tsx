import React from 'react';
import { TResource, TResourceNew } from '../types';
import useResource from './useResource';
import useResourceNew from './useResourceNew';
import { getSearchParamVal } from '../utils/searchParams';
import { SEARCH_PARAM_RESOURCE, FIREBASE_RESOURCE_BRANCH } from '../constants';

import LoadingSpinner from './LoadingSpinner';
import PageBanner from './PageBanner';
import { Container } from '../App.styles';
import Details, { DetailBody, DetailHeading } from './Details';
import Schedule from './Schedule';
import Services from './Services';
import Map from './Map';

interface Props {
  id: string;
  resource: TResource;
}

const renderAddressContent = (resource: TResourceNew) => {
  const {
    address: { address1, address2, city, state, zip }
  } = resource;

  if (!address1 || !city || !state || !zip) {
    return <></>;
  }

  return (
    <>
      <DetailHeading>Address</DetailHeading>
      <DetailBody>
        <p>
          {' '}
          {address1}, {address2 ? `${address2},` : ''} {city}, {state} {zip}
        </p>
      </DetailBody>
    </>
  );
};

const renderPhoneContent = (resource: TResourceNew) => {
  const { phone } = resource;
  if (!phone) {
    return <></>;
  }
  return (
    <>
      <DetailHeading>Phone</DetailHeading>
      <DetailBody>
        <p>{phone}</p>
      </DetailBody>
    </>
  );
};

const renderWebsiteContent = (resource: TResourceNew) => {
  const { website } = resource;
  if (!website) {
    return <></>;
  }
  return (
    <>
      <DetailHeading>Website</DetailHeading>
      <DetailBody>
        <p>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </DetailBody>
    </>
  );
};

const renderErrorMessage = () => (
  <p>We&apos;re sorry, this service was not found.</p>
);

export const Resource = () => {
  const resourceId = getSearchParamVal(SEARCH_PARAM_RESOURCE);

  if (!resourceId) {
    return <p>We&apos;re sorry, this service was not found.</p>;
  }

  const resource = useResourceNew(resourceId);

  if (resource === undefined) {
    return renderErrorMessage();
  }

  if (resource === null) {
    return renderErrorMessage();
  }

  const { name, schedule } = resource;

  return (
    <Container>
      <PageBanner text={name} />
      <Details>
        {renderAddressContent(resource)}
        {renderPhoneContent(resource)}
        {renderWebsiteContent(resource)}
        <DetailHeading>Schedule</DetailHeading>
        <DetailBody>
          <Schedule schedule={schedule} />
        </DetailBody>
        <DetailHeading>Services</DetailHeading>
        <DetailBody>
          <Services resource={resource} />
        </DetailBody>
      </Details>
      <Map resource={resource} />
    </Container>
  );
};

export default Resource;
