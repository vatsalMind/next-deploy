import React, {useState} from 'react';
import ImageGallery from "../../components/styled/ImageGallery";
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";


const itemData = [
  {
    img: '/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 2,
    featured: true,
  },
  {
    img: '/static/images/image-list/burgers.jpg',
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    img: '/static/images/image-list/camera.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '/static/images/image-list/morning.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: '/static/images/image-list/hats.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '/static/images/image-list/honey.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '/static/images/image-list/vegetables.jpg',
    title: 'Vegetables',
    author: 'jill111',
    cols: 2,
  },
  {
    img: '/static/images/image-list/plant.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: '/static/images/image-list/mushroom.jpg',
    title: 'Mushrooms',
    author: 'PublicDomainPictures',
  },
  {
    img: '/static/images/image-list/olive.jpg',
    title: 'Olive oil',
    author: 'congerdesign',
  },
  {
    img: '/static/images/image-list/star.jpg',
    title: 'Sea star',
    cols: 2,
    author: '821292',
  },
  {
    img: '/static/images/image-list/bike.jpg',
    title: 'Bike',
    author: 'danfador',
  },
];

const Index = () => {
  const noOfImages = 4
  const [page,setPage] = useState(1);
  const imageCol = 6 // always give a even value.

  return (
    <ContentContainer>
      <ContentInnerContainer>
        <ImageGallery label={"Photos"} itemData={itemData} noOfImages={noOfImages} page={page} setPage={setPage} imageCol={imageCol}/>
      </ContentInnerContainer>
    </ContentContainer>
  );
};

export default Index;

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
