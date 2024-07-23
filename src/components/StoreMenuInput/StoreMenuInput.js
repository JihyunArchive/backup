import { useMemo, useRef, useState } from "react";
import "./StoreMenuInput.css";

const StoreMenuInput = ({ propAlignSelf, propFlex }) => {
  const fileInputRef = useRef(null);
  const [inputLength, setInputLength] = useState('');
  const [formattedPrice, setFormattedPrice] = useState('');
  const [infoInputLength, setInfoInputLength] = useState('');
  const [imageSrc, setImageSrc] = useState("/storephotochoosebutton.svg"); // Default image source

  const storeMenuInputStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the uploaded image to the storemenuchoosebutton-icon
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileInput = () => {
    // Trigger file input click
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    if (e.target.value.length <= 20) {
      setInputLength(e.target.value);
    }
  };

  const handlePriceChange = (e) => {
    // Replace non-numeric characters with empty string
    const inputPrice = e.target.value.replace(/\D/g, '');
    // Format the price with comma every three digits
    const formatted = inputPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setFormattedPrice(formatted);
  };

  const handleInfoInputChange = (e) => {
    if (e.target.value.length <= 100) {
      setInfoInputLength(e.target.value);
    }
  };

  return (
    <div className="storemenuinput" style={storeMenuInputStyle}>
      <div className="storemenuinputbox" />
      <img
        className="storemenuchoosebutton-icon"
        loading="eager"
        alt=""
        src={imageSrc}
        onClick={openFileInput}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <div className="storemenunameinput">
        <div className="storemenunameinputbox" />
        <input
          className="div57"
          placeholder="상품명을 입력해주세요."
          type="text"
          value={inputLength}
          onChange={handleInputChange}
        />
        <span>{inputLength.length}/20</span>
      </div>
      <div className="storemenupriceinputgroup">
        <input
          className="store-memu-name"
          placeholder="0,000"
          type="text"
          value={formattedPrice}
          onChange={handlePriceChange}
        />
        <div className="div58">원</div>
      </div>
      <div className="storemenuexplaininput">
        <div className="storemenuexplaininputbox" />
        <textarea
          className="pinfo"
          rows={4}
          cols={100}
          placeholder="상품명을 입력해주세요."
          value={infoInputLength}
          onChange={handleInfoInputChange}
        />
        <span>{infoInputLength.length}/100</span>
      </div>
    </div>
  );
};

export default StoreMenuInput;
