import Button1 from './Button'
import { withRouter } from 'storybook-addon-react-router-v6';


export default{
    title:"components/button1",
    component:Button1,

}

const Template = (args) => <Button1 {...args} />;

export const Default = Template.bind({});
Default.args = {
label:"button"
};