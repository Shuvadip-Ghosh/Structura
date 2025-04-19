import React from 'react'
import logo from "../images/logo.png"

export default function Navbar() {
  return (
	<nav>
		<div className="nl">
			<img src={logo} alt="" />
			<h3>Structura</h3>
		</div>
		<div className="nm">
			<ul>
				<li>Projects</li>
				<li>Services</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
		<div className="nr"></div>
	</nav>
  )
}
