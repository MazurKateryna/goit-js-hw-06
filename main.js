import users from './users.js'
// Задание 1
const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание 2
const getUsersWithEyeColor = (users, color) => {
  const filterColor = users.filter((user) => {
    return user.eyeColor === color;
  })
  const eyeColorName = filterColor.map((user) => {
    return user.name;
  })
  return eyeColorName;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание 3
const getUsersWithGender = (users, gender) => {
  return users.filter((user) => user.gender === gender)
  .map((user) => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4
const getInactiveUsers = users => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// Задание 5
const getUserWithEmail = (users, email) => {
  const findName = users.find((user)=> user.email === email);
  return findName.name;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// Задание 6
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// Задание 7
const calculateTotalBalance = users => {
  const totalBalance = users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916


// Задание 8
const getUsersWithFriend = (users, friendName) => {
  return users
      .filter(({friends}) => friends.includes(friendName))
      .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Задание 9
const getNamesSortedByFriendsCount = users => {
  return users
      .sort((a, b) => a.friends.length - b.friends.length)
      .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
[ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// Задание 10
const getSortedUniqueSkills = users => {
  return users
      .reduce((totalSkills, user) => {
        user.skills.forEach(oneSkill =>
            totalSkills.includes(oneSkill) ? '' : totalSkills.push(oneSkill),
        );
        return totalSkills;
      }, [])
      .sort();
};

console.log(getSortedUniqueSkills(users));
[ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem',
'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]