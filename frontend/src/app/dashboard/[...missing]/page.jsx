import React from 'react'

const page = () => {
return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
            <div className="h-2 w-20 bg-cyan-600 mx-auto my-4 rounded-full"></div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-800 max-w-md mx-auto mb-8">
                We couldn't find the page you're looking for. The page might have been removed or the URL might be incorrect.
            </p>
            <a href="/" className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
            </a>
        </div>
    </div>
)
}

export default page