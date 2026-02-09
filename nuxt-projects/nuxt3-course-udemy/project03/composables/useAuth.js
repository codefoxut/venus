import users from "@/data/users.json"

export const useAuth = () => {
    const user = useCookie('user')
    const error = useState('auth_error', () => null)

    const login = ({ email, password }) => {
        const found = users.find(u => u.email === email && u.password === password)
        if (found) {
            user.value = found
            error.value = null
            return { error: null }
        }
        error.value = 'Invalid email or password'
        return { error: error.value }
    }

    const logout = () => {
        user.value = null
        error.value = null
    }

    return {
        user,
        error,
        login,
        logout
    }
}
