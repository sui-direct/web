import Link from "next/link";

import Logo from "../Logo";
import HeaderLink from "./HeaderLink";

import { FaExternalLinkAlt } from "react-icons/fa";

import "./header.scss";

export default function Header() {
    return (
        <header>
            <div>
                <Link href="/" className="brand">
                    <Logo size={24} white />
                    <h1>sui.direct</h1>
                </Link>
                <div className="links">
                    <HeaderLink href="/">Welcome</HeaderLink>
                    <HeaderLink href="/explore">Explore</HeaderLink>
                    <HeaderLink href="/nodes">Nodes</HeaderLink>
                    <a href="https://docs.sui.direct" target="_blank">
                        Docs
                        <FaExternalLinkAlt />
                    </a>
                </div>
                <div></div>
            </div>
        </header>
    );
}
