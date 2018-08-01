export const setItem = (obj) => {
  localStorage.setItem('currentUser', JSON.stringify(obj));
};

export const getItem = () => {
  const item = localStorage.getItem('currentUser');
  if(item === null)
    return {};
  return JSON.parse(item);
};