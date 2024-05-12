import styled from "@emotion/styled"

export const ResignWrap = styled.div`
.alert_text{
    margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
}

.member_info{
    display: flex;
    gap: 0 10px;
    margin-top: 15px;
}

.member_info dl .dt{
    display: flex;
    align-items: center;
    padding-right: 3px;
}

.dash_borard{
    background-color: #d9d9d9;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    min-height: 150px;
    padding: 15px;
}

.dash_borard .list_st{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dash_borard .list_st .right_zone{
    display: flex;
    align-items: center;
}

.dash_borard .list_st .right_zone .num{
    color: red;
}

.guide_text{
    margin-top: 25px;
}

.guide_text ul li{  
    display: flex;   
    flex-direction: column;
    gap: 3px;
    position: relative;
    padding-left: 13px;
}

.guide_text ul li::before{
    content: "";
    position: absolute;
    top: 9px;
    left: 0px;
    width: 4px;
    height: 4px;
    background-color: royalblue;
}

.agree_wrap{
    margin-top: 30px;
}

.agree_wrap label{
    display: flex;
    align-items: center;
    gap: 0 5px;
    >input{
        cursor: pointer;
    }
}

.agree_wrap label p{
    font-weight: 700;
}

.button_wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    padding: 15px 15px;
    margin-top: 15px;
}

.button_wrap button{
    flex: 1;
    padding: 15px 13px;
    border-radius: 10px;
    font-weight: 900
}
.cancel{
    background-color: #fff;
    border: 1px solid #b99470;
    color: #b99470;
    cursor: pointer;
}
.resign_btn{
    background-color: #683732;
    border: 1px solid  #683732;
    color: white;
    cursor: pointer;
}
`