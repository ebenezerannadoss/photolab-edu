import Layout from '../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-xl">Continue Learning</div>
        <div className="glass-card p-4 rounded-xl">Recent Modules</div>
        <div className="glass-card p-4 rounded-xl">Assignments</div>
        <div className="glass-card p-4 rounded-xl">Quizzes</div>
        <div className="glass-card p-4 rounded-xl">Progress</div>
        <div className="glass-card p-4 rounded-xl">Achievements</div>
      </div>
    </Layout>
  )
}
