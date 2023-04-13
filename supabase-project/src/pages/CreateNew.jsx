import React from "react";
import { supabase } from "../supabaseClient";
import { Icon } from "@iconify/react";
import { useState } from "react";

const CreateCharacter = () => {
  const [selected, setSelected] = React.useState("");
  const [name, setName] = React.useState("");

  const [selectedHeritage, setSelectedHeritage] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("");
  const [selectedSpells, setSelectedSpells] = useState("");
  const [selectedWeapons, setSelectedWeapons] = useState("");
  const [selectedArmor, setSelectedArmor] = useState("");
  const [selectedMagicArmor, setSelectedMagicArmor] = useState("");
  const [selectedMagicWeapons, setSelectedMagicWeapons] = useState("");
  const [selectedTools, setSelectedTools] = useState("");
  const [selectedTreasure, setSelectedTreasure] = useState("");

  const createCharacter = async (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const heritage = document.getElementById("heritage").value;
    const classLevel = document.getElementById("classLevel").value;
    const background = document.getElementById("background").value;
    const spells = document.getElementById("spells").value;
    const weapons = document.getElementById("weapons").value;
    const armor = document.getElementById("armor").value;
    const magicArmor = document.getElementById("magicArmor").value;
    const magicWeapons = document.getElementById("magicWeapons").value;
    const tools = document.getElementById("tools").value;
    const treasure = document.getElementById("treasure").value;
    const strength = document.getElementById("strength").value;
    const dexterity = document.getElementById("dexterity").value;
    const constitution = document.getElementById("constitution").value;
    const intelligence = document.getElementById("intelligence").value;
    const wisdom = document.getElementById("wisdom").value;
    const charisma = document.getElementById("charisma").value;

    // Insert character data into Supabase table
    const { data, error } = await supabase
      .from("Characters")
      .insert({
        name,
        heritage,
        classLevel,
        background,
        spells,
        weapons,
        armor,
        magicArmor,
        magicWeapons,
        tools,
        treasure,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      })
      .select();

    if (error) {
      console.error(error);
    } else if (data.length > 0) {
      console.log("Character inserted successfully:", data);

      const characterId = data[0].id;
      if (characterId) {
        window.location.href = `/characters/${characterId}`;
      } else {
        console.error("No id returned from insert query.");
      }
    } else {
      console.error("No data returned from insert query.");
    }
  };
  return (
    <div className="flex flex-col h-max mx-auto nm-flat-secondary-sm">
      <div className="container">
        <div className="header flex nm-concave-primary-sm p-5 items-center">
          <Icon
            icon="game-icons:wizard-face"
            className="stroke-2 stroke-red-600 text-accent m-2 w-10 h-10"
          />

          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm">
            Create New Character
          </h1>
        </div>

        <div className="p-5 mx-auto flex nm-inset-secondary-lg">
          <form className="flex flex-col gap-4" onSubmit={createCharacter}>

<div className="flex-1 mx-auto justify-center text-center">


            <input
              className="text-white nm-convex-primary-sm p-3 m-5 w-60 rounded-full hover:nm-inset-primary-sm"
              placeholder="Enter Name"
              type="varchar"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">

                <label
                  className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="heritage"
                >
                  Heritage
                </label>

                <select
                  className="text-xl mx-auto text-center text-white nm-convex-primary-sm p-3 m-5 w-60 rounded-full hover:nm-inset-primary-sm"
                  id="heritage"
                  name="heritage"
                  value={selectedHeritage}
                  onChange={(e) => setSelectedHeritage(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
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

                <div className="flex flex-col">
                  <label
                  className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                    htmlFor="classLevel"
                  >
                    Class
                  </label>

                  <select
                  className="text-xl mx-auto text-center text-white nm-convex-primary-sm p-3 m-5 w-60 rounded-full hover:nm-inset-primary-sm"
                    id="classLevel"
                    name="classLevel"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value=" " disabled hidden>
                      Choose One
                    </option>
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
              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="background"
                >
                  Background
                </label>

                <select
                className="text-xl mx-auto text-center text-white nm-convex-primary-sm p-3 m-5 w-60 rounded-full hover:nm-inset-primary-sm"
                  id="background"
                  name="background"
                  value={selectedBackground}
                  onChange={(e) => setSelectedBackground(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
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
              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="spells"
                >
                  Spells
                </label>

                <select
                className="text-xl mx-auto text-center text-white nm-convex-primary-sm p-3 m-5 w-60 rounded-full hover:nm-inset-primary-sm"
                  id="spells"
                  name="spells"
                  value={selectedSpells}
                  onChange={(e) => setSelectedSpells(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
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
            <label
            className="text-4xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
              htmlFor="equipment"
            >
              Equipment
            </label>

            <div className="flex-grow border m-5 p-10 rounded-lg grid sm:grid-cols-2 md:grid-cols-3 ">
              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="weapons"
                >
                  Weapons
                </label>
                <select
                  className="px-4 py-3 rounded-full mb-2 mt-4 uppercase tracking-wider font-bold leading-tight m-2 w-30 nm-inset-accent-lg"
                  id="weapons"
                  name="weapons"
                  value={selectedWeapons}
                  onChange={(e) => setSelectedWeapons(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
                  <option value="club">Club</option>
                  <option value="dagger">Dagger</option>
                  <option value="greatclub">Greatclub</option>
                  <option value="handaxe">Handaxe</option>
                  <option value="javelin">Javelin</option>
                  <option value="light hammer">Light Hammer</option>
                  <option value="mace">Mace</option>
                  <option value="quarterstaff">Quarterstaff</option>
                  <option value="sickle">Sickle</option>
                  <option value="spear">Spear</option>
                  <option value="light crossbow">Light Crossbow</option>
                  <option value="dart">Dart</option>
                  <option value="shortbow">Shortbow</option>
                  <option value="sling">Sling</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="magicWeapons"
                >
                  Magic Weapon
                </label>
                <select
                  className="px-4 py-3 rounded-full mb-2 mt-4 uppercase tracking-wider font-bold leading-tight m-2 w-30 nm-inset-accent-lg"
                  id="magicWeapons"
                  name="magicWeapons"
                  value={selectedMagicWeapons}
                  onChange={(e) => setSelectedMagicWeapons(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
                  <option value="club">Club</option>
                  <option value="dagger">Dagger</option>
                  <option value="greatclub">Greatclub</option>
                  <option value="handaxe">Handaxe</option>
                  <option value="javelin">Javelin</option>
                  <option value="light hammer">Light Hammer</option>
                  <option value="mace">Mace</option>
                  <option value="quarterstaff">Quarterstaff</option>
                  <option value="sickle">Sickle</option>
                  <option value="spear">Spear</option>
                  <option value="light crossbow">Light Crossbow</option>
                  <option value="dart">Dart</option>
                  <option value="shortbow">Shortbow</option>
                  <option value="sling">Sling</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="armor"
                >
                  Armor
                </label>
                <select
                  className="px-4 py-3 rounded-full mb-2 mt-4 uppercase tracking-wider font-bold leading-tight m-2 w-30 nm-inset-accent-lg"
                  id="armor"
                  name="armor"
                  value={selectedArmor}
                  onChange={(e) => setSelectedArmor(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
                  <option value="padded">Padded</option>
                  <option value="leather">Leather</option>
                  <option value="studded leather">Studded Leather</option>
                  <option value="hide">Hide</option>
                  <option value="chain shirt">Chain Shirt</option>
                  <option value="scale mail">Scale Mail</option>
                  <option value="breastplate">Breastplate</option>
                  <option value="half plate">Half Plate</option>
                  <option value="ring mail">Ring Mail</option>
                  <option value="chain mail">Chain Mail</option>
                  <option value="splint">Splint</option>
                  <option value="plate">Plate</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="magicArmor"
                >
                  Magic Armor
                </label>
                <select
                  className="px-4 py-3 rounded-full mb-2 mt-4 uppercase tracking-wider font-bold leading-tight m-2 w-30 nm-inset-accent-lg"
                  id="magicArmor"
                  name="magicArmor"
                  value={selectedMagicArmor}
                  onChange={(e) => setSelectedMagicArmor(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
                  <option value="padded">Padded</option>
                  <option value="leather">Leather</option>
                  <option value="studded leather">Studded Leather</option>
                  <option value="hide">Hide</option>
                  <option value="chain shirt">Chain Shirt</option>
                  <option value="scale mail">Scale Mail</option>
                  <option value="breastplate">Breastplate</option>
                  <option value="half plate">Half Plate</option>
                  <option value="ring mail">Ring Mail</option>
                  <option value="chain mail">Chain Mail</option>
                  <option value="splint">Splint</option>
                  <option value="plate">Plate</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="tools"
                >
                  Tools
                </label>
                <select
                  className="px-4 py-3 rounded-full mb-2 mt-4 uppercase tracking-wider font-bold leading-tight m-2 w-30 nm-inset-accent-lg"
                  id="tools"
                  name="tools"
                  value={selectedTools}
                  onChange={(e) => setSelectedTools(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
                  <option value="alchemist's supplies">
                    Alchemist's Supplies
                  </option>
                  <option value="brewer's supplies">Brewer's Supplies</option>
                  <option value="calligrapher's supplies">
                    Calligrapher's Supplies
                  </option>
                  <option value="carpenter's tools">Carpenter's Tools</option>
                  <option value="cartographer's tools">
                    Cartographer's Tools
                  </option>
                  <option value="cobbler's tools">Cobbler's Tools</option>
                  <option value="cook's utensils">Cook's Utensils</option>
                  <option value="glassblower's tools">
                    Glassblower's Tools
                  </option>
                  <option value="jeweler's tools">Jeweler's Tools</option>
                  <option value="leatherworker's tools">
                    Leatherworker's Tools
                  </option>
                  <option value="mason's tools">Mason's Tools</option>
                  <option value="painter's supplies">Painter's Supplies</option>
                  <option value="potter's tools">Potter's Tools</option>
                  <option value="smith's tools">Smith's Tools</option>
                  <option value="tinker's tools">Tinker's Tools</option>
                  <option value="weaver's tools">Weaver's Tools</option>
                  <option value="woodcarver's tools">Woodcarver's Tools</option>
                  <option value="disguise kit">Disguise Kit</option>
                  <option value="forgery kit">Forgery Kit</option>
                  <option value="dice set">Dice Set</option>
                  <option value="dragonchess set">Dragonchess Set</option>
                  <option value="playing card set">Playing Card Set</option>
                  <option value="three-dragon ante set">
                    Three-Dragon Ante Set
                  </option>
                  <option value="herbalism kit">Herbalism Kit</option>
                  <option value="bagpipes">Bagpipes</option>
                  <option value="drum">Drum</option>
                  <option value="dulcimer">Dulcimer</option>
                  <option value="flute">Flute</option>
                  <option value="lute">Lute</option>
                  <option value="lyre">Lyre</option>
                  <option value="horn">Horn</option>
                  <option value="pan flute">Pan Flute</option>
                  <option value="shawm">Shawm</option>
                  <option value="viol">Viol</option>
                  <option value="navigator's tools">Navigator's Tools</option>
                  <option value="poisoner's kit">Poisoner's Kit</option>
                  <option value="thieves' tools">Thieves' Tools</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                className="text-xl mx-auto text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm"
                  htmlFor="treasure"
                >
                  Treasure
                </label>
                <select
                  className="px-4 py-3 rounded-full mb-2 mt-4 uppercase tracking-wider font-bold leading-tight m-2 w-30 nm-inset-accent-lg"
                  id="treasure"
                  name="treasure"
                  value={selectedTreasure}
                  onChange={(e) => setSelectedTreasure(e.target.value)}
                >
                  <option value=" " disabled hidden>
                    Choose One
                  </option>
                  <option value="Copper Pieces">Copper Pieces</option>
                  <option value="Silver Ingot">Silver Ingot</option>
                  <option value="Electrum">Electrum</option>
                  <option value="Gold Pieces">Gold Pieces</option>
                  <option value="Platinum Ingot">Platinum Ingot</option>
                </select>
              </div>

           

            </div>

            <div className="flex flex-col">
      
            <label
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm mx-auto mb-10"
              htmlFor="abilityScores"
            >
              Ability Scores
            </label>

            <div className="flex flex-row justify-center">
              <div className="flex flex-col">
                <label
                  className="text-white
            text-bold
            w-16
            text-center
            "
                  htmlFor="strength"
                >
                  STR
                </label>

                <input
                  className="
            rounded-full  uppercase tracking-wider leading-tight m-2 nm-inset-accent-lg font-bold
            w-16"
                  type="number"
                  id="strength"
                  name="strength"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-white
            text-bold
            w-16
            text-center
            "
                  htmlFor="dexterity"
                >
                  DEX
                </label>

                <input
                  className="
            rounded-full  uppercase tracking-wider leading-tight m-2 nm-inset-accent-lg font-bold
            w-16"
                  type="number"
                  id="dexterity"
                  name="dexterity"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-white
            text-bold
            w-16
            text-center
            "
                  htmlFor="constitution"
                >
                  CON
                </label>
                <input
                  className="
            rounded-full  uppercase tracking-wider leading-tight m-2 nm-inset-accent-lg font-bold
            w-16"
                  type="number"
                  id="constitution"
                  name="constitution"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-white
            text-bold
            w-16
            text-center
            "
                  htmlFor="intelligence"
                >
                  INT
                </label>
                <input
                  className="
            rounded-full  uppercase tracking-wider leading-tight m-2 nm-inset-accent-lg font-bold
            w-16"
                  type="number"
                  id="intelligence"
                  name="intelligence"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-white
            text-bold
            w-16
            text-center
            "
                  htmlFor="wisdom"
                >
                  WIS
                </label>
                <input
                  className="
            rounded-full  uppercase tracking-wider leading-tight m-2 nm-inset-accent-lg font-bold
            w-16"
                  type="number"
                  id="wisdom"
                  name="wisdom"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-white
            text-bold
            w-16
            text-center
            "
                  htmlFor="charisma"
                >
                  CHA
                </label>
                <input
                  className="
            rounded-full  uppercase tracking-wider leading-tight m-2 nm-inset-accent-lg font-bold
            w-16"
                  type="number"
                  id="charisma"
                  name="charisma"
                />
              </div>
            </div>
          </div>

   


            <button
              className="bg-gradient-to-br from-red-600 to-orange-400 drop-shadow-sm hover:from-pink-500 hover:to-yellow-500 hover:nm-inset-orange-900-xl animate-pulse
               text-white font-bold py-2 px-4 rounded-full w-60 mx-auto mt-10"
              type="submit"
              value="submit"
              onClick={createCharacter}
            >


              Create Character
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default CreateCharacter;
