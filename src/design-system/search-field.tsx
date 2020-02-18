import * as React from 'react';
import { observer } from 'mobx-react';
import { SearchFieldGenerated } from './search-field.generated';

export const SearchField = observer(props => {
  return <SearchFieldGenerated {...props} />;
});
