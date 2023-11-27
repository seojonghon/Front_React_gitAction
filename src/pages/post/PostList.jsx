import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { LayoutWrapper } from "../../layout/Layout";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { ReactComponent as SearchIcon } from "../../assets/img/icon-search.svg";
import Paging from "../../components/paging/Paging";
import PostListContent from "./PostListContent";
import PostListAPI from "../../api/posts/PostListAPI";
import Loading from "../loading/Loading";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '../../atom/Atom';

function PostList() {
  // 상태 변수 초기화
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ posts: [] });
  const [totalDataLength, setTotalDataLength] = useState(0);
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginAtom);

  const formButton = () => {
    if (isLogin) {
      navigate('/posts/form');
    } else if (!isLogin) {
      navigate('/login');
    }
  };

  // 데이터 가져오는 함수
  const getPostList = PostListAPI(page);

  // 페이지 변경 시 데이터 가져오기
  useEffect(() => {
    // 데이터 가져오는 함수
    const fetchData = async () => {
      const newData = await getPostList();
      setData(newData);
      if (page === 1) {
        setTotalDataLength(newData.posts[0].id);
      }
      console.log(newData);
      console.log(totalDataLength);
    };

    // 컴포넌트 마운트 시 데이터 가져오기
    fetchData();
  }, [page, totalDataLength, getPostList]); // getPostList를 의존성 배열에 추가

  return (
    <LayoutWrapper>
      <HeadWrapper>
        {/* 레시피 등록 버튼 */}
        <Button
          onClick={formButton}
          content='레시피 등록하기'
          backgroundcolor='white'
          color='black'
          style={{ border: '3px solid black' }}
        />
        <InputContainer>
          {/* 검색 입력 필드 */}
          <Input width='250px' style={{ padding: '0' }} />
          {/* 검색 아이콘 */}
          <SearchIcon
            style={{ position: 'absolute', right: '0px', top: '30px', width: "20px", height: "20px" }}
          />
        </InputContainer>
      </HeadWrapper>
      <StyledTable>
        <ListHeadWrapper>
          <th style={{ width: "10%" }}>번호</th>
          <td style={{ width: "40%" }}>요리 이름</td>
          <th style={{ width: "25%" }}>공유자</th>
          <th style={{ width: "25%" }}>작성일</th>
        </ListHeadWrapper>
        {data.posts.length > 0 ? (
          data.posts.map((res, i) => <PostListContent key={i} data={res} />)
        ) : (
          // 로딩 컴포넌트
          <Loading />
        )}
      </StyledTable>
      <Paging
        totalItem={totalDataLength}
        page={page}
        setPage={setPage}
        style={{ width: "100%", display: "inline", margin: "0 auto" }}
      />
    </LayoutWrapper>
  );
}

// 스타일드 컴포넌트 정의
const StyledTable = styled.table`
  border: 0;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const HeadWrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

// 테이블 헤더 스타일
export const ListHeadWrapper = styled.tr`
  background-color: var(--main-color);
  color: white;
  height: 40px;
  margin-top: 20px;
  padding: 0 15px;
  text-align: center;
  border-radius: 30px;
`;

export default PostList;
