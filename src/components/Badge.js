import React from 'react';

import '../styles/badge.css'
import '../images/badge-header.svg'
import Gravatar from './Gravatar';

import ConfLogo from '../images/badge-header.svg';  //añadimos esta linea

class Badge extends React.Component {
	render() {
		

		// const firstName = "Dann"
		// const lastName = "Herz"
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={ConfLogo} alt="Logo de la conferencia"/>
				</div>
				<div className="Badge__section-name">
					<Gravatar className="Badge__avatar" email={this.props.email} alt="Avatar" />
					
					<h1>{this.props.firstName}<br/> {this.props.lastName}</h1>
				</div>
				<div className="Badge__section-info">
						<h3>{this.props.jobTitle}</h3>
						<div>@{this.props.twitter}</div>
				</div>
				<div className="Badge__footer">#platziconf</div>
			</div> 
		)

	};
};

export default Badge
//Gravatar ... te odiooooooo jajajaj chale