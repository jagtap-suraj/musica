module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-var": "off",
  },
  ignorePatterns: ["src/components/ui/*"], // This will ignore all files in the ui directory
};
