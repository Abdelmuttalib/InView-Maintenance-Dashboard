import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { dashboardLinks } from '@/components/layout/SideBar';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='isolate'>
      <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]'>
        <svg
          className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
          viewBox='0 0 1155 678'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
            fill-opacity='.3'
            d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
          />
          <defs>
            <linearGradient
              id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
              x1='1155.49'
              x2='-78.208'
              y1='.177'
              y2='474.645'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#9089FC' />
              <stop offset='1' stop-color='#4040F2' />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
              <h1 className='h2 sm:display-sm lg:display-lg bg-gradient-to-br from-primary-400 to-primary-800 bg-clip-text text-transparent'>
                InView
              </h1>
              <p className='h2 bg-gradient-to-br from-gray-800 to-primary-800 bg-clip-text text-transparent'>
                {' '}
                Maintenance Dashboard
              </p>

              <div className='3xl:grid-cols-3 my-8 grid grid-cols-1 gap-3 md:grid-cols-2'>
                {dashboardLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='group inline-flex items-center justify-between rounded-lg border-2  bg-gradient-to-br from-primary-50 to-primary-100 px-5 py-6 text-gray-700 hover:bg-primary-100 hover:to-primary-200'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <h2 className='h5 first-letter:uppercase'>
                      {t(`pages.dashboard.${link.text}.title`)}
                    </h2>
                    <ArrowRightIcon className='w-5' />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]'>
            <svg
              className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[32.375rem]'
              viewBox='0 0 1155 678'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                fill-opacity='.3'
                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
              />
              <defs>
                <linearGradient
                  id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                  x1='1155.49'
                  x2='-78.208'
                  y1='.177'
                  y2='474.645'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#9089FC' />
                  <stop offset='1' stop-color='#4040F2' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
