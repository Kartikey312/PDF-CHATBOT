import api from "../services/api";

const FileUpload = () => {

    const uploadFile = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (!e.target.files) return;

        const file = e.target.files[0];

        const formData = new FormData();

        formData.append("file", file);

        const response = await api.post(
            "/upload",
            formData
        );

        alert(response.data.message);
    };

    return (
        <input
            type="file"
            accept=".pdf"
            onChange={uploadFile}
        />
    );
};

export default FileUpload;