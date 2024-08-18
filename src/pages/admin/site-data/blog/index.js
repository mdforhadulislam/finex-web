import AdminDashBoardBlogCreateSection from "@/components/Admin/AdminDashBoardBlogCreateSection";
import AdminDashBoardBlogListSection from "@/components/Admin/AdminDashBoardBlogListSection";
import Head from "next/head";

const Blog = () => {
  return (
    <>
    <Head><title>Admin Site Blog</title></Head>
      <AdminDashBoardBlogCreateSection />
      <AdminDashBoardBlogListSection />
    </>
  );
};

export default Blog;
