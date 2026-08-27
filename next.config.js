/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export: `next build` emits plain HTML/CSS/JS to ./out — no server, no SSR.
    output: "export",

    // The static export has no image-optimization server, so if you ever switch the
    // plain <img> to next/image this keeps the build from failing.
    images: { unoptimized: true },
};

module.exports = nextConfig;
