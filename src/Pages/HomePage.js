import ProjectList from "../elements/ProjectList";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ProjectList/>
            <div
                className="project-add"
                onClick={() => navigate('/create/project')}
            >
                +
            </div>
        </div>
    );
};
export default HomePage