import React from 'react';
import ImagePreview from '@lxjx/fr/lib/image-preview';
import '@lxjx/fr/lib/viewer/style';

import Button from '@lxjx/fr/lib/button';
import '@lxjx/fr/lib/button/style';

import img1 from '@/mock/img/1.jpg';
import img2 from '@/mock/img/2.jpg';
import img3 from '@/mock/img/3.jpg';
import img4 from '@/mock/img/4.jpg';
import img5 from '@/mock/img/5.jpg';
import img6 from '@/mock/img/6.jpg';
import img7 from '@/mock/img/7.jpg';

const option = [
  {
    img: img1,
    desc: '图片1图片1图片1图片1图片1图片1',
  },
  {
    img: img2,
  },
  {
    img: img3,
    desc:
      '图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3',
  },
  {
    img: img4,
  },
  {
    img: img5,
    desc: '图片1图片1图片1图片1图片1图片1',
  },
  {
    img: img6,
  },
  {
    img: img7,
    desc:
      '图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3',
  },
];

const Demo = () => (
  <div>
    <Button
      onClick={() => {
        const [ref, id] = ImagePreview.api({
          images: option,
          page: 5,
        });

        console.log(ref, id);
      }}
    >
      toggle
    </Button>
  </div>
);

export default Demo;
