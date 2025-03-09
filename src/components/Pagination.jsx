import styles from '../styles/Pagination.module.css'

export default function Pagination({ currentPage, onPageChange, totalPages }) {
  return (
    <div className={styles.pagination}>
      <button type="button" className={styles['page-button']} disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Назад
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button type="button" className={styles['page-button']} disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Вперед
      </button>
    </div>
  )
}
