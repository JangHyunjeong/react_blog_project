import '../css/write-page.css';
import { useState } from 'react';
//import {Link, Navigate, useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';


function WritePage() {
  //const navigate = useNavigate();

  const storeageData = window.localStorage.getItem('contentArray');

  let arr;
  if(storeageData == null ) {
    arr = []
    console.log(arr);
  } else {
    arr = JSON.parse(storeageData);
  }

  //1. 글쓴것을 저장하는 useState
  const [content, setContent] = useState('');
  //2. 글쓴것을 배열로 저장할 useState
  const [contentArray, setContentArray] = useState(arr);
  const onChange = (event) => setContent(event.target.value);
 
  const onSubmit = (event) => {
    event.preventDefault();

    if(content === "") {
      return;
    } else {
      //3. 글쓴것을 object화 하기   
      // 얘는 앞에 함수랑 상관없음 가져오는 값 content를 object로 변환해서 array로 저장시키기 위한 변수일뿐임 
      let dataKey;
      if( contentArray.length == 0 ) {
        dataKey = 0;
      } else {
        dataKey = contentArray[0].key + 1;
      }
      const contentsData = { 
        value : content, 
        key : dataKey 
      };
      
      //노마드코딩이 알려줌-> 블로그
      //4. 배열에 전배열과 같이 넣기
      //이거는 object화한contentsData 
      setContentArray(currentArray => [contentsData, ...currentArray]);

      //5. 작성시, list page로 이동
      //navigate('/');
      window.location.href = '/';
    }
  }
  //5. logalstorage에 저장하기
  window.localStorage.setItem("contentArray", JSON.stringify(contentArray));


  return (
    <div className="write-page">
      <div className='sub-inner'>
        <h2 className='sub-title'>작성하기</h2>
        <form>
          <textarea
            value={content}
            placeholder="내용을 입력해주세요."
            onChange={onChange}
          >            
          </textarea>

          <div className='button-wrap'>
            <button 
            type='button' 
            className='button button-normal'
            >취소
            </button>
            <Link to="/"
            className='button button-normal'
            >목록으로</Link>
            <button 
            type='button'
            className='button button-ok'
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
