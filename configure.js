const ID_PREFIX = "com.dninosores";
const PREF_PREFIX = "DNINOSORES_TBTOOLSWAP";

//const CATEGORY_ID = ID_PREFIX + ".tbtoolswap";
const CATEGORY_NAME = "Dninosores TBToolSwap";

const TOOL_PREFKEY = PREF_PREFIX + "_CURRENT_TOOL";

const BRUSH = 9;
const PENCIL = 13;

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
  print("Activating tool " + getCurrentTool())
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

}
exports.configure = configure;
