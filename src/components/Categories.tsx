import React from 'react';
import { TResourceCategory } from '../types';
import { colors, Container } from '../App.styles';
import {
  BananaIcon,
  BusIcon,
  BusinessCenterIcon,
  HomeIcon,
  HygieneIcon,
  LocalHospitalIcon,
  PeopleIcon,
  SocksIcon,
  WifiIcon
} from './Icons';
import CategoryResults from './CategoryResults';

interface TCategory {
  color: keyof typeof colors;
  placeholder: React.ReactElement;
  mainCategory: TResourceCategory;
  subCategories: TResourceCategory[];
}

type TCategoryName =
  | 'Food'
  | 'Health'
  | 'Hygiene'
  | 'JobTraining'
  | 'Resources'
  | 'Shelters'
  | 'SocialServices'
  | 'Transit'
  | 'Wifi';

const categories: Record<TCategoryName, TCategory> = {
  Food: {
    color: 'gold',
    placeholder: BananaIcon,
    mainCategory: {
      text: 'Food',
      query: 'CATEGORY-food'
    },
    subCategories: [
      {
        text: 'Meals',
        query: 'SUBCATEGORY-food-meal'
      },
      {
        text: 'Food Pantries',
        query: 'SUBCATEGORY-food-pantry'
      }
    ]
  },
  Health: {
    color: 'red',
    placeholder: LocalHospitalIcon,
    mainCategory: {
      text: 'Health',
      query: 'CATEGORY-health'
    },
    subCategories: [
      {
        text: 'Addiction Recovery Services',
        query: 'SUBCATEGORY-health-addictionRecoveryServices'
      },
      {
        text: 'Clinics',
        query: 'SUBCATEGORY-health-clinic'
      },
      {
        text: 'Dental',
        query: 'SUBCATEGORY-health-dental'
      },
      {
        text: 'Hospital',
        query: 'SUBCATEGORY-health-hospital'
      },
      {
        text: 'Mental',
        query: 'SUBCATEGORY-health-mental'
      },
      {
        text: 'Pharmacies',
        query: 'SUBCATEGORY-health-pharmacy'
      },
      {
        text: 'Vision',
        query: 'SUBCATEGORY-health-vision'
      }
    ]
  },
  Hygiene: {
    color: 'teal',
    placeholder: HygieneIcon,
    mainCategory: {
      text: 'Hygiene',
      query: 'CATEGORY-hygiene'
    },
    subCategories: [
      {
        text: 'Feminine Products',
        query: 'SUBCATEGORY-hygiene-feminine'
      },
      {
        text: 'Water Fountains',
        query: 'SUBCATEGORY-hygiene-water'
      },
      {
        text: 'Showers',
        query: 'SUBCATEGORY-hygiene-shower'
      },
      {
        text: 'Restrooms',
        query: 'SUBCATEGORY-hygiene-bathroom'
      }
    ]
  },
  JobTraining: {
    color: 'lavendar',
    placeholder: BusinessCenterIcon,
    mainCategory: {
      text: 'Job Training',
      query: 'CATEGORY-jobTraining'
    },
    subCategories: [
      {
        text: 'Craigs List',
        query: 'SUBCATEGORY-jobTraining-craigsList'
      },
      {
        text: 'Temp Agency',
        query: 'SUBCATEGORY-jobTraining-tempAgency'
      },
      {
        text: 'Day Labor',
        query: 'SUBCATEGORY-jobTraining-dayLabor'
      },
      {
        text: 'Ready to Work',
        query: 'SUBCATEGORY-jobTraining-readyToWork'
      },
      {
        text: 'Career Counseling',
        query: 'SUBCATEGORY-jobTraining-careerCounseling'
      }
    ]
  },
  Resources: {
    color: 'purple',
    placeholder: SocksIcon,
    mainCategory: {
      text: 'Resources',
      query: 'CATEGORY-resources'
    },
    subCategories: [
      {
        text: 'Pets',
        query: 'SUBCATEGORY-resources-pets'
      },
      {
        text: 'Hair Care',
        query: 'SUBCATEGORY-resources-hairCare'
      },
      {
        text: 'Laundry',
        query: 'SUBCATEGORY-resources-laundry'
      },
      {
        text: 'Legal Help',
        query: 'SUBCATEGORY-resources-legalHelp'
      },
      {
        text: 'Outdoor Gear',
        query: 'SUBCATEGORY-resources-outdoorGear'
      },
      {
        text: 'Home Goods',
        query: 'SUBCATEGORY-resources-homeGoods'
      },
      {
        text: 'Shoes',
        query: 'SUBCATEGORY-resources-shoes'
      },
      {
        text: 'Clothing',
        query: 'SUBCATEGORY-resources-clothing'
      }
    ]
  },
  Shelters: {
    color: 'orangePrimary',
    placeholder: HomeIcon,
    mainCategory: {
      text: 'Shelter',
      query: 'CATEGORY-shelter'
    },
    subCategories: [
      {
        text: 'Pregnant',
        query: 'SUBCATEGORY-shelter-pregnant'
      },
      {
        text: 'Abused',
        query: 'SUBCATEGORY-shelter-abused'
      },
      {
        text: 'Youth',
        query: 'SUBCATEGORY-shelter-youth'
      },
      {
        text: 'Family',
        query: 'SUBCATEGORY-shelter-family'
      },
      {
        text: 'Transitional',
        query: 'SUBCATEGORY-shelter-transitional'
      },
      {
        text: 'Temporary',
        query: 'SUBCATEGORY-shelter-temporary'
      },
      {
        text: 'Emergency',
        query: 'SUBCATEGORY-shelter-emergency'
      }
    ]
  },
  SocialServices: {
    color: 'brown',
    placeholder: PeopleIcon,
    mainCategory: {
      text: 'Social Services',
      query: 'CATEGORY-socialServices'
    },
    subCategories: [
      {
        text: 'Social Security',
        query: 'SUBCATEGORY-socialServices-socialSecurity'
      },
      {
        text: 'Health and Human Services',
        query: 'SUBCATEGORY-socialServices-healthAndHumanServices'
      },
      {
        text: 'Food Stamps',
        query: 'SUBCATEGORY-socialServices-foodStamps'
      }
    ]
  },
  Transit: {
    color: 'green',
    placeholder: BusIcon,
    mainCategory: {
      text: 'Transit',
      query: 'CATEGORY-transit'
    },
    subCategories: [
      {
        text: 'Bus',
        query: 'SUBCATEGORY-transit-bus'
      },
      {
        text: 'Bicycle',
        query: 'SUBCATEGORY-transit-bicycle'
      },
      {
        text: 'Lite Rail',
        query: 'SUBCATEGORY-transit-liteRail'
      }
    ]
  },
  Wifi: {
    color: 'blue',
    placeholder: WifiIcon,
    mainCategory: {
      text: 'Wifi',
      query: 'CATEGORY-wifi'
    },
    subCategories: [
      {
        text: 'Free Wifi',
        query: 'SUBCATEGORY-wifi-freeWifi'
      },
      {
        text: 'Public Computer',
        query: 'SUBCATEGORY-wifi-publicComputer'
      },
      {
        text: 'Charging',
        query: 'SUBCATEGORY-wifi-charging'
      }
    ]
  }
};

export default Object.entries(categories).reduce(
  (result, [categoryName, categoryValue]) => ({
    ...result,
    [categoryName]: () => (
      <Container>
        <CategoryResults
          category={categoryValue.mainCategory}
          color={colors[categoryValue.color]}
          placeholder={categoryValue.placeholder}
          subCategories={categoryValue.subCategories}
        />
      </Container>
    )
  }),
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  {} as Record<TCategoryName, React.FunctionComponent<{}>>
);
