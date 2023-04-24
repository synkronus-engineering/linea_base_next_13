'use client';
import { useResizeListener } from 'primereact/hooks';
import { useEffect } from 'react';
import { atom, useSetRecoilState } from 'recoil';

const isMobileView = atom({
  key: 'isMobileViewAtom',
  default: { width: 0, height: 0, isMobile: false },
});

const MobileViewListener = () => {
  const setEventData = useSetRecoilState(isMobileView);

  const [bindWindowResizeListener, unbindWindowResizeListener] =
    useResizeListener({
      listener: (event: any) => {
        setEventData({
          width: event?.currentTarget.innerWidth,
          height: event?.currentTarget.innerHeight,
          isMobile: event?.currentTarget.innerWidth < 991,
        });
      },
    });

  useEffect(() => {
    setEventData({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 991,
    });
  }, []);

  useEffect(() => {
    bindWindowResizeListener();

    return () => {
      unbindWindowResizeListener();
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);

  return null;
};

export { isMobileView, MobileViewListener };
