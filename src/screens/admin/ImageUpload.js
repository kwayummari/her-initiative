class ImageUpload {

    static get toolbox() {
        return {
            title: 'Image',
            icon: '<svg width="17" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 20H0V0h20v20z" fill="none"/><path d="M4 12l-1 2v2h14v-2l-1-2H4zm9-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7-2h-2l-3.75-5-3.75 5H6L1 16v2h18v-2l-3-6h2zm-9 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="rgba(30, 30, 30, 1)"/></svg>'
        };
    }

    async uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://herinitiative.or.tz/her-api/api/blog/add_image.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const imageName = await response.text(); // Assuming the response contains the image name
                const imageUrl = `https://herinitiative.or.tz/her-api/api/blog/images/${imageName}`;
                return {
                    success: true,
                    file: {
                        url: imageUrl
                    }
                };
            } else {
                console.error('Failed to upload image:', response.statusText);
                return { success: false };
            }
        } catch (error) {
            console.error('Error uploading image:', error.message);
            return { success: false };
        }
    }

    render() {
        const container = document.createElement('div');

        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
                const success = await this.uploadFile(file);
                if (success.success) {
                    // Insert image block into the editor
                    this.api.blocks.insert('image', {
                        url: success.file.url,
                        caption: 'Optional caption',
                        withBorder: true,
                        withBackground: true,
                        stretched: true
                    });
                }
            }
        };

        container.appendChild(input);

        return container;
    }
}

export default ImageUpload;
