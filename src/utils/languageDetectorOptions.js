const languageDetectorOptions = {
  // order and from where user language should be detected
  order: ['cookie', 'htmlTag', 'localStorage', 'path'],

  // cache user language on
  caches: ['cookie'],
};

export default languageDetectorOptions;
