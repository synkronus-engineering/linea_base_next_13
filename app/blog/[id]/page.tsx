import ArticleComments from '@/src/@page-sections/blog/ArticleComments';
import ArticlesRecentlyPosted from '@/src/@page-sections/blog/ArticlesRecentlyPosted';
import {
  AuthorBlogHeader,
  BlogContentBody,
} from '@/src/@page-sections/blog/BlogDetailCmp';
import BtnThumbsUp from '@/src/@page-sections/blog/BtnThumbsUp';
import PostFormCmp from '@/src/@page-sections/blog/PostFormCmp';
import { supabaseClient } from '@/src/lib/supabase';
import {
  fetchBlogListSrvrFn,
  handleArticleLikes,
  handleArticleViews,
  handleFormServerAction,
} from '../blog_actions';

async function fetchData(id: any) {
  return supabaseClient()
    .from('blog')
    .select(
      '*, article_comments(*, user_info:profiles(*)).order(id, { ascending: false })'
    )
    .eq('id', id)
    .maybeSingle();
}

const Page = async ({ params }: { params: any }) => {
  const { data: blogItem } = (await fetchData(params?.id)) as any;

  return (
    <div className="card  px-3 md:px-6 py-4 md:py-8 md:mx-8">
      <div className="flex justify-content-between flex-column-reverse md:flex-row align-items-center">
        <AuthorBlogHeader
          blogItem={blogItem}
          handleArticleViews={handleArticleViews}
        />
      </div>
      <BlogContentBody blogItem={blogItem} />
      <BtnThumbsUp
        blogItem={blogItem}
        handleArticleLikes={handleArticleLikes}
      />
      <div className="mb-5">
        <ArticlesRecentlyPosted
          blogItem={blogItem}
          fetchBlogListSrvrFn={fetchBlogListSrvrFn}
        />
      </div>
      <div className="my-4 mx-0 md:mx-8">
        <PostFormCmp
          blogItem={blogItem}
          handleFormServerAction={handleFormServerAction}
        />
      </div>
      <ArticleComments
        blogItem={blogItem}
        handleFormServerAction={handleFormServerAction}
      />
    </div>
  );
};

export default Page;
