type Animal = {
  species: string;
};
type Human = {
  name: string;
};

type User = Animal | Human;

const tama: User = {
  species: "cats",
};

const uhyo: User = {
  name: "uhyo",
};

export const unionType = (user?: User) => {
  console.log(tama);
  console.log(uhyo);
  if (!user) return;
  user.name;
};
