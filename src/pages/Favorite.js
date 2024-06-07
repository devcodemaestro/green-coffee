import React, { useEffect, useState } from "react";
import { FavoriteWrap } from "../styles/FavoriteStyle";
import FavoriteItem from "../components/favorite/FavoriteItem";
import { deleteCustomMenu, getCustomMenu } from "../api/menuAxios";
import Paging from "../components/Paging";
import ConfirmModal from "../components/modals/ConfirmModal";
import { postCartAdd } from "../api/cartAxios";

const Favorite = () => {
  const [customData, setCustomData] = useState([]);
  const [totlaPrice, setTotalPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [resultModal, setResultModal] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const fetchData = async () => {
    await getCustomMenu(setCustomData, page, setCount);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handelDelete = async myname => {
    const formData = { myname: myname };
    const result = await deleteCustomMenu(formData);
    if (result) {
      setModalOpen(true);
      setErrMsg(result);
    }
    fetchData();
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCartAdd = async (size, shot, cream, ice, menu_id) => {
    const formData = {
      menuId: menu_id,
      quantity: 1,
      size: size,
      ice: ice,
      shot: shot,
      cream: cream,
    };
    const result = await postCartAdd(formData);
    console.log(result);
    if (result === 200) {
      setResultModal(true);
      setResultMsg("장바구니에 상품을 추가했습니다.");
    }
  };

  const handleCartAddOk = () => {
    setResultModal(false);
  };

  return (
    <FavoriteWrap>
      {customData ? (
        <>
          <FavoriteItem
            customData={customData}
            handelDelete={handelDelete}
            handleCartAdd={handleCartAdd}
          />
          <Paging page={page} setPage={setPage} count={count} />
        </>
      ) : (
        <div className="no-item">
          <span>나만의 음료를 추가해보세요!</span>
        </div>
      )}

      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleOk}>
          <span>{errMsg}</span>
        </ConfirmModal>
      )}
      {resultModal && (
        <ConfirmModal open={resultModal} onConfirm={handleCartAddOk}>
          <span>{resultMsg}</span>
        </ConfirmModal>
      )}
    </FavoriteWrap>
  );
};

export default Favorite;
