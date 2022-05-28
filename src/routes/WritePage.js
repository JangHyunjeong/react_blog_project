import './write-page.css';
import { useState } from 'react';

function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const key = dataArray.length;

  const getTitle = (event) => {
    setTitle(event.target.value);
    //console.log(title);
  }
  const getContent = (event) => {
    setContent(event.target.value);
  }

  //object형태로 받아오기
  const data = {
    key: key,
    title: title,
    content: content
  }

  const getData = (event) => {
    event.preventDefault();
    setDataArray([...dataArray, data]);
  }

  return (
    <div className="write-page">
      <div className='sub-inner'>
        <h2 className='sub-title'>작성하기</h2>
        <form>
          <input 
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={getTitle}
          >
          </input>
          <textarea
            value={content}
            placeholder="내용을 입력해주세요."
            onChange={getContent}
          >            
          </textarea>

          <div className='button-wrap'>
            <button 
            type='button' 
            className='button button-normal'
            >취소
            </button>
            <button 
            type='submit'
            className='button button-ok'
            onClick={getData}
            >확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WritePage;
