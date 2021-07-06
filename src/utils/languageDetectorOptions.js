const languageDetectorOptions = {
  // order and from where user language should be detected
  order: ['path', 'cookie', 'htmlTag', 'localStorage'],

  // cache user language on
  caches: ['cookie'],
};

export default languageDetectorOptions;
