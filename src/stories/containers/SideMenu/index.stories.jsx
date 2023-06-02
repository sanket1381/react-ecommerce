import SideMenu from "./SideMenu";

export default{
    title:"containers/sidemenu",
    component:SideMenu
}

const Template = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = {

label:"sidemenu",

};