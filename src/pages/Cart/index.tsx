import leaf from "../../assets/images/Leaf.svg";

const Cart = () => {
  return (
    <div className="w-full bg-headerBg h-[100vh] lg:px-[100px] px-5 pt-6 pb-12 relative">
      <img src={leaf} alt="leaf" className="absolute bottom-0 left-0" />
    </div>
  );
};

export default Cart;
