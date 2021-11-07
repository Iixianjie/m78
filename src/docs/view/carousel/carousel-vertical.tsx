import React from 'react';
import { Carousel } from 'm78/carousel';

import img1 from '@/mock/img/3.png';
import img2 from '@/mock/img/6.png';
import img3 from '@/mock/img/10.png';

const Demo = () => (
  <div>
    <Carousel wheel height={590} width={320} vertical>
      <img src={img1} alt="" style={{ width: '100%', height: 590, objectFit: 'cover' }} />
      <img src={img2} alt="" style={{ width: '100%', height: 590, objectFit: 'cover' }} />
      <img src={img3} alt="" style={{ width: '100%', height: 590, objectFit: 'cover' }} />
    </Carousel>
  </div>
);

export default Demo;
