import React, { Component } from 'react'

export class cotentBox extends Component {
  render() {
    return (
  
       <div>
     <form  className="content-box" ref={node => { this.pop = node;}}>
        <div class="form-group box-input">
          <label for="exampleInputEmail1">If user clicks</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add button title"/>
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
       <div> 
        <ul class="navigation">
              <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>Blocks</a></li>
              <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>URL</a></li>
              <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>Phone Call</a></li>
       </ul>
      </div>
        <div class="form-group box-input">
          <label for="exampleInputPassword1">1. Redirect to block or flow</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Add block or flow name"/>
        </div>
        {/* <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        </div> */}
       <div className="box-input">
        <span class="number">2.</span>
         <button type="submit" class="btn btn-light add-action-btn"><i class="fa fa-plus" aria-hidden="true"></i>Add Action</button>
        </div>
      </form>

        </div>
    
    )
  }
}

export default cotentBox
