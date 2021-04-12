import { useState, useEffect } from 'react'

import styles from '../Yamde.module.scss'
import { buttonsDictionary } from '../utils/dictionary'
import { buttonsActions } from '../utils/actions'

const useMarkdownEditor = (handler, buttons, textEditor) => {
  const [view, setView] = useState('editor')
  const [toolbarButtons, setToolbarButtons] = useState([])

  function wrapText(id, openingTag, closingTag) {
    const { name, value } = textEditor.current
    const textArea = textEditor.current
    const len = textArea.value.length
    const start = textArea.selectionStart
    const end = textArea.selectionEnd
    const selectedText = textEditor.current.value.substring(start, end)
    const regex = /[^\n]+/g
    const list = selectedText.match(regex)
    let fullReplacement = ''

    function formatText(list, id, openingTag, closingTag) {
      let string = ''
      list.forEach((item, i) => {
        if (id === 'olist') {
          string += `${i + 1}. ${item}${closingTag}\n`
        } else {
          string += `${openingTag}${item}${closingTag}\n`
        }
      })
      return string
    }

    if (list && list.length > 0 && (id === 'olist' || id === 'ulist')) {
      fullReplacement =
        textArea.value.substring(0, start) +
        formatText(list, id, openingTag, closingTag) +
        textArea.value.substring(end, len)
    } else {
      const replacement = `${openingTag}${selectedText}${closingTag}`
      fullReplacement = textArea.value.substring(0, start) + replacement + textArea.value.substring(end, len)
    }

    handler((prevData) => ({
      ...prevData,
      [name]: (value, fullReplacement),
    }))
  }

  function handleClick(id) {
    const { openingTag, closingTag } = buttonsActions[id]
    wrapText(id, openingTag, closingTag)
  }

  function handleChange(event) {
    const { name, value } = event.target
    handler((prevData) => ({ ...prevData, [name]: value }))
  }

  function handleView() {
    view === 'editor' ? setView('preview') : setView('editor')
  }

  const toolbar = toolbarButtons.map((btn) => (
    <div
      key={btn}
      className={styles.button}
      id={btn}
      onClick={() => {
        handleClick(btn)
      }}
    >
      {buttonsDictionary[btn]}
    </div>
  ))

  useEffect(() => {
    let buttonsArray = []

    buttons === 'default'
      ? Object.entries(buttonsDictionary).map(([key]) => {
          buttonsArray.push(key)
        })
      : buttons.map((button) => buttonsArray.push(button))

    setToolbarButtons(buttonsArray)
  }, [buttons])

  return {
    view,
    handleView,
    handleChange,
    toolbar,
  }
}

export default useMarkdownEditor
