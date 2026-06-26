interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <header className="app-header">
            <div>
                <p className="eyebrow">AI document assistant</p>
                <h1>{title}</h1>
                <p className="subtitle">{subtitle}</p>
            </div>
        </header>
    );
};

export default Header;
