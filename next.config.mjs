/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','www.finex.ltd'], // Add Cloudinary's domain here
  },
};

export default nextConfig;
