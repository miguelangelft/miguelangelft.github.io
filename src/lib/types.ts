export type Publication = {
  id: string;
  section: 'journal' | 'conference';
  highlight: boolean;
  title: string;
  authors: string;
  year: number;
  venue: string;
  publisher: string;
  metrics: string | null;
  url: string | null;
  image: string | null;
};

export type Project = {
  title: string;
  program: string;
  pi: string;
  role: string;
  from: number;
  to?: number;
};
