const path = require("path");

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  reactStrictMode: true,
  loader: "imgix",
  path: 'the "domain" of your Imigix source',
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "media.scss";`,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
