import TaskList from "../elements/TaskList";
import {useNavigate} from "react-router-dom";

const ProjectTaskPage = () =>{
    const navigate = useNavigate();
    return (
        <div>
            <TaskList/>
            <div
                className="project-add"
                onClick={() => navigate('/create/task')}
            >
                +
            </div>
        </div>

    )
}

export default ProjectTaskPage;