const findTheOldest = function (people) {
  // Time complexity = O(nlogn)
  // const sortedPeople = people.sort((a, b) => {
  //   a.yearOfDeath = a.yearOfDeath ?? new Date().getFullYear();
  //   b.yearOfDeath = b.yearOfDeath ?? new Date().getFullYear();

  //   const ageA = a.yearOfDeath - a.yearOfBirth;
  //   const ageB = b.yearOfDeath - b.yearOfBirth;

  //   return ageB - ageA;
  // });

  // return sortedPeople[0];

  // More efficient, time complexity: O(n)
  return people.reduce((oldest, current) => {
    const ageCurrent = getAge(current.yearOfBirth, current.yearOfDeath);
    const ageOldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    if (ageCurrent > ageOldest) oldest = current;
    return oldest;
  });
};

function getAge(birth, death) {
  death = death ?? new Date().getFullYear();
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
