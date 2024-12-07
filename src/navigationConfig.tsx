// navigationConfig.js
// navigationConfig.js
import { faHtml5, faCss3, faJsSquare, faBootstrap, faReact, faVuejs, faNodeJs, faPhp, faLaravel, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconSwitcher from './common/components/icons/IconSwitcher.tsx';

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorageIcon from '@mui/icons-material/Storage'; // أيقونة MySQL
import CodeIcon from '@mui/icons-material/Code'; // أيقونة Express

import ComputerIcon from '@mui/icons-material/Computer';

const NAVIGATION = [
    {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'home',
    title: 'home',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'languge',
  },
  {
  segment: 'frontend',
  title: 'Frontend',
  icon: <ComputerIcon />,
    children: [
      {
        segment: 'html',
        title: 'html',
        icon: <IconSwitcher language ="html" />,
      },
      { kind: 'divider' },
      {
        segment: 'css',
        title: 'css',
        icon : <IconSwitcher language ="css" />,
      },
      { kind: 'divider' },
      {
        segment: 'js',
        title: 'js',
        icon: <IconSwitcher language ="javascript" />,
      },
      { kind: 'divider' },
      {
        segment: 'bootstrap',
        title: 'Bootstrap',
        icon: <IconSwitcher language ="bootstrap" />,
      },
      { kind: 'divider' },
      {
        segment: 'git',
        title: 'git',
        icon: <IconSwitcher language ="bootstrap" />,
      },
      { kind: 'divider' },
      {
        segment: 'react',
        title: 'React',
        icon: <IconSwitcher language ="react" />,
      },
      { kind: 'divider' },
      {
        segment: 'vue',
        title: 'Vue.js',
        icon: <IconSwitcher language ="vue" />,
      },
    ],
  },
  { kind: 'divider' },
{
  segment: 'backend',
  title: 'Backend',
  icon: <StorageIcon />,

    children: [
      {
        segment: 'node',
        title: 'Node.js',
        icon: <IconSwitcher language ="node" />,
      },
      { kind: 'divider' },
      {
        segment: 'php',
        title: 'PHP',
        icon: <IconSwitcher language ="php" />,
      },
    { kind: 'divider' },
      {
        segment: 'mysql',
        title: 'MySQL',
        icon: <IconSwitcher language ="mysql" />,
      },
      { kind: 'divider' },
      {
        segment: 'express',
        title: 'Express',
        icon: <IconSwitcher language ="express" />,
      },
      { kind: 'divider' },
      {
        segment: 'python',
        title: 'Python',
        icon: <IconSwitcher language ="python" />,
      },
      { kind: 'divider' },
      {
        segment: 'laravel',
        title: 'Laravel',
        icon: <IconSwitcher language ="laravel" />,
      },
    ],
  },
{
  segment: 'Programs',
  title: 'Programs',
  icon: <StorageIcon />,
    children: [
      {
        segment: 'acode',
        title: 'acode',
      },
     { kind: 'divider' },
      {
        segment: 'termux',
        title: 'termux',
      },
          { kind: 'divider' },
      {
        segment: 'kiwi Browser',
        title: 'kiwi Browser',
      },
            { kind: 'divider' },
      {
        segment: 'AwebServer',
        title: 'AwebServer',
      },
    ],
  },
];
export default NAVIGATION;


