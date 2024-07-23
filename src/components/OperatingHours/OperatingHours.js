import React, { useState } from 'react';
import './OperatingHours.css';

const OperatingHours = () => {
    const [inputValues, setInputValues] = useState({
        "fri-start-hour": "",
        "mon-last-time": "",
        "time-segment": "",
        "div8": "",
        "wed-end-hour": "",
        "tue-start-time1": "",
        "fri-start-hour1": "",
        "wed-start-hour1": "",
        "div11": "",
        "div13": "",
        "div15": "",
        "div17": "",
        "thu-start-hour": "",
        "text1": "",
        "div19": "",
        "div21": "",
        "div23": "",
        "fri-start-time1": "",
        "fri-last-time": "",
        "fri-last-time1": "",
        "div27": "",
        "div29": "",
        "div31": "",
        "div33": "",
        "div35": "",
        "div37": "",
        "div39": "",
        "div41": ""
    });

    const handleInputChange = (e, inputKey) => {
        const value = e.target.value.replace(/\D/g, ''); // 숫자 이외의 문자 제거
        if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 24)) { // 0부터 24 사이의 값인지 확인
            setInputValues({ ...inputValues, [inputKey]: value });
        }
    };

    return (
        <div className="storetime">
            <div className="storetimegroupbox" />
            <div className="sat-start-frame">
                <div className="div6">운영 시간</div>
                <div className="sun-start-frame">
                    {/* 월요일 */}
                    <div className="sun-start-info2">
                        <div className="div7">월요일</div>
                        <div className="tue678">
                            <div className="monstarthour">
                                <div className="monstarthourbox" />
                                <input className="fri-start-hour" placeholder="00" type="text" value={inputValues["fri-start-hour"]} onChange={(e) => handleInputChange(e, "fri-start-hour")} />
                            </div>
                            <div className="sun3650">:</div>
                            <div className="mon-start-time-frame">
                                <div className="monstarttime">
                                    <div className="monstarttimebox" />
                                    <input className="mon-last-time" placeholder="00" type="text" value={inputValues["mon-last-time"]} onChange={(e) => handleInputChange(e, "mon-last-time")} />
                                </div>
                            </div>
                            <div className="tue-start-time">~</div>
                        </div>
                        <div className="wed-start-time">
                            <div className="monlasthour">
                                <div className="monlasthourbox" />
                                <input className="time-segment" placeholder="00" type="text" value={inputValues["time-segment"]} onChange={(e) => handleInputChange(e, "time-segment")} />
                            </div>
                            <div className="weekday-label">:</div>
                            <div className="monlasttime">
                                <div className="monlasttimebox" />
                                <input className="div8" placeholder="00" type="text" value={inputValues["div8"]} onChange={(e) => handleInputChange(e, "div8")} />
                            </div>
                        </div>
                    </div>
                    {/* 화요일 */}
                    <div className="sun-start-info">
                        <div className="div9">화요일</div>
                        <div className="mon-end-hour">
                            <div className="tuestarthour">
                                <div className="tuestarthourbox" />
                                <input className="wed-end-hour" placeholder="00" type="text" value={inputValues["wed-end-hour"]} onChange={(e) => handleInputChange(e, "wed-end-hour")} />
                            </div>
                            <div className="thu-end-hour">:</div>
                            <div className="tuestarttime">
                                <div className="tuestarttimebox" />
                                <input className="tue-start-time1" placeholder="00" type="text" value={inputValues["tue-start-time1"]} onChange={(e) => handleInputChange(e, "tue-start-time1")} />
                            </div>
                        </div>
                        <div className="tue-last-time">~</div>
                        <div className="mon-start-hour-frame">
                            <div className="tuelasthour">
                                <div className="tuelasthourbox" />
                                <input className="fri-start-hour1" placeholder="00" type="text" value={inputValues["fri-start-hour1"]} onChange={(e) => handleInputChange(e, "fri-start-hour1")} />
                            </div>
                            <div className="fri-last-hour">:</div>
                            <div className="tuelasttime">
                                <div className="tuelasttimebox" />
                                <input className="wed-start-hour1" placeholder="00" type="text" value={inputValues["wed-start-hour1"]} onChange={(e) => handleInputChange(e, "wed-start-hour1")} />
                            </div>
                        </div>
                    </div> 
                    {/* 수요일 */}
                    <div className="sun-start-info1">
                        <div className="div10">수요일</div>
                        <div className="wedstarthour-parent">
                            <div className="wedstarthour">
                                <div className="wedstarthourbox" />
                                <input className="div11" placeholder="00" type="text" value={inputValues["div11"]} onChange={(e) => handleInputChange(e, "div11")} />
                            </div>
                            <div className="div12">:</div>
                            <div className="wedstarttime">
                                <div className="wedstarttimebox" />
                                <input className="div13" placeholder="00" type="text" value={inputValues["div13"]} onChange={(e) => handleInputChange(e, "div13")} />
                            </div>
                        </div>
                        <div className="div14">~</div>
                        <div className="wedlasthour-parent">
                            <div className="wedlasthour">
                                <div className="wedlasthourbox" />
                                <input className="div15" placeholder="00" type="text" value={inputValues["div15"]} onChange={(e) => handleInputChange(e, "div15")} />
                            </div>
                            <div className="div16">:</div>
                            <div className="wedlasttime">
                                <div className="wedlasttimebox" />
                                <input className="div17" placeholder="00" type="text" value={inputValues["div17"]} onChange={(e) => handleInputChange(e, "div17")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weekdays-frame">
                <div className="fri-start-hour-frame">
                    <div className="fri-start-hour11">
                        <div className="div18">목요일</div>
                        <div className="sat-start-time">
                            <div className="thustarthour">
                                <div className="thustarthourbox" />
                                <input className="thu-start-hour" placeholder="00" type="text" value={inputValues["thu-start-hour"]} onChange={(e) => handleInputChange(e, "thu-start-hour")} />
                            </div>
                            <div className="checkbox-group">:</div>
                            <div className="text999">
                                <div className="thustarttime">
                                    <div className="thustarttimebox" />
                                    <input className="text1" placeholder="00" type="text" value={inputValues["text1"]} onChange={(e) => handleInputChange(e, "text1")} />
                                </div>
                            </div>
                            <div className="text2">~</div>
                        </div>
                        <div className="text3">
                            <div className="thulasthour">
                                <div className="thulasthourbox" />
                                <input className="div19" placeholder="00" type="text" value={inputValues["div19"]} onChange={(e) => handleInputChange(e, "div19")} />
                            </div>
                            <div className="div20">:</div>
                            <div className="thulasttime">
                                <div className="thulasttimebox" />
                                <input className="div21" placeholder="00" type="text" value={inputValues["div21"]} onChange={(e) => handleInputChange(e, "div21")} />
                            </div>
                        </div>
                    </div>
                    {/* 금요일 */}
                    <div className="fri-start-hour2">
                        <div className="div22">금요일</div>
                        <div className="fri-start-time">
                            <div className="fristarthour">
                                <div className="fristarthourbox" />
                                <input className="div23" placeholder="00" type="text" value={inputValues["div23"]} onChange={(e) => handleInputChange(e, "div23")} />
                            </div>
                            <div className="div24">:</div>
                            <div className="fristarttime">
                                <div className="fristarttimebox" />
                                <input className="fri-start-time1" placeholder="00" type="text" value={inputValues["fri-start-time1"]} onChange={(e) => handleInputChange(e, "fri-start-time1")} />
                            </div>
                        </div>
                        <div className="fri-last-hour1">~</div>
                        <div className="fri-last-hour2">
                            <div className="frilasthour">
                                <div className="frilasthourbox" />
                                <input className="fri-last-time" placeholder="00" type="text" value={inputValues["fri-last-time"]} onChange={(e) => handleInputChange(e, "fri-last-time")} />
                            </div>
                            <div className="div25">:</div>
                            <div className="frilasttime">
                                <div className="frilasttimebox" />
                                <input className="fri-last-time1" placeholder="00" type="text" value={inputValues["fri-last-time1"]} onChange={(e) => handleInputChange(e, "fri-last-time1")} />
                            </div>
                        </div>
                    </div>
                    {/* 토요일 */}
                    <div className="sun-start-info1">
                        <div className="div26">토요일</div>
                        <div className="satstarthour-parent">
                            <div className="satstarthour">
                                <div className="satstarthourbox" />
                                <input className="div27" placeholder="00" type="text" value={inputValues["div27"]} onChange={(e) => handleInputChange(e, "div27")} />
                            </div>
                            <div className="div28">:</div>
                            <div className="satstarttime">
                                <div className="satstarttimebox" />
                                <input className="div29" placeholder="00" type="text" value={inputValues["div29"]} onChange={(e) => handleInputChange(e, "div29")} />
                            </div>
                        </div>
                        <div className="div30">~</div>
                        <div className="satlasthour-parent">
                            <div className="satlasthour">
                                <div className="satlasthourbox" />
                                <input className="div31" placeholder="00" type="text" value={inputValues["div31"]} onChange={(e) => handleInputChange(e, "div31")} />
                            </div>
                            <div className="div32">:</div>
                            <div className="satlasttime">
                                <div className="satlasttimebox" />
                                <input className="div33" placeholder="00" type="text" value={inputValues["div33"]} onChange={(e) => handleInputChange(e, "div33")} />
                            </div>
                        </div>
                    </div>
                </div>    
                {/* 일요일 */}
                <div className="parent">
                    <div className="div34">일요일</div>
                    <div className="sunstarthour-parent">
                        <div className="sunstarthour">
                            <div className="sunstarthourbox" />
                            <input className="div35" placeholder="00" type="text" value={inputValues["div35"]} onChange={(e) => handleInputChange(e, "div35")} />
                        </div>
                        <div className="div36">:</div>
                        <div className="sunstarttime">
                            <div className="sunstarttimebox" />
                            <input className="div37" placeholder="00" type="text" value={inputValues["div37"]} onChange={(e) => handleInputChange(e, "div37")} />
                        </div>
                    </div>
                    <div className="div38">~</div>
                    <div className="sunlasthour-parent">
                        <div className="sunlasthour">
                            <div className="sunlasthourbox" />
                            <input className="div39" placeholder="00" type="text" value={inputValues["div39"]} onChange={(e) => handleInputChange(e, "div39")} />
                        </div>
                        <div className="div40">:</div>
                        <div className="sunlasttime">
                            <div className="sunlasttimebox" />
                            <input className="div41" placeholder="00" type="text" value={inputValues["div41"]} onChange={(e) => handleInputChange(e, "div41")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperatingHours;
