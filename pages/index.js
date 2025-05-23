import Head from "next/head";
import Script from "next/script";
import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import Roadmap from "@/components/Roadmap/Roadmap";
import Sales from "@/components/Sales/Sales";
import TeamOne from "@/components/Team/TeamOne";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          EtherealCash ICO - Revolutionizing Crypto with AI Trading for Traders
        </title>
        <meta
          name="description"
          content="EtherealCash is the exclusive cryptocurrency for the Signal Vase platform, integrating Artificial Intelligence for advanced trading strategies. Empower traders and investors to engage securely, pay for signals, and build a trusted community."
        />
      </Head>
      <Script 
  src="https://widgets.leadconnectorhq.com/loader.js"  
  data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
 data-widget-id="6826fa8bbd14c56530dd44b5"   > 
 </Script>


      <LayoutOne>
        <main className="fix">
          <Banner />
          <WhoWeAre />

          <TopPartners />
          <WhyChooseUs />
          <Sales />

          <div className="area-bg">
            {/* <Roadmap /> */}
            <WhitePaper />
          </div>

          {/* <TeamOne /> */}
          <ContactOne />
        </main>
      </LayoutOne>
    </>
  );
}
