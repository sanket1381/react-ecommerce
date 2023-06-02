import Main from "./Main";

export default {
  title: "containers/main",
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Menu",

  Categorydata:[
    { title: "sewing and knitting",link:"/category/sewingandknitting" },
    { title: "acrylic retro",link:"/category/acrylicretro"  },
    { title: "Buttons",link:"/category/buttons"  },
    { title: "Beaded",link:"/category/beaded"  },
    { title: "Alloy Jwelleary",link:"/category/alloyandjwellery"  },
    { title: "2023 hot list",link:"/category/2023hotlist"  },
  ]
};
