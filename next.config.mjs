/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/who-we-are',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
