import { FaArrowRight } from "react-icons/fa";

export default function HomeNav() {
    return (
        <div className="w-full flex justify-center gradient-secondary relative overflow-clip bg-gradient-to-b sm:py-24 mt-4">
            <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] -translate-x-1/2 rounded-[100%] bg-[var(--background)] sm:top-[calc(100%-300px)] sm:h-[728px] lg:h-[500px] w-[150%]" />
            <div className="w-full container relative">
                <div className="flex items-center justify-center">
                    <a
                        href="https://docs.sui.direct/"
                        className="inline-flex gap-3 rounded-lg border border-foreground opacity-80 px-2 py-1 transition hover:bg-[#ffffff16]"
                        target="_blank"
                    >
                        <span className="text-foreground opacity-60">Want to Try?</span>
                        <span className="inline-flex items-center gap-2">
                            <span className="font-semibold">Dev Docs</span>
                            <FaArrowRight />
                        </span>
                    </a>
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="relative inline-flex">
                        <h1 className="inline-flex text-center text-shadow-lg font-bold tracking-tighter md:text-[150px] sm:text-7xl text-5xl">
                            Decentralized
                            <br />
                            Git Service
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="mt-8 max-w-lg text-center text-xl text-foreground opacity-80">
                        Your Code. Your Storage. Your Control.
                    </p>
                </div>
            </div>
        </div>
    );
}
