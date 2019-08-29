import styled from "styled-components";
export const Herderstyled = styled.div`
    a{
        color:#000;
        display:flex;
    }
    width:100%;
    height:0.5rem;
    line-height:0.5rem;
    display:flex;
    justify-content: space-between;
    padding:0.05rem 0.1rem;
    border-bottom:1px solid #eee;
    position: fixed;
    top:0;
    bottom:0;
    background:#fff;
    z-index:10;
    .head_p{
        width:2.63rem;
        background:#eee;
        height:0.3rem;
        margin-top:0.07rem;
        line-height:0.3rem;
        border-radius:0.05rem;
    }
    .herd_sp span{
        font-size:24px;
    }
    .cityNames{
        display:block;
        width:0.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align:center
    }
`
