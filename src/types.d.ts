export type HomeProps = {
  dark: boolean;
  handledark: () => void;
  data: YourDataType[];
  value: string;
  handlevalue: (e: ChangeEvent<HTMLInputElement>) => void;
};
export type PageProps = {
  dark: boolean;
  handledark: () => void;
  data: YourDataType[];
};
type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type YourDataType = {
  name: string;
  flags: {
    png: string;
  };
  population: number;
  region?: string;
  capital?: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies?: Currency[] | undefined;
  borders?: string[];
  languages?: Language[] | undefined;
};
type Language = {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
};

export type SearchProps = {
  dark: boolean;
  handledark: () => void;
};
