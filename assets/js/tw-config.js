// Tailwind Play CDN theme — Mindora brand identity.
// Token names are kept from the first build so the HTML classes stay the same.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: "#10243F",    // deepest navy: body text, footer, hover state
        pine: "#1A365D",   // brand navy (Trust, Security): primary buttons, dark sections
        sage: "#82A3A1",   // brand sage (Growth, Calm): borders, accents
        mist: "#F8F9FA",   // brand light (Clarity, Softness): page background
        dawn: "#FBEEDF",   // soft tint of brand amber: warm surfaces
        honey: "#9A5F22",  // readable amber for small text on light backgrounds
        amber: "#E2A970",  // brand amber (Hope, Warmth): highlights
      },
      fontFamily: {
        display: ['"Satoshi"', '"Inter"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "Segoe UI", "sans-serif"],
      },
      maxWidth: { site: "76rem" },
    },
  },
};
