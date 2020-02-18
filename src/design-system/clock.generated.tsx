import * as React from 'react';
import { observer } from 'mobx-react';
import { TabBar } from './tab-bar';
import { Toolbar } from './toolbar';
import { BrowserContent } from './browser-content';

export const ClockGenerated: React.FC<{}> = observer(props => {
  return (
    <>
      <div id="15:2" className="figma-0">
        <div className="figma-4">
          <div id="15:0" className="figma-3">
            <div id="14:138" className="figma-6"></div>
            <div id="146:1" className="figma-9">
              <TabBar {...props} nodeId="146:1" />
            </div>
            <div id="146:33" className="figma-12">
              <Toolbar {...props} nodeId="146:33" />
            </div>
            <div className="figma-16">
              <div id="72:1" className="figma-15">
                <div className="figma-19">
                  <div id="14:139" className="figma-18"></div>
                </div>
                <div className="figma-22">
                  <div id="146:78" className="figma-21">
                    <BrowserContent {...props} nodeId="146:78" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
        .vector :global(svg) {
          width: 100%;
          height: 100%;
          position: absolute;
        }
        .figma-0 {
          box-sizing: border-box;
          pointer-events: auto;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0);
          overflow: hidden;
        }
        .figma-3 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(0, 0, 0, 0);
        }
        .figma-4 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-6 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 127px;
          min-height: 76px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 1px rgba(75, 77, 82, 0.47999998927116394);
          border-radius: 4px 4px 0px 0px;
        }
        .figma-9 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 3;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: -203px;
          margin-bottom: 163px;
          min-height: 40px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-12 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-left: 0.00006103515625px;
          margin-right: -0.00006103515625px;
          flex-grow: 1;
          margin-top: -163px;
          margin-bottom: 127px;
          min-height: 36px;
          background-color: rgba(255, 255, 255, 1);
        }
        .figma-15 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 76px;
          margin-bottom: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-16 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-18 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 0px;
          background-image: url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/efe9/8099/a0aa97c1aa64e286bc82e633cc9aed22);
          background-size: cover;
        }
        .figma-19 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-21 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-22 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      `}</style>
    </>
  );
});
