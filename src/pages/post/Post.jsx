import { useEffect, useState, useCallback } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/img/icon-like.svg';
import { useLocation } from 'react-router-dom';
import PostDetailAPI from '../../api/posts/PostDetailAPI';
import { dateTrance } from './PostListContent';
import Loading from '../loading/Loading';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { accessTokenAtom, csrfTokenAtom } from '../../atom/Atom';
import { useRecoilValue } from 'recoil';
import PostCommentAPI from '../../api/posts/PostCommentAPI';

function Post() {
  // 상태 초기화
  const [data, setData] = useState({ post: {} });
  const [commentData, setCommentData] = useState([]);
  const [newComment, setNewComment] = useState('');

  // 현재 URL에서 게시물 ID 추출
  const location = useLocation();
  const postID = location.state.id;

  // 게시물 및 댓글 데이터 가져오는 API 함수 초기화
  const getPostDetail = PostDetailAPI(postID);

  // Recoil 상태 사용
  const token = useRecoilValue(accessTokenAtom);
  const csrfToken = useRecoilValue(csrfTokenAtom);
  
  const postComment = PostCommentAPI(postID, token, csrfToken, newComment)

  // 게시물 및 댓글 데이터 가져오기
  const fetchData = useCallback(async () => {
    const res = await getPostDetail();
    setData(res.post);
    setCommentData(res.comments);
    return res;
  }, [getPostDetail]);

  useEffect(() => {
    // 컴포넌트 마운트 시 데이터 가져오기
    const fetchDataAndSetData = async () => {
      await fetchData();
    };
  
    fetchDataAndSetData();
  }, [fetchData]); // fetchData를 의존성 배열에 추가
  
  useEffect(() => {
    // 댓글 데이터 갱신
    const fetchCommentData = async () => {
      const newRes = await fetchData();
      setCommentData(newRes.comments);
    };
  
    // 댓글 데이터 갱신은 fetchData에 의존하므로 fetchData를 의존성 배열에 추가
    fetchCommentData();
  }, [fetchData]);

  // 댓글 입력 핸들러
  const commentChange = (e) => {
    setNewComment(e.target.value);
  };

  // 댓글 제출 핸들러
  async function commentSubmitHandler(e) {
    e.preventDefault();
    await postComment();
    setNewComment('');
    const newRes = await fetchData();
    setCommentData(newRes.comments);
  }

  // 게시물 작성일 변환 함수
  const time = dateTrance(data.create_date);

  return (
    <>
      <h2>{data.title}</h2>

      <SectionWrapper>
        {data.content}
        <StyledLike>
          <LikeIcon /> {data.like}
        </StyledLike>
        <StyledTime>{time}</StyledTime>
      </SectionWrapper>

      <StyledComment>comment : {commentData.length}</StyledComment>

      <CommentInput>
        <form onSubmit={commentSubmitHandler}>
          <Input
            width={'100%'}
            onChange={commentChange}
            type='text'
            id='comment'
            value={newComment}
          />
          <Button
            type='submit'
            height={'42px'}
            width={'82px'}
            content={'댓글 등록'}
            backgroundcolor={'white'}
            color={'var(--main-color)'}
            style={{
              position: 'absolute',
              right: '0px',
              top: '15px',
              border: '1px solid var(--main-color)',
            }}
          />
        </form>
      </CommentInput>

      <CommentSection>
        {commentData.length > 0 ? (
          commentData.map((comment, index) => (
            <Comments key={index}>
              <StyledId>
                {/* 여기 username으로 변경 */}
                {comment.user_id}
              </StyledId>
              <p>{comment.content}</p>
              <StyledTime style={{ top: '5px', bottom: '0', fontSize: '10px' }}>
                {dateTrance(comment.create_date)}
              </StyledTime>
            </Comments>
          ))
        ) : (
          <Loading />
        )}
      </CommentSection>
    </>
  );
}

// 컴포넌트 스타일 관련 정의
const CommentInput = styled.div`
  position: relative;
`;
const StyledId = styled.div`
  height: 10px;
  font-size: 10px;
  margin-bottom: 2px;
`;

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 220px;
  border: 1px solid rgba(103, 103, 103, 0.3);
  border-radius: 10px;
`;

const CommentSection = styled.section``;

const Comments = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid rgba(103, 103, 103, 0.5);
  margin-top: 10px;
  border-radius: 5px;
`;

const StyledLike = styled.div`
  position: absolute;
  justify-content: center;
  margin-left: 20px;
  bottom: 10px;
`;

const StyledTime = styled(StyledLike)`
  bottom: 10px;
  right: 20px;
`;

const StyledComment = styled.div`
  width: 114px;
  height: 26px;
  color: #676767;
  border: 2px solid rgba(103, 103, 103, 1);
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
`;

export default Post;
