import { FaCircleNodes } from "react-icons/fa6";
import { FaBolt, FaCode, FaLockOpen } from "react-icons/fa";

import FeatureCard from "./Card";

const featuresList = [
    {
        id: "1",
        title: "Blob Storage",
        description: "Your code is stored as blobs, ensuring security and immutability.",
        icon: <FaBolt size={24} />,
    },
    {
        id: "2",
        title: "Open-Source",
        description: "sui.storage is open-source. You can run your own node, or customize your CLI.",
        icon: <FaLockOpen size={24} />,
    },
    {
        id: "3",
        title: "Supported by Nodes",
        description:
            "There are multiple nodes that support the sui.storage protocol. Your code and uptime rate is safe.",
        className: "col-span-2",
        icon: <FaCircleNodes size={24} />,
    },
    {
        id: "4",
        title: "No Personal Data",
        description: "We don't need your personal data. You can authenticate with your SUI wallet.",
        icon: <FaLockOpen size={24} />,
    },
    {
        id: "5",
        title: "Public & Private Repositories",
        description: "You can create public or private repositories. Private repositories are encrypted.",
        icon: <FaCode size={24} />,
    },
];

export default function HomeFeatures() {
    return (
        <div className="flex justify-center bg-gradient-to-b from-background to-[#ffffff20] py-[72px] sm:py-24">
            <div className="w-[90%] lg:w-[40%] container">
                <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
                    Version Control on SUI
                </h2>
                <div className="mx-auto max-w-xl">
                    <p className="mt-5 text-center text-xl text-foreground opacity-80">
                        Store your code on-chain. Built on SUI, supported by Walrus.{" "}
                        <span className="text-primary font-semibold">sui.direct</span> is an open-source
                        decentralized Git service that allows you to store your code on-chain.
                    </p>
                </div>
                <div className="mt-16 gap-4 md:grid md:grid-cols-2 flex flex-col">
                    {featuresList.map(feature => (
                        <FeatureCard
                            icon={feature.icon}
                            key={feature.id}
                            feature={feature}
                            className={feature?.className || ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
