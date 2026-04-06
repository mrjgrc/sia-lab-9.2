import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen p-8 font-sans max-w-4xl mx-auto">
      
      {/* 🔴 UNAUTHENTICATED VIEW */}
      <Show when="signed-out">
        <div className="flex flex-col items-center justify-center mt-32 space-y-6">
          <h1 className="text-4xl font-bold text-center">Welcome to My Web CV</h1>
          <p className="text-lg text-gray-600 text-center">
            You must be signed in to view my full Curriculum Vitae.
          </p>
          <SignInButton>
             <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors cursor-pointer">
              Sign In to View CV
            </button>
          </SignInButton>
        </div>
      </Show>

      {/* 🟢 AUTHENTICATED VIEW */}
      <Show when="signed-in">
        <div className="bg-white shadow-xl rounded-lg p-8 mt-10 border border-gray-100">
          
          {/* Header with Logout Button */}
          <div className="flex justify-between items-center border-b pb-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Confidential CV</h1>
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border">
              <span className="text-sm text-gray-600 font-medium">Log out:</span>
              <UserButton />
            </div>
          </div>

          {/* 📝 CV Content */}
          <div className="space-y-8">
            
            <section>
              <h2 className="text-4xl font-extrabold text-gray-900">CHRIS MARIEJO GARCIA</h2>
              <p className="text-xl text-purple-700 font-semibold mt-2">3rd Year BSIT Student & Web Developer</p>
              <p className="text-gray-600 mt-1">Angeles University Foundation (AUF)</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2 mb-4">Technical Profile</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li><strong>Web Technologies:</strong> PHP, Laravel, React, Next.js, HTML, CSS</li>
                <li><strong>Hardware & Systems:</strong> Arduino, IoT development</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2 mb-4">Focus Areas & Experience</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Systems Integration and Architecture</li>
                <li>Cybersecurity concepts and implementation</li>
                <li>Entrepreneurship and Startup business planning</li>
                <li>Currently developing a comprehensive Capstone Project</li>
              </ul>
            </section>

          </div>
        </div>
      </Show>

    </main>
  );
}