/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'hiveznmewgxqdpwwabrn.supabase.co',
      'vcuonjyqailydlqkjteh.supabase.co',
      'localhost',
    ],
  },
};

module.exports = nextConfig;
