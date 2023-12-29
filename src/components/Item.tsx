import { addToCart } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { useAppDispatch, useAppSelector } from "../store/store";

interface Props {
  product: Product;
}

function Item({ product }: Props) {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate("/signin");
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <div className="product">
      <h4>{product.title}</h4>
      <p>{product.price}</p>

      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

export default Item;
