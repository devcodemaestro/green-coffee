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

export const PwaModalWrap = styled.div`
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
    .pwa-modal-ok {
      width: 80px;
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
      :last-of-type {
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

export const CartModalWrap = styled.div`
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
    padding-top: 40px;
    position: relative;
    width: 350px;
    height: 200px;
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
    font-size: 18px;
    color: ${colors.black};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
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
        width: 150px;
        height: 50px;
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
export const CustomConfirmModalWrap = styled.div`
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
    /* padding-top: 70px; */
    position: relative;
    width: 375px;
    height: 350px;
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
    font-size: 18px;
    color: ${colors.black};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .modal-title {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${colors.point};
      margin-bottom: 30px;
    }
    .modal-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding-bottom: 40px;
      .modal-img {
        > img {
          width: 120px;
          height: 150px;
          border-radius: 8px;
        }
      }
      .modal-name {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 15px;
        label {
          font-size: 17px;
          color: ${colors.point};
        }
        input {
          width: 200px;
          height: 30px;
          padding-left: 3px;
          font-size: 16px;
          border: none;
          border-bottom: 1px solid ${colors.disabled};
          margin-bottom: 10px;
        }
      }
    }
    .modal-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      & button {
        width: 150px;
        height: 50px;
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
export const TestModalWarp = styled.div`
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
    padding-top: 280px;
    position: relative;
    width: 400px;
    height: 600px;
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
      /* padding: 0 15px 30px 0; */
    }
    .modal-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      /* & button {
        width: 80px;
        height: 40px;
        font-size: 16px;
        background: ${colors.disabled};
        color: ${colors.black};
        border: none;
        border-radius: 6px;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
        :last-of-type {
          background: ${colors.main};
          color: ${colors.white};
        }
      } */
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

  .h4 {
    font-size: 20px;
    font-weight: 700;
    color: #333d4b;
  }
  .wrapper {
    width: 400px;
    height: 100%;
    margin: 0 auto;
  }
  .button {
    color: #f9fafb;
    background-color: #3182f6;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    white-space: nowrap;
    text-align: center;
    /* vertical-align: middle; */
    cursor: pointer;
    border: 0 solid transparent;
    user-select: none;
    transition:
      background 0.2s ease,
      color 0.1s ease;
    text-decoration: none;
    border-radius: 7px;
    padding: 11px 16px;
  }
  .button:hover {
    color: #fff;
    background-color: #1b64da;
  }
  .payment-widget-cache-1k0jlfl {
    width: 100px;
  }
`;
