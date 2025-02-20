export const shared = {
  users: {
    authoringUser: {
      //// User for login into authoring app
      username: 'cha\\wf_reviewer@cha.rbxd.ds',
    },
    noaccessUser: {
      username: 'cha\\wf_noaccess'
    },
    subscriberUser: {
      //// User for login into subscriber app
      username: 'ccTestUser@icis.com',
    }
  },
  environment: {
    image: {
      image_testHarness: {
        systest: 'https://authoring.systest.cha.rbxd.ds/mfe/image/authoring',
        staging: 'https://authoring.staging.cha.rbxd.ds/mfe/image/authoring',
        performance: 'https://authoring.performance.cha.rbxd.ds/mfe/image/authoring',
        integration: 'https://authoring.integration.cha.rbxd.ds/mfe/image/authoring'
      },
      authoring: {
        systest: 'https://authoring.systest.cha.rbxd.ds/intelligence/',
        staging: 'https://authoring.staging.cha.rbxd.ds/intelligence/',
        performance: 'https://authoring.performance.cha.rbxd.ds/intelligence/',
        integration: 'https://authoring.integration.cha.rbxd.ds/intelligence/',
      }
    },
    imagePilet_testHarness: {
      systest: 'https://authoring.systest.cha.rbxd.ds/mfe/image-pilet/image-picker',
      staging: 'https://authoring.staging.cha.rbxd.ds/mfe/image-pilet/image-picker',
      performance: 'https://authoring.performance.cha.rbxd.ds/mfe/image-pilet/image-picker',
    },
    podcast_testHarness: {
      systest: 'https://authoring.systest.cha.rbxd.ds/mfe/podcast/authoring',
      staging: 'https://authoring.staging.cha.rbxd.ds/mfe/podcast/authoring',
      performance: 'https://authoring.performance.cha.rbxd.ds/mfe/podcast/authoring',
      integration: 'https://authoring.integration.cha.rbxd.ds/mfe/podcast/authoring'
    },
    video_testHarness: {
      systest: 'https://authoring.systest.cha.rbxd.ds/mfe/video/authoring',
      staging: 'https://authoring.staging.cha.rbxd.ds/mfe/video/authoring',
      performance: 'https://authoring.performance.cha.rbxd.ds/mfe/video/authoring',
      integration: 'https://authoring.integration.cha.rbxd.ds/mfe/video/authoring'
    },
    subscriber: {
      systest: 'https://subscriber.systest.genesis.cha.rbxd.ds/intelligence/',
      staging: 'https://subscriber.staging.genesis.cha.rbxd.ds/intelligence/',
      performance: 'https://subscriber.performance.genesis.cha.rbxd.ds/intelligence/',
      integration: 'https://subscriber.integration.genesis.cha.rbxd.ds/intelligence/'
    }
  },
  errorMessageForUnsupportFile: 'The image you uploaded is invalid or unsupported.',
  errorMessageToUploadJPG_PNGFile: 'Please upload a JPG or PNG file below and try again.',
  errorMessageexceedSize: 'The image you uploaded exceeds the size of 1 MB.',
  errorMessageTouploadvalidsize: 'Please upload a valid image with a size below the one recommended.',
  validImageWarningMessage1: 'The image you uploaded is below 600px wide and might appear pixelated.',
  validImageWarningMessage2: 'We recommend uploading a higher-resolution image for the best results.',
  ImageHeader: 'Test Title for Image Card',
  ImageFooter: 'Test Footnote for Image Card',
  InfogramHeader: 'Test Title for Infogram Card',
  InfogramFooter: 'Test Footnote for Infogram Card',
  VideoHeader: 'Test Title for Video Card',
  VideoFooter: 'Test Footnote for Video Card',
  publishSuccessMessage: "The page has been successfully published to the platform.",
  imageLargesize: 'cypress/fixtures/test_images/image-largesize.jpg',
  imageValid: 'cypress/fixtures/test_images/image-icis.png',
  infogramURL_1: 'https://infogram.com/1p1j5e6r65lqvnfmy6rmj7l666a6qlrv1lr',
  infogramURL_2: 'https://infogram.com/1pxde7n69yqj5niq1vekde2mg5unp3z7612',
  infogramURL_3: 'https://infogram.com/asia-r-pet-prices-1hzj4o3wd10lo4p',
  WrongInfogramURL_2: 'https://infogram.com/1p1j5e6r65lqvnfmy6rmj7l666a6qlrv1lr00',
  WrongInfogramURL_1: 'https://infogram.net/europe-chemicals-and-hydrogen',
  errorMessageforWrongURL_1: 'The URL you entered is not a valid Infogram url, please enter a valid URL and try again.',
  errorMessageForTypo: 'The URL you entered is not a valid one, please check the URL for typo and try again.',
  videoURL: 'https://video.icis.com/watch/y77vAdtXAHyg82UHRCcLeg',
  WrongVideoURL_1: 'https://video.icis.com/watch/AAvvFKy',
  WrongVideoURL_2: 'https://video.icis.com/watch/AAvvFKydJn3ojecWY8R1JT23',
  errorMessageforWrongURLForVideo_1: 'The URL you entered is not a valid Vidyard url, please enter a valid URL and try again.',
  adhocTableHeader: 'Test Title for Adhoc Table Card',
  adhocTableFooter: 'Test Footnote for Adhoc Table Card',
  podcastHeader: 'Test Title for Podcast Card',
  podcastFooter: 'Test Footnote for Podcast Card',
  hyperlinkurl: 'https://video.icis.com/watch/y77vAdtXAHyg82UHRCcLeg',
  podcastUrl: '<iframe src="https://podomatic.com/embed/html5/episode/10549793" height="208" width="504"frameborder="0" marginheight="0" marginwidth="0" scrolling="no" allowfullscreen></iframe>',
  WrongPodcastURL_1: '<iframe src="https://podomatic.com>',
  errorMessageforWrongPodcastURL_1: 'The URL you entered is not a valid Podomatic url, please enter a valid URL and try again.',
};