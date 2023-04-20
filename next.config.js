/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
}

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}

module.exports = nextConfig
