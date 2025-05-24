import { Suspense } from "react";

export default function SignLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense>
            {children}
        </Suspense>
    );
}