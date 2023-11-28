import {config} from 'dotenv';
import fs from 'node:fs/promises';
import log from '@ajar/marker';
import * as s from './space/dashboard.js';

config();//loads .env vars to process.env

// console.log('process.env.HELLO:',process.env.HELLO);
log.yellow('process.env.HELLO:',process.env.HELLO);


let a:string = 'env';

(async ()=>{
    const fileContent = await fs.readFile('.env','utf8');
    // console.log('fileContent:',fileContent);
    log.magenta(a + 'fileContent:',fileContent);

    log.blue('ships:', s.countShips());

    const alf = new s.Alien(122);
    const msg = alf.greet(s.lifeForms.martian);
    log.green('msg:',msg);

})()

