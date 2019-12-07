import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('cahnge 1');
});
user.on('change', () => {
  console.log('change 2');
});

user.trigger('change');
