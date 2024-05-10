import styled from "@emotion/styled"

export const OrderListWrap = styled.div`
.date_select{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #D9D9D9;
    padding: 5px 15px;

}
.btn button{
    color: #B99470;
    border: 1px solid #B99470;
    padding: 5px;
    border-radius: 800px;
}
.list_wrap{
    margin-top: 20px;
}
ul li{
    display: flex;
    padding: 15px;
    border-bottom: 1px solid #D9D9D9;
}
ul li .left_area{
    width: 75px;
    height: 75px;
    min-width: 75px;
}
ul li .left_area .img_wrap img{
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

ul li .right_area{
    width: calc(100% - 75px);
    display: flex;
    flex-direction: column;
    padding-left: 20px;
}
ul li .right_area .info{
    display: flex;
    gap: 15px;
}
ul li .right_area .info .box02{
    font-weight: 700;
}
`