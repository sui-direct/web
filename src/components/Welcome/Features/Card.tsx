"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface FeatureCardProps {
    icon: React.ReactNode;
    feature: { id: string; title: string; description: string };
    className?: string;
}

export default function FeatureCard({
    icon,
    feature: { description, id, title },
    className = "",
}: FeatureCardProps) {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);

    const maskImage = useMotionTemplate`radial-gradient(180px 180px at ${offsetX}px ${offsetY}px, black, transparent)`;

    const border = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) {
                return;
            }

            const borderRect = border.current.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [offsetX, offsetY]);

    return (
        <div
            key={id}
            className={
                "relative flex-1 rounded-xl border border-foreground border-opacity-40 px-5 py-10 text-center glass bg-[#00000032] " +
                className
            }
        >
            <motion.div
                ref={border}
                className="absolute inset-0 rounded-xl border-6 border-primary bg-[#ffffff04]"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage,
                }}
            />
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-background border-white border-2 text-foreground">
                {icon}
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-foreground opacity-70">{description}</p>
        </div>
    );
}
