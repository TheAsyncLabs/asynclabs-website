import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev resources (HMR) when the site is opened via the LAN IP instead of localhost.
  allowedDevOrigins: ["192.168.137.30"],
};

export default nextConfig;
