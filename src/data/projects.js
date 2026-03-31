const projects = [
  {
    id: 1,
    title: 'NASA TLE Satellite Tracker',
    category: 'Aerospace · Software',
    year: '2025',
    description:
      'A PyQt5-based desktop application that visualizes real-time satellite orbits in 3D using active NORAD TLE data through the Skyfield API. It allows users to interactively track the position and altitude of over 50 active satellites.',
    tags: ['Python', 'PyQt5', 'Skyfield', 'NORAD TLE', 'Matplotlib'],
    github: 'https://github.com/ayushp06/NASA-TLE-Orbit-Tracker',
  },
  {
    id: 2,
    title: 'LockedIn Productivity Chrome Extension',
    category: 'Software · Productivity',
    year: '2025',
    description:
      'A full-stack Chrome extension designed to boost productivity by tracking hours spent on a site and logging them, allowing users to compete with their friends.',
    tags: ['React.js', 'Typescript', 'Firebase', 'Google OAuth'],
    github: 'https://github.com/ayushp06/LockedIn',
  },
  {
    id: 3,
    title: 'Satellite Orbit Determination',
    category: 'Astrodynamics · Software',
    year: '2023',
    description:
      'Built a Kalman-filter-based orbit determination pipeline ingesting TLE data and ground-station observations to propagate LEO satellite state vectors.',
    tags: ['Python', 'NumPy', 'Kalman Filter', 'Astrodynamics'],
  },
  {
    id: 4,
    title: 'Airfoil Shape Optimization',
    category: 'Aerodynamics · ML',
    year: '2023',
    description:
      'Applied Bayesian optimization with a Gaussian Process surrogate model to maximize the lift-to-drag ratio of NACA airfoils across transonic flow regimes.',
    tags: ['Python', 'scikit-learn', 'XFOIL', 'Optimization'],
  },
  {
    id: 5,
    title: 'Structural Health Monitoring',
    category: 'Structures · Data Science',
    year: '2023',
    description:
      'Deployed an LSTM-based anomaly-detection system on vibration sensor data from composite aircraft panels to flag fatigue damage early.',
    tags: ['PyTorch', 'LSTM', 'Signal Processing', 'Python'],
  },
  {
    id: 6,
    title: 'Rocket Trajectory Simulator',
    category: 'Propulsion · Software',
    year: '2022',
    description:
      'Wrote a 6-DOF rocket trajectory simulator accounting for variable mass, aerodynamic drag, and wind shear, validated against OpenRocket benchmarks.',
    tags: ['MATLAB', 'Python', '6-DOF', 'Propulsion'],
  },
]

export default projects
