import * as React from 'react';
import {Link} from 'react-router-dom';

function ListPage() {
    //   const [content, setContent] = useState("");
    //   const onChange = (event) => setContent(event.target.value);
    //   const onSubmit = (event) => {
    //     event.preventDefault();
    //   }
      return (
        <div className="list-page">
          <div className='sub-inner'>
            <h2 className='sub-title'>리스트 페이지</h2>
            <form>
              <div className="list-content">
                
                <table>
                    <tr>
                        <th>
                            <input type='checkbox'></input>
                        </th>
                        <th>
                            번호
                        </th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><Link to="/view">상세페이지로 연결될 제목입력</Link></td>
                      <td>작성자이름</td>
                      <td>작성일 뿌리기</td>
                      <td>조회수 뿌리기</td>
                    </tr>
                </table>
              </div>
            
    
    
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