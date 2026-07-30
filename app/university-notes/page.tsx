/**
 * UNIVERSITY NOTES PAGE
 * 
 * This page organizes and displays all university coursework notes and resources.
 * Students/viewers can browse by semester, subject, or search through the content.
 * 
 * Features:
 * - Categorized by semester and subject
 * - Search functionality
 * - Filter by subject area
 * - Downloadable resources
 * - Related topics linking
 * 
 * SEO Considerations:
 * - Well-structured headings for content hierarchy
 * - Detailed descriptions for each subject
 * - Schema markup for educational content
 */

'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Download, Search, Filter, ChevronRight } from 'lucide-react'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'

export default function UniversityNotesPage() {
  // Search and filter state management
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('all')

  /**
   * Sample university notes data structure
   * Replace with your actual course data
   * 
   * Each course contains:
   * - id: unique identifier
   * - title: course name
   * - code: course code (e.g., CS101)
   * - semester: when the course was taken
   * - subject: subject category
   * - description: what the course covers
   * - topics: key topics covered (array)
   * - notes: link to full notes
   * - resourceCount: number of resources available
   */
  const universityNotes = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      code: 'CS201',
      semester: 'Spring 2022',
      semesterOrder: 2,
      subject: 'Computer Science',
      description: 'Comprehensive study of fundamental data structures, algorithms analysis, and optimization techniques.',
      topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting', 'Dynamic Programming'],
      notes: '/notes/cs201-dsa.pdf',
      resourceCount: 5,
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      code: 'CS150',
      semester: 'Fall 2021',
      semesterOrder: 1,
      subject: 'Computer Science',
      description: 'Introduction to web development including HTML, CSS, JavaScript, and basic backend concepts.',
      topics: ['HTML5', 'CSS3', 'JavaScript', 'DOM', 'Async Programming', 'APIs'],
      notes: '/notes/cs150-web.pdf',
      resourceCount: 8,
    },
    {
      id: 3,
      title: 'Database Management Systems',
      code: 'CS301',
      semester: 'Spring 2023',
      semesterOrder: 4,
      subject: 'Computer Science',
      description: 'In-depth exploration of relational databases, SQL optimization, and database design principles.',
      topics: ['SQL', 'Normalization', 'Indexing', 'Query Optimization', 'Transactions', 'ACID Properties'],
      notes: '/notes/cs301-dbms.pdf',
      resourceCount: 6,
    },
    {
      id: 4,
      title: 'Object-Oriented Programming',
      code: 'CS202',
      semester: 'Fall 2022',
      semesterOrder: 3,
      subject: 'Computer Science',
      description: 'Master OOP principles including encapsulation, inheritance, polymorphism, and design patterns.',
      topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Interfaces', 'Design Patterns', 'SOLID Principles'],
      notes: '/notes/cs202-oop.pdf',
      resourceCount: 7,
    },
    {
      id: 5,
      title: 'Discrete Mathematics',
      code: 'MATH201',
      semester: 'Spring 2022',
      semesterOrder: 2,
      subject: 'Mathematics',
      description: 'Foundational discrete math concepts including logic, set theory, combinatorics, and graph theory.',
      topics: ['Logic', 'Set Theory', 'Combinatorics', 'Graph Theory', 'Induction', 'Recursion'],
      notes: '/notes/math201-discrete.pdf',
      resourceCount: 4,
    },
    {
      id: 6,
      title: 'Software Engineering',
      code: 'CS350',
      semester: 'Fall 2023',
      semesterOrder: 5,
      subject: 'Computer Science',
      description: 'Software development lifecycle, design patterns, testing strategies, and project management methodologies.',
      topics: ['SDLC', 'Design Patterns', 'Testing', 'Agile', 'Git', 'Code Review'],
      notes: '/notes/cs350-softeng.pdf',
      resourceCount: 9,
    },
    {
      id: 7,
      title: 'Operating Systems',
      code: 'CS250',
      semester: 'Spring 2023',
      semesterOrder: 4,
      subject: 'Computer Science',
      description: 'Core concepts of operating systems including processes, threads, memory management, and concurrency.',
      topics: ['Processes', 'Threads', 'Memory Management', 'Concurrency', 'Deadlocks', 'Scheduling'],
      notes: '/notes/cs250-os.pdf',
      resourceCount: 5,
    },
    {
      id: 8,
      title: 'Linear Algebra',
      code: 'MATH151',
      semester: 'Fall 2021',
      semesterOrder: 1,
      subject: 'Mathematics',
      description: 'Vector spaces, matrices, eigenvalues, and linear transformations with applications in computing.',
      topics: ['Vectors', 'Matrices', 'Determinants', 'Eigenvalues', 'Transformations', 'Applications'],
      notes: '/notes/math151-linalg.pdf',
      resourceCount: 5,
    },
  ]

  // Get unique semesters for filter dropdown
  const semesters = ['all', ...new Set(universityNotes.map((note) => note.semester))]

  // Get unique subjects for filter
  const subjects = ['All Subjects', ...new Set(universityNotes.map((note) => note.subject))]

  /**
   * Filter and search logic
   * - Filters by semester if selected (not 'all')
   * - Searches through title, code, description, and topics
   */
  const filteredNotes = useMemo(() => {
    return universityNotes.filter((note) => {
      const matchesSemester = selectedSemester === 'all' || note.semester === selectedSemester
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        note.title.toLowerCase().includes(searchLower) ||
        note.code.toLowerCase().includes(searchLower) ||
        note.description.toLowerCase().includes(searchLower) ||
        note.topics.some((topic) => topic.toLowerCase().includes(searchLower))

      return matchesSemester && matchesSearch
    })
  }, [selectedSemester, searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header with back button */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold">University Notes</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive collection of notes from my university coursework spanning computer science fundamentals, mathematics, 
            and advanced software engineering concepts. Each course contains detailed notes, key topics, and supplementary resources.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search courses by title, code, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card hover:border-primary focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Filter By Semester */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter size={18} className="text-muted-foreground flex-shrink-0" />
            {semesters.map((semester) => (
              <button
                key={semester}
                onClick={() => setSelectedSemester(semester)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-300 flex-shrink-0 ${
                  selectedSemester === semester
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {semester === 'all' ? 'All Semesters' : semester}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Found <span className="font-semibold text-foreground">{filteredNotes.length}</span> course
          {filteredNotes.length !== 1 ? 's' : ''}
        </div>

        {/* Notes Grid */}
        <div className="space-y-4">
          {filteredNotes.length > 0 ? (
            filteredNotes
              .sort((a, b) => b.semesterOrder - a.semesterOrder) // Sort by semester (newest first)
              .map((note) => (
                <div
                  key={note.id}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Course Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{note.code}</span>
                          <span className="text-sm text-muted-foreground">{note.semester}</span>
                        </div>
                        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{note.title}</h2>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p className="font-semibold">{note.subject}</p>
                        <p className="text-xs">{note.resourceCount} resources</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{note.description}</p>

                    {/* Topics Tags */}
                    <div className="flex flex-wrap gap-2">
                      {note.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium hover:bg-accent/30 transition-colors cursor-default"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <a
                        href={note.notes}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        <BookOpen size={18} />
                        View Notes
                        <ChevronRight size={16} />
                      </a>
                      <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ml-auto">
                        <Download size={18} />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            // No Results State
            <div className="text-center py-12 bg-muted/30 rounded-xl border border-border">
              <Search size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedSemester('all')
                }}
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Subject Organization Section */}
        <section className="mt-16 pt-12 border-t border-border space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Organized by Subject</h2>
            <p className="text-muted-foreground">Browse courses by their primary subject area</p>
          </div>

          {/* Subject Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((subject) => {
              // Get all courses in this subject
              const coursesInSubject =
                subject === 'All Subjects'
                  ? universityNotes
                  : universityNotes.filter((note) => note.subject === subject)

              return (
                <div key={subject} className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary">{subject}</h3>
                  <div className="space-y-2">
                    {coursesInSubject.map((course) => (
                      <div key={course.id} className="flex items-center justify-between text-sm">
                        <span className="font-medium">
                          {course.code} - {course.title}
                        </span>
                        <span className="text-xs text-muted-foreground">{course.semester}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                    {coursesInSubject.length} course{coursesInSubject.length !== 1 ? 's' : ''}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 py-12 bg-muted/30 rounded-xl border border-border text-center space-y-4">
          <h2 className="text-2xl font-bold">Want to use these notes?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All notes are available for download as PDF files. You can also view them directly on this page. 
            For questions or specific topics, feel free to reach out!
          </p>
          <Link href="/#contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get In Touch</Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} University Notes Archive. Organized for learning and reference.</p>
        </div>
      </footer>
    </div>
  )
}
