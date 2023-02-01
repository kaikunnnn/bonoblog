import Blockbonolink from "components/block-bonolink";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages";
import SEO from "components/seo";




const BlogPost: NextPage<Blog & MicroCMSContentId & MicroCMSDate> = (props) => {
    
    return(
        <>
        
        <SEO 
            title={props.title} 
            description={props.description} 
            imgUrl={`${props.emoji.url}`}
            ogTitle={`${props.title} | BONO BLOG`}
            ogDescription={props.description} 
            ogWidth='160'
            ogHeight="160">
        </SEO>
         
        <div>
            <div  className="m-auto w-10/12">
                <div className="m-8"></div>
                <img className="md:w-24 md:h-24 w-16 h-16 text-center m-auto" src={`${props.emoji.url}` }></img>
                
                <div className="m-5"></div>
                <h1 className="!leading-normal text-4xl md:text-5xl text-center font-bold md:w-10/12 m-auto ">{props.title}</h1>
                <div className="m-4"></div>
                <div className="flex m-auto justify-center gap-2">
                    <p  className="text-center text-gray-500 font-semibold text-base">{props.category} | </p>
                    <time dateTime={props.createdAt} className="text-gray-600 text-center block">{ dayjs(props.createdAt).format("YYYY年MM月DD日") }</time>
                </div>
                
                <div className="m-12"></div>
                <hr className="w-2/12 m-auto border-gray-400" />
                <div className="m-12"></div>
                <div className="
                    prose 
                    prose-h1:text-3xl prose-h1:text-center
                    prose-h2:text-center 
                    prose-lg 
                    prose-p:leading-loose
                    md:prose-xl 
                    m-auto " dangerouslySetInnerHTML={{__html: props.body}}/>
                <div className="pt-12 pb-12 m-auto w-10/12">
                    <hr className="w-full border-gray-300" />
                    <p className="text-center pt-12 pb-12 font-medium ">😇<br></br>読んでいただきありがとうございました!!</p>
                    <hr className="w-full border-gray-300" />
                </div>
            </div>
            
            <Blockbonolink></Blockbonolink>
        </div>
        </>
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
    return{
        props:data,
    }
}

export default BlogPost;