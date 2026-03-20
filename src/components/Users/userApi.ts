import type { User } from "./UserType";

export const fetchAllUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] =  await res.json();
    return data;
} 