import PropTypes from 'prop-types';

function User({ friends }) {
    return (
        <>
            {friends.map((friend, index) => (
                <div key={index}>{friend.name}-{index}</div>
            ))}
        </>
    );
}
User.prototypes= {
    name:PropTypes.string,
}
export default User;
