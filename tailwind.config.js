/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // expo-router support
  ],
  theme: {
    extend: {},
  },
  presets: [require("nativewind/preset")], // 👈 ADD THIS LINE
};
 