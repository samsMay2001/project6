import { Camera, File, Image, Sticker, User } from "phosphor-react";


// later on, before deployement hange the colors to be the same and to be the same
export const Actions = [
    {
        color: '#4da5fe', 
        icon: <Image size={24} />, 
        y: 102, 
        title: 'Photo/Video'
    }, 
    {
        color: '#1b8cfe', 
        icon: <Sticker size={24} />, 
        y: 172, 
        title: 'Stickers'
    }, 
    {
        color: '#0172e4', 
        icon: <Camera size={24} />, 
        y: 242, 
        title: 'Image'
    }, 
    {
        color: '#0159b2', 
        icon: <File size={24} />, 
        y: 312, 
        title: 'Document'
    }, 
    {
        color: '#013f7f', 
        icon: <User size={24} />, 
        y: 382, 
        title: 'Contact'
    }, 
]