export interface Media {
  id: number;
  title: string;
  link: string
}

interface Element {
  description: {
    en: string;
    es: string;
  };
  id: number;
  lang: string;
  media: Array<Media>;
  reading: Array<Media>;
};

export interface SectionCardProps {
  option: string;
  information: {
    title: {
      link: string;
      en: string;
      es: string;
    },
    bank: Array<Element>;
  }
}