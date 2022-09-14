import { CAROUSEL_DATA } from "../../constants/carousel";
import Carousal from "../../components/Carousal";
import style from './index.module.css'
import { CarouselItem } from "../../components/Carousal/CarouselItem/CarouseItem";

const Home = () => {
  return (
    <Carousal>
      {CAROUSEL_DATA.map(item => (
        <CarouselItem key={item.productId}>
          <div className={style.product_wrapper}>
            <div className={style.image_wrapper}>
              <img
                src={item.url}
                alt='product image'
                className={style.product}
              />
            </div>
            <p className={style.product_name}>{item.name}</p>
            <p className={style.product_price}>${item.price}</p>
          </div>
        </CarouselItem>
      ))}
    </Carousal>
  );
};

export default Home;
