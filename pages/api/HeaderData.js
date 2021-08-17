export default function HeaderData (req,res){
  res.status(200).json({
      info: {
        name: "BluSkill Components",
        description: "NextJS website for demoing prebuilt BluSkill Components",
        image: "",
        url: "",
        copyright: "© 2021 BluSkill - All Rights Reserved",
      },

      // COMPONENT LINKS
      components: [
        {title: "Buttons", url: "/buttons"},
        {title: "Text Fields", url: "/text-fields"},
        {title: "Radio Buttons", url: "/radio-buttons"},
        {title: "Checkboxes", url: "/checkboxes"},
        {title: "Password Fields", url: "/password-fields"},
        {title: "Steppers", url: "/steppers"},
        {title: "Range Slider", url: "/range-slider"},
        {title: "Tags", url: "/tags"},
        {title: "Date Picker", url: "/date-picker"},
      ],

      // MODULE LINKS
      modules: [
        {title: "Image Select", url: "/image-select"},
        {title: "Location", url: "/location"},
        {title: "Pagination", url: "/pagination"},
        {title: "Photos", url: "/photos"},
      ]
    }
  )
}
