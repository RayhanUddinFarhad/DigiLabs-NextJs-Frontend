/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },

    images: {
        domains: ['images.unsplash.com'],
        unoptimized  : true,

        remotePatterns: [
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
          },
          {
            protocol: "https",
            hostname: "i.ibb.co",
          },
        ],
      },
}

module.exports = nextConfig
