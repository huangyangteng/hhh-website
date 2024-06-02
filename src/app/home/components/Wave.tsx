export default function Wave(){
    return <div className='wave-wrapper'>
        <div className="wave-video">
            <video  autoPlay loop muted playsInline>
                <source src="https://woo.org/videos/woonetwork_BG.webm" type="video/webm" />
                <source src="https://woo.org/videos/woonetwork_BG.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
}
