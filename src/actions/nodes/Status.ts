"use server";

import { publicNodes } from "@/data/publicNodes";

export async function Status() {
    "use cache";

    const nodes = publicNodes.map(node => ({
        url: node,
        status: false,
    }));

    for (const node of publicNodes) {
        try {
            const response = await fetch(`${node}/pink`, { cache: "no-store" });
            const data = await response.json();
            if (data.status === "ok") {
                const nodeIndex = nodes.findIndex(n => n.url === node);
                if (nodeIndex !== -1) nodes[nodeIndex].status = true;
            }
        } catch (error) {
            console.error(`Error fetching status from ${node}:`, error);
        }
    }

    return nodes;
}
