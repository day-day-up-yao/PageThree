import styled from "styled-components";
export const Shopstyle = styled.div`
    display: flex;
    flex-direction: column;
    .shop_t{
        width:100%;
        display:flex;
        justify-content: space-between;
        height:0.5rem;
        line-height:0.5rem;
        background:#fff;
        position:fixed;
        top:0;
        left:0;
        border-bottom:1px solid #eee;
        padding:0 0.1rem;
        p{
            font-size:18px;
        }
        span{
            color:#FF9900;
            font-size:24px;
        }
    }
    .shopNo{

        .shop_cer{
            display: flex;
            flex-direction: column;
            background:#eee;
            padding:0.8rem 0.6rem 0.4rem 0.6rem;

            span{
                display:block;
                width:2.6rem;
                font-size:14px;
                padding:0.2rem 0;
            }
            .shopgoods{
                border:1px solid #ccc;
                width:1.2rem;
                text-align:center;
                padding:0.1rem;
                border-radius:0.5rem;
                margin-left:0.7rem;

            }
        }
        .shopimg{
            width:1.49rem;
            height:1.2rem;
            margin-left:0.5rem;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .btn_top{
        height:0.4rem;
        width:100%;
        background:#eee;
        line-height:0.4rem;
        text-align:center;
    }
    .Oth_Btn{
        width:100%;
        padding-bottom:0.6rem;

        ul{
            width:100%;
            display:flex;
            justify-content:space-between;
            background:#eee;
            padding:0.07rem;
            flex-wrap: wrap
        }
    }
    li{
        display:flex;
        flex-direction: column;
        padding:0.1rem;
        font-size:13px;
        background:#fff;
        margin-top:0.1rem;
        p{
            width:1.4rem;
            text-overflow: ellipsis;
            overflow: hidden; 
            white-space: nowrap;
            b{
                background:red;
                color:#fff;
                border-radius:0.04rem;
                padding:0.01rem;
            }
            span{
                font-size:14px;
               
            }
        }
        .Othspn{
            padding:0.05rem 0;
            span{
                background:red;
                color:#fff;
                border-radius:0.04rem;
                padding:0.01rem;
                margin-right:0.1rem;
            }
        }
        .othprice{
            span{
                font-size:18px;
                color:#ff6900;
            }
        }
        .othtitle{
            font-size:12px;
            b{
                color:#ff6900;
            }
            strong{
                color:#ff6900;
            }
            i{
                color:#ff6900;
                padding-left:0.2rem;
            }
        }
    }
    .Othimg{
        width:1.56rem;
        height:1.56rem;
        
        img{
            width:100%;
            height:100%;
        }
    }
`