import React from 'react';
import Button from '@lxjx/fr/button';
import '@lxjx/fr/button/style';

const ButtonDemoColor = () => (
  <div>
    <Button link>link</Button>
    <Button color="red" link>
      link
    </Button>
    <Button color="green" link disabled>
      link
    </Button>
    <Button color="blue" link href="/">
      link↗
    </Button>
    <Button color="yellow" link>
      link
    </Button>
  </div>
);

export default ButtonDemoColor;
