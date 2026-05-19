const projects = [
  {
    id: 1,
    title: 'CAD-Ops CLI',
    category: 'Software · CLI',
    year: '2026',
    description:
      'A Git-inspired version control and collaboration platform for CAD workflows, enabling engineers to track geometry changes, manage design history, compare revisions, and streamline hardware development pipelines. ',
    tags: ['Git', 'Git-LFS', 'Go', 'SOLIDWORKS', 'CLI'],
    github: 'https://github.com/ayushp06/cadops',
  },
  {
    id: 2,
    title: 'LEO Satellite Simulation',
    category: 'Unity · VR Simulation',
    year: '2026',
    description:
      'A real-time orbital mechanics and satellite visualization platform for simulating, tracking, and interacting with objects in Earth orbit using live TLE and physics-based propagation models. ',
    tags: ['Unity', 'C#'],
    github: 'https://github.com/ayushp06/OrbitSim',
  },
  {
    id: 3,
    title: 'Anchor Paper Trading Platform',
    category: 'Software · Web Development',
    year: '2026',
    description:
      'A beginner friendly paper trading platform developedat the Penn State Hackathon that lets users trade on historical market data (2000 – 2024) and fast-forward time to evaluate performance.',
    tags: ['React.js', 'Next.js', 'Python', 'yFinance API', 'PostgreSQL', 'Google OAuth'],
    github: 'https://github.com/ayushp06/anchortrade',
  },
  {
    id: 4,
    title: 'NASA TLE Satellite Tracker',
    category: 'Aerospace · Software',
    year: '2025',
    description:
      'A PyQt5-based desktop application that visualizes real-time satellite orbits in 3D using active NORAD TLE data through the Skyfield API. It allows users to interactively track the position and altitude of over 50 active satellites.',
    tags: ['Python', 'PyQt5', 'Skyfield', 'NORAD TLE', 'Matplotlib'],
    github: 'https://github.com/ayushp06/NASA-TLE-Orbit-Tracker',
  },
  {
    id: 5,
    title: 'LockedIn Productivity Chrome Extension',
    category: 'Software · Productivity',
    year: '2025',
    description:
      'A full stack Chrome extension designed to boost productivity by tracking hours spent on a site and logging them, allowing users to compete with their friends.',
    tags: ['React.js', 'Typescript', 'Firebase', 'Google OAuth'],
    github: 'https://github.com/ayushp06/LockedIn',
  },
  {
    id: 6,
    title: 'Engineering Portfolio Website',
    category: 'Software · Web Development',
    year: '2025',
    description:
      'A developer portfolio using React.js to showcase my projects, skills, and experience through a clean, interactive interface. The site is fully responsive, built with reusable components, and deployed on Vercel for fast, reliable performance and seamless updates.',
    tags: ['React.js', 'CSS', 'Vercel'],
    github: 'https://github.com/ayushp06/Dev-Portfolio/tree/updated-website',
  },
  {
    id: 7,
    title: 'Turbulence Data Logger',
    category: 'Aerospace · Embedded Systems',
    year: '2024',
    description:
      'A C++ flight computer on a Teensy 4.1, integrating barometric, gyroscopic, and power sensors into a two-stage rocket. The system successfully launched to 3,000 ft, capturing and logging wind speed, altitude, and rotational dynamics throughout ascent.',
    tags: ['C++', 'Teensy 4.1', 'Arduino', 'SOLIDWORKS', 'KiCAD'],
    github: 'github.com/ayushp06/Turbulence-Data-Logger',
  },
  {
    id: 8,
    title: 'Steered Angle Calculator',
    category: 'Engineering · Software',
    year: '2024',
    description:
      'A MATLAB Script that calculates the steered angle of a vehicle based on its wheelbase, track width, turning radius, and gps_x/gps_y positions.',
    tags: ['MATLAB'],
    github: 'https://github.com/ayushp06/Steered-Angle-Calculator',
  },
]

export default projects
