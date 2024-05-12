import React from 'react'

const ResignInfo = ({userData}) => {
    console.log(userData)
  return (
    <>
      <div className="dash_borard">
        <div className="list_st point_wrap">
          <div>
            보유 스탬프
          </div>
          <div className="right_zone">
            <div className="num">{userData.stamp}</div>점
          </div>
        </div>
        <div className="list_st coupon_wrap">
          <div className="left_zone">
            보유 쿠폰
          </div>
          <div className="right_zone">
            <span className="num">{userData.coupon}</span>장
          </div>
        </div>
      </div>
      <div className="guide_text">
        <ul>
          <li>한 번 삭제된 정보는 복구가 불가능합니다.</li>
          <li>탈퇴한 회원은 30일간 재가입이 불가합니다.</li>
          <li>보유한 포인트는 탈퇴시 함께 소멸됩니다.</li>
          <li>보유한 쿠폰은 탈퇴시 함께 소멸됩니다.</li>
          <li>이미 결제하신 건에 대해서는 탈퇴 이후 결제취소 및 결제수단 변경은 불가합니다.</li>

        </ul>
      </div></>
  )
}

export default ResignInfo