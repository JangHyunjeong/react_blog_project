import * as React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function ListPage() {
    const contentArray =  window.localStorage.getItem("contentArray");

    let arr;
    if(contentArray == null) {
      arr = [];
    }else {
      arr = JSON.parse(contentArray);
    }
   


    // 컴포넌트가 바로 업데이트 될 수있도록 useSate를 사용해, props 를 업데이트해준다.
    let [parsedData, setParsedData] = useState(arr);

    // 삭제 function
    const actionDel = (e, key) => {
      e.preventDefault();
      //const newArray = parsedData.filter((item) => item.key !== key);

      // item.key = key인것을 제외하고 필터링 (새로운 배얼을 만듦)]

      //결과적으로 수정해야하는 값을 수정해여야해.
      //localStorage에 있는 값을 변환하고싶은거니까, 결과적으로 그값을 수정하고, 
      parsedData = parsedData.filter((item) => item.key !== key);

      window.localStorage.setItem("contentArray", JSON.stringify(parsedData));      

      //데이터는 그 다음에 set해주면 돼. 먼저 set 하면 오류나!!!
      setParsedData(JSON.parse(window.localStorage.getItem("contentArray")));
    }
      return (
        <div className="list-page">
          <div className='sub-inner'>
            <h2 className='sub-title'>List</h2>
            <form>
              <ul className="list-content">
                <li className="list-header">
                  <div>번호</div>
                  <div>제목</div>
                  <div>관리</div>
                </li>
                  {parsedData.length !== 0 ? (
                    parsedData.map((item, index) => 
                    <li className="list-body" key={item.key}>
                      <div>{parsedData.length - index}</div>
                      <div className="subject">
                        <Link to={'/view/'+item.key}>
                          {item.title}
                        </Link>
                        </div>
                      <div>
                        <div className='button-wrap-col'>
                          <Link to={'/write/'+item.key} 
                            type="button" 
                            className="button-xs button-normal"
                          >
                            수정</Link>
                          <button 
                            type="button" 
                            className="button-xs button-del"
                            onClick={(e) => {actionDel(e, item.key)}
                            }
                          >
                            {/* 01. 클릭한 애의 키값 받아오기 */}
                            {/* 02. 키값이 지금숫자인 애를 배열에서 필터링*/}
                            삭제</button>
                        </div>
                      </div>
                    </li>
                    )
                  ) : (
                    <li className="list-empty">등록된 게시글 없습니다.</li>
                  )}
              </ul>
    
              <div className='button-wrap-row'>
                <Link 
                  to={`/write`}
                  className='button button-m button-ok'
                > 글쓰기
                </Link>
              </div>
    
            </form>
          </div>
        </div>
      );
    }
    
    export default ListPage;