import React, { useState } from 'react';
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

function BadgesList(props) {
    const badges = props.badges;

    const [query, setQuery] = React.useState('');
    // function algo(query) {
    //     console.log(query);
    // }
    // algo(query);

    var entradasInvalidas = 0;

    function filtrarPorID(obj) {
        if ('firstName' in obj && typeof(obj.firstName) === 'string' && isNaN(obj.id) && obj.firstName == query) {
          return true;
        } else {
          entradasInvalidas++;
          return false;
        }
      }

    var filteredBadges = badges.filter(filtrarPorID);

    console.log('Array Filtrado\n', filteredBadges);

    // const filteredBadges = setTimeout(() => {
    //     // badges.filter(badge => {
    //     //     return badge.firstName.includes(query);
    //     // });
    //     // console.log(badges[]firstName);
    // }, 5000);

        // const filteredBadges =  badges.filter(badge => {
        //     return badge.firstName.includes(query);
        // });
    
        if(filteredBadges.length === 0) {
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
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                    }}
                    />
                </div>
                <ul className="container">
                    {filteredBadges.map((badge) => {
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
            </div>

        )
    
}

export default BadgesList;