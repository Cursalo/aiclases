'use client'

export default function ForgotPasswordPageSimple() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Reset Password Demo
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Simple demo password reset for deployment
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            type="button"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => window.location.href = '/login'}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  )
}