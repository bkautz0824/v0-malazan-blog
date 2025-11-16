import { BookCard } from '@/components/book-card'

const books = [
  {
    number: 1,
    title: 'Gardens of the Moon',
    year: 1999,
    completed: true,
  },
  {
    number: 2,
    title: 'Deadhouse Gates',
    year: 2000,
    completed: true,
  },
  {
    number: 3,
    title: 'Memories of Ice',
    year: 2001,
    completed: true,
  },
  {
    number: 4,
    title: 'House of Chains',
    year: 2002,
    completed: true,
  },
  {
    number: 5,
    title: 'Midnight Tides',
    year: 2004,
    completed: true,
  },
  {
    number: 6,
    title: 'The Bonehunters',
    year: 2006,
    completed: false,
  },
  {
    number: 7,
    title: "Reaper's Gale",
    year: 2007,
    completed: false,
  },
  {
    number: 8,
    title: 'Toll the Hounds',
    year: 2008,
    completed: false,
  },
  {
    number: 9,
    title: 'Dust of Dreams',
    year: 2009,
    completed: false,
  },
  {
    number: 10,
    title: 'The Crippled God',
    year: 2011,
    completed: false,
  },
]

export default function Home() {
  const completedCount = books.filter((book) => book.completed).length
  const progressPercentage = (completedCount / books.length) * 100

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            The Malazan Book of the Fallen
          </h1>
          <p className="mb-8 text-balance text-lg text-muted-foreground md:text-xl">
            A reading journey through Steven Erikson's epic fantasy saga
          </p>
          
          {/* Progress Bar */}
          <div className="mx-auto max-w-2xl">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-foreground">
                {completedCount} of {books.length} books
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </header>

        {/* Books Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.number} book={book} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-sm text-muted-foreground">
            "Witness."
          </p>
        </footer>
      </div>
    </main>
  )
}
