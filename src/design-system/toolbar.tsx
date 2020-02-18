import * as React from 'react';
import { observer } from 'mobx-react';
import { ToolbarGenerated } from './toolbar.generated';

export const Toolbar = observer(props => {
  return <ToolbarGenerated {...props} />;
});
