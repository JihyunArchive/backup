import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import StoreMenuInput from "../../components/StoreMenuInput/StoreMenuInput";
import "./StoreInfo.css";
import OperatingHours from "../../components/OperatingHours/OperatingHours";

const CheckboxGroup = ({ days, onChange }) => {
  return (
    <div className="checkbox-group1">
      {days.map((day, index) => (
        <label key={index} className={`checkbuttons-frame checkbuttons-frame${index}`}>
          <div className={`checkboxtitleweekday${index}`}>{day.day}</div>
          <input
            className={`closeddaycheckbutton${index}`}
            type="checkbox"
            checked={day.isChecked}
            onChange={(e) => onChange(index, e.target.checked)}
          />
        </label>
      ))}
    </div>
  );
};

const StoreInfo = () => {
  // const [storePhoto, setStorePhoto] = useState(null);
  // const inputFileRef = useRef(null);
  const fileStorePhotoInputRef = useRef(null);
  const [storeName, setStoreName] = useState('');
  const [storeIntroduction, setStoreIntroduction] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [menuInputs, setMenuInputs] = useState([<StoreMenuInput />]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the uploaded image to the storemenuchoosebutton-icon
        const img = document.querySelector(".storephotochoosebutton-icon");
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileInput = () => {
    // Trigger file input click
    fileStorePhotoInputRef.current.click();
  };

  const handleStoreNameChange = (e) => {
    if (e.target.value.length <= 30) {
      setStoreName(e.target.value);
    }
  };

  const handleStoreIntroductionChange = (e) => {
    if (e.target.value.length <= 500) {
      setStoreIntroduction(e.target.value);
    }
  };

  const handlePhoneNumberChange = (e) => {
    let inputPhoneNumber = e.target.value.replace(/\D/g, ''); // 숫자만 허용
    if (inputPhoneNumber.length === 9) {
      // 9자리일 때
      inputPhoneNumber = inputPhoneNumber.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
    } else if (inputPhoneNumber.length === 10 || inputPhoneNumber.length === 11) {
      // 10자리 또는 11자리일 때
      inputPhoneNumber = inputPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    } else if (inputPhoneNumber.length === 12) {
      // 12자리일 때
      inputPhoneNumber = inputPhoneNumber.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    setPhoneNumber(inputPhoneNumber);
  };

  const [closedDays, setClosedDays] = useState([
    { day: "월요일", isChecked: false },
    { day: "화요일", isChecked: false },
    { day: "수요일", isChecked: false },
    { day: "목요일", isChecked: false },
    { day: "금요일", isChecked: false },
    { day: "토요일", isChecked: false },
    { day: "일요일", isChecked: false },
  ]);

  const handleDayChange = (index, isChecked) => {
    setClosedDays((prevDays) => {
      const updatedDays = [...prevDays];
      updatedDays[index].isChecked = isChecked;
      return updatedDays;
    });
  };

  const handleMenuAddButtonClick = () => {
    setMenuInputs(prevInputs => [...prevInputs, <StoreMenuInput />]);
  };

  return (
    <div className="storeinfo">
      <Header />
      <div className="wed-start-hour">
        <nav className="nav">
          <div className="navBg" />
          <div className="div56">홍길동님, 반가워요!</div>
          <div className="navgroup">
            <Link to="/storemain" className="navWaiting">웨이팅 관리</Link>
            <Link to="/reservemain" className="navReserve">예약 관리</Link>
            <Link to="/storeinfo" className="navStoreMain">가게 관리</Link>
            <div className="navReview">리뷰 관리</div>
          </div>
        </nav>
        <section className="storeinfobody">
          <div className="storeinfobggrey" />
          <div className="sun-start-time">
            <div className="storeinfobgwhite" />
            <div className="storeinfotitle">
              <div className="storeinfotitlebox" />
              <div className="input">가게 정보</div>
            </div>
            <div className="storephoto">
              <div className="storephotobox" />
              <div className="div">가게 대표 사진</div>
                <img
                  className="storephotochoosebutton-icon"
                  loading="eager"
                  alt=""
                  src="/storephotochoosebutton.svg"
                  onClick={openFileInput}
                />
                <input
                  ref={fileStorePhotoInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
            </div>
            <div className="storename">
              <div className="storenamebox" />
              <div className="div1">상호명</div>
              <div className="storenameinput">
                <div className="storenameinputbox" />
                <input
                  className="input1"
                  placeholder="가게 상호명을 입력해주세요."
                  type="text"
                  value={storeName}
                  onChange={handleStoreNameChange}
                />
                <div className="input-counter">{storeName.length}/30</div>
              </div>
            </div>
            <div className="storeintroduce">
              <div className="storeintroducebox" />
              <div className="div2">가게 소개</div>
              <div className="input-counter-box">
                <textarea
                  className="storeintroduceinput"
                  placeholder="가게에 대한 소개를 입력해주세요."
                  rows={7}
                  cols={50}
                  value={storeIntroduction}
                  onChange={handleStoreIntroductionChange}
                />
                <div className="input-counter">{storeIntroduction.length}/500</div>
              </div>
            </div>
            <div className="storeadress">
              <div className="storeadressbox" />
              <div className="wed-start-frame">
                <div className="div3">가게 주소</div>
              </div>
              <div className="thu-start-frame">
                <div className="storepostnumber">
                  <div className="storepostnumberbox" />
                  <div className="fri-start-frame">00000</div>
                </div>
                <button className="storepostnumberfindbutton">
                  <div className="storepostnumberfindbox" />
                  <div className="div4">우편번호 찾기</div>
                </button>
              </div>
              <div className="storeadresstop">
                <div className="storeadresstopbox" />
                <div className="input2">가게 주소</div>
              </div>
              <div className="storeadressinput">
                <div className="storeadressinputbox" />
                <input className="input3" placeholder="상세정보 입력" type="text" />
              </div>
            </div>
            <div className="storecallnumber">
              <div className="storecallnumberbox" />
              <div className="div5">가게 전화번호</div>
              <div className="storecallnumberinput">
                <div className="storecallnumberinputbox" />
                <input
                  className="input4"
                  placeholder="가게 전화번호를 입력해주세요."
                  type="text"
                  maxLength={14}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>
            <div className="storetimedaymenu">
              <div className="storetimedaymenubox" />
              <div className="input5">운영 정보 입력</div>
            </div>
            <OperatingHours />
            <div className="closeddayb">
              <div className="closeddaybox" />
              <div className="div42">휴무일</div>
              <CheckboxGroup days={closedDays} onChange={handleDayChange} />
            </div>
            <div className="storememutitle">가게 메뉴</div>
            <div className="storememutopbar">
              <div className="storememutopbarbox" />
              <div className="storememuimg">
                <div className="div50">사진</div>
              </div>
              <div className="storememuname">
                <div className="storememunamebox" />
                <div className="div51">상품명</div>
              </div>
              <div className="storememuprice">
                <div className="storememupricebox" />
                <div className="div52">가격</div>
              </div>
              <div className="storememuexplain">
                <div className="storememuexplainbox" />
                <div className="div53">설명</div>
              </div>
            </div>
            <div className="store-menu">
              {menuInputs.map((input, index) => (
                <div key={index}>{input}</div>
              ))}
            </div>
            <div className="add-button-frame">
              <div className="add-button-frame1">
                <div className="add-button" onClick={handleMenuAddButtonClick}>
                  <img className="storememuaddbutton-icon" loading="eager" alt="" src="/storememuaddbutton.svg" />
                </div>
                <button className="requestbutton">
                  <div className="requestbox" />
                  <div className="div54">등록 요청하기</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StoreInfo;
