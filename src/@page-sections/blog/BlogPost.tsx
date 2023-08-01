/* eslint-disable @next/next/no-img-element */
import ItemBlogCmp from './ItemBlogCmp';

const BlogArticles = async ({ data }: { data: Promise<any> }) => {
  const { data: dataSet } = (await data) as any;

  console.log('BlogArticles ***', dataSet);

  return (
    <div className=" px-4 py-4 ">
      <div className="font-bold text-5xl text-900 mb-5 text-center">
        Featured Articles
      </div>
      <ItemBlogCmp dataSet={dataSet} />
    </div>
  );
};

export default BlogArticles;
