import { useState } from "react";

const useUserState = () => {
    const [user, setUser] = useState(null);
    return { user, setUser };
}

export default useUserState;