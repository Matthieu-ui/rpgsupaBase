import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Icon } from "@iconify/react";

const CharacterDetails = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [character, setCharacter] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data, error } = await supabase
        .from("Characters")
        .select("*")
        .eq("id", characterId)
        .single();

      if (error) {
        console.log("Error fetching character:", error);
      } else {
        setCharacter(data);
      }

      setIsLoading(false);
    };
    setTimeout(() => {
      fetchCharacter();
    }, 1000);
  }, [characterId]);

  //go to edit route


    const goToEdit = (id) => {
      window.location.href = `/characters/${id}/edit`;
    };
  




  return (

    <div className="flex flex-col h-max mx-auto nm-flat-secondary-sm ">
     

        <div className="header flex nm-convex-primary-sm p-5 items-center ">
          <Icon icon="game-icons:wizard-face" className="stroke-2 stroke-red-600 text-accent m-2 w-10 h-10" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Detail View</h1>
        </div>

      <div className="p-5 mx-auto flex h-auto w-fit">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-screen mx-auto">
            <Icon icon="svg-spinners:gooey-balls-1" className="w-40 h-40 text-accent drop-shadow-md" />
          </div>

        ) : (



          <div className="flex flex-col h-screen nm-concave-primary-sm p-5 m-5 w-fit">

        
          <button className="text-accent nm-convex-primary-sm p-3 m-5 w-fit rounded-full hover:nm-inset-primary-sm" onClick={() => window.history.back()}> 
          <Icon icon="ic:round-arrow-circle-left" className="w-10 h-10" alt="back" /></button>
       
            <div className="header flex nm-convex-primary-sm p-5 items-center ">
            
              <Icon icon="game-icons:wizard-face" className="stroke-2 stroke-red-600 text-accent m-2 w-10 h-10" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">{character.name}</h1>

              <button className="text-accent nm-convex-primary-sm p-3 m-5  w-fit  rounded-full hover:nm-inset-primary-sm" onClick={() => goToEdit(character.id)}>Edit</button>
              

            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
            <ul className="flex flex-col nm-convex-primary-sm p-5 items-left ">

   
              <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Heritage:</span> {character.heritage}</li>
              <li className="  mb-2 text-accent text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Class/Level:</span> {character.classLevel}</li>
              <li className="  mb-2 text-accent text-accent "><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Background:</span> {character.background}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Spells:</span> {character.spells}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Weapons:</span> {character.weapons}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Armor:</span> {character.armor}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Magic Armor:</span> {character.magicArmor}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Magic Weapons:</span> {character.magicWeapons}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Tools:</span> {character.tools}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Treasure:</span> {character.treasure}</li>
            </ul>

            <ul className="flex flex-col nm-convex-primary-sm p-5 items-left ">
       
             <li className=" mb-2 text-accent "><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm ">Strength:</span> {character.strength}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Dexterity:</span> {character.dexterity}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Constitution:</span> {character.constitution}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Intelligence:</span> {character.intelligence}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Wisdom:</span> {character.wisdom}</li>
             <li className=" mb-2 text-accent"><span className="text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Charisma:</span> {character.charisma}</li>

            </ul>
            </div>



          </div>

        )}
      </div>
    </div>
  );
};

export default CharacterDetails;