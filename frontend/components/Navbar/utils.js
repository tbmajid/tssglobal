export const ChildrenDetect = (item) => {
  const { submenu: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length < 3) {
    return false;
  }

  return true;
};
