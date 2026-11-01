import Link from 'next/link';

export default function CoursesPage() {
    return (
        <div>
            <h1>Все курсы</h1>
            <ul>
                <li><Link href="/courses/nextjs">Курс по Next.js</Link></li>
                <li><Link href="/courses/react">Курс по React</Link></li>
            </ul>
        </div>
    );
}