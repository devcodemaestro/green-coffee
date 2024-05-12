import React from "react";
import { ChangeOptionWrap } from "../../styles/MenuCartStyle";

const ChangeOption = ({ setShowModal }) => {
  const options = [
    {option: '잼', price: '500원'},
    {option: '버터 추가', price: '500원'},
    {option: '치즈 추가', price: '500원'},
  ];

  const updateCount = flag => {
    flag == "plus" ? 'plus' : flag == "minus" ? 'minus' : null;
  }

  const changeOptionEvent = () => {
    console.log('옵션변경')
  };

  // jsx
  return (
    <ChangeOptionWrap>
      <div className="modal_box">
        <span className="modal_title">옵션변경</span>
        <div className="modal_img">
          <div className="img_wrap"></div>
        </div>
        <div className="modal_options">
          <span>옵션</span>
          {options.map((item, idx) => (
            <div key={idx} className="option_item">
              <span>{item.option}</span>
              <span>{item.price}</span>
              <div>
                <button onClick={() => updateCount('minus')}></button>
                <span>1</span>
                <button onClick={() => updateCount('plus')}></button>
              </div>
            </div>
          ))}
        </div>
        <div className="modal_btns">
          <button onClick={ () => changeOptionEvent() }>확인</button>
          <button onClick={ () => setShowModal(false) }>취소</button>
        </div>
      </div>
    </ChangeOptionWrap>
  );
};

export default ChangeOption;
