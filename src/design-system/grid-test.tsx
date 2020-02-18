import * as React from 'react';
import { observer } from 'mobx-react';
import { GridTestGenerated } from './grid-test.generated';

export const GridTest = observer(props => {
  return <GridTestGenerated {...props} />;
});
