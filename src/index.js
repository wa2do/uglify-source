const myUsers = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
};

function add(x, y) {
  return x + y;
}

function getusers() {
  return myUsers;
}

let result = add(3, 2);
console.log('reuslt', result);

let usr = getusers();
console.log('usr', usr);
