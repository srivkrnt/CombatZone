import React from 'react';

import './../styles/Homepage.css'

class Homepage extends React.Component{
	render(){
	return(
			<body>
				<div className="left_sec">
					<div className="title-container">Sign Up</div>
					<hr />
					<div className="form-container">
						<form> 
							<p>First Name : <input type="text" name="Fname:" placeholder="Enter First name"></input></p>
							<p>Last Name : <input type="text" name="Lname" placeholder="Enter Last name"></input></p>
							<p>UserName : <input type="text" name="Username:" placeholder="Pick a username"></input></p>
							<p>Email ID. : <input type="text" name="Email:" placeholder="Enter your Email"></input></p>
							<p>Password : <input type="password" name="Password:" placeholder="Pick a secret spell"></input></p>
							<button type="button" class="btn btn-success">Success</button>
						</form>
					</div>

				</div>


			</body>
		);
	}
}

export default Homepage;