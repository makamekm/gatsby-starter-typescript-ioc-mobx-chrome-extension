import * as React from 'react';
import { observer } from 'mobx-react';
import { Clock } from '../design-system/clock';

export default observer(() => {
  return (
    <>
      <Clock />
      <style global jsx>{`
        .master {
          position: absolute;
          overflow: hidden;
          width: 100%;
          min-height: 100%;
        }

        input {
          font: inherit;
          border: inherit;
          padding: inherit;
          background-color: inherit;
          color: inherit;
        }

        input:focus {
          outline: none;
        }

        .outer-div {
          position: relative;
          display: flex;
          width: 100%;
          pointer-events: none;
        }

        .inner-div {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
        }

        .centerer {
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
        }

        .maxer {
          align-items: flex-end;
          position: absolute;
          bottom: 0;
        }

        .vector svg {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      `}</style>
    </>
  );
});
