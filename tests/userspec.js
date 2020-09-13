import {UserPage} from './userpage.js';
import { isMainThread } from 'worker_threads';

let loginpage = new UserPage("sam","password");

console.log(loginpage.getUser());

describe('',()=>{

    test('',()=>{
        console.log('test');
    })

})