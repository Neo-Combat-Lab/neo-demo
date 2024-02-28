module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      formidable: {
        maxFileSize: 5 * 1024 * 1024 * 1024, // Sets the file size limit to 5GB
      },
      multipart: true,
    },
  },
];
