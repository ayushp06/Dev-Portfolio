const projects = [
  {
    id: 1,
    title: 'Autonomous UAV Navigation',
    category: 'Aerospace · Robotics',
    year: '2024',
    description:
      'Developed path-planning algorithms for autonomous UAV navigation in GPS-denied environments using LiDAR sensor fusion and ROS2 middleware.',
    tags: ['C++', 'ROS2', 'LiDAR', 'Python'],
  },
  {
    id: 2,
    title: 'Hypersonic Boundary Layer Analysis',
    category: 'Aerodynamics · CFD',
    year: '2024',
    description:
      'Simulated hypersonic boundary-layer transition at Mach 6 using OpenFOAM, investigating laminar-to-turbulent transition mechanisms on wedge geometries.',
    tags: ['OpenFOAM', 'MATLAB', 'CFD', 'Python'],
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
