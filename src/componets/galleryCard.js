import React, { Component } from 'react'

export class GalleryCard extends Component {
    render() {
        return (
            <div>
          <div className='flex-cards-items'>
                <div className="card mb-4 box-shadow gallery-box">
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
                            <Button variant="primary" onClick={() => {this.deleteContact(element.block_id)}}>
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

                { (element.the_action.act.block_id === this.state.generalList.length-1) &&
                        <div className="card mb-4 gallery-box">
                            <div className="card-body text-center">
                            <i className="fa fa-plus plus-icon" aria-hidden="true" onClick={this.onAddGalleryButton}></i>
                            </div>
                        </div>
                }

            </div>
                }
            
                <br></br>

                {element.elementType === 'text' && 
                    <div className="card mb-4 box-shadow text-box">
                    <div className="flex-column justify-content-between">   
                        <input type="text" placeholder="Enter Text" name="Input" onChange={this.inputTextHandler} className="form-control" id={element.the_action.act.block_id} />
                        <input ref={node => { this.pop = node; }} type="button" className="btn btn-block btn-light" name="2Button" value="+ADD BUTTON(OPTIONAL)" id="cell2Button"  onClick={()=>this.blockPopUpShow()}/> 
                
        
            
                </div>
                </div>  
                }
            })};
        </div>

          
        )
    }
}

export default GalleryCard
