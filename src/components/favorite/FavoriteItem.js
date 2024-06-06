import React from "react";
import {
  FavoriteItemWrap,
  ItemDetail,
  ItemImg,
} from "../../styles/FavoriteStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const FavoriteItem = ({ customData }) => {
  console.log(customData);
  return (
    <>
      {customData.map((item, index) => (
        <FavoriteItemWrap key={index}>
          <div>
            <ItemImg>
              <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" />
            </ItemImg>
            <ItemDetail>
              <div>
                <span>{item.myname}</span>
                <span>{item.name}</span>
                <span>100,000원</span>
              </div>
              {/* {item.pk === 1 && ( */}
              <div>
                <span>샷: {item.shot}</span>
                <span>얼음: {item.ice}</span>
                <span>크림: {item.cream}</span>
              </div>
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
            <button>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button>주문하기</button>
          </div>
        </FavoriteItemWrap>
      ))}
    </>
  );
};

export default FavoriteItem;
