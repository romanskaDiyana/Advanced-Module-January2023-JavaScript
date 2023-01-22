//04. Heroic Inventory
//In the era of heroes, every hero has his items that make him unique.

function solve(arr) {
  const result = arr.reduce((acc, curr) => {
    const [name, level, item] = curr.split(" / ");
    const hero = {
      name,
      level: Number(level),
      items: item ? item.split(', ') : [],
    };

    acc.push(hero);
    return acc;
  }, []);

  return JSON.stringify(result);
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

//output:
// [
//   { name: "Isacc", level: 25, items: ["Apple", "GravityGun"] },
//   { name: "Derek", level: 12, items: ["BarrelVest", "DestructionSword"] },
//   { name: "Hes", level: 1, items: ["Desolator", "Sentinel", "Antara"] },
// ];
