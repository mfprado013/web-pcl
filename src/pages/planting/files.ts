import File01 from '@/assets/images/planting/pt62.jpeg';
import File02 from '@/assets/images/planting/pt64.jpeg';
import File03 from '@/assets/images/planting/pt65.jpeg';
import File04 from '@/assets/images/planting/pt66.jpeg';
import File05 from '@/assets/images/planting/pt67.jpeg';
import File06 from '@/assets/images/planting/pt70.jpeg';
import File07 from '@/assets/images/planting/pt72.jpeg';
import File08 from '@/assets/images/planting/pt73.jpeg';
import File09 from '@/assets/images/planting/pt74.jpeg';
import File10 from '@/assets/images/planting/pt79.jpeg';
import File11 from '@/assets/images/planting/pt80.jpeg';
import File12 from '@/assets/images/planting/pt81.jpeg';
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
  },
  {
    id: 9,
    source: File09.src
  },
  {
    id: 10,
    source: File10.src
  },
  {
    id: 11,
    source: File11.src
  },
  {
    id: 12,
    source: File12.src
  }
];

export const items = [
  {
    title: 'Download do PDF de Resumo',
    description: 'faça o download do pdf de resumo, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-blue-500',
    file: '/planting/resumo.pdf',
    nameFile: 'resumo.pdf'
  },
  {
    title: 'Download do PDF de Navegação e Manutenção',
    description: 'faça o download do pdf de navegação e manutenção, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-gray-500',
    file: '/planting/plantio-lavoura.pdf',
    nameFile: 'plantio-lavoura.pdf'
  }
];
