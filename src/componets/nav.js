import React, { Component } from 'react'
import '../App.css';

 class nav extends Component {
  
    render() {
        return (
            <div>
                        
        <section className="block-group">
            <div className="form-group w-25 ">
                <label htmlFor="exampleFormControlTextarea1">Welcome Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

        {/* Gallery button */}


        {this.props.showGalleryBox  ? (
        <div className="card mb-4 box-shadow gallery-box">
            <div className="flex-column text-center">
                <button type="button" className="btn">
                <div className="upload-img text-center">
                {/* <i class="fa fa-trash fa-2x trash-btn " aria-hidden="true"></i> */}
                <div class="trash-btn" onClick={this.props.trashButton}>
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
                <input type="button" className="btn btn-block btn-light" name="2Button" value="+ ADD BUTTON(OPTIONAL)" id="cell2Button" />   
            </div>
            
            </div>  
        </div>   


        ) : null}

        {/* Gallery button */}


        <br></br>
                
        {this.props.elements && this.props.elements.length ? this.props.elements.map(element => 
            <div className="card mb-4 box-shadow text-box">
            <div className="flex-column justify-content-between">   
                <input type="text" placeholder="Enter Text" name="Input" onChange={this.inputTextHandler} className="form-control" id={element.id} />
                <input type="button" className="btn btn-block btn-light" name="2Button" value="+ADD BUTTON(OPTIONAL)" id="cell2Button" />      
            </div>
            </div>
        ) : null}
        
        {/* text button */}

            <div className="add-element">
                Add Element

            </div>

            <div className='create-block'>

                <button type="button" onClick={this.props.onAddTextSection} className="btn btn-light btn-lg btn-width">
                    <span><i className="fa fa-home"></i></span>
                    <p>Text</p>
                </button>
            
                <button type="button" onClick={this.props.onClickShowGallery} className="btn btn-light btn-lg btn-width">
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

export default nav
