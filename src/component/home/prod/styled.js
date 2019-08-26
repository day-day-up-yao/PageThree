import styled from "styled-components";
export const Prodstyle = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    background:#eee;
    .pro_top{
        width:100%;
        display:flex;
        flex-direction: column;
    }
    .proimg{
        width:100%;
        text-align:center;
        img{
            width:100%;
        }
    }
    .pro_C ul{
        width:100%;
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding:0.1rem;
        li{
            display:flex;
            flex-direction: column;
            background:#fff;
            padding:0.1rem 0.14rem;
            margin-top:0.1rem;
            p{
                width:0.85rem;
                height:0.85rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            span{
                color:#ff6900;
            }
            b{
                padding:0.1rem 0;
            }

        }
    }


`