import Palette from './Palette';

const primaryDark = Palette.primaryDark;
const primaryLight = Palette.primaryLight;
const white = Palette.white;

const wraper = {
  // border: '1px solid pink',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const common = {
  // border: '1px solid cyan',
  padding: '0 30px',
  color: white,
};

const TxtBold = {
  ...common,
  padding: '0 0 0 10px',
  fontWeight: 'bold',
};

const divider = {
  height: '75%',
  borderLeft: `1px solid ${primaryDark}`,
  borderRight: `1px solid ${primaryLight}`,
};

export default { wraper, common, divider, TxtBold };
