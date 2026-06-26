interface SourceBadgeProps {
    pages: number[];
}

const SourceBadge = ({ pages }: SourceBadgeProps) => {
    return (
        <div className="source-badge">
            Source: page {pages.join(", page ")}
        </div>
    );
};

export default SourceBadge;
