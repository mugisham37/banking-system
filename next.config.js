/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Suppress critical dependency warnings for OpenTelemetry
    config.module.exprContextCritical = false;
    
    // Additional webpack optimizations
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
  // Suppress hydration warnings in development
  reactStrictMode: true,
}

module.exports = nextConfig;
