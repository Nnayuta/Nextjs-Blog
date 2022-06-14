const API_URL = 'http://localhost:3333';

export const getUserById = async (id: string) => {
    const user = await fetch(`${API_URL}/users/${id}`)
    return user;
}