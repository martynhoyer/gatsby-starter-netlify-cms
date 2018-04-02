import { shade, tint, transparentize } from "polished";

const CC = {
  palette: {
    black: "#000",
    grey: "#6e6e6e",
    white: "#fff",
    yellow: "#ffcb08",
    purple: "#6e408d"
  },
  shadows: {}
};

CC.palette.greyDark = shade(0.8, CC.palette.grey);
CC.palette.greyDarker = shade(0.7, CC.palette.grey);
CC.palette.greyDarkest = shade(0.6, CC.palette.grey);

CC.palette.greyLight = tint(0.7, CC.palette.grey);
CC.palette.greyLighter = tint(0.4, CC.palette.grey);
CC.palette.greyLightest = tint(0.09, CC.palette.grey);

CC.shadows.default = transparentize(0.75, CC.palette.greyDarkest);

export default CC;
