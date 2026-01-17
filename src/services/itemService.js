import AxiosConfig from "./axiosConfig";
const RESOURCE = "api/item";
export async function getAll() {
  const response = await AxiosConfig.get(`${RESOURCE}`);
  return response.data;
}
export async function getById(id) {
  const response = await AxiosConfig.get(`${RESOURCE}/${id}`); //id [FromQuery]
  return response.data;
}
export async function itemUpdate(id, data) {
  const response = await AxiosConfig.put(`${RESOURCE}/${id}`, data); //id [FromQuery], data [FromBody]
  return response.data;
}
export async function itemCreate(data) {
  const response = await AxiosConfig.create(`${RESOURCE}`, data); //data [FromBody]
  return response.data;
}
export async function itemDelete(id) {
  const response = await AxiosConfig.delete(`${RESOURCE}/${id}`); //id [FromQuery]
  return response.data;
}
export async function getAllItemsPaginated(page, pageSize) {
  const response = await AxiosConfig.get(`${RESOURCE}/authorsItems`, {
    params: {
      page,
      pageSize,
    },
  });
  return response.data;
}
