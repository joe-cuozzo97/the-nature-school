import sendRequest from './send-request';

const BASE_URL = 'http://localhost:3001/api/classDays';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addClassDayToPage(classDay) {
console.log(classDay)
  return sendRequest(`${BASE_URL}`,'POST', {classDay});
}