import React, { useState, useRef } from 'react'
import Showdown from 'showdown'

import { useStyles } from './Yamde.styles'
import { toolbarActions } from './utils/toolbarActions'

interface Props {
  value: string
  handler: (param: string) => void
  buttons?: any[]
}

interface ActionButtonSchema {
  openingTag: string
  closingTag: string
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
  const textEditor = useRef(null)
  const classes = useStyles()
  const htmlPreview = converter.makeHtml(value)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handler(e.target.value)
  }

  const handleClick = ({ openingTag, closingTag }: ActionButtonSchema) =>
    console.log(openingTag, closingTag)

  return (
    <div className={classes.yamde}>
      <div className={classes.toolbar}>
        {toolbarActions.map(({ name, icon, schema }) => {
          return (
            <div
              key={name}
              className={classes.button}
              id={name}
              onClick={() => handleClick(schema)}
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
