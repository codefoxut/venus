const useAuth = () => {
    const user = useState('user', () => null);

    const signUp = async ({email, password, ...metadata}) => {
        // create a list of email and passwords
        // and create a filter and matching passsword.
        // return user and error.
        console.log("signup", email, password);
    }

    const signIn = async ({email, password}) => {
        // check the email and password in the list and return user.
        console.log("signin", email, password);
    }

    const signOut = async () => {
        // sign out user
        console.log("sign out the user.");
    }
    return {
        user,
        signUp,
        signIn,
        signOut,
    }
}

export default useAuth;