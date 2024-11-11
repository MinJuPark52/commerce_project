import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({
  totalItems = 0, // 기본값 0 설정
  itemsPerPage = 9, // 기본값 9 설정
  currentPage,
  onPageChange,
}) => {
  // totalItems와 itemsPerPage가 유효하지 않으면 0으로 처리
  const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;

  return (
    // totalPages가 0 이상일 때만 Pagination 컴포넌트 렌더링
    totalPages > 0 && (
      <Stack
        spacing={2}
        className="pagination"
        alignItems="center"
        justifyContent="center"
        mt={3}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={onPageChange} // 페이지 변경 시 호출되는 함수
        />
      </Stack>
    )
  );
};

export default PaginationComponent;
