import HTMLHead from "../components/layout/html/Head";
import { ContentInnerContainer } from "../components/styled/Container";


// --------------------------------------------------------
// RENDER HOME PAGE
// --------------------------------------------------------

export default function Home({ info }) {

  // HTML HEAD DATA
  const headData = {
    title: info.name,
    desc: info.description,
    image: info.image,
    url: info.url,
  }
  // RENDER UI
  return (
    <ContentInnerContainer>
      <HTMLHead data={headData} />
    </ContentInnerContainer>
  )
}

// --------------------------------------------------------
// FETCH HOME PAGE DATA
// --------------------------------------------------------

// export async function getStaticProps () {
//   // SITE INFO
//   let info = {
//     name:"BluSkill Components",
//     description:"NextJS website for demoing prebuilt BluSkill Components",
//     image:"",
//     url:"",
//     copyright: "© 2021 BluSkill - All Rights Reserved",
//   }
//
//   // COMPONENT LINKS
//   let components = [
//     {title: "Buttons", url: "/buttons"},
//     {title: "Text Fields", url: "/text-fields"},
//     {title: "Radio Buttons", url: "/radio-buttons"},
//     {title: "Checkboxes", url: "/checkboxes"},
//     {title: "Password Fields", url: "/password-fields"},
//     {title: "Steppers", url: "/steppers"},
//     {title: "Range Slider", url: "/range-slider"},
//     {title: "Tags", url: "/tags"},
//     {title: "Date Picker", url: "/date-picker"},
//   ]
//
//   // MODULE LINKS
//   let modules = [
//     {title: "Image Select", url: "/image-select"},
//     {title: "Location", url: "/location"},
//     {title: "Pagination", url: "/pagination"},
//     {title: "Photos", url: "/photos"},
//   ]
//
//   return {
//     props: { info, components, modules }
//   }
// }

export async function getServerSideProps() {
  let result = await fetch('http://localhost:3000/api/HeaderData')
  const data = await result.json();
  let {info,components,modules}=data;

  return {
    props:{
      info,components,modules
    }
  }
}
