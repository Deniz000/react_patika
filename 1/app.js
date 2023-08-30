import axios from 'axios'

async function getUser(userID){
    try {
       
        const { data : user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
        const { data : post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userID}`);

        console.log("Kullanıcı geldi",user);
        console.log("Kullanıcının postu geldi ",post);
        } catch (e) {
        console.log(e);
    }
}
export default getUser;