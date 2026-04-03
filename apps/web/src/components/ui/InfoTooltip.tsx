import { useState, useRef, useEffect } from 'react'

interface InfoTooltipProps {
  /** The explanation text shown in the tooltip */
  text: string
  /** Optional longer explanation */
  detail?: string
  /** Size of the info icon */
  size?: 'sm' | 'md'
}

export default function InfoTooltip({ text, detail, size = 'sm' }: InfoTooltipProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const iconSize = size === 'sm' ? 'w-4 h-4 text-[10px]' : 'w-5 h-5 text-xs'

  return (
    <div className="relative inline-flex items-center" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`${iconSize} rounded-full bg-surface-200 text-surface-500 hover:bg-primary-100 hover:text-primary-600 transition-colors flex items-center justify-center font-bold leading-none cursor-help ml-1`}
        aria-label="More info"
        type="button"
      >
        i
      </button>

      {open && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 max-w-[90vw]">
          <div className="bg-surface-900 text-white rounded-lg px-3 py-2 text-xs leading-relaxed shadow-lg">
            <p>{text}</p>
            {detail && <p className="mt-1.5 text-surface-300">{detail}</p>}
          </div>
          {/* Arrow */}
          <div className="w-2 h-2 bg-surface-900 rotate-45 mx-auto -mt-1" />
        </div>
      )}
    </div>
  )
}
