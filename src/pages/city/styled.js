import styled from "styled-components";
export const Citystyle = styled.div`
height:100%;
.city_body {
    background: #ebebeb;
    height: 100%;
    overflow: auto;
  }


  .hot_title,
  .city_title_letter {
    line-height: 0.3rem;
    padding-left: 0.1rem;
    font-size: 0.16rem;
  }
  .cityspn{
    font-size:25px;
    padding-right:0.1rem;
  }
  
  .hot_city_list,
  .city_list_name {
    background: #f5f5f5;
    padding-bottom: 0.16rem;
    padding-right: 0.2rem;
    display: flex;
    flex-wrap: wrap;
  }
  .hot_city_name {
    margin-top: 0.15rem;
    margin-left: 0.13rem;
    width: 1rem;
    height: 0.33rem;
    background: #fff;
    text-align: center;
    line-height: 0.33rem;
    font-size: 0.16rem;
    border: 2px solid #e6e6e6;
  }
  
  .city_list > div {
    width: 100%;
  }
  .city_list_name_item {
    line-height: 0.3rem;
    margin-left: 0.13rem;
    width: 100%;
    border-bottom: 2px solid #e6e6e6;
    font-size: 0.16rem;
    padding:0.05rem 0;
  }
  

  .city_list_index {
    position: fixed;
    right: 0;
    top: 1rem;
  }
  .city_list_index > div {
    padding: 0 0.05rem;
    font-size: 0.16rem;
  }
  .city_list_index p{
      padding:0.05rem 0;
  }
`