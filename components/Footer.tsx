import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-4 py-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()}</span>

          <span className="font-bold text-foreground">
            Akhi Ketu Chakma
          </span>

          <span>•</span>

          <Link
            href="/#home"
            className="font-medium text-primary transition-colors duration-200 hover:text-primary/70 hover:cursor-pointer"
          >
            Want to contact?
          </Link>
        </div>
      </div>
    </footer>
  )
}