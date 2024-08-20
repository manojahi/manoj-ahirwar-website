import localFont from "next/font/local";

export const metropolis = localFont({
  src: [
    {
      path: "../public/fonts/metropolis/Metropolis-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/metropolis/Metropolis-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
});
