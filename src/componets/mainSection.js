import React from 'react';
import Navigation from './navigation';
import CenterSection from './centerSection';
import RightSection from './rightSection';
import '../App.css';


class MainSection extends React.Component  {
 
 state ={
   buttons :[
    {id: 1, name: 'Button1'},
    {id: 2, name: 'Button2'},
    {id: 3, name: 'Button3'},
    {id: 4, name: 'Button4'},
    {id: 5, name: 'Button5'},
    {id: 6, name: 'Button6'}
  ],


 };


render() {
  return (
    <div>
      <div className="fluid-container background1">
        <div className="row">
        <div className="col-sm-1"> 
          <Navigation/>
          </div>
        <div className="col-sm-4">
          <CenterSection buttons={this.state.buttons} key={this.state.buttons.id} />

      </div>

  <div className="col-sm-7">
      

      
   <RightSection/>

      </div>
    </div>
  </div>
      
</div>

  );
}

}

export default MainSection;
