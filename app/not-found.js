import Link from 'next/link'
 
export default function NotFound() {
  return (
    // tailwind use
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <div className="text-6xl font-bold text-white">404</div>
      <div className="text-xl text-white">Page not found</div>
      <Link href="/">
        
          Go back to home
        
      </Link>
    </div>  // tailwind end 
    
  )
}