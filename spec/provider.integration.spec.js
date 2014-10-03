var testUtil = require('freedom/spec/util');
testUtil.setSpecBase(window.location.origin + "/scripts/");
testUtil.setCoreProviders([
  require('freedom/providers/core/core.unprivileged'),
  require('freedom/providers/core/logger.console'),
  require('freedom/providers/core/peerconnection.unprivileged'),
  require('freedom/providers/core/websocket.unprivileged'),
  require('../providers/storage')
]);
testUtil.setModuleStrategy(require('freedom/src/link/worker'), '/scripts/freedom-for-chrome.js');

var isolated = "providers/storage/isolated/storage.isolated.json";
var shared = "providers/storage/shared/storage.shared.json";
var indexdb = "providers/storage/indexeddb/storage.indexeddb.json";

describe("integration: storage.isolated.json",
    require('freedom/spec/providers/storage/storage.integration.src').bind(this, isolated));
describe("integration: storage.shared.json",
    require('freedom/spec/providers/storage/storage.integration.src').bind(this, shared, false));
describe("integration: storage.indexeddb.json",
    require('freedom/spec/providers/storage/storage.integration.src').bind(this, indexdb));

describe("integration: transport.webrtc.json",
    require('freedom/spec/providers/transport/transport.integration.src').bind(this,
    "providers/transport/webrtc/transport.webrtc.json"));