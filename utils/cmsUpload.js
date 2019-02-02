import tus from 'tus-js-client';

export default class cmsUpload {
  constructor(projectId, writeKey) {
    this.projectId = projectId;
    this.writeKey = writeKey;
  }

  upload(file) {
    return new Promise((resolve, reject) => {
      const upload = new tus.Upload(file, {
        endpoint: `https://${this.projectId}.evius.id/media/upload`,
        resume: true,
        chunkSize: Infinity,
        retryDelays: [0, 1000, 3000, 5000],
        metadata: {
          filename: file.name,
          filetype: file.type,
        },
        removeFingerprintOnSuccess: true,
        headers: {
          authorization: this.writeKey,
        },
        onError(err) {
          if (err.originalRequest) {
            if (window.confirm(`Failed because: ${err}\nDo you want to retry?`)) {
              upload.start();
            }
          } else {
            window.alert(`Failed because: ${err}`);
            reject(err);
          }
        },
        onProgress(bytesUploaded, bytesTotal) {
        },
        onSuccess() {
          const url = upload.url.split('/upload');
          const extension = upload.file.type.includes('image') ? upload.file.type.split('/')[1] : upload.file.type;
          // thumbnail =  [
          //   {
          //     "url":"https://5beae63a199dae50f82c4333.evius.id/media/1327f120-faa6-11e8-9b40-ef24a4c8503c/jpeg",
          //     "originalName":"residential.jpg",
          //     "extension":"jpeg",
          //     "name":"1327f120-faa6-11e8-9b40-ef24a4c8503c"
          //   }
          // ]
          const result = [{
            url: `${url[0] + url[1]}/${extension}`,
            originalName: upload.file.name,
            extension,
            name: url[1].replace('/', ''),
          }]
          // console.log(upload)
          resolve(JSON.stringify(result));
        },
      });
      upload.start();
    });
  }
}
