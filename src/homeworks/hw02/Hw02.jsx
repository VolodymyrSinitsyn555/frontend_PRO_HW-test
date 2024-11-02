import ProfileCard from "../../components/profileCard/ProfileCard";

const users = [
  {
    id: 1,
    avatar:
    "https://media.istockphoto.com/id/1206661403/fr/photo/nom-de-john-doe-%C3%A9crit-dans-la-cendre-la-poussi%C3%A8re-ou-la-salet%C3%A9-comme-inconnu.jpg?s=612x612&w=0&k=20&c=ruFlEWPuinDgm17HPPc9FaC3QevV4IXqGlXAE2aUFUQ=",
    name: "John Doe",
    occupation: "Software Developer",
    hobbies: "Reading, Programming",
  },
  
  {
    id: 2,
    avatar:
    "https://preview.redd.it/1ukqjzobcu191.jpg?width=640&crop=smart&auto=webp&s=d6ea863aa653ec3767d4ee9bfdda8af38adbdea5",
    name: "Jane Smith",
    occupation: "Graphic Designer",
    hobbies: "Driving, traveling",
  },

  {
    id: 3,
    avatar:
    "https://media.gettyimages.com/id/723073511/de/foto/a-portrait-of-olympic-and-iaaf-world-championship-gold-medal-wiinning-200-metres-and-400-metres.jpg?s=612x612&w=0&k=20&c=nLIiwuZF11gUjx3GHcK8qcRiPsKx4Wm5YHnrl6wQM3A=",
    name: "Michael Johnson",
    occupation: "Sportsman",
    hobbies: "Music",
  }
] 

function Hw02(){

  return (
    <div className="hw02-container">
      {users.map((user) => (< ProfileCard key={user.id} user={user}/>))}
    </div>
  );
}

export default Hw02;
