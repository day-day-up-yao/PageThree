import styled from "styled-components";

export const Tabstyle = styled.div`
    width:100%;
    padding-bottom:0.6rem;
   
    ul{
        width:100%;
        overflow: auto;
        display: flex;
        justify-content: space-between;
        padding:0.1rem 0;
        background:#fff;
        li{
            width:0.8rem;
            border-right:1px solid #ccc;
            padding:0 0.2rem;
            p{
                width:0.15rem;
                height:0.15rem;
                margin:0 auto;
                img{
                    width:100%;
                    height:100%;
                }
            }
            span{
                display:block;
                white-space: nowrap;
                font-size:10px;
            }
           
        }
    }
    .tab_B{
        width:100%;
    }
    .tab_B{
        div{
            width:100%;
            overflow:visible;
            display: flex;
            justify-content: space-between;
            background:#eee;
            flex-wrap: wrap;
            padding: 0 0.1rem;
            li{
                display: flex;
                width:1.68rem;
                flex-direction: column;
                border:none;
                background:#fff;
                margin-top:0.1rem;
                flex-wrap: wrap;
                flex-shrink:0;
                padding:0.1rem;

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
                    color:#ff6900;
                    i{
                        margin-left:0.7rem;
                        font-size:18px;
                    }
                }
            }
        }
    }
`