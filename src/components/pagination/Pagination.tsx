import { useEffect, useState, useCallback } from "react";

type PaginationProps = {
  count: number;
  onChange: (value: number) => void;
  currentPage: number;
  variant: "rounded" | "square";
  color: "primary" | "secondary";
  max?: number;
  siblingCount?: number;
};

const Pagination = ({
  variant,
  currentPage,
  count,
  onChange,
  color,
  max,
  siblingCount,
}: PaginationProps) => {
  const [page, setPage] = useState(1);
  const [maxLength] = useState(max ? max : 5);
  const [sibCount] = useState(siblingCount ? siblingCount : 2);

  const countArray: number[] = [];
  const displayedNumbers: number[] = [];

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const calculatePaginationItems = useCallback(() => {
    for (let index = 1; index <= count; index++) {
      countArray.push(index);
    }

    if (count > maxLength) {
      const startIndex = page - sibCount - 1;
      const endIndex = page + sibCount;
      if (page <= maxLength) {
        displayedNumbers.push(...countArray.slice(0, maxLength));
      } else {
        displayedNumbers.push(...countArray.slice(startIndex, endIndex));
      }
    } else {
      displayedNumbers.push(...countArray);
    }

    return (
      <>
        {displayedNumbers.map((n) => (
          <PaginationItem
            key={n}
            onChange={() => onChange(n)}
            value={n}
            active={n === page}
            variant={variant}
            color={color}
          />
        ))}
      </>
    );
  }, [count, currentPage, maxLength, onChange, page, variant, color]);

  return (
    <div className={`${variant} ${color} pagination`}>
      <button
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
        disabled={page === 1}
        className={`${variant} ${color} icon-btn`}
      >
        &#129120;
      </button>
      {count > maxLength && page > maxLength && <>...</>}
      {calculatePaginationItems()}
      {count > maxLength && page < count - sibCount && <>...</>}
      <button
        onClick={() => {
          if (page < count) {
            setPage(page + 1);
          }
        }}
        disabled={page === count}
        className={`${variant} ${color} icon-btn`}
      >
        &#129122;
      </button>
    </div>
  );
};

export default Pagination;

type PaginationItemProps = {
  value: number;
  active: boolean;
  onChange: () => void;
  variant: "rounded" | "square";
  color: "primary" | "secondary";
};
export const PaginationItem = ({
  value,
  active,
  variant,
  onChange,
  color,
}: PaginationItemProps) => {
  return (
    <p
      className={
        active
          ? `${variant} ${color} active pagination-item`
          : `${variant} ${color} pagination-item`
      }
      onClick={onChange}
    >
      {value}
    </p>
  );
};
