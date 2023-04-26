/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['vcuonjyqailydlqkjteh.supabase.co', 'localhost'],
  },
};

module.exports = nextConfig;
