export function formatTime(time: number) {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`
}
