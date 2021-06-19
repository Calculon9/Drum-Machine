import Panel from './Panel'
import Bank from './Bank'
import Message from './Message'

const Display = ({ pads, setPads, playSoundClick, bank, handleBank, currentSound }) => {

    return (
        <div id="container">
            <Panel pads={pads} playSoundClick={playSoundClick} />
            <Bank pads={pads} setPads={setPads} bank={bank} handleBank={handleBank}/>
            <Message currentSound={currentSound} />
        </div>
    )
}

export default Display