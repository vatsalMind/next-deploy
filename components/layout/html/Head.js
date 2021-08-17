import Head from "next/head";

// --------------------------------------------------------
// RENDER HEAD OBJECT
// --------------------------------------------------------

export default function HTMLHead({ data }) {
  return (
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{data.title}</title>                                     {/* 50-60 Characters */}
        <meta name="description" content={data.desc} />                 {/* 135-300 Characters */}
        <meta property="og:title" content={data.title} key="title" />   {/* 50-60 Characters */}
        <meta property="og:description"  content={data.desc} />         {/* 135-300 Characters */}
        <meta property="og:url" content={data.url} />                   {/* http://some.url/some/page */}
        <meta property="og:image" content={data.image} />               {/* http://some.url/images/image.jpg */}
    </Head>
  )
}