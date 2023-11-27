import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

function PostForm() {
  const navigate = useNavigate();

  // 폼 데이터 상태 초기화
  const [form, setForm] = useState({
    title: '',
    contents: '',
  });

  const { title, contents } = form;

  // 입력값 변경 핸들러
  const onChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 다음 페이지로 이동
  const nextPage = () => {
    const sanitizedContents = stripHtmlTags(contents);
    navigate('/posts/form/ingre', {
      state: {
        title: title,
        contents: sanitizedContents,
      },
    });
  };

  // 페이지 새로고침 혹은 창 닫을 때 경고 메시지 출력
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue =
        '변경 사항이 저장되지 않을 수 있습니다. 정말 페이지를 나가시겠습니까?';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div className='recipebox'>
        <h1 style={{ fontWeight: 'bold' }}>레시피 등록</h1>
        <hr />

        <Input
          type='text'
          name='title'
          value={title}
          width='50%'
          placeholder='요리 이름'
          onChange={(e) => onChange('title', e.target.value)}
          style={{
            border: '3px solid black',
            left: '5px',
            outline: 'none',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--main-color)')}
          onBlur={(e) => (e.target.style.borderColor = 'black')}
        />

        <div>레시피 내용</div>
        <div
          sx={{
            '  .ql-editor': {
              padding: '30px',
              boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)',
              margin: '2px',
              width: '100%',
              maxHeight: '75vh',
              minHeight: '75vh',
              backgroundColor: 'white',
            },
          }}
        >
          <ReactQuill
            value={contents}
            onChange={(value) => onChange('contents', value)}
          />
        </div>
        <hr />

        <Button onClick={nextPage} content='다음' />
      </div>
    </>
  );
}

// HTML 태그 제거 함수
function stripHtmlTags(html) {
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
}

export default PostForm;
