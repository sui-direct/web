import Image from "next/image";

export default function Logo({
    size,
    white = false,
    black = false,
}: {
    size: number;
    white?: boolean;
    black?: boolean;
}) {
    return (
        <Image
            src={white ? "/logo-white.svg" : black ? "/logo-black.svg" : "/logo.svg"}
            alt="sui.direct Logo"
            height={size}
            width={size}
            style={{
                minWidth: size,
                minHeight: size,
            }}
            quality={100}
        />
    );
}
