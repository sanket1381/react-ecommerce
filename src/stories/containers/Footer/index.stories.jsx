import Footer from "./Footer";

export default {
  title: "containers/footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Footer",
};
