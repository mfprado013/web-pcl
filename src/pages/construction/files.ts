import File01 from '@/assets/images/contruction/pt1.jpeg';
import File02 from '@/assets/images/contruction/pt2.jpeg';
import File03 from '@/assets/images/contruction/pt3.jpeg';
import File04 from '@/assets/images/contruction/pt6.jpeg';
import File05 from '@/assets/images/contruction/pt7.jpeg';
import File06 from '@/assets/images/contruction/pt8.jpeg';
import File07 from '@/assets/images/contruction/pt9.jpeg';
import File08 from '@/assets/images/contruction/pt10.jpeg';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

export const files = [
  {
    id: 1,
    source: File01.src
  },
  {
    id: 2,
    source: File02.src
  },
  {
    id: 3,
    source: File03.src
  },
  {
    id: 4,
    source: File04.src
  },
  {
    id: 5,
    source: File05.src
  },
  {
    id: 6,
    source: File06.src
  },
  {
    id: 7,
    source: File07.src
  },
  {
    id: 8,
    source: File08.src
  }
];

export const items = [
  {
    title: 'Download do PDF de Resumo',
    description: 'faça o download do pdf de resumo, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-blue-500',
    file: '/construction/resumo.pdf',
    nameFile: 'resumo.pdf'
  },
  {
    title: 'Download do PDF de Navegação e Manutenção',
    description: 'faça o download do pdf de navegação e manutenção, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-gray-500',
    file: '/construction/icamento-construção.pdf',
    nameFile: 'icamento-construção.pdf'
  }
];
