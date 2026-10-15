class UploadController {
    constructor(fileModel) {
        this.fileModel = fileModel;
    }

    async uploadFile(req, res) {
        try {
            const { filename, path } = req.file;
            const uploadDate = new Date();

            const newFile = new this.fileModel({
                filename,
                path,
                uploadDate
            });

            await newFile.save();
            res.status(201).json({ message: 'File uploaded successfully', file: newFile });
        } catch (error) {
            res.status(500).json({ message: 'Error uploading file', error: error.message });
        }
    }
}

export default UploadController;