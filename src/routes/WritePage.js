import './write-page.css';
import { useState } from 'react';

function WritePage() {
  const [content, setContent] = useState("");
  const onChange = (event) => setContent(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="write-page">
      <div className='sub-inner'>
        <h2 className='sub-title'>작성하기</h2>
        <form>
          <textarea
            value={content}
            onChange={onChange}
            placeholder="내용을 입력해주세요."
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
            onClick={onSubmit}
            className='button button-ok'
            >확인
            </button>
          </div>


          <div className='view-page'>
            {content}
          </div>
        </form>
      </div>
    </div>
  );
}

export default WritePage;
