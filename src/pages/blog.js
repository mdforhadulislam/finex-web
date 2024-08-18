import BlogBodySection from "@/components/Blog/BlogBodySection";
import BlogHeaderSliderSection from "@/components/Blog/BlogHeaderSliderSection";
import { ROOT_API_V1 } from "@/data/ApiMethod";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
  try {
    // Fetch data from the external API
    const res = await fetch(`${ROOT_API_V1}/blog`); // Use the full URL
    if (!res.status) {
      throw new Error("Failed to fetch blog data");
    }

    const { data } = await res.json();

    // Pass data to the page via props
    return { props: { data: data.reverse() } };
  } catch (error) {
    // Handle errors, you might want to return an empty array or some error message
    return { props: { data: [] } };
  }
}

const Blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Finex - Blog</title>
        {data.map((sBlog) => (
          <meta key={sBlog._id} title={sBlog.title} content={sBlog.details} />
        ))}
      </Head>
      <BlogHeaderSliderSection />
      <BlogBodySection blogData={data} />
    </>
  );
};

export default Blog;
