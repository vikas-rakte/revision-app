import type { User } from "./UserType";

export const fetchAllUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] =  await res.json();
    return data;
} 


export const fetchUserInfo = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data: User =  await res.json();
    return data;
} 



export const updateUser = async (id: string, payload: User) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    method: 'PUT',
       body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json',
        }
    });
    const data =  await res.json();
    return data;
} 