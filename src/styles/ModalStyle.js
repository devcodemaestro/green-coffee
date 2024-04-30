import styled from "@emotion/styled";

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
    position: relative;
    width: 300px;
    height: 400px;
    margin: 0 auto;
    padding-top: 60px;
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
    padding-top: 30px;
    font-size: 24px;
    color: #444;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      padding-top: 40px;
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
  width: 250px;
  height: 45px;
  font-size: 16px;
  background: #b99470;
  color: #fff;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
