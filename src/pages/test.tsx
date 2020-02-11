import * as React from 'react';
import { observer } from 'mobx-react';
import { Clock } from '../design-system/clock';

export default observer(() => {
  return (
    <>
      <Clock />
    </>
  );
});
