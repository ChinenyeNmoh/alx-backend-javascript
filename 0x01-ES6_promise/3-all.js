/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p1 = Promise.resolve(uploadPhoto());
  const p2 = Promise.resolve(createUser());
  Promise.all([p1, p2]).then((resArray) => {
    console.log(resArray[0].body, resArray[1].firstName, resArray[1].lastName);
  })
    .catch(() => { console.log('Signup system offline'); });
}
