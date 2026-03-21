export default function Navbar() {
    return (
        <nav className="flex justify-between items-cetner p-4">
            <h1 className="text-xl font-bold">Logo</h1>
            <div className="flex gap-6">
                <a href="#">Home</a>
                <a href="#">About</a>
            </div>
        </nav>
    );
}