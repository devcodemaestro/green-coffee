import React from "react";
import {
  FavoriteItemWrap,
  ItemDetail,
  ItemImg,
} from "../../styles/FavoriteStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const FavoriteItem = ({ customData, handelDelete, handleCartAdd }) => {
  console.log(customData.content);
  return (
    <>
      {customData?.content?.map((item, index) => {
        const menuPrice = item.menu?.menu_price || 0;
        const totalOptionPrice =
          item?.size * item.menu?.price_size +
          item?.shot * item.menu?.price_shot +
          item?.cream * item.menu?.price_cream;
        const totalMenuPrice = menuPrice + totalOptionPrice;
        return (
          <FavoriteItemWrap key={index}>
            <div>
              <ItemImg>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${item.menu.menu_imgurl}`}
                  alt=""
                />
              </ItemImg>
              <ItemDetail>
                <div>
                  <span>{item.myname}</span>
                  <span>{item.menu.name}</span>
                </div>
                {/* {item.pk === 1 && ( */}
                <div>
                  <span>샷: {item.shot}</span>
                  <span>얼음: {item.ice}</span>
                  <span>크림: {item.cream}</span>
                </div>
                <div>{totalMenuPrice}원</div>
                {/* )} */}
                {/* {item.pk === 2 && (
                <div>
                  <span>잼: {item.jam}</span>
                  <span>버터: {item.butter}</span>
                  <span>치즈: {item.cheese}</span>
                </div>
              )}
              {item.pk === 3 && (
                <div>
                  <span>샷: {item.shot}</span>
                  <span>얼음: {item.ice}</span>
                  <span>크림: {item.cream}</span>
                </div>
              )} */}
              </ItemDetail>
            </div>
            <div className="buttons">
              <button onClick={() => handelDelete(item.myname)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <button
                onClick={() =>
                  handleCartAdd(
                    item?.size,
                    item?.shot,
                    item?.cream,
                    item?.ice,
                    item?.menu.menu_id,
                  )
                }
              >
                주문하기
              </button>
            </div>
          </FavoriteItemWrap>
        );
      })}
    </>
  );
};

export default FavoriteItem;
