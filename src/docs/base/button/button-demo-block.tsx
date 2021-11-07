import React from 'react';
import { Button } from 'm78/button';
import 'm78/button/style';

const ButtonDemoColor = () => (
  <div>
    <Button color="red" block size="small">
      block
    </Button>
    <Button color="green" block>
      block
    </Button>
    <Button color="blue" block size="large">
      block
    </Button>
  </div>
);

export default ButtonDemoColor;
