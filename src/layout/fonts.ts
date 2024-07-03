import localFont from 'next/font/local';

export const fontCorben = localFont({
  variable: '--font-corben',
  src: [
    {
      path: '../fonts/corben/corben-regular.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/corben/corben-bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ]
})

export const fontGilroy = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../fonts/gilroy/gilroy-light.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/gilroy/gilroy-extrabold.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
})