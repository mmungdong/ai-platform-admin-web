import req from "./../request"

export default function login(username, password) {
    const [{ data, loading, error }, refetch, cancelReq] = req({
        url: "/user/login",
        method: "post",
        params: {
            username,
            password,
        }
    })
    const externalRefetch = async () => {
        try {
          await refetch()
        } catch (e) {
          console.log(e)
        }
    }
    return {externalRefetch, data, loading, error, cancelReq}
}