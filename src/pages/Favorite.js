import React, { useEffect, useState } from "react";
import { FavoriteWrap } from "../styles/FavoriteStyle";
import FavoriteItem from "../components/favorite/FavoriteItem";
import { deleteCustomMenu, getCustomMenu } from "../api/menuAxios";
import Paging from "../components/Paging";
import ConfirmModal from "../components/modals/ConfirmModal";

const Favorite = () => {
  const [customData, setCustomData] = useState([]);
  const [totlaPrice, setTotalPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");

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
  return (
    <FavoriteWrap>
      {customData ? (
        <>
          <FavoriteItem customData={customData} handelDelete={handelDelete} />
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
    </FavoriteWrap>
  );
};

export default Favorite;
