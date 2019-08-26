import styled from "styled-components";

export const Tabstyle = styled.div`
    width:%;
    padding-bottom:0.6rem;
   
    ul{
        display: flex;
        justify-content: space-between;
        padding:0.1rem 0;
        background:#fff;
        li{
            border-right:1px solid #ccc;
            padding:0 0.2rem;
           
        }
    }
    .tab_B{
        ul{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            background:#eee;
            li{
                display: flex;
                flex-direction: column;
                border:none;
                background:#fff;
                margin-top:0.1rem;
                p{
                    width:1.42rem;
                    height:0.85rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                b{
                    display:block;
                    width:1.42rem;
                    padding:0.1rem 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                span{
                    color:#ff6900
                }
            }
        }
    }
`