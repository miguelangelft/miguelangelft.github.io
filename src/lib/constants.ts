import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/MA_2024_25.jpg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
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
  },
  seo: {
    title: 'CV Folio — An Astro template inspired on Read.cv',
    description:
      'Clean and aesthetic portfolio website for developers and designers',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@cvfolio',
    },
    robots: 'noindex, nofollow',
  },
};
