const global = {
  fontSize: '14px',
  fontColor: '#6e6e6e',
  borderSize: '1px',
  borderColor: '#9e9e9e',
  borderStyle: 'solid',
  bgColor: '#fff',
};

global.border = `${global.borderSize} ${global.borderStyle} ${
  global.borderColor
}`;

const panel = {
  width: '320px',
  heightMin: '300px',
  heightMax: '500px',
  margin: 0,
  padding: 0,
};

const header = {
  padding: '6px 12px',
  info: {
    margin: 0,
    marginRigth: '6px',
    fontSize: '20px',
    lineHeight: '30px',
    fontColor: '#4d4d4d',
  },
};

export { global, panel, header };
