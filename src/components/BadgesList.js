import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/BadgesList.css';
import twitterIcon from '../images/twitter-icon.png';

class BadgesList extends React.Component {
    render() {
        if(this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                    Create new Badge
                    </Link>
                </div>
            )
        };

        return (
            <ul className="container">
            {this.props.badges.map((badge) => {
                return (
                    <li className="container__list-styled" key={badge.id}>
                        <img className="container__list-styled__img" src={badge.avatarUrl} alt="" />
                        <div>
                            <div className="bold">
                                {badge.firstName} {badge.lastName}
                            </div>
                            <div className="container__list-styled__twitter">
                                <img src={twitterIcon} className="container__list-styled__twitter__img" alt="" />
                                @{badge.twitter} 
                                
                            </div>
                            <div>
                                {badge.jobTitle} 
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
        );
    }
}

export default BadgesList;