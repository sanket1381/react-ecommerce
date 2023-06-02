import Navbar from "./Navbar";

export default{
    title:"containers/Navbar",
    component:Navbar
}

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {

label:"Navbar",


};