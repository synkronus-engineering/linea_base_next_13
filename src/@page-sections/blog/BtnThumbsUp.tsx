'use client';
import { toggleSnackBar } from '@/src/components/message/SnackBar';
import { profileInfoSlctr } from '@/src/context/appContext';
import { indexOf, isNil } from 'lodash';
import { classNames } from 'primereact/utils';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function BtnThumbsUp({
  blogItem,
  handleArticleLikes,
}: {
  blogItem: any;
  handleArticleLikes: any;
}) {
  const [btnUp, setBtnUp] = useState(false);
  const userGlobal = useRecoilValue(profileInfoSlctr);
  const [btnUpFill, setBtnUpFill] = useState(
    indexOf(blogItem?.likes, userGlobal?.id) > -1
  );
  const setSnackbarState = useSetRecoilState(toggleSnackBar);

  const handleClick = () => {
    if (isNil(userGlobal)) {
      setSnackbarState({
        show: true,
        msg: 'Requiere login user',
        title: 'Required',
        type: 'warn',
      });
      return;
    }
    setBtnUp(true);
    setTimeout(() => {
      setBtnUp(false);
      handleArticleLikes(!btnUpFill, userGlobal?.id, blogItem?.id);
      setBtnUpFill((prev) => !prev);
    }, 500);
  };

  return (
    <div className="flex flex-column sm:flex-row my-8 w-full gap-3">
      <button className="p-button p-component  p-button-secondary">
        <span className="p-button-icon p-button-icon-left pi pi-twitter"></span>
        Twitter
      </button>
      <button className="p-button p-component  p-button-secondary">
        <span className="p-button-icon p-button-icon-left pi pi-facebook"></span>
        Facebook
      </button>
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
    </div>
  );
}
