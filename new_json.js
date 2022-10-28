const fs = require ('fs');
const newUser = {
    userName: "vipperson1",
    age: 37,
    gender: 'MALE',       
    city: 'Bourgas',      
    numberOfFriends: 25,  
    numberOfPhotos: '150',
    numberOfVideos: '1',  
    accountType: 'normal',
    accountCredit: '',
    isAccountRestricted: false
  };
  fs.writeFile('./vip.json',JSON.stringify(newUser), err => {if(err){console.log(erorr);
  } else {
      console.log('File successfully written');}
  } );

  