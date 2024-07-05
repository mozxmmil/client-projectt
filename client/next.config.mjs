/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        MESSAGE_ID : process.env.MESSAGE_ID,
    }
};

export default nextConfig;
