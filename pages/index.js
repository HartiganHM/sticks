import Link from 'next/link'
const Index = () => (
  <div>
    Hi Colin 🤘{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
