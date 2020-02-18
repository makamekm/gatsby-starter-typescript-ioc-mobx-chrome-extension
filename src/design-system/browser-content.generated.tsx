import * as React from 'react';
import { observer } from 'mobx-react';
import { GridTest } from './grid-test';

export const BrowserContentGenerated: React.FC<{ children: any }> = observer(props => {
  const { children } = props;
  return (
    <>
      <div className="figma-1">
        <div id="146:77" className="figma-0">
          {!children && (
            <div id="96:32" className="figma-2">
              <div id="95:7" className="figma-3">
                <div className="figma-4">
                  <div id="96:2" className="figma-5">
                    <span key="end">Content Here</span>
                  </div>
                  <div id="96:26" className="figma-6">
                    <span key="end">Content Here</span>
                  </div>
                  <div id="96:27" className="figma-7">
                    <span key="end">Content Here</span>
                  </div>
                  <div id="96:28" className="figma-8">
                    <span key="end">Content Here</span>
                  </div>
                  <div id="96:29" className="figma-9">
                    <span key="end">Content Here</span>
                  </div>
                  <div id="96:30" className="figma-10">
                    <span key="end">Content Here</span>
                  </div>
                  <div id="96:31" className="figma-11">
                    <span key="end">Content Here</span>
                  </div>
                </div>
              </div>
              <div id="96:33" className="figma-12">
                <span key="end">Content Here</span>
              </div>
              <div id="151:4" className="figma-13">
                <GridTest {...props} nodeId="151:4" />
              </div>
            </div>
          )}
          {children}
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
          background-color: rgba(0, 0, 0, 0);
          overflow: auto;
        }
        .figma-1 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-2 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: -160px;
          min-height: 228px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-3 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: -53px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 212px;
          min-height: 16px;
          max-width: 100%;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-4 {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          margin-top: -10px;
          margin-left: -10px;
          margin-right: -10px;
          flex-wrap: wrap;
        }
        .figma-5 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 10px;
          width: 86px;
          min-width: 86px;
          margin-top: 10px;
          margin-bottom: 0px;
          min-height: 16px;
          margin-right: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-6 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-left: 10px;
          width: 86px;
          min-width: 86px;
          margin-top: 10px;
          margin-bottom: 0px;
          min-height: 16px;
          margin-right: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-7 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-left: 10px;
          width: 86px;
          min-width: 86px;
          margin-top: 10px;
          margin-bottom: 0px;
          min-height: 16px;
          margin-right: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-8 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 3;
          margin-left: 10px;
          width: 86px;
          min-width: 86px;
          margin-top: 10px;
          margin-bottom: 0px;
          min-height: 16px;
          margin-right: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-9 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 4;
          margin-left: 10px;
          width: 86px;
          min-width: 86px;
          margin-top: 10px;
          margin-bottom: 0px;
          min-height: 16px;
          margin-right: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-10 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 5;
          margin-left: 10px;
          width: 86px;
          min-width: 86px;
          margin-top: 10px;
          margin-bottom: 0px;
          min-height: 16px;
          margin-right: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-11 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 6;
          margin-left: 10px;
          width: 86px;
          min-width: 86px;
          margin-top: 10px;
          margin-bottom: 0px;
          min-height: 16px;
          margin-right: 10px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-12 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-left: 0px;
          width: 86px;
          min-width: 86px;
          margin-top: -202px;
          margin-bottom: 186px;
          min-height: 16px;
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 121.90476417541504%;
          letter-spacing: 0.28px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-13 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-left: 0px;
          width: 609px;
          min-width: 100%;
          margin-top: -176px;
          margin-bottom: 0px;
          min-height: 176px;
          background-color: rgba(255, 255, 255, 1);
          overflow: hidden;
        }
      `}</style>
    </>
  );
});
