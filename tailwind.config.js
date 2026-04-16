/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        david: ["var(--font-david)"],
        signature: ["var(--font-signature)"],
        sans: ["var(--font-noto-sans)"],
        ibm: ["var(--font-ibm)"], // 👈 ganti ini
      },
    },
  },
  plugins: [],
};
