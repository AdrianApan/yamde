import { useRef } from 'react'
import Showdown from 'showdown'

import styles from './Yamde.module.scss'
import useMarkdownEditor from './hooks/useYamde'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: false,
  strikethrough: true,
  tasklists: true,
  noHeaderId: true,
})

const Yamde = ({ value, handler, buttons = 'default' }) => {
  const textEditorRef = useRef(null)
  const htmlPreview = converter.makeHtml(value)
  const { view, handleView, handleChange, toolbar } = useMarkdownEditor(handler, buttons, textEditorRef)

  return (
    <div className={styles['yamde']}>
      <div className={styles.toolbar}>
        {toolbar}
        <div className={styles['view-switch']}>
          <div className={[styles['view-btn'], view === 'editor' && styles['active']].join(' ')} onClick={handleView}>
            Editor
          </div>
          <div className={[styles['view-btn'], view === 'preview' && styles['active']].join(' ')} onClick={handleView}>
            Preview
          </div>
        </div>
      </div>
      {view === 'editor' ? (
        <textarea
          rows={12}
          name="description"
          value={value}
          onChange={(event) => handleChange(event)}
          required
          ref={textEditorRef}
        />
      ) : (
        <div className={styles['preview-area']} dangerouslySetInnerHTML={{ __html: htmlPreview }}></div>
      )}
    </div>
  )
}

export default Yamde
