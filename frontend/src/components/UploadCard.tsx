import { useRef, type ChangeEvent } from "react";

interface UploadCardProps {
    onUpload: (file: File) => Promise<void> | void;
    isUploading: boolean;
    error: string | null;
}

const UploadCard = ({ onUpload, isUploading, error }: UploadCardProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        await onUpload(file);
        event.target.value = "";
    };

    return (
        <section className="card upload-card">
            <div>
                <p className="eyebrow">Upload a PDF</p>
                <h2>Start a new knowledge base</h2>
                <p className="muted">Drop in a document and ask grounded questions right away.</p>
            </div>

            <input
                ref={inputRef}
                className="sr-only"
                type="file"
                accept=".pdf"
                onChange={handleChange}
            />

            <button className="primary-btn" type="button" onClick={() => inputRef.current?.click()} disabled={isUploading}>
                {isUploading ? "Processing..." : "Upload PDF"}
            </button>

            {error ? <p className="error-text">{error}</p> : null}
        </section>
    );
};

export default UploadCard;
