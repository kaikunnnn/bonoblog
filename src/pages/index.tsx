import React from "react";
import TopHero from "components/TopHero";
import { motion, Variants  } from "framer-motion"
import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import {client} from "src/libs/client"
import SEO from "components/seo";

export type Blog = {
  title:string,
  body:string,
  category:string,
  emoji:any,
  description:string
}

const ullist = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
        staggerChildren: 0.48,
        delay:0.24,
    },
  },
}

const item = {
  hidden:{
    opacity:0,
    y:20,
},
show:{
    opacity:1,
    y:0,
    transition:{
        duration:0.48,
    }

}
  
}


const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return <>
   <SEO 
     title="BONOブログ" 
     description="テストのディスクリプション" 
     imgUrl="https:kaikun.bo-no.blog/ogp-bonoblog.jpg"
     ogTitle="BONO BLOG"
     ogDescription="UI/UXの動画コンテンツコミュニティ「BONO」を運営するカイクンの個人ブログです。"
     ogWidth='1200'
     ogHeight="600">
      
     </SEO>
  <motion.div className="md:w-8/12 md:max-w-3xl w-11/12 m-auto" >
      <TopHero></TopHero>
      <motion.ul 
      className="flex-col flex gap-3" 
      variants={ullist} 
      initial="hidden" 
      animate="show">
        {props.contents.map((content) => {
          return(
            <motion.li  variants={item} 
            className={` hover:bg-gray-100 bg-white rounded-2xl p-3 md:p-3 pr-3 md:pr-6  min-h-full shadow-sm	`} key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a>
                  <div className="flex content-between items-center gap-3 md:gap-8">
                    <div className={`flex items-center justify-center content bg-${content.category} w-4/12 md:w-4/12 md:h-32 h-16 py-10  rounded-xl`}>
                      <img className="md:w-16 md:h-16 w-8 h-8" src={`${content.emoji.url}` }></img>
                    </div>
                    <div className="w-8/12 flex flex-col gap-1 md:gap-2">
                      <h4 className="text-sm md:text-base text-slate-900 font-semibold ">{content.title}</h4>
                      <time dateTime={content.createdAt} className="text-xs text-gray-400">{ dayjs(content.createdAt).format("YYYY年MM月DD日") }</time>
                    </div>
                  </div>
                </a>
              </Link>
              
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.div>
  
  </>;
};

export const getStaticProps: GetStaticProps<MicroCMSListResponse<Blog>> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog"});
  return{
    props:data,
  }
  
}

export default Home;
