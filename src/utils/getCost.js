export const getCost = (data) => {
  const isSameDistrict = data.senderDistrict == data.receiverDistrict;
  let cost = 0;
  const weight = Number(data.productWeight) || 0;
  if (data.parcelType === "document") {
    cost = isSameDistrict ? 60 : 80;
  } else {
    if (weight <= 3) {
      cost = isSameDistrict ? 110 : 150;
    } else {
      const extraWeight = parseFloat(weight - 3);
      const minCost = isSameDistrict ? 110 : 150;
      const extraCost = extraWeight * 40;
      cost = isSameDistrict ? minCost + extraCost : minCost + extraCost + 40;
    }
  }
  return cost;
};
