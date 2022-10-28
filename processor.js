const fs = require('fs');
const  vip = require('./vipconf.js');
const normal = require('./normalconf.js');
const restricted = require('./restrictedconf.js')

vip.addNewFriend();
vip.addNewPhoto();
vip.addNewVideo();
/*
const vp = {
ADD_PHOTO : vip.addNewPhoto(),
ALL_FRIENDS : vip.getAllFriends(),
ADD_FRIEND : vip.addNewFriend(),
REMOVE_FRIEND : vip.removeExistingFriend(),
REMOVE_PHOTO : vip.removeExistingPhoto(),
ALL_PHOTOS : vip.getAllPhotos(),
ADD_VIDEO : vip.addNewVideo(),
REMOVE_VIDEO : vip.removeExistingVideo(),
ALL_VIDEOS : vip.getAllVideos()
};

vp.ALL_PHOTOS
/*
const norm = {

ADD_PHOTO : normal.addNewPhoto(),
ALL_FRIENDS : normal.getAllFriends(),
ADD_FRIEND : normal.addNewFriend(),
REMOVE_FRIEND : normal.removeExistingFriend(),
REMOVE_PHOTO : normal.removeExistingPhoto(),
ALL_PHOTOS : normal.getAllPhotos(),
ADD_VIDEO : normal.addNewVideo(),
REMOVE_VIDEO :normal.removeExistingVideo(),
ALL_VIDEOS : normal.getAllVideos()

}
/*

const restr = {

    ADD_PHOTO : restricted.addNewFriend(),
    ALL_FRIENDS : restricted.getAllFriends(),
    ADD_FRIEND : restricted.addNewFriend(),
    REMOVE_FRIEND : restricted.removeExistingFriend(),
    REMOVE_PHOTO : restricted.removeExistingPhoto(),
    ALL_PHOTOS : restricted.getAllPhotos(),
    ADD_VIDEO : restricted.addNewVideo(),
    REMOVE_VIDEO :restricted.removeExistingVideo(),
    ALL_VIDEOS : restricted.getAllVideos()
    
    }
*/



