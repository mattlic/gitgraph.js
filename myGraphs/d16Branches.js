var graphConfig = new GitGraph.Template({
 // colors: ["#9993FF", "#47E8D4", "#6BDB52", "#F85BB5", "#FFA657", "#F85BB5"],
  colors: ["#F85BB5", "#F85BB5", "#F85BB5", "#F85BB5", "#6BDB52", "#F85BB5", "#FFA657", "#F85BB5", "#47E8D4"],
  branch: {
    color: "#000000",
    lineWidth: 3,
    spacingX: 60,
    mergeStyle: "straight",
    showLabel: true, // display branch names on graph
    labelFont: "normal 16pt Arial",
    labelRotation: 0
  },
  commit: {
    spacingY: -30,
    dot: {
      size: 8,
      strokeColor: "#000000",
      strokeWidth: 4
    },
    tag: {
      font: "normal 10pt Arial",
      color: "yellow"
    },
    message: {
      color: "black",
      font: "normal 12pt Arial",
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
    }
  },
  arrow: {
    size: 8,
    offset: 3
  }
});

var config = {
  template: graphConfig,
  mode: "extended",
  orientation: "horizontal"
};

var bugFixCommit = {
  messageAuthorDisplay: false,
  messageBranchDisplay: false,
  messageHashDisplay: false,
  message: "Bug fix commit(s)"
};

var stabilizationCommit = {
  messageAuthorDisplay: false,
  messageBranchDisplay: false,
  messageHashDisplay: false,
  message: "Release stabilization commit(s)"
};

// You can manually fix columns to control the display.
var topicFeatureCol = 0;
var featureCol = 1;
var teamCol = 2;
var topicMasterCol = 3;
var masterCol = 4;
var topicStageCol = 5;
var stageCol = 6;
var relTopic = 7;
var releaseCol = 8;

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
  name: "master",
  column: masterCol
});
master.commit("Initial commit");

master.commit({
  messageDisplay: false,
  message: "1"
});


var stage_16_0 = gitgraph.branch({
  parentBranch: master,
  name: "16.0stg",
  column: stageCol
});
stage_16_0.commit({
  message: "Start 16.0 Preview builds",
  // tag: "d16.0 Preview 1",
  tagColor: 'gray'
});

//stage_16_0.commit({
//  messageDisplay: false
//});

// stage_16_0.merge(master);

master.commit({
  messageDisplay: false,
  message: "2"
});

//var feature1 = gitgraph.branch({
//  parentBranch: master,
//  name: "topic branch",
//  column: teamCol
//});

stage_16_0.commit({
  messageDisplay: false
});

var release_16_0 = gitgraph.branch({
  parentBranch: stage_16_0,
  name: "rel/16.0",
  column: releaseCol
});

//feature1.commit("A feature to go into a futre release").commit({
//  messageDisplay: false
//});

//feature1.merge(master);


//stage_16_0.commit({
//  messageDisplay: false
//});

var topicStage1 = gitgraph.branch({
  parentBranch: stage_16_0,
  name: "topic branch",
  column: topicStageCol
});

topicStage1.commit("A feature to go into next Preview").commit({
  messageDisplay: false
});

//stage_16_0.commit({
//  messageDisplay: false
//});

release_16_0.commit({
  message: "16.0 Preview 1 candiates",
  tagColor: 'gray',
  messageDisplay: false
});

topicStage1.merge(stage_16_0);

var feature1 = gitgraph.branch({
  parentBranch: release_16_0,
  name: "topic branch",
  column: relTopic
});

master.commit({
  messageDisplay: false,
  message: "3"
});


feature1.commit({
  messageDisplay: false,
  message: "100"
});

feature1.commit({
  messageDisplay: false,
  message: "200"
});

feature1.merge(release_16_0)

var featureNet = gitgraph.branch({
  parentBranch: master,
  name: "topic branch",
  column: featureCol
});

featureNet.commit({
  messageDisplay: false
});

featureNet.commit({
  messageDisplay: false
});

//master.commit({
//  messageDisplay: false
//});

var topicFeature1 = gitgraph.branch({
  parentBranch: featureNet,
  name: "topic branch",
  column: topicFeatureCol
});

topicFeature1.commit({
  messageDisplay: false
});

featureNet.commit({
  messageDisplay: false
});

master.commit({
  messageDisplay: false
});

topicFeature1.commit({
  messageAuthorDisplay: false
});

topicFeature1.merge(featureNet);

var topicMaster1 = gitgraph.branch({
  parentBranch: master,
  name: "topic branch",
  column: topicMasterCol
});


topicMaster1.commit({
  messageDisplay: false
});

release_16_0.commit({
  messageDisplay: false
});


master.commit({
  messageDisplay: false
});


topicMaster1.commit({
  messageDisplay: false
});

stage_16_0.commit({
  messageDisplay: false
});

//master.merge(topicMaster1);


//topicMaster1.commit({
//  messageDisplay: false
//});

topicMaster1.merge(master);

master.commit({
  messageDisplay: false
});

var feature2 = gitgraph.branch({
  parentBranch: master,
  name: "topic branch",
  column: teamCol
});

master.commit({
  messageDisplay: false
});

feature2.commit("A feature to go into a futre release").commit({
  messageDisplay: false
});

var topicMaster2 = gitgraph.branch({
  parentBranch: master,
  name: "topic branch",
  column: topicMasterCol
});

stage_16_0.commit({
  messageDisplay: false
});

topicMaster2.commit({
  messageDisplay: false
});

stage_16_0.merge(master);

stage_16_0.merge(release_16_0);

topicMaster2.merge(master);

release_16_0.commit({
  messageDisplay: false
});

master.commit({
  messageDisplay: false
});

featureNet.commit({
  messageDisplay: false
});


var stage_16_1 = gitgraph.branch({
  parentBranch: master,
  name: "16.1stg",
  column: stageCol
});
stage_16_1.commit({
  message: "Start 16.1 Preview builds",
  // tag: "d16.1 Preview 1",
  tagColor: 'gray'
});

stage_16_1.commit({
  messageDisplay: false
});

feature2.commit({
  messageDisplay: false
});

feature2.merge(master);

featureNet.commit({
  messageDisplay: false
});

var release_16_1 = gitgraph.branch({
  parentBranch: stage_16_1,
  name: "rel/16.1",
  column: releaseCol
});
release_16_1.commit({
  message: "16.1 Preview 1 candidates",
  tagColor: 'gray',
  messageDisplay: false
});

release_16_1.commit({
  messageDisplay: false
});

featureNet.merge(master);

stage_16_1.commit({
  messageDisplay: false
});

release_16_1.commit({
  messageDisplay: false
});

master.commit({
  messageDisplay: false
});

