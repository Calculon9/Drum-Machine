import Pad from './Pad'

const Panel = ({ pads, playSoundClick }) => {

    return (
        <div id="panel">
            <Pad letter={pads[0].letter} sound={pads[0].sound} playSoundClick={playSoundClick} name={pads[0].name} />
            <Pad letter={pads[1].letter} sound={pads[1].sound} playSoundClick={playSoundClick} name={pads[1].name}/>
            <Pad letter={pads[2].letter} sound={pads[2].sound} playSoundClick={playSoundClick} name={pads[2].name}/>
            <Pad letter={pads[3].letter} sound={pads[3].sound} playSoundClick={playSoundClick} name={pads[3].name}/>
            <Pad letter={pads[4].letter} sound={pads[4].sound} playSoundClick={playSoundClick} name={pads[4].name}/>
            <Pad letter={pads[5].letter} sound={pads[5].sound} playSoundClick={playSoundClick} name={pads[5].name}/>
            <Pad letter={pads[6].letter} sound={pads[6].sound} playSoundClick={playSoundClick} name={pads[6].name}/>
            <Pad letter={pads[7].letter} sound={pads[7].sound} playSoundClick={playSoundClick} name={pads[7].name}/>
            <Pad letter={pads[8].letter} sound={pads[8].sound} playSoundClick={playSoundClick} name={pads[8].name}/>
        </div>
    )
}

export default Panel