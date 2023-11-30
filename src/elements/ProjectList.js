import {useState} from "react";
import Project from "./Project";
import {useNavigate} from "react-router-dom";

const ProjectList = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const onSearch = () => {
        // 검색 로직 구현
    }
    return (
        <div>
            <div className="project-search">
                <h2>프로젝트</h2>
                <input
                    type='text'
                    placeholder="검색"
                    className="form-control"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyUp={onSearch}
                />
            </div>
            <br/>
            <div
                style={{
                    cursor: "default",
                    backgroundColor: "initial",
                    fontWeight: "bold"
                }}
                className="project-container"
            >
                <div>이름</div>
                <div>유형</div>
                <div>리더</div>

            </div>
            <Project
                title="자바"
                kind="개인프로젝트"
                leader="양정운"
                onClick={() => navigate('/project/summary')}
            />
            <Project
                title="데이터베이스 프로젝트"
                kind="팀플"
                leader="이도영"
                onClick={() => navigate('/project/summary')}
            />
            <Project
                title="프로젝트"
                kind="유형"
                leader="이재완"
                onClick={() => navigate('/project/summary')}
            />

        </div>
    )
}

export default ProjectList;