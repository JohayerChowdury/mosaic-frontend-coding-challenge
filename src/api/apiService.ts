import axiosClient from "./axiosClient"

const GET_URL = "/items"
export const getItems = async () => {
  const { data } = await axiosClient.get(GET_URL)
  return data
}

const POST_URL = "/items"
export const postItem = async (item: any) => {
  const { data } = await axiosClient.post(POST_URL, item)
  return data
}

export const deleteItem = async (id: number) => {
  const { data } = await axiosClient.delete(`${GET_URL}/${id}`)
  return data
}
