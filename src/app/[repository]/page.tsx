import "./repository.scss";

export default async function Repository({ params }: { params: Promise<{ repository: string }> }) {
    const { repository } = await params;
    return (
        <div id="repository">
            <h1 className="text-2xl font-bold mb-4">Repository Details</h1>
            <p className="text-lg">Repository ID: {repository}</p>
        </div>
    );
}
