gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDScoreTextObjects1= [];
gdjs.IntroCode.GDScoreTextObjects2= [];
gdjs.IntroCode.GDScoreTextObjects3= [];
gdjs.IntroCode.GDSignObjects1= [];
gdjs.IntroCode.GDSignObjects2= [];
gdjs.IntroCode.GDSignObjects3= [];
gdjs.IntroCode.GDSignArrowObjects1= [];
gdjs.IntroCode.GDSignArrowObjects2= [];
gdjs.IntroCode.GDSignArrowObjects3= [];
gdjs.IntroCode.GDPlatformRightObjects1= [];
gdjs.IntroCode.GDPlatformRightObjects2= [];
gdjs.IntroCode.GDPlatformRightObjects3= [];
gdjs.IntroCode.GDPlatformMiddleObjects1= [];
gdjs.IntroCode.GDPlatformMiddleObjects2= [];
gdjs.IntroCode.GDPlatformMiddleObjects3= [];
gdjs.IntroCode.GDPlatformLeftObjects1= [];
gdjs.IntroCode.GDPlatformLeftObjects2= [];
gdjs.IntroCode.GDPlatformLeftObjects3= [];
gdjs.IntroCode.GDIslandObjects1= [];
gdjs.IntroCode.GDIslandObjects2= [];
gdjs.IntroCode.GDIslandObjects3= [];
gdjs.IntroCode.GDSkeletonObjects1= [];
gdjs.IntroCode.GDSkeletonObjects2= [];
gdjs.IntroCode.GDSkeletonObjects3= [];
gdjs.IntroCode.GDGrass2Objects1= [];
gdjs.IntroCode.GDGrass2Objects2= [];
gdjs.IntroCode.GDGrass2Objects3= [];
gdjs.IntroCode.GDCactus3Objects1= [];
gdjs.IntroCode.GDCactus3Objects2= [];
gdjs.IntroCode.GDCactus3Objects3= [];
gdjs.IntroCode.GDCactus2Objects1= [];
gdjs.IntroCode.GDCactus2Objects2= [];
gdjs.IntroCode.GDCactus2Objects3= [];
gdjs.IntroCode.GDTreeObjects1= [];
gdjs.IntroCode.GDTreeObjects2= [];
gdjs.IntroCode.GDTreeObjects3= [];
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDTitleObjects3= [];
gdjs.IntroCode.GDStartTextObjects1= [];
gdjs.IntroCode.GDStartTextObjects2= [];
gdjs.IntroCode.GDStartTextObjects3= [];
gdjs.IntroCode.GDNewTextObjects1= [];
gdjs.IntroCode.GDNewTextObjects2= [];
gdjs.IntroCode.GDNewTextObjects3= [];
gdjs.IntroCode.GDPrivacy_9595PolicyObjects1= [];
gdjs.IntroCode.GDPrivacy_9595PolicyObjects2= [];
gdjs.IntroCode.GDPrivacy_9595PolicyObjects3= [];
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1= [];
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects2= [];
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects3= [];
gdjs.IntroCode.GDAbout_9595UsObjects1= [];
gdjs.IntroCode.GDAbout_9595UsObjects2= [];
gdjs.IntroCode.GDAbout_9595UsObjects3= [];
gdjs.IntroCode.GDContact_9595UsObjects1= [];
gdjs.IntroCode.GDContact_9595UsObjects2= [];
gdjs.IntroCode.GDContact_9595UsObjects3= [];
gdjs.IntroCode.GDBlogObjects1= [];
gdjs.IntroCode.GDBlogObjects2= [];
gdjs.IntroCode.GDBlogObjects3= [];
gdjs.IntroCode.GDDisclaimerObjects1= [];
gdjs.IntroCode.GDDisclaimerObjects2= [];
gdjs.IntroCode.GDDisclaimerObjects3= [];
gdjs.IntroCode.GDPlatformObjects1= [];
gdjs.IntroCode.GDPlatformObjects2= [];
gdjs.IntroCode.GDPlatformObjects3= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDBackgroundObjects3= [];
gdjs.IntroCode.GDDustParticlesObjects1= [];
gdjs.IntroCode.GDDustParticlesObjects2= [];
gdjs.IntroCode.GDDustParticlesObjects3= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignArrowObjects2Objects = Hashtable.newFrom({"SignArrow": gdjs.IntroCode.GDSignArrowObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SignArrow"), gdjs.IntroCode.GDSignArrowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignArrowObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2dfc4fba-1e2b-4e07-b3f3-3ee9839ab0dd", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects2Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects1});
gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11617932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects2[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11664092);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects1[i].getBehavior("Effect").enableEffect("Hovering", false);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPrivacy_95959595PolicyObjects1Objects = Hashtable.newFrom({"Privacy_Policy": gdjs.IntroCode.GDPrivacy_9595PolicyObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDTerms_95959595_95959595_95959595ConditionsObjects1Objects = Hashtable.newFrom({"Terms___Conditions": gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDAbout_95959595UsObjects1Objects = Hashtable.newFrom({"About_Us": gdjs.IntroCode.GDAbout_9595UsObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDContact_95959595UsObjects1Objects = Hashtable.newFrom({"Contact_Us": gdjs.IntroCode.GDContact_9595UsObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDBlogObjects1Objects = Hashtable.newFrom({"Blog": gdjs.IntroCode.GDBlogObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDisclaimerObjects1Objects = Hashtable.newFrom({"Disclaimer": gdjs.IntroCode.GDDisclaimerObjects1});
gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects1[i].setTextAlignment("center");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 30, 1);
}}

}


{


gdjs.IntroCode.eventsList1(runtimeScene);
}


{


gdjs.IntroCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Privacy_Policy"), gdjs.IntroCode.GDPrivacy_9595PolicyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPrivacy_95959595PolicyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11660532);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPrivacy_9595PolicyObjects1 */
{gdjs.evtTools.window.openURL("https://blog.mrdino.online/p/privacy-policy-game.html", runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDPrivacy_9595PolicyObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPrivacy_9595PolicyObjects1[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Terms___Conditions"), gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDTerms_95959595_95959595_95959595ConditionsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11612644);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1 */
{gdjs.evtTools.window.openURL("https://blog.mrdino.online/p/terms-and-conditions-game.html", runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("About_Us"), gdjs.IntroCode.GDAbout_9595UsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDAbout_95959595UsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11672308);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDAbout_9595UsObjects1 */
{gdjs.evtTools.window.openURL("https://blog.mrdino.online/p/about-us-game.html", runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDAbout_9595UsObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDAbout_9595UsObjects1[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Contact_Us"), gdjs.IntroCode.GDContact_9595UsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDContact_95959595UsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11609140);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDContact_9595UsObjects1 */
{gdjs.evtTools.window.openURL("https://blog.mrdino.online/p/contact-us-game.html", runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDContact_9595UsObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDContact_9595UsObjects1[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blog"), gdjs.IntroCode.GDBlogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDBlogObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11640244);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDBlogObjects1 */
{gdjs.evtTools.window.openURL("https://blog.mrdino.online", runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDBlogObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBlogObjects1[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disclaimer"), gdjs.IntroCode.GDDisclaimerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDDisclaimerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10783452);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDDisclaimerObjects1 */
{gdjs.evtTools.window.openURL("https://blog.mrdino.online/p/disclaimer-game.html", runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDDisclaimerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDDisclaimerObjects1[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDScoreTextObjects1.length = 0;
gdjs.IntroCode.GDScoreTextObjects2.length = 0;
gdjs.IntroCode.GDScoreTextObjects3.length = 0;
gdjs.IntroCode.GDSignObjects1.length = 0;
gdjs.IntroCode.GDSignObjects2.length = 0;
gdjs.IntroCode.GDSignObjects3.length = 0;
gdjs.IntroCode.GDSignArrowObjects1.length = 0;
gdjs.IntroCode.GDSignArrowObjects2.length = 0;
gdjs.IntroCode.GDSignArrowObjects3.length = 0;
gdjs.IntroCode.GDPlatformRightObjects1.length = 0;
gdjs.IntroCode.GDPlatformRightObjects2.length = 0;
gdjs.IntroCode.GDPlatformRightObjects3.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects1.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects2.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects3.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects1.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects2.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects3.length = 0;
gdjs.IntroCode.GDIslandObjects1.length = 0;
gdjs.IntroCode.GDIslandObjects2.length = 0;
gdjs.IntroCode.GDIslandObjects3.length = 0;
gdjs.IntroCode.GDSkeletonObjects1.length = 0;
gdjs.IntroCode.GDSkeletonObjects2.length = 0;
gdjs.IntroCode.GDSkeletonObjects3.length = 0;
gdjs.IntroCode.GDGrass2Objects1.length = 0;
gdjs.IntroCode.GDGrass2Objects2.length = 0;
gdjs.IntroCode.GDGrass2Objects3.length = 0;
gdjs.IntroCode.GDCactus3Objects1.length = 0;
gdjs.IntroCode.GDCactus3Objects2.length = 0;
gdjs.IntroCode.GDCactus3Objects3.length = 0;
gdjs.IntroCode.GDCactus2Objects1.length = 0;
gdjs.IntroCode.GDCactus2Objects2.length = 0;
gdjs.IntroCode.GDCactus2Objects3.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects3.length = 0;
gdjs.IntroCode.GDPrivacy_9595PolicyObjects1.length = 0;
gdjs.IntroCode.GDPrivacy_9595PolicyObjects2.length = 0;
gdjs.IntroCode.GDPrivacy_9595PolicyObjects3.length = 0;
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1.length = 0;
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects2.length = 0;
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects3.length = 0;
gdjs.IntroCode.GDAbout_9595UsObjects1.length = 0;
gdjs.IntroCode.GDAbout_9595UsObjects2.length = 0;
gdjs.IntroCode.GDAbout_9595UsObjects3.length = 0;
gdjs.IntroCode.GDContact_9595UsObjects1.length = 0;
gdjs.IntroCode.GDContact_9595UsObjects2.length = 0;
gdjs.IntroCode.GDContact_9595UsObjects3.length = 0;
gdjs.IntroCode.GDBlogObjects1.length = 0;
gdjs.IntroCode.GDBlogObjects2.length = 0;
gdjs.IntroCode.GDBlogObjects3.length = 0;
gdjs.IntroCode.GDDisclaimerObjects1.length = 0;
gdjs.IntroCode.GDDisclaimerObjects2.length = 0;
gdjs.IntroCode.GDDisclaimerObjects3.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;

gdjs.IntroCode.eventsList3(runtimeScene);
gdjs.IntroCode.GDScoreTextObjects1.length = 0;
gdjs.IntroCode.GDScoreTextObjects2.length = 0;
gdjs.IntroCode.GDScoreTextObjects3.length = 0;
gdjs.IntroCode.GDSignObjects1.length = 0;
gdjs.IntroCode.GDSignObjects2.length = 0;
gdjs.IntroCode.GDSignObjects3.length = 0;
gdjs.IntroCode.GDSignArrowObjects1.length = 0;
gdjs.IntroCode.GDSignArrowObjects2.length = 0;
gdjs.IntroCode.GDSignArrowObjects3.length = 0;
gdjs.IntroCode.GDPlatformRightObjects1.length = 0;
gdjs.IntroCode.GDPlatformRightObjects2.length = 0;
gdjs.IntroCode.GDPlatformRightObjects3.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects1.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects2.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects3.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects1.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects2.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects3.length = 0;
gdjs.IntroCode.GDIslandObjects1.length = 0;
gdjs.IntroCode.GDIslandObjects2.length = 0;
gdjs.IntroCode.GDIslandObjects3.length = 0;
gdjs.IntroCode.GDSkeletonObjects1.length = 0;
gdjs.IntroCode.GDSkeletonObjects2.length = 0;
gdjs.IntroCode.GDSkeletonObjects3.length = 0;
gdjs.IntroCode.GDGrass2Objects1.length = 0;
gdjs.IntroCode.GDGrass2Objects2.length = 0;
gdjs.IntroCode.GDGrass2Objects3.length = 0;
gdjs.IntroCode.GDCactus3Objects1.length = 0;
gdjs.IntroCode.GDCactus3Objects2.length = 0;
gdjs.IntroCode.GDCactus3Objects3.length = 0;
gdjs.IntroCode.GDCactus2Objects1.length = 0;
gdjs.IntroCode.GDCactus2Objects2.length = 0;
gdjs.IntroCode.GDCactus2Objects3.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects3.length = 0;
gdjs.IntroCode.GDPrivacy_9595PolicyObjects1.length = 0;
gdjs.IntroCode.GDPrivacy_9595PolicyObjects2.length = 0;
gdjs.IntroCode.GDPrivacy_9595PolicyObjects3.length = 0;
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects1.length = 0;
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects2.length = 0;
gdjs.IntroCode.GDTerms_9595_9595_9595ConditionsObjects3.length = 0;
gdjs.IntroCode.GDAbout_9595UsObjects1.length = 0;
gdjs.IntroCode.GDAbout_9595UsObjects2.length = 0;
gdjs.IntroCode.GDAbout_9595UsObjects3.length = 0;
gdjs.IntroCode.GDContact_9595UsObjects1.length = 0;
gdjs.IntroCode.GDContact_9595UsObjects2.length = 0;
gdjs.IntroCode.GDContact_9595UsObjects3.length = 0;
gdjs.IntroCode.GDBlogObjects1.length = 0;
gdjs.IntroCode.GDBlogObjects2.length = 0;
gdjs.IntroCode.GDBlogObjects3.length = 0;
gdjs.IntroCode.GDDisclaimerObjects1.length = 0;
gdjs.IntroCode.GDDisclaimerObjects2.length = 0;
gdjs.IntroCode.GDDisclaimerObjects3.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
