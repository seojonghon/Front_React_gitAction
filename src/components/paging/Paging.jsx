import "../paging/PagingStyle.css";
import Pagination from "react-js-pagination";

/**
 * Paging - 페이지네이션 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.page - 현재 페이지
 * @param {number} props.totalItem - 총 아이템 갯수
 * @param {Function} props.setPage - 페이지 변경 핸들러 함수
 * @returns {JSX.Element} - 페이지네이션 컴포넌트
 */
const Paging = (props) => {
  /**
   * handlePageChange - 페이지 변경 핸들러
   * @param {number} page - 변경된 페이지
   */
  const handlePageChange = (page) => {
    props.setPage(page);
  };

  return (
    <Pagination
      activePage={props.page}
      itemsCountPerPage={10}
      totalItemsCount={props.totalItem}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
