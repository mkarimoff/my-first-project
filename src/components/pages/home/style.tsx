import styled from "styled-components";

export const HomeContainer = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
`
export const HomeMain = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 600px;

.bg-image-left{
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: start;
     flex-direction: column;
p{
    color: var(--Home-2-Accent, #928E8B);
    font-size: 30px;
    font-weight: 400;
}
h3{
    color: var(--Text-Color, #252525);
    font-size: 67px;
    font-weight: 500;
    font-style: normal;
}
button{
    width: 196px;
    height: 57px;
    background-color: black;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 2px;
}
button:hover{
    background-color: #928E8B;
    border-radius: 25px;
    transition: 0.2s;
}
}
.Home-left{
    display: flex;
    flex-direction: column;
}
`
export const HomeInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DelivCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 245px;
    background: var(--product-background, #F6F6F6);
img{
    width: 61px;
}
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 150px;
}
`
export const SupportCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 245px;  
    background: var(--Home-2-Accent, #928E8B);
    color: white;
img{
    width: 61px;
}
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    
}
`
export const SecureCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 245px;  
    background: var(--Text-Color, #252525);
    color: white;
img{
    width: 61px;
}
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    
}
`
export const MoneyCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 245px;
    background: var(--Home-2-Background, #EFEBE8);
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-right: 150px;
    margin-left: 0px;
img{
    width: 53px;
}
}
`
export const CategoryCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top:100px;
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 200;
}    
`
export const CategoryWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1500px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 70px;
    padding: 0px 18px;
    margin-bottom:130px ;
`
export const CategoryDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 332px;
    height: 134px;
    background: var(--product-background, #F6F6F6);
    gap: 30px;
    cursor: pointer;
img{
    width: 117px;
    height: 101px;
}
b{
    color: var(--Text-Color, #252525);
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
}
h6{
    color: var(--Text-Color, #252525);
    font-size: 15px;
    font-weight: 400;
}
p{
    color: var(--Home-2-Accent, #928E8B);
    font-size: 15px;
    font-weight: 400;
}
.text-wrap{
    display: flex;
    flex-direction: column;
    text-align: start;
}
.price-wrap{
    display: flex;
    align-items: center;
    gap: 5px;
}
`
export const ProductsMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
.products-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
h1{
    color: var(--Text-Color, #252525);
    font-size: 36px;
    font-weight: 600;
}    
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 200;
}    
}  
`