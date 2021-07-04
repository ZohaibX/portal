import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://29a6249ac57c40c18b8dc93c0bdfc268@sentry.io/5171982"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
