import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <div className="mx-auto max-w-prose">
      <header className="py-8">
        <h1 className="">
          <Link href="/"><a className="text-4xl font-bold">ブログ</a></Link> 
        </h1>
      </header>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
      
     
    </div>);
}

export default MyApp;
