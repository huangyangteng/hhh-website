export default function Wave(){
    return <div className='wave-wrapper'>
        <div className="wave-video">
            <video  autoPlay loop muted playsInline>
                <source src="/videos/wave.webm" type="video/webm" />
                <source src="/videos/wave.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
}
