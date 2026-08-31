'use client'

import { useState } from 'react'

export type Chapter = {
  id: number
  name: string
}

export function ChapterChecklist({
  chapters,
  onStart,
}: {
  chapters: Chapter[]
  onStart: (chapterIds: number[]) => void
}) {
  const [selected, setSelected] = useState<Set<number>>(new Set())

  function toggleChapter(id: number) {
    setSelected((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <fieldset className="chapterChecklist">
      <legend className="srOnly">Chapters</legend>
      {chapters.map((chapter) => (
        <label className="chapterOption" key={chapter.id}>
          <input
            type="checkbox"
            checked={selected.has(chapter.id)}
            onChange={() => toggleChapter(chapter.id)}
          />
          <span>{chapter.name}</span>
        </label>
      ))}
      <p className="formMessage" role="status">
        {selected.size === 0
          ? 'Select at least one chapter to continue.'
          : `${selected.size} chapter${selected.size === 1 ? '' : 's'} selected.`}
      </p>
      <button
        className="primaryButton"
        type="button"
        disabled={selected.size === 0}
        onClick={() => onStart(Array.from(selected))}
      >
        Start practice
      </button>
    </fieldset>
  )
}

