import HomeNav from "@/components/Welcome/Nav";
import HomeFAQ from "@/components/Welcome/FAQ";
import HomeJoin from "@/components/Welcome/Join";
import HomeFeatures from "@/components/Welcome/Features";

export default function Home() {
    return (
        <main>
            <HomeNav />
            <HomeFeatures />
            <HomeFAQ />
            <HomeJoin />
        </main>
    );
}
