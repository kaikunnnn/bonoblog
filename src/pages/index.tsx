import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import {client} from "src/libs/client"

export type Blog = {
  title:string,
  body:string,
  category:string,
}

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  console.log(props.contents[0].title);
  return <div className="">
    <p>記事の総本数 : {props.totalCount}</p>
      <ul>
        {props.contents.map((content) => {
          return(
            <li className={`mt-8 hover:bg-gray-100 bg-${content.category}`} key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a>
                  <p className="text-xl font-bold">{content.title}</p>
                  <p>{content.createdAt}</p>
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
