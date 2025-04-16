/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.ibb.co',
      'images.unsplash.com',
      'plus.unsplash.com', // ✅ Add this!
    ],
  },
}

export default nextConfig
