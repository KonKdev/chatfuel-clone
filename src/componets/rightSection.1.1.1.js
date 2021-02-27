import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';
import '../App.css';



 class RightSection extends Component {

//  constructor(props) {
    // super(props);
    state ={  
        galleryElements :[],
        elements :[],
        showGalleryBox:true,
        setShow:false,
        AddGalleryBlock:false,
        show: false,
       
       };

    //    this.deleteContact =this.deleteContact.bind(this);
    // this.onAddGalleryButton = this.onAddGalleryButton.bind(this);
    // }
       
onAddGalleryButton = () => {
    if(this.state.galleryElements && this.state.galleryElements.length === 5) return;
  
    this.setState({
      galleryElements: [
        ...this.state.galleryElements,
        {
          id: this.state.galleryElements && this.state.galleryElements.length ? this.state.galleryElements.length : 0,
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
     ]
    });
  }

  onAddTextSection = () => {
    if(this.state.elements  && this.state.elements.length === 5) return;
  
    this.setState({
      elements: [
        ...this.state.elements,
        {
          id: this.state.elements && this.state.elements.length ? this.state.elements.length : 0,
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
     ]
    });
      
  }

  onAddGalleryBlock = ()=>{
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
  
  deleteContact = (id) =>{
    // console.log(index)
    console.log(this.state.galleryElements);
    const newGalleryElements = this.state.galleryElements.filter(galleryElement => galleryElement.id !== id);
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
        <div>
        {this.state.galleryElements && this.state.galleryElements.length ? this.state.galleryElements.map(galleryElement => 
                        <div className='flex-cards-items'>
                            <div className="card mb-4 box-shadow gallery-box">
                                <div className="flex-column text-center">
                                    <button type="button" className="btn">
                                    <div className="upload-img text-center">
                                    {/* <i class="fa fa-trash fa-2x trash-btn " aria-hidden="true"></i> */}
                                    
                                <div className='Mydiv'>
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
                                        <Button variant="primary" onClick={() => {this.deleteContact(galleryElement.id)}}>
                                            DELETE
                                    </Button>
                                    </Modal.Footer>
                                    </Modal>
                                </div>
                                        
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
                                    <input type="button" className="btn btn-block btn-light" name="2Button" value="+ ADD BUTTON(OPTIONAL)" id={galleryElement.id} />   
                                </div>
                                
                                </div>                       
                            </div>   

                            { (galleryElement.id === this.state.galleryElements.length-1) &&
                                    <div className="card mb-4 gallery-box">
                                        <div className="card-body text-center">
                                        <i className="fa fa-plus plus-icon" aria-hidden="true" onClick={this.onAddGalleryButton}></i>
                                        </div>
                                    </div>
                            }

                        </div>
                    ) : null}

        </div>


        {/* Gallery button */}

      
         
        <br></br>
                
        {this.state.elements && this.state.elements.length ? this.state.elements.map(element => 
            <div className="card mb-4 box-shadow text-box">
            <div className="flex-column justify-content-between">   
                <input type="text" placeholder="Enter Text" name="Input" onChange={this.inputTextHandler} className="form-control" id={element.id} />
                <input type="button" className="btn btn-block btn-light" name="2Button" value="+ADD BUTTON(OPTIONAL)" id="cell2Button" />      
           {
           this.state.blcokShow  ?
           <div>
               {/* <BlockShow/> */}
            </div>:null}
            </div>
            </div>
        ) : null}
        
        {/* text button */}

            <div className="add-element">
                Add Element
            </div>

            <div className='create-block'>

                <button type="button" onClick={this.onAddTextSection} className="btn btn-light btn-lg btn-width">
                    <span><i className="fa fa-home"></i></span>
                    <p>Text</p>
                </button>
            
                <button type="button" onClick={this.onAddGalleryButton} className="btn btn-light btn-lg btn-width">
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

// export default () => (<div><ReactBootstrapStyle /><RightSection /></div>)