/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',       // To enable static export
    distDir: 'dist',        // Output directory for the build
    images: {
        unoptimized: true,  // Disabling image optimization
    },
    basePath: isProd ? '/portfolio' : '',  // Set basePath in production
    experimental: {
        appDir: true,       // Enable experimental app directory feature
    },
};

module.exports = nextConfig;
