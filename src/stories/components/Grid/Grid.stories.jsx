import Grid1 from "./Grid1";

export default {
  title: "components/grid",
  component: Grid1,


};

const Template = (args) => <Grid1 {...args} />;

export const Default = Template.bind({});
Default.args = {
    data:[
        { title: "sewing and knitting",link:"/category/sewingandknitting" },
        { title: "acrylic retro",link:"/category/acrylicretro"  },
        { title: "Buttons",link:"/category/buttons"  },
        { title: "Beaded",link:"/category/beaded"  },
        { title: "Alloy Jwelleary",link:"/category/alloyandjwellery"  },
        { title: "2023 hot list",link:"/category/2023hotlist"  },
      ]
};
