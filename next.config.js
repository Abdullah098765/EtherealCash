/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Add a rule to handle react-syntax-highlighter's esm/cjs issue
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/react-syntax-highlighter/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'], // Ensures ES module support is transpiled
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
