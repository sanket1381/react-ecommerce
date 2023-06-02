import Banner from './Banner'


export default{
    title:"components/Banner",
    component:Banner,

}

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
label:"Banner"
};