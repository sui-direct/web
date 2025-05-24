import { Button } from "@/components/ui/button";

export default function HomeJoin() {
    return (
        <div className="w-full flex flex-col gap-4 items-center justify-center relative overflow-clip pb-12 sm:py-24">
            <h1 className="text-center mx-2 text-4xl font-bold tracking-tighter">
                Join <span className="text-primary">&nbsp;sui.direct&nbsp;</span> and be a part of{" "}
                <span className="text-primary">decentralized</span> version control!
            </h1>
            <p className="text-center text-xl text-foreground mt-4">
                <Button variant="default" className="h-12 px-12">
                    <a
                        href="https://docs.sui.direct/"
                        target="_blank"
                        className="!text-white text-xl"
                    >
                        Get Started
                    </a>
                </Button>
            </p>
        </div>
    );
}
