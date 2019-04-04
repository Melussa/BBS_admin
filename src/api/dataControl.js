import request from '@/common/js/request'

// 创建
export function createApi (data) {
  return request({
    url: '/api/dataControl/create',
    method: 'post',
    data
  })
}

// 编辑
export function updateApi (data) {
  return request({
    url: '/api/dataControl/update',
    method: 'put',
    data
  })
}

// 删除
export function deleteApi (id) {
  return request({
    url: `/api/dataControl/delete/${id}`,
    method: 'delete'
  })
}

// 得到单条数据
export function getRowApi (id) {
  return request({
    url: `/api/dataControl/getRow/${id}`,
    method: 'get'
  })
}

// 获取列表
export function getListApi (params) {
  return request({
    url: '/api/dataControl/getList',
    method: 'get',
    params
  })
}

// 获取用户拥有
export function getUserDataControlApi (params) {
  return request({
    url: `/api/dataControl/getUserDataControl`,
    method: 'get',
    params
  })
}

// 获取所有
export function getAllApi (params) {
  return request({
    url: `/api/dataControl/getAll`,
    method: 'get',
    params
  })
}