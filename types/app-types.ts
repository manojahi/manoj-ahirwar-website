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
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}