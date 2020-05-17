const getSelectedPrice = ({ priceState }) => {
  return priceState.filter((itemPrice) => Number(itemPrice.amount) !== 0);
};

const getTotalPrice = ({ priceState }) => {
  return priceState.reduce(
    (sum, element) => sum + element.price * element.amount,
    0
  );
};

export { getSelectedPrice, getTotalPrice };
