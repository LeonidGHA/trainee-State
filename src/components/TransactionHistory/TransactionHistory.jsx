import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  const trasactionItem = items.map(({ id, ...props }) => (
    <TransactionHistoryItem key={id} {...props} />
  ));
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>{trasactionItem}</tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
