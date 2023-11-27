import axios from "axios";
const api_uri=" http://localhost:3001";

  export const UserData= async(data)=>
{
     try{
        const {data : Existingdata } = await axios.get(`${api_uri}/posts`);
        const newid= (Math.max(...Existingdata.map(user => user.id)) +1,0);
        const newData=
        {
            ...data,
            id: newid
        }
        console.log(data);
        await axios.post(`${api_uri}/posts`,newData)
     }
     catch(e){
        console.error(e);
     }
}
export const getUserData =() =>axios.get(`${api_uri}/posts`);