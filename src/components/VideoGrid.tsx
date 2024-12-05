import { useEffect, useRef, useState } from "react";


type videoProps ={
    title: string;
    channel: {
        name: string;
        id: string;
        profileUrl: string;
    };
    views: number;
    postedAt: Date;
    duration: number;
    thumbnailUrl: string;
    videoUrl: string;

}

export function VideoGrid({title,channel,views,postedAt,duration,thumbnailUrl,videoUrl}:videoProps){
    const [isVideoPlaying,setIsVideoPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(videoRef.current == null){
            return
        }
        if(isVideoPlaying){
            videoRef.current.currentTime=0
            videoRef.current.play()
        }else{
            videoRef.current?.pause()
        }
       


    },[isVideoPlaying])
    

    return <>
    
    <div className="" onMouseEnter={()=>setIsVideoPlaying(true)} onMouseLeave={()=>setIsVideoPlaying(false)}>
        <a href="" className="relative">
            <img className={`rounded-lg object-cover transition-[border-radius] duration-200 ${isVideoPlaying ? "rounded-none" : "rounded-xl"} `} src={thumbnailUrl} alt="" />
            <div className="absolute right-0 bottom-1 rounded-md bg-secondary-dark text-secondary-default px-1">{duration}</div>
            <video 
            ref={videoRef}
             src={videoUrl}
             muted
             className={`absolute inset-0 ${isVideoPlaying ? "opacity-100 delay-200" : "opacity-0" } `}
             />
        </a>
        <div className="flex gap-2 mt-2">
            <div>
                <img className="h-10 w-10 shrink-0 rounded-full" src={channel.profileUrl} alt="" />
            </div>
            <div>
                <div className="font-bold">{title}</div>
                <div className="text-secondary-text">{channel.name}</div>
                <div className="text-secondary-text">{views}</div>
            </div>
        </div>
    </div>


    </>
}