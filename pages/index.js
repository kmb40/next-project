import Link from 'next/link'

export default function Home () {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Blah Blah Blah Blah</p>
            <Link href="/about">Visit about page</Link>
        </div>
    )
}