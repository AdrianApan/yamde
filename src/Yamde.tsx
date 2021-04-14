import React, { useState, useRef } from 'react'
import Showdown from 'showdown'

import { useStyles } from './Yamde.styles'
import { toolbarActions } from './utils/toolbarActions'

interface Props {
  value: string
  handler: (param: string) => void
}

interface ActionButtonSchema {
  openingTag: string
  closingTag: string
}

interface ActionButton {
  name: string
  schema: ActionButtonSchema
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: false,
  strikethrough: true,
  tasklists: true,
  noHeaderId: true,
})

const Yamde = ({ value, handler }: Props) => {
  const [isPreviewMode, setisPreviewMode] = useState(false)
  const textEditor = useRef<HTMLTextAreaElement>(null)
  const classes = useStyles()
  const htmlPreview = converter.makeHtml(value)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handler(e.target.value)
  }

  const handleClick = ({ name, schema }: ActionButton) => {
    const { openingTag, closingTag } = schema

    if (textEditor && textEditor.current) {
      const { value, selectionStart, selectionEnd } = textEditor.current
      const len = value.length
      const selectedText = textEditor.current.value.substring(selectionStart, selectionEnd)
      const regex = /[^\n]+/g
      const list = selectedText.match(regex)
      let fullReplacement = ''

      const formatText = (list: string[], name: string, openingTag: string, closingTag: string) => {
        let string = ''
        list.forEach((item: string, i: number) => {
          if (name === 'olist') {
            string += `${i + 1}. ${item}${closingTag}\n`
          } else {
            string += `${openingTag}${item}${closingTag}\n`
          }
        })
        return string
      }

      if (list && list.length > 0 && (name === 'olist' || name === 'ulist')) {
        fullReplacement =
          value.substring(0, selectionStart) +
          formatText(list, name, openingTag, closingTag) +
          value.substring(selectionEnd, len)
      } else {
        const replacement = `${openingTag}${selectedText}${closingTag}`
        fullReplacement =
          value.substring(0, selectionStart) + replacement + value.substring(selectionEnd, len)
      }

      handler(fullReplacement)
    }
  }

  return (
    <div className={classes.yamde}>
      <div className={classes.toolbar}>
        {toolbarActions.map(({ name, icon, schema }) => {
          return (
            <div
              key={name}
              className={classes.button}
              onClick={() => handleClick({ name, schema })}
            >
              {icon}
            </div>
          )
        })}
        <div className={classes.viewSwitch}>
          <div
            className={`${classes.viewButton} ${!isPreviewMode ? classes.activeView : ''}`}
            onClick={() => setisPreviewMode(false)}
          >
            Editor
          </div>
          <div
            className={`${classes.viewButton} ${isPreviewMode ? classes.activeView : ''}`}
            onClick={() => setisPreviewMode(true)}
          >
            Preview
          </div>
        </div>
      </div>
      <div className={classes.contentArea}>
        {!isPreviewMode ? (
          <textarea
            rows={12}
            name="yamdeContent"
            value={value}
            onChange={(e) => handleChange(e)}
            required
            ref={textEditor}
          />
        ) : (
          <div className={classes.preview} dangerouslySetInnerHTML={{ __html: htmlPreview }}></div>
        )}
      </div>
    </div>
  )
}

export default Yamde
