import ProjectList from "../elements/ProjectList";
import {useNavigate} from "react-router-dom";

const HomePage = () =>{
    const navigate = useNavigate();
    const goCreatePage = () =>{
        navigate('/create');
    }
    return(
        <div>
            <ProjectList/>
            <div
                className="project-add"
                onClick={goCreatePage}
            >
                +
            </div>
        </div>
    );
};
export default HomePage