import styled from "@emotion/styled";
import { colors } from "./basic";

export const ConfirmModalWarp = styled.div`
  position: absolute;
  .Confimmodal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    overflow: "unset";
  }
  .modalConfirm-wrapper {
    padding-top: 30px;
    position: relative;
    width: 300px;
    height: 150px;
    margin: 0 auto;
    border-radius: 8px;
    border: none;
    background-color: #fff;
    animation: modal-co-show 0.1s;
    overflow: hidden;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .modalConfirm-img {
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 130px;
      height: 130px;
      color: #683732;
    }
  }

  /* 모달 내용 */
  .modalConfirm-content {
    height: 100%;
    font-size: 16px;
    color: ${colors.black};
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    > div {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 15px 30px 0;
    }
    .modal-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      & button {
        width: 80px;
        height: 40px;
        font-size: 16px;
        background: ${colors.disabled};
        color: ${colors.black};
        border: none;
        border-radius: 6px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        :last-of-type {
          background: ${colors.main};
        color: ${colors.white};
        }
      }
    }
  }

  .Confimmodal.openConfirmModal {
    display: flex;
    align-items: center;
    animation: modal-co-bg-show 0.1s;
  }

  @keyframes modal-co-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-co-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalOkBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  background: ${colors.main};
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const ModalNoBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  background: ${colors.main};
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
