import Checkout_c from "./Checkout_c";

export default{
    title:"containers/checkout",
    component:Checkout_c
}

const Template = (args) => <Checkout_c {...args} />;

export const Default = Template.bind({});
Default.args = {

label:"checkout",

};