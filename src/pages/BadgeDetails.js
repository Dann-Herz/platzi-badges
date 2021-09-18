import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './styles/BadgeDetailsContainer.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails (props) {
  const [count, setCount] = React.useState(0);

  const badge = props.badge;
  return (
        <div>
        <div className="BadgeDetails__hero">
            <div className="">
                <div className="BadgeDetails__hero-container">
                    <div className="">
                        <img className="BadgeDetails__hero-container-logo" src={confLogo} alt="Logo de la conferencia" />
                    </div>
                    <div className="BadgeDetails__hero-attendant-name">
                        <h1>{badge.firstName} {badge.lastName}</h1>
                    </div>
                </div>
            </div>

        </div>
        <div className="BadgeDetails__Badge">
            <div className="BadgeDetails__Badge-actions">
                <div className="">
                    <Badge
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    email={badge.email}
                    twitter={badge.twitter}
                    jobTitle={badge.jobTitle}
                    />
                </div>
                <div className="">
                    <h2>Actions</h2>
                    <div>
                        <button onClick={() => {
                            setCount(count + 1)
                        }} className="btn btn-primary mr-4">
                            Increase Count: {count}
                        </button>
                        <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                            Edit
                        </Link>
                    </div>
                    <div>
                        <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                        <DeleteBadgeModal 
                        onClose={props.onCloseModal} 
                        onDeleteBadge={props.onDeleteBadge}
                        isOpen={props.modalIsOpen}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eveniet assumenda possimus ipsa qui suscipit. Fugiat ducimus quasi vitae debitis 
                        quos assumenda necessitatibus doloremque? Molestiae iure architecto dolorem delectus 
                        assumenda cupiditate.
                        </DeleteBadgeModal>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BadgeDetails;