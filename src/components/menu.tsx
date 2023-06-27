const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Projects', href: '/projects' }
]

export const Menu = () => {
  return (
    <div>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
