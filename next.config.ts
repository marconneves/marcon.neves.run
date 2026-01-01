import withVercelToolbar from '@vercel/toolbar/plugins/next';
import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false
  },
  transpilePackages: ['react-select', '@payloadcms/plugin-seo']
};

export default withPayload(withVercelToolbar()(nextConfig));