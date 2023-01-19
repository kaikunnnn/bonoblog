import Image from "next/image";
import Link from "next/link";

function GlobalNavi() {
  return( 
          <header className="md:py-12 md:px-14 md:pb-4 py-7 px-6 flex justify-between w-full content-center ">

            {/* サイトロゴ */}
            <div>
                <Link href="/">
                    <div className="cursor-pointer flex space-x-2 content-center items-center ">
                      <Image className="rounded-full "  src="/kaikun_me.jpg" alt="kaikunlogo" width={40} height={40} objectFit="contain" />
                      <a className="text-xl pt-1 leading-none font-hind font-bold">KAIKUN</a>
                    </div> 
                </Link> 
            </div>

            {/* ソーシャル */}
            <div className="flex items-center">
              <ul className="flex content-center space-x-6">
                <li className="flex items-center">
                  <Link href="">
                      <a  className="flex content-center"><Image src="/icon-twitter.svg" alt="sun image" width={20} height={20} objectFit="contain" /></a>
                  </Link>
                </li>
                <li className="flex content-center">
                  <Link href="">
                      <a className="flex content-center"><Image src="/icon-YouTube.svg" alt="sun image" width={20} height={20} objectFit="contain" /></a>
                  </Link>
                  
                </li>
              </ul>
            </div>
            
          </header>
          );
}

export default GlobalNavi;
