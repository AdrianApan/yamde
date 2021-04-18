import React from 'react'

import BoldOutlined from '@ant-design/icons/BoldOutlined'
import ItalicOutlined from '@ant-design/icons/ItalicOutlined'
import StrikethroughOutlined from '@ant-design/icons/StrikethroughOutlined'
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined'
import OrderedListOutlined from '@ant-design/icons/OrderedListOutlined'
import TableOutlined from '@ant-design/icons/TableOutlined'
import FileImageOutlined from '@ant-design/icons/FileImageOutlined'
import LinkOutlined from '@ant-design/icons/LinkOutlined'
import RightOutlined from '@ant-design/icons/RightOutlined'
import CodeOutlined from '@ant-design/icons/CodeOutlined'

export const toolbarActions = [
  {
    name: 'bold',
    icon: <BoldOutlined />,
    schema: {
      openingTag: '**',
      closingTag: '**',
    },
  },
  {
    name: 'italic',
    icon: <ItalicOutlined />,
    schema: {
      openingTag: '*',
      closingTag: '*',
    },
  },
  {
    name: 'strikethrough',
    icon: <StrikethroughOutlined />,
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
    icon: <UnorderedListOutlined />,
    schema: {
      openingTag: '- ',
      closingTag: '',
    },
  },
  {
    name: 'olist',
    icon: <OrderedListOutlined />,
    schema: {
      openingTag: '1. ',
      closingTag: '',
    },
  },
  {
    name: 'table',
    icon: <TableOutlined />,
    schema: {
      openingTag:
        'Column 1 | Column 2 | Column 3\n---|:---:|---:\nLeft | Center | Right\n1 | 2 | 3\n4 | 5 | 6',
      closingTag: '',
    },
  },
  {
    name: 'image',
    icon: <FileImageOutlined />,
    schema: {
      openingTag: '![',
      closingTag: '](https://example.com/image.png)',
    },
  },
  {
    name: 'link',
    icon: <LinkOutlined />,
    schema: {
      openingTag: '[',
      closingTag: '](https://www.example.com)',
    },
  },
  {
    name: 'quote',
    icon: <RightOutlined />,
    schema: {
      openingTag: '> ',
      closingTag: '',
    },
  },
  {
    name: 'code',
    icon: <CodeOutlined />,
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
