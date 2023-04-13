import { Cv } from '~/types/cvfy';

export const cvSettingTemplate: Cv = {
  jobTitle: 'Director de Google',
  name: 'Pepe',
  lastName: 'Honguito',
  email: 'pepe@gmail.com',
  location: 'Malargue, Mendoza, Argentina',
  phoneNumber: '317-660-2160',
  aboutme:
    "Me gusta trabajar mucho",
  jobSkills: ['Microsoft', 'Word', 'Excel', 'PerfectMind'],
  softSkills: ['Positivity', 'Leadership', 'Public Speaking'],
  languages: [{ lang: 'English', level: '100%' }],
  linkedin: '',
  twitter: '',
  github: '',
  githubRepo: '',
  gitlab: '',
  website: 'www.elpepehongo.com',
  education: [
    {
      title: 'Ingeniero en Inteligencia Artificial y Computación Cuántica',
      location: 'Indiana University, Bloomington, Indiana',
      from: new Date(1993, 9, 1),
      to: new Date(1993, 4, 1),
      current: false,
      summary: 'Medallita de honor',
    },
  ],
  work: [
    {
      title: 'Director de Google y Microsoft',
      location: 'City of Pawnee, Indiana',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: `- Un poco de Lorem Ipsum, Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
    {
      title: 'City Councilor',
      location: 'City of Pawnee, Indiana',
      from: new Date(2012, 1, 1),
      to: new Date(),
      current: true,
      summary: `- otro poco de Lorem Ipsum: In placerat nisi pellentesque felis blandit, vel varius justo eleifend.
- Etiam porttitor tortor vel lobortis ultricies.
- Nam non libero accumsan, sagittis nibh vitae, auctor ligula.
- Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.
- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.`,
    },
  ],
  projects: [
    {
      title: 'Lot 48',
      location: 'City of Pawnee, Indiana',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: `- Mas Lorem: Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
  ],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};

export const cvSettingsEmptyTemplate: Cv = {
  jobTitle: '',
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  languages: [],
  linkedin: '',
  twitter: '',
  github: '',
  githubRepo: '',
  gitlab: '',
  website: '',
  education: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  work: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  projects: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};
