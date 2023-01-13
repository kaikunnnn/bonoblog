import Image from "next/image";
import Link from "next/link";

function GlobalNavi() {
  return( 
          <header className="sp:py-14 sp:px-12 py-7 px-6 flex justify-between w-full content-center ">

            {/* サイトロゴ */}
            <div>
                <Link href="/">
                  <a>
                    <div className="flex space-x-2 content-center items-center ">
                      <Image className="rounded-full "  src="/kaikun_me.jpg" alt="kaikunlogo" width={40} height={40} objectFit="contain" />
                      <a className="text-base leading-none font-hind font-bold">KAIKUN</a>
                    </div> 
                  </a>
                </Link> 
                {/* コメント */}
                <div></div>
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
            
          </header>);
}

export default GlobalNavi;
