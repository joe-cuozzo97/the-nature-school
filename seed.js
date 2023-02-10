require('dotenv').config();
require('./config/database');

const Class = require('./models/class');

 (async function(){

    await Class.deleteMany({});
    const classes = await Class.create([
        {date:'monday', time:'1pm', location:'blue heron park', activities:'fun stuff!', forecast:'cold'},
        {date:'monday', time:'2pm', location:'blue heron park', activities:'fun stuff!', forecast:'cold'},
        {date:'monday', time:'3pm', location:'blue heron park', activities:'fun stuff!', forecast:'cold'},
        {date:'monday', time:'4pm', location:'blue heron park', activities:'fun stuff!', forecast:'cold'},
        {date:'monday', time:'5pm', location:'blue heron park', activities:'fun stuff!', forecast:'cold'},
        {date:'monday', time:'6pm', location:'blue heron park', activities:'fun stuff!', forecast:'cold'}
    ]);
    console.log(classes)
    process.exit()
 })();
 