import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const retArray = [];
  const sign = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([sign, photo])
    .then((response) => {
      response.forEach((i) => {
        if (i.status === 'fulfilled') {
          retArray.push({ status: i.status, value: i.value });
        } else {
          retArray.push({ status: i.status, value: `${i.reason}` });
        }
      });
      return retArray;
    });
}
