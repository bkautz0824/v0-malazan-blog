import { Check, BookOpen } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Book {
  number: number
  title: string
  year: number
  completed: boolean
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 ${
        book.completed
          ? 'border-primary/50 bg-card hover:border-primary'
          : 'border-border bg-card/50 hover:border-border/80'
      }`}
    >
      <div className="p-6">
        {/* Book Number Badge */}
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold ${
              book.completed
                ? 'bg-primary/20 text-primary'
                : 'bg-secondary text-muted-foreground'
            }`}
          >
            {book.number}
          </div>
          
          {/* Completion Status */}
          {book.completed ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Book Title */}
        <h3
          className={`mb-2 font-serif text-xl font-semibold leading-tight text-balance ${
            book.completed ? 'text-foreground' : 'text-muted-foreground'
          }`}
        >
          {book.title}
        </h3>

        {/* Publication Year */}
        <p className="text-sm text-muted-foreground">Published {book.year}</p>

        {/* Completion Label */}
        <div className="mt-4">
          {book.completed ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              To Read
            </span>
          )}
        </div>
      </div>

      {/* Decorative Element */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-full transition-opacity ${
          book.completed ? 'bg-primary opacity-100' : 'bg-border opacity-0'
        } group-hover:opacity-100`}
      />
    </Card>
  )
}
