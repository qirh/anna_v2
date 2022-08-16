module.exports = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/1hnbYOR3etL_mqk0Lh5x_YoFjrV44W2WG',
        permanent: true,
      },
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1hnbYOR3etL_mqk0Lh5x_YoFjrV44W2WG',
        permanent: true,
      },
      {
        source: '/imdb',
        destination: 'https://www.imdb.com/name/nm7706290',
        permanent: true,
      },
    ]
  },
}