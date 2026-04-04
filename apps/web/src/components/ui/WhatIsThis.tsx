import InfoTooltip from './InfoTooltip'

/**
 * Contextual "What is this?" explainer that appears at the top of feature pages.
 * Explains the concept in simple language + links to the relevant lesson.
 */
interface WhatIsThisProps {
  /** Simple explanation suitable for a beginner */
  explanation: string
  /** Optional lesson ID to link to */
  lessonId?: string
  /** Optional lesson title */
  lessonTitle?: string
}

export default function WhatIsThis({ explanation, lessonId, lessonTitle }: WhatIsThisProps) {
  return (
    <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-xl p-4 flex items-start gap-3">
      <span className="text-xl flex-shrink-0">💡</span>
      <div className="text-sm text-surface-700 dark:text-surface-300">
        <p>{explanation}</p>
        {lessonId && lessonTitle && (
          <a
            href={`/learn/${lessonId}`}
            className="inline-block mt-2 text-primary-600 dark:text-primary-400 font-medium hover:underline text-xs"
          >
            Learn more: {lessonTitle} →
          </a>
        )}
      </div>
    </div>
  )
}
