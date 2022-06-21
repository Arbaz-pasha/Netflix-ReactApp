import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/Cards'
import './index.css';
import sdata from './components/sdata';


function ncard(val) {
  return(
    <Cards
    imgsrc={val.imgsrc}
   name = {val.name}
   link = {val.link}
 />
  )
}

ReactDOM.render(
  <>
  <section className='container'>
  <h1>My Netlix Series</h1>
     {/* n cards define using fun */}
     {sdata.map(ncard)}


{/* this is using fat arraow fun */}
  {/* {sdata.map((val) =>{
    return(
      <Cards
        imgsrc={val.imgsrc}
        name = {val.name}
        link = {val.link}
      />
    );
  })} */}
     </section>
  </>,
  document.getElementById('root')
)
