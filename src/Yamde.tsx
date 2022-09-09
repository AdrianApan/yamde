import React, { useState, useRef } from 'react'
import Showdown from 'showdown'

import Props from './types/Props'
import ActionButton from './types/ActionButton'

import { useStyles } from './Yamde.styles'
import { toolbarActions } from './utils/toolbarActions'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: false,
  strikethrough: true,
  tasklists: true,
  noHeaderId: true,
})

const Yamde = ({ value, handler, toolbar, required }: Omit<Props, 'theme'>) => {
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
      const { value: editorValue, selectionStart, selectionEnd } = textEditor.current
      const len = editorValue.length
      const selectedText = textEditor.current.value.substring(selectionStart, selectionEnd)
      const regex = /[^\n]+/g
      const list = selectedText.match(regex)
      let fullReplacement = ''

      const formatText = (
        selectionList: string[],
        actionName: string,
        actionOpeningTag: string,
        actionClosingTag: string,
      ) => {
        let newString = ''
        selectionList.forEach((item: string, i: number) => {
          if (actionName === 'olist') {
            newString += `${i + 1}. ${item}${closingTag}\n`
          } else {
            newString += `${actionOpeningTag}${item}${actionClosingTag}\n`
          }
        })
        return newString
      }

      if (list && list.length > 0 && (name === 'olist' || name === 'ulist')) {
        fullReplacement =
          editorValue.substring(0, selectionStart) +
          formatText(list, name, openingTag, closingTag) +
          editorValue.substring(selectionEnd, len)
      } else {
        const replacement = `${openingTag}${selectedText}${closingTag}`
        fullReplacement =
          editorValue.substring(0, selectionStart) +
          replacement +
          editorValue.substring(selectionEnd, len)
      }

      handler(fullReplacement)
    }
  }

  return (
    <div className={classes.yamde}>
      <div className={classes.toolbar}>
        <div className={classes.buttons}>
          {toolbarActions
            .filter((action) => toolbar?.includes(action.name))
            .map(({ name, icon, schema }) => {
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
        </div>
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
            required={required}
            ref={textEditor}
          />
        ) : (
          <div className={classes.preview} dangerouslySetInnerHTML={{ __html: htmlPreview }}></div>
        )}
      </div>
      <div className={classes.mobileButton}>
        {toolbarActions
          .filter((action) => toolbar?.includes(action.name))
          .map(({ name, icon, schema }) => {
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
      </div>
    </div>
  )
}

export default Yamde
