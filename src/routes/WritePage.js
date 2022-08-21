import '../css/write-page.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';


function WritePage() {
  /* ## 1. write 구현하기 */
  const storeageData = window.localStorage.getItem('contentArray');
  const params = useParams();
  let editTitle = '';
  let editContent = '';

  let arr;
  if(storeageData == null ) {
    arr = []
  } else {
    arr = JSON.parse(storeageData);
  }

  /* 수정하기의 경우, id의 값을 value로 불러오기 */
  if(params['*'] === '') {

  } else {
    var thisCont = arr.filter(
      (item) => item.key == params['*']
    );
    editTitle = thisCont[0].title;
    editContent = thisCont[0].value;
  }

  //1. 글쓴것을 저장하는 useState  - title
  const [title, setTitle] = useState(editTitle);
  //2. 글쓴것을 배열로 저장할 useState
  const [titletArray, setTitletArray] = useState(arr);
  const writeTitle = (event) => setTitle(event.target.value);
  
  //1. 글쓴것을 저장하는 useState  - content
  const [content, setContent] = useState(editContent);
  //2. 글쓴것을 배열로 저장할 useState
  const [contentArray, setContentArray] = useState(arr);
  const writeContent = (event) => setContent(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if(content === "") {
      alert('글을 입력해주세요.');
      return;
    } else {
      if(params['*'] === '') {
        //3. 글쓴것을 object화 하기   
        // 얘는 앞에 함수랑 상관없음 가져오는 값 content를 object로 변환해서 array로 저장시키기 위한 변수일뿐임 
        let dataKey;
        if( contentArray.length == 0 ) {
          dataKey = 0;
        } else {
          dataKey = contentArray[0].key + 1;
        }
        const contentsData = { 
          title : title, 
          value : content, 
          key : dataKey 
        };
        
        //노마드코딩이 알려줌-> 블로그
        //4. 배열에 전배열과 같이 넣기
        //이거는 object화한contentsData 
        setContentArray(currentArray => [contentsData, ...currentArray]);

        //5. 작성시, list page로 이동
        //navigate('/');
        window.location.href = `/view/${dataKey}`
      }else {
        //03-02) item.key == params.id 일때, 해당 item의 value를 textarea의 value로 수정
        arr.map((item) => {
            if(item.key == params['*']){
              item.title = title;
              item.value = content;
            }
          }
        );
        console.log(arr);

        //03-03) localStroage에 해당 사항을 저장해준다.
        window.localStorage.setItem("contentArray", JSON.stringify(arr));
        //데이터는 그 다음에 set해주면 돼. 먼저 set 하면 오류나!!!
        //setParsedData(JSON.parse(window.localStorage.getItem("contentArray")));

        window.location.href = `/view/${params['*']}`
      }
    }
  }
  //5. logalstorage에 저장하기
  window.localStorage.setItem("contentArray", JSON.stringify(contentArray));


  return (
    <div className="write-page">
      <div className='sub-inner'>
        <h2 className='sub-title'>Write</h2>
        <form>
          <input 
            type="text"
            value={title}
            placeholder="제목을 입력해주세요"
            onChange={writeTitle}
            
          >
          </input>
          <textarea
            value={content}
            placeholder="내용을 입력해주세요."
            onChange={writeContent}
            
          >            
          </textarea>

          <div className='button-wrap-row'>
            <Link to="/"
            className='button button-m button-normal'
            >목록으로</Link>
            <button 
            type='button'
            className='button button-m button-ok'
            onClick={onSubmit}
            >확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WritePage;
