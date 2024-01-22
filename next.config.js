/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hiveznmewgxqdpwwabrn.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'vcuonjyqailydlqkjteh.supabase.co',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

module.exports = nextConfig;
