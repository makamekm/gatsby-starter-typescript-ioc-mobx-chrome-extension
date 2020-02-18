import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserContentGenerated } from './browser-content.generated';

export const BrowserContent = observer(props => {
  return <BrowserContentGenerated {...props} />;
});
