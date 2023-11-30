import PropTypes from "prop-types";

const Project = ({title, manager, start, end, onClick}) => {

    return (
        <div
            className="project-container"
            onClick={onClick}
        >
            <div>{title}</div>
            <div>{manager}</div>
            <div>{start}</div>
            <div>{end}</div>
        </div>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    manager: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
Project.defaultProps = {
    title: '',
    manager: '',
    start: '',
    end:'',
    onClick: () => {
    },
};

export default Project;