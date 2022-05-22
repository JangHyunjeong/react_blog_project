//import './css/write-page.css';
//import { useState } from 'react';

function WritePage() {
//   const [content, setContent] = useState("");
//   const onChange = (event) => setContent(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//   }
  return (
    <div className="view-page">
      <div className='sub-inner'>
        <h2 className='sub-title'>뷰페이지</h2>
        <form>
          <div className="view-content">
              뷰콘텐츠 노출
          </div>
          {/* <textarea
            value={content}
            onChange={onChange}
            placeholder="내용을 입력해주세요."
          >            
          </textarea> */}


          <div className='button-wrap'>
            <button 
            type='button' 
            className='button button-normal'
            > 수정
            </button>
            <button 
            type='submit'
            className='button button-ok'
            > 삭제
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default WritePage;