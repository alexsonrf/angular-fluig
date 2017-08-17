window.CKEDITOR_BASEPATH = "/resources/style-guide/";
var FLUIGCTemplates = {};

FLUIGCTemplates["addtocalendar-basic"] = "<script type=\"text/template\" class=\"template_add_calendar_basic\">\n" +
   "    <a href=\"#\" class=\"addeventatc {{theme}}\">\n" +
   "        {{#html}}{{{html}}}{{/html}}{{^html}}{{labelText}}{{/html}}\n" +
   "        <span class=\"start\">{{start}}</span>\n" +
   "        <span class=\"end\">{{end}}</span>\n" +
   "        <span class=\"timezone\">{{timezone}}</span>\n" +
   "        <span class=\"title\">{{title}}</span>\n" +
   "        <span class=\"description\">{{{description}}}</span>\n" +
   "        <span class=\"location\">{{location}}</span>\n" +
   "        <span class=\"organizer\">{{organizer}}</span>\n" +
   "        <span class=\"organizer_email\">{{organizer_email}}</span>\n" +
   "        <span class=\"facebook_event\">{{facebook_event}}</span>\n" +
   "        <span class=\"all_day_event\">{{all_day_event}}</span>\n" +
   "        <span class=\"date_format\">{{date_format}}</span>\n" +
   "    </a>\n" +
   "</script>\n" +
   "";

FLUIGCTemplates["bpm-mobile-table-basic"] = "<script type=\"text/template\" class=\"tpl_bpm_mobile_table_basic\">\n" +
   "	<td class=\"bpm-mobile-column\">\n" +
   "		<div class=\"row\">\n" +
   "			<div class=\"col-xs-2\">\n" +
   "				<span class=\"bpm-mobile-icon bpm-mobile-expand fluigicon fluigicon-pointer-right fs-cursor-pointer fs-no-padding-left fs-md-space\"></span>\n" +
   "			</div>\n" +
   "			<div class=\"col-xs-10\">\n" +
   "				{{{firstKey}}}\n" +
   "			</div>\n" +
   "		</div>\n" +
   "		<div class=\"bpm-mobile-collapsed-content fs-display-none\">\n" +
   "			{{#otherKeys}}\n" +
   "			<div class=\"row\">\n" +
   "				<div class=\"col-xs-2\"></div>\n" +
   "				<div class=\"col-xs-10\">\n" +
   "					<b>{{{key}}}</b><br>{{{value}}}\n" +
   "				</div>\n" +
   "			</div>\n" +
   "			{{/otherKeys}}\n" +
   "		</div>\n" +
   "		<div class=\"row\">\n" +
   "			<div class=\"col-xs-12 text-center\">\n" +
   "				<span class=\"bpm-mobile-expand bpm-mobile-icon-more fluigicon fluigicon-ellipsis fs-cursor-pointer\"></span>\n" +
   "			</div>\n" +
   "		</div>\n" +
   "	</td>\n" +
   "	<td class=\"col-xs-1\">{{{trash}}}</td>\n" +
   "</script>";

FLUIGCTemplates["carousel-basic"] = "<script type=\"text/template\" class=\"template_carousel_basic\">\n" +
   "\n" +
   "<div id=\"{{id}}\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"{{interval}}\" style=\"height: {{maxHeight}}; overflow: hidden;\">\n" +
   "<!-- Indicators -->\n" +
   "	{{#indicators}}\n" +
   "		<ol class=\"carousel-indicators\">\n" +
   "			{{#images}}\n" +
   "				<li data-target=\"#{{id}}\" data-slide-to=\"{{index}}\" {{#startIndex}}class=\"active\"{{/startIndex}}></li>\n" +
   "			{{/images}}\n" +
   "		</ol>\n" +
   "	{{/indicators}}\n" +
   "\n" +
   "<!-- Wrapper for slides -->\n" +
   "	<div class=\"carousel-inner\" role=\"listbox\">\n" +
   "		{{#images}}\n" +
   "		<div class=\"item{{#startIndex}} active{{/startIndex}}\">\n" +
   "			<img height=\"400px\" class=\"center-block\" {{#linkhref}}data-img-carousel-link=\"{{linkhref}}\"{{/linkhref}} {{#linktarget}}data-img-carousel-target=\"{{linktarget}}\"{{/linktarget}} src=\"{{#src}}{{src}}{{/src}}\" alt=\"{{#alt}}{{alt}}{{/alt}}\" style=\"max-height:400px;{{#linkhref}}cursor: pointer;{{/linkhref}}\">\n" +
   "			<div class=\"carousel-caption\">\n" +
   "				{{#template}}\n" +
   "					{{{template}}}\n" +
   "				{{/template}}\n" +
   "				{{^template}}\n" +
   "					{{#title}}<h3>{{title}}</h3>{{/title}}\n" +
   "					{{#description}}<p>{{description}}</p>{{/description}}\n" +
   "				{{/template}}\n" +
   "			</div>\n" +
   "		</div>\n" +
   "		{{/images}}\n" +
   "	</div>\n" +
   "\n" +
   "<!-- Controls -->\n" +
   "	<a class=\"left carousel-control\" href=\"#{{id}}\" role=\"button\" data-slide=\"prev\">\n" +
   "		<span class=\"fluigicon fluigicon-chevron-left\"></span>\n" +
   "		<span class=\"sr-only\">Previous</span>\n" +
   "	</a>\n" +
   "	<a class=\"right carousel-control\" href=\"#{{id}}\" role=\"button\" data-slide=\"next\">\n" +
   "		<span class=\"fluigicon fluigicon-chevron-right\"></span>\n" +
   "		<span class=\"sr-only\">Next</span>\n" +
   "	</a>\n" +
   "</div>\n" +
   "</script>";

FLUIGCTemplates["ckeditor-basic"] = "<script type=\"text/template\" class=\"template_ckeditor_basic\">\n" +
   "<html>\n" +
   "<head>\n" +
   "	<title></title>\n" +
   "	<style>body{padding: 10px !important; word-wrap: break-word !important;}</style>\n" +
   "	<link type=\"text/css\" rel=\"stylesheet\" href=\"/style-guide/css/fluig-style-guide.min.css\">\n" +
   "	<link rel=\"stylesheet\" type=\"text/css\" href=\"/style-guide/css/fluig-style-guide-player.min.css\">\n" +
   "	{{{urlJquery}}}\n" +
   "	{{{urlJqueryUi}}}\n" +
   "	{{{urlMustache}}}\n" +
   "	{{{urlStyleGuide}}}\n" +
   "	{{{urlFlowPlayer}}}\n" +
   "</head>\n" +
   "<body class=\"fluig-style-guide\">\n" +
   "	&nbsp;\n" +
   "</body>\n" +
   "</html>\n" +
   "</script>";

FLUIGCTemplates["datatable-basic"] = "<script type=\"text/template\" class=\"template_table_basic\">\n" +
   "    {{#datatableArea}}\n" +
   "    <div id=\"datatable-area\" class=\"panel-heading\">\n" +
   "        <div class=\"row\">\n" +
   "    {{/datatableArea}}\n" +
   "            {{#actionsArea}}\n" +
   "                <div id=\"datatable-area-action\" class=\"{{#actionAreaStyle}}{{actionAreaStyle}}{{/actionAreaStyle}}{{^actionAreaStyle}}col-md-6{{/actionAreaStyle}}\">{{{actions}}}</div>\n" +
   "            {{/actionsArea}}\n" +
   "            {{#searchField}}\n" +
   "            <div id=\"datatable-area-search\" \n" +
   "                class=\"{{#actionsArea}}{{#searchAreaStyle}}{{searchAreaStyle}}{{/searchAreaStyle}}{{^searchAreaStyle}}col-md-5 col-md-offset-1{{/searchAreaStyle}}{{/actionsArea}}{{^actionsArea}}col-md-5 col-md-offset-7{{/actionsArea}}\">\n" +
   "				\n" +
   "                <div class=\"form-group pull-right\">\n" +
   "                    <div class=\"input-group\">\n" +
   "                        <input class=\"form-control\" id=\"fluig-data-table-input\" type=\"text\" placeholder=\"{{searchLabel}}\">\n" +
   "                        <div class=\"fs-cursor-pointer input-group-addon\" id=\"btnSearch\">\n" +
   "                            <span class=\"fluigicon fluigicon-search\"></span>\n" +
   "                        </div>\n" +
   "                    </div>\n" +
   "                </div>\n" +
   "            </div>\n" +
   "            {{/searchField}}\n" +
   "    {{#datatableArea}}\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    {{/datatableArea}}\n" +
   "	{{#mobile}}\n" +
   "	<div class=\"text-right\">\n" +
   "   		<button id=\"toggle-mobile-config-columns-{{tableId}}\" type=\"button\" class=\"btn btn-default pull-right\"><span class=\"fluigicon fluigicon-list-dropdown\"></span></button>\n" +
   "	</div>\n" +
   "	<div id=\"mobile-config-columns-{{tableId}}\" class=\"row fs-display-none\">\n" +
   "		<div class=\"col-xs-12\">\n" +
   "			<div class=\"well well-sm\">\n" +
   "				<table class=\"table\">\n" +
   "					<colgroup>\n" +
   "						<col class=\"col-xs-11\">\n" +
   "						<col class=\"col-xs-1\">\n" +
   "					</colgroup>\n" +
   "				    <tbody>\n" +
   "				    	{{#header}}\n" +
   "				    	<tr>\n" +
   "				    		<td>{{{tbheadtitle}}}</td>\n" +
   "				    		<td><input class=\"config-columns-switch-button pull-right\" type=\"checkbox\" data-size=\"small\"></td>\n" +
   "						</tr>\n" +
   "						{{/header}}\n" +
   "						<tr>\n" +
   "				    		<td colspan=\"2\"><button id=\"mobile-config-columns-confirm-{{tableId}}\" type=\"button\" class=\"btn btn-primary btn-sm btn-block\">Ok</button></td>\n" +
   "						</tr>\n" +
   "				    </tbody>\n" +
   "				</table>\n" +
   "			</div>\n" +
   "		</div>\n" +
   "	</div>\n" +
   "	{{/mobile}}\n" +
   "    <table id=\"{{tableId}}\" class=\"table table-datatable {{#tableStyle}}{{tableStyle}}{{/tableStyle}}\">\n" +
   "        <thead>\n" +
   "            <tr>\n" +
   "                {{#header}}\n" +
   "\n" +
   "                    {{#tbdataorder}}\n" +
   "                        <th class=\"order-by {{#tbselectedorder}}{{tbselectedorder}}{{/tbselectedorder}} {{tbSize}}\"\n" +
   "                            {{#tbdataorder}}\n" +
   "								data-order-by=\"{{tbdataorder}}\"\n" +
   "							{{/tbdataorder}}>\n" +
   "                                <a href=\"#\">{{{tbheadtitle}}}</a>\n" +
   "                                {{#tbselectedorder}}<a class=\"cell-option pull-right dropdown\" href=\"#\" style=\"display: block;\">{{/tbselectedorder}}\n" +
   "                                {{^tbselectedorder}}<a class=\"cell-option pull-right dropdown\" href=\"#\" style=\"display: none;\">{{/tbselectedorder}}\n" +
   "                                    <span class=\"caret\"></span>\n" +
   "                                </a>\n" +
   "                        </th>\n" +
   "                    {{/tbdataorder}}\n" +
   "\n" +
   "                    {{^tbdataorder}}\n" +
   "                        <th {{#tbSize}}class=\"{{tbSize}}\"{{/tbSize}}>{{{tbheadtitle}}}</th>\n" +
   "                    {{/tbdataorder}}\n" +
   "\n" +
   "                {{/header}}\n" +
   "                {{^header}}\n" +
   "                    <th>Fluig grid</th>\n" +
   "                {{/header}}\n" +
   "            </tr>\n" +
   "        </thead>\n" +
   "        <tbody data-tbody-fluig>\n" +
   "            {{{content}}}\n" +
   "        </tbody>\n" +
   "        <tfoot>\n" +
   "        </tfoot>\n" +
   "    </table>\n" +
   "\n" +
   "    {{#datatableAreaNavButtons}}\n" +
   "        <div id=\"area-nav-button\" class=\"pull-right\">\n" +
   "            <button class=\"{{disabledPrev}} btn {{#backwardstyle}}{{backwardstyle}}{{/backwardstyle}}{{^backwardstyle}}btn-default{{/backwardstyle}}\"\n" +
   "                    data-nav-prev> << </button>\n" +
   "            <button class=\"{{disabledNext}} btn {{#forwardstyle}}{{forwardstyle}}{{/forwardstyle}}{{^forwardstyle}}btn-default{{/forwardstyle}}\"\n" +
   "                    data-nav-next> >> </button>\n" +
   "        </div>\n" +
   "    {{/datatableAreaNavButtons}}\n" +
   "</script>";

FLUIGCTemplates["datatable-body"] = "<script type=\"text/template\" class=\"template_table_body\">\n" +
   "\n" +
   "    {{#items}}\n" +
   "        {{>dataTemplate}}\n" +
   "    {{/items}}\n" +
   "\n" +
   "</script>";

FLUIGCTemplates["desktop-notification-item"] = "<script type=\"text/template\" class=\"template_desktop_notification_item\">\n" +
   "	<li class=\"panel panel-default fs-position-relative fs-desktop-notification-item\" id=\"{{tag}}\">\n" +
   "		<div class=\"panel-body fs-xs-space\">\n" +
   "			<div class=\"media fs-position-relative\">\n" +
   "				<a class=\"pull-left\" href=\"#\">\n" +
   "					<img class=\"media-object\" width=\"75\" height=\"75\" src=\"{{icon}}\">\n" +
   "				</a>\n" +
   "				<div class=\"media-body fs-xs-space fs-no-padding-left fs-no-padding-right\">\n" +
   "					<h4 class=\"media-heading ellipsis\">{{title}}</h4>\n" +
   "					<p class=\"ellipsis\">{{body}}</p>\n" +
   "				</div>\n" +
   "				<a href=\"#\" class=\"fluigicon fluigicon-remove fluigicon-xs fs-no-text-underline fs-desktop-notification-remove\"></a>\n" +
   "			</div>\n" +
   "		</div>\n" +
   "	</li>\n" +
   "</script>\n" +
   "";

FLUIGCTemplates["desktop-notification"] = "<script type=\"text/template\" class=\"template_desktop_notification\">\n" +
   "	<ul class=\"fluig-style-guide fs-desktop-notification\"></ul>\n" +
   "</script>\n" +
   "";

FLUIGCTemplates["filter-basic"] = "<script type=\"text/template\" class=\"template_filter_basic\">\n" +
   "<div id=\"{{id}}_fluigFilter\" class=\"fluig-filter\">\n" +
   "	<div class=\"input-group fs-full-width\">\n" +
   "		{{{inputFilter}}}\n" +
   "        <div class=\"input-group-addon\" id=\"{{id}}_toggleTable\">\n" +
   "            <span class=\"fluigicon {{#filterIconClass}}{{filterIconClass}}{{/filterIconClass}}{{^filterIconClass}}fluigicon-zoom-in{{/filterIconClass}}\"></span>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"filter-panel panel panel-default fs-display-none fs-full-width\">\n" +
   "    	<div class=\"panel-body {{#isMobile}}fs-xs-space{{/isMobile}}\" {{^isMobile}}style=\"height: {{tableHeight}};\"{{/isMobile}}>		\n" +
   "    		<div id=\"{{id}}_datatable\" class=\"fs-no-border\"></div>\n" +
   "	    	{{#isMobile}}\n" +
   "		    	<p class=\"text-info fs-no-margin-bottom\">{{resultsHelper}}</p>\n" +
   "		    {{/isMobile}}\n" +
   "    	</div>\n" +
   "	</div>\n" +
   "<div>\n" +
   "</script>";

FLUIGCTemplates["modal-basic"] = "<script type=\"text/template\" class=\"template_modal_basic\">\n" +
   "<div class=\"fluig-style-guide modal {{full}}\" id=\"{{id}}\" data-{{id}} tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"{{title}}\" aria-hidden=\"true\">\n" +
   "	<div class=\"modal-dialog {{size}}\">\n" +
   "		{{#formModal}}\n" +
   "			<form action=\"#\" class=\"modal-content\" {{{formBind}}}>\n" +
   "		{{/formModal}}\n" +
   "		{{^formModal}}\n" +
   "			<div class=\"modal-content\">\n" +
   "		{{/formModal}}\n" +
   "				<div class=\"modal-header\">\n" +
   "					<button type=\"button\" class=\"close\" {{#actionClose}}{{{bind}}}{{/actionClose}}{{^actionClose}}data-dismiss=\"modal\"{{/actionClose}}><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n" +
   "					<h4 class=\"modal-title\">{{title}}</h4>\n" +
   "				</div>\n" +
   "				<div class=\"modal-body\">\n" +
   "					{{#content}}\n" +
   "						{{{content}}}\n" +
   "					{{/content}}\n" +
   "				</div>\n" +
   "				{{#hasActions}}\n" +
   "					<div class=\"modal-footer\">\n" +
   "						{{#actions}}\n" +
   "							<button type=\"{{buttonType}}\" class=\"btn {{classType}}\" {{#autoClose}}data-dismiss=\"modal\"{{/autoClose}} {{#autofocus}}autofocus{{/autofocus}} {{{bind}}}>{{label}}</button>\n" +
   "						{{/actions}}\n" +
   "					</div>\n" +
   "				{{/hasActions}}\n" +
   "		{{^formModal}}\n" +
   "			</div>\n" +
   "		{{/formModal}}\n" +
   "		{{#formModal}}\n" +
   "			</form>\n" +
   "		{{/formModal}}\n" +
   "	</div>\n" +
   "</div>\n" +
   "</script>";

FLUIGCTemplates["orgchart-basic"] = "<script type=\"text/template\" class=\"template_orgchart_basic\">\n" +
   "<div class=\"node\" node-id=\"{{id}}\">\n" +
   "	{{#template}}\n" +
   "		{{{template}}}\n" +
   "	{{/template}}\n" +
   "	{{^template}}\n" +
   "	<div class=\"media\">\n" +
   "		{{#img}}<a class=\"pull-left\" href=\"#\"><img class=\"img-rounded media-object\" src=\"{{img}}\"></a>{{/img}}\n" +
   "		<div class=\"media-body\">\n" +
   "			{{#name}}<h4 class=\"media-heading\">{{name}}</h4>{{/name}}\n" +
   "			{{#description}}<p>{{description}}</p>{{/description}}\n" +
   "		</div>\n" +
   "	</div>\n" +
   "	{{/template}}\n" +
   "</div>\n" +
   "</script>";

FLUIGCTemplates["player-basic"] = "<script type=\"text/template\" class=\"template_player_basic\">\n" +
   "	<object id=\"mediaplayer{{time}}\" classid=\"clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95\" \n" +
   "		codebase=\"http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#version=5,1,52,701\"\n" +
   "	standby=\"loading microsoft windows media player components...\" type=\"application/x-oleobject\" width=\"{{width}}\" height=\"{{height}}\">\n" +
   "		<param name=\"fileName\" value=\"{{urlVideo}}\"/>\n" +
   "		<param name=\"animationatStart\" value=\"true\"/>\n" +
   "		<param name=\"transparentatStart\" value=\"true\"/>\n" +
   "		<param name=\"autoStart\" value=\"{{autoplay}}\"/>\n" +
   "		<param name=\"showControls\" value=\"true\"/>\n" +
   "		<param name=\"showDisplay\" value=\"false\"/>\n" +
   "		<param name=\"showStatusBar\" value=\"true\"/>\n" +
   "		<param name=\"statusBar\" value=\"true\"/>\n" +
   "		<param name=\"showAudioControls\" value=\"true\"/>\n" +
   "		<param name=\"autoRewind\" value=\"true\"/>\n" +
   "		<param name=\"showPositionControls\" value=\"false\"/>\n" +
   "		<param name=\"autoSize\" value=\"true\"/>\n" +
   "		<embed type=\"video/x-ms-asf-plugin\" width=\"{{width}}\" height=\"{{height}}\" src=\"{{urlVideo}}\" name=\"mediaplayer{{time}}\" \n" +
   "			autostart=\"{{autoplay}}\" showcontrols=\"true\" showstatusbar=\"0\" statusbar=\"true\" showdisplay=\"0\" showaudiocontrols=\"true\" \n" +
   "		autosize=\"1\" animationatstart=\"true\" autorewind=\"1\" showpositioncontrols=\"false\"/>\n" +
   "	</object>\n" +
   "</script>";

/* ========================================================================
 * Bootstrap: transition.js v3.3.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.0'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', e.type == 'focus')
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.0'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var delta = direction == 'prev' ? -1 : 1
    var activeIndex = this.getItemIndex(active)
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.0'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && colliderTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $('body').height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* ========================================================================
 * bootstrap-switch - v3.3.1
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function(){var t=[].slice;!function(e,i){"use strict";var n;return n=function(){function t(t,n){var o;null==n&&(n={}),this.$element=e(t),this.options=e.extend({},e.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},n),this.$wrapper=e("<div>",{"class":function(t){return function(){var e;return e=[""+t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)),e.push(t.options.state?""+t.options.baseClass+"-on":""+t.options.baseClass+"-off"),null!=t.options.size&&e.push(""+t.options.baseClass+"-"+t.options.size),t.options.disabled&&e.push(""+t.options.baseClass+"-disabled"),t.options.readonly&&e.push(""+t.options.baseClass+"-readonly"),t.options.indeterminate&&e.push(""+t.options.baseClass+"-indeterminate"),t.options.inverse&&e.push(""+t.options.baseClass+"-inverse"),t.$element.attr("id")&&e.push(""+t.options.baseClass+"-id-"+t.$element.attr("id")),e.join(" ")}}(this)()}),this.$container=e("<div>",{"class":""+this.options.baseClass+"-container"}),this.$on=e("<span>",{html:this.options.onText,"class":""+this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=e("<span>",{html:this.options.offText,"class":""+this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=e("<span>",{html:this.options.labelText,"class":""+this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",function(e){return function(){return e.options.onInit.apply(t,arguments)}}(this)),this.$element.on("switchChange.bootstrapSwitch",function(e){return function(){return e.options.onSwitchChange.apply(t,arguments)}}(this)),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),o=i.setInterval(function(t){return function(){return t.$wrapper.is(":visible")?(t._width(),t._containerPosition(null,function(){return t.options.animate?t.$wrapper.addClass(""+t.options.baseClass+"-animate"):void 0}),i.clearInterval(o)):void 0}}(this),50),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch")}return t.prototype._constructor=t,t.prototype.state=function(t,e){return"undefined"==typeof t?this.options.state:this.options.disabled||this.options.readonly?this.$element:this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.options.indeterminate&&this.indeterminate(!1),t=!!t,this.$element.prop("checked",t).trigger("change.bootstrapSwitch",e),this.$element)},t.prototype.toggleState=function(t){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",t)},t.prototype.size=function(t){return"undefined"==typeof t?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(""+this.options.baseClass+"-"+this.options.size),t&&this.$wrapper.addClass(""+this.options.baseClass+"-"+t),this._width(),this._containerPosition(),this.options.size=t,this.$element)},t.prototype.animate=function(t){return"undefined"==typeof t?this.options.animate:(t=!!t,t===this.options.animate?this.$element:this.toggleAnimate())},t.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(""+this.options.baseClass+"-animate"),this.$element},t.prototype.disabled=function(t){return"undefined"==typeof t?this.options.disabled:(t=!!t,t===this.options.disabled?this.$element:this.toggleDisabled())},t.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(""+this.options.baseClass+"-disabled"),this.$element},t.prototype.readonly=function(t){return"undefined"==typeof t?this.options.readonly:(t=!!t,t===this.options.readonly?this.$element:this.toggleReadonly())},t.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(""+this.options.baseClass+"-readonly"),this.$element},t.prototype.indeterminate=function(t){return"undefined"==typeof t?this.options.indeterminate:(t=!!t,t===this.options.indeterminate?this.$element:this.toggleIndeterminate())},t.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(""+this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},t.prototype.inverse=function(t){return"undefined"==typeof t?this.options.inverse:(t=!!t,t===this.options.inverse?this.$element:this.toggleInverse())},t.prototype.toggleInverse=function(){var t,e;return this.$wrapper.toggleClass(""+this.options.baseClass+"-inverse"),e=this.$on.clone(!0),t=this.$off.clone(!0),this.$on.replaceWith(t),this.$off.replaceWith(e),this.$on=t,this.$off=e,this.options.inverse=!this.options.inverse,this.$element},t.prototype.onColor=function(t){var e;return e=this.options.onColor,"undefined"==typeof t?e:(null!=e&&this.$on.removeClass(""+this.options.baseClass+"-"+e),this.$on.addClass(""+this.options.baseClass+"-"+t),this.options.onColor=t,this.$element)},t.prototype.offColor=function(t){var e;return e=this.options.offColor,"undefined"==typeof t?e:(null!=e&&this.$off.removeClass(""+this.options.baseClass+"-"+e),this.$off.addClass(""+this.options.baseClass+"-"+t),this.options.offColor=t,this.$element)},t.prototype.onText=function(t){return"undefined"==typeof t?this.options.onText:(this.$on.html(t),this._width(),this._containerPosition(),this.options.onText=t,this.$element)},t.prototype.offText=function(t){return"undefined"==typeof t?this.options.offText:(this.$off.html(t),this._width(),this._containerPosition(),this.options.offText=t,this.$element)},t.prototype.labelText=function(t){return"undefined"==typeof t?this.options.labelText:(this.$label.html(t),this._width(),this.options.labelText=t,this.$element)},t.prototype.handleWidth=function(t){return"undefined"==typeof t?this.options.handleWidth:(this.options.handleWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.labelWidth=function(t){return"undefined"==typeof t?this.options.labelWidth:(this.options.labelWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.baseClass=function(){return this.options.baseClass},t.prototype.wrapperClass=function(t){return"undefined"==typeof t?this.options.wrapperClass:(t||(t=e.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(t).join(" ")),this.options.wrapperClass=t,this.$element)},t.prototype.radioAllOff=function(t){return"undefined"==typeof t?this.options.radioAllOff:(t=!!t,t===this.options.radioAllOff?this.$element:(this.options.radioAllOff=t,this.$element))},t.prototype.onInit=function(t){return"undefined"==typeof t?this.options.onInit:(t||(t=e.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=t,this.$element)},t.prototype.onSwitchChange=function(t){return"undefined"==typeof t?this.options.onSwitchChange:(t||(t=e.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=t,this.$element)},t.prototype.destroy=function(){var t;return t=this.$element.closest("form"),t.length&&t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},t.prototype._width=function(){var t,e;return t=this.$on.add(this.$off),t.add(this.$label).css("width",""),e="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,t.width(e),this.$label.width(function(t){return function(i,n){return"auto"!==t.options.labelWidth?t.options.labelWidth:e>n?e:n}}(this)),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},t.prototype._containerPosition=function(t,e){return null==t&&(t=this.options.state),this.$container.css("margin-left",function(e){return function(){var i;return i=[0,"-"+e._handleWidth+"px"],e.options.indeterminate?"-"+e._handleWidth/2+"px":t?e.options.inverse?i[1]:i[0]:e.options.inverse?i[0]:i[1]}}(this)),e?setTimeout(function(){return e()},50):void 0},t.prototype._elementHandlers=function(){return this.$element.on({"change.bootstrapSwitch":function(t){return function(i,n){var o;return i.preventDefault(),i.stopImmediatePropagation(),o=t.$element.is(":checked"),t._containerPosition(o),o!==t.options.state?(t.options.state=o,t.$wrapper.toggleClass(""+t.options.baseClass+"-off").toggleClass(""+t.options.baseClass+"-on"),n?void 0:(t.$element.is(":radio")&&e("[name='"+t.$element.attr("name")+"']").not(t.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),t.$element.trigger("switchChange.bootstrapSwitch",[o]))):void 0}}(this),"focus.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.addClass(""+t.options.baseClass+"-focused")}}(this),"blur.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.removeClass(""+t.options.baseClass+"-focused")}}(this),"keydown.bootstrapSwitch":function(t){return function(e){if(e.which&&!t.options.disabled&&!t.options.readonly)switch(e.which){case 37:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!1);case 39:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!0)}}}(this)})},t.prototype._handleHandlers=function(){return this.$on.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!1),t.$element.trigger("focus.bootstrapSwitch")}}(this)),this.$off.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!0),t.$element.trigger("focus.bootstrapSwitch")}}(this))},t.prototype._labelHandlers=function(){return this.$label.on({"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":function(t){return function(e){return t._dragStart||t.options.disabled||t.options.readonly?void 0:(e.preventDefault(),e.stopPropagation(),t._dragStart=(e.pageX||e.originalEvent.touches[0].pageX)-parseInt(t.$container.css("margin-left"),10),t.options.animate&&t.$wrapper.removeClass(""+t.options.baseClass+"-animate"),t.$element.trigger("focus.bootstrapSwitch"))}}(this),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":function(t){return function(e){var i;if(null!=t._dragStart&&(e.preventDefault(),i=(e.pageX||e.originalEvent.touches[0].pageX)-t._dragStart,!(i<-t._handleWidth||i>0)))return t._dragEnd=i,t.$container.css("margin-left",""+t._dragEnd+"px")}}(this),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":function(t){return function(e){var i;if(t._dragStart)return e.preventDefault(),t.options.animate&&t.$wrapper.addClass(""+t.options.baseClass+"-animate"),t._dragEnd?(i=t._dragEnd>-(t._handleWidth/2),t._dragEnd=!1,t.state(t.options.inverse?!i:i)):t.state(!t.options.state),t._dragStart=!1}}(this),"mouseleave.bootstrapSwitch":function(t){return function(){return t.$label.trigger("mouseup.bootstrapSwitch")}}(this)})},t.prototype._externalLabelHandler=function(){var t;return t=this.$element.closest("label"),t.on("click",function(e){return function(i){return i.preventDefault(),i.stopImmediatePropagation(),i.target===t[0]?e.toggleState():void 0}}(this))},t.prototype._formHandler=function(){var t;return t=this.$element.closest("form"),t.data("bootstrap-switch")?void 0:t.on("reset.bootstrapSwitch",function(){return i.setTimeout(function(){return t.find("input").filter(function(){return e(this).data("bootstrap-switch")}).each(function(){return e(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},t.prototype._getClasses=function(t){var i,n,o,s;if(!e.isArray(t))return[""+this.options.baseClass+"-"+t];for(n=[],o=0,s=t.length;s>o;o++)i=t[o],n.push(""+this.options.baseClass+"-"+i);return n},t}(),e.fn.bootstrapSwitch=function(){var i,o,s;return o=arguments[0],i=2<=arguments.length?t.call(arguments,1):[],s=this,this.each(function(){var t,a;return t=e(this),a=t.data("bootstrap-switch"),a||t.data("bootstrap-switch",a=new n(this,o)),"string"==typeof o?s=a[o].apply(a,i):void 0}),s},e.fn.bootstrapSwitch.Constructor=n,e.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this);
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof module === "object" && module.exports) {
		var jQuery;
		try {
			jQuery = require("jquery");
		} catch (err) {
			jQuery = null;
		}
		module.exports = factory(jQuery);
	} else {
		root.Slider = factory(root.jQuery);
	}
}
	(
		this,
		function($) {
			// Reference to Slider constructor
			var Slider;

			(function($) {

				'use strict';

				// -------------------------- utils -------------------------- //

				var slice = Array.prototype.slice;

				function noop() {
				}

				// -------------------------- definition -------------------------- //

				function defineBridget($) {

					// bail if no jQuery
					if (!$) {
						return;
					}

					// -------------------------- addOptionMethod -------------------------- //

					/**
					 * adds option method -> $().plugin('option', {...})
					 * @param {Function} PluginClass - constructor class
					 */
					function addOptionMethod(PluginClass) {
						// don't overwrite original option method
						if (PluginClass.prototype.option) {
							return;
						}

						// option setter
						PluginClass.prototype.option = function(opts) {
							// bail out if not an object
							if (!$.isPlainObject(opts)) {
								return;
							}
							this.options = $.extend(true, this.options, opts);
						};
					}

					// -------------------------- plugin bridge -------------------------- //

					// helper function for logging errors
					// $.error breaks jQuery chaining
					var logError = typeof console === 'undefined' ? noop : function(message) {
						console.error(message);
					};

					/**
					 * jQuery plugin bridge, access methods like $elem.plugin('method')
					 * @param {String} namespace - plugin name
					 * @param {Function} PluginClass - constructor class
					 */
					function bridge(namespace, PluginClass) {
						// add to jQuery fn namespace
						$.fn[namespace] = function(options) {
							if (typeof options === 'string') {
								// call plugin method when first argument is a string
								// get arguments for method
								var args = slice.call(arguments, 1);

								for ( var i = 0, len = this.length; i < len; i++) {
									var elem = this[i];
									var instance = $.data(elem, namespace);
									if (!instance) {
										logError("cannot call methods on " + namespace + " prior to initialization; "
											+ "attempted to call '" + options + "'");
										continue;
									}
									if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
										logError("no such method '" + options + "' for " + namespace + " instance");
										continue;
									}

									// trigger method with arguments
									var returnValue = instance[options].apply(instance, args);

									// break look and return first value if provided
									if (returnValue !== undefined && returnValue !== instance) {
										return returnValue;
									}
								}
								// return this if no return value
								return this;
							} else {
								var objects = this.map(function() {
									var instance = $.data(this, namespace);
									if (instance) {
										// apply options & init
										instance.option(options);
										instance._init();
									} else {
										// initialize new instance
										instance = new PluginClass(this, options);
										$.data(this, namespace, instance);
									}
									return $(this);
								});

								if (!objects || objects.length > 1) {
									return objects;
								} else {
									return objects[0];
								}
							}
						};

					}

					// -------------------------- bridget -------------------------- //

					/**
					 * converts a Prototypical class into a proper jQuery plugin
					 *   the class must have a ._init method
					 * @param {String} namespace - plugin name, used in $().pluginName
					 * @param {Function} PluginClass - constructor class
					 */
					$.bridget = function(namespace, PluginClass) {
						addOptionMethod(PluginClass);
						bridge(namespace, PluginClass);
					};

					return $.bridget;

				}

				// get jquery from browser global
				defineBridget($);

			})($);

			/*************************************************
							
					BOOTSTRAP-SLIDER SOURCE CODE

			 **************************************************/

			(function($) {

				var ErrorMsgs = {
					formatInvalidInputErrorMsg: function(input) {
						return "Invalid input value '" + input + "' passed in";
					},
					callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
				};

				/*************************************************
								
									CONSTRUCTOR

				 **************************************************/
				Slider = function(element, options) {
					createNewSlider.call(this, element, options);
					return this;
				};

				function createNewSlider(element, options) {
					/*************************************************
								
									Create Markup

					 **************************************************/
					if (typeof element === "string") {
						this.element = document.querySelector(element);
					} else if (element instanceof HTMLElement) {
						this.element = element;
					}

					var origWidth = this.element.style.width;
					var updateSlider = false;
					var parent = this.element.parentNode;
					var sliderTrackSelection;
					var sliderMinHandle;
					var sliderMaxHandle;

					if (this.sliderElem) {
						updateSlider = true;
					} else {
						/* Create elements needed for slider */
						this.sliderElem = document.createElement("div");
						this.sliderElem.className = "slider";

						/* Create slider track elements */
						var sliderTrack = document.createElement("div");
						sliderTrack.className = "slider-track";

						sliderTrackSelection = document.createElement("div");
						sliderTrackSelection.className = "slider-selection";

						sliderMinHandle = document.createElement("div");
						sliderMinHandle.className = "slider-handle min-slider-handle";

						sliderMaxHandle = document.createElement("div");
						sliderMaxHandle.className = "slider-handle max-slider-handle";

						sliderTrack.appendChild(sliderTrackSelection);
						sliderTrack.appendChild(sliderMinHandle);
						sliderTrack.appendChild(sliderMaxHandle);

						var createAndAppendTooltipSubElements = function(tooltipElem) {
							var arrow = document.createElement("div");
							arrow.className = "tooltip-arrow";

							var inner = document.createElement("div");
							inner.className = "tooltip-inner";

							tooltipElem.appendChild(arrow);
							tooltipElem.appendChild(inner);
						};

						/* Create tooltip elements */
						var sliderTooltip = document.createElement("div");
						sliderTooltip.className = "tooltip tooltip-main";
						createAndAppendTooltipSubElements(sliderTooltip);

						var sliderTooltipMin = document.createElement("div");
						sliderTooltipMin.className = "tooltip tooltip-min";
						createAndAppendTooltipSubElements(sliderTooltipMin);

						var sliderTooltipMax = document.createElement("div");
						sliderTooltipMax.className = "tooltip tooltip-max";
						createAndAppendTooltipSubElements(sliderTooltipMax);

						/* Append components to sliderElem */
						this.sliderElem.appendChild(sliderTrack);
						this.sliderElem.appendChild(sliderTooltip);
						this.sliderElem.appendChild(sliderTooltipMin);
						this.sliderElem.appendChild(sliderTooltipMax);

						/* Append slider element to parent container, right before the original <input> element */
						parent.insertBefore(this.sliderElem, this.element);

						/* Hide original <input> element */
						this.element.style.display = "none";
					}
					/* If JQuery exists, cache JQ references */
					if ($) {
						this.$element = $(this.element);
						this.$sliderElem = $(this.sliderElem);
					}

					/*************************************************
								
									Process Options

					 **************************************************/
					options = options ? options : {};
					var optionTypes = Object.keys(this.defaultOptions);

					for ( var i = 0; i < optionTypes.length; i++) {
						var optName = optionTypes[i];

						// First check if an option was passed in via the constructor
						var val = options[optName];
						// If no data attrib, then check data atrributes
						val = (typeof val !== 'undefined') ? val : getDataAttrib(this.element, optName);
						// Finally, if nothing was specified, use the defaults
						val = (val !== null) ? val : this.defaultOptions[optName];

						// Set all options on the instance of the Slider
						if (!this.options) {
							this.options = {};
						}
						this.options[optName] = val;
					}

					function getDataAttrib(element, optName) {
						var dataName = "data-slider-" + optName;
						var dataValString = element.getAttribute(dataName);

						try {
							return JSON.parse(dataValString);
						} catch (err) {
							return dataValString;
						}
					}

					/*************************************************
								
										Setup

					 **************************************************/
					this.eventToCallbackMap = {};
					this.sliderElem.id = this.options.id;

					this.touchCapable = 'ontouchstart' in window
						|| (window.DocumentTouch && document instanceof window.DocumentTouch);

					this.tooltip = this.sliderElem.querySelector('.tooltip-main');
					this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

					this.tooltip_min = this.sliderElem.querySelector('.tooltip-min');
					this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

					this.tooltip_max = this.sliderElem.querySelector('.tooltip-max');
					this.tooltipInner_max = this.tooltip_max.querySelector('.tooltip-inner');

					if (updateSlider === true) {
						// Reset classes
						this._removeClass(this.sliderElem, 'slider-horizontal');
						this._removeClass(this.sliderElem, 'slider-vertical');
						this._removeClass(this.tooltip, 'hide');
						this._removeClass(this.tooltip_min, 'hide');
						this._removeClass(this.tooltip_max, 'hide');

						// Undo existing inline styles for track
						["left", "top", "width", "height"].forEach(function(prop) {
							this._removeProperty(this.trackSelection, prop);
						}, this);

						// Undo inline styles on handles
						[this.handle1, this.handle2].forEach(function(handle) {
							this._removeProperty(handle, 'left');
							this._removeProperty(handle, 'top');
						}, this);

						// Undo inline styles and classes on tooltips
						[this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(tooltip) {
							this._removeProperty(tooltip, 'left');
							this._removeProperty(tooltip, 'top');
							this._removeProperty(tooltip, 'margin-left');
							this._removeProperty(tooltip, 'margin-top');

							this._removeClass(tooltip, 'right');
							this._removeClass(tooltip, 'top');
						}, this);
					}

					if (this.options.orientation === 'vertical') {
						this._addClass(this.sliderElem, 'slider-vertical');

						this.stylePos = 'top';
						this.mousePos = 'pageY';
						this.sizePos = 'offsetHeight';

						this._addClass(this.tooltip, 'right');
						this.tooltip.style.left = '100%';

						this._addClass(this.tooltip_min, 'right');
						this.tooltip_min.style.left = '100%';

						this._addClass(this.tooltip_max, 'right');
						this.tooltip_max.style.left = '100%';
					} else {
						this._addClass(this.sliderElem, 'slider-horizontal');
						this.sliderElem.style.width = origWidth;

						this.options.orientation = 'horizontal';
						this.stylePos = 'left';
						this.mousePos = 'pageX';
						this.sizePos = 'offsetWidth';

						this._addClass(this.tooltip, 'top');
						this.tooltip.style.top = -this.tooltip.outerHeight - 14 + 'px';

						this._addClass(this.tooltip_min, 'top');
						this.tooltip_min.style.top = -this.tooltip_min.outerHeight - 14 + 'px';

						this._addClass(this.tooltip_max, 'top');
						this.tooltip_max.style.top = -this.tooltip_max.outerHeight - 14 + 'px';
					}

					if (this.options.value instanceof Array) {
						this.options.range = true;
					} else if (this.options.range) {
						// User wants a range, but value is not an array
						this.options.value = [this.options.value, this.options.max];
					}

					this.trackSelection = sliderTrackSelection || this.trackSelection;
					if (this.options.selection === 'none') {
						this._addClass(this.trackSelection, 'hide');
					}

					this.handle1 = sliderMinHandle || this.handle1;
					this.handle2 = sliderMaxHandle || this.handle2;

					if (updateSlider === true) {
						// Reset classes
						this._removeClass(this.handle1, 'round triangle');
						this._removeClass(this.handle2, 'round triangle hide');
					}

					var availableHandleModifiers = ['round', 'triangle', 'custom'];
					var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
					if (isValidHandleType) {
						this._addClass(this.handle1, this.options.handle);
						this._addClass(this.handle2, this.options.handle);
					}

					this.offset = this._offset(this.sliderElem);
					this.size = this.sliderElem[this.sizePos];
					this.setValue(this.options.value);

					/******************************************
								
								Bind Event Listeners

					 ******************************************/

					// Bind keyboard handlers
					this.handle1Keydown = this._keydown.bind(this, 0);
					this.handle1.addEventListener("keydown", this.handle1Keydown, false);

					this.handle2Keydown = this._keydown.bind(this, 1);
					this.handle2.addEventListener("keydown", this.handle2Keydown, false);

					if (this.touchCapable) {
						// Bind touch handlers
						this.mousedown = this._mousedown.bind(this);
						this.sliderElem.addEventListener("touchstart", this.mousedown, false);
					} else {
						// Bind mouse handlers
						this.mousedown = this._mousedown.bind(this);
						this.sliderElem.addEventListener("mousedown", this.mousedown, false);
					}

					// Bind tooltip-related handlers
					if (this.options.tooltip === 'hide') {
						this._addClass(this.tooltip, 'hide');
						this._addClass(this.tooltip_min, 'hide');
						this._addClass(this.tooltip_max, 'hide');
					} else if (this.options.tooltip === 'always') {
						this._showTooltip();
						this._alwaysShowTooltip = true;
					} else {
						this.showTooltip = this._showTooltip.bind(this);
						this.hideTooltip = this._hideTooltip.bind(this);

						this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
						this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);

						this.handle1.addEventListener("focus", this.showTooltip, false);
						this.handle1.addEventListener("blur", this.hideTooltip, false);

						this.handle2.addEventListener("focus", this.showTooltip, false);
						this.handle2.addEventListener("blur", this.hideTooltip, false);
					}

					if (this.options.enabled) {
						this.enable();
					} else {
						this.disable();
					}
				}

				/*************************************************
								
							INSTANCE PROPERTIES/METHODS

				- Any methods bound to the prototype are considered 
				part of the plugin's `public` interface

				 **************************************************/
				Slider.prototype = {
					_init: function() {
					}, // NOTE: Must exist to support bridget

					constructor: Slider,

					defaultOptions: {
						id: "",
						min: 0,
						max: 10,
						step: 1,
						precision: 0,
						orientation: 'horizontal',
						value: 5,
						range: false,
						selection: 'before',
						tooltip: 'show',
						tooltip_split: false,
						handle: 'round',
						reversed: false,
						enabled: true,
						formatter: function(val) {
							if (val instanceof Array) {
								return val[0] + " : " + val[1];
							} else {
								return val;
							}
						},
						natural_arrow_keys: false
					},

					over: false,

					inDrag: false,

					getValue: function() {
						if (this.options.range) {
							return this.options.value;
						}
						return this.options.value[0];
					},

					setValue: function(val, triggerSlideEvent) {
						if (!val) {
							val = 0;
						}
						this.options.value = this._validateInputValue(val);
						var applyPrecision = this._applyPrecision.bind(this);

						if (this.options.range) {
							this.options.value[0] = applyPrecision(this.options.value[0]);
							this.options.value[1] = applyPrecision(this.options.value[1]);

							this.options.value[0] = Math.max(this.options.min, Math.min(this.options.max,
								this.options.value[0]));
							this.options.value[1] = Math.max(this.options.min, Math.min(this.options.max,
								this.options.value[1]));
						} else {
							this.options.value = applyPrecision(this.options.value);
							this.options.value = [Math.max(this.options.min, Math.min(this.options.max,
								this.options.value))];
							this._addClass(this.handle2, 'hide');
							if (this.options.selection === 'after') {
								this.options.value[1] = this.options.max;
							} else {
								this.options.value[1] = this.options.min;
							}
						}

						this.diff = this.options.max - this.options.min;
						if (this.diff > 0) {
							this.percentage = [(this.options.value[0] - this.options.min) * 100 / this.diff,
								(this.options.value[1] - this.options.min) * 100 / this.diff,
								this.options.step * 100 / this.diff];
						} else {
							this.percentage = [0, 0, 100];
						}

						this._layout();

						var sliderValue = this.options.range ? this.options.value : this.options.value[0];
						this._setDataVal(sliderValue);

						if (triggerSlideEvent === true) {
							this._trigger('slide', sliderValue);
						}

						return this;
					},

					destroy: function() {
						// Remove event handlers on slider elements
						this._removeSliderEventHandlers();

						// Remove the slider from the DOM
						this.sliderElem.parentNode.removeChild(this.sliderElem);
						/* Show original <input> element */
						this.element.style.display = "";

						// Clear out custom event bindings
						this._cleanUpEventCallbacksMap();

						// Remove data values
						this.element.removeAttribute("data");

						// Remove JQuery handlers/data
						if ($) {
							this._unbindJQueryEventHandlers();
							this.$element.removeData('slider');
						}
					},

					disable: function() {
						this.options.enabled = false;
						this.handle1.removeAttribute("tabindex");
						this.handle2.removeAttribute("tabindex");
						this._addClass(this.sliderElem, 'slider-disabled');
						this._trigger('slideDisabled');

						return this;
					},

					enable: function() {
						this.options.enabled = true;
						this.handle1.setAttribute("tabindex", 0);
						this.handle2.setAttribute("tabindex", 0);
						this._removeClass(this.sliderElem, 'slider-disabled');
						this._trigger('slideEnabled');

						return this;
					},

					toggle: function() {
						if (this.options.enabled) {
							this.disable();
						} else {
							this.enable();
						}

						return this;
					},

					isEnabled: function() {
						return this.options.enabled;
					},

					on: function(evt, callback) {
						if ($) {
							this.$element.on(evt, callback);
							this.$sliderElem.on(evt, callback);
						} else {
							this._bindNonQueryEventHandler(evt, callback);
						}
						return this;
					},

					getAttribute: function(attribute) {
						if (attribute) {
							return this.options[attribute];
						} else {
							return this.options;
						}
					},

					setAttribute: function(attribute, value) {
						this.options[attribute] = value;
						return this;
					},

					refresh: function() {
						this._removeSliderEventHandlers();
						createNewSlider.call(this, this.element, this.options);
						if ($) {
							// Bind new instance of slider to the element
							$.data(this.element, 'slider', this);
						}
						return this;
					},

					/******************************+
							
								HELPERS

					- Any method that is not part of the public interface.
					- Place it underneath this comment block and write its signature like so:

					  					_fnName : function() {...}

					 ********************************/
					_removeSliderEventHandlers: function() {
						// Remove event listeners from handle1
						this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
						this.handle1.removeEventListener("focus", this.showTooltip, false);
						this.handle1.removeEventListener("blur", this.hideTooltip, false);

						// Remove event listeners from handle2
						this.handle2.removeEventListener("keydown", this.handle2Keydown, false);
						this.handle2.removeEventListener("focus", this.handle2Keydown, false);
						this.handle2.removeEventListener("blur", this.handle2Keydown, false);

						// Remove event listeners from sliderElem
						this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
						this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
						this.sliderElem.removeEventListener("touchstart", this.mousedown, false);
						this.sliderElem.removeEventListener("mousedown", this.mousedown, false);
					},
					_bindNonQueryEventHandler: function(evt, callback) {
						if (this.eventToCallbackMap[evt] === undefined) {
							this.eventToCallbackMap[evt] = [];
						}
						this.eventToCallbackMap[evt].push(callback);
					},
					_cleanUpEventCallbacksMap: function() {
						var eventNames = Object.keys(this.eventToCallbackMap);
						for ( var i = 0; i < eventNames.length; i++) {
							var eventName = eventNames[i];
							this.eventToCallbackMap[eventName] = null;
						}
					},
					_showTooltip: function() {
						if (this.options.tooltip_split === false) {
							this._addClass(this.tooltip, 'in');
						} else {
							this._addClass(this.tooltip_min, 'in');
							this._addClass(this.tooltip_max, 'in');
						}
						this.over = true;
					},
					_hideTooltip: function() {
						if (this.inDrag === false && this.alwaysShowTooltip !== true) {
							this._removeClass(this.tooltip, 'in');
							this._removeClass(this.tooltip_min, 'in');
							this._removeClass(this.tooltip_max, 'in');
						}
						this.over = false;
					},
					_layout: function() {
						var positionPercentages;

						if (this.options.reversed) {
							positionPercentages = [100 - this.percentage[0], this.percentage[1]];
						} else {
							positionPercentages = [this.percentage[0], this.percentage[1]];
						}

						this.handle1.style[this.stylePos] = positionPercentages[0] + '%';
						this.handle2.style[this.stylePos] = positionPercentages[1] + '%';

						if (this.options.orientation === 'vertical') {
							this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1])
								+ '%';
							this.trackSelection.style.height = Math
								.abs(positionPercentages[0] - positionPercentages[1])
								+ '%';
						} else {
							this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1])
								+ '%';
							this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1])
								+ '%';

							var offset_min = this.tooltip_min.getBoundingClientRect();
							var offset_max = this.tooltip_max.getBoundingClientRect();

							if (offset_min.right > offset_max.left) {
								this._removeClass(this.tooltip_max, 'top');
								this._addClass(this.tooltip_max, 'bottom');
								this.tooltip_max.style.top = 18 + 'px';
							} else {
								this._removeClass(this.tooltip_max, 'bottom');
								this._addClass(this.tooltip_max, 'top');
								this.tooltip_max.style.top = -30 + 'px';
							}
						}

						var formattedTooltipVal;

						if (this.options.range) {
							formattedTooltipVal = this.options.formatter(this.options.value);
							this._setText(this.tooltipInner, formattedTooltipVal);
							this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0]) / 2
								+ '%';

							if (this.options.orientation === 'vertical') {
								this._css(this.tooltip, 'margin-top', -this.tooltip.offsetHeight / 2 + 'px');
							} else {
								this._css(this.tooltip, 'margin-left', -this.tooltip.offsetWidth / 2 + 'px');
							}

							if (this.options.orientation === 'vertical') {
								this._css(this.tooltip, 'margin-top', -this.tooltip.offsetHeight / 2 + 'px');
							} else {
								this._css(this.tooltip, 'margin-left', -this.tooltip.offsetWidth / 2 + 'px');
							}

							var innerTooltipMinText = this.options.formatter(this.options.value[0]);
							this._setText(this.tooltipInner_min, innerTooltipMinText);

							var innerTooltipMaxText = this.options.formatter(this.options.value[1]);
							this._setText(this.tooltipInner_max, innerTooltipMaxText);

							this.tooltip_min.style[this.stylePos] = positionPercentages[0] + '%';

							if (this.options.orientation === 'vertical') {
								this._css(this.tooltip_min, 'margin-top', -this.tooltip_min.offsetHeight / 2 + 'px');
							} else {
								this._css(this.tooltip_min, 'margin-left', -this.tooltip_min.offsetWidth / 2 + 'px');
							}

							this.tooltip_max.style[this.stylePos] = positionPercentages[1] + '%';

							if (this.options.orientation === 'vertical') {
								this._css(this.tooltip_max, 'margin-top', -this.tooltip_max.offsetHeight / 2 + 'px');
							} else {
								this._css(this.tooltip_max, 'margin-left', -this.tooltip_max.offsetWidth / 2 + 'px');
							}
						} else {
							formattedTooltipVal = this.options.formatter(this.options.value[0]);
							this._setText(this.tooltipInner, formattedTooltipVal);

							this.tooltip.style[this.stylePos] = positionPercentages[0] + '%';
							if (this.options.orientation === 'vertical') {
								this._css(this.tooltip, 'margin-top', -this.tooltip.offsetHeight / 2 + 'px');
							} else {
								this._css(this.tooltip, 'margin-left', -this.tooltip.offsetWidth / 2 + 'px');
							}
						}
					},
					_removeProperty: function(element, prop) {
						if (element.style.removeProperty) {
							element.style.removeProperty(prop);
						} else {
							element.style.removeAttribute(prop);
						}
					},
					_mousedown: function(ev) {
						if (!this.options.enabled) {
							return false;
						}

						this._triggerFocusOnHandle();

						this.offset = this._offset(this.sliderElem);
						this.size = this.sliderElem[this.sizePos];

						var percentage = this._getPercentage(ev);

						if (this.options.range) {
							var diff1 = Math.abs(this.percentage[0] - percentage);
							var diff2 = Math.abs(this.percentage[1] - percentage);
							this.dragged = (diff1 < diff2) ? 0 : 1;
						} else {
							this.dragged = 0;
						}

						this.percentage[this.dragged] = this.options.reversed ? 100 - percentage : percentage;
						this._layout();

						if (this.touchCapable) {
							document.removeEventListener("touchmove", this.mousemove, false);
							document.removeEventListener("touchend", this.mouseup, false);
						}

						if (this.mousemove) {
							document.removeEventListener("mousemove", this.mousemove, false);
						}
						if (this.mouseup) {
							document.removeEventListener("mouseup", this.mouseup, false);
						}

						this.mousemove = this._mousemove.bind(this);
						this.mouseup = this._mouseup.bind(this);

						if (this.touchCapable) {
							// Touch: Bind touch events:
							document.addEventListener("touchmove", this.mousemove, false);
							document.addEventListener("touchend", this.mouseup, false);
						}
						// Bind mouse events:
						document.addEventListener("mousemove", this.mousemove, false);
						document.addEventListener("mouseup", this.mouseup, false);

						this.inDrag = true;

						var val = this._calculateValue();
						this._trigger('slideStart', val);
						this._setDataVal(val);
						this.setValue(val);

						this._pauseEvent(ev);

						return true;
					},
					_triggerFocusOnHandle: function(handleIdx) {
						if (handleIdx === 0) {
							this.handle1.focus();
						}
						if (handleIdx === 1) {
							this.handle2.focus();
						}
					},
					_keydown: function(handleIdx, ev) {
						if (!this.options.enabled) {
							return false;
						}

						var dir;
						switch (ev.keyCode) {
							case 37: // left
							case 40: // down
								dir = -1;
								break;
							case 39: // right
							case 38: // up
								dir = 1;
								break;
						}
						if (!dir) {
							return;
						}

						// use natural arrow keys instead of from min to max
						if (this.options.natural_arrow_keys) {
							var ifVerticalAndNotReversed = (this.options.orientation === 'vertical' && !this.options.reversed);
							var ifHorizontalAndReversed = (this.options.orientation === 'horizontal' && this.options.reversed);

							if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
								dir = dir * -1;
							}
						}

						var oneStepValuePercentageChange = dir * this.percentage[2];
						var percentage = this.percentage[handleIdx] + oneStepValuePercentageChange;

						if (percentage > 100) {
							percentage = 100;
						} else if (percentage < 0) {
							percentage = 0;
						}

						this.dragged = handleIdx;
						this._adjustPercentageForRangeSliders(percentage);
						this.percentage[this.dragged] = percentage;
						this._layout();

						var val = this._calculateValue();

						this._trigger('slideStart', val);
						this._setDataVal(val);
						this.setValue(val, true);

						this._trigger('slideStop', val);
						this._setDataVal(val);

						this._pauseEvent(ev);

						return false;
					},
					_pauseEvent: function(ev) {
						if (ev.stopPropagation) {
							ev.stopPropagation();
						}
						if (ev.preventDefault) {
							ev.preventDefault();
						}
						ev.cancelBubble = true;
						ev.returnValue = false;
					},
					_mousemove: function(ev) {
						if (!this.options.enabled) {
							return false;
						}

						var percentage = this._getPercentage(ev);
						this._adjustPercentageForRangeSliders(percentage);
						this.percentage[this.dragged] = this.options.reversed ? 100 - percentage : percentage;
						this._layout();

						var val = this._calculateValue();
						this.setValue(val, true);

						return false;
					},
					_adjustPercentageForRangeSliders: function(percentage) {
						if (this.options.range) {
							if (this.dragged === 0 && this.percentage[1] < percentage) {
								this.percentage[0] = this.percentage[1];
								this.dragged = 1;
							} else if (this.dragged === 1 && this.percentage[0] > percentage) {
								this.percentage[1] = this.percentage[0];
								this.dragged = 0;
							}
						}
					},
					_mouseup: function() {
						if (!this.options.enabled) {
							return false;
						}
						if (this.touchCapable) {
							// Touch: Unbind touch event handlers:
							document.removeEventListener("touchmove", this.mousemove, false);
							document.removeEventListener("touchend", this.mouseup, false);
						}
						// Unbind mouse event handlers:
						document.removeEventListener("mousemove", this.mousemove, false);
						document.removeEventListener("mouseup", this.mouseup, false);

						this.inDrag = false;
						if (this.over === false) {
							this._hideTooltip();
						}
						var val = this._calculateValue();

						this._layout();
						this._setDataVal(val);
						this._trigger('slideStop', val);

						return false;
					},
					_calculateValue: function() {
						var val;
						if (this.options.range) {
							val = [this.options.min, this.options.max];
							if (this.percentage[0] !== 0) {
								val[0] = (Math.max(this.options.min, this.options.min
									+ Math.round((this.diff * this.percentage[0] / 100) / this.options.step)
									* this.options.step));
								val[0] = this._applyPrecision(val[0]);
							}
							if (this.percentage[1] !== 100) {
								val[1] = (Math.min(this.options.max, this.options.min
									+ Math.round((this.diff * this.percentage[1] / 100) / this.options.step)
									* this.options.step));
								val[1] = this._applyPrecision(val[1]);
							}
							this.options.value = val;
						} else {
							val = (this.options.min + Math.round((this.diff * this.percentage[0] / 100)
								/ this.options.step)
								* this.options.step);
							if (val < this.options.min) {
								val = this.options.min;
							} else if (val > this.options.max) {
								val = this.options.max;
							}
							val = parseFloat(val);
							val = this._applyPrecision(val);
							this.options.value = [val, this.options.value[1]];
						}
						return val;
					},
					_applyPrecision: function(val) {
						var precision = this.options.precision
							|| this._getNumDigitsAfterDecimalPlace(this.options.step);
						return this._applyToFixedAndParseFloat(val, precision);
					},
					_getNumDigitsAfterDecimalPlace: function(num) {
						var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
						if (!match) {
							return 0;
						}
						return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
					},
					_applyToFixedAndParseFloat: function(num, toFixedInput) {
						var truncatedNum = num.toFixed(toFixedInput);
						return parseFloat(truncatedNum);
					},
					/*
						Credits to Mike Samuel for the following method!
						Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
					 */
					_getPercentage: function(ev) {
						if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove')) {
							ev = ev.touches[0];
						}
						var percentage = (ev[this.mousePos] - this.offset[this.stylePos]) * 100 / this.size;
						percentage = Math.round(percentage / this.percentage[2]) * this.percentage[2];
						return Math.max(0, Math.min(100, percentage));
					},
					_validateInputValue: function(val) {
						if (typeof val === 'number') {
							return val;
						} else if (val instanceof Array) {
							this._validateArray(val);
							return val;
						} else {
							throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val));
						}
					},
					_validateArray: function(val) {
						for ( var i = 0; i < val.length; i++) {
							var input = val[i];
							if (typeof input !== 'number') {
								throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input));
							}
						}
					},
					_setDataVal: function(val) {
						var value = "value: '" + val + "'";
						this.element.setAttribute('data', value);
						this.element.setAttribute('value', val);
					},
					_trigger: function(evt, val) {
						val = (val || val === 0) ? val : undefined;

						var callbackFnArray = this.eventToCallbackMap[evt];
						if (callbackFnArray && callbackFnArray.length) {
							for ( var i = 0; i < callbackFnArray.length; i++) {
								var callbackFn = callbackFnArray[i];
								callbackFn(val);
							}
						}

						/* If JQuery exists, trigger JQuery events */
						if ($) {
							this._triggerJQueryEvent(evt, val);
						}
					},
					_triggerJQueryEvent: function(evt, val) {
						var eventData = {
							type: evt,
							value: val
						};
						this.$element.trigger(eventData);
						this.$sliderElem.trigger(eventData);
					},
					_unbindJQueryEventHandlers: function() {
						this.$element.off();
						this.$sliderElem.off();
					},
					_setText: function(element, text) {
						if (typeof element.innerText !== "undefined") {
							element.innerText = text;
						} else if (typeof element.textContent !== "undefined") {
							element.textContent = text;
						}
					},
					_removeClass: function(element, classString) {
						var classes = classString.split(" ");
						var newClasses = element.className;

						for ( var i = 0; i < classes.length; i++) {
							var classTag = classes[i];
							var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
							newClasses = newClasses.replace(regex, " ");
						}

						element.className = newClasses.trim();
					},
					_addClass: function(element, classString) {
						var classes = classString.split(" ");
						var newClasses = element.className;

						for ( var i = 0; i < classes.length; i++) {
							var classTag = classes[i];
							var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
							var ifClassExists = regex.test(newClasses);

							if (!ifClassExists) {
								newClasses += " " + classTag;
							}
						}

						element.className = newClasses.trim();
					},
					_offset: function(obj) {
						var ol = 0;
						var ot = 0;
						if (obj.offsetParent) {
							do {
								ol += obj.offsetLeft;
								ot += obj.offsetTop;
							} while (obj = obj.offsetParent);
						}
						return {
							left: ol,
							top: ot
						};
					},
					_css: function(elementRef, styleName, value) {
						if ($) {
							$.style(elementRef, styleName, value);
						} else {
							var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi,
								function(all, letter) {
									return letter.toUpperCase();
								});
							elementRef.style[style] = value;
						}
					}
				};

				/*********************************

					Attach to global namespace

				 *********************************/
				if ($) {
					var namespace = $.fn.slider ? 'bootstrapSlider' : 'slider';
					$.bridget(namespace, Slider);
				}

			})($);

			return Slider;
		}));
//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function(undefined) {
	/************************************
	    Constants
	 ************************************/

	var moment, VERSION = '2.8.4',
	// the global-scope this is NOT the global object in Node.js
	globalScope = typeof global !== 'undefined' ? global : this, oldGlobalMoment, round = Math.round, hasOwnProperty = Object.prototype.hasOwnProperty, i,

	YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6,

	// internal storage for locale config files
	locales = {},

	// extra moment internal properties (plugins register props here)
	momentProperties = [],

	// check for nodeJS
	hasModule = (typeof module !== 'undefined' && module && module.exports),

	// ASP.NET json date format regex
	aspNetJsonRegex = /^\/?Date\((\-?\d+)/i, aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

	// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

	// format tokens
	formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

	// parsing token regexes
	parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
	parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
	parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
	parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
	parseTokenDigits = /\d+/, // nonzero number of digits
	parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
	parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
	parseTokenT = /T/i, // T (ISO separator)
	parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
	parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

	//strict parsing regexes
	parseTokenOneDigit = /\d/, // 0 - 9
	parseTokenTwoDigits = /\d\d/, // 00 - 99
	parseTokenThreeDigits = /\d{3}/, // 000 - 999
	parseTokenFourDigits = /\d{4}/, // 0000 - 9999
	parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
	parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

	// iso 8601 regex
	// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

	isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/], ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
		['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/], ['GGGG-[W]WW', /\d{4}-W\d{2}/], ['YYYY-DDD', /\d{4}-\d{3}/]],

	// iso time formats and regexes
	isoTimes = [['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
		['HH:mm', /(T| )\d\d:\d\d/], ['HH', /(T| )\d\d/]],

	// timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-15', '30']
	parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	// getter and setter names
	proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'), unitMillisecondFactors = {
		'Milliseconds': 1,
		'Seconds': 1e3,
		'Minutes': 6e4,
		'Hours': 36e5,
		'Days': 864e5,
		'Months': 2592e6,
		'Years': 31536e6
	},

	unitAliases = {
		ms: 'millisecond',
		s: 'second',
		m: 'minute',
		h: 'hour',
		d: 'day',
		D: 'date',
		w: 'week',
		W: 'isoWeek',
		M: 'month',
		Q: 'quarter',
		y: 'year',
		DDD: 'dayOfYear',
		e: 'weekday',
		E: 'isoWeekday',
		gg: 'weekYear',
		GG: 'isoWeekYear'
	},

	camelFunctions = {
		dayofyear: 'dayOfYear',
		isoweekday: 'isoWeekday',
		isoweek: 'isoWeek',
		weekyear: 'weekYear',
		isoweekyear: 'isoWeekYear'
	},

	// format function strings
	formatFunctions = {},

	// default relative time thresholds
	relativeTimeThresholds = {
		s: 45, // seconds to minute
		m: 45, // minutes to hour
		h: 22, // hours to day
		d: 26, // days to month
		M: 11
	// months to year
	},

	// tokens to ordinalize and pad
	ordinalizeTokens = 'DDD w W M D d'.split(' '), paddedTokens = 'M D H h m s w W'.split(' '),

	formatTokenFunctions = {
		M: function() {
			return this.month() + 1;
		},
		MMM: function(format) {
			return this.localeData().monthsShort(this, format);
		},
		MMMM: function(format) {
			return this.localeData().months(this, format);
		},
		D: function() {
			return this.date();
		},
		DDD: function() {
			return this.dayOfYear();
		},
		d: function() {
			return this.day();
		},
		dd: function(format) {
			return this.localeData().weekdaysMin(this, format);
		},
		ddd: function(format) {
			return this.localeData().weekdaysShort(this, format);
		},
		dddd: function(format) {
			return this.localeData().weekdays(this, format);
		},
		w: function() {
			return this.week();
		},
		W: function() {
			return this.isoWeek();
		},
		YY: function() {
			return leftZeroFill(this.year() % 100, 2);
		},
		YYYY: function() {
			return leftZeroFill(this.year(), 4);
		},
		YYYYY: function() {
			return leftZeroFill(this.year(), 5);
		},
		YYYYYY: function() {
			var y = this.year(), sign = y >= 0 ? '+' : '-';
			return sign + leftZeroFill(Math.abs(y), 6);
		},
		gg: function() {
			return leftZeroFill(this.weekYear() % 100, 2);
		},
		gggg: function() {
			return leftZeroFill(this.weekYear(), 4);
		},
		ggggg: function() {
			return leftZeroFill(this.weekYear(), 5);
		},
		GG: function() {
			return leftZeroFill(this.isoWeekYear() % 100, 2);
		},
		GGGG: function() {
			return leftZeroFill(this.isoWeekYear(), 4);
		},
		GGGGG: function() {
			return leftZeroFill(this.isoWeekYear(), 5);
		},
		e: function() {
			return this.weekday();
		},
		E: function() {
			return this.isoWeekday();
		},
		a: function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), true);
		},
		A: function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), false);
		},
		H: function() {
			return this.hours();
		},
		h: function() {
			return this.hours() % 12 || 12;
		},
		m: function() {
			return this.minutes();
		},
		s: function() {
			return this.seconds();
		},
		S: function() {
			return toInt(this.milliseconds() / 100);
		},
		SS: function() {
			return leftZeroFill(toInt(this.milliseconds() / 10), 2);
		},
		SSS: function() {
			return leftZeroFill(this.milliseconds(), 3);
		},
		SSSS: function() {
			return leftZeroFill(this.milliseconds(), 3);
		},
		Z: function() {
			var a = -this.zone(), b = '+';
			if (a < 0) {
				a = -a;
				b = '-';
			}
			return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
		},
		ZZ: function() {
			var a = -this.zone(), b = '+';
			if (a < 0) {
				a = -a;
				b = '-';
			}
			return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
		},
		z: function() {
			return this.zoneAbbr();
		},
		zz: function() {
			return this.zoneName();
		},
		x: function() {
			return this.valueOf();
		},
		X: function() {
			return this.unix();
		},
		Q: function() {
			return this.quarter();
		}
	},

	deprecations = {},

	lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

	// Pick the first defined of two or three arguments. dfl comes from
	// default.
	function dfl(a, b, c) {
		switch (arguments.length) {
			case 2:
				return a != null ? a : b;
			case 3:
				return a != null ? a : b != null ? b : c;
			default:
				throw new Error('Implement me');
		}
	}

	function hasOwnProp(a, b) {
		return hasOwnProperty.call(a, b);
	}

	function defaultParsingFlags() {
		// We need to deep clone this object, and es5 standard is not very
		// helpful.
		return {
			empty: false,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: false,
			invalidMonth: null,
			invalidFormat: false,
			userInvalidated: false,
			iso: false
		};
	}

	function printMsg(msg) {
		if (moment.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
			console.warn('Deprecation warning: ' + msg);
		}
	}

	function deprecate(msg, fn) {
		var firstTime = true;
		return extend(function() {
			if (firstTime) {
				printMsg(msg);
				firstTime = false;
			}
			return fn.apply(this, arguments);
		}, fn);
	}

	function deprecateSimple(name, msg) {
		if (!deprecations[name]) {
			printMsg(msg);
			deprecations[name] = true;
		}
	}

	function padToken(func, count) {
		return function(a) {
			return leftZeroFill(func.call(this, a), count);
		};
	}
	function ordinalizeToken(func, period) {
		return function(a) {
			return this.localeData().ordinal(func.call(this, a), period);
		};
	}

	while (ordinalizeTokens.length) {
		i = ordinalizeTokens.pop();
		formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
	}
	while (paddedTokens.length) {
		i = paddedTokens.pop();
		formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	}
	formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);

	/************************************
	    Constructors
	 ************************************/

	function Locale() {
	}

	// Moment prototype object
	function Moment(config, skipOverflow) {
		if (skipOverflow !== false) {
			checkOverflow(config);
		}
		copyConfig(this, config);
		this._d = new Date(+config._d);
	}

	// Duration Constructor
	function Duration(duration) {
		var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;

		// representation for dateAddRemove
		this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
		minutes * 6e4 + // 1000 * 60
		hours * 36e5; // 1000 * 60 * 60
		// Because of dateAddRemove treats 24 hours as different from a
		// day when working around DST, we need to store them separately
		this._days = +days + weeks * 7;
		// It is impossible translate months into days without knowing
		// which months you are are talking about, so we have to store
		// it separately.
		this._months = +months + quarters * 3 + years * 12;

		this._data = {};

		this._locale = moment.localeData();

		this._bubble();
	}

	/************************************
	    Helpers
	 ************************************/

	function extend(a, b) {
		for ( var i in b) {
			if (hasOwnProp(b, i)) {
				a[i] = b[i];
			}
		}

		if (hasOwnProp(b, 'toString')) {
			a.toString = b.toString;
		}

		if (hasOwnProp(b, 'valueOf')) {
			a.valueOf = b.valueOf;
		}

		return a;
	}

	function copyConfig(to, from) {
		var i, prop, val;

		if (typeof from._isAMomentObject !== 'undefined') {
			to._isAMomentObject = from._isAMomentObject;
		}
		if (typeof from._i !== 'undefined') {
			to._i = from._i;
		}
		if (typeof from._f !== 'undefined') {
			to._f = from._f;
		}
		if (typeof from._l !== 'undefined') {
			to._l = from._l;
		}
		if (typeof from._strict !== 'undefined') {
			to._strict = from._strict;
		}
		if (typeof from._tzm !== 'undefined') {
			to._tzm = from._tzm;
		}
		if (typeof from._isUTC !== 'undefined') {
			to._isUTC = from._isUTC;
		}
		if (typeof from._offset !== 'undefined') {
			to._offset = from._offset;
		}
		if (typeof from._pf !== 'undefined') {
			to._pf = from._pf;
		}
		if (typeof from._locale !== 'undefined') {
			to._locale = from._locale;
		}

		if (momentProperties.length > 0) {
			for (i in momentProperties) {
				prop = momentProperties[i];
				val = from[prop];
				if (typeof val !== 'undefined') {
					to[prop] = val;
				}
			}
		}

		return to;
	}

	function absRound(number) {
		if (number < 0) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	}

	// left zero fill a number
	// see http://jsperf.com/left-zero-filling for performance comparison
	function leftZeroFill(number, targetLength, forceSign) {
		var output = '' + Math.abs(number), sign = number >= 0;

		while (output.length < targetLength) {
			output = '0' + output;
		}
		return (sign ? (forceSign ? '+' : '') : '-') + output;
	}

	function positiveMomentsDifference(base, other) {
		var res = {
			milliseconds: 0,
			months: 0
		};

		res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
		if (base.clone().add(res.months, 'M').isAfter(other)) {
			--res.months;
		}

		res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

		return res;
	}

	function momentsDifference(base, other) {
		var res;
		other = makeAs(other, base);
		if (base.isBefore(other)) {
			res = positiveMomentsDifference(base, other);
		} else {
			res = positiveMomentsDifference(other, base);
			res.milliseconds = -res.milliseconds;
			res.months = -res.months;
		}

		return res;
	}

	// TODO: remove 'name' arg after deprecation is removed
	function createAdder(direction, name) {
		return function(val, period) {
			var dur, tmp;
			//invert the arguments, but complain about it
			if (period !== null && !isNaN(+period)) {
				deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().'
					+ name + '(number, period).');
				tmp = val;
				val = period;
				period = tmp;
			}

			val = typeof val === 'string' ? +val : val;
			dur = moment.duration(val, period);
			addOrSubtractDurationFromMoment(this, dur, direction);
			return this;
		};
	}

	function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
		var milliseconds = duration._milliseconds, days = duration._days, months = duration._months;
		updateOffset = updateOffset == null ? true : updateOffset;

		if (milliseconds) {
			mom._d.setTime(+mom._d + milliseconds * isAdding);
		}
		if (days) {
			rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
		}
		if (months) {
			rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
		}
		if (updateOffset) {
			moment.updateOffset(mom, days || months);
		}
	}

	// check if is an array
	function isArray(input) {
		return Object.prototype.toString.call(input) === '[object Array]';
	}

	function isDate(input) {
		return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
	}

	// compare two arrays, return the number of differences
	function compareArrays(array1, array2, dontConvert) {
		var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
		for (i = 0; i < len; i++) {
			if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
				diffs++;
			}
		}
		return diffs + lengthDiff;
	}

	function normalizeUnits(units) {
		if (units) {
			var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
			units = unitAliases[units] || camelFunctions[lowered] || lowered;
		}
		return units;
	}

	function normalizeObjectUnits(inputObject) {
		var normalizedInput = {}, normalizedProp, prop;

		for (prop in inputObject) {
			if (hasOwnProp(inputObject, prop)) {
				normalizedProp = normalizeUnits(prop);
				if (normalizedProp) {
					normalizedInput[normalizedProp] = inputObject[prop];
				}
			}
		}

		return normalizedInput;
	}

	function makeList(field) {
		var count, setter;

		if (field.indexOf('week') === 0) {
			count = 7;
			setter = 'day';
		} else if (field.indexOf('month') === 0) {
			count = 12;
			setter = 'month';
		} else {
			return;
		}

		moment[field] = function(format, index) {
			var i, getter, method = moment._locale[field], results = [];

			if (typeof format === 'number') {
				index = format;
				format = undefined;
			}

			getter = function(i) {
				var m = moment().utc().set(setter, i);
				return method.call(moment._locale, m, format || '');
			};

			if (index != null) {
				return getter(index);
			} else {
				for (i = 0; i < count; i++) {
					results.push(getter(i));
				}
				return results;
			}
		};
	}

	function toInt(argumentForCoercion) {
		var coercedNumber = +argumentForCoercion, value = 0;

		if (coercedNumber !== 0 && isFinite(coercedNumber)) {
			if (coercedNumber >= 0) {
				value = Math.floor(coercedNumber);
			} else {
				value = Math.ceil(coercedNumber);
			}
		}

		return value;
	}

	function daysInMonth(year, month) {
		return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	}

	function weeksInYear(year, dow, doy) {
		return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
	}

	function daysInYear(year) {
		return isLeapYear(year) ? 366 : 365;
	}

	function isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	function checkOverflow(m) {
		var overflow;
		if (m._a && m._pf.overflow === -2) {
			overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1
				|| m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 24
				|| (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 || m._a[SECOND] !== 0 || m._a[MILLISECOND] !== 0)) ? HOUR
				: m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND
					: m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;

			if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
				overflow = DATE;
			}

			m._pf.overflow = overflow;
		}
	}

	function isValid(m) {
		if (m._isValid == null) {
			m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth
				&& !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;

			if (m._strict) {
				m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0
					&& m._pf.bigHour === undefined;
			}
		}
		return m._isValid;
	}

	function normalizeLocale(key) {
		return key ? key.toLowerCase().replace('_', '-') : key;
	}

	// pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function chooseLocale(names) {
		var i = 0, j, next, locale, split;

		while (i < names.length) {
			split = normalizeLocale(names[i]).split('-');
			j = split.length;
			next = normalizeLocale(names[i + 1]);
			next = next ? next.split('-') : null;
			while (j > 0) {
				locale = loadLocale(split.slice(0, j).join('-'));
				if (locale) {
					return locale;
				}
				if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
					//the next array item is better than a shallower substring of this one
					break;
				}
				j--;
			}
			i++;
		}
		return null;
	}

	function loadLocale(name) {
		var oldLocale = null;
		if (!locales[name] && hasModule) {
			try {
				oldLocale = moment.locale();
				require('./locale/' + name);
				// because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
				moment.locale(oldLocale);
			} catch (e) {
			}
		}
		return locales[name];
	}

	// Return a moment from input, that is local/utc/zone equivalent to model.
	function makeAs(input, model) {
		var res, diff;
		if (model._isUTC) {
			res = model.clone();
			diff = (moment.isMoment(input) || isDate(input) ? +input : +moment(input)) - (+res);
			// Use low-level api, because this fn is low-level api.
			res._d.setTime(+res._d + diff);
			moment.updateOffset(res, false);
			return res;
		} else {
			return moment(input).local();
		}
	}

	/************************************
	    Locale
	 ************************************/

	extend(
		Locale.prototype,
		{

			set: function(config) {
				var prop, i;
				for (i in config) {
					prop = config[i];
					if (typeof prop === 'function') {
						this[i] = prop;
					} else {
						this['_' + i] = prop;
					}
				}
				// Lenient ordinal parsing accepts just a number in addition to
				// number + (possibly) stuff coming from _ordinalParseLenient.
				this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
			},

			_months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
			months: function(m) {
				return this._months[m.month()];
			},

			_monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
			monthsShort: function(m) {
				return this._monthsShort[m.month()];
			},

			monthsParse: function(monthName, format, strict) {
				var i, mom, regex;

				if (!this._monthsParse) {
					this._monthsParse = [];
					this._longMonthsParse = [];
					this._shortMonthsParse = [];
				}

				for (i = 0; i < 12; i++) {
					// make the regex if we don't have it already
					mom = moment.utc([2000, i]);
					if (strict && !this._longMonthsParse[i]) {
						this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
						this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$',
							'i');
					}
					if (!strict && !this._monthsParse[i]) {
						regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
						this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
					}
					// test the regex
					if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
						return i;
					} else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
						return i;
					} else if (!strict && this._monthsParse[i].test(monthName)) {
						return i;
					}
				}
			},

			_weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
			weekdays: function(m) {
				return this._weekdays[m.day()];
			},

			_weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
			weekdaysShort: function(m) {
				return this._weekdaysShort[m.day()];
			},

			_weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
			weekdaysMin: function(m) {
				return this._weekdaysMin[m.day()];
			},

			weekdaysParse: function(weekdayName) {
				var i, mom, regex;

				if (!this._weekdaysParse) {
					this._weekdaysParse = [];
				}

				for (i = 0; i < 7; i++) {
					// make the regex if we don't have it already
					if (!this._weekdaysParse[i]) {
						mom = moment([2000, 1]).day(i);
						regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^'
							+ this.weekdaysMin(mom, '');
						this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
					}
					// test the regex
					if (this._weekdaysParse[i].test(weekdayName)) {
						return i;
					}
				}
			},

			_longDateFormat: {
				LTS: 'h:mm:ss A',
				LT: 'h:mm A',
				L: 'MM/DD/YYYY',
				LL: 'MMMM D, YYYY',
				LLL: 'MMMM D, YYYY LT',
				LLLL: 'dddd, MMMM D, YYYY LT'
			},
			longDateFormat: function(key) {
				var output = this._longDateFormat[key];
				if (!output && this._longDateFormat[key.toUpperCase()]) {
					output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
						return val.slice(1);
					});
					this._longDateFormat[key] = output;
				}
				return output;
			},

			isPM: function(input) {
				// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
				// Using charAt should be more compatible.
				return ((input + '').toLowerCase().charAt(0) === 'p');
			},

			_meridiemParse: /[ap]\.?m?\.?/i,
			meridiem: function(hours, minutes, isLower) {
				if (hours > 11) {
					return isLower ? 'pm' : 'PM';
				} else {
					return isLower ? 'am' : 'AM';
				}
			},

			_calendar: {
				sameDay: '[Today at] LT',
				nextDay: '[Tomorrow at] LT',
				nextWeek: 'dddd [at] LT',
				lastDay: '[Yesterday at] LT',
				lastWeek: '[Last] dddd [at] LT',
				sameElse: 'L'
			},
			calendar: function(key, mom, now) {
				var output = this._calendar[key];
				return typeof output === 'function' ? output.apply(mom, [now]) : output;
			},

			_relativeTime: {
				future: 'in %s',
				past: '%s ago',
				s: 'a few seconds',
				m: 'a minute',
				mm: '%d minutes',
				h: 'an hour',
				hh: '%d hours',
				d: 'a day',
				dd: '%d days',
				M: 'a month',
				MM: '%d months',
				y: 'a year',
				yy: '%d years'
			},

			relativeTime: function(number, withoutSuffix, string, isFuture) {
				var output = this._relativeTime[string];
				return (typeof output === 'function') ? output(number, withoutSuffix, string, isFuture) : output
					.replace(/%d/i, number);
			},

			pastFuture: function(diff, output) {
				var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
				return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
			},

			ordinal: function(number) {
				return this._ordinal.replace('%d', number);
			},
			_ordinal: '%d',
			_ordinalParse: /\d{1,2}/,

			preparse: function(string) {
				return string;
			},

			postformat: function(string) {
				return string;
			},

			week: function(mom) {
				return weekOfYear(mom, this._week.dow, this._week.doy).week;
			},

			_week: {
				dow: 0, // Sunday is the first day of the week.
				doy: 6
			// The week that contains Jan 1st is the first week of the year.
			},

			_invalidDate: 'Invalid date',
			invalidDate: function() {
				return this._invalidDate;
			}
		});

	/************************************
	    Formatting
	 ************************************/

	function removeFormattingTokens(input) {
		if (input.match(/\[[\s\S]/)) {
			return input.replace(/^\[|\]$/g, '');
		}
		return input.replace(/\\/g, '');
	}

	function makeFormatFunction(format) {
		var array = format.match(formattingTokens), i, length;

		for (i = 0, length = array.length; i < length; i++) {
			if (formatTokenFunctions[array[i]]) {
				array[i] = formatTokenFunctions[array[i]];
			} else {
				array[i] = removeFormattingTokens(array[i]);
			}
		}

		return function(mom) {
			var output = '';
			for (i = 0; i < length; i++) {
				output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
			}
			return output;
		};
	}

	// format date using native date object
	function formatMoment(m, format) {
		if (!m.isValid()) {
			return m.localeData().invalidDate();
		}

		format = expandFormat(format, m.localeData());

		if (!formatFunctions[format]) {
			formatFunctions[format] = makeFormatFunction(format);
		}

		return formatFunctions[format](m);
	}

	function expandFormat(format, locale) {
		var i = 5;

		function replaceLongDateFormatTokens(input) {
			return locale.longDateFormat(input) || input;
		}

		localFormattingTokens.lastIndex = 0;
		while (i >= 0 && localFormattingTokens.test(format)) {
			format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
			localFormattingTokens.lastIndex = 0;
			i -= 1;
		}

		return format;
	}

	/************************************
	    Parsing
	 ************************************/

	// get the regex to find the next token
	function getParseRegexForToken(token, config) {
		var a, strict = config._strict;
		switch (token) {
			case 'Q':
				return parseTokenOneDigit;
			case 'DDDD':
				return parseTokenThreeDigits;
			case 'YYYY':
			case 'GGGG':
			case 'gggg':
				return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
			case 'Y':
			case 'G':
			case 'g':
				return parseTokenSignedNumber;
			case 'YYYYYY':
			case 'YYYYY':
			case 'GGGGG':
			case 'ggggg':
				return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
			case 'S':
				if (strict) {
					return parseTokenOneDigit;
				}
				/* falls through */
			case 'SS':
				if (strict) {
					return parseTokenTwoDigits;
				}
				/* falls through */
			case 'SSS':
				if (strict) {
					return parseTokenThreeDigits;
				}
				/* falls through */
			case 'DDD':
				return parseTokenOneToThreeDigits;
			case 'MMM':
			case 'MMMM':
			case 'dd':
			case 'ddd':
			case 'dddd':
				return parseTokenWord;
			case 'a':
			case 'A':
				return config._locale._meridiemParse;
			case 'x':
				return parseTokenOffsetMs;
			case 'X':
				return parseTokenTimestampMs;
			case 'Z':
			case 'ZZ':
				return parseTokenTimezone;
			case 'T':
				return parseTokenT;
			case 'SSSS':
				return parseTokenDigits;
			case 'MM':
			case 'DD':
			case 'YY':
			case 'GG':
			case 'gg':
			case 'HH':
			case 'hh':
			case 'mm':
			case 'ss':
			case 'ww':
			case 'WW':
				return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
			case 'M':
			case 'D':
			case 'd':
			case 'H':
			case 'h':
			case 'm':
			case 's':
			case 'w':
			case 'W':
			case 'e':
			case 'E':
				return parseTokenOneOrTwoDigits;
			case 'Do':
				return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
			default:
				a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
				return a;
		}
	}

	function timezoneMinutesFromString(string) {
		string = string || '';
		var possibleTzMatches = (string.match(parseTokenTimezone) || []), tzChunk = possibleTzMatches[possibleTzMatches.length - 1]
			|| [], parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0], minutes = +(parts[1] * 60)
			+ toInt(parts[2]);

		return parts[0] === '+' ? -minutes : minutes;
	}

	// function to convert string input to date
	function addTimeToArrayFromToken(token, input, config) {
		var a, datePartArray = config._a;

		switch (token) {
			// QUARTER
			case 'Q':
				if (input != null) {
					datePartArray[MONTH] = (toInt(input) - 1) * 3;
				}
				break;
			// MONTH
			case 'M': // fall through to MM
			case 'MM':
				if (input != null) {
					datePartArray[MONTH] = toInt(input) - 1;
				}
				break;
			case 'MMM': // fall through to MMMM
			case 'MMMM':
				a = config._locale.monthsParse(input, token, config._strict);
				// if we didn't find a month name, mark the date as invalid.
				if (a != null) {
					datePartArray[MONTH] = a;
				} else {
					config._pf.invalidMonth = input;
				}
				break;
			// DAY OF MONTH
			case 'D': // fall through to DD
			case 'DD':
				if (input != null) {
					datePartArray[DATE] = toInt(input);
				}
				break;
			case 'Do':
				if (input != null) {
					datePartArray[DATE] = toInt(parseInt(input.match(/\d{1,2}/)[0], 10));
				}
				break;
			// DAY OF YEAR
			case 'DDD': // fall through to DDDD
			case 'DDDD':
				if (input != null) {
					config._dayOfYear = toInt(input);
				}

				break;
			// YEAR
			case 'YY':
				datePartArray[YEAR] = moment.parseTwoDigitYear(input);
				break;
			case 'YYYY':
			case 'YYYYY':
			case 'YYYYYY':
				datePartArray[YEAR] = toInt(input);
				break;
			// AM / PM
			case 'a': // fall through to A
			case 'A':
				config._isPm = config._locale.isPM(input);
				break;
			// HOUR
			case 'h': // fall through to hh
			case 'hh':
				config._pf.bigHour = true;
				/* falls through */
			case 'H': // fall through to HH
			case 'HH':
				datePartArray[HOUR] = toInt(input);
				break;
			// MINUTE
			case 'm': // fall through to mm
			case 'mm':
				datePartArray[MINUTE] = toInt(input);
				break;
			// SECOND
			case 's': // fall through to ss
			case 'ss':
				datePartArray[SECOND] = toInt(input);
				break;
			// MILLISECOND
			case 'S':
			case 'SS':
			case 'SSS':
			case 'SSSS':
				datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
				break;
			// UNIX OFFSET (MILLISECONDS)
			case 'x':
				config._d = new Date(toInt(input));
				break;
			// UNIX TIMESTAMP WITH MS
			case 'X':
				config._d = new Date(parseFloat(input) * 1000);
				break;
			// TIMEZONE
			case 'Z': // fall through to ZZ
			case 'ZZ':
				config._useUTC = true;
				config._tzm = timezoneMinutesFromString(input);
				break;
			// WEEKDAY - human
			case 'dd':
			case 'ddd':
			case 'dddd':
				a = config._locale.weekdaysParse(input);
				// if we didn't get a weekday name, mark the date as invalid
				if (a != null) {
					config._w = config._w || {};
					config._w['d'] = a;
				} else {
					config._pf.invalidWeekday = input;
				}
				break;
			// WEEK, WEEK DAY - numeric
			case 'w':
			case 'ww':
			case 'W':
			case 'WW':
			case 'd':
			case 'e':
			case 'E':
				token = token.substr(0, 1);
				/* falls through */
			case 'gggg':
			case 'GGGG':
			case 'GGGGG':
				token = token.substr(0, 2);
				if (input) {
					config._w = config._w || {};
					config._w[token] = toInt(input);
				}
				break;
			case 'gg':
			case 'GG':
				config._w = config._w || {};
				config._w[token] = moment.parseTwoDigitYear(input);
		}
	}

	function dayOfYearFromWeekInfo(config) {
		var w, weekYear, week, weekday, dow, doy, temp;

		w = config._w;
		if (w.GG != null || w.W != null || w.E != null) {
			dow = 1;
			doy = 4;

			// TODO: We need to take the current isoWeekYear, but that depends on
			// how we interpret now (local, utc, fixed offset). So create
			// a now version of current config (take local/utc/offset flags, and
			// create now).
			weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
			week = dfl(w.W, 1);
			weekday = dfl(w.E, 1);
		} else {
			dow = config._locale._week.dow;
			doy = config._locale._week.doy;

			weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
			week = dfl(w.w, 1);

			if (w.d != null) {
				// weekday -- low day numbers are considered next week
				weekday = w.d;
				if (weekday < dow) {
					++week;
				}
			} else if (w.e != null) {
				// local weekday -- counting starts from begining of week
				weekday = w.e + dow;
			} else {
				// default to begining of week
				weekday = dow;
			}
		}
		temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

		config._a[YEAR] = temp.year;
		config._dayOfYear = temp.dayOfYear;
	}

	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function dateFromConfig(config) {
		var i, date, input = [], currentDate, yearToUse;

		if (config._d) {
			return;
		}

		currentDate = currentDateArray(config);

		//compute day of the year from weeks and weekdays
		if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
			dayOfYearFromWeekInfo(config);
		}

		//if the day of the year is set, figure out what it is
		if (config._dayOfYear) {
			yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

			if (config._dayOfYear > daysInYear(yearToUse)) {
				config._pf._overflowDayOfYear = true;
			}

			date = makeUTCDate(yearToUse, 0, config._dayOfYear);
			config._a[MONTH] = date.getUTCMonth();
			config._a[DATE] = date.getUTCDate();
		}

		// Default to current date.
		// * if no year, month, day of month are given, default to today
		// * if day of month is given, default month and year
		// * if month is given, default only year
		// * if year is given, don't default anything
		for (i = 0; i < 3 && config._a[i] == null; ++i) {
			config._a[i] = input[i] = currentDate[i];
		}

		// Zero out whatever was not defaulted, including time
		for (; i < 7; i++) {
			config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
		}

		// Check for 24:00:00.000
		if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0
			&& config._a[MILLISECOND] === 0) {
			config._nextDay = true;
			config._a[HOUR] = 0;
		}

		config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
		// Apply timezone offset from input. The actual zone can be changed
		// with parseZone.
		if (config._tzm != null) {
			config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
		}

		if (config._nextDay) {
			config._a[HOUR] = 24;
		}
	}

	function dateFromObject(config) {
		var normalizedInput;

		if (config._d) {
			return;
		}

		normalizedInput = normalizeObjectUnits(config._i);
		config._a = [normalizedInput.year, normalizedInput.month, normalizedInput.day || normalizedInput.date,
			normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond];

		dateFromConfig(config);
	}

	function currentDateArray(config) {
		var now = new Date();
		if (config._useUTC) {
			return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
		} else {
			return [now.getFullYear(), now.getMonth(), now.getDate()];
		}
	}

	// date from string and format string
	function makeDateFromStringAndFormat(config) {
		if (config._f === moment.ISO_8601) {
			parseISO(config);
			return;
		}

		config._a = [];
		config._pf.empty = true;

		// This array is used to make a Date, either with `new Date` or `Date.UTC`
		var string = '' + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0;

		tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

		for (i = 0; i < tokens.length; i++) {
			token = tokens[i];
			parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
			if (parsedInput) {
				skipped = string.substr(0, string.indexOf(parsedInput));
				if (skipped.length > 0) {
					config._pf.unusedInput.push(skipped);
				}
				string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
				totalParsedInputLength += parsedInput.length;
			}
			// don't parse if it's not a known token
			if (formatTokenFunctions[token]) {
				if (parsedInput) {
					config._pf.empty = false;
				} else {
					config._pf.unusedTokens.push(token);
				}
				addTimeToArrayFromToken(token, parsedInput, config);
			} else if (config._strict && !parsedInput) {
				config._pf.unusedTokens.push(token);
			}
		}

		// add remaining unparsed input length to the string
		config._pf.charsLeftOver = stringLength - totalParsedInputLength;
		if (string.length > 0) {
			config._pf.unusedInput.push(string);
		}

		// clear _12h flag if hour is <= 12
		if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
			config._pf.bigHour = undefined;
		}
		// handle am pm
		if (config._isPm && config._a[HOUR] < 12) {
			config._a[HOUR] += 12;
		}
		// if is 12 am, change hours to 0
		if (config._isPm === false && config._a[HOUR] === 12) {
			config._a[HOUR] = 0;
		}
		dateFromConfig(config);
		checkOverflow(config);
	}

	function unescapeFormat(s) {
		return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
			return p1 || p2 || p3 || p4;
		});
	}

	// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function regexpEscape(s) {
		return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	}

	// date from string and array of format strings
	function makeDateFromStringAndArray(config) {
		var tempConfig, bestMoment,

		scoreToBeat, i, currentScore;

		if (config._f.length === 0) {
			config._pf.invalidFormat = true;
			config._d = new Date(NaN);
			return;
		}

		for (i = 0; i < config._f.length; i++) {
			currentScore = 0;
			tempConfig = copyConfig({}, config);
			if (config._useUTC != null) {
				tempConfig._useUTC = config._useUTC;
			}
			tempConfig._pf = defaultParsingFlags();
			tempConfig._f = config._f[i];
			makeDateFromStringAndFormat(tempConfig);

			if (!isValid(tempConfig)) {
				continue;
			}

			// if there is any input that was not parsed add a penalty for that format
			currentScore += tempConfig._pf.charsLeftOver;

			//or tokens
			currentScore += tempConfig._pf.unusedTokens.length * 10;

			tempConfig._pf.score = currentScore;

			if (scoreToBeat == null || currentScore < scoreToBeat) {
				scoreToBeat = currentScore;
				bestMoment = tempConfig;
			}
		}

		extend(config, bestMoment || tempConfig);
	}

	// date from iso format
	function parseISO(config) {
		var i, l, string = config._i, match = isoRegex.exec(string);

		if (match) {
			config._pf.iso = true;
			for (i = 0, l = isoDates.length; i < l; i++) {
				if (isoDates[i][1].exec(string)) {
					// match[5] should be 'T' or undefined
					config._f = isoDates[i][0] + (match[6] || ' ');
					break;
				}
			}
			for (i = 0, l = isoTimes.length; i < l; i++) {
				if (isoTimes[i][1].exec(string)) {
					config._f += isoTimes[i][0];
					break;
				}
			}
			if (string.match(parseTokenTimezone)) {
				config._f += 'Z';
			}
			makeDateFromStringAndFormat(config);
		} else {
			config._isValid = false;
		}
	}

	// date from iso format or fallback
	function makeDateFromString(config) {
		parseISO(config);
		if (config._isValid === false) {
			delete config._isValid;
			moment.createFromInputFallback(config);
		}
	}

	function map(arr, fn) {
		var res = [], i;
		for (i = 0; i < arr.length; ++i) {
			res.push(fn(arr[i], i));
		}
		return res;
	}

	function makeDateFromInput(config) {
		var input = config._i, matched;
		if (input === undefined) {
			config._d = new Date();
		} else if (isDate(input)) {
			config._d = new Date(+input);
		} else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
			config._d = new Date(+matched[1]);
		} else if (typeof input === 'string') {
			makeDateFromString(config);
		} else if (isArray(input)) {
			config._a = map(input.slice(0), function(obj) {
				return parseInt(obj, 10);
			});
			dateFromConfig(config);
		} else if (typeof (input) === 'object') {
			dateFromObject(config);
		} else if (typeof (input) === 'number') {
			// from milliseconds
			config._d = new Date(input);
		} else {
			moment.createFromInputFallback(config);
		}
	}

	function makeDate(y, m, d, h, M, s, ms) {
		//can't just apply() to create a date:
		//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
		var date = new Date(y, m, d, h, M, s, ms);

		//the date constructor doesn't accept years < 1970
		if (y < 1970) {
			date.setFullYear(y);
		}
		return date;
	}

	function makeUTCDate(y) {
		var date = new Date(Date.UTC.apply(null, arguments));
		if (y < 1970) {
			date.setUTCFullYear(y);
		}
		return date;
	}

	function parseWeekday(input, locale) {
		if (typeof input === 'string') {
			if (!isNaN(input)) {
				input = parseInt(input, 10);
			} else {
				input = locale.weekdaysParse(input);
				if (typeof input !== 'number') {
					return null;
				}
			}
		}
		return input;
	}

	/************************************
	    Relative Time
	 ************************************/

	// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
		return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	}

	function relativeTime(posNegDuration, withoutSuffix, locale) {
		var duration = moment.duration(posNegDuration).abs(), seconds = round(duration.as('s')), minutes = round(duration
			.as('m')), hours = round(duration.as('h')), days = round(duration.as('d')), months = round(duration.as('M')), years = round(duration
			.as('y')),

		args = seconds < relativeTimeThresholds.s && ['s', seconds] || minutes === 1 && ['m']
			|| minutes < relativeTimeThresholds.m && ['mm', minutes] || hours === 1 && ['h']
			|| hours < relativeTimeThresholds.h && ['hh', hours] || days === 1 && ['d']
			|| days < relativeTimeThresholds.d && ['dd', days] || months === 1 && ['M']
			|| months < relativeTimeThresholds.M && ['MM', months] || years === 1 && ['y'] || ['yy', years];

		args[2] = withoutSuffix;
		args[3] = +posNegDuration > 0;
		args[4] = locale;
		return substituteTimeAgo.apply({}, args);
	}

	/************************************
	    Week of Year
	 ************************************/

	// firstDayOfWeek       0 = sun, 6 = sat
	//                      the day of the week that starts the week
	//                      (usually sunday or monday)
	// firstDayOfWeekOfYear 0 = sun, 6 = sat
	//                      the first week is the week that contains the first
	//                      of this day of the week
	//                      (eg. ISO weeks use thursday (4))
	function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
		var end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(), adjustedMoment;

		if (daysToDayOfWeek > end) {
			daysToDayOfWeek -= 7;
		}

		if (daysToDayOfWeek < end - 7) {
			daysToDayOfWeek += 7;
		}

		adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
		return {
			week: Math.ceil(adjustedMoment.dayOfYear() / 7),
			year: adjustedMoment.year()
		};
	}

	//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
		var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

		d = d === 0 ? 7 : d;
		weekday = weekday != null ? weekday : firstDayOfWeek;
		daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
		dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

		return {
			year: dayOfYear > 0 ? year : year - 1,
			dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
		};
	}

	/************************************
	    Top Level Functions
	 ************************************/

	function makeMoment(config) {
		var input = config._i, format = config._f, res;

		config._locale = config._locale || moment.localeData(config._l);

		if (input === null || (format === undefined && input === '')) {
			return moment.invalid({
				nullInput: true
			});
		}

		if (typeof input === 'string') {
			config._i = input = config._locale.preparse(input);
		}

		if (moment.isMoment(input)) {
			return new Moment(input, true);
		} else if (format) {
			if (isArray(format)) {
				makeDateFromStringAndArray(config);
			} else {
				makeDateFromStringAndFormat(config);
			}
		} else {
			makeDateFromInput(config);
		}

		res = new Moment(config);
		if (res._nextDay) {
			// Adding is smart enough around DST
			res.add(1, 'd');
			res._nextDay = undefined;
		}

		return res;
	}

	moment = function(input, format, locale, strict) {
		var c;

		if (typeof (locale) === 'boolean') {
			strict = locale;
			locale = undefined;
		}
		// object construction must be done this way.
		// https://github.com/moment/moment/issues/1423
		c = {};
		c._isAMomentObject = true;
		c._i = input;
		c._f = format;
		c._l = locale;
		c._strict = strict;
		c._isUTC = false;
		c._pf = defaultParsingFlags();

		return makeMoment(c);
	};

	moment.suppressDeprecationWarnings = false;

	moment.createFromInputFallback = deprecate('moment construction falls back to js Date. This is '
		+ 'discouraged and will be removed in upcoming major ' + 'release. Please refer to '
		+ 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
		config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	});

	// Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function pickBy(fn, moments) {
		var res, i;
		if (moments.length === 1 && isArray(moments[0])) {
			moments = moments[0];
		}
		if (!moments.length) {
			return moment();
		}
		res = moments[0];
		for (i = 1; i < moments.length; ++i) {
			if (moments[i][fn](res)) {
				res = moments[i];
			}
		}
		return res;
	}

	moment.min = function() {
		var args = [].slice.call(arguments, 0);

		return pickBy('isBefore', args);
	};

	moment.max = function() {
		var args = [].slice.call(arguments, 0);

		return pickBy('isAfter', args);
	};

	// creating with utc
	moment.utc = function(input, format, locale, strict) {
		var c;

		if (typeof (locale) === 'boolean') {
			strict = locale;
			locale = undefined;
		}
		// object construction must be done this way.
		// https://github.com/moment/moment/issues/1423
		c = {};
		c._isAMomentObject = true;
		c._useUTC = true;
		c._isUTC = true;
		c._l = locale;
		c._i = input;
		c._f = format;
		c._strict = strict;
		c._pf = defaultParsingFlags();

		return makeMoment(c).utc();
	};

	// creating with unix timestamp (in seconds)
	moment.unix = function(input) {
		return moment(input * 1000);
	};

	// duration
	moment.duration = function(input, key) {
		var duration = input,
		// matching against regexp is expensive, do it on demand
		match = null, sign, ret, parseIso, diffRes;

		if (moment.isDuration(input)) {
			duration = {
				ms: input._milliseconds,
				d: input._days,
				M: input._months
			};
		} else if (typeof input === 'number') {
			duration = {};
			if (key) {
				duration[key] = input;
			} else {
				duration.milliseconds = input;
			}
		} else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
			sign = (match[1] === '-') ? -1 : 1;
			duration = {
				y: 0,
				d: toInt(match[DATE]) * sign,
				h: toInt(match[HOUR]) * sign,
				m: toInt(match[MINUTE]) * sign,
				s: toInt(match[SECOND]) * sign,
				ms: toInt(match[MILLISECOND]) * sign
			};
		} else if (!!(match = isoDurationRegex.exec(input))) {
			sign = (match[1] === '-') ? -1 : 1;
			parseIso = function(inp) {
				// We'd normally use ~~inp for this, but unfortunately it also
				// converts floats to ints.
				// inp may be undefined, so careful calling replace on it.
				var res = inp && parseFloat(inp.replace(',', '.'));
				// apply sign while we're at it
				return (isNaN(res) ? 0 : res) * sign;
			};
			duration = {
				y: parseIso(match[2]),
				M: parseIso(match[3]),
				d: parseIso(match[4]),
				h: parseIso(match[5]),
				m: parseIso(match[6]),
				s: parseIso(match[7]),
				w: parseIso(match[8])
			};
		} else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
			diffRes = momentsDifference(moment(duration.from), moment(duration.to));

			duration = {};
			duration.ms = diffRes.milliseconds;
			duration.M = diffRes.months;
		}

		ret = new Duration(duration);

		if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
			ret._locale = input._locale;
		}

		return ret;
	};

	// version number
	moment.version = VERSION;

	// default format
	moment.defaultFormat = isoFormat;

	// constant that refers to the ISO standard
	moment.ISO_8601 = function() {
	};

	// Plugins that add properties should also add the key here (null value),
	// so we can properly clone ourselves.
	moment.momentProperties = momentProperties;

	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	moment.updateOffset = function() {
	};

	// This function allows you to set a threshold for relative time strings
	moment.relativeTimeThreshold = function(threshold, limit) {
		if (relativeTimeThresholds[threshold] === undefined) {
			return false;
		}
		if (limit === undefined) {
			return relativeTimeThresholds[threshold];
		}
		relativeTimeThresholds[threshold] = limit;
		return true;
	};

	moment.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', function(key, value) {
		return moment.locale(key, value);
	});

	// This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	moment.locale = function(key, values) {
		var data;
		if (key) {
			if (typeof (values) !== 'undefined') {
				data = moment.defineLocale(key, values);
			} else {
				data = moment.localeData(key);
			}

			if (data) {
				moment.duration._locale = moment._locale = data;
			}
		}

		return moment._locale._abbr;
	};

	moment.defineLocale = function(name, values) {
		if (values !== null) {
			values.abbr = name;
			if (!locales[name]) {
				locales[name] = new Locale();
			}
			locales[name].set(values);

			// backwards compat for now: also set the locale
			moment.locale(name);

			return locales[name];
		} else {
			// useful for testing
			delete locales[name];
			return null;
		}
	};

	moment.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', function(key) {
		return moment.localeData(key);
	});

	// returns locale data
	moment.localeData = function(key) {
		var locale;

		if (key && key._locale && key._locale._abbr) {
			key = key._locale._abbr;
		}

		if (!key) {
			return moment._locale;
		}

		if (!isArray(key)) {
			//short-circuit everything else
			locale = loadLocale(key);
			if (locale) {
				return locale;
			}
			key = [key];
		}

		return chooseLocale(key);
	};

	// compare moment object
	moment.isMoment = function(obj) {
		return obj instanceof Moment || (obj != null && hasOwnProp(obj, '_isAMomentObject'));
	};

	// for typechecking Duration objects
	moment.isDuration = function(obj) {
		return obj instanceof Duration;
	};

	for (i = lists.length - 1; i >= 0; --i) {
		makeList(lists[i]);
	}

	moment.normalizeUnits = function(units) {
		return normalizeUnits(units);
	};

	moment.invalid = function(flags) {
		var m = moment.utc(NaN);
		if (flags != null) {
			extend(m._pf, flags);
		} else {
			m._pf.userInvalidated = true;
		}

		return m;
	};

	moment.parseZone = function() {
		return moment.apply(null, arguments).parseZone();
	};

	moment.parseTwoDigitYear = function(input) {
		return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	};

	/************************************
	    Moment Prototype
	 ************************************/

	extend(
		moment.fn = Moment.prototype,
		{

			clone: function() {
				return moment(this);
			},

			valueOf: function() {
				return +this._d + ((this._offset || 0) * 60000);
			},

			unix: function() {
				return Math.floor(+this / 1000);
			},

			toString: function() {
				return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
			},

			toDate: function() {
				return this._offset ? new Date(+this) : this._d;
			},

			toISOString: function() {
				var m = moment(this).utc();
				if (0 < m.year() && m.year() <= 9999) {
					if ('function' === typeof Date.prototype.toISOString) {
						// native implementation is ~50x faster, use it when we can
						return this.toDate().toISOString();
					} else {
						return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
					}
				} else {
					return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
				}
			},

			toArray: function() {
				var m = this;
				return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()];
			},

			isValid: function() {
				return isValid(this);
			},

			isDSTShifted: function() {
				if (this._a) {
					return this.isValid()
						&& compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
				}

				return false;
			},

			parsingFlags: function() {
				return extend({}, this._pf);
			},

			invalidAt: function() {
				return this._pf.overflow;
			},

			utc: function(keepLocalTime) {
				return this.zone(0, keepLocalTime);
			},

			local: function(keepLocalTime) {
				if (this._isUTC) {
					this.zone(0, keepLocalTime);
					this._isUTC = false;

					if (keepLocalTime) {
						this.add(this._dateTzOffset(), 'm');
					}
				}
				return this;
			},

			format: function(inputString) {
				var output = formatMoment(this, inputString || moment.defaultFormat);
				return this.localeData().postformat(output);
			},

			add: createAdder(1, 'add'),

			subtract: createAdder(-1, 'subtract'),

			diff: function(input, units, asFloat) {
				var that = makeAs(input, this), zoneDiff = (this.zone() - that.zone()) * 6e4, diff, output, daysAdjust;

				units = normalizeUnits(units);

				if (units === 'year' || units === 'month') {
					// average number of days in the months in the given dates
					diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
					// difference in months
					output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
					// adjust by taking difference in days, average number of days
					// and dst in the given months.
					daysAdjust = (this - moment(this).startOf('month')) - (that - moment(that).startOf('month'));
					// same as above but with zones, to negate all dst
					daysAdjust -= ((this.zone() - moment(this).startOf('month').zone()) - (that.zone() - moment(that)
						.startOf('month').zone())) * 6e4;
					output += daysAdjust / diff;
					if (units === 'year') {
						output = output / 12;
					}
				} else {
					diff = (this - that);
					output = units === 'second' ? diff / 1e3 : // 1000
					units === 'minute' ? diff / 6e4 : // 1000 * 60
					units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
					units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
					units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
					diff;
				}
				return asFloat ? output : absRound(output);
			},

			from: function(time, withoutSuffix) {
				return moment.duration({
					to: this,
					from: time
				}).locale(this.locale()).humanize(!withoutSuffix);
			},

			fromNow: function(withoutSuffix) {
				return this.from(moment(), withoutSuffix);
			},

			calendar: function(time) {
				// We want to compare the start of today, vs this.
				// Getting start-of-today depends on whether we're zone'd or not.
				var now = time || moment(), sod = makeAs(now, this).startOf('day'), diff = this.diff(sod, 'days', true), format = diff < -6
					? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2
						? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
				return this.format(this.localeData().calendar(format, this, moment(now)));
			},

			isLeapYear: function() {
				return isLeapYear(this.year());
			},

			isDST: function() {
				return (this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone());
			},

			day: function(input) {
				var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				if (input != null) {
					input = parseWeekday(input, this.localeData());
					return this.add(input - day, 'd');
				} else {
					return day;
				}
			},

			month: makeAccessor('Month', true),

			startOf: function(units) {
				units = normalizeUnits(units);
				// the following switch intentionally omits break keywords
				// to utilize falling through the cases.
				switch (units) {
					case 'year':
						this.month(0);
						/* falls through */
					case 'quarter':
					case 'month':
						this.date(1);
						/* falls through */
					case 'week':
					case 'isoWeek':
					case 'day':
						this.hours(0);
						/* falls through */
					case 'hour':
						this.minutes(0);
						/* falls through */
					case 'minute':
						this.seconds(0);
						/* falls through */
					case 'second':
						this.milliseconds(0);
						/* falls through */
				}

				// weeks are a special case
				if (units === 'week') {
					this.weekday(0);
				} else if (units === 'isoWeek') {
					this.isoWeekday(1);
				}

				// quarters are also special
				if (units === 'quarter') {
					this.month(Math.floor(this.month() / 3) * 3);
				}

				return this;
			},

			endOf: function(units) {
				units = normalizeUnits(units);
				if (units === undefined || units === 'millisecond') {
					return this;
				}
				return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
			},

			isAfter: function(input, units) {
				var inputMs;
				units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
				if (units === 'millisecond') {
					input = moment.isMoment(input) ? input : moment(input);
					return +this > +input;
				} else {
					inputMs = moment.isMoment(input) ? +input : +moment(input);
					return inputMs < +this.clone().startOf(units);
				}
			},

			isBefore: function(input, units) {
				var inputMs;
				units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
				if (units === 'millisecond') {
					input = moment.isMoment(input) ? input : moment(input);
					return +this < +input;
				} else {
					inputMs = moment.isMoment(input) ? +input : +moment(input);
					return +this.clone().endOf(units) < inputMs;
				}
			},

			isSame: function(input, units) {
				var inputMs;
				units = normalizeUnits(units || 'millisecond');
				if (units === 'millisecond') {
					input = moment.isMoment(input) ? input : moment(input);
					return +this === +input;
				} else {
					inputMs = +moment(input);
					return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
				}
			},

			min: deprecate(
				'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
				function(other) {
					other = moment.apply(null, arguments);
					return other < this ? this : other;
				}),

			max: deprecate(
				'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
				function(other) {
					other = moment.apply(null, arguments);
					return other > this ? this : other;
				}),

			// keepLocalTime = true means only change the timezone, without
			// affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
			// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
			// +0200, so we adjust the time as needed, to be valid.
			//
			// Keeping the time actually adds/subtracts (one hour)
			// from the actual represented time. That is why we call updateOffset
			// a second time. In case it wants us to change the offset again
			// _changeInProgress == true case, then we have to adjust, because
			// there is no such time in the given timezone.
			zone: function(input, keepLocalTime) {
				var offset = this._offset || 0, localAdjust;
				if (input != null) {
					if (typeof input === 'string') {
						input = timezoneMinutesFromString(input);
					}
					if (Math.abs(input) < 16) {
						input = input * 60;
					}
					if (!this._isUTC && keepLocalTime) {
						localAdjust = this._dateTzOffset();
					}
					this._offset = input;
					this._isUTC = true;
					if (localAdjust != null) {
						this.subtract(localAdjust, 'm');
					}
					if (offset !== input) {
						if (!keepLocalTime || this._changeInProgress) {
							addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, false);
						} else if (!this._changeInProgress) {
							this._changeInProgress = true;
							moment.updateOffset(this, true);
							this._changeInProgress = null;
						}
					}
				} else {
					return this._isUTC ? offset : this._dateTzOffset();
				}
				return this;
			},

			zoneAbbr: function() {
				return this._isUTC ? 'UTC' : '';
			},

			zoneName: function() {
				return this._isUTC ? 'Coordinated Universal Time' : '';
			},

			parseZone: function() {
				if (this._tzm) {
					this.zone(this._tzm);
				} else if (typeof this._i === 'string') {
					this.zone(this._i);
				}
				return this;
			},

			hasAlignedHourOffset: function(input) {
				if (!input) {
					input = 0;
				} else {
					input = moment(input).zone();
				}

				return (this.zone() - input) % 60 === 0;
			},

			daysInMonth: function() {
				return daysInMonth(this.year(), this.month());
			},

			dayOfYear: function(input) {
				var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
				return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
			},

			quarter: function(input) {
				return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month()
					% 3);
			},

			weekYear: function(input) {
				var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
				return input == null ? year : this.add((input - year), 'y');
			},

			isoWeekYear: function(input) {
				var year = weekOfYear(this, 1, 4).year;
				return input == null ? year : this.add((input - year), 'y');
			},

			week: function(input) {
				var week = this.localeData().week(this);
				return input == null ? week : this.add((input - week) * 7, 'd');
			},

			isoWeek: function(input) {
				var week = weekOfYear(this, 1, 4).week;
				return input == null ? week : this.add((input - week) * 7, 'd');
			},

			weekday: function(input) {
				var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
				return input == null ? weekday : this.add(input - weekday, 'd');
			},

			isoWeekday: function(input) {
				// behaves the same as moment#day except
				// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
				// as a setter, sunday should belong to the previous week.
				return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
			},

			isoWeeksInYear: function() {
				return weeksInYear(this.year(), 1, 4);
			},

			weeksInYear: function() {
				var weekInfo = this.localeData()._week;
				return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
			},

			get: function(units) {
				units = normalizeUnits(units);
				return this[units]();
			},

			set: function(units, value) {
				units = normalizeUnits(units);
				if (typeof this[units] === 'function') {
					this[units](value);
				}
				return this;
			},

			// If passed a locale key, it will set the locale for this
			// instance.  Otherwise, it will return the locale configuration
			// variables for this instance.
			locale: function(key) {
				var newLocaleData;

				if (key === undefined) {
					return this._locale._abbr;
				} else {
					newLocaleData = moment.localeData(key);
					if (newLocaleData != null) {
						this._locale = newLocaleData;
					}
					return this;
				}
			},

			lang: deprecate(
				'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
				function(key) {
					if (key === undefined) {
						return this.localeData();
					} else {
						return this.locale(key);
					}
				}),

			localeData: function() {
				return this._locale;
			},

			_dateTzOffset: function() {
				// On Firefox.24 Date#getTimezoneOffset returns a floating point.
				// https://github.com/moment/moment/pull/1871
				return Math.round(this._d.getTimezoneOffset() / 15) * 15;
			}
		});

	function rawMonthSetter(mom, value) {
		var dayOfMonth;

		// TODO: Move this out of here!
		if (typeof value === 'string') {
			value = mom.localeData().monthsParse(value);
			// TODO: Another silent failure?
			if (typeof value !== 'number') {
				return mom;
			}
		}

		dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
		mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
		return mom;
	}

	function rawGetter(mom, unit) {
		return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
	}

	function rawSetter(mom, unit, value) {
		if (unit === 'Month') {
			return rawMonthSetter(mom, value);
		} else {
			return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
		}
	}

	function makeAccessor(unit, keepTime) {
		return function(value) {
			if (value != null) {
				rawSetter(this, unit, value);
				moment.updateOffset(this, keepTime);
				return this;
			} else {
				return rawGetter(this, unit);
			}
		};
	}

	moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
	moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
	moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
	// Setting the hour should keep the time, because the user explicitly
	// specified which hour he wants. So trying to maintain the same hour (in
	// a new timezone) makes sense. Adding/subtracting hours does not follow
	// this rule.
	moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
	// moment.fn.month is defined separately
	moment.fn.date = makeAccessor('Date', true);
	moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
	moment.fn.year = makeAccessor('FullYear', true);
	moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

	// add plural methods
	moment.fn.days = moment.fn.day;
	moment.fn.months = moment.fn.month;
	moment.fn.weeks = moment.fn.week;
	moment.fn.isoWeeks = moment.fn.isoWeek;
	moment.fn.quarters = moment.fn.quarter;

	// add aliased format methods
	moment.fn.toJSON = moment.fn.toISOString;

	/************************************
	    Duration Prototype
	 ************************************/

	function daysToYears(days) {
		// 400 years have 146097 days (taking into account leap year rules)
		return days * 400 / 146097;
	}

	function yearsToDays(years) {
		// years * 365 + absRound(years / 4) -
		//     absRound(years / 100) + absRound(years / 400);
		return years * 146097 / 400;
	}

	extend(
		moment.duration.fn = Duration.prototype,
		{

			_bubble: function() {
				var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years = 0;

				// The following code bubbles up values, see the tests for
				// examples of what that means.
				data.milliseconds = milliseconds % 1000;

				seconds = absRound(milliseconds / 1000);
				data.seconds = seconds % 60;

				minutes = absRound(seconds / 60);
				data.minutes = minutes % 60;

				hours = absRound(minutes / 60);
				data.hours = hours % 24;

				days += absRound(hours / 24);

				// Accurately convert days to years, assume start from year 0.
				years = absRound(daysToYears(days));
				days -= absRound(yearsToDays(years));

				// 30 days to a month
				// TODO (iskren): Use anchor date (like 1st Jan) to compute this.
				months += absRound(days / 30);
				days %= 30;

				// 12 months -> 1 year
				years += absRound(months / 12);
				months %= 12;

				data.days = days;
				data.months = months;
				data.years = years;
			},

			abs: function() {
				this._milliseconds = Math.abs(this._milliseconds);
				this._days = Math.abs(this._days);
				this._months = Math.abs(this._months);

				this._data.milliseconds = Math.abs(this._data.milliseconds);
				this._data.seconds = Math.abs(this._data.seconds);
				this._data.minutes = Math.abs(this._data.minutes);
				this._data.hours = Math.abs(this._data.hours);
				this._data.months = Math.abs(this._data.months);
				this._data.years = Math.abs(this._data.years);

				return this;
			},

			weeks: function() {
				return absRound(this.days() / 7);
			},

			valueOf: function() {
				return this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6
					+ toInt(this._months / 12) * 31536e6;
			},

			humanize: function(withSuffix) {
				var output = relativeTime(this, !withSuffix, this.localeData());

				if (withSuffix) {
					output = this.localeData().pastFuture(+this, output);
				}

				return this.localeData().postformat(output);
			},

			add: function(input, val) {
				// supports only 2.0-style add(1, 's') or add(moment)
				var dur = moment.duration(input, val);

				this._milliseconds += dur._milliseconds;
				this._days += dur._days;
				this._months += dur._months;

				this._bubble();

				return this;
			},

			subtract: function(input, val) {
				var dur = moment.duration(input, val);

				this._milliseconds -= dur._milliseconds;
				this._days -= dur._days;
				this._months -= dur._months;

				this._bubble();

				return this;
			},

			get: function(units) {
				units = normalizeUnits(units);
				return this[units.toLowerCase() + 's']();
			},

			as: function(units) {
				var days, months;
				units = normalizeUnits(units);

				if (units === 'month' || units === 'year') {
					days = this._days + this._milliseconds / 864e5;
					months = this._months + daysToYears(days) * 12;
					return units === 'month' ? months : months / 12;
				} else {
					// handle milliseconds separately because of floating point math errors (issue #1867)
					days = this._days + Math.round(yearsToDays(this._months / 12));
					switch (units) {
						case 'week':
							return days / 7 + this._milliseconds / 6048e5;
						case 'day':
							return days + this._milliseconds / 864e5;
						case 'hour':
							return days * 24 + this._milliseconds / 36e5;
						case 'minute':
							return days * 24 * 60 + this._milliseconds / 6e4;
						case 'second':
							return days * 24 * 60 * 60 + this._milliseconds / 1000;
							// Math.floor prevents floating point math errors here
						case 'millisecond':
							return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
						default:
							throw new Error('Unknown unit ' + units);
					}
				}
			},

			lang: moment.fn.lang,
			locale: moment.fn.locale,

			toIsoString: deprecate('toIsoString() is deprecated. Please use toISOString() instead '
				+ '(notice the capitals)', function() {
				return this.toISOString();
			}),

			toISOString: function() {
				// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
				var years = Math.abs(this.years()), months = Math.abs(this.months()), days = Math.abs(this.days()), hours = Math
					.abs(this.hours()), minutes = Math.abs(this.minutes()), seconds = Math.abs(this.seconds()
					+ this.milliseconds() / 1000);

				if (!this.asSeconds()) {
					// this is the same as C#'s (Noda) and python (isodate)...
					// but not other JS (goog.date)
					return 'P0D';
				}

				return (this.asSeconds() < 0 ? '-' : '') + 'P' + (years ? years + 'Y' : '')
					+ (months ? months + 'M' : '') + (days ? days + 'D' : '')
					+ ((hours || minutes || seconds) ? 'T' : '') + (hours ? hours + 'H' : '')
					+ (minutes ? minutes + 'M' : '') + (seconds ? seconds + 'S' : '');
			},

			localeData: function() {
				return this._locale;
			}
		});

	moment.duration.fn.toString = moment.duration.fn.toISOString;

	function makeDurationGetter(name) {
		moment.duration.fn[name] = function() {
			return this._data[name];
		};
	}

	for (i in unitMillisecondFactors) {
		if (hasOwnProp(unitMillisecondFactors, i)) {
			makeDurationGetter(i.toLowerCase());
		}
	}

	moment.duration.fn.asMilliseconds = function() {
		return this.as('ms');
	};
	moment.duration.fn.asSeconds = function() {
		return this.as('s');
	};
	moment.duration.fn.asMinutes = function() {
		return this.as('m');
	};
	moment.duration.fn.asHours = function() {
		return this.as('h');
	};
	moment.duration.fn.asDays = function() {
		return this.as('d');
	};
	moment.duration.fn.asWeeks = function() {
		return this.as('weeks');
	};
	moment.duration.fn.asMonths = function() {
		return this.as('M');
	};
	moment.duration.fn.asYears = function() {
		return this.as('y');
	};

	/************************************
	    Default Locale
	 ************************************/

	// Set default locale, other locale will inherit from English.
	moment.locale('en', {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function(number) {
			var b = number % 10, output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd'
				: (b === 3) ? 'rd' : 'th';
			return number + output;
		}
	});

	// moment.js locale configuration
	// locale : afrikaans (af)
	// author : Werner Mollentze : https://github.com/wernerm

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('af', {
			months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'
				.split('_'),
			monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
			weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
			weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
			weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
			meridiem: function(hours, minutes, isLower) {
				if (hours < 12) {
					return isLower ? 'vm' : 'VM';
				} else {
					return isLower ? 'nm' : 'NM';
				}
			},
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Vandag om] LT',
				nextDay: '[Môre om] LT',
				nextWeek: 'dddd [om] LT',
				lastDay: '[Gister om] LT',
				lastWeek: '[Laas] dddd [om] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'oor %s',
				past: '%s gelede',
				s: '\'n paar sekondes',
				m: '\'n minuut',
				mm: '%d minute',
				h: '\'n uur',
				hh: '%d ure',
				d: '\'n dag',
				dd: '%d dae',
				M: '\'n maand',
				MM: '%d maande',
				y: '\'n jaar',
				yy: '%d jaar'
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(number) {
				return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
			},
			week: {
				dow: 1, // Maandag is die eerste dag van die week.
				doy: 4
			// Die week wat die 4de Januarie bevat is die eerste week van die jaar.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Moroccan Arabic (ar-ma)
	// author : ElFadili Yassine : https://github.com/ElFadiliY
	// author : Abdel Said : https://github.com/abdelsaid

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('ar-ma', {
			months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
			monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
			weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
			weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
			weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[اليوم على الساعة] LT',
				nextDay: '[غدا على الساعة] LT',
				nextWeek: 'dddd [على الساعة] LT',
				lastDay: '[أمس على الساعة] LT',
				lastWeek: 'dddd [على الساعة] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'في %s',
				past: 'منذ %s',
				s: 'ثوان',
				m: 'دقيقة',
				mm: '%d دقائق',
				h: 'ساعة',
				hh: '%d ساعات',
				d: 'يوم',
				dd: '%d أيام',
				M: 'شهر',
				MM: '%d أشهر',
				y: 'سنة',
				yy: '%d سنوات'
			},
			week: {
				dow: 6, // Saturday is the first day of the week.
				doy: 12
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Arabic Saudi Arabia (ar-sa)
	// author : Suhail Alkowaileet : https://github.com/xsoh

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var symbolMap = {
			'1': '١',
			'2': '٢',
			'3': '٣',
			'4': '٤',
			'5': '٥',
			'6': '٦',
			'7': '٧',
			'8': '٨',
			'9': '٩',
			'0': '٠'
		}, numberMap = {
			'١': '1',
			'٢': '2',
			'٣': '3',
			'٤': '4',
			'٥': '5',
			'٦': '6',
			'٧': '7',
			'٨': '8',
			'٩': '9',
			'٠': '0'
		};

		return moment.defineLocale('ar-sa', {
			months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
			monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
			weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
			weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
			weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			meridiem: function(hour, minute, isLower) {
				if (hour < 12) {
					return 'ص';
				} else {
					return 'م';
				}
			},
			calendar: {
				sameDay: '[اليوم على الساعة] LT',
				nextDay: '[غدا على الساعة] LT',
				nextWeek: 'dddd [على الساعة] LT',
				lastDay: '[أمس على الساعة] LT',
				lastWeek: 'dddd [على الساعة] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'في %s',
				past: 'منذ %s',
				s: 'ثوان',
				m: 'دقيقة',
				mm: '%d دقائق',
				h: 'ساعة',
				hh: '%d ساعات',
				d: 'يوم',
				dd: '%d أيام',
				M: 'شهر',
				MM: '%d أشهر',
				y: 'سنة',
				yy: '%d سنوات'
			},
			preparse: function(string) {
				return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
					return numberMap[match];
				}).replace(/،/g, ',');
			},
			postformat: function(string) {
				return string.replace(/\d/g, function(match) {
					return symbolMap[match];
				}).replace(/,/g, '،');
			},
			week: {
				dow: 6, // Saturday is the first day of the week.
				doy: 12
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// Locale: Arabic (ar)
	// Author: Abdel Said: https://github.com/abdelsaid
	// Changes in months, weekdays: Ahmed Elkhatib
	// Native plural forms: forabi https://github.com/forabi

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var symbolMap = {
				'1': '١',
				'2': '٢',
				'3': '٣',
				'4': '٤',
				'5': '٥',
				'6': '٦',
				'7': '٧',
				'8': '٨',
				'9': '٩',
				'0': '٠'
			}, numberMap = {
				'١': '1',
				'٢': '2',
				'٣': '3',
				'٤': '4',
				'٥': '5',
				'٦': '6',
				'٧': '7',
				'٨': '8',
				'٩': '9',
				'٠': '0'
			}, pluralForm = function(n) {
				return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4
					: 5;
			}, plurals = {
				s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
				m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
				h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
				d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
				M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
				y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
			}, pluralize = function(u) {
				return function(number, withoutSuffix, string, isFuture) {
					var f = pluralForm(number), str = plurals[u][pluralForm(number)];
					if (f === 2) {
						str = str[withoutSuffix ? 0 : 1];
					}
					return str.replace(/%d/i, number);
				};
			}, months = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو',
				'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر',
				'كانون الأول ديسمبر'];

			return moment.defineLocale('ar', {
				months: months,
				monthsShort: months,
				weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
				weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
				weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
				longDateFormat: {
					LT: 'HH:mm',
					LTS: 'HH:mm:ss',
					L: 'DD/MM/YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY LT',
					LLLL: 'dddd D MMMM YYYY LT'
				},
				meridiem: function(hour, minute, isLower) {
					if (hour < 12) {
						return 'ص';
					} else {
						return 'م';
					}
				},
				calendar: {
					sameDay: '[اليوم عند الساعة] LT',
					nextDay: '[غدًا عند الساعة] LT',
					nextWeek: 'dddd [عند الساعة] LT',
					lastDay: '[أمس عند الساعة] LT',
					lastWeek: 'dddd [عند الساعة] LT',
					sameElse: 'L'
				},
				relativeTime: {
					future: 'بعد %s',
					past: 'منذ %s',
					s: pluralize('s'),
					m: pluralize('m'),
					mm: pluralize('m'),
					h: pluralize('h'),
					hh: pluralize('h'),
					d: pluralize('d'),
					dd: pluralize('d'),
					M: pluralize('M'),
					MM: pluralize('M'),
					y: pluralize('y'),
					yy: pluralize('y')
				},
				preparse: function(string) {
					return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
						return numberMap[match];
					}).replace(/،/g, ',');
				},
				postformat: function(string) {
					return string.replace(/\d/g, function(match) {
						return symbolMap[match];
					}).replace(/,/g, '،');
				},
				week: {
					dow: 6, // Saturday is the first day of the week.
					doy: 12
				// The week that contains Jan 1st is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : azerbaijani (az)
	// author : topchiyev : https://github.com/topchiyev

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var suffixes = {
			1: '-inci',
			5: '-inci',
			8: '-inci',
			70: '-inci',
			80: '-inci',

			2: '-nci',
			7: '-nci',
			20: '-nci',
			50: '-nci',

			3: '-üncü',
			4: '-üncü',
			100: '-üncü',

			6: '-ncı',

			9: '-uncu',
			10: '-uncu',
			30: '-uncu',

			60: '-ıncı',
			90: '-ıncı'
		};
		return moment.defineLocale('az', {
			months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
			monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
			weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
			weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
			weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD.MM.YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[bugün saat] LT',
				nextDay: '[sabah saat] LT',
				nextWeek: '[gələn həftə] dddd [saat] LT',
				lastDay: '[dünən] LT',
				lastWeek: '[keçən həftə] dddd [saat] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s sonra',
				past: '%s əvvəl',
				s: 'birneçə saniyyə',
				m: 'bir dəqiqə',
				mm: '%d dəqiqə',
				h: 'bir saat',
				hh: '%d saat',
				d: 'bir gün',
				dd: '%d gün',
				M: 'bir ay',
				MM: '%d ay',
				y: 'bir il',
				yy: '%d il'
			},
			meridiem: function(hour, minute, isLower) {
				if (hour < 4) {
					return 'gecə';
				} else if (hour < 12) {
					return 'səhər';
				} else if (hour < 17) {
					return 'gündüz';
				} else {
					return 'axşam';
				}
			},
			ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
			ordinal: function(number) {
				if (number === 0) { // special case for zero
					return number + '-ıncı';
				}
				var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;

				return number + (suffixes[a] || suffixes[b] || suffixes[c]);
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : belarusian (be)
	// author : Dmitry Demidov : https://github.com/demidov91
	// author: Praleska: http://praleska.pro/
	// Author : Menelion Elensúle : https://github.com/Oire

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			function plural(word, num) {
				var forms = word.split('_');
				return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4
					&& (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
			}

			function relativeTimeWithPlural(number, withoutSuffix, key) {
				var format = {
					'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
					'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
					'dd': 'дзень_дні_дзён',
					'MM': 'месяц_месяцы_месяцаў',
					'yy': 'год_гады_гадоў'
				};
				if (key === 'm') {
					return withoutSuffix ? 'хвіліна' : 'хвіліну';
				} else if (key === 'h') {
					return withoutSuffix ? 'гадзіна' : 'гадзіну';
				} else {
					return number + ' ' + plural(format[key], +number);
				}
			}

			function monthsCaseReplace(m, format) {
				var months = {
					'nominative': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'
						.split('_'),
					'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'
						.split('_')
				},

				nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ? 'accusative' : 'nominative';

				return months[nounCase][m.month()];
			}

			function weekdaysCaseReplace(m, format) {
				var weekdays = {
					'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
					'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
				},

				nounCase = (/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/).test(format) ? 'accusative' : 'nominative';

				return weekdays[nounCase][m.day()];
			}

			return moment.defineLocale('be', {
				months: monthsCaseReplace,
				monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
				weekdays: weekdaysCaseReplace,
				weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
				weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
				longDateFormat: {
					LT: 'HH:mm',
					LTS: 'LT:ss',
					L: 'DD.MM.YYYY',
					LL: 'D MMMM YYYY г.',
					LLL: 'D MMMM YYYY г., LT',
					LLLL: 'dddd, D MMMM YYYY г., LT'
				},
				calendar: {
					sameDay: '[Сёння ў] LT',
					nextDay: '[Заўтра ў] LT',
					lastDay: '[Учора ў] LT',
					nextWeek: function() {
						return '[У] dddd [ў] LT';
					},
					lastWeek: function() {
						switch (this.day()) {
							case 0:
							case 3:
							case 5:
							case 6:
								return '[У мінулую] dddd [ў] LT';
							case 1:
							case 2:
							case 4:
								return '[У мінулы] dddd [ў] LT';
						}
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: 'праз %s',
					past: '%s таму',
					s: 'некалькі секунд',
					m: relativeTimeWithPlural,
					mm: relativeTimeWithPlural,
					h: relativeTimeWithPlural,
					hh: relativeTimeWithPlural,
					d: 'дзень',
					dd: relativeTimeWithPlural,
					M: 'месяц',
					MM: relativeTimeWithPlural,
					y: 'год',
					yy: relativeTimeWithPlural
				},

				meridiem: function(hour, minute, isLower) {
					if (hour < 4) {
						return 'ночы';
					} else if (hour < 12) {
						return 'раніцы';
					} else if (hour < 17) {
						return 'дня';
					} else {
						return 'вечара';
					}
				},

				ordinalParse: /\d{1,2}-(і|ы|га)/,
				ordinal: function(number, period) {
					switch (period) {
						case 'M':
						case 'd':
						case 'DDD':
						case 'w':
						case 'W':
							return (number % 10 === 2 || number % 10 === 3)
								&& (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
						case 'D':
							return number + '-га';
						default:
							return number;
					}
				},

				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 7
				// The week that contains Jan 1st is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : bulgarian (bg)
	// author : Krasen Borisov : https://github.com/kraz

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('bg', {
			months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
			monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
			weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
			weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
			weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'D.MM.YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Днес в] LT',
				nextDay: '[Утре в] LT',
				nextWeek: 'dddd [в] LT',
				lastDay: '[Вчера в] LT',
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return '[В изминалата] dddd [в] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[В изминалия] dddd [в] LT';
					}
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'след %s',
				past: 'преди %s',
				s: 'няколко секунди',
				m: 'минута',
				mm: '%d минути',
				h: 'час',
				hh: '%d часа',
				d: 'ден',
				dd: '%d дни',
				M: 'месец',
				MM: '%d месеца',
				y: 'година',
				yy: '%d години'
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function(number) {
				var lastDigit = number % 10, last2Digits = number % 100;
				if (number === 0) {
					return number + '-ев';
				} else if (last2Digits === 0) {
					return number + '-ен';
				} else if (last2Digits > 10 && last2Digits < 20) {
					return number + '-ти';
				} else if (lastDigit === 1) {
					return number + '-ви';
				} else if (lastDigit === 2) {
					return number + '-ри';
				} else if (lastDigit === 7 || lastDigit === 8) {
					return number + '-ми';
				} else {
					return number + '-ти';
				}
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Bengali (bn)
	// author : Kaushik Gandhi : https://github.com/kaushikgandhi

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var symbolMap = {
			'1': '১',
			'2': '২',
			'3': '৩',
			'4': '৪',
			'5': '৫',
			'6': '৬',
			'7': '৭',
			'8': '৮',
			'9': '৯',
			'0': '০'
		}, numberMap = {
			'১': '1',
			'২': '2',
			'৩': '3',
			'৪': '4',
			'৫': '5',
			'৬': '6',
			'৭': '7',
			'৮': '8',
			'৯': '9',
			'০': '0'
		};

		return moment.defineLocale('bn',
			{
				months: 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'
					.split('_'),
				monthsShort: 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
				weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
				weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
				weekdaysMin: 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
				longDateFormat: {
					LT: 'A h:mm সময়',
					LTS: 'A h:mm:ss সময়',
					L: 'DD/MM/YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY, LT',
					LLLL: 'dddd, D MMMM YYYY, LT'
				},
				calendar: {
					sameDay: '[আজ] LT',
					nextDay: '[আগামীকাল] LT',
					nextWeek: 'dddd, LT',
					lastDay: '[গতকাল] LT',
					lastWeek: '[গত] dddd, LT',
					sameElse: 'L'
				},
				relativeTime: {
					future: '%s পরে',
					past: '%s আগে',
					s: 'কএক সেকেন্ড',
					m: 'এক মিনিট',
					mm: '%d মিনিট',
					h: 'এক ঘন্টা',
					hh: '%d ঘন্টা',
					d: 'এক দিন',
					dd: '%d দিন',
					M: 'এক মাস',
					MM: '%d মাস',
					y: 'এক বছর',
					yy: '%d বছর'
				},
				preparse: function(string) {
					return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function(match) {
						return numberMap[match];
					});
				},
				postformat: function(string) {
					return string.replace(/\d/g, function(match) {
						return symbolMap[match];
					});
				},
				//Bengali is a vast language its spoken
				//in different forms in various parts of the world.
				//I have just generalized with most common one used
				meridiem: function(hour, minute, isLower) {
					if (hour < 4) {
						return 'রাত';
					} else if (hour < 10) {
						return 'শকাল';
					} else if (hour < 17) {
						return 'দুপুর';
					} else if (hour < 20) {
						return 'বিকেল';
					} else {
						return 'রাত';
					}
				},
				week: {
					dow: 0, // Sunday is the first day of the week.
					doy: 6
				// The week that contains Jan 1st is the first week of the year.
				}
			});
	}));
	// moment.js locale configuration
	// locale : tibetan (bo)
	// author : Thupten N. Chakrishar : https://github.com/vajradog

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var symbolMap = {
				'1': '༡',
				'2': '༢',
				'3': '༣',
				'4': '༤',
				'5': '༥',
				'6': '༦',
				'7': '༧',
				'8': '༨',
				'9': '༩',
				'0': '༠'
			}, numberMap = {
				'༡': '1',
				'༢': '2',
				'༣': '3',
				'༤': '4',
				'༥': '5',
				'༦': '6',
				'༧': '7',
				'༨': '8',
				'༩': '9',
				'༠': '0'
			};

			return moment
				.defineLocale(
					'bo',
					{
						months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'
							.split('_'),
						monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'
							.split('_'),
						weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'
							.split('_'),
						weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
						weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
						longDateFormat: {
							LT: 'A h:mm',
							LTS: 'LT:ss',
							L: 'DD/MM/YYYY',
							LL: 'D MMMM YYYY',
							LLL: 'D MMMM YYYY, LT',
							LLLL: 'dddd, D MMMM YYYY, LT'
						},
						calendar: {
							sameDay: '[དི་རིང] LT',
							nextDay: '[སང་ཉིན] LT',
							nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
							lastDay: '[ཁ་སང] LT',
							lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
							sameElse: 'L'
						},
						relativeTime: {
							future: '%s ལ་',
							past: '%s སྔན་ལ',
							s: 'ལམ་སང',
							m: 'སྐར་མ་གཅིག',
							mm: '%d སྐར་མ',
							h: 'ཆུ་ཚོད་གཅིག',
							hh: '%d ཆུ་ཚོད',
							d: 'ཉིན་གཅིག',
							dd: '%d ཉིན་',
							M: 'ཟླ་བ་གཅིག',
							MM: '%d ཟླ་བ',
							y: 'ལོ་གཅིག',
							yy: '%d ལོ'
						},
						preparse: function(string) {
							return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(match) {
								return numberMap[match];
							});
						},
						postformat: function(string) {
							return string.replace(/\d/g, function(match) {
								return symbolMap[match];
							});
						},
						meridiem: function(hour, minute, isLower) {
							if (hour < 4) {
								return 'མཚན་མོ';
							} else if (hour < 10) {
								return 'ཞོགས་ཀས';
							} else if (hour < 17) {
								return 'ཉིན་གུང';
							} else if (hour < 20) {
								return 'དགོང་དག';
							} else {
								return 'མཚན་མོ';
							}
						},
						week: {
							dow: 0, // Sunday is the first day of the week.
							doy: 6
						// The week that contains Jan 1st is the first week of the year.
						}
					});
		}));
	// moment.js locale configuration
	// locale : breton (br)
	// author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function relativeTimeWithMutation(number, withoutSuffix, key) {
			var format = {
				'mm': 'munutenn',
				'MM': 'miz',
				'dd': 'devezh'
			};
			return number + ' ' + mutation(format[key], number);
		}

		function specialMutationForYears(number) {
			switch (lastNumber(number)) {
				case 1:
				case 3:
				case 4:
				case 5:
				case 9:
					return number + ' bloaz';
				default:
					return number + ' vloaz';
			}
		}

		function lastNumber(number) {
			if (number > 9) {
				return lastNumber(number % 10);
			}
			return number;
		}

		function mutation(text, number) {
			if (number === 2) {
				return softMutation(text);
			}
			return text;
		}

		function softMutation(text) {
			var mutationTable = {
				'm': 'v',
				'b': 'v',
				'd': 'z'
			};
			if (mutationTable[text.charAt(0)] === undefined) {
				return text;
			}
			return mutationTable[text.charAt(0)] + text.substring(1);
		}

		return moment.defineLocale('br', {
			months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
			monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
			weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
			weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
			weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
			longDateFormat: {
				LT: 'h[e]mm A',
				LTS: 'h[e]mm:ss A',
				L: 'DD/MM/YYYY',
				LL: 'D [a viz] MMMM YYYY',
				LLL: 'D [a viz] MMMM YYYY LT',
				LLLL: 'dddd, D [a viz] MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Hiziv da] LT',
				nextDay: '[Warc\'hoazh da] LT',
				nextWeek: 'dddd [da] LT',
				lastDay: '[Dec\'h da] LT',
				lastWeek: 'dddd [paset da] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'a-benn %s',
				past: '%s \'zo',
				s: 'un nebeud segondennoù',
				m: 'ur vunutenn',
				mm: relativeTimeWithMutation,
				h: 'un eur',
				hh: '%d eur',
				d: 'un devezh',
				dd: relativeTimeWithMutation,
				M: 'ur miz',
				MM: relativeTimeWithMutation,
				y: 'ur bloaz',
				yy: specialMutationForYears
			},
			ordinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function(number) {
				var output = (number === 1) ? 'añ' : 'vet';
				return number + output;
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : bosnian (bs)
	// author : Nedim Cholich : https://github.com/frontyard
	// based on (hr) translation by Bojan Marković

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function translate(number, withoutSuffix, key) {
			var result = number + ' ';
			switch (key) {
				case 'm':
					return withoutSuffix ? 'jedna minuta' : 'jedne minute';
				case 'mm':
					if (number === 1) {
						result += 'minuta';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'minute';
					} else {
						result += 'minuta';
					}
					return result;
				case 'h':
					return withoutSuffix ? 'jedan sat' : 'jednog sata';
				case 'hh':
					if (number === 1) {
						result += 'sat';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'sata';
					} else {
						result += 'sati';
					}
					return result;
				case 'dd':
					if (number === 1) {
						result += 'dan';
					} else {
						result += 'dana';
					}
					return result;
				case 'MM':
					if (number === 1) {
						result += 'mjesec';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'mjeseca';
					} else {
						result += 'mjeseci';
					}
					return result;
				case 'yy':
					if (number === 1) {
						result += 'godina';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'godine';
					} else {
						result += 'godina';
					}
					return result;
			}
		}

		return moment.defineLocale('bs', {
			months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
			monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
			weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
			weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
			weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD. MM. YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[danas u] LT',
				nextDay: '[sutra u] LT',

				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return '[u] [nedjelju] [u] LT';
						case 3:
							return '[u] [srijedu] [u] LT';
						case 6:
							return '[u] [subotu] [u] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[u] dddd [u] LT';
					}
				},
				lastDay: '[jučer u] LT',
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
							return '[prošlu] dddd [u] LT';
						case 6:
							return '[prošle] [subote] [u] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[prošli] dddd [u] LT';
					}
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'za %s',
				past: 'prije %s',
				s: 'par sekundi',
				m: translate,
				mm: translate,
				h: translate,
				hh: translate,
				d: 'dan',
				dd: translate,
				M: 'mjesec',
				MM: translate,
				y: 'godinu',
				yy: translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : catalan (ca)
	// author : Juan G. Hurtado : https://github.com/juanghurtado

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('ca', {
			months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
			monthsShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
			weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
			weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
			weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: function() {
					return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
				},
				nextDay: function() {
					return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
				},
				nextWeek: function() {
					return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
				},
				lastDay: function() {
					return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
				},
				lastWeek: function() {
					return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'en %s',
				past: 'fa %s',
				s: 'uns segons',
				m: 'un minut',
				mm: '%d minuts',
				h: 'una hora',
				hh: '%d hores',
				d: 'un dia',
				dd: '%d dies',
				M: 'un mes',
				MM: '%d mesos',
				y: 'un any',
				yy: '%d anys'
			},
			ordinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function(number, period) {
				var output = (number === 1) ? 'r' : (number === 2) ? 'n' : (number === 3) ? 'r' : (number === 4) ? 't'
					: 'è';
				if (period === 'w' || period === 'W') {
					output = 'a';
				}
				return number + output;
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : czech (cs)
	// author : petrbela : https://github.com/petrbela

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'), monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'
				.split('_');

			function plural(n) {
				return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
			}

			function translate(number, withoutSuffix, key, isFuture) {
				var result = number + ' ';
				switch (key) {
					case 's': // a few seconds / in a few seconds / a few seconds ago
						return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
					case 'm': // a minute / in a minute / a minute ago
						return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
					case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'minuty' : 'minut');
						} else {
							return result + 'minutami';
						}
						break;
					case 'h': // an hour / in an hour / an hour ago
						return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
					case 'hh': // 9 hours / in 9 hours / 9 hours ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'hodiny' : 'hodin');
						} else {
							return result + 'hodinami';
						}
						break;
					case 'd': // a day / in a day / a day ago
						return (withoutSuffix || isFuture) ? 'den' : 'dnem';
					case 'dd': // 9 days / in 9 days / 9 days ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'dny' : 'dní');
						} else {
							return result + 'dny';
						}
						break;
					case 'M': // a month / in a month / a month ago
						return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
					case 'MM': // 9 months / in 9 months / 9 months ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'měsíce' : 'měsíců');
						} else {
							return result + 'měsíci';
						}
						break;
					case 'y': // a year / in a year / a year ago
						return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
					case 'yy': // 9 years / in 9 years / 9 years ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'roky' : 'let');
						} else {
							return result + 'lety';
						}
						break;
				}
			}

			return moment.defineLocale('cs', {
				months: months,
				monthsShort: monthsShort,
				monthsParse: (function(months, monthsShort) {
					var i, _monthsParse = [];
					for (i = 0; i < 12; i++) {
						// use custom parser to solve problem with July (červenec)
						_monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
					}
					return _monthsParse;
				}(months, monthsShort)),
				weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
				weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
				weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
				longDateFormat: {
					LT: 'H:mm',
					LTS: 'LT:ss',
					L: 'DD.MM.YYYY',
					LL: 'D. MMMM YYYY',
					LLL: 'D. MMMM YYYY LT',
					LLLL: 'dddd D. MMMM YYYY LT'
				},
				calendar: {
					sameDay: '[dnes v] LT',
					nextDay: '[zítra v] LT',
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return '[v neděli v] LT';
							case 1:
							case 2:
								return '[v] dddd [v] LT';
							case 3:
								return '[ve středu v] LT';
							case 4:
								return '[ve čtvrtek v] LT';
							case 5:
								return '[v pátek v] LT';
							case 6:
								return '[v sobotu v] LT';
						}
					},
					lastDay: '[včera v] LT',
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return '[minulou neděli v] LT';
							case 1:
							case 2:
								return '[minulé] dddd [v] LT';
							case 3:
								return '[minulou středu v] LT';
							case 4:
							case 5:
								return '[minulý] dddd [v] LT';
							case 6:
								return '[minulou sobotu v] LT';
						}
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: 'za %s',
					past: 'před %s',
					s: translate,
					m: translate,
					mm: translate,
					h: translate,
					hh: translate,
					d: translate,
					dd: translate,
					M: translate,
					MM: translate,
					y: translate,
					yy: translate
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: '%d.',
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 4
				// The week that contains Jan 4th is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : chuvash (cv)
	// author : Anatoly Mironov : https://github.com/mirontoli

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('cv', {
			months: 'кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав'.split('_'),
			monthsShort: 'кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш'.split('_'),
			weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун'.split('_'),
			weekdaysShort: 'выр_тун_ытл_юн_кĕç_эрн_шăм'.split('_'),
			weekdaysMin: 'вр_тн_ыт_юн_кç_эр_шм'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD-MM-YYYY',
				LL: 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]',
				LLL: 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT',
				LLLL: 'dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT'
			},
			calendar: {
				sameDay: '[Паян] LT [сехетре]',
				nextDay: '[Ыран] LT [сехетре]',
				lastDay: '[Ĕнер] LT [сехетре]',
				nextWeek: '[Çитес] dddd LT [сехетре]',
				lastWeek: '[Иртнĕ] dddd LT [сехетре]',
				sameElse: 'L'
			},
			relativeTime: {
				future: function(output) {
					var affix = /сехет$/i.exec(output) ? 'рен' : /çул$/i.exec(output) ? 'тан' : 'ран';
					return output + affix;
				},
				past: '%s каялла',
				s: 'пĕр-ик çеккунт',
				m: 'пĕр минут',
				mm: '%d минут',
				h: 'пĕр сехет',
				hh: '%d сехет',
				d: 'пĕр кун',
				dd: '%d кун',
				M: 'пĕр уйăх',
				MM: '%d уйăх',
				y: 'пĕр çул',
				yy: '%d çул'
			},
			ordinalParse: /\d{1,2}-мĕш/,
			ordinal: '%d-мĕш',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Welsh (cy)
	// author : Robert Allen

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('cy',
			{
				months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'
					.split('_'),
				monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
				weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
				weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
				weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
				// time formats are the same as en-gb
				longDateFormat: {
					LT: 'HH:mm',
					LTS: 'LT:ss',
					L: 'DD/MM/YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY LT',
					LLLL: 'dddd, D MMMM YYYY LT'
				},
				calendar: {
					sameDay: '[Heddiw am] LT',
					nextDay: '[Yfory am] LT',
					nextWeek: 'dddd [am] LT',
					lastDay: '[Ddoe am] LT',
					lastWeek: 'dddd [diwethaf am] LT',
					sameElse: 'L'
				},
				relativeTime: {
					future: 'mewn %s',
					past: '%s yn ôl',
					s: 'ychydig eiliadau',
					m: 'munud',
					mm: '%d munud',
					h: 'awr',
					hh: '%d awr',
					d: 'diwrnod',
					dd: '%d diwrnod',
					M: 'mis',
					MM: '%d mis',
					y: 'blwyddyn',
					yy: '%d flynedd'
				},
				ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
				// traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
				ordinal: function(number) {
					var b = number, output = '', lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed',
						'fed', 'fed', // 1af to 10fed
						'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
					];

					if (b > 20) {
						if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
							output = 'fed'; // not 30ain, 70ain or 90ain
						} else {
							output = 'ain';
						}
					} else if (b > 0) {
						output = lookup[b];
					}

					return number + output;
				},
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 4
				// The week that contains Jan 4th is the first week of the year.
				}
			});
	}));
	// moment.js locale configuration
	// locale : danish (da)
	// author : Ulrik Nielsen : https://github.com/mrbase

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('da', {
			months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
			monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
			weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
			weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
			weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd [d.] D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[I dag kl.] LT',
				nextDay: '[I morgen kl.] LT',
				nextWeek: 'dddd [kl.] LT',
				lastDay: '[I går kl.] LT',
				lastWeek: '[sidste] dddd [kl] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'om %s',
				past: '%s siden',
				s: 'få sekunder',
				m: 'et minut',
				mm: '%d minutter',
				h: 'en time',
				hh: '%d timer',
				d: 'en dag',
				dd: '%d dage',
				M: 'en måned',
				MM: '%d måneder',
				y: 'et år',
				yy: '%d år'
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : austrian german (de-at)
	// author : lluchs : https://github.com/lluchs
	// author: Menelion Elensúle: https://github.com/Oire
	// author : Martin Groller : https://github.com/MadMG

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function processRelativeTime(number, withoutSuffix, key, isFuture) {
			var format = {
				'm': ['eine Minute', 'einer Minute'],
				'h': ['eine Stunde', 'einer Stunde'],
				'd': ['ein Tag', 'einem Tag'],
				'dd': [number + ' Tage', number + ' Tagen'],
				'M': ['ein Monat', 'einem Monat'],
				'MM': [number + ' Monate', number + ' Monaten'],
				'y': ['ein Jahr', 'einem Jahr'],
				'yy': [number + ' Jahre', number + ' Jahren']
			};
			return withoutSuffix ? format[key][0] : format[key][1];
		}

		return moment.defineLocale('de-at', {
			months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
			monthsShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
			weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
			weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
			weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD.MM.YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Heute um] LT [Uhr]',
				sameElse: 'L',
				nextDay: '[Morgen um] LT [Uhr]',
				nextWeek: 'dddd [um] LT [Uhr]',
				lastDay: '[Gestern um] LT [Uhr]',
				lastWeek: '[letzten] dddd [um] LT [Uhr]'
			},
			relativeTime: {
				future: 'in %s',
				past: 'vor %s',
				s: 'ein paar Sekunden',
				m: processRelativeTime,
				mm: '%d Minuten',
				h: processRelativeTime,
				hh: '%d Stunden',
				d: processRelativeTime,
				dd: processRelativeTime,
				M: processRelativeTime,
				MM: processRelativeTime,
				y: processRelativeTime,
				yy: processRelativeTime
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : german (de)
	// author : lluchs : https://github.com/lluchs
	// author: Menelion Elensúle: https://github.com/Oire

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function processRelativeTime(number, withoutSuffix, key, isFuture) {
			var format = {
				'm': ['eine Minute', 'einer Minute'],
				'h': ['eine Stunde', 'einer Stunde'],
				'd': ['ein Tag', 'einem Tag'],
				'dd': [number + ' Tage', number + ' Tagen'],
				'M': ['ein Monat', 'einem Monat'],
				'MM': [number + ' Monate', number + ' Monaten'],
				'y': ['ein Jahr', 'einem Jahr'],
				'yy': [number + ' Jahre', number + ' Jahren']
			};
			return withoutSuffix ? format[key][0] : format[key][1];
		}

		return moment.defineLocale('de', {
			months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
			monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
			weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
			weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
			weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD.MM.YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Heute um] LT [Uhr]',
				sameElse: 'L',
				nextDay: '[Morgen um] LT [Uhr]',
				nextWeek: 'dddd [um] LT [Uhr]',
				lastDay: '[Gestern um] LT [Uhr]',
				lastWeek: '[letzten] dddd [um] LT [Uhr]'
			},
			relativeTime: {
				future: 'in %s',
				past: 'vor %s',
				s: 'ein paar Sekunden',
				m: processRelativeTime,
				mm: '%d Minuten',
				h: processRelativeTime,
				hh: '%d Stunden',
				d: processRelativeTime,
				dd: processRelativeTime,
				M: processRelativeTime,
				MM: processRelativeTime,
				y: processRelativeTime,
				yy: processRelativeTime
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : modern greek (el)
	// author : Aggelos Karalias : https://github.com/mehiel

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			return moment
				.defineLocale(
					'el',
					{
						monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'
							.split('_'),
						monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'
							.split('_'),
						months: function(momentToFormat, format) {
							if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
								return this._monthsGenitiveEl[momentToFormat.month()];
							} else {
								return this._monthsNominativeEl[momentToFormat.month()];
							}
						},
						monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
						weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
						weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
						weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
						meridiem: function(hours, minutes, isLower) {
							if (hours > 11) {
								return isLower ? 'μμ' : 'ΜΜ';
							} else {
								return isLower ? 'πμ' : 'ΠΜ';
							}
						},
						isPM: function(input) {
							return ((input + '').toLowerCase()[0] === 'μ');
						},
						meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
						longDateFormat: {
							LT: 'h:mm A',
							LTS: 'h:mm:ss A',
							L: 'DD/MM/YYYY',
							LL: 'D MMMM YYYY',
							LLL: 'D MMMM YYYY LT',
							LLLL: 'dddd, D MMMM YYYY LT'
						},
						calendarEl: {
							sameDay: '[Σήμερα {}] LT',
							nextDay: '[Αύριο {}] LT',
							nextWeek: 'dddd [{}] LT',
							lastDay: '[Χθες {}] LT',
							lastWeek: function() {
								switch (this.day()) {
									case 6:
										return '[το προηγούμενο] dddd [{}] LT';
									default:
										return '[την προηγούμενη] dddd [{}] LT';
								}
							},
							sameElse: 'L'
						},
						calendar: function(key, mom) {
							var output = this._calendarEl[key], hours = mom && mom.hours();

							if (typeof output === 'function') {
								output = output.apply(mom);
							}

							return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
						},
						relativeTime: {
							future: 'σε %s',
							past: '%s πριν',
							s: 'λίγα δευτερόλεπτα',
							m: 'ένα λεπτό',
							mm: '%d λεπτά',
							h: 'μία ώρα',
							hh: '%d ώρες',
							d: 'μία μέρα',
							dd: '%d μέρες',
							M: 'ένας μήνας',
							MM: '%d μήνες',
							y: 'ένας χρόνος',
							yy: '%d χρόνια'
						},
						ordinalParse: /\d{1,2}η/,
						ordinal: '%dη',
						week: {
							dow: 1, // Monday is the first day of the week.
							doy: 4
						// The week that contains Jan 4st is the first week of the year.
						}
					});
		}));
	// moment.js locale configuration
	// locale : australian english (en-au)

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('en-au', {
			months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
			monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
			weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
			weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
			weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
			longDateFormat: {
				LT: 'h:mm A',
				LTS: 'h:mm:ss A',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Today at] LT',
				nextDay: '[Tomorrow at] LT',
				nextWeek: 'dddd [at] LT',
				lastDay: '[Yesterday at] LT',
				lastWeek: '[Last] dddd [at] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'in %s',
				past: '%s ago',
				s: 'a few seconds',
				m: 'a minute',
				mm: '%d minutes',
				h: 'an hour',
				hh: '%d hours',
				d: 'a day',
				dd: '%d days',
				M: 'a month',
				MM: '%d months',
				y: 'a year',
				yy: '%d years'
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(number) {
				var b = number % 10, output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2)
					? 'nd' : (b === 3) ? 'rd' : 'th';
				return number + output;
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : canadian english (en-ca)
	// author : Jonathan Abourbih : https://github.com/jonbca

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('en-ca', {
			months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
			monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
			weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
			weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
			weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
			longDateFormat: {
				LT: 'h:mm A',
				LTS: 'h:mm:ss A',
				L: 'YYYY-MM-DD',
				LL: 'D MMMM, YYYY',
				LLL: 'D MMMM, YYYY LT',
				LLLL: 'dddd, D MMMM, YYYY LT'
			},
			calendar: {
				sameDay: '[Today at] LT',
				nextDay: '[Tomorrow at] LT',
				nextWeek: 'dddd [at] LT',
				lastDay: '[Yesterday at] LT',
				lastWeek: '[Last] dddd [at] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'in %s',
				past: '%s ago',
				s: 'a few seconds',
				m: 'a minute',
				mm: '%d minutes',
				h: 'an hour',
				hh: '%d hours',
				d: 'a day',
				dd: '%d days',
				M: 'a month',
				MM: '%d months',
				y: 'a year',
				yy: '%d years'
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(number) {
				var b = number % 10, output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2)
					? 'nd' : (b === 3) ? 'rd' : 'th';
				return number + output;
			}
		});
	}));
	// moment.js locale configuration
	// locale : great britain english (en-gb)
	// author : Chris Gedrim : https://github.com/chrisgedrim

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('en-gb', {
			months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
			monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
			weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
			weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
			weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Today at] LT',
				nextDay: '[Tomorrow at] LT',
				nextWeek: 'dddd [at] LT',
				lastDay: '[Yesterday at] LT',
				lastWeek: '[Last] dddd [at] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'in %s',
				past: '%s ago',
				s: 'a few seconds',
				m: 'a minute',
				mm: '%d minutes',
				h: 'an hour',
				hh: '%d hours',
				d: 'a day',
				dd: '%d days',
				M: 'a month',
				MM: '%d months',
				y: 'a year',
				yy: '%d years'
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(number) {
				var b = number % 10, output = (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2)
					? 'nd' : (b === 3) ? 'rd' : 'th';
				return number + output;
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : esperanto (eo)
	// author : Colin Dean : https://github.com/colindean
	// komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('eo', {
			months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'
				.split('_'),
			monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
			weekdays: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
			weekdaysShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
			weekdaysMin: 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'YYYY-MM-DD',
				LL: 'D[-an de] MMMM, YYYY',
				LLL: 'D[-an de] MMMM, YYYY LT',
				LLLL: 'dddd, [la] D[-an de] MMMM, YYYY LT'
			},
			meridiem: function(hours, minutes, isLower) {
				if (hours > 11) {
					return isLower ? 'p.t.m.' : 'P.T.M.';
				} else {
					return isLower ? 'a.t.m.' : 'A.T.M.';
				}
			},
			calendar: {
				sameDay: '[Hodiaŭ je] LT',
				nextDay: '[Morgaŭ je] LT',
				nextWeek: 'dddd [je] LT',
				lastDay: '[Hieraŭ je] LT',
				lastWeek: '[pasinta] dddd [je] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'je %s',
				past: 'antaŭ %s',
				s: 'sekundoj',
				m: 'minuto',
				mm: '%d minutoj',
				h: 'horo',
				hh: '%d horoj',
				d: 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
				dd: '%d tagoj',
				M: 'monato',
				MM: '%d monatoj',
				y: 'jaro',
				yy: '%d jaroj'
			},
			ordinalParse: /\d{1,2}a/,
			ordinal: '%da',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : spanish (es)
	// author : Julio Napurí : https://github.com/julionc

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'
				.split('_');

			return moment.defineLocale('es', {
				months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'
					.split('_'),
				monthsShort: function(m, format) {
					if (/-MMM-/.test(format)) {
						return monthsShort[m.month()];
					} else {
						return monthsShortDot[m.month()];
					}
				},
				weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
				weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
				weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
				longDateFormat: {
					LT: 'H:mm',
					LTS: 'LT:ss',
					L: 'DD/MM/YYYY',
					LL: 'D [de] MMMM [de] YYYY',
					LLL: 'D [de] MMMM [de] YYYY LT',
					LLLL: 'dddd, D [de] MMMM [de] YYYY LT'
				},
				calendar: {
					sameDay: function() {
						return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
					},
					nextDay: function() {
						return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
					},
					nextWeek: function() {
						return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
					},
					lastDay: function() {
						return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
					},
					lastWeek: function() {
						return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: 'en %s',
					past: 'hace %s',
					s: 'unos segundos',
					m: 'un minuto',
					mm: '%d minutos',
					h: 'una hora',
					hh: '%d horas',
					d: 'un día',
					dd: '%d días',
					M: 'un mes',
					MM: '%d meses',
					y: 'un año',
					yy: '%d años'
				},
				ordinalParse: /\d{1,2}º/,
				ordinal: '%dº',
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 4
				// The week that contains Jan 4th is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : estonian (et)
	// author : Henry Kehlmann : https://github.com/madhenry
	// improvements : Illimar Tambek : https://github.com/ragulka

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function processRelativeTime(number, withoutSuffix, key, isFuture) {
			var format = {
				's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
				'm': ['ühe minuti', 'üks minut'],
				'mm': [number + ' minuti', number + ' minutit'],
				'h': ['ühe tunni', 'tund aega', 'üks tund'],
				'hh': [number + ' tunni', number + ' tundi'],
				'd': ['ühe päeva', 'üks päev'],
				'M': ['kuu aja', 'kuu aega', 'üks kuu'],
				'MM': [number + ' kuu', number + ' kuud'],
				'y': ['ühe aasta', 'aasta', 'üks aasta'],
				'yy': [number + ' aasta', number + ' aastat']
			};
			if (withoutSuffix) {
				return format[key][2] ? format[key][2] : format[key][1];
			}
			return isFuture ? format[key][0] : format[key][1];
		}

		return moment.defineLocale('et', {
			months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'
				.split('_'),
			monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
			weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
			weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
			weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD.MM.YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Täna,] LT',
				nextDay: '[Homme,] LT',
				nextWeek: '[Järgmine] dddd LT',
				lastDay: '[Eile,] LT',
				lastWeek: '[Eelmine] dddd LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s pärast',
				past: '%s tagasi',
				s: processRelativeTime,
				m: processRelativeTime,
				mm: processRelativeTime,
				h: processRelativeTime,
				hh: processRelativeTime,
				d: processRelativeTime,
				dd: '%d päeva',
				M: processRelativeTime,
				MM: processRelativeTime,
				y: processRelativeTime,
				yy: processRelativeTime
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : euskara (eu)
	// author : Eneko Illarramendi : https://github.com/eillarra

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('eu', {
			months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'
				.split('_'),
			monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
			weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
			weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
			weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'YYYY-MM-DD',
				LL: 'YYYY[ko] MMMM[ren] D[a]',
				LLL: 'YYYY[ko] MMMM[ren] D[a] LT',
				LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] LT',
				l: 'YYYY-M-D',
				ll: 'YYYY[ko] MMM D[a]',
				lll: 'YYYY[ko] MMM D[a] LT',
				llll: 'ddd, YYYY[ko] MMM D[a] LT'
			},
			calendar: {
				sameDay: '[gaur] LT[etan]',
				nextDay: '[bihar] LT[etan]',
				nextWeek: 'dddd LT[etan]',
				lastDay: '[atzo] LT[etan]',
				lastWeek: '[aurreko] dddd LT[etan]',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s barru',
				past: 'duela %s',
				s: 'segundo batzuk',
				m: 'minutu bat',
				mm: '%d minutu',
				h: 'ordu bat',
				hh: '%d ordu',
				d: 'egun bat',
				dd: '%d egun',
				M: 'hilabete bat',
				MM: '%d hilabete',
				y: 'urte bat',
				yy: '%d urte'
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Persian (fa)
	// author : Ebrahim Byagowi : https://github.com/ebraminio

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var symbolMap = {
			'1': '۱',
			'2': '۲',
			'3': '۳',
			'4': '۴',
			'5': '۵',
			'6': '۶',
			'7': '۷',
			'8': '۸',
			'9': '۹',
			'0': '۰'
		}, numberMap = {
			'۱': '1',
			'۲': '2',
			'۳': '3',
			'۴': '4',
			'۵': '5',
			'۶': '6',
			'۷': '7',
			'۸': '8',
			'۹': '9',
			'۰': '0'
		};

		return moment.defineLocale('fa', {
			months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
			monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
			weekdays: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
			weekdaysShort: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
			weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			meridiem: function(hour, minute, isLower) {
				if (hour < 12) {
					return 'قبل از ظهر';
				} else {
					return 'بعد از ظهر';
				}
			},
			calendar: {
				sameDay: '[امروز ساعت] LT',
				nextDay: '[فردا ساعت] LT',
				nextWeek: 'dddd [ساعت] LT',
				lastDay: '[دیروز ساعت] LT',
				lastWeek: 'dddd [پیش] [ساعت] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'در %s',
				past: '%s پیش',
				s: 'چندین ثانیه',
				m: 'یک دقیقه',
				mm: '%d دقیقه',
				h: 'یک ساعت',
				hh: '%d ساعت',
				d: 'یک روز',
				dd: '%d روز',
				M: 'یک ماه',
				MM: '%d ماه',
				y: 'یک سال',
				yy: '%d سال'
			},
			preparse: function(string) {
				return string.replace(/[۰-۹]/g, function(match) {
					return numberMap[match];
				}).replace(/،/g, ',');
			},
			postformat: function(string) {
				return string.replace(/\d/g, function(match) {
					return symbolMap[match];
				}).replace(/,/g, '،');
			},
			ordinalParse: /\d{1,2}م/,
			ordinal: '%dم',
			week: {
				dow: 6, // Saturday is the first day of the week.
				doy: 12
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : finnish (fi)
	// author : Tarmo Aidantausta : https://github.com/bleadof

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), numbersFuture = [
				'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8],
				numbersPast[9]];

			function translate(number, withoutSuffix, key, isFuture) {
				var result = '';
				switch (key) {
					case 's':
						return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
					case 'm':
						return isFuture ? 'minuutin' : 'minuutti';
					case 'mm':
						result = isFuture ? 'minuutin' : 'minuuttia';
						break;
					case 'h':
						return isFuture ? 'tunnin' : 'tunti';
					case 'hh':
						result = isFuture ? 'tunnin' : 'tuntia';
						break;
					case 'd':
						return isFuture ? 'päivän' : 'päivä';
					case 'dd':
						result = isFuture ? 'päivän' : 'päivää';
						break;
					case 'M':
						return isFuture ? 'kuukauden' : 'kuukausi';
					case 'MM':
						result = isFuture ? 'kuukauden' : 'kuukautta';
						break;
					case 'y':
						return isFuture ? 'vuoden' : 'vuosi';
					case 'yy':
						result = isFuture ? 'vuoden' : 'vuotta';
						break;
				}
				result = verbalNumber(number, isFuture) + ' ' + result;
				return result;
			}

			function verbalNumber(number, isFuture) {
				return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
			}

			return moment
				.defineLocale(
					'fi',
					{
						months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'
							.split('_'),
						monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
						weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
						weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
						weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
						longDateFormat: {
							LT: 'HH.mm',
							LTS: 'HH.mm.ss',
							L: 'DD.MM.YYYY',
							LL: 'Do MMMM[ta] YYYY',
							LLL: 'Do MMMM[ta] YYYY, [klo] LT',
							LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] LT',
							l: 'D.M.YYYY',
							ll: 'Do MMM YYYY',
							lll: 'Do MMM YYYY, [klo] LT',
							llll: 'ddd, Do MMM YYYY, [klo] LT'
						},
						calendar: {
							sameDay: '[tänään] [klo] LT',
							nextDay: '[huomenna] [klo] LT',
							nextWeek: 'dddd [klo] LT',
							lastDay: '[eilen] [klo] LT',
							lastWeek: '[viime] dddd[na] [klo] LT',
							sameElse: 'L'
						},
						relativeTime: {
							future: '%s päästä',
							past: '%s sitten',
							s: translate,
							m: translate,
							mm: translate,
							h: translate,
							hh: translate,
							d: translate,
							dd: translate,
							M: translate,
							MM: translate,
							y: translate,
							yy: translate
						},
						ordinalParse: /\d{1,2}\./,
						ordinal: '%d.',
						week: {
							dow: 1, // Monday is the first day of the week.
							doy: 4
						// The week that contains Jan 4th is the first week of the year.
						}
					});
		}));
	// moment.js locale configuration
	// locale : faroese (fo)
	// author : Ragnar Johannesen : https://github.com/ragnar123

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('fo', {
			months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
			monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
			weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
			weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
			weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D. MMMM, YYYY LT'
			},
			calendar: {
				sameDay: '[Í dag kl.] LT',
				nextDay: '[Í morgin kl.] LT',
				nextWeek: 'dddd [kl.] LT',
				lastDay: '[Í gjár kl.] LT',
				lastWeek: '[síðstu] dddd [kl] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'um %s',
				past: '%s síðani',
				s: 'fá sekund',
				m: 'ein minutt',
				mm: '%d minuttir',
				h: 'ein tími',
				hh: '%d tímar',
				d: 'ein dagur',
				dd: '%d dagar',
				M: 'ein mánaði',
				MM: '%d mánaðir',
				y: 'eitt ár',
				yy: '%d ár'
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : canadian french (fr-ca)
	// author : Jonathan Abourbih : https://github.com/jonbca

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('fr-ca', {
			months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
			monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
			weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
			weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
			weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'YYYY-MM-DD',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Aujourd\'hui à] LT',
				nextDay: '[Demain à] LT',
				nextWeek: 'dddd [à] LT',
				lastDay: '[Hier à] LT',
				lastWeek: 'dddd [dernier à] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'dans %s',
				past: 'il y a %s',
				s: 'quelques secondes',
				m: 'une minute',
				mm: '%d minutes',
				h: 'une heure',
				hh: '%d heures',
				d: 'un jour',
				dd: '%d jours',
				M: 'un mois',
				MM: '%d mois',
				y: 'un an',
				yy: '%d ans'
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function(number) {
				return number + (number === 1 ? 'er' : '');
			}
		});
	}));
	// moment.js locale configuration
	// locale : french (fr)
	// author : John Fischer : https://github.com/jfroffice

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('fr', {
			months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
			monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
			weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
			weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
			weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Aujourd\'hui à] LT',
				nextDay: '[Demain à] LT',
				nextWeek: 'dddd [à] LT',
				lastDay: '[Hier à] LT',
				lastWeek: 'dddd [dernier à] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'dans %s',
				past: 'il y a %s',
				s: 'quelques secondes',
				m: 'une minute',
				mm: '%d minutes',
				h: 'une heure',
				hh: '%d heures',
				d: 'un jour',
				dd: '%d jours',
				M: 'un mois',
				MM: '%d mois',
				y: 'un an',
				yy: '%d ans'
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function(number) {
				return number + (number === 1 ? 'er' : '');
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : galician (gl)
	// author : Juan G. Hurtado : https://github.com/juanghurtado

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('gl',
			{
				months: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'
					.split('_'),
				monthsShort: 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
				weekdays: 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
				weekdaysShort: 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
				weekdaysMin: 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
				longDateFormat: {
					LT: 'H:mm',
					LTS: 'LT:ss',
					L: 'DD/MM/YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY LT',
					LLLL: 'dddd D MMMM YYYY LT'
				},
				calendar: {
					sameDay: function() {
						return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
					},
					nextDay: function() {
						return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
					},
					nextWeek: function() {
						return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
					},
					lastDay: function() {
						return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
					},
					lastWeek: function() {
						return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: function(str) {
						if (str === 'uns segundos') {
							return 'nuns segundos';
						}
						return 'en ' + str;
					},
					past: 'hai %s',
					s: 'uns segundos',
					m: 'un minuto',
					mm: '%d minutos',
					h: 'unha hora',
					hh: '%d horas',
					d: 'un día',
					dd: '%d días',
					M: 'un mes',
					MM: '%d meses',
					y: 'un ano',
					yy: '%d anos'
				},
				ordinalParse: /\d{1,2}º/,
				ordinal: '%dº',
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 7
				// The week that contains Jan 1st is the first week of the year.
				}
			});
	}));
	// moment.js locale configuration
	// locale : Hebrew (he)
	// author : Tomer Cohen : https://github.com/tomer
	// author : Moshe Simantov : https://github.com/DevelopmentIL
	// author : Tal Ater : https://github.com/TalAter

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('he', {
			months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
			monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
			weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
			weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
			weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D [ב]MMMM YYYY',
				LLL: 'D [ב]MMMM YYYY LT',
				LLLL: 'dddd, D [ב]MMMM YYYY LT',
				l: 'D/M/YYYY',
				ll: 'D MMM YYYY',
				lll: 'D MMM YYYY LT',
				llll: 'ddd, D MMM YYYY LT'
			},
			calendar: {
				sameDay: '[היום ב־]LT',
				nextDay: '[מחר ב־]LT',
				nextWeek: 'dddd [בשעה] LT',
				lastDay: '[אתמול ב־]LT',
				lastWeek: '[ביום] dddd [האחרון בשעה] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'בעוד %s',
				past: 'לפני %s',
				s: 'מספר שניות',
				m: 'דקה',
				mm: '%d דקות',
				h: 'שעה',
				hh: function(number) {
					if (number === 2) {
						return 'שעתיים';
					}
					return number + ' שעות';
				},
				d: 'יום',
				dd: function(number) {
					if (number === 2) {
						return 'יומיים';
					}
					return number + ' ימים';
				},
				M: 'חודש',
				MM: function(number) {
					if (number === 2) {
						return 'חודשיים';
					}
					return number + ' חודשים';
				},
				y: 'שנה',
				yy: function(number) {
					if (number === 2) {
						return 'שנתיים';
					}
					return number + ' שנים';
				}
			}
		});
	}));
	// moment.js locale configuration
	// locale : hindi (hi)
	// author : Mayank Singhal : https://github.com/mayanksinghal

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var symbolMap = {
			'1': '१',
			'2': '२',
			'3': '३',
			'4': '४',
			'5': '५',
			'6': '६',
			'7': '७',
			'8': '८',
			'9': '९',
			'0': '०'
		}, numberMap = {
			'१': '1',
			'२': '2',
			'३': '3',
			'४': '4',
			'५': '5',
			'६': '6',
			'७': '7',
			'८': '8',
			'९': '9',
			'०': '0'
		};

		return moment.defineLocale('hi', {
			months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
			monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
			weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
			weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
			weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
			longDateFormat: {
				LT: 'A h:mm बजे',
				LTS: 'A h:mm:ss बजे',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY, LT',
				LLLL: 'dddd, D MMMM YYYY, LT'
			},
			calendar: {
				sameDay: '[आज] LT',
				nextDay: '[कल] LT',
				nextWeek: 'dddd, LT',
				lastDay: '[कल] LT',
				lastWeek: '[पिछले] dddd, LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s में',
				past: '%s पहले',
				s: 'कुछ ही क्षण',
				m: 'एक मिनट',
				mm: '%d मिनट',
				h: 'एक घंटा',
				hh: '%d घंटे',
				d: 'एक दिन',
				dd: '%d दिन',
				M: 'एक महीने',
				MM: '%d महीने',
				y: 'एक वर्ष',
				yy: '%d वर्ष'
			},
			preparse: function(string) {
				return string.replace(/[१२३४५६७८९०]/g, function(match) {
					return numberMap[match];
				});
			},
			postformat: function(string) {
				return string.replace(/\d/g, function(match) {
					return symbolMap[match];
				});
			},
			// Hindi notation for meridiems are quite fuzzy in practice. While there exists
			// a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
			meridiem: function(hour, minute, isLower) {
				if (hour < 4) {
					return 'रात';
				} else if (hour < 10) {
					return 'सुबह';
				} else if (hour < 17) {
					return 'दोपहर';
				} else if (hour < 20) {
					return 'शाम';
				} else {
					return 'रात';
				}
			},
			week: {
				dow: 0, // Sunday is the first day of the week.
				doy: 6
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : hrvatski (hr)
	// author : Bojan Marković : https://github.com/bmarkovic

	// based on (sl) translation by Robert Sedovšek

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function translate(number, withoutSuffix, key) {
			var result = number + ' ';
			switch (key) {
				case 'm':
					return withoutSuffix ? 'jedna minuta' : 'jedne minute';
				case 'mm':
					if (number === 1) {
						result += 'minuta';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'minute';
					} else {
						result += 'minuta';
					}
					return result;
				case 'h':
					return withoutSuffix ? 'jedan sat' : 'jednog sata';
				case 'hh':
					if (number === 1) {
						result += 'sat';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'sata';
					} else {
						result += 'sati';
					}
					return result;
				case 'dd':
					if (number === 1) {
						result += 'dan';
					} else {
						result += 'dana';
					}
					return result;
				case 'MM':
					if (number === 1) {
						result += 'mjesec';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'mjeseca';
					} else {
						result += 'mjeseci';
					}
					return result;
				case 'yy':
					if (number === 1) {
						result += 'godina';
					} else if (number === 2 || number === 3 || number === 4) {
						result += 'godine';
					} else {
						result += 'godina';
					}
					return result;
			}
		}

		return moment.defineLocale('hr', {
			months: 'sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'
				.split('_'),
			monthsShort: 'sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
			weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
			weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
			weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD. MM. YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[danas u] LT',
				nextDay: '[sutra u] LT',

				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return '[u] [nedjelju] [u] LT';
						case 3:
							return '[u] [srijedu] [u] LT';
						case 6:
							return '[u] [subotu] [u] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[u] dddd [u] LT';
					}
				},
				lastDay: '[jučer u] LT',
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
							return '[prošlu] dddd [u] LT';
						case 6:
							return '[prošle] [subote] [u] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[prošli] dddd [u] LT';
					}
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'za %s',
				past: 'prije %s',
				s: 'par sekundi',
				m: translate,
				mm: translate,
				h: translate,
				hh: translate,
				d: 'dan',
				dd: translate,
				M: 'mjesec',
				MM: translate,
				y: 'godinu',
				yy: translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : hungarian (hu)
	// author : Adam Brunner : https://github.com/adambrunner

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

		function translate(number, withoutSuffix, key, isFuture) {
			var num = number, suffix;

			switch (key) {
				case 's':
					return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
				case 'm':
					return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
				case 'mm':
					return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
				case 'h':
					return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
				case 'hh':
					return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
				case 'd':
					return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
				case 'dd':
					return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
				case 'M':
					return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
				case 'MM':
					return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
				case 'y':
					return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
				case 'yy':
					return num + (isFuture || withoutSuffix ? ' év' : ' éve');
			}

			return '';
		}

		function week(isFuture) {
			return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
		}

		return moment.defineLocale('hu', {
			months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'
				.split('_'),
			monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
			weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
			weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
			weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'YYYY.MM.DD.',
				LL: 'YYYY. MMMM D.',
				LLL: 'YYYY. MMMM D., LT',
				LLLL: 'YYYY. MMMM D., dddd LT'
			},
			meridiem: function(hours, minutes, isLower) {
				if (hours < 12) {
					return isLower === true ? 'de' : 'DE';
				} else {
					return isLower === true ? 'du' : 'DU';
				}
			},
			calendar: {
				sameDay: '[ma] LT[-kor]',
				nextDay: '[holnap] LT[-kor]',
				nextWeek: function() {
					return week.call(this, true);
				},
				lastDay: '[tegnap] LT[-kor]',
				lastWeek: function() {
					return week.call(this, false);
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s múlva',
				past: '%s',
				s: translate,
				m: translate,
				mm: translate,
				h: translate,
				hh: translate,
				d: translate,
				dd: translate,
				M: translate,
				MM: translate,
				y: translate,
				yy: translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Armenian (hy-am)
	// author : Armendarabyan : https://github.com/armendarabyan

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			function monthsCaseReplace(m, format) {
				var months = {
					'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'
						.split('_'),
					'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'
						.split('_')
				},

				nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ? 'accusative' : 'nominative';

				return months[nounCase][m.month()];
			}

			function monthsShortCaseReplace(m, format) {
				var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');

				return monthsShort[m.month()];
			}

			function weekdaysCaseReplace(m, format) {
				var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');

				return weekdays[m.day()];
			}

			return moment.defineLocale('hy-am', {
				months: monthsCaseReplace,
				monthsShort: monthsShortCaseReplace,
				weekdays: weekdaysCaseReplace,
				weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
				weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
				longDateFormat: {
					LT: 'HH:mm',
					LTS: 'LT:ss',
					L: 'DD.MM.YYYY',
					LL: 'D MMMM YYYY թ.',
					LLL: 'D MMMM YYYY թ., LT',
					LLLL: 'dddd, D MMMM YYYY թ., LT'
				},
				calendar: {
					sameDay: '[այսօր] LT',
					nextDay: '[վաղը] LT',
					lastDay: '[երեկ] LT',
					nextWeek: function() {
						return 'dddd [օրը ժամը] LT';
					},
					lastWeek: function() {
						return '[անցած] dddd [օրը ժամը] LT';
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: '%s հետո',
					past: '%s առաջ',
					s: 'մի քանի վայրկյան',
					m: 'րոպե',
					mm: '%d րոպե',
					h: 'ժամ',
					hh: '%d ժամ',
					d: 'օր',
					dd: '%d օր',
					M: 'ամիս',
					MM: '%d ամիս',
					y: 'տարի',
					yy: '%d տարի'
				},

				meridiem: function(hour) {
					if (hour < 4) {
						return 'գիշերվա';
					} else if (hour < 12) {
						return 'առավոտվա';
					} else if (hour < 17) {
						return 'ցերեկվա';
					} else {
						return 'երեկոյան';
					}
				},

				ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
				ordinal: function(number, period) {
					switch (period) {
						case 'DDD':
						case 'w':
						case 'W':
						case 'DDDo':
							if (number === 1) {
								return number + '-ին';
							}
							return number + '-րդ';
						default:
							return number;
					}
				},

				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 7
				// The week that contains Jan 1st is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : Bahasa Indonesia (id)
	// author : Mohammad Satrio Utomo : https://github.com/tyok
	// reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('id',
			{
				months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'
					.split('_'),
				monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
				weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
				weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
				weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
				longDateFormat: {
					LT: 'HH.mm',
					LTS: 'LT.ss',
					L: 'DD/MM/YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY [pukul] LT',
					LLLL: 'dddd, D MMMM YYYY [pukul] LT'
				},
				meridiem: function(hours, minutes, isLower) {
					if (hours < 11) {
						return 'pagi';
					} else if (hours < 15) {
						return 'siang';
					} else if (hours < 19) {
						return 'sore';
					} else {
						return 'malam';
					}
				},
				calendar: {
					sameDay: '[Hari ini pukul] LT',
					nextDay: '[Besok pukul] LT',
					nextWeek: 'dddd [pukul] LT',
					lastDay: '[Kemarin pukul] LT',
					lastWeek: 'dddd [lalu pukul] LT',
					sameElse: 'L'
				},
				relativeTime: {
					future: 'dalam %s',
					past: '%s yang lalu',
					s: 'beberapa detik',
					m: 'semenit',
					mm: '%d menit',
					h: 'sejam',
					hh: '%d jam',
					d: 'sehari',
					dd: '%d hari',
					M: 'sebulan',
					MM: '%d bulan',
					y: 'setahun',
					yy: '%d tahun'
				},
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 7
				// The week that contains Jan 1st is the first week of the year.
				}
			});
	}));
	// moment.js locale configuration
	// locale : icelandic (is)
	// author : Hinrik Örn Sigurðsson : https://github.com/hinrik

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function plural(n) {
			if (n % 100 === 11) {
				return true;
			} else if (n % 10 === 1) {
				return false;
			}
			return true;
		}

		function translate(number, withoutSuffix, key, isFuture) {
			var result = number + ' ';
			switch (key) {
				case 's':
					return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
				case 'm':
					return withoutSuffix ? 'mínúta' : 'mínútu';
				case 'mm':
					if (plural(number)) {
						return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
					} else if (withoutSuffix) {
						return result + 'mínúta';
					}
					return result + 'mínútu';
				case 'hh':
					if (plural(number)) {
						return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
					}
					return result + 'klukkustund';
				case 'd':
					if (withoutSuffix) {
						return 'dagur';
					}
					return isFuture ? 'dag' : 'degi';
				case 'dd':
					if (plural(number)) {
						if (withoutSuffix) {
							return result + 'dagar';
						}
						return result + (isFuture ? 'daga' : 'dögum');
					} else if (withoutSuffix) {
						return result + 'dagur';
					}
					return result + (isFuture ? 'dag' : 'degi');
				case 'M':
					if (withoutSuffix) {
						return 'mánuður';
					}
					return isFuture ? 'mánuð' : 'mánuði';
				case 'MM':
					if (plural(number)) {
						if (withoutSuffix) {
							return result + 'mánuðir';
						}
						return result + (isFuture ? 'mánuði' : 'mánuðum');
					} else if (withoutSuffix) {
						return result + 'mánuður';
					}
					return result + (isFuture ? 'mánuð' : 'mánuði');
				case 'y':
					return withoutSuffix || isFuture ? 'ár' : 'ári';
				case 'yy':
					if (plural(number)) {
						return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
					}
					return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
			}
		}

		return moment.defineLocale('is', {
			months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
			monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
			weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
			weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
			weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY [kl.] LT',
				LLLL: 'dddd, D. MMMM YYYY [kl.] LT'
			},
			calendar: {
				sameDay: '[í dag kl.] LT',
				nextDay: '[á morgun kl.] LT',
				nextWeek: 'dddd [kl.] LT',
				lastDay: '[í gær kl.] LT',
				lastWeek: '[síðasta] dddd [kl.] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'eftir %s',
				past: 'fyrir %s síðan',
				s: translate,
				m: translate,
				mm: translate,
				h: 'klukkustund',
				hh: translate,
				d: translate,
				dd: translate,
				M: translate,
				MM: translate,
				y: translate,
				yy: translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : italian (it)
	// author : Lorenzo : https://github.com/aliem
	// author: Mattia Larentis: https://github.com/nostalgiaz

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('it', {
			months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'
				.split('_'),
			monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
			weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
			weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
			weekdaysMin: 'D_L_Ma_Me_G_V_S'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Oggi alle] LT',
				nextDay: '[Domani alle] LT',
				nextWeek: 'dddd [alle] LT',
				lastDay: '[Ieri alle] LT',
				lastWeek: function() {
					switch (this.day()) {
						case 0:
							return '[la scorsa] dddd [alle] LT';
						default:
							return '[lo scorso] dddd [alle] LT';
					}
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: function(s) {
					return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
				},
				past: '%s fa',
				s: 'alcuni secondi',
				m: 'un minuto',
				mm: '%d minuti',
				h: 'un\'ora',
				hh: '%d ore',
				d: 'un giorno',
				dd: '%d giorni',
				M: 'un mese',
				MM: '%d mesi',
				y: 'un anno',
				yy: '%d anni'
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: '%dº',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : japanese (ja)
	// author : LI Long : https://github.com/baryon

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('ja', {
			months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
			monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
			weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
			weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
			weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
			longDateFormat: {
				LT: 'Ah時m分',
				LTS: 'LTs秒',
				L: 'YYYY/MM/DD',
				LL: 'YYYY年M月D日',
				LLL: 'YYYY年M月D日LT',
				LLLL: 'YYYY年M月D日LT dddd'
			},
			meridiem: function(hour, minute, isLower) {
				if (hour < 12) {
					return '午前';
				} else {
					return '午後';
				}
			},
			calendar: {
				sameDay: '[今日] LT',
				nextDay: '[明日] LT',
				nextWeek: '[来週]dddd LT',
				lastDay: '[昨日] LT',
				lastWeek: '[前週]dddd LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s後',
				past: '%s前',
				s: '数秒',
				m: '1分',
				mm: '%d分',
				h: '1時間',
				hh: '%d時間',
				d: '1日',
				dd: '%d日',
				M: '1ヶ月',
				MM: '%dヶ月',
				y: '1年',
				yy: '%d年'
			}
		});
	}));
	// moment.js locale configuration
	// locale : Georgian (ka)
	// author : Irakli Janiashvili : https://github.com/irakli-janiashvili

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			function monthsCaseReplace(m, format) {
				var months = {
					'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'
						.split('_'),
					'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'
						.split('_')
				},

				nounCase = (/D[oD] *MMMM?/).test(format) ? 'accusative' : 'nominative';

				return months[nounCase][m.month()];
			}

			function weekdaysCaseReplace(m, format) {
				var weekdays = {
					'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
					'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
				},

				nounCase = (/(წინა|შემდეგ)/).test(format) ? 'accusative' : 'nominative';

				return weekdays[nounCase][m.day()];
			}

			return moment.defineLocale('ka', {
				months: monthsCaseReplace,
				monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
				weekdays: weekdaysCaseReplace,
				weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
				weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
				longDateFormat: {
					LT: 'h:mm A',
					LTS: 'h:mm:ss A',
					L: 'DD/MM/YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY LT',
					LLLL: 'dddd, D MMMM YYYY LT'
				},
				calendar: {
					sameDay: '[დღეს] LT[-ზე]',
					nextDay: '[ხვალ] LT[-ზე]',
					lastDay: '[გუშინ] LT[-ზე]',
					nextWeek: '[შემდეგ] dddd LT[-ზე]',
					lastWeek: '[წინა] dddd LT-ზე',
					sameElse: 'L'
				},
				relativeTime: {
					future: function(s) {
						return (/(წამი|წუთი|საათი|წელი)/).test(s) ? s.replace(/ი$/, 'ში') : s + 'ში';
					},
					past: function(s) {
						if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
							return s.replace(/(ი|ე)$/, 'ის წინ');
						}
						if ((/წელი/).test(s)) {
							return s.replace(/წელი$/, 'წლის წინ');
						}
					},
					s: 'რამდენიმე წამი',
					m: 'წუთი',
					mm: '%d წუთი',
					h: 'საათი',
					hh: '%d საათი',
					d: 'დღე',
					dd: '%d დღე',
					M: 'თვე',
					MM: '%d თვე',
					y: 'წელი',
					yy: '%d წელი'
				},
				ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
				ordinal: function(number) {
					if (number === 0) {
						return number;
					}

					if (number === 1) {
						return number + '-ლი';
					}

					if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
						return 'მე-' + number;
					}

					return number + '-ე';
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		}));
	// moment.js locale configuration
	// locale : khmer (km)
	// author : Kruy Vanna : https://github.com/kruyvanna

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('km', {
			months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
			monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
			weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
			weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
			weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
				nextDay: '[ស្អែក ម៉ោង] LT',
				nextWeek: 'dddd [ម៉ោង] LT',
				lastDay: '[ម្សិលមិញ ម៉ោង] LT',
				lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%sទៀត',
				past: '%sមុន',
				s: 'ប៉ុន្មានវិនាទី',
				m: 'មួយនាទី',
				mm: '%d នាទី',
				h: 'មួយម៉ោង',
				hh: '%d ម៉ោង',
				d: 'មួយថ្ងៃ',
				dd: '%d ថ្ងៃ',
				M: 'មួយខែ',
				MM: '%d ខែ',
				y: 'មួយឆ្នាំ',
				yy: '%d ឆ្នាំ'
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : korean (ko)
	//
	// authors
	//
	// - Kyungwook, Park : https://github.com/kyungw00k
	// - Jeeeyul Lee <jeeeyul@gmail.com>
	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('ko', {
			months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
			monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
			weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
			weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
			weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
			longDateFormat: {
				LT: 'A h시 m분',
				LTS: 'A h시 m분 s초',
				L: 'YYYY.MM.DD',
				LL: 'YYYY년 MMMM D일',
				LLL: 'YYYY년 MMMM D일 LT',
				LLLL: 'YYYY년 MMMM D일 dddd LT'
			},
			meridiem: function(hour, minute, isUpper) {
				return hour < 12 ? '오전' : '오후';
			},
			calendar: {
				sameDay: '오늘 LT',
				nextDay: '내일 LT',
				nextWeek: 'dddd LT',
				lastDay: '어제 LT',
				lastWeek: '지난주 dddd LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s 후',
				past: '%s 전',
				s: '몇초',
				ss: '%d초',
				m: '일분',
				mm: '%d분',
				h: '한시간',
				hh: '%d시간',
				d: '하루',
				dd: '%d일',
				M: '한달',
				MM: '%d달',
				y: '일년',
				yy: '%d년'
			},
			ordinalParse: /\d{1,2}일/,
			ordinal: '%d일',
			meridiemParse: /(오전|오후)/,
			isPM: function(token) {
				return token === '오후';
			}
		});
	}));
	// moment.js locale configuration
	// locale : Luxembourgish (lb)
	// author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

	// Note: Luxembourgish has a very particular phonological rule ('Eifeler Regel') that causes the
	// deletion of the final 'n' in certain contexts. That's what the 'eifelerRegelAppliesToWeekday'
	// and 'eifelerRegelAppliesToNumber' methods are meant for

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function processRelativeTime(number, withoutSuffix, key, isFuture) {
			var format = {
				'm': ['eng Minutt', 'enger Minutt'],
				'h': ['eng Stonn', 'enger Stonn'],
				'd': ['een Dag', 'engem Dag'],
				'M': ['ee Mount', 'engem Mount'],
				'y': ['ee Joer', 'engem Joer']
			};
			return withoutSuffix ? format[key][0] : format[key][1];
		}

		function processFutureTime(string) {
			var number = string.substr(0, string.indexOf(' '));
			if (eifelerRegelAppliesToNumber(number)) {
				return 'a ' + string;
			}
			return 'an ' + string;
		}

		function processPastTime(string) {
			var number = string.substr(0, string.indexOf(' '));
			if (eifelerRegelAppliesToNumber(number)) {
				return 'viru ' + string;
			}
			return 'virun ' + string;
		}

		/**
		 * Returns true if the word before the given number loses the '-n' ending.
		 * e.g. 'an 10 Deeg' but 'a 5 Deeg'
		 *
		 * @param number {integer}
		 * @returns {boolean}
		 */
		function eifelerRegelAppliesToNumber(number) {
			number = parseInt(number, 10);
			if (isNaN(number)) {
				return false;
			}
			if (number < 0) {
				// Negative Number --> always true
				return true;
			} else if (number < 10) {
				// Only 1 digit
				if (4 <= number && number <= 7) {
					return true;
				}
				return false;
			} else if (number < 100) {
				// 2 digits
				var lastDigit = number % 10, firstDigit = number / 10;
				if (lastDigit === 0) {
					return eifelerRegelAppliesToNumber(firstDigit);
				}
				return eifelerRegelAppliesToNumber(lastDigit);
			} else if (number < 10000) {
				// 3 or 4 digits --> recursively check first digit
				while (number >= 10) {
					number = number / 10;
				}
				return eifelerRegelAppliesToNumber(number);
			} else {
				// Anything larger than 4 digits: recursively check first n-3 digits
				number = number / 1000;
				return eifelerRegelAppliesToNumber(number);
			}
		}

		return moment.defineLocale('lb', {
			months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
			monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
			weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
			weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
			weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
			longDateFormat: {
				LT: 'H:mm [Auer]',
				LTS: 'H:mm:ss [Auer]',
				L: 'DD.MM.YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Haut um] LT',
				sameElse: 'L',
				nextDay: '[Muer um] LT',
				nextWeek: 'dddd [um] LT',
				lastDay: '[Gëschter um] LT',
				lastWeek: function() {
					// Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
					switch (this.day()) {
						case 2:
						case 4:
							return '[Leschten] dddd [um] LT';
						default:
							return '[Leschte] dddd [um] LT';
					}
				}
			},
			relativeTime: {
				future: processFutureTime,
				past: processPastTime,
				s: 'e puer Sekonnen',
				m: processRelativeTime,
				mm: '%d Minutten',
				h: processRelativeTime,
				hh: '%d Stonnen',
				d: processRelativeTime,
				dd: '%d Deeg',
				M: processRelativeTime,
				MM: '%d Méint',
				y: processRelativeTime,
				yy: '%d Joer'
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Lithuanian (lt)
	// author : Mindaugas Mozūras : https://github.com/mmozuras

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var units = {
			'm': 'minutė_minutės_minutę',
			'mm': 'minutės_minučių_minutes',
			'h': 'valanda_valandos_valandą',
			'hh': 'valandos_valandų_valandas',
			'd': 'diena_dienos_dieną',
			'dd': 'dienos_dienų_dienas',
			'M': 'mėnuo_mėnesio_mėnesį',
			'MM': 'mėnesiai_mėnesių_mėnesius',
			'y': 'metai_metų_metus',
			'yy': 'metai_metų_metus'
		}, weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'
			.split('_');

		function translateSeconds(number, withoutSuffix, key, isFuture) {
			if (withoutSuffix) {
				return 'kelios sekundės';
			} else {
				return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
			}
		}

		function translateSingular(number, withoutSuffix, key, isFuture) {
			return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
		}

		function special(number) {
			return number % 10 === 0 || (number > 10 && number < 20);
		}

		function forms(key) {
			return units[key].split('_');
		}

		function translate(number, withoutSuffix, key, isFuture) {
			var result = number + ' ';
			if (number === 1) {
				return result + translateSingular(number, withoutSuffix, key[0], isFuture);
			} else if (withoutSuffix) {
				return result + (special(number) ? forms(key)[1] : forms(key)[0]);
			} else {
				if (isFuture) {
					return result + forms(key)[1];
				} else {
					return result + (special(number) ? forms(key)[1] : forms(key)[2]);
				}
			}
		}

		function relativeWeekDay(moment, format) {
			var nominative = format.indexOf('dddd HH:mm') === -1, weekDay = weekDays[moment.day()];

			return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';
		}

		return moment.defineLocale('lt', {
			months: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'
				.split('_'),
			monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
			weekdays: relativeWeekDay,
			weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
			weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'YYYY-MM-DD',
				LL: 'YYYY [m.] MMMM D [d.]',
				LLL: 'YYYY [m.] MMMM D [d.], LT [val.]',
				LLLL: 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',
				l: 'YYYY-MM-DD',
				ll: 'YYYY [m.] MMMM D [d.]',
				lll: 'YYYY [m.] MMMM D [d.], LT [val.]',
				llll: 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'
			},
			calendar: {
				sameDay: '[Šiandien] LT',
				nextDay: '[Rytoj] LT',
				nextWeek: 'dddd LT',
				lastDay: '[Vakar] LT',
				lastWeek: '[Praėjusį] dddd LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'po %s',
				past: 'prieš %s',
				s: translateSeconds,
				m: translateSingular,
				mm: translate,
				h: translateSingular,
				hh: translate,
				d: translateSingular,
				dd: translate,
				M: translateSingular,
				MM: translate,
				y: translateSingular,
				yy: translate
			},
			ordinalParse: /\d{1,2}-oji/,
			ordinal: function(number) {
				return number + '-oji';
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : latvian (lv)
	// author : Kristaps Karlsons : https://github.com/skakri

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var units = {
				'mm': 'minūti_minūtes_minūte_minūtes',
				'hh': 'stundu_stundas_stunda_stundas',
				'dd': 'dienu_dienas_diena_dienas',
				'MM': 'mēnesi_mēnešus_mēnesis_mēneši',
				'yy': 'gadu_gadus_gads_gadi'
			};

			function format(word, number, withoutSuffix) {
				var forms = word.split('_');
				if (withoutSuffix) {
					return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
				} else {
					return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
				}
			}

			function relativeTimeWithPlural(number, withoutSuffix, key) {
				return number + ' ' + format(units[key], number, withoutSuffix);
			}

			return moment
				.defineLocale(
					'lv',
					{
						months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'
							.split('_'),
						monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
						weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
						weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
						weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
						longDateFormat: {
							LT: 'HH:mm',
							LTS: 'LT:ss',
							L: 'DD.MM.YYYY',
							LL: 'YYYY. [gada] D. MMMM',
							LLL: 'YYYY. [gada] D. MMMM, LT',
							LLLL: 'YYYY. [gada] D. MMMM, dddd, LT'
						},
						calendar: {
							sameDay: '[Šodien pulksten] LT',
							nextDay: '[Rīt pulksten] LT',
							nextWeek: 'dddd [pulksten] LT',
							lastDay: '[Vakar pulksten] LT',
							lastWeek: '[Pagājušā] dddd [pulksten] LT',
							sameElse: 'L'
						},
						relativeTime: {
							future: '%s vēlāk',
							past: '%s agrāk',
							s: 'dažas sekundes',
							m: 'minūti',
							mm: relativeTimeWithPlural,
							h: 'stundu',
							hh: relativeTimeWithPlural,
							d: 'dienu',
							dd: relativeTimeWithPlural,
							M: 'mēnesi',
							MM: relativeTimeWithPlural,
							y: 'gadu',
							yy: relativeTimeWithPlural
						},
						ordinalParse: /\d{1,2}\./,
						ordinal: '%d.',
						week: {
							dow: 1, // Monday is the first day of the week.
							doy: 4
						// The week that contains Jan 4th is the first week of the year.
						}
					});
		}));
	// moment.js locale configuration
	// locale : macedonian (mk)
	// author : Borislav Mickov : https://github.com/B0k0

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('mk', {
			months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
			monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
			weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
			weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
			weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'D.MM.YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Денес во] LT',
				nextDay: '[Утре во] LT',
				nextWeek: 'dddd [во] LT',
				lastDay: '[Вчера во] LT',
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return '[Во изминатата] dddd [во] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[Во изминатиот] dddd [во] LT';
					}
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'после %s',
				past: 'пред %s',
				s: 'неколку секунди',
				m: 'минута',
				mm: '%d минути',
				h: 'час',
				hh: '%d часа',
				d: 'ден',
				dd: '%d дена',
				M: 'месец',
				MM: '%d месеци',
				y: 'година',
				yy: '%d години'
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function(number) {
				var lastDigit = number % 10, last2Digits = number % 100;
				if (number === 0) {
					return number + '-ев';
				} else if (last2Digits === 0) {
					return number + '-ен';
				} else if (last2Digits > 10 && last2Digits < 20) {
					return number + '-ти';
				} else if (lastDigit === 1) {
					return number + '-ви';
				} else if (lastDigit === 2) {
					return number + '-ри';
				} else if (lastDigit === 7 || lastDigit === 8) {
					return number + '-ми';
				} else {
					return number + '-ти';
				}
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : malayalam (ml)
	// author : Floyd Pink : https://github.com/floydpink

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('ml',
			{
				months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'
					.split('_'),
				monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
				weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
				weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
				weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
				longDateFormat: {
					LT: 'A h:mm -നു',
					LTS: 'A h:mm:ss -നു',
					L: 'DD/MM/YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY, LT',
					LLLL: 'dddd, D MMMM YYYY, LT'
				},
				calendar: {
					sameDay: '[ഇന്ന്] LT',
					nextDay: '[നാളെ] LT',
					nextWeek: 'dddd, LT',
					lastDay: '[ഇന്നലെ] LT',
					lastWeek: '[കഴിഞ്ഞ] dddd, LT',
					sameElse: 'L'
				},
				relativeTime: {
					future: '%s കഴിഞ്ഞ്',
					past: '%s മുൻപ്',
					s: 'അൽപ നിമിഷങ്ങൾ',
					m: 'ഒരു മിനിറ്റ്',
					mm: '%d മിനിറ്റ്',
					h: 'ഒരു മണിക്കൂർ',
					hh: '%d മണിക്കൂർ',
					d: 'ഒരു ദിവസം',
					dd: '%d ദിവസം',
					M: 'ഒരു മാസം',
					MM: '%d മാസം',
					y: 'ഒരു വർഷം',
					yy: '%d വർഷം'
				},
				meridiem: function(hour, minute, isLower) {
					if (hour < 4) {
						return 'രാത്രി';
					} else if (hour < 12) {
						return 'രാവിലെ';
					} else if (hour < 17) {
						return 'ഉച്ച കഴിഞ്ഞ്';
					} else if (hour < 20) {
						return 'വൈകുന്നേരം';
					} else {
						return 'രാത്രി';
					}
				}
			});
	}));
	// moment.js locale configuration
	// locale : Marathi (mr)
	// author : Harshad Kale : https://github.com/kalehv

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var symbolMap = {
			'1': '१',
			'2': '२',
			'3': '३',
			'4': '४',
			'5': '५',
			'6': '६',
			'7': '७',
			'8': '८',
			'9': '९',
			'0': '०'
		}, numberMap = {
			'१': '1',
			'२': '2',
			'३': '3',
			'४': '4',
			'५': '5',
			'६': '6',
			'७': '7',
			'८': '8',
			'९': '9',
			'०': '0'
		};

		return moment.defineLocale('mr', {
			months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
			monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
			weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
			weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
			weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
			longDateFormat: {
				LT: 'A h:mm वाजता',
				LTS: 'A h:mm:ss वाजता',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY, LT',
				LLLL: 'dddd, D MMMM YYYY, LT'
			},
			calendar: {
				sameDay: '[आज] LT',
				nextDay: '[उद्या] LT',
				nextWeek: 'dddd, LT',
				lastDay: '[काल] LT',
				lastWeek: '[मागील] dddd, LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s नंतर',
				past: '%s पूर्वी',
				s: 'सेकंद',
				m: 'एक मिनिट',
				mm: '%d मिनिटे',
				h: 'एक तास',
				hh: '%d तास',
				d: 'एक दिवस',
				dd: '%d दिवस',
				M: 'एक महिना',
				MM: '%d महिने',
				y: 'एक वर्ष',
				yy: '%d वर्षे'
			},
			preparse: function(string) {
				return string.replace(/[१२३४५६७८९०]/g, function(match) {
					return numberMap[match];
				});
			},
			postformat: function(string) {
				return string.replace(/\d/g, function(match) {
					return symbolMap[match];
				});
			},
			meridiem: function(hour, minute, isLower) {
				if (hour < 4) {
					return 'रात्री';
				} else if (hour < 10) {
					return 'सकाळी';
				} else if (hour < 17) {
					return 'दुपारी';
				} else if (hour < 20) {
					return 'सायंकाळी';
				} else {
					return 'रात्री';
				}
			},
			week: {
				dow: 0, // Sunday is the first day of the week.
				doy: 6
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Bahasa Malaysia (ms-MY)
	// author : Weldan Jamili : https://github.com/weldan

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('ms-my', {
			months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
			monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
			weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
			weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
			weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
			longDateFormat: {
				LT: 'HH.mm',
				LTS: 'LT.ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY [pukul] LT',
				LLLL: 'dddd, D MMMM YYYY [pukul] LT'
			},
			meridiem: function(hours, minutes, isLower) {
				if (hours < 11) {
					return 'pagi';
				} else if (hours < 15) {
					return 'tengahari';
				} else if (hours < 19) {
					return 'petang';
				} else {
					return 'malam';
				}
			},
			calendar: {
				sameDay: '[Hari ini pukul] LT',
				nextDay: '[Esok pukul] LT',
				nextWeek: 'dddd [pukul] LT',
				lastDay: '[Kelmarin pukul] LT',
				lastWeek: 'dddd [lepas pukul] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'dalam %s',
				past: '%s yang lepas',
				s: 'beberapa saat',
				m: 'seminit',
				mm: '%d minit',
				h: 'sejam',
				hh: '%d jam',
				d: 'sehari',
				dd: '%d hari',
				M: 'sebulan',
				MM: '%d bulan',
				y: 'setahun',
				yy: '%d tahun'
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Burmese (my)
	// author : Squar team, mysquar.com

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var symbolMap = {
			'1': '၁',
			'2': '၂',
			'3': '၃',
			'4': '၄',
			'5': '၅',
			'6': '၆',
			'7': '၇',
			'8': '၈',
			'9': '၉',
			'0': '၀'
		}, numberMap = {
			'၁': '1',
			'၂': '2',
			'၃': '3',
			'၄': '4',
			'၅': '5',
			'၆': '6',
			'၇': '7',
			'၈': '8',
			'၉': '9',
			'၀': '0'
		};
		return moment.defineLocale('my', {
			months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'
				.split('_'),
			monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
			weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
			weekdaysShort: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
			weekdaysMin: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[ယနေ.] LT [မှာ]',
				nextDay: '[မနက်ဖြန်] LT [မှာ]',
				nextWeek: 'dddd LT [မှာ]',
				lastDay: '[မနေ.က] LT [မှာ]',
				lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'လာမည့် %s မှာ',
				past: 'လွန်ခဲ့သော %s က',
				s: 'စက္ကန်.အနည်းငယ်',
				m: 'တစ်မိနစ်',
				mm: '%d မိနစ်',
				h: 'တစ်နာရီ',
				hh: '%d နာရီ',
				d: 'တစ်ရက်',
				dd: '%d ရက်',
				M: 'တစ်လ',
				MM: '%d လ',
				y: 'တစ်နှစ်',
				yy: '%d နှစ်'
			},
			preparse: function(string) {
				return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(match) {
					return numberMap[match];
				});
			},
			postformat: function(string) {
				return string.replace(/\d/g, function(match) {
					return symbolMap[match];
				});
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : norwegian bokmål (nb)
	// authors : Espen Hovlandsdal : https://github.com/rexxars
	//           Sigurd Gartmann : https://github.com/sigurdga

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('nb', {
			months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
			monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
			weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
			weekdaysShort: 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
			weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
			longDateFormat: {
				LT: 'H.mm',
				LTS: 'LT.ss',
				L: 'DD.MM.YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY [kl.] LT',
				LLLL: 'dddd D. MMMM YYYY [kl.] LT'
			},
			calendar: {
				sameDay: '[i dag kl.] LT',
				nextDay: '[i morgen kl.] LT',
				nextWeek: 'dddd [kl.] LT',
				lastDay: '[i går kl.] LT',
				lastWeek: '[forrige] dddd [kl.] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'om %s',
				past: 'for %s siden',
				s: 'noen sekunder',
				m: 'ett minutt',
				mm: '%d minutter',
				h: 'en time',
				hh: '%d timer',
				d: 'en dag',
				dd: '%d dager',
				M: 'en måned',
				MM: '%d måneder',
				y: 'ett år',
				yy: '%d år'
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : nepali/nepalese
	// author : suvash : https://github.com/suvash

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var symbolMap = {
			'1': '१',
			'2': '२',
			'3': '३',
			'4': '४',
			'5': '५',
			'6': '६',
			'7': '७',
			'8': '८',
			'9': '९',
			'0': '०'
		}, numberMap = {
			'१': '1',
			'२': '2',
			'३': '3',
			'४': '4',
			'५': '5',
			'६': '6',
			'७': '7',
			'८': '8',
			'९': '9',
			'०': '0'
		};

		return moment.defineLocale('ne', {
			months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
			monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
			weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
			weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
			weekdaysMin: 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
			longDateFormat: {
				LT: 'Aको h:mm बजे',
				LTS: 'Aको h:mm:ss बजे',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY, LT',
				LLLL: 'dddd, D MMMM YYYY, LT'
			},
			preparse: function(string) {
				return string.replace(/[१२३४५६७८९०]/g, function(match) {
					return numberMap[match];
				});
			},
			postformat: function(string) {
				return string.replace(/\d/g, function(match) {
					return symbolMap[match];
				});
			},
			meridiem: function(hour, minute, isLower) {
				if (hour < 3) {
					return 'राती';
				} else if (hour < 10) {
					return 'बिहान';
				} else if (hour < 15) {
					return 'दिउँसो';
				} else if (hour < 18) {
					return 'बेलुका';
				} else if (hour < 20) {
					return 'साँझ';
				} else {
					return 'राती';
				}
			},
			calendar: {
				sameDay: '[आज] LT',
				nextDay: '[भोली] LT',
				nextWeek: '[आउँदो] dddd[,] LT',
				lastDay: '[हिजो] LT',
				lastWeek: '[गएको] dddd[,] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%sमा',
				past: '%s अगाडी',
				s: 'केही समय',
				m: 'एक मिनेट',
				mm: '%d मिनेट',
				h: 'एक घण्टा',
				hh: '%d घण्टा',
				d: 'एक दिन',
				dd: '%d दिन',
				M: 'एक महिना',
				MM: '%d महिना',
				y: 'एक बर्ष',
				yy: '%d बर्ष'
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : dutch (nl)
	// author : Joris Röling : https://github.com/jjupiter

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'
				.split('_');

			return moment.defineLocale('nl', {
				months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'
					.split('_'),
				monthsShort: function(m, format) {
					if (/-MMM-/.test(format)) {
						return monthsShortWithoutDots[m.month()];
					} else {
						return monthsShortWithDots[m.month()];
					}
				},
				weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
				weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
				weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
				longDateFormat: {
					LT: 'HH:mm',
					LTS: 'LT:ss',
					L: 'DD-MM-YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY LT',
					LLLL: 'dddd D MMMM YYYY LT'
				},
				calendar: {
					sameDay: '[vandaag om] LT',
					nextDay: '[morgen om] LT',
					nextWeek: 'dddd [om] LT',
					lastDay: '[gisteren om] LT',
					lastWeek: '[afgelopen] dddd [om] LT',
					sameElse: 'L'
				},
				relativeTime: {
					future: 'over %s',
					past: '%s geleden',
					s: 'een paar seconden',
					m: 'één minuut',
					mm: '%d minuten',
					h: 'één uur',
					hh: '%d uur',
					d: 'één dag',
					dd: '%d dagen',
					M: 'één maand',
					MM: '%d maanden',
					y: 'één jaar',
					yy: '%d jaar'
				},
				ordinalParse: /\d{1,2}(ste|de)/,
				ordinal: function(number) {
					return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
				},
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 4
				// The week that contains Jan 4th is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : norwegian nynorsk (nn)
	// author : https://github.com/mechuwind

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('nn', {
			months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
			monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
			weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
			weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
			weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD.MM.YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[I dag klokka] LT',
				nextDay: '[I morgon klokka] LT',
				nextWeek: 'dddd [klokka] LT',
				lastDay: '[I går klokka] LT',
				lastWeek: '[Føregåande] dddd [klokka] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'om %s',
				past: 'for %s sidan',
				s: 'nokre sekund',
				m: 'eit minutt',
				mm: '%d minutt',
				h: 'ein time',
				hh: '%d timar',
				d: 'ein dag',
				dd: '%d dagar',
				M: 'ein månad',
				MM: '%d månader',
				y: 'eit år',
				yy: '%d år'
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : polish (pl)
	// author : Rafal Hirsz : https://github.com/evoL

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'
				.split('_'), monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'
				.split('_');

			function plural(n) {
				return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
			}

			function translate(number, withoutSuffix, key) {
				var result = number + ' ';
				switch (key) {
					case 'm':
						return withoutSuffix ? 'minuta' : 'minutę';
					case 'mm':
						return result + (plural(number) ? 'minuty' : 'minut');
					case 'h':
						return withoutSuffix ? 'godzina' : 'godzinę';
					case 'hh':
						return result + (plural(number) ? 'godziny' : 'godzin');
					case 'MM':
						return result + (plural(number) ? 'miesiące' : 'miesięcy');
					case 'yy':
						return result + (plural(number) ? 'lata' : 'lat');
				}
			}

			return moment.defineLocale('pl', {
				months: function(momentToFormat, format) {
					if (/D MMMM/.test(format)) {
						return monthsSubjective[momentToFormat.month()];
					} else {
						return monthsNominative[momentToFormat.month()];
					}
				},
				monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
				weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
				weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
				weekdaysMin: 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
				longDateFormat: {
					LT: 'HH:mm',
					LTS: 'LT:ss',
					L: 'DD.MM.YYYY',
					LL: 'D MMMM YYYY',
					LLL: 'D MMMM YYYY LT',
					LLLL: 'dddd, D MMMM YYYY LT'
				},
				calendar: {
					sameDay: '[Dziś o] LT',
					nextDay: '[Jutro o] LT',
					nextWeek: '[W] dddd [o] LT',
					lastDay: '[Wczoraj o] LT',
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return '[W zeszłą niedzielę o] LT';
							case 3:
								return '[W zeszłą środę o] LT';
							case 6:
								return '[W zeszłą sobotę o] LT';
							default:
								return '[W zeszły] dddd [o] LT';
						}
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: 'za %s',
					past: '%s temu',
					s: 'kilka sekund',
					m: translate,
					mm: translate,
					h: translate,
					hh: translate,
					d: '1 dzień',
					dd: '%d dni',
					M: 'miesiąc',
					MM: translate,
					y: 'rok',
					yy: translate
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: '%d.',
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 4
				// The week that contains Jan 4th is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : brazilian portuguese (pt-br)
	// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('pt-br', {
			months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'
				.split('_'),
			monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
			weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
			weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
			weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D [de] MMMM [de] YYYY',
				LLL: 'D [de] MMMM [de] YYYY [às] LT',
				LLLL: 'dddd, D [de] MMMM [de] YYYY [às] LT'
			},
			calendar: {
				sameDay: '[Hoje às] LT',
				nextDay: '[Amanhã às] LT',
				nextWeek: 'dddd [às] LT',
				lastDay: '[Ontem às] LT',
				lastWeek: function() {
					return (this.day() === 0 || this.day() === 6) ? '[Último] dddd [às] LT' : // Saturday + Sunday
					'[Última] dddd [às] LT'; // Monday - Friday
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'em %s',
				past: '%s atrás',
				s: 'segundos',
				m: 'um minuto',
				mm: '%d minutos',
				h: 'uma hora',
				hh: '%d horas',
				d: 'um dia',
				dd: '%d dias',
				M: 'um mês',
				MM: '%d meses',
				y: 'um ano',
				yy: '%d anos'
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: '%dº'
		});
	}));
	// moment.js locale configuration
	// locale : portuguese (pt)
	// author : Jefferson : https://github.com/jalex79

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('pt', {
			months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'
				.split('_'),
			monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
			weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
			weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
			weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D [de] MMMM [de] YYYY',
				LLL: 'D [de] MMMM [de] YYYY LT',
				LLLL: 'dddd, D [de] MMMM [de] YYYY LT'
			},
			calendar: {
				sameDay: '[Hoje às] LT',
				nextDay: '[Amanhã às] LT',
				nextWeek: 'dddd [às] LT',
				lastDay: '[Ontem às] LT',
				lastWeek: function() {
					return (this.day() === 0 || this.day() === 6) ? '[Último] dddd [às] LT' : // Saturday + Sunday
					'[Última] dddd [às] LT'; // Monday - Friday
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'em %s',
				past: 'há %s',
				s: 'segundos',
				m: 'um minuto',
				mm: '%d minutos',
				h: 'uma hora',
				hh: '%d horas',
				d: 'um dia',
				dd: '%d dias',
				M: 'um mês',
				MM: '%d meses',
				y: 'um ano',
				yy: '%d anos'
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: '%dº',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : romanian (ro)
	// author : Vlad Gurdiga : https://github.com/gurdiga
	// author : Valentin Agachi : https://github.com/avaly

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function relativeTimeWithPlural(number, withoutSuffix, key) {
			var format = {
				'mm': 'minute',
				'hh': 'ore',
				'dd': 'zile',
				'MM': 'luni',
				'yy': 'ani'
			}, separator = ' ';
			if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
				separator = ' de ';
			}

			return number + separator + format[key];
		}

		return moment.defineLocale('ro', {
			months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'
				.split('_'),
			monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
			weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
			weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
			weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD.MM.YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY H:mm',
				LLLL: 'dddd, D MMMM YYYY H:mm'
			},
			calendar: {
				sameDay: '[azi la] LT',
				nextDay: '[mâine la] LT',
				nextWeek: 'dddd [la] LT',
				lastDay: '[ieri la] LT',
				lastWeek: '[fosta] dddd [la] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'peste %s',
				past: '%s în urmă',
				s: 'câteva secunde',
				m: 'un minut',
				mm: relativeTimeWithPlural,
				h: 'o oră',
				hh: relativeTimeWithPlural,
				d: 'o zi',
				dd: relativeTimeWithPlural,
				M: 'o lună',
				MM: relativeTimeWithPlural,
				y: 'un an',
				yy: relativeTimeWithPlural
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : russian (ru)
	// author : Viktorminator : https://github.com/Viktorminator
	// Author : Menelion Elensúle : https://github.com/Oire

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function plural(word, num) {
			var forms = word.split('_');
			return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4
				&& (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
		}

		function relativeTimeWithPlural(number, withoutSuffix, key) {
			var format = {
				'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
				'hh': 'час_часа_часов',
				'dd': 'день_дня_дней',
				'MM': 'месяц_месяца_месяцев',
				'yy': 'год_года_лет'
			};
			if (key === 'm') {
				return withoutSuffix ? 'минута' : 'минуту';
			} else {
				return number + ' ' + plural(format[key], +number);
			}
		}

		function monthsCaseReplace(m, format) {
			var months = {
				'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'
					.split('_'),
				'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'
					.split('_')
			},

			nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ? 'accusative' : 'nominative';

			return months[nounCase][m.month()];
		}

		function monthsShortCaseReplace(m, format) {
			var monthsShort = {
				'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
				'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
			},

			nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ? 'accusative' : 'nominative';

			return monthsShort[nounCase][m.month()];
		}

		function weekdaysCaseReplace(m, format) {
			var weekdays = {
				'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
				'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
			},

			nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/).test(format) ? 'accusative' : 'nominative';

			return weekdays[nounCase][m.day()];
		}

		return moment.defineLocale('ru', {
			months: monthsCaseReplace,
			monthsShort: monthsShortCaseReplace,
			weekdays: weekdaysCaseReplace,
			weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
			weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
			monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i,
				/^ноя/i, /^дек/i],
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD.MM.YYYY',
				LL: 'D MMMM YYYY г.',
				LLL: 'D MMMM YYYY г., LT',
				LLLL: 'dddd, D MMMM YYYY г., LT'
			},
			calendar: {
				sameDay: '[Сегодня в] LT',
				nextDay: '[Завтра в] LT',
				lastDay: '[Вчера в] LT',
				nextWeek: function() {
					return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
				},
				lastWeek: function(now) {
					if (now.week() !== this.week()) {
						switch (this.day()) {
							case 0:
								return '[В прошлое] dddd [в] LT';
							case 1:
							case 2:
							case 4:
								return '[В прошлый] dddd [в] LT';
							case 3:
							case 5:
							case 6:
								return '[В прошлую] dddd [в] LT';
						}
					} else {
						if (this.day() === 2) {
							return '[Во] dddd [в] LT';
						} else {
							return '[В] dddd [в] LT';
						}
					}
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'через %s',
				past: '%s назад',
				s: 'несколько секунд',
				m: relativeTimeWithPlural,
				mm: relativeTimeWithPlural,
				h: 'час',
				hh: relativeTimeWithPlural,
				d: 'день',
				dd: relativeTimeWithPlural,
				M: 'месяц',
				MM: relativeTimeWithPlural,
				y: 'год',
				yy: relativeTimeWithPlural
			},

			meridiemParse: /ночи|утра|дня|вечера/i,
			isPM: function(input) {
				return /^(дня|вечера)$/.test(input);
			},

			meridiem: function(hour, minute, isLower) {
				if (hour < 4) {
					return 'ночи';
				} else if (hour < 12) {
					return 'утра';
				} else if (hour < 17) {
					return 'дня';
				} else {
					return 'вечера';
				}
			},

			ordinalParse: /\d{1,2}-(й|го|я)/,
			ordinal: function(number, period) {
				switch (period) {
					case 'M':
					case 'd':
					case 'DDD':
						return number + '-й';
					case 'D':
						return number + '-го';
					case 'w':
					case 'W':
						return number + '-я';
					default:
						return number;
				}
			},

			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : slovak (sk)
	// author : Martin Minka : https://github.com/k2s
	// based on work of petrbela : https://github.com/petrbela

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'), monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'
				.split('_');

			function plural(n) {
				return (n > 1) && (n < 5);
			}

			function translate(number, withoutSuffix, key, isFuture) {
				var result = number + ' ';
				switch (key) {
					case 's': // a few seconds / in a few seconds / a few seconds ago
						return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
					case 'm': // a minute / in a minute / a minute ago
						return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
					case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'minúty' : 'minút');
						} else {
							return result + 'minútami';
						}
						break;
					case 'h': // an hour / in an hour / an hour ago
						return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
					case 'hh': // 9 hours / in 9 hours / 9 hours ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'hodiny' : 'hodín');
						} else {
							return result + 'hodinami';
						}
						break;
					case 'd': // a day / in a day / a day ago
						return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
					case 'dd': // 9 days / in 9 days / 9 days ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'dni' : 'dní');
						} else {
							return result + 'dňami';
						}
						break;
					case 'M': // a month / in a month / a month ago
						return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
					case 'MM': // 9 months / in 9 months / 9 months ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'mesiace' : 'mesiacov');
						} else {
							return result + 'mesiacmi';
						}
						break;
					case 'y': // a year / in a year / a year ago
						return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
					case 'yy': // 9 years / in 9 years / 9 years ago
						if (withoutSuffix || isFuture) {
							return result + (plural(number) ? 'roky' : 'rokov');
						} else {
							return result + 'rokmi';
						}
						break;
				}
			}

			return moment.defineLocale('sk', {
				months: months,
				monthsShort: monthsShort,
				monthsParse: (function(months, monthsShort) {
					var i, _monthsParse = [];
					for (i = 0; i < 12; i++) {
						// use custom parser to solve problem with July (červenec)
						_monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
					}
					return _monthsParse;
				}(months, monthsShort)),
				weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
				weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
				weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
				longDateFormat: {
					LT: 'H:mm',
					LTS: 'LT:ss',
					L: 'DD.MM.YYYY',
					LL: 'D. MMMM YYYY',
					LLL: 'D. MMMM YYYY LT',
					LLLL: 'dddd D. MMMM YYYY LT'
				},
				calendar: {
					sameDay: '[dnes o] LT',
					nextDay: '[zajtra o] LT',
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return '[v nedeľu o] LT';
							case 1:
							case 2:
								return '[v] dddd [o] LT';
							case 3:
								return '[v stredu o] LT';
							case 4:
								return '[vo štvrtok o] LT';
							case 5:
								return '[v piatok o] LT';
							case 6:
								return '[v sobotu o] LT';
						}
					},
					lastDay: '[včera o] LT',
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return '[minulú nedeľu o] LT';
							case 1:
							case 2:
								return '[minulý] dddd [o] LT';
							case 3:
								return '[minulú stredu o] LT';
							case 4:
							case 5:
								return '[minulý] dddd [o] LT';
							case 6:
								return '[minulú sobotu o] LT';
						}
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: 'za %s',
					past: 'pred %s',
					s: translate,
					m: translate,
					mm: translate,
					h: translate,
					hh: translate,
					d: translate,
					dd: translate,
					M: translate,
					MM: translate,
					y: translate,
					yy: translate
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: '%d.',
				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 4
				// The week that contains Jan 4th is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : slovenian (sl)
	// author : Robert Sedovšek : https://github.com/sedovsek

	(function(factory) {
		factory(moment);
	}(function(moment) {
		function translate(number, withoutSuffix, key) {
			var result = number + ' ';
			switch (key) {
				case 'm':
					return withoutSuffix ? 'ena minuta' : 'eno minuto';
				case 'mm':
					if (number === 1) {
						result += 'minuta';
					} else if (number === 2) {
						result += 'minuti';
					} else if (number === 3 || number === 4) {
						result += 'minute';
					} else {
						result += 'minut';
					}
					return result;
				case 'h':
					return withoutSuffix ? 'ena ura' : 'eno uro';
				case 'hh':
					if (number === 1) {
						result += 'ura';
					} else if (number === 2) {
						result += 'uri';
					} else if (number === 3 || number === 4) {
						result += 'ure';
					} else {
						result += 'ur';
					}
					return result;
				case 'dd':
					if (number === 1) {
						result += 'dan';
					} else {
						result += 'dni';
					}
					return result;
				case 'MM':
					if (number === 1) {
						result += 'mesec';
					} else if (number === 2) {
						result += 'meseca';
					} else if (number === 3 || number === 4) {
						result += 'mesece';
					} else {
						result += 'mesecev';
					}
					return result;
				case 'yy':
					if (number === 1) {
						result += 'leto';
					} else if (number === 2) {
						result += 'leti';
					} else if (number === 3 || number === 4) {
						result += 'leta';
					} else {
						result += 'let';
					}
					return result;
			}
		}

		return moment.defineLocale('sl', {
			months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
			monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
			weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
			weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
			weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD. MM. YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[danes ob] LT',
				nextDay: '[jutri ob] LT',

				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return '[v] [nedeljo] [ob] LT';
						case 3:
							return '[v] [sredo] [ob] LT';
						case 6:
							return '[v] [soboto] [ob] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[v] dddd [ob] LT';
					}
				},
				lastDay: '[včeraj ob] LT',
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return '[prejšnja] dddd [ob] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[prejšnji] dddd [ob] LT';
					}
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'čez %s',
				past: '%s nazaj',
				s: 'nekaj sekund',
				m: translate,
				mm: translate,
				h: translate,
				hh: translate,
				d: 'en dan',
				dd: translate,
				M: 'en mesec',
				MM: translate,
				y: 'eno leto',
				yy: translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Albanian (sq)
	// author : Flakërim Ismani : https://github.com/flakerimi
	// author: Menelion Elensúle: https://github.com/Oire (tests)
	// author : Oerd Cukalla : https://github.com/oerd (fixes)

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('sq', {
			months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
			monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
			weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
			weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
			weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
			meridiem: function(hours, minutes, isLower) {
				return hours < 12 ? 'PD' : 'MD';
			},
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Sot në] LT',
				nextDay: '[Nesër në] LT',
				nextWeek: 'dddd [në] LT',
				lastDay: '[Dje në] LT',
				lastWeek: 'dddd [e kaluar në] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'në %s',
				past: '%s më parë',
				s: 'disa sekonda',
				m: 'një minutë',
				mm: '%d minuta',
				h: 'një orë',
				hh: '%d orë',
				d: 'një ditë',
				dd: '%d ditë',
				M: 'një muaj',
				MM: '%d muaj',
				y: 'një vit',
				yy: '%d vite'
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Serbian-cyrillic (sr-cyrl)
	// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var translator = {
			words: { //Different grammatical cases
				m: ['један минут', 'једне минуте'],
				mm: ['минут', 'минуте', 'минута'],
				h: ['један сат', 'једног сата'],
				hh: ['сат', 'сата', 'сати'],
				dd: ['дан', 'дана', 'дана'],
				MM: ['месец', 'месеца', 'месеци'],
				yy: ['година', 'године', 'година']
			},
			correctGrammaticalCase: function(number, wordKey) {
				return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
			},
			translate: function(number, withoutSuffix, key) {
				var wordKey = translator.words[key];
				if (key.length === 1) {
					return withoutSuffix ? wordKey[0] : wordKey[1];
				} else {
					return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
				}
			}
		};

		return moment.defineLocale('sr-cyrl', {
			months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар',
				'новембар', 'децембар'],
			monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
			weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
			weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
			weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD. MM. YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[данас у] LT',
				nextDay: '[сутра у] LT',

				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return '[у] [недељу] [у] LT';
						case 3:
							return '[у] [среду] [у] LT';
						case 6:
							return '[у] [суботу] [у] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[у] dddd [у] LT';
					}
				},
				lastDay: '[јуче у] LT',
				lastWeek: function() {
					var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT',
						'[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT',
						'[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
					return lastWeekDays[this.day()];
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'за %s',
				past: 'пре %s',
				s: 'неколико секунди',
				m: translator.translate,
				mm: translator.translate,
				h: translator.translate,
				hh: translator.translate,
				d: 'дан',
				dd: translator.translate,
				M: 'месец',
				MM: translator.translate,
				y: 'годину',
				yy: translator.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Serbian-latin (sr)
	// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var translator = {
			words: { //Different grammatical cases
				m: ['jedan minut', 'jedne minute'],
				mm: ['minut', 'minute', 'minuta'],
				h: ['jedan sat', 'jednog sata'],
				hh: ['sat', 'sata', 'sati'],
				dd: ['dan', 'dana', 'dana'],
				MM: ['mesec', 'meseca', 'meseci'],
				yy: ['godina', 'godine', 'godina']
			},
			correctGrammaticalCase: function(number, wordKey) {
				return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
			},
			translate: function(number, withoutSuffix, key) {
				var wordKey = translator.words[key];
				if (key.length === 1) {
					return withoutSuffix ? wordKey[0] : wordKey[1];
				} else {
					return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
				}
			}
		};

		return moment.defineLocale('sr', {
			months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar',
				'novembar', 'decembar'],
			monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
			weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
			weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
			weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
			longDateFormat: {
				LT: 'H:mm',
				LTS: 'LT:ss',
				L: 'DD. MM. YYYY',
				LL: 'D. MMMM YYYY',
				LLL: 'D. MMMM YYYY LT',
				LLLL: 'dddd, D. MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[danas u] LT',
				nextDay: '[sutra u] LT',

				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return '[u] [nedelju] [u] LT';
						case 3:
							return '[u] [sredu] [u] LT';
						case 6:
							return '[u] [subotu] [u] LT';
						case 1:
						case 2:
						case 4:
						case 5:
							return '[u] dddd [u] LT';
					}
				},
				lastDay: '[juče u] LT',
				lastWeek: function() {
					var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT',
						'[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT',
						'[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
					return lastWeekDays[this.day()];
				},
				sameElse: 'L'
			},
			relativeTime: {
				future: 'za %s',
				past: 'pre %s',
				s: 'nekoliko sekundi',
				m: translator.translate,
				mm: translator.translate,
				h: translator.translate,
				hh: translator.translate,
				d: 'dan',
				dd: translator.translate,
				M: 'mesec',
				MM: translator.translate,
				y: 'godinu',
				yy: translator.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: '%d.',
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : swedish (sv)
	// author : Jens Alm : https://github.com/ulmus

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('sv', {
			months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
			monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
			weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
			weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
			weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'YYYY-MM-DD',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[Idag] LT',
				nextDay: '[Imorgon] LT',
				lastDay: '[Igår] LT',
				nextWeek: 'dddd LT',
				lastWeek: '[Förra] dddd[en] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'om %s',
				past: 'för %s sedan',
				s: 'några sekunder',
				m: 'en minut',
				mm: '%d minuter',
				h: 'en timme',
				hh: '%d timmar',
				d: 'en dag',
				dd: '%d dagar',
				M: 'en månad',
				MM: '%d månader',
				y: 'ett år',
				yy: '%d år'
			},
			ordinalParse: /\d{1,2}(e|a)/,
			ordinal: function(number) {
				var b = number % 10, output = (~~(number % 100 / 10) === 1) ? 'e' : (b === 1) ? 'a' : (b === 2) ? 'a'
					: (b === 3) ? 'e' : 'e';
				return number + output;
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : tamil (ta)
	// author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

	(function(factory) {
		factory(moment);
	}(function(moment) {
		/*var symbolMap = {
		        '1': '௧',
		        '2': '௨',
		        '3': '௩',
		        '4': '௪',
		        '5': '௫',
		        '6': '௬',
		        '7': '௭',
		        '8': '௮',
		        '9': '௯',
		        '0': '௦'
		    },
		    numberMap = {
		        '௧': '1',
		        '௨': '2',
		        '௩': '3',
		        '௪': '4',
		        '௫': '5',
		        '௬': '6',
		        '௭': '7',
		        '௮': '8',
		        '௯': '9',
		        '௦': '0'
		    }; */

		return moment.defineLocale('ta', {
			months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'
				.split('_'),
			monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'
				.split('_'),
			weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'
				.split('_'),
			weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
			weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY, LT',
				LLLL: 'dddd, D MMMM YYYY, LT'
			},
			calendar: {
				sameDay: '[இன்று] LT',
				nextDay: '[நாளை] LT',
				nextWeek: 'dddd, LT',
				lastDay: '[நேற்று] LT',
				lastWeek: '[கடந்த வாரம்] dddd, LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s இல்',
				past: '%s முன்',
				s: 'ஒரு சில விநாடிகள்',
				m: 'ஒரு நிமிடம்',
				mm: '%d நிமிடங்கள்',
				h: 'ஒரு மணி நேரம்',
				hh: '%d மணி நேரம்',
				d: 'ஒரு நாள்',
				dd: '%d நாட்கள்',
				M: 'ஒரு மாதம்',
				MM: '%d மாதங்கள்',
				y: 'ஒரு வருடம்',
				yy: '%d ஆண்டுகள்'
			},
			/*        preparse: function (string) {
			 return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
			 return numberMap[match];
			 });
			 },
			 postformat: function (string) {
			 return string.replace(/\d/g, function (match) {
			 return symbolMap[match];
			 });
			 },*/
			ordinalParse: /\d{1,2}வது/,
			ordinal: function(number) {
				return number + 'வது';
			},

			// refer http://ta.wikipedia.org/s/1er1

			meridiem: function(hour, minute, isLower) {
				if (hour >= 6 && hour <= 10) {
					return ' காலை';
				} else if (hour >= 10 && hour <= 14) {
					return ' நண்பகல்';
				} else if (hour >= 14 && hour <= 18) {
					return ' எற்பாடு';
				} else if (hour >= 18 && hour <= 20) {
					return ' மாலை';
				} else if (hour >= 20 && hour <= 24) {
					return ' இரவு';
				} else if (hour >= 0 && hour <= 6) {
					return ' வைகறை';
				}
			},
			week: {
				dow: 0, // Sunday is the first day of the week.
				doy: 6
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : thai (th)
	// author : Kridsada Thanabulpong : https://github.com/sirn

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('th', {
			months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'
				.split('_'),
			monthsShort: 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
			weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
			weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
			weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
			longDateFormat: {
				LT: 'H นาฬิกา m นาที',
				LTS: 'LT s วินาที',
				L: 'YYYY/MM/DD',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY เวลา LT',
				LLLL: 'วันddddที่ D MMMM YYYY เวลา LT'
			},
			meridiem: function(hour, minute, isLower) {
				if (hour < 12) {
					return 'ก่อนเที่ยง';
				} else {
					return 'หลังเที่ยง';
				}
			},
			calendar: {
				sameDay: '[วันนี้ เวลา] LT',
				nextDay: '[พรุ่งนี้ เวลา] LT',
				nextWeek: 'dddd[หน้า เวลา] LT',
				lastDay: '[เมื่อวานนี้ เวลา] LT',
				lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'อีก %s',
				past: '%sที่แล้ว',
				s: 'ไม่กี่วินาที',
				m: '1 นาที',
				mm: '%d นาที',
				h: '1 ชั่วโมง',
				hh: '%d ชั่วโมง',
				d: '1 วัน',
				dd: '%d วัน',
				M: '1 เดือน',
				MM: '%d เดือน',
				y: '1 ปี',
				yy: '%d ปี'
			}
		});
	}));
	// moment.js locale configuration
	// locale : Tagalog/Filipino (tl-ph)
	// author : Dan Hagman

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('tl-ph', {
			months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'
				.split('_'),
			monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
			weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
			weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
			weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'MM/D/YYYY',
				LL: 'MMMM D, YYYY',
				LLL: 'MMMM D, YYYY LT',
				LLLL: 'dddd, MMMM DD, YYYY LT'
			},
			calendar: {
				sameDay: '[Ngayon sa] LT',
				nextDay: '[Bukas sa] LT',
				nextWeek: 'dddd [sa] LT',
				lastDay: '[Kahapon sa] LT',
				lastWeek: 'dddd [huling linggo] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'sa loob ng %s',
				past: '%s ang nakalipas',
				s: 'ilang segundo',
				m: 'isang minuto',
				mm: '%d minuto',
				h: 'isang oras',
				hh: '%d oras',
				d: 'isang araw',
				dd: '%d araw',
				M: 'isang buwan',
				MM: '%d buwan',
				y: 'isang taon',
				yy: '%d taon'
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function(number) {
				return number;
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : turkish (tr)
	// authors : Erhan Gundogan : https://github.com/erhangundogan,
	//           Burak Yiğit Kaya: https://github.com/BYK

	(function(factory) {
		factory(moment);
	}(function(moment) {
		var suffixes = {
			1: '\'inci',
			5: '\'inci',
			8: '\'inci',
			70: '\'inci',
			80: '\'inci',

			2: '\'nci',
			7: '\'nci',
			20: '\'nci',
			50: '\'nci',

			3: '\'üncü',
			4: '\'üncü',
			100: '\'üncü',

			6: '\'ncı',

			9: '\'uncu',
			10: '\'uncu',
			30: '\'uncu',

			60: '\'ıncı',
			90: '\'ıncı'
		};

		return moment.defineLocale('tr', {
			months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
			monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
			weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
			weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
			weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD.MM.YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd, D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[bugün saat] LT',
				nextDay: '[yarın saat] LT',
				nextWeek: '[haftaya] dddd [saat] LT',
				lastDay: '[dün] LT',
				lastWeek: '[geçen hafta] dddd [saat] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: '%s sonra',
				past: '%s önce',
				s: 'birkaç saniye',
				m: 'bir dakika',
				mm: '%d dakika',
				h: 'bir saat',
				hh: '%d saat',
				d: 'bir gün',
				dd: '%d gün',
				M: 'bir ay',
				MM: '%d ay',
				y: 'bir yıl',
				yy: '%d yıl'
			},
			ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
			ordinal: function(number) {
				if (number === 0) { // special case for zero
					return number + '\'ıncı';
				}
				var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;

				return number + (suffixes[a] || suffixes[b] || suffixes[c]);
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
	// author : Abdel Said : https://github.com/abdelsaid

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('tzm-latn', {
			months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
			monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'
				.split('_'),
			weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
			weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
			weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[asdkh g] LT',
				nextDay: '[aska g] LT',
				nextWeek: 'dddd [g] LT',
				lastDay: '[assant g] LT',
				lastWeek: 'dddd [g] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'dadkh s yan %s',
				past: 'yan %s',
				s: 'imik',
				m: 'minuḍ',
				mm: '%d minuḍ',
				h: 'saɛa',
				hh: '%d tassaɛin',
				d: 'ass',
				dd: '%d ossan',
				M: 'ayowr',
				MM: '%d iyyirn',
				y: 'asgas',
				yy: '%d isgasn'
			},
			week: {
				dow: 6, // Saturday is the first day of the week.
				doy: 12
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : Morocco Central Atlas Tamaziɣt (tzm)
	// author : Abdel Said : https://github.com/abdelsaid

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('tzm', {
			months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
			monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
			weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
			weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
			weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'dddd D MMMM YYYY LT'
			},
			calendar: {
				sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
				nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
				nextWeek: 'dddd [ⴴ] LT',
				lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
				lastWeek: 'dddd [ⴴ] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
				past: 'ⵢⴰⵏ %s',
				s: 'ⵉⵎⵉⴽ',
				m: 'ⵎⵉⵏⵓⴺ',
				mm: '%d ⵎⵉⵏⵓⴺ',
				h: 'ⵙⴰⵄⴰ',
				hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
				d: 'ⴰⵙⵙ',
				dd: '%d oⵙⵙⴰⵏ',
				M: 'ⴰⵢoⵓⵔ',
				MM: '%d ⵉⵢⵢⵉⵔⵏ',
				y: 'ⴰⵙⴳⴰⵙ',
				yy: '%d ⵉⵙⴳⴰⵙⵏ'
			},
			week: {
				dow: 6, // Saturday is the first day of the week.
				doy: 12
			// The week that contains Jan 1st is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : ukrainian (uk)
	// author : zemlanin : https://github.com/zemlanin
	// Author : Menelion Elensúle : https://github.com/Oire

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			function plural(word, num) {
				var forms = word.split('_');
				return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4
					&& (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
			}

			function relativeTimeWithPlural(number, withoutSuffix, key) {
				var format = {
					'mm': 'хвилина_хвилини_хвилин',
					'hh': 'година_години_годин',
					'dd': 'день_дні_днів',
					'MM': 'місяць_місяці_місяців',
					'yy': 'рік_роки_років'
				};
				if (key === 'm') {
					return withoutSuffix ? 'хвилина' : 'хвилину';
				} else if (key === 'h') {
					return withoutSuffix ? 'година' : 'годину';
				} else {
					return number + ' ' + plural(format[key], +number);
				}
			}

			function monthsCaseReplace(m, format) {
				var months = {
					'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'
						.split('_'),
					'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'
						.split('_')
				},

				nounCase = (/D[oD]? *MMMM?/).test(format) ? 'accusative' : 'nominative';

				return months[nounCase][m.month()];
			}

			function weekdaysCaseReplace(m, format) {
				var weekdays = {
					'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
					'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
					'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
				},

				nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ? 'accusative'
					: ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ? 'genitive' : 'nominative');

				return weekdays[nounCase][m.day()];
			}

			function processHoursFunction(str) {
				return function() {
					return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
				};
			}

			return moment.defineLocale('uk', {
				months: monthsCaseReplace,
				monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
				weekdays: weekdaysCaseReplace,
				weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
				weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
				longDateFormat: {
					LT: 'HH:mm',
					LTS: 'LT:ss',
					L: 'DD.MM.YYYY',
					LL: 'D MMMM YYYY р.',
					LLL: 'D MMMM YYYY р., LT',
					LLLL: 'dddd, D MMMM YYYY р., LT'
				},
				calendar: {
					sameDay: processHoursFunction('[Сьогодні '),
					nextDay: processHoursFunction('[Завтра '),
					lastDay: processHoursFunction('[Вчора '),
					nextWeek: processHoursFunction('[У] dddd ['),
					lastWeek: function() {
						switch (this.day()) {
							case 0:
							case 3:
							case 5:
							case 6:
								return processHoursFunction('[Минулої] dddd [').call(this);
							case 1:
							case 2:
							case 4:
								return processHoursFunction('[Минулого] dddd [').call(this);
						}
					},
					sameElse: 'L'
				},
				relativeTime: {
					future: 'за %s',
					past: '%s тому',
					s: 'декілька секунд',
					m: relativeTimeWithPlural,
					mm: relativeTimeWithPlural,
					h: 'годину',
					hh: relativeTimeWithPlural,
					d: 'день',
					dd: relativeTimeWithPlural,
					M: 'місяць',
					MM: relativeTimeWithPlural,
					y: 'рік',
					yy: relativeTimeWithPlural
				},

				// M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

				meridiem: function(hour, minute, isLower) {
					if (hour < 4) {
						return 'ночі';
					} else if (hour < 12) {
						return 'ранку';
					} else if (hour < 17) {
						return 'дня';
					} else {
						return 'вечора';
					}
				},

				ordinalParse: /\d{1,2}-(й|го)/,
				ordinal: function(number, period) {
					switch (period) {
						case 'M':
						case 'd':
						case 'DDD':
						case 'w':
						case 'W':
							return number + '-й';
						case 'D':
							return number + '-го';
						default:
							return number;
					}
				},

				week: {
					dow: 1, // Monday is the first day of the week.
					doy: 7
				// The week that contains Jan 1st is the first week of the year.
				}
			});
		}));
	// moment.js locale configuration
	// locale : uzbek (uz)
	// author : Sardor Muminov : https://github.com/muminoff

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('uz', {
			months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
			monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
			weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
			weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
			weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'LT:ss',
				L: 'DD/MM/YYYY',
				LL: 'D MMMM YYYY',
				LLL: 'D MMMM YYYY LT',
				LLLL: 'D MMMM YYYY, dddd LT'
			},
			calendar: {
				sameDay: '[Бугун соат] LT [да]',
				nextDay: '[Эртага] LT [да]',
				nextWeek: 'dddd [куни соат] LT [да]',
				lastDay: '[Кеча соат] LT [да]',
				lastWeek: '[Утган] dddd [куни соат] LT [да]',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'Якин %s ичида',
				past: 'Бир неча %s олдин',
				s: 'фурсат',
				m: 'бир дакика',
				mm: '%d дакика',
				h: 'бир соат',
				hh: '%d соат',
				d: 'бир кун',
				dd: '%d кун',
				M: 'бир ой',
				MM: '%d ой',
				y: 'бир йил',
				yy: '%d йил'
			},
			week: {
				dow: 1, // Monday is the first day of the week.
				doy: 7
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : vietnamese (vi)
	// author : Bang Nguyen : https://github.com/bangnk

	(function(factory) {
		factory(moment);
	}
		(function(moment) {
			return moment
				.defineLocale(
					'vi',
					{
						months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'
							.split('_'),
						monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
						weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
						weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
						weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
						longDateFormat: {
							LT: 'HH:mm',
							LTS: 'LT:ss',
							L: 'DD/MM/YYYY',
							LL: 'D MMMM [năm] YYYY',
							LLL: 'D MMMM [năm] YYYY LT',
							LLLL: 'dddd, D MMMM [năm] YYYY LT',
							l: 'DD/M/YYYY',
							ll: 'D MMM YYYY',
							lll: 'D MMM YYYY LT',
							llll: 'ddd, D MMM YYYY LT'
						},
						calendar: {
							sameDay: '[Hôm nay lúc] LT',
							nextDay: '[Ngày mai lúc] LT',
							nextWeek: 'dddd [tuần tới lúc] LT',
							lastDay: '[Hôm qua lúc] LT',
							lastWeek: 'dddd [tuần rồi lúc] LT',
							sameElse: 'L'
						},
						relativeTime: {
							future: '%s tới',
							past: '%s trước',
							s: 'vài giây',
							m: 'một phút',
							mm: '%d phút',
							h: 'một giờ',
							hh: '%d giờ',
							d: 'một ngày',
							dd: '%d ngày',
							M: 'một tháng',
							MM: '%d tháng',
							y: 'một năm',
							yy: '%d năm'
						},
						ordinalParse: /\d{1,2}/,
						ordinal: function(number) {
							return number;
						},
						week: {
							dow: 1, // Monday is the first day of the week.
							doy: 4
						// The week that contains Jan 4th is the first week of the year.
						}
					});
		}));
	// moment.js locale configuration
	// locale : chinese (zh-cn)
	// author : suupic : https://github.com/suupic
	// author : Zeno Zeng : https://github.com/zenozeng

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('zh-cn', {
			months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
			monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
			weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
			weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
			weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
			longDateFormat: {
				LT: 'Ah点mm',
				LTS: 'Ah点m分s秒',
				L: 'YYYY-MM-DD',
				LL: 'YYYY年MMMD日',
				LLL: 'YYYY年MMMD日LT',
				LLLL: 'YYYY年MMMD日ddddLT',
				l: 'YYYY-MM-DD',
				ll: 'YYYY年MMMD日',
				lll: 'YYYY年MMMD日LT',
				llll: 'YYYY年MMMD日ddddLT'
			},
			meridiem: function(hour, minute, isLower) {
				var hm = hour * 100 + minute;
				if (hm < 600) {
					return '凌晨';
				} else if (hm < 900) {
					return '早上';
				} else if (hm < 1130) {
					return '上午';
				} else if (hm < 1230) {
					return '中午';
				} else if (hm < 1800) {
					return '下午';
				} else {
					return '晚上';
				}
			},
			calendar: {
				sameDay: function() {
					return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
				},
				nextDay: function() {
					return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
				},
				lastDay: function() {
					return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
				},
				nextWeek: function() {
					var startOfWeek, prefix;
					startOfWeek = moment().startOf('week');
					prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
					return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
				},
				lastWeek: function() {
					var startOfWeek, prefix;
					startOfWeek = moment().startOf('week');
					prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
					return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
				},
				sameElse: 'LL'
			},
			ordinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function(number, period) {
				switch (period) {
					case 'd':
					case 'D':
					case 'DDD':
						return number + '日';
					case 'M':
						return number + '月';
					case 'w':
					case 'W':
						return number + '周';
					default:
						return number;
				}
			},
			relativeTime: {
				future: '%s内',
				past: '%s前',
				s: '几秒',
				m: '1分钟',
				mm: '%d分钟',
				h: '1小时',
				hh: '%d小时',
				d: '1天',
				dd: '%d天',
				M: '1个月',
				MM: '%d个月',
				y: '1年',
				yy: '%d年'
			},
			week: {
				// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
				dow: 1, // Monday is the first day of the week.
				doy: 4
			// The week that contains Jan 4th is the first week of the year.
			}
		});
	}));
	// moment.js locale configuration
	// locale : traditional chinese (zh-tw)
	// author : Ben : https://github.com/ben-lin

	(function(factory) {
		factory(moment);
	}(function(moment) {
		return moment.defineLocale('zh-tw', {
			months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
			monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
			weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
			weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
			weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
			longDateFormat: {
				LT: 'Ah點mm',
				LTS: 'Ah點m分s秒',
				L: 'YYYY年MMMD日',
				LL: 'YYYY年MMMD日',
				LLL: 'YYYY年MMMD日LT',
				LLLL: 'YYYY年MMMD日ddddLT',
				l: 'YYYY年MMMD日',
				ll: 'YYYY年MMMD日',
				lll: 'YYYY年MMMD日LT',
				llll: 'YYYY年MMMD日ddddLT'
			},
			meridiem: function(hour, minute, isLower) {
				var hm = hour * 100 + minute;
				if (hm < 900) {
					return '早上';
				} else if (hm < 1130) {
					return '上午';
				} else if (hm < 1230) {
					return '中午';
				} else if (hm < 1800) {
					return '下午';
				} else {
					return '晚上';
				}
			},
			calendar: {
				sameDay: '[今天]LT',
				nextDay: '[明天]LT',
				nextWeek: '[下]ddddLT',
				lastDay: '[昨天]LT',
				lastWeek: '[上]ddddLT',
				sameElse: 'L'
			},
			ordinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function(number, period) {
				switch (period) {
					case 'd':
					case 'D':
					case 'DDD':
						return number + '日';
					case 'M':
						return number + '月';
					case 'w':
					case 'W':
						return number + '週';
					default:
						return number;
				}
			},
			relativeTime: {
				future: '%s內',
				past: '%s前',
				s: '幾秒',
				m: '一分鐘',
				mm: '%d分鐘',
				h: '一小時',
				hh: '%d小時',
				d: '一天',
				dd: '%d天',
				M: '一個月',
				MM: '%d個月',
				y: '一年',
				yy: '%d年'
			}
		});
	}));

	moment.locale('en');

	/************************************
	    Exposing Moment
	 ************************************/

	function makeGlobal(shouldDeprecate) {
		/*global ender:false */
		if (typeof ender !== 'undefined') {
			return;
		}
		oldGlobalMoment = globalScope.moment;
		if (shouldDeprecate) {
			globalScope.moment = deprecate('Accessing Moment through the global scope is '
				+ 'deprecated, and will be removed in an upcoming ' + 'release.', moment);
		} else {
			globalScope.moment = moment;
		}
	}

	// CommonJS module is defined
	if (hasModule) {
		module.exports = moment;
	} else if (typeof define === 'function' && define.amd) {
		define('moment', function(require, exports, module) {
			if (module.config && module.config() && module.config().noGlobal === true) {
				// release the global variable
				globalScope.moment = oldGlobalMoment;
			}

			return moment;
		});
		makeGlobal(true);
	} else {
		makeGlobal();
	}
}).call(this);

/*
//! version : 3.1.3
=========================================================
bootstrap-datetimepicker.js
https://github.com/Eonasdan/bootstrap-datetimepicker
=========================================================
The MIT License (MIT)

Copyright (c) 2014 Jonathan Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
;
(function(root, factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD is used - Register as an anonymous module.
		define(['jquery', 'moment'], factory);
	} else if (typeof exports === 'object') {
		factory(require('jquery'), require('moment'));
	} else {
		// Neither AMD or CommonJS used. Use global variables.
		if (!jQuery) {
			throw new Error('bootstrap-datetimepicker requires jQuery to be loaded first');
		}
		if (!moment) {
			throw new Error('bootstrap-datetimepicker requires moment.js to be loaded first');
		}
		factory(root.jQuery, moment);
	}
}
	(
		this,
		function($, moment) {
			'use strict';
			if (typeof moment === 'undefined') {
				throw new Error('momentjs is required');
			}

			var dpgId = 0,

			DateTimePicker = function(element, options) {
				var defaults = $.fn.datetimepicker.defaults,

				icons = {
					time: 'fluigicon fluigicon-time',
					date: 'fluigicon fluigicon-calendar',
					up: 'fluigicon fluigicon-chevron-up',
					down: 'fluigicon fluigicon-chevron-down'
				},

				picker = this, errored = false, dDate,

				init = function() {
					var icon = false, localeData, rInterval;
					picker.options = $.extend({}, defaults, options);
					picker.options.icons = $.extend({}, icons, picker.options.icons);

					picker.element = $(element);

					dataToOptions();

					if (!(picker.options.pickTime || picker.options.pickDate)) {
						throw new Error('Must choose at least one picker');
					}

					picker.id = dpgId++;
					moment.locale(picker.options.language);
					picker.date = moment();
					picker.unset = false;
					picker.isInput = picker.element.is('input');
					picker.component = false;

					if (picker.element.hasClass('input-group')) {
						if (picker.element.find('.datepickerbutton').size() === 0) {//in case there is more then one 'input-group-addon' Issue #48
							picker.component = picker.element.find('[class^="input-group-"]');
						} else {
							picker.component = picker.element.find('.datepickerbutton');
						}
					}
					picker.format = picker.options.format;

					localeData = moment().localeData();

					if (!picker.format) {
						picker.format = (picker.options.pickDate ? localeData.longDateFormat('L') : '');
						if (picker.options.pickDate && picker.options.pickTime) {
							picker.format += ' ';
						}
						picker.format += (picker.options.pickTime ? localeData.longDateFormat('LT') : '');
						if (picker.options.useSeconds) {
							if (localeData.longDateFormat('LT').indexOf(' A') !== -1) {
								picker.format = picker.format.split(' A')[0] + ':ss A';
							} else {
								picker.format += ':ss';
							}
						}
					}
					picker.use24hours = (picker.format.toLowerCase().indexOf('a') < 0 && picker.format.indexOf('h') < 0);

					if (picker.component) {
						icon = picker.component.find('span');
					}

					if (picker.options.pickTime) {
						if (icon) {
							icon.addClass(picker.options.icons.time);
						}
					}
					if (picker.options.pickDate) {
						if (icon) {
							icon.removeClass(picker.options.icons.time);
							icon.addClass(picker.options.icons.date);
						}
					}

					picker.options.widgetParent = typeof picker.options.widgetParent === 'string'
						&& picker.options.widgetParent || picker.element.parents().filter(function() {
							return 'scroll' === $(this).css('overflow-y');
						}).get(0) || 'body';
					/**
					 * COMPORTAMENTO EXCLUSIVO PARA FUNCIONAR NO CONTEXTO DO FLUIG
					 * */
					var widgetParent = $('<div class="fluig-style-guide"></div>').appendTo(picker.options.widgetParent);

					picker.widget = $(getTemplate()).appendTo(widgetParent);

					picker.minViewMode = picker.options.minViewMode || 0;
					if (typeof picker.minViewMode === 'string') {
						switch (picker.minViewMode) {
							case 'months':
								picker.minViewMode = 1;
								break;
							case 'years':
								picker.minViewMode = 2;
								break;
							default:
								picker.minViewMode = 0;
								break;
						}
					}
					picker.viewMode = picker.options.viewMode || 0;
					if (typeof picker.viewMode === 'string') {
						switch (picker.viewMode) {
							case 'months':
								picker.viewMode = 1;
								break;
							case 'years':
								picker.viewMode = 2;
								break;
							default:
								picker.viewMode = 0;
								break;
						}
					}

					picker.viewMode = Math.max(picker.viewMode, picker.minViewMode);

					picker.options.disabledDates = indexGivenDates(picker.options.disabledDates);
					picker.options.enabledDates = indexGivenDates(picker.options.enabledDates);

					picker.startViewMode = picker.viewMode;
					picker.setMinDate(picker.options.minDate);
					picker.setMaxDate(picker.options.maxDate);
					fillDow();
					fillMonths();
					fillHours();
					fillMinutes();
					fillSeconds();
					update();
					showMode();
					if (!getPickerInput().prop('disabled')) {
						attachDatePickerEvents();
					}
					if (picker.options.defaultDate !== '' && getPickerInput().val() === '') {
						picker.setValue(picker.options.defaultDate);
					}
					if (picker.options.minuteStepping !== 1) {
						rInterval = picker.options.minuteStepping;
						picker.date.minutes((Math.round(picker.date.minutes() / rInterval) * rInterval) % 60)
							.seconds(0);
					}
				},

				getPickerInput = function() {
					var input;

					if (picker.isInput) {
						return picker.element;
					}
					input = picker.element.find('.datepickerinput');
					if (input.size() === 0) {
						input = picker.element.find('input');
					} else if (!input.is('input')) {
						throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
					}
					return input;
				},

				dataToOptions = function() {
					var eData;
					if (picker.element.is('input')) {
						eData = picker.element.data();
					} else {
						eData = picker.element.find('input').data();
					}
					if (eData.dateFormat !== undefined) {
						picker.options.format = eData.dateFormat;
					}
					if (eData.datePickdate !== undefined) {
						picker.options.pickDate = eData.datePickdate;
					}
					if (eData.datePicktime !== undefined) {
						picker.options.pickTime = eData.datePicktime;
					}
					if (eData.dateUseminutes !== undefined) {
						picker.options.useMinutes = eData.dateUseminutes;
					}
					if (eData.dateUseseconds !== undefined) {
						picker.options.useSeconds = eData.dateUseseconds;
					}
					if (eData.dateUsecurrent !== undefined) {
						picker.options.useCurrent = eData.dateUsecurrent;
					}
					if (eData.calendarWeeks !== undefined) {
						picker.options.calendarWeeks = eData.calendarWeeks;
					}
					if (eData.dateMinutestepping !== undefined) {
						picker.options.minuteStepping = eData.dateMinutestepping;
					}
					if (eData.dateMindate !== undefined) {
						picker.options.minDate = eData.dateMindate;
					}
					if (eData.dateMaxdate !== undefined) {
						picker.options.maxDate = eData.dateMaxdate;
					}
					if (eData.dateShowtoday !== undefined) {
						picker.options.showToday = eData.dateShowtoday;
					}
					if (eData.dateCollapse !== undefined) {
						picker.options.collapse = eData.dateCollapse;
					}
					if (eData.dateLanguage !== undefined) {
						picker.options.language = eData.dateLanguage;
					}
					if (eData.dateDefaultdate !== undefined) {
						picker.options.defaultDate = eData.dateDefaultdate;
					}
					if (eData.dateDisableddates !== undefined) {
						picker.options.disabledDates = eData.dateDisableddates;
					}
					if (eData.dateEnableddates !== undefined) {
						picker.options.enabledDates = eData.dateEnableddates;
					}
					if (eData.dateIcons !== undefined) {
						picker.options.icons = eData.dateIcons;
					}
					if (eData.dateUsestrict !== undefined) {
						picker.options.useStrict = eData.dateUsestrict;
					}
					if (eData.dateDirection !== undefined) {
						picker.options.direction = eData.dateDirection;
					}
					if (eData.dateSidebyside !== undefined) {
						picker.options.sideBySide = eData.dateSidebyside;
					}
					if (eData.dateDaysofweekdisabled !== undefined) {
						picker.options.daysOfWeekDisabled = eData.dateDaysofweekdisabled;
					}
				},

				place = function() {
					var position = 'absolute', offset = picker.component ? picker.component.offset() : picker.element
						.offset(), $window = $(document), placePosition;

					picker.width = picker.component ? picker.component.outerWidth() : picker.element.outerWidth();
					offset.top = offset.top + picker.element.outerHeight();

					if (picker.options.direction === 'up') {
						placePosition = 'top';
					} else if (picker.options.direction === 'bottom') {
						placePosition = 'bottom';
					} else if (picker.options.direction === 'auto') {
						if (offset.top + picker.widget.height() > $window.height() + $window.scrollTop()
							&& picker.widget.height() + picker.element.outerHeight() < offset.top) {
							placePosition = 'top';
						} else {
							placePosition = 'bottom';
						}
					}
					if (placePosition === 'top') {
						offset.bottom = $window.height() - offset.top + picker.element.outerHeight() + 3;
						picker.widget.addClass('top').removeClass('bottom');
					} else {
						offset.top += 1;
						picker.widget.addClass('bottom').removeClass('top');
					}

					if (picker.options.width !== undefined) {
						picker.widget.width(picker.options.width);
					}

					if (picker.options.orientation === 'left') {
						picker.widget.addClass('left-oriented');
						offset.left = offset.left - picker.widget.width() + 20;
					}

					if (isInFixed()) {
						position = 'fixed';
						offset.top -= $window.scrollTop();
						offset.left -= $window.scrollLeft();
					}

					if ($window.width() < offset.left + picker.widget.outerWidth()) {
						offset.right = $window.width() - offset.left - picker.width;
						offset.left = 'auto';
						picker.widget.addClass('pull-right');
					} else {
						offset.right = 'auto';
						picker.widget.removeClass('pull-right');
					}

					if (placePosition === 'top') {
						picker.widget.css({
							position: position,
							bottom: offset.bottom,
							top: 'auto',
							left: offset.left,
							right: offset.right
						});
					} else {
						picker.widget.css({
							position: position,
							top: offset.top,
							bottom: 'auto',
							left: offset.left,
							right: offset.right
						});
					}
				},

				notifyChange = function(oldDate, eventType) {
					if (moment(picker.date).isSame(moment(oldDate)) && !errored) {
						return;
					}
					errored = false;
					picker.element.trigger({
						type: 'dp.change',
						date: moment(picker.date),
						oldDate: moment(oldDate)
					});

					if (eventType !== 'change') {
						picker.element.change();
					}
				},

				notifyError = function(date) {
					errored = true;
					picker.element.trigger({
						type: 'dp.error',
						date: moment(date, picker.format, picker.options.useStrict)
					});
				},

				update = function(newDate) {
					moment.locale(picker.options.language);
					var dateStr = newDate;
					if (!dateStr) {
						dateStr = getPickerInput().val();
						if (dateStr) {
							picker.date = moment(dateStr, picker.format, picker.options.useStrict);
						}
						if (!picker.date) {
							picker.date = moment();
						}
					}
					picker.viewDate = moment(picker.date).startOf('month');
					fillDate();
					fillTime();
				},

				fillDow = function() {
					moment.locale(picker.options.language);
					var html = $('<tr>'), weekdaysMin = moment.weekdaysMin(), i;
					if (picker.options.calendarWeeks === true) {
						html.append('<th class="cw">#</th>');
					}
					if (moment().localeData()._week.dow === 0) { // starts on Sunday
						for (i = 0; i < 7; i++) {
							html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
						}
					} else {
						for (i = 1; i < 8; i++) {
							if (i === 7) {
								html.append('<th class="dow">' + weekdaysMin[0] + '</th>');
							} else {
								html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
							}
						}
					}
					picker.widget.find('.datepicker-days thead').append(html);
				},

				fillMonths = function() {
					moment.locale(picker.options.language);
					var html = '', i, monthsShort = moment.monthsShort();
					for (i = 0; i < 12; i++) {
						html += '<span class="month">' + monthsShort[i] + '</span>';
					}
					picker.widget.find('.datepicker-months td').append(html);
				},

				fillDate = function() {
					if (!picker.options.pickDate) {
						return;
					}
					moment.locale(picker.options.language);
					var year = picker.viewDate.year(), month = picker.viewDate.month(), startYear = picker.options.minDate
						.year(), startMonth = picker.options.minDate.month(), endYear = picker.options.maxDate.year(), endMonth = picker.options.maxDate
						.month(), currentDate, prevMonth, nextMonth, html = [], row, clsName, i, days, yearCont, currentYear, months = moment
						.months();

					picker.widget.find('.datepicker-days').find('.disabled').removeClass('disabled');
					picker.widget.find('.datepicker-months').find('.disabled').removeClass('disabled');
					picker.widget.find('.datepicker-years').find('.disabled').removeClass('disabled');

					picker.widget.find('.datepicker-days th:eq(1)').text(months[month] + ' ' + year);

					prevMonth = moment(picker.viewDate, picker.format, picker.options.useStrict).subtract(1, 'months');
					days = prevMonth.daysInMonth();
					prevMonth.date(days).startOf('week');
					if ((year === startYear && month <= startMonth) || year < startYear) {
						picker.widget.find('.datepicker-days th:eq(0)').addClass('disabled');
					}
					if ((year === endYear && month >= endMonth) || year > endYear) {
						picker.widget.find('.datepicker-days th:eq(2)').addClass('disabled');
					}

					nextMonth = moment(prevMonth).add(42, 'd');
					while (prevMonth.isBefore(nextMonth)) {
						if (prevMonth.weekday() === moment().startOf('week').weekday()) {
							row = $('<tr>');
							html.push(row);
							if (picker.options.calendarWeeks === true) {
								row.append('<td class="cw">' + prevMonth.week() + '</td>');
							}
						}
						clsName = '';
						if (prevMonth.year() < year || (prevMonth.year() === year && prevMonth.month() < month)) {
							clsName += ' old';
						} else if (prevMonth.year() > year || (prevMonth.year() === year && prevMonth.month() > month)) {
							clsName += ' new';
						}
						if (prevMonth.isSame(moment({
							y: picker.date.year(),
							M: picker.date.month(),
							d: picker.date.date()
						}))) {
							clsName += ' active';
						}
						if (isInDisableDates(prevMonth, 'day') || !isInEnableDates(prevMonth)) {
							clsName += ' disabled';
						}
						if (picker.options.showToday === true) {
							if (prevMonth.isSame(moment(), 'day')) {
								clsName += ' today';
							}
						}
						if (picker.options.daysOfWeekDisabled) {
							for (i = 0; i < picker.options.daysOfWeekDisabled.length; i++) {
								if (prevMonth.day() === picker.options.daysOfWeekDisabled[i]) {
									clsName += ' disabled';
									break;
								}
							}
						}
						row.append('<td class="day' + clsName + '">' + prevMonth.date() + '</td>');

						currentDate = prevMonth.date();
						prevMonth.add(1, 'd');

						if (currentDate === prevMonth.date()) {
							prevMonth.add(1, 'd');
						}
					}
					picker.widget.find('.datepicker-days tbody').empty().append(html);
					currentYear = picker.date.year();
					months = picker.widget.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span')
						.removeClass('active');
					if (currentYear === year) {
						months.eq(picker.date.month()).addClass('active');
					}
					if (year - 1 < startYear) {
						picker.widget.find('.datepicker-months th:eq(0)').addClass('disabled');
					}
					if (year + 1 > endYear) {
						picker.widget.find('.datepicker-months th:eq(2)').addClass('disabled');
					}
					for (i = 0; i < 12; i++) {
						if ((year === startYear && startMonth > i) || (year < startYear)) {
							$(months[i]).addClass('disabled');
						} else if ((year === endYear && endMonth < i) || (year > endYear)) {
							$(months[i]).addClass('disabled');
						}
					}

					html = '';
					year = parseInt(year / 10, 10) * 10;
					yearCont = picker.widget.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9))
						.parents('table').find('td');
					picker.widget.find('.datepicker-years').find('th').removeClass('disabled');
					if (startYear > year) {
						picker.widget.find('.datepicker-years').find('th:eq(0)').addClass('disabled');
					}
					if (endYear < year + 9) {
						picker.widget.find('.datepicker-years').find('th:eq(2)').addClass('disabled');
					}
					year -= 1;
					for (i = -1; i < 11; i++) {
						html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '')
							+ (currentYear === year ? ' active' : '')
							+ ((year < startYear || year > endYear) ? ' disabled' : '') + '">' + year + '</span>';
						year += 1;
					}
					yearCont.html(html);
				},

				fillHours = function() {
					moment.locale(picker.options.language);
					var table = picker.widget.find('.timepicker .timepicker-hours table'), html = '', current, i, j;
					table.parent().hide();
					if (picker.use24hours) {
						current = 0;
						for (i = 0; i < 6; i += 1) {
							html += '<tr>';
							for (j = 0; j < 4; j += 1) {
								html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
								current++;
							}
							html += '</tr>';
						}
					} else {
						current = 1;
						for (i = 0; i < 3; i += 1) {
							html += '<tr>';
							for (j = 0; j < 4; j += 1) {
								html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
								current++;
							}
							html += '</tr>';
						}
					}
					table.html(html);
				},

				fillMinutes = function() {
					var table = picker.widget.find('.timepicker .timepicker-minutes table'), html = '', current = 0, i, j, step = picker.options.minuteStepping;
					table.parent().hide();
					if (step === 1) {
						step = 5;
					}
					for (i = 0; i < Math.ceil(60 / step / 4); i++) {
						html += '<tr>';
						for (j = 0; j < 4; j += 1) {
							if (current < 60) {
								html += '<td class="minute">' + padLeft(current.toString()) + '</td>';
								current += step;
							} else {
								html += '<td></td>';
							}
						}
						html += '</tr>';
					}
					table.html(html);
				},

				fillSeconds = function() {
					var table = picker.widget.find('.timepicker .timepicker-seconds table'), html = '', current = 0, i, j;
					table.parent().hide();
					for (i = 0; i < 3; i++) {
						html += '<tr>';
						for (j = 0; j < 4; j += 1) {
							html += '<td class="second">' + padLeft(current.toString()) + '</td>';
							current += 5;
						}
						html += '</tr>';
					}
					table.html(html);
				},

				fillTime = function() {
					if (!picker.date) {
						return;
					}
					var timeComponents = picker.widget.find('.timepicker span[data-time-component]'), hour = picker.date
						.hours(), period = picker.date.format('A');
					if (!picker.use24hours) {
						if (hour === 0) {
							hour = 12;
						} else if (hour !== 12) {
							hour = hour % 12;
						}
						picker.widget.find('.timepicker [data-action=togglePeriod]').text(period);
					}
					timeComponents.filter('[data-time-component=hours]').text(padLeft(hour));
					timeComponents.filter('[data-time-component=minutes]').text(padLeft(picker.date.minutes()));
					timeComponents.filter('[data-time-component=seconds]').text(padLeft(picker.date.second()));
				},

				click = function(e) {
					e.stopPropagation();
					e.preventDefault();
					picker.unset = false;
					var target = $(e.target).closest('span, td, th'), month, year, step, day, oldDate = moment(picker.date);
					if (target.length === 1) {
						if (!target.is('.disabled')) {
							switch (target[0].nodeName.toLowerCase()) {
								case 'th':
									switch (target[0].className) {
										case 'picker-switch':
											showMode(1);
											break;
										case 'prev':
										case 'next':
											step = dpGlobal.modes[picker.viewMode].navStep;
											if (target[0].className === 'prev') {
												step = step * -1;
											}
											picker.viewDate.add(step, dpGlobal.modes[picker.viewMode].navFnc);
											fillDate();
											break;
									}
									break;
								case 'span':
									if (target.is('.month')) {
										month = target.parent().find('span').index(target);
										picker.viewDate.month(month);
									} else {
										year = parseInt(target.text(), 10) || 0;
										picker.viewDate.year(year);
									}
									if (picker.viewMode === picker.minViewMode) {
										picker.date = moment({
											y: picker.viewDate.year(),
											M: picker.viewDate.month(),
											d: picker.viewDate.date(),
											h: picker.date.hours(),
											m: picker.date.minutes(),
											s: picker.date.seconds()
										});
										set();
										notifyChange(oldDate, e.type);
									}
									showMode(-1);
									fillDate();
									break;
								case 'td':
									if (target.is('.day')) {
										day = parseInt(target.text(), 10) || 1;
										month = picker.viewDate.month();
										year = picker.viewDate.year();
										if (target.is('.old')) {
											if (month === 0) {
												month = 11;
												year -= 1;
											} else {
												month -= 1;
											}
										} else if (target.is('.new')) {
											if (month === 11) {
												month = 0;
												year += 1;
											} else {
												month += 1;
											}
										}
										picker.date = moment({
											y: year,
											M: month,
											d: day,
											h: picker.date.hours(),
											m: picker.date.minutes(),
											s: picker.date.seconds()
										});
										picker.viewDate = moment({
											y: year,
											M: month,
											d: Math.min(28, day)
										});
										fillDate();
										set();
										notifyChange(oldDate, e.type);
									}
									break;
							}
						}
					}
				},

				actions = {
					incrementHours: function() {
						checkDate('add', 'hours', 1);
					},

					incrementMinutes: function() {
						checkDate('add', 'minutes', picker.options.minuteStepping);
					},

					incrementSeconds: function() {
						checkDate('add', 'seconds', 1);
					},

					decrementHours: function() {
						checkDate('subtract', 'hours', 1);
					},

					decrementMinutes: function() {
						checkDate('subtract', 'minutes', picker.options.minuteStepping);
					},

					decrementSeconds: function() {
						checkDate('subtract', 'seconds', 1);
					},

					togglePeriod: function() {
						var hour = picker.date.hours();
						if (hour >= 12) {
							hour -= 12;
						} else {
							hour += 12;
						}
						picker.date.hours(hour);
					},

					showPicker: function() {
						picker.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
						picker.widget.find('.timepicker .timepicker-picker').show();
					},

					showHours: function() {
						picker.widget.find('.timepicker .timepicker-picker').hide();
						picker.widget.find('.timepicker .timepicker-hours').show();
					},

					showMinutes: function() {
						picker.widget.find('.timepicker .timepicker-picker').hide();
						picker.widget.find('.timepicker .timepicker-minutes').show();
					},

					showSeconds: function() {
						picker.widget.find('.timepicker .timepicker-picker').hide();
						picker.widget.find('.timepicker .timepicker-seconds').show();
					},

					selectHour: function(e) {
						var hour = parseInt($(e.target).text(), 10);
						if (!picker.use24hours) {
							if (picker.date.hours() >= 12) {
								if (hour !== 12) {
									hour += 12;
								}
							} else {
								if (hour === 12) {
									hour = 0;
								}
							}
						}
						picker.date.hours(hour);
						actions.showPicker.call(picker);
					},

					selectMinute: function(e) {
						picker.date.minutes(parseInt($(e.target).text(), 10));
						actions.showPicker.call(picker);
					},

					selectSecond: function(e) {
						picker.date.seconds(parseInt($(e.target).text(), 10));
						actions.showPicker.call(picker);
					}
				},

				doAction = function(e) {
					var oldDate = moment(picker.date), action = $(e.currentTarget).data('action'), rv = actions[action]
						.apply(picker, arguments);
					stopEvent(e);
					if (!picker.date) {
						picker.date = moment({
							y: 1970
						});
					}
					set();
					fillTime();
					notifyChange(oldDate, e.type);
					return rv;
				},

				stopEvent = function(e) {
					e.stopPropagation();
					e.preventDefault();
				},

				keydown = function(e) {
					if (e.keyCode === 27) { // allow escape to hide picker
						picker.hide();
					}
				},

				change = function(e) {
					moment.locale(picker.options.language);
					var input = $(e.target), oldDate = moment(picker.date), newDate = moment(input.val(),
						picker.format, picker.options.useStrict);
					if (newDate.isValid() && !isInDisableDates(newDate) && isInEnableDates(newDate)) {
						update();
						picker.setValue(newDate);
						notifyChange(oldDate, e.type);
						set();
					} else {
						picker.viewDate = oldDate;
						picker.unset = true;
						notifyChange(oldDate, e.type);
						notifyError(newDate);
					}
				},

				showMode = function(dir) {
					if (dir) {
						picker.viewMode = Math.max(picker.minViewMode, Math.min(2, picker.viewMode + dir));
					}
					picker.widget.find('.datepicker > div').hide().filter(
						'.datepicker-' + dpGlobal.modes[picker.viewMode].clsName).show();
				},

				attachDatePickerEvents = function() {
					var $this, $parent, expanded, closed, collapseData;
					picker.widget.on('click', '.datepicker *', $.proxy(click, this)); // this handles date picker clicks
					picker.widget.on('click', '[data-action]', $.proxy(doAction, this)); // this handles time picker clicks
					picker.widget.on('mousedown', $.proxy(stopEvent, this));
					picker.element.on('keydown', $.proxy(keydown, this));
					if (picker.options.pickDate && picker.options.pickTime) {
						picker.widget.on('click.togglePicker', '.accordion-toggle', function(e) {
							e.stopPropagation();
							$this = $(this);
							$parent = $this.closest('ul');
							expanded = $parent.find('.in');
							closed = $parent.find('.collapse:not(.in)');

							if (expanded && expanded.length) {
								collapseData = expanded.data('collapse');
								if (collapseData && collapseData.transitioning) {
									return;
								}
								expanded.collapse('hide');
								closed.collapse('show');
								$this.find('span').toggleClass(
									picker.options.icons.time + ' ' + picker.options.icons.date);
								if (picker.component) {
									picker.component.find('span').toggleClass(
										picker.options.icons.time + ' ' + picker.options.icons.date);
								}
							}
						});
					}
					if (picker.isInput) {
						picker.element.on({
							'click': $.proxy(picker.show, this),
							'focus': $.proxy(picker.show, this),
							'change': $.proxy(change, this),
							'blur': $.proxy(picker.hide, this)
						});
					} else {
						picker.element.on({
							'change': $.proxy(change, this)
						}, 'input');
						if (picker.component) {
							picker.component.on('click', $.proxy(picker.show, this));
							picker.component.on('mousedown', $.proxy(stopEvent, this));
						} else {
							picker.element.on('click', $.proxy(picker.show, this));
						}
					}
				},

				attachDatePickerGlobalEvents = function() {
					$(window).on('resize.datetimepicker' + picker.id, $.proxy(place, this));
					if (!picker.isInput) {
						$(document).on('mousedown.datetimepicker' + picker.id, $.proxy(picker.hide, this));
					}
				},

				detachDatePickerEvents = function() {
					picker.widget.off('click', '.datepicker *', picker.click);
					picker.widget.off('click', '[data-action]');
					picker.widget.off('mousedown', picker.stopEvent);
					if (picker.options.pickDate && picker.options.pickTime) {
						picker.widget.off('click.togglePicker');
					}
					if (picker.isInput) {
						picker.element.off({
							'focus': picker.show,
							'change': change,
							'click': picker.show,
							'blur': picker.hide
						});
					} else {
						picker.element.off({
							'change': change
						}, 'input');
						if (picker.component) {
							picker.component.off('click', picker.show);
							picker.component.off('mousedown', picker.stopEvent);
						} else {
							picker.element.off('click', picker.show);
						}
					}
				},

				detachDatePickerGlobalEvents = function() {
					$(window).off('resize.datetimepicker' + picker.id);
					if (!picker.isInput) {
						$(document).off('mousedown.datetimepicker' + picker.id);
					}
				},

				isInFixed = function() {
					if (picker.element) {
						var parents = picker.element.parents(), inFixed = false, i;
						for (i = 0; i < parents.length; i++) {
							if ($(parents[i]).css('position') === 'fixed') {
								inFixed = true;
								break;
							}
						}
						return inFixed;
					} else {
						return false;
					}
				},

				set = function() {
					moment.locale(picker.options.language);
					var formatted = '';
					if (!picker.unset) {
						formatted = moment(picker.date).format(picker.format);
					}
					getPickerInput().val(formatted);
					picker.element.data('date', formatted);
					if (!picker.options.pickTime) {
						picker.hide();
					}
				},

				checkDate = function(direction, unit, amount) {
					moment.locale(picker.options.language);
					var newDate;
					if (direction === 'add') {
						newDate = moment(picker.date);
						if (newDate.hours() === 23) {
							newDate.add(amount, unit);
						}
						newDate.add(amount, unit);
					} else {
						newDate = moment(picker.date).subtract(amount, unit);
					}
					if (isInDisableDates(moment(newDate.subtract(amount, unit))) || isInDisableDates(newDate)) {
						notifyError(newDate.format(picker.format));
						return;
					}

					if (direction === 'add') {
						picker.date.add(amount, unit);
					} else {
						picker.date.subtract(amount, unit);
					}
					picker.unset = false;
				},

				isInDisableDates = function(date, timeUnit) {
					moment.locale(picker.options.language);
					var maxDate = moment(picker.options.maxDate, picker.format, picker.options.useStrict), minDate = moment(
						picker.options.minDate, picker.format, picker.options.useStrict);

					if (timeUnit) {
						maxDate = maxDate.endOf(timeUnit);
						minDate = minDate.startOf(timeUnit);
					}

					if (date.isAfter(maxDate) || date.isBefore(minDate)) {
						return true;
					}
					if (picker.options.disabledDates === false) {
						return false;
					}
					return picker.options.disabledDates[date.format('YYYY-MM-DD')] === true;
				}, isInEnableDates = function(date) {
					moment.locale(picker.options.language);
					if (picker.options.enabledDates === false) {
						return true;
					}
					return picker.options.enabledDates[date.format('YYYY-MM-DD')] === true;
				},

				indexGivenDates = function(givenDatesArray) {
					// Store given enabledDates and disabledDates as keys.
					// This way we can check their existence in O(1) time instead of looping through whole array.
					// (for example: picker.options.enabledDates['2014-02-27'] === true)
					var givenDatesIndexed = {}, givenDatesCount = 0, i;
					for (i = 0; i < givenDatesArray.length; i++) {
						if (moment.isMoment(givenDatesArray[i]) || givenDatesArray[i] instanceof Date) {
							dDate = moment(givenDatesArray[i]);
						} else {
							dDate = moment(givenDatesArray[i], picker.format, picker.options.useStrict);
						}
						if (dDate.isValid()) {
							givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
							givenDatesCount++;
						}
					}
					if (givenDatesCount > 0) {
						return givenDatesIndexed;
					}
					return false;
				},

				padLeft = function(string) {
					string = string.toString();
					if (string.length >= 2) {
						return string;
					}
					return '0' + string;
				},

				getTemplate = function() {
					var headTemplate = '<thead>' + '<tr>' + '<th class="prev">&lsaquo;</th><th colspan="'
						+ (picker.options.calendarWeeks ? '6' : '5')
						+ '" class="picker-switch"></th><th class="next">&rsaquo;</th>' + '</tr>' + '</thead>', contTemplate = '<tbody><tr><td colspan="'
						+ (picker.options.calendarWeeks ? '8' : '7') + '"></td></tr></tbody>', template = '<div class="datepicker-days">'
						+ '<table class="table-condensed">'
						+ headTemplate
						+ '<tbody></tbody></table>'
						+ '</div>'
						+ '<div class="datepicker-months">'
						+ '<table class="table-condensed">'
						+ headTemplate
						+ contTemplate
						+ '</table>'
						+ '</div>'
						+ '<div class="datepicker-years">'
						+ '<table class="table-condensed">' + headTemplate + contTemplate + '</table>' + '</div>', ret = '';
					if (picker.options.pickDate && picker.options.pickTime) {
						ret = '<div class="bootstrap-datetimepicker-widget'
							+ (picker.options.sideBySide ? ' timepicker-sbs' : '')
							+ (picker.use24hours ? ' usetwentyfour' : '')
							+ ' dropdown-menu" style="z-index:9999 !important;">';
						if (picker.options.sideBySide) {
							ret += '<div class="row">' + '<div class="col-sm-6 datepicker">' + template + '</div>'
								+ '<div class="col-sm-6 timepicker">' + tpGlobal.getTemplate() + '</div>' + '</div>';
						} else {
							ret += '<ul class="list-unstyled">'
								+ '<li'
								+ (picker.options.collapse ? ' class="collapse in"' : '')
								+ '>'
								+ '<div class="datepicker">'
								+ template
								+ '</div>'
								+ '</li>'
								+ '<li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="'
								+ picker.options.icons.time + '"></span></a></li>' + '<li'
								+ (picker.options.collapse ? ' class="collapse"' : '') + '>'
								+ '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' + '</li>' + '</ul>';
						}
						ret += '</div>';
						return ret;
					}
					if (picker.options.pickTime) {
						return ('<div class="bootstrap-datetimepicker-widget dropdown-menu">'
							+ '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' + '</div>');
					}
					return ('<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<div class="datepicker">'
						+ template + '</div>' + '</div>');
				},

				dpGlobal = {
					modes: [{
						clsName: 'days',
						navFnc: 'month',
						navStep: 1
					}, {
						clsName: 'months',
						navFnc: 'year',
						navStep: 1
					}, {
						clsName: 'years',
						navFnc: 'year',
						navStep: 10
					}]
				},

				tpGlobal = {
					hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
					minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
					secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
				};

				tpGlobal.getTemplate = function() {
					return ('<div class="timepicker-picker">' + '<table class="table-condensed">' + '<tr>'
						+ '<td><a href="#" class="btn" data-action="incrementHours"><span class="'
						+ picker.options.icons.up
						+ '"></span></a></td>'
						+ '<td class="separator"></td>'
						+ '<td>'
						+ (picker.options.useMinutes
							? '<a href="#" class="btn" data-action="incrementMinutes"><span class="'
								+ picker.options.icons.up + '"></span></a>' : '')
						+ '</td>'
						+ (picker.options.useSeconds
							? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="'
								+ picker.options.icons.up + '"></span></a></td>' : '')
						+ (picker.use24hours ? '' : '<td class="separator"></td>')
						+ '</tr>'
						+ '<tr>'
						+ '<td>'
						+ tpGlobal.hourTemplate
						+ '</td> '
						+ '<td class="separator">:</td>'
						+ '<td>'
						+ (picker.options.useMinutes ? tpGlobal.minuteTemplate
							: '<span class="timepicker-minute">00</span>')
						+ '</td> '
						+ (picker.options.useSeconds ? '<td class="separator">:</td><td>' + tpGlobal.secondTemplate
							+ '</td>' : '')
						+ (picker.use24hours
							? ''
							: '<td class="separator"></td>'
								+ '<td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>')
						+ '</tr>'
						+ '<tr>'
						+ '<td><a href="#" class="btn" data-action="decrementHours"><span class="'
						+ picker.options.icons.down
						+ '"></span></a></td>'
						+ '<td class="separator"></td>'
						+ '<td>'
						+ (picker.options.useMinutes
							? '<a href="#" class="btn" data-action="decrementMinutes"><span class="'
								+ picker.options.icons.down + '"></span></a>' : '')
						+ '</td>'
						+ (picker.options.useSeconds
							? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="'
								+ picker.options.icons.down + '"></span></a></td>' : '')
						+ (picker.use24hours ? '' : '<td class="separator"></td>')
						+ '</tr>'
						+ '</table>'
						+ '</div>'
						+ '<div class="timepicker-hours" data-action="selectHour">'
						+ '<table class="table-condensed"></table>'
						+ '</div>'
						+ '<div class="timepicker-minutes" data-action="selectMinute">'
						+ '<table class="table-condensed"></table>' + '</div>' + (picker.options.useSeconds
						? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>'
						: ''));
				};

				picker.destroy = function() {
					detachDatePickerEvents();
					detachDatePickerGlobalEvents();
					picker.widget.remove();
					picker.element.removeData('DateTimePicker');
					if (picker.component) {
						picker.component.removeData('DateTimePicker');
					}
				};

				picker.show = function(e) {
					if (getPickerInput().prop('disabled')) {
						return;
					}
					if (picker.options.useCurrent) {
						if (getPickerInput().val() === '') {
							if (picker.options.minuteStepping !== 1) {
								var mDate = moment(), rInterval = picker.options.minuteStepping;
								mDate.minutes((Math.round(mDate.minutes() / rInterval) * rInterval) % 60).seconds(0);
								picker.setValue(mDate.format(picker.format));
							} else {
								picker.setValue(moment().format(picker.format));
							}
							notifyChange('', e.type);
						}
					}else{
						picker.setValue(getPickerInput().val());
					}
					// if this is a click event on the input field and picker is already open don't hide it
					if (e && e.type === 'click' && picker.isInput && picker.widget.hasClass('picker-open')) {
						return;
					}
					if (picker.widget.hasClass('picker-open')) {
						picker.widget.hide();
						picker.widget.removeClass('picker-open');
					} else {
						picker.widget.show();
						picker.widget.addClass('picker-open');
					}
					picker.height = picker.component ? picker.component.outerHeight() : picker.element.outerHeight();
					place();
					picker.element.trigger({
						type: 'dp.show',
						date: moment(picker.date)
					});
					attachDatePickerGlobalEvents();
					if (e) {
						stopEvent(e);
					}
				};

				picker.disable = function() {
					var input = getPickerInput();
					if (input.prop('disabled')) {
						return;
					}
					input.prop('disabled', true);
					detachDatePickerEvents();
				};

				picker.enable = function() {
					var input = getPickerInput();
					if (!input.prop('disabled')) {
						return;
					}
					input.prop('disabled', false);
					attachDatePickerEvents();
				};

				picker.hide = function() {
					// Ignore event if in the middle of a picker transition
					var collapse = picker.widget.find('.collapse'), i, collapseData;
					for (i = 0; i < collapse.length; i++) {
						collapseData = collapse.eq(i).data('collapse');
						if (collapseData && collapseData.transitioning) {
							return;
						}
					}
					picker.widget.hide();
					picker.widget.removeClass('picker-open');
					picker.viewMode = picker.startViewMode;
					showMode();
					picker.element.trigger({
						type: 'dp.hide',
						date: moment(picker.date)
					});
					detachDatePickerGlobalEvents();
				};

				picker.setValue = function(newDate) {
					moment.locale(picker.options.language);
					if (!newDate) {
						picker.unset = true;
						set();
					} else {
						picker.unset = false;
					}
					if (!moment.isMoment(newDate)) {
						newDate = (newDate instanceof Date) ? moment(newDate) : moment(newDate, picker.format,
							picker.options.useStrict);
					} else {
						newDate = newDate.locale(picker.options.language);
					}
					if (newDate.isValid()) {
						picker.date = newDate;
						set();
						picker.viewDate = moment({
							y: picker.date.year(),
							M: picker.date.month()
						});
						fillDate();
						fillTime();
					} else {
						notifyError(newDate);
					}
				};

				picker.getDate = function() {
					if (picker.unset) {
						return null;
					}
					return moment(picker.date);
				};

				picker.setDate = function(date) {
					var oldDate = moment(picker.date);
					if (!date) {
						picker.setValue(null);
					} else {
						picker.setValue(date);
					}
					notifyChange(oldDate, 'function');
				};

				picker.setDisabledDates = function(dates) {
					picker.options.disabledDates = indexGivenDates(dates);
					if (picker.viewDate) {
						update();
					}
				};

				picker.setEnabledDates = function(dates) {
					picker.options.enabledDates = indexGivenDates(dates);
					if (picker.viewDate) {
						update();
					}
				};

				picker.setMaxDate = function(date) {
					if (date === undefined) {
						return;
					}
					if (moment.isMoment(date) || date instanceof Date) {
						picker.options.maxDate = moment(date);
					} else {
						picker.options.maxDate = moment(date, picker.format, picker.options.useStrict);
					}
					if (picker.viewDate) {
						update();
					}
				};

				picker.setMinDate = function(date) {
					if (date === undefined) {
						return;
					}
					if (moment.isMoment(date) || date instanceof Date) {
						picker.options.minDate = moment(date);
					} else {
						picker.options.minDate = moment(date, picker.format, picker.options.useStrict);
					}
					if (picker.viewDate) {
						update();
					}
				};

				init();
			};

			$.fn.datetimepicker = function(options) {
				return this.each(function() {
					var $this = $(this), data = $this.data('DateTimePicker');
					if (!data) {
						$this.data('DateTimePicker', new DateTimePicker(this, options));
					}
				});
			};

			$.fn.datetimepicker.defaults = {
				format: false,
				pickDate: true,
				pickTime: true,
				useMinutes: true,
				useSeconds: false,
				useCurrent: true,
				calendarWeeks: false,
				minuteStepping: 1,
				minDate: moment({
					y: 1900
				}),
				maxDate: moment().add(100, 'y'),
				showToday: true,
				collapse: true,
				language: moment.locale(),
				defaultDate: '',
				disabledDates: false,
				enabledDates: false,
				icons: {},
				useStrict: false,
				direction: 'auto',
				sideBySide: false,
				daysOfWeekDisabled: [],
				widgetParent: false
			};
		}));
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock.bind(lyr3)();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				data.el.style.cursor = 'default'; // #59
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();

(function($) {
	"use strict";

	var defaultOptions = {
		tagClass: function(item) {
			return 'tag-default';
		},
		itemValue: function(item) {
			return item ? item.toString() : item;
		},
		keyExistsItem: function(item) {
			return item ? item.toString() : item;
		},
		itemText: function(item) {
			return this.itemValue(item);
		},
		freeInput: true,
		addOnBlur: true,
		maxTags: undefined,
		maxChars: undefined,
		confirmKeys: [13, 44],
		onTagExists: function(item, $tag) {
			$tag.hide().fadeIn();
		},
		onMaxTags: undefined,
		trimValue: false,
		allowDuplicates: false,
		tagMaxWidth: 200,
		tagRemoveCss: {},
		inputCss: {}
	};

	/**
	 * Constructor function
	 */
	function TagsInput(element, options) {
		this.itemsArray = [];

		this.$element = $(element);
		this.$element.hide();

		this.isSelect = (element.tagName === 'SELECT');
		this.multiple = (this.isSelect && element.hasAttribute('multiple'));
		this.objectItems = options && options.itemValue;
		this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';
		this.inputSize = Math.max(1, this.placeholderText.length);

		this.$container = $('<div class="bootstrap-tagsinput"></div>');
		this.$input = $('<input type="text" size="1" placeholder="' + this.placeholderText + '"/>').appendTo(
			this.$container);
		this.$disable = $('<div class="bootstrap-tagsinput-disabled"></div>');

		this.$element.after(this.$container);

		this.reloadWidthInput();
		this.build(options);
	}

	TagsInput.prototype = {
		constructor: TagsInput,

		/**
		 * Updateds the given item as a existing tag. Pass true to dontPushVal to prevent updating the elements val()
		 */
		update: function(item, dontPushVal) {
			var self = this, itemValue = self.options.itemValue(item), itemText = self.options.itemText(item), tagClass = item.tagClass
				|| self.options.tagClass(item), currentTag = $.grep(self.itemsArray, function(item) {
				return self.options.itemValue(item) === itemValue;
			})[0], $currentTag = $(".tag", self.$container).filter(function() {
				return $(this).data("item") === currentTag;
			}), tagMaxWidth = self.options.tagMaxWidth || 200, tagRemoveCss = self.options.tagRemoveCss || {}, $tag;

			if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags) {
				self.$element.trigger($.Event('fluig.autocomplete.maxTags', {
					item: item
				}));
				if (self.options.onMaxTags) {
					self.options.onMaxTags(item);
				}
				return;
			}

			// Ignore falsey values, except false
			if (item !== false && !item) {
				return;
			}

			// Trim value
			if (typeof item === "string" && self.options.trimValue) {
				item = $.trim(item);
			}

			// Throw an error when trying to add an object while the itemValue option was not set
			if (typeof item === "object" && !self.objectItems) {
				throw ("Can't add objects when itemValue option is not set");
			}

			// Ignore strings only containg whitespace
			if (item.toString().match(/^\s*$/)) {
				return;
			}

			// If SELECT but not multiple, remove current tag
			if (self.isSelect && !self.multiple && self.itemsArray.length > 0) {
				self.remove(self.itemsArray[0]);
			}

			if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
				var items = item.split(',');
				if (items.length > 1) {
					for (var i = 0; i < items.length; i++) {
						this.add(items[i], true);
					}

					if (!dontPushVal)
						self.pushVal();
					return;
				}
			}

			// if length greater than limit
			if (self.items().toString().length + item.length + 1 > self.options.maxInputLength) {
				return;
			}

			// raise beforeItemAdd arg
			var beforeItemUpdateEvent = $.Event('fluig.autocomplete.beforeItemUpdate', {
				item: item,
				cancel: false,
				tagClass: tagClass
			});
			self.$element.trigger(beforeItemUpdateEvent);

			if (beforeItemUpdateEvent.cancel) {
				return;
			}

			// updates the classes of the updated tag
			tagClass = beforeItemUpdateEvent.tagClass;

			// add a tag element
			if (self.options.templates && self.options.templates.tag) {
				var template = $(self.options.templates.tag + '[type="text/template"]').html();
				template = $.trim(Mustache.render(template, item));
				$tag = $('<span class="tag ' + tagClass + '" title="' + htmlEncode(itemText)
					+ '"><span class="tag-text">' + template + '</span><span data-role="remove"></span></span>');
			} else {
				$tag = $('<span class="tag ' + tagClass + '" title="' + htmlEncode(itemText)
					+ '"><span class="tag-text">' + htmlEncode(itemText)
					+ '</span><span data-role="remove"></span></span>');
			}

			$tag.find('.tag-text').css({
				'max-width': tagMaxWidth
			});

			$tag.find('[data-role="remove"]').css(tagRemoveCss);

			$tag.data('item', item);
			$currentTag.replaceWith($tag);
			$tag.after(' ');

			// add <option /> if item represents a value not present in one of the <select />'s options
			if (self.isSelect && !$('option[value="' + encodeURIComponent(itemValue) + '"]', self.$element)[0]) {
				var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
				$option.data('item', item);
				$option.attr('value', itemValue);
				self.$element.append($option);
			}

			if (!dontPushVal) {
				self.pushVal();
			}

			// Add class when reached maxTags
			if (self.options.maxTags === self.itemsArray.length
				|| self.items().toString().length === self.options.maxInputLength) {
				self.$container.addClass('bootstrap-tagsinput-max');
			}

			self.$element.trigger($.Event('fluig.autocomplete.itemUpdated', {
				item: item
			}));
			self.reloadWidthInput();
		},

		/**
		 * Adds the given item as a new tag. Pass true to dontPushVal to prevent updating the elements val()
		 */
		add: function(item, dontPushVal) {
			var self = this, itemValue = self.options.itemValue(item), keyExistsItem = self.options.keyExistsItem(item), itemText = self.options
				.itemText(item), tagClass = self.options.tagClass(item), tagMaxWidth = self.options.tagMaxWidth || 200, tagRemoveCss = self.options.tagRemoveCss
				|| {}, $tag;

			tagClass = htmlEncode(tagClass);

			if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags) {
				self.$element.trigger($.Event('fluig.autocomplete.maxTags', {
					item: item
				}));
				if (self.options.onMaxTags) {
					self.options.onMaxTags(item);
				}
				return;
			}

			// Ignore falsey values, except false
			if (item !== false && !item) {
				return;
			}

			// Trim value
			if (typeof item === "string" && self.options.trimValue) {
				item = $.trim(item);
			}

			// Throw an error when trying to add an object while the itemValue option was not set
			if (typeof item === "object" && !self.objectItems) {
				throw ("Can't add objects when itemValue option is not set");
			}

			// Ignore strings only containg whitespace
			if (item.toString().match(/^\s*$/)) {
				return;
			}

			// If SELECT but not multiple, remove current tag
			if (self.isSelect && !self.multiple && self.itemsArray.length > 0) {
				self.remove(self.itemsArray[0]);
			}

			if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
				var items = item.split(',');
				if (items.length > 1) {
					for (var i = 0; i < items.length; i++) {
						this.add(items[i], true);
					}

					if (!dontPushVal)
						self.pushVal();
					return;
				}
			}

			// Ignore items allready added
			var existing = $.grep(self.itemsArray, function(item) {
				return self.options.keyExistsItem(item) === keyExistsItem;
			})[0];

			if (existing && !self.options.allowDuplicates) {
				// Invoke onTagExists
				if (self.options.onTagExists) {
					var $existingTag = $(".tag", self.$container).filter(function() {
						return $(this).data("item") === existing;
					});
					self.options.onTagExists(item, $existingTag);
				}
				return;
			}

			// if length greater than limit
			if (self.items().toString().length + item.length + 1 > self.options.maxInputLength) {
				return;
			}

			// raise beforeItemAdd arg
			var beforeItemAddEvent = $.Event('fluig.autocomplete.beforeItemAdd', {
				item: item,
				cancel: false,
				tagClass: tagClass
			});
			self.$element.trigger(beforeItemAddEvent);

			if (beforeItemAddEvent.cancel) {
				return;
			}

			// updates the classes of the added tag
			tagClass = beforeItemAddEvent.tagClass;

			// register item in internal array and map
			self.itemsArray.push(item);

			// add a tag element
			if (self.options.templates && self.options.templates.tag) {
				var template = $(self.options.templates.tag + '[type="text/template"]').html();
				template = $.trim(Mustache.render(template, item));
				$tag = $('<span class="tag ' + tagClass + '" title="' + htmlEncode(itemText)
					+ '"><span class="tag-text">' + template + '</span><span data-role="remove"></span></span>');
			} else {
				$tag = $('<span class="tag ' + tagClass + '" title="' + htmlEncode(itemText)
					+ '"><span class="tag-text">' + htmlEncode(itemText)
					+ '</span><span data-role="remove"></span></span>');
			}

			$tag.find('.tag-text').css({
				'max-width': tagMaxWidth
			});

			$tag.find('[data-role="remove"]').css(tagRemoveCss);

			$tag.data('item', item);
			self.findInputWrapper().before($tag);
			$tag.after(' ');

			// add <option /> if item represents a value not present in one of the <select />'s options
			if (self.isSelect && !$('option[value="' + encodeURIComponent(itemValue) + '"]', self.$element)[0]) {
				var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
				$option.data('item', item);
				$option.attr('value', itemValue);
				self.$element.append($option);
			}

			if (!dontPushVal)
				self.pushVal();

			// Add class when reached maxTags
			if (self.options.maxTags === self.itemsArray.length
				|| self.items().toString().length === self.options.maxInputLength)
				self.$container.addClass('bootstrap-tagsinput-max');

			self.$element.trigger($.Event('fluig.autocomplete.itemAdded', {
				item: item
			}));
			self.reloadWidthInput();
		},

		/**
		 * Removes the given item. Pass true to dontPushVal to prevent updating the elements val()
		 */
		remove: function(item, dontPushVal) {
			var self = this;

			if (self.objectItems) {
				if (typeof item === "object")
					item = $.grep(self.itemsArray, function(other) {
						return self.options.itemValue(other) == self.options.itemValue(item);
					});
				else
					item = $.grep(self.itemsArray, function(other) {
						return self.options.itemValue(other) == item;
					});

				item = item[item.length - 1];
			}

			if (item) {
				var beforeItemRemoveEvent = $.Event('fluig.autocomplete.beforeItemRemove', {
					item: item,
					cancel: false
				});
				self.$element.trigger(beforeItemRemoveEvent);
				if (beforeItemRemoveEvent.cancel)
					return;

				$('.tag', self.$container).filter(function() {
					return $(this).data('item') === item;
				}).remove();
				$('option', self.$element).filter(function() {
					return $(this).data('item') === item;
				}).remove();
				if ($.inArray(item, self.itemsArray) !== -1)
					self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
			}

			if (!dontPushVal)
				self.pushVal();

			// Remove class when reached maxTags
			if (self.options.maxTags > self.itemsArray.length)
				self.$container.removeClass('bootstrap-tagsinput-max');

			self.$element.trigger($.Event('fluig.autocomplete.itemRemoved', {
				item: item
			}));
		},

		/**
		 * Removes all items
		 */
		removeAll: function() {
			var self = this;

			$('.tag', self.$container).remove();
			$('option', self.$element).remove();

			while (self.itemsArray.length > 0)
				self.itemsArray.pop();

			self.pushVal();
		},

		disable: function(disable) {
			var self = this;
			if (disable) {
				self.isDisabled = true;
				self.$container.addClass('disabled').append(self.$disable);
			} else {
				self.isDisabled = false;
				self.$container.removeClass('disabled').find(self.$disable).remove();
			}
		},

		/**
		 * Refreshes the tags so they match the text/value of their corresponding item.
		 */
		refresh: function() {
			var self = this;
			$('.tag', self.$container)
				.each(
					function() {
						var $tag = $(this), item = $tag.data('item'), itemValue = self.options.itemValue(item), itemText = self.options
							.itemText(item), tagClass = self.options.tagClass(item);

						// Update tag's class and inner text
						$tag.attr('class', null);
						$tag.addClass('tag ' + htmlEncode(tagClass));
						$tag.contents().filter(function() {
							return this.nodeType == 3;
						})[0].nodeValue = htmlEncode(itemText);

						if (self.isSelect) {
							var option = $('option', self.$element).filter(function() {
								return $(this).data('item') === item;
							});
							option.attr('value', itemValue);
						}
					});
		},

		/**
		 * Returns the items added as tags
		 */
		items: function() {
			return this.itemsArray;
		},

		/**
		 * Assembly value by retrieving the value of each item, and set it on the element.
		 */
		pushVal: function() {
			var self = this, val = $.map(self.items(), function(item) {
				return self.options.itemValue(item).toString();
			});

			self.$element.val(val, true).trigger('change');
		},

		/**
		 * Initializes the tags input behaviour on the element
		 */
		build: function(options) {
			var self = this;

			self.options = $.extend({}, defaultOptions, options);
			// When itemValue is set, freeInput should always be false
			if (self.objectItems)
				self.options.freeInput = false;

			makeOptionItemFunction(self.options, 'itemValue');
			makeOptionItemFunction(self.options, 'keyExistsItem');
			makeOptionItemFunction(self.options, 'itemText');
			makeOptionFunction(self.options, 'tagClass');

			self.$input.on('focus', function(event) {
				var focusevent = $.Event('fluig.autocomplete.focus');
				self.$element.trigger(focusevent);
			});

			self.$input.on('blur', function(event) {
				var blurevent = $.Event('fluig.autocomplete.blur');
				self.$element.trigger(blurevent);
			});

			// Typeahead Bootstrap version 2.3.2
			if (self.options.typeahead) {
				var typeahead = self.options.typeahead || {};

				makeOptionFunction(typeahead, 'source');

				self.$input.typeahead($.extend({}, typeahead, {
					source: function(query, process) {
						function processItems(items) {
							var texts = [];

							for (var i = 0; i < items.length; i++) {
								var text = self.options.itemText(items[i]);
								map[text] = items[i];
								texts.push(text);
							}
							process(texts);
						}

						this.map = {};
						var map = this.map, data = typeahead.source(query);

						if ($.isFunction(data.success)) {
							// support for Angular callbacks
							data.success(processItems);
						} else if ($.isFunction(data.then)) {
							// support for Angular promises
							data.then(processItems);
						} else {
							// support for functions and jquery promises
							$.when(data).then(processItems);
						}
					},
					updater: function(text) {
						self.add(this.map[text]);
					},
					matcher: function(text) {
						return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);
					},
					sorter: function(texts) {
						return texts.sort();
					},
					highlighter: function(text) {
						var regex = new RegExp('(' + this.query + ')', 'gi');
						return text.replace(regex, "<strong>$1</strong>");
					}
				}));
			}

			// typeahead.js
			if (self.options.typeaheadjs) {
				var typeaheadjs = self.options.typeaheadjs || {}, typeaheadjsoptions = self.options.typeaheadjsoptions
					|| null, typeaheadselected, typeaheadcursorchanged, typeaheadopened, typeaheadclosed, typeaheadautocompleted;

				self.$input.typeahead(typeaheadjsoptions, typeaheadjs).on('fluig.autocomplete.selected',
					$.proxy(function(event) {
						if (typeaheadjs.valueKey)
							self.add(event.item[typeaheadjs.valueKey]);
						else
							self.add(event.item);
						self.$input.typeahead('val', '');
						typeaheadselected = $.Event('fluig.autocomplete.selected', {
							item: event.item,
							dataset: event.dataset
						});
						self.$element.trigger(typeaheadselected);
					}, self)).on('fluig.autocomplete.cursorchanged', $.proxy(function(event) {
					typeaheadcursorchanged = $.Event('fluig.autocomplete.cursorchanged', {
						item: event.item,
						dataset: event.dataset
					});
					self.$element.trigger(typeaheadcursorchanged);
				}, self)).on('fluig.autocomplete.opened', $.proxy(function(event) {
					typeaheadopened = $.Event('fluig.autocomplete.opened');
					self.$element.trigger(typeaheadopened);
				}, self)).on('fluig.autocomplete.closed', $.proxy(function(event) {
					typeaheadclosed = $.Event('fluig.autocomplete.closed');
					self.$element.trigger(typeaheadclosed);
				}, self)).on('fluig.autocomplete.autocompleted', $.proxy(function(event) {
					typeaheadautocompleted = $.Event('fluig.autocomplete.autocompleted', {
						item: event.item,
						dataset: event.dataset
					});
					self.$element.trigger(typeaheadautocompleted);
				}, self));
			}

			if (self.options.addOnBlur && self.options.freeInput) {
				self.$input.on('focusout', $.proxy(function(event) {
					// HACK: only process on focusout when no typeahead opened, to
					// avoid adding the typeahead text as tag
					if ($('.typeahead, .fluig-typeahead', self.$container).length === 0) {
						self.add(self.$input.val());
						self.$input.val('');
					}
				}, self));
			}

			self.$container.on('keydown', 'input', $.proxy(function(event) {
				var $input = $(event.target), $inputWrapper = self.findInputWrapper(), $prevTag, $nextTag, $tag;

				if (self.$element.attr('disabled')) {
					self.$input.attr('disabled', 'disabled');
					return;
				}

				switch (event.which) {
					// DELETE
					case 46:
						if (doGetCaretPosition($input[0]) === 0 && !$input.val()) {
							$tag = self.findSelectedTag();
							$nextTag = self.getNextTag();
							if ($tag && $tag.length) {
								self.remove($tag.data('item'));
							}
							if ($nextTag && $nextTag.length) {
								self.addSelectedTags($nextTag);
							}
						}
						break;

					// BACKSPACE
					case 8:
						if (doGetCaretPosition($input[0]) === 0 && !$input.val()) {
							$tag = self.findSelectedTag();
							$prevTag = self.getPrevTag();
							if ($tag && $tag.length) {
								self.remove($tag.data('item'));
							}
							if ($prevTag && $prevTag.length) {
								self.addSelectedTags($prevTag);
							}
						}
						break;

					// LEFT ARROW
					case 37:
						// Try to move the input before the previous tag
						if (!$input.val().length) {
							self.selectNextTag();
						}
						break;

					// RIGHT ARROW
					case 39:
						// Try to move the input after the next tag
						if (!$input.val().length) {
							self.selectPrevTag();
						}
						break;
					default:
						// Remove class selected for tags
						self.removeSelectedTags();
				}

				// Reset internal input's size
				var textLength = $input.val().length, wordSpace = Math.ceil(textLength / 5), size = textLength
					+ wordSpace + 1;
				$input.attr('size', Math.max(this.inputSize, $input.val().length));
			}, self));

			self.$container.on('keypress', 'input', $.proxy(function(event) {
				var $input = $(event.target);

				if (self.$element.attr('disabled')) {
					self.$input.attr('disabled', 'disabled');
					return;
				}

				var text = $input.val(), maxLengthReached = self.options.maxChars
					&& text.length >= self.options.maxChars;
				if (self.options.freeInput
					&& (keyCombinationInList(event, self.options.confirmKeys) || maxLengthReached)) {
					self.add(maxLengthReached ? text.substr(0, self.options.maxChars) : text);
					$input.val('');
					event.preventDefault();
				}

				// Reset internal input's size
				var textLength = $input.val().length, wordSpace = Math.ceil(textLength / 5), size = textLength
					+ wordSpace + 1;
				$input.attr('size', Math.max(this.inputSize, $input.val().length));
			}, self));

			// Remove icon clicked
			self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {
				if (self.$element.attr('disabled')) {
					return;
				}
				self.remove($(event.target).closest('.tag').data('item'));
			}, self));

			self.$container.on('click', $.proxy(function(event) {
				if (self.isDisabled) {
					return false;
				}
				if (!self.$element.attr('disabled')) {
					self.$input.removeAttr('disabled');
				}
				if (!self.$input.is(':focus')) {
					self.$input.focus();
				}
			}, self));

			self.$disable.on('click', $.proxy(function(event) {
				event.stopPropagation();
				event.preventDefault();
			}, self));

			// Reload width input
			$(window).on('resize', self.$container, $.proxy(function(event) {
				self.reloadWidthInput();
			}, self));

			// Only add existing value as tags when using strings as tags
			if (self.options.itemValue === defaultOptions.itemValue) {
				if (self.$element[0].tagName === 'INPUT') {
					self.add(self.$element.val());
				} else {
					$('option', self.$element).each(function() {
						self.add($(this).attr('value'), true);
					});
				}
			}

			// disable component.
			if (self.options.initDisabled) {
				self.disable(true);
			}
		},

		/**
		 * Close dropdown
		 */
		close: function() {
			this.$input.typeahead('close');
		},

		/**
		 * Open dropdown
		 */
		open: function() {
			this.$input.typeahead('open');
		},

		/**
		 * Removes all tagsinput behaviour and unregsiter all event handlers
		 */
		destroy: function() {
			var self = this;

			// Unbind events
			self.$container.off('keypress', 'input');
			self.$container.off('click', '[role=remove]');

			self.$container.remove();
			self.$element.removeData('tagsinput');
			self.$element.show();
		},

		/**
		 * Sets focus on the tagsinput
		 */
		focus: function() {
			if (!this.$input.is(':focus')) {
				this.$input.focus();
			}
		},

		/**
		 * Returns the internal input element
		 */
		input: function() {
			return this.$input;
		},

		/**
		 * Returns the element which is wrapped around the internal input. This is normally the $container, but
		 * typeahead.js moves the $input element.
		 */
		findInputWrapper: function() {
			var elt = this.$input[0], container = this.$container[0];
			while (elt && elt.parentNode !== container)
				elt = elt.parentNode;

			return $(elt);
		},

		reloadWidthInput: function() {
			var $container = $(this.$container[0]), $tags = $container.find('span.tag'), containerWidth = $container
				.outerWidth(true), tagsWidget = 0, inputWidth;

			$.each($tags, function(ind, val) {
				tagsWidget += $(val).outerWidth(true);
			});

			inputWidth = (containerWidth - 12) - tagsWidget - 6;
			this.$input.get(0).style.cssText = "width: " + inputWidth + "px";
			return false;
		},

		selectNextTag: function() {
			var $prevTag = this.getPrevTag();
			if ($prevTag) {
				this.addSelectedTags($prevTag);
			}
			return false;
		},

		selectPrevTag: function() {
			var $nextTag = this.getNextTag();
			if ($nextTag) {
				this.addSelectedTags($nextTag);
			}
			return false;
		},

		findSelectedTag: function() {
			var container = this.$container[0], el;
			el = $('span.tag.selected', container);
			return el;
		},

		getPrevTag: function() {
			var container = this.$container[0], el, selectedTag = this.findSelectedTag();
			if (selectedTag.length) {
				el = selectedTag.prev('.tag').length ? selectedTag.prev('.tag') : this.removeSelectedTags();
			} else {
				el = this.getLastTag();
			}
			return el;
		},

		getNextTag: function() {
			var container = this.$container[0], el, selectedTag = this.findSelectedTag();
			if (selectedTag.length) {
				el = selectedTag.next('.tag').length ? selectedTag.next('.tag') : this.removeSelectedTags();
			} else {
				el = this.getFirstTag();
			}
			return el;
		},

		getFirstTag: function() {
			var container = this.$container[0], el;
			el = $('span.tag:first', container);
			return el;
		},

		getLastTag: function() {
			var container = this.$container[0], el;
			el = $('span.tag:last', container);
			return el;
		},

		addSelectedTags: function($tag) {
			this.removeSelectedTags();
			$tag.addClass('selected');
		},

		removeSelectedTags: function() {
			var container = this.$container[0], elt;
			$('span.tag.selected', container).removeClass('selected');
			return false;
		}
	};

	/**
	 * Register JQuery plugin
	 */
	$.fn.tagsinput = function(arg1, arg2) {
		var results = [];

		this.each(function() {
			var tagsinput = $(this).data('tagsinput');
			// Initialize a new tags input
			if (!tagsinput) {
				tagsinput = new TagsInput(this, arg1);
				$(this).data('tagsinput', tagsinput);
				results.push(tagsinput);

				if (this.tagName === 'SELECT') {
					$('option', $(this)).attr('selected', 'selected');
				}

				// Init tags from $(this).val()
				$(this).val($(this).val());
			} else if (!arg1 && !arg2) {
				// tagsinput already exists
				// no function, trying to init
				results.push(tagsinput);
			} else if (tagsinput[arg1] !== undefined) {
				// Invoke function on existing tags input
				var retVal = tagsinput[arg1](arg2);
				if (retVal !== undefined)
					results.push(retVal);
			}
		});

		if (typeof arg1 == 'string') {
			// Return the results from the invoked function calls
			return results.length > 1 ? results : results[0];
		} else {
			return results;
		}
	};

	$.fn.tagsinput.Constructor = TagsInput;

	/**
	 * Most options support both a string or number as well as a function as option value. This function makes sure that
	 * the option with the given key in the given options is wrapped in a function
	 */
	function makeOptionItemFunction(options, key) {
		if (typeof options[key] !== 'function') {
			var propertyName = options[key];
			options[key] = function(item) {
				return item[propertyName];
			};
		}
	}
	function makeOptionFunction(options, key) {
		if (typeof options[key] !== 'function') {
			var value = options[key];
			options[key] = function() {
				return value;
			};
		}
	}
	/**
	 * HtmlEncodes the given value
	 */
	var htmlEncodeContainer = $('<div />');
	function htmlEncode(value) {
		if (value) {
			return htmlEncodeContainer.text(value).html();
		} else {
			return '';
		}
	}

	/**
	 * Returns the position of the caret in the given input field
	 * http://flightschool.acylt.com/devnotes/caret-position-woes/
	 */
	function doGetCaretPosition(oField) {
		var iCaretPos = 0;
		if (document.selection) {
			if (!oField.is(':focus')) {
				oField.focus();
			}
			var oSel = document.selection.createRange();
			oSel.moveStart('character', -oField.value.length);
			iCaretPos = oSel.text.length;
		} else if (oField.selectionStart || oField.selectionStart == '0') {
			iCaretPos = oField.selectionStart;
		}
		return (iCaretPos);
	}

	/**
	 * Returns boolean indicates whether user has pressed an expected key combination.
	 * 
	 * @param object
	 *            keyPressEvent: JavaScript event object, refer
	 *            http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	 * @param object
	 *            lookupList: expected key combinations, as in: [13, {which: 188, shiftKey: true}]
	 */
	function keyCombinationInList(keyPressEvent, lookupList) {
		var found = false;
		$.each(lookupList,
			function(index, keyCombination) {
				if (typeof (keyCombination) === 'number' && keyPressEvent.which === keyCombination) {
					found = true;
					return false;
				}

				if (keyPressEvent.which === keyCombination.which) {
					var alt = !keyCombination.hasOwnProperty('altKey')
						|| keyPressEvent.altKey === keyCombination.altKey, shift = !keyCombination
						.hasOwnProperty('shiftKey')
						|| keyPressEvent.shiftKey === keyCombination.shiftKey, ctrl = !keyCombination
						.hasOwnProperty('ctrlKey')
						|| keyPressEvent.ctrlKey === keyCombination.ctrlKey;
					if (alt && shift && ctrl) {
						found = true;
						return false;
					}
				}
			});

		return found;
	}

	/**
	 * Initialize tagsinput behaviour on inputs and selects which have data-role=tagsinput
	 */
	$(function() {
		$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
	});
})(window.jQuery);

/*
 * ! typeahead.js 0.10.4 https://github.com/twitter/typeahead.js Copyright 2013-2014 Twitter, Inc. and other
 * contributors; Licensed MIT
 */
(function($) {
	var _ = function() {
		"use strict";
		return {
			isMsie: function() {
				return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent
					.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
			},
			isBlankString: function(str) {
				return !str || /^\s*$/.test(str);
			},
			escapeRegExChars: function(str) {
				return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			},
			isString: function(obj) {
				return typeof obj === "string";
			},
			isNumber: function(obj) {
				return typeof obj === "number";
			},
			isArray: $.isArray,
			isFunction: $.isFunction,
			isObject: $.isPlainObject,
			isUndefined: function(obj) {
				return typeof obj === "undefined";
			},
			toStr: function toStr(s) {
				return _.isUndefined(s) || s === null ? "" : s + "";
			},
			bind: $.proxy,
			each: function(collection, cb) {
				$.each(collection, reverseArgs);

				function reverseArgs(index, value) {
					return cb(value, index);
				}
			},
			map: $.map,
			filter: $.grep,
			every: function(obj, test) {
				var result = true;
				if (!obj) {
					return result;
				}
				$.each(obj, function(key, val) {
					if (!(result = test.call(null, val, key, obj))) {
						return false;
					}
				});
				return !!result;
			},
			some: function(obj, test) {
				var result = false;
				if (!obj) {
					return result;
				}
				$.each(obj, function(key, val) {
					if (result = test.call(null, val, key, obj)) {
						return false;
					}
				});
				return !!result;
			},
			mixin: $.extend,
			getUniqueId: function() {
				var counter = 0;
				return function() {
					return counter++;
				};
			}(),
			templatify: function templatify(obj) {
				return $.isFunction(obj) ? obj : template;

				function template() {
					return String(obj);
				}
			},
			defer: function(fn) {
				setTimeout(fn, 0);
			},
			debounce: function(func, wait, immediate) {
				var timeout, result;
				return function() {
					var context = this, args = arguments, later, callNow;
					later = function() {
						timeout = null;
						if (!immediate) {
							result = func.apply(context, args);
						}
					};
					callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) {
						result = func.apply(context, args);
					}
					return result;
				};
			},
			throttle: function(func, wait) {
				var context, args, timeout, result, previous, later;
				previous = 0;
				later = function() {
					previous = new Date();
					timeout = null;
					result = func.apply(context, args);
				};
				return function() {
					var now = new Date(), remaining = wait - (now - previous);
					context = this;
					args = arguments;
					if (remaining <= 0) {
						clearTimeout(timeout);
						timeout = null;
						previous = now;
						result = func.apply(context, args);
					} else if (!timeout) {
						timeout = setTimeout(later, remaining);
					}
					return result;
				};
			},
			noop: function() {
			}
		};
	}();
	var VERSION = "0.10.4";
	var tokenizers = function() {
		"use strict";
		return {
			nonword: nonword,
			whitespace: whitespace,
			obj: {
				nonword: getObjTokenizer(nonword),
				whitespace: getObjTokenizer(whitespace)
			}
		};

		function whitespace(str) {
			str = _.toStr(str);
			return str ? str.split(/\s+/) : [];
		}

		function nonword(str) {
			str = _.toStr(str);
			return str ? str.split(/\W+/) : [];
		}

		function getObjTokenizer(tokenizer) {
			return function setKey() {
				var args = [].slice.call(arguments, 0);
				return function tokenize(o) {
					var tokens = [];
					_.each(args, function(k) {
						tokens = tokens.concat(tokenizer(_.toStr(o[k])));
					});
					return tokens;
				};
			};
		}
	}();
	var LruCache = function() {
		"use strict";

		function LruCache(maxSize) {
			this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
			this.reset();
			if (this.maxSize <= 0) {
				this.set = this.get = $.noop;
			}
		}
		_.mixin(LruCache.prototype, {
			set: function set(key, val) {
				var tailItem = this.list.tail, node;
				if (this.size >= this.maxSize) {
					this.list.remove(tailItem);
					delete this.hash[tailItem.key];
				}
				if (node = this.hash[key]) {
					node.val = val;
					this.list.moveToFront(node);
				} else {
					node = new Node(key, val);
					this.list.add(node);
					this.hash[key] = node;
					this.size++;
				}
			},
			get: function get(key) {
				var node = this.hash[key];
				if (node) {
					this.list.moveToFront(node);
					return node.val;
				}
			},
			reset: function reset() {
				this.size = 0;
				this.hash = {};
				this.list = new List();
			}
		});

		function List() {
			this.head = this.tail = null;
		}
		_.mixin(List.prototype, {
			add: function add(node) {
				if (this.head) {
					node.next = this.head;
					this.head.prev = node;
				}
				this.head = node;
				this.tail = this.tail || node;
			},
			remove: function remove(node) {
				node.prev ? node.prev.next = node.next : this.head = node.next;
				node.next ? node.next.prev = node.prev : this.tail = node.prev;
			},
			moveToFront: function(node) {
				this.remove(node);
				this.add(node);
			}
		});

		function Node(key, val) {
			this.key = key;
			this.val = val;
			this.prev = this.next = null;
		}
		return LruCache;
	}();
	var PersistentStorage = function() {
		"use strict";
		var ls, methods;
		try {
			ls = window.localStorage;
			ls.setItem("~~~", "!");
			ls.removeItem("~~~");
		} catch (err) {
			ls = null;
		}

		function PersistentStorage(namespace) {
			this.prefix = ["__", namespace, "__"].join("");
			this.ttlKey = "__ttl__";
			this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
		}
		if (ls && window.JSON) {
			methods = {
				_prefix: function(key) {
					return this.prefix + key;
				},
				_ttlKey: function(key) {
					return this._prefix(key) + this.ttlKey;
				},
				get: function(key) {
					if (this.isExpired(key)) {
						this.remove(key);
					}
					return decode(ls.getItem(this._prefix(key)));
				},
				set: function(key, val, ttl) {
					if (_.isNumber(ttl)) {
						ls.setItem(this._ttlKey(key), encode(now() + ttl));
					} else {
						ls.removeItem(this._ttlKey(key));
					}
					return ls.setItem(this._prefix(key), encode(val));
				},
				remove: function(key) {
					ls.removeItem(this._ttlKey(key));
					ls.removeItem(this._prefix(key));
					return this;
				},
				clear: function() {
					var i, key, keys = [], len = ls.length;
					for (i = 0; i < len; i++) {
						if ((key = ls.key(i)).match(this.keyMatcher)) {
							keys.push(key.replace(this.keyMatcher, ""));
						}
					}
					for (i = keys.length; i--;) {
						this.remove(keys[i]);
					}
					return this;
				},
				isExpired: function(key) {
					var ttl = decode(ls.getItem(this._ttlKey(key)));
					return _.isNumber(ttl) && now() > ttl ? true : false;
				}
			};
		} else {
			methods = {
				get: _.noop,
				set: _.noop,
				remove: _.noop,
				clear: _.noop,
				isExpired: _.noop
			};
		}
		_.mixin(PersistentStorage.prototype, methods);
		return PersistentStorage;

		function now() {
			return new Date().getTime();
		}

		function encode(val) {
			return JSON.stringify(_.isUndefined(val) ? null : val);
		}

		function decode(val) {
			return JSON.parse(val);
		}
	}();
	var Transport = function() {
		"use strict";
		var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);

		function Transport(o) {
			o = o || {};
			this.cancelled = false;
			this.lastUrl = null;
			this._send = o.transport ? callbackToDeferred(o.transport) : $.ajax;
			this._get = o.rateLimiter ? o.rateLimiter(this._get) : this._get;
			this._cache = o.cache === false ? new LruCache(0) : sharedCache;
		}
		Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
			maxPendingRequests = num;
		};
		Transport.resetCache = function resetCache() {
			sharedCache.reset();
		};
		_.mixin(Transport.prototype, {
			_get: function(url, o, cb) {
				var that = this, jqXhr;
				if (this.cancelled || url !== this.lastUrl) {
					return;
				}
				if (jqXhr = pendingRequests[url]) {
					jqXhr.done(done).fail(fail);
				} else if (pendingRequestsCount < maxPendingRequests) {
					pendingRequestsCount++;
					pendingRequests[url] = this._send(url, o).done(done).fail(fail).always(always);
				} else {
					this.onDeckRequestArgs = [].slice.call(arguments, 0);
				}

				function done(resp) {
					cb && cb(null, resp);
					that._cache.set(url, resp);
				}

				function fail() {
					cb && cb(true);
				}

				function always() {
					pendingRequestsCount--;
					delete pendingRequests[url];
					if (that.onDeckRequestArgs) {
						that._get.apply(that, that.onDeckRequestArgs);
						that.onDeckRequestArgs = null;
					}
				}
			},
			get: function(url, o, cb) {
				var resp;
				if (_.isFunction(o)) {
					cb = o;
					o = {};
				}
				this.cancelled = false;
				this.lastUrl = url;
				if (resp = this._cache.get(url)) {
					_.defer(function() {
						cb && cb(null, resp);
					});
				} else {
					this._get(url, o, cb);
				}
				return !!resp;
			},
			cancel: function() {
				this.cancelled = true;
			}
		});
		return Transport;

		function callbackToDeferred(fn) {
			return function customSendWrapper(url, o) {
				var deferred = $.Deferred();
				fn(url, o, onSuccess, onError);
				return deferred;

				function onSuccess(resp) {
					_.defer(function() {
						deferred.resolve(resp);
					});
				}

				function onError(err) {
					_.defer(function() {
						deferred.reject(err);
					});
				}
			};
		}
	}();
	var SearchIndex = function() {
		"use strict";

		function SearchIndex(o) {
			o = o || {};
			if (!o.datumTokenizer || !o.queryTokenizer) {
				$.error("datumTokenizer and queryTokenizer are both required");
			}
			this.datumTokenizer = o.datumTokenizer;
			this.queryTokenizer = o.queryTokenizer;
			this.reset();
		}
		_.mixin(SearchIndex.prototype, {
			bootstrap: function bootstrap(o) {
				this.datums = o.datums;
				this.trie = o.trie;
			},
			add: function(data) {
				var that = this;
				data = _.isArray(data) ? data : [data];
				_.each(data, function(datum) {
					var id, tokens;
					id = that.datums.push(datum) - 1;
					tokens = normalizeTokens(that.datumTokenizer(datum));
					_.each(tokens, function(token) {
						var node, chars, ch;
						node = that.trie;
						chars = token.split("");
						while (ch = chars.shift()) {
							node = node.children[ch] || (node.children[ch] = newNode());
							node.ids.push(id);
						}
					});
				});
			},
			get: function get(query) {
				var that = this, tokens, matches;
				tokens = normalizeTokens(this.queryTokenizer(query));
				_.each(tokens, function(token) {
					var node, chars, ch, ids;
					if (matches && matches.length === 0) {
						return false;
					}
					node = that.trie;
					chars = token.split("");
					while (node && (ch = chars.shift())) {
						node = node.children[ch];
					}
					if (node && chars.length === 0) {
						ids = node.ids.slice(0);
						matches = matches ? getIntersection(matches, ids) : ids;
					} else {
						matches = [];
						return false;
					}
				});
				return matches ? _.map(unique(matches), function(id) {
					return that.datums[id];
				}) : [];
			},
			reset: function reset() {
				this.datums = [];
				this.trie = newNode();
			},
			serialize: function serialize() {
				return {
					datums: this.datums,
					trie: this.trie
				};
			}
		});
		return SearchIndex;

		function normalizeTokens(tokens) {
			tokens = _.filter(tokens, function(token) {
				return !!token;
			});
			tokens = _.map(tokens, function(token) {
				return token.toLowerCase();
			});
			return tokens;
		}

		function newNode() {
			return {
				ids: [],
				children: {}
			};
		}

		function unique(array) {
			var seen = {}, uniques = [];
			for (var i = 0, len = array.length; i < len; i++) {
				if (!seen[array[i]]) {
					seen[array[i]] = true;
					uniques.push(array[i]);
				}
			}
			return uniques;
		}

		function getIntersection(arrayA, arrayB) {
			var ai = 0, bi = 0, intersection = [];
			arrayA = arrayA.sort(compare);
			arrayB = arrayB.sort(compare);
			var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
			while (ai < lenArrayA && bi < lenArrayB) {
				if (arrayA[ai] < arrayB[bi]) {
					ai++;
				} else if (arrayA[ai] > arrayB[bi]) {
					bi++;
				} else {
					intersection.push(arrayA[ai]);
					ai++;
					bi++;
				}
			}
			return intersection;

			function compare(a, b) {
				return a - b;
			}
		}
	}();
	var oParser = function() {
		"use strict";
		return {
			local: getLocal,
			prefetch: getPrefetch,
			remote: getRemote
		};

		function getLocal(o) {
			return o.local || null;
		}

		function getPrefetch(o) {
			var prefetch, defaults;
			defaults = {
				url: null,
				thumbprint: "",
				ttl: 24 * 60 * 60 * 1e3,
				filter: null,
				ajax: {}
			};
			if (prefetch = o.prefetch || null) {
				prefetch = _.isString(prefetch) ? {
					url: prefetch
				} : prefetch;
				prefetch = _.mixin(defaults, prefetch);
				prefetch.thumbprint = VERSION + prefetch.thumbprint;
				prefetch.ajax.type = prefetch.ajax.type || "GET";
				prefetch.ajax.dataType = prefetch.ajax.dataType || "json";
				!prefetch.url && $.error("prefetch requires url to be set");
			}
			return prefetch;
		}

		function getRemote(o) {
			var remote, defaults;
			defaults = {
				url: null,
				cache: true,
				wildcard: "%QUERY",
				replace: null,
				rateLimitBy: "debounce",
				rateLimitWait: 300,
				send: null,
				filter: null,
				ajax: {}
			};
			if (remote = o.remote || null) {
				remote = _.isString(remote) ? {
					url: remote
				} : remote;
				remote = _.mixin(defaults, remote);
				remote.rateLimiter = /^throttle$/i.test(remote.rateLimitBy) ? byThrottle(remote.rateLimitWait)
					: byDebounce(remote.rateLimitWait);
				remote.ajax.type = remote.ajax.type || "GET";
				remote.ajax.dataType = remote.ajax.dataType || "json";
				delete remote.rateLimitBy;
				delete remote.rateLimitWait;
				!remote.url && $.error("remote requires url to be set");
			}
			return remote;

			function byDebounce(wait) {
				return function(fn) {
					return _.debounce(fn, wait);
				};
			}

			function byThrottle(wait) {
				return function(fn) {
					return _.throttle(fn, wait);
				};
			}
		}
	}();
	(function(root) {
		"use strict";
		var old, keys;
		old = root.Bloodhound;
		keys = {
			data: "data",
			protocol: "protocol",
			thumbprint: "thumbprint"
		};
		root.Bloodhound = Bloodhound;

		function Bloodhound(o) {
			if (!o || !o.local && !o.prefetch && !o.remote) {
				$.error("one of local, prefetch, or remote is required");
			}
			this.limit = o.limit || 5;
			this.sorter = getSorter(o.sorter);
			this.dupDetector = o.dupDetector || ignoreDuplicates;
			this.local = oParser.local(o);
			this.prefetch = oParser.prefetch(o);
			this.remote = oParser.remote(o);
			this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;
			this.index = new SearchIndex({
				datumTokenizer: o.datumTokenizer,
				queryTokenizer: o.queryTokenizer
			});
			this.storage = this.cacheKey ? new PersistentStorage(this.cacheKey) : null;
		}
		Bloodhound.noConflict = function noConflict() {
			root.Bloodhound = old;
			return Bloodhound;
		};
		Bloodhound.tokenizers = tokenizers;
		_.mixin(Bloodhound.prototype, {
			_loadPrefetch: function loadPrefetch(o) {
				var that = this, serialized, deferred;
				if (serialized = this._readFromStorage(o.thumbprint)) {
					this.index.bootstrap(serialized);
					deferred = $.Deferred().resolve();
				} else {
					deferred = $.ajax(o.url, o.ajax).done(handlePrefetchResponse);
				}
				return deferred;

				function handlePrefetchResponse(resp) {
					that.clear();
					that.add(o.filter ? o.filter(resp) : resp);
					that._saveToStorage(that.index.serialize(), o.thumbprint, o.ttl);
				}
			},
			_getFromRemote: function getFromRemote(query, cb) {
				var that = this, url, uriEncodedQuery;
				if (!this.transport) {
					return;
				}
				query = query || "";
				uriEncodedQuery = encodeURIComponent(query);
				url = this.remote.replace ? this.remote.replace(this.remote.url, query) : this.remote.url.replace(
					this.remote.wildcard, uriEncodedQuery);
				return this.transport.get(url, this.remote.ajax, handleRemoteResponse);

				function handleRemoteResponse(err, resp) {
					err ? cb([]) : cb(that.remote.filter ? that.remote.filter(resp) : resp);
				}
			},
			_cancelLastRemoteRequest: function cancelLastRemoteRequest() {
				this.transport && this.transport.cancel();
			},
			_saveToStorage: function saveToStorage(data, thumbprint, ttl) {
				if (this.storage) {
					this.storage.set(keys.data, data, ttl);
					this.storage.set(keys.protocol, location.protocol, ttl);
					this.storage.set(keys.thumbprint, thumbprint, ttl);
				}
			},
			_readFromStorage: function readFromStorage(thumbprint) {
				var stored = {}, isExpired;
				if (this.storage) {
					stored.data = this.storage.get(keys.data);
					stored.protocol = this.storage.get(keys.protocol);
					stored.thumbprint = this.storage.get(keys.thumbprint);
				}
				isExpired = stored.thumbprint !== thumbprint || stored.protocol !== location.protocol;
				return stored.data && !isExpired ? stored.data : null;
			},
			_initialize: function initialize() {
				var that = this, local = this.local, deferred;
				deferred = this.prefetch ? this._loadPrefetch(this.prefetch) : $.Deferred().resolve();
				local && deferred.done(addLocalToIndex);
				this.transport = this.remote ? new Transport(this.remote) : null;
				return this.initPromise = deferred.promise();

				function addLocalToIndex() {
					that.add(_.isFunction(local) ? local() : local);
				}
			},
			initialize: function initialize(force) {
				return !this.initPromise || force ? this._initialize() : this.initPromise;
			},
			add: function add(data) {
				this.index.add(data);
			},
			get: function get(query, cb) {
				var that = this, matches = [], cacheHit = false;
				matches = this.index.get(query);
				matches = this.sorter(matches).slice(0, this.limit);
				matches.length < this.limit ? cacheHit = this._getFromRemote(query, returnRemoteMatches) : this
					._cancelLastRemoteRequest();
				if (!cacheHit) {
					(matches.length > 0 || !this.transport) && cb && cb(matches);
				}

				function returnRemoteMatches(remoteMatches) {
					var matchesWithBackfill = matches.slice(0);
					_.each(remoteMatches, function(remoteMatch) {
						var isDuplicate;
						isDuplicate = _.some(matchesWithBackfill, function(match) {
							return that.dupDetector(remoteMatch, match);
						});
						!isDuplicate && matchesWithBackfill.push(remoteMatch);
						return matchesWithBackfill.length < that.limit;
					});
					cb && cb(that.sorter(matchesWithBackfill));
				}
			},
			clear: function clear() {
				this.index.reset();
			},
			clearPrefetchCache: function clearPrefetchCache() {
				this.storage && this.storage.clear();
			},
			clearRemoteCache: function clearRemoteCache() {
				this.transport && Transport.resetCache();
			},
			ttAdapter: function ttAdapter() {
				return _.bind(this.get, this);
			}
		});
		return Bloodhound;

		function getSorter(sortFn) {
			return _.isFunction(sortFn) ? sort : noSort;

			function sort(array) {
				return array.sort(sortFn);
			}

			function noSort(array) {
				return array;
			}
		}

		function ignoreDuplicates() {
			return false;
		}
	})(this);
	var html = function() {
		return {
			wrapper: '<span class="fluig-typeahead"></span>',
			dropdown: '<span class="tt-dropdown-menu" data-tt-dropdown-menu></span>',
			dataset: '<div class="tt-dataset-%CLASS%"></div>',
			suggestions: '<ul class="tt-suggestions list-unstyled"></ul>',
			suggestion: '<li class="tt-suggestion ellipsis"></li>'
		};
	}();
	var css = function() {
		"use strict";
		var css = {
			wrapper: {
				position: "relative",
				display: "inline-block"
			},
			hint: {
				position: "absolute",
				top: "0",
				left: "0",
				borderColor: "transparent",
				boxShadow: "none",
				opacity: "1"
			},
			input: {
				position: "relative",
				verticalAlign: "top",
				backgroundColor: "transparent"
			},
			inputWithNoHint: {
				position: "relative",
				verticalAlign: "top"
			},
			dropdown: {
				position: "absolute",
				top: "100%",
				left: "0",
				zIndex: "100",
				display: "none"
			},
			suggestions: {
				display: "block"
			},
			suggestion: {
				whiteSpace: "nowrap",
				cursor: "pointer"
			},
			suggestionChild: {
				whiteSpace: "normal"
			},
			ltr: {
				left: "0",
				right: "auto"
			},
			rtl: {
				left: "auto",
				right: " 0"
			}
		};
		if (_.isMsie()) {
			_.mixin(css.input, {
				backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
			});
		}
		if (_.isMsie() && _.isMsie() <= 7) {
			_.mixin(css.input, {
				marginTop: "-1px"
			});
		}
		return css;
	}();
	var EventBus = function() {
		"use strict";
		var namespace = "fluig.autocomplete.";

		function EventBus(o) {
			if (!o || !o.el) {
				$.error("EventBus initialized without el");
			}
			this.$el = $(o.el);
		}
		_.mixin(EventBus.prototype, {
			trigger: function(type) {
				var args = [].slice.call(arguments, 1), eventType;
				args = args.length ? {
					item: args[0],
					dataset: args[1]
				} : null;
				eventType = $.Event(namespace + type, args);
				this.$el.trigger(eventType);
			}
		});
		return EventBus;
	}();
	var EventEmitter = function() {
		"use strict";
		var splitter = /\s+/, nextTick = getNextTick();
		return {
			onSync: onSync,
			onAsync: onAsync,
			off: off,
			trigger: trigger
		};

		function on(method, types, cb, context) {
			var type;
			if (!cb) {
				return this;
			}
			types = types.split(splitter);
			cb = context ? bindContext(cb, context) : cb;
			this._callbacks = this._callbacks || {};
			while (type = types.shift()) {
				this._callbacks[type] = this._callbacks[type] || {
					sync: [],
					async: []
				};
				this._callbacks[type][method].push(cb);
			}
			return this;
		}

		function onAsync(types, cb, context) {
			return on.call(this, "async", types, cb, context);
		}

		function onSync(types, cb, context) {
			return on.call(this, "sync", types, cb, context);
		}

		function off(types) {
			var type;
			if (!this._callbacks) {
				return this;
			}
			types = types.split(splitter);
			while (type = types.shift()) {
				delete this._callbacks[type];
			}
			return this;
		}

		function trigger(types) {
			var type, callbacks, args, syncFlush, asyncFlush;
			if (!this._callbacks) {
				return this;
			}
			types = types.split(splitter);
			args = [].slice.call(arguments, 1);
			while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
				syncFlush = getFlush(callbacks.sync, this, [type].concat(args));
				asyncFlush = getFlush(callbacks.async, this, [type].concat(args));
				syncFlush() && nextTick(asyncFlush);
			}
			return this;
		}

		function getFlush(callbacks, context, args) {
			return flush;

			function flush() {
				var cancelled;
				for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
					cancelled = callbacks[i].apply(context, args) === false;
				}
				return !cancelled;
			}
		}

		function getNextTick() {
			var nextTickFn;
			if (window.setImmediate) {
				nextTickFn = function nextTickSetImmediate(fn) {
					setImmediate(function() {
						fn();
					});
				};
			} else {
				nextTickFn = function nextTickSetTimeout(fn) {
					setTimeout(function() {
						fn();
					}, 0);
				};
			}
			return nextTickFn;
		}

		function bindContext(fn, context) {
			return fn.bind ? fn.bind(context) : function() {
				fn.apply(context, [].slice.call(arguments, 0));
			};
		}
	}();
	var highlight = function(doc) {
		"use strict";
		var defaults = {
			node: null,
			pattern: null,
			tagName: "strong",
			className: null,
			wordsOnly: false,
			caseSensitive: false
		};
		return function hightlight(o) {
			var regex;
			o = _.mixin({}, defaults, o);
			if (!o.node || !o.pattern) {
				return;
			}
			o.pattern = _.isArray(o.pattern) ? o.pattern : [o.pattern];
			regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
			traverse(o.node, hightlightTextNode);

			function hightlightTextNode(textNode) {
				var match, patternNode, wrapperNode;
				if (match = regex.exec(textNode.data)) {
					wrapperNode = doc.createElement(o.tagName);
					o.className && (wrapperNode.className = o.className);
					patternNode = textNode.splitText(match.index);
					patternNode.splitText(match[0].length);
					wrapperNode.appendChild(patternNode.cloneNode(true));
					textNode.parentNode.replaceChild(wrapperNode, patternNode);
				}
				return !!match;
			}

			function traverse(el, hightlightTextNode) {
				var childNode, TEXT_NODE_TYPE = 3;
				for (var i = 0; i < el.childNodes.length; i++) {
					childNode = el.childNodes[i];
					if (childNode.nodeType === TEXT_NODE_TYPE) {
						i += hightlightTextNode(childNode) ? 1 : 0;
					} else {
						traverse(childNode, hightlightTextNode);
					}
				}
			}
		};

		function getRegex(patterns, caseSensitive, wordsOnly) {
			var escapedPatterns = [], regexStr;
			for (var i = 0, len = patterns.length; i < len; i++) {
				escapedPatterns.push(_.escapeRegExChars(patterns[i]));
			}
			regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
			return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
		}
	}(window.document);
	var Input = function() {
		"use strict";
		var specialKeyCodeMap;
		specialKeyCodeMap = {
			9: "tab",
			27: "esc",
			37: "left",
			39: "right",
			13: "enter",
			38: "up",
			40: "down"
		};

		function Input(o) {
			var that = this, onBlur, onFocus, onKeydown, onInput;
			o = o || {};
			if (!o.input) {
				$.error("input is missing");
			}
			onBlur = _.bind(this._onBlur, this);
			onFocus = _.bind(this._onFocus, this);
			onKeydown = _.bind(this._onKeydown, this);
			onInput = _.bind(this._onInput, this);
			this.$hint = $(o.hint);
			this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
			if (this.$hint.length === 0) {
				this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
			}
			if (!_.isMsie()) {
				this.$input.on("input.tt", onInput);
			} else {
				this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
					if (specialKeyCodeMap[$e.which || $e.keyCode]) {
						return;
					}
					_.defer(_.bind(that._onInput, that, $e));
				});
			}
			this.query = this.$input.val();
			this.$overflowHelper = buildOverflowHelper(this.$input);
		}
		Input.normalizeQuery = function(str) {
			return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
		};
		_.mixin(Input.prototype, EventEmitter, {
			_onBlur: function onBlur() {
				this.resetInputValue();
				this.trigger("blurred");
			},
			_onFocus: function onFocus() {
				this.trigger("focused");
			},
			_onKeydown: function onKeydown($e) {
				var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
				this._managePreventDefault(keyName, $e);
				if (keyName && this._shouldTrigger(keyName, $e)) {
					this.trigger(keyName + "Keyed", $e);
				}
			},
			_onInput: function onInput() {
				this._checkInputValue();
			},
			_managePreventDefault: function managePreventDefault(keyName, $e) {
				var preventDefault, hintValue, inputValue;
				switch (keyName) {
					case "tab":
						hintValue = this.getHint();
						inputValue = this.getInputValue();
						preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
						break;

					case "up":
					case "down":
						preventDefault = !withModifier($e);
						break;

					default:
						preventDefault = false;
				}
				preventDefault && $e.preventDefault();
			},
			_shouldTrigger: function shouldTrigger(keyName, $e) {
				var trigger;
				switch (keyName) {
					case "tab":
						trigger = !withModifier($e);
						break;

					default:
						trigger = true;
				}
				return trigger;
			},
			_checkInputValue: function checkInputValue() {
				var inputValue, areEquivalent, hasDifferentWhitespace;
				inputValue = this.getInputValue();
				areEquivalent = areQueriesEquivalent(inputValue, this.query);
				hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
				this.query = inputValue;
				if (!areEquivalent) {
					this.trigger("queryChanged", this.query);
				} else if (hasDifferentWhitespace) {
					this.trigger("whitespaceChanged", this.query);
				}
			},
			focus: function focus() {
				this.$input.focus();
			},
			blur: function blur() {
				this.$input.blur();
			},
			getQuery: function getQuery() {
				return this.query;
			},
			setQuery: function setQuery(query) {
				this.query = query;
			},
			getInputValue: function getInputValue() {
				return this.$input.val();
			},
			setInputValue: function setInputValue(value, silent) {
				this.$input.val(value);
				silent ? this.clearHint() : this._checkInputValue();
			},
			resetInputValue: function resetInputValue() {
				this.setInputValue(this.query, true);
			},
			getHint: function getHint() {
				return this.$hint.val();
			},
			setHint: function setHint(value) {
				this.$hint.val(value);
			},
			clearHint: function clearHint() {
				this.setHint("");
			},
			clearHintIfInvalid: function clearHintIfInvalid() {
				var val, hint, valIsPrefixOfHint, isValid;
				val = this.getInputValue();
				hint = this.getHint();
				valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
				isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
				!isValid && this.clearHint();
			},
			getLanguageDirection: function getLanguageDirection() {
				return (this.$input.css("direction") || "ltr").toLowerCase();
			},
			hasOverflow: function hasOverflow() {
				var constraint = this.$input.width() - 2;
				this.$overflowHelper.text(this.getInputValue());
				return this.$overflowHelper.width() >= constraint;
			},
			isCursorAtEnd: function() {
				var valueLength, selectionStart, range;
				valueLength = this.$input.val().length;
				selectionStart = this.$input[0].selectionStart;
				if (_.isNumber(selectionStart)) {
					return selectionStart === valueLength;
				} else if (document.selection) {
					range = document.selection.createRange();
					range.moveStart("character", -valueLength);
					return valueLength === range.text.length;
				}
				return true;
			},
			destroy: function destroy() {
				this.$hint.off(".tt");
				this.$input.off(".tt");
				this.$hint = this.$input = this.$overflowHelper = null;
			}
		});
		return Input;

		function buildOverflowHelper($input) {
			return $('<pre aria-hidden="true"></pre>').css({
				position: "absolute",
				visibility: "hidden",
				whiteSpace: "pre",
				fontFamily: $input.css("font-family"),
				fontSize: $input.css("font-size"),
				fontStyle: $input.css("font-style"),
				fontVariant: $input.css("font-variant"),
				fontWeight: $input.css("font-weight"),
				wordSpacing: $input.css("word-spacing"),
				letterSpacing: $input.css("letter-spacing"),
				textIndent: $input.css("text-indent"),
				textRendering: $input.css("text-rendering"),
				textTransform: $input.css("text-transform")
			}).insertAfter($input);
		}

		function areQueriesEquivalent(a, b) {
			return Input.normalizeQuery(a) === Input.normalizeQuery(b);
		}

		function withModifier($e) {
			return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
		}
	}();
	var Dataset = function() {
		"use strict";
		var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";

		function Dataset(o) {
			o = o || {};
			o.templates = o.templates || {};
			if (!o.source) {
				$.error("missing source");
			}
			if (o.name && !isValidName(o.name)) {
				$.error("invalid dataset name: " + o.name);
			}
			this.query = null;
			this.highlight = !!o.highlight;
			this.name = o.name || _.getUniqueId();
			this.source = o.source;
			this.displayFn = getDisplayFn(o.display || o.displayKey);
			this.templates = getTemplates(o.templates, this.displayFn);
			this.$el = $(html.dataset.replace("%CLASS%", this.name));
		}
		Dataset.extractDatasetName = function extractDatasetName(el) {
			return $(el).data(datasetKey);
		};
		Dataset.extractValue = function extractDatum(el) {
			return $(el).data(valueKey);
		};
		Dataset.extractDatum = function extractDatum(el) {
			return $(el).data(datumKey);
		};
		_.mixin(Dataset.prototype, EventEmitter, {
			_render: function render(query, suggestions, isTipMessage) {
				if (!this.$el) {
					return;
				}
				var that = this, hasSuggestions;
				this.$el.empty();
				hasSuggestions = suggestions && suggestions.length;

				if (!hasSuggestions && this.templates.empty) {
					if (isTipMessage) {
						this.$el.html(getTipMessage()).prepend(that.templates.header ? getHeaderHtml() : null).append(
							that.templates.footer ? getFooterHtml() : null);
					} else {
						this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(
							that.templates.footer ? getFooterHtml() : null);
					}
				} else if (hasSuggestions) {
					this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(
						that.templates.footer ? getFooterHtml() : null);

					// adiciona o primeiro item como selecionado.
					this.$el.find('.tt-suggestion:first').addClass("tt-cursor");
				}
				this.trigger("rendered");

				function getEmptyHtml() {
					return that.templates.empty;
				}

				function getTipMessage() {
					return that.templates.tipMessage;
				}

				function getSuggestionsHtml() {
					var $suggestions, nodes;
					$suggestions = $(html.suggestions).css(css.suggestions);
					nodes = _.map(suggestions, getSuggestionNode);
					$suggestions.append.apply($suggestions, nodes);
					that.highlight && highlight({
						className: "tt-highlight",
						node: $suggestions[0],
						pattern: query
					});
					return $suggestions;

					function getSuggestionNode(suggestion) {
						var $el;
						$el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey,
							that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
						$el.children().each(function() {
							$(this).css(css.suggestionChild);
						});
						return $el;
					}
				}

				function getHeaderHtml() {
					return that.templates.header({
						query: query,
						isEmpty: !hasSuggestions
					});
				}

				function getFooterHtml() {
					return that.templates.footer({
						query: query,
						isEmpty: !hasSuggestions
					});
				}
			},
			getRoot: function getRoot() {
				return this.$el;
			},
			update: function update(query) {
				var that = this;
				this.query = query;
				this.canceled = false;
				this.source(query, render);

				function render(suggestions) {
					if (!that.canceled && query === that.query) {
						that._render(query, suggestions);
					}
				}
			},
			cancel: function cancel() {
				this.canceled = true;
			},
			clear: function clear() {
				this.cancel();
				this.$el.empty();
				this.trigger("rendered");
			},
			isEmpty: function isEmpty() {
				return this.$el.is(":empty");
			},
			destroy: function destroy() {
				this.$el = null;
			}
		});
		return Dataset;

		function getDisplayFn(display) {
			display = display || "value";
			return _.isFunction(display) ? display : displayFn;

			function displayFn(obj) {
				return obj[display];
			}
		}

		function getTemplates(templates, displayFn) {
			return {
				header: templates.header && _.templatify(templates.header),
				footer: templates.footer && _.templatify(templates.footer),
				suggestion: suggestionTemplate,
				tipMessage: tipMessageTemplate,
				empty: templates.empty || emptyMessageTemplate
			};

			function suggestionTemplate(context) {
				var template;

				if (templates.suggestion) {
					template = $(templates.suggestion + '[type="text/template"]').html();
					template = $.trim(Mustache.render(template, context));
				} else {
					template = '' + displayFn(context) + '';
				}

				return template;
			}

			function tipMessageTemplate(context) {
				var template;
				if (templates.tipMessage) {
					template = $(templates.tipMessage + '[type="text/template"]').html();
					template = $.trim(Mustache.render(template, context));
				} else {
					var locale = window.WCMAPI ? WCMAPI.getLocale() : 'pt_BR';
					var message = {
						'pt_BR': 'Comece a digitar para iniciar a pesquisa',
						'en_US': 'Start typing to begin searching',
						'es': 'Empieza a escribir para comenzar la b\u00FAsqueda'
					}[locale];
					template = '<ul class="tt-suggestions list-unstyled"><li class="tip-message ellipsis">' + message
						+ '</li></ul>';
				}
				return template;
			}

			function emptyMessageTemplate() {
				var locale = window.WCMAPI ? WCMAPI.getLocale() : 'pt_BR';
				var message = {
					'pt_BR': 'Nenhum resultado para sua pesquisa',
					'en_US': 'No results for your search',
					'es': 'No hay resultados para su b\u00FAsqueda'
				}[locale];

				return '<ul class="tt-suggestions list-unstyled"><li class="empty-message ellipsis">' + message
					+ '</li></ul>';
			}
		}

		function isValidName(str) {
			return /^[_a-zA-Z0-9-]+$/.test(str);
		}
	}();
	var Dropdown = function() {
		"use strict";

		function Dropdown(o) {
			var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
			o = o || {};
			if (!o.menu) {
				$.error("menu is required");
			}
			this.isOpen = false;
			this.isEmpty = true;
			this.datasets = _.map(o.datasets, initializeDataset);
			onSuggestionClick = _.bind(this._onSuggestionClick, this);
			onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
			onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
			this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt",
				".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
			_.each(this.datasets, function(dataset) {
				that.$menu.append(dataset.getRoot());
				dataset.onSync("rendered", that._onRendered, that);
			});
		}
		_.mixin(Dropdown.prototype, EventEmitter, {
			_onSuggestionClick: function onSuggestionClick($e) {
				this.trigger("suggestionClicked", $($e.currentTarget));
			},
			_onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
				this._removeCursor();
				this._setCursor($($e.currentTarget), true);
			},
			_onSuggestionMouseLeave: function onSuggestionMouseLeave() {
				this._removeCursor();
			},
			selected: false,
			_onRendered: function onRendered() {
				this.isEmpty = _.every(this.datasets, isDatasetEmpty);

				if (this.isEmpty || this.selected) {
					this._hide();
				} else if (this.isOpen) {
					this._show();
				}

				this.trigger("datasetRendered");
				this.selected = false;

				function isDatasetEmpty(dataset) {
					return dataset.isEmpty();
				}
			},
			_hide: function() {
				this.$menu.hide();
			},
			_show: function() {
				this.$menu.css("display", "block");
			},
			_showTipFill: function() {
				var that = this;
				_.each(this.datasets, updateDataset);

				function updateDataset(dataset) {
					if (that.isEmpty) {
						dataset._render('', [], true);
					}
				}
			},
			_getSuggestions: function getSuggestions() {
				return this.$menu.find(".tt-suggestion");
			},
			_getCursor: function getCursor() {
				return this.$menu.find(".tt-cursor").first();
			},
			_setCursor: function setCursor($el, silent) {
				$el.first().addClass("tt-cursor");
				!silent && this.trigger("cursorMoved");
			},
			_removeCursor: function removeCursor() {
				this._getCursor().removeClass("tt-cursor");
			},
			_moveCursor: function moveCursor(increment) {
				var $suggestions, $oldCursor, newCursorIndex, $newCursor;
				if (!this.isOpen) {
					return;
				}
				$oldCursor = this._getCursor();
				$suggestions = this._getSuggestions();
				this._removeCursor();
				newCursorIndex = $suggestions.index($oldCursor) + increment;
				newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
				if (newCursorIndex === -1) {
					this.trigger("cursorRemoved");
					return;
				} else if (newCursorIndex < -1) {
					newCursorIndex = $suggestions.length - 1;
				}
				this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
				this._ensureVisible($newCursor);
			},
			_ensureVisible: function ensureVisible($el) {
				var elTop, elBottom, menuScrollTop, menuHeight;
				elTop = $el.position().top;
				elBottom = elTop + $el.outerHeight(true);
				menuScrollTop = this.$menu.scrollTop();
				menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10)
					+ parseInt(this.$menu.css("paddingBottom"), 10);
				if (elTop < 0) {
					this.$menu.scrollTop(menuScrollTop + elTop);
				} else if (menuHeight < elBottom) {
					this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
				}
			},
			close: function close() {
				if (this.isOpen) {
					this.isOpen = false;
					this._removeCursor();
					this._hide();
					this.trigger("closed");
				}
			},
			open: function open() {
				if (!this.isOpen) {
					this.isOpen = true;
					this._showTipFill();
					this._show();
					this.trigger("opened");
				}
			},
			setLanguageDirection: function setLanguageDirection(dir) {
				this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
			},
			moveCursorUp: function moveCursorUp() {
				this._moveCursor(-1);
			},
			moveCursorDown: function moveCursorDown() {
				this._moveCursor(+1);
			},
			getDatumForSuggestion: function getDatumForSuggestion($el) {
				var datum = null;
				if ($el.length) {
					datum = {
						raw: Dataset.extractDatum($el),
						value: Dataset.extractValue($el),
						datasetName: Dataset.extractDatasetName($el)
					};
				}
				return datum;
			},
			getDatumForCursor: function getDatumForCursor() {
				return this.getDatumForSuggestion(this._getCursor().first());
			},
			getDatumForTopSuggestion: function getDatumForTopSuggestion() {
				return this.getDatumForSuggestion(this._getSuggestions().first());
			},
			update: function update(query) {
				if (!this.selected) {
					_.each(this.datasets, updateDataset);

					function updateDataset(dataset) {
						dataset.update(query);
					}
				}
			},
			empty: function empty() {
				_.each(this.datasets, clearDataset);
				this.isEmpty = true;

				function clearDataset(dataset) {
					dataset.clear();
				}
			},
			isVisible: function isVisible() {
				return this.isOpen && !this.isEmpty;
			},
			destroy: function destroy() {
				this.$menu.off(".tt");
				this.$menu = null;
				_.each(this.datasets, destroyDataset);

				function destroyDataset(dataset) {
					dataset.destroy();
				}
			}
		});
		return Dropdown;

		function initializeDataset(oDataset) {
			return new Dataset(oDataset);
		}
	}();
	var Typeahead = function() {
		"use strict";
		var attrsKey = "ttAttrs";

		function Typeahead(o) {
			var $menu, $input, $hint;
			o = o || {};
			if (!o.input) {
				$.error("missing input");
			}
			this.isActivated = false;
			this.autoselect = !!o.autoselect;
			this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
			this.$node = buildDom(o.input, o.withHint);
			$menu = this.$node.find(".tt-dropdown-menu");
			$input = this.$node.find(".tt-input");
			$hint = this.$node.find(".tt-hint");
			$input.on("blur.tt", function($e) {
				var active, isActive, hasActive;
				active = document.activeElement;
				isActive = $menu.is(active);
				hasActive = $menu.has(active).length > 0;
				if (_.isMsie() && (isActive || hasActive)) {
					$e.preventDefault();
					$e.stopImmediatePropagation();
					_.defer(function() {
						$input.focus();
					});
				}
			});
			$menu.on("mousedown.tt", function($e) {
				$e.preventDefault();
			});
			this.eventBus = o.eventBus || new EventBus({
				el: $input
			});
			this.dropdown = new Dropdown({
				menu: $menu,
				datasets: o.datasets
			}).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved,
				this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this)
				.onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
			this.input = new Input({
				input: $input,
				hint: $hint
			}).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed",
				this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed",
				this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed,
				this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this)
				.onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged",
					this._onWhitespaceChanged, this);
			this._setLanguageDirection();
		}
		_.mixin(Typeahead.prototype, {
			_onSuggestionClicked: function onSuggestionClicked(type, $el) {
				var datum;
				if (datum = this.dropdown.getDatumForSuggestion($el)) {
					this._select(datum);
				}
			},
			_onCursorMoved: function onCursorMoved() {
				var datum = this.dropdown.getDatumForCursor();
				this.input.setInputValue(datum.value, true);
				this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
			},
			_onCursorRemoved: function onCursorRemoved() {
				this.input.resetInputValue();
				this._updateHint();
			},
			_onDatasetRendered: function onDatasetRendered() {
				this._updateHint();
			},
			_onOpened: function onOpened() {
				this._updateHint();
				this.eventBus.trigger("opened");
			},
			_onClosed: function onClosed() {
				this.input.clearHint();
				this.eventBus.trigger("closed");
			},
			_onFocused: function onFocused(e) {
				var val;
				this.isActivated = true;
				this.input.clearHintIfInvalid();

				this.dropdown.close();

				if ((this.minLength === 0 || this.input.$input.val()) && !this.dropdown.isOpen) {
					this.dropdown.update(this.input.$input.val() || '');
				}

				this.dropdown.open();
				this._setLanguageDirection();
			},
			_onBlurred: function onBlurred() {
				this.isActivated = false;
				this.dropdown.empty();
				this.dropdown.close();
			},
			_onEnterKeyed: function onEnterKeyed(type, $e) {
				var cursorDatum, topSuggestionDatum;
				cursorDatum = this.dropdown.getDatumForCursor();
				topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
				if (cursorDatum) {
					this._select(cursorDatum);
					$e.preventDefault();
				} else if (this.autoselect && topSuggestionDatum) {
					this._select(topSuggestionDatum);
					$e.preventDefault();
				}
			},
			_onTabKeyed: function onTabKeyed(type, $e) {
				var datum;
				if (datum = this.dropdown.getDatumForCursor()) {
					this._select(datum);
					$e.preventDefault();
				} else {
					this._autocomplete(true);
				}
			},
			_onEscKeyed: function onEscKeyed() {
				this.dropdown.close();
				this.input.resetInputValue();
			},
			_onUpKeyed: function onUpKeyed() {
				var query = this.input.getQuery();
				this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown
					.moveCursorUp();
				this.dropdown.open();
			},
			_onDownKeyed: function onDownKeyed() {
				var query = this.input.getQuery();
				this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown
					.moveCursorDown();
				this.dropdown.open();
			},
			_onLeftKeyed: function onLeftKeyed() {
				this.dir === "rtl" && this._autocomplete();
			},
			_onRightKeyed: function onRightKeyed() {
				this.dir === "ltr" && this._autocomplete();
			},
			_onQueryChanged: function onQueryChanged(e, query) {
				this.input.clearHintIfInvalid();
				query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
				this.dropdown.open();
				this._setLanguageDirection();
			},
			_onWhitespaceChanged: function onWhitespaceChanged() {
				this._updateHint();
				this.dropdown.open();
			},
			_setLanguageDirection: function setLanguageDirection() {
				var dir;
				if (this.dir !== (dir = this.input.getLanguageDirection())) {
					this.dir = dir;
					this.$node.css("direction", dir);
					this.dropdown.setLanguageDirection(dir);
				}
			},
			_updateHint: function updateHint() {
				var datum, val, query, escapedQuery, frontMatchRegEx, match;
				datum = this.dropdown.getDatumForTopSuggestion();
				if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
					val = this.input.getInputValue();
					query = Input.normalizeQuery(val);
					escapedQuery = _.escapeRegExChars(query);
					frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
					match = frontMatchRegEx.exec(datum.value);
					match ? this.input.setHint(val + match[1]) : this.input.clearHint();
				} else {
					this.input.clearHint();
				}
			},
			_autocomplete: function autocomplete(laxCursor) {
				var hint, query, isCursorAtEnd, datum;
				hint = this.input.getHint();
				query = this.input.getQuery();
				isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
				if (hint && query !== hint && isCursorAtEnd) {
					datum = this.dropdown.getDatumForTopSuggestion();
					datum && this.input.setInputValue(datum.value);
					this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
				}
			},
			_select: function select(datum) {
				this.dropdown.selected = true;
				this.input.setQuery(datum.value);
				this.input.setInputValue(datum.value, true);
				this._setLanguageDirection();
				this.eventBus.trigger("selected", datum.raw, datum.datasetName);
				this.dropdown.close();
				_.defer(_.bind(this.dropdown.empty, this.dropdown));
			},
			open: function open() {
				this.dropdown.open();
			},
			close: function close() {
				this.dropdown.close();
			},
			setVal: function setVal(val) {
				val = _.toStr(val);
				if (this.isActivated) {
					this.input.setInputValue(val);
				} else {
					this.input.setQuery(val);
					this.input.setInputValue(val, true);
				}
				this._setLanguageDirection();
			},
			getVal: function getVal() {
				return this.input.getQuery();
			},
			destroy: function destroy() {
				this.input.destroy();
				this.dropdown.destroy();
				destroyDomStructure(this.$node);
				this.$node = null;
			}
		});
		return Typeahead;

		function buildDom(input, withHint) {
			var $input, $wrapper, $dropdown, $hint;
			$input = $(input);
			$wrapper = $(html.wrapper).css(css.wrapper);
			$dropdown = $(html.dropdown).css(css.dropdown);
			$hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
			$hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",
				true).attr({
				autocomplete: "off",
				spellcheck: "false",
				tabindex: -1
			});
			$input.data(attrsKey, {
				dir: $input.attr("dir"),
				autocomplete: $input.attr("autocomplete"),
				spellcheck: $input.attr("spellcheck"),
				style: $input.attr("style")
			});
			$input.addClass("tt-input").attr({
				autocomplete: "off",
				spellcheck: false
			}).css(withHint ? css.input : css.inputWithNoHint);
			try {
				!$input.attr("dir") && $input.attr("dir", "auto");
			} catch (e) {
			}
			return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
		}

		function getBackgroundStyles($el) {
			return {
				backgroundAttachment: $el.css("background-attachment"),
				backgroundClip: $el.css("background-clip"),
				backgroundColor: $el.css("background-color"),
				backgroundImage: $el.css("background-image"),
				backgroundOrigin: $el.css("background-origin"),
				backgroundPosition: $el.css("background-position"),
				backgroundRepeat: $el.css("background-repeat"),
				backgroundSize: $el.css("background-size")
			};
		}

		function destroyDomStructure($node) {
			var $input = $node.find(".tt-input");
			_.each($input.data(attrsKey), function(val, key) {
				_.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
			});
			$input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
			$node.remove();
		}
	}();
	(function() {
		"use strict";
		var old, typeaheadKey, methods;
		old = $.fn.typeahead;
		typeaheadKey = "ttTypeahead";
		methods = {
			initialize: function initialize(o, datasets) {
				datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
				o = o || {};
				return this.each(attach);

				function attach() {
					var $input = $(this), eventBus, typeahead;
					_.each(datasets, function(d) {
						d.highlight = !!o.highlight;
					});
					typeahead = new Typeahead({
						input: $input,
						eventBus: eventBus = new EventBus({
							el: $input
						}),
						withHint: _.isUndefined(o.hint) ? true : !!o.hint,
						minLength: o.minLength,
						autoselect: o.autoselect,
						datasets: datasets
					});
					$input.data(typeaheadKey, typeahead);
				}
			},
			open: function open() {
				return this.each(openTypeahead);

				function openTypeahead() {
					var $input = $(this), typeahead;
					if (typeahead = $input.data(typeaheadKey)) {
						typeahead.open();
					}
				}
			},
			close: function close() {
				return this.each(closeTypeahead);

				function closeTypeahead() {
					var $input = $(this), typeahead;
					if (typeahead = $input.data(typeaheadKey)) {
						typeahead.close();
					}
				}
			},
			val: function val(newVal) {
				return !arguments.length ? getVal(this.first()) : this.each(setVal);

				function setVal() {
					var $input = $(this), typeahead;
					if (typeahead = $input.data(typeaheadKey)) {
						typeahead.setVal(newVal);
					}
				}

				function getVal($input) {
					var typeahead, query;
					if (typeahead = $input.data(typeaheadKey)) {
						query = typeahead.getVal();
					}
					return query;
				}
			},
			destroy: function destroy() {
				return this.each(unattach);

				function unattach() {
					var $input = $(this), typeahead;
					if (typeahead = $input.data(typeaheadKey)) {
						typeahead.destroy();
						$input.removeData(typeaheadKey);
					}
				}
			}
		};
		$.fn.typeahead = function(method) {
			var tts;
			if (methods[method] && method !== "initialize") {
				tts = this.filter(function() {
					return !!$(this).data(typeaheadKey);
				});
				return methods[method].apply(tts, [].slice.call(arguments, 1));
			} else {
				return methods.initialize.apply(this, arguments);
			}
		};
		$.fn.typeahead.noConflict = function noConflict() {
			$.fn.typeahead = old;
			return this;
		};
	})();
})(window.jQuery);
/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */
(function(window, undefined) {
	"use strict";
	/**
	 * Store references to critically important global functions that may be
	 * overridden on certain web pages.
	 */
	var _window = window, _document = _window.document, _navigator = _window.navigator, _setTimeout = _window.setTimeout, _clearTimeout = _window.clearTimeout, _setInterval = _window.setInterval, _clearInterval = _window.clearInterval, _getComputedStyle = _window.getComputedStyle, _encodeURIComponent = _window.encodeURIComponent, _ActiveXObject = _window.ActiveXObject, _Error = _window.Error, _parseInt = _window.Number.parseInt
		|| _window.parseInt, _parseFloat = _window.Number.parseFloat || _window.parseFloat, _isNaN = _window.Number.isNaN
		|| _window.isNaN, _now = _window.Date.now, _keys = _window.Object.keys, _defineProperty = _window.Object.defineProperty, _hasOwn = _window.Object.prototype.hasOwnProperty, _slice = _window.Array.prototype.slice, _unwrap = function() {
		var unwrapper = function(el) {
			return el;
		};
		if (typeof _window.wrap === "function" && typeof _window.unwrap === "function") {
			try {
				var div = _document.createElement("div");
				var unwrappedDiv = _window.unwrap(div);
				if (div.nodeType === 1 && unwrappedDiv && unwrappedDiv.nodeType === 1) {
					unwrapper = _window.unwrap;
				}
			} catch (e) {
			}
		}
		return unwrapper;
	}();
	/**
	 * Convert an `arguments` object into an Array.
	 *
	 * @returns The arguments as an Array
	 * @private
	 */
	var _args = function(argumentsObj) {
		return _slice.call(argumentsObj, 0);
	};
	/**
	 * Shallow-copy the owned, enumerable properties of one object over to another, similar to jQuery's `$.extend`.
	 *
	 * @returns The target object, augmented
	 * @private
	 */
	var _extend = function() {
		var i, len, arg, prop, src, copy, args = _args(arguments), target = args[0] || {};
		for (i = 1, len = args.length; i < len; i++) {
			if ((arg = args[i]) != null) {
				for (prop in arg) {
					if (_hasOwn.call(arg, prop)) {
						src = target[prop];
						copy = arg[prop];
						if (target !== copy && copy !== undefined) {
							target[prop] = copy;
						}
					}
				}
			}
		}
		return target;
	};
	/**
	 * Return a deep copy of the source object or array.
	 *
	 * @returns Object or Array
	 * @private
	 */
	var _deepCopy = function(source) {
		var copy, i, len, prop;
		if (typeof source !== "object" || source == null || typeof source.nodeType === "number") {
			copy = source;
		} else if (typeof source.length === "number") {
			copy = [];
			for (i = 0, len = source.length; i < len; i++) {
				if (_hasOwn.call(source, i)) {
					copy[i] = _deepCopy(source[i]);
				}
			}
		} else {
			copy = {};
			for (prop in source) {
				if (_hasOwn.call(source, prop)) {
					copy[prop] = _deepCopy(source[prop]);
				}
			}
		}
		return copy;
	};
	/**
	 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to keep.
	 * The inverse of `_omit`, mostly. The big difference is that these properties do NOT need to be enumerable to
	 * be kept.
	 *
	 * @returns A new filtered object.
	 * @private
	 */
	var _pick = function(obj, keys) {
		var newObj = {};
		for ( var i = 0, len = keys.length; i < len; i++) {
			if (keys[i] in obj) {
				newObj[keys[i]] = obj[keys[i]];
			}
		}
		return newObj;
	};
	/**
	 * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to omit.
	 * The inverse of `_pick`.
	 *
	 * @returns A new filtered object.
	 * @private
	 */
	var _omit = function(obj, keys) {
		var newObj = {};
		for ( var prop in obj) {
			if (keys.indexOf(prop) === -1) {
				newObj[prop] = obj[prop];
			}
		}
		return newObj;
	};
	/**
	 * Remove all owned, enumerable properties from an object.
	 *
	 * @returns The original object without its owned, enumerable properties.
	 * @private
	 */
	var _deleteOwnProperties = function(obj) {
		if (obj) {
			for ( var prop in obj) {
				if (_hasOwn.call(obj, prop)) {
					delete obj[prop];
				}
			}
		}
		return obj;
	};
	/**
	 * Determine if an element is contained within another element.
	 *
	 * @returns Boolean
	 * @private
	 */
	var _containedBy = function(el, ancestorEl) {
		if (el
			&& el.nodeType === 1
			&& el.ownerDocument
			&& ancestorEl
			&& (ancestorEl.nodeType === 1 && ancestorEl.ownerDocument && ancestorEl.ownerDocument === el.ownerDocument || ancestorEl.nodeType === 9
				&& !ancestorEl.ownerDocument && ancestorEl === el.ownerDocument)) {
			do {
				if (el === ancestorEl) {
					return true;
				}
				el = el.parentNode;
			} while (el);
		}
		return false;
	};
	/**
	 * Get the URL path's parent directory.
	 *
	 * @returns String or `undefined`
	 * @private
	 */
	var _getDirPathOfUrl = function(url) {
		var dir;
		if (typeof url === "string" && url) {
			dir = url.split("#")[0].split("?")[0];
			dir = url.slice(0, url.lastIndexOf("/") + 1);
		}
		return dir;
	};
	/**
	 * Get the current script's URL by throwing an `Error` and analyzing it.
	 *
	 * @returns String or `undefined`
	 * @private
	 */
	var _getCurrentScriptUrlFromErrorStack = function(stack) {
		var url, matches;
		if (typeof stack === "string" && stack) {
			matches = stack
				.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
			if (matches && matches[1]) {
				url = matches[1];
			} else {
				matches = stack.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
				if (matches && matches[1]) {
					url = matches[1];
				}
			}
		}
		return url;
	};
	/**
	 * Get the current script's URL by throwing an `Error` and analyzing it.
	 *
	 * @returns String or `undefined`
	 * @private
	 */
	var _getCurrentScriptUrlFromError = function() {
		var url, err;
		try {
			throw new _Error();
		} catch (e) {
			err = e;
		}
		if (err) {
			url = err.sourceURL || err.fileName || _getCurrentScriptUrlFromErrorStack(err.stack);
		}
		return url;
	};
	/**
	 * Get the current script's URL.
	 *
	 * @returns String or `undefined`
	 * @private
	 */
	var _getCurrentScriptUrl = function() {
		var jsPath, scripts, i;
		if (_document.currentScript && (jsPath = _document.currentScript.src)) {
			return jsPath;
		}
		scripts = _document.getElementsByTagName("script");
		if (scripts.length === 1) {
			return scripts[0].src || undefined;
		}
		if ("readyState" in scripts[0]) {
			for (i = scripts.length; i--;) {
				if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
					return jsPath;
				}
			}
		}
		if (_document.readyState === "loading" && (jsPath = scripts[scripts.length - 1].src)) {
			return jsPath;
		}
		if (jsPath = _getCurrentScriptUrlFromError()) {
			return jsPath;
		}
		return undefined;
	};
	/**
	 * Get the unanimous parent directory of ALL script tags.
	 * If any script tags are either (a) inline or (b) from differing parent
	 * directories, this method must return `undefined`.
	 *
	 * @returns String or `undefined`
	 * @private
	 */
	var _getUnanimousScriptParentDir = function() {
		var i, jsDir, jsPath, scripts = _document.getElementsByTagName("script");
		for (i = scripts.length; i--;) {
			if (!(jsPath = scripts[i].src)) {
				jsDir = null;
				break;
			}
			jsPath = _getDirPathOfUrl(jsPath);
			if (jsDir == null) {
				jsDir = jsPath;
			} else if (jsDir !== jsPath) {
				jsDir = null;
				break;
			}
		}
		return jsDir || undefined;
	};
	/**
	 * Get the presumed location of the "ZeroClipboard.swf" file, based on the location
	 * of the executing JavaScript file (e.g. "ZeroClipboard.js", etc.).
	 *
	 * @returns String
	 * @private
	 */
	var _getDefaultSwfPath = function() {
		var jsDir = _getDirPathOfUrl(_getCurrentScriptUrl()) || _getUnanimousScriptParentDir() || "";
		return jsDir + "ZeroClipboard.swf";
	};
	/**
	 * Keep track of if the page is framed (in an `iframe`). This can never change.
	 * @private
	 */
	var _pageIsFramed = function() {
		return window.opener == null
			&& (!!window.top && window != window.top || !!window.parent && window != window.parent);
	}();
	/**
	 * Keep track of the state of the Flash object.
	 * @private
	 */
	var _flashState = {
		bridge: null,
		version: "0.0.0",
		pluginType: "unknown",
		disabled: null,
		outdated: null,
		sandboxed: null,
		unavailable: null,
		degraded: null,
		deactivated: null,
		overdue: null,
		ready: null
	};
	/**
	 * The minimum Flash Player version required to use ZeroClipboard completely.
	 * @readonly
	 * @private
	 */
	var _minimumFlashVersion = "11.0.0";
	/**
	 * The ZeroClipboard library version number, as reported by Flash, at the time the SWF was compiled.
	 */
	var _zcSwfVersion;
	/**
	 * Keep track of all event listener registrations.
	 * @private
	 */
	var _handlers = {};
	/**
	 * Keep track of the currently activated element.
	 * @private
	 */
	var _currentElement;
	/**
	 * Keep track of the element that was activated when a `copy` process started.
	 * @private
	 */
	var _copyTarget;
	/**
	 * Keep track of data for the pending clipboard transaction.
	 * @private
	 */
	var _clipData = {};
	/**
	 * Keep track of data formats for the pending clipboard transaction.
	 * @private
	 */
	var _clipDataFormatMap = null;
	/**
	 * Keep track of the Flash availability check timeout.
	 * @private
	 */
	var _flashCheckTimeout = 0;
	/**
	 * Keep track of SWF network errors interval polling.
	 * @private
	 */
	var _swfFallbackCheckInterval = 0;
	/**
	 * The `message` store for events
	 * @private
	 */
	var _eventMessages = {
		ready: "Flash communication is established",
		error: {
			"flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
			"flash-outdated": "Flash is too outdated to support ZeroClipboard",
			"flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
			"flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
			"flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
			"flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
			"flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
			"version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
			"clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
			"config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
			"swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
		}
	};
	/**
	 * The `name`s of `error` events that can only occur is Flash has at least
	 * been able to load the SWF successfully.
	 * @private
	 */
	var _errorsThatOnlyOccurAfterFlashLoads = ["flash-unavailable", "flash-degraded", "flash-overdue",
		"version-mismatch", "config-mismatch", "clipboard-error"];
	/**
	 * The `name`s of `error` events that should likely result in the `_flashState`
	 * variable's property values being updated.
	 * @private
	 */
	var _flashStateErrorNames = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable",
		"flash-degraded", "flash-deactivated", "flash-overdue"];
	/**
	 * A RegExp to match the `name` property of `error` events related to Flash.
	 * @private
	 */
	var _flashStateErrorNameMatchingRegex = new RegExp("^flash-(" + _flashStateErrorNames.map(function(errorName) {
		return errorName.replace(/^flash-/, "");
	}).join("|") + ")$");
	/**
	 * A RegExp to match the `name` property of `error` events related to Flash,
	 * which is enabled.
	 * @private
	 */
	var _flashStateEnabledErrorNameMatchingRegex = new RegExp("^flash-("
		+ _flashStateErrorNames.slice(1).map(function(errorName) {
			return errorName.replace(/^flash-/, "");
		}).join("|") + ")$");
	/**
	 * ZeroClipboard configuration defaults for the Core module.
	 * @private
	 */
	var _globalConfig = {
		swfPath: _getDefaultSwfPath(),
		trustedDomains: window.location.host ? [window.location.host] : [],
		cacheBust: true,
		forceEnhancedClipboard: false,
		flashLoadTimeout: 3e4,
		autoActivate: true,
		bubbleEvents: true,
		containerId: "global-zeroclipboard-html-bridge",
		containerClass: "global-zeroclipboard-container",
		swfObjectId: "global-zeroclipboard-flash-bridge",
		hoverClass: "zeroclipboard-is-hover",
		activeClass: "zeroclipboard-is-active",
		forceHandCursor: false,
		title: null,
		zIndex: 999999999
	};
	/**
	 * The underlying implementation of `ZeroClipboard.config`.
	 * @private
	 */
	var _config = function(options) {
		if (typeof options === "object" && options !== null) {
			for ( var prop in options) {
				if (_hasOwn.call(options, prop)) {
					if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(prop)) {
						_globalConfig[prop] = options[prop];
					} else if (_flashState.bridge == null) {
						if (prop === "containerId" || prop === "swfObjectId") {
							if (_isValidHtml4Id(options[prop])) {
								_globalConfig[prop] = options[prop];
							} else {
								throw new Error("The specified `" + prop
									+ "` value is not valid as an HTML4 Element ID");
							}
						} else {
							_globalConfig[prop] = options[prop];
						}
					}
				}
			}
		}
		if (typeof options === "string" && options) {
			if (_hasOwn.call(_globalConfig, options)) {
				return _globalConfig[options];
			}
			return;
		}
		return _deepCopy(_globalConfig);
	};
	/**
	 * The underlying implementation of `ZeroClipboard.state`.
	 * @private
	 */
	var _state = function() {
		_detectSandbox();
		return {
			browser: _pick(_navigator, ["userAgent", "platform", "appName"]),
			flash: _omit(_flashState, ["bridge"]),
			zeroclipboard: {
				version: ZeroClipboard.version,
				config: ZeroClipboard.config()
			}
		};
	};
	/**
	 * The underlying implementation of `ZeroClipboard.isFlashUnusable`.
	 * @private
	 */
	var _isFlashUnusable = function() {
		return !!(_flashState.disabled || _flashState.outdated || _flashState.sandboxed || _flashState.unavailable
			|| _flashState.degraded || _flashState.deactivated);
	};
	/**
	 * The underlying implementation of `ZeroClipboard.on`.
	 * @private
	 */
	var _on = function(eventType, listener) {
		var i, len, events, added = {};
		if (typeof eventType === "string" && eventType) {
			events = eventType.toLowerCase().split(/\s+/);
		} else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
			for (i in eventType) {
				if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
					ZeroClipboard.on(i, eventType[i]);
				}
			}
		}
		if (events && events.length) {
			for (i = 0, len = events.length; i < len; i++) {
				eventType = events[i].replace(/^on/, "");
				added[eventType] = true;
				if (!_handlers[eventType]) {
					_handlers[eventType] = [];
				}
				_handlers[eventType].push(listener);
			}
			if (added.ready && _flashState.ready) {
				ZeroClipboard.emit({
					type: "ready"
				});
			}
			if (added.error) {
				for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
					if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")] === true) {
						ZeroClipboard.emit({
							type: "error",
							name: _flashStateErrorNames[i]
						});
						break;
					}
				}
				if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
					ZeroClipboard.emit({
						type: "error",
						name: "version-mismatch",
						jsVersion: ZeroClipboard.version,
						swfVersion: _zcSwfVersion
					});
				}
			}
		}
		return ZeroClipboard;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.off`.
	 * @private
	 */
	var _off = function(eventType, listener) {
		var i, len, foundIndex, events, perEventHandlers;
		if (arguments.length === 0) {
			events = _keys(_handlers);
		} else if (typeof eventType === "string" && eventType) {
			events = eventType.split(/\s+/);
		} else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
			for (i in eventType) {
				if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
					ZeroClipboard.off(i, eventType[i]);
				}
			}
		}
		if (events && events.length) {
			for (i = 0, len = events.length; i < len; i++) {
				eventType = events[i].toLowerCase().replace(/^on/, "");
				perEventHandlers = _handlers[eventType];
				if (perEventHandlers && perEventHandlers.length) {
					if (listener) {
						foundIndex = perEventHandlers.indexOf(listener);
						while (foundIndex !== -1) {
							perEventHandlers.splice(foundIndex, 1);
							foundIndex = perEventHandlers.indexOf(listener, foundIndex);
						}
					} else {
						perEventHandlers.length = 0;
					}
				}
			}
		}
		return ZeroClipboard;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.handlers`.
	 * @private
	 */
	var _listeners = function(eventType) {
		var copy;
		if (typeof eventType === "string" && eventType) {
			copy = _deepCopy(_handlers[eventType]) || null;
		} else {
			copy = _deepCopy(_handlers);
		}
		return copy;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.emit`.
	 * @private
	 */
	var _emit = function(event) {
		var eventCopy, returnVal, tmp;
		event = _createEvent(event);
		if (!event) {
			return;
		}
		if (_preprocessEvent(event)) {
			return;
		}
		if (event.type === "ready" && _flashState.overdue === true) {
			return ZeroClipboard.emit({
				type: "error",
				name: "flash-overdue"
			});
		}
		eventCopy = _extend({}, event);
		_dispatchCallbacks.call(this, eventCopy);
		if (event.type === "copy") {
			tmp = _mapClipDataToFlash(_clipData);
			returnVal = tmp.data;
			_clipDataFormatMap = tmp.formatMap;
		}
		return returnVal;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.create`.
	 * @private
	 */
	var _create = function() {
		var previousState = _flashState.sandboxed;
		_detectSandbox();
		if (typeof _flashState.ready !== "boolean") {
			_flashState.ready = false;
		}
		if (_flashState.sandboxed !== previousState && _flashState.sandboxed === true) {
			_flashState.ready = false;
			ZeroClipboard.emit({
				type: "error",
				name: "flash-sandboxed"
			});
		} else if (!ZeroClipboard.isFlashUnusable() && _flashState.bridge === null) {
			var maxWait = _globalConfig.flashLoadTimeout;
			if (typeof maxWait === "number" && maxWait >= 0) {
				_flashCheckTimeout = _setTimeout(function() {
					if (typeof _flashState.deactivated !== "boolean") {
						_flashState.deactivated = true;
					}
					if (_flashState.deactivated === true) {
						ZeroClipboard.emit({
							type: "error",
							name: "flash-deactivated"
						});
					}
				}, maxWait);
			}
			_flashState.overdue = false;
			_embedSwf();
		}
	};
	/**
	 * The underlying implementation of `ZeroClipboard.destroy`.
	 * @private
	 */
	var _destroy = function() {
		ZeroClipboard.clearData();
		ZeroClipboard.blur();
		ZeroClipboard.emit("destroy");
		_unembedSwf();
		ZeroClipboard.off();
	};
	/**
	 * The underlying implementation of `ZeroClipboard.setData`.
	 * @private
	 */
	var _setData = function(format, data) {
		var dataObj;
		if (typeof format === "object" && format && typeof data === "undefined") {
			dataObj = format;
			ZeroClipboard.clearData();
		} else if (typeof format === "string" && format) {
			dataObj = {};
			dataObj[format] = data;
		} else {
			return;
		}
		for ( var dataFormat in dataObj) {
			if (typeof dataFormat === "string" && dataFormat && _hasOwn.call(dataObj, dataFormat)
				&& typeof dataObj[dataFormat] === "string" && dataObj[dataFormat]) {
				_clipData[dataFormat] = dataObj[dataFormat];
			}
		}
	};
	/**
	 * The underlying implementation of `ZeroClipboard.clearData`.
	 * @private
	 */
	var _clearData = function(format) {
		if (typeof format === "undefined") {
			_deleteOwnProperties(_clipData);
			_clipDataFormatMap = null;
		} else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
			delete _clipData[format];
		}
	};
	/**
	 * The underlying implementation of `ZeroClipboard.getData`.
	 * @private
	 */
	var _getData = function(format) {
		if (typeof format === "undefined") {
			return _deepCopy(_clipData);
		} else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
			return _clipData[format];
		}
	};
	/**
	 * The underlying implementation of `ZeroClipboard.focus`/`ZeroClipboard.activate`.
	 * @private
	 */
	var _focus = function(element) {
		if (!(element && element.nodeType === 1)) {
			return;
		}
		if (_currentElement) {
			_removeClass(_currentElement, _globalConfig.activeClass);
			if (_currentElement !== element) {
				_removeClass(_currentElement, _globalConfig.hoverClass);
			}
		}
		_currentElement = element;
		_addClass(element, _globalConfig.hoverClass);
		var newTitle = element.getAttribute("title") || _globalConfig.title;
		if (typeof newTitle === "string" && newTitle) {
			var htmlBridge = _getHtmlBridge(_flashState.bridge);
			if (htmlBridge) {
				htmlBridge.setAttribute("title", newTitle);
			}
		}
		var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
		_setHandCursor(useHandCursor);
		_reposition();
	};
	/**
	 * The underlying implementation of `ZeroClipboard.blur`/`ZeroClipboard.deactivate`.
	 * @private
	 */
	var _blur = function() {
		var htmlBridge = _getHtmlBridge(_flashState.bridge);
		if (htmlBridge) {
			htmlBridge.removeAttribute("title");
			htmlBridge.style.left = "0px";
			htmlBridge.style.top = "-9999px";
			htmlBridge.style.width = "1px";
			htmlBridge.style.height = "1px";
		}
		if (_currentElement) {
			_removeClass(_currentElement, _globalConfig.hoverClass);
			_removeClass(_currentElement, _globalConfig.activeClass);
			_currentElement = null;
		}
	};
	/**
	 * The underlying implementation of `ZeroClipboard.activeElement`.
	 * @private
	 */
	var _activeElement = function() {
		return _currentElement || null;
	};
	/**
	 * Check if a value is a valid HTML4 `ID` or `Name` token.
	 * @private
	 */
	var _isValidHtml4Id = function(id) {
		return typeof id === "string" && id && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(id);
	};
	/**
	 * Create or update an `event` object, based on the `eventType`.
	 * @private
	 */
	var _createEvent = function(event) {
		var eventType;
		if (typeof event === "string" && event) {
			eventType = event;
			event = {};
		} else if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
			eventType = event.type;
		}
		if (!eventType) {
			return;
		}
		eventType = eventType.toLowerCase();
		if (!event.target
			&& (/^(copy|aftercopy|_click)$/.test(eventType) || eventType === "error"
				&& event.name === "clipboard-error")) {
			event.target = _copyTarget;
		}
		_extend(event, {
			type: eventType,
			target: event.target || _currentElement || null,
			relatedTarget: event.relatedTarget || null,
			currentTarget: _flashState && _flashState.bridge || null,
			timeStamp: event.timeStamp || _now() || null
		});
		var msg = _eventMessages[event.type];
		if (event.type === "error" && event.name && msg) {
			msg = msg[event.name];
		}
		if (msg) {
			event.message = msg;
		}
		if (event.type === "ready") {
			_extend(event, {
				target: null,
				version: _flashState.version
			});
		}
		if (event.type === "error") {
			if (_flashStateErrorNameMatchingRegex.test(event.name)) {
				_extend(event, {
					target: null,
					minimumVersion: _minimumFlashVersion
				});
			}
			if (_flashStateEnabledErrorNameMatchingRegex.test(event.name)) {
				_extend(event, {
					version: _flashState.version
				});
			}
		}
		if (event.type === "copy") {
			event.clipboardData = {
				setData: ZeroClipboard.setData,
				clearData: ZeroClipboard.clearData
			};
		}
		if (event.type === "aftercopy") {
			event = _mapClipResultsFromFlash(event, _clipDataFormatMap);
		}
		if (event.target && !event.relatedTarget) {
			event.relatedTarget = _getRelatedTarget(event.target);
		}
		return _addMouseData(event);
	};
	/**
	 * Get a relatedTarget from the target's `data-clipboard-target` attribute
	 * @private
	 */
	var _getRelatedTarget = function(targetEl) {
		var relatedTargetId = targetEl && targetEl.getAttribute && targetEl.getAttribute("data-clipboard-target");
		return relatedTargetId ? _document.getElementById(relatedTargetId) : null;
	};
	/**
	 * Add element and position data to `MouseEvent` instances
	 * @private
	 */
	var _addMouseData = function(event) {
		if (event && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
			var srcElement = event.target;
			var fromElement = event.type === "_mouseover" && event.relatedTarget ? event.relatedTarget : undefined;
			var toElement = event.type === "_mouseout" && event.relatedTarget ? event.relatedTarget : undefined;
			var pos = _getElementPosition(srcElement);
			var screenLeft = _window.screenLeft || _window.screenX || 0;
			var screenTop = _window.screenTop || _window.screenY || 0;
			var scrollLeft = _document.body.scrollLeft + _document.documentElement.scrollLeft;
			var scrollTop = _document.body.scrollTop + _document.documentElement.scrollTop;
			var pageX = pos.left + (typeof event._stageX === "number" ? event._stageX : 0);
			var pageY = pos.top + (typeof event._stageY === "number" ? event._stageY : 0);
			var clientX = pageX - scrollLeft;
			var clientY = pageY - scrollTop;
			var screenX = screenLeft + clientX;
			var screenY = screenTop + clientY;
			var moveX = typeof event.movementX === "number" ? event.movementX : 0;
			var moveY = typeof event.movementY === "number" ? event.movementY : 0;
			delete event._stageX;
			delete event._stageY;
			_extend(event, {
				srcElement: srcElement,
				fromElement: fromElement,
				toElement: toElement,
				screenX: screenX,
				screenY: screenY,
				pageX: pageX,
				pageY: pageY,
				clientX: clientX,
				clientY: clientY,
				x: clientX,
				y: clientY,
				movementX: moveX,
				movementY: moveY,
				offsetX: 0,
				offsetY: 0,
				layerX: 0,
				layerY: 0
			});
		}
		return event;
	};
	/**
	 * Determine if an event's registered handlers should be execute synchronously or asynchronously.
	 *
	 * @returns {boolean}
	 * @private
	 */
	var _shouldPerformAsync = function(event) {
		var eventType = event && typeof event.type === "string" && event.type || "";
		return !/^(?:(?:before)?copy|destroy)$/.test(eventType);
	};
	/**
	 * Control if a callback should be executed asynchronously or not.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _dispatchCallback = function(func, context, args, async) {
		if (async) {
			_setTimeout(function() {
				func.apply(context, args);
			}, 0);
		} else {
			func.apply(context, args);
		}
	};
	/**
	 * Handle the actual dispatching of events to client instances.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _dispatchCallbacks = function(event) {
		if (!(typeof event === "object" && event && event.type)) {
			return;
		}
		var async = _shouldPerformAsync(event);
		var wildcardTypeHandlers = _handlers["*"] || [];
		var specificTypeHandlers = _handlers[event.type] || [];
		var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
		if (handlers && handlers.length) {
			var i, len, func, context, eventCopy, originalContext = this;
			for (i = 0, len = handlers.length; i < len; i++) {
				func = handlers[i];
				context = originalContext;
				if (typeof func === "string" && typeof _window[func] === "function") {
					func = _window[func];
				}
				if (typeof func === "object" && func && typeof func.handleEvent === "function") {
					context = func;
					func = func.handleEvent;
				}
				if (typeof func === "function") {
					eventCopy = _extend({}, event);
					_dispatchCallback(func, context, [eventCopy], async);
				}
			}
		}
		return this;
	};
	/**
	 * Check an `error` event's `name` property to see if Flash has
	 * already loaded, which rules out possible `iframe` sandboxing.
	 * @private
	 */
	var _getSandboxStatusFromErrorEvent = function(event) {
		var isSandboxed = null;
		if (_pageIsFramed === false || event && event.type === "error" && event.name
			&& _errorsThatOnlyOccurAfterFlashLoads.indexOf(event.name) !== -1) {
			isSandboxed = false;
		}
		return isSandboxed;
	};
	/**
	 * Preprocess any special behaviors, reactions, or state changes after receiving this event.
	 * Executes only once per event emitted, NOT once per client.
	 * @private
	 */
	var _preprocessEvent = function(event) {
		var element = event.target || _currentElement || null;
		var sourceIsSwf = event._source === "swf";
		delete event._source;
		switch (event.type) {
			case "error":
				var isSandboxed = event.name === "flash-sandboxed" || _getSandboxStatusFromErrorEvent(event);
				if (typeof isSandboxed === "boolean") {
					_flashState.sandboxed = isSandboxed;
				}
				if (_flashStateErrorNames.indexOf(event.name) !== -1) {
					_extend(_flashState, {
						disabled: event.name === "flash-disabled",
						outdated: event.name === "flash-outdated",
						unavailable: event.name === "flash-unavailable",
						degraded: event.name === "flash-degraded",
						deactivated: event.name === "flash-deactivated",
						overdue: event.name === "flash-overdue",
						ready: false
					});
				} else if (event.name === "version-mismatch") {
					_zcSwfVersion = event.swfVersion;
					_extend(_flashState, {
						disabled: false,
						outdated: false,
						unavailable: false,
						degraded: false,
						deactivated: false,
						overdue: false,
						ready: false
					});
				}
				_clearTimeoutsAndPolling();
				break;

			case "ready":
				_zcSwfVersion = event.swfVersion;
				var wasDeactivated = _flashState.deactivated === true;
				_extend(_flashState, {
					disabled: false,
					outdated: false,
					sandboxed: false,
					unavailable: false,
					degraded: false,
					deactivated: false,
					overdue: wasDeactivated,
					ready: !wasDeactivated
				});
				_clearTimeoutsAndPolling();
				break;

			case "beforecopy":
				_copyTarget = element;
				break;

			case "copy":
				var textContent, htmlContent, targetEl = event.relatedTarget;
				if (!(_clipData["text/html"] || _clipData["text/plain"]) && targetEl
					&& (htmlContent = targetEl.value || targetEl.outerHTML || targetEl.innerHTML)
					&& (textContent = targetEl.value || targetEl.textContent || targetEl.innerText)) {
					event.clipboardData.clearData();
					event.clipboardData.setData("text/plain", textContent);
					if (htmlContent !== textContent) {
						event.clipboardData.setData("text/html", htmlContent);
					}
				} else if (!_clipData["text/plain"] && event.target
					&& (textContent = event.target.getAttribute("data-clipboard-text"))) {
					event.clipboardData.clearData();
					event.clipboardData.setData("text/plain", textContent);
				}
				break;

			case "aftercopy":
				_queueEmitClipboardErrors(event);
				ZeroClipboard.clearData();
				if (element && element !== _safeActiveElement() && element.focus) {
					element.focus();
				}
				break;

			case "_mouseover":
				ZeroClipboard.focus(element);
				if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
					if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
						_fireMouseEvent(_extend({}, event, {
							type: "mouseenter",
							bubbles: false,
							cancelable: false
						}));
					}
					_fireMouseEvent(_extend({}, event, {
						type: "mouseover"
					}));
				}
				break;

			case "_mouseout":
				ZeroClipboard.blur();
				if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
					if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
						_fireMouseEvent(_extend({}, event, {
							type: "mouseleave",
							bubbles: false,
							cancelable: false
						}));
					}
					_fireMouseEvent(_extend({}, event, {
						type: "mouseout"
					}));
				}
				break;

			case "_mousedown":
				_addClass(element, _globalConfig.activeClass);
				if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
					_fireMouseEvent(_extend({}, event, {
						type: event.type.slice(1)
					}));
				}
				break;

			case "_mouseup":
				_removeClass(element, _globalConfig.activeClass);
				if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
					_fireMouseEvent(_extend({}, event, {
						type: event.type.slice(1)
					}));
				}
				break;

			case "_click":
				_copyTarget = null;
				if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
					_fireMouseEvent(_extend({}, event, {
						type: event.type.slice(1)
					}));
				}
				break;

			case "_mousemove":
				if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
					_fireMouseEvent(_extend({}, event, {
						type: event.type.slice(1)
					}));
				}
				break;
		}
		if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
			return true;
		}
	};
	/**
	 * Check an "aftercopy" event for clipboard errors and emit a corresponding "error" event.
	 * @private
	 */
	var _queueEmitClipboardErrors = function(aftercopyEvent) {
		if (aftercopyEvent.errors && aftercopyEvent.errors.length > 0) {
			var errorEvent = _deepCopy(aftercopyEvent);
			_extend(errorEvent, {
				type: "error",
				name: "clipboard-error"
			});
			delete errorEvent.success;
			_setTimeout(function() {
				ZeroClipboard.emit(errorEvent);
			}, 0);
		}
	};
	/**
	 * Dispatch a synthetic MouseEvent.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _fireMouseEvent = function(event) {
		if (!(event && typeof event.type === "string" && event)) {
			return;
		}
		var e, target = event.target || null, doc = target && target.ownerDocument || _document, defaults = {
			view: doc.defaultView || _window,
			canBubble: true,
			cancelable: true,
			detail: event.type === "click" ? 1 : 0,
			button: typeof event.which === "number" ? event.which - 1 : typeof event.button === "number" ? event.button
				: doc.createEvent ? 0 : 1
		}, args = _extend(defaults, event);
		if (!target) {
			return;
		}
		if (doc.createEvent && target.dispatchEvent) {
			args = [args.type, args.canBubble, args.cancelable, args.view, args.detail, args.screenX, args.screenY,
				args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.button,
				args.relatedTarget];
			e = doc.createEvent("MouseEvents");
			if (e.initMouseEvent) {
				e.initMouseEvent.apply(e, args);
				e._source = "js";
				target.dispatchEvent(e);
			}
		}
	};
	/**
	 * Continuously poll the DOM until either:
	 *  (a) the fallback content becomes visible, or
	 *  (b) we receive an event from SWF (handled elsewhere)
	 *
	 * IMPORTANT:
	 * This is NOT a necessary check but it can result in significantly faster
	 * detection of bad `swfPath` configuration and/or network/server issues [in
	 * supported browsers] than waiting for the entire `flashLoadTimeout` duration
	 * to elapse before detecting that the SWF cannot be loaded. The detection
	 * duration can be anywhere from 10-30 times faster [in supported browsers] by
	 * using this approach.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _watchForSwfFallbackContent = function() {
		var maxWait = _globalConfig.flashLoadTimeout;
		if (typeof maxWait === "number" && maxWait >= 0) {
			var pollWait = Math.min(1e3, maxWait / 10);
			var fallbackContentId = _globalConfig.swfObjectId + "_fallbackContent";
			_swfFallbackCheckInterval = _setInterval(function() {
				var el = _document.getElementById(fallbackContentId);
				if (_isElementVisible(el)) {
					_clearTimeoutsAndPolling();
					_flashState.deactivated = null;
					ZeroClipboard.emit({
						type: "error",
						name: "swf-not-found"
					});
				}
			}, pollWait);
		}
	};
	/**
	 * Create the HTML bridge element to embed the Flash object into.
	 * @private
	 */
	var _createHtmlBridge = function() {
		var container = _document.createElement("div");
		container.id = _globalConfig.containerId;
		container.className = _globalConfig.containerClass;
		container.style.position = "absolute";
		container.style.left = "0px";
		container.style.top = "-9999px";
		container.style.width = "1px";
		container.style.height = "1px";
		container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
		return container;
	};
	/**
	 * Get the HTML element container that wraps the Flash bridge object/element.
	 * @private
	 */
	var _getHtmlBridge = function(flashBridge) {
		var htmlBridge = flashBridge && flashBridge.parentNode;
		while (htmlBridge && htmlBridge.nodeName === "OBJECT" && htmlBridge.parentNode) {
			htmlBridge = htmlBridge.parentNode;
		}
		return htmlBridge || null;
	};
	/**
	 * Create the SWF object.
	 *
	 * @returns The SWF object reference.
	 * @private
	 */
	var _embedSwf = function() {
		var len, flashBridge = _flashState.bridge, container = _getHtmlBridge(flashBridge);
		if (!flashBridge) {
			var allowScriptAccess = _determineScriptAccess(_window.location.host, _globalConfig);
			var allowNetworking = allowScriptAccess === "never" ? "none" : "all";
			var flashvars = _vars(_extend({
				jsVersion: ZeroClipboard.version
			}, _globalConfig));
			var swfUrl = _globalConfig.swfPath + _cacheBust(_globalConfig.swfPath, _globalConfig);
			container = _createHtmlBridge();
			var divToBeReplaced = _document.createElement("div");
			container.appendChild(divToBeReplaced);
			_document.body.appendChild(container);
			var tmpDiv = _document.createElement("div");
			var usingActiveX = _flashState.pluginType === "activex";
			tmpDiv.innerHTML = '<object id="'
				+ _globalConfig.swfObjectId
				+ '" name="'
				+ _globalConfig.swfObjectId
				+ '" '
				+ 'width="100%" height="100%" '
				+ (usingActiveX ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"'
					: 'type="application/x-shockwave-flash" data="' + swfUrl + '"') + ">"
				+ (usingActiveX ? '<param name="movie" value="' + swfUrl + '"/>' : "")
				+ '<param name="allowScriptAccess" value="' + allowScriptAccess + '"/>'
				+ '<param name="allowNetworking" value="' + allowNetworking + '"/>'
				+ '<param name="menu" value="false"/>' + '<param name="wmode" value="transparent"/>'
				+ '<param name="flashvars" value="' + flashvars + '"/>' + '<div id="' + _globalConfig.swfObjectId
				+ '_fallbackContent">&nbsp;</div>' + "</object>";
			flashBridge = tmpDiv.firstChild;
			tmpDiv = null;
			_unwrap(flashBridge).ZeroClipboard = ZeroClipboard;
			container.replaceChild(flashBridge, divToBeReplaced);
			_watchForSwfFallbackContent();
		}
		if (!flashBridge) {
			flashBridge = _document[_globalConfig.swfObjectId];
			if (flashBridge && (len = flashBridge.length)) {
				flashBridge = flashBridge[len - 1];
			}
			if (!flashBridge && container) {
				flashBridge = container.firstChild;
			}
		}
		_flashState.bridge = flashBridge || null;
		return flashBridge;
	};
	/**
	 * Destroy the SWF object.
	 * @private
	 */
	var _unembedSwf = function() {
		var flashBridge = _flashState.bridge;
		if (flashBridge) {
			var htmlBridge = _getHtmlBridge(flashBridge);
			if (htmlBridge) {
				if (_flashState.pluginType === "activex" && "readyState" in flashBridge) {
					flashBridge.style.display = "none";
					(function removeSwfFromIE() {
						if (flashBridge.readyState === 4) {
							for ( var prop in flashBridge) {
								if (typeof flashBridge[prop] === "function") {
									flashBridge[prop] = null;
								}
							}
							if (flashBridge.parentNode) {
								flashBridge.parentNode.removeChild(flashBridge);
							}
							if (htmlBridge.parentNode) {
								htmlBridge.parentNode.removeChild(htmlBridge);
							}
						} else {
							_setTimeout(removeSwfFromIE, 10);
						}
					})();
				} else {
					if (flashBridge.parentNode) {
						flashBridge.parentNode.removeChild(flashBridge);
					}
					if (htmlBridge.parentNode) {
						htmlBridge.parentNode.removeChild(htmlBridge);
					}
				}
			}
			_clearTimeoutsAndPolling();
			_flashState.ready = null;
			_flashState.bridge = null;
			_flashState.deactivated = null;
			_zcSwfVersion = undefined;
		}
	};
	/**
	 * Map the data format names of the "clipData" to Flash-friendly names.
	 *
	 * @returns A new transformed object.
	 * @private
	 */
	var _mapClipDataToFlash = function(clipData) {
		var newClipData = {}, formatMap = {};
		if (!(typeof clipData === "object" && clipData)) {
			return;
		}
		for ( var dataFormat in clipData) {
			if (dataFormat && _hasOwn.call(clipData, dataFormat) && typeof clipData[dataFormat] === "string"
				&& clipData[dataFormat]) {
				switch (dataFormat.toLowerCase()) {
					case "text/plain":
					case "text":
					case "air:text":
					case "flash:text":
						newClipData.text = clipData[dataFormat];
						formatMap.text = dataFormat;
						break;

					case "text/html":
					case "html":
					case "air:html":
					case "flash:html":
						newClipData.html = clipData[dataFormat];
						formatMap.html = dataFormat;
						break;

					case "application/rtf":
					case "text/rtf":
					case "rtf":
					case "richtext":
					case "air:rtf":
					case "flash:rtf":
						newClipData.rtf = clipData[dataFormat];
						formatMap.rtf = dataFormat;
						break;

					default:
						break;
				}
			}
		}
		return {
			data: newClipData,
			formatMap: formatMap
		};
	};
	/**
	 * Map the data format names from Flash-friendly names back to their original "clipData" names (via a format mapping).
	 *
	 * @returns A new transformed object.
	 * @private
	 */
	var _mapClipResultsFromFlash = function(clipResults, formatMap) {
		if (!(typeof clipResults === "object" && clipResults && typeof formatMap === "object" && formatMap)) {
			return clipResults;
		}
		var newResults = {};
		for ( var prop in clipResults) {
			if (_hasOwn.call(clipResults, prop)) {
				if (prop === "errors") {
					newResults[prop] = clipResults[prop] ? clipResults[prop].slice() : [];
					for ( var i = 0, len = newResults[prop].length; i < len; i++) {
						newResults[prop][i].format = formatMap[newResults[prop][i].format];
					}
				} else if (prop !== "success" && prop !== "data") {
					newResults[prop] = clipResults[prop];
				} else {
					newResults[prop] = {};
					var tmpHash = clipResults[prop];
					for ( var dataFormat in tmpHash) {
						if (dataFormat && _hasOwn.call(tmpHash, dataFormat) && _hasOwn.call(formatMap, dataFormat)) {
							newResults[prop][formatMap[dataFormat]] = tmpHash[dataFormat];
						}
					}
				}
			}
		}
		return newResults;
	};
	/**
	 * Will look at a path, and will create a "?noCache={time}" or "&noCache={time}"
	 * query param string to return. Does NOT append that string to the original path.
	 * This is useful because ExternalInterface often breaks when a Flash SWF is cached.
	 *
	 * @returns The `noCache` query param with necessary "?"/"&" prefix.
	 * @private
	 */
	var _cacheBust = function(path, options) {
		var cacheBust = options == null || options && options.cacheBust === true;
		if (cacheBust) {
			return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + _now();
		} else {
			return "";
		}
	};
	/**
	 * Creates a query string for the FlashVars param.
	 * Does NOT include the cache-busting query param.
	 *
	 * @returns FlashVars query string
	 * @private
	 */
	var _vars = function(options) {
		var i, len, domain, domains, str = "", trustedOriginsExpanded = [];
		if (options.trustedDomains) {
			if (typeof options.trustedDomains === "string") {
				domains = [options.trustedDomains];
			} else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
				domains = options.trustedDomains;
			}
		}
		if (domains && domains.length) {
			for (i = 0, len = domains.length; i < len; i++) {
				if (_hasOwn.call(domains, i) && domains[i] && typeof domains[i] === "string") {
					domain = _extractDomain(domains[i]);
					if (!domain) {
						continue;
					}
					if (domain === "*") {
						trustedOriginsExpanded.length = 0;
						trustedOriginsExpanded.push(domain);
						break;
					}
					trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [domain, "//" + domain,
						_window.location.protocol + "//" + domain]);
				}
			}
		}
		if (trustedOriginsExpanded.length) {
			str += "trustedOrigins=" + _encodeURIComponent(trustedOriginsExpanded.join(","));
		}
		if (options.forceEnhancedClipboard === true) {
			str += (str ? "&" : "") + "forceEnhancedClipboard=true";
		}
		if (typeof options.swfObjectId === "string" && options.swfObjectId) {
			str += (str ? "&" : "") + "swfObjectId=" + _encodeURIComponent(options.swfObjectId);
		}
		if (typeof options.jsVersion === "string" && options.jsVersion) {
			str += (str ? "&" : "") + "jsVersion=" + _encodeURIComponent(options.jsVersion);
		}
		return str;
	};
	/**
	 * Extract the domain (e.g. "github.com") from an origin (e.g. "https://github.com") or
	 * URL (e.g. "https://github.com/zeroclipboard/zeroclipboard/").
	 *
	 * @returns the domain
	 * @private
	 */
	var _extractDomain = function(originOrUrl) {
		if (originOrUrl == null || originOrUrl === "") {
			return null;
		}
		originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
		if (originOrUrl === "") {
			return null;
		}
		var protocolIndex = originOrUrl.indexOf("//");
		originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
		var pathIndex = originOrUrl.indexOf("/");
		originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl
			.slice(0, pathIndex);
		if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
			return null;
		}
		return originOrUrl || null;
	};
	/**
	 * Set `allowScriptAccess` based on `trustedDomains` and `window.location.host` vs. `swfPath`.
	 *
	 * @returns The appropriate script access level.
	 * @private
	 */
	var _determineScriptAccess = function() {
		var _extractAllDomains = function(origins) {
			var i, len, tmp, resultsArray = [];
			if (typeof origins === "string") {
				origins = [origins];
			}
			if (!(typeof origins === "object" && origins && typeof origins.length === "number")) {
				return resultsArray;
			}
			for (i = 0, len = origins.length; i < len; i++) {
				if (_hasOwn.call(origins, i) && (tmp = _extractDomain(origins[i]))) {
					if (tmp === "*") {
						resultsArray.length = 0;
						resultsArray.push("*");
						break;
					}
					if (resultsArray.indexOf(tmp) === -1) {
						resultsArray.push(tmp);
					}
				}
			}
			return resultsArray;
		};
		return function(currentDomain, configOptions) {
			var swfDomain = _extractDomain(configOptions.swfPath);
			if (swfDomain === null) {
				swfDomain = currentDomain;
			}
			var trustedDomains = _extractAllDomains(configOptions.trustedDomains);
			var len = trustedDomains.length;
			if (len > 0) {
				if (len === 1 && trustedDomains[0] === "*") {
					return "always";
				}
				if (trustedDomains.indexOf(currentDomain) !== -1) {
					if (len === 1 && currentDomain === swfDomain) {
						return "sameDomain";
					}
					return "always";
				}
			}
			return "never";
		};
	}();
	/**
	 * Get the currently active/focused DOM element.
	 *
	 * @returns the currently active/focused element, or `null`
	 * @private
	 */
	var _safeActiveElement = function() {
		try {
			return _document.activeElement;
		} catch (err) {
			return null;
		}
	};
	/**
	 * Add a class to an element, if it doesn't already have it.
	 *
	 * @returns The element, with its new class added.
	 * @private
	 */
	var _addClass = function(element, value) {
		var c, cl, className, classNames = [];
		if (typeof value === "string" && value) {
			classNames = value.split(/\s+/);
		}
		if (element && element.nodeType === 1 && classNames.length > 0) {
			if (element.classList) {
				for (c = 0, cl = classNames.length; c < cl; c++) {
					element.classList.add(classNames[c]);
				}
			} else if (element.hasOwnProperty("className")) {
				className = " " + element.className + " ";
				for (c = 0, cl = classNames.length; c < cl; c++) {
					if (className.indexOf(" " + classNames[c] + " ") === -1) {
						className += classNames[c] + " ";
					}
				}
				element.className = className.replace(/^\s+|\s+$/g, "");
			}
		}
		return element;
	};
	/**
	 * Remove a class from an element, if it has it.
	 *
	 * @returns The element, with its class removed.
	 * @private
	 */
	var _removeClass = function(element, value) {
		var c, cl, className, classNames = [];
		if (typeof value === "string" && value) {
			classNames = value.split(/\s+/);
		}
		if (element && element.nodeType === 1 && classNames.length > 0) {
			if (element.classList && element.classList.length > 0) {
				for (c = 0, cl = classNames.length; c < cl; c++) {
					element.classList.remove(classNames[c]);
				}
			} else if (element.className) {
				className = (" " + element.className + " ").replace(/[\r\n\t]/g, " ");
				for (c = 0, cl = classNames.length; c < cl; c++) {
					className = className.replace(" " + classNames[c] + " ", " ");
				}
				element.className = className.replace(/^\s+|\s+$/g, "");
			}
		}
		return element;
	};
	/**
	 * Attempt to interpret the element's CSS styling. If `prop` is `"cursor"`,
	 * then we assume that it should be a hand ("pointer") cursor if the element
	 * is an anchor element ("a" tag).
	 *
	 * @returns The computed style property.
	 * @private
	 */
	var _getStyle = function(el, prop) {
		var value = _getComputedStyle(el, null).getPropertyValue(prop);
		if (prop === "cursor") {
			if (!value || value === "auto") {
				if (el.nodeName === "A") {
					return "pointer";
				}
			}
		}
		return value;
	};
	/**
	 * Get the absolutely positioned coordinates of a DOM element.
	 *
	 * @returns Object containing the element's position, width, and height.
	 * @private
	 */
	var _getElementPosition = function(el) {
		var pos = {
			left: 0,
			top: 0,
			width: 0,
			height: 0
		};
		if (el.getBoundingClientRect) {
			var elRect = el.getBoundingClientRect();
			var pageXOffset = _window.pageXOffset;
			var pageYOffset = _window.pageYOffset;
			var leftBorderWidth = _document.documentElement.clientLeft || 0;
			var topBorderWidth = _document.documentElement.clientTop || 0;
			var leftBodyOffset = 0;
			var topBodyOffset = 0;
			if (_getStyle(_document.body, "position") === "relative") {
				var bodyRect = _document.body.getBoundingClientRect();
				var htmlRect = _document.documentElement.getBoundingClientRect();
				leftBodyOffset = bodyRect.left - htmlRect.left || 0;
				topBodyOffset = bodyRect.top - htmlRect.top || 0;
			}
			pos.left = elRect.left + pageXOffset - leftBorderWidth - leftBodyOffset;
			pos.top = elRect.top + pageYOffset - topBorderWidth - topBodyOffset;
			pos.width = "width" in elRect ? elRect.width : elRect.right - elRect.left;
			pos.height = "height" in elRect ? elRect.height : elRect.bottom - elRect.top;
		}
		return pos;
	};
	/**
	 * Determine is an element is visible somewhere within the document (page).
	 *
	 * @returns Boolean
	 * @private
	 */
	var _isElementVisible = function(el) {
		if (!el) {
			return false;
		}
		var styles = _getComputedStyle(el, null);
		var hasCssHeight = _parseFloat(styles.height) > 0;
		var hasCssWidth = _parseFloat(styles.width) > 0;
		var hasCssTop = _parseFloat(styles.top) >= 0;
		var hasCssLeft = _parseFloat(styles.left) >= 0;
		var cssKnows = hasCssHeight && hasCssWidth && hasCssTop && hasCssLeft;
		var rect = cssKnows ? null : _getElementPosition(el);
		var isVisible = styles.display !== "none"
			&& styles.visibility !== "collapse"
			&& (cssKnows || !!rect && (hasCssHeight || rect.height > 0) && (hasCssWidth || rect.width > 0)
				&& (hasCssTop || rect.top >= 0) && (hasCssLeft || rect.left >= 0));
		return isVisible;
	};
	/**
	 * Clear all existing timeouts and interval polling delegates.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _clearTimeoutsAndPolling = function() {
		_clearTimeout(_flashCheckTimeout);
		_flashCheckTimeout = 0;
		_clearInterval(_swfFallbackCheckInterval);
		_swfFallbackCheckInterval = 0;
	};
	/**
	 * Reposition the Flash object to cover the currently activated element.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _reposition = function() {
		var htmlBridge;
		if (_currentElement && (htmlBridge = _getHtmlBridge(_flashState.bridge))) {
			var pos = _getElementPosition(_currentElement);
			_extend(htmlBridge.style, {
				width: pos.width + "px",
				height: pos.height + "px",
				top: pos.top + "px",
				left: pos.left + "px",
				zIndex: "" + _getSafeZIndex(_globalConfig.zIndex)
			});
		}
	};
	/**
	 * Sends a signal to the Flash object to display the hand cursor if `true`.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _setHandCursor = function(enabled) {
		if (_flashState.ready === true) {
			if (_flashState.bridge && typeof _flashState.bridge.setHandCursor === "function") {
				_flashState.bridge.setHandCursor(enabled);
			} else {
				_flashState.ready = false;
			}
		}
	};
	/**
	 * Get a safe value for `zIndex`
	 *
	 * @returns an integer, or "auto"
	 * @private
	 */
	var _getSafeZIndex = function(val) {
		if (/^(?:auto|inherit)$/.test(val)) {
			return val;
		}
		var zIndex;
		if (typeof val === "number" && !_isNaN(val)) {
			zIndex = val;
		} else if (typeof val === "string") {
			zIndex = _getSafeZIndex(_parseInt(val, 10));
		}
		return typeof zIndex === "number" ? zIndex : "auto";
	};
	/**
	 * Attempt to detect if ZeroClipboard is executing inside of a sandboxed iframe.
	 * If it is, Flash Player cannot be used, so ZeroClipboard is dead in the water.
	 *
	 * @see {@link http://lists.w3.org/Archives/Public/public-whatwg-archive/2014Dec/0002.html}
	 * @see {@link https://github.com/zeroclipboard/zeroclipboard/issues/511}
	 * @see {@link http://zeroclipboard.org/test-iframes.html}
	 *
	 * @returns `true` (is sandboxed), `false` (is not sandboxed), or `null` (uncertain) 
	 * @private
	 */
	var _detectSandbox = function(doNotReassessFlashSupport) {
		var effectiveScriptOrigin, frame, frameError, previousState = _flashState.sandboxed, isSandboxed = null;
		doNotReassessFlashSupport = doNotReassessFlashSupport === true;
		if (_pageIsFramed === false) {
			isSandboxed = false;
		} else {
			try {
				frame = window.frameElement || null;
			} catch (e) {
				frameError = {
					name: e.name,
					message: e.message
				};
			}
			if (frame && frame.nodeType === 1 && frame.nodeName === "IFRAME") {
				try {
					isSandboxed = frame.hasAttribute("sandbox");
				} catch (e) {
					isSandboxed = null;
				}
			} else {
				try {
					effectiveScriptOrigin = document.domain || null;
				} catch (e) {
					effectiveScriptOrigin = null;
				}
				if (effectiveScriptOrigin === null || frameError && frameError.name === "SecurityError"
					&& /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(frameError.message.toLowerCase())) {
					isSandboxed = true;
				}
			}
		}
		_flashState.sandboxed = isSandboxed;
		if (previousState !== isSandboxed && !doNotReassessFlashSupport) {
			_detectFlashSupport(_ActiveXObject);
		}
		return isSandboxed;
	};
	/**
	 * Detect the Flash Player status, version, and plugin type.
	 *
	 * @see {@link https://code.google.com/p/doctype-mirror/wiki/ArticleDetectFlash#The_code}
	 * @see {@link http://stackoverflow.com/questions/12866060/detecting-pepper-ppapi-flash-with-javascript}
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _detectFlashSupport = function(ActiveXObject) {
		var plugin, ax, mimeType, hasFlash = false, isActiveX = false, isPPAPI = false, flashVersion = "";
		/**
		 * Derived from Apple's suggested sniffer.
		 * @param {String} desc e.g. "Shockwave Flash 7.0 r61"
		 * @returns {String} "7.0.61"
		 * @private
		 */
		function parseFlashVersion(desc) {
			var matches = desc.match(/[\d]+/g);
			matches.length = 3;
			return matches.join(".");
		}
		function isPepperFlash(flashPlayerFileName) {
			return !!flashPlayerFileName
				&& (flashPlayerFileName = flashPlayerFileName.toLowerCase())
				&& (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(flashPlayerFileName) || flashPlayerFileName
					.slice(-13) === "chrome.plugin");
		}
		function inspectPlugin(plugin) {
			if (plugin) {
				hasFlash = true;
				if (plugin.version) {
					flashVersion = parseFlashVersion(plugin.version);
				}
				if (!flashVersion && plugin.description) {
					flashVersion = parseFlashVersion(plugin.description);
				}
				if (plugin.filename) {
					isPPAPI = isPepperFlash(plugin.filename);
				}
			}
		}
		if (_navigator.plugins && _navigator.plugins.length) {
			plugin = _navigator.plugins["Shockwave Flash"];
			inspectPlugin(plugin);
			if (_navigator.plugins["Shockwave Flash 2.0"]) {
				hasFlash = true;
				flashVersion = "2.0.0.11";
			}
		} else if (_navigator.mimeTypes && _navigator.mimeTypes.length) {
			mimeType = _navigator.mimeTypes["application/x-shockwave-flash"];
			plugin = mimeType && mimeType.enabledPlugin;
			inspectPlugin(plugin);
		} else if (typeof ActiveXObject !== "undefined") {
			isActiveX = true;
			try {
				ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
				hasFlash = true;
				flashVersion = parseFlashVersion(ax.GetVariable("$version"));
			} catch (e1) {
				try {
					ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					hasFlash = true;
					flashVersion = "6.0.21";
				} catch (e2) {
					try {
						ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
						hasFlash = true;
						flashVersion = parseFlashVersion(ax.GetVariable("$version"));
					} catch (e3) {
						isActiveX = false;
					}
				}
			}
		}
		_flashState.disabled = hasFlash !== true;
		_flashState.outdated = flashVersion && _parseFloat(flashVersion) < _parseFloat(_minimumFlashVersion);
		_flashState.version = flashVersion || "0.0.0";
		_flashState.pluginType = isPPAPI ? "pepper" : isActiveX ? "activex" : hasFlash ? "netscape" : "unknown";
	};
	/**
	 * Invoke the Flash detection algorithms immediately upon inclusion so we're not waiting later.
	 */
	_detectFlashSupport(_ActiveXObject);
	/**
	 * Always assess the `sandboxed` state of the page at important Flash-related moments.
	 */
	_detectSandbox(true);
	/**
	 * A shell constructor for `ZeroClipboard` client instances.
	 *
	 * @constructor
	 */
	var ZeroClipboard = function() {
		if (!(this instanceof ZeroClipboard)) {
			return new ZeroClipboard();
		}
		if (typeof ZeroClipboard._createClient === "function") {
			ZeroClipboard._createClient.apply(this, _args(arguments));
		}
	};
	/**
	 * The ZeroClipboard library's version number.
	 *
	 * @static
	 * @readonly
	 * @property {string}
	 */
	_defineProperty(ZeroClipboard, "version", {
		value: "2.2.0",
		writable: false,
		configurable: true,
		enumerable: true
	});
	/**
	 * Update or get a copy of the ZeroClipboard global configuration.
	 * Returns a copy of the current/updated configuration.
	 *
	 * @returns Object
	 * @static
	 */
	ZeroClipboard.config = function() {
		return _config.apply(this, _args(arguments));
	};
	/**
	 * Diagnostic method that describes the state of the browser, Flash Player, and ZeroClipboard.
	 *
	 * @returns Object
	 * @static
	 */
	ZeroClipboard.state = function() {
		return _state.apply(this, _args(arguments));
	};
	/**
	 * Check if Flash is unusable for any reason: disabled, outdated, deactivated, etc.
	 *
	 * @returns Boolean
	 * @static
	 */
	ZeroClipboard.isFlashUnusable = function() {
		return _isFlashUnusable.apply(this, _args(arguments));
	};
	/**
	 * Register an event listener.
	 *
	 * @returns `ZeroClipboard`
	 * @static
	 */
	ZeroClipboard.on = function() {
		return _on.apply(this, _args(arguments));
	};
	/**
	 * Unregister an event listener.
	 * If no `listener` function/object is provided, it will unregister all listeners for the provided `eventType`.
	 * If no `eventType` is provided, it will unregister all listeners for every event type.
	 *
	 * @returns `ZeroClipboard`
	 * @static
	 */
	ZeroClipboard.off = function() {
		return _off.apply(this, _args(arguments));
	};
	/**
	 * Retrieve event listeners for an `eventType`.
	 * If no `eventType` is provided, it will retrieve all listeners for every event type.
	 *
	 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
	 */
	ZeroClipboard.handlers = function() {
		return _listeners.apply(this, _args(arguments));
	};
	/**
	 * Event emission receiver from the Flash object, forwarding to any registered JavaScript event listeners.
	 *
	 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
	 * @static
	 */
	ZeroClipboard.emit = function() {
		return _emit.apply(this, _args(arguments));
	};
	/**
	 * Create and embed the Flash object.
	 *
	 * @returns The Flash object
	 * @static
	 */
	ZeroClipboard.create = function() {
		return _create.apply(this, _args(arguments));
	};
	/**
	 * Self-destruct and clean up everything, including the embedded Flash object.
	 *
	 * @returns `undefined`
	 * @static
	 */
	ZeroClipboard.destroy = function() {
		return _destroy.apply(this, _args(arguments));
	};
	/**
	 * Set the pending data for clipboard injection.
	 *
	 * @returns `undefined`
	 * @static
	 */
	ZeroClipboard.setData = function() {
		return _setData.apply(this, _args(arguments));
	};
	/**
	 * Clear the pending data for clipboard injection.
	 * If no `format` is provided, all pending data formats will be cleared.
	 *
	 * @returns `undefined`
	 * @static
	 */
	ZeroClipboard.clearData = function() {
		return _clearData.apply(this, _args(arguments));
	};
	/**
	 * Get a copy of the pending data for clipboard injection.
	 * If no `format` is provided, a copy of ALL pending data formats will be returned.
	 *
	 * @returns `String` or `Object`
	 * @static
	 */
	ZeroClipboard.getData = function() {
		return _getData.apply(this, _args(arguments));
	};
	/**
	 * Sets the current HTML object that the Flash object should overlay. This will put the global
	 * Flash object on top of the current element; depending on the setup, this may also set the
	 * pending clipboard text data as well as the Flash object's wrapping element's title attribute
	 * based on the underlying HTML element and ZeroClipboard configuration.
	 *
	 * @returns `undefined`
	 * @static
	 */
	ZeroClipboard.focus = ZeroClipboard.activate = function() {
		return _focus.apply(this, _args(arguments));
	};
	/**
	 * Un-overlays the Flash object. This will put the global Flash object off-screen; depending on
	 * the setup, this may also unset the Flash object's wrapping element's title attribute based on
	 * the underlying HTML element and ZeroClipboard configuration.
	 *
	 * @returns `undefined`
	 * @static
	 */
	ZeroClipboard.blur = ZeroClipboard.deactivate = function() {
		return _blur.apply(this, _args(arguments));
	};
	/**
	 * Returns the currently focused/"activated" HTML element that the Flash object is wrapping.
	 *
	 * @returns `HTMLElement` or `null`
	 * @static
	 */
	ZeroClipboard.activeElement = function() {
		return _activeElement.apply(this, _args(arguments));
	};
	/**
	 * Keep track of the ZeroClipboard client instance counter.
	 */
	var _clientIdCounter = 0;
	/**
	 * Keep track of the state of the client instances.
	 *
	 * Entry structure:
	 *   _clientMeta[client.id] = {
	 *     instance: client,
	 *     elements: [],
	 *     handlers: {}
	 *   };
	 */
	var _clientMeta = {};
	/**
	 * Keep track of the ZeroClipboard clipped elements counter.
	 */
	var _elementIdCounter = 0;
	/**
	 * Keep track of the state of the clipped element relationships to clients.
	 *
	 * Entry structure:
	 *   _elementMeta[element.zcClippingId] = [client1.id, client2.id];
	 */
	var _elementMeta = {};
	/**
	 * Keep track of the state of the mouse event handlers for clipped elements.
	 *
	 * Entry structure:
	 *   _mouseHandlers[element.zcClippingId] = {
	 *     mouseover:  function(event) {},
	 *     mouseout:   function(event) {},
	 *     mouseenter: function(event) {},
	 *     mouseleave: function(event) {},
	 *     mousemove:  function(event) {}
	 *   };
	 */
	var _mouseHandlers = {};
	/**
	 * Extending the ZeroClipboard configuration defaults for the Client module.
	 */
	_extend(_globalConfig, {
		autoActivate: true
	});
	/**
	 * The real constructor for `ZeroClipboard` client instances.
	 * @private
	 */
	var _clientConstructor = function(elements) {
		var client = this;
		client.id = "" + _clientIdCounter++;
		_clientMeta[client.id] = {
			instance: client,
			elements: [],
			handlers: {}
		};
		if (elements) {
			client.clip(elements);
		}
		ZeroClipboard.on("*", function(event) {
			return client.emit(event);
		});
		ZeroClipboard.on("destroy", function() {
			client.destroy();
		});
		ZeroClipboard.create();
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.on`.
	 * @private
	 */
	var _clientOn = function(eventType, listener) {
		var i, len, events, added = {}, meta = _clientMeta[this.id], handlers = meta && meta.handlers;
		if (!meta) {
			throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
		}
		if (typeof eventType === "string" && eventType) {
			events = eventType.toLowerCase().split(/\s+/);
		} else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
			for (i in eventType) {
				if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
					this.on(i, eventType[i]);
				}
			}
		}
		if (events && events.length) {
			for (i = 0, len = events.length; i < len; i++) {
				eventType = events[i].replace(/^on/, "");
				added[eventType] = true;
				if (!handlers[eventType]) {
					handlers[eventType] = [];
				}
				handlers[eventType].push(listener);
			}
			if (added.ready && _flashState.ready) {
				this.emit({
					type: "ready",
					client: this
				});
			}
			if (added.error) {
				for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
					if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")]) {
						this.emit({
							type: "error",
							name: _flashStateErrorNames[i],
							client: this
						});
						break;
					}
				}
				if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
					this.emit({
						type: "error",
						name: "version-mismatch",
						jsVersion: ZeroClipboard.version,
						swfVersion: _zcSwfVersion
					});
				}
			}
		}
		return this;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.off`.
	 * @private
	 */
	var _clientOff = function(eventType, listener) {
		var i, len, foundIndex, events, perEventHandlers, meta = _clientMeta[this.id], handlers = meta && meta.handlers;
		if (!handlers) {
			return this;
		}
		if (arguments.length === 0) {
			events = _keys(handlers);
		} else if (typeof eventType === "string" && eventType) {
			events = eventType.split(/\s+/);
		} else if (typeof eventType === "object" && eventType && typeof listener === "undefined") {
			for (i in eventType) {
				if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
					this.off(i, eventType[i]);
				}
			}
		}
		if (events && events.length) {
			for (i = 0, len = events.length; i < len; i++) {
				eventType = events[i].toLowerCase().replace(/^on/, "");
				perEventHandlers = handlers[eventType];
				if (perEventHandlers && perEventHandlers.length) {
					if (listener) {
						foundIndex = perEventHandlers.indexOf(listener);
						while (foundIndex !== -1) {
							perEventHandlers.splice(foundIndex, 1);
							foundIndex = perEventHandlers.indexOf(listener, foundIndex);
						}
					} else {
						perEventHandlers.length = 0;
					}
				}
			}
		}
		return this;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.handlers`.
	 * @private
	 */
	var _clientListeners = function(eventType) {
		var copy = null, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
		if (handlers) {
			if (typeof eventType === "string" && eventType) {
				copy = handlers[eventType] ? handlers[eventType].slice(0) : [];
			} else {
				copy = _deepCopy(handlers);
			}
		}
		return copy;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.emit`.
	 * @private
	 */
	var _clientEmit = function(event) {
		if (_clientShouldEmit.call(this, event)) {
			if (typeof event === "object" && event && typeof event.type === "string" && event.type) {
				event = _extend({}, event);
			}
			var eventCopy = _extend({}, _createEvent(event), {
				client: this
			});
			_clientDispatchCallbacks.call(this, eventCopy);
		}
		return this;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.clip`.
	 * @private
	 */
	var _clientClip = function(elements) {
		if (!_clientMeta[this.id]) {
			throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
		}
		elements = _prepClip(elements);
		for ( var i = 0; i < elements.length; i++) {
			if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
				if (!elements[i].zcClippingId) {
					elements[i].zcClippingId = "zcClippingId_" + _elementIdCounter++;
					_elementMeta[elements[i].zcClippingId] = [this.id];
					if (_globalConfig.autoActivate === true) {
						_addMouseHandlers(elements[i]);
					}
				} else if (_elementMeta[elements[i].zcClippingId].indexOf(this.id) === -1) {
					_elementMeta[elements[i].zcClippingId].push(this.id);
				}
				var clippedElements = _clientMeta[this.id] && _clientMeta[this.id].elements;
				if (clippedElements.indexOf(elements[i]) === -1) {
					clippedElements.push(elements[i]);
				}
			}
		}
		return this;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.unclip`.
	 * @private
	 */
	var _clientUnclip = function(elements) {
		var meta = _clientMeta[this.id];
		if (!meta) {
			return this;
		}
		var clippedElements = meta.elements;
		var arrayIndex;
		if (typeof elements === "undefined") {
			elements = clippedElements.slice(0);
		} else {
			elements = _prepClip(elements);
		}
		for ( var i = elements.length; i--;) {
			if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
				arrayIndex = 0;
				while ((arrayIndex = clippedElements.indexOf(elements[i], arrayIndex)) !== -1) {
					clippedElements.splice(arrayIndex, 1);
				}
				var clientIds = _elementMeta[elements[i].zcClippingId];
				if (clientIds) {
					arrayIndex = 0;
					while ((arrayIndex = clientIds.indexOf(this.id, arrayIndex)) !== -1) {
						clientIds.splice(arrayIndex, 1);
					}
					if (clientIds.length === 0) {
						if (_globalConfig.autoActivate === true) {
							_removeMouseHandlers(elements[i]);
						}
						delete elements[i].zcClippingId;
					}
				}
			}
		}
		return this;
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.elements`.
	 * @private
	 */
	var _clientElements = function() {
		var meta = _clientMeta[this.id];
		return meta && meta.elements ? meta.elements.slice(0) : [];
	};
	/**
	 * The underlying implementation of `ZeroClipboard.Client.prototype.destroy`.
	 * @private
	 */
	var _clientDestroy = function() {
		if (!_clientMeta[this.id]) {
			return;
		}
		this.unclip();
		this.off();
		delete _clientMeta[this.id];
	};
	/**
	 * Inspect an Event to see if the Client (`this`) should honor it for emission.
	 * @private
	 */
	var _clientShouldEmit = function(event) {
		if (!(event && event.type)) {
			return false;
		}
		if (event.client && event.client !== this) {
			return false;
		}
		var meta = _clientMeta[this.id];
		var clippedEls = meta && meta.elements;
		var hasClippedEls = !!clippedEls && clippedEls.length > 0;
		var goodTarget = !event.target || hasClippedEls && clippedEls.indexOf(event.target) !== -1;
		var goodRelTarget = event.relatedTarget && hasClippedEls && clippedEls.indexOf(event.relatedTarget) !== -1;
		var goodClient = event.client && event.client === this;
		if (!meta || !(goodTarget || goodRelTarget || goodClient)) {
			return false;
		}
		return true;
	};
	/**
	 * Handle the actual dispatching of events to a client instance.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _clientDispatchCallbacks = function(event) {
		var meta = _clientMeta[this.id];
		if (!(typeof event === "object" && event && event.type && meta)) {
			return;
		}
		var async = _shouldPerformAsync(event);
		var wildcardTypeHandlers = meta && meta.handlers["*"] || [];
		var specificTypeHandlers = meta && meta.handlers[event.type] || [];
		var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
		if (handlers && handlers.length) {
			var i, len, func, context, eventCopy, originalContext = this;
			for (i = 0, len = handlers.length; i < len; i++) {
				func = handlers[i];
				context = originalContext;
				if (typeof func === "string" && typeof _window[func] === "function") {
					func = _window[func];
				}
				if (typeof func === "object" && func && typeof func.handleEvent === "function") {
					context = func;
					func = func.handleEvent;
				}
				if (typeof func === "function") {
					eventCopy = _extend({}, event);
					_dispatchCallback(func, context, [eventCopy], async);
				}
			}
		}
	};
	/**
	 * Prepares the elements for clipping/unclipping.
	 *
	 * @returns An Array of elements.
	 * @private
	 */
	var _prepClip = function(elements) {
		if (typeof elements === "string") {
			elements = [];
		}
		return typeof elements.length !== "number" ? [elements] : elements;
	};
	/**
	 * Add a `mouseover` handler function for a clipped element.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _addMouseHandlers = function(element) {
		if (!(element && element.nodeType === 1)) {
			return;
		}
		var _suppressMouseEvents = function(event) {
			if (!(event || (event = _window.event))) {
				return;
			}
			if (event._source !== "js") {
				event.stopImmediatePropagation();
				event.preventDefault();
			}
			delete event._source;
		};
		var _elementMouseOver = function(event) {
			if (!(event || (event = _window.event))) {
				return;
			}
			_suppressMouseEvents(event);
			ZeroClipboard.focus(element);
		};
		element.addEventListener("mouseover", _elementMouseOver, false);
		element.addEventListener("mouseout", _suppressMouseEvents, false);
		element.addEventListener("mouseenter", _suppressMouseEvents, false);
		element.addEventListener("mouseleave", _suppressMouseEvents, false);
		element.addEventListener("mousemove", _suppressMouseEvents, false);
		_mouseHandlers[element.zcClippingId] = {
			mouseover: _elementMouseOver,
			mouseout: _suppressMouseEvents,
			mouseenter: _suppressMouseEvents,
			mouseleave: _suppressMouseEvents,
			mousemove: _suppressMouseEvents
		};
	};
	/**
	 * Remove a `mouseover` handler function for a clipped element.
	 *
	 * @returns `undefined`
	 * @private
	 */
	var _removeMouseHandlers = function(element) {
		if (!(element && element.nodeType === 1)) {
			return;
		}
		var mouseHandlers = _mouseHandlers[element.zcClippingId];
		if (!(typeof mouseHandlers === "object" && mouseHandlers)) {
			return;
		}
		var key, val, mouseEvents = ["move", "leave", "enter", "out", "over"];
		for ( var i = 0, len = mouseEvents.length; i < len; i++) {
			key = "mouse" + mouseEvents[i];
			val = mouseHandlers[key];
			if (typeof val === "function") {
				element.removeEventListener(key, val, false);
			}
		}
		delete _mouseHandlers[element.zcClippingId];
	};
	/**
	 * Creates a new ZeroClipboard client instance.
	 * Optionally, auto-`clip` an element or collection of elements.
	 *
	 * @constructor
	 */
	ZeroClipboard._createClient = function() {
		_clientConstructor.apply(this, _args(arguments));
	};
	/**
	 * Register an event listener to the client.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.on = function() {
		return _clientOn.apply(this, _args(arguments));
	};
	/**
	 * Unregister an event handler from the client.
	 * If no `listener` function/object is provided, it will unregister all handlers for the provided `eventType`.
	 * If no `eventType` is provided, it will unregister all handlers for every event type.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.off = function() {
		return _clientOff.apply(this, _args(arguments));
	};
	/**
	 * Retrieve event listeners for an `eventType` from the client.
	 * If no `eventType` is provided, it will retrieve all listeners for every event type.
	 *
	 * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
	 */
	ZeroClipboard.prototype.handlers = function() {
		return _clientListeners.apply(this, _args(arguments));
	};
	/**
	 * Event emission receiver from the Flash object for this client's registered JavaScript event listeners.
	 *
	 * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
	 */
	ZeroClipboard.prototype.emit = function() {
		return _clientEmit.apply(this, _args(arguments));
	};
	/**
	 * Register clipboard actions for new element(s) to the client.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.clip = function() {
		return _clientClip.apply(this, _args(arguments));
	};
	/**
	 * Unregister the clipboard actions of previously registered element(s) on the page.
	 * If no elements are provided, ALL registered elements will be unregistered.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.unclip = function() {
		return _clientUnclip.apply(this, _args(arguments));
	};
	/**
	 * Get all of the elements to which this client is clipped.
	 *
	 * @returns array of clipped elements
	 */
	ZeroClipboard.prototype.elements = function() {
		return _clientElements.apply(this, _args(arguments));
	};
	/**
	 * Self-destruct and clean up everything for a single client.
	 * This will NOT destroy the embedded Flash object.
	 *
	 * @returns `undefined`
	 */
	ZeroClipboard.prototype.destroy = function() {
		return _clientDestroy.apply(this, _args(arguments));
	};
	/**
	 * Stores the pending plain text to inject into the clipboard.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.setText = function(text) {
		if (!_clientMeta[this.id]) {
			throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
		}
		ZeroClipboard.setData("text/plain", text);
		return this;
	};
	/**
	 * Stores the pending HTML text to inject into the clipboard.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.setHtml = function(html) {
		if (!_clientMeta[this.id]) {
			throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
		}
		ZeroClipboard.setData("text/html", html);
		return this;
	};
	/**
	 * Stores the pending rich text (RTF) to inject into the clipboard.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.setRichText = function(richText) {
		if (!_clientMeta[this.id]) {
			throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
		}
		ZeroClipboard.setData("application/rtf", richText);
		return this;
	};
	/**
	 * Stores the pending data to inject into the clipboard.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.setData = function() {
		if (!_clientMeta[this.id]) {
			throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
		}
		ZeroClipboard.setData.apply(this, _args(arguments));
		return this;
	};
	/**
	 * Clears the pending data to inject into the clipboard.
	 * If no `format` is provided, all pending data formats will be cleared.
	 *
	 * @returns `this`
	 */
	ZeroClipboard.prototype.clearData = function() {
		if (!_clientMeta[this.id]) {
			throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
		}
		ZeroClipboard.clearData.apply(this, _args(arguments));
		return this;
	};
	/**
	 * Gets a copy of the pending data to inject into the clipboard.
	 * If no `format` is provided, a copy of ALL pending data formats will be returned.
	 *
	 * @returns `String` or `Object`
	 */
	ZeroClipboard.prototype.getData = function() {
		if (!_clientMeta[this.id]) {
			throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
		}
		return ZeroClipboard.getData.apply(this, _args(arguments));
	};
	if (typeof define === "function" && define.amd) {
		define(function() {
			return ZeroClipboard;
		});
	} else if (typeof module === "object" && module && typeof module.exports === "object" && module.exports) {
		module.exports = ZeroClipboard;
	} else {
		window.ZeroClipboard = ZeroClipboard;
	}
})(function() {
	return this || window;
}());
/***********************************************************************************
* Add Array.indexOf                                                                *
***********************************************************************************/
(function ()
{
	if (typeof Array.prototype.indexOf !== 'function')
	{
		Array.prototype.indexOf = function(searchElement, fromIndex)
		{
			for (var i = (fromIndex || 0), j = this.length; i < j; i += 1)
			{
				if ((searchElement === undefined) || (searchElement === null))
				{
					if (this[i] === searchElement)
					{
						return i;
					}
				}
				else if (this[i] === searchElement)
				{
					return i;
				}
			}
			return -1;
		};
	}
})();
/**********************************************************************************/

(function ($,undefined)
{
	var toasting =
	{
		gettoaster : function ()
		{
			var toaster = $('#' + settings.toaster.id);

			if(toaster.length < 1)
			{
				toaster = $(settings.toaster.template).attr('id', settings.toaster.id).css(settings.toaster.css).addClass(settings.toaster['class']);

				if ((settings.stylesheet) && (!$("link[href=" + settings.stylesheet + "]").length))
				{
					$('head').appendTo('<link rel="stylesheet" href="' + settings.stylesheet + '">');
				}

				$(settings.toaster.container).append(toaster);
			}

			return toaster;
		},

		notify : function (title, message, priority)
		{
			var $toaster = this.gettoaster();
			var $toast  = $(settings.toast.template.replace('%priority%', priority)).hide().css(settings.toast.css).addClass(settings.toast['class']);
			
			$('.title', $toast).css(settings.toast.csst).html(title);
			$('.message', $toast).css(settings.toast.cssm).html(message);

			if ((settings.debug) && (window.console))
			{
				console.log(toast);
			}

			$toaster.append(settings.toast.display($toast));

			if (settings.donotdismiss.indexOf(priority) === -1)
			{
				var timeout = (typeof settings.timeout === 'number') ? settings.timeout : ((typeof settings.timeout === 'object') && (priority in settings.timeout)) ? settings.timeout[priority] : 1500;
				setTimeout(function()
				{
					settings.toast.remove($toast, function()
					{
						$toast.remove();
					});
				}, timeout);
			}
		}
	};

	var defaults =
	{
		'toaster'         :
		{
			'id'        : 'toaster',
			'container' : 'body',
			'template'  : '<div class="fluig-style-guide fluig-toast"></div>',
			'class'     : 'toaster',
			'css'       :
			{
				/*'position' : 'fixed',
				'top'      : '10px',
				'right'    : '10px',
				'width'    : '50%',
				'zIndex'   : 50000*/
			}
		},

		'toast'       :
		{
			'template' :
			'<div class="alert alert-%priority% alert-dismissible" role="alert">' +
				'<button type="button" class="close" data-dismiss="alert">' +
					'<span aria-hidden="true">&times;</span>' +
					'<span class="sr-only">Close</span>' +
				'</button>' +
				'<span style="display: block; text-align: center;"><span class="title"></span> <span class="message"></span></span>' +
			'</div>',

			'css'      : {},
			'cssm'     : {},
			'csst'     : { 'fontWeight' : 'bold' },

			'fade'     : 'slow',

			'display'    : function ($toast)
			{
				return $toast.fadeIn(settings.toast.fade);
			},

			'remove'     : function ($toast, callback)
			{
				return $toast.animate(
					{
						opacity : '0',
						padding : '0px',
						margin  : '0px',
						height  : '0px'
					},
					{
						duration : settings.toast.fade,
						complete : callback
					}
				);
			}
		},

		'debug'        : false,
		'timeout'      : 1500,
		'stylesheet'   : null,
		'donotdismiss' : []
	};

	var settings = {};
	$.extend(settings, defaults);

	$.toaster = function (options)
	{
		if (typeof options === 'object')
		{
			if ('settings' in options)
			{
				settings = $.extend(settings, options.settings);
			}

			var title    = ('title' in options) ? options.title : 'Notice';
			var message  = ('message' in options) ? options.message : null;
			var priority = ('priority' in options) ? options.priority : 'success';

			if (message !== null)
			{
				toasting.notify(title, message, priority);
			}
		}
	};

	$.toaster.reset = function ()
	{
		settings = {};
		$.extend(settings, defaults);
	};
})(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')
    this.$element.parents('.fluig-style-guide').addClass('modal-open-children')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')
    this.$element.parents('.fluig-style-guide').removeClass('modal-open-children')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.parent('.container-modal').remove();
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="fluig-style-guide modal-backdrop ' + animate + '" />')
        .appendTo(this.$body);
      
      this.$element.wrap('<div class="fluig-style-guide container-modal" />');
      
      this.modalPosition();
      this.backdropPosition();
      this.resizeModalPosition();

      this.$element.on('mousedown.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }
  
  Modal.prototype.modalPosition = function () {	  
	  var $modal = $('.fluig-style-guide.container-modal');
	  var scrollTop = $(document).scrollTop();
	  
	  $modal.css({
		  top: scrollTop
	  });
  }
  
  Modal.prototype.backdropPosition = function () {
	  var $backdrop = $('.fluig-style-guide.modal-backdrop');
	  var scrollTop = $(document).scrollTop();
	  var windowHeight = $(window).height();
	  
	  $backdrop.css({
		  height: windowHeight,
		  top: scrollTop
	  });
  }
  
  Modal.prototype.resizeModalPosition = function () {
	  var that = this;
	  $(window).on('resize', function () {
		  that.modalPosition();
		  that.backdropPosition();
	  });  
  }

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.0'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true,
    trigger: '[data-toggle="collapse"]'
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .addClass('up')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .removeClass('up')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="fluig-style-guide tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle(type)
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function (type) {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string' && type != 'popover') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    var isSvg  = window.SVGElement && el instanceof window.SVGElement

    var elRect    = el.getBoundingClientRect ? el.getBoundingClientRect() : null
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isSvg ? {} : {
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }
  
  $(window).on('load', function () {
	  $('.fluig-style-guide').tooltip({selector:'[data-toggle="tooltip"]'});
  })
}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="fluig-style-guide popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getPopoverTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }
  
  Popover.prototype.getPopoverTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options

	    title = $e.attr('data-popover-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

	    return title
	  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/**
 * Implements popover hover
 * 
 */

var originalLeave = $.fn.popover.Constructor.prototype.leave;
$.fn.popover.Constructor.prototype.leave = function(obj){
  var self = obj instanceof this.constructor ?
    obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
  var container, timeout;

  originalLeave.call(this, obj);

  if(obj.currentTarget) {
    container = $(obj.currentTarget).siblings('.popover')
    timeout = self.timeout;
    container.one('mouseenter', function(){
      //We entered the actual popover – call off the dogs
      clearTimeout(timeout);
      //Let's monitor popover content instead
      container.one('mouseleave', function(){
        $.fn.popover.Constructor.prototype.leave.call(self, self);
      });
    })
  }
};

/*
Este plugin serve para disparar um evento quando um scroll chega ao fim.
Ele deve ser aplicado a um <div> e o dev decide que evento será disparado ao chegar o final.

Exemplo de uso:

$('#meu_div').onScrollEnd(function() {
	console.log('O scroll chegou ao fim do div');
});

 */
(function($) {
	$.fn.onScrollEnd = function(cb) {

		if (this[0] == window || this[0] == document.body) {
			$(window).scroll(function() {
				if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50) {
					cb.call(this);
				}
			});
		} else {
			var padding = parseInt(this.css('padding-top'), 10) + parseInt(this.css('padding-bottom'), 10);
			this.scroll(function() {
				var igual = ($(this).scrollTop() + $(this).height()) >= (this.scrollHeight - padding - 1);
				if (igual) {
					cb.call(this);
				}
			});
		}
	}
})(jQuery);
var FLUIGC = (function(FluigModal, $, fluigTemplates) {
	var templates = {};
	FluigModal.modal = function(settings, callback) {
		var baseConfig = {
			title: 'Style guide',
			content: '',
			formModal: false,
			actions: null,
			id: 'fluig-modal',
			size: '',
			isOpenModal: false
		}, baseAction = {
			buttonType: 'button',
			classType: 'btn-default',
			autoClose: false,
			actionClose: false,
			bind: null,
			label: ''
		}, config = Object.create(baseConfig), tlpName = 'template_modal_basic', template = '', data = {}, isMobile = FLUIGC.utilities
			.checkDevice().isMobile;

		function init() {
			$.extend(config, settings);

			if (fluigTemplates) {
				renderTemplates();
				createModal();
			} else {
				throw new Error('Modal component: FLUIGCTemplates not found.');
			}
		}

		function renderTemplates() {
			renderTemplate('template_modal_basic');
		}

		function renderTemplate(tlpName) {
			templates[tlpName] = $(fluigTemplates["modal-basic"]).html();
		}

		function createModal() {
			var isObject = Object.prototype.toString.call(config.content) === "[object Object]", content = config.content, modalBodyHeight, widgetLoading, modalContent, modalBody, modal;

			data = generateActions(config);
			data.title = config.title;
			data.content = isObject ? '' : content;
			data.id = config.id;
			data.formModal = config.formModal;
			data.hasActions = data.actions.length > 0;
			data.full = '';
			data.isMobile = isMobile;

			// garante que sempre seja aberto o modal full no mobile.
			if (isMobile) {
				config.size === 'full';
			}

			if (config.size === 'large') {
				data.size = 'modal-lg';
			}

			if (config.size === 'small') {
				data.size = 'modal-sm';
			}

			if (config.size === 'full') {
				data.size = 'modal-full';
				data.full = 'full';
			}

			// incluí o template do modal no body 
			modalContent = Mustache.render(templates.template_modal_basic, data);

			$('body').append(modalContent);

			modal = showModal();

			config.isOpenModal = true;

			applyShowHideEvents(modal);

			if (isObject) {
				modalBody = $(modal).find(".modal-body");

				$(modalBody).addClass('loading');

				widgetLoading = FLUIGC.loading(modalBody);

				widgetLoading.show();

				getWidget({
					appCode: content.widgetCode,
					fileNameFtl: content.ftl,
					content: content.data,
				}, function(err, widgetContent) {
					if (err) {
						// para garantir o legado foi mantido a maneira antiga de enviar o callback
						sendCallback(content.callback, err, null);

						// maneira padrão do produto de callback para componentes
						sendCallback(callback, err, null);
						config.isOpenModal = false;
					} else {
						data.content = $(widgetContent)[0].outerHTML;

						$(modal).find(".modal-body").html(data.content);

						$(modalBody).removeClass('loading');

						// para garantir o legado foi mantido a maneira antiga de enviar o callback
						sendCallback(content.callback, null, {
							status: 200,
							content: widgetContent
						});

						// maneira padrão do produto de callback para componentes
						sendCallback(callback, null, widgetContent);
					}

					// remove o loading independente do resultado do REST
					widgetLoading.hide();
				});
			} else {
				// maneira padrão do produto de callback para componentes
				sendCallback(callback, null, content);
			}
			
			// calcula a altura máxima do modal.
			adjustModalHeight();
			
			// escuta a modança de orientação do mobile para recalcular a altura do modal.
			if(isMobile) {
				$(window).on('orientationchange',function(){
					adjustModalHeight();
				});
			}
		}

		function applyShowHideEvents(selector) {
			$(document).one('hide.bs.modal', selector, function() {
				config.isOpenModal = false;
			}).one('hidden.bs.modal', selector, function() {
				config.isOpenModal = false;
			}).one('show.bs.modal', selector, function() {
				config.isOpenModal = true;
			}).one('shown.bs.modal', selector, function() {
				config.isOpenModal = true;
			});
		}

		function adjustModalHeight() {
			var maxHeight = isMobile ? ($(window).outerHeight() * .98 - 55) : ($(window).outerHeight() - 220);

			if (isMobile) {
				$('#' + config.id).css('width', '98%');
			}

			// insere scroll no modal-body, se o conteúdo for maior do que a altura da tela.
			$('#' + config.id).find('.modal-body').css({
				'overflow': 'auto',
				'max-height': maxHeight,
				'margin': '0px auto'
			});
		}

		function sendCallback(configCallback, errorData, successData) {
			if (configCallback && Object.prototype.toString.call(configCallback) === '[object Function]') {
				configCallback(errorData, successData);
			}
		}

		function generateActions(modalConfig) {
			var actions = modalConfig.actions || [], newActions = [], action;

			for (var i = 0; i < actions.length; i++) {
				action = Object.create(baseAction);
				$.extend(action, actions[i]);
				if (action.actionClose) {
					action.autoClose = false;
					modalConfig.actionClose = [{
						bind: action.bind
					}];
				}
				newActions.push(action);
			}

			//Sempre o primeiro botão tem a classe btn-primary caso o usuário
			//não passe nenhuma outra classe.
			if (actions.length && !settings.actions[0].classType) {
				newActions[0].classType = 'btn-primary';
			}

			//Se o modal for do tipo form, o primeiro botão vira submit e atribui o
			//bind dele para a tag form.
			if (actions.length && modalConfig.formModal) {
				newActions[0].buttonType = 'submit';
				modalConfig.formBind = newActions[0].bind;
				newActions[0].bind = '';
			}

			modalConfig.actions = newActions;

			return modalConfig;
		}

		function showModal() {
			var body = $('body');
			body.css('overflow', 'hidden');
			body.on('hide.bs.modal', function() {
				body.css('overflow', 'auto');
			});
			return $('#' + config.id).modal({
				show: true,
				keyboard: false
			});
		}

		function getWidget(options, callback) {
			if (window.WCMAPI) {
				WCMAPI.convertFtlAsync(options.appCode, options.fileNameFtl, options.content, function(content) {
					callback(null, content);
				}, function(err) {
					callback(err);
				});

			} else {
				throw ('Rendering of widgets available only on Fluig pages.');
			}
		}

		function isOpen() {
			return config.isOpenModal;
		}

		init();

		return {
			remove: function() {
				$('#' + config.id).modal('hide');
				return this;
			},
			isOpen: isOpen
		};
	};

	return FluigModal;

})(window.FLUIGC || {}, jQuery, FLUIGCTemplates);

var FLUIGC = (function(FluigToast, $) {
	FluigToast.toast = function(settings) {
		var basicConfig = {
			title: null,
			message: 'message',
			type: 'success',
			timeout: 4000
		}, config = Object.create(basicConfig), data = {}, slow = 6000, fast = 2000;

		$.extend(config, settings);

		if (config.timeout === 'slow') {
			config.timeout = slow;
		}

		if (config.timeout === 'fast') {
			config.timeout = fast;
		}

		createToast();

		function createToast() {
			data.title = config.title;
			data.message = config.message;
			data.type = config.type;
			data.timeout = config.timeout;

			$.toaster({
				priority: config.type,
				title: config.title,
				message: config.message,
				settings: {
					'timeout': data.timeout,
					'donotdismiss': ['danger']
				}
			});
		}

		function hideToast() {
			var toastClass = '.fluig-toast';

			$(toastClass).stop(true, true).fadeOut("fast", function() {
				$(this).remove();
			});
		};
	};

	return FluigToast;

})(window.FLUIGC || {}, jQuery);

/*
 * Cropper v0.5.5
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright 2014 Fengyuan Chen
 * Released under the MIT license
 */

(function(factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as anonymous module.
		define(["jquery"], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
})
	(function($) {

		"use strict";

		var $window = $(window), $document = $(document),

		// RegExps
		regexpDirection = /^(\+|\*|e|n|w|s|ne|nw|sw|se)$/i, regexpOption = /^(x|y|width|height)$/i,

		// Classes
		classHidden = "fluig-style-guide cropper-hidden", classInvisible = "fluig-style-guide cropper-invisible",

		// Events
		eventDragStart = "mousedown touchstart", eventDragMove = "mousemove touchmove", eventDragEnd = "mouseup mouseleave touchend touchleave touchcancel", eventBuild = "build.cropper", eventBuilt = "built.cropper", eventRender = "render.cropper", eventResize = "resize.cropper",

		// Functions
		isNumber = function(n) {
			return typeof n === "number";
		},

		// Constructor
		Cropper = function(element, options) {
			this.$element = $(element);
			this.setDefaults(options);
			this.init();
		},

		// Others
		round = Math.round, min = Math.min, max = Math.max, abs = Math.abs, num = parseFloat;

		Cropper.prototype = {
			constructor: Cropper,

			setDefaults: function(options) {
				options = $.extend({}, Cropper.defaults, $.isPlainObject(options) ? options : {});

				$.each(options, function(i, n) {
					switch (i) {
						case "moveable":
							options.movable = n;
							break;

						case "resizeable":
							options.resizable = n;
							break;

						case "aspectRatio":
							options[i] = abs(num(n)) || NaN; // 0 -> NaN
							break;

						case "minWidth":
						case "minHeight":
							options[i] = abs(num(n)) || 0; // NaN -> 0
							break;

						case "maxWidth":
						case "maxHeight":
							options[i] = abs(num(n)) || Infinity; // NaN -> Infinity
							break;

						// No default
					}
				});

				this.defaults = options;
			},

			init: function() {
				var _this = this, $element = this.$element, element = $element[0], image = {}, src, $clone;

				if ($element.is("img")) {
					src = $element.attr("src");
				} else if ($element.is("canvas") && element.getContext) {
					src = element.toDataURL();
				}

				if (!src) {
					return;
				}

				this.$clone && this.$clone.remove();
				this.$clone = $clone = $('<img src="' + src + '">');

				$clone.one("load", function() {
					image.naturalWidth = this.naturalWidth || $clone.width();
					image.naturalHeight = this.naturalHeight || $clone.height();
					image.aspectRatio = image.naturalWidth / image.naturalHeight;

					_this.active = true;
					_this.src = src;
					_this.image = image;
					_this.build();
				});

				// Hide and prepend the clone iamge to the document body (Don't append to).
				$clone.addClass(classInvisible).prependTo("body");
			},

			build: function() {
				var $element = this.$element, defaults = this.defaults, buildEvent, $cropper;

				if (this.built) {
					this.unbuild();
				}

				buildEvent = $.Event(eventBuild);
				$element.trigger(buildEvent);

				if (buildEvent.isDefaultPrevented()) {
					return;
				}

				// Create cropper elements
				this.$cropper = ($cropper = $(Cropper.template));

				// Hide the original image
				$element.addClass(classHidden);

				// Show and prepend the clone iamge to the cropper
				this.$clone.removeClass(classInvisible).prependTo($cropper);

				this.$container = $element.parent();
				this.$container.append($cropper);

				this.$modal = $cropper.find(".cropper-modal");
				this.$canvas = $cropper.find(".cropper-canvas");
				this.$dragger = $cropper.find(".cropper-dragger");
				this.$viewer = $cropper.find(".cropper-viewer");

				// Init default settings
				this.cropped = true;

				if (!defaults.autoCrop) {
					this.$dragger.addClass(classHidden);
					this.cropped = false;
				}

				this.$modal.toggleClass(classHidden, !defaults.modal);
				!defaults.dragCrop && this.$canvas.addClass(classHidden);
				!defaults.movable && this.$dragger.find(".cropper-face").addClass(classHidden);
				!defaults.resizable && this.$dragger.find(".cropper-line, .cropper-point").addClass(classHidden);

				this.$dragScope = defaults.multiple ? this.$cropper : $document;

				this.addListener();
				this.initPreview();

				this.built = true;
				this.update();
				$element.trigger(eventBuilt);
			},

			unbuild: function() {
				if (!this.built) {
					return;
				}

				this.built = false;
				this.removeListener();

				this.$preview.empty();
				this.$preview = null;

				this.$dragger = null;
				this.$canvas = null;
				this.$modal = null;
				this.$container = null;

				this.$cropper.remove();
				this.$cropper = null;
			},

			update: function(data) {
				this.initContainer();
				this.initCropper();
				this.initDragger();

				if (data) {
					this.setData(data, true);
				} else {
					this.setData(this.defaults.data);
				}
			},

			resize: function() {
				clearTimeout(this.resizing);
				this.resizing = setTimeout($.proxy(this.update, this, this.getData()), 200);
			},

			reset: function(deep) {
				if (!this.cropped) {
					return;
				}

				if (deep) {
					this.defaults.data = {};
				}

				this.dragger = this.cloneDragger();
				this.setData(this.defaults.data);
			},

			release: function() {
				if (!this.cropped) {
					return;
				}

				this.cropped = false;

				this.defaults.done({
					x: 0,
					y: 0,
					width: 0,
					height: 0
				});

				this.$dragger.addClass(classHidden);
			},

			destroy: function() {
				var $element = this.$element;

				if (!this.active) {
					return;
				}

				this.unbuild();
				$element.removeClass(classHidden);
				$element.removeData("cropper");
				$element = null;
			},

			preview: function() {
				var cropper = this.cropper, dragger = this.dragger;

				this.$viewer.find("img").css({
					height: round(cropper.height),
					marginLeft: -round(dragger.left),
					marginTop: -round(dragger.top),
					width: round(cropper.width)
				});

				this.$preview.each(function() {
					var $this = $(this), ratio = $this.width() / dragger.width, styles = {
						height: round(cropper.height * ratio),
						marginLeft: -round(dragger.left * ratio),
						marginTop: -round(dragger.top * ratio),
						width: round(cropper.width * ratio)
					};

					$this.find("img").css(styles);
				});
			},

			addListener: function() {
				var defaults = this.defaults;

				this.$element.on(eventBuild, defaults.build).on(eventBuilt, defaults.built).on(eventRender,
					defaults.render);

				this.$cropper.on(eventDragStart, $.proxy(this.dragstart, this));

				this.$dragScope.on(eventDragMove, $.proxy(this.dragmove, this)).on(eventDragEnd,
					$.proxy(this.dragend, this));

				$window.on(eventResize, $.proxy(this.resize, this));
			},

			removeListener: function() {
				var defaults = this.defaults;

				this.$element.off(eventBuild, defaults.build).off(eventBuilt, defaults.built).off(eventRender,
					defaults.render);

				this.$cropper.off(eventDragStart, this.dragstart);

				this.$dragScope.off(eventDragMove, this.dragmove).on(eventDragEnd, this.dragend);

				$window.off(eventResize, this.resize);
			},

			initPreview: function() {
				var img = '<img src="' + this.src + '">';

				this.$preview = $(this.defaults.preview);
				this.$preview.html(img);
				this.$viewer.html(img);
			},

			initContainer: function() {
				var $container = this.$container;

				this.container = {
					width: $container.width(),
					height: $container.height()
				};
			},

			initCropper: function() {
				var container = this.container, image = this.image, cropper;

				if (((image.naturalWidth * container.height / image.naturalHeight) - container.width) >= 0) {
					cropper = {
						height: container.width / image.aspectRatio,
						width: container.width,
						left: 0
					};

					cropper.top = (container.height - cropper.height) / 2;
				} else {
					cropper = {
						height: container.height,
						width: container.height * image.aspectRatio,
						top: 0
					};

					cropper.left = (container.width - cropper.width) / 2;
				}

				image.ratio = cropper.width / image.naturalWidth;
				image.height = cropper.height;
				image.width = cropper.width;

				this.$cropper.css({
					height: round(cropper.height),
					left: round(cropper.left),
					top: round(cropper.top),
					width: round(cropper.width)
				});

				this.cropper = cropper;
			},

			initDragger: function() {
				var defaults = this.defaults, cropper = this.cropper,
				// If not set, use the original aspect ratio of the image.
				aspectRatio = defaults.aspectRatio || this.image.aspectRatio, ratio = this.image.ratio, dragger;

				if (((cropper.height * aspectRatio) - cropper.width) >= 0) {
					dragger = {
						height: cropper.width / aspectRatio,
						width: cropper.width,
						left: 0,
						top: (cropper.height - (cropper.width / aspectRatio)) / 2,
						maxWidth: cropper.width,
						maxHeight: cropper.width / aspectRatio
					};
				} else {
					dragger = {
						height: cropper.height,
						width: cropper.height * aspectRatio,
						left: (cropper.width - (cropper.height * aspectRatio)) / 2,
						top: 0,
						maxWidth: cropper.height * aspectRatio,
						maxHeight: cropper.height
					};
				}

				dragger.minWidth = 0;
				dragger.minHeight = 0;

				if (defaults.aspectRatio) {
					if (isFinite(defaults.maxWidth)) {
						dragger.maxWidth = min(dragger.maxWidth, defaults.maxWidth * ratio);
						dragger.maxHeight = dragger.maxWidth / aspectRatio;
					} else if (isFinite(defaults.maxHeight)) {
						dragger.maxHeight = min(dragger.maxHeight, defaults.maxHeight * ratio);
						dragger.maxWidth = dragger.maxHeight * aspectRatio;
					}

					if (defaults.minWidth > 0) {
						dragger.minWidth = max(0, defaults.minWidth * ratio);
						dragger.minHeight = dragger.minWidth / aspectRatio;
					} else if (defaults.minHeight > 0) {
						dragger.minHeight = max(0, defaults.minHeight * ratio);
						dragger.minWidth = dragger.minHeight * aspectRatio;
					}
				} else {
					dragger.maxWidth = min(dragger.maxWidth, defaults.maxWidth * ratio);
					dragger.maxHeight = min(dragger.maxHeight, defaults.maxHeight * ratio);
					dragger.minWidth = max(0, defaults.minWidth * ratio);
					dragger.minHeight = max(0, defaults.minHeight * ratio);
				}

				// minWidth can't be greater than maxWidth, and minHeight too.
				dragger.minWidth = min(dragger.maxWidth, dragger.minWidth);
				dragger.minHeight = min(dragger.maxHeight, dragger.minHeight);

				// Center the dragger by default
				dragger.height *= 0.8;
				dragger.width *= 0.8;
				dragger.left = (cropper.width - dragger.width) / 2;
				dragger.top = (cropper.height - dragger.height) / 2;

				this.defaultDragger = dragger;
				this.dragger = this.cloneDragger();
				this.draggerLeft = dragger.left;
				this.draggerTop = dragger.top;
			},

			cloneDragger: function() {
				return $.extend({}, this.defaultDragger);
			},

			renderDragger: function() {
				var dragger = this.dragger, cropper = this.cropper, left = this.draggerLeft, top = this.draggerTop, maxLeft, maxTop, renderEvent;

				if (dragger.width > dragger.maxWidth) {
					dragger.width = dragger.maxWidth;
					dragger.left = left;
				} else if (dragger.width < dragger.minWidth) {
					dragger.width = dragger.minWidth;
					dragger.left = left;
				}

				if (dragger.height > dragger.maxHeight) {
					dragger.height = dragger.maxHeight;
					dragger.top = top;
				} else if (dragger.height < dragger.minHeight) {
					dragger.height = dragger.minHeight;
					dragger.top = top;
				}

				maxLeft = cropper.width - dragger.width;
				maxTop = cropper.height - dragger.height;
				dragger.left = dragger.left > maxLeft ? maxLeft : dragger.left < 0 ? 0 : dragger.left;
				dragger.top = dragger.top > maxTop ? maxTop : dragger.top < 0 ? 0 : dragger.top;

				// Trigger the render event
				renderEvent = $.Event(eventRender);
				this.$element.trigger(renderEvent);

				if (renderEvent.isDefaultPrevented()) {
					return;
				}

				// Re-render the dragger
				this.dragger = dragger;
				this.draggerLeft = dragger.left;
				this.draggerTop = dragger.top;
				this.defaults.done(this.getData());

				this.$dragger.css({
					height: round(dragger.height),
					left: round(dragger.left),
					top: round(dragger.top),
					width: round(dragger.width)
				});

				this.preview();
			},

			setData: function(data, once) {
				var cropper = this.cropper, dragger = this.dragger, aspectRatio = this.defaults.aspectRatio;

				if (!this.built || typeof data === "undefined") {
					return;
				}

				if (data === null || $.isEmptyObject(data)) {
					dragger = this.cloneDragger();
				}

				if ($.isPlainObject(data) && !$.isEmptyObject(data)) {

					if (!once) {
						this.defaults.data = data;
					}

					data = this.transformData(data);

					if (isNumber(data.x) && data.x <= cropper.width) {
						dragger.left = data.x;
					}

					if (isNumber(data.y) && data.y <= cropper.height) {
						dragger.top = data.y;
					}

					if (aspectRatio) {
						if (isNumber(data.width) && data.width <= dragger.maxWidth && data.width >= dragger.minWidth) {
							dragger.width = data.width;
							dragger.height = dragger.width / aspectRatio;
						} else if (isNumber(data.height) && data.height <= dragger.maxHeight
							&& data.height >= dragger.minHeight) {
							dragger.height = data.height;
							dragger.width = dragger.height * aspectRatio;
						}
					} else {
						if (isNumber(data.width) && data.width <= dragger.maxWidth && data.width >= dragger.minWidth) {
							dragger.width = data.width;
						}

						if (isNumber(data.height) && data.height <= dragger.maxHeight
							&& data.height >= dragger.minHeight) {
							dragger.height = data.height;
						}
					}
				}

				this.dragger = dragger;
				this.renderDragger();
			},

			getData: function() {
				var dragger = this.dragger, data = {};

				if (this.built) {
					data = {
						x: dragger.left,
						y: dragger.top,
						width: dragger.width,
						height: dragger.height
					};

					data = this.transformData(data, true);
				}

				return data;
			},

			transformData: function(data, reverse) {
				var ratio = this.image.ratio, result = {};

				$.each(data, function(i, n) {
					n = num(n);

					if (regexpOption.test(i) && !isNaN(n)) {
						// Not round when set data.
						result[i] = reverse ? round(n / ratio) : n * ratio;
					}
				});

				return result;
			},

			setAspectRatio: function(aspectRatio) {
				var freeRatio = aspectRatio === "auto";

				aspectRatio = num(aspectRatio);

				if (freeRatio || (!isNaN(aspectRatio) && aspectRatio > 0)) {
					this.defaults.aspectRatio = freeRatio ? NaN : aspectRatio;

					if (this.built) {
						this.initDragger();
						this.renderDragger();
					}
				}
			},

			setImgSrc: function(src) {
				var _this = this, $element = this.$element, element = $element[0], context;

				if (src && src !== this.src) {
					if ($element.is("img")) {
						$element.attr("src", src);
						this.init();
					} else if ($element.is("canvas") && element.getContext) {
						context = element.getContext("2d");

						$('<img src="' + src + '">').one("load", function() {
							element.width = this.width;
							element.height = this.height;
							context.clearRect(0, 0, element.width, element.height);
							context.drawImage(this, 0, 0);
							_this.init();
						});
					}
				}
			},

			getImgInfo: function() {
				return this.image || {};
			},

			dragstart: function(event) {
				var touches = (event.originalEvent || event).touches, e = event, direction;

				if (touches) {
					if (touches.length > 1) {
						return;
					}

					e = touches[0];
					this.touchId = e.identifier;
				}

				direction = $(e.target).data("direction");

				if (regexpDirection.test(direction)) {
					event.preventDefault();

					this.direction = direction;
					this.startX = e.pageX;
					this.startY = e.pageY;

					if (direction === "+") {
						this.cropping = true;
						this.$modal.removeClass(classHidden);
					}
				}
			},

			dragmove: function(event) {
				var touches = (event.originalEvent || event).changedTouches, e = event;

				if (touches) {
					if (touches.length > 1) {
						return;
					}

					e = touches[0];

					if (e.identifier !== this.touchId) {
						return;
					}
				}

				if (this.direction) {
					event.preventDefault();

					this.endX = e.pageX;
					this.endY = e.pageY;
					this.dragging();
				}
			},

			dragend: function(event) {
				var touches = (event.originalEvent || event).changedTouches, e = event;

				if (touches) {
					if (touches.length > 1) {
						return;
					}

					e = touches[0];

					if (e.identifier !== this.touchId) {
						return;
					}
				}

				if (this.direction) {
					event.preventDefault();

					if (this.cropping) {
						this.cropping = false;
						this.$modal.toggleClass(classHidden, !this.defaults.modal);
					}

					this.direction = "";
				}
			},

			dragging: function() {
				var direction = this.direction, cropper = this.cropper, maxWidth = cropper.width, maxHeight = cropper.height, dragger = this.dragger, width = dragger.width, height = dragger.height, left = dragger.left, top = dragger.top, right = left
					+ width, bottom = top + height, renderable = true, aspectRatio = this.defaults.aspectRatio, range = {
					x: this.endX - this.startX,
					y: this.endY - this.startY
				}, offset;

				if (aspectRatio) {
					range.X = range.y * aspectRatio;
					range.Y = range.x / aspectRatio;
				}

				switch (direction) {

					// cropping
					case "+":
						if (range.x && range.y) {
							offset = this.$cropper.offset();
							left = this.startX - offset.left;
							top = this.startY - offset.top;
							width = dragger.minWidth;
							height = dragger.minHeight;

							if (range.x > 0) {
								if (range.y > 0) {
									direction = "se";
								} else {
									direction = "ne";
									top -= height;
								}
							} else {
								if (range.y > 0) {
									direction = "sw";
									left -= width;
								} else {
									direction = "nw";
									left -= width;
									top -= height;
								}
							}

							// Show the dragger if is hidden
							if (!this.cropped) {
								this.cropped = true;
								this.$dragger.removeClass(classHidden);
							}
						}

						break;

					// moving
					case "*":
						left += range.x;
						top += range.y;

						break;

					// resizing
					case "e":
						if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= 0 || bottom >= maxHeight))) {
							renderable = false;
							break;
						}

						width += range.x;

						if (aspectRatio) {
							height = width / aspectRatio;
							top -= range.Y / 2;
						}

						if (width < 0) {
							direction = "w";
							width = 0;
						}

						break;

					case "n":
						if (range.y <= 0 && (top <= 0 || aspectRatio && (left <= 0 || right >= maxWidth))) {
							renderable = false;
							break;
						}

						height -= range.y;
						top += range.y;

						if (aspectRatio) {
							width = height * aspectRatio;
							left += range.X / 2;
						}

						if (height < 0) {
							direction = "s";
							height = 0;
						}

						break;

					case "w":
						if (range.x <= 0 && (left <= 0 || aspectRatio && (top <= 0 || bottom >= maxHeight))) {
							renderable = false;
							break;
						}

						width -= range.x;
						left += range.x;

						if (aspectRatio) {
							height = width / aspectRatio;
							top += range.Y / 2;
						}

						if (width < 0) {
							direction = "e";
							width = 0;
						}

						break;

					case "s":
						if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= 0 || right >= maxWidth))) {
							renderable = false;
							break;
						}

						height += range.y;

						if (aspectRatio) {
							width = height * aspectRatio;
							left -= range.X / 2;
						}

						if (height < 0) {
							direction = "n";
							height = 0;
						}

						break;

					case "ne":
						if (range.y <= 0 && (top <= 0 || right >= maxWidth)) {
							renderable = false;
							break;
						}

						height -= range.y;
						top += range.y;

						if (aspectRatio) {
							width = height * aspectRatio;
						} else {
							width += range.x;
						}

						if (height < 0) {
							direction = "sw";
							height = 0;
							width = 0;
						}

						break;

					case "nw":
						if (range.y <= 0 && (top <= 0 || left <= 0)) {
							renderable = false;
							break;
						}

						height -= range.y;
						top += range.y;

						if (aspectRatio) {
							width = height * aspectRatio;
							left += range.X;
						} else {
							width -= range.x;
							left += range.x;
						}

						if (height < 0) {
							direction = "se";
							height = 0;
							width = 0;
						}

						break;

					case "sw":
						if (range.x <= 0 && (left <= 0 || bottom >= maxHeight)) {
							renderable = false;
							break;
						}

						width -= range.x;
						left += range.x;

						if (aspectRatio) {
							height = width / aspectRatio;
						} else {
							height += range.y;
						}

						if (width < 0) {
							direction = "ne";
							height = 0;
							width = 0;
						}

						break;

					case "se":
						if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
							renderable = false;
							break;
						}

						width += range.x;

						if (aspectRatio) {
							height = width / aspectRatio;
						} else {
							height += range.y;
						}

						if (width < 0) {
							direction = "nw";
							height = 0;
							width = 0;
						}

						break;

					// No default
				}

				if (renderable) {
					dragger.width = width;
					dragger.height = height;
					dragger.left = left;
					dragger.top = top;
					this.direction = direction;

					this.renderDragger();
				}

				// Override
				this.startX = this.endX;
				this.startY = this.endY;
			}
		};

		// Use the string compressor: Strmin (https://github.com/fengyuanchen/strmin)
		Cropper.template = (function(a, b) {
			b = b.split(",");
			return a.replace(/\d+/g, function(c) {
				return b[c];
			});
		})
			(
				'<0 6="5-container"><0 6="5-modal"></0><0 6="5-canvas" 3-2="+"></0><0 6="5-dragger"><1 6="5-viewer"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-face" 3-2="*"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>',
				"div,span,direction,data,point,cropper,class,line,dashed");

		/* Template source:
		<div class="cropper-container">
		  <div class="cropper-modal"></div>
		  <div class="cropper-canvas" data-direction="+"></div>
		  <div class="cropper-dragger">
		    <span class="cropper-viewer"></span>
		    <span class="cropper-dashed dashed-h"></span>
		    <span class="cropper-dashed dashed-v"></span>
		    <span class="cropper-face" data-direction="*"></span>
		    <span class="cropper-line line-e" data-direction="e"></span>
		    <span class="cropper-line line-n" data-direction="n"></span>
		    <span class="cropper-line line-w" data-direction="w"></span>
		    <span class="cropper-line line-s" data-direction="s"></span>
		    <span class="cropper-point point-e" data-direction="e"></span>
		    <span class="cropper-point point-n" data-direction="n"></span>
		    <span class="cropper-point point-w" data-direction="w"></span>
		    <span class="cropper-point point-s" data-direction="s"></span>
		    <span class="cropper-point point-ne" data-direction="ne"></span>
		    <span class="cropper-point point-nw" data-direction="nw"></span>
		    <span class="cropper-point point-sw" data-direction="sw"></span>
		    <span class="cropper-point point-se" data-direction="se"></span>
		  </div>
		</div>
		 */

		Cropper.defaults = {
			// Basic
			aspectRatio: "auto",
			data: {}, // Allow options: x, y, width, height
			done: $.noop,
			// preview: undefined,

			// Toggles
			multiple: false,
			autoCrop: true,
			dragCrop: true,
			modal: true,
			movable: true,
			resizable: true,

			// Dimensions
			minWidth: 0,
			minHeight: 0,
			maxWidth: Infinity,
			maxHeight: Infinity
		};

		Cropper.setDefaults = function(options) {
			$.extend(Cropper.defaults, options);
		};

		// Reference the old cropper
		Cropper.other = $.fn.cropper;

		// Register as jQuery plugin
		$.fn.cropper = function(options, settings) {
			var result = this;

			this.each(function() {
				var $this = $(this), data = $this.data("cropper");

				if (!data) {
					$this.data("cropper", (data = new Cropper(this, options)));
				}

				if (typeof options === "string" && $.isFunction(data[options])) {
					result = data[options](settings);
				}
			});

			return (typeof result !== "undefined" ? result : this);
		};

		$.fn.cropper.constructor = Cropper;
		$.fn.cropper.setDefaults = Cropper.setDefaults;

		// No conflict
		$.fn.cropper.noConflict = function() {
			$.fn.cropper = Cropper.other;
			return this;
		};
	});

var FLUIGC = (function(fluigicons, $) {
	fluigicons.icons = function() {
		var iconsMap = {
			'fluigicon-user' : true,
			'fluigicon-adduser' : true,
			'fluigicon-removeuser' : true,
			'fluigicon-comment' : true,
			'fluigicon-discuss' : true,
			'fluigicon-users' : true,
			'fluigicon-addusers' : true,
			'fluigicon-removeusers' : true,
			'fluigicon-group' : true,
			'fluigicon-star-empty' : true,
			'fluigicon-star' : true,
			'fluigicon-thumbs-up' : true,
			'fluigicon-thumbs-down' : true,
			'fluigicon-link' : true,
			'fluigicon-time' : true,
			'fluigicon-calendar' : true,
			'fluigicon-bell' : true,
			'fluigicon-paperclip' : true,
			'fluigicon-flag' : true,
			'fluigicon-tag' : true,
			'fluigicon-certificate' : true,
			'fluigicon-glass' : true,
			'fluigicon-book' : true,
			'fluigicon-th' : true,
			'fluigicon-th' : true,
			'fluigicon-rss' : true,
			'fluigicon-home' : true,
			'fluigicon-money' : true,
			'fluigicon-shopping-cart' : true,
			'fluigicon-cog' : true,
			'fluigicon-filter' : true,
			'fluigicon-phone' : true,
			'fluigicon-cloud' : true,
			'fluigicon-cloud-download' : true,
			'fluigicon-envelope' : true,
			'fluigicon-envelopes' : true,
			'fluigicon-volumes' : true,
			'fluigicon-hammer' : true,
			'fluigicon-light-bulb' : true,
			'fluigicon-map-marker' : true,
			'fluigicon-lock' : true,
			'fluigicon-unlock' : true,
			'fluigicon-key' : true,
			'fluigicon-tint' : true,
			'fluigicon-ellipsis' : true,
			'fluigicon-globe' : true,
			'fluigicon-arroba' : true,
			'fluigicon-sd-video' : true,
			'fluigicon-videos' : true,
			'fluigicon-camera' : true,
			'fluigicon-facetime-video' : true,
			'fluigicon-picture' : true,
			'fluigicon-pictures' : true,
			'fluigicon-file' : true,
			'fluigicon-form' : true,
			'fluigicon-files' : true,
			'fluigicon-file-upload' : true,
			'fluigicon-file-download' : true,
			'fluigicon-folder-open' : true,
			'fluigicon-folder-close' : true,
			'fluigicon-trash' : true,
			'fluigicon-search' : true,
			'fluigicon-zoom-in' : true,
			'fluigicon-zoom-out' : true,
			'fluigicon-cut' : true,
			'fluigicon-copy' : true,
			'fluigicon-paste' : true,
			'fluigicon-pencil' : true,
			'fluigicon-print' : true,
			'fluigicon-bullhorn' : true,
			'fluigicon-eye-open' : true,
			'fluigicon-cone' : true,
			'fluigicon-tree-view' : true,
			'fluigicon-library' : true,
			'fluigicon-transfer' : true,
			'fluigicon-app' : true,
			'fluigicon-process' : true,
			'fluigicon-stats' : true,
			'fluigicon-stats-download' : true,
			'fluigicon-info-sign' : true,
			'fluigicon-question-sign' : true,
			'fluigicon-organogram' : true,
			'fluigicon-exclamation-sign' : true,
			'fluigicon-warning-sign' : true,
			'fluigicon-minimize' : true,
			'fluigicon-maximize' : true,
			'fluigicon-plus-sign' : true,
			'fluigicon-minus-sign' : true,
			'fluigicon-remove-sign' : true,
			'fluigicon-plus-circle' : true,
			'fluigicon-minus-circle' : true,
			'fluigicon-remove-circle' : true,
			'fluigicon-remove' : true,
			'fluigicon-circle-arrow-right' : true,
			'fluigicon-circle-arrow-left' : true,
			'fluigicon-circle-arrow-up' : true,
			'fluigicon-circle-arrow-down' : true,
			'fluigicon-circle-arrow-top-left' : true,
			'fluigicon-circle-arrow-top-right' : true,
			'fluigicon-circle-arrow-bottom-right' : true,
			'fluigicon-circle-arrow-bottom-left' : true,
			'fluigicon-plus' : true,
			'fluigicon-chevron-left' : true,
			'fluigicon-chevron-right' : true,
			'fluigicon-chevron-up' : true,
			'fluigicon-chevron-down' : true,
			'fluigicon-share' : true,
			'fluigicon-file-doc' : true,
			'fluigicon-file-xls' : true,
			'fluigicon-file-ppt' : true,
			'fluigicon-file-pdf' : true,
			'fluigicon-file-html' : true,
			'fluigicon-file-xml' : true,
			'fluigicon-file-mov' : true,
			'fluigicon-file-wmv' : true,
			'fluigicon-file-jpeg' : true,
			'fluigicon-file-gif' : true,
			'fluigicon-file-png' : true,
			'fluigicon-file-zip' : true,
			'fluigicon-file-txt' : true,
			'fluigicon-file-exe' : true,
			'fluigicon-file-raw' : true,
			'fluigicon-replace-file' : true,
			'fluigicon-checked' : true,
			'fluigicon-download' : true,
			'fluigicon-upload' : true,
			'fluigicon-pointer-down' : true,
			'fluigicon-pointer-up' : true,
			'fluigicon-pointer-right' : true,
			'fluigicon-pointer-left' : true,
			'fluigicon-bell-empty' : true,
			'fluigicon-user-edit' : true,
			'fluigicon-user-config' : true,
			'fluigicon-user-favorite' : true,
			'fluigicon-user-search' : true,
			'fluigicon-user-comment' : true,
			'fluigicon-user-pending' : true,
			'fluigicon-user-tasks' : true,
			'fluigicon-user-cost' : true,
			'fluigicon-user-transfer' : true,
			'fluigicon-user-selection' : true,
			'fluigicon-community-pending' : true,
			'fluigicon-community-edit' : true,
			'fluigicon-community-config' : true,
			'fluigicon-community-selection' : true,
			'fluigicon-file-default' : true,
			'fluigicon-notes' : true,
			'fluigicon-file-mdb' : true,
			'fluigicon-fileadd' : true,
			'fluigicon-taskcentral' : true,
			'fluigicon-computernetwork' : true,
			'fluigicon-workstation' : true,
			'fluigicon-parabolicsatellite' : true,
			'fluigicon-chipset' : true,
			'fluigicon-fileconfig' : true,
			'fluigicon-discdata' : true,
			'fluigicon-company' : true,
			'fluigicon-file-dwf' : true,
			'fluigicon-file-tga' : true,
			'fluigicon-file-swf' : true,
			'fluigicon-file-psd' : true,
			'fluigicon-file-tiff' : true,
			'fluigicon-file-ico' : true,
			'fluigicon-file-bmp' : true,
			'fluigicon-file-avi' : true,
			'fluigicon-file-cda' : true,
			'fluigicon-file-divx' : true,
			'fluigicon-file-midi' : true,
			'fluigicon-file-mp3' : true,
			'fluigicon-file-mpeg' : true,
			'fluigicon-file-pcm' : true,
			'fluigicon-file-vox' : true,
			'fluigicon-file-flv' : true,
			'fluigicon-file-fw' : true,
			'fluigicon-file-dw' : true,
			'fluigicon-file-cdr' : true,
			'fluigicon-file-wma' : true,
			'fluigicon-file-wmv2' : true,
			'fluigicon-file-adobe' : true,
			'fluigicon-file-docx' : true,
			'fluigicon-file-xlsx' : true,
			'fluigicon-file-pptx' : true,
			'fluigicon-file-dwg' : true,
			'fluigicon-linechart' : true,
			'fluigicon-card-index' : true,
			'fluigicon-card-index-approval' : true,
			'fluigicon-rec' : true,
			'fluigicon-folderuser' : true,
			'fluigicon-folderconfig' : true,
			'fluigicon-folderapproval' : true,
			'fluigicon-fileedit' : true,
			'fluigicon-file-one' : true,
			'fluigicon-file-ost' : true,
			'fluigicon-file-vsd' : true,
			'fluigicon-list-dropdown' : true,
			'fluigicon-discuss-on' : true,
			'fluigicon-share-on' : true,
			'fluigicon-file-bell-empty' : true,
			'fluigicon-file-bell' : true,
			'fluigicon-insert-text' : true,
			'fluigicon-verified' : true,
			'fluigicon-moderator' : true,
			'fluigicon-column-chart' : true,
			'fluigicon-manager-pendings' : true,
			'fluigicon-consense-pendings' : true,
			'fluigicon-file-checkout' : true,
			'fluigicon-file-approval' : true,
			'fluigicon-file-user' : true,
			'fluigicon-thumbs-up-on' : true,
			'fluigicon-brand' : true,
			'fluigicon-export' : true,
			'fluigicon-import' : true,
			'fluigicon-user-role' : true,
			'fluigicon-comment-on' : true,
			'fluigicon-timeline-social' : true,
			'fluigicon-system-tools' : true,
			'fluigicon-page-default' : true,
			'fluigicon-denounce' : true,
			'fluigicon-denounce-on' : true,
			'fluigicon-role-lists' : true,
			'fluigicon-picture-portrait' : true,
			'fluigicon-player-portrait' : true,
			'fluigicon-hand' : true,
			'fluigicon-fit-width' : true,
			'fluigicon-rotate' : true,
			'fluigicon-expand' : true,
			'fluigicon-list' : true,
			'fluigicon-step-backward' : true,
			'fluigicon-step-forward' : true,
			'fluigicon-digital-signature' : true,
			'fluigicon-cloud-relationship' : true,
			'fluigicon-mobile-message' : true,
			'fluigicon-internal-view' : true,
			'fluigicon-cancel-checkout' : true,
			'fluigicon-graduation-cap' : true,
			'fluigicon-tests-central' : true,
			'fluigicon-checkin' : true,
			'fluigicon-classes' : true,
			'fluigicon-process-details' : true,
			'fluigicon-classes-management' : true,
			'fluigicon-degree' : true,
			'fluigicon-pen' : true,
			'fluigicon-enrollment-status' : true,
			'fluigicon-enrollment' : true,
			'fluigicon-extracurricular-activities' : true,
			'fluigicon-manual-scores' : true,
			'fluigicon-waiting-list' : true,
			'fluigicon-questions' : true,
			'fluigicon-question-book' : true,
			'fluigicon-add-test' : true,
			'fluigicon-search-test' : true,
			'fluigicon-test-settings' : true,
			'fluigicon-process-adhoc' : true,
			'fluigicon-pause' : true,
			'fluigicon-ellipsis-vertical' : true,
			'fluigicon-process-favorites' : true,
			'fluigicon-process-decision' : true,
			'fluigicon-process-remove' : true,
			'fluigicon-process-automatic-send' : true,
			'fluigicon-process-config' : true,
			'fluigicon-process-attach' : true,
			'fluigicon-gamification-car' : true,
			'fluigicon-gamification-shuttlecook' : true,
			'fluigicon-gamification-helmet' : true,
			'fluigicon-gamification-old-helmet' : true,
			'fluigicon-gamification-flags' : true,
			'fluigicon-gamification-flag' : true,
			'fluigicon-activity-list-pending' : true,
			'fluigicon-money-circle' : true,
			'fluigicon-book-config' : true,
			'fluigicon-ams-config' : true,
			'fluigicon-academic-certificate' : true,
			'fluigicon-field' : true,
			'fluigicon-educational-pendings' : true,
			'fluigicon-play-circle' : true,
			'fluigicon-period-transfer' : true,
			'fluigicon-period-top-right' : true,
			'fluigicon-period-remove' : true,
			'fluigicon-period-info-sign' : true,
			'fluigicon-eraser' : true,
			'fluigicon-calendar-thumbs-down' : true,
			'fluigicon-calendar-remove' : true,
			'fluigicon-calendar-refresh' : true,
			'fluigicon-calendar-top-right' : true,
			'fluigicon-calendar-verified' : true,
			'fluigicon-period-verified' : true,
			'fluigicon-school-note' : true,
			'fluigicon-group-school-note' : true,
			'fluigicon-test-refresh' : true,
			'fluigicon-test-top-right' : true,
			'fluigicon-test-play-circle' : true,
			'fluigicon-enrollment-verified' : true,
			'fluigicon-discuss-question-sign' : true,
			'fluigicon-temperature' : true,
			'fluigicon-food' : true,
			'fluigicon-newspaper' : true,
			'fluigicon-cake' : true,
			'fluigicon-handshake' : true,
			'fluigicon-user-anonymous' : true,
			'fluigicon-exclamation-sign-on' : true,
			'fluigicon-user-card' : true,
			'fluigicon-arrow-left' : true,
			'fluigicon-arrow-right' : true,
			'fluigicon-arrow-up' : true,
			'fluigicon-arrow-down' : true,
			'fluigicon-arrow-top-left' : true,
			'fluigicon-arrow-top-right' : true,
			'fluigicon-arrow-bottom-left' : true,
			'fluigicon-arrow-bottom-right' : true,
			'fluigicon-arrow-turn-left' : true,
			'fluigicon-arrow-turn-right' : true,
			'fluigicon-process-details-exclamation' : true,
			'fluigicon-unchecked' : true,
			'fluigicon-play-underscore' : true,
			'fluigicon-volume-mute' : true,
			'fluigicon-volume-high' : true,
			'fluigicon-volume-medium' : true,
			'fluigicon-drag-n-drop' : true,
			'fluigicon-download-circle' : true,
			'fluigicon-change-letter' : true,
			'fluigicon-article' : true,
			'fluigicon-articles' : true,
			'fluigicon-folder-article' : true,
			'fluigicon-mobile-on' : true,
			'fluigicon-sticky-note' : true,
			'fluigicon-elucidat' : true,
			'fluigicon-file-group' : true,
			'fluigicon-no-app' : true,
			'fluigicon-mobile' : true,
			'fluigicon-login' : true,
			'fluigicon-logout' : true
		};

		function isClassCreated(iconClass) {
			return iconClass in iconsMap;
		}

		return {
			iconsMap : iconsMap,
			isClassCreated : isClassCreated
		};
	};
	return fluigicons;

})(window.FLUIGC || {}, jQuery); 
var FLUIGC = (function(FluigGrid, $, fluigTemplates) {
	'use strict';
	FluigGrid.datatable = function(elTarget, settings, callbackMain) {

		var attrsMap = {
			'dataReload': null,
			'selectedItems': [],
			'data': [],
			'dataDrag': [],
			'isMobile': false,
			'isFileTemplateLoaded': null,
			'tplTableBasic': fluigTemplates["datatable-basic"],
			'tplTableBody': fluigTemplates["datatable-body"],
			'currentTarget': null,
			'currentTable': null,
			'currentThead': null,
			'currentTbody': null,
			'currentTfoot': null,
			'currentTr': null,
			'currentPrevButton': null,
			'currentNextButton': null,
			'LIMIT': 30,
			'OFFSET': 0,
			'LIMIT_KEY': 'limit',
			'OFFSET_KEY': 'offset',
			'PATTERN_KEY': 'pattern',
			'CLASS_SELECTED': 'active',
			'ORDER': '',
			'ORDER_KEY': 'orderby',
			'hiddencolumns': [],
			'loadTarget': null,
			'currentLoading': null,
			'scrollControlLoadMore': null,
			'disabledPrev': null,
			'disabledNext': null,
			'draggableTargetPosition': null,
			'draggableNewPosition': [],
			'draggableLastPosition': [],
			'draggableDataItems': [],
			'eventsAllowed': ['fluig.datatable.loadcomplete', 'fluig.datatable.onselectrow',
				'fluig.datatable.drag.start', 'fluig.datatable.drag.end', 'fluig.datatable.scroll',
				'fluig.datatable.search', 'fluig.datatable.forward', 'fluig.datatable.backward'],
			'events': [],
			'addMobileButtonOnce': true,
			'mobileMainColumns': []
		};

		var config = defineSettings(elTarget, settings);

		// Inicia a construção da grid
		initDataTable();

		function defineSettings(target, settings) {
			if (!settings) {
				settings = {};
			}
			settings.target = target;
			settings.emptyMessageDefined = settings.emptyMessage;
			var basicConfig = {
				tableId: 'fluig-table-' + Date.now(),
				content: null,
				searchEnabled: true,
				actionsEnabled: false,
				actionsTemplate: null,
				navButtonsEnable: null,
				emptyMessage: getI18nMessage('emptyMessage'),
				searchLabel: getI18nMessage('searchLabel')
			};
			config = Object.create(basicConfig);
			$.extend(config, settings);

			return config;
		}

		function getI18nMessage(key) {
			var currentLocale = window.WCMAPI ? WCMAPI.getLocale() : 'pt_BR', i18n = {
				'pt_BR': {
					'emptyMessage': 'Não há dados para serem exibidos.',
					'searchLabel': 'Buscar',
					'mobileHiddenItems': 'Não existem itens ocultos'
				},
				'en_US': {
					'emptyMessage': 'No data to display.',
					'searchLabel': 'Search',
					'mobileHiddenItems': 'There are no hidden items'
				},
				'es': {
					'emptyMessage': 'No hay datos para mostrar.',
					'searchLabel': 'Búsqueda',
					'mobileHiddenItems': 'No hay elementos ocultos'
				}
			};
			return i18n[currentLocale][key];
		}

		function setConfig(config, isPagination) {
			var targetScroll;
			if (!isPagination) {
				attrsMap.data = attrsMap.data.concat(config.dataRequest);
			}

			config.classSelected = config.classSelected || attrsMap.CLASS_SELECTED;

			if (config.actions && config.actions.enabled) {
				config.actionsEnabled = config.actions.enabled;
			}

			if (config.actions && config.actions.template) {
				config.actionsTemplate = config.actions.template;
			}

			if (config.search && config.search.enabled == false) {
				config.searchEnabled = config.search.enabled;
			} else {
				config.searchEnabled = true;
			}

			if (config.navButtons && config.navButtons.enabled == false) {
				config.navButtonsEnable = false;
			}

			if (config.search && !config.search.onSearch) {
				config.search.onSearch = function() {
					clearLoading();
					attrsMap.loadTarget = config.target + ' ' + attrsMap.currentTable;
					attrsMap.currentLoading.show(attrsMap.loadTarget);
					config.dataRequest.offset = 0;

					attrsMap.currentTarget.trigger('fluig.datatable.search', [config.textSearch]);

					if (!checkEvents('fluig.datatable.search')) {
						doPagination(config, function(err, dataSearch) {
							if (err) {
								if (callbackMain) {
									callbackMain(err);
								} else {
									throw err;
								}
								return;
							}

							processPage(dataSearch, null, function(dataProcess) {
								if (dataProcess && dataProcess.length) {
									addPage(dataProcess, null, false);
								} else {
									addPage([], null, false);
								}
								if (callbackMain) {
									callbackMain(null, dataProcess);
								}
							});
						});
					}
				};
			}

			if (config.scroll && config.scroll.target) {
				targetScroll = config.scroll.target;
			} else {
				targetScroll = window;
			}

			if (config.scroll && config.scroll.enabled != false) {
				if (config.scroll.onScroll) {
					$(targetScroll).onScrollEnd(function() {
						attrsMap.currentLoading.show(attrsMap.loadTarget);
						config.scroll.onScroll();
					});
				} else {
					$(targetScroll).onScrollEnd(function() {
						attrsMap.currentTarget.trigger('fluig.datatable.scroll');
						loadMoreOnScrollEnd();
					});
				}

			} else {
				// add nav buttons
				if (config.navButtons && config.navButtons.enabled == false) {
					config.navButtonsEnable = false;
				} else {
					config.navButtonsEnable = true;
					if (config.dataRequest.url) {
						if (config.dataRequest.limit > attrsMap.data.length) {
							attrsMap.disabledPrev = true;
							attrsMap.disabledNext = true;
						} else if (config.dataRequest.limit < attrsMap.data.length) {
							attrsMap.disabledPrev = true;
							attrsMap.disabledNext = false;
						} else {
							attrsMap.disabledPrev = true;
							attrsMap.disabledNext = true;
						}
					} else {
						attrsMap.disabledPrev = true;
						attrsMap.disabledNext = false;
					}
				}
				attrsMap.loadTarget = config.target + ' ' + attrsMap.currentTable;
			}
		}

		function startDraggable() {
			if (config.draggable && config.draggable.enabled) {
				attrsMap.dataDrag = {
					'lastPosition': null,
					'newPosition': null,
					'targetPosition': null,
					'data': null
				};

				attrsMap.currentTarget.find(attrsMap.currentTbody).sortable(
					{
						placeholder: 'datatable-draggable-highlight',
						items: "> tr",
						connectWith: attrsMap.currentTarget.find(attrsMap.currentTable),
						cursor: 'move',
						axis: 'y',
						delay: 150,
						revert: 10,
						containment: attrsMap.currentTarget.find(attrsMap.currentTable),
						tolerance: 'pointer',
						scroll: false,
						scrollSensitivity: 10,
						scrollSpeed: 10,
						zIndex: 9999,
						helper: function(event, item) {
							var elements, helper, len, itemsDragged, html, MAX_ITEMS_VIEW = 2;

							if (!item.hasClass("active")) {
								item.addClass("active").siblings().removeClass("active");
							}

							elements = item.parent().children('.active').clone(true);
							item.data('multidrag', elements).siblings('.active').remove();
							helper = $('<table class="datatable-draggable"></table>');

							len = elements.length;
							if (len > MAX_ITEMS_VIEW) {
								html = '';
								itemsDragged = len;
								html += '<tr class="ui-sortable-handle active">' + '<td colspan=10>' + itemsDragged
									+ ' items</td>' + '</tr>';
								for (var i = 0; i < len; i++) {
									var el = elements[i], itemId = $(el).data('index');
								}

								helper.append(html);
							} else {
								html = '';
								for (var i = 0; i < len; i++) {
									var el = elements[i], itemId = $(el).data('index'), info = $(el).data('info');
									$(el).data('index', itemId);
									$(el).data('info', info);
									html += '<tr class="ui-sortable-handle active">' + $(el).html() + '</tr>';
								}
								helper.append(html);
							}

							attrsMap.currentTarget.find(attrsMap.currentTable).append(helper);

							return helper;
						},

						start: function(event, ui) {
							var elements = ui.item.data('multidrag');
							attrsMap.draggableLastPosition.length = 0;
							attrsMap.draggableDataItems.length = 0;
							$(elements).each(function(i, data) {
								var dataIndex = $(data).data('index');
								attrsMap.draggableLastPosition.push(dataIndex);
								attrsMap.draggableDataItems.push(getRowByIndex(dataIndex));
							});
							attrsMap.dataDrag = {
								'lastPosition': attrsMap.draggableLastPosition,
								'data': attrsMap.draggableDataItems,
							};
							attrsMap.currentTarget.trigger('fluig.datatable.drag.start', [attrsMap.dataDrag]);
						},

						stop: function(event, ui) {
							var that = this, execute, elements = ui.item.data('multidrag');

							ui.item.after(elements).remove();

							attrsMap.draggableLastPosition.length = 0;
							attrsMap.draggableNewPosition.length = 0;
							attrsMap.draggableDataItems.length = 0;
							attrsMap.draggableTargetPosition = 0;

							$(elements).each(function(i, data) {
								var dataIndex = $(data).data('index'), index = $(data).index();
								attrsMap.draggableLastPosition.push(dataIndex);
								attrsMap.draggableNewPosition.push(index);
							});

							attrsMap.draggableTargetPosition = attrsMap.draggableNewPosition[0];

							attrsMap.data.length = 0;
							attrsMap.currentTarget.find(attrsMap.currentTr).each(function(i, data) {
								attrsMap.data.push($(data).data('info'));
								$(data).data('index', i);
							});

							$(elements).each(function(i, data) {
								var index = $(data).index();
								attrsMap.draggableDataItems.push(getRowByIndex(index));
							});

							attrsMap.dataDrag = {
								'lastPosition': attrsMap.draggableLastPosition,
								'newPosition': attrsMap.draggableNewPosition,
								'targetPosition': attrsMap.draggableTargetPosition,
								'data': attrsMap.draggableDataItems,
							};

							if (config.draggable && config.draggable.onDrag) {
								execute = config.draggable.onDrag(attrsMap.dataDrag);
								if (execute != undefined && !execute) {
									$(that).sortable('cancel');
									ui.item.after(elements).remove();
									attrsMap.draggableLastPosition.length = 0;
									attrsMap.draggableNewPosition.length = 0;
									attrsMap.draggableDataItems.length = 0;
								}
							}
							if (config.draggable && !config.draggable.onDrag) {
								attrsMap.currentTarget.trigger('fluig.datatable.drag.end', [dragInfo()]);
							}

						}
					}).disableSelection();
			}
		}

		function dragInfo() {
			return attrsMap.dataDrag;
		}

		function drag(type, callback) {
			if (config.draggable && config.draggable.enabled) {
				attrsMap.currentTarget.find(attrsMap.currentTbody).on(type, function(event, ui) {
					callback(ui);
				});
			}
		}

		function loadMoreOnScrollEnd() {
			if (!checkEvents('fluig.datatable.scroll')) {
				if (!attrsMap.scrollControlLoadMore) {
					var selector = config.target + ' #loadMore', cols = config.header.length, newRowContent = '<tr>'
						+ '<td colspan="' + cols + '">' + '<div id="loadMore"></div>' + '</td>' + '</tr>';
					attrsMap.currentTarget.find(attrsMap.currentTfoot).append(newRowContent);
					attrsMap.loadTarget = selector;
					processRequest('next', true);
					attrsMap.scrollControlLoadMore = $(selector);
				}
			}
		}

		function configLoading() {
			attrsMap.loadTarget = config.target;
			attrsMap.currentLoading = FLUIGC.loading(attrsMap.loadTarget);
		}

		function clearLoading() {
			attrsMap.currentLoading.hide();
			attrsMap.currentTarget.find(attrsMap.currentTfoot + ' tr').remove();
			attrsMap.scrollControlLoadMore = null;
		}

		function getConfigDataRequest(cfg) {
			if (cfg) {
				$.extend(config.dataRequest, cfg.dataRequest);
			}
			return config;
		}

		function paginate(limit, offset, callback) {
			var cfg = {
				dataRequest: {
					'limit': limit,
					'offset': offset
				}
			};
			var req = getConfigDataRequest(cfg);
			doPagination(req, function(err, data) {
				if (err) {
					if (callbackMain) {
						callbackMain(err);
					} else {
						throw err;
					}
					return;
				}
				callback(data);
			});
		}

		function processURL(req) {
			var url = req.dataRequest.url, limit = req.dataRequest.limit || attrsMap.LIMIT, offset = req.dataRequest.offset
				|| attrsMap.OFFSET, limitkey = req.dataRequest.limitkey || attrsMap.LIMIT_KEY, offsetKey = req.dataRequest.offsetKey
				|| attrsMap.OFFSET_KEY, patternKey = req.dataRequest.patternKey || attrsMap.PATTERN_KEY, order = config.dataRequest.order
				|| attrsMap.ORDER, orderKey = config.dataRequest.orderKey || attrsMap.ORDER_KEY;

			if (url && limitkey && offsetKey) {
				if (url.indexOf('?') === -1) {
					url = req.dataRequest.url + '?';
				}
				url = url + offsetKey + '=' + offset + '&' + limitkey + '=' + (limit + 1) + '&' + orderKey + '='
					+ order;
				if (patternKey && config.textSearch) {
					url = url + '&' + patternKey + '=' + config.textSearch;
				}
				return url;
			}
			return null;
		}

		function doPagination(req, callback) {
			var url = req.dataRequest.url, options = req.dataRequest.options, root = req.dataRequest.root, errorRootNotDefined = {
				error: 'Please, check if the root attribute was set correctly'
			};

			if (url) {
				url = processURL(req);

				getDataRequest(url, options, function(err, response) {
					if (err) {
						if (callbackMain) {
							callbackMain(err);
						} else {
							throw err;
						}
						return;
					}

					if (response) {
						if (root) {
							attrsMap.data = response[root];
						} else {
							attrsMap.data = response;
						}
						if (!Array.isArray(attrsMap.data)) {
							if (callbackMain) {
								callbackMain(errorRootNotDefined);
							} else {
								throw errorRootNotDefined;
							}
							return;
						}
						if (attrsMap.data && attrsMap.data.length) {
							callback(null, attrsMap.data);
						} else {
							callback(null, []);
						}
					}
				});
			}
		}

		function buildDataTable(config, isPagination) {
			setConfig(config, isPagination);
			createGrid(config);
		}

		function initDataTable() {
			var dataTypeIsArray, dataRequest = config.dataRequest, checkDevice = FLUIGC.utilities.checkDevice();
			configLoading();
			attrsMap.currentLoading.show();
			attrsMap.currentTarget = $(config.target);
			attrsMap.currentTable = 'table#' + config.tableId;
			attrsMap.currentThead = attrsMap.currentTable + ' thead';
			attrsMap.currentTbody = attrsMap.currentTable + ' tbody[data-tbody-fluig]';
			attrsMap.currentTr = attrsMap.currentTbody + ' tr';
			attrsMap.currentTfoot = attrsMap.currentTable + ' tfoot';
			attrsMap.currentPrevButton = '[data-nav-prev]';
			attrsMap.currentNextButton = '[data-nav-next]';
			attrsMap.isMobile = checkDevice.isMobile;
			attrsMap.mobileMainColumns = config.mobileMainColumns;

			if (dataRequest) {

				if (config.header) {
					var selected = config.header.filter(function(element) {
						return element.standard == true;
					});
					if (selected.length && selected[0].dataorder) {
						config.dataRequest.order = selected[0].dataorder + '_ASC';
					}
				}

				dataTypeIsArray = Array.isArray(dataRequest);

				if (!dataTypeIsArray && dataRequest.url) {
					doPagination(config, function(err, data) {
						if (err) {
							if (callbackMain) {
								callbackMain(err);
							} else {
								throw err;
							}
							return;
						}
						buildDataTable(config, true);
					});

				} else {
					buildDataTable(config, false);
				}
			}

			configSearchEvent();
			if (attrsMap.isMobile) {
				configMobileEvents();
			}

			attrsMap.currentTarget.on('click', attrsMap.currentTr, function(event) {
				var i = $(this).index(), index = attrsMap.selectedItems.indexOf(i), elms = attrsMap.currentTarget
					.find(attrsMap.currentTr), eventSelectrow;

				if ($(this).hasClass('child')) {
					return;
				}

				if (index != -1) {
					if (!(attrsMap.selectedItems.length == 1 && attrsMap.selectedItems[0] == i)) {
						if (!(event.metaKey || event.ctrlKey || event.button === 1) && !event.shiftKey
							&& config.multiSelect) {
							attrsMap.selectedItems = [];
							elms.removeClass(config.classSelected);
							$(this).addClass(config.classSelected);
							eventSelectrow = $.Event('fluig.datatable.onselectrow', {
								"selectedIndex": attrsMap.selectedItems
							});
							attrsMap.currentTarget.trigger(eventSelectrow);
						} else if ($(this).hasClass(config.classSelected)) {
							$(this).removeClass(config.classSelected);
							attrsMap.selectedItems.splice(index, 1);
							eventSelectrow = $.Event('fluig.datatable.onselectrow', {
								"selectedIndex": attrsMap.selectedItems
							});
							attrsMap.currentTarget.trigger(eventSelectrow);
						} else {
							$(this).removeClass(config.classSelected);
							attrsMap.selectedItems.splice(index, 1);
						}
					}

				} else {

					if ((event.metaKey || event.ctrlKey || event.button === 1) && config.multiSelect) {
						attrsMap.selectedItems.push(i);
						$(this).addClass(config.classSelected);
						eventSelectrow = $.Event('fluig.datatable.onselectrow', {
							"selectedIndex": attrsMap.selectedItems
						});
						attrsMap.currentTarget.trigger(eventSelectrow);

					} else if (event.shiftKey && config.multiSelect) {
						var selected = attrsMap.currentTarget.find(attrsMap.currentTr + '.' + config.classSelected);
						if (selected.length) {
							var previousSelected = selected.index();
							var lastSelected = i;
							elms.removeClass(config.classSelected);
							attrsMap.selectedItems = [];
							var highest = 0;
							for (var n = 0; n < selected.length; n++) {
								if (highest < $(selected[n]).index()) {
									highest = $(selected[n]).index();
								}
							}
							if (highest <= lastSelected) {
								for (var j = highest; j <= lastSelected; j++) {
									attrsMap.selectedItems.push(j);
									getRowByIndex(j, true).addClass(config.classSelected);
								}
							} else {
								for (var y = previousSelected; y >= lastSelected; y--) {
									attrsMap.selectedItems.push(y);
									getRowByIndex(y, true).addClass(config.classSelected);
								}
							}
							eventSelectrow = $.Event('fluig.datatable.onselectrow', {
								"selectedIndex": attrsMap.selectedItems
							});
							attrsMap.currentTarget.trigger(eventSelectrow);
						}

					} else {
						attrsMap.selectedItems = [i];
						elms.removeClass(config.classSelected);
						$(this).addClass(config.classSelected);
						eventSelectrow = $.Event('fluig.datatable.onselectrow', {
							"selectedIndex": attrsMap.selectedItems
						});
						attrsMap.currentTarget.trigger(eventSelectrow);
					}
				}
			});

			attrsMap.currentTarget.on('mouseenter', '[data-order-by]', function(event) {
				var element = $(this);
				$('.cell-option', element).show();
			});

			attrsMap.currentTarget.on('mouseleave', '[data-order-by]', function(event) {
				var element = $(this);
				if (!$(this).hasClass('selected')) {
					$('.cell-option', element).hide();
				}
			});

			attrsMap.currentTarget.on('click', '[data-order-by]', function(event) {
				event.preventDefault();
				var element = $(this);
				clearLoading();
				attrsMap.loadTarget = config.target + ' ' + attrsMap.currentTable;
				attrsMap.currentLoading.show(attrsMap.loadTarget);

				if ($('.cell-option', element).hasClass('dropup')) {
					$('.cell-option', element).removeClass('dropup').addClass('dropdown');
				} else if ($('.cell-option', element).hasClass('dropdown')) {
					$('.cell-option', element).removeClass('dropdown').addClass('dropup');
				}
				$('.cell-option').hide();
				$('.order-by', config.target).removeClass('selected');
				$(this).addClass('selected');
				$(this).find('.cell-option').show();
				var orderBy = $(element).data('order-by');
				if ($('.cell-option', element).hasClass('dropup')) {
					orderBy = orderBy + "_DESC";
				} else if ($('.cell-option', element).hasClass('dropdown')) {
					orderBy = orderBy + "_ASC";
				}

				var cfg = {
					dataRequest: {
						'order': orderBy,
						'offset': 0
					}
				};
				var req = getConfigDataRequest(cfg);
				doPagination(req, function(err, data) {
					if (err) {
						if (callbackMain) {
							callbackMain(err);
						} else {
							throw err;
						}
						return;
					}
					processPage(data, null, function(dataProcess) {
						addPage(dataProcess, null, false);
					});
				});

			});

			attrsMap.currentTarget.on('click', '[data-mobile-open]', function(event) {
				var info, index, len, objInfo, arrKeys;
				event.preventDefault();
				if (!config.draggable) {
					$(attrsMap.currentTarget).find('tr.mobile').each(function(i, data) {
						$(data).data('index', i);
						$(data).data('info', attrsMap.data[i]);
					});
				}
				info = $(this).parents('tr').data('info');
				index = $(this).parents('tr').data('index');
				len = attrsMap.currentTarget.find(attrsMap.currentThead + ' th').length;
				objInfo = '';
				arrKeys = Object.keys(info);

				if (attrsMap.hiddencolumns.length) {
					for (var idx = 0; idx < attrsMap.hiddencolumns.length; idx++) {
						var objKey = arrKeys[attrsMap.hiddencolumns[idx]];
						var headText = $(attrsMap.currentTarget).find(
							' table th:eq(' + attrsMap.hiddencolumns[idx] + ') a').text();
						if (headText) {
							objInfo += ' <b>' + headText + ':</b> ' + info[objKey] + '<br>';
						} else {
							objInfo += ' <b>' + objKey + ':</b> ' + info[objKey] + '<br>';
						}
					}

				} else {
					objInfo = getI18nMessage('mobileHiddenItems');
				}

				$('<tr class="child"><td colspan="' + len + '">' + objInfo + '</td></tr>').insertAfter(
					$(this).closest('tr'));
				$('span', this).removeClass('fluigicon-pointer-right');
				$('span', this).addClass('fluigicon-pointer-down');
				$(this).removeAttr('data-mobile-open');
				$(this).attr('data-mobile-close', '');
			});

			attrsMap.currentTarget.on('click', '[data-mobile-close]', function(event) {
				event.preventDefault();
				$('span', this).removeClass('fluigicon-pointer-down');
				$('span', this).addClass('fluigicon-pointer-right');
				$(this).removeAttr('data-mobile-close');
				$(this).attr('data-mobile-open', '');
				$(this).parents('tr').next().remove();
			});

			attrsMap.currentTarget.on('fluig.datatable.loadcomplete', function() {
				if (config.search && !config.search.onlyEnterkey) {
					$('#btnSearch').removeClass('fs-cursor-pointer');
				}
				if (FLUIGC.utilities.checkBrowser().isIe()) {
					attrsMap.currentTarget.find('table').on('selectstart', function(event) {
						event.preventDefault();
					});
				}
			});
		}

		function processPage(dataProcess, offset, callback) {
			config.dataRequest.offset = offset || 0;
			attrsMap.selectedItems.length = 0;
			if (config.scroll && config.scroll.enabled == false) {
				attrsMap.currentTarget.find(attrsMap.currentPrevButton).addClass('disabled');
				if (config.dataRequest.limit > dataProcess.length) {
					attrsMap.currentTarget.find('#area-nav-button').hide();
				} else if (config.dataRequest.limit < dataProcess.length) {
					config.navButtonsEnable = true;
					attrsMap.currentTarget.find('#area-nav-button').show();
					attrsMap.currentTarget.find(attrsMap.currentNextButton).removeClass('disabled');
				} else {
					attrsMap.currentTarget.find(attrsMap.currentNextButton).addClass('disabled');
					attrsMap.currentTarget.find('#area-nav-button').hide();
				}
			}
			if (dataProcess.length > config.dataRequest.limit) {
				dataProcess.splice(dataProcess.length - 1, 1);
			}
			callback(dataProcess);
		}

		function configMobile() {
			$('.config-columns-switch-button', attrsMap.currentTarget).each(function(idx) {
				$(this).attr('id', "datatable-switch-column-" + idx);
			});
			if (attrsMap.mobileMainColumns && attrsMap.mobileMainColumns.length) {
				for (var i = 0; i < attrsMap.mobileMainColumns.length; i++) {
					showColumn(attrsMap.mobileMainColumns[i]);
					$("#datatable-switch-column-" + attrsMap.mobileMainColumns[i], attrsMap.currentTarget).attr(
						'checked', 'checked');
				}
			} else {
				if (attrsMap.hiddencolumns.length) {
					$('.config-columns-switch-button', attrsMap.currentTarget).each(function(idx, element) {
						if (idx != attrsMap.hiddencolumns[idx]) {
							$("#datatable-switch-column-" + idx, attrsMap.currentTarget).attr('checked', 'checked');
						}
					});
				} else {
					$('.config-columns-switch-button', attrsMap.currentTarget).attr('checked', 'checked');
				}
			}
			FLUIGC.switcher.init('.config-columns-switch-button');
		}

		function configMobileEvents() {
			attrsMap.currentTarget.on('click', '#toggle-mobile-config-columns-' + config.tableId, function(event) {
				if ($('#mobile-config-columns-' + config.tableId, attrsMap.currentTarget).hasClass('fs-display-none')) {
					$('#mobile-config-columns-' + config.tableId, attrsMap.currentTarget)
						.removeClass('fs-display-none');
					$('#mobile-config-columns-' + config.tableId, attrsMap.currentTarget).addClass('fs-display-block');
					$(this).removeClass('btn-default');
					$(this).addClass('btn-primary');
					$('.config-columns-switch-button', attrsMap.currentTarget).each(function(i, element) {
						if ($(element).is(':checked')) {
							$(element).data('state-mobile', true);
						} else {
							$(element).data('state-mobile', false);
						}
					});

				} else {
					$('#mobile-config-columns-' + config.tableId, attrsMap.currentTarget).removeClass(
						'fs-display-block');
					$('#mobile-config-columns-' + config.tableId, attrsMap.currentTarget).addClass('fs-display-none');
					$(this).removeClass('btn-primary');
					$(this).addClass('btn-default');
					$('.config-columns-switch-button', attrsMap.currentTarget).each(function(i, element) {
						if ($(element).data('state-mobile') == 1) {
							FLUIGC.switcher.setTrue($(element));
						} else {
							FLUIGC.switcher.setFalse($(element));
						}
					});
				}
			});
			attrsMap.currentTarget
				.on(
					'click',
					'#mobile-config-columns-confirm-' + config.tableId,
					function(event) {
						attrsMap.mobileMainColumns = [];
						$('.config-columns-switch-button', attrsMap.currentTarget).each(function(idx) {
							if ($(this).is(':checked')) {
								attrsMap.mobileMainColumns.push(idx);
							}
						});
						if (attrsMap.mobileMainColumns && attrsMap.mobileMainColumns.length) {
							$('.config-columns-switch-button', attrsMap.currentTarget).each(function(idx) {
								hideColumn(idx);
							});
							for (var i = 0; i < attrsMap.mobileMainColumns.length; i++) {
								showColumn(attrsMap.mobileMainColumns[i]);
							}
						} else {
							FLUIGC.toast({
								message: config.emptyMessage,
								type: 'warning'
							});
							return;
						}
						$('#mobile-config-columns-' + config.tableId, attrsMap.currentTarget).removeClass(
							'fs-display-block');
						$('#mobile-config-columns-' + config.tableId, attrsMap.currentTarget).addClass(
							'fs-display-none');
						$('#toggle-mobile-config-columns-' + config.tableId, attrsMap.currentTarget).removeClass(
							'btn-primary');
						$('#toggle-mobile-config-columns-' + config.tableId, attrsMap.currentTarget).addClass(
							'btn-default');

						$(config.target + " " + attrsMap.currentTable + ' tr.mobile td [data-mobile-open]').remove();
						$(config.target + " " + attrsMap.currentTable + ' tr.mobile td [data-mobile-close]').remove();
						$(config.target + " " + attrsMap.currentTable + ' tr.child').remove();
						var plusButton = '<span data-mobile-open><span class="fluigicon fluigicon-pointer-right"></span></span>&nbsp;';
						var index = $(config.target + " " + attrsMap.currentTable + ' th:visible:eq(0)').index() || 0;
						index = index + 1;
						$(
							config.target + " " + attrsMap.currentTable
								+ ' tr.mobile td[style="display: table-cell;"]:nth-child(' + index + ')').prepend(
							plusButton);
					});
		}

		function configSearchEvent() {
			if (config.search && config.search.onlyEnterkey) {
				attrsMap.currentTarget.on('keypress', '#fluig-data-table-input', function(event) {
					var keycode = (event.keyCode ? event.keyCode : event.which);
					if (keycode == '13') {
						event.preventDefault();
						config.textSearch = $(config.target + ' #fluig-data-table-input').val();
						if (config.search && config.search.onSearch) {
							config.search.onSearch(config.textSearch);
						}
					}
				});

				attrsMap.currentTarget.on('click', '#btnSearch', function(event) {
					config.textSearch = $(config.target + ' #fluig-data-table-input').val();
					if (config.search && config.search.onSearch) {
						config.search.onSearch(config.textSearch);
					}
				});

			} else {
				(function() {
					var timer;
					attrsMap.currentTarget.on('keyup', '#datatable-area-search', function(event) {
						if (timer) {
							clearTimeout(timer);
						}
						timer = setTimeout(function() {
							config.textSearch = $(config.target + ' #fluig-data-table-input').val();
							if (config.search && config.search.onSearch) {
								config.search.onSearch(config.textSearch);
							}

						}, 300);
					});
				}());
			}
		}

		function createGrid(config) {
			if (config.target) {
				var newData = {}, template;
				loadTemplate(function() {
					if (attrsMap.isFileTemplateLoaded) {
						template = $(attrsMap.tplTableBasic).html();
						if (config.actionsEnabled && config.actionsTemplate) {
							newData['actionsArea'] = config.actionsEnabled;
							newData['actions'] = processActionsArea(config.actionsTemplate, {});
							newData['actionAreaStyle'] = config.actions.actionAreaStyle;
						}

						if (attrsMap.isMobile) {
							newData['mobile'] = attrsMap.isMobile;
						}

						newData['tableId'] = config.tableId;
						newData['header'] = processHeader(config.header);
						newData['tableStyle'] = config.tableStyle;

						if (attrsMap.data.length) {
							if (config.dataRequest.limit >= attrsMap.data.length) {
								config.navButtonsEnable = false;
							}
							if (config.dataRequest.limit < attrsMap.data.length) {
								attrsMap.data.splice(attrsMap.data.length - 1, 1);
							}
							newData['content'] = processBody(attrsMap.data);

						} else {
							newData['content'] = getEmptyMessageHtml();
							config.navButtonsEnable = false;
						}

						newData['searchField'] = config.searchEnabled;
						if (config.search && config.search.searchLabel) {
							config.searchLabel = config.search.searchLabel;
						}
						newData['searchLabel'] = config.searchLabel;

						newData['datatableAreaNavButtons'] = true;
						bindNavButtons();
						if (config.navButtonsEnable) {
							if (config.navButtons && config.navButtons.backwardstyle) {
								newData['backwardstyle'] = config.navButtons.backwardstyle;
							}
							if (config.navButtons && config.navButtons.forwardstyle) {
								newData['forwardstyle'] = config.navButtons.forwardstyle;
							}
							if (attrsMap.disabledPrev == true) {
								newData['disabledPrev'] = 'disabled';
							}
							if (attrsMap.disabledNext == true) {
								newData['disabledNext'] = 'disabled';
							}
						}

						if (config.actionsEnabled || config.searchEnabled) {
							newData['datatableArea'] = true;
							if (config.search && config.search.searchAreaStyle) {
								newData['searchAreaStyle'] = config.search.searchAreaStyle;
							}
						}

						var html = Mustache.render(template, newData);

						attrsMap.currentTarget.html(html);
						attrsMap.dataReload = attrsMap.data;
						if (!config.navButtonsEnable) {
							attrsMap.currentTarget.find('#area-nav-button').hide();
						}

						if (attrsMap.data.length) {
							hideColumns();
						} else {
							hideColumns('header');
						}

						if (config.draggable && config.draggable.enabled) {
							updateDatatableIndex();
							startDraggable();
							attrsMap.currentTarget.find(attrsMap.currentTr).css('cursor', 'move');
						}

						if (callbackMain) {
							callbackMain(null, attrsMap.data);
						}

						if (attrsMap.isMobile) {
							configMobile();
						}

						attrsMap.currentTarget.trigger('fluig.datatable.loadcomplete');

					}
				});
			}
		}

		function hideColumns(header) {
			var child, j, len = attrsMap.hiddencolumns.length;
			for (j = 0; j < len; j++) {
				child = attrsMap.hiddencolumns[j] + 1;
				$(config.target + " " + attrsMap.currentTable + " th:nth-child(" + child + ")").hide();
				if (!header) {
					$(config.target + " " + attrsMap.currentTable + " td:nth-child(" + child + ")").hide();
				}
			}
		}

		function hideColumn(index) {
			var child = parseInt(index, 10) + 1, j = 0, len = attrsMap.hiddencolumns.length;
			var item = attrsMap.hiddencolumns.filter(function(element, i) {
				return element == index;
			});
			if (item.length <= 0) {
				attrsMap.hiddencolumns.push(parseInt(index, 10));
				$(config.target + " " + attrsMap.currentTable + " th:nth-child(" + child + ")").hide();
				$(config.target + " " + attrsMap.currentTable + " td:nth-child(" + child + ")").hide();
			}
		}

		function showColumns() {
			var child, j, len = attrsMap.hiddencolumns.length;
			for (j = 0; j < len; j++) {
				child = attrsMap.hiddencolumns[j] + 1;
				$(config.target + " " + attrsMap.currentTable + " th:nth-child(" + child + ")").show();
				$(config.target + " " + attrsMap.currentTable + " td:nth-child(" + child + ")").show();
			}
		}

		function showColumn(index) {
			var child = parseInt(index, 10) + 1, j, len = attrsMap.hiddencolumns.length;
			if (attrsMap.hiddencolumns.length) {
				for (j = 0; j < len; j++) {
					if (attrsMap.hiddencolumns[j] == index) {
						attrsMap.hiddencolumns.splice(j, 1);
						$(config.target + " " + attrsMap.currentTable + " th:nth-child(" + child + ")").show();
						$(config.target + " " + attrsMap.currentTable + " td:nth-child(" + child + ")").show();
						break;
					}
				}
			}
		}

		function bindNavButtons() {
			(function() {
				var timer;
				attrsMap.currentTarget.on('click', attrsMap.currentNextButton, function() {
					if (timer) {
						clearTimeout(timer);
					}
					timer = setTimeout(function() {
						if (config.navButtons && config.navButtons.onForward) {
							config.navButtons.onForward();
						} else {
							attrsMap.currentTarget.trigger('fluig.datatable.forward');
							if (!checkEvents('fluig.datatable.forward')) {
								processRequest('next');
							}
						}
						attrsMap.selectedItems.length = 0;
					}, 300);
				});
			}());
			(function() {
				var timer;
				attrsMap.currentTarget.on('click', attrsMap.currentPrevButton, function() {
					if (timer) {
						clearTimeout(timer);
					}
					timer = setTimeout(function() {
						if (config.navButtons && config.navButtons.onBackward) {
							config.navButtons.onBackward();
						} else {
							attrsMap.currentTarget.trigger('fluig.datatable.backward');
							if (!checkEvents('fluig.datatable.backward')) {
								processRequest('prev');
							}
						}
						attrsMap.selectedItems.length = 0;
					}, 300);
				});
			}());
		}

		function processRequest(nav, append) {
			attrsMap.currentLoading.show(attrsMap.loadTarget);
			var url = config.dataRequest.url, limit = config.dataRequest.limit || attrsMap.LIMIT, offset = config.dataRequest.offset
				|| attrsMap.OFFSET, options = config.dataRequest.options, root = config.dataRequest.root, dataLocal;

			if (config.navButtonsEnable) {
				if (nav === 'prev') {
					if (offset === limit) {
						attrsMap.currentTarget.find(attrsMap.currentPrevButton).addClass('disabled');
					}
					attrsMap.currentTarget.find(attrsMap.currentNextButton).removeClass('disabled');
					offset = offset - limit * 2;
				}
				if (nav === 'next') {
					attrsMap.currentTarget.find(attrsMap.currentPrevButton).removeClass('disabled');
				}
			}

			if (url) {
				config.dataRequest.offset = offset + limit;
				if (!nav) {
					config.dataRequest.offset = 0;
					attrsMap.currentTarget.find(attrsMap.currentPrevButton).addClass('disabled');
					attrsMap.currentTarget.find(attrsMap.currentNextButton).removeClass('disabled');
				}

				url = processURL(config);

				getDataRequest(url, options, function(err, response) {
					if (err) {
						if (callbackMain) {
							callbackMain(err);
						} else {
							throw err;
						}
						return;
					}
					if (root) {
						dataLocal = response[root];
					} else {
						dataLocal = response;
					}
					if (dataLocal && dataLocal.length) {
						processPageForPaging(dataLocal, limit, function(dataProcess) {
							if (append) {
								addPage(dataProcess, null, true);
							} else {
								addPage(dataProcess);
							}
						});

					} else {
						if (config.navButtonsEnable) {
							attrsMap.currentTarget.find(attrsMap.currentNextButton).addClass('disabled');
						}
						attrsMap.currentLoading.hide();
						attrsMap.currentTarget.find(attrsMap.currentTfoot + ' tr').remove();
					}
					if (callbackMain) {
						callbackMain(null, dataLocal);
					}
				});
			}
		}

		function processPageForPaging(dataProcess, limit, callback) {
			if (limit > dataProcess.length) {
				attrsMap.currentTarget.find(attrsMap.currentNextButton).addClass('disabled');
			} else if (limit < dataProcess.length) {
				attrsMap.currentTarget.find(attrsMap.currentNextButton).removeClass('disabled');
			} else {
				attrsMap.currentTarget.find(attrsMap.currentNextButton).addClass('disabled');
			}
			if (dataProcess.length > limit) {
				dataProcess.splice(dataProcess.length - 1, 1);
			}
			if (config.dataRequest.offset >= config.dataRequest.limit) {
				attrsMap.currentTarget.find(attrsMap.currentPrevButton).removeClass('disabled');
			}
			callback(dataProcess);
		}

		function processActionsArea(template, options) {
			var tpl = $(template).html(), area = Mustache.render(tpl, options);
			return area;
		}

		function processHeader(items) {
			var header = [];
			var render = config.renderContent;
			if (items && items.length) {
				for (var i = 0; i < items.length; i++) {
					if (items[i].content) {
						header.push({
							'tbheadtitle': items[i].content
						});
					} else {
						header.push({
							'tbheadtitle': items[i].title,
							'tbclass': items[i].classorder,
							'tbdataorder': items[i].dataorder,
							'tbSize': items[i].size,
							'tbselectedorder': items[i].standard == true ? 'selected' : null
						});
					}
					if (!attrsMap.isMobile) {
						if (items[i].display == false) {
							attrsMap.hiddencolumns.push(i);
						}
					} else {
						if (attrsMap.mobileMainColumns && attrsMap.mobileMainColumns.length) {
							if ($.inArray(i, attrsMap.mobileMainColumns)) {
								attrsMap.hiddencolumns.push(i);
							}
						}
					}
				}
			} else if (Array.isArray(render)) {
				for (var i = 0; i < render.length; i++) {
					header.push({
						'tbheadtitle': render[i]
					});
				}
			}
			return header;
		}

		function processBody(items, template) {
			var data = {
				'items': items
			}, render = template || config.renderContent, tpl = $(attrsMap.tplTableBody).html(), partial, bodyTable;

			if (items.length && Array.isArray(render)) {
				var body = [];
				for (var i = 0; i < items.length; i++) {
					if (attrsMap.isMobile) {
						body.push('<tr class="mobile">');
					} else {
						body.push('<tr>');
					}
					for (var j = 0; j < render.length; j++) {
						if (items[i][render[j]] !== 'undefined') {

							var _td = '';
							_td += '<td>';
							if (attrsMap.isMobile && attrsMap.hiddencolumns.length) {
								if (j != attrsMap.hiddencolumns[j] && attrsMap.addMobileButtonOnce) {
									_td += '<span data-mobile-open><span class="fluigicon fluigicon-pointer-right" ></span></span>&nbsp;';
								} else {
									attrsMap.addMobileButtonOnce = true;
								}
							}
							_td += items[i][render[j]];
							_td += '</td>';

							body.push(_td);

						} else {
							body.push('<td></td>');
						}
						if (attrsMap.isMobile && j != attrsMap.hiddencolumns[j]) {
							attrsMap.addMobileButtonOnce = false;
						}
					}
					body.push('</tr>');
					if (attrsMap.isMobile) {
						attrsMap.addMobileButtonOnce = true;
					}
				}
				return body.join('');

			} else if (render && items.length && !Array.isArray(render)) {
				partial = $(render).html();
				bodyTable = Mustache.render(tpl, data, {
					dataTemplate: partial
				});
				return bodyTable;
			} else {
				return getEmptyMessageHtml();
			}
		}

		function getEmptyMessageHtml() {
			var cols = config.header.length, msg;
			msg = '<tr data-empty-message >';
			if (config.emptyMessageDefined) {
				msg += '<td class="text-center" colspan="' + cols + '">' + config.emptyMessage + '</td>';
			} else {
				msg += '<td class="text-center" colspan="' + cols + '">' + '<h4>' + config.emptyMessage + '</h4>'
					+ '</td>';
			}
			msg += '</tr>';
			return msg;
		}

		function baseAjax(url, settings, callback) {
			var options = {};
			if (!settings) {
				settings = {};
			}
			settings.url = url;
			var basicConfig = {
				dataType: 'json',
				crossDomain: true,
				cache: false
			};
			options = Object.create(basicConfig);
			$.extend(options, settings);

			jQuery.support.cors = true;

			FLUIGC.ajax(options, function(error, data) {
				if (!error) {
					if (config.dataRequest && config.dataRequest.formatData) {
						if (config.navButtons && config.navButtons.enabled != true
							&& data[config.dataRequest.root].length > config.dataRequest.limit) {
							data[config.dataRequest.root].splice(data[config.dataRequest.root].length - 1, 1);
						}
						data = config.dataRequest.formatData(data);
					}
					callback(null, data);
				} else {
					callback(error);
				}
			});
		}

		function doAjax(url, options, callback) {
			baseAjax(url, options, callback);
		}

		function getDataRequest(url, options, callback) {
			doAjax(url, options, function(err, response) {
				if (err) {
					callback(err);
				} else {
					callback(null, response);
				}
			});
		}

		function isArray(obj) {
			return Object.prototype.toString.call(obj) === "[object Array]";
		}

		function getRowByIndex(index, isHtml) {
			if (isHtml) {
				return attrsMap.currentTarget.find(attrsMap.currentTr + ':eq(' + index + ')');
			}
			return attrsMap.data[index];
		}

		function getSelectedRow() {
			var arrSelectedItems = [], selected = attrsMap.currentTarget.find(attrsMap.currentTr + '.'
				+ config.classSelected);
			if (selected.length) {
				attrsMap.selectedItems = [];
				for (var i = 0; i < selected.length; i++) {
					attrsMap.selectedItems.push($(selected[i]).index());
				}
				arrSelectedItems = attrsMap.selectedItems;
			}
			return arrSelectedItems;
		}

		function create(target, settings) {
			var configuration = defineSettings(target, settings);
			attrsMap.data = configuration.data;
			createGrid(configuration);
		}

		function reload(newData, template) {
			clearLoading();
			attrsMap.loadTarget = config.target + ' ' + attrsMap.currentTable;
			if (newData) {
				attrsMap.dataReload = newData;
				attrsMap.data = newData;
			} else {
				if (config.dataRequest.url) {
					processRequest(null, false);
					return;
				} else {
					attrsMap.data = attrsMap.dataReload || attrsMap.data;
				}
			}
			config.dataRequest.offset = 0;
			attrsMap.selectedItems.length = 0;
			attrsMap.currentTarget.find(attrsMap.currentPrevButton).addClass('disabled');
			attrsMap.currentTarget.find(attrsMap.currentNextButton).removeClass('disabled');
			if (!template) {
				template = null;
			}
			addPage(attrsMap.data, template, false);
		}

		function recreate(newData, template) {
			if (newData) {
				attrsMap.dataReload = newData;
				attrsMap.data = newData;
			} else {
				attrsMap.data = attrsMap.dataReload || attrsMap.data;
			}
			create(config.target, {
				data: attrsMap.data,
				renderContent: template || config.renderContent,
				header: config.header,
				multiSelect: config.multiSelect,
				classSelected: config.classSelected,
				textSearch: config.textSearch,
				searchEnabled: config.searchEnabled,
				actionsEnabled: config.actions.enabled,
				actionsTemplate: config.actionsTemplate,
				onSearch: config.search.onSearch,
				onScroll: config.scroll.onScroll
			});
			attrsMap.selectedItems = [];
		}

		function loadTemplate(callback) {
			if (fluigTemplates) {
				attrsMap.isFileTemplateLoaded = true;
				callback();
			} else {
				throw new Error('Datatable component: FLUIGCTemplates not found.');
			}
		}

		function addPage(newData, template, isAppend) {
			var tpl, html;
			tpl = processBody(newData, template);
			html = Mustache.render(tpl, newData);
			if (isAppend) {
				if (attrsMap.data.length) {
					attrsMap.data = attrsMap.data.concat(newData);
				} else {
					attrsMap.data = newData;
				}
				attrsMap.currentTarget.find(attrsMap.currentTbody).append(html);

			} else {
				attrsMap.data = newData;
				attrsMap.currentTarget.find(attrsMap.currentTbody).html(html);
			}
			if (attrsMap.data.length) {
				hideColumns();
			} else {
				hideColumns('header');
			}
			if (config.draggable && config.draggable.enabled) {

				attrsMap.currentTarget.find(attrsMap.currentTbody).sortable('refresh');

				attrsMap.currentTarget.find(attrsMap.currentTr).each(function(i, data) {
					$(data).addClass('ui-sortable-handle');
					$(data).data('index', i);
					$(data).data('info', attrsMap.data[i]);
				});
			}
			attrsMap.currentTarget.trigger('fluig.datatable.loadcomplete');
			clearLoading();
		}

		function removeRowByIndex(index) {
			if (index >= 0) {
				var indexToRemove = attrsMap.selectedItems.indexOf(index), el = getRowByIndex(index, true);
				if (indexToRemove != -1) {
					getSelectedRow().splice(indexToRemove, 1);
					attrsMap.data.splice(index, 1);
				} else {
					attrsMap.data.splice(index, 1);
				}
				getRowByIndex(index, true).remove();
				return el;
			}
		}

		function removeRows(arrayIndex) {
			var arr = [], i, len = attrsMap.data.length;
			if (arrayIndex.length) {
				for (i = 0; i < len; i++) {
					if (arrayIndex.indexOf(i) == -1) {
						arr.push(attrsMap.data[i]);
					} else if (len == 1 && arrayIndex.indexOf(i) >= 0) {
						arr = [];
					}
				}
				attrsMap.data = arr;
				reload(attrsMap.data);
			}
		}

		function updateRowByIndex(index, newData, template) {
			if (newData) {
				var currentData = attrsMap.data;
				attrsMap.data = [newData];
				var tpl = processBody(attrsMap.data, template), html = Mustache.render(tpl, attrsMap.data), isSelected = getRowByIndex(
					index, true).hasClass(config.classSelected);
				getRowByIndex(index, true).replaceWith(html);
				hideColumns();
				if (isSelected) {
					getRowByIndex(index, true).addClass(config.classSelected);
				}
				currentData[index] = newData;
				attrsMap.data = currentData;
			}
		}

		function addRowByIndex(index, newData, template) {
			var emptyMsg, tpl, html, position;
			if (newData) {
				tpl = processBody([newData], template);
				html = Mustache.render(tpl, [newData]);
				position = attrsMap.currentTarget.find(attrsMap.currentTr);

				if ((index == 0 && position.length == 0) || index == null) {
					attrsMap.currentTarget.find(attrsMap.currentTbody).append(html);
				} else {
					if (index === attrsMap.data.length) {
						attrsMap.currentTarget.find(attrsMap.currentTbody).append(html);
					} else {
						getRowByIndex(index, true).before(html);
					}
				}
				emptyMsg = attrsMap.currentTarget.find('[data-empty-message]');
				if ($(emptyMsg).length) {
					$(emptyMsg).remove();
				}
				if (index == null) {
					attrsMap.data.push(newData);
				} else {
					attrsMap.data.splice(index, 0, newData);
				}

				hideColumns();
				if (config.draggable && config.draggable.enabled) {
					attrsMap.currentTarget.find(attrsMap.currentTr).css('cursor', 'move');
				}
				updateDatatableIndex();
			}
		}

		function updateDatatableIndex() {
			attrsMap.currentTarget.find(attrsMap.currentTr).each(function(i, data) {
				$(data).data('index', i);
				$(data).data('info', attrsMap.data[i]);
			});
		}

		function getData() {
			return attrsMap.data;
		}

		function getClassSelected() {
			return config.classSelected;
		}

		function hideLoading() {
			attrsMap.currentLoading.hide();
		}

		function showLoading(target) {
			attrsMap.currentLoading.show(target);
		}

		function addEvent(event) {
			var hasFound = attrsMap.eventsAllowed.filter(function(elm) {
				return elm === event;
			});
			if (hasFound.length) {
				attrsMap.events.push(event);
			}
		}

		function checkEvents(event) {
			var hasFound = attrsMap.events.filter(function(elm) {
				return elm === event;
			});
			if (hasFound.length) {
				return true;
			}
		}

		function on(event, callback) {
			addEvent(event);
			attrsMap.currentTarget.on(event, callback);
		}

		function destroy() {
			attrsMap.currentTarget.html('');
			attrsMap.data = [];
			if (typeof $._data(attrsMap.currentTarget[0], 'events') !== "undefined") {
				attrsMap.currentTarget.off();
			}
		}

		return {

			addPage: function(newData, template, isAppend) {
				addPage(newData, template, isAppend);
				return this;
			},

			reload: function(newData, template) {
				reload(newData, template);
				return this;
			},

			addRow: function(index, newData, template) {
				addRowByIndex(index, newData, template);
				return this;
			},

			removeRow: function(index) {
				return removeRowByIndex(index);
			},

			removeRows: function(arrayIndex) {
				return removeRows(arrayIndex);
			},

			updateRow: function(index, newData, template) {
				updateRowByIndex(index, newData, template);
				return this;
			},

			getRow: function(index, isHtml) {
				return getRowByIndex(index, isHtml);
			},

			selectedRows: function() {
				return getSelectedRow();
			},

			nextPage: function(limit, offset) {
				var that = this;
				paginate(limit, offset, function(data) {
					that.addPage(data);
				});
				return this;
			},

			getClassSelected: function() {
				return getClassSelected();
			},

			getData: function() {
				return getData();
			},

			showColumns: function() {
				showColumns();
				return this;
			},

			showColumn: function(index) {
				showColumn(index);
				return this;
			},

			hideColumn: function(index) {
				hideColumn(index);
				return this;
			},

			hideLoading: function() {
				hideLoading();
				return this;
			},

			showLoading: function(target) {
				showLoading(target);
				return this;
			},

			dragInfo: function() {
				return dragInfo();
			},

			on: function(event, callback) {
				on(event, callback);
				return this;
			},

			destroy: function() {
				destroy();
			}
		};
	};

	return FluigGrid;

})(window.FLUIGC || {}, jQuery, FLUIGCTemplates);

/*
  Bootstrap - File Input
  ======================

  This is meant to convert all file input tags into a set of elements that displays consistently in all browsers.

  Converts all
  <input type="file">
  into Bootstrap buttons
  <a class="btn">Browse</a>

 */
(function($) {

	$.fn.bootstrapFileInput = function() {

		this.each(
			function(i, elem) {

				var $elem = $(elem);

				// Add [processed] class to avoid double processing of input file element
				if (typeof $elem.attr('data-bfi-processed-class') != 'undefined') {
					// Check if the element already has the [processed] flag on it and skip it if it does
					if ($elem.hasClass($elem.attr('data-bfi-processed-class'))) {
						return;
					}
					$elem.addClass($elem.attr('data-bfi-processed-class'));
				}

				// Maybe some fields don't need to be standardized.
				if (typeof $elem.attr('data-bfi-disabled') != 'undefined') {
					return;
				}

				// Set the word to be displayed on the button
				var buttonWord = 'Browse';

				if (typeof $elem.attr('title') != 'undefined') {
					buttonWord = $elem.attr('title');
				}

				var className = '';

				if (!!$elem.attr('class')) {
					className = ' ' + $elem.attr('class');
				}

				// Now we're going to wrap that input field with a Bootstrap button.
				// The input will actually still be there, it will just be float above and transparent (done with the CSS).
				$elem.wrap('<a class="file-input-wrapper btn btn-default ' + className + '"></a>').parent().prepend(
					$('<span></span>').html(buttonWord));
			})

		// After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
		// This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
		.promise().done(function() {

			// As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
			// This gives us the pointer cursor that FF denies us
			$('.file-input-wrapper').mousemove(function(cursor) {

				var input, wrapper, wrapperX, wrapperY, inputWidth, inputHeight, cursorX, cursorY;

				// This wrapper element (the button surround this file input)
				wrapper = $(this);
				// The invisible file input element
				input = wrapper.find("input");
				// The left-most position of the wrapper
				wrapperX = wrapper.offset().left;
				// The top-most position of the wrapper
				wrapperY = wrapper.offset().top;
				// The with of the browsers input field
				inputWidth = input.width();
				// The height of the browsers input field
				inputHeight = input.height();
				//The position of the cursor in the wrapper
				cursorX = cursor.pageX;
				cursorY = cursor.pageY;

				//The positions we are to move the invisible file input
				// The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
				moveInputX = cursorX - wrapperX - inputWidth + 20;
				// Slides the invisible input Browse button to be positioned middle under the cursor
				moveInputY = cursorY - wrapperY - (inputHeight / 2);

				// Apply the positioning styles to actually move the invisible file input
				input.css({
					left: moveInputX,
					top: moveInputY
				});
			});

			$('body').on('change', '.file-input-wrapper input[type=file]', function() {

				var fileName;
				fileName = $(this).val();

				// Remove any previous file names
				$(this).parent().next('.file-input-name').remove();
				if (!!$(this).prop('files') && $(this).prop('files').length > 1) {
					fileName = $(this)[0].files.length + ' files';
				} else {
					fileName = fileName.substring(fileName.lastIndexOf('\\') + 1, fileName.length);
				}

				// Don't try to show the name if there is none
				if (!fileName) {
					return;
				}

				var selectedFileNamePlacement = $(this).data('filename-placement');
				if (selectedFileNamePlacement === 'inside') {
					// Print the fileName inside
					$(this).siblings('span').html(fileName);
					$(this).attr('title', fileName);
				} else {
					// Print the fileName aside (right after the the button)
					$(this).parent().after('<span class="file-input-name">' + fileName + '</span>');
				}
			});

		});

	};

	// Add the styles before the first stylesheet
	// This ensures they can be easily overridden with developer styles
	var cssHtml = '<style>'
		+ '.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }'
		+ '.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'
		+ '.file-input-name { margin-left: 8px; }' + '</style>';
	$('link[rel=stylesheet]').eq(0).before(cssHtml);

})(jQuery);

/**
 * AJAX File Upload
 * http://github.com/davgothic/AjaxFileUpload
 * 
 * Copyright (c) 2010-2013 David Hancock (http://davidhancock.co)
 *
 * Thanks to Steven Barnett for his generous contributions
 *
 * Licensed under the MIT license ( http://www.opensource.org/licenses/MIT )
 */

;
(function($) {
	$.fn.AjaxFileUpload = function(options) {

		var defaults = {
			action: "YOUR_URL",
			onChange: function(filename) {
			},
			onSubmit: function(filename) {
			},
			onComplete: function(filename, response) {
			}
		}, settings = $.extend({}, defaults, options), randomId = (function() {
			var id = 0;
			return function() {
				return "_AjaxFileUpload" + id++;
			};
		})();

		return this.each(function() {
			var $this = $(this);
			if ($this.is("input") && $this.attr("type") === "file") {
				$this.bind("change", onChange);
			}
		});

		function onChange(e) {
			var $element = $(e.target), id = $element.attr('id'), $clone = $element.removeAttr('id').clone().attr('id',
				id).AjaxFileUpload(options), filename = $element.val().replace(/.*(\/|\\)/, ""), iframe = createIframe(), form = createForm(iframe);

			// We append a clone since the original input will be destroyed
			$clone.insertBefore($element);

			settings.onChange.call($clone[0], filename);

			iframe.bind("load", {
				element: $clone,
				form: form,
				filename: filename
			}, onComplete);

			form.append($element).bind("submit", {
				element: $clone,
				iframe: iframe,
				filename: filename
			}, onSubmit).submit();
		}

		function onSubmit(e) {
			var data = settings.onSubmit.call(e.data.element, e.data.filename);

			// If false cancel the submission
			if (data === false) {
				// Remove the temporary form and iframe
				$(e.target).remove();
				e.data.iframe.remove();
				return false;
			} else {
				// Else, append additional inputs
				for ( var variable in data) {
					$("<input />").attr("type", "hidden").attr("name", variable).val(data[variable]).appendTo(e.target);
				}
			}
		}

		function onComplete(e) {
			var $iframe = $(e.target), doc = ($iframe[0].contentWindow || $iframe[0].contentDocument).document, response = doc.body.innerHTML;

			if (response) {
				try {
					response = $.parseJSON(response);
				} catch (e) {
					response = response;
				}

			} else {
				response = {};
			}

			settings.onComplete.call(e.data.element, e.data.filename, response);

			// Remove the temporary form and iframe
			e.data.form.remove();
			$iframe.remove();
		}

		function createIframe() {
			var id = randomId();

			// The iframe must be appended as a string otherwise IE7 will pop up the response in a new window
			// http://stackoverflow.com/a/6222471/268669
			$("body").append(
				'<iframe src="javascript:false;" name="' + id + '" id="' + id + '" style="display: none;"></iframe>');

			return $('#' + id);
		}

		function createForm(iframe) {
			return $("<form />").attr({
				method: "post",
				action: settings.action,
				enctype: "multipart/form-data",
				target: iframe[0].name
			}).hide().appendTo("body");
		}
	};
})(jQuery);

/*
 * FLIUGC.utilities
 * A singleton module that provide utilities functions
 */
var FLUIGC = (function(FluigUtilities, $) {
	FluigUtilities.utilities = (function() {
		return {
			
			ctrlIsPressed: function(ev){
				if (ev.metaKey || ev.ctrlKey) {
					return true;
				} else {
					return false;
				}
			},
			
			parseBoolean: function(value) {
				return value.toLowerCase() == 'true';
			},

			randomUUID: function() {
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					var r = Math.random() * 16 | 0;
					var v = c === 'x' ? r : (r & 0x3 | 0x8);
					return v.toString(16);
				});
			},

			normalizeLink: function(val) {
				var character = val.match(/[^a-zA-Z0-9_.-]/gi), returnVal = val;
				$(character).each(function(idx, obj) {
					switch (obj.toLowerCase()) {
						case "á":
						case "ã":
						case "à":
							returnVal = returnVal.replace(/á|ã|à/gi, "a").toLowerCase();
							break;
						case "é":
						case "ê":
							returnVal = returnVal.replace(/é|ê/gi, "e").toLowerCase();
							break;
						case "í":
							returnVal = returnVal.replace(/í/gi, "i").toLowerCase();
							break;
						case "ó":
						case "ô":
						case "õ":
							returnVal = returnVal.replace(/ó|ô|õ/gi, "o").toLowerCase();
							break;
						case "ú":
						case "ü":
							returnVal = returnVal.replace(/ú|ü/gi, "u").toLowerCase();
							break;
						case "ñ":
							returnVal = returnVal.replace(/ñ/gi, "n").toLowerCase();
							break;
						case "ç":
							returnVal = returnVal.replace(/ç/gi, "c").toLowerCase();
							break;
						case " ":
							returnVal = returnVal.replace(/\s/gi, "-").toLowerCase();
							break;
						case "@":
							returnVal = returnVal.replace(/@/gi, "a").toLowerCase();
							break;
						default:
							returnVal = returnVal.replace(/[^a-zA-Z0-9_.-]/gi, "-").toLowerCase();
							break;
					}
				});
				return returnVal;
			},

			parseVersion: function(value) {
				value = value.toString();
				var len = value.length;
				var pos = len - 3;
				var ini = 0;
				return value.substring(ini, pos) + "." + value.substring(pos, len);
			},

			parseInputFile: function(selector) {
				$(selector).bootstrapFileInput();
			},

			uploadFileForIE: function(selector, settings) {
				return $(selector).AjaxFileUpload(settings);
			},

			checkDevice: function() {

				var i = 0, isMobile = false, iDevice = ['iPad', 'iPhone', 'iPod', 'Android', 'webOS', 'BlackBerry',
					'IEMobile', 'Opera Mini'];

				for (; i < iDevice.length; i++) {
					if (navigator.platform.toLowerCase().indexOf(iDevice[i].toLowerCase()) > -1) {
						isMobile = true;
						break;
					}
					if (navigator.userAgent.toLowerCase().indexOf(iDevice[i].toLowerCase()) > -1) {
						isMobile = true;
						break;
					}
				}

				var device = {
					"device": navigator.platform,
					"browser/os": navigator.userAgent,
					"isMobile": isMobile
				};

				return device;
			},

			checkBrowser: function() {

				var browserDetect = {
					init: function() {
						this.browser = this.searchString(this.dataBrowser) || "Other";
						this.version = this.searchVersion(navigator.userAgent)
							|| this.searchVersion(navigator.appVersion) || "Unknown";
					},

					searchString: function(data) {
						for ( var i = 0; i < data.length; i++) {
							var dataString = data[i].string;
							this.versionSearchString = data[i].subString;
							if (dataString.indexOf(data[i].subString) != -1) {
								return data[i].identity;
							}
						}
					},

					searchVersion: function(dataString) {
						var index = dataString.indexOf(this.versionSearchString);
						if (index > -1) {
							var version = parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
							if (this.versionSearchString == "Trident") {
								version += 4;
							}
							return version;
						}
					},

					dataBrowser: [{
						string: navigator.userAgent,
						subString: "Chrome",
						identity: "chrome"
					}, {
						string: navigator.userAgent,
						subString: "MSIE",
						identity: "msie"
					}, {
						string: navigator.userAgent,
						subString: "Trident",
						identity: "msie"
					}, {
						string: navigator.userAgent,
						subString: "Firefox",
						identity: "firefox"
					}, {
						string: navigator.userAgent,
						subString: "Safari",
						identity: "safari"
					}, {
						string: navigator.userAgent,
						subString: "Opera",
						identity: "opera"
					}]
				};

				//precisa criar um mecanismo que uma vez criado não precisa mais ficar recriando para cada chamada	
				browserDetect.init();

				var resultBrowser = {
					name: browserDetect.browser,
					version: browserDetect.version,
					isIe: function() {
						return browserDetect.browser === "msie";
					},
					isIe9: function() {
						return browserDetect.browser === "msie" && browserDetect.version === 9;
					},
					isIe10: function() {
						return browserDetect.browser === "msie" && browserDetect.version === 10;
					},
					isFirefox: function() {
						return browserDetect.browser === "firefox";
					}
				};

				return resultBrowser;
			},

			preventXSS: function(str) {
				return str.replace(/>/gi, '&gt;').replace(/</gi, '&lt;');
			},

			isolatedScroll: function(target) {
				$(document)
					.on(
						'mousewheel DOMMouseScroll',
						target,
						function(e) {
							var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail, bottomOverflow = this.scrollTop
								+ $(this).outerHeight() - this.scrollHeight >= 0, topOverflow = this.scrollTop <= 0;

							if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
								e.preventDefault();
							}
						});
			},

			rgbToHex: function(rgb) {
				rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
				return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2)
					+ ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2)
					+ ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
			},
			
			scrollTo: function(target, duration) {
				var $target = $(target);
				
				duration = duration || 0;

				$('html, body').stop().animate({
					'scrollTop': $target.offset().top
				}, duration, 'swing');
			}
		};
	}());

	return FluigUtilities;

})(window.FLUIGC || {}, jQuery);
var FLUIGC = (function(FluigPopover, $) {
	var templates = {};
	FluigPopover.popover = function(selector, settings) {
		var basicConfig = {
			selector: false,
			trigger: 'click',
			placement: 'auto',
			maxheight: null,
			template: '<div class="fluig-style-guide popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
			delay: {}
		}, config = Object.create(basicConfig);

		if (settings.trigger && settings.trigger.indexOf('hover') > -1) {
			basicConfig.delay = {
				show: 50,
				hide: 60
			};
		}

		$.extend(config, settings);

		if (config.maxheight) {
			config.template = $(config.template).find('.popover-content').css('max-height', config.maxheight).addClass(
				'fs-overflow-auto').parent()[0].outerHTML;
		}

		return $(selector).popover(config);

	};

	return FluigPopover;

})(window.FLUIGC || {}, jQuery);

var FLUIGC = (function(FluigTime, $) {
	'use strict';
	FluigTime.timeInteraction = (function() {
		var i18n = {
			'pt_BR': {
				'labels': {
					'ago': '{0} atrás'
				},
				'timeLabels': ['segundo', 'minuto', 'hora', 'dia', 'mês', 'ano'],
				'pluralTimeLabels': ['segundos', 'minutos', 'horas', 'dias', 'meses', 'anos']
			},
			'en_US': {
				'labels': {
					'ago': '{0} ago'
				},
				'timeLabels': ['second', 'minute', 'hour', 'day', 'month', 'year'],
				'pluralTimeLabels': ['seconds ', 'minutes', 'hours', 'days', 'months', 'years']
			},
			'es': {
				'labels': {
					'ago': 'hace {0}'
				},
				'timeLabels': ['segundo', 'minuto', 'hora', 'día', 'mes', 'año'],
				'pluralTimeLabels': ['segundos', 'minutos', 'horas', 'días', 'meses', 'años']
			}
		}, interval, locale;

		var baseConfig = {
			period: 10000,
			parent: 'body',
			attrName: 'creation-date',
			selector: '[data-creation-date]'
		};

		function refreshPeriods(config) {
			clearInterval(interval);
			interval = setInterval(function() {
				showTime(config);
			}, config.period);
		}

		function createTitle(config) {
			var $dates = $(config.selector, config.parent), len = $dates.length, i = 0, formattedDate, ts;

			for (i; i < len; i++) {
				ts = $($dates[i]).data(config.attrName);
				formattedDate = formatDate(ts);
				$($dates[i]).attr('title', formattedDate);
			}
		}

		function showTime(config) {
			var $dates = $(config.selector, config.parent), dateNow = Date.now(), len = $dates.length, i = 0, fmtDate, ts;

			for (i; i < len; i++) {
				ts = dateNow - $($dates[i]).data(config.attrName);
				ts = ts > 1000 ? ts : 1000;
				fmtDate = tsToRemainingTime(ts);

				$($dates[i]).text(i18n[locale].labels['ago'].replace('{0}', fmtDate.time + ' ' + fmtDate.unit + ' '));
			}
		}

		function tsToRemainingTime(ts) {
			var times = [1000, 60, 60, 24, 30.4, 12], len = times.length, i = 0, currentNum, cacheNum, label;

			currentNum = ts;

			for (i; i < len; i++) {
				currentNum /= times[i];
				if (~~currentNum <= 0) {
					break;
				}
				cacheNum = currentNum;
			}

			label = i18n[locale].timeLabels[i - 1];

			if (~~cacheNum > 1) {
				label = i18n[locale].pluralTimeLabels[i - 1];
			}

			return {
				time: ~~cacheNum,
				unit: label
			};
		}

		function formatDate(ts) {
			var date = new Date(ts), day = date.getDate(), month = date.getMonth() + 1, year = date.getFullYear(), hours = date
				.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();

			hours = timeFormat(hours);
			minutes = timeFormat(minutes);
			seconds = timeFormat(seconds);

			date = day + '/' + month + '/' + year + ' - ' + hours + ':' + minutes + ':' + seconds;

			return date;
		}

		function timeFormat(i) {
			//Add zero in front of numbers < 10
			if (i < 10) {
				i = '0' + i;
			}

			return i;
		}

		return {
			init: function(settings) {
				var config = Object.create(baseConfig), $dates;

				$.extend(config, settings);

				locale = window.WCMAPI ? WCMAPI.getLocale() : 'pt_BR';

				$dates = $(config.selector, config.parent);

				if ($dates.length) {
					showTime(config);
					createTitle(config);
					refreshPeriods(config);
				}
			},
			destroy: function() {
				if (interval) {
					clearInterval(interval);
				}
			}
		};
	})();

	return FluigTime;

})(window.FLUIGC || {}, jQuery);

var FLUIGC = (function(FluigMessage, $) {

	var templates = {};

	FluigMessage.message = (function() {
		var locale = window.WCMAPI ? WCMAPI.getLocale() : 'pt_BR', i18n = {
			'pt_BR': {
				'yes': 'Sim',
				'no': 'Não',
				'ok': 'OK',
				'title': 'Mensagem',
				'message': 'Mensagem'
			},
			'en_US': {
				'yes': 'Yes',
				'no': 'No',
				'ok': 'OK',
				'title': 'Message',
				'message': 'Message'
			},
			'es': {
				'yes': 'Sí',
				'no': 'No',
				'ok': 'OK',
				'title': 'Mensaje',
				'message': 'Mensaje'
			}
		}[locale];

		function init(config) {
			FLUIGC.modal(config);
		}

		function alert(config, cb) {
			var compId = (new Date().getTime()).toString();

			if (!FLUIGC.modal) {
				throw new Error('Message requires Modal.');
			}

			if (!config) {
				config = {};
			}

			config.id = 'fluig-message-' + compId;
			config.title = config.title || i18n['title'];
			config.content = config.message || i18n['message'];
			config.actions = [{
				'label': config.label || i18n['ok'],
				'bind': 'data-alert-ok-' + compId,
				'classType': 'btn-primary',				
				'actionClose': true,
				'autofocus': true
			}];

			$(document).on('click', '[' + config.actions[0].bind + ']', function(ev) {
				if (cb) {
					cb(this, ev);
				}
				$('#' + config.id).modal('hide');
			});

			init(config);
		}

		function confirm(config, cb) {
			var compId = (new Date().getTime()).toString();

			if (!FLUIGC.modal) {
				throw new Error('Message requires Modal.');
			}

			if (!config) {
				config = {};
			}

			config.id = 'fluig-message-' + compId;
			config.title = config.title || i18n['title'];
			config.content = config.message || i18n['message'];
			config.actions = [{
				'label': config.labelYes || i18n['yes'],
				'bind': 'data-confirm-yes-' + compId,
				'classType': 'btn-primary',
				'autofocus': true
			}, {
				'label': config.labelNo || i18n['no'],
				'bind': 'data-confirm-no-' + compId,
				'classType': 'btn-default',
				'actionClose': true
			}];

			$(document).on('click', '[' + config.actions[0].bind + ']', function(ev) {
				if (cb) {
					cb(true, this, ev);
					$('#' + config.id).modal('hide');
				}
			});

			$(document).on('click', '[' + config.actions[1].bind + ']', function(ev) {
				if (cb) {
					cb(false, this, ev);
				}
				$('#' + config.id).modal('hide');
			});

			init(config);
		}

		return {
			alert: alert,
			confirm: confirm
		};
	})();

	return FluigMessage;

})(window.FLUIGC || {}, jQuery);

var FLUIGC = (function(FluigSwitch, $) {
	FluigSwitch.switcher = (function() {

		function init(element) {
			$(element).bootstrapSwitch();
		}

		function getState(element) {
			return $(element).bootstrapSwitch('state');
		}

		function setTrue(element) {
			$(element).bootstrapSwitch('state', true);
		}

		function setFalse(element) {
			$(element).bootstrapSwitch('state', false);
		}

		function toggleState(element) {
			$(element).bootstrapSwitch('toggleState', true);
		}

		function isReadOnly(element, state) {
			$(element).bootstrapSwitch('readonly', state);
		}

		function enable(element) {
			$(element).bootstrapSwitch('disabled', false);
		}

		function disable(element) {
			$(element).bootstrapSwitch('disabled', true);
		}

		function destroy(element) {
			$(element).bootstrapSwitch('destroy');
		}

		function onChange(element, callback) {
			$(element).on('switchChange.bootstrapSwitch', callback);
		}

		function onChangeSendScope(element, scope, callback) {
			$(element).on('switchChange.bootstrapSwitch', function(ev, state) {
				callback(this, ev, state, scope);
			});
		}

		function onInit(element, callback) {
			$(element).on('init.bootstrapSwitch', callback);
		}

		function onInitSendScope(element, scope, callback) {
			$(element).on('init.bootstrapSwitch', function(ev) {
				callback(this, ev, scope);
			});
		}

		function initAll(element, baseId) {
			var recursive = function(list, baseId) {
				if (list != undefined) {
					for ( var i = 0; i < list.length; i++) {
						var child = list[i];
						if (child.type && (child.type == "checkbox" || child.type == "radio")) {
							if (baseId == null || (child.name != null && child.name.indexOf(baseId + "__") == 0)) {
								FluigSwitch.switcher.init('#' + child.id);
							}
						} else if (child.style["display"] != "none") {
							recursive(child.children, baseId)
						}
					};
				}
			};

			var list = $(element).children();
			recursive(list, baseId);
		}

		return {
			init: init,
			getState: getState,
			setTrue: setTrue,
			setFalse: setFalse,
			toggleState: toggleState,
			isReadOnly: isReadOnly,
			enable: enable,
			disable: disable,
			destroy: destroy,
			onChange: onChange,
			onChangeSendScope: onChangeSendScope,
			onInit: onInit,
			onInitSendScope: onInitSendScope,
			initAll: initAll
		};

	})();

	return FluigSwitch;

})(window.FLUIGC || {}, jQuery);
var FLUIGC = (function(FluigSlider, $) {
	FluigSlider.slider = (function() {

		function init(element, settings) {
			if (settings) {
				var basicConfig = {
					min: 0,
					max: 10,
					step: 1,
					range: true,
					value: [2, 6]
				}, config = Object.create(basicConfig);
				$.extend(config, settings);

				$(element).bootstrapSlider(config);
			} else {
				$(element).bootstrapSlider();
			}
		}

		function getValue(element) {
			return $(element).bootstrapSlider('getValue');
		}

		function setValue(element, value, triggerSlideEvent) {
			var slideEvent = triggerSlideEvent || false;
			$(element).bootstrapSlider('setValue', value, slideEvent);
		}

		function destroy(element) {
			$(element).bootstrapSlider('destroy');
		}

		function disable(element) {
			$(element).bootstrapSlider('disable');
		}

		function enable(element) {
			$(element).bootstrapSlider('enable');
		}

		function isEnabled(element) {
			return $(element).bootstrapSlider('isEnabled');
		}

		function toggle(element) {
			$(element).bootstrapSlider('toggle');
		}

		function refresh(element) {
			$(element).bootstrapSlider('refresh');
		}

		function onSlideStart(element, callback) {
			$(element).on('slideStart', callback);
		}

		function onSlideStartSendScope(element, scope, callback) {
			$(element).on('slideStart', function(ev) {
				callback(this, ev, scope);
			});
		}

		function onSlideStop(element, callback) {
			$(element).on('slideStop', callback);
		}

		function onSlideStopSendScope(element, scope, callback) {
			$(element).on('slideStop', function(ev) {
				callback(this, ev, scope);
			});
		}

		function onSlide(element, callback) {
			$(element).on('slide', callback);
		}

		function onSlideSendScope(element, scope, callback) {
			$(element).on('slide', function(ev) {
				callback(this, ev, scope);
			});
		}

		return {
			init: init,
			getValue: getValue,
			setValue: setValue,
			destroy: destroy,
			disable: disable,
			enable: enable,
			isEnabled: isEnabled,
			toggle: toggle,
			refresh: refresh,
			onSlide: onSlide,
			onSlideSendScope: onSlideSendScope,
			onSlideStart: onSlideStart,
			onSlideStartSendScope: onSlideStartSendScope,
			onSlideStop: onSlideStop,
			onSlideStopSendScope: onSlideStopSendScope
		};

	})();

	return FluigSlider;

})(window.FLUIGC || {}, jQuery);
var FLUIGC = (function(FluigCalendar, $) {
	'use strict';
	FluigCalendar.calendar = function(elTarget, settings) {

		var attrsMap = {}, locale, config = defineSettings(elTarget, settings);

		initCalendar();

		function defineSettings(target, settings) {
			if (!settings) {
				settings = {};
			}
			settings.target = target;

			locale = window.WCMAPI ? WCMAPI.getLocale() : 'pt_BR';

			if (locale === 'en_US') {
				locale = 'en';
			}

			var basicConfig = {
				showToday: true,
				pickTime: false,
				language: locale
			}
			config = Object.create(basicConfig);
			$.extend(config, settings);

			return config;
		}

		function initCalendar() {
			$(config.target).datetimepicker(config);
		}

		function setMinDate(newDate) {
			$(config.target).data("DateTimePicker").setMinDate(newDate);
		}

		function setMaxDate(newDate) {
			$(config.target).data("DateTimePicker").setMaxDate(newDate);
		}

		function show() {
			$(config.target).data("DateTimePicker").show();
		}

		function disable() {
			$(config.target).data("DateTimePicker").disable();
		}

		function enable() {
			$(config.target).data("DateTimePicker").enable();
		}

		function setDate(newDate) {
			$(config.target).data("DateTimePicker").setDate(newDate);
		}

		function getDate() {
			return $(config.target).data("DateTimePicker").getDate();
		}

		function getTimestampDate() {
			var theDate = $(config.target).data("DateTimePicker").getDate();
			return new Date(theDate).getTime();
		}

		return {

			setMinDate: function(newDate) {
				setMinDate(newDate);
			},

			setMaxDate: function(newDate) {
				setMaxDate(newDate);
			},

			show: function() {
				show();
			},

			disable: function() {
				disable();
			},

			enable: function() {
				enable();
			},

			setDate: function(newDate) {
				setDate(newDate);
			},

			getDate: function() {
				return getDate();
			},

			getTimestampDate: function() {
				return getTimestampDate();
			}
		}
	}

	/**
	 * Formats a Date object into a date-time string.
	 * 
	 * @param {Date} date - the Date object to be formatted into a date-time string.
	 * @param {String} [pattern] - the pattern describing the date and time format
	 * @param {String} [locale] - the locale whose date format symbols should be used
	 * @return {String} the formatted date-time string
	 */
	FluigCalendar.calendar.formatDate = function(date, pattern, locale) {
		if (typeof pattern !== "string") {
			pattern = 'L LTS';
		}
		if (typeof locale !== "string") {
			locale = 'pt';
			if (window.WCMAPI) {
				locale = WCMAPI.getLocale().split("_")[0] || 'pt';
			}
		}
		return moment(date).locale(locale).format(pattern);
	}

	return FluigCalendar;

})(window.FLUIGC || {}, jQuery);
var FLUIGC = (function(FluigLoading, $) {
	'use strict';
	FluigLoading.loading = function(elTarget, settings) {

		var attrsMap = {
			'target': null
		};

		var config = defineSettings(elTarget, settings);

		initLoading();

		function defineSettings(target, settings) {
			if (!settings) {
				settings = {};
			}

			settings.target = target;

			settings.textMessage = settings.textMessage || '';

			// garantir que se o target for a window, o z-index seja o máximo, caso
			// contrário deixa ele como o menor z-index configurado para os componentes.
			var baseZ = target === window ? 2147483647 : 1000;

			var basicConfig = {
				message: '<div class="loading-message fluig-style-guide"><span class="loading-text">'
					+ settings.textMessage + '</span><span class="loading-img"></span></div>',
				baseZ: baseZ,
				css: {
					border: '0',
					padding: '0',
					backgroundColor: 'none'
				},
				overlayCSS: {
					backgroundColor: '#000',
					opacity: 0.1,
					cursor: 'default'
				}
			};

			// se possuir texto, adiciona o container do "well" no fundo do loading.
			if(settings.textMessage) {
				basicConfig.message = '<div class="loading-message fluig-style-guide"><div class="well"><span class="loading-text">'
					+ settings.textMessage + '</span><span class="loading-img"></span></div>';
			}

			config = Object.create(basicConfig);

			$.extend(config, settings);

			return config;
		}

		function initLoading() {
			attrsMap.target = config.target;
		}

		function showLoading(target) {
			if (target) {
				attrsMap.target = target;
			}
			$(attrsMap.target).block(config);
		}

		function hideLoading() {
			$(attrsMap.target).unblock();
		}

		function setLoadingMessage(message) {
			if (message) {
				attrsMap.textMessage = message;
				$(attrsMap.target).find(".loading-text").html(message);
			} else {
				$(attrsMap.target).find(".loading-text").html('');
			}
		}

		return {
			show: showLoading,
			hide: hideLoading,
			setMessage: setLoadingMessage
		};
	};

	return FluigLoading;

})(window.FLUIGC || {}, jQuery);
var FLUIGC = (function(FluigAutocomplete, $) {
	'use strict';
	FluigAutocomplete.autocomplete = function(elTarget, settings, callbackMain) {

		/***************************************************************************************************************
		 * Component initialization with the settings and validations
		 **************************************************************************************************************/

		var i18n = {
			'errorType': 'Enter one of the valid options for the type parameter: tag, autocomplete or tagAutocomplete.',
			'errorDisplayKey': 'For configuration type: tagAutocomplete and type: autocomplete is necessary to inform the displayKey parameter.',
			'errorSource': 'For configuration type: tagAutocomplete and type: autocomplete is necessary to inform the source parameter.',
			'errorTagDisplaykey': 'For type configuration: tag displayKey the parameter is not allowed.',
			'errorTagTemplate': 'For type setting: tag is not allowed to use the tag template.',
			'errorMethodNotAllowed': 'Este método não está disponível para o tipo: '
		}, typesOptions = ['tagAutocomplete', 'autocomplete', 'tag'], typesMethods = {
			'tagAutocomplete': ['add', 'update', 'remove', 'removeAll', 'focus', 'input', 'refresh', 'destroy',
				'items', 'disable', 'open', 'close'],
			'autocomplete': ['destroy', 'open', 'close', 'val'],
			'tag': ['add', 'update', 'remove', 'removeAll', 'focus', 'input', 'refresh', 'destroy', 'items']
		}, baseRestSettings = {
			LIMIT: 10,
			OFFSET: 0,
			ORDER: undefined,
			PATTERN: undefined,
			ORDER_KEY: 'orderby',
			PATTERN_KEY: 'pattern',
			LIMIT_KEY: 'limit',
			OFFSET_KEY: 'offset'
		}, searchTimeout;

		if (!settings || typeof (settings) !== 'object') {
			settings = {};
		}

		if (!settings.type) {
			settings.type = 'tag';
		}

		if (!validateOptionType(settings.type)) {
			throwException(i18n.errorType);
		}

		if ((settings.type === 'tagAutocomplete' || settings.type === 'autocomplete') && !settings.displayKey) {
			throwException(i18n.errorDisplayKey);
		}

		if ((settings.type === 'tagAutocomplete' || settings.type === 'autocomplete') && !settings.source) {
			throwException(i18n.errorSource);
		}

		if (settings.type === 'tag' && settings.displayKey) {
			throwException(i18n.errorTagDisplaykey);
		}

		if (settings.type === 'tag' && settings.templates && settings.templates.tag) {
			throwException(i18n.errorTagTemplate);
		}

		if (!settings.name) {
			settings.name = settings.type + Date.now();
		}

		if (typeof (settings.source) === 'object' && settings.source.autoLoading === undefined) {
			settings.source.autoLoading = FLUIGC.utilities.checkBrowser().isIe9() ? false : true;
		}

		if (settings.keyExistsItem === undefined) {
			settings.keyExistsItem = settings.displayKey;
		}

		// O itemValue sempre será igual ao displayKey para não ocorrer
		// divergências entre os plugins tagsInput e typeahead.
		settings.itemValue = settings.displayKey;

		if (settings.type === 'tagAutocomplete') {
			createTagAutocomplete();
		} else if (settings.type === 'autocomplete') {
			createAutocomplete();
		} else if (settings.type === 'tag') {
			createTag();
		}

		/***************************************************************************************************************
		 * Private functions
		 **************************************************************************************************************/

		function createTagAutocomplete() {
			var compSettings = Object.create(settings);

			compSettings.typeaheadjs = {
				source: typeof (compSettings.source) === 'function' ? compSettings.source : processRequest,
				name: compSettings.name,
				displayKey: compSettings.displayKey
			};

			compSettings.typeaheadjsoptions = {
				highlight: compSettings.highlight || false,
				minLength: isNaN(compSettings.minLength) ? 1 : compSettings.minLength,
				hint: compSettings.hint || true
			};
			if (compSettings.templates) {
				compSettings.typeaheadjs.templates = {
					suggestion: compSettings.templates.suggestion || null,
					tipMessage: compSettings.templates.tipMessage || null
				};
			}

			$(elTarget).tagsinput(compSettings);
		}

		function createAutocomplete() {
			var compSettings = Object.create(settings), compBaseSettings = {
				highlight: compSettings.highlight || false,
				minLength: isNaN(compSettings.minLength) ? 1 : compSettings.minLength,
				hint: compSettings.hint || true
			};

			compSettings.source = typeof (compSettings.source) === 'function' ? compSettings.source : processRequest;

			$(elTarget).typeahead(compBaseSettings, compSettings);
		}

		function createTag() {
			var compSettings = Object.create(settings);

			$(elTarget).tagsinput(compSettings);
		}

		function toggleLoading(method) {
			var classType, parentMethod;

			if (settings.source && settings.source.autoLoading) {
				classType = settings.type === 'tagAutocomplete' ? '.bootstrap-tagsinput' : '.fluig-typeahead';
				parentMethod = settings.type === 'tagAutocomplete' ? 'siblings' : 'parents';

				$(elTarget)[parentMethod](classType)[method]('loading');
			}
		}

		function processRequest(pattern, callback) {
			var restConfig = {
				contentType: 'application/json',
				dataType: 'json',
				crossDomain: true,
				loading: false,
				cache: false
			}, currentPattern;

			$.support.cors = true;

			if (settings.source && settings.source.url) {
				restConfig.url = processURL(pattern);

				toggleLoading('addClass');

				// validação para não fazer uma requisição para cada caractere digitado
				clearTimeout(searchTimeout);
				searchTimeout = setTimeout(function() {
					currentPattern = pattern;

					FLUIGC.ajax(restConfig, function(error, data) {
						if (!error) {
							// só retorna a requisição de o pattern enviado na
							// busca é igual ao atual digitado
							if (currentPattern === pattern) {
								data = settings.source.root ? data[settings.source.root] : data;
								if (settings.source.formatData && typeof (settings.source.formatData) === 'function') {
									data = settings.source.formatData(data);
								}
								callback(data);
							}
							toggleLoading('removeClass');
						} else {
							if (typeof (callbackMain) === 'function') {
								callbackMain(error);
							}
							toggleLoading('removeClass');
						}
					});
				}, settings.searchTimeout || 150);
			}
		}

		function processURL(pattern) {
			var url = settings.source.url, data = {
				limit: settings.source.limit || baseRestSettings.LIMIT,
				offset: settings.source.offset || baseRestSettings.OFFSET,
				order: settings.source.order || baseRestSettings.ORDER,
				pattern: pattern || baseRestSettings.PATTERN
			}, dataKeys = {
				limitKey: settings.source.limitKey || baseRestSettings.LIMIT_KEY,
				offsetKey: settings.source.offsetKey || baseRestSettings.OFFSET_KEY,
				orderKey: settings.source.orderKey || baseRestSettings.ORDER_KEY,
				patternKey: settings.source.patternKey || baseRestSettings.PATTERN_KEY
			};

			if (url.indexOf('?') === -1) {
				url = url + '?';
			}

			for ( var k in data) {
				url += data[k] !== undefined ? dataKeys[k + 'Key'] + '=' + data[k] + '&' : '';
			}

			if (url.substr(url.length - 1) === '&') {
				url = url.substring(0, url.length - 1);
			}

			return url;
		}

		function validateOptionType(path) {
			var isValidType = false, len = typesOptions.length, i = 0;

			for (i; i < len; i++) {
				if (path === typesOptions[i]) {
					isValidType = true;
					break;
				}
			}

			return isValidType;
		}

		function validateMethods(path, type) {
			var isValidMethod = false, len = typesMethods[type].length, i = 0;

			for (i; i < len; i++) {
				if (path === typesMethods[type][i]) {
					isValidMethod = true;
					break;
				}
			}

			return isValidMethod;
		}

		function throwException(message) {
			throw (message);
		}

		/***************************************************************************************************************
		 * Methods
		 **************************************************************************************************************/

		return {
			add: function(data) {
				if (validateMethods('add', settings.type)) {
					$(elTarget).tagsinput('add', data);
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			update: function(data) {
				if (validateMethods('update', settings.type)) {
					$(elTarget).tagsinput('update', data);
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			remove: function(data) {
				if (validateMethods('', settings.type)) {
					$(elTarget).tagsinput('remove', data);
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			removeAll: function() {
				if (validateMethods('removeAll', settings.type)) {
					$(elTarget).tagsinput('removeAll');
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			focus: function() {
				if (validateMethods('focus', settings.type)) {
					$(elTarget).tagsinput('focus');
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			input: function() {
				if (validateMethods('input', settings.type)) {
					return $(elTarget).tagsinput('input');
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			refresh: function() {
				if (validateMethods('refresh', settings.type)) {
					$(elTarget).tagsinput('refresh');
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			destroy: function() {
				if (settings.type === 'autocomplete') {
					$(elTarget).typeahead('destroy');
				} else {
					$(elTarget).tagsinput('destroy');
				}
				return this;
			},
			items: function() {
				if (validateMethods('items', settings.type)) {
					return $(elTarget).tagsinput('items');
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			open: function() {
				if (validateMethods('open', settings.type)) {
					$(elTarget).typeahead('open');
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			close: function() {
				if (validateMethods('close', settings.type)) {
					$(elTarget).typeahead('close');
					return this;
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			val: function(value) {
				if (validateMethods('val', settings.type)) {
					if (value) {
						$(elTarget).typeahead('val', value);
						return this;
					} else {
						return $(elTarget).typeahead('val');
					}
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			disable: function(disable) {
				if (validateMethods('disable', settings.type)) {
					return $(elTarget).tagsinput('disable', disable);
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			open: function() {
				if (validateMethods('open', settings.type)) {
					return $(elTarget).tagsinput('open');
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			close: function() {
				if (validateMethods('close', settings.type)) {
					return $(elTarget).tagsinput('close');
				} else {
					throwException(i18n.errorMethodNotAllowed + settings.type);
				}
			},
			on: function(ev, cb) {
				$(elTarget).on(ev, cb);
				return this;
			}
		};
	};

	return FluigAutocomplete;

})(window.FLUIGC || {}, jQuery);

var FLUIGC = (function(FluigPeriodicalExecutor, $) {

	FluigPeriodicalExecutor.periodicalExecutor = function(callback, frequency) {

		var defaultFrequency = 5, currentlyExecuting, timer;

		function start() {
			timer = setInterval(onTimerEvent.bind(this), frequency * 1000);
		}

		function execute() {
			if (callback && typeof callback === "function") {
				callback(this);
				frequency = $.isNumeric(frequency) === true ? parseInt(frequency) : defaultFrequency;
				currentlyExecuting = false;
			} else {
				throw new Error('Callback must be a valid function');
			}
		}

		function stop() {
			if (!timer) {
				return false;
			}

			clearInterval(timer);

			timer = null;
		}

		function onTimerEvent() {
			if (!currentlyExecuting) {
				// IE doesn't support `finally` statements unless all errors are caught.
				// We mimic the behaviour of `finally` statements by duplicating code
				// that would belong in it. First at the bottom of the `try` statement
				// (for errorless cases). Secondly, inside a `catch` statement which
				// rethrows any caught errors.
				try {
					currentlyExecuting = true;
					execute();
					currentlyExecuting = false;
				} catch (e) {
					currentlyExecuting = false;
					throw e;
				}
			}
		}

		function setFrequency(frequency) {
			frequency = $.isNumeric(frequency) === true ? parseInt(frequency) : defaultFrequency;
		}

		function restart() {
			stop();
			start();
		}

		return {
			start: start,
			stop: stop,
			restart: restart
		};
	};

	return FluigPeriodicalExecutor;

})(window.FLUIGC || {}, jQuery);
var FLUIGC = (function(FluigAjax, $) {
	'use strict';
	FluigAjax.ajax = function(settings, cb) {

		var compSettings = {
			loading: true,
			loadingTarget: window
		}, compLoading, loadingOptions;
		
		try {
			$.support.cors = true;
		} catch (err) {
			if (console) {
				console.error(err);
			}
		}

		// Essa função faz o merge do objeto base "compSettings" com as opções recebidas "settings".
		$.extend(true, compSettings, settings);

		if (compSettings.loading) {
			loadingOptions = Object.prototype.toString.call(compSettings.loading) === '[object Object]'
				? compSettings.loading : {};
			compLoading = FLUIGC.loading(compSettings.loadingTarget, loadingOptions);
			compLoading.show();
		}

		if (typeof fluigDataProxyRequest === 'function') {
			fluigDataProxyRequest(compSettings, function(data) {
				cb(null, data);
				if (compSettings.loading) {
					compLoading.hide();
				}
			});
		} else {
			var ajax = $.ajax(compSettings).done(function(data, textStatus, jqXHR) {
				if (compSettings.loading) {
					compLoading.hide();
				}

				if (cb && typeof (cb) === 'function') {
					// Por motivos de padronização foi retornado somente o objeto "data" com as informações do success
					// response,
					// porém se necessário é possível retornar os demais parâmetros "textStatus" e "jqXHR".
					cb(null, data);
				}

				return false;
			}).fail(function(jqXHR, textStatus, errorThrown) {
				if (compSettings.loading) {
					compLoading.hide();
				}

				if (cb && typeof (cb) === 'function') {
					// Por motivos de padronização foi retornado somente o objeto "jqXHR" com as informações do error
					// response,
					// porém se necessário é possível retornar os demais parâmetros "textStatus" e "errorThrown".
					cb(jqXHR, null);
				}

				return false;
			});
		}

		return ajax;
	};

	return FluigAjax;

})(window.FLUIGC || {}, jQuery);

$(document).on('click', '.collapse-tab', function() {
	var parent = $(this).parents('.collapse-tabs:first');
	var tabId = $('a:first', this).attr('href');

	if ($(this).hasClass('in')) {
		$(this).removeClass('in');
		$('.tab-content', parent).removeClass('in');
	} else {
		$('.collapse-tab').removeClass('in');
		$(this).addClass("in");
		$('.tab-content', parent).addClass('in');
		$('.tab-pane', parent).removeClass("active");
		$(tabId, parent).addClass('active');
	}
});

$(document).ready(function() {

	var pageDocuments = window.frames;
	for (i = 0; i < pageDocuments.length; i++) {
		$(pageDocuments[i]).click(function(event) {
			if (!$(event.target).closest(".collapse-tabs, .container-modal, .modal-backdrop, .modal-legacy").length) {
				$('.collapse-tab').removeClass('in');
				$('.tab-content').removeClass('in');
			}
		});
	}

	$(document).click(function(event) {
		if (!$(event.target).closest(".collapse-tabs, .container-modal, .modal-backdrop, .modal-legacy").length) {
			$('.collapse-tab').removeClass('in');
			$('.tab-content').removeClass('in');
		}
	});

});
var FLUIGC = (function(FluigCopy, $) {
	'use strict';
	FluigCopy.copy = function(elTarget, settings, callback) {

		var attrsMap = {
			zclip: null,
			currentTarget: null
		}

		var config = defineSettings(elTarget, settings);

		copyClipboard();

		function defineSettings(target, settings) {
			if (!settings) {
				settings = {};
			}
			if ($(target).length) {
				settings.target = target;
			}

			var basicConfig = {}
			config = Object.create(basicConfig);
			$.extend(config, settings);

			return config;
		}

		function useClipboardAccess() {
			$(config.target).click(function() {
				var text = $(config.target).data('clipboard-text');
				if (text && window.clipboardData.setData('Text', text)) {
					if (config.showMessageSuccess != false) {
						FLUIGC.toast({
							message: config.copyMessage,
							type: 'success'
						});
					}
				}
				callback(null, text);
			});
		}

		function copyClipboard() {
			if (FLUIGC.utilities.checkBrowser().isIe9() || FLUIGC.utilities.checkBrowser().isIe10()) {
				useClipboardAccess();
			} else {
				attrsMap.currentTarget = $(config.target);
				ZeroClipboard.config({
					swfPath: "./utils/ZeroClipboard.swf"
				});
				attrsMap.zclip = new ZeroClipboard(attrsMap.currentTarget);
				attrsMap.zclip.on("copy", function() {
					if (!config.copyMessage) {
						config.copyMessage = 'Copied text to clipboard';
					}
					if (config.showMessageSuccess != false) {
						FLUIGC.toast({
							message: config.copyMessage,
							type: 'success'
						});
					}
					callback(null, event)
				}).on('destroy', function(event) {
					callback(event);
				}).on('error', function(event) {
					callback(event);
				});

			}
			return this;
		}
	};

	return FluigCopy;

})(window.FLUIGC || {}, jQuery);

var FLUIGC = (function(GlobalCache) {

	function methods(type) {
		function setItem(key, value) {
			if (typeof (value) === 'object') {
				value = JSON.stringify(value);
			}
			window[type].setItem(key, value);
		}

		function removeItem(key) {
			window[type].removeItem(key);
		}

		function getItem(key) {
			var value;
			try {
				value = JSON.parse(window[type].getItem(key));
			} catch (err) {
				value = window[type].getItem(key);
			}
			return value;
		}

		function clear() {
			window[type].clear();
		}

		return {
			setItem: setItem,
			removeItem: removeItem,
			getItem: getItem,
			clear: clear
		};
	}

	GlobalCache.localStorage = (function() {
		return methods('localStorage');
	})();

	GlobalCache.sessionStorage = (function() {
		return methods('sessionStorage');
	})();

	return GlobalCache;

})(window.FLUIGC || {});

var FLUIGC = (function(FluigNotification, $, fluigTemplates) {

	'use strict';

	FluigNotification.notification = function(settings) {
		var notification, templates = {};

		function show() {
			// Let's check if the browser supports notifications.
			if (!('Notification' in window)) {
				if (fluigTemplates) {

					// validar se já foi adicionado o 'ul' no body para não adicionar novamente.
					if (!$('.fs-desktop-notification').length) {
						$('body').append($(fluigTemplates['desktop-notification']).html());
					}

					showAlternativeNotification();
				} else {
					throw new Error('Notification component: FLUIGCTemplates not found.');
				}
			}

			// Let's check whether notification permissions have already been granted
			else if (Notification.permission === 'granted') {
				// If it's okay let's create a notification
				showNotification();
			}

			// Otherwise, we need to ask the user for permission
			else if (Notification.permission !== 'denied') {
				Notification.requestPermission(function(permission) {
					// If the user accepts, let's create a notification
					if (permission === 'granted') {
						showNotification();
					}
				});
			}
		}

		function requestPermission() {
			if (!('Notification' in window)) {
				console.log('FLUIGC.notification: This browser does not support Desktop notifications.');
				return false;
			} else if (Notification.permission === 'granted') {
				return true;
			} else if (Notification.permission !== 'denied') {
				Notification.requestPermission(function(permission) {
					if (permission === 'granted') {
						return true;
					} else {
						return false;
					}
				});
			}
		}

		function showNotification() {
			notification = new Notification(settings.title || '', settings);

			// Google Chrome does not automatically close the notifications.
			if (FLUIGC.utilities.checkBrowser().name === 'chrome') {
				setTimeout(notification.close.bind(notification), 5000);
			}
		}

		function showAlternativeNotification() {
			var Notification = function(options) {
				this.body = options.body || '';
				this.data = options.data || null;
				this.dir = options.dir || 'auto';
				this.icon = options.icon || '';
				this.lang = options.lang || '';
				this.onclick = options.onclick || null;
				this.onclose = options.onclose || null;
				this.onerror = options.onerror || null;
				this.onshow = options.onshow || null;
				this.silent = options.silent || false;
				this.tag = options.tag || '';
				this.title = options.title;
			};

			notification = new Notification(settings);

			var tlp = Mustache.render($(fluigTemplates['desktop-notification-item']).html(), notification);

			$('.fs-desktop-notification').append(tlp);

			// TODO: se comunicar através de eventos para não colocar esse timeout.
			setTimeout(function() {
				if (typeof notification.onshow === 'function') {
					notification.onshow();
				}
			}, 100);

			// TODO: melhorar no futuro para criar somente um bind para todas as notificações.
			$('#' + settings.tag).on('click', '.fs-desktop-notification-remove', function(ev) {
				ev.stopPropagation();
				ev.preventDefault();
				$(this).parents('.fs-desktop-notification-item').remove();
			});

			// TODO: melhorar no futuro para criar somente um bind para todas as notificações.
			$('#' + settings.tag).on('click', function(ev) {
				ev.stopPropagation();
				ev.preventDefault();
				if (typeof notification.onclick === 'function') {
					$(this).remove();
					notification.onclick();
				}
				if (typeof notification.onclose === 'function') {
					notification.onclose();
				}
			});

			setTimeout(function() {
				$('#' + settings.tag).animate({
					'right': '-330px'
				}, 200, function() {
					$(this).remove();
					if (typeof notification.onclose === 'function') {
						notification.onclose();
					}
				});
			}, 5000);
		}

		return {
			show: show,
			requestPermission: requestPermission,
			on: function(ev, cb) {
				notification['on' + ev] = function(e) {
					if (typeof cb === 'function') {
						cb.apply(this, [e]);
					}
				};
			}
		};
	};

	return FluigNotification;

})(window.FLUIGC || {}, jQuery, FLUIGCTemplates);
