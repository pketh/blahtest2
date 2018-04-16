define(["jquery","app"],function(e,t){var n,r,i=function(){e(document).ready(function(){n=new t,n.center(),Detect.isWindows()&&e("body").addClass("windows"),Detect.isOpera()&&e("body").addClass("opera"),e("body").click(function(t){e("#parchment").hasClass("credits")&&n.toggleCredits(),e("#parchment").hasClass("about")&&n.toggleAbout()}),e(".barbutton").click(function(){e(this).toggleClass("active")}),e("#chatbutton").click(function(){e("#chatbutton").hasClass("active")?n.showChat():n.hideChat()}),e("#helpbutton").click(function(){n.toggleAbout()}),e("#achievementsbutton").click(function(){n.toggleAchievements(),n.blinkInterval&&clearInterval(n.blinkInterval),e(this).removeClass("blink")}),e("#instructions").click(function(){n.hideWindows()}),e("#playercount").click(function(){n.togglePopulationInfo()}),e("#population").click(function(){n.togglePopulationInfo()}),e(".clickable").click(function(e){e.stopPropagation()}),e("#toggle-credits").click(function(){n.toggleCredits()}),e("#create-new span").click(function(){n.animateParchment("loadcharacter","confirmation")}),e(".delete").click(function(){n.storage.clear(),n.animateParchment("confirmation","createcharacter")}),e("#cancel span").click(function(){n.animateParchment("confirmation","loadcharacter")}),e(".ribbon").click(function(){n.toggleAbout()}),e("#nameinput").bind("keyup",function(){n.toggleButton()}),e("#previous").click(function(){var t=e("#achievements");if(n.currentPage===1)return!1;n.currentPage-=1,t.removeClass().addClass("active page"+n.currentPage)}),e("#next").click(function(){var t=e("#achievements"),r=e("#lists"),i=r.children("ul").length;if(n.currentPage===i)return!1;n.currentPage+=1,t.removeClass().addClass("active page"+n.currentPage)}),e("#notifications div").bind(TRANSITIONEND,n.resetMessagesPosition.bind(n)),e(".close").click(function(){n.hideWindows()}),e(".twitter").click(function(){var t=e(this).attr("href");return n.openPopup("twitter",t),!1}),e(".facebook").click(function(){var t=e(this).attr("href");return n.openPopup("facebook",t),!1});var r=n.storage.data;r.hasAlreadyPlayed&&r.player.name&&r.player.name!==""&&(e("#playername").html(r.player.name),e("#playerimage").attr("src",r.player.image)),e(".play div").click(function(t){var r=e("#nameinput").val(),i=e("#playername").html(),s=r||i;n.tryStartingGame(s)}),document.addEventListener("touchstart",function(){},!1),e("#resize-check").bind("transitionend",n.resizeUi.bind(n)),e("#resize-check").bind("webkitTransitionEnd",n.resizeUi.bind(n)),e("#resize-check").bind("oTransitionEnd",n.resizeUi.bind(n)),log.info("App initialized."),s()})},s=function(){require(["game"],function(t){var i=document.getElementById("entities"),s=document.getElementById("background"),o=document.getElementById("foreground"),u=document.getElementById("chatinput");r=new t(n),r.setup("#bubbles",i,s,o,u),r.setStorage(n.storage),n.setGame(r),n.isDesktop&&n.supportsWorkers&&r.loadMap(),r.onGameStart(function(){n.initEquipmentIcons()}),r.onDisconnect(function(t){e("#death").find("p").html(t+"<em>Please reload the page.</em>"),e("#respawn").hide()}),r.onPlayerDeath(function(){e("body").hasClass("credits")&&e("body").removeClass("credits"),e("body").addClass("death")}),r.onPlayerEquipmentChange(function(){n.initEquipmentIcons()}),r.onPlayerInvincible(function(){e("#hitpoints").toggleClass("invincible")}),r.onNbPlayersChange(function(t,n){var r=function(t){e("#instance-population").find("span:nth-child(2)").text(t),e("#playercount").find("span:nth-child(2)").text(t)},i=function(t){e("#world-population").find("span:nth-child(2)").text(t)};e("#playercount").find("span.count").text(t),e("#instance-population").find("span").text(t),t==1?r("player"):r("players"),e("#world-population").find("span").text(n),n==1?i("player"):i("players")}),r.onAchievementUnlock(function(e,t,r){n.unlockAchievement(e,t)}),r.onNotification(function(e){n.showMessage(e)}),n.initHealthBar(),e("#nameinput").val(""),e("#chatbox").attr("value",""),r.renderer.mobile||r.renderer.tablet?e("#foreground").bind("touchstart",function(e){n.center(),n.setMouseCoordinates(e.originalEvent.touches[0]),r.click(),n.hideWindows()}):e("#foreground").click(function(e){n.center(),n.setMouseCoordinates(e),r&&r.click(),n.hideWindows()}),e("body").unbind("click"),e("body").click(function(t){var i=!1;e("#parchment").hasClass("credits")&&(r.started?(n.closeInGameCredits(),i=!0):n.toggleCredits()),e("#parchment").hasClass("about")&&(r.started?(n.closeInGameAbout(),i=!0):n.toggleAbout()),r.started&&!r.renderer.mobile&&r.player&&!i&&r.click()}),e("#respawn").click(function(t){r.audioManager.playSound("revive"),r.restart(),e("body").removeClass("death")}),e(document).mousemove(function(e){n.setMouseCoordinates(e),r.started&&r.movecursor()}),e(document).keydown(function(t){var r=t.which;r===13&&(e("#chatbox").hasClass("active")?n.hideChat():n.showChat())}),e("#chatinput").keydown(function(t){var i=t.which,s=e("#chatinput");if(i===13)return s.val().replace(/\s/g,"").length?(r.player&&r.say(s.val()),n.hideChat(),e("#foreground").focus(),!1):(n.hideChat(),!1);if(i===27)return n.hideChat(),!1}),e("#nameinput").keypress(function(t){var r=e("#nameinput"),i=r.val();if(t.keyCode===13)return i!==""?(n.tryStartingGame(i,function(){r.blur()}),!1):!1}),e("#mutebutton").click(function(){r.audioManager.toggle()}),e(document).bind("keydown",function(t){var i=t.which,s=e("#chatinput");if(e("#chatinput:focus").size()==0&&e("#nameinput:focus").size()==0){if(i===13&&r.ready)return s.focus(),!1;if(i===32)return!1;if(i===70)return!1;if(i===27)return n.hideWindows(),_.each(r.player.attackers,function(e){e.stop()}),!1;if(i===65)return!1}else if(i===13&&r.ready)return s.focus(),!1}),r.renderer.tablet&&e("body").addClass("tablet")})};i()});