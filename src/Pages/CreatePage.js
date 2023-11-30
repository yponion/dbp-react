import {useNavigate} from "react-router-dom";

const CreatePage = () => {
    const navigate = useNavigate();
    const onSubmit = () =>{
        navigate('/');
    }
    return (
        <div>
            <form>
                <div className="create-container">
                    <div>
                        <h1>프로젝트 만들기</h1>
                        <br/>
                        <label>프로젝트의 이름을 설정하세요. 팀원 추가 및 편집은 추후 프로젝트 관리탭에서 가능합니다.</label>
                        <br/><br/>
                        <input type="text" placeholder="이름" required/>
                        <br/><br/><br/><br/>
                        <label>프로젝트 타입을 지정하세요.</label>
                        <br/><br/>
                        <input type="text" placeholder="타입" required/>
                    </div>
                    <div>
                        <label>시작일</label>
                        <br/><br/>
                        <input type="date" placeholder="시작일" required/>
                        <br/><br/><br/><br/>
                        <label>마감일</label>
                        <br/><br/>
                        <input type="date" placeholder="마감일" required/>
                        <br/><br/><br/><br/>
                        <button
                            type="submit"
                            onClick={onSubmit}>
                            만들기
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CreatePage;