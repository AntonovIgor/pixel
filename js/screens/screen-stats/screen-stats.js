import ScreenStats from '../screen-stats/screen-stats-view';

export default (state) => {
  const screenStats = new ScreenStats(state);

  return screenStats;
};
