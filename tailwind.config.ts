import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "brand-olive": "var(--brand-olive)",
        "brand-terracotta": "var(--brand-terracotta)",
        "brand-terracotta-dark": "var(--brand-terracotta-dark)",
        "brand-charcoal": "var(--brand-charcoal)",
      },
    },
  },
};

export default config;
