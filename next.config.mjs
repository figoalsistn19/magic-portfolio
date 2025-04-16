/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // images: {
  //   domains: ["dummyjson.com", "example.com"], // Tambahkan domain yang dibutuhkan
  // },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

export default nextConfig;