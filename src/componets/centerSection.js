import React from 'react';
import Button from './button';
import '../App.css';


function CenterSection(props) {
    
    return (
        <div>
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
            {props.buttons.map(button =>(
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
    )
}



export default CenterSection

