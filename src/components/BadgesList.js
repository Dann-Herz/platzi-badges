import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/BadgesList.css';
import twitterIcon from '../images/twitter-icon.png';
import Gravatar from './Gravatar';


class BadgesListItem extends React.Component {
    render () {
        return (
            <div className="container__list-styled" >
                        <Gravatar className="container__list-styled__img" email={this.props.badge.email} alt="" />
                        <div>
                            <div className="bold">
                                {this.props.badge.firstName} {this.props.badge.lastName}
                            </div>
                            <div className="container__list-styled__twitter">
                                <img src={twitterIcon} className="container__list-styled__twitter__img" alt="" />
                                @{this.props.badge.twitter} 
                                
                            </div>
                            <div>
                                {this.props.badge.jobTitle} 
                            </div>
                        </div>
            </div>
        )
    }
}

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
                    <li className="container-li" key={badge.id}>
                        <Link className="container-li-link" to={`./badges/${badge.id}`}>
                            <BadgesListItem badge={badge} />
                        </Link>
                    </li>

                )
            })
            }
        </ul>
        )
    }
}

export default BadgesList;