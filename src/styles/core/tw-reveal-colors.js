// Funkce pro podporu všech barevných utilit z proměnných v CSS
// viz: `https://tailwindcss.com/docs/customizing-colors`
// a viz: `https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo`
function withOpacityValue(variable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `hsla(var(${variable}), var(${opacityVariable}, 1)`;
    }
    return `hsl(var(${variable}))`;
  };
}

const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        gray: colors.slate,
        "gray-950": withOpacityValue("--color-gray-950"),

        primary: withOpacityValue("--color-primary"),
        secondary: withOpacityValue("--color-secondary"),

        muted: withOpacityValue("--color-muted"),
        default: withOpacityValue("--color-default"),
        rich: withOpacityValue("--color-rich"),

        body: withOpacityValue("--color-body"),
        "body-100": withOpacityValue("--color-body-100"),
        "body-200": withOpacityValue("--color-body-200"),
        "body-300": withOpacityValue("--color-body-300"),

        success: colors.emerald,
        error: colors.red,
        warning: colors.amber,
        info: colors.blue,
      },
    },
  },
};
