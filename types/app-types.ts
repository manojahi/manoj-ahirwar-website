import { IconType } from "react-icons";

export type ProjectStatus = "live" | "sold" | "discontinued" | "never launched" | "selling";

export interface Project {
  title: string;
  description: string;
  type: string;
  link: string;
  linkLabel: string;
  status: ProjectStatus;
}

export interface Country {
  name: string;
  code: string;
  slug: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface VisaInfo {
  type: "visa-free" | "visa-on-arrival" | "e-visa" | "sticker-visa";
  duration: string;
  notes: string;
  cost: string;
}

export interface CityVisited {
  name: string;
  highlights: string;
  daysSpent: number;
}

export interface TransportInfo {
  local: string;
  intercity: string;
  fromAirport: string;
  tips: string;
}

export interface MoneyInfo {
  currency: string;
  atmNotes: string;
  cardAcceptance: string;
  budgetPerDay: string;
  tips: string;
}

export interface SimInfo {
  provider: string;
  cost: string;
  purchaseLocation: string;
  dataPlan: string;
  tips: string;
}

export interface CountryDetail {
  slug: string;
  name: string;
  code: string;
  heroTagline: string;
  summary: string;
  visitedDate: string;
  tripDuration: string;
  visa: VisaInfo;
  cities: CityVisited[];
  transport: TransportInfo;
  money: MoneyInfo;
  sim: SimInfo;
  food: string;
  people: string;
  culture: string;
  vibe: string;
  tips: string;
  metaDescription: string;
  bestTimeToVisit: string;
  language: string;
  safety: string;
}
