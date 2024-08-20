import { SocialLink } from "@/types/app-types";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaProductHunt,
  FaStackOverflow,
} from "react-icons/fa";
import { SiQuora } from "react-icons/si";

export const socialLinksData: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/manoj_ahi",
    icon: FaTwitter,
  },
  {
    name: "Github",
    url: "https://github.com/manojahi",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manojahi/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/manoj_ahi/",
    icon: FaInstagram,
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com/@manoj_ahirwar",
    icon: FaProductHunt,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/4470419/manoj-ahirwar",
    icon: FaStackOverflow,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/manojahi7",
    icon: FaFacebook,
  },
  {
    name: "Quora",
    url: "https://www.quora.com/profile/Manoj-Ahirwar-1",
    icon: SiQuora,
  },
];
