import PropTypes from "prop-types";

const Project = ({title, kind, leader, onClick}) => {

    return (
        <div
            className="project-container"
            onClick={onClick}
        >
            <div>{title}</div>
            <div>{kind}</div>
            <div>{leader}</div>

        </div>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    leader: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
Project.defaultProps = {
    title: '',
    kind: '',
    leader: '',
    onClick: () => {
    },
};

export default Project;