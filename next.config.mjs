/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(process.env.NEXT_STATIC_EXPORT === "1"
    ? { output: "export", trailingSlash: true }
    : {}),
};
export default config;
