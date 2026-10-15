import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  // A static export has no image optimizer behind it.
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default withMDX(config);
