import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import "./ReserveCancle.css";
import Header from "../../components/Header";

const ReserveCancle = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // 임시 데이터
    const [reserveApplicationList, setReserveApplication] = useState([
        { bookDate: '23.12.31 (일) 오후 20:00', bookName: '홍길동', bookMembers: 5, bookPhoneNumber: '010-2324-0312', requestedTerm: '땅콩 알레르기 있습니다.', cancleReason: '개인 사정으로 인해 취소합니다.' },
        { bookDate: '23.12.31 (일) 오후 20:00', bookName: '홍길동', bookMembers: 2, bookPhoneNumber: '010-0210-0312', requestedTerm: '없음', cancleReason: '개인 사정으로 인해 취소합니다.' },
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

    // const handleCancelButtonClick = (bookPhoneNumber) => {
    //     const updatedList = reserveApplicationList.filter(item => item.bookPhoneNumber !== bookPhoneNumber);
    //     setReserveApplication(updatedList);
    // };

    // const reserveFixTotalMembers = reserveApplicationList.reduce((total, item) => total + item.bookMembers, 0);

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
        <div className="reserveCancle">
            <Header/>
            <div className="reserveCancleBody">
                <nav className="reserveMainNav">
                    <div className="navBg" />
                    <div className="navTitle">홍길동님, 반가워요!</div>
                    <div className="reserveMainNavGroup">
                        <Link to="/storemain" className="navWaiting">웨이팅 관리</Link>
                        <Link to="/reservemain" className="navReserveMain">예약 관리</Link>
                        <div className="navReserveMainGroup">
                            <Link to="/reserveapplication" className="navReserveApplication">신청</Link>
                            <Link to="/reservefix" className="navReserveFix">확정</Link>
                            <Link to="/reservecancle" className="navReserveCancleMain">취소</Link>
                            <Link to="/reservecomplete" className="navReserveComplete">완료</Link>
                        </div>
                        <Link to="/storeinfo" className="navStore">가게 관리</Link>
                        <div className="navReview">리뷰 관리</div>
                    </div>
                </nav>
                <section className="reserveCancleList">
                    <div className="reserveCancleListBgGrey" />
                    <div className="reserveCancleListGroup">
                        <div className="reserveCancleListBgWhite" />
                        <div className="reserveCancleListHeaderGroup">
                            <div className="reserveCancleBox" />
                            <div className="reserveCancleHeaderTitle">예약 취소</div>
                        </div>
                        <div className="reserveCancleInfoGroup">
                            <div className="reserveCancleInfoBgBlue" />
                            <div className="reserveCancleInfoTop">
                                <div className="reserveCancleInfoTopGroup">
                                    <div className="reserveCancleInfoChooseDate">
                                        <div className="reserveCancleInfoChooseDateTitle">{formatDate(selectedDate)}</div>
                                            <img
                                                className="reserveCancleInfoChooseDateButton"
                                                onClick={handleDatePickerButtonClick}
                                                alt=""
                                                src="/reserveInfoChooseDateButton.svg"
                                            />
                                    </div>
                                    <div className="reserveCancleTotalTeamMember">
                                        <div className="reserveCancleTotalTeamTitle">{`총 ${reserveApplicationList.length}건 `}</div>
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
                            <div className="reserveCancleTotalGroup">
                                {reserveApplicationList.map(item => (
                                    <div key={item.bookPhoneNumber} className="reserveCancleGroup">
                                        <div className="reserveCancleGroupBox" />
                                        <div className="reserveCancleGroupTop">
                                            <div className="reserveCancleDateButtonGroup">
                                                <div className="reserveCancleDate">{`예약 날짜 : ${item.bookDate}`}</div>
                                                <div className="reserveCompleteCancleButtonGroup">
                                                    <button className="reserveCancleFixButton" onClick={() => handlefixButtonClick(item.bookPhoneNumber)}>
                                                        <div className="reserveCancleFixButtonBox" />
                                                        <div className="reserveCancleFixButtonTitle">확정</div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="reserveCancleListBoxLine" />
                                        </div>
                                        <div className="reserveCancleNameMemberGroup">
                                            <div className="reserveCancleNameMemberBox">
                                                {/* 사용자가 선택한 날짜의 예약 취소 건을 반영하도록 수정 필요, 아래 날짜는 임시 */}
                                                <div className="reserveCancleName">{`예약자 명 : ${item.bookName}`}</div>
                                                <div className="reserveCancleMember">{`인원 : ${item.bookMembers}명`}</div>
                                            </div>
                                        </div>
                                        <div className="reserveCanclePhoneNumberGroup">
                                            <div className="reserveCanclePhoneNumber">{`전화번호 : ${item.bookPhoneNumber}`}</div>
                                        </div>
                                        <div className="reserveCancleTermBookGroup">
                                            <div className="reserveCancleTermBookGroupSpace">
                                                <div className="reserveCancleTerm">{`요청사항 : ${item.requestedTerm}`}</div>
                                                <div className="reserveCancleReason">{`취소 사유 : ${item.cancleReason}`}</div>
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

export default ReserveCancle;

