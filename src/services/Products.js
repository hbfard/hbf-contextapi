import { faker } from "@faker-js/faker";

export const getProduct = () => {
  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.abstract(640, 480, true),
    price: faker.commerce.price(50, 200, 0, "€"),
  };
};
