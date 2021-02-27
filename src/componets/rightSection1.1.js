import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';
import ContentBox from './cotentBox';
import ReactDOM from 'react-dom'; 
import '../App.css';

 class RightSection extends Component {

    state = {  
        galleryElements :[], 
        elements :[], 
        setShow:false,
        AddGalleryBlock:false,
        show: false,
        popupVisible:false,
        allElements: [
            {
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
            }]
    };


onAddGalleryButton = () => {
    const newGalleryItem = {
        type:'gallery',
        cards:[
            {
                imageurl:'',
                the_text:'',
                subtitle:'',
                the_url:'',
                buttons:[
                    {
                        the_text:'',
                        the_action: {
                            type:'',
                            act:{
                                block_id: ''
                            }
                        }
                    },  
                ]
            }
        ]
    }

    this.setState({
        allElements: [
            ...this.state.allElements,
            newGalleryItem
        ]
    }); 
}

  onAddTextSection = () => {
    const newTextItem = 
    {
        type:'text',
        content:{
            the_text:'',
            buttons:[
                {
                    the_text:'',
                    the_action: {
                        type:'url', //block
                        act:{
                            url:''
                        }
                    }
                },
                {
                    the_text:'',
                    the_action: {
                        type:'',
                        act:{
                            block_id: 0
                        }
                    }
                },
            ]
        }
    }

    this.setState({
        allElements: [
            ...this.state.allElements,
            newTextItem
        ]
    });

  }

  blockPopUpShow = () => {
   console.log('hi');
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


  onAddGalleryBlock = () =>{
    this.setState({
        AddGalleryBlock:true
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
    // ignore clicks on the component itself
    if(this.pop) {
         const domNode = ReactDOM.findDOMNode(this.pop)
       if(this.pop.contains(e.target))  {
             return;
 }
}
this.blockPopUpShow();
}


  deleteContact = (id) =>{
    console.log(id);
    const newGalleryElements = this.state.galleryElements.filter(galleryElement => galleryElement.the_action.act.block_id !== id);
    this.setState({
        galleryElements: newGalleryElements,
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
    <div class="container">
        <div class="row">


           {this.state.allElements.length > 2 && this.state.allElements.map(element => {

                    if(element.type === 'text'){
                        return <div>
                    <div className="card mb-4 box-shadow">
                    <div className="flex-column justify-content-between">   
                        <input type="text" placeholder="Enter Text" name="Input" onChange={this.inputTextHandler} className="form-control" id={element.id} />
                        <input ref={node => { this.pop = node; }} type="button" className="btn btn-block btn-light" name="2Button" value="+ADD BUTTON(OPTIONAL)" id="cell2Button"  onClick={()=>this.blockPopUpShow()}/> 
                
        
            
                </div>
                </div>  

                        </div>
                    }
                         <br></br>
                    if(element.type === 'gallery'){
                        return <div>GALLERY CARD</div>
                    }               
                

            //     {element.type === 'gallery' && 
            //         <div className='flex-cards-items'>
            //     <div className="card mb-4 box-shadow gallery-box">
            //         <div className="flex-column text-center">
            //             <button type="button" className="btn">
            //             <div className="upload-img text-center">
                     
                  
            //         <div className='fa fa-trash fa-2x' onClick={() => {this.handleShow()}}>                                              
            //         </div>
            //             <Modal show={this.state.show} onHide={() => {this.handleClose()}}>
            //             <Modal.Header closeButton>
            //                 <Modal.Title>Modal heading</Modal.Title>
            //             </Modal.Header>
            //             <Modal.Body>Are you sure you want to remove this card?</Modal.Body>
            //             <Modal.Footer>
            //                 <Button variant="secondary" onClick={() =>{this.handleClose()}}>
            //                     ClOSE
            //             </Button>
            //                 <Button variant="primary" onClick={() => {this.deleteContact(element.block_id)}}>
            //                     DELETE
            //             </Button>
            //             </Modal.Footer>
            //             </Modal>
               
                            
            //     <i className="fa fa-camera" aria-hidden="true"></i>
            //                 <span className="button-image__title">Upload image</span>
            //                         <p>Max size 10 MB</p>             
            //                     </div>
            //             </button>

            //         <div className="form">       
            //             <input type="text" id="formControlLg1" className="form-control form-control-lg " placeholder="Heading (required)" />
            //         </div>
            //         <div className="form">       
            //             <input type="text" id="formControlLg2" className="form-control form-control-lg" placeholder="Subtitle or description" />
            //         </div>
            //         <div className="form-url">       
            //             <input type="text" id="formControlLg3" className="form-control form-control-sm" placeholder="URL" />
            //         </div>
            //         <div className="form-url">       
            //             <input type="button" className="btn btn-block btn-light" name="2Button" value="+ ADD BUTTON(OPTIONAL)" id={element} />   
            //         </div>
                    
            //         </div>                       
            //     </div>   

            //     { (element.block_id === this.state.allElements.length-1) &&
            //             <div className="card mb-4 gallery-box">
            //                 <div className="card-body text-center">
            //                 <i className="fa fa-plus plus-icon" aria-hidden="true" onClick={this.onAddGalleryButton}></i>
            //                 </div>
            //             </div>
            //     }

            // </div>
            //     }
            
                <br></br>

                {element.type === 'text' && 
                    <div className="card mb-4 box-shadow text-box">
                    <div className="flex-column justify-content-between">   
                        <input type="text" placeholder="Enter Text" name="Input" onChange={this.inputTextHandler} className="form-control" id={element.id} />
                        <input ref={node => { this.pop = node; }} type="button" className="btn btn-block btn-light" name="2Button" value="+ADD BUTTON(OPTIONAL)" id="cell2Button"  onClick={()=>this.blockPopUpShow()}/> 
                
        
            
                </div>
                </div>  
                }
            })}
           
        </div>

           


    {this.state.popupVisible ? 
           <ContentBox/>
           : null}
        

        <div>
            
        </div>
        {/* text button */}

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
