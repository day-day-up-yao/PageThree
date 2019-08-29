import styled from "styled-components"

export const Searchothstyle = styled.div`
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
    position:fixed;
    top:0;
    left:0
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
.Oth_C{
    width:100%;
    display: flex;
    justify-content: space-between;
    padding:0.2rem;
    position: relative;
    position:fixed;
    top:0.5rem;
    left:0;
    background:#fff;
    span{
        color:#ff6900;
    }
    .Con_l{
        width:100%;
        position: absolute;
        top:0.5rem;
        left:0;
        padding:0 0.2rem;
        background:#FFF;
        p{
            padding:0.06rem 0;
            height:0.4rem;
        }
    }
}
.Oth_Btn{
    width:100%;
    padding-top:1rem;
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
            padding-left:0.25rem;
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