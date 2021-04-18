import _ from 'lodash';

const profiles = [
  {
    id: 12,
    name: "Kushal Agrawal",
    email: "kagrawal61@gmail.com",
    linkedin: "",
    github: "",
    resume: "",
    description: 'Mandatory stable internet solution',
    price: '8.67',
    category: 'Full Stack Engineer',
  },
  {
    id: 24,
    name: "Kushal Agrawal",
    email: "kagrawal61@gmail.com",
    linkedin: "",
    github: "",
    resume: "",
    description: 'Mandatory stable internet solution',
    price: '8.67',
    category: 'Mobile App Development',
  },
  {
    id: 54,
    name: "Kushal Agrawal",
    email: "kagrawal61@gmail.com",
    linkedin: "",
    github: "",
    resume: "",
    description: 'Mandatory stable internet solution',
    price: '8.67',
    category: 'Python Full Stack',
  },
  {
    id: 94,
    name: "Kushal Agrawal",
    email: "kagrawal61@gmail.com",
    linkedin: "",
    github: "",
    resume: "",
    description: 'Mandatory stable internet solution',
    price: '8.67',
    category: 'Devops',
  },
  {
    id: 4,
    name: "Kushal Agrawal",
    email: "kagrawal61@gmail.com",
    linkedin: "",
    github: "",
    resume: "",
    description: 'Mandatory stable internet solution',
    price: '8.67',
    category: 'UI/UX',
  },
  {
    id: 64,
    name: "Kushal Agrawal",
    email: "kagrawal61@gmail.com",
    linkedin: "",
    github: "",
    resume: "",
    description: 'Mandatory stable internet solution',
    price: '8.67',
    category: 'Backend Engineer',
  },
];

const sortedProfiles = _.sortBy(profiles, 'category');
const c = profiles.map(item => item.category);

export const categories = _.uniq(c);
export default sortedProfiles;

// console.log(inventory)
// console.log(categories)
