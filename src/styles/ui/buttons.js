import styled from "@emotion/styled";
import { colors, mq, shadow } from "../basic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 버튼 기본 스타일 정의
const defaultBtnStyle = {
  width: "20.875rem",
  height: "2.8125rem",
  fontSize: "1rem",
  fontWeight: "700",
  border: "none",
  borderRadius: ".3125rem",
  cursor: "pointer",
};

// 최소크기 버튼 기본 스타일
const defaultMinBtnStyle = {
  width: "4.6875rem",
  height: "2.1875rem",
  fontSize: "1rem",
  fontWeight: "700",
  border: "none",
  borderRadius: ".3125rem",
  cursor: "pointer",
};

// 1/3 버튼 기본 스타일
const defaultOneThirdBtnStyle = {
  width: "6.25rem",
  height: "2.1875rem",
  fontSize: "1rem",
  fontWeight: "700",
  border: "none",
  borderRadius: ".3125rem",
  cursor: "pointer",
};

//
// 버튼 마우스오버 효과
const buttonHover = {
  boxShadow: "0rem 0rem .625rem 0rem rgba(0, 0, 0, 0.15)",
};

// 색상 별 버튼 style

// 비활성화
export const DisabledBtn = styled.button`
  ${defaultBtnStyle}
  background: ${colors.disabled};
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

// 활성화
export const MainBtn = styled.button`
  ${defaultBtnStyle}
  background: ${colors.main};
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

// 포인트(중요색상)
export const PointBtn = styled.button`
  ${defaultBtnStyle}
  background: ${colors.point};
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

// 담기
export const PutBtn = styled.button`
  ${defaultMinBtnStyle}
  background: ${colors.main};
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

// 주문하기
export const OrderBtn = styled.button`
  ${defaultOneThirdBtnStyle}
  background: ${colors.point};
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

// input 삭제 버튼
export const Xmark = styled(FontAwesomeIcon)`
  position: absolute;
  right: 2%;
  top: 10%;
  color: #bababa;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: ${colors.point};
  }
`;

// 약관동의 선택
export const termsActiveBtn = styled.button`
  ${defaultBtnStyle}
  background: ${colors.main};
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

// 약관동의 선택
export const termsDisabledBtn = styled.button`
  ${defaultBtnStyle}
  background: ${colors.disabled};
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    ${buttonHover}
  }
`;

// // 기본색상
// export const colors = {
//     // 헤더, 푸터 배경색
//     bar: "#F7F7F7",

//     // 메인 마리골드색
//     main: "#BF8A30",
//     // 포인트 갈색
//     point: "#6A1B1B",
//     // 성공 초록색
//     green: "#009E73",
//     // 경고 빨간색
//     red: "#EB5757",

//     // 흰색, 검정색
//     black: "#444444",
//     white: "#ffffff",

//     // 비활성화 배경색
//     disabled: "#D9D9D9",
//   };

export const BtnWrap = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  /* 오른쪽 정렬 */
  ${props => (props.right ? `justify-content: flex-end` : null)};
  /* 가운데 정렬 */
  ${props => (props.center ? `justify-content: center` : null)};
`;
