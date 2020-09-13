
import {fetchUser} from './demo1.js';




describe('',()=>{
    it('',async()=>{

        await fetchUser()
        .then(user => {
            console.log(user);
            console.log("User id : "+user.data.id)
            console.log("User mail :"+user.data.email)
        })
        .catch(error => {
            console.log(error)
        });
        

    })
})