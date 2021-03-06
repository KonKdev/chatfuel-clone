import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';
import ContentBox from './cotentBox';
import ReactDOM from 'react-dom'; 
import '../App.css';
import uuid from 'react-uuid'



 class RightSection extends Component {

    state ={  
        galleryItems:[],
        elements :[],
        showGalleryBox:true,
        setShow:false,
        AddGalleryBlock:false,
        show: false,
        popupVisible:false,
        generalList:[],
        allElements :[
                {
                    id: 0,
                    type:'text',
                    content:{
                        the_text:'adsda adssad asd adsda',
                        buttons:[
                            {
                               the_text:'dasdadsa',
                               the_action: {
                                   type:'url', //block
                                   act:{
                                       url:'https://google.com'
                                   }
                               }
                            },
                            {
                              the_text:'dasdadsa',
                              the_action: {
                                  type:'block',
                                  act:{
                                      block_id:1234
                                  }
                              }
                           },
                        ]
                    }
                },
                {
                    id: 0,
                    type:'gallery',
                    cards:[

                        {
                            imageurl:'',
                            the_text:'',
                            subtitle:'',
                            the_url:'',
                            buttons:[
                              {
                                  the_text:'dasdadsa',
                                  the_action: {
                                      type:'block',
                                      act:{
                                          block_id:1234
                                      }
                                  }
                               },  
                            ]
                        }
                    ]
                }
              ]
       };

 
       
onAddGalleryButton = () => {

const newListItem = {
    id: uuid(),
    type:'gallery',
    cards:[
        {
            imageurl:'',
            the_text:'',
            subtitle:'',
            the_url:'',
            buttons:[
              {
                  the_text:'dasdadsa',
                  the_action: {
                      type:'block',
                      act:{
                          block_id:1234
                      }
                  }
               },  
            ]
        }
    ]
};

var newList = this.state.generalList;
newList.push(newListItem);

return(this.setState({
    generalList: [...newList]
  }));
}


onAddTextSection = (id) => {
var element = this.state.allElements[0].content.buttons[1];
element.elementType = this.state.allElements[0].type;
element.the_action.act.block_id =  uuid();


this.setState({
          generalList: [
            ...this.state.generalList,
         element
         ]
        });
  }

  onAddGalleryBlock = ()=>{
    this.setState({
        AddGalleryBlock:true
    })
  }

  addGalleryItem(){


var newList = [{
    id: uuid(),
    type:'gallery',
    cards:[

        {
            imageurl:'',
            the_text:'',
            subtitle:'',
            the_url:'',
            buttons:[
              {
                  the_text:'dasdadsa',
                  the_action: {
                      type:'block',
                      act:{
                          block_id:1234
                      }
                  }
               },  
            ]
        }
    ]
}];

return(this.setState({
    generalList: [
      ...this.state.generalList,
   newList
   ]
  }));


  }

  addItemForGallery(id){

    var currentGeneralList = this.state.generalList;

    currentGeneralList.forEach(listItem => {

        if(listItem.type === 'gallery' && listItem.id === id){

                const newCardItem =   {
                            imageurl:'',
                            the_text:'',
                            subtitle:'',
                            the_url:'',
                            buttons:[
                            {
                                the_text:'dasdadsa',
                                the_action: {
                                    type:'block',
                                    act:{
                                        block_id: uuid()
                                    }
                                }
                            },  
                            ]
                     }


   
                listItem.cards.push(newCardItem);

        
            this.setState({
                generalList: currentGeneralList
            });
            }
        });
}
  

  blockPopUpShow = () => {

     if (!this.state.popupVisible) {
         // attach/remove event handler
         document.addEventListener('click', this.handleOutsideClick, false);
       } else {
         document.removeEventListener('click', this.handleOutsideClick, false);
       }
     this.setState({
         popupVisible:!this.state.popupVisible
     })
   }

  handleShow = () => {
    this.setState({
        show:true
    })
  };
  
  handleClose = () => {
    this.setState({
        show:false
    })
  };
  

  handleOutsideClick= (e) => {
 
    if(this.pop) {
         const domNode = ReactDOM.findDOMNode(this.pop)
       if(this.pop.contains(e.target))  {
             return;
 }
}
this.blockPopUpShow();
}
  
 deleteItem = (index,e) =>{
    
const generalList = Object.assign([],this.state.generalList);

generalList.splice(index,1);

    this.setState({
        generalList:generalList,
        show:false
        });
 };


    render() {
        return (

        <div>
                        
        <section className="block-group">
            <div className="form-group w-25 ">
                <label htmlFor="exampleFormControlTextarea1">Welcome Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

        {/* Gallery button */}
 
<div className="container">
        <div className="row">


           {this.state.generalList.map((element,index) => {
                 return  element.elementType === 'text' ?
                 <div className="container">
                 <div className="row">
                         <div key={index}>
                            <div className="card mb-4 box-shadow ">
                    <div className="flex-column justify-content-between">   
                        <input type="text" placeholder="Enter Text" name="Input" onChange={this.inputTextHandler} className="form-control" id={element.id} />
                        <input ref={node => { this.pop = node; }} type="button" className="btn btn-block btn-light" name="2Button" value="+ADD BUTTON(OPTIONAL)" id="cell2Button"  onClick={()=>this.blockPopUpShow()}/> 
             
                </div>
             </div>  
                <br></br>

                        </div>
                        </div>
                        </div>
                        
                         :
             
         <div className="container">
           <div className="row">
                <div className='flex-cards-items'>
                    
                    {element.cards.map(cardsItem => {
                        return <div className="card mb-4 box-shadow gallery-box">
                        <div className="flex-column text-center">
                            <button type="button" className="btn">
                            <div className="upload-img text-center">
                         
                      
                        <div className='fa fa-trash fa-2x' onClick={() => {this.handleShow()}}>                                              
                        </div>
                            <Modal show={this.state.show} onHide={() => {this.handleClose()}}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want to remove this card?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() =>{this.handleClose()}}>
                                    ClOSE
                            </Button>
                                <Button variant="primary" onClick={() => {this.deleteItem(index)}}>
                                    DELETE
                            </Button>
                            </Modal.Footer>
                            </Modal>
                   
                                
                    <i className="fa fa-camera" aria-hidden="true"></i>
                                <span className="button-image__title">Upload image</span>
                                        <p>Max size 10 MB</p>             
                                    </div>
                            </button>
    
                        <div className="form">       
                            <input type="text" id="formControlLg1" className="form-control form-control-lg " placeholder="Heading (required)" />
                        </div>
                        <div className="form">       
                            <input type="text" id="formControlLg2" className="form-control form-control-lg" placeholder="Subtitle or description" />
                        </div>
                        <div className="form-url">       
                            <input type="text" id="formControlLg3" className="form-control form-control-sm" placeholder="URL" />
                        </div>
                        <div className="form-url">       
                            <input type="button" className="btn btn-block btn-light" name="2Button" value="+ ADD BUTTON(OPTIONAL)" id={element} />   
                        </div>
                        
                        </div>                       
                    </div>  
                    })}

                 <div className="card mb-4 gallery-box">
                        <div className="card-body text-center">
                            {/* Εδώ θα μπει input στο addGaleryItem η λίστα των galleryItems */}
                        <i className="fa fa-plus plus-icon" aria-hidden="true" onClick={()=>{this.addItemForGallery(element.id)}}></i>
                        </div>
                    </div>                 
           

            </div>
        </div>        
              
</div>        
            //   }                       
            // }
                
            
           })}
            
        
           


    {this.state.popupVisible ? 
           <ContentBox/>
           : null}
        

        <div>
            
        </div>
        {/* text button */}

</div>
</div>
        

            <div className="add-element">
                Add Element
            </div>

            <div className='create-block'>

                <button type="button"  onClick={()=>this.onAddTextSection()} className="btn btn-light btn-lg btn-width">
                    <span><i className="fa fa-home"></i></span>
                    <p>Text</p>
                </button>
            
                <button type="button"  onClick={()=>this.onAddGalleryButton()} className="btn btn-light btn-lg btn-width">
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
        )
    
    }
}


export default RightSection 