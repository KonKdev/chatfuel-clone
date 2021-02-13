import React,{ useState } from 'react';
import Button from './button';
import '../App.css';
import Navigation from './navigation';
import AddElementText from './addElementText';

function Block() {
  /*
    Break Block in 2 Components (Navigation and MainSection)
    Buttons in State variable
    ElementText to be Component
    ElementButton to be Component
    ElementGallery to be Component
    ElementCard to be Component

    elements variable will be state var as the example below. 
    Every time you press the Text Button we will add an onbject to this array
  */



  var [buttons,setButtons] = useState([
    {id: 1, name: 'Button1'},
    {id: 2, name: 'Button2'},
    {id: 3, name: 'Button3'},
    {id: 4, name: 'Button4'},
    {id: 5, name: 'Button5'},
    {id: 6, name: 'Button6'}
  ]);

  var [elements,setElements] = useState([]);

 
const [inputText, setInputText] = useState("");

const inputTextHandler = (e) =>{
   console.log(e);
   
  // if(!(elements && elements.length)) return;

  // // const updatedElements = elements.map(elem => {
  // //   if(elem.id === Number(e.target.id)){
  // //     elem.content.title = e.target.value;
  // //   }
  // // });

  // let updatedElements = [...elements];

  // updatedElements[Number(e.target.id)].content.title = e.target.value;

  // setElements(updatedElements);
};

const sumbmitTodoHandler = (e) =>{
  e.preventDefault();
  setElements([
     ...elements,
     {title: inputText, id: Math.random() * 100 },
  ]);
  setInputText("");
};


const [showContactInfo, setshowContactInfo] = useState(false);

const [showGalleryBox, setshowGalleryBox] = useState(false);

const onShowText = () => {
  setshowContactInfo(true)
}

const onAddTextSection = () => {
  
  if(elements  && (elements.length === 5)) return;
  setElements([
    ...elements,
    {
      id: elements && elements.length ? elements.length : 0,
      type:'text',
      content:{
         title:'',
         buttons:[
           {
            id: '',
            title:''
           }
         
         ]
      }
    },
 ]);
}

const onShowGallery = () => {
  setshowGalleryBox(true)
}

const trashButton = () => {
  setshowGalleryBox(false)
}


return (
        
<div>
 <div className="fluid-container background1">
    <div className="row">
    <div className="col-sm-1"> 
      <Navigation/>
      </div>

      <div className="col-sm-4">
        <div className="form-group has-search search-bar-width">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control"  placeholder="search by group or block name"/>
          </div>
    
          <div className="header-blocks">
            Blocks of your bot
          
          </div>

          <div className="p-blocks">
           Your bot consists of content ‘blocks’. Blocks are like individual pages on a website. Learn more here.
          </div>
          
          <div className="card card-width">
            <div className="card-body card-length">
              <h5 className="card-title title-size">Welcome Message.</h5>
              <p className="card-text text-size ">Every person communicating with the bot sees this block first.</p> 
            </div>
        </div>
    
        <div className="card card-width">
          <div className="card-body card-length">
            <h5 className="card-title title-size">Default Answer</h5>
            <p className="card-text text-size">A person will see this block if the bot from them.</p> 
          </div>
      </div>
     
        <div className="blocks-header"><i className="fa fa-angle-down" aria-hidden="true"></i>
          ADD BLOCKS HERE
        </div>

      <div className='create-block'>
            {buttons.map(button =>(
              <div className='dynamic-btns'>
                  <Button key={button.id} name={button.name}/> 
                </div>            
        ))}    
      </div>
      

 <div className='button-plus text-center'>
           <div className="unTitled-block">
             <a className="link" href="/"><span className="block-style"><i className="fa fa-plus" id="plus-style" aria-hidden="true"></i></span></a>
           </div>
  </div>
           
     
     <div className="blocks-header"><i className="fa fa-plus" aria-hidden="true"></i>
      ADD SEQUENCE OR GROUP
    </div>

  </div>

  <div className="col-sm-7">
    <section className="block-group">
      <div className="form-group w-25 ">
        <label htmlFor="exampleFormControlTextarea1">Welcome Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
      </div>


{/* Gallery button */}


{showGalleryBox ? (
<div className="card mb-4 box-shadow gallery-box">
      <div className="flex-column text-center">
        <button type="button" className="btn">
        <div className="upload-img text-center">
        {/* <i class="fa fa-trash fa-2x trash-btn " aria-hidden="true"></i> */}
        <div className="trash-btn" onClick={trashButton}>
        </div>
            <i className="fa fa-camera" aria-hidden="true"></i>
              <span className="button-image__title">Upload image</span>
                    <p>Max size 10 MB</p>             
                </div>
        </button>

       <div className="form">       
          <input type="text" id="formControlLg1" className="form-control form-control-lg" placeholder="Heading (required)" />
       </div>
       <div className="form">       
          <input type="text" id="formControlLg2" className="form-control form-control-lg" placeholder="Subtitle or description" />
      </div>
      <div className="form">       
          <input type="text" id="formControlLg3" className="form-control form-control-sm" placeholder="URL" />
      </div>
      <div className="form">       
         <input type="button" className="btn btn-block btn-light" name="2Button" value="+ ADD BUTTON(OPTIONAL)" id="cell2Button" />   
      </div>
      </div>
  </div>
 ) : null}

<br></br>
      
{/* text button */}


{/* {showContactInfo ? ( */}


{elements && elements.length ? elements.map(element => 
    <div className="card mb-4 box-shadow text-box">
    <div className="flex-column justify-content-between">   
        <input type="text" placeholder="Enter Text" name="Input" onChange={inputTextHandler} className="form-control" id={element.id} />
        <input type="button" className="btn btn-block btn-light" name="2Button" value="+ADD BUTTON(OPTIONAL)" id="cell2Button" />      
      </div>
    </div>
) : null}

     {/* <div className="card mb-4 box-shadow text-box">
       <div className="flex-column justify-content-between">
           
            <input type="text" placeholder="Enter Text" name="Input" onChange={inputTextHandler} value={inputText} className="form-control" id="cell2Input" />
           <input type="button" onClick={sumbmitTodoHandler} className="btn btn-block btn-light" name="2Button" value="+ ADD BUTTON(OPTIONAL)" id="cell2Button" />      
         </div>
     </div> */}


     {/* ) : null} */}
   
   

   {/* <ul className='dynamic-textItems'> */}
   {/* {elements.map(element => (
         <li className='dynamic-textItems'><AddElementText key={element.id} title={element.title}/></li> 
        ))} */}
    {/* </ul> */}
   

      <div className="add-element">
        Add Element



      </div>

      <div className='create-block'>

          <button type="button" onClick={onAddTextSection} className="btn btn-light btn-lg btn-width">
            <span><i className="fa fa-home"></i></span>
            <p>Text</p>
          </button>
     
          <button type="button" onClick={onShowGallery} className="btn btn-light btn-lg btn-width">
            <span><i className="fa fa-meetup" aria-hidden="true"></i></span>
            <p>Gallery</p>
          </button>

          <button type="button" className="btn btn-light btn-lg btn-width">
            <span><i className="fa fa-plus" aria-hidden="true"></i></span>
            <p>More</p>
          </button>
     
     </div>

    </section>

      </div>
    </div>
  </div>
      
</div>

      
    )
}

export default Block
