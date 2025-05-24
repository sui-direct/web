"use client";

import { getFullnodeUrl } from "@mysten/sui/client";
import { registerSlushWallet } from "@mysten/slush-wallet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createNetworkConfig, SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";

registerSlushWallet("sui.direct");

const { networkConfig } = createNetworkConfig({
    mainnet: { url: getFullnodeUrl("mainnet") },
});

const queryClient = new QueryClient();

export default function WalletWrapper({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
                <WalletProvider
                    slushWallet={{
                        name: "sui.direct",
                    }}
                >
                    {children}
                </WalletProvider>
            </SuiClientProvider>
        </QueryClientProvider>
    );
}
