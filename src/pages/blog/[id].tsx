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
            <h1 className="text-4xl mb-3 font-bold">{props.title}</h1>
            <time dateTime={props.createdAt} className="text-gray-600 mb-8 block">{ dayjs(props.createdAt).format("YYYY年MM月DD日") }</time>
            <div className=" prose prose-sm " dangerouslySetInnerHTML={{__html: props.body}}/>
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