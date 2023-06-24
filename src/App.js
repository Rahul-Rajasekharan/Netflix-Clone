import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banners/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
import {Originals,Action,Comedy,Horror,Romance,Documentaries, Adventure,Animation} from './Url'
function App() {
  return(
    <div>
      <NavBar/>
      <Banner/>
      <RowPoster url={Originals} title='Netflix Originals'/>
      <RowPoster url={Action} title='Action' smallPoster/>
      <RowPoster url={Comedy} title='Comedy' smallPoster/>
      <RowPoster url={Horror} title='Horror' smallPoster/>
      <RowPoster url={Romance} title='Romance' smallPoster/>
      <RowPoster url={Adventure} title='Adventure' smallPoster/>
      <RowPoster url={Animation} title='Animation' smallPoster/>
      <RowPoster url={Documentaries} title='Documentary' smallPoster/>
    </div>

  )
}

export default App;
