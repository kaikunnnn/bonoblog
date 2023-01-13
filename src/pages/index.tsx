import TopHero from "components/TopHero";
import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {client} from "src/libs/client"

export type Blog = {
  title:string,
  body:string,
  category:string,
}

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return <div className="md:w-7/12 md:max-w-3xl w-10/12 m-auto">
   <TopHero></TopHero>
      <ul  className="flex-col flex gap-3">
        {props.contents.map((content) => {
          return(
            <li className={` hover:bg-gray-100 bg-white rounded-xl p-2  min-h-full shadow-sm	`} key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a>
                  <div className="flex content-between items-center gap-3 md:gap-4">
                    <div className={`flex items-center justify-center content bg-${content.category} w-4/12 h-16 rounded-lg`}>
                      <Image src="/icon-twitter.svg" alt="sun image" width={20} height={20} objectFit="contain" />
                    </div>
                    <div className="w-8/12 flex flex-col gap-0">
                      <h4 className="text-sm text-slate-900 font-semibold ">{content.title}</h4>
                      <time dateTime={content.createdAt} className="text-xs text-gray-400">{ dayjs(content.createdAt).format("YYYY年MM月DD日") }</time>
                    </div>
                  </div>
                </a>
              </Link>
              
            </li>
          )
        })}
      </ul>
    </div>;
};

export const getStaticProps: GetStaticProps<MicroCMSListResponse<Blog>> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog"});
  return{
    props:data,
  }
  
}

export default Home;
