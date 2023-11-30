import {useNavigate} from "react-router-dom";

const ProjectSummaryPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="summary-container">
                <div>
                    <h1>데이터베이스 프로젝트</h1>
                    <p>23.11.30 ~ 23.12.31</p>
                    <div>
                        <div>작성자</div>
                        <div>내용</div>
                        <div>작성일</div>
                    </div>

                </div>
            </div>
            <div
                className="project-add"
                onClick={() => navigate('/create/notice')}
            >
                +
            </div>
        </div>


    )
}

export default ProjectSummaryPage;