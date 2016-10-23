import { request } from '../utils'
import qs from 'qs'

export async function query(params) {
  return request('/api/users', {
    method: 'get',
    body: qs.stringify(params),
    data:params,
  })
}

export async function create(params) {
  console.log(params);
  return request('/api/users', {
    method: 'post',
    body: qs.stringify(params),
    data:params,
  })
}

export async function remove(params) {
  return request('/api/users', {
    method: 'delete',
    body: qs.stringify(params),
    data:params,
  })
}

export async function update(params) {
  return request('/api/users', {
    method: 'put',
    body: qs.stringify(params),
    data: params,
  })
}
