import * as React from 'react';
import {Link} from 'react-router-dom';

function ListPage() {
    const contentArray =  window.localStorage.getItem("contentArray");
    const parsedData = JSON.parse(contentArray);
    console.log(parsedData);
      return (
        <div className="list-page">
          <div className='sub-inner'>
            <h2 className='sub-title'>리스트 페이지</h2>
            <form>
              <ul className="list-content">
                  {parsedData != null ? (
                    parsedData.map((item, index) => 
                    <li key={item.key}>
                      {item.value}
                    </li>
                    )
                  ) : (
                    <li>등록된 게시글 없습니다.</li>
                  )}
              </ul>
    
              <div className='button-wrap'>
                <button 
                type='button' 
                className='button button-normal'
                > 수정
                </button>
                <button 
                type='submit'
                className='button button-normal'
                > 삭제
                </button>
                <Link 
                  to={`/write`}
                  className='button button-ok'
                > 글쓰기
                </Link>
              </div>
    
            </form>
          </div>
        </div>
      );
    }
    
    export default ListPage;