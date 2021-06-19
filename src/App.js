import Display from './components/Display'
import { useState } from 'react'

function App() {

  // Key & audio State data

  const bankOne = [
    {
      key: 81,
      letter: 'Q',
      sound: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/89[kb]iELECTRIBE-kick-22.wav.mp3',
      name: "Electro kick"
    },
    {
      key: 87,
      letter: 'W',
      sound: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/67[kb]iELECTRIBE-kick-29.wav.mp3',
      name: 'Bass kick'
    },
    {
      key: 69,
      letter: 'E',
      sound: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/89[kb]iELECTRIBE-kick-7.wav.mp3',
      name: "Drip"
    },
    {
      key: 65,
      letter: 'A',
      sound: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/23[kb]bass-poweron.wav.mp3',
      name: "Bass power on"
    },
    {
      key: 83,
      letter: 'S',
      sound: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/66[kb]bass-synth.wav.mp3',
      name: "Bass synth"
    },
    {
      key: 68,
      letter: 'D',
      sound: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/61[kb]bass_fart.wav.mp3',
      name: "Synth draw"
    },
    {
      key: 90,
      letter: 'Z',
      sound: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/58[kb]bellguitar1.wav.mp3',
      name: "Bell guitar 1"
    },
    {
      key: 88,
      letter: 'X',
      sound: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/52[kb]bellguitar2.wav.mp3',
      name: "Bell guitar 2"
    },
    {
      key: 67,
      letter: 'C',
      sound: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/36[kb]dirty-high-reverb-hit.wav.mp3',
      name: "Reverb hit"
    }
  ]

  const bankTwo = [
    {
      key: 81,
      letter: 'Q',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/15[kb]Phaser.wav.mp3',
      name: "Phaser"
    },
    {
      key: 87,
      letter: 'W',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/5[kb]Pop.wav.mp3',
      name: "Pop"
    },
    {
      key: 69,
      letter: 'E',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/14[kb]Punch.wav.mp3',
      name: "Punch"
    },
    {
      key: 65,
      letter: 'A',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/VIDEO%20GAMES/mario/23[kb]coin.wav.mp3',
      name: "Mario"
    },
    {
      key: 83,
      letter: 'S',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/VIDEO%20GAMES/dkong/7[kb]effect01.wav.mp3',
      name: "Donkey Kong"
    },
    {
      key: 68,
      letter: 'D',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Radio%20FM%20synth%20type%20stuff/59[kb]radiostartup.wav.mp3',
      name: "Radio start-up"
    },
    {
      key: 90,
      letter: 'Z',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Radio%20FM%20synth%20type%20stuff/56[kb]radiomelody.wav.mp3',
      name: "Radio melody"
    },
    {
      key: 88,
      letter: 'X',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Sound%20FX%20Real%20Life/183[kb]big-busted-glass.wav.mp3',
      name: "Smashing glass"
    },
    {
      key: 67,
      letter: 'C',
      sound: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Sound%20FX%20Real%20Life/126[kb]coindrop2.wav.mp3',
      name: "Coin drop"
    }
  ]

  // State for drum pads
  const [pads, setPads] = useState(bankOne);

  // State for Bank
  const [bank, setBank] = useState(1);

  // State for current sound
  const [currentSound, setCurrentSound] = useState();

  // Handle Bank
  const handleBank = () => {

    if (bank === 1) {
      setBank(2);
      setPads(bankTwo);
    } else if (bank === 2) {
      setBank(1);
      setPads(bankOne);
    }
  }

  // Handler Click  
  const handleClick = (e) => {
    let audio = e.target.firstElementChild;
    audio.load();
    audio.play();
    setCurrentSound(e.target.getAttribute('id'))
  }

  // Handle Key
  const handleKeyDown = (e) => {
    let key = e.key.toUpperCase();
    let pad = document.getElementById(key).parentElement;
    if (pad != null) {

      // Add simulated 'active' effect then remove after 100ms
      pad.classList.add('active')
      setTimeout(() => pad.classList.remove('active'), 100);

      // Play audio
      let audio = pad.querySelector('audio');
      audio.load();
      audio.play();

      // Update current sound
      for (let pad of pads) {
        if(pad.letter === key) {setCurrentSound(pad.name)};
      }
      
    } else { return }
  }

  document.body.addEventListener('keydown', handleKeyDown)

  return (
    <div id="drum-machine">
      <Display pads={pads} setPads={setPads} playSoundClick={handleClick} bank={bank} handleBank={handleBank} currentSound={currentSound} setCurrentSound={setCurrentSound} />
    </div>
  );
}

export default App;
