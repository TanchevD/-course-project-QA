const fs = require("fs");

let jsonFile = ('./vip.json');
const jsonString = fs.readFileSync(jsonFile);
const user = JSON.parse(jsonString);
const friends = (user.numberOfFriends);
const photos = (user.numberOfPhotos);
const videos = (user.numberOfVideos);

function addNewFriend(){
    
    let addFriend = (+friends + 2);   
    user["numberOfFriends"] = addFriend;
    fs.writeFileSync("./vip.json", JSON.stringify(user));   
        
};

//addNewFriend;

function removeExistingFriend(){
let minusNumberOfFriends = (+user.numberOfFriends - 1);
if (friends >0){ 
user["numberOfFriends"] = minusNumberOfFriends
fs.writeFileSync("./vip.json", JSON.stringify(user));
} else {console.error("You nave no friends to remove");}
};
 //removeExistingFriend();

function getAllFriends() {

console.log(friends);
if (friends == 0){return 'Nemash priateli bace'}
else {return 'Ba si picha'};
};


function addNewPhoto(){
    let addPhoto = (+user.numberOfPhotos + 1);
       user["numberOfPhotos"] = addPhoto;
    fs.writeFileSync("./vip.json", JSON.stringify(user));
        };
   
    

function removeExistingPhoto(){
    let removePhoto = (+photos - 1);
    if(photos > 0){
    user["numberOfPhotos"] = removePhoto;
    fs.writeFileSync("./vip.json", JSON.stringify(user));
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
    

    function addNewVideo(){
        let addVideo = (+videos + 1);
        user["numberOfVideos"] = addVideo;
        fs.writeFileSync("./vip.json", JSON.stringify(user));
               };
        
        
    
    function removeExistingVideo(){
        let removeVideo = (+videos - 1);
        if(videos > 0){
        user["numberOfVideos"] = removeVideo;
        fs.writeFileSync("./vip.json", JSON.stringify(user));
        } else {console.error('You have no videos to delete')}
    };
    
       
        
    
    function getAllVideos() {
    
        if(user.numberOfVideos == 0) {
            return `You have not uploaded any videos yet`;
         }
    
        if(user.numberOfVideos == 1) {
            return `You have uploaded ${user.numberOfVideos} video`;
            };
    
            return `You have uploaded ${user.numberOfVideos} video`;
        }
        
      
        
        
        module.exports = {
            addNewFriend, getAllFriends, getAllPhotos, removeExistingPhoto, addNewPhoto,
            addNewVideo, removeExistingVideo, getAllVideos, removeExistingFriend
        };
