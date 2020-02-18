import * as React from 'react';
import { observer } from 'mobx-react';
import { ClockGenerated } from './clock.generated';

export const Clock = observer(props => {
  return <ClockGenerated {...props} />;
});
