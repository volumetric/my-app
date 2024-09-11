/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['asimov-gen-images.s3.us-east-1.amazonaws.com', 'api.dicebear.com'],
  },
}

module.exports = nextConfig