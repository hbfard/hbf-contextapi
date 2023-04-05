import { faker } from "@faker-js/faker";

export const getProduct = () => {
  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.abstract(),
    price: faker.commerce.price(50, 200, 0, "€"),
  };
};
