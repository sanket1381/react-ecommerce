import SaleBanner from "./SaleBanner";

export default{
    title:"containers/salebanner",
    component:SaleBanner
}

const Template = (args) => <SaleBanner {...args} />;

export const Default = Template.bind({});
Default.args = {

label:"salebanner1",

};