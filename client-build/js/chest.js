define(["entity"],function(e){var t=e.extend({init:function(e,t){this._super(e,Types.Entities.CHEST)},getSpriteName:function(){return"chest"},isMoving:function(){return!1},open:function(){this.open_callback&&this.open_callback()},onOpen:function(e){this.open_callback=e}});return t});