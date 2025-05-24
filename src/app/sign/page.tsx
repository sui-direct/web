"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ConnectModal, useCurrentAccount, useSignPersonalMessage } from "@mysten/dapp-kit";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { FaCopy, FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosInformationCircle, IoIosWarning } from "react-icons/io";

import "./sign.scss";
import "@mysten/dapp-kit/dist/index.css";

const MESSAGE = "Welcome to sui.direct!\n\nSign this message to authenticate in the CLI.\n\nNonce: ";

export default function Sign() {
    const searchParams = useSearchParams();
    const currentAccount = useCurrentAccount();
    const { mutate: signPersonalMessage } = useSignPersonalMessage();

    const nonce = searchParams?.get("nonce");

    const [step, setStep] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [signature, setSignature] = useState<string | null>(null);

    useEffect(() => {
        if (currentAccount) setStep(1);
    }, [currentAccount?.address]);

    if (!nonce) return null;

    return (
        <div id="sign">
            {step === 0 && (
                <div className="container poly">
                    <div className="connection">
                        <h3 className="w-full font-semibold text-gray-100">Wallet Connection</h3>
                        <ConnectModal
                            trigger={
                                <Button variant="default" disabled={!!currentAccount}>
                                    <Image src="/icons/slush.svg" alt="Slush Logo" width={24} height={24} />
                                    Connect Slush Wallet
                                </Button>
                            }
                            onOpenChange={isOpen => setModalOpen(isOpen)}
                            open={modalOpen}
                        />
                        <Separator className="my-4 border-[1px] border-gray-500 opacity-35" />
                        <div className="w-full flex flex-col items-center justify-center gap-2">
                            <h3 className="w-full font-semibold text-gray-100">
                                zkLogin
                                <small className="text-gray-500 ml-2 text-[11px]">(Coming Soon)</small>
                            </h3>
                            <Button variant="ghost" disabled className="bg-white !opacity-80 text-[#3a3a3a]">
                                <FaGoogle />
                                Google Login
                            </Button>
                            <Button
                                variant="ghost"
                                disabled
                                className="bg-[#24292e] !opacity-100 text-gray-600"
                            >
                                <FaGithub />
                                Github Login
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {step !== 0 && (
                <div className="wrapper">
                    {signature ? (
                        <>
                            <div className="signature-window rounded-sm">
                                <p>Paste the signature in the CLI</p>
                                <p className="signature">{signature}</p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        try {
                                            navigator.clipboard.writeText(signature);
                                            toast("Signature copied to clipboard");
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                        } catch (e: unknown) {
                                            toast.error("Failed to copy signature");
                                        }
                                    }}
                                >
                                    Copy to clipboard
                                    <FaCopy />
                                </Button>
                            </div>
                            <Alert variant="warning">
                                <AlertTitle>
                                    <h4 className="flex items-center gap-1 text-md">
                                        <IoIosWarning className="text-xl" /> Be cautious
                                    </h4>
                                </AlertTitle>
                                <AlertDescription>
                                    Do not share the signature with anyone. Just paste it in the CLI and close
                                    this window.
                                </AlertDescription>
                            </Alert>
                        </>
                    ) : (
                        <>
                            <Alert variant="info">
                                <AlertTitle>
                                    <h4 className="flex items-center gap-1 text-md">
                                        <IoIosInformationCircle className="text-xl" /> How to sign?
                                    </h4>
                                </AlertTitle>
                                <AlertDescription>
                                    <p>
                                        Click the button below to sign the message. This will open up your{" "}
                                        <span className="text-primary font-medium">Slush</span> wallet
                                        extension.
                                        <br />
                                        <br />
                                        Sign the message and copy the signature. Then paste it in the{" "}
                                        <span className="text-primary font-medium">sui.direct CLI</span>.
                                    </p>
                                </AlertDescription>
                            </Alert>
                            <div className="sign-window rounded-sm">
                                <div className="message rounded-sm">
                                    <p>{MESSAGE + nonce}</p>
                                </div>
                                <Button
                                    variant="default"
                                    onClick={() => {
                                        signPersonalMessage(
                                            {
                                                message: new TextEncoder().encode(MESSAGE + nonce),
                                            },
                                            {
                                                onSuccess: res => setSignature(res.signature),
                                            },
                                        );
                                    }}
                                >
                                    Sign Message
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
