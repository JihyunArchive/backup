import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import "./ReserveComplete.css";
import Header from "../../components/Header";

const ReserveComplete = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // 임시 데이터
    const [reserveApplicationList] = useState([
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

    // const handlefixButtonClick = (bookPhoneNumber) => {
    //     const updatedList = reserveApplicationList.filter(item => item.bookPhoneNumber !== bookPhoneNumber);
    //     setReserveApplication(updatedList);
    // };

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
        <div className="reserveComplete">
            <Header/>
            <div className="reserveCompleteBody">
                <nav className="reserveMainNav">
                    <div className="navBg" />
                    <div className="navTitle">홍길동님, 반가워요!</div>
                    <div className="reserveMainNavGroup">
                        <Link to="/storemain" className="navWaiting">웨이팅 관리</Link>
                        <Link to="/reservemain" className="navReserveMain">예약 관리</Link>
                        <div className="navReserveMainGroup">
                            <Link to="/reserveapplication" className="navReserveApplication">신청</Link>
                            <Link to="/reservefix" className="navReserveFix">확정</Link>
                            <Link to="/reservecancle" className="navReserveCancle">취소</Link>
                            <Link to="/reservecomplete" className="navReserveCompleteMain">완료</Link>
                        </div>
                        <Link to="/storeinfo" className="navStore">가게 관리</Link>
                        <div className="navReview">리뷰 관리</div>
                    </div>
                </nav>
                <section className="reserveCompleteList">
                    <div className="reserveCompleteListBgGrey" />
                    <div className="reserveCompleteListGroup">
                        <div className="reserveCompleteListBgWhite" />
                        <div className="reserveCompleteListHeaderGroup">
                            <div className="reserveCompleteBox" />
                            <div className="reserveCompleteHeaderTitle">예약 완료</div>
                        </div>
                        <div className="reserveCompleteInfoGroup">
                            <div className="reserveCompleteInfoBgBlue" />
                            <div className="reserveCompleteInfoTop">
                                <div className="reserveCompleteInfoTopGroup">
                                    <div className="reserveCompleteInfoChooseDate">
                                        <div className="reserveCompleteInfoChooseDateTitle">{formatDate(selectedDate)}</div>
                                            <img
                                                className="reserveCompleteInfoChooseDateButton"
                                                onClick={handleDatePickerButtonClick}
                                                alt=""
                                                src="/reserveInfoChooseDateButton.svg"
                                            />
                                    </div>
                                    <div className="reserveCompleteTotalTeamMember">
                                        <div className="reserveCompleteTotalTeamTitle">{`총 ${reserveApplicationList.length}건 `}</div>
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
                            <div className="reserveCompleteTotalGroup">
                                {reserveApplicationList.map(item => (
                                    <div key={item.bookPhoneNumber} className="reserveCompleteGroup">
                                        <div className="reserveCompleteGroupBox" />
                                        <div className="reserveCompleteGroupTop">
                                            <div className="reserveCompleteDateButtonGroup">
                                                <div className="reserveCompleteDate">{`예약 날짜 : ${item.bookDate}`}</div>
                                            </div>
                                            <div className="reserveCompleteListBoxLine" />
                                        </div>
                                        <div className="reserveCompleteNameMemberGroup">
                                            <div className="reserveCompleteNameMemberBox">
                                                {/* 사용자가 선택한 날짜의 예약 확정 건을 반영하도록 수정 필요, 아래 날짜는 임시 */}
                                                <div className="reserveCompleteName">{`예약자 명 : ${item.bookName}`}</div>
                                                <div className="reserveCompleteMember">{`인원 : ${item.bookMembers}명`}</div>
                                            </div>
                                        </div>
                                        <div className="reserveCompletePhoneNumberGroup">
                                            <div className="reserveCompletePhoneNumber">{`전화번호 : ${item.bookPhoneNumber}`}</div>
                                        </div>
                                        <div className="reserveCompleteTermBookGroup">
                                            <div className="reserveCompleteTermBookGroupSpace">
                                                <div className="reserveCompleteTerm">{`요청사항 : ${item.requestedTerm}`}</div>
                                                <div className="reserveCompleteBook">{`이전 예약 : ${item.beforeBook}회`}</div>
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

export default ReserveComplete;

