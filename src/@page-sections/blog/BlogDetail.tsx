/* eslint-disable @next/next/no-img-element */
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
'use client';
import { classNames } from 'primereact/utils';
import { FC, useState } from 'react';

const BtnThumbsUp: FC = () => {
  const [btnUp, setBtnUp] = useState(false);
  const [btnUpFill, setBtnUpFill] = useState(false);

  const handleClick = () => {
    setBtnUp(true);
    setTimeout(() => {
      setBtnUp(false);
      setBtnUpFill((prev) => !prev);
    }, 500);
  };

  return (
    <span
      className={classNames(
        'p-button-icon p-button-icon-left pi md:ml-auto cursor-pointer',
        {
          'fadeoutup animation-duration-500 animation-iteration-1 ': btnUp,
          'pi-thumbs-up-fill': btnUpFill,
          'pi-thumbs-up': !btnUpFill,
        }
      )}
      style={{ fontSize: '2.5rem' }}
      onClick={handleClick}
    ></span>
  );
};

export default function BlogDetail() {
  const comments = [
    {
      image: '/assets/blog/comments/avatar-f-5@2x.png',
      name: 'Courtney Henry',
      date: '03 February 2022',
      description: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
    },
    {
      image: '/assets/blog/comments/avatar-f-2@2x.png',
      name: 'Esther Howard',
      date: '03 February 2022',
      description:
        'How likely are you to recommend our company to your friends and family ?',
    },
    {
      image: '/assets/blog/comments/avatar-f-3@2x.png',
      name: 'Darlene Robertson',
      date: '03 February 2022',
      description: 'Quo quia sit nihil nemo doloremque et.',
    },
    {
      image: '/assets/blog/comments/avatar-f-4@2x.png',
      name: 'Esther Howard',
      date: '03 February 2022',
      description:
        'How likely are you to recommend our company to your friends and family ?',
    },
  ];
  return (
    <div className="card  px-3 md:px-6 py-4 md:py-8 md:mx-8">
      <div className="flex justify-content-between flex-column-reverse md:flex-row align-items-center">
        <div>
          <div className="text-xl text-900 mb-4 mt-4 md:mt-0 text-center md:text-left font-semibold md:pr-4">
            How To Get Started Tutorial
          </div>
          <div className="flex flex-wrap justify-content-center md:justify-content-start gap-1">
            <span className="inline-flex align-items-center py-2 px-1 font-medium ">
              <i className="pi pi-clock text-primary mr-1"></i>
              <span className="text-900">2d ago</span>
            </span>
            <span className="inline-flex align-items-center py-2 px-1 font-medium ">
              <i className="pi pi-comments text-primary mr-1"></i>
              <span className="text-900">24</span>
            </span>
            <span className="inline-flex align-items-center py-2 px-1 font-medium ">
              <i className="pi pi-eye text-primary mr-1"></i>
              <span className="text-900">124</span>
            </span>
            <span className="inline-flex align-items-center py-2 px-1 font-medium ">
              <i className="pi pi-thumbs-up text-primary mr-1"></i>
              <span className="text-900">12</span>
            </span>
          </div>
        </div>
        <div className="flex flex-column align-items-center justify-content-center">
          <img
            className="w-4rem h-4rem"
            src={`/assets/blog/avatar/avatar-f-1.png`}
            alt="Avatar"
          />
          <span className="mt-3 font-bold text-900 text-center white-space-nowrap">
            Jane Cooper
          </span>
        </div>
      </div>
      <div className="text-center my-6">
        <img
          src={`/assets/blog/blogdetail.png`}
          alt="Image"
          className="w-full"
        />
      </div>
      <div className="text-2xl text-900 mb-4 font-semibold">
        Sodales massa, morbi convallis
      </div>
      <p className="line-height-3 text-lg mb-4">
        First, a disclaimer - the entire process of writing a blog post often
        takes more than a couple of hours, even if you can type eighty words per
        minute and your writing skills are sharp. From the seed of the idea to
        finally hitting “Publish,” you might spend several days or maybe even a
        week “writing” a blog post, but it&lsquo;s important to spend those
        vital hours planning your post and even thinking about Your Post(yes,
        thinking counts as working if you&lsquo;re a blogger) before you
        actually write it.
      </p>
      <p className="line-height-3 text-lg mb-4">
        There&lsquo;s an old maxim that states, “No fun for the writer, no fun
        for the reader.”No matter what industry you&lsquo;re working in, as a
        blogger, you should live and die by this statement.
      </p>
      <p className="line-height-3 text-lg mb-4">
        Before you do any of the following steps, be sure to pick a topic that
        actually interests you. Nothing - and I mean NOTHING- will kill a blog
        post more effectively than a lack of enthusiasm from the writer. You can
        tell when a writer is bored by their subject, and it&lsquo;s so
        cringe-worthy it&lsquo;s a little embarrassing.
      </p>
      <p className="line-height-3 text-lg mb-4">
        I can hear your objections already. “But Dan, I have to blog for a
        cardboard box manufacturing company.” I feel your pain, I really do.
        During the course of my career, I&lsquo;ve written content for dozens of
        clients in some less-than-thrilling industries (such as financial
        regulatory compliance and corporate housing), but the hallmark of a
        professional blogger is the ability to write well about any topic, no
        matter how dry it may be. Blogging is a lot easier, however, if you can
        muster at least a little enthusiasm for the topic at hand.
      </p>
      <div className="text-2xl text-900 mb-4 font-semibold">
        Commodo ultrices orci tempus et fermentum, pellentesque ultricies.
      </div>
      <ul className="text-xl p-0 my-0 ml-5">
        <li className="mb-3 line-height-3">
          Fermentum neque odio laoreet morbi sit. Venenatis in quam ut non.
        </li>
        <li className="mb-3 line-height-3">
          Enim in porta facilisi a vulputate fermentum, morbi. Consequat, id
          praesent tristique euismod pellentesque.
        </li>
        <li className="mb-3 line-height-3">
          Implements This is an external link
        </li>
        <li className="line-height-3">
          Scelerisque ultricies tincidunt lectus faucibus non morbi sed nibh
          varius. Quam a, habitasse egestaseleifend.
        </li>
      </ul>
      <div className="flex flex-column sm:flex-row my-8 w-full gap-3">
        <button className="p-button p-component  p-button-secondary">
          <span className="p-button-icon p-button-icon-left pi pi-twitter"></span>
          Twitter
        </button>
        <button className="p-button p-component  p-button-secondary">
          <span className="p-button-icon p-button-icon-left pi pi-facebook"></span>
          Facebook
        </button>
        <BtnThumbsUp />
      </div>

      <div className="mb-5">
        <div className="font-bold text-5xl text-900 mb-3">Recent Articles</div>
        <div className="grid nogutter">
          <div className="col-12 lg:col-4 p-4">
            <div className="border-top-3 border-blue-600"></div>
            <div className="text-blue-600 font-medium my-2">Animals</div>
            <div className="text-900 font-medium text-xl line-height-3 mb-4">
              Why Earth&lsquo;s most beloved creatures are headed toward
              extinction
            </div>
            <div className="font-sm text-700 line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex mt-4">
              <img
                src="/assets/blog/comments/avatar-f-6@2x.png"
                className="w-3rem h-3rem mr-3 flex-shrink-0"
                alt={'Image-01'}
              />
              <div className="ml-2">
                <div className="text-xs font-bold text-900 mb-1">
                  Anna Miles
                </div>
                <div className="text-xs flex align-items-center text-700">
                  <i className="pi pi-calendar mr-1 text-xs"></i>
                  <span>Apr 9, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-4 p-4">
            <div className="border-top-3 border-pink-600"></div>
            <div className="text-pink-600 font-medium my-2">Oxygen</div>
            <div className="text-900 font-medium text-xl line-height-3 mb-4">
              Only one-third of tropical rainforests remain intact, study says{' '}
            </div>
            <div className="font-sm text-700 line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex mt-4">
              <img
                src="/assets/blog/comments/avatar-f-7@2x.png"
                className="w-3rem h-3rem mr-3 flex-shrink-0"
                alt={'Image-012'}
              />
              <div className="ml-2">
                <div className="text-xs font-bold text-900 mb-1">
                  Arlene Miles
                </div>
                <div className="text-xs flex align-items-center text-700">
                  <i className="pi pi-calendar mr-1 text-xs"></i>
                  <span>Apr 9, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-4 p-4">
            <div className="border-top-3 border-orange-600"></div>
            <div className="text-orange-600 font-medium my-2">Nature</div>
            <div className="text-900 font-medium text-xl line-height-3 mb-4">
              Does planting a tree really offset your carbon footprint?
            </div>
            <div className="font-sm text-700 line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex mt-4">
              <img
                src="/assets/blog/comments/avatar-f-8@2x.png"
                className="w-3rem h-3rem mr-3 flex-shrink-0"
                alt={'Image-013'}
              />
              <div className="ml-2">
                <div className="text-xs font-bold text-900 mb-1">
                  Diane Miles
                </div>
                <div className="text-xs flex align-items-center text-700">
                  <i className="pi pi-calendar mr-1 text-xs"></i>
                  <span>Apr 9, 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 mx-0 md:mx-8">
        <div className="text-xl text-900 mb-4 font-bold mt-8">
          Post a Comment
        </div>
        <div className="mb-3 p-fluid">
          <textarea
            className="p-inputtextarea p-inputtext p-component"
            placeholder="Your comment"
          ></textarea>
        </div>
        <div className="flex justify-content-end">
          <button className="p-button p-component">
            <span className="p-button-label p-c">Post Comment</span>
          </button>
        </div>
      </div>

      <ul className="list-none p-0 mx-0 md:mx-8">
        {comments.map((comment, i) => (
          <li
            key={i}
            className="flex p-3 mb-3 border-1 surface-border border-round"
          >
            <img
              src={comment?.image}
              className="w-3rem h-3rem mr-3 flex-shrink-0"
              alt={'Image' + i}
            />
            <div className=" w-full">
              <div className="flex flex-row justify-content-between w-full">
                <span className="font-semibold text-900">{comment?.name}</span>
                <span
                  className="p-button-icon p-button-icon-left pi pi-ellipsis-v md:ml-auto cursor-pointer"
                  style={{ fontSize: '1rem' }}
                ></span>
              </div>
              <p className="font-semibold text-600 m-0 text-sm">
                {comment?.date}
              </p>
              <p className="line-height-3 mb-0 my-3">{comment?.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* 

      <div className="mb-3 p-fluid">
        <span className="p-input-icon-left">
          <i className="pi pi-user"></i>
          <InputText type="text" placeholder="Name" />
        </span>
      </div>
      <div className="mb-3 p-fluid">
        <span className="p-input-icon-left">
          <i className="pi pi-envelope"></i>
          <InputText type="text" placeholder="Email" />
        </span>
      </div>
      <div className="mb-3 p-fluid">
        <InputTextarea rows={6} placeholder="Your comment"></InputTextarea>
      </div>
      <div className="flex justify-content-end">
        <Button label="Post Comment"></Button>
      </div> */}
    </div>
  );
}
