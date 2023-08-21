const videos = [...document.querySelectorAll("[data-time]")]

const times = 
    videos
        .map(video => video.dataset.time)
        .map(timeCode => {
        const [mins, secs] = timeCode.split(":").map(parseFloat);
        return (mins*60) + secs;
        })
        .reduce( (total,vidSeconds)=> Number(total + vidSeconds),0);

const totalHours = Math.floor(times/3600)
const totalMinute = Math.floor(times/60);
const totalSeconds = (times%60);
console.log(`total video time is ${totalHours}:${totalMinute%60}:${totalSeconds}`)