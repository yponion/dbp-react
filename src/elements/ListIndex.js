import PropTypes from "prop-types";

const Project = ({isProject, isSummary, isTask, project, summary, task, onClick}) => {

    return (
        <div
            className="project-container"
            onClick={onClick}
        >
            {isProject &&
                <>
                    <div>{project.title}</div>
                    <div>{project.kind}</div>
                    <div>{project.leader}</div>
                </>
            }
            {isSummary &&
                <>
                    <div>{summary.name}</div>
                    <div>{summary.content}</div>
                    <div>{summary.date}</div>
                </>
            }
            {isTask &&
                <>
                    <div>{task.title}</div>
                    <div>{task.name}</div>
                    <div>{task.start}</div>
                    <div>{task.end}</div>
                </>
            }

        </div>
    )
}

Project.propTypes = {
    project: PropTypes.object,
    // title: PropTypes.string,
    // kind: PropTypes.string,
    // leader: PropTypes.string,
    // onClick: PropTypes.func,
};
Project.defaultProps = {
    // title: '',
    // kind: '',
    // leader: '',
    // onClick: () => {
    // },
};

export default Project;