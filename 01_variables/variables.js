/*
 Phle toh bs ek hi variable tha but kch dikkate aagyi thi scope ko lekar ki agar hum koi variable declare kar diye aur maanlo blocks ke andr humne uss value ko change kiya toh lage haath saari values affect ho jaayengi
 */
{
    var varName = "Mai hu purana variable";
    let varName2 = "Mai hu naya variable";
}

varName = "I'm accessible from here too.";
varName2 = "But I'm not!";      // yeh ek special case jo ki hum kehte h ki na hi use kre toh better hai. JS mein hum var define karey bina bhi kr skte start. Isiliye output me woh print hogya wrna na hota

console.log(varName);
console.log(varName2);

