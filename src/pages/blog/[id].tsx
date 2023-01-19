import Blockbonolink from "components/block-bonolink";
import SunTop from "components/SunTop";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Props } from "next/script";
import { client } from "src/libs/client";
import { Blog } from "src/pages";



const BlogPost: NextPage<Blog & MicroCMSContentId & MicroCMSDate> = (props) => {
    return(
        <div>
            <div  className="m-auto w-10/12">
                <div className="m-8"></div>
                <p  className="text-center text-gray-500 font-semibold text-sm">{props.category}</p>
                <div className="m-4"></div>
                <h1 className="!leading-normal text-3xl md:text-5xl text-center font-bold md:w-10/12 m-auto ">{props.title}</h1>
                <div className="m-4"></div>
                <time dateTime={props.createdAt} className="text-gray-600 text-center block">{ dayjs(props.createdAt).format("YYYY年MM月DD日") }</time>
                <div className="m-12"></div>
                <div className="prose prose-h2:text-center prose-lg md:prose-xl m-auto " dangerouslySetInnerHTML={{__html: props.body}}/>
                <div className="pt-12 pb-12 m-auto w-10/12">
                    <hr className="w-full bg-white" />
                    <p className="text-center pt-12 pb-12 font-medium ">読んでいただきありがとうございました!!</p>
                    <hr className="w-full bg-white" />
                </div>
            </div>
            
            <Blockbonolink></Blockbonolink>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await client.getList({endpoint:"blog"});
    const ids = data.contents.map((content)=> `/blog/${content.id}`)

    return{
        paths:ids,
        fallback:false,
    }
}

export const getStaticProps: GetStaticProps< {} ,{id:string}> = async (ctx) => {
    if (!ctx.params){
        return{
            notFound:true
        }
    }
    const data = await client.getListDetail<Blog>({
        endpoint:"blog",
        contentId: ctx.params.id,
    });
    console.log(data);
    return{
        props:data,
    }
}

export default BlogPost;