import styled from "styled-components";

export const Searchstyled = styled.div`
background:#eee;
height:100%;
position: relative;
.S_top{
    width:100%;
    height:0.5rem;
    line-height:0.5rem;
    display:flex;
    justify-content: space-between;
    padding:0.02rem 0.1rem 0.05rem 0.1rem;
    border-bottom:1px solid #eee;
    background:#fff;
    z-index:10;
}

.iconp span{
    font-size:24px;
    color:#FF6600;
}
.head_p{
    width:2.63rem;
    background:#eee;
    height:0.3rem;
    line-height:0.3rem;
    margin-top:0.07rem;
    border-radius:0.05rem;
    padding-left:0.1rem;
    input{
        height:0.2rem;
        border:none;
        background:#eee;
        color:#aaa;
        margin-left:0.05rem;
    }
}
.herd_sp span{
    padding:0.05rem;
    background:#ff6900;
    border-radius:0.05rem;
    color:#fff;
}
.S_con{
    margin-top:0.1rem;
    background:#fff;
    .con_hot{
        width:100%;
        padding:0.1rem 0.15rem;

    }
    p{
        display:flex;
        flex-wrap: wrap;
        padding:0.1rem;
        span{
            padding:0.07rem 0.1rem;
            background:#eee;
            font-size:14px;
            border-radius: 0.05rem;
            color:#000;
            margin:0.05rem;
           
        }
    }
}
.S_Btn{
    width:100%;
    position: absolute;
    top:0.5rem;
    left:0;
    display: flex;
    flex-direction: column;
    padding:0.1rem;
    z-index:11;
    background:#fff;
    p{
        border-bottom:1px solid #eee;
        padding:0.1rem 0;
    }
}
`