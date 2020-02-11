import * as React from 'react';
import { observer } from 'mobx-react';

import { Clock } from './clock';

export const MasterClock = (props) => {
  return <div className="master">
    <Clock {...props} nodeId="15:2" />
    <style jsx>{`
      .master {
        background-color: "rgba(255, 255, 255, 0)";
      }
    `}</style>
  </div>
}

export const getComponentFromId = (id) => {
  if (id === "15:2") return Clock15D2;
  return null;
}

const Clock15D2 = observer(() => {
  return (<>
    <div>
      <div className="outer-div" style={{}}>
        <div
          id="15:0"
          style={{"marginLeft":0,"width":1016,"minWidth":1016,"height":null,"marginTop":0,"marginBottom":0,"minHeight":77,"backgroundColor":"rgba(0, 0, 0, 0)"}}
          className="inner-div"
        >
          <div>
            <div className="outer-div centerer" style={{}}>
              <div
                id="14:140"
                style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":40,"marginBottom":1,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                className="inner-div"
              >
                <div>
                  <div className="outer-div" style={{"zIndex":4}}>
                    <div
                      id="14:164"
                      style={{"marginLeft":72,"width":28,"minWidth":28,"height":null,"marginTop":4,"marginBottom":4,"minHeight":28}}
                      className="inner-div"
                    >
                      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="28" fill="white"/>
<path d="M14 19.5C16.6961 19.5 18.9391 17.5601 19.4093 15H20.9291C20.4439 18.3923 17.5265 21 14 21C10.134 21 7 17.866 7 14C7 10.134 10.134 7 14 7C16.1877 7 18.141 8.00354 19.4246 9.57541L21 8V13H16L18.357 10.643C17.3513 9.3396 15.7737 8.5 14 8.5C10.9624 8.5 8.5 10.9624 8.5 14C8.5 17.0376 10.9624 19.5 14 19.5Z" fill="#4B4D52"/>
</svg>
`}} />
                    </div>
                  </div>
                  <div className="outer-div" style={{"zIndex":5}}>
                    <div
                      id="14:167"
                      style={{"marginLeft":40,"width":28,"minWidth":28,"height":null,"marginTop":-32,"marginBottom":4,"minHeight":28}}
                      className="inner-div"
                    >
                      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="28" fill="white"/>
<path d="M8 13.75H20M20 13.75L14.5 8M20 13.75L14.5 19" stroke="#A9AEB8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
                    </div>
                  </div>
                  <div className="outer-div" style={{"zIndex":6}}>
                    <div
                      id="14:170"
                      style={{"marginLeft":8,"width":28,"minWidth":28,"height":null,"marginTop":-32,"marginBottom":4,"minHeight":28}}
                      className="inner-div"
                    >
                      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="28" fill="white"/>
<path d="M20 13.75H8M8 13.75L13.5 8M8 13.75L13.5 19" stroke="#4B4D52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
                    </div>
                  </div>
                  <div className="outer-div" style={{"zIndex":2}}>
                    <div
                      id="14:148"
                      style={{"marginLeft":952,"width":20,"minWidth":20,"height":null,"marginTop":-28,"marginBottom":8,"minHeight":20}}
                      className="inner-div"
                    >
                      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="10" cy="10" r="10" fill="url(#pattern0)"/>
<circle cx="10" cy="10" r="10" fill="url(#pattern1)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="translate(-0.195652) scale(0.00543478)"/>
</pattern>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image1" transform="scale(0.00390625)"/>
</pattern>
<image id="image0" width="256" height="184" xlink:href="data:image/jpeg;base64,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"/>
<image id="image1" width="256" height="256" xlink:href="data:image/jpeg;base64,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"/>
</defs>
</svg>
`}} />
                    </div>
                  </div>
                  <div className="outer-div centerer" style={{}}>
                    <div
                      id="14:141"
                      style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 1px 0px rgba(239, 241, 244, 1)"}}
                      className="inner-div"
                    >
                      <div>
                      </div>
                    </div>
                  </div>
                  <div className="outer-div centerer" style={{"zIndex":1,"justifyContent":"flex-end","alignItems":"center"}}>
                    <div
                      id="14:142"
                      style={{"marginRight":8,"width":28,"minWidth":28,"height":28,"marginTop":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                      className="inner-div"
                    >
                      <div>
                        <div className="outer-div" style={{}}>
                          <div
                            id="14:144"
                            style={{"marginLeft":12.5,"width":3,"minWidth":3,"height":null,"marginTop":7.5,"marginBottom":7.5,"minHeight":13}}
                            className="inner-div"
                          >
                            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5ZM3 6.5C3 7.32843 2.32843 8 1.5 8C0.671573 8 0 7.32843 0 6.5C0 5.67157 0.671573 5 1.5 5C2.32843 5 3 5.67157 3 6.5ZM1.5 13C2.32843 13 3 12.3284 3 11.5C3 10.6716 2.32843 10 1.5 10C0.671573 10 0 10.6716 0 11.5C0 12.3284 0.671573 13 1.5 13Z" fill="#4B4D52"/>
</svg>
`}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="outer-div centerer" style={{"zIndex":3}}>
                    <div
                      id="14:150"
                      style={{"marginLeft":112,"marginRight":80,"flexGrow":1,"marginTop":4,"marginBottom":4,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                      className="inner-div"
                    >
                      <div>
                        <div className="outer-div centerer" style={{}}>
                          <div
                            id="14:151"
                            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(239, 241, 244, 1)","borderRadius":"24px 24px 24px 24px"}}
                            className="inner-div"
                          >
                            <div>
                            </div>
                          </div>
                        </div>
                        <div className="outer-div centerer" style={{"zIndex":1,"justifyContent":"flex-end"}}>
                          <div
                            id="14:153"
                            style={{"marginRight":0,"width":36,"minWidth":36,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                            className="inner-div"
                          >
                            <div>
                              <div className="outer-div" style={{}}>
                                <div
                                  id="14:155"
                                  style={{"marginLeft":10,"width":16,"minWidth":16,"height":null,"marginTop":6,"marginBottom":6,"minHeight":16}}
                                  className="inner-div"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.629L9.311 5.69406L9.42302 6.04138L9.78796 6.04059L14.0592 6.03125L10.5982 8.53426L10.3025 8.74812L10.416 9.09496L11.7448 13.1543L8.29478 10.6361L8 10.421L7.70522 10.6361L4.25522 13.1543L5.58398 9.09496L5.69751 8.74812L5.4018 8.53426L1.94081 6.03125L6.21204 6.04059L6.57698 6.04138L6.689 5.69406L8 1.629Z" stroke="#4B4D52"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="outer-div centerer" style={{"zIndex":2,"alignItems":"center"}}>
                          <div
                            id="14:157"
                            style={{"marginLeft":36,"marginRight":42,"flexGrow":1,"height":16,"marginTop":0,"color":"rgba(75, 77, 82, 1)","fontSize":14,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"121.90476417541504%","letterSpacing":"0.28px"}}
                            className="inner-div"
                          >
                            <div>
                              <span style={{}} key="6">chrome</span>
                              <span style={{"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end">://newtab</span>
                            </div>
                          </div>
                        </div>
                        <div className="outer-div centerer" style={{"zIndex":3}}>
                          <div
                            id="14:158"
                            style={{"marginLeft":0,"width":36,"minWidth":36,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="inner-div"
                          >
                            <div>
                              <div className="outer-div centerer" style={{"alignItems":"center"}}>
                                <div
                                  id="14:160"
                                  style={{"marginLeft":10,"width":16,"minWidth":16,"height":16,"marginTop":0,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                                  className="inner-div"
                                >
                                  <div>
                                    <div className="outer-div" style={{"zIndex":1}}>
                                      <div
                                        id="14:163"
                                        style={{"marginLeft":6,"width":4,"minWidth":4,"height":null,"marginTop":3,"marginBottom":10,"minHeight":3,"border":"1px solid rgba(75, 77, 82, 1)","borderRadius":"2px 2px 0px 0px"}}
                                        className="inner-div"
                                      >
                                        <div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="outer-div" style={{}}>
                                      <div
                                        id="14:162"
                                        style={{"marginLeft":4,"width":8,"minWidth":8,"height":null,"marginTop":-10,"marginBottom":3,"minHeight":7,"backgroundColor":"rgba(75, 77, 82, 1)","borderRadius":"2px 2px 2px 2px"}}
                                        className="inner-div"
                                      >
                                        <div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-div centerer" style={{"zIndex":1}}>
              <div
                id="14:173"
                style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":37,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                className="inner-div"
              >
                <div>
                  <div className="outer-div" style={{"zIndex":2}}>
                    <div
                      id="14:178"
                      style={{"marginLeft":80,"width":39,"minWidth":39,"height":null,"marginTop":8,"marginBottom":0,"minHeight":32,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                      className="inner-div"
                    >
                      <div>
                        <div className="outer-div centerer" style={{"alignItems":"center"}}>
                          <div
                            id="14:180"
                            style={{"marginLeft":12,"width":16,"minWidth":16,"height":16,"marginTop":0,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="inner-div"
                          >
                            <div>
                              <div className="outer-div centerer" style={{}}>
                                <div
                                  id="14:181"
                                  style={{"width":"87.5%","marginLeft":"6.25%","height":"87.5%","top":"6.25%"}}
                                  className="inner-div"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i)">
<path d="M1.75 5.58333L7 1.5L12.25 5.58333V12C12.25 12.3094 12.1271 12.6062 11.9083 12.825C11.6895 13.0438 11.3928 13.1667 11.0833 13.1667H2.91667C2.60725 13.1667 2.3105 13.0438 2.09171 12.825C1.87292 12.6062 1.75 12.3094 1.75 12V5.58333Z" fill="#7BA8F6"/>
</g>
<path d="M1.75 5.58333L7 1.5L12.25 5.58333V12C12.25 12.3094 12.1271 12.6062 11.9083 12.825C11.6895 13.0438 11.3928 13.1667 11.0833 13.1667H2.91667C2.60725 13.1667 2.3105 13.0438 2.09171 12.825C1.87292 12.6062 1.75 12.3094 1.75 12V5.58333Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 12.3333V7.33334H8V12.3333" fill="white"/>
<path d="M6 12.3333V7.33334H8V12.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#filter1_i)">
<path d="M1.75 5.58333L7 1.5L12.25 5.58333V12C12.25 12.3094 12.1271 12.6062 11.9083 12.825C11.6895 13.0438 11.3928 13.1667 11.0833 13.1667H2.91667C2.60725 13.1667 2.3105 13.0438 2.09171 12.825C1.87292 12.6062 1.75 12.3094 1.75 12V5.58333Z" stroke="#4284F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_i" x="0.25" y="0" width="13.5" height="14.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="3"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter1_i" x="0.75" y="0.5" width="12.5" height="13.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.5" dy="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
</defs>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="outer-div" style={{"zIndex":3}}>
                    <div
                      id="14:187"
                      style={{"marginLeft":120,"width":240,"minWidth":240,"height":null,"marginTop":-32,"marginBottom":0,"minHeight":32,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                      className="inner-div"
                    >
                      <div>
                        <div className="outer-div centerer" style={{}}>
                          <div
                            id="14:188"
                            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"8px 8px 0px 0px"}}
                            className="inner-div"
                          >
                            <div>
                            </div>
                          </div>
                        </div>
                        <div className="outer-div centerer" style={{"zIndex":1,"alignItems":"center"}}>
                          <div
                            id="14:189"
                            style={{"marginLeft":12,"width":16,"minWidth":16,"height":16,"marginTop":0,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="inner-div"
                          >
                            <div>
                              <div className="outer-div centerer" style={{}}>
                                <div
                                  id="14:190"
                                  style={{"width":"87.50000596046448%","marginLeft":"6.25%","height":"87.50000596046448%","top":"6.25%"}}
                                  className="inner-div"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i)">
<path d="M12.25 9.08332L7 13.1667L1.75 9.08332L1.75 2.66665C1.75 2.35724 1.87292 2.06049 2.09171 1.8417C2.3105 1.6229 2.60725 1.49999 2.91667 1.49999L11.0833 1.49999C11.3928 1.49999 11.6895 1.62291 11.9083 1.8417C12.1271 2.06049 12.25 2.35724 12.25 2.66666L12.25 9.08332Z" fill="#7BA8F6"/>
</g>
<path d="M12.25 9.08332L7 13.1667L1.75 9.08332L1.75 2.66665C1.75 2.35724 1.87292 2.06049 2.09171 1.8417C2.3105 1.6229 2.60725 1.49999 2.91667 1.49999L11.0833 1.49999C11.3928 1.49999 11.6895 1.62291 11.9083 1.8417C12.1271 2.06049 12.25 2.35724 12.25 2.66666L12.25 9.08332Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#filter1_i)">
<path d="M12.25 9.08332L7 13.1667L1.75 9.08332L1.75 2.66665C1.75 2.35724 1.87292 2.06049 2.09171 1.8417C2.3105 1.6229 2.60725 1.49999 2.91667 1.49999L11.0833 1.49999C11.3928 1.49999 11.6895 1.62291 11.9083 1.8417C12.1271 2.06049 12.25 2.35724 12.25 2.66666L12.25 9.08332Z" stroke="#4284F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_i" x="0.25" y="0" width="13.5" height="14.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="3"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter1_i" x="0.75" y="0.5" width="12.5" height="13.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.5" dy="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
</defs>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="outer-div centerer" style={{"zIndex":2,"alignItems":"center"}}>
                          <div
                            id="14:193"
                            style={{"marginLeft":36,"marginRight":28,"flexGrow":1,"height":16,"marginTop":0,"color":"rgba(75, 77, 82, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"142.22222328186035%","letterSpacing":"0.24px"}}
                            className="inner-div"
                          >
                            <div>
                              <span style={{}} key="end">Advisor Access</span>
                            </div>
                          </div>
                        </div>
                        <div className="outer-div centerer" style={{"zIndex":3,"justifyContent":"center","alignItems":"center"}}>
                          <div
                            id="14:194"
                            style={{"width":16,"marginLeft":212,"height":16,"marginTop":0}}
                            className="inner-div"
                          >
                            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5L11 11M11 5L5 11" stroke="#4B4D52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
                          </div>
                        </div>
                        <div className="outer-div maxer" style={{"zIndex":3}}>
                          <div
                            id="14:187"
                            style={{"marginLeft":120,"width":"100%","minWidth":240,"height":null,"marginTop":-32,"marginBottom":0,"minHeight":32,"backgroundColor":null,"pointerEvents":"none"}}
                            className="inner-div"
                          >
                            <div className="outer-div" style={{"zIndex":4,"justifyContent":"flex-end"}}>
                              <div
                                id="14:197"
                                style={{"marginRight":-8,"width":8,"minWidth":8,"height":null,"marginTop":24,"marginBottom":0,"minHeight":8}}
                                className="inner-div"
                              >
                                <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8H0V0C0 4.41827 3.58173 8 8 8Z" fill="white"/>
</svg>
`}} />
                              </div>
                            </div>
                            <div className="outer-div" style={{"zIndex":5}}>
                              <div
                                id="14:198"
                                style={{"marginLeft":-8,"width":8,"minWidth":8,"height":null,"marginTop":-8,"marginBottom":0,"minHeight":8}}
                                className="inner-div"
                              >
                                <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H8V0C8 4.41827 4.41827 8 0 8Z" fill="white"/>
</svg>
`}} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="outer-div centerer" style={{}}>
                    <div
                      id="14:174"
                      style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(225, 228, 235, 1)","borderRadius":"4px 4px 0px 0px"}}
                      className="inner-div"
                    >
                      <div>
                      </div>
                    </div>
                  </div>
                  <div className="outer-div centerer" style={{"zIndex":1,"justifyContent":"center","alignItems":"center"}}>
                    <div
                      id="14:175"
                      style={{"width":28,"marginLeft":-252,"height":28,"marginTop":8}}
                      className="inner-div"
                    >
                      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 14H19M14 9V19" stroke="#4B4D52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
                    </div>
                  </div>
                  <div className="outer-div centerer" style={{"zIndex":4,"alignItems":"center"}}>
                    <div
                      id="14:199"
                      style={{"marginLeft":0,"width":80,"minWidth":80,"height":32,"marginTop":8}}
                      className="inner-div"
                    >
                      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="60" cy="16" r="6" fill="#64C255"/>
<circle cx="60" cy="16" r="5.75" stroke="black" stroke-opacity="0.16" stroke-width="0.5"/>
<circle cx="40" cy="16" r="6" fill="#FFD171"/>
<circle cx="40" cy="16" r="5.75" stroke="black" stroke-opacity="0.16" stroke-width="0.5"/>
<circle cx="20" cy="16" r="6" fill="#FF796F"/>
<circle cx="20" cy="16" r="5.75" stroke="black" stroke-opacity="0.16" stroke-width="0.5"/>
</svg>
`}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
});

