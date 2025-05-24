import { Toaster } from "../ui/sonner";
import WalletWrapper from "./WalletWrapper";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <WalletWrapper>
            {children}
            <Toaster />
        </WalletWrapper>
    );
}
