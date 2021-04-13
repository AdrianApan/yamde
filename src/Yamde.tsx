import React, { useState, useRef } from 'react'
import Showdown from 'showdown'

import { useStyles } from './Yamde.styles'

interface Props {
  value: string
  handler: (param: string) => void
  buttons: string
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: false,
  strikethrough: true,
  tasklists: true,
  noHeaderId: true,
})

const Yamde = ({ value, handler, buttons = 'default' }: Props) => {
  const textEditor = useRef(null)
  const [isPreviewMode, setisPreviewMode] = useState(false)
  const htmlPreview = converter.makeHtml(value)
  const classes = useStyles()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handler(e.target.value)
  }

  return (
    <div className={classes.yamde}>
      <div className={classes.toolbar}>
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
  )
}

export default Yamde
