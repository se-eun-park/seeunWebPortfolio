type TagProps = {
  children: React.ReactNode
  theme?: 'light' | 'dark'
}

export default function Tag({ children, theme = 'light' }: TagProps) {
  const styles =
    theme === 'dark'
      ? 'border-gray-500 text-white/90 bg-white/[0.05]'
      : 'border-black-400/15 text-black-400 bg-black-400/[0.03]'
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-pretendard-500 ${styles}`}
    >
      {children}
    </span>
  )
}
