!function(e){e.entwine("ss",function(e){e(".gridfield-help-button-dialog").entwine({loadDialog:function(e){var i=this.addClass("loading").children(".ui-dialog-content").empty();e.done(function(e){i.html(e).parent().removeClass("loading")})}}),e(".ss-gridfield .gridfield-help-button").entwine({onclick:function(){var i=e("<div></div>").appendTo("body").dialog({modal:!1,resizable:!0,width:600,height:600,close:function(){e(this).dialog("destroy").remove()}});return i.parent().addClass("gridfield-help-button-dialog").loadDialog(e.get(this.prop("href"))),i.data("grid",this.closest(".ss-gridfield")),!1}}),e(".ss-gridfield-treeView--toggle").entwine({onclick:function(){return!1}}),e(".ss-gridfield.ss-gridfield-add-inline-extended--table").entwine({reload:function(e,i){var d=this,t=d.find("tbody:first").find(".ss-gridfield-inline-new-extended--row").detach();this._super(e,function(){t.length&&(t.appendTo(d.find("tbody:first")),d.find("tbody:first").children(".ss-gridfield-no-items:first").hide()),i&&i.apply(d,arguments)})},onaddnewinlinextended:function(i){if(i.target==this[0]){var d=window.tmpl,t=this.find(".ss-gridfield-add-inline-extended--template:last"),n=this.data("add-inline-num")||1;d.cache[this[0].id+"-ss-gridfield-add-inline-extended--template"]=d(t.html());var s=e(d(this[0].id+"-ss-gridfield-add-inline-extended--template",{num:n}));this.find("tbody:first").append(s),this.find("tbody:first").children(".ss-gridfield-no-items:first").hide(),this.data("add-inline-num",n+1),s.find("input:first").focus()}}}),e(".ss-gridfield-add-new-inline-extended--button").entwine({onclick:function(){return this.getGridField().trigger("addnewinlinextended"),!1}}),e(".ss-gridfield-inline-new-extended--row-delete").entwine({onclick:function(){return confirm(ss.i18n._t("GridFieldExtensions.CONFIRMDEL","Are you sure you want to delete this?"))&&this.parents(".ss-gridfield-inline-new-extended--row:first").remove(),!1}}),e(".ss-gridfield-editable-row--toggle").entwine({onclick:function(){var i=this,d=i.parents("td:first"),t=d.data("link"),n=i.parents("tr:first");if(t&&!i.hasClass("ss-gridfield-editable-row--toggle_loaded"))n.addClass("ss-gridfield-editable-row--loading"),e.ajax({url:t,dataType:"html",success:function(d){var t=e(d);i.addClass("ss-gridfield-editable-row--toggle_loaded ss-gridfield-editable-row--toggle_open"),n.removeClass("ss-gridfield-editable-row--loading"),n.after(t),t.find("input:first").focus()},error:function(){alert(ss.i18n._t("GRIDFIELD.ERRORINTRANSACTION")),n.removeClass("ss-gridfield-editable-row--loading")}});else if(t){var s=n.next();s.hasClass("ss-gridfield-editable-row--row")&&s.data("id")==n.data("id")&&s.data("class")==n.data("class")&&(i.toggleClass("ss-gridfield-editable-row--toggle_open"),i.hasClass("ss-gridfield-editable-row--toggle_open")?s.removeClass("ss-gridfield-editable-row--row_hide"):s.addClass("ss-gridfield-editable-row--row_hide"))}return!1}});var i;e(".ss-gridfield-range-slider--field.rangeslider.has-rangeslider").entwine({onchange:function(e){if(e.timeStamp!=i){i=e.timeStamp;var d=this.parents(".ss-gridfield-range-slider:first"),t=d.find(".ss-gridfield-range-slider--button");t.length&&t.click()}}})})}(jQuery);