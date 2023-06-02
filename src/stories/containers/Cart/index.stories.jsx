import Cart_c from "./Cart_c";

export default {
  title: "containers/cart",
  component: Cart_c,
};

const Template = (args) => <Cart_c {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "cart",
  data: [
    {
      author: "Paulo Coelho",
      count: 1,
      id: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg",
      link: "/product/1",
      price: 9.99,
      title: "Simyacı",
    },
  ],
};
