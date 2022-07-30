//import './css/write-page.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ViewPage() {
  const params = useParams();
  const contentArray =  window.localStorage.getItem("contentArray");
  let [parsedData, setParsedData] = useState(JSON.parse(contentArray));

  var thisCont = parsedData.filter(
    (item) => item.key == params.id
  );
  //console.log('00',thisCont);
  //const thisVal = thisCont[0].value;
  const [thisVal, setThisValue] = useState(thisCont[0].value);

  //02. 삭제하기
  const actionDel = (e) => {
    e.preventDefault();

    parsedData = parsedData.filter(
      (item) => item.key !== Number(params.id)
    );

    window.localStorage.setItem("contentArray", JSON.stringify(parsedData));
    //데이터는 그 다음에 set해주면 돼. 먼저 set 하면 오류나!!!
    setParsedData(JSON.parse(window.localStorage.getItem("contentArray")));
    
    window.location.href = '/';
  }

  //03. 수정하기
  //03-01) textarea의 변화를 감지
  const onChange = (e) => {
    e.preventDefault();
    setThisValue(e.target.value);
  }
  //03-01) 수정완료 버튼 클릭시, 수정된 값을 저장
  const actionEdit = (e) => {
    e.preventDefault();

    //03-02) item.key == params.id 일때, 해당 item의 value를 textarea의 value로 수정
    parsedData.map((item) => {
        if(item.key == params.id){
          item.value = thisVal;
        }
      }
    );

    //03-03) localStroage에 해당 사항을 저장해준다.
    window.localStorage.setItem("contentArray", JSON.stringify(parsedData));
    //데이터는 그 다음에 set해주면 돼. 먼저 set 하면 오류나!!!
    setParsedData(JSON.parse(window.localStorage.getItem("contentArray")));

    window.location.href ="https://map.kakao.com/link/search/"+thisVal

  }
  
  return (
    <div className="view-page">
      <div className='sub-inner'>
        <h2 className='sub-title'>뷰페이지</h2>
        <form>
          <div className="view-content">
              뷰콘텐츠 노출
          </div>
          <textarea
            placeholder="내용을 입력해주세요."
            onChange={onChange}
            value={thisVal}
          >{thisVal}
          </textarea>
           


          <div className='button-wrap'>
            <button 
            type='button' 
            className='button button-normal'
            onClick={actionEdit}
            > 수정완료
            </button>
            <button 
            type='button'
            className='button button-ok'
            onClick={actionDel}
            > 삭제
            </button>
            <Link to="/"
            className='button button-normal'
            >목록으로</Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ViewPage;