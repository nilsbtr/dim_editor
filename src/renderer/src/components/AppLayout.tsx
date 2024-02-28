import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ children, className, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge(className, 'w-[30%] h-screen')} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge(className, 'flex-1 overflow-auto')} {...props}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'
