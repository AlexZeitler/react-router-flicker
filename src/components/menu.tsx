import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Projects', href: '/projects' }
]

export const Menu = () => {
  return (
    <div>
      {navigation.map((item) => (
        <Link
          to={item.href}
          key={item.name}
          className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
