import Main from "./Products_c";

export default {
  title: "containers/products",
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Menu",
  Product_data: [
    { title: "Product1" },
    { title: "Product2" },
    { title: "Product3" },
    { title: "Product4" },
    { title: "Product5" },
    { title: "Product6" },
  ],
};
