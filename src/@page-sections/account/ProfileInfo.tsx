'use client';
import ImageElm from '@/src/components/image/ImageElm';
import { userGlobalSession } from '@/src/context/appContext';
import { first, get, split } from 'lodash';
import { useRecoilValue } from 'recoil';

const ProfileInfo = () => {
  const userGlobal = useRecoilValue(userGlobalSession);

  return (
    <div className="surface-card p-4  border-round">
      <div className="font-medium text-3xl text-900 mb-3">
        Hi {first(split(get(userGlobal, 'user.email', 'Full Name'), '@'))}
      </div>
      <div className="text-500 mb-5">
        Egestas sed tempus urna et pharetra pharetra massa massa ultricies.
      </div>
      <div className="grid grid-nogutter border-top-1 surface-border pt-2">
        <div className="col-12 md:col-6 p-3">
          <div className="text-500 font-medium mb-2">Name</div>
          <div className="text-900">
            {first(split(get(userGlobal, 'user.email', 'Full Name'), '@'))}
          </div>
        </div>
        <div className="col-12 md:col-6 p-3">
          <div className="text-500 font-medium mb-2">Email</div>
          <div className="text-900">
            {get(userGlobal, 'user.email', 'Full Name')}
          </div>
        </div>
        <div className="col-12 md:col-6 p-3">
          <div className="text-500 font-medium mb-2">Applied Position</div>
          <div className="text-900">Front-End Developer</div>
        </div>
        <div className="col-12 md:col-6 p-3">
          <div className="text-500 font-medium mb-2">Salary Expectation</div>
          <div className="text-900">$150,000</div>
        </div>
        <div className="col-12 p-3">
          <div className="text-500 font-medium mb-2">Bio</div>
          <div className="text-900 line-height-3">
            Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt
            vitae. Commodo odio aenean sed adipiscing diam donec adipiscing
            tristique. Eget felis eget nunc lobortis mattis aliquam faucibus
            purus in.
          </div>
        </div>
        <div className="col-12 p-1">
          <div className="text-500 font-medium mb-3">Files</div>
          <div className="flex grid urface-ground md:align-items-center md:justify-content-between border-top-1 surface-border ">
            <div className="col-12 md:col-4 p-3">
              <div
                className="shadow-2 surface-card p-3"
                style={{ borderRadius: '12px' }}
              >
                <div className="flex align-items-center justify-content-between">
                  <div>
                    <span className="text-3xl text-900 font-bold">20k</span>
                    <p className="mt-1 mb-0 text-600 text-xl">
                      Current Purchased
                    </p>
                  </div>
                  <div>
                    <ImageElm src="/assets/images/illustration/stats-illustration-1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-4 p-3">
              <div
                className="shadow-2 surface-card p-3"
                style={{ borderRadius: '12px' }}
              >
                <div className="flex align-items-center justify-content-between">
                  <div>
                    <span className="text-3xl text-900 font-bold">24K</span>
                    <p className="mt-1 mb-0 text-600 text-xl">
                      Payments Processed
                    </p>
                  </div>
                  <div>
                    <ImageElm
                      src="/assets/images/illustration/stats-illustration-5.svg"
                      style={{ height: '60px', width: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-4 p-3">
              <div
                className="shadow-2 surface-card p-3"
                style={{ borderRadius: '12px' }}
              >
                <div className="flex align-items-center justify-content-between">
                  <div>
                    <span className="text-3xl text-900 font-bold">45</span>
                    <p className="mt-1 mb-0 text-600 text-xl">Monthly Orders</p>
                  </div>
                  <div>
                    <ImageElm
                      src="/assets/images/illustration/stats-illustration-6.svg"
                      style={{ height: '60px', width: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
