const common = {
  DEFAULT: 'default',
};

const borders = {
  DASHED: 'dashed',
  DOTTED: 'dotted',
  SOLID: 'solid',
};

const display = {
  BLOCK: 'block',
  FLEX: 'flex',
  GRID: 'grid',
  NONE: 'none',
};

const orientation = {
  CENTER: 'center',
  COLUMN: 'column',
  FLEX_START: 'flex-start',
  FLEX_END: 'flex-end',
  ROW: 'row',
  SPACE_AROUND: 'space-around',
  SPACE_BETWEEN: 'space-between',
  SPACE_EVENLY: 'space-evenly',
  STRETCH: 'stretch',
};

const position = {
  ABSOLUTE: 'absolute',
  AUTO: 'auto',
  RELATIVE: 'relative',
};

const wrap = {
  NOWRAP: 'nowrap',
  WRAP: 'wrap',
  WRAP_REVERSE: 'wrap-reverse',
};

const style = {
  ...borders,
  ...common,
  ...display,
  ...orientation,
  ...position,
  ...wrap,
};

export { style };
