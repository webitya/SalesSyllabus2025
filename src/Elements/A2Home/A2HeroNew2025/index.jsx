import { Typography, Button, Card } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const keywords = ['Sales', 'Hiring', 'Training', 'Growth', 'Revenue', 'Talent', 'Upskill', 'Innovation', 'Leadership'];
const colors = ['#4f46e5', '#06b6d4', '#f59e0b', '#10b981', '#ec4899', '#8b5cf6'];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

// Animated Shape
const AnimatedShape = ({ keyword, shape, index }) => {
  const color = getRandomItem(colors);
  const size = getRandomNumber(50, 90);
  const top = getRandomNumber(5, 85); 
  const left = getRandomNumber(5, 85); 

  // Avoid overlap by adding buffer space between shapes
  const offsetX = getRandomNumber(30, 70); // buffer space
  const offsetY = getRandomNumber(30, 70); // buffer space

  const commonStyle = {
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: '12px',
    color: '#111827',
    textAlign: 'center',
    transformOrigin: 'center',
    pointerEvents: 'none',
  };

  const motionProps = {
    y: [0, getRandomNumber(-30, 30), 0],
    x: [0, getRandomNumber(-30, 30), 0],
    rotate: [0, getRandomNumber(-20, 20), 0],
    scale: [1, getRandomNumber(0.8, 1.2), 1],
    opacity: [0.5, 0.8, 0.5],
  };

  return (
    <motion.div
      style={commonStyle}
      initial={{
        y: getRandomNumber(-40, 40),
        x: getRandomNumber(-40, 40),
        rotate: getRandomNumber(-30, 30),
        scale: 0.9,
        opacity: 0.4,
      }}
      animate={motionProps}
      transition={{
        duration: getRandomNumber(6, 10),
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    >
      {shape === 'circle' && (
        <div className="rounded-full w-full h-full flex items-center justify-center" style={{ backgroundColor: `${color}55` }}>
          {keyword}
        </div>
      )}
      {shape === 'square' && (
        <div className="rounded-md w-full h-full flex items-center justify-center" style={{ backgroundColor: `${color}55` }}>
          {keyword}
        </div>
      )}
      {shape === 'triangle' && (
        <div style={{ position: 'relative', width: size, height: size }}>
          {/* Triangle shape */}
          <div style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${color}88`,
            position: 'absolute',
            top: 0,
            left: 0,
          }} />
          {/* Centered Text */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -30%)', // slight upward tweak for optical center
            color: '#111827',
            fontWeight: 'bold',
            fontSize: '11px',
            whiteSpace: 'nowrap',
          }}>
            {keyword}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Chart config
const chartOptions = {
  chart: {
    id: 'revenue-growth',
    type: 'area',
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    labels: { style: { colors: '#64748b', fontSize: '12px' } },
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  colors: ['#4f46e5'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
};

const chartSeries = [
  {
    name: 'Revenue',
    data: [30, 50, 45, 80, 120, 160],
  },
];

const HeroSection = () => {
  const [animatedShapes, setAnimatedShapes] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        const mobileShapes = [
          { keyword: getRandomItem(keywords), shape: 'circle' },
          { keyword: getRandomItem(keywords), shape: 'square' },
          { keyword: getRandomItem(keywords), shape: 'triangle' },
          { keyword: getRandomItem(keywords), shape: 'circle' },
          { keyword: getRandomItem(keywords), shape: 'square' },
        ];
        setAnimatedShapes(mobileShapes);
      } else {
        const numberOfShapes = 18;
        const tempShapes = Array.from({ length: numberOfShapes }, (_, index) => ({
          keyword: getRandomItem(keywords),
          shape: getRandomItem(['circle', 'square', 'triangle']),
        }));
        setAnimatedShapes(tempShapes);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden px-6">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 z-0">
        {animatedShapes.map((shape, index) => (
          <AnimatedShape key={index} keyword={shape.keyword} shape={shape.shape} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Title className="!text-4xl lg:!text-5xl font-bold leading-tight text-gray-900">
            Accelerate Your Sales and Marketing Growth
          </Title>
          <Paragraph className="text-lg text-gray-700 mt-4 max-w-xl">
            India's #1 Talent Platform for High-Performance Revenue Teams. <br />
            We <strong>recruit</strong>, <strong>train</strong>, and <strong>grow</strong> your team to scale from <span className="text-indigo-600 font-semibold">₹1 Cr</span> to <span className="text-indigo-600 font-semibold">₹1,000 Cr</span>.
          </Paragraph>
          <div className="flex flex-wrap gap-4 mt-6">
             <Link to="/contact-us" target='_blank'>
             <Button type="primary" size="large" icon={<RocketOutlined />} className="rounded-lg shadow-md">
              Get Started
            </Button>
             </Link>
             <Link to="/about-us" target='_blank'>
            <Button size="large" className="rounded-lg border-indigo-500 text-indigo-600 hover:bg-indigo-50">
              Learn More
            </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Section - Chart */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center w-full"
        >
          <Card className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg  border-0">
            <Chart options={chartOptions} series={chartSeries} type="area" height={320} />
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
