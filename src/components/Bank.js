

function Bank({bank, handleBank}) {

    return (
        <div id="bank" onClick={handleBank}>Bank
            <button>{bank}</button>
        </div>
    )
}

export default Bank
