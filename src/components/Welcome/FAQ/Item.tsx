import { AnimatePresence, motion } from "framer-motion";

import { FaMinus, FaPlus } from "react-icons/fa";

interface AccordionItemProps {
    fqaItem: { answer: string; id: string; question: string };
    isOpen: boolean;
    onClick: () => void;
}

export function FAQItem({ fqaItem: { answer, id, question }, onClick, isOpen }: AccordionItemProps) {
    return (
        <div
            key={id}
            onClick={onClick}
            className="border-b border-foreground border-opacity-30 py-7 hover:cursor-pointer"
        >
            <div className="flex items-center">
                <span className="flex-1 text-lg font-bold">{question}</span>
                {isOpen ? <FaMinus /> : <FaPlus />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                        }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
