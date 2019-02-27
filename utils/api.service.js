import axios from 'axios'
import tus from 'tus-js-client'

const BaseUrl = `https://${process.env.PROJECTID}.evius.id/api/`
const rajaOngkir = 'http://rajaongkir.apps.evius.id/'
const writeApi = `Bearer ${process.env.WRITE}`
const readApi = `Bearer ${process.env.READ}`
const ApiService = {

  get (url, qs) {
    return axios.get(`${BaseUrl}${url}${qs}`, {
      headers: {
        authorization: readApi
      }
    })
  },
  getDestination (type, url, qs) {
    if (type === 'get') {
      return axios.get(`${rajaOngkir}${url}${qs}`)
    }
    return axios.post(`${rajaOngkir}${url}`, qs)
  },
  post (url, data) {
    return axios.post(`${BaseUrl}${url}`, data, {
      headers: {
        authorization: writeApi
      }
    })
  },
  upload (file) {
    return new Promise((resolve, reject) => {
      const upload = new tus.Upload(file, {
        endpoint: `https://${process.env.PROJECTID}.evius.id/media/upload`,
        resume: true,
        chunkSize: Infinity,
        retryDelays: [0, 1000, 3000, 5000],
        metadata: {
          filename: file.name,
          filetype: file.type
        },
        removeFingerprintOnSuccess: true,
        headers: {
          authorization: writeApi
        },
        onError (err) {
          if (err.originalRequest) {
            if (window.confirm(`Failed because: ${err}\nDo you want to retry?`)) {
              upload.start()
            }
          } else {
            window.alert(`Failed because: ${err}`)
            reject(err)
          }
        },
        onProgress (bytesUploaded, bytesTotal) {
        },
        onSuccess () {
          const url = upload.url.split('/upload')
          const extension = upload.file.type.includes('image') ? upload.file.type.split('/')[1] : upload.file.type
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
            name: url[1].replace('/', '')
          }]
          // console.log(upload)
          resolve(JSON.stringify(result))
        }
      })
      upload.start()
    })
  }
}

export default ApiService

export const ContentService = {
  get (ContentId, qs = '') {
    if (qs) {
      let query = '?'
      Object.keys(qs).forEach(key => {
        query = `${query}${key}=${qs[key]}`
      })
      return ApiService.get(`${ContentId}`, `${query}`)
    }
    return ApiService.get(`${ContentId}`, `${qs}`)
  },
  getDestination (type, url, qs = '') {
    if (qs && type === 'get') {
      let query = '?'
      Object.keys(qs).forEach(key => {
        query = `${query}${key}=${qs[key]}&`
      })
      return ApiService.getDestination(type, url, query)
    }
    return ApiService.getDestination(type, url, qs)
  },
  post (ContentId, data) {
    return ApiService.post(`${ContentId}`, data)
  },
  upload (file) {
    return ApiService.upload(file)
  }
}
