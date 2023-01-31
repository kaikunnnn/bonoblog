import { VFC } from 'react'
import Head from 'next/head'


interface MetaData{
  title:string,
  description:string,
  imgUrl:string,
  ogTitle:string,
  ogDescription:string,
  ogWidth:number,
  ogHeight:number
}


export type HeadDate = {
  title:string,
  description:string,
  imgUrl:string,
  ogTitle:string,
  ogDescription:string,
  ogWidth:any,
  ogHeight:any,
  children: React.ReactNode;
}


// const Seo: VFC<MetaData> = ({
//   pageTitle,
//   pageDescription,
//   pagePath,
//   pageImg,
//   pageImgWidth,
//   pageImgHeight
// }) => {
//   const defaultTitle = 'BONOブログ'
//   const defaultDescription = 'UI/UXの動画コンテンツコミュニティ「BONO」を運営するカイクンの個人ブログです。'

//   const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
//   const description = pageDescription ? pageDescription : defaultDescription
//   const url = pagePath
//   const imgUrl = pageImg
//   const imgWidth = pageImgWidth ? pageImgWidth : 1280
//   const imgHeight = pageImgHeight ? pageImgHeight : 640



function SEO({title,description,imgUrl,ogTitle,ogDescription,ogWidth,ogHeight}:HeadDate) {
  return (
    <Head>
       <title>{title}</title>
       <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:url" content="https://kaikun.bo-no.design" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:site_name" content="BONO BLOG" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={ogWidth} />
      <meta property="og:image:height" content={ogHeight}/>
    </Head>
  )
}

export default SEO
