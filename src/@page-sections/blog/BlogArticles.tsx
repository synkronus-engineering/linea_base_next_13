/* eslint-disable @next/next/no-img-element */
import { map } from 'lodash';
import Link from 'next/link';

/**
 * TODO: fetch blog list from DB
 * - Pagination at landing for blogs when user hits mobile view
 * - Inlcude thumbs & likes by post
 * - increase views
 * - Comments & replies
 */

const BlogArticles = () => {
  const itemsArticle = [
    {
      id: 1,
      category: 'Crime',
      title: 'Fugitive flamingo spotted in Florida',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      srcImg: '/assets/blog/images/blog-1.jpeg',
      srcAuthor: '/assets/blog/avatar/avatar-f-1.png',
      authorName: 'Anna Lane',
      datePrinted: 'Apr 5, 2021',
    },
    {
      id: 2,
      category: 'Wildlife',
      title: 'Journey to the Ends of the Earth',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      srcImg: '/assets/blog/images/blog-2.jpeg',
      srcAuthor: '/assets/blog/avatar/avatar-f-2.png',
      authorName: 'Arlene McCoy',
      datePrinted: 'Apr 6, 2021',
    },
    {
      id: 3,
      category: 'Marine',
      title: 'Journey to the Ends of the Earth',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      srcImg: '/assets/blog/images/blog-3.jpeg',
      srcAuthor: '/assets/blog/avatar/avatar-f-3.png',
      authorName: 'Diane Miles',
      datePrinted: 'Apr 9, 2021',
    },
  ];

  return (
    <div className=" px-4 py-4 ">
      <div className="font-bold text-5xl text-900 mb-5 text-center">
        Featured Articles
      </div>
      <div className="grid nogutter">
        {map(itemsArticle, (item) => {
          return (
            <div className="col-12 md:col-4 ">
              <Link href={`/blog/${item.id}`}>
                <div
                  className="shadow-2 border-round h-full surface-card"
                  key={item.id}
                >
                  <img
                    src={item.srcImg}
                    alt="blog-1"
                    className="block w-full border-round-top"
                  />

                  <div className="p-4">
                    <span className="block font-medium text-blue-600 mb-3">
                      {item.category}
                    </span>
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                      {item.title}
                    </div>
                    <div className="line-height-3 mb-3 text-700 text-align-start">
                      {item.content}
                    </div>
                    <div className="flex">
                      <div className="p-avatar p-component p-avatar-image p-avatar-circle">
                        <img src={item.srcAuthor} alt="avatar" />
                      </div>
                      <div className="ml-2">
                        <div className="text-sm font-bold text-900 mb-1">
                          {item.authorName}
                        </div>
                        <div className="text-sm flex align-items-center text-700">
                          <i className="pi pi-calendar mr-1 text-sm"></i>
                          <span>{item.datePrinted}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogArticles;
