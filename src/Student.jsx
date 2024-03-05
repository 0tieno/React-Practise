

import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div>
            <h1>Student</h1>
                <h2>Name: {props.name}</h2>
                <h2>Age: {props.age}</h2>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

// default props
Student.defaultProps = {
    name: "Guest User",
    age: 0,
};

export default Student;