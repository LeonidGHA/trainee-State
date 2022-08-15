import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function StatisticksEl({ label, percentage, style }) {
  return (
    <li className={css.item} style={style}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticksEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
  }),
};
export default StatisticksEl;
