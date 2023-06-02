import Main from "./ProductDetails";

export default{
    title:"containers/productDetails",
    component:Main
}

const Template = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {

label:"Menu",
Product_details_data: [
    { title: "Product1" }

  ],

};