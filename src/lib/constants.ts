import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/MAFT_2026.jpg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
  badges?: string[];
};

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://getcvfolio.com',
  author: {
    avatar,
    name: 'Miguel-Ángel Fernández-Torres',
    headline: 'Assistant Professor at Universidad Carlos III de Madrid',
    username: 'miguelangelft',
    location: 'Leganés, Madrid, Spain',
    pronouns: 'He/Him',
    badges: ['ELLIS Member', 'ITU-UN GI-AI4R WG-Data Co-Lead'],
  },
  seo: {
    title:
      'Miguel-Ángel Fernández-Torres — Assistant Professor at UC3M',
    description:
      'Assistant Professor at Universidad Carlos III de Madrid working on explainable AI, computer vision, and deep learning for Earth and climate sciences.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@miguelangelft',
    },
    robots: 'index, follow',
  },
};
