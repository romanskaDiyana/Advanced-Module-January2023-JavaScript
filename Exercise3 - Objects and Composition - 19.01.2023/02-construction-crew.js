//02. Construction Crew
//Write a program that receives a worker object as a parameter and modifies its properties. Workers have the following structure.

function solve(worker) {
  if (worker.dizziness) {
    return {
      ...worker,
      levelOfHydrated: worker.weight * 0.1 * worker.experience,
      dizziness: false,
    };
  }
  return {...worker};
}

solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });

//output:
// { weight: 80,
//  experience: 1,
//  levelOfHydrated: 8,
//  dizziness: false }
