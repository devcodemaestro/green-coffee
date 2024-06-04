import React, { useEffect, useState } from "react";
import { ChangeOptionWrap } from "../../styles/MenuCartStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";

const ChangeOption = ({
  menuCartData,
  setShowModal,
  handleIncrease,
  handleDecrease,
  payload,
}) => {
  const [selectMenu, setSelectMenu] = useState(null);
  const [formData, setFormData] = useState({
    size: 0,
    ice: 0,
    shot: 0,
    cream: 0,
    sizePrice: 1000,
    shotPrice: 500,
    creamPrice: 500,
    myname: "",
  });

  const changeOptionEvent = () => {
    console.log("옵션변경");
  };

  useEffect(() => {
    const menuData = menuCartData.find(
      item => item.menu.menu_id === payload.menu_id,
    );
    setSelectMenu(menuData);
    if (menuData) {
      setFormData(prevFormData => ({
        ...prevFormData,
        ice: menuData.ice,
        size: menuData.size,
        shot: menuData.shot,
        cream: menuData.cream,
      }));
    }
  }, []);

  if (!selectMenu) {
    return (
      <>
        <Loading />
      </>
    );
  }
  const handlePlusMinus = (option, value) => {
    setFormData(prev => {
      const newValue = prev[option] + value;

      const updatedValue = newValue < 0 ? 0 : newValue;
      return {
        ...prev,
        [option]: updatedValue,
      };
    });
  };
  const { menu } = selectMenu;

  return (
    <ChangeOptionWrap>
      <div className="modal_box">
        <span className="modal_title">옵션변경</span>
        <div className="modal_img">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/${menu.menu_imgurl}`}
            alt=""
          />
        </div>
        <div className="modal_options">
          <ul className="size-radio-wrap">
            <li>사이즈</li>
            <li className="size-radio">
              <input
                type="radio"
                id="tall-size"
                name="size"
                value={0}
                checked={formData.size === 0}
                onChange={e =>
                  setFormData({ ...formData, size: parseInt(e.target.value) })
                }
              />
              <label htmlFor="tall-size">Tall</label>
              <input
                type="radio"
                id="grande-size"
                name="size"
                value={1}
                checked={formData.size === 1}
                onChange={e =>
                  setFormData({ ...formData, size: parseInt(e.target.value) })
                }
              />
              <label htmlFor="grande-size">Grande</label>
              <input
                type="radio"
                id="venti-size"
                name="size"
                value={2}
                checked={formData.size === 2}
                onChange={e =>
                  setFormData({ ...formData, size: parseInt(e.target.value) })
                }
              />
              <label htmlFor="venti-size">Venti</label>
            </li>
          </ul>
          <ul className="ice-radio-wrap">
            <li>
              <span>얼음</span>
              <div className="ice-radio">
                <input
                  type="radio"
                  id="ice-small"
                  name="ice"
                  value={0}
                  checked={formData.ice === 0}
                  onChange={e =>
                    setFormData({ ...formData, ice: parseInt(e.target.value) })
                  }
                />
                <label htmlFor="ice-small">적게</label>
                <input
                  type="radio"
                  id="ice-middle"
                  name="ice"
                  value={1}
                  checked={formData.ice === 1}
                  onChange={e =>
                    setFormData({ ...formData, ice: parseInt(e.target.value) })
                  }
                />
                <label htmlFor="ice-middle">보통</label>
                <input
                  type="radio"
                  id="ice-large"
                  name="ice"
                  value={2}
                  checked={formData.ice === 2}
                  onChange={e =>
                    setFormData({ ...formData, ice: parseInt(e.target.value) })
                  }
                />
                <label htmlFor="ice-large">많이</label>
              </div>
            </li>
            <li>
              <span>샷 추가</span>
              <div>
                <div>+{formData.shotPrice}원</div>
                <div onClick={() => handlePlusMinus("shot", -1)}>
                  <FontAwesomeIcon icon={faMinus} />
                </div>
                <div>{formData.shot}</div>
                <div onClick={() => handlePlusMinus("shot", 1)}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </li>
            <li>
              <span>크림 추가</span>
              <div>
                <div>+{formData.creamPrice}원</div>
                <div onClick={() => handlePlusMinus("cream", -1)}>
                  <FontAwesomeIcon icon={faMinus} />
                </div>
                <div>{formData.cream}</div>
                <div onClick={() => handlePlusMinus("cream", 1)}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="modal_btns">
          <button onClick={() => setShowModal(false)}>취소</button>
          <button onClick={() => changeOptionEvent()}>확인</button>
        </div>
      </div>
    </ChangeOptionWrap>
  );
};

export default ChangeOption;
