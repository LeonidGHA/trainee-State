import StatisticksEl from './StatisticksEl';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
function Statistics({ title, stats }) {
  const randomColor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const itemData = stats.map(el => (
    <StatisticksEl
      key={el.id}
      label={el.label}
      percentage={el.percentage}
      style={{ backgroundColor: randomColor() }}
    />
  ));
  //   const itemData = stats.map(({ id, ...props }) => (
  // <StatisticksEl key={id} {...props} />
  //   ));

  return (
    <section className="statistics">
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>{itemData}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
