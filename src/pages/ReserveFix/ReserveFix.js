import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import "./ReserveFix.css";
import Header from "../../components/Header";

const ReserveFix = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // 임시 데이터
    const [reserveApplicationList, setReserveApplication] = useState([
        { bookDate: '23.12.31 (일) 오후 20:00', bookName: '홍길동', bookMembers: 5, bookPhoneNumber: '010-2324-0312', requestedTerm: '땅콩 알레르기 있습니다.', beforeBook: 0 },
        { bookDate: '23.12.31 (일) 오후 20:00', bookName: '홍길동', bookMembers: 2, bookPhoneNumber: '010-0210-0312', requestedTerm: '없음', beforeBook: 4 },
    ]);

    const handleDatePickerButtonClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    const handlefixButtonClick = (bookPhoneNumber) => {
        const updatedList = reserveApplicationList.filter(item => item.bookPhoneNumber !== bookPhoneNumber);
        setReserveApplication(updatedList);
    };

    const handleCancelButtonClick = (bookPhoneNumber) => {
        const updatedList = reserveApplicationList.filter(item => item.bookPhoneNumber !== bookPhoneNumber);
        setReserveApplication(updatedList);
    };

    const reserveFixTotalMembers = reserveApplicationList.reduce((total, item) => total + item.bookMembers, 0);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    };

    useEffect(() => {
        const today = new Date();
        setSelectedDate(today);
    }, []);

    return (
        <div className="reserveFix">
            <Header/>
            <div className="reserveFixBody">
                <nav className="reserveMainNav">
                    <div className="navBg" />
                    <div className="navTitle">홍길동님, 반가워요!</div>
                    <div className="reserveMainNavGroup">
                        <Link to="/storemain" className="navWaiting">웨이팅 관리</Link>
                        <Link to="/reservemain" className="navReserveMain">예약 관리</Link>
                        <div className="navReserveMainGroup">
                            <Link to="/reserveapplication" className="navReserveApplication">신청</Link>
                            <Link to="/reservefix" className="navReserveFixMain">확정</Link>
                            <Link to="/reservecancle" className="navReserveCancle">취소</Link>
                            <Link to="/reservecomplete" className="navReserveComplete">완료</Link>
                        </div>
                        <Link to="/storeinfo" className="navStore">가게 관리</Link>
                        <div className="navReview">리뷰 관리</div>
                    </div>
                </nav>
                <section className="reserveFixList">
                    <div className="reserveFixListBgGrey" />
                    <div className="reserveFixListGroup">
                        <div className="reserveFixListBgWhite" />
                        <div className="reserveFixListHeaderGroup">
                            <div className="reserveFixBox" />
                            <div className="reserveFixHeaderTitle">예약 확정</div>
                        </div>
                        <div className="reserveFixInfoGroup">
                            <div className="reserveFixInfoBgBlue" />
                            <div className="reserveFixInfoTop">
                                <div className="reserveFixInfoTopGroup">
                                    <div className="reserveFixInfoChooseDate">
                                        <div className="reserveFixInfoChooseDateTitle">{formatDate(selectedDate)}</div>
                                            <img
                                                className="reserveFixInfoChooseDateButton"
                                                onClick={handleDatePickerButtonClick}
                                                alt=""
                                                src="/reserveInfoChooseDateButton.svg"
                                            />
                                    </div>
                                    <div className="reserveFixTotalTeamMember">
                                        <div className="reserveFixTotalTeamTitle">{`총 ${reserveApplicationList.length}팀 `}</div>
                                        <div className="reserveFixTotalTeamMemberDot" />
                                        <div className="reserveFixTotalMemberTitle">{`${reserveFixTotalMembers}명 `}</div>
                                    </div>
                                </div>
                            </div>        
                            <div id='datePickerChoose'>
                                <CustomDatePicker
                                    selectedDate={selectedDate}
                                    handleDateSelect={handleDateSelect}
                                    showDatePicker={showDatePicker}
                                />
                            </div>
                            <div className="reserveFixTotalGroup">
                                {reserveApplicationList.map(item => (
                                    <div key={item.bookPhoneNumber} className="reserveFixGroup">
                                        <div className="reserveFixGroupBox" />
                                        <div className="reserveFixGroupTop">
                                            <div className="reserveFixDateButtonGroup">
                                                <div className="reserveFixDate">{`예약 날짜 : ${item.bookDate}`}</div>
                                                <div className="reserveCompleteCancleButtonGroup">
                                                    <button className="reserveFixCompleteButton" onClick={() => handlefixButtonClick(item.bookPhoneNumber)}>
                                                        <div className="reserveFixCompleteButtonBox" />
                                                        <div className="reserveFixCompleteButtonTitle">완료</div>
                                                    </button>
                                                    <button className="reserveFixCancleButton" onClick={() => handleCancelButtonClick(item.bookPhoneNumber)}>
                                                        <div className="reserveFixCancleButtonBox" />
                                                        <div className="reserveFixCancleButtonTitle">취소</div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="reserveFixListBoxLine" />
                                        </div>
                                        <div className="reserveFixNameMemberGroup">
                                            <div className="reserveFixNameMemberBox">
                                                {/* 사용자가 선택한 날짜의 예약 확정 건을 반영하도록 수정 필요, 아래 날짜는 임시 */}
                                                <div className="reserveFixName">{`예약자 명 : ${item.bookName}`}</div>
                                                <div className="reserveFixMember">{`인원 : ${item.bookMembers}명`}</div>
                                            </div>
                                        </div>
                                        <div className="reserveFixPhoneNumberGroup">
                                            <div className="reserveFixPhoneNumber">{`전화번호 : ${item.bookPhoneNumber}`}</div>
                                        </div>
                                        <div className="reserveFixTermBookGroup">
                                            <div className="reserveFixTermBookGroupSpace">
                                                <div className="reserveFixTerm">{`요청사항 : ${item.requestedTerm}`}</div>
                                                <div className="reserveFixBook">{`이전 예약 : ${item.beforeBook}회`}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReserveFix;

