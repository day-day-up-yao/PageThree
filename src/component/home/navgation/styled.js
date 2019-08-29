import styled from "styled-components";
export const Navgationstyled = styled.div`
    width:100%;
    height:1.42rem;
    ul{
        width:100%;
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap
    }
    li{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        padding:0 0.12rem;
        flex-shrink: 0;
        margin-top:0.1rem;
        text-align: center;
        margin:center;

    }
    p{
        width:0.36rem;
        height:0.36rem;
        border-redius:0.18rem;
        margin:auto;
    }
    p img{
        width:100%;
        height:100%;
    }
    span{
        font-size:13px;
        padding:0.05rem 0;
    }
`