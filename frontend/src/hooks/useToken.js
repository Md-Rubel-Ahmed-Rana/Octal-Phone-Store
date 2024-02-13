
const useToken = () => {
    const handleToken = (email) => {
        fetch(`https://octal-phone-server.vercel.app/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken);
                }
            })
    }

    return handleToken
};

export default useToken;