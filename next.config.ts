import withVercelToolbar from '@vercel/toolbar/plugins/next';
import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false
  }
};

export default withPayload(withVercelToolbar()(nextConfig));