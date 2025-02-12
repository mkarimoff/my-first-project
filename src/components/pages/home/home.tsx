import { CategoryCon, CategoryDiv, CategoryWrap, DelivCon, HomeContainer, HomeInfo, HomeMain, MoneyCon, ProductsMain, SecureCon,  SupportCon, } from "./style"
import chair from "../../../assets/images/chair.png"
import cyrcle from "../../../assets/svg/cyrcle.svg"
import delivery from "../../../assets/svg/delivery.svg"
import support from "../../../assets/svg/support.svg"
import security from "../../../assets/svg/security.svg"
import arrow from "../../../assets/svg/round-arrow.svg"
import sofa from "../../../assets/images/sofa.png"
import light from "../../../assets/images/light.webp"
import chair2 from "../../../assets/images/chair-category.png"
import drawer from "../../../assets/images/drawer.jpg"
import table from "../../../assets/images/wooden-table.avif"
import decor from "../../../assets/images/decor.webp"

const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeMain>
        <div className="bg-image-left">
          <div className="Home-left">
            <img src={cyrcle} alt="change-img" style={{width:'150px',marginBottom:'-100px',marginLeft:'-60px'}} />
            <p>
               Save Upto 50%!
             </p>
             <h3>
               Clean & Classic <br />
                Hand made wood <br />
                furniture
             </h3>
             <button><span>Explore</span></button>
          </div>
        </div>
        <div>
           <img src= {chair} alt="chair-image" style={{width:'500px',height:'530px'}}/>
        </div>
      </HomeMain>
      <HomeInfo>
        <DelivCon>
           <div>
              <img src={delivery} alt="delivery-icon" />
              <b>Fast Delivery</b>
              <p>Delivery within 24 Hours in <br /> any Place</p>
           </div>
        </DelivCon>
        <SupportCon>
           <div>
              <img src={support} alt="support-icon" />
              <b>24/7 Support</b>
              <p>Get our support any time at <br /> any hour</p>
           </div>
        </SupportCon>
        <SecureCon>
           <div>
              <img src={security} alt="security-icon" />
              <b>Secure Shopping</b>
              <p>Highly secured online payment <br /> method </p>
           </div>
        </SecureCon>
        <MoneyCon>
           <div className="moneyback-div">
              <img src={arrow} alt="arrow-icon" />
              <b>Moneyback Guarantee </b>
              <p>Guaranteed money back in <br /> 30 days </p>
           </div>
        </MoneyCon>
      </HomeInfo>
      <CategoryCon>
         <div>
            <h2>Categories</h2>
            <p>Don't Miss The  Most Popular Products!</p>
         </div>
         <CategoryWrap>
          <CategoryDiv >
            <img src={sofa} alt="img" />
            <div className='text-wrap'>
            <b>Sofas</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>200$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={light} alt="img" />
            <div className='text-wrap'>
            <b>Lights</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>120$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={chair2} alt="img" />
            <div className='text-wrap'>
            <b>Chairs</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>120$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={drawer} alt="img" />
            <div className='text-wrap'>
            <b>Drawers</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>130$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={table} alt="img" />
            <div className='text-wrap'>
            <b>Wooden Tables</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>90$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={decor} alt="img" />
            <div className='text-wrap'>
            <b>Home Decor</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>202$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={sofa} alt="img" />
            <div className='text-wrap'>
            <b>Sofa</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>200$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={light} alt="img" />
            <div className='text-wrap'>
            <b>Lights</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>120$</p>
             </div>
            </div>
          </CategoryDiv>
         </CategoryWrap>
      </CategoryCon>
      <ProductsMain>
        <div className="products-header">
          <h1>Popular Products</h1>
          <p>Don't Miss The  Most Popular Products!</p>
        </div>
        <div>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
          <p>Discounted</p>
          <p>On Sale</p>
        </div>
      </ProductsMain>
    </HomeContainer>
  )
}

export default HomeComponent