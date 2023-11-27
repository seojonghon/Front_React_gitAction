import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PostListContent({ data }) {
  const navigate = useNavigate();
  const dateString = data.create_date;

  const date = dateTrance(dateString);

  const postHandler = () => {
    navigate('/posts/detail', {
      state: {
        id: data.id,
      },
    });
  };

  return (
    <ListContentWrapper>
      <td>{data.id}</td>
      <td>
        <div
          onClick={postHandler}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {data.title}
        </div>
      </td>
      <td>{data.username}</td>
      <td>{date}</td>
    </ListContentWrapper>
  );
}

const ListContentWrapper = styled.tr`
  background-color: white;
  color: #676767;
  font-family: 'Nanum Gothic', '맑은 고딕', Helvetica, Arial, sans-serif;
  border-bottom: 0.5px solid rgba(103, 103, 103, 0.3);

  height: 40px;
  margin-top: 20px;
  padding: 0 15px;
  text-align: center;
`;

export const dateTrance = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthList = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const monthIndex = date.getMonth();
  const month = monthList[monthIndex];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${year}년 ${month} ${day}일 ${hours}시 ${minutes}분`;
  return formattedDate;
};

export default PostListContent;
