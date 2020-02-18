import * as React from 'react';
import { observer } from 'mobx-react';
import { Clock15D2 } from './clock.generated';

export const Clock = observer(props => {
  return <Clock15D2 {...props} />;
});
