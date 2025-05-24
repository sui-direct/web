import { join } from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: true,
        useCache: true,
        serverActions: {
            bodySizeLimit: "2mb",
        },
    },
    sassOptions: {
        includePaths: [join(__dirname, "components")],
        prependData: `@use "@/assets/mixins" as *;`,
    },
};

export default nextConfig;
