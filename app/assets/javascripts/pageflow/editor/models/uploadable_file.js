pageflow.UploadableFile = pageflow.ReusableFile.extend({
  stages: function() {
    return [
      {
        name: 'uploading',
        activeStates: ['uploading'],
        failedStates: ['uploading_failed']
      }
    ].concat(_.result(this, 'processingStages'));
  },

  processingStages: [],

  readyState: 'uploaded'
});