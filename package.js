Package.describe({
  name: 'obonyojimmy:opentelemetry-plugin-meteor',
  version: '0.0.1',
  summary: 'Meteor specific package that auto instrument your meteor app for open-telementry metrics and tracing.',
  git: 'https://github.com/obonyojimmy/meteor-opentelemetry-plugin.git',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.8');
  api.use(['ecmascript', 'tmeasday:check-npm-versions']);
  
  // Main package entrypoint files
  api.mainModule('client/main.js', 'client');
  api.mainModule('server/main.js', 'server');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('opentelemetry-plugin');
  api.mainModule('tests/opentelemetry-plugin-tests.js');
});
