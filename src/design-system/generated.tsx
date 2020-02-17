import * as React from 'react';
import { observer } from 'mobx-react';

export const getComponentFromId = id => {
  if (id === '15:2') return Clock15D2;
  return null;
};

const Clock15D2 = observer(({ test, children }) => {
  return (
    <>
      <div className="figma-1">
        <div id="15:0" className="figma-0">
          <div id="14:138" className="figma-2"></div>
          <div id="14:173" className="figma-3">
            <div className="figma-5">
              <div id="14:174" className="figma-4"></div>
            </div>
            <div className="figma-7">
              <div id="14:199" className="figma-6">
                <div
                  className="vector"
                  dangerouslySetInnerHTML={{
                    __html: `<svg preserveAspectRatio="none" width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="60" cy="16" r="6" fill="#64C255"/>
<circle cx="60" cy="16" r="5.75" stroke="black" stroke-opacity="0.16" stroke-width="0.5"/>
<circle cx="40" cy="16" r="6" fill="#FFD171"/>
<circle cx="40" cy="16" r="5.75" stroke="black" stroke-opacity="0.16" stroke-width="0.5"/>
<circle cx="20" cy="16" r="6" fill="#FF796F"/>
<circle cx="20" cy="16" r="5.75" stroke="black" stroke-opacity="0.16" stroke-width="0.5"/>
</svg>
`
                  }}
                />
              </div>
            </div>
            <div id="14:178" className="figma-8">
              <div className="figma-10">
                <div id="14:180" className="figma-9">
                  <div className="figma-12">
                    <div id="14:181" className="figma-11">
                      <div
                        className="vector"
                        dangerouslySetInnerHTML={{
                          __html: `<svg preserveAspectRatio="none" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="14:187" className="figma-13">
              <div className="figma-15">
                <div id="14:188" className="figma-14"></div>
              </div>
              <div className="figma-17">
                <div id="14:189" className="figma-16">
                  <div className="figma-19">
                    <div id="14:190" className="figma-18">
                      <div
                        className="vector"
                        dangerouslySetInnerHTML={{
                          __html: `<svg preserveAspectRatio="none" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-21">
                <div id="14:193" className="figma-20">
                  <span key="end">Advisor Access</span>
                </div>
              </div>
              <div className="figma-23">
                <div id="14:194" className="figma-22">
                  <div
                    className="vector"
                    dangerouslySetInnerHTML={{
                      __html: `<svg preserveAspectRatio="none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5L11 11M11 5L5 11" stroke="#4B4D52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                    }}
                  />
                </div>
              </div>
              <div className="figma-25">
                <div id="14:197" className="figma-24">
                  <div
                    className="vector"
                    dangerouslySetInnerHTML={{
                      __html: `<svg preserveAspectRatio="none" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8H0V0C0 4.41827 3.58173 8 8 8Z" fill="white"/>
</svg>
`
                    }}
                  />
                </div>
              </div>
              <div id="14:198" className="figma-26">
                <div
                  className="vector"
                  dangerouslySetInnerHTML={{
                    __html: `<svg preserveAspectRatio="none" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H8V0C8 4.41827 4.41827 8 0 8Z" fill="white"/>
</svg>
`
                  }}
                />
              </div>
            </div>
            <div id="14:175" className="figma-27">
              <div className="figma-29">
                <div id="52:0" className="figma-28">
                  <div
                    className="vector"
                    dangerouslySetInnerHTML={{
                      __html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#CED0D6"/>
<path d="M7 12H17M12 7V17" stroke="#4B4D52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="14:140" className="figma-30">
            <div className="figma-32">
              <div id="14:141" className="figma-31"></div>
            </div>
            <div className="figma-34">
              <div id="14:142" className="figma-33">
                <div className="figma-36">
                  <div id="14:144" className="figma-35">
                    <div
                      className="vector"
                      dangerouslySetInnerHTML={{
                        __html: `<svg preserveAspectRatio="none" width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5ZM3 6.5C3 7.32843 2.32843 8 1.5 8C0.671573 8 0 7.32843 0 6.5C0 5.67157 0.671573 5 1.5 5C2.32843 5 3 5.67157 3 6.5ZM1.5 13C2.32843 13 3 12.3284 3 11.5C3 10.6716 2.32843 10 1.5 10C0.671573 10 0 10.6716 0 11.5C0 12.3284 0.671573 13 1.5 13Z" fill="#4B4D52"/>
</svg>
`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-38">
              <div id="14:148" className="figma-37">
                <div className="figma-40">
                  <div id="52:1" className="figma-39">
                    <div
                      className="vector"
                      dangerouslySetInnerHTML={{
                        __html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-42">
              <div onClick={test} id={'adam--extension'} className="figma-41">
                <div className="figma-44">
                  <div id="66:1" className="figma-43">
                    <div
                      className="vector"
                      dangerouslySetInnerHTML={{
                        __html: `<svg preserveAspectRatio="none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#487EAF"/>
<path d="M5.78407 10.5437V13.2946L6.76534 13.4533V13.8824H3.07417V13.4533L3.98127 13.2946V6.58193L3 6.4291V6H6.65695C7.78275 6 8.62329 6.1783 9.17859 6.5349C9.73388 6.8915 10.0115 7.44795 10.0115 8.20426C10.0115 9.33284 9.49807 10.0578 8.47116 10.3791L10.5136 13.2946L11.3408 13.4533V13.8824H8.86481L6.73111 10.5437H5.78407ZM8.23154 8.21602C8.23154 7.62821 8.11364 7.22067 7.87783 6.99339C7.64202 6.76218 7.21034 6.64658 6.58278 6.64658H5.78407V9.89713H6.61131C7.19703 9.89713 7.6135 9.77174 7.86072 9.52094C8.10793 9.27014 8.23154 8.83517 8.23154 8.21602Z" fill="white"/>
<path d="M14.3357 6.58193L13.3545 6.4291V6H17V6.4291L16.1328 6.58193V11.3431C16.1328 12.1935 15.9046 12.8499 15.4482 13.3123C14.9918 13.7708 14.3414 14 13.4971 14C13.2118 14 12.9304 13.9824 12.6527 13.9471C12.3789 13.9157 12.1602 13.8746 11.9967 13.8237V12.0367H12.5044L12.6756 13.0889C12.7478 13.179 12.8505 13.2496 12.9836 13.3005C13.1168 13.3515 13.2632 13.3769 13.4229 13.3769C13.6854 13.3769 13.9022 13.2829 14.0733 13.0948C14.2483 12.9067 14.3357 12.6285 14.3357 12.2601V6.58193Z" fill="white"/>
</svg>
`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-46">
              <div id="14:150" className="figma-45">
                <div className="figma-48">
                  <div id="14:151" className="figma-47"></div>
                </div>
                <div className="figma-50">
                  <div id="14:153" className="figma-49">
                    <div id="14:155" className="figma-51">
                      <div
                        className="vector"
                        dangerouslySetInnerHTML={{
                          __html: `<svg preserveAspectRatio="none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.629L9.311 5.69406L9.42302 6.04138L9.78796 6.04059L14.0592 6.03125L10.5982 8.53426L10.3025 8.74812L10.416 9.09496L11.7448 13.1543L8.29478 10.6361L8 10.421L7.70522 10.6361L4.25522 13.1543L5.58398 9.09496L5.69751 8.74812L5.4018 8.53426L1.94081 6.03125L6.21204 6.04059L6.57698 6.04138L6.689 5.69406L8 1.629Z" stroke="#4B4D52"/>
</svg>
`
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="figma-56">
                  <div id="14:157" className="figma-55">
                    <span className="figma-52" key="6">
                      chrome
                    </span>
                    <span className="figma-53" key="15">
                      ://newtab
                    </span>
                    <span className="figma-54" key="end">
                      tabtabtabtabtab
                    </span>
                  </div>
                </div>
                <div className="figma-58">
                  <div id="14:158" className="figma-57">
                    <div className="figma-60">
                      <div id="14:160" className="figma-59">
                        <div id="14:163" className="figma-61"></div>
                        <div id="14:162" className="figma-62"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-64">
              <div id="14:164" className="figma-63">
                <div className="figma-66">
                  <div id="54:3" className="figma-65">
                    <div
                      className="vector"
                      dangerouslySetInnerHTML={{
                        __html: `<svg preserveAspectRatio="none" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12.5C9.69608 12.5 11.9391 10.5601 12.4093 8H13.9291C13.4439 11.3923 10.5265 14 7 14C3.134 14 0 10.866 0 7C0 3.134 3.134 0 7 0C9.18768 0 11.141 1.00354 12.4246 2.57541L14 1V6H9L11.357 3.64301C10.3513 2.3396 8.77368 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5Z" fill="#4B4D52"/>
</svg>
`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-68">
              <div id="14:167" className="figma-67">
                <div className="figma-70">
                  <div id="54:2" className="figma-69">
                    <div
                      className="vector"
                      dangerouslySetInnerHTML={{
                        __html: `<svg preserveAspectRatio="none" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.777778 6.74074H13.2222M13.2222 6.74074L7.51852 0.777778M13.2222 6.74074L7.51852 12.1852" stroke="#A9AEB8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-72">
              <div id="14:170" className="figma-71">
                <div className="figma-74">
                  <div id="54:1" className="figma-73">
                    <div
                      className="vector"
                      dangerouslySetInnerHTML={{
                        __html: `<svg preserveAspectRatio="none" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2222 6.74074H0.777778M0.777778 6.74074L6.48148 0.777778M0.777778 6.74074L6.48148 12.1852" stroke="#4B4D52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-76">
            <div id="72:1" className="figma-75">
              <div className="figma-78">
                <div id="14:139" className="figma-77"></div>
              </div>
              <div className="figma-80">
                <div id="72:2" className="figma-79">
                  {!children && (
                    <div id="96:32" className="figma-81">
                      <div id="95:7" className="figma-82">
                        <div className="figma-83">
                          <div id="96:2" className="figma-84">
                            <span key="end">Content Here</span>
                          </div>
                          <div id="96:26" className="figma-85">
                            <span key="end">Content Here</span>
                          </div>
                          <div id="96:27" className="figma-86">
                            <span key="end">Content Here</span>
                          </div>
                          <div id="96:28" className="figma-87">
                            <span key="end">Content Here</span>
                          </div>
                          <div id="96:29" className="figma-88">
                            <span key="end">Content Here</span>
                          </div>
                          <div id="96:30" className="figma-89">
                            <span key="end">Content Here</span>
                          </div>
                          <div id="96:31" className="figma-90">
                            <span key="end">Content Here</span>
                          </div>
                        </div>
                      </div>
                      <div id="96:33" className="figma-91">
                        <span key="end">Content Here</span>
                      </div>
                    </div>
                  )}
                  {children}
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
        .figma-3 {
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
        .figma-4 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(225, 228, 235, 1);
          border-radius: 4px 4px 0px 0px;
        }
        .figma-5 {
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
          width: 80px;
          min-width: 80px;
          height: 32px;
          margin-top: 8px;
        }
        .figma-7 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
        .figma-8 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-left: 80px;
          width: 39px;
          min-width: 39px;
          margin-top: 8px;
          margin-bottom: 0px;
          min-height: 32px;
          background-color: rgba(0, 0, 0, 0);
        }
        .figma-9 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 12px;
          width: 16px;
          min-width: 16px;
          height: 16px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-10 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-11 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 87.5%;
          margin-left: 6.25%;
          height: 87.5%;
          top: 6.25%;
        }
        .figma-12 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-13 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 3;
          margin-left: 120px;
          width: 240px;
          min-width: 240px;
          margin-top: -32px;
          margin-bottom: 0px;
          min-height: 32px;
          background-color: rgba(0, 0, 0, 0);
        }
        .figma-14 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(255, 255, 255, 1);
          border-radius: 8px 8px 0px 0px;
        }
        .figma-15 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-16 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-left: 12px;
          width: 16px;
          min-width: 16px;
          height: 16px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-17 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
        .figma-18 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 87.50000596046448%;
          margin-left: 6.25%;
          height: 87.50000596046448%;
          top: 6.25%;
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
        .figma-20 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-left: 36px;
          margin-right: 28px;
          flex-grow: 1;
          height: 16px;
          margin-top: 0px;
          color: rgba(75, 77, 82, 1);
          font-size: 12px;
          font-weight: 400;
          font-family: Roboto;
          text-align: LEFT;
          font-style: normal;
          line-height: 142.22222328186035%;
          letter-spacing: 0.24px;
          display: flex;
          max-width: -webkit-fill-available;
        }
        .figma-21 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 2;
        }
        .figma-22 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 3;
          width: 16px;
          margin-left: 212px;
          height: 16px;
          margin-top: 0px;
        }
        .figma-23 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 3;
        }
        .figma-24 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 4;
          margin-right: -8px;
          width: 8px;
          min-width: 8px;
          margin-top: 24px;
          margin-bottom: 0px;
          min-height: 8px;
        }
        .figma-25 {
          position: relative;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: flex-end;
          z-index: 4;
        }
        .figma-26 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 5;
          margin-left: -8px;
          width: 8px;
          min-width: 8px;
          margin-top: -8px;
          margin-bottom: 0px;
          min-height: 8px;
        }
        .figma-27 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 4;
          margin-left: 370px;
          width: 24px;
          min-width: 24px;
          margin-top: -28px;
          margin-bottom: 4px;
          min-height: 24px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-28 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 24px;
          height: 24px;
          margin-top: 0px;
        }
        .figma-29 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-30 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: -163px;
          margin-bottom: 127px;
          min-height: 36px;
          background-color: rgba(255, 255, 255, 1);
        }
        .figma-31 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 1px 0px rgba(239, 241, 244, 1);
        }
        .figma-32 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-33 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-right: 8px;
          width: 28px;
          min-width: 28px;
          height: 28px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
        }
        .figma-34 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
        .figma-35 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 3px;
          margin-left: 0px;
          height: 13px;
          margin-top: 0px;
        }
        .figma-36 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-37 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-right: 44px;
          width: 20px;
          min-width: 20px;
          height: 20px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-38 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 2;
        }
        .figma-39 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 20px;
          height: 20px;
          margin-top: 0px;
        }
        .figma-40 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-41 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 3;
          margin-right: 80px;
          width: 20px;
          min-width: 20px;
          height: 20px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-42 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 3;
        }
        .figma-43 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 20px;
          height: 20px;
          margin-top: 0px;
        }
        .figma-44 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-45 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 4;
          margin-left: 112px;
          margin-right: 116px;
          flex-grow: 1;
          height: 26px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
        }
        .figma-46 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 4;
        }
        .figma-47 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(239, 241, 244, 1);
          border-radius: 24px 24px 24px 24px;
        }
        .figma-48 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-49 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-right: 0px;
          width: 36px;
          min-width: 36px;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(0, 0, 0, 0);
        }
        .figma-50 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: flex-end;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
        .figma-51 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 10px;
          width: 16px;
          min-width: 16px;
          margin-top: 5px;
          margin-bottom: 5px;
          min-height: 16px;
        }
        .figma-52 {
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .figma-53 {
          color: rgba(141, 145, 153, 1);
          font-style: normal;
          line-height: NaN%;
          letter-spacing: undefinedpx;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .figma-54 {
          color: rgba(235, 87, 87, 1);
          font-style: normal;
          line-height: NaN%;
          letter-spacing: undefinedpx;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }
        .figma-55 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 2;
          margin-left: 36px;
          margin-right: 42px;
          flex-grow: 1;
          height: 16px;
          margin-top: 0px;
          color: rgba(75, 77, 82, 1);
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
        .figma-56 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 2;
        }
        .figma-57 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 3;
          margin-left: 0px;
          width: 36px;
          min-width: 36px;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-58 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 3;
        }
        .figma-59 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 10px;
          width: 16px;
          min-width: 16px;
          height: 16px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-60 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-61 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-left: 6px;
          width: 4px;
          min-width: 4px;
          margin-top: 3px;
          margin-bottom: 10px;
          min-height: 3px;
          border: 1px solid rgba(75, 77, 82, 1);
          border-radius: 2px 2px 0px 0px;
        }
        .figma-62 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 4px;
          width: 8px;
          min-width: 8px;
          margin-top: -10px;
          margin-bottom: 3px;
          min-height: 7px;
          background-color: rgba(75, 77, 82, 1);
          border-radius: 2px 2px 2px 2px;
        }
        .figma-63 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 5;
          margin-left: 72px;
          width: 28px;
          min-width: 28px;
          height: 28px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-64 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 5;
        }
        .figma-65 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 14px;
          margin-left: 0px;
          height: 14px;
          margin-top: 0px;
        }
        .figma-66 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-67 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 6;
          margin-left: 40px;
          width: 28px;
          min-width: 28px;
          height: 28px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-68 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 6;
        }
        .figma-69 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 12px;
          margin-left: 0px;
          height: 11px;
          margin-top: -1px;
        }
        .figma-70 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-71 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 7;
          margin-left: 8px;
          width: 28px;
          min-width: 28px;
          height: 28px;
          margin-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-72 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 7;
        }
        .figma-73 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          width: 12px;
          margin-left: 0px;
          height: 11px;
          margin-top: -1px;
        }
        .figma-74 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-75 {
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
        .figma-76 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-77 {
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
        .figma-78 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
        }
        .figma-79 {
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
          overflow: auto;
        }
        .figma-80 {
          position: absolute;
          display: flex;
          width: 100%;
          pointer-events: none;
          height: 100%;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
        .figma-81 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: 0px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 85px;
          min-height: 42px;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-82 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          margin-left: 0px;
          margin-right: -53px;
          flex-grow: 1;
          margin-top: 0px;
          margin-bottom: 26px;
          min-height: 16px;
          max-width: 100%;
          background-color: rgba(0, 0, 0, 0);
          overflow: hidden;
        }
        .figma-83 {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          margin-top: -10px;
          margin-left: -10px;
          margin-right: -10px;
          flex-wrap: wrap;
        }
        .figma-84 {
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
        .figma-85 {
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
        .figma-86 {
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
        .figma-87 {
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
        .figma-88 {
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
        .figma-89 {
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
        .figma-90 {
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
        .figma-91 {
          position: relative;
          box-sizing: border-box;
          pointer-events: auto;
          z-index: 1;
          margin-left: 0px;
          width: 86px;
          min-width: 86px;
          margin-top: -16px;
          margin-bottom: 0px;
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
      `}</style>
    </>
  );
});
