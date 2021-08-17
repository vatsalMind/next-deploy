import React, {useState} from 'react';
import CustomPagination from "../../components/styled/Pagination";
import Connections from "../../components/styled/Connections";

const Index = () => {
  const [page,setPage] = useState(1);

  const changeHandler = (e) =>{
    let value = e.target.ariaLabel
    if(value==="previous"){
      setPage(page - 1)
    }else if(value==="next"){
      setPage(page + 1)
    }else{
      setPage(parseInt(value))
    }
  }

  return (
    <div>
      <CustomPagination count={10} page={page} onChange={changeHandler}/>
      <Connections />
    </div>
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
