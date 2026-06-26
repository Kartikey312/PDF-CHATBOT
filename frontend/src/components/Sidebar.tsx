import type { UploadResponse } from "../types/chat";

interface SidebarProps {
    pdfName: string | null;
    uploadSummary: UploadResponse | null;
    error: string | null;
}

const Sidebar = ({ pdfName, uploadSummary, error }: SidebarProps) => {
    return (
        <aside className="sidebar">
            <div className="card sidebar-card">
                <h2>Knowledge base</h2>
                <p className="muted">Upload a PDF and ask questions grounded in its contents.</p>
            </div>

            <div className="card sidebar-card">
                <h3>Current document</h3>
                {pdfName ? (
                    <>
                        <p className="strong">{pdfName}</p>
                        {uploadSummary ? (
                            <ul className="summary-list">
                                <li>{uploadSummary.pages} pages</li>
                                <li>{uploadSummary.chunks} chunks</li>
                            </ul>
                        ) : null}
                    </>
                ) : (
                    <p className="muted">No document uploaded yet.</p>
                )}
            </div>

            {error ? <div className="card sidebar-card error-card">{error}</div> : null}
        </aside>
    );
};

export default Sidebar;
