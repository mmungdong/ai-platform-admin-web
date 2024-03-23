import req from "./../request"

export default function loginApi() {
  const [{ data, loading }, execute] = req({
    url: "/user/login",
    method: "post",
  })
  return {
    execute,
    data,
    loading,
  }
}