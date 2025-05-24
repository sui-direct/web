"use client";

import { useState } from "react";

import { FAQItem } from "./Item";

const items = [
    {
        id: "1",
        question: "What is sui.direct?",
        answer: "sui.direct is a decentralized Git service that allows you to store and manage your code securely.",
    },
    {
        id: "2",
        question: "How does sui.direct work?",
        answer: "sui.direct uses SUI blockchain technology to store your code as blobs, ensuring security and immutability.",
    },
    {
        id: "3",
        question: "Is my data safe?",
        answer: "Yes, your data is stored securely on the SUI blockchain, and we do not require any personal information.",
    },
    {
        id: "4",
        question: "Can I run my own node?",
        answer: "Yes, sui.direct is open-source, and you can run your own node or customize your CLI.",
    },
    {
        id: "6",
        question: "How do I authenticate?",
        answer: "You can authenticate using your SUI wallet, ensuring that we do not collect any personal data.",
    },
    {
        id: "7",
        question: "Are there fees?",
        answer: "sui.direct is free to use. You must pay for Walrus storage fees and transaction fees on the SUI network.",
    },
];

export default function HomeFAQ() {
    const [openFaqId, setOpenFaqId] = useState<string | null>(null);

    return (
        <div className="flex justify-center bg-gradient-to-b from-[#ffffff20] to-background py-[72px] sm:py-24">
            <div className="container w-full">
                <h2 className="mx-auto px-2 text-center text-5xl font-bold tracking-tighter sm:max-w-[648px] sm:text-6xl">
                    Frequently asked questions
                </h2>
                <div className="mx-auto mt-12 px-4 max-w-[648px]">
                    {items.map(faq => (
                        <FAQItem
                            key={faq.id}
                            fqaItem={faq}
                            isOpen={openFaqId === faq.id}
                            onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
