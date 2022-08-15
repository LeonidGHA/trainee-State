import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.stroke}>{type}</td>
      <td className={css.stroke}>{amount}</td>
      <td className={css.stroke}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistoryItem;
