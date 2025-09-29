import React from "react";
import { BookOpen, User, Users, GraduationCap, Home } from "lucide-react";

// --- Constants and Icons Mapping ---

const ROLES = {
  student: {
    name: "Student",
    icon: GraduationCap,
    description:
      "Access grades, schedules, assignments, and school announcements.",
    color: "bg-sky-600 hover:bg-sky-700",
    hoverRing: "ring-sky-500/50",
    route: "/student",
  },
  parent: {
    name: "Parent",
    icon: Users,
    description:
      "Monitor your child’s progress, attendance, and communicate with staff.",
    color: "bg-emerald-600 hover:bg-emerald-700",
    hoverRing: "ring-emerald-500/50",
    route: "/parent",
  },
  teacher: {
    name: "Teacher",
    icon: BookOpen,
    description: "Manage courses, submit grades, and plan lessons efficiently.",
    color: "bg-violet-600 hover:bg-violet-700",
    hoverRing: "ring-violet-500/50",
    route: "/teacher",
  },
};

// --- TypeScript Definitions for Props ---

// 1. Define the possible keys allowed for roleKey
type RoleKey = keyof typeof ROLES;

// 2. Define the props structure for the RoleCard component
interface RoleCardProps {
  roleKey: RoleKey; // This enforces that roleKey must be 'student', 'parent', or 'teacher'
}

/**
 * Role Card component for the landing page.
 * Now uses an <a> tag to link directly to the designated route.
 *
 * NOTE: Using React.FC and the RoleCardProps interface resolves the TypeScript error.
 */
const RoleCard: React.FC<RoleCardProps> = ({ roleKey }) => {
  const role = ROLES[roleKey];
  const Icon = role.icon;

  // Determine the specific color classes based on the new scheme
  const borderColorClass =
    roleKey === "student"
      ? "border-sky-500"
      : roleKey === "parent"
      ? "border-emerald-500"
      : "border-violet-500";

  const iconColorClass =
    roleKey === "student"
      ? "text-sky-500"
      : roleKey === "parent"
      ? "text-emerald-500"
      : "text-violet-500";

  return (
    <a
      href={role.route}
      className={`
        flex flex-col items-center p-6 bg-white rounded-xl shadow-lg 
        transition-all duration-300 transform hover:scale-[1.03] cursor-pointer 
        ring-2 ring-transparent ${role.hoverRing} hover:ring-8
        border-t-4 ${borderColorClass}
        h-full
      `}
    >
      <Icon className={`w-12 h-12 ${iconColorClass}`} />
      <h3 className="mt-4 text-xl font-bold text-gray-800">
        {role.name} Login
      </h3>
      <p className="mt-2 text-center text-gray-600 text-sm">
        {role.description}
      </p>
      <button
        className={`
          mt-6 px-6 py-2 text-white font-semibold rounded-full 
          shadow-md transition duration-300 ${role.color}
        `}
      >
        Enter Portal
      </button>
    </a>
  );
};

/**
 * Main component structure for the School Management System Landing Page.
 * This component only renders the static landing content and handles routing via links.
 */
const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Navigation */}
      <header className="py-4 shadow-md bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Accent Color updated to sky-600 */}
          <div className="flex items-center space-x-2 text-2xl font-extrabold text-sky-600">
            <Home className="w-6 h-6" />
            <span>SchoolSync</span>
          </div>
          <a
            href="/admin"
            // Accent Color updated to sky-600
            className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg shadow-md hover:bg-sky-700 transition duration-150"
          >
            Admin Login
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        {/* Background and accent text updated to sky */}
        <div className="bg-sky-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Your Complete{" "}
              <span className="text-sky-600">School Management</span> Solution
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Connecting students, parents, and educators in one seamless
              digital ecosystem for better learning outcomes.
            </p>
            <div className="mt-8">
              <span className="text-lg font-semibold text-gray-700">
                Select your role to continue:
              </span>
            </div>
          </div>
        </div>

        {/* Role Selection Cards */}
        <section className="py-12 md:py-20 -mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RoleCard roleKey="student" />
              <RoleCard roleKey="parent" />
              <RoleCard roleKey="teacher" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key Features of SchoolSync
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
                {/* Icon color updated to violet-600 (General System/Admin theme) */}
                <User className="w-8 h-8 mx-auto text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Unified Access
                </h3>
                <p className="mt-2 text-gray-600">
                  One place for all stakeholders—students, parents, and
                  teachers—to find relevant information.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
                {/* Icon color updated to emerald-600 (Parent/Teacher theme) */}
                <BookOpen className="w-8 h-8 mx-auto text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Real-time Data
                </h3>
                <p className="mt-2 text-gray-600">
                  Instant updates on grades, attendance, and assignment status
                  for timely intervention.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
                {/* Icon color updated to sky-600 (Student theme) */}
                <Users className="w-8 h-8 mx-auto text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Secure & Reliable
                </h3>
                <p className="mt-2 text-gray-600">
                  Enterprise-grade security to protect sensitive student and
                  academic records.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          &copy; 2024 SchoolSync. All rights reserved. | Contact Support
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
