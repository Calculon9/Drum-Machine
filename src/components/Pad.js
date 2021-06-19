
const Pad = ({letter, sound, name, playSoundClick }) => {

    return (
        <div id={name} className="drum-pad" onClick={playSoundClick}>
            {letter}
            <audio id={letter} src={sound} type="audio/ogg" />
        </div>
    )
}

export default Pad