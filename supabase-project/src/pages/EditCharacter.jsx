import React from "react";
import { supabase } from "../supabaseClient";
import { Icon } from "@iconify/react";
import { useParams} from "react-router-dom";

const EditCharacter = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [character, setCharacter] = React.useState(null);


    const { characterId } = useParams();

    React.useEffect(() => {
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

    const handleUpdate = async (event) => {
        event.preventDefault(); // prevent form submission
      
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const classLevel = formData.get("classLevel");
        const background = formData.get("background");
        const spells = formData.get("spells");
        const heritage = formData.get("heritage");
      
        const { data, error } = await supabase
          .from("Characters")
          .update({
            name,
            classLevel,
            background,
            spells,
            heritage,
          })
          .eq("id", characterId);
      
        if (error) {
          console.log("Error updating character:", error);
        } else {
          alert("Character updated successfully"); // show success message
          window.location.href = `/characters/${characterId}`;
        }
      };
    //handle delete
    const handleDelete = async (event) => {
        event.preventDefault();
    
        const { data, error } = await supabase
            .from("Characters")
            .delete()
            .eq("id", characterId);
    
        if (error) {
            console.log("Error deleting character:", error);
            return;
        }
    
        alert("Character deleted");
        window.location.href = "/characters";
    };



    //return to detail view
    const returnToDetail = () => {
        window.location.href = `/characters/${characterId}`;
    };

    

    return (

        <div className="flex flex-col h-max mx-auto nm-flat-secondary-sm ">
            <div className="header flex nm-convex-primary-sm p-5 items-center ">
                <Icon
                    icon="game-icons:wizard-face"
                    className="stroke-2 stroke-red-600 text-accent m-2 w-10 h-10"
                />
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">Edit Character</h1>
            </div>

            <div className="p-5 mx-auto flex h-auto ">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-screen mx-auto">
                        <Icon
                            icon="svg-spinners:gooey-balls-1"
                            className="w-40 h-40 text-accent drop-shadow-md"
                        />
                    </div>

                ) : ( // conditional 
                    <div className="flex flex-col h-screen nm-concave-primary-sm p-5 m-5 ">
                        <div className="flex flex-col items-center justify-center">
                            <button
                                className="text-accent nm-convex-primary-sm p-3 m-5  rounded-full hover:nm-inset-primary-sm"
                                onClick={() =>  returnToDetail()}



                            >
                                Go Back
                            </button>

                        </div>

                        <form
                            onSubmit={handleUpdate}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="grid grid-cols-1 gap-4">

                                <div className="flex flex-col items-center justify-center">

                                    <label className="text-accent font-bold text-xl">
                                        Character Name
                                    </label>
                                    <input
                                        placeholder={character.name}
                                        className="text-white nm-convex-primary-sm p-3 m-5 rounded-full hover:nm-inset-primary-sm"
                                        type="text"
                                        name="name"
                                  
                                    />
                                </div>




                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



                                    <div className="flex flex-col items-center justify-center">

                                        <label className="text-accent font-bold text-xl mx-auto">
                                            Heritage
                                        </label>
                                        <select
                                            className="text-white nm-convex-primary-sm p-3 m-5   rounded-full hover:nm-inset-primary-sm"
                                            name="heritage"
                                            defaultValue={character.heritage}
                                        >
                           
                                            <option value="human">Human</option>
                                            <option value="elf">Elf</option>
                                            <option value="dwarf">Dwarf</option>
                                            <option value="halfling">Halfling</option>
                                            <option value="gnome">Gnome</option>
                                            <option value="half-elf">Half-Elf</option>
                                            <option value="half-orc">Half-Orc</option>
                                            <option value="tiefling">Tiefling</option>
                                            <option value="dragonborn">Dragonborn</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">

                                        <label className="text-accent font-bold text-xl">Class</label>
                                        <select
                                            className="text-white nm-convex-primary-sm p-3 m-5   rounded-full hover:nm-inset-primary-sm"
                                            name="classLevel"
                                            defaultValue={character.classLevel}
                                        >
                               
                                            <option value="barbarian">Barbarian</option>
                                            <option value="bard">Bard</option>
                                            <option value="cleric">Cleric</option>
                                            <option value="druid">Druid</option>
                                            <option value="fighter">Fighter</option>
                                            <option value="monk">Monk</option>
                                            <option value="paladin">Paladin</option>
                                            <option value="ranger">Ranger</option>
                                            <option value="rogue">Rogue</option>
                                            <option value="sorcerer">Sorcerer</option>
                                            <option value="warlock">Warlock</option>
                                            <option value="wizard">Wizard</option>
                                            <option value="artificer">Artificer</option>
                                            <option value="blood hunter">Blood Hunter</option>
                                            <option value="gunslinger">Gunslinger</option>
                                            <option value="inquisitive">Inquisitive</option>
                                            <option value="oracle">Oracle</option>
                                            <option value="summoner">Summoner</option>
                                            <option value="witch">Witch</option>
                                            <option value="alchemist">Alchemist</option>
                                            <option value="antipaladin">Antipaladin</option>
                                            <option value="assassin">Assassin</option>
                                            <option value="augur">Augur</option>
                                            <option value="avenger">Avenger</option>
                                            <option value="beastmaster">Beastmaster</option>
                                            <option value="cavalier">Cavalier</option>
                                            <option value="champion">Champion</option>
                                            <option value="divine soul">Divine Soul</option>
                                            <option value="eldritch knight">Eldritch Knight</option>
                                        </select>
                                    </div>
                                </div>



                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



                                    <div className="flex flex-col items-center justify-center">

                                        <label className="text-accent font-bold text-xl">Background</label>
                                        <select
                                            className="text-white nm-convex-primary-sm p-3 m-5  rounded-full hover:nm-inset-primary-sm w-40"
                                            name="background"
                                            defaultValue={character.background}
                                        >


                                            <option value="acolyte">Acolyte</option>
                                            <option value="charlatan">Charlatan</option>
                                            <option value="criminal">Criminal</option>
                                            <option value="entertainer">Entertainer</option>
                                            <option value="folk hero">Folk Hero</option>
                                            <option value="guild artisan">Guild Artisan</option>
                                            <option value="hermit">Hermit</option>
                                            <option value="noble">Noble</option>
                                            <option value="outlander">Outlander</option>
                                            <option value="sage">Sage</option>
                                            <option value="sailor">Sailor</option>
                                            <option value="soldier">Soldier</option>
                                            <option value="urchin">Urchin</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">


                                        <label className="text-accent font-bold text-xl">Spells</label>
                                        <select
                                        className="text-white nm-convex-primary-sm p-3 m-5  rounded-full hover:nm-inset-primary-sm w-40"
                                        defaultValue={character.spells}
                                    >
                        
                                            <option value="cantrip">Cantrip</option>
                                            <option value="freezing sphere">Freezing Sphere</option>
                                            <option value="magic missile">Magic Missile</option>
                                            <option value="ray of frost">Ray of Frost</option>
                                            <option value="shocking grasp">Shocking Grasp</option>
                                            <option value="thunderwave">Thunderwave</option>
                                            <option value="burning hands">Burning Hands</option>
                                            <option value="charm person">Charm Person</option>
                                            <option value="color spray">Color Spray</option>
                                            <option value="comprehend languages">
                                                Comprehend Languages
                                            </option>
                                            <option value="detect magic">Detect Magic</option>
                                            <option value="disguise self">Disguise Self</option>
                                            <option value="expeditious retreat">
                                                Expeditious Retreat
                                            </option>
                                            <option value="false life">False Life</option>
                                            <option value="feather fall">Feather Fall</option>
                                            <option value="find familiar">Find Familiar</option>
                                            <option value="fog cloud">Fog Cloud</option>
                                            <option value="grease">Grease</option>
                                            <option value="identify">Identify</option>
                                            <option value="illusory script">Illusory Script</option>
                                            <option value="jump">Jump</option>
                                            <option value="longstrider">Longstrider</option>
                                            <option value="mage armor">Mage Armor</option>
                                            <option value="magic mouth">Magic Mouth</option>
                                            <option value="protection from evil and good">
                                                Protection from Evil and Good
                                            </option>
                                            <option value="shield">Shield</option>
                                            <option value="silent image">Silent Image</option>
                                            <option value="sleep">Sleep</option>
                                            <option value="tasha's hideous laughter">
                                                Tasha's Hideous Laughter
                                            </option>
                                            <option value="tenser's floating disk">
                                                Tenser's Floating Disk
                                            </option>
                                            <option value="unseen servant">Unseen Servant</option>
                                            <option value="acid arrow">Acid Arrow</option>
                                        </select>

                                    </div>
                                </div>
                            </div>


                            <button
                                className="text-white nm-convex-primary-sm p-3 m-5  rounded-full hover:nm-inset-primary-sm"
                                type="submit"   
                            >
                                Update Character
                            </button>

                            <button className="text-white nm-convex-primary-sm p-3 m-5  rounded-full hover:nm-inset-primary-sm" onClick={handleDelete}>
                                Delete Character
                            </button>
                        </form>
                    </div>

                )}
            </div>
        </div>


    );
};

export default EditCharacter;
