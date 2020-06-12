// @flow

export class ProcessingManager {
  static trim(source, options) {
    return Promise.resolve(source);
  }

  static reverse(source, options) {
    return Promise.resolve(source);
  }

  static boomerang(source, options) {
    return Promise.resolve(source);
  }

  static getPreviewForSecond(
    source,
    forSecond,
    maximumSize,
    format
  ) {
    return Promise.resolve(source);
  }


  static getTrimmerPreviewImages(
    source,
    startTime,
    endTime,
    step,
    maximumSize,
    format
  ) {
    return Promise.resolve(source);
  }


  static getVideoInfo(source) {
    return Promise.resolve({ duration: 5, size: { height: 854, width: 480 } });
  }

  static compress(source, _options) {
    return Promise.resolve({ source });
  }

  static crop(source, options) {
    return Promise.resolve(source);
  }
}
