import {browser} from 'pageflow/frontend';

describe('pageflow.browser.Agent', function() {
  var Agent = browser.Agent;
  describe ('#matchesSafari11AndAbove', function() {
    it('returns false for Safari 10', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3)' +
        'AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8'
      );

      expect(agent.matchesSafari11AndAbove()).toBe(false);
    });

    it('returns true for Safari 11', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) ' +
        'AppleWebKit/604.1.28 (KHTML, like Gecko) Version/11.0 Safari/604.1.28'
      );

      expect(agent.matchesSafari11AndAbove()).toBe(true);
    });

    it('returns true for Safari 12', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) ' +
        'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15'
      );

      expect(agent.matchesSafari11AndAbove()).toBe(true);
    });

    it('returns false for anything only containing a matching version string', function() {
      var agent = new Agent(
        'Version/11.0 something else'
      );

      expect(agent.matchesSafari11AndAbove()).toBe(false);
    });

    it('returns false for Chrome', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
      );

      expect(agent.matchesSafari11AndAbove()).toBe(false);
    });

    it('returns false for Edge', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
      );

      expect(agent.matchesSafari11AndAbove()).toBe(false);
    });
  });

  describe('#matchesDesktopSafari', function() {
    it('returns true for Safari 12', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) ' +
        'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15'
      );

      expect(agent.matchesDesktopSafari()).toBe(true);
    });

    it('returns false for Safari on iPhone', function() {
      var agent = new Agent(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) '+
        'AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1'
      );

      expect(agent.matchesDesktopSafari()).toBe(false);
    });
  });
});
