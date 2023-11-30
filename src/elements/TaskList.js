import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Task from "./Task";

const TaskList = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const onSearch = () => {
        // 검색 로직 구현
    }
    return (
        <div>
            <div className="project-search">
                <h2>작업</h2>
                <input
                    type='text'
                    placeholder="검색"
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
                <div>작업</div>
                <div>담당자</div>
                <div>시작일</div>
                <div>마감일</div>

            </div>
            <Task
                title="작업1"
                manager="양정운"
                start="23.11.01"
                end="23.12.31"
                // onClick={() => navigate('/project/summary')}
            />
            <Task
                title="작업2"
                manager="이도영"
                start="23.11.01"
                end="23.12.31"
                // onClick={() => navigate('/project/summary')}
            />
            <Task
                title="작업3"
                manager="이재완"
                start="23.11.01"
                end="23.12.31"
                // onClick={() => navigate('/project/summary')}
            />

        </div>
    )
}

export default TaskList;