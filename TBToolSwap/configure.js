const ID_PREFIX = "com.ollyisonit";
const PREF_PREFIX = "OLLYISONIT_TBTOOLSWAP";

//const CATEGORY_ID = ID_PREFIX + ".tbtoolswap";
const CATEGORY_NAME = "ollyisonit-TBToolSwap";

const TOOL_PREFKEY = PREF_PREFIX + "_CURRENT_TOOL";

const BRUSH = 9;
const PENCIL = 13;
const CUTTER = 25;
const SELECT = 22;

function getCurrentTool() {
  return preferences.getInt(TOOL_PREFKEY, BRUSH);
}

function setCurrentTool(newTool) {
  preferences.setInt(TOOL_PREFKEY, newTool);
}

function switchCurrentTool() {
  if (getCurrentTool() === BRUSH) {
    setCurrentTool(PENCIL);
  } else if (getCurrentTool() === PENCIL) {
    setCurrentTool(BRUSH);
  }
}

function activateCurrentTool() {
  Tools.setCurrentTool(getCurrentTool())
}

function configure(packageFolder, packageName) {
  MessageLog.trace(
    "Package " +
    packageName +
    " configure was called in folder: " +
    packageFolder
  );

  var switchDrawingToolAction = {
    id: ID_PREFIX + ".switchDrawingTool",
    text: "Switch currently active drawing tool",
    checkable: false,
    isEnabled: true,
    onTrigger: function () {
      switchCurrentTool();
      activateCurrentTool();
    },
  };
  ScriptManager.addAction(switchDrawingToolAction);

  ScriptManager.addShortcut({
    id: switchDrawingToolAction.id,
    text: switchDrawingToolAction.text,
    longDesc:
      "Switches the currently active drawing tool from brush to pencil or vice-versa",
    order: "256",
    responder: "ScriptManagerResponder",
    slot: "onTriggerScriptAction(QString)",
    itemParameter: switchDrawingToolAction.id,
    categoryId: CATEGORY_NAME,
    categoryText: CATEGORY_NAME,
  });


  var activateDrawingToolAction = {
    id: ID_PREFIX + ".activateDrawingTool",
    text: "Activate currently active drawing tool",
    checkable: false,
    isEnabled: true,
    onTrigger: function () {
      activateCurrentTool();
    },
  };
  ScriptManager.addAction(activateDrawingToolAction);

  ScriptManager.addShortcut({
    id: activateDrawingToolAction.id,
    text: activateDrawingToolAction.text,
    longDesc:
      "Activates the currently active drawing tool (either brush or pencil)",
    order: "256",
    responder: "ScriptManagerResponder",
    slot: "onTriggerScriptAction(QString)",
    itemParameter: activateDrawingToolAction.id,
    categoryId: CATEGORY_NAME,
    categoryText: CATEGORY_NAME,
  });


  var switchToCutterAction = {
    id: ID_PREFIX + ".switchToCutter",
    text: "Fully switch to cutter tool",
    checkable: false,
    isEnabled: true,
    onTrigger: function () {
      Tools.setCurrentTool(CUTTER)
    },
  };
  ScriptManager.addAction(switchToCutterAction);

  ScriptManager.addShortcut({
    id: switchToCutterAction.id,
    text: switchToCutterAction.text,
    longDesc:
      "Switch to cutter tool without any alt-key interference.",
    order: "256",
    responder: "ScriptManagerResponder",
    slot: "onTriggerScriptAction(QString)",
    itemParameter: switchToCutterAction.id,
    categoryId: CATEGORY_NAME,
    categoryText: CATEGORY_NAME,
  });


  var switchToSelectAction = {
    id: ID_PREFIX + ".switchToSelect",
    text: "Fully switch to select tool",
    checkable: false,
    isEnabled: true,
    onTrigger: function () {
      Tools.setCurrentTool(SELECT)
    },
  };
  ScriptManager.addAction(switchToSelectAction);

  ScriptManager.addShortcut({
    id: switchToSelectAction.id,
    text: switchToSelectAction.text,
    longDesc:
      "Switch to select tool without any alt-key interference.",
    order: "256",
    responder: "ScriptManagerResponder",
    slot: "onTriggerScriptAction(QString)",
    itemParameter: switchToSelectAction.id,
    categoryId: CATEGORY_NAME,
    categoryText: CATEGORY_NAME,
  });

}
exports.configure = configure;
