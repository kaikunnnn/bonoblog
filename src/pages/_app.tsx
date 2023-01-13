import "src/styles/globals.css";
import "src/styles/blogList.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import GlobalNavi from "components/GlobalNavi";
import SunTop from "components/SunTop";
import FooterBlock from "components/Footer";
import TopHero from "components/TopHero";

<link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet"></link>

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <div className="max-h-full bg-bgTop bg-no-repeat bg-cover text-slate-900">
      <div className="">
          <GlobalNavi></GlobalNavi>
          <SunTop></SunTop>
          <main className="relative z-50	">
            <Component {...pageProps} />
          </main>
          <FooterBlock></FooterBlock>
      </div>
    </div>);
}

export default MyApp;
