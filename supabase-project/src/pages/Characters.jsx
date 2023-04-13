import React from 'react';
import { Icon } from '@iconify/react';
import { supabase } from '../supabaseClient';

const iconMap = {
  barbarian: 'game-icons:barbarian',
  bard: 'game-icons:scabbard',
  druid: 'game-icons:elf-helmet',
  warrior: 'bx:bxs-shield-alt-2',
  cleric: 'entypo:hearts',
  ranger: 'game-icons:archer',
  fighter: 'game-icons:thor-fist',
  monk: 'game-icons:monk-face',
  paladin: 'game-icons:shield',
  rogue: 'game-icons:rogue',
  sorcerer: 'game-icons:fire',
  warlock: 'game-icons:warlock-hood',
  wizard: 'game-icons:wizard-face',
  inquisitor: 'game-icons:crossed-swords',
  alchemist: 'arcticons:littlealchemy',
  antipaladin: 'game-icons:shield',
  cavalier: 'game-icons:horse-head',
  gunslinger: 'game-icons:revolver',
  investigator: 'game-icons:spy',
  magus: 'game-icons:staff',
  medium: 'game-icons:aura',
  champion: 'game-icons:shield',
  oracle: 'game-icons:crystal-ball',
  summoner: 'game-icons:dragon',
  witch: 'game-icons:witch-face',
  adept: 'game-icons:wizard-face',
  animist: 'game-icons:dragon',
  arcanist: 'game-icons:staff',
  beastmaster: 'game-icons:dragon',
  auger: 'game-icons:crystal-ball',
  artificer: 'game-icons:alchemy',
  sorcerer: 'game-icons:fire',
  gnome: 'game-icons:bad-gnome',
  halforc: 'game-icons:orc-head',
  

};

const Characters = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const listCharacters = async () => {
    let { data: characters, error } = await supabase.from('Characters').select('*');

    if (error) {
      console.log('error', error);
    } else {
      setCharacters(characters);
    }

    setIsLoading(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      listCharacters();
    }, 1000); // set the timeout to 1 second (1000ms)
  }, []);


  //go to detailView of character
  const goToDetail = (id) => {
    window.location.href = `/characters/${id}`;
  };




  return (
    <>
      <div className="flex flex-col h-max mx-auto nm-flat-secondary-sm">
        <div className="header flex nm-convex-primary-sm p-5 items-center ">
          <Icon icon="game-icons:wizard-face" className="stroke-2 stroke-red-600 text-accent m-2 w-10 h-10" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Characters</h1>
        </div>
        <div className="p-5 mx-auto flex h-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-screen mx-auto">
              <Icon icon="svg-spinners:gooey-balls-1" className="w-40 h-40 text-accent drop-shadow-md" />
            </div>
          ) : (
            <ul className="grid m-5 p-10 list-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
              {characters.map((character) => (
                <li className="flex flex-col w-60 items-center justify-center p-5 m-5 rounded-lg shadow-lg nm-concave-secondary-lg" key={character.id}>
                {iconMap[character.classLevel] && (
                  <Icon icon={iconMap[character.classLevel]} className="text-accent w-10 h-10 mt-2" />
                )}
                  <h3
                  className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm'>{character.name}</h3>
                  <p className='text-sm text-accent'>The</p>
                  <h4
                  className='text-xl font-bold text-accent '
                  >{character.heritage}</h4>
                  <h5
                  className='text-l font-bold text-accent '
                  >{character.classLevel}</h5>
                  <small 
                  className='text-xs mt-1 text-accent '
                  >ID: {character.id}</small>


                  <button className=" text-accent rounded nm-flat-secondary-sm mt-10 p-3 position:absolute bottom-0 right-0 hover:nm-inset-secondary-sm"
                  onClick={() => goToDetail(character.id)}>
                    <Icon icon="material-symbols:frame-inspect" className="w-5 h-5" />
                  </button>


                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Characters;

