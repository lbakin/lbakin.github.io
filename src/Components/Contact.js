import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }



    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">




               <div className="widget widget_contact"
               style={{textAlign:"center"}}>

					   <h4>Contact Information</h4>
					   <p className="address">
						   {name}
						   {city} {state} {zip}<br />
						  {phone}<br />
               {email}
					   </p>
				   </div>

            <aside className="four columns footer-widgets">
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;


// Moved form code down here while I get the submit button working properly. I also adjusted the text alignment for the contact info
// It's ugly, but close to working. Might update the forms to handle state in a different way afterwards

// function sendEmail(event) {
  // alert("Form submission currently under repair. Please use contact info to the right for the time being.");
  // event.preventDefault();
// }

// <form action="" method="post" id="contactForm" name="contactForm">
// <fieldset>
//
//    <div>
// <label htmlFor="contactName">Name <span className="required">*</span></label>
// <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
//    </div>
//
//    <div>
// <label htmlFor="contactEmail">Email <span className="required">*</span></label>
// <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
//    </div>
//
//    <div>
// <label htmlFor="contactSubject">Subject</label>
// <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
//    </div>
//
//    <div>
//       <label htmlFor="contactMessage">Message <span className="required">*</span></label>
//       <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
//    </div>
//
//    <div>
//       <button onClick={sendEmail} className="submit">This form currently under repair</button>
//       <span id="image-loader">
//          <img alt="" src="images/loader.gif" />
//       </span>
//    </div>
// </fieldset>
// </form>
