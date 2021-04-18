import React from 'react'
import { FiImage } from '@react-icons/all-files/fi/FiImage'
import { MdFormatQuote } from '@react-icons/all-files/md/MdFormatQuote'
import { MdCode } from '@react-icons/all-files/md/MdCode'
import { AiOutlineBold } from '@react-icons/all-files/ai/AiOutlineBold'
import { AiOutlineItalic } from '@react-icons/all-files/ai/AiOutlineItalic'
import { AiOutlineStrikethrough } from '@react-icons/all-files/ai/AiOutlineStrikethrough'
import { AiOutlineUnorderedList } from '@react-icons/all-files/ai/AiOutlineUnorderedList'
import { AiOutlineOrderedList } from '@react-icons/all-files/ai/AiOutlineOrderedList'
import { AiOutlineTable } from '@react-icons/all-files/ai/AiOutlineTable'
import { AiOutlineLink } from '@react-icons/all-files/ai/AiOutlineLink'

export const toolbarActions = [
  {
    name: 'bold',
    icon: <AiOutlineBold />,
    schema: {
      openingTag: '**',
      closingTag: '**',
    },
  },
  {
    name: 'italic',
    icon: <AiOutlineItalic />,
    schema: {
      openingTag: '*',
      closingTag: '*',
    },
  },
  {
    name: 'strikethrough',
    icon: <AiOutlineStrikethrough />,
    schema: {
      openingTag: '~~',
      closingTag: '~~',
    },
  },
  {
    name: 'heading1',
    icon: 'H1',
    schema: {
      openingTag: '# ',
      closingTag: '',
    },
  },
  {
    name: 'heading2',
    icon: 'H2',
    schema: {
      openingTag: '## ',
      closingTag: '',
    },
  },
  {
    name: 'heading3',
    icon: 'H3',
    schema: {
      openingTag: '### ',
      closingTag: '',
    },
  },
  {
    name: 'ulist',
    icon: <AiOutlineUnorderedList />,
    schema: {
      openingTag: '- ',
      closingTag: '',
    },
  },
  {
    name: 'olist',
    icon: <AiOutlineOrderedList />,
    schema: {
      openingTag: '1. ',
      closingTag: '',
    },
  },
  {
    name: 'table',
    icon: <AiOutlineTable />,
    schema: {
      openingTag:
        'Column 1 | Column 2 | Column 3\n---|:---:|---:\nLeft | Center | Right\n1 | 2 | 3\n4 | 5 | 6',
      closingTag: '',
    },
  },
  {
    name: 'image',
    icon: <FiImage />,
    schema: {
      openingTag: '![',
      closingTag: '](https://example.com/image.png)',
    },
  },
  {
    name: 'link',
    icon: <AiOutlineLink />,
    schema: {
      openingTag: '[',
      closingTag: '](https://www.example.com)',
    },
  },
  {
    name: 'quote',
    icon: <MdFormatQuote />,
    schema: {
      openingTag: '> ',
      closingTag: '',
    },
  },
  {
    name: 'code',
    icon: <MdCode />,
    schema: {
      openingTag: '`',
      closingTag: '`',
    },
  },
  {
    name: 'hr',
    icon: 'HR',
    schema: {
      openingTag: '',
      closingTag: '\n\n---\n',
    },
  },
]
