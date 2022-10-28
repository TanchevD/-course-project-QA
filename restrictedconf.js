const fs = require("fs");

let jsonFile = ('restricted.json');
const jsonString = fs.readFileSync(jsonFile);
const user = JSON.parse(jsonString);
const friends = (user.numberOfFriends);
const photos = (user.numberOfPhotos);
const videos = (user.numberOfVideos);

function addNewFriend(){
    
    let addFriend = (+friends + 1);
    if (friends < 50){
    user["numberOfFriends"] = addFriend;
    fs.writeFileSync("./normal.json", JSON.stringify(user));
    } else {console.error("You reach maximum of friends");}
        
};



function removeExistingFriend(){
    let minusNumberOfFriends = (+user.numberOfFriends - 1);
    if (friends >0){ 
    user["numberOfFriends"] = minusNumberOfFriends
    fs.writeFileSync("./restricted.json", JSON.stringify(user));
    } else {console.error("You nave no friends to remove");}
    };
 

function getAllFriends() {

    console.log(friends);
    if (friends == 0){return 'Nemash priateli bace'
    } else {return 'Ba si picha'};
};


function addNewPhoto(){
    console.log('You have no wrights, to add new photo');
        };
    
    

function removeExistingPhoto(){
    let removePhoto = (+photos - 1);
    if(photos > 0){
    user["numberOfPhotos"] = removePhoto;
    fs.writeFileSync("./restricted.json", JSON.stringify(user));
    } else {console.error('You have no photos to delete')}
};

   
    

function getAllPhotos() {

    if(user.numberOfPhotos == 0) {
        return `You have not uploaded any photos yet`;
     }

    if(user.numberOfPhotos == 1) {
        return `You have uploaded ${user.numberOfPhotos} photo`;
        };

        return `You have uploaded ${user.numberOfPhotos} photos`;
    }
    console.log(getAllPhotos());

    function addNewVideo(){
        console.log('You have no wrights, to add new video');  };
        
        
    
    function removeExistingVideo(){
        let removeVideo = (+videos - 1);
        if(videos > 0){
        user["numberOfvideos"] = removeVideo;
        fs.writeFileSync("./restricted.json", JSON.stringify(user));
        } else {console.error('You have videos to delete')}
    };
    
       
        
    
    function getAllVideos() {
    
        if(user.numberOfVideos == 0) {
            return `You have not uploaded any videos yet`;
         }
    
        if(user.numberOfvideos == 1) {
            return `You have uploaded ${user.numberOfVideos} video`;
            };
    
            return `You have uploaded ${user.numberOfVideos} video`;
        }
        
      
        
        
        module.exports = {
            addNewFriend, removeExistingFriend, getAllFriends, getAllPhotos, removeExistingPhoto, addNewPhoto,
            addNewVideo, removeExistingVideo, getAllVideos
        };
