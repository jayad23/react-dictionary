import { AssetsProps } from "./utils";

export interface PropSection {
  id: number;
  section: {
    en: string;
    es: string;
  },
  title: {
    en: string;
    es: string;
  },
  description: {
    en: string;
    es: string;
  }
}

export interface PropsState {
  response: Array<any>;
  searchValue: string;
  assets: AssetsProps;
  homeData: Array<PropSection>;
  lang: 'es' | 'en';
}

export type SearchContextProps = {
  state: PropsState;
  dispatch: React.Dispatch<any>;
}