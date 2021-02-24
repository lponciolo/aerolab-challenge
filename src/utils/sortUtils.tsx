export const lowestFirst: any = (products: any) => {
  function compare(a: any, b: any) {
    if (a.cost < b.cost) {
      return -1;
    }
    if (a.cost > b.cost) {
      return 1;
    }
    return 0;
  }
  return products.sort(compare);
};

export const defaultSort: any = (products: any) => {
  function compare(a: any, b: any) {
    if (a._id < b._id) {
      return -1;
    }
    if (a._id > b._id) {
      return 1;
    }
    return 0;
  }

  const result = products.sort(compare);
  return result;
};

export const highestFirst: any = (products: any) => {
  function compare(a: any, b: any) {
    if (a.cost < b.cost) {
      return 1;
    }
    if (a.cost > b.cost) {
      return -1;
    }
    return 0;
  }

  const result = products.sort(compare);
  return result;
};
