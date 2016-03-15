(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/html/app.js":[function(require,module,exports){
// Essentials
require('essential/js/main');

// Layout
require('layout/js/main');

// Sidebar
require('sidebar/js/main');

// Owl Carousel
require('media/js/carousel/main');

// Maps
window.initGoogleMaps = require('maps/js/google/main');

// CORE
require('./main');
},{"./main":"/Users/bgirer/Downloads/real-estate-1.2.0/src/js/themes/html/main.js","essential/js/main":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/main.js","layout/js/main":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/main.js","maps/js/google/main":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/main.js","media/js/carousel/main":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/main.js","sidebar/js/main":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/main.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-carousel.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkCarousel = function () {

        if (! this.length) return;

        this.carousel();

        this.find('[data-slide]').click(function (e) {
            e.preventDefault();
        });

    };

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-collapse.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkCollapse = function () {

        if (! this.length) return;

        var target = this.attr('href') || this.attr('target');
        if (! target) return;

        this.click(function(e){
            e.preventDefault();
        });

        $(target).collapse({toggle: false});

    };

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-modal.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkModal = function () {

        if (! this.length) return;

        var target = this.attr('href') || this.attr('target');
        if (! target) return;

        this.click(function (e) {
            e.preventDefault();
        });

        $(target).modal({show: false});

    };

    /**
     * Modal creator for the demo page.
     * Allows to explore different modal types.
     * For demo purposes only.
     */

    // Process the modal via Handlebars templates
    var modal = function (options) {
        var source = $("#" + options.template).html();
        var template = Handlebars.compile(source);
        return template(options);
    };

    var randomId = function () {
        /** @return String */
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    $.fn.tkModalDemo = function () {

        if (! this.length) return;

        var targetId = this.attr('href') || this.attr('target'),
            target = $(targetId);

        if (! targetId) {
            targetId = randomId();
            this.attr('data-target', '#' + targetId);
        }

        targetId.replace('#', '');

        if (! target.length) {
            target = $(modal({
                id: targetId,
                template: this.data('template') || 'tk-modal-demo',
                modalOptions: this.data('modalOptions') || '',
                dialogOptions: this.data('dialogOptions') || '',
                contentOptions: this.data('contentOptions') || ''
            }));
            $('body').append(target);
            target.modal({show: false});
        }

        this.click(function (e) {
            e.preventDefault();
            target.modal('toggle');
        });

    };

    $('[data-toggle="tk-modal-demo"]').each(function () {
        $(this).tkModalDemo();
    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-switch.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('[data-toggle="switch-checkbox"]').each(function () {

        $(this).bootstrapSwitch({
            offColor: 'danger'
        });

    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_check-all.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkCheckAll = function(){

        if (! this.length) return;

        this.on('click', function () {
            $($(this).data('target')).find(':checkbox').prop('checked', this.checked);
        });

    };

    // Check All Checkboxes
    $('[data-toggle="check-all"]').tkCheckAll();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_cover.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
     * images to fit into a certain area.
     *
     * @param {Number} srcWidth Source area width
     * @param {Number} srcHeight Source area height
     * @param {Number} maxWidth Fittable area maximum available width
     * @param {Number} maxHeight Fittable area maximum available height
     * @return {Object} { width, heigth }
     */
    var aspectRatioFit = function (srcWidth, srcHeight, maxWidth, maxHeight) {

        var wRatio = maxWidth / srcWidth,
            hRatio = maxHeight / srcHeight,
            width = srcWidth,
            height = srcHeight;

        if (srcWidth / maxWidth < srcHeight / maxHeight) {
            width = maxWidth;
            height = srcHeight * wRatio;
        } else {
            width = srcWidth * hRatio;
            height = maxHeight;
        }

        return {width: width, height: height};
    };

    $.fn.tkCover = function () {

        if (! this.length) return;

        this.filter(':visible').not('[class*="height"]').each(function () {
            var t = $(this),
                i = t.find('img:first');

            if (i.length) {
                $.loadImage(i.attr('src')).done(function (img) {
                    t.height(i.height());
                    $('.overlay-full', t).innerHeight(i.height());
                    $(document).trigger('domChanged');
                });
            }
            else {
                i = t.find('.img:first');
                t.height(i.height());
                $('.overlay-full', t).innerHeight(i.height());
                $(document).trigger('domChanged');
            }
        });

        this.filter(':visible').filter('[class*="height"]').each(function () {
            var t = $(this),
                img = t.find('img') || t.find('.img');

            img.each(function () {
                var i = $(this);
                if (i.data('autoSize') === false) {
                    return true;
                }
                if (i.is('img')) {
                    $.loadImage(i.attr('src')).done(function (img) {
                        i.removeAttr('style');
                        i.css(aspectRatioFit(i.width(), i.height(), t.width(), t.height()));
                    });
                }
                else {
                    i.removeAttr('style');
                    i.css(aspectRatioFit(i.width(), i.height(), t.width(), t.height()));
                }
            });
        });

    };

    function height() {

        $('.cover.overlay').each(function () {
            $(this).tkCover();
        });

    }

    $(document).ready(height);
    $(window).on('load', height);

    var t;
    $(window).on("debouncedresize", function () {
        clearTimeout(t);
        t = setTimeout(height, 200);
    });

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_datepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkDatePicker = function () {

        if (! this.length) return;

        if (typeof $.fn.datepicker != 'undefined') {

            this.datepicker();

        }

    };

    $('.datepicker').tkDatePicker();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_daterangepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkDaterangepickerReport = function () {
        var e = this;
        this.daterangepicker(
            {
                ranges: {
                    'Today': [ moment(), moment() ],
                    'Yesterday': [ moment().subtract('days', 1), moment().subtract('days', 1) ],
                    'Last 7 Days': [ moment().subtract('days', 6), moment() ],
                    'Last 30 Days': [ moment().subtract('days', 29), moment() ],
                    'This Month': [ moment().startOf('month'), moment().endOf('month') ],
                    'Last Month': [ moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month') ]
                },
                startDate: moment().subtract('days', 29),
                endDate: moment()
            },
            function (start, end) {
                var output = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
                e.find('span').html(output);
            }
        );
    };

    $.fn.tkDaterangepickerReservation = function () {
        this.daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            format: 'MM/DD/YYYY h:mm A'
        });
    };

    $('.daterangepicker-report').tkDaterangepickerReport();

    $('.daterangepicker-reservation').tkDaterangepickerReservation();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_expandable.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     * @todo: Angular directive.
     */
    $.fn.tkExpandable = function () {

        if (! this.length) return;

        this.find('.expandable-content').append('<div class="expandable-indicator"><i></i></div>');

    };

    $('.expandable').each(function () {
        $(this).tkExpandable();
    });

    $('body').on('click', '.expandable-indicator', function(){
        $(this).closest('.expandable').toggleClass('expandable-open');
    });

    $('body').on('click', '.expandable-trigger:not(.expandable-open)', function(){
        $(this).addClass('expandable-open');
    });

}(jQuery));
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_iframe.js":[function(require,module,exports){
(function () {
    "use strict";

    // if we're inside an iframe, reload without iframe
    if (window.location != window.parent.location)
        top.location.href = document.location.href;

})();

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_minicolors.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     * @todo: Angular directive.
     */
    $.fn.tkMiniColors = function () {

        if (! this.length) return;

        if (typeof $.fn.minicolors != 'undefined') {

            this.minicolors({
                control: this.attr('data-control') || 'hue',
                defaultValue: this.attr('data-defaultValue') || '',
                inline: this.attr('data-inline') === 'true',
                letterCase: this.attr('data-letterCase') || 'lowercase',
                opacity: this.attr('data-opacity'),
                position: this.attr('data-position') || 'bottom left',
                change: function (hex, opacity) {
                    if (! hex) return;
                    if (opacity) hex += ', ' + opacity;
                    if (typeof console === 'object') {
                        console.log(hex);
                    }
                },
                theme: 'bootstrap'
            });

        }

    };

    $('.minicolors').each(function () {

        $(this).tkMiniColors();

    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_nestable.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     * @todo: Angular directive.
     */
    $.fn.tkNestable = function () {

        if (! this.length) return;

        if (typeof $.fn.nestable != 'undefined') {

            this.nestable({
                rootClass: 'nestable',
                listNodeName: 'ul',
                listClass: 'nestable-list',
                itemClass: 'nestable-item',
                dragClass: 'nestable-drag',
                handleClass: 'nestable-handle',
                collapsedClass: 'nestable-collapsed',
                placeClass: 'nestable-placeholder',
                emptyClass: 'nestable-empty'
            });

        }

    };

    $('.nestable').tkNestable();

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_panel-collapse.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var randomId = function() {
        /** @return String */
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkPanelCollapse = function () {

        if (! this.length) return;

        var body = $('.panel-body', this),
            id = body.attr('id') || randomId(),
            collapse = $('<div/>');

        collapse
            .attr('id', id)
            .addClass('collapse' + (this.data('open') ? ' in' : ''))
            .append(body.clone());

        body.remove();

        $(this).append(collapse);

        $('.panel-collapse-trigger', this)
            .attr('data-toggle', 'collapse' )
            .attr('data-target', '#' + id)
            .collapse({ trigger: false });

    };

    $('[data-toggle="panel-collapse"]').each(function(){
        $(this).tkPanelCollapse();
    });

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_select2.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2 = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            var t = this,
                options = {
                    allowClear: t.data('allowClear')
                };

            if (t.is('button')) return true;
            if (t.is('input[type="button"]')) return true;

            if (t.is('[data-toggle="select2-tags"]')) {
                options.tags = t.data('tags').split(',');
            }

            t.select2(options);

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2Enable = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            this.click(function () {
                $($(this).data('target')).select2("enable");
            });

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2Disable = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            this.click(function () {
                $(this.data('target')).select2("disable");
            });

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2Flags = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            // templating
            var format = function (state) {
                if (! state.id) return state.text;
                return "<img class='flag' src='http://select2.github.io/select2/images/flags/" + state.id.toLowerCase() + ".png'/>" + state.text;
            };

            this.select2({
                formatResult: format,
                formatSelection: format,
                escapeMarkup: function (m) {
                    return m;
                }
            });

        }

    };

    $('[data-toggle*="select2"]').each(function() {

        $(this).tkSelect2();

    });

    $('[data-toggle="select2-enable"]').tkSelect2Enable();

    $('[data-toggle="select2-disable"]').tkSelect2Disable();

    $("#select2_7").tkSelect2Flags();

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_selectpicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelectPicker = function () {

        if (! this.length) return;

        if (typeof $.fn.selectpicker != 'undefined') {

            this.selectpicker({
                width: this.data('width') || '100%'
            });

        }

    };

    $(function () {

        $('.selectpicker').each(function () {
           $(this).tkSelectPicker();
        });

    });

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_show-hover.js":[function(require,module,exports){
(function ($) {

    var showHover = function () {
        $('[data-show-hover]').hide().each(function () {
            var self = $(this),
                parent = $(this).data('showHover');

            self.closest(parent).on('mouseover', function (e) {
                e.stopPropagation();
                self.show();
            }).on('mouseout', function () {
                self.hide();
            });
        });
    };

    showHover();

    window.showHover = showHover;

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_slider.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var bars = function(el){
        $('.slider-handle', el).html('<i class="fa fa-bars fa-rotate-90"></i>');
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSlider = function () {

        if (! this.length) return;

        if (typeof $.fn.slider != 'undefined') {

            this.slider();

            bars(this);

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSliderFormatter = function () {

        if (! this.length) return;

        if (typeof $.fn.slider != 'undefined') {

            this.slider({
                formatter: function (value) {
                    return 'Current value: ' + value;
                }
            });

            bars(this);

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSliderUpdate = function () {

        if (! this.length) return;

        if (typeof $.fn.slider != 'undefined') {

            this.on("slide", function (slideEvt) {
                $(this.attr('data-on-slide')).text(slideEvt.value);
            });

            bars(this);

        }

    };

    $('[data-slider="default"]').tkSlider();

    $('[data-slider="formatter"]').tkSliderFormatter();

    $('[data-on-slide]').tkSliderUpdate();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_summernote.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSummernote = function () {

        if (! this.length) return;

        if (typeof $.fn.summernote != 'undefined') {

            this.summernote({
                height: 300
            });

        }

    };

    $(function () {

        $('.summernote').each(function () {
           $(this).tkSummernote();
        });

    });

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tables.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkDataTable = function(){

        if (! this.length) return;

        if (typeof $.fn.dataTable != 'undefined') {

            this.dataTable();

        }

    };

    $('[data-toggle="data-table"]').tkDataTable();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tabs.js":[function(require,module,exports){
(function ($) {

    var skin = require('./_skin')();

    $('.tabbable .nav-tabs').each(function(){
        var tabs = $(this).niceScroll({
            cursorborder: 0,
            cursorcolor: config.skins[ skin ][ 'primary-color' ],
            horizrailenabled: true,
            oneaxismousemode: true
        });

        var _super = tabs.getContentSize;
        tabs.getContentSize = function() {
            var page = _super.call(tabs);
            page.h = tabs.win.height();
            return page;
        };
    });

    $('[data-scrollable]').getNiceScroll().resize();

    $('.tabbable .nav-tabs a').on('shown.bs.tab', function(e){
        var tab = $(this).closest('.tabbable');
        var target = $(e.target),
            targetPane = target.attr('href') || target.data('target');

        // refresh tabs with horizontal scroll
        tab.find('.nav-tabs').getNiceScroll().resize();

        // refresh [data-scrollable] within the activated tab pane
        $(targetPane).find('[data-scrollable]').getNiceScroll().resize();
    });

}(jQuery));
},{"./_skin":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_touchspin.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkTouchSpin = function () {

        if (! this.length) return;

        if (typeof $.fn.TouchSpin != 'undefined') {

            this.TouchSpin();

        }

    };

    $('[data-toggle="touch-spin"]').tkTouchSpin();

}(jQuery));
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tree.js":[function(require,module,exports){
(function ($) {

    var tree_glyph_options = {
        map: {
            checkbox: "fa fa-square-o",
            checkboxSelected: "fa fa-check-square",
            checkboxUnknown: "fa fa-check-square fa-muted",
            error: "fa fa-exclamation-triangle",
            expanderClosed: "fa fa-caret-right",
            expanderLazy: "fa fa-angle-right",
            expanderOpen: "fa fa-caret-down",
            doc: "fa fa-file-o",
            noExpander: "",
            docOpen: "fa fa-file",
            loading: "fa fa-refresh fa-spin",
            folder: "fa fa-folder",
            folderOpen: "fa fa-folder-open"
        }
    },
    tree_dnd_options = {
        autoExpandMS: 400,
            focusOnClick: true,
            preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
            preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
            dragStart: function(node, data) {
            /** This function MUST be defined to enable dragging for the tree.
             *  Return false to cancel dragging of node.
             */
            return true;
        },
        dragEnter: function(node, data) {
            /** data.otherNode may be null for non-fancytree droppables.
             *  Return false to disallow dropping on node. In this case
             *  dragOver and dragLeave are not called.
             *  Return 'over', 'before, or 'after' to force a hitMode.
             *  Return ['before', 'after'] to restrict available hitModes.
             *  Any other return value will calc the hitMode from the cursor position.
             */
            // Prevent dropping a parent below another parent (only sort
            // nodes under the same parent)
            /*
            if(node.parent !== data.otherNode.parent){
                return false;
            }
            // Don't allow dropping *over* a node (would create a child)
            return ["before", "after"];
            */
            return true;
        },
        dragDrop: function(node, data) {
            /** This function MUST be defined to enable dropping of items on
             *  the tree.
             */
            data.otherNode.moveTo(node, data.hitMode);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFancyTree = function(){

        if (! this.length) return;

        if (typeof $.fn.fancytree == 'undefined') return;

        var extensions = [ "glyph" ];
        if (typeof this.attr('data-tree-dnd') !== "undefined") {
            extensions.push( "dnd" );
        }
        this.fancytree({
            extensions: extensions,
            glyph: tree_glyph_options,
            dnd: tree_dnd_options,
            clickFolderMode: 3,
            checkbox: typeof this.attr('data-tree-checkbox') !== "undefined" || false,
            selectMode: typeof this.attr('data-tree-select') !== "undefined" ? parseInt(this.attr('data-tree-select')) : 2
        });

    };

    // using default options
    $('[data-toggle="tree"]').each(function () {
        $(this).tkFancyTree();
    });

}(jQuery));
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_wizard.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkWizard = function () {

        if (! this.length) return;

        if (typeof $.fn.slick == 'undefined') return;

        var t = this,
            container = t.closest('.wizard-container');

        t.slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            rtl: this.data('rtl'),
            slide: 'fieldset',
            onAfterChange: function (wiz, index) {
                $(document).trigger('after.wizard.step', {
                    wiz: wiz,
                    target: index,
                    container: container,
                    element: t
                });
            }
        });

        container.find('.wiz-next').click(function (e) {
            e.preventDefault();
            t.slickNext();
        });

        container.find('.wiz-prev').click(function (e) {
            e.preventDefault();
            t.slickPrev();
        });

        container.find('.wiz-step').click(function (e) {
            e.preventDefault();
            t.slickGoTo($(this).data('target'));
        });

        $(document).on('show.bs.modal', function () {
            t.closest('.modal-body').hide();
        });

        $(document).on('shown.bs.modal', function () {
            t.closest('.modal-body').show();
            t.slickSetOption('dots', false, true);
        });

    };

    $('[data-toggle="wizard"]').each(function () {
        $(this).tkWizard();
    });

    /**
     * By leveraging events we can hook into the wizard to add functionality.
     * This example updates the progress bar after the wizard step changes.
     */
    $(document).on('after.wizard.step', function (event, data) {

        if (data.container.is('#wizard-demo-1')) {

            var target = data.container.find('.wiz-progress li:eq(' + data.target + ')');

            data.container.find('.wiz-progress li').removeClass('active complete');

            target.addClass('active');

            target.prevAll().addClass('complete');

        }

    });

}(jQuery));
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/main.js":[function(require,module,exports){
require('./_tabs');
require('./_tree');
require('./_show-hover');
require('./_daterangepicker');
require('./_expandable');
require('./_nestable');
require('./_cover');
require('./_tooltip');
require('./_tables');
require('./_check-all');
require('./_progress-bars');
require('./_iframe');
require('./_bootstrap-collapse');
require('./_bootstrap-carousel');
require('./_bootstrap-modal');
require('./_panel-collapse');

// Forms
require('./_touchspin');
require('./_select2');
require('./_slider');
require('./_selectpicker');
require('./_datepicker');
require('./_minicolors');
require('./_bootstrap-switch');
require('./_wizard');
require('./_summernote');
},{"./_bootstrap-carousel":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-carousel.js","./_bootstrap-collapse":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-collapse.js","./_bootstrap-modal":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-modal.js","./_bootstrap-switch":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_bootstrap-switch.js","./_check-all":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_check-all.js","./_cover":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_cover.js","./_datepicker":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_datepicker.js","./_daterangepicker":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_daterangepicker.js","./_expandable":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_expandable.js","./_iframe":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_iframe.js","./_minicolors":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_minicolors.js","./_nestable":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_nestable.js","./_panel-collapse":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_panel-collapse.js","./_progress-bars":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_progress-bars.js","./_select2":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_select2.js","./_selectpicker":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_selectpicker.js","./_show-hover":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_show-hover.js","./_slider":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_slider.js","./_summernote":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_summernote.js","./_tables":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tables.js","./_tabs":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tabs.js","./_tooltip":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tooltip.js","./_touchspin":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_touchspin.js","./_tree":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_tree.js","./_wizard":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_wizard.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_async.js":[function(require,module,exports){
function contentLoaded(win, fn) {

    var done = false, top = true,

        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,

        add = modern ? 'addEventListener' : 'attachEvent',
        rem = modern ? 'removeEventListener' : 'detachEvent',
        pre = modern ? '' : 'on',

        init = function (e) {
            if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
            (e.type == 'load' ? win : doc)[ rem ](pre + e.type, init, false);
            if (! done && (done = true)) fn.call(win, e.type || e);
        },

        poll = function () {
            try {
                root.doScroll('left');
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init('poll');
        };

    if (doc.readyState == 'complete') fn.call(win, 'lazy');
    else {
        if (! modern && root.doScroll) {
            try {
                top = ! win.frameElement;
            } catch (e) {
            }
            if (top) poll();
        }
        doc[ add ](pre + 'DOMContentLoaded', init, false);
        doc[ add ](pre + 'readystatechange', init, false);
        win[ add ](pre + 'load', init, false);
    }
}

module.exports = function(urls, callback) {

    var asyncLoader = function (urls, callback) {

        urls.foreach(function (i, file) {
            loadCss(file);
        });

        // checking for a callback function
        if (typeof callback == 'function') {
            // calling the callback
            contentLoaded(window, callback);
        }
    };

    var loadCss = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[ 0 ].appendChild(link);
    };

    // simple foreach implementation
    Array.prototype.foreach = function (callback) {
        for (var i = 0; i < this.length; i ++) {
            callback(i, this[ i ]);
        }
    };

    asyncLoader(urls, callback);

};
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_gridalicious.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkGridalicious = function () {

        if (! this.length) return;

        this.gridalicious({
            gutter: this.data('gutter') || 15,
            width: this.data('width') || 370,
            selector: '> div',
            animationOptions: {
                complete: function () {
                    $(window).trigger('resize');
                }
            }
        });

    };

    $('[data-toggle*="gridalicious"]').each(function () {
        $(this).tkGridalicious();
    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_isotope.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkIsotope = function () {

        if (! this.length) return;

        this.isotope({
            layoutMode: this.data('layoutMode') || "packery",
            itemSelector: '.item'
        });

        /*
        this.isotope('on', 'layoutComplete', function(){
            $(window).trigger('resize');
        });
        */

    };

    $(function(){

        setTimeout(function () {
            $('[data-toggle="isotope"]').each(function () {
                $(this).tkIsotope();
            });
        }, 300);

        $(document).on('domChanged', function(){
            $('[data-toggle="isotope"]').each(function(){
                $(this).isotope();
            });
        });

    });

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_parallax.js":[function(require,module,exports){
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function () {
    var lastTime = 0;
    var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
    for (var x = 0; x < vendors.length && ! window.requestAnimationFrame; ++ x) {
        window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
        window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
    }

    if (! window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (! window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

(function ($, window) {
    "use strict";

    $.fn.tkParallax = function () {

        if (Modernizr.touch) return;

        var getOptions = function (e) {
            return {
                speed: e.data('speed') || 4,
                translate: e.data('speed') || true,
                translateWhen: e.data('translateWhen') || 'inViewportTop',
                autoOffset: e.data('autoOffset'),
                offset: e.data('offset') || 0,
                opacity: e.data('opacity')
            };
        };

        var $window = $(window),
            $windowContent = $('.st-content-inner'),
            $element = this;

        var ticking = false,
            $scrollable = null,
            lastScrollTop = 0;

        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

        var requestTick = function (e) {
            if (! ticking) {
                $scrollable = $(e.currentTarget);
                // although Safari has support for requestAnimationFrame,
                // the animation in this case is choppy so we'll just run it directly
                if (isSafari) {
                    animate();
                } else {
                    window.requestAnimationFrame(animate);
                    ticking = true;
                }
            }
        };

        // Translates an element on the Y axis using translate3d to ensure
        // that the rendering is done by the GPU
        var translateY = function (elm, value) {
            var translate = 'translate3d(0px,' + value + 'px, 0px)';
            elm.style[ '-webkit-transform' ] = translate;
            elm.style[ '-moz-transform' ] = translate;
            elm.style[ '-ms-transform' ] = translate;
            elm.style[ '-o-transform' ] = translate;
            elm.style.transform = translate;
        };

        var layers = $element.find('.parallax-layer');

        var init = function () {
            layers.each(function () {

                var layer = $(this),
                    layerOptions = getOptions(layer),
                    height = $element.outerHeight(true);

                if (layerOptions.translate) {
                    if (layer.is('img') && layerOptions.autoOffset) {
                        $.loadImage(layer.attr('src')).done(function () {
                            layer.removeAttr('style');
                            var layerHeight = layer.height();
                            var offset = layerHeight * 0.33;
                            if ((offset + height) > layerHeight) {
                                offset = layerHeight - height;
                            }
                            offset = offset * - 1;
                            layer.attr('data-offset', offset);
                            translateY(layer.get(0), offset);
                        });
                    }
                }

            });
        };

        init();
        $(window).on("debouncedresize", init);

        var animate = function () {
            var scrollTop = parseInt($scrollable.scrollTop());
            var scrollableTop = $scrollable.is($window) ? 0 : $scrollable.offset().top;
            var height = $element.outerHeight(true);
            var bodyPadding = {
                top: parseInt($(document.body).css('padding-top')),
                bottom: parseInt($(document.body).css('padding-bottom'))
            };
            var windowHeight = $scrollable.innerHeight();
            var windowBottom = scrollTop + windowHeight - (bodyPadding.bottom + bodyPadding.top);
            var top = $element.offset().top - scrollableTop - bodyPadding.top;
            var bottom = top + height;
            var topAbs = Math.abs(top);
            var pos = top / windowHeight * 100;
            var opacityKey = height * 0.5;
            var when = {};

            /*
             * ONLY when the scrollable element IS NOT the window
             */

            // when the element is anywhere in viewport
            when.inViewport = (bottom > 0) && (top < windowHeight);

            // when the top of the viewport is crossing the element
            when.inViewportTop = (bottom > 0) && (top < 0);

            // when the bottom of the viewport is crossing the element
            when.inViewportBottom = (bottom > 0) && (top < windowHeight) && (bottom > windowHeight);

            /*
             * ONLY when the scrollable element IS the window
             */

            if ($scrollable.is($window)) {

                // when the window is scrollable and the element is completely in the viewport
                when.inWindowViewportFull = (top >= scrollTop) && (bottom <= windowBottom);

                when.inWindowViewport2 = (top >= scrollTop) && (top <= windowBottom);

                when.inWindowViewport3 = (bottom >= scrollTop) && (bottom <= windowBottom);

                when.inWindowViewport4 = (bottom >= scrollTop) && (bottom >= windowHeight) && (height > windowHeight);

                // when the window is scrollable and the top of the viewport is crossing the element
                when.inWindowViewportTop = ! when.inWindowViewport2 && (when.inWindowViewport3 || when.inWindowViewport4);

                // when the window is scrollable and the bottom of the viewport is crossing the element
                when.inWindowViewportBottom = when.inWindowViewport2 && ! when.inWindowViewport3;

                // when the window is scrollable and the element is anywhere in viewport
                when.inWindowViewport = when.inWindowViewportTop || when.inWindowViewportBottom || when.inWindowViewportFull;

                when.inViewport = when.inWindowViewport;
                when.inViewportTop = when.inWindowViewportTop;
                when.inViewportBottom = when.inWindowViewportBottom;

                pos = (top - scrollTop) / windowHeight * 100;
            }

            if (when.inViewportTop && when.inViewportBottom) {
                when.inViewportBottom = false;
            }

            if (! isNaN(scrollTop)) {
                layers.each(function () {

                    var layer = $(this);
                    var layerOptions = getOptions(layer);

                    var ty = (windowHeight + height) - bottom;

                    if ($scrollable.is($window)) {
                        ty = windowBottom - top;
                    }

                    if (layerOptions.translate) {

                        var layerPos = (- 1 * pos * layerOptions.speed) + layerOptions.offset;
                        var layerHeight = layer.height();

                        if (when.inViewport && ! when.inViewportTop && ! when.inViewportBottom) {
                            if (layer.is('img') && layerHeight > height) {
                                if ((Math.abs(layerPos) + height) > layerHeight) {
                                    layerPos = (layerHeight - height) * - 1;
                                }
                            }
                            if (! layer.is('img')) {
                                layerPos = 0;
                            }
                        }

                        if (when.inViewportTop && ((layer.is('img') && layerHeight == height) || ! layer.is('img') )) {
                            layerPos = Math.abs(layerPos);
                        }

                        if (when.inViewportBottom && ! layer.is('img')) {
                            layerPos = height - ty;

                            // scrolling up
                            if (scrollTop < lastScrollTop) {
                                layerPos = layerPos * - 1;
                            }
                        }

                        if (when.inViewport) {
                            layerPos = (layerPos).toFixed(5);
                            if (layerHeight > $window.height() && scrollTop <= 0) {
                                layerPos = 0;
                            }
                            translateY(layer.get(0), layerPos);
                        }

                    }

                    if (layerOptions.opacity) {

                        // fade in
                        if (when.inViewportBottom) {

                            var y, yP;

                            if ($scrollable.is($window)) {

                                y = ty;
                                yP = (y / height).toFixed(5);

                                if (y > opacityKey) {
                                    layer.css({opacity: yP});
                                }
                                else {
                                    layer.css({opacity: 0});
                                }
                            }
                            else {
                                if (bottom < (windowHeight + opacityKey)) {

                                    y = (windowHeight + opacityKey) - bottom;
                                    yP = (y / opacityKey).toFixed(5);

                                    layer.css({opacity: yP});
                                } else {
                                    layer.css({opacity: 0});
                                }
                            }
                        }

                        // fade out
                        else if (when.inViewportTop) {
                            var topOrigin = $scrollable.is($window) ? scrollTop - top : topAbs;
                            if (topOrigin > opacityKey) {
                                layer.css({
                                    'opacity': (1 - (topOrigin / height)).toFixed(5)
                                });
                            } else {
                                layer.css({'opacity': 1});
                            }
                        }

                        // reset
                        else {
                            layer.css({'opacity': 1});
                        }

                        if (when.inViewportBottom && scrollTop <= 0) {
                            layer.css({'opacity': 1});
                        }

                    }

                });

                lastScrollTop = scrollTop;
            }

            ticking = false;
        };

        if ($windowContent.length) {
            $windowContent.scroll(requestTick);
        } else {
            $window.scroll(requestTick);
        }

    };

    $('.parallax').each(function () {
        $(this).tkParallax();
    });

})(jQuery, window);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_scrollable.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var skin = require('./_skin')();

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkScrollable = function (options) {

        if (! this.length) return;

        var settings = $.extend({
            horizontal: false
        }, options);

        var nice = this.niceScroll({
            cursorborder: 0,
            cursorcolor: config.skins[ skin ][ 'primary-color' ],
            horizrailenabled: settings.horizontal
        });

        if (! settings.horizontal) return;

        var _super = nice.getContentSize;

        nice.getContentSize = function () {
            var page = _super.call(nice);
            page.h = nice.win.height();
            return page;
        };

    };

    $('[data-scrollable]').tkScrollable();

    $('[data-scrollable-h]').each(function () {

       $(this).tkScrollable({ horizontal: true });

    });

    var t;
    $(window).on('debouncedresize', function () {
        clearTimeout(t);
        t = setTimeout(function () {
            $('[data-scrollable], [data-scrollable-h]').getNiceScroll().resize();
        }, 100);
    });

}(jQuery));
},{"./_skin":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_skin.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_sidebar-pc.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkSidebarSizePcDemo = function(){

        var t, spc_demo = this;

        if (! spc_demo.length) return;

        $(document)
            .on('sidebar.show', function(){
                $('#pc-open').prop('disabled', true);
            })
            .on('sidebar.hidden', function(){
                $('#pc-open').prop('disabled', false);
            });

        spc_demo.on('submit', function (e) {
            e.preventDefault();
            var s = $('.sidebar'), ve = $('#pc-value'), v = ve.val();
            ve.blur();
            if (! v.length || v < 25) {
                v = 25;
                ve.val(v);
            }
            s[ 0 ].className = s[ 0 ].className.replace(/sidebar-size-([\d]+)pc/ig, 'sidebar-size-' + v + 'pc');
            sidebar.open('sidebar-menu');
            clearTimeout(t);
            t = setTimeout(function () {
                sidebar.close('sidebar-menu');
            }, 5000);
        });

    };

    $('[data-toggle="sidebar-size-pc-demo"]').tkSidebarSizePcDemo();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_skin.js":[function(require,module,exports){
module.exports=require("/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js")
},{"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_skins.js":[function(require,module,exports){
var asyncLoader = require('./_async');

(function ($) {

    var changeSkin = function () {
        var skin = $.cookie("skin"),
            file = $.cookie("skin-file");
        if (typeof skin != 'undefined') {
            asyncLoader([ 'css/' + file + '.min.css' ], function () {
                $('[data-skin]').removeProp('disabled').parent().removeClass('loading');
            });
        }
    };

    $('[data-skin]').on('click', function () {

        if ($(this).prop('disabled')) return;

        $('[data-skin]').prop('disabled', true);

        $(this).parent().addClass('loading');

        $.cookie("skin", $(this).data('skin'));

        $.cookie("skin-file", $(this).data('file'));

        changeSkin();

    });

    var skin = $.cookie("skin");

    if (typeof skin != 'undefined' && skin != 'default') {
        changeSkin();
    }

})(jQuery);
},{"./_async":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_async.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/main.js":[function(require,module,exports){
require('./_breakpoints.js');
require('./_gridalicious.js');
require('./_scrollable.js');
require('./_skins');
require('./_isotope');
require('./_parallax');

// Sidebar Percentage Sizes Demo
require('./_sidebar-pc');
},{"./_breakpoints.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_breakpoints.js","./_gridalicious.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_gridalicious.js","./_isotope":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_isotope.js","./_parallax":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_parallax.js","./_scrollable.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_scrollable.js","./_sidebar-pc":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_sidebar-pc.js","./_skins":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_skins.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/_skin.js":[function(require,module,exports){
module.exports=require("/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js")
},{"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/essential/js/_skin.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/_edit.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var find = function (mapData, location, marker, markerData) {

        var eventData = $.extend({}, {marker: marker}, markerData, mapData),
            state = '',
            country = '',
            address = '';

        mapData.container.gmap('search', {'location': location}, function (results, status) {

            if (status === 'OK') {
                address = results[ 0 ].formatted_address;
                $.each(results[ 0 ].address_components, function (i, v) {
                    if (v.types[ 0 ] == "administrative_area_level_1" || v.types[ 0 ] == "administrative_area_level_2") {
                        state = v.long_name;
                    } else if (v.types[ 0 ] == "country") {
                        country = v.long_name;
                    }
                });
                eventData = $.extend({}, eventData, {state: state, country: country, address: address});
            }

            $(document).trigger('map.marker.find', eventData);

        });

    };

    var bindFind = function(marker, markerData, data) {

        if (typeof markerData.open !== 'undefined' && markerData.open === true) {
            find(data, markerData.latLng, marker, markerData);
        }

        google.maps.event.addListener(marker, 'dragend', function (e) {
            find(data, e.latLng, this, markerData);
        });

        google.maps.event.addListener(marker, 'click', function (e) {
            find(data, e.latLng, this, markerData);
        });

    };

    $(document).on('map.init', function (event, data) {

        if (data.container.data('id') == 'map-edit') {

            var markers = data.container.gmap('get', 'markers'),
                markerOptions = {
                    "draggable": true
                },
                markerData = {
                    "open": true,
                    "template": "tpl-edit",
                    "icon": "building-01"
                };

            google.maps.event.addListener(data.map, 'click', function (event) {

                markerData = $.extend({}, markerData, {"latLng": event.latLng});

                var marker = data.addMarker(markers.length, markerData, markerOptions);

                bindFind(marker, markerData, data);

            });

            google.maps.event.addListener(data.iw.window, 'domready', function () {

                $('#map-delete-marker').on('click', function (e) {
                    e.stopPropagation();
                    var id = $(this).data('id');
                    data.iw.close(id);
                    markers[ id ].setMap(null);
                });

            });

            $.each(markers, function(i, marker){

                var markerData = marker.get('content');

                bindFind(marker, markerData, data);

            });

        }

    });

    $(document).on('map.marker.find', function (event, data) {

        data.marker.setTitle(data.address);

        if (data.iw.window.isOpen === false) return;

        data.iw.open(data.marker.get('id'), data);

    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/_filters.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var arrayUnique = function(a) {
        return a.reduce(function(p, c) {
            if (p.indexOf(c) < 0) p.push(c);
            return p;
        }, []);
    };

    var filter = function(data){

        data.iw.close();
        data.container.gmap('set', 'bounds', null);

        var filters = [];

        $('#radios :checked').each(function (i, checkbox) {
            filters.push($(checkbox).val());
        });

        if (filters.length) {
            data.container.gmap('find', 'markers', {
                'property': 'tags',
                'value': filters,
                'operator': 'OR'
            }, function (marker, found) {
                if (found) {
                    data.container.gmap('addBounds', marker.position);
                }
                marker.setVisible(found);
            });
        } else {
            $.each(data.container.gmap('get', 'markers'), function (i, marker) {
                data.container.gmap('addBounds', marker.position);
                marker.setVisible(false);
            });
        }

    };

    $(document).on('map.init', function (event, data) {

        if (data.container.data('filters') === true) {

            var map = data,
                markers = data.container.gmap('get', 'markers'),
                tags = [],
                templateId = data.container.data('filtersTemplate') || '#map-filters-template';

            $.each(markers, function(i, marker){
                $.each(marker.tags, function(i, tag){
                    tags.push(tag);
                });
            });

            tags = arrayUnique(tags);

            var source = $(templateId).html();
            var template = Handlebars.compile(source);
            var $el = $(template({ tags: tags }));

            $el.insertAfter(data.container);

            var skin = require('../../../layout/js/_skin')();

            $('[data-scrollable]', $el).niceScroll({
                cursorborder: 0,
                cursorcolor: config.skins[ skin ][ 'primary-color' ],
                horizrailenabled: false
            });

            setTimeout(function(){
                filter(data);
            }, 100);

            $('body').on('click', '#radios :checkbox', function(){
                filter(data);
            });

        }

    });

})(jQuery);
},{"../../../layout/js/_skin":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/layout/js/_skin.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/_library.js":[function(require,module,exports){
module.exports = function () {

    var centerWindow = function (container, map, data) {

        if (data.lat && data.lng) {

            container.gmap('option', 'center', new google.maps.LatLng(data.lat, data.lng));

            map.panBy(0, -170);

            return true;

        }
        return false;
    };

    var centerMap = function (container, data) {

        if (data && data.length === 2) {

            container.gmap('option', 'center', new google.maps.LatLng(data[ 0 ], data[ 1 ]));

            return true;

        }
        return false;
    };

    var resize = function (container, map, windowData, mapData) {

        if (typeof google == 'undefined') return;

        google.maps.event.trigger(map, 'resize');

        if (! centerMap(container, mapData)) centerWindow(container, map, windowData);

    };

    return {
        centerWindow: centerWindow,
        centerMap: centerMap,
        resize: resize
    };

};
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/main.js":[function(require,module,exports){
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
    'callback=initGoogleMaps';
    document.body.appendChild(script);
}

window.onload = loadScript;

function initScripts() {
    var $scripts = [
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.extensions.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.services.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.microdata.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.microformat.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.overlays.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.rdfa.js",
        "js/vendor/maps/google/jquery-ui-map/addons/infobox_packed.js",
        "js/vendor/maps/google/jquery-ui-map/addons/markerclusterer.min.js"
    ];

    $.each($scripts, function (k, v) {
        if ($('[src="' + v + '"]').length) return true;
        var scriptNode = document.createElement('script');

        scriptNode.src = v;
        $('head').prepend($(scriptNode));
    });

    $.extend($.ui.gmap.prototype, {
        pagination: function (prop, mapData) {
            var source = $("#map-pagination").html();
            var template = Handlebars.compile(source);
            var $el = $(template());

            var self = this, i = 0;
            prop = prop || 'title';
            self.set('pagination', function (a, b) {
                if (a) {
                    i = i + b;
                    var m = self.get('markers')[ i ];
                    mapData.iw.open(i, m.get('content'));
                    $el.find('.display').text(m[ prop ]);
                    self.get('map').panTo(m.getPosition());
                }
            });
            self.get('pagination')(true, 0);
            $el.find('.back-btn').click(function (e) {
                e.preventDefault();
                self.get('pagination')((i > 0), - 1, this);
            });
            $el.find('.fwd-btn').click(function (e) {
                e.preventDefault();
                self.get('pagination')((i < self.get('markers').length - 1), 1, this);
            });
            self.addControl($el, google.maps.ControlPosition[ mapData.options.paginationPosition ]);
        }
    });
}

var library = require('./_library.js')();

// Holds google maps styles
var styles = {
    "light-grey": require('./styles/_light-grey.js'),
    "light-monochrome": require('./styles/_light-monochrome.js'),
    "cool-grey": require('./styles/_cool-grey.js'),
    "blue-gray": require('./styles/_blue-gray.js'),
    "paper": require('./styles/_paper.js'),
    "apple": require('./styles/_apple.js'),
    "light-green": require('./styles/_light-green.js'),
    "lemon-tree": require('./styles/_lemon-tree.js'),
    "clean-cut": require('./styles/_clean-cut.js'),
    "nature": require('./styles/_nature.js')
};

// Process the infoWindow content via Handlebars templates
var infoWindowContent = function (marker) {
    var source = $("#" + marker.template).html();
    var template = Handlebars.compile(source);
    return template(marker);
};

/**
 * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
 */
$.fn.tkGoogleMap = function () {

    if (! this.length) return;

    var container = this;

    if (typeof google == 'undefined' || typeof InfoBox == 'undefined') {
        setTimeout(function(){
            container.tkGoogleMap();
        }, 200);

        return;
    }

    var options = {
        mapZoomPosition: container.data('zoomPosition') || "TOP_LEFT",
        mapZoom: container.data('zoom') || 16,
        mapStyle: container.data('style') || "light-grey",
        mapType: container.data('type') || "ROADMAP",
        file: container.data('file'),
        center: container.data('center') ? container.data('center').split(",") : false,
        pagination: container.data('pagination') || false,
        paginationPosition: container.data('paginationPosition') || 'TOP_LEFT',
        draggable: container.data('draggable') !== false
    };

    var mapData;

    // provide a default object for data collected from the currently opened infoWindow
    var infoWindowData = {
        lat: false,
        lng: false
    };

    var infoWindowOpen = function (i, marker) {

        var markerInst = container.gmap('get', 'markers')[ i ];

        infoWindow.setContent(infoWindowContent(marker));
        infoWindow.open(map, markerInst);
        infoWindow.isOpen = i;

        infoWindowData = {
            lat: marker.latitude,
            lng: marker.longitude
        };
    };

    var infoWindowClose = function (i) {
        if (typeof i == 'undefined') {
            infoWindow.close();
            infoWindow.isOpen = false;
            return true;
        }
        if (typeof infoWindow.isOpen != 'undefined' && infoWindow.isOpen === i) {
            infoWindow.close();
            infoWindow.isOpen = false;
            return true;
        }
        return false;
    };

    /* InfoBox */
    var infoWindow = new InfoBox({
        maxWidth: 240,
        alignBottom: true
    });

    var addMarker = function (i, marker, options) {
        var iconBase = 'images/markers/';
        var position = typeof marker.latLng !== 'undefined' ? marker.latLng : false;
        if (! position && typeof marker.latitude !== 'undefined' && typeof marker.longitude !== 'undefined') position = new google.maps.LatLng(marker.latitude, marker.longitude);
        if (! position) return false;

        var markerOptions = {
            "id": i,
            "position": position,
            "draggable": true,
            "icon": iconBase + marker.icon + ".png"
        };

        if (typeof options == 'object') markerOptions = $.extend({}, markerOptions, options);

        var open = typeof marker.open !== 'undefined' && marker.open === true;

        container.gmap('addMarker', markerOptions);

        var markerInst = container.gmap('get', 'markers')[ i ];

        markerInst.setTitle(marker.title);

        google.maps.event.addListener(markerInst, 'click', function () {
            if (! infoWindowClose(i)) {
                infoWindowOpen(i, marker);
                library.centerWindow(container, map, infoWindowData);
            }
        });

        google.maps.event.addListener(markerInst, 'dragend', function () {
            var lat = markerInst.getPosition().lat();
            var lng = markerInst.getPosition().lng();
            console.log('"latitude": ' + lat + ', "longitude": ' + lng);
        });

        var markerData = $.extend({}, marker, {
            "id": i,
            "latLng": new google.maps.LatLng(marker.latitude, marker.longitude)
        });

        markerInst.set('content', markerData);

        if (open) infoWindowOpen(i, marker);

        return markerInst;
    };

    container.gmap(
        {
            'zoomControl': true,
            'zoomControlOptions': {
                'style': google.maps.ZoomControlStyle.SMALL,
                'position': google.maps.ControlPosition[ options.mapZoomPosition ]
            },
            'panControl': false,
            'streetViewControl': false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'draggable': options.draggable,
            'mapTypeId': google.maps.MapTypeId[ options.mapType ],
            'zoom': options.mapZoom,
            'styles': styles[ options.mapStyle ]
        })
        .bind('init', function () {

            mapData = {
                container: container,
                map: map,
                options: options,
                addMarker: addMarker,
                library: library,
                iw: {
                    data: infoWindowData,
                    window: infoWindow,
                    content: infoWindowContent,
                    open: infoWindowOpen,
                    close: infoWindowClose
                }
            };

            if (options.file) {

                $.getJSON(options.file, function (data) {

                    $.each(data.markers, function (i, marker) {
                        var o = typeof marker.options !== 'undefined' ? marker.options : {};
                        addMarker(i, marker, o);
                    });

                    google.maps.event.addListenerOnce(map, 'idle', function () {

                        library.resize(container, map, infoWindowData, options.center);

                        if (options.pagination) {
                            container.gmap('pagination', 'title', mapData);
                        }

                    });
                });

            }
            else {
                library.centerMap(container, options.center);
            }

            google.maps.event.addListenerOnce(map, 'idle', function () {

                $(document).trigger('map.init', mapData);

            });

            google.maps.event.addListener(infoWindow, 'domready', function () {
                var iw = $('.infoBox');
                infoWindow.setOptions({
                    pixelOffset: new google.maps.Size(- Math.abs(iw.width() / 2), - 45)
                });
                setTimeout(function(){

                    $('.cover', iw).each(function(){
                        $(this).tkCover();
                    });

                }, 200);
            });
        });

    var map = container.gmap('get', 'map');

    var t;
    $(window).on('debouncedresize', function () {
        clearTimeout(t);
        t = setTimeout(function () {
            library.resize(container, map, infoWindowData, options.center);
        }, 100);
    });

    // handle maps in collapsibles
    $('.collapse').on('shown.bs.collapse', function(){
        if ($(container, this).length) {
            library.resize(container, map, infoWindowData, options.center);
        }
    });

};

module.exports = function () {
    initScripts();

    /*
     * Clustering
     */
    if ($('#google-map-clustering').length) {
        // We need to bind the map with the "init" event otherwise bounds will be null
        $('#google-map-clustering').gmap({'zoom': 2, 'disableDefaultUI': true}).bind('init', function (evt, map) {
            var bounds = map.getBounds();
            var southWest = bounds.getSouthWest();
            var northEast = bounds.getNorthEast();
            var lngSpan = northEast.lng() - southWest.lng();
            var latSpan = northEast.lat() - southWest.lat();

            function openInfoWindow() {
                $('#google-map-clustering').gmap('openInfoWindow', {content: 'Hello world!'}, this);
            }

            for (var i = 0; i < 1000; i ++) {
                var lat = southWest.lat() + latSpan * Math.random();
                var lng = southWest.lng() + lngSpan * Math.random();
                $('#google-map-clustering').gmap('addMarker', {
                    'position': new google.maps.LatLng(lat, lng)
                }).click(openInfoWindow);
            }

            $('#google-map-clustering').gmap('set', 'MarkerClusterer', new MarkerClusterer(map, $(this).gmap('get', 'markers')));
        });
    }

};

(function($){
    "use strict";

    $(document).on('map.init', function (event, data) {

        var styleTpl = $('#map-style-switch'),
            toggleStyleWrapper = $('[data-toggle="map-style-switch"]');

        if (styleTpl.length && toggleStyleWrapper.length) {

            var target = $(toggleStyleWrapper.data('target'));

            if (! target) return;

            if (data.container.is(target)) {

                var s = styleTpl.html();
                var t = Handlebars.compile(s);

                toggleStyleWrapper.html(t({
                    styles: styles
                }));

                $('select', toggleStyleWrapper).val(data.options.mapStyle);

                if (typeof $.fn.selectpicker != 'undefined') {

                    $('.selectpicker', toggleStyleWrapper).each(function () {
                        $(this).selectpicker({
                            width: $(this).data('width') || '100%'
                        });
                    });

                }

                var skin = require('../_skin')();

                $('[data-scrollable]', toggleStyleWrapper).niceScroll({
                    cursorborder: 0,
                    cursorcolor: config.skins[ skin ][ 'primary-color' ],
                    horizrailenabled: false
                });

                $('select', toggleStyleWrapper).on('change', function () {
                    var style = typeof styles[ $(this).val() ] ? styles[ $(this).val() ] : false;
                    if (! style) return;

                    target.gmap('option', 'styles', style);
                });

            }

        }

    });

    $('[data-toggle="google-maps"]').each(function () {

        $(this).tkGoogleMap();

    });

})(jQuery);

require('./_edit');
require('./_filters');
},{"../_skin":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/_skin.js","./_edit":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/_edit.js","./_filters":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/_filters.js","./_library.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/_library.js","./styles/_apple.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_apple.js","./styles/_blue-gray.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_blue-gray.js","./styles/_clean-cut.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_clean-cut.js","./styles/_cool-grey.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_cool-grey.js","./styles/_lemon-tree.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_lemon-tree.js","./styles/_light-green.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_light-green.js","./styles/_light-grey.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_light-grey.js","./styles/_light-monochrome.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_light-monochrome.js","./styles/_nature.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_nature.js","./styles/_paper.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_paper.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_apple.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [ {"color": "#f7f1df"} ]
}, {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [ {"color": "#d0e3b4"} ]
}, {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [ {"color": "#fbd3da"} ]
}, {"featureType": "poi.park", "elementType": "geometry", "stylers": [ {"color": "#bde6ab"} ]}, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#ffe15f"} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#efd151"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#ffffff"} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "black"} ]
}, {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#cfb2db"} ]
}, {"featureType": "water", "elementType": "geometry", "stylers": [ {"color": "#a2daf2"} ]} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_blue-gray.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "water",
    "stylers": [ {"visibility": "on"}, {"color": "#b5cbe4"} ]
}, {"featureType": "landscape", "stylers": [ {"color": "#efefef"} ]}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [ {"color": "#83a5b0"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [ {"color": "#bdcdd3"} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"} ]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [ {"color": "#e3eed3"} ]
}, {
    "featureType": "administrative",
    "stylers": [ {"visibility": "on"}, {"lightness": 33} ]
}, {"featureType": "road"}, {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [ {"visibility": "on"}, {"lightness": 20} ]
}, {}, {"featureType": "road", "stylers": [ {"lightness": 20} ]} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_clean-cut.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [ {"lightness": 100}, {"visibility": "simplified"} ]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [ {"visibility": "on"}, {"color": "#C6E2FF"} ]
}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [ {"color": "#C5E3BF"} ]}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#D1D1B8"} ]
} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_cool-grey.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {"featureType": "transit", "elementType": "labels", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {"featureType": "water", "elementType": "labels", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [ {"visibility": "off"} ]
}, {"stylers": [ {"hue": "#00aaff"}, {"saturation": - 100}, {"gamma": 2.15}, {"lightness": 12} ]}, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [ {"visibility": "on"}, {"lightness": 24} ]
}, {"featureType": "road", "elementType": "geometry", "stylers": [ {"lightness": 57} ]} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_lemon-tree.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "off"} ]
}, {
    "featureType": "landscape.natural",
    "elementType": "all",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "on"} ]
}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [ {"hue": "#ffe94f"}, {"saturation": 100}, {"lightness": 4}, {"visibility": "on"} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [ {"hue": "#ffe94f"}, {"saturation": 100}, {"lightness": 4}, {"visibility": "on"} ]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [ {"hue": "#333333"}, {"saturation": - 100}, {"lightness": - 74}, {"visibility": "off"} ]
} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_light-green.js":[function(require,module,exports){
module.exports = [ {"stylers": [ {"hue": "#baf4c4"}, {"saturation": 10} ]}, {
    "featureType": "water",
    "stylers": [ {"color": "#effefd"} ]
}, {
    "featureType": "all",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [ {"visibility": "on"} ]
}, {"featureType": "road", "elementType": "all", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_light-grey.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [ {"color": "#e9e9e9"}, {"lightness": 17} ]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [ {"color": "#f5f5f5"}, {"lightness": 20} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 17} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2} ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 18} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 16} ]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [ {"color": "#f5f5f5"}, {"lightness": 21} ]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [ {"color": "#dedede"}, {"lightness": 21} ]
}, {
    "elementType": "labels.text.stroke",
    "stylers": [ {"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16} ]
}, {
    "elementType": "labels.text.fill",
    "stylers": [ {"saturation": 36}, {"color": "#333333"}, {"lightness": 40} ]
}, {"elementType": "labels.icon", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [ {"color": "#f2f2f2"}, {"lightness": 19} ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#fefefe"}, {"lightness": 20} ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2} ]
} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_light-monochrome.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "administrative.locality",
    "elementType": "all",
    "stylers": [ {"hue": "#2c2e33"}, {"saturation": 7}, {"lightness": 19}, {"visibility": "on"} ]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "simplified"} ]
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "off"} ]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [ {"hue": "#bbc0c4"}, {"saturation": - 93}, {"lightness": 31}, {"visibility": "simplified"} ]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [ {"hue": "#bbc0c4"}, {"saturation": - 93}, {"lightness": 31}, {"visibility": "on"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [ {"hue": "#bbc0c4"}, {"saturation": - 93}, {"lightness": - 2}, {"visibility": "simplified"} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [ {"hue": "#e9ebed"}, {"saturation": - 90}, {"lightness": - 8}, {"visibility": "simplified"} ]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ {"hue": "#e9ebed"}, {"saturation": 10}, {"lightness": 69}, {"visibility": "on"} ]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [ {"hue": "#e9ebed"}, {"saturation": - 78}, {"lightness": 67}, {"visibility": "simplified"} ]
} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_nature.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "landscape",
    "stylers": [ {"hue": "#FFA800"}, {"saturation": 0}, {"lightness": 0}, {"gamma": 1} ]
}, {
    "featureType": "road.highway",
    "stylers": [ {"hue": "#53FF00"}, {"saturation": - 73}, {"lightness": 40}, {"gamma": 1} ]
}, {
    "featureType": "road.arterial",
    "stylers": [ {"hue": "#FBFF00"}, {"saturation": 0}, {"lightness": 0}, {"gamma": 1} ]
}, {
    "featureType": "road.local",
    "stylers": [ {"hue": "#00FFFD"}, {"saturation": 0}, {"lightness": 30}, {"gamma": 1} ]
}, {
    "featureType": "water",
    "stylers": [ {"hue": "#00BFFF"}, {"saturation": 6}, {"lightness": 8}, {"gamma": 1} ]
}, {
    "featureType": "poi",
    "stylers": [ {"hue": "#679714"}, {"saturation": 33.4}, {"lightness": - 25.4}, {"gamma": 1} ]
} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/styles/_paper.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"}, {"hue": "#0066ff"}, {"saturation": 74}, {"lightness": 100} ]
}, {"featureType": "poi", "elementType": "all", "stylers": [ {"visibility": "simplified"} ]}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"} ]
}, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [ {"visibility": "off"}, {"weight": 0.6}, {"saturation": - 85}, {"lightness": 61} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [ {"visibility": "on"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
}, {"featureType": "road.local", "elementType": "all", "stylers": [ {"visibility": "on"} ]}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"} ]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"}, {"color": "#5f94ff"}, {"lightness": 26}, {"gamma": 5.86} ]
} ];
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/main.js":[function(require,module,exports){
require('./owl/main');
require('./slick/_default');
},{"./owl/main":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/main.js","./slick/_default":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/slick/_default.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/_default.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkOwlDefault = function () {

        if (! this.length) return;

        var c = this;
        c.owlCarousel({
            dots: true,
            items: c.data('items') || 4,
            responsive: {
                1200: {
                    items: c.data('itemsLg') || 4
                },
                992: {
                    items: c.data('itemsMg') || 3
                },
                768: {
                    items: c.data('itemsSm') || 3
                },
                480: {
                    items: c.data('itemsXs') || 2
                },
                0: {
                    items: 1
                }
            },
            rtl: this.data('rtl'),
            afterUpdate: function () {
                $(window).trigger('resize');
            }
        });

    };

    $(".owl-basic").each(function () {
        $(this).tkOwlDefault();
    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/_mixed.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkOwlMixed = function () {

        if (! this.length) return;

        this.owlCarousel({
            items: 2,
            nav: true,
            dots: false,
            rtl: this.data('rtl'),
            navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
            responsive: {
                1200: {
                    items: 2
                },
                0: {
                    items: 1
                }
            }
        });

    };

    $(".owl-mixed").tkOwlMixed();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/_preview.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var syncPosition = function (e, target) {
        if (e.namespace && e.property.name === 'items') {
            target.trigger('to.owl.carousel', [e.item.index, 300, true]);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkOwlPreview = function () {

        if (! this.length) return;

        var target = $(this.data('sync')),
            preview = this,
            rtl = this.data('rtl');

        if (! target.length) return;

        this.owlCarousel({
            items: 1,
            slideSpeed: 1000,
            dots: false,
            responsiveRefreshRate: 200,
            rtl: rtl,
            nav: true,
            navigationText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ]
        });

        this.on('change.owl.carousel', function(e){
            syncPosition(e, target);
        });

        target.owlCarousel({
            items: 5,
            responsive: {
                1200: {
                    items: 7
                },
                768: {
                    items: 6
                },
                480: {
                    items: 3
                },
                0: {
                    items: 2
                }
            },
            dots: false,
            nav: true,
            responsiveRefreshRate: 100,
            rtl: rtl,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        target.on('change.owl.carousel', function(e){
            syncPosition(e, preview);
        });

        target.find('.owl-item').click(function (e) {
            e.preventDefault();
            var item = $(this).data("owl-item");
            preview.trigger("to.owl.carousel", [item.index, 300, true]);
        });

    };

    $(".owl-preview").tkOwlPreview();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/main.js":[function(require,module,exports){
require('./_default');
require('./_mixed');
require('./_preview');
},{"./_default":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/_default.js","./_mixed":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/_mixed.js","./_preview":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/owl/_preview.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/media/js/carousel/slick/_default.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSlickDefault = function () {

        if (! this.length) return;

        if (typeof $.fn.slick == 'undefined') return;

        var c = this;
        
        c.slick({
            dots: true,
            slidesToShow: c.data('items') || 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: c.data('itemsLg') || 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: c.data('itemsMd') || 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: c.data('itemsSm') || 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: c.data('itemsXs') || 2
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],
            rtl: this.data('rtl'),
            onSetPosition: function () {
                $(window).trigger('resize');
            }
        });

        $(document).on('sidebar.shown', function(){
            c.slickSetOption('dots', true, true);
        });

    };

    $(".slick-basic").each(function () {
        $(this).tkSlickDefault();
    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/real-estate/js/_maps.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(document).on('map.init', function(event, data) {

        if (data.container.is('#google-fs-realestate')) {

            var container = data.container,
                map = data.map,
                options = data.options,
                iw = data.iw.window;

            var library = require('../../maps/js/google/_library.js')();

            $(document).on('sidebar.shown sidebar.hidden', function (event, data) {
                if (data.target == '#sidebar-map' || data.target == "#sidebar-edit") {
                    var position = iw.getPosition(),
                        infoWindowData = {
                            lat: position.lat(),
                            lng: position.lng()
                        };
                    library.resize(container, map, infoWindowData, options.center);
                }
            });

            $(document).on('sidebar.shown', function (event, data) {
                if (data.target == "#sidebar-edit") {
                    $('#toggle-sidebar-edit').addClass('active');
                }
            });

            $(document).on('sidebar.hidden', function (event, data) {
                if (data.target == "#sidebar-edit") {
                    $('#toggle-sidebar-edit').removeClass('active');
                }
            });

        }

    });

})(jQuery);

},{"../../maps/js/google/_library.js":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/maps/js/google/_library.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var restore = function () {
            $("html").addClass('show-sidebar');
            $('.sidebar.sidebar-visible-desktop').not(':visible').each(function () {
                var options = sidebar.options($(this));
                sidebar.open($(this).attr('id'), options);
            });
        },
        hide = function () {
            $("html").removeClass('show-sidebar');
            $('.sidebar:visible').each(function () {
                sidebar.close($(this).attr('id'));
            });
        };

    $(window).bind('enterBreakpoint768', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint1024', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar').length) return;
        hide();
    });

    if ($(window).width() <= 480) {
        if (! $('.sidebar').length) return;
        hide();
    }

})(jQuery);

},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_collapsible.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSidebarCollapse = function () {

        if (! this.length) return;

        var sidebar = this;

        sidebar.find('.sidebar-menu > li > a').off('mouseenter');
        sidebar.find('.sidebar-menu > li.dropdown > a').off('mouseenter');
        sidebar.find('.sidebar-menu > li > a').off('mouseenter');
        sidebar.find('.sidebar-menu > li > a').off('click');
        sidebar.off('mouseleave');
        sidebar.find('.dropdown').off('mouseover');
        sidebar.find('.dropdown').off('mouseout');

        $('body').off('mouseout', '#dropdown-temp .dropdown');

        sidebar.find('ul.collapse')
            .off('shown.bs.collapse')
            .off('show.bs.collapse')
            .off('hide.bs.collapse')
            .off('hidden.bs.collapse');

        sidebar.find('#dropdown-temp').remove();

        sidebar.find('.hasSubmenu').removeClass('dropdown')
            .find('> ul').addClass('collapse').removeClass('dropdown-menu submenu-hide submenu-show')
            .end()
            .find('> a').attr('data-toggle', 'collapse').on('click', function(e){
                e.preventDefault();
            });

        sidebar.find('.collapse').on('shown.bs.collapse', function () {
            sidebar.find('[data-scrollable]').getNiceScroll().resize();
        });

        // Collapse
        sidebar.find('.collapse').on('show.bs.collapse', function (e) {
            e.stopPropagation();
            var parents = $(this).parents('ul:first').find('> li.open > ul');
            if (parents.length) {
                parents.collapse('hide').closest('.hasSubmenu').removeClass('open');
            }
            $(this).closest('.hasSubmenu').addClass('open');
        });

        sidebar.find('.collapse').on('hidden.bs.collapse', function (e) {
            e.stopPropagation();
            $(this).closest('.hasSubmenu').removeClass('open');
        });

        sidebar.find('.collapse').collapse({ toggle: false });

    };

    $('.sidebar[data-type="collapse"]').each(function(){
        $(this).tkSidebarCollapse();
    });

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_dropdown.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSidebarDropdown = function () {

        if (! this.length) return;

        var sidebar = this;

        sidebar.find('.collapse')
            .off('shown.bs.collapse')
            .off('show.bs.collapse')
            .off('hidden.bs.collapse');

        var nice = sidebar.find('[data-scrollable]').getNiceScroll()[ 0 ];

        nice.scrollstart(function () {
            if (! sidebar.is('[data-type="dropdown"]')) return;
            sidebar.addClass('scrolling');
            sidebar.find('#dropdown-temp > ul > li').empty();
            sidebar.find('#dropdown-temp').hide();
            sidebar.find('.open').removeClass('open');
        });

        nice.scrollend(function () {
            if (! sidebar.is('[data-type="dropdown"]')) return;
            $.data(this, 'lastScrollTop', nice.getScrollTop());
            sidebar.removeClass('scrolling');
        });

        sidebar.find('.hasSubmenu').addClass('dropdown').removeClass('open')
            .find('> ul').addClass('dropdown-menu').removeClass('collapse in').removeAttr('style')
            .end()
            .find('> a').removeClass('collapsed')
            .removeAttr('data-toggle');

        sidebar.find('.sidebar-menu > li.dropdown > a').on('mouseenter', function () {

            var c = sidebar.find('#dropdown-temp');

            sidebar.find('.open').removeClass('open');
            c.hide();

            if (! $(this).parent('.dropdown').is('.open') && ! sidebar.is('.scrolling')) {
                var p = $(this).parent('.dropdown'),
                    t = p.find('> .dropdown-menu').clone().removeClass('submenu-hide');

                if (! c.length) {
                    c = $('<div/>').attr('id', 'dropdown-temp').appendTo(sidebar);
                    c.html('<ul><li></li></ul>');
                }

                c.show();
                c.find('.dropdown-menu').remove();
                c = c.find('> ul > li').css({overflow: 'visible'}).addClass('dropdown open');

                p.addClass('open');
                t.appendTo(c).css({
                    top: p.offset().top - c.offset().top,
                    left: '100%'
                }).show();

                if (sidebar.is('.right')) {
                    t.css({
                        left: 'auto',
                        right: '100%'
                    });
                }
            }
        });

        sidebar.find('.sidebar-menu > li > a').on('mouseenter', function () {

            if (! $(this).parent().is('.dropdown')) {
                var sidebar = $(this).closest('.sidebar');
                sidebar.find('.open').removeClass('open');
                sidebar.find('#dropdown-temp').hide();
            }

        });

        sidebar.find('.sidebar-menu > li > a').on('click', function (e) {
            if ($(this).parent().is('.dropdown')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        sidebar.on('mouseleave', function () {
            $(this).find('#dropdown-temp').hide();
            $(this).find('.open').removeClass('open');
        });

        sidebar.find('.dropdown').on('mouseover', function () {
            $(this).addClass('open').children('ul').removeClass('submenu-hide').addClass('submenu-show');
        }).on('mouseout', function () {
            $(this).children('ul').removeClass('.submenu-show').addClass('submenu-hide');
        });

        $('body').on('mouseout', '#dropdown-temp .dropdown', function () {
            $('.sidebar-menu .open', $(this).closest('.sidebar')).removeClass('.open');
        });

    };

    var transform_dd = function(){

        $('.sidebar[data-type="dropdown"]').each(function(){
            $(this).tkSidebarDropdown();
        });

    };

    var transform_collapse = function(){

        $('.sidebar[data-type="collapse"]').each(function(){
            $(this).tkSidebarCollapse();
        });

    };

    transform_dd();

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar[data-type="dropdown"]').length) return;
        $('.sidebar[data-type="dropdown"]').attr('data-type', 'collapse').attr('data-transformed', true);
        transform_collapse();
    });

    function make_dd() {
        if (! $('.sidebar[data-type="collapse"][data-transformed]').length) return;
        $('.sidebar[data-type="collapse"][data-transformed]').attr('data-type', 'dropdown').attr('data-transformed', true);
        transform_dd();
    }

    $(window).bind('enterBreakpoint768', make_dd);

    $(window).bind('enterBreakpoint1024', make_dd);

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_options.js":[function(require,module,exports){
module.exports = function (sidebar) {
    return {
        "transform-button": sidebar.data('transformButton') === true,
        "transform-button-icon": sidebar.data('transformButtonIcon') || 'fa-ellipsis-h'
    };
};
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_sidebar-menu.js":[function(require,module,exports){
(function ($) {

    var sidebars = $('.sidebar');

    sidebars.each(function () {

        var sidebar = $(this);
        var options = require('./_options')(sidebar);

        if (options[ 'transform-button' ]) {
            var button = $('<button type="button"></button>');

            button
                .attr('data-toggle', 'sidebar-transform')
                .addClass('btn btn-default')
                .html('<i class="fa ' + options[ 'transform-button-icon' ] + '"></i>');

            sidebar.find('.sidebar-menu').append(button);
        }
    });

}(jQuery));
},{"./_options":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_options.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_sidebar-toggle.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('#subnav').collapse({'toggle': false});

    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    (function () {

        var defaults = {
                effect: 'st-effect-1',
                duration: 550,
                overlay: false
            },

            containerSelector = '.st-container',

            eventtype = mobilecheck() ? 'touchstart' : 'click',

            getLayoutClasses = function (sidebar, direction) {

                var layoutClasses = sidebar.data('layoutClasses');

                if (! layoutClasses) {
                    var toggleLayout = sidebar.data('toggleLayout');
                    if (typeof toggleLayout == 'string') {
                        layoutClasses = toggleLayout.split(",").join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                        return layoutClasses;
                    }

                    var match = new RegExp('sidebar-' + direction + '(\\S+)', 'ig');
                    layoutClasses = $('html').get(0).className.match(match);
                    if (layoutClasses !== null && layoutClasses.length) {
                        layoutClasses = layoutClasses.join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                    }
                }

                return layoutClasses;

            },

            getSidebarDataOptions = function(sidebar){

                return {
                    effect: sidebar.data('effect'),
                    overlay: sidebar.data('overlay')
                };

            },

            animating = function () {

                if ($('body').hasClass('animating')) return true;
                $('body').addClass('animating');

                setTimeout(function () {
                    $('body').removeClass('animating');
                }, defaults.duration);

                return false;

            },

            reset = function (id, options) {

                var container = $(containerSelector);

                var target = typeof id !== 'undefined' ? '#' + id : container.data('stMenuTarget'),
                    sidebar = $(target);

                if (! sidebar.length) return false;
                if (! sidebar.is(':visible')) return false;
                if (sidebar.hasClass('sidebar-closed')) return false;

                var effect = typeof options !== 'undefined' && options.effect ? options.effect : container.data('stMenuEffect'),
                    direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.hide', eventData);

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .removeClass('active')
                    .closest('li')
                    .removeClass('active');

                $('html').addClass(htmlClass);
                sidebar.addClass(effect);
                container.addClass(effect);

                container.removeClass('st-menu-open st-pusher-overlay');

                setTimeout(function () {
                    $('html').removeClass(htmlClass);
                    if (toggleLayout) $('html').removeClass(layoutClasses);
                    sidebar.removeClass(effect);
                    container.get(0).className = 'st-container'; // clear
                    sidebar.addClass('sidebar-closed').hide();
                    $(document).trigger('sidebar.hidden', eventData);
                }, defaults.duration);

            },

            open = function (target, options) {

                var container = $(containerSelector);

                var sidebar = $(target);
                if (! sidebar.length) return false;

                // on mobile, allow only one sidebar to be open at the same time
                if ($(window).width() < 768 && container.hasClass('st-menu-open')) {
                    return reset();
                }

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .addClass('active')
                    .closest('li')
                    .addClass('active');

                var effect = options.effect,
                    overlay = options.overlay;

                var direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.show', eventData);

                $('html').addClass(htmlClass);
                sidebar.show().removeClass('sidebar-closed');

                container.data('stMenuEffect', effect);
                container.data('stMenuTarget', target);

                sidebar.addClass(effect);
                container.addClass(effect);
                if (overlay) container.addClass('st-pusher-overlay');

                setTimeout(function () {
                    container.addClass('st-menu-open');
                    sidebar.find('[data-scrollable]').getNiceScroll().resize();
                    $(window).trigger('resize');
                }, 25);

                setTimeout(function () {
                    if (toggleLayout) $('html').addClass(layoutClasses);
                    $(document).trigger('sidebar.shown', eventData);
                }, defaults.duration);

            },

            toggle = function (e) {

                e.stopPropagation();
                e.preventDefault();

                var a = animating();
                if (a) return false;

                var button = $(this),
                    target = button.attr('href'),
                    sidebar;

                if (target.length > 3) {
                    sidebar = $(target);
                    if (! sidebar.length) return false;
                }

                if (target.length < 3) {
                    var currentActiveElement = $('[data-toggle="sidebar-menu"]').not(this).closest('li').length ? $('[data-toggle="sidebar-menu"]').not(this).closest('li') : $('[data-toggle="sidebar-menu"]').not(this);
                    var activeElement = $(this).closest('li').length ? $(this).closest('li') : $(this);

                    currentActiveElement.removeClass('active');
                    activeElement.addClass('active');

                    if ($('html').hasClass('show-sidebar')) activeElement.removeClass('active');

                    $('html').removeClass('show-sidebar');

                    if (activeElement.hasClass('active')) $('html').addClass('show-sidebar');
                    return;
                }

                var dataOptions = getSidebarDataOptions(sidebar),
                    buttonOptions = {};

                if (button.data('effect')) buttonOptions.effect = button.data('effect');
                if (button.data('overlay')) buttonOptions.overlay = button.data('overlay');

                var options = $.extend({}, defaults, dataOptions, buttonOptions);

                if (! sidebar.hasClass('sidebar-closed') && sidebar.is(':visible')) {
                    reset(sidebar.attr('id'), options);
                    return;
                }

                open(target, options);

            };

        $('body').on(eventtype, '[data-toggle="sidebar-menu"]', toggle);

        $(document).on('keydown', null, 'esc', function () {

            var container = $(containerSelector);

            if (container.hasClass('st-menu-open')) {
                reset();
                return false;
            }

        });

        /**
         * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
         */
        $.fn.tkSidebarToggleBar = function () {

            if (! this.length) return;

            var sidebar = this;

            /* Sidebar Toggle Bar */
            if (sidebar.data('toggleBar')) {
                var bar = $('<a></a>');
                bar.attr('href', '#' + sidebar.attr('id'))
                    .attr('data-toggle', 'sidebar-menu')
                    .addClass('sidebar-toggle-bar');

                sidebar.append(bar);
            }

        };

        $('.sidebar').each(function(){
            $(this).tkSidebarToggleBar();
        });

        window.sidebar = {

            open: function (id, options) {

                var a = animating();
                if (a) return false;

                options = $.extend({}, defaults, options);

                return open('#' + id, options);

            },

            close: function (id, options) {

                options = $.extend({}, defaults, options);

                return reset(id, options);

            },

            options: getSidebarDataOptions

        };

    })();

})(jQuery);
},{}],"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_sidebar-menu');
require('./_collapsible');
require('./_dropdown');
require('./_sidebar-toggle');

(function($){
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSidebar = function (options) {

        if (! this.length) return;

        var settings = $.extend({
            menuType: false,
            toggleBar: false
        }, options);

        var sidebar = this;

        if (settings.menuType == "collapse") {
            sidebar.tkSidebarCollapse();
        }

        if (settings.menuType == "dropdown") {
            sidebar.tkSidebarDropdown();
        }

        if (settings.toggleBar === true) {
            sidebar.tkSidebarToggleBar();
        }

    };

})(jQuery);
},{"./_breakpoints":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_breakpoints.js","./_collapsible":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_collapsible.js","./_dropdown":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_dropdown.js","./_sidebar-menu":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_sidebar-menu.js","./_sidebar-toggle":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/sidebar/js/_sidebar-toggle.js"}],"/Users/bgirer/Downloads/real-estate-1.2.0/src/js/themes/html/main.js":[function(require,module,exports){
// CUSTOM
require('real-estate/js/_maps');
},{"real-estate/js/_maps":"/Users/bgirer/Downloads/real-estate-1.2.0/lib/real-estate/js/_maps.js"}]},{},["./src/js/themes/html/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvdGhlbWVzL2h0bWwvYXBwLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fYm9vdHN0cmFwLWNhcm91c2VsLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fYm9vdHN0cmFwLWNvbGxhcHNlLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fYm9vdHN0cmFwLW1vZGFsLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fYm9vdHN0cmFwLXN3aXRjaC5qcyIsImxpYi9lc3NlbnRpYWwvanMvX2NoZWNrLWFsbC5qcyIsImxpYi9lc3NlbnRpYWwvanMvX2NvdmVyLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fZGF0ZXBpY2tlci5qcyIsImxpYi9lc3NlbnRpYWwvanMvX2RhdGVyYW5nZXBpY2tlci5qcyIsImxpYi9lc3NlbnRpYWwvanMvX2V4cGFuZGFibGUuanMiLCJsaWIvZXNzZW50aWFsL2pzL19pZnJhbWUuanMiLCJsaWIvZXNzZW50aWFsL2pzL19taW5pY29sb3JzLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fbmVzdGFibGUuanMiLCJsaWIvZXNzZW50aWFsL2pzL19wYW5lbC1jb2xsYXBzZS5qcyIsImxpYi9lc3NlbnRpYWwvanMvX3Byb2dyZXNzLWJhcnMuanMiLCJsaWIvZXNzZW50aWFsL2pzL19zZWxlY3QyLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fc2VsZWN0cGlja2VyLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fc2hvdy1ob3Zlci5qcyIsImxpYi9lc3NlbnRpYWwvanMvX3NraW4uanMiLCJsaWIvZXNzZW50aWFsL2pzL19zbGlkZXIuanMiLCJsaWIvZXNzZW50aWFsL2pzL19zdW1tZXJub3RlLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fdGFibGVzLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fdGFicy5qcyIsImxpYi9lc3NlbnRpYWwvanMvX3Rvb2x0aXAuanMiLCJsaWIvZXNzZW50aWFsL2pzL190b3VjaHNwaW4uanMiLCJsaWIvZXNzZW50aWFsL2pzL190cmVlLmpzIiwibGliL2Vzc2VudGlhbC9qcy9fd2l6YXJkLmpzIiwibGliL2Vzc2VudGlhbC9qcy9tYWluLmpzIiwibGliL2xheW91dC9qcy9fYXN5bmMuanMiLCJsaWIvbGF5b3V0L2pzL19icmVha3BvaW50cy5qcyIsImxpYi9sYXlvdXQvanMvX2dyaWRhbGljaW91cy5qcyIsImxpYi9sYXlvdXQvanMvX2lzb3RvcGUuanMiLCJsaWIvbGF5b3V0L2pzL19wYXJhbGxheC5qcyIsImxpYi9sYXlvdXQvanMvX3Njcm9sbGFibGUuanMiLCJsaWIvbGF5b3V0L2pzL19zaWRlYmFyLXBjLmpzIiwibGliL2xheW91dC9qcy9fc2tpbnMuanMiLCJsaWIvbGF5b3V0L2pzL21haW4uanMiLCJsaWIvbWFwcy9qcy9nb29nbGUvX2VkaXQuanMiLCJsaWIvbWFwcy9qcy9nb29nbGUvX2ZpbHRlcnMuanMiLCJsaWIvbWFwcy9qcy9nb29nbGUvX2xpYnJhcnkuanMiLCJsaWIvbWFwcy9qcy9nb29nbGUvbWFpbi5qcyIsImxpYi9tYXBzL2pzL2dvb2dsZS9zdHlsZXMvX2FwcGxlLmpzIiwibGliL21hcHMvanMvZ29vZ2xlL3N0eWxlcy9fYmx1ZS1ncmF5LmpzIiwibGliL21hcHMvanMvZ29vZ2xlL3N0eWxlcy9fY2xlYW4tY3V0LmpzIiwibGliL21hcHMvanMvZ29vZ2xlL3N0eWxlcy9fY29vbC1ncmV5LmpzIiwibGliL21hcHMvanMvZ29vZ2xlL3N0eWxlcy9fbGVtb24tdHJlZS5qcyIsImxpYi9tYXBzL2pzL2dvb2dsZS9zdHlsZXMvX2xpZ2h0LWdyZWVuLmpzIiwibGliL21hcHMvanMvZ29vZ2xlL3N0eWxlcy9fbGlnaHQtZ3JleS5qcyIsImxpYi9tYXBzL2pzL2dvb2dsZS9zdHlsZXMvX2xpZ2h0LW1vbm9jaHJvbWUuanMiLCJsaWIvbWFwcy9qcy9nb29nbGUvc3R5bGVzL19uYXR1cmUuanMiLCJsaWIvbWFwcy9qcy9nb29nbGUvc3R5bGVzL19wYXBlci5qcyIsImxpYi9tZWRpYS9qcy9jYXJvdXNlbC9tYWluLmpzIiwibGliL21lZGlhL2pzL2Nhcm91c2VsL293bC9fZGVmYXVsdC5qcyIsImxpYi9tZWRpYS9qcy9jYXJvdXNlbC9vd2wvX21peGVkLmpzIiwibGliL21lZGlhL2pzL2Nhcm91c2VsL293bC9fcHJldmlldy5qcyIsImxpYi9tZWRpYS9qcy9jYXJvdXNlbC9vd2wvbWFpbi5qcyIsImxpYi9tZWRpYS9qcy9jYXJvdXNlbC9zbGljay9fZGVmYXVsdC5qcyIsImxpYi9yZWFsLWVzdGF0ZS9qcy9fbWFwcy5qcyIsImxpYi9zaWRlYmFyL2pzL19icmVha3BvaW50cy5qcyIsImxpYi9zaWRlYmFyL2pzL19jb2xsYXBzaWJsZS5qcyIsImxpYi9zaWRlYmFyL2pzL19kcm9wZG93bi5qcyIsImxpYi9zaWRlYmFyL2pzL19vcHRpb25zLmpzIiwibGliL3NpZGViYXIvanMvX3NpZGViYXItbWVudS5qcyIsImxpYi9zaWRlYmFyL2pzL19zaWRlYmFyLXRvZ2dsZS5qcyIsImxpYi9zaWRlYmFyL2pzL21haW4uanMiLCJzcmMvanMvdGhlbWVzL2h0bWwvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gRXNzZW50aWFsc1xucmVxdWlyZSgnZXNzZW50aWFsL2pzL21haW4nKTtcblxuLy8gTGF5b3V0XG5yZXF1aXJlKCdsYXlvdXQvanMvbWFpbicpO1xuXG4vLyBTaWRlYmFyXG5yZXF1aXJlKCdzaWRlYmFyL2pzL21haW4nKTtcblxuLy8gT3dsIENhcm91c2VsXG5yZXF1aXJlKCdtZWRpYS9qcy9jYXJvdXNlbC9tYWluJyk7XG5cbi8vIE1hcHNcbndpbmRvdy5pbml0R29vZ2xlTWFwcyA9IHJlcXVpcmUoJ21hcHMvanMvZ29vZ2xlL21haW4nKTtcblxuLy8gQ09SRVxucmVxdWlyZSgnLi9tYWluJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrQ2Fyb3VzZWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNhcm91c2VsKCk7XG5cbiAgICAgICAgdGhpcy5maW5kKCdbZGF0YS1zbGlkZV0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5hdHRyKCdocmVmJykgfHwgdGhpcy5hdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgaWYgKCEgdGFyZ2V0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0YXJnZXQpLmNvbGxhcHNlKHt0b2dnbGU6IGZhbHNlfSk7XG5cbiAgICB9O1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a01vZGFsID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYXR0cignaHJlZicpIHx8IHRoaXMuYXR0cigndGFyZ2V0Jyk7XG4gICAgICAgIGlmICghIHRhcmdldCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0YXJnZXQpLm1vZGFsKHtzaG93OiBmYWxzZX0pO1xuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vZGFsIGNyZWF0b3IgZm9yIHRoZSBkZW1vIHBhZ2UuXG4gICAgICogQWxsb3dzIHRvIGV4cGxvcmUgZGlmZmVyZW50IG1vZGFsIHR5cGVzLlxuICAgICAqIEZvciBkZW1vIHB1cnBvc2VzIG9ubHkuXG4gICAgICovXG5cbiAgICAvLyBQcm9jZXNzIHRoZSBtb2RhbCB2aWEgSGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICB2YXIgbW9kYWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgc291cmNlID0gJChcIiNcIiArIG9wdGlvbnMudGVtcGxhdGUpLmh0bWwoKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZShvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgdmFyIHJhbmRvbUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiogQHJldHVybiBTdHJpbmcgKi9cbiAgICAgICAgdmFyIFM0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChTNCgpICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFM0KCkgKyBTNCgpKTtcbiAgICB9O1xuXG4gICAgJC5mbi50a01vZGFsRGVtbyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciB0YXJnZXRJZCA9IHRoaXMuYXR0cignaHJlZicpIHx8IHRoaXMuYXR0cigndGFyZ2V0JyksXG4gICAgICAgICAgICB0YXJnZXQgPSAkKHRhcmdldElkKTtcblxuICAgICAgICBpZiAoISB0YXJnZXRJZCkge1xuICAgICAgICAgICAgdGFyZ2V0SWQgPSByYW5kb21JZCgpO1xuICAgICAgICAgICAgdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcsICcjJyArIHRhcmdldElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldElkLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICAgICAgaWYgKCEgdGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gJChtb2RhbCh7XG4gICAgICAgICAgICAgICAgaWQ6IHRhcmdldElkLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLmRhdGEoJ3RlbXBsYXRlJykgfHwgJ3RrLW1vZGFsLWRlbW8nLFxuICAgICAgICAgICAgICAgIG1vZGFsT3B0aW9uczogdGhpcy5kYXRhKCdtb2RhbE9wdGlvbnMnKSB8fCAnJyxcbiAgICAgICAgICAgICAgICBkaWFsb2dPcHRpb25zOiB0aGlzLmRhdGEoJ2RpYWxvZ09wdGlvbnMnKSB8fCAnJyxcbiAgICAgICAgICAgICAgICBjb250ZW50T3B0aW9uczogdGhpcy5kYXRhKCdjb250ZW50T3B0aW9ucycpIHx8ICcnXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRhcmdldCk7XG4gICAgICAgICAgICB0YXJnZXQubW9kYWwoe3Nob3c6IGZhbHNlfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0YXJnZXQubW9kYWwoJ3RvZ2dsZScpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0ay1tb2RhbC1kZW1vXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtNb2RhbERlbW8oKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInN3aXRjaC1jaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQodGhpcykuYm9vdHN0cmFwU3dpdGNoKHtcbiAgICAgICAgICAgIG9mZkNvbG9yOiAnZGFuZ2VyJ1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0NoZWNrQWxsID0gZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKS5maW5kKCc6Y2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgQWxsIENoZWNrYm94ZXNcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJjaGVjay1hbGxcIl0nKS50a0NoZWNrQWxsKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBDb25zZXJ2ZSBhc3BlY3QgcmF0aW8gb2YgdGhlIG9yaWduYWwgcmVnaW9uLiBVc2VmdWwgd2hlbiBzaHJpbmtpbmcvZW5sYXJnaW5nXG4gICAgICogaW1hZ2VzIHRvIGZpdCBpbnRvIGEgY2VydGFpbiBhcmVhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNyY1dpZHRoIFNvdXJjZSBhcmVhIHdpZHRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNyY0hlaWdodCBTb3VyY2UgYXJlYSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4V2lkdGggRml0dGFibGUgYXJlYSBtYXhpbXVtIGF2YWlsYWJsZSB3aWR0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXhIZWlnaHQgRml0dGFibGUgYXJlYSBtYXhpbXVtIGF2YWlsYWJsZSBoZWlnaHRcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHsgd2lkdGgsIGhlaWd0aCB9XG4gICAgICovXG4gICAgdmFyIGFzcGVjdFJhdGlvRml0ID0gZnVuY3Rpb24gKHNyY1dpZHRoLCBzcmNIZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQpIHtcblxuICAgICAgICB2YXIgd1JhdGlvID0gbWF4V2lkdGggLyBzcmNXaWR0aCxcbiAgICAgICAgICAgIGhSYXRpbyA9IG1heEhlaWdodCAvIHNyY0hlaWdodCxcbiAgICAgICAgICAgIHdpZHRoID0gc3JjV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBzcmNIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHNyY1dpZHRoIC8gbWF4V2lkdGggPCBzcmNIZWlnaHQgLyBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBzcmNIZWlnaHQgKiB3UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IHNyY1dpZHRoICogaFJhdGlvO1xuICAgICAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fTtcbiAgICB9O1xuXG4gICAgJC5mbi50a0NvdmVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5maWx0ZXIoJzp2aXNpYmxlJykubm90KCdbY2xhc3MqPVwiaGVpZ2h0XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgaSA9IHQuZmluZCgnaW1nOmZpcnN0Jyk7XG5cbiAgICAgICAgICAgIGlmIChpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQubG9hZEltYWdlKGkuYXR0cignc3JjJykpLmRvbmUoZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICB0LmhlaWdodChpLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm92ZXJsYXktZnVsbCcsIHQpLmlubmVySGVpZ2h0KGkuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdkb21DaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpID0gdC5maW5kKCcuaW1nOmZpcnN0Jyk7XG4gICAgICAgICAgICAgICAgdC5oZWlnaHQoaS5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgJCgnLm92ZXJsYXktZnVsbCcsIHQpLmlubmVySGVpZ2h0KGkuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2RvbUNoYW5nZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXIoJzp2aXNpYmxlJykuZmlsdGVyKCdbY2xhc3MqPVwiaGVpZ2h0XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgaW1nID0gdC5maW5kKCdpbWcnKSB8fCB0LmZpbmQoJy5pbWcnKTtcblxuICAgICAgICAgICAgaW1nLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoaS5kYXRhKCdhdXRvU2l6ZScpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkuaXMoJ2ltZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICQubG9hZEltYWdlKGkuYXR0cignc3JjJykpLmRvbmUoZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5jc3MoYXNwZWN0UmF0aW9GaXQoaS53aWR0aCgpLCBpLmhlaWdodCgpLCB0LndpZHRoKCksIHQuaGVpZ2h0KCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGkuY3NzKGFzcGVjdFJhdGlvRml0KGkud2lkdGgoKSwgaS5oZWlnaHQoKSwgdC53aWR0aCgpLCB0LmhlaWdodCgpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhlaWdodCgpIHtcblxuICAgICAgICAkKCcuY292ZXIub3ZlcmxheScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50a0NvdmVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoaGVpZ2h0KTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBoZWlnaHQpO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKFwiZGVib3VuY2VkcmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICB0ID0gc2V0VGltZW91dChoZWlnaHQsIDIwMCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtEYXRlUGlja2VyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLmRhdGVwaWNrZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5kYXRlcGlja2VyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJy5kYXRlcGlja2VyJykudGtEYXRlUGlja2VyKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrRGF0ZXJhbmdlcGlja2VyUmVwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGF0ZXJhbmdlcGlja2VyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhbmdlczoge1xuICAgICAgICAgICAgICAgICAgICAnVG9kYXknOiBbIG1vbWVudCgpLCBtb21lbnQoKSBdLFxuICAgICAgICAgICAgICAgICAgICAnWWVzdGVyZGF5JzogWyBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDEpLCBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDEpIF0sXG4gICAgICAgICAgICAgICAgICAgICdMYXN0IDcgRGF5cyc6IFsgbW9tZW50KCkuc3VidHJhY3QoJ2RheXMnLCA2KSwgbW9tZW50KCkgXSxcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3QgMzAgRGF5cyc6IFsgbW9tZW50KCkuc3VidHJhY3QoJ2RheXMnLCAyOSksIG1vbWVudCgpIF0sXG4gICAgICAgICAgICAgICAgICAgICdUaGlzIE1vbnRoJzogWyBtb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKSBdLFxuICAgICAgICAgICAgICAgICAgICAnTGFzdCBNb250aCc6IFsgbW9tZW50KCkuc3VidHJhY3QoJ21vbnRoJywgMSkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuc3VidHJhY3QoJ21vbnRoJywgMSkuZW5kT2YoJ21vbnRoJykgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDI5KSxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBtb21lbnQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IHN0YXJ0LmZvcm1hdCgnTU1NTSBELCBZWVlZJykgKyAnIC0gJyArIGVuZC5mb3JtYXQoJ01NTU0gRCwgWVlZWScpO1xuICAgICAgICAgICAgICAgIGUuZmluZCgnc3BhbicpLmh0bWwob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgJC5mbi50a0RhdGVyYW5nZXBpY2tlclJlc2VydmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRhdGVyYW5nZXBpY2tlcih7XG4gICAgICAgICAgICB0aW1lUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgdGltZVBpY2tlckluY3JlbWVudDogMzAsXG4gICAgICAgICAgICBmb3JtYXQ6ICdNTS9ERC9ZWVlZIGg6bW0gQSdcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQoJy5kYXRlcmFuZ2VwaWNrZXItcmVwb3J0JykudGtEYXRlcmFuZ2VwaWNrZXJSZXBvcnQoKTtcblxuICAgICQoJy5kYXRlcmFuZ2VwaWNrZXItcmVzZXJ2YXRpb24nKS50a0RhdGVyYW5nZXBpY2tlclJlc2VydmF0aW9uKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKiBAdG9kbzogQW5ndWxhciBkaXJlY3RpdmUuXG4gICAgICovXG4gICAgJC5mbi50a0V4cGFuZGFibGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmZpbmQoJy5leHBhbmRhYmxlLWNvbnRlbnQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJleHBhbmRhYmxlLWluZGljYXRvclwiPjxpPjwvaT48L2Rpdj4nKTtcblxuICAgIH07XG5cbiAgICAkKCcuZXhwYW5kYWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrRXhwYW5kYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZXhwYW5kYWJsZS1pbmRpY2F0b3InLCBmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5leHBhbmRhYmxlJykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGFibGUtb3BlbicpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZXhwYW5kYWJsZS10cmlnZ2VyOm5vdCguZXhwYW5kYWJsZS1vcGVuKScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGFibGUtb3BlbicpO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBpZiB3ZSdyZSBpbnNpZGUgYW4gaWZyYW1lLCByZWxvYWQgd2l0aG91dCBpZnJhbWVcbiAgICBpZiAod2luZG93LmxvY2F0aW9uICE9IHdpbmRvdy5wYXJlbnQubG9jYXRpb24pXG4gICAgICAgIHRvcC5sb2NhdGlvbi5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICogQHRvZG86IEFuZ3VsYXIgZGlyZWN0aXZlLlxuICAgICAqL1xuICAgICQuZm4udGtNaW5pQ29sb3JzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm1pbmljb2xvcnMgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5taW5pY29sb3JzKHtcbiAgICAgICAgICAgICAgICBjb250cm9sOiB0aGlzLmF0dHIoJ2RhdGEtY29udHJvbCcpIHx8ICdodWUnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5hdHRyKCdkYXRhLWRlZmF1bHRWYWx1ZScpIHx8ICcnLFxuICAgICAgICAgICAgICAgIGlubGluZTogdGhpcy5hdHRyKCdkYXRhLWlubGluZScpID09PSAndHJ1ZScsXG4gICAgICAgICAgICAgICAgbGV0dGVyQ2FzZTogdGhpcy5hdHRyKCdkYXRhLWxldHRlckNhc2UnKSB8fCAnbG93ZXJjYXNlJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB0aGlzLmF0dHIoJ2RhdGEtb3BhY2l0eScpLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmF0dHIoJ2RhdGEtcG9zaXRpb24nKSB8fCAnYm90dG9tIGxlZnQnLFxuICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKGhleCwgb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISBoZXgpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkpIGhleCArPSAnLCAnICsgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdib290c3RyYXAnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnLm1pbmljb2xvcnMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKHRoaXMpLnRrTWluaUNvbG9ycygpO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKiBAdG9kbzogQW5ndWxhciBkaXJlY3RpdmUuXG4gICAgICovXG4gICAgJC5mbi50a05lc3RhYmxlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm5lc3RhYmxlICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMubmVzdGFibGUoe1xuICAgICAgICAgICAgICAgIHJvb3RDbGFzczogJ25lc3RhYmxlJyxcbiAgICAgICAgICAgICAgICBsaXN0Tm9kZU5hbWU6ICd1bCcsXG4gICAgICAgICAgICAgICAgbGlzdENsYXNzOiAnbmVzdGFibGUtbGlzdCcsXG4gICAgICAgICAgICAgICAgaXRlbUNsYXNzOiAnbmVzdGFibGUtaXRlbScsXG4gICAgICAgICAgICAgICAgZHJhZ0NsYXNzOiAnbmVzdGFibGUtZHJhZycsXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xhc3M6ICduZXN0YWJsZS1oYW5kbGUnLFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZENsYXNzOiAnbmVzdGFibGUtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICBwbGFjZUNsYXNzOiAnbmVzdGFibGUtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgIGVtcHR5Q2xhc3M6ICduZXN0YWJsZS1lbXB0eSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKCcubmVzdGFibGUnKS50a05lc3RhYmxlKCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciByYW5kb21JZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvKiogQHJldHVybiBTdHJpbmcgKi9cbiAgICAgICAgdmFyIFM0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKCgoMStNYXRoLnJhbmRvbSgpKSoweDEwMDAwKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFM0KCkrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1M0KCkrUzQoKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtQYW5lbENvbGxhcHNlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGJvZHkgPSAkKCcucGFuZWwtYm9keScsIHRoaXMpLFxuICAgICAgICAgICAgaWQgPSBib2R5LmF0dHIoJ2lkJykgfHwgcmFuZG9tSWQoKSxcbiAgICAgICAgICAgIGNvbGxhcHNlID0gJCgnPGRpdi8+Jyk7XG5cbiAgICAgICAgY29sbGFwc2VcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIGlkKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScgKyAodGhpcy5kYXRhKCdvcGVuJykgPyAnIGluJyA6ICcnKSlcbiAgICAgICAgICAgIC5hcHBlbmQoYm9keS5jbG9uZSgpKTtcblxuICAgICAgICBib2R5LnJlbW92ZSgpO1xuXG4gICAgICAgICQodGhpcykuYXBwZW5kKGNvbGxhcHNlKTtcblxuICAgICAgICAkKCcucGFuZWwtY29sbGFwc2UtdHJpZ2dlcicsIHRoaXMpXG4gICAgICAgICAgICAuYXR0cignZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnIClcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRhcmdldCcsICcjJyArIGlkKVxuICAgICAgICAgICAgLmNvbGxhcHNlKHsgdHJpZ2dlcjogZmFsc2UgfSk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwicGFuZWwtY29sbGFwc2VcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudGtQYW5lbENvbGxhcHNlKCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIFByb2dyZXNzIEJhciBBbmltYXRpb25cbiAgICAkKCcucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykud2lkdGgoJCh0aGlzKS5hdHRyKCdhcmlhLXZhbHVlbm93JykgKyAnJScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdDIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2VsZWN0MiAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdC5kYXRhKCdhbGxvd0NsZWFyJylcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodC5pcygnYnV0dG9uJykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHQuaXMoJ2lucHV0W3R5cGU9XCJidXR0b25cIl0nKSkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0LmlzKCdbZGF0YS10b2dnbGU9XCJzZWxlY3QyLXRhZ3NcIl0nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudGFncyA9IHQuZGF0YSgndGFncycpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHQuc2VsZWN0MihvcHRpb25zKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdDJFbmFibGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2VsZWN0MiAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCQodGhpcykuZGF0YSgndGFyZ2V0JykpLnNlbGVjdDIoXCJlbmFibGVcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdDJEaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNlbGVjdDIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmRhdGEoJ3RhcmdldCcpKS5zZWxlY3QyKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2VsZWN0MkZsYWdzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNlbGVjdDIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgLy8gdGVtcGxhdGluZ1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICghIHN0YXRlLmlkKSByZXR1cm4gc3RhdGUudGV4dDtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIGNsYXNzPSdmbGFnJyBzcmM9J2h0dHA6Ly9zZWxlY3QyLmdpdGh1Yi5pby9zZWxlY3QyL2ltYWdlcy9mbGFncy9cIiArIHN0YXRlLmlkLnRvTG93ZXJDYXNlKCkgKyBcIi5wbmcnLz5cIiArIHN0YXRlLnRleHQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdFJlc3VsdDogZm9ybWF0LFxuICAgICAgICAgICAgICAgIGZvcm1hdFNlbGVjdGlvbjogZm9ybWF0LFxuICAgICAgICAgICAgICAgIGVzY2FwZU1hcmt1cDogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZSo9XCJzZWxlY3QyXCJdJykuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAkKHRoaXMpLnRrU2VsZWN0MigpO1xuXG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJzZWxlY3QyLWVuYWJsZVwiXScpLnRrU2VsZWN0MkVuYWJsZSgpO1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwic2VsZWN0Mi1kaXNhYmxlXCJdJykudGtTZWxlY3QyRGlzYWJsZSgpO1xuXG4gICAgJChcIiNzZWxlY3QyXzdcIikudGtTZWxlY3QyRmxhZ3MoKTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdFBpY2tlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zZWxlY3RwaWNrZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRhdGEoJ3dpZHRoJykgfHwgJzEwMCUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAkKHRoaXMpLnRrU2VsZWN0UGlja2VyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBzaG93SG92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ1tkYXRhLXNob3ctaG92ZXJdJykuaGlkZSgpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIHBhcmVudCA9ICQodGhpcykuZGF0YSgnc2hvd0hvdmVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuY2xvc2VzdChwYXJlbnQpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zaG93KCk7XG4gICAgICAgICAgICB9KS5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNob3dIb3ZlcigpO1xuXG4gICAgd2luZG93LnNob3dIb3ZlciA9IHNob3dIb3ZlcjtcblxufSkoalF1ZXJ5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZSgnc2tpbicpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNraW4gPSAnZGVmYXVsdCc7XG4gICAgfVxuICAgIHJldHVybiBza2luO1xufSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgYmFycyA9IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgJCgnLnNsaWRlci1oYW5kbGUnLCBlbCkuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1iYXJzIGZhLXJvdGF0ZS05MFwiPjwvaT4nKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NsaWRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zbGlkZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5zbGlkZXIoKTtcblxuICAgICAgICAgICAgYmFycyh0aGlzKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NsaWRlckZvcm1hdHRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zbGlkZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5zbGlkZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ3VycmVudCB2YWx1ZTogJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBiYXJzKHRoaXMpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2xpZGVyVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNsaWRlciAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLm9uKFwic2xpZGVcIiwgZnVuY3Rpb24gKHNsaWRlRXZ0KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmF0dHIoJ2RhdGEtb24tc2xpZGUnKSkudGV4dChzbGlkZUV2dC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYmFycyh0aGlzKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtc2xpZGVyPVwiZGVmYXVsdFwiXScpLnRrU2xpZGVyKCk7XG5cbiAgICAkKCdbZGF0YS1zbGlkZXI9XCJmb3JtYXR0ZXJcIl0nKS50a1NsaWRlckZvcm1hdHRlcigpO1xuXG4gICAgJCgnW2RhdGEtb24tc2xpZGVdJykudGtTbGlkZXJVcGRhdGUoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTdW1tZXJub3RlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnN1bW1lcm5vdGUgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5zdW1tZXJub3RlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQoJy5zdW1tZXJub3RlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICQodGhpcykudGtTdW1tZXJub3RlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtEYXRhVGFibGUgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLmRhdGFUYWJsZSAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFUYWJsZSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJkYXRhLXRhYmxlXCJdJykudGtEYXRhVGFibGUoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBza2luID0gcmVxdWlyZSgnLi9fc2tpbicpKCk7XG5cbiAgICAkKCcudGFiYmFibGUgLm5hdi10YWJzJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdGFicyA9ICQodGhpcykubmljZVNjcm9sbCh7XG4gICAgICAgICAgICBjdXJzb3Jib3JkZXI6IDAsXG4gICAgICAgICAgICBjdXJzb3Jjb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgaG9yaXpyYWlsZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9uZWF4aXNtb3VzZW1vZGU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIF9zdXBlciA9IHRhYnMuZ2V0Q29udGVudFNpemU7XG4gICAgICAgIHRhYnMuZ2V0Q29udGVudFNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gX3N1cGVyLmNhbGwodGFicyk7XG4gICAgICAgICAgICBwYWdlLmggPSB0YWJzLndpbi5oZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG5cbiAgICAkKCcudGFiYmFibGUgLm5hdi10YWJzIGEnKS5vbignc2hvd24uYnMudGFiJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciB0YWIgPSAkKHRoaXMpLmNsb3Nlc3QoJy50YWJiYWJsZScpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCksXG4gICAgICAgICAgICB0YXJnZXRQYW5lID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKSB8fCB0YXJnZXQuZGF0YSgndGFyZ2V0Jyk7XG5cbiAgICAgICAgLy8gcmVmcmVzaCB0YWJzIHdpdGggaG9yaXpvbnRhbCBzY3JvbGxcbiAgICAgICAgdGFiLmZpbmQoJy5uYXYtdGFicycpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcblxuICAgICAgICAvLyByZWZyZXNoIFtkYXRhLXNjcm9sbGFibGVdIHdpdGhpbiB0aGUgYWN0aXZhdGVkIHRhYiBwYW5lXG4gICAgICAgICQodGFyZ2V0UGFuZSkuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBUb29sdGlwXG4gICAgJChcImJvZHlcIikudG9vbHRpcCh7c2VsZWN0b3I6ICdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJywgY29udGFpbmVyOiBcImJvZHlcIn0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1RvdWNoU3BpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5Ub3VjaFNwaW4gIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5Ub3VjaFNwaW4oKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG91Y2gtc3BpblwiXScpLnRrVG91Y2hTcGluKCk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgdHJlZV9nbHlwaF9vcHRpb25zID0ge1xuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIGNoZWNrYm94OiBcImZhIGZhLXNxdWFyZS1vXCIsXG4gICAgICAgICAgICBjaGVja2JveFNlbGVjdGVkOiBcImZhIGZhLWNoZWNrLXNxdWFyZVwiLFxuICAgICAgICAgICAgY2hlY2tib3hVbmtub3duOiBcImZhIGZhLWNoZWNrLXNxdWFyZSBmYS1tdXRlZFwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIixcbiAgICAgICAgICAgIGV4cGFuZGVyQ2xvc2VkOiBcImZhIGZhLWNhcmV0LXJpZ2h0XCIsXG4gICAgICAgICAgICBleHBhbmRlckxhenk6IFwiZmEgZmEtYW5nbGUtcmlnaHRcIixcbiAgICAgICAgICAgIGV4cGFuZGVyT3BlbjogXCJmYSBmYS1jYXJldC1kb3duXCIsXG4gICAgICAgICAgICBkb2M6IFwiZmEgZmEtZmlsZS1vXCIsXG4gICAgICAgICAgICBub0V4cGFuZGVyOiBcIlwiLFxuICAgICAgICAgICAgZG9jT3BlbjogXCJmYSBmYS1maWxlXCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBcImZhIGZhLXJlZnJlc2ggZmEtc3BpblwiLFxuICAgICAgICAgICAgZm9sZGVyOiBcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgZm9sZGVyT3BlbjogXCJmYSBmYS1mb2xkZXItb3BlblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRyZWVfZG5kX29wdGlvbnMgPSB7XG4gICAgICAgIGF1dG9FeHBhbmRNUzogNDAwLFxuICAgICAgICAgICAgZm9jdXNPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcHJldmVudFZvaWRNb3ZlczogdHJ1ZSwgLy8gUHJldmVudCBkcm9wcGluZyBub2RlcyAnYmVmb3JlIHNlbGYnLCBldGMuXG4gICAgICAgICAgICBwcmV2ZW50UmVjdXJzaXZlTW92ZXM6IHRydWUsIC8vIFByZXZlbnQgZHJvcHBpbmcgbm9kZXMgb24gb3duIGRlc2NlbmRhbnRzXG4gICAgICAgICAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uKG5vZGUsIGRhdGEpIHtcbiAgICAgICAgICAgIC8qKiBUaGlzIGZ1bmN0aW9uIE1VU1QgYmUgZGVmaW5lZCB0byBlbmFibGUgZHJhZ2dpbmcgZm9yIHRoZSB0cmVlLlxuICAgICAgICAgICAgICogIFJldHVybiBmYWxzZSB0byBjYW5jZWwgZHJhZ2dpbmcgb2Ygbm9kZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGRyYWdFbnRlcjogZnVuY3Rpb24obm9kZSwgZGF0YSkge1xuICAgICAgICAgICAgLyoqIGRhdGEub3RoZXJOb2RlIG1heSBiZSBudWxsIGZvciBub24tZmFuY3l0cmVlIGRyb3BwYWJsZXMuXG4gICAgICAgICAgICAgKiAgUmV0dXJuIGZhbHNlIHRvIGRpc2FsbG93IGRyb3BwaW5nIG9uIG5vZGUuIEluIHRoaXMgY2FzZVxuICAgICAgICAgICAgICogIGRyYWdPdmVyIGFuZCBkcmFnTGVhdmUgYXJlIG5vdCBjYWxsZWQuXG4gICAgICAgICAgICAgKiAgUmV0dXJuICdvdmVyJywgJ2JlZm9yZSwgb3IgJ2FmdGVyJyB0byBmb3JjZSBhIGhpdE1vZGUuXG4gICAgICAgICAgICAgKiAgUmV0dXJuIFsnYmVmb3JlJywgJ2FmdGVyJ10gdG8gcmVzdHJpY3QgYXZhaWxhYmxlIGhpdE1vZGVzLlxuICAgICAgICAgICAgICogIEFueSBvdGhlciByZXR1cm4gdmFsdWUgd2lsbCBjYWxjIHRoZSBoaXRNb2RlIGZyb20gdGhlIGN1cnNvciBwb3NpdGlvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy8gUHJldmVudCBkcm9wcGluZyBhIHBhcmVudCBiZWxvdyBhbm90aGVyIHBhcmVudCAob25seSBzb3J0XG4gICAgICAgICAgICAvLyBub2RlcyB1bmRlciB0aGUgc2FtZSBwYXJlbnQpXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaWYobm9kZS5wYXJlbnQgIT09IGRhdGEub3RoZXJOb2RlLnBhcmVudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG9uJ3QgYWxsb3cgZHJvcHBpbmcgKm92ZXIqIGEgbm9kZSAod291bGQgY3JlYXRlIGEgY2hpbGQpXG4gICAgICAgICAgICByZXR1cm4gW1wiYmVmb3JlXCIsIFwiYWZ0ZXJcIl07XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGRyYWdEcm9wOiBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgICAgICAgICAvKiogVGhpcyBmdW5jdGlvbiBNVVNUIGJlIGRlZmluZWQgdG8gZW5hYmxlIGRyb3BwaW5nIG9mIGl0ZW1zIG9uXG4gICAgICAgICAgICAgKiAgdGhlIHRyZWUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRhdGEub3RoZXJOb2RlLm1vdmVUbyhub2RlLCBkYXRhLmhpdE1vZGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtGYW5jeVRyZWUgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLmZhbmN5dHJlZSA9PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIHZhciBleHRlbnNpb25zID0gWyBcImdseXBoXCIgXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF0dHIoJ2RhdGEtdHJlZS1kbmQnKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW5zaW9ucy5wdXNoKCBcImRuZFwiICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mYW5jeXRyZWUoe1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgIGdseXBoOiB0cmVlX2dseXBoX29wdGlvbnMsXG4gICAgICAgICAgICBkbmQ6IHRyZWVfZG5kX29wdGlvbnMsXG4gICAgICAgICAgICBjbGlja0ZvbGRlck1vZGU6IDMsXG4gICAgICAgICAgICBjaGVja2JveDogdHlwZW9mIHRoaXMuYXR0cignZGF0YS10cmVlLWNoZWNrYm94JykgIT09IFwidW5kZWZpbmVkXCIgfHwgZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RNb2RlOiB0eXBlb2YgdGhpcy5hdHRyKCdkYXRhLXRyZWUtc2VsZWN0JykgIT09IFwidW5kZWZpbmVkXCIgPyBwYXJzZUludCh0aGlzLmF0dHIoJ2RhdGEtdHJlZS1zZWxlY3QnKSkgOiAyXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIC8vIHVzaW5nIGRlZmF1bHQgb3B0aW9uc1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRyZWVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a0ZhbmN5VHJlZSgpO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1dpemFyZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zbGljayA9PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIHZhciB0ID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHQuY2xvc2VzdCgnLndpemFyZC1jb250YWluZXInKTtcblxuICAgICAgICB0LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHJ0bDogdGhpcy5kYXRhKCdydGwnKSxcbiAgICAgICAgICAgIHNsaWRlOiAnZmllbGRzZXQnLFxuICAgICAgICAgICAgb25BZnRlckNoYW5nZTogZnVuY3Rpb24gKHdpeiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdhZnRlci53aXphcmQuc3RlcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgd2l6OiB3aXosXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5maW5kKCcud2l6LW5leHQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdC5zbGlja05leHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGFpbmVyLmZpbmQoJy53aXotcHJldicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0LnNsaWNrUHJldigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuZmluZCgnLndpei1zdGVwJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHQuc2xpY2tHb1RvKCQodGhpcykuZGF0YSgndGFyZ2V0JykpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuY2xvc2VzdCgnLm1vZGFsLWJvZHknKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuY2xvc2VzdCgnLm1vZGFsLWJvZHknKS5zaG93KCk7XG4gICAgICAgICAgICB0LnNsaWNrU2V0T3B0aW9uKCdkb3RzJywgZmFsc2UsIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ3aXphcmRcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a1dpemFyZCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQnkgbGV2ZXJhZ2luZyBldmVudHMgd2UgY2FuIGhvb2sgaW50byB0aGUgd2l6YXJkIHRvIGFkZCBmdW5jdGlvbmFsaXR5LlxuICAgICAqIFRoaXMgZXhhbXBsZSB1cGRhdGVzIHRoZSBwcm9ncmVzcyBiYXIgYWZ0ZXIgdGhlIHdpemFyZCBzdGVwIGNoYW5nZXMuXG4gICAgICovXG4gICAgJChkb2N1bWVudCkub24oJ2FmdGVyLndpemFyZC5zdGVwJywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmlzKCcjd2l6YXJkLWRlbW8tMScpKSB7XG5cbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkYXRhLmNvbnRhaW5lci5maW5kKCcud2l6LXByb2dyZXNzIGxpOmVxKCcgKyBkYXRhLnRhcmdldCArICcpJyk7XG5cbiAgICAgICAgICAgIGRhdGEuY29udGFpbmVyLmZpbmQoJy53aXotcHJvZ3Jlc3MgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlIGNvbXBsZXRlJyk7XG5cbiAgICAgICAgICAgIHRhcmdldC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHRhcmdldC5wcmV2QWxsKCkuYWRkQ2xhc3MoJ2NvbXBsZXRlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwicmVxdWlyZSgnLi9fdGFicycpO1xucmVxdWlyZSgnLi9fdHJlZScpO1xucmVxdWlyZSgnLi9fc2hvdy1ob3ZlcicpO1xucmVxdWlyZSgnLi9fZGF0ZXJhbmdlcGlja2VyJyk7XG5yZXF1aXJlKCcuL19leHBhbmRhYmxlJyk7XG5yZXF1aXJlKCcuL19uZXN0YWJsZScpO1xucmVxdWlyZSgnLi9fY292ZXInKTtcbnJlcXVpcmUoJy4vX3Rvb2x0aXAnKTtcbnJlcXVpcmUoJy4vX3RhYmxlcycpO1xucmVxdWlyZSgnLi9fY2hlY2stYWxsJyk7XG5yZXF1aXJlKCcuL19wcm9ncmVzcy1iYXJzJyk7XG5yZXF1aXJlKCcuL19pZnJhbWUnKTtcbnJlcXVpcmUoJy4vX2Jvb3RzdHJhcC1jb2xsYXBzZScpO1xucmVxdWlyZSgnLi9fYm9vdHN0cmFwLWNhcm91c2VsJyk7XG5yZXF1aXJlKCcuL19ib290c3RyYXAtbW9kYWwnKTtcbnJlcXVpcmUoJy4vX3BhbmVsLWNvbGxhcHNlJyk7XG5cbi8vIEZvcm1zXG5yZXF1aXJlKCcuL190b3VjaHNwaW4nKTtcbnJlcXVpcmUoJy4vX3NlbGVjdDInKTtcbnJlcXVpcmUoJy4vX3NsaWRlcicpO1xucmVxdWlyZSgnLi9fc2VsZWN0cGlja2VyJyk7XG5yZXF1aXJlKCcuL19kYXRlcGlja2VyJyk7XG5yZXF1aXJlKCcuL19taW5pY29sb3JzJyk7XG5yZXF1aXJlKCcuL19ib290c3RyYXAtc3dpdGNoJyk7XG5yZXF1aXJlKCcuL193aXphcmQnKTtcbnJlcXVpcmUoJy4vX3N1bW1lcm5vdGUnKTsiLCJmdW5jdGlvbiBjb250ZW50TG9hZGVkKHdpbiwgZm4pIHtcblxuICAgIHZhciBkb25lID0gZmFsc2UsIHRvcCA9IHRydWUsXG5cbiAgICAgICAgZG9jID0gd2luLmRvY3VtZW50LFxuICAgICAgICByb290ID0gZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgbW9kZXJuID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIsXG5cbiAgICAgICAgYWRkID0gbW9kZXJuID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ2F0dGFjaEV2ZW50JyxcbiAgICAgICAgcmVtID0gbW9kZXJuID8gJ3JlbW92ZUV2ZW50TGlzdGVuZXInIDogJ2RldGFjaEV2ZW50JyxcbiAgICAgICAgcHJlID0gbW9kZXJuID8gJycgOiAnb24nLFxuXG4gICAgICAgIGluaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSAncmVhZHlzdGF0ZWNoYW5nZScgJiYgZG9jLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJykgcmV0dXJuO1xuICAgICAgICAgICAgKGUudHlwZSA9PSAnbG9hZCcgPyB3aW4gOiBkb2MpWyByZW0gXShwcmUgKyBlLnR5cGUsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghIGRvbmUgJiYgKGRvbmUgPSB0cnVlKSkgZm4uY2FsbCh3aW4sIGUudHlwZSB8fCBlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByb290LmRvU2Nyb2xsKCdsZWZ0Jyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCA1MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdCgncG9sbCcpO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGRvYy5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIGZuLmNhbGwod2luLCAnbGF6eScpO1xuICAgIGVsc2Uge1xuICAgICAgICBpZiAoISBtb2Rlcm4gJiYgcm9vdC5kb1Njcm9sbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0b3AgPSAhIHdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9wKSBwb2xsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jWyBhZGQgXShwcmUgKyAnRE9NQ29udGVudExvYWRlZCcsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgZG9jWyBhZGQgXShwcmUgKyAncmVhZHlzdGF0ZWNoYW5nZScsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgd2luWyBhZGQgXShwcmUgKyAnbG9hZCcsIGluaXQsIGZhbHNlKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJscywgY2FsbGJhY2spIHtcblxuICAgIHZhciBhc3luY0xvYWRlciA9IGZ1bmN0aW9uICh1cmxzLCBjYWxsYmFjaykge1xuXG4gICAgICAgIHVybHMuZm9yZWFjaChmdW5jdGlvbiAoaSwgZmlsZSkge1xuICAgICAgICAgICAgbG9hZENzcyhmaWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2hlY2tpbmcgZm9yIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBjYWxsaW5nIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgY29udGVudExvYWRlZCh3aW5kb3csIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbG9hZENzcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbIDAgXS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9O1xuXG4gICAgLy8gc2ltcGxlIGZvcmVhY2ggaW1wbGVtZW50YXRpb25cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhpLCB0aGlzWyBpIF0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jTG9hZGVyKHVybHMsIGNhbGxiYWNrKTtcblxufTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgICQod2luZG93KS5zZXRCcmVha3BvaW50cyh7XG4gICAgICAgIGRpc3RpbmN0OiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czogWyAzMjAsIDQ4MCwgNzY4LCAxMDI0IF1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtHcmlkYWxpY2lvdXMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmdyaWRhbGljaW91cyh7XG4gICAgICAgICAgICBndXR0ZXI6IHRoaXMuZGF0YSgnZ3V0dGVyJykgfHwgMTUsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5kYXRhKCd3aWR0aCcpIHx8IDM3MCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnPiBkaXYnLFxuICAgICAgICAgICAgYW5pbWF0aW9uT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZSo9XCJncmlkYWxpY2lvdXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a0dyaWRhbGljaW91cygpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0lzb3RvcGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmlzb3RvcGUoe1xuICAgICAgICAgICAgbGF5b3V0TW9kZTogdGhpcy5kYXRhKCdsYXlvdXRNb2RlJykgfHwgXCJwYWNrZXJ5XCIsXG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuaXRlbSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgdGhpcy5pc290b3BlKCdvbicsICdsYXlvdXRDb21wbGV0ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAqL1xuXG4gICAgfTtcblxuICAgICQoZnVuY3Rpb24oKXtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cImlzb3RvcGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRrSXNvdG9wZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2RvbUNoYW5nZWQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwiaXNvdG9wZVwiXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmlzb3RvcGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbi8vIE1JVCBsaWNlbnNlXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbICdtcycsICdtb3onLCAnd2Via2l0JywgJ28nIF07XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsrIHgpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1sgdmVuZG9yc1sgeCBdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZScgXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93WyB2ZW5kb3JzWyB4IF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnIF0gfHwgd2luZG93WyB2ZW5kb3JzWyB4IF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBdO1xuICAgIH1cblxuICAgIGlmICghIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuXG4gICAgaWYgKCEgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG59KCkpO1xuXG4oZnVuY3Rpb24gKCQsIHdpbmRvdykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJC5mbi50a1BhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmIChNb2Rlcm5penIudG91Y2gpIHJldHVybjtcblxuICAgICAgICB2YXIgZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNwZWVkOiBlLmRhdGEoJ3NwZWVkJykgfHwgNCxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IGUuZGF0YSgnc3BlZWQnKSB8fCB0cnVlLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVdoZW46IGUuZGF0YSgndHJhbnNsYXRlV2hlbicpIHx8ICdpblZpZXdwb3J0VG9wJyxcbiAgICAgICAgICAgICAgICBhdXRvT2Zmc2V0OiBlLmRhdGEoJ2F1dG9PZmZzZXQnKSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGUuZGF0YSgnb2Zmc2V0JykgfHwgMCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBlLmRhdGEoJ29wYWNpdHknKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KSxcbiAgICAgICAgICAgICR3aW5kb3dDb250ZW50ID0gJCgnLnN0LWNvbnRlbnQtaW5uZXInKSxcbiAgICAgICAgICAgICRlbGVtZW50ID0gdGhpcztcblxuICAgICAgICB2YXIgdGlja2luZyA9IGZhbHNlLFxuICAgICAgICAgICAgJHNjcm9sbGFibGUgPSBudWxsLFxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgdmFyIGlzU2FmYXJpID0gL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAvQXBwbGUgQ29tcHV0ZXIvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG5cbiAgICAgICAgdmFyIHJlcXVlc3RUaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICghIHRpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICAkc2Nyb2xsYWJsZSA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBhbHRob3VnaCBTYWZhcmkgaGFzIHN1cHBvcnQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICAgICAgICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIGluIHRoaXMgY2FzZSBpcyBjaG9wcHkgc28gd2UnbGwganVzdCBydW4gaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBpZiAoaXNTYWZhcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUcmFuc2xhdGVzIGFuIGVsZW1lbnQgb24gdGhlIFkgYXhpcyB1c2luZyB0cmFuc2xhdGUzZCB0byBlbnN1cmVcbiAgICAgICAgLy8gdGhhdCB0aGUgcmVuZGVyaW5nIGlzIGRvbmUgYnkgdGhlIEdQVVxuICAgICAgICB2YXIgdHJhbnNsYXRlWSA9IGZ1bmN0aW9uIChlbG0sIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdmFsdWUgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgZWxtLnN0eWxlWyAnLXdlYmtpdC10cmFuc2Zvcm0nIF0gPSB0cmFuc2xhdGU7XG4gICAgICAgICAgICBlbG0uc3R5bGVbICctbW96LXRyYW5zZm9ybScgXSA9IHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIGVsbS5zdHlsZVsgJy1tcy10cmFuc2Zvcm0nIF0gPSB0cmFuc2xhdGU7XG4gICAgICAgICAgICBlbG0uc3R5bGVbICctby10cmFuc2Zvcm0nIF0gPSB0cmFuc2xhdGU7XG4gICAgICAgICAgICBlbG0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBsYXllcnMgPSAkZWxlbWVudC5maW5kKCcucGFyYWxsYXgtbGF5ZXInKTtcblxuICAgICAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxheWVycy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHZhciBsYXllciA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucyA9IGdldE9wdGlvbnMobGF5ZXIpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAkZWxlbWVudC5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChsYXllck9wdGlvbnMudHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXllci5pcygnaW1nJykgJiYgbGF5ZXJPcHRpb25zLmF1dG9PZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQubG9hZEltYWdlKGxheWVyLmF0dHIoJ3NyYycpKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXllckhlaWdodCA9IGxheWVyLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBsYXllckhlaWdodCAqIDAuMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvZmZzZXQgKyBoZWlnaHQpID4gbGF5ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbGF5ZXJIZWlnaHQgLSBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG9mZnNldCAqIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5hdHRyKCdkYXRhLW9mZnNldCcsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWShsYXllci5nZXQoMCksIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW5pdCgpO1xuICAgICAgICAkKHdpbmRvdykub24oXCJkZWJvdW5jZWRyZXNpemVcIiwgaW5pdCk7XG5cbiAgICAgICAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gcGFyc2VJbnQoJHNjcm9sbGFibGUuc2Nyb2xsVG9wKCkpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbGFibGVUb3AgPSAkc2Nyb2xsYWJsZS5pcygkd2luZG93KSA/IDAgOiAkc2Nyb2xsYWJsZS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICB2YXIgYm9keVBhZGRpbmcgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiBwYXJzZUludCgkKGRvY3VtZW50LmJvZHkpLmNzcygncGFkZGluZy10b3AnKSksXG4gICAgICAgICAgICAgICAgYm90dG9tOiBwYXJzZUludCgkKGRvY3VtZW50LmJvZHkpLmNzcygncGFkZGluZy1ib3R0b20nKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gJHNjcm9sbGFibGUuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB3aW5kb3dCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQgLSAoYm9keVBhZGRpbmcuYm90dG9tICsgYm9keVBhZGRpbmcudG9wKTtcbiAgICAgICAgICAgIHZhciB0b3AgPSAkZWxlbWVudC5vZmZzZXQoKS50b3AgLSBzY3JvbGxhYmxlVG9wIC0gYm9keVBhZGRpbmcudG9wO1xuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGhlaWdodDtcbiAgICAgICAgICAgIHZhciB0b3BBYnMgPSBNYXRoLmFicyh0b3ApO1xuICAgICAgICAgICAgdmFyIHBvcyA9IHRvcCAvIHdpbmRvd0hlaWdodCAqIDEwMDtcbiAgICAgICAgICAgIHZhciBvcGFjaXR5S2V5ID0gaGVpZ2h0ICogMC41O1xuICAgICAgICAgICAgdmFyIHdoZW4gPSB7fTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIE9OTFkgd2hlbiB0aGUgc2Nyb2xsYWJsZSBlbGVtZW50IElTIE5PVCB0aGUgd2luZG93XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgZWxlbWVudCBpcyBhbnl3aGVyZSBpbiB2aWV3cG9ydFxuICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0ID0gKGJvdHRvbSA+IDApICYmICh0b3AgPCB3aW5kb3dIZWlnaHQpO1xuXG4gICAgICAgICAgICAvLyB3aGVuIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0IGlzIGNyb3NzaW5nIHRoZSBlbGVtZW50XG4gICAgICAgICAgICB3aGVuLmluVmlld3BvcnRUb3AgPSAoYm90dG9tID4gMCkgJiYgKHRvcCA8IDApO1xuXG4gICAgICAgICAgICAvLyB3aGVuIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0IGlzIGNyb3NzaW5nIHRoZSBlbGVtZW50XG4gICAgICAgICAgICB3aGVuLmluVmlld3BvcnRCb3R0b20gPSAoYm90dG9tID4gMCkgJiYgKHRvcCA8IHdpbmRvd0hlaWdodCkgJiYgKGJvdHRvbSA+IHdpbmRvd0hlaWdodCk7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBPTkxZIHdoZW4gdGhlIHNjcm9sbGFibGUgZWxlbWVudCBJUyB0aGUgd2luZG93XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgaWYgKCRzY3JvbGxhYmxlLmlzKCR3aW5kb3cpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSB3aW5kb3cgaXMgc2Nyb2xsYWJsZSBhbmQgdGhlIGVsZW1lbnQgaXMgY29tcGxldGVseSBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnRGdWxsID0gKHRvcCA+PSBzY3JvbGxUb3ApICYmIChib3R0b20gPD0gd2luZG93Qm90dG9tKTtcblxuICAgICAgICAgICAgICAgIHdoZW4uaW5XaW5kb3dWaWV3cG9ydDIgPSAodG9wID49IHNjcm9sbFRvcCkgJiYgKHRvcCA8PSB3aW5kb3dCb3R0b20pO1xuXG4gICAgICAgICAgICAgICAgd2hlbi5pbldpbmRvd1ZpZXdwb3J0MyA9IChib3R0b20gPj0gc2Nyb2xsVG9wKSAmJiAoYm90dG9tIDw9IHdpbmRvd0JvdHRvbSk7XG5cbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnQ0ID0gKGJvdHRvbSA+PSBzY3JvbGxUb3ApICYmIChib3R0b20gPj0gd2luZG93SGVpZ2h0KSAmJiAoaGVpZ2h0ID4gd2luZG93SGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIHdpbmRvdyBpcyBzY3JvbGxhYmxlIGFuZCB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCBpcyBjcm9zc2luZyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIHdoZW4uaW5XaW5kb3dWaWV3cG9ydFRvcCA9ICEgd2hlbi5pbldpbmRvd1ZpZXdwb3J0MiAmJiAod2hlbi5pbldpbmRvd1ZpZXdwb3J0MyB8fCB3aGVuLmluV2luZG93Vmlld3BvcnQ0KTtcblxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIHdpbmRvdyBpcyBzY3JvbGxhYmxlIGFuZCB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydCBpcyBjcm9zc2luZyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIHdoZW4uaW5XaW5kb3dWaWV3cG9ydEJvdHRvbSA9IHdoZW4uaW5XaW5kb3dWaWV3cG9ydDIgJiYgISB3aGVuLmluV2luZG93Vmlld3BvcnQzO1xuXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgd2luZG93IGlzIHNjcm9sbGFibGUgYW5kIHRoZSBlbGVtZW50IGlzIGFueXdoZXJlIGluIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgd2hlbi5pbldpbmRvd1ZpZXdwb3J0ID0gd2hlbi5pbldpbmRvd1ZpZXdwb3J0VG9wIHx8IHdoZW4uaW5XaW5kb3dWaWV3cG9ydEJvdHRvbSB8fCB3aGVuLmluV2luZG93Vmlld3BvcnRGdWxsO1xuXG4gICAgICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0ID0gd2hlbi5pbldpbmRvd1ZpZXdwb3J0O1xuICAgICAgICAgICAgICAgIHdoZW4uaW5WaWV3cG9ydFRvcCA9IHdoZW4uaW5XaW5kb3dWaWV3cG9ydFRvcDtcbiAgICAgICAgICAgICAgICB3aGVuLmluVmlld3BvcnRCb3R0b20gPSB3aGVuLmluV2luZG93Vmlld3BvcnRCb3R0b207XG5cbiAgICAgICAgICAgICAgICBwb3MgPSAodG9wIC0gc2Nyb2xsVG9wKSAvIHdpbmRvd0hlaWdodCAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydFRvcCAmJiB3aGVuLmluVmlld3BvcnRCb3R0b20pIHtcbiAgICAgICAgICAgICAgICB3aGVuLmluVmlld3BvcnRCb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgaXNOYU4oc2Nyb2xsVG9wKSkge1xuICAgICAgICAgICAgICAgIGxheWVycy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJPcHRpb25zID0gZ2V0T3B0aW9ucyhsYXllcik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5ID0gKHdpbmRvd0hlaWdodCArIGhlaWdodCkgLSBib3R0b207XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY3JvbGxhYmxlLmlzKCR3aW5kb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eSA9IHdpbmRvd0JvdHRvbSAtIHRvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXllck9wdGlvbnMudHJhbnNsYXRlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXllclBvcyA9ICgtIDEgKiBwb3MgKiBsYXllck9wdGlvbnMuc3BlZWQpICsgbGF5ZXJPcHRpb25zLm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXllckhlaWdodCA9IGxheWVyLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2hlbi5pblZpZXdwb3J0ICYmICEgd2hlbi5pblZpZXdwb3J0VG9wICYmICEgd2hlbi5pblZpZXdwb3J0Qm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLmlzKCdpbWcnKSAmJiBsYXllckhlaWdodCA+IGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKE1hdGguYWJzKGxheWVyUG9zKSArIGhlaWdodCkgPiBsYXllckhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJQb3MgPSAobGF5ZXJIZWlnaHQgLSBoZWlnaHQpICogLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIGxheWVyLmlzKCdpbWcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclBvcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2hlbi5pblZpZXdwb3J0VG9wICYmICgobGF5ZXIuaXMoJ2ltZycpICYmIGxheWVySGVpZ2h0ID09IGhlaWdodCkgfHwgISBsYXllci5pcygnaW1nJykgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gTWF0aC5hYnMobGF5ZXJQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2hlbi5pblZpZXdwb3J0Qm90dG9tICYmICEgbGF5ZXIuaXMoJ2ltZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJQb3MgPSBoZWlnaHQgLSB0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyB1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPCBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gbGF5ZXJQb3MgKiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2hlbi5pblZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJQb3MgPSAobGF5ZXJQb3MpLnRvRml4ZWQoNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVySGVpZ2h0ID4gJHdpbmRvdy5oZWlnaHQoKSAmJiBzY3JvbGxUb3AgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclBvcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkobGF5ZXIuZ2V0KDApLCBsYXllclBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXllck9wdGlvbnMub3BhY2l0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWRlIGluXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2hlbi5pblZpZXdwb3J0Qm90dG9tKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSwgeVA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjcm9sbGFibGUuaXMoJHdpbmRvdykpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlQID0gKHkgLyBoZWlnaHQpLnRvRml4ZWQoNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkgPiBvcGFjaXR5S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe29wYWNpdHk6IHlQfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe29wYWNpdHk6IDB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdHRvbSA8ICh3aW5kb3dIZWlnaHQgKyBvcGFjaXR5S2V5KSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gKHdpbmRvd0hlaWdodCArIG9wYWNpdHlLZXkpIC0gYm90dG9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVAgPSAoeSAvIG9wYWNpdHlLZXkpLnRvRml4ZWQoNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNzcyh7b3BhY2l0eTogeVB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNzcyh7b3BhY2l0eTogMH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWRlIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2hlbi5pblZpZXdwb3J0VG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvcE9yaWdpbiA9ICRzY3JvbGxhYmxlLmlzKCR3aW5kb3cpID8gc2Nyb2xsVG9wIC0gdG9wIDogdG9wQWJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3BPcmlnaW4gPiBvcGFjaXR5S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICgxIC0gKHRvcE9yaWdpbiAvIGhlaWdodCkpLnRvRml4ZWQoNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHsnb3BhY2l0eSc6IDF9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3MoeydvcGFjaXR5JzogMX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2hlbi5pblZpZXdwb3J0Qm90dG9tICYmIHNjcm9sbFRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHsnb3BhY2l0eSc6IDF9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJHdpbmRvd0NvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAkd2luZG93Q29udGVudC5zY3JvbGwocmVxdWVzdFRpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHdpbmRvdy5zY3JvbGwocmVxdWVzdFRpY2spO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnLnBhcmFsbGF4JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtQYXJhbGxheCgpO1xuICAgIH0pO1xuXG59KShqUXVlcnksIHdpbmRvdyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4vX3NraW4nKSgpO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1Njcm9sbGFibGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2VcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIG5pY2UgPSB0aGlzLm5pY2VTY3JvbGwoe1xuICAgICAgICAgICAgY3Vyc29yYm9yZGVyOiAwLFxuICAgICAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IHNldHRpbmdzLmhvcml6b250YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCEgc2V0dGluZ3MuaG9yaXpvbnRhbCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBfc3VwZXIgPSBuaWNlLmdldENvbnRlbnRTaXplO1xuXG4gICAgICAgIG5pY2UuZ2V0Q29udGVudFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IF9zdXBlci5jYWxsKG5pY2UpO1xuICAgICAgICAgICAgcGFnZS5oID0gbmljZS53aW4uaGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgICAgfTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLnRrU2Nyb2xsYWJsZSgpO1xuXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZS1oXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgJCh0aGlzKS50a1Njcm9sbGFibGUoeyBob3Jpem9udGFsOiB0cnVlIH0pO1xuXG4gICAgfSk7XG5cbiAgICB2YXIgdDtcbiAgICAkKHdpbmRvdykub24oJ2RlYm91bmNlZHJlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXSwgW2RhdGEtc2Nyb2xsYWJsZS1oXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9KTtcblxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtTaWRlYmFyU2l6ZVBjRGVtbyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgdmFyIHQsIHNwY19kZW1vID0gdGhpcztcblxuICAgICAgICBpZiAoISBzcGNfZGVtby5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAkKGRvY3VtZW50KVxuICAgICAgICAgICAgLm9uKCdzaWRlYmFyLnNob3cnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoJyNwYy1vcGVuJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3NpZGViYXIuaGlkZGVuJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCcjcGMtb3BlbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgc3BjX2RlbW8ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgcyA9ICQoJy5zaWRlYmFyJyksIHZlID0gJCgnI3BjLXZhbHVlJyksIHYgPSB2ZS52YWwoKTtcbiAgICAgICAgICAgIHZlLmJsdXIoKTtcbiAgICAgICAgICAgIGlmICghIHYubGVuZ3RoIHx8IHYgPCAyNSkge1xuICAgICAgICAgICAgICAgIHYgPSAyNTtcbiAgICAgICAgICAgICAgICB2ZS52YWwodik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzWyAwIF0uY2xhc3NOYW1lID0gc1sgMCBdLmNsYXNzTmFtZS5yZXBsYWNlKC9zaWRlYmFyLXNpemUtKFtcXGRdKylwYy9pZywgJ3NpZGViYXItc2l6ZS0nICsgdiArICdwYycpO1xuICAgICAgICAgICAgc2lkZWJhci5vcGVuKCdzaWRlYmFyLW1lbnUnKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgICAgIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmNsb3NlKCdzaWRlYmFyLW1lbnUnKTtcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLXNpemUtcGMtZGVtb1wiXScpLnRrU2lkZWJhclNpemVQY0RlbW8oKTtcblxufSkoalF1ZXJ5KTsiLCJ2YXIgYXN5bmNMb2FkZXIgPSByZXF1aXJlKCcuL19hc3luYycpO1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBjaGFuZ2VTa2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2tpbiA9ICQuY29va2llKFwic2tpblwiKSxcbiAgICAgICAgICAgIGZpbGUgPSAkLmNvb2tpZShcInNraW4tZmlsZVwiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBza2luICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhc3luY0xvYWRlcihbICdjc3MvJyArIGZpbGUgKyAnLm1pbi5jc3MnIF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1za2luXScpLnJlbW92ZVByb3AoJ2Rpc2FibGVkJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXNraW5dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgICAkKCdbZGF0YS1za2luXScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICQuY29va2llKFwic2tpblwiLCAkKHRoaXMpLmRhdGEoJ3NraW4nKSk7XG5cbiAgICAgICAgJC5jb29raWUoXCJza2luLWZpbGVcIiwgJCh0aGlzKS5kYXRhKCdmaWxlJykpO1xuXG4gICAgICAgIGNoYW5nZVNraW4oKTtcblxuICAgIH0pO1xuXG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIik7XG5cbiAgICBpZiAodHlwZW9mIHNraW4gIT0gJ3VuZGVmaW5lZCcgJiYgc2tpbiAhPSAnZGVmYXVsdCcpIHtcbiAgICAgICAgY2hhbmdlU2tpbigpO1xuICAgIH1cblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cy5qcycpO1xucmVxdWlyZSgnLi9fZ3JpZGFsaWNpb3VzLmpzJyk7XG5yZXF1aXJlKCcuL19zY3JvbGxhYmxlLmpzJyk7XG5yZXF1aXJlKCcuL19za2lucycpO1xucmVxdWlyZSgnLi9faXNvdG9wZScpO1xucmVxdWlyZSgnLi9fcGFyYWxsYXgnKTtcblxuLy8gU2lkZWJhciBQZXJjZW50YWdlIFNpemVzIERlbW9cbnJlcXVpcmUoJy4vX3NpZGViYXItcGMnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBmaW5kID0gZnVuY3Rpb24gKG1hcERhdGEsIGxvY2F0aW9uLCBtYXJrZXIsIG1hcmtlckRhdGEpIHtcblxuICAgICAgICB2YXIgZXZlbnREYXRhID0gJC5leHRlbmQoe30sIHttYXJrZXI6IG1hcmtlcn0sIG1hcmtlckRhdGEsIG1hcERhdGEpLFxuICAgICAgICAgICAgc3RhdGUgPSAnJyxcbiAgICAgICAgICAgIGNvdW50cnkgPSAnJyxcbiAgICAgICAgICAgIGFkZHJlc3MgPSAnJztcblxuICAgICAgICBtYXBEYXRhLmNvbnRhaW5lci5nbWFwKCdzZWFyY2gnLCB7J2xvY2F0aW9uJzogbG9jYXRpb259LCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0gcmVzdWx0c1sgMCBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICQuZWFjaChyZXN1bHRzWyAwIF0uYWRkcmVzc19jb21wb25lbnRzLCBmdW5jdGlvbiAoaSwgdikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodi50eXBlc1sgMCBdID09IFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xXCIgfHwgdi50eXBlc1sgMCBdID09IFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdi5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi50eXBlc1sgMCBdID09IFwiY291bnRyeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ID0gdi5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBldmVudERhdGEgPSAkLmV4dGVuZCh7fSwgZXZlbnREYXRhLCB7c3RhdGU6IHN0YXRlLCBjb3VudHJ5OiBjb3VudHJ5LCBhZGRyZXNzOiBhZGRyZXNzfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ21hcC5tYXJrZXIuZmluZCcsIGV2ZW50RGF0YSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdmFyIGJpbmRGaW5kID0gZnVuY3Rpb24obWFya2VyLCBtYXJrZXJEYXRhLCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtYXJrZXJEYXRhLm9wZW4gIT09ICd1bmRlZmluZWQnICYmIG1hcmtlckRhdGEub3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmluZChkYXRhLCBtYXJrZXJEYXRhLmxhdExuZywgbWFya2VyLCBtYXJrZXJEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZmluZChkYXRhLCBlLmxhdExuZywgdGhpcywgbWFya2VyRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGZpbmQoZGF0YSwgZS5sYXRMbmcsIHRoaXMsIG1hcmtlckRhdGEpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKGRvY3VtZW50KS5vbignbWFwLmluaXQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YS5jb250YWluZXIuZGF0YSgnaWQnKSA9PSAnbWFwLWVkaXQnKSB7XG5cbiAgICAgICAgICAgIHZhciBtYXJrZXJzID0gZGF0YS5jb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKSxcbiAgICAgICAgICAgICAgICBtYXJrZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRyYWdnYWJsZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJrZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiOiBcInRwbC1lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImJ1aWxkaW5nLTAxXCJcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihkYXRhLm1hcCwgJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICBtYXJrZXJEYXRhID0gJC5leHRlbmQoe30sIG1hcmtlckRhdGEsIHtcImxhdExuZ1wiOiBldmVudC5sYXRMbmd9KTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBkYXRhLmFkZE1hcmtlcihtYXJrZXJzLmxlbmd0aCwgbWFya2VyRGF0YSwgbWFya2VyT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBiaW5kRmluZChtYXJrZXIsIG1hcmtlckRhdGEsIGRhdGEpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoZGF0YS5pdy53aW5kb3csICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICQoJyNtYXAtZGVsZXRlLW1hcmtlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pdy5jbG9zZShpZCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNbIGlkIF0uc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJC5lYWNoKG1hcmtlcnMsIGZ1bmN0aW9uKGksIG1hcmtlcil7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyRGF0YSA9IG1hcmtlci5nZXQoJ2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgIGJpbmRGaW5kKG1hcmtlciwgbWFya2VyRGF0YSwgZGF0YSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21hcC5tYXJrZXIuZmluZCcsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuXG4gICAgICAgIGRhdGEubWFya2VyLnNldFRpdGxlKGRhdGEuYWRkcmVzcyk7XG5cbiAgICAgICAgaWYgKGRhdGEuaXcud2luZG93LmlzT3BlbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBkYXRhLml3Lm9wZW4oZGF0YS5tYXJrZXIuZ2V0KCdpZCcpLCBkYXRhKTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGFycmF5VW5pcXVlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24ocCwgYykge1xuICAgICAgICAgICAgaWYgKHAuaW5kZXhPZihjKSA8IDApIHAucHVzaChjKTtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LCBbXSk7XG4gICAgfTtcblxuICAgIHZhciBmaWx0ZXIgPSBmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICBkYXRhLml3LmNsb3NlKCk7XG4gICAgICAgIGRhdGEuY29udGFpbmVyLmdtYXAoJ3NldCcsICdib3VuZHMnLCBudWxsKTtcblxuICAgICAgICB2YXIgZmlsdGVycyA9IFtdO1xuXG4gICAgICAgICQoJyNyYWRpb3MgOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChpLCBjaGVja2JveCkge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKCQoY2hlY2tib3gpLnZhbCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhLmNvbnRhaW5lci5nbWFwKCdmaW5kJywgJ21hcmtlcnMnLCB7XG4gICAgICAgICAgICAgICAgJ3Byb3BlcnR5JzogJ3RhZ3MnLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgJ29wZXJhdG9yJzogJ09SJ1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKG1hcmtlciwgZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250YWluZXIuZ21hcCgnYWRkQm91bmRzJywgbWFya2VyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFZpc2libGUoZm91bmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkLmVhY2goZGF0YS5jb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKSwgZnVuY3Rpb24gKGksIG1hcmtlcikge1xuICAgICAgICAgICAgICAgIGRhdGEuY29udGFpbmVyLmdtYXAoJ2FkZEJvdW5kcycsIG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKGRvY3VtZW50KS5vbignbWFwLmluaXQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YS5jb250YWluZXIuZGF0YSgnZmlsdGVycycpID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBtYXAgPSBkYXRhLFxuICAgICAgICAgICAgICAgIG1hcmtlcnMgPSBkYXRhLmNvbnRhaW5lci5nbWFwKCdnZXQnLCAnbWFya2VycycpLFxuICAgICAgICAgICAgICAgIHRhZ3MgPSBbXSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkID0gZGF0YS5jb250YWluZXIuZGF0YSgnZmlsdGVyc1RlbXBsYXRlJykgfHwgJyNtYXAtZmlsdGVycy10ZW1wbGF0ZSc7XG5cbiAgICAgICAgICAgICQuZWFjaChtYXJrZXJzLCBmdW5jdGlvbihpLCBtYXJrZXIpe1xuICAgICAgICAgICAgICAgICQuZWFjaChtYXJrZXIudGFncywgZnVuY3Rpb24oaSwgdGFnKXtcbiAgICAgICAgICAgICAgICAgICAgdGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFncyA9IGFycmF5VW5pcXVlKHRhZ3MpO1xuXG4gICAgICAgICAgICB2YXIgc291cmNlID0gJCh0ZW1wbGF0ZUlkKS5odG1sKCk7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKHRlbXBsYXRlKHsgdGFnczogdGFncyB9KSk7XG5cbiAgICAgICAgICAgICRlbC5pbnNlcnRBZnRlcihkYXRhLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vLi4vLi4vbGF5b3V0L2pzL19za2luJykoKTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nLCAkZWwpLm5pY2VTY3JvbGwoe1xuICAgICAgICAgICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICBjdXJzb3Jjb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGZpbHRlcihkYXRhKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3JhZGlvcyA6Y2hlY2tib3gnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGZpbHRlcihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGNlbnRlcldpbmRvdyA9IGZ1bmN0aW9uIChjb250YWluZXIsIG1hcCwgZGF0YSkge1xuXG4gICAgICAgIGlmIChkYXRhLmxhdCAmJiBkYXRhLmxuZykge1xuXG4gICAgICAgICAgICBjb250YWluZXIuZ21hcCgnb3B0aW9uJywgJ2NlbnRlcicsIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZGF0YS5sYXQsIGRhdGEubG5nKSk7XG5cbiAgICAgICAgICAgIG1hcC5wYW5CeSgwLCAtMTcwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBjZW50ZXJNYXAgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDIpIHtcblxuICAgICAgICAgICAgY29udGFpbmVyLmdtYXAoJ29wdGlvbicsICdjZW50ZXInLCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGRhdGFbIDAgXSwgZGF0YVsgMSBdKSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgcmVzaXplID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgbWFwLCB3aW5kb3dEYXRhLCBtYXBEYXRhKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBnb29nbGUgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcCwgJ3Jlc2l6ZScpO1xuXG4gICAgICAgIGlmICghIGNlbnRlck1hcChjb250YWluZXIsIG1hcERhdGEpKSBjZW50ZXJXaW5kb3coY29udGFpbmVyLCBtYXAsIHdpbmRvd0RhdGEpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNlbnRlcldpbmRvdzogY2VudGVyV2luZG93LFxuICAgICAgICBjZW50ZXJNYXA6IGNlbnRlck1hcCxcbiAgICAgICAgcmVzaXplOiByZXNpemVcbiAgICB9O1xuXG59OyIsImZ1bmN0aW9uIGxvYWRTY3JpcHQoKSB7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/dj0zLmV4cCYnICtcbiAgICAnY2FsbGJhY2s9aW5pdEdvb2dsZU1hcHMnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGxvYWRTY3JpcHQ7XG5cbmZ1bmN0aW9uIGluaXRTY3JpcHRzKCkge1xuICAgIHZhciAkc2NyaXB0cyA9IFtcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5leHRlbnNpb25zLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5zZXJ2aWNlcy5qc1wiLFxuICAgICAgICBcImpzL3ZlbmRvci9tYXBzL2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAubWljcm9kYXRhLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5taWNyb2Zvcm1hdC5qc1wiLFxuICAgICAgICBcImpzL3ZlbmRvci9tYXBzL2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAub3ZlcmxheXMuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLnJkZmEuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC9hZGRvbnMvaW5mb2JveF9wYWNrZWQuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC9hZGRvbnMvbWFya2VyY2x1c3RlcmVyLm1pbi5qc1wiXG4gICAgXTtcblxuICAgICQuZWFjaCgkc2NyaXB0cywgZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgaWYgKCQoJ1tzcmM9XCInICsgdiArICdcIl0nKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgc2NyaXB0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgIHNjcmlwdE5vZGUuc3JjID0gdjtcbiAgICAgICAgJCgnaGVhZCcpLnByZXBlbmQoJChzY3JpcHROb2RlKSk7XG4gICAgfSk7XG5cbiAgICAkLmV4dGVuZCgkLnVpLmdtYXAucHJvdG90eXBlLCB7XG4gICAgICAgIHBhZ2luYXRpb246IGZ1bmN0aW9uIChwcm9wLCBtYXBEYXRhKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gJChcIiNtYXAtcGFnaW5hdGlvblwiKS5odG1sKCk7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKHRlbXBsYXRlKCkpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGkgPSAwO1xuICAgICAgICAgICAgcHJvcCA9IHByb3AgfHwgJ3RpdGxlJztcbiAgICAgICAgICAgIHNlbGYuc2V0KCdwYWdpbmF0aW9uJywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gc2VsZi5nZXQoJ21hcmtlcnMnKVsgaSBdO1xuICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLml3Lm9wZW4oaSwgbS5nZXQoJ2NvbnRlbnQnKSk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKCcuZGlzcGxheScpLnRleHQobVsgcHJvcCBdKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXQoJ21hcCcpLnBhblRvKG0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmdldCgncGFnaW5hdGlvbicpKHRydWUsIDApO1xuICAgICAgICAgICAgJGVsLmZpbmQoJy5iYWNrLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0KCdwYWdpbmF0aW9uJykoKGkgPiAwKSwgLSAxLCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGVsLmZpbmQoJy5md2QtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXQoJ3BhZ2luYXRpb24nKSgoaSA8IHNlbGYuZ2V0KCdtYXJrZXJzJykubGVuZ3RoIC0gMSksIDEsIHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmFkZENvbnRyb2woJGVsLCBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bIG1hcERhdGEub3B0aW9ucy5wYWdpbmF0aW9uUG9zaXRpb24gXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudmFyIGxpYnJhcnkgPSByZXF1aXJlKCcuL19saWJyYXJ5LmpzJykoKTtcblxuLy8gSG9sZHMgZ29vZ2xlIG1hcHMgc3R5bGVzXG52YXIgc3R5bGVzID0ge1xuICAgIFwibGlnaHQtZ3JleVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fbGlnaHQtZ3JleS5qcycpLFxuICAgIFwibGlnaHQtbW9ub2Nocm9tZVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fbGlnaHQtbW9ub2Nocm9tZS5qcycpLFxuICAgIFwiY29vbC1ncmV5XCI6IHJlcXVpcmUoJy4vc3R5bGVzL19jb29sLWdyZXkuanMnKSxcbiAgICBcImJsdWUtZ3JheVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fYmx1ZS1ncmF5LmpzJyksXG4gICAgXCJwYXBlclwiOiByZXF1aXJlKCcuL3N0eWxlcy9fcGFwZXIuanMnKSxcbiAgICBcImFwcGxlXCI6IHJlcXVpcmUoJy4vc3R5bGVzL19hcHBsZS5qcycpLFxuICAgIFwibGlnaHQtZ3JlZW5cIjogcmVxdWlyZSgnLi9zdHlsZXMvX2xpZ2h0LWdyZWVuLmpzJyksXG4gICAgXCJsZW1vbi10cmVlXCI6IHJlcXVpcmUoJy4vc3R5bGVzL19sZW1vbi10cmVlLmpzJyksXG4gICAgXCJjbGVhbi1jdXRcIjogcmVxdWlyZSgnLi9zdHlsZXMvX2NsZWFuLWN1dC5qcycpLFxuICAgIFwibmF0dXJlXCI6IHJlcXVpcmUoJy4vc3R5bGVzL19uYXR1cmUuanMnKVxufTtcblxuLy8gUHJvY2VzcyB0aGUgaW5mb1dpbmRvdyBjb250ZW50IHZpYSBIYW5kbGViYXJzIHRlbXBsYXRlc1xudmFyIGluZm9XaW5kb3dDb250ZW50ID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgIHZhciBzb3VyY2UgPSAkKFwiI1wiICsgbWFya2VyLnRlbXBsYXRlKS5odG1sKCk7XG4gICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlKG1hcmtlcik7XG59O1xuXG4vKipcbiAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICovXG4kLmZuLnRrR29vZ2xlTWFwID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgIHZhciBjb250YWluZXIgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBnb29nbGUgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIEluZm9Cb3ggPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29udGFpbmVyLnRrR29vZ2xlTWFwKCk7XG4gICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtYXBab29tUG9zaXRpb246IGNvbnRhaW5lci5kYXRhKCd6b29tUG9zaXRpb24nKSB8fCBcIlRPUF9MRUZUXCIsXG4gICAgICAgIG1hcFpvb206IGNvbnRhaW5lci5kYXRhKCd6b29tJykgfHwgMTYsXG4gICAgICAgIG1hcFN0eWxlOiBjb250YWluZXIuZGF0YSgnc3R5bGUnKSB8fCBcImxpZ2h0LWdyZXlcIixcbiAgICAgICAgbWFwVHlwZTogY29udGFpbmVyLmRhdGEoJ3R5cGUnKSB8fCBcIlJPQURNQVBcIixcbiAgICAgICAgZmlsZTogY29udGFpbmVyLmRhdGEoJ2ZpbGUnKSxcbiAgICAgICAgY2VudGVyOiBjb250YWluZXIuZGF0YSgnY2VudGVyJykgPyBjb250YWluZXIuZGF0YSgnY2VudGVyJykuc3BsaXQoXCIsXCIpIDogZmFsc2UsXG4gICAgICAgIHBhZ2luYXRpb246IGNvbnRhaW5lci5kYXRhKCdwYWdpbmF0aW9uJykgfHwgZmFsc2UsXG4gICAgICAgIHBhZ2luYXRpb25Qb3NpdGlvbjogY29udGFpbmVyLmRhdGEoJ3BhZ2luYXRpb25Qb3NpdGlvbicpIHx8ICdUT1BfTEVGVCcsXG4gICAgICAgIGRyYWdnYWJsZTogY29udGFpbmVyLmRhdGEoJ2RyYWdnYWJsZScpICE9PSBmYWxzZVxuICAgIH07XG5cbiAgICB2YXIgbWFwRGF0YTtcblxuICAgIC8vIHByb3ZpZGUgYSBkZWZhdWx0IG9iamVjdCBmb3IgZGF0YSBjb2xsZWN0ZWQgZnJvbSB0aGUgY3VycmVudGx5IG9wZW5lZCBpbmZvV2luZG93XG4gICAgdmFyIGluZm9XaW5kb3dEYXRhID0ge1xuICAgICAgICBsYXQ6IGZhbHNlLFxuICAgICAgICBsbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHZhciBpbmZvV2luZG93T3BlbiA9IGZ1bmN0aW9uIChpLCBtYXJrZXIpIHtcblxuICAgICAgICB2YXIgbWFya2VySW5zdCA9IGNvbnRhaW5lci5nbWFwKCdnZXQnLCAnbWFya2VycycpWyBpIF07XG5cbiAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KGluZm9XaW5kb3dDb250ZW50KG1hcmtlcikpO1xuICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBtYXJrZXJJbnN0KTtcbiAgICAgICAgaW5mb1dpbmRvdy5pc09wZW4gPSBpO1xuXG4gICAgICAgIGluZm9XaW5kb3dEYXRhID0ge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIGluZm9XaW5kb3dDbG9zZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW5mb1dpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgaW5mb1dpbmRvdy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaW5mb1dpbmRvdy5pc09wZW4gIT0gJ3VuZGVmaW5lZCcgJiYgaW5mb1dpbmRvdy5pc09wZW4gPT09IGkpIHtcbiAgICAgICAgICAgIGluZm9XaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIGluZm9XaW5kb3cuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qIEluZm9Cb3ggKi9cbiAgICB2YXIgaW5mb1dpbmRvdyA9IG5ldyBJbmZvQm94KHtcbiAgICAgICAgbWF4V2lkdGg6IDI0MCxcbiAgICAgICAgYWxpZ25Cb3R0b206IHRydWVcbiAgICB9KTtcblxuICAgIHZhciBhZGRNYXJrZXIgPSBmdW5jdGlvbiAoaSwgbWFya2VyLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBpY29uQmFzZSA9ICdpbWFnZXMvbWFya2Vycy8nO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB0eXBlb2YgbWFya2VyLmxhdExuZyAhPT0gJ3VuZGVmaW5lZCcgPyBtYXJrZXIubGF0TG5nIDogZmFsc2U7XG4gICAgICAgIGlmICghIHBvc2l0aW9uICYmIHR5cGVvZiBtYXJrZXIubGF0aXR1ZGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtYXJrZXIubG9uZ2l0dWRlICE9PSAndW5kZWZpbmVkJykgcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG1hcmtlci5sYXRpdHVkZSwgbWFya2VyLmxvbmdpdHVkZSk7XG4gICAgICAgIGlmICghIHBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1hcmtlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICBcImlkXCI6IGksXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHBvc2l0aW9uLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaWNvblwiOiBpY29uQmFzZSArIG1hcmtlci5pY29uICsgXCIucG5nXCJcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ29iamVjdCcpIG1hcmtlck9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgbWFya2VyT3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIG9wZW4gPSB0eXBlb2YgbWFya2VyLm9wZW4gIT09ICd1bmRlZmluZWQnICYmIG1hcmtlci5vcGVuID09PSB0cnVlO1xuXG4gICAgICAgIGNvbnRhaW5lci5nbWFwKCdhZGRNYXJrZXInLCBtYXJrZXJPcHRpb25zKTtcblxuICAgICAgICB2YXIgbWFya2VySW5zdCA9IGNvbnRhaW5lci5nbWFwKCdnZXQnLCAnbWFya2VycycpWyBpIF07XG5cbiAgICAgICAgbWFya2VySW5zdC5zZXRUaXRsZShtYXJrZXIudGl0bGUpO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckluc3QsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghIGluZm9XaW5kb3dDbG9zZShpKSkge1xuICAgICAgICAgICAgICAgIGluZm9XaW5kb3dPcGVuKGksIG1hcmtlcik7XG4gICAgICAgICAgICAgICAgbGlicmFyeS5jZW50ZXJXaW5kb3coY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VySW5zdCwgJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGF0ID0gbWFya2VySW5zdC5nZXRQb3NpdGlvbigpLmxhdCgpO1xuICAgICAgICAgICAgdmFyIGxuZyA9IG1hcmtlckluc3QuZ2V0UG9zaXRpb24oKS5sbmcoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcImxhdGl0dWRlXCI6ICcgKyBsYXQgKyAnLCBcImxvbmdpdHVkZVwiOiAnICsgbG5nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIG1hcmtlckRhdGEgPSAkLmV4dGVuZCh7fSwgbWFya2VyLCB7XG4gICAgICAgICAgICBcImlkXCI6IGksXG4gICAgICAgICAgICBcImxhdExuZ1wiOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG1hcmtlci5sYXRpdHVkZSwgbWFya2VyLmxvbmdpdHVkZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2VySW5zdC5zZXQoJ2NvbnRlbnQnLCBtYXJrZXJEYXRhKTtcblxuICAgICAgICBpZiAob3BlbikgaW5mb1dpbmRvd09wZW4oaSwgbWFya2VyKTtcblxuICAgICAgICByZXR1cm4gbWFya2VySW5zdDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLmdtYXAoXG4gICAgICAgIHtcbiAgICAgICAgICAgICd6b29tQ29udHJvbCc6IHRydWUsXG4gICAgICAgICAgICAnem9vbUNvbnRyb2xPcHRpb25zJzoge1xuICAgICAgICAgICAgICAgICdzdHlsZSc6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGUuU01BTEwsXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uWyBvcHRpb25zLm1hcFpvb21Qb3NpdGlvbiBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhbkNvbnRyb2wnOiBmYWxzZSxcbiAgICAgICAgICAgICdzdHJlZXRWaWV3Q29udHJvbCc6IGZhbHNlLFxuICAgICAgICAgICAgJ21hcFR5cGVDb250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAnb3ZlcnZpZXdNYXBDb250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAnc2Nyb2xsd2hlZWwnOiBmYWxzZSxcbiAgICAgICAgICAgICdkcmFnZ2FibGUnOiBvcHRpb25zLmRyYWdnYWJsZSxcbiAgICAgICAgICAgICdtYXBUeXBlSWQnOiBnb29nbGUubWFwcy5NYXBUeXBlSWRbIG9wdGlvbnMubWFwVHlwZSBdLFxuICAgICAgICAgICAgJ3pvb20nOiBvcHRpb25zLm1hcFpvb20sXG4gICAgICAgICAgICAnc3R5bGVzJzogc3R5bGVzWyBvcHRpb25zLm1hcFN0eWxlIF1cbiAgICAgICAgfSlcbiAgICAgICAgLmJpbmQoJ2luaXQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIG1hcERhdGEgPSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBhZGRNYXJrZXI6IGFkZE1hcmtlcixcbiAgICAgICAgICAgICAgICBsaWJyYXJ5OiBsaWJyYXJ5LFxuICAgICAgICAgICAgICAgIGl3OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGluZm9XaW5kb3dEYXRhLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3c6IGluZm9XaW5kb3csXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGluZm9XaW5kb3dDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBpbmZvV2luZG93T3BlbixcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGluZm9XaW5kb3dDbG9zZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbGUpIHtcblxuICAgICAgICAgICAgICAgICQuZ2V0SlNPTihvcHRpb25zLmZpbGUsIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEubWFya2VycywgZnVuY3Rpb24gKGksIG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0eXBlb2YgbWFya2VyLm9wdGlvbnMgIT09ICd1bmRlZmluZWQnID8gbWFya2VyLm9wdGlvbnMgOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE1hcmtlcihpLCBtYXJrZXIsIG8pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lck9uY2UobWFwLCAnaWRsZScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuZ21hcCgncGFnaW5hdGlvbicsICd0aXRsZScsIG1hcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaWJyYXJ5LmNlbnRlck1hcChjb250YWluZXIsIG9wdGlvbnMuY2VudGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ2lkbGUnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdtYXAuaW5pdCcsIG1hcERhdGEpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb1dpbmRvdywgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpdyA9ICQoJy5pbmZvQm94Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1dpbmRvdy5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxPZmZzZXQ6IG5ldyBnb29nbGUubWFwcy5TaXplKC0gTWF0aC5hYnMoaXcud2lkdGgoKSAvIDIpLCAtIDQ1KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuY292ZXInLCBpdykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50a0NvdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIHZhciBtYXAgPSBjb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcCcpO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKCdkZWJvdW5jZWRyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG5cbiAgICAvLyBoYW5kbGUgbWFwcyBpbiBjb2xsYXBzaWJsZXNcbiAgICAkKCcuY29sbGFwc2UnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJChjb250YWluZXIsIHRoaXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW5pdFNjcmlwdHMoKTtcblxuICAgIC8qXG4gICAgICogQ2x1c3RlcmluZ1xuICAgICAqL1xuICAgIGlmICgkKCcjZ29vZ2xlLW1hcC1jbHVzdGVyaW5nJykubGVuZ3RoKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gYmluZCB0aGUgbWFwIHdpdGggdGhlIFwiaW5pdFwiIGV2ZW50IG90aGVyd2lzZSBib3VuZHMgd2lsbCBiZSBudWxsXG4gICAgICAgICQoJyNnb29nbGUtbWFwLWNsdXN0ZXJpbmcnKS5nbWFwKHsnem9vbSc6IDIsICdkaXNhYmxlRGVmYXVsdFVJJzogdHJ1ZX0pLmJpbmQoJ2luaXQnLCBmdW5jdGlvbiAoZXZ0LCBtYXApIHtcbiAgICAgICAgICAgIHZhciBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgICAgICB2YXIgc291dGhXZXN0ID0gYm91bmRzLmdldFNvdXRoV2VzdCgpO1xuICAgICAgICAgICAgdmFyIG5vcnRoRWFzdCA9IGJvdW5kcy5nZXROb3J0aEVhc3QoKTtcbiAgICAgICAgICAgIHZhciBsbmdTcGFuID0gbm9ydGhFYXN0LmxuZygpIC0gc291dGhXZXN0LmxuZygpO1xuICAgICAgICAgICAgdmFyIGxhdFNwYW4gPSBub3J0aEVhc3QubGF0KCkgLSBzb3V0aFdlc3QubGF0KCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5JbmZvV2luZG93KCkge1xuICAgICAgICAgICAgICAgICQoJyNnb29nbGUtbWFwLWNsdXN0ZXJpbmcnKS5nbWFwKCdvcGVuSW5mb1dpbmRvdycsIHtjb250ZW50OiAnSGVsbG8gd29ybGQhJ30sIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkgKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGF0ID0gc291dGhXZXN0LmxhdCgpICsgbGF0U3BhbiAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxuZyA9IHNvdXRoV2VzdC5sbmcoKSArIGxuZ1NwYW4gKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgICQoJyNnb29nbGUtbWFwLWNsdXN0ZXJpbmcnKS5nbWFwKCdhZGRNYXJrZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpXG4gICAgICAgICAgICAgICAgfSkuY2xpY2sob3BlbkluZm9XaW5kb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjZ29vZ2xlLW1hcC1jbHVzdGVyaW5nJykuZ21hcCgnc2V0JywgJ01hcmtlckNsdXN0ZXJlcicsIG5ldyBNYXJrZXJDbHVzdGVyZXIobWFwLCAkKHRoaXMpLmdtYXAoJ2dldCcsICdtYXJrZXJzJykpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59O1xuXG4oZnVuY3Rpb24oJCl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbWFwLmluaXQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICB2YXIgc3R5bGVUcGwgPSAkKCcjbWFwLXN0eWxlLXN3aXRjaCcpLFxuICAgICAgICAgICAgdG9nZ2xlU3R5bGVXcmFwcGVyID0gJCgnW2RhdGEtdG9nZ2xlPVwibWFwLXN0eWxlLXN3aXRjaFwiXScpO1xuXG4gICAgICAgIGlmIChzdHlsZVRwbC5sZW5ndGggJiYgdG9nZ2xlU3R5bGVXcmFwcGVyLmxlbmd0aCkge1xuXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0b2dnbGVTdHlsZVdyYXBwZXIuZGF0YSgndGFyZ2V0JykpO1xuXG4gICAgICAgICAgICBpZiAoISB0YXJnZXQpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmlzKHRhcmdldCkpIHtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gc3R5bGVUcGwuaHRtbCgpO1xuICAgICAgICAgICAgICAgIHZhciB0ID0gSGFuZGxlYmFycy5jb21waWxlKHMpO1xuXG4gICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGVXcmFwcGVyLmh0bWwodCh7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgJCgnc2VsZWN0JywgdG9nZ2xlU3R5bGVXcmFwcGVyKS52YWwoZGF0YS5vcHRpb25zLm1hcFN0eWxlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5zZWxlY3RwaWNrZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuc2VsZWN0cGlja2VyJywgdG9nZ2xlU3R5bGVXcmFwcGVyKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5kYXRhKCd3aWR0aCcpIHx8ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9fc2tpbicpKCk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScsIHRvZ2dsZVN0eWxlV3JhcHBlcikubmljZVNjcm9sbCh7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpyYWlsZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ3NlbGVjdCcsIHRvZ2dsZVN0eWxlV3JhcHBlcikub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gdHlwZW9mIHN0eWxlc1sgJCh0aGlzKS52YWwoKSBdID8gc3R5bGVzWyAkKHRoaXMpLnZhbCgpIF0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgc3R5bGUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZ21hcCgnb3B0aW9uJywgJ3N0eWxlcycsIHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZ29vZ2xlLW1hcHNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKHRoaXMpLnRrR29vZ2xlTWFwKCk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcblxucmVxdWlyZSgnLi9fZWRpdCcpO1xucmVxdWlyZSgnLi9fZmlsdGVycycpOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5tYW5fbWFkZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2Y3ZjFkZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5uYXR1cmFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZDBlM2I0XCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWwudGVycmFpblwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5idXNpbmVzc1wiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLm1lZGljYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmYmQzZGFcIn0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjYmRlNmFiXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZlMTVmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2VmZDE1MVwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiYmxhY2tcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb24uYWlycG9ydFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjY2ZiMmRiXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2EyZGFmMlwifSBdfSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9LCB7XCJjb2xvclwiOiBcIiNiNWNiZTRcIn0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIiwgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZWZlZmVmXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiIzgzYTViMFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNiZGNkZDNcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNlM2VlZDNcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSwge1wibGlnaHRuZXNzXCI6IDMzfSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9LCB7XCJsaWdodG5lc3NcIjogMjB9IF1cbn0sIHt9LCB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIiwgXCJzdHlsZXJzXCI6IFsge1wibGlnaHRuZXNzXCI6IDIwfSBdfSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJsaWdodG5lc3NcIjogMTAwfSwge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSwge1wiY29sb3JcIjogXCIjQzZFMkZGXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI0M1RTNCRlwifSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNEMUQxQjhcIn0gXVxufSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLCBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLCBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1wic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiMwMGFhZmZcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJnYW1tYVwiOiAyLjE1fSwge1wibGlnaHRuZXNzXCI6IDEyfSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0sIHtcImxpZ2h0bmVzc1wiOiAyNH0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLCBcInN0eWxlcnNcIjogWyB7XCJsaWdodG5lc3NcIjogNTd9IF19IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNmZmZmZmZcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJsaWdodG5lc3NcIjogMTAwfSwge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5uYXR1cmFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNmZmZmZmZcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJsaWdodG5lc3NcIjogMTAwfSwge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZmZlOTRmXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDEwMH0sIHtcImxpZ2h0bmVzc1wiOiA0fSwge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2ZmZTk0ZlwifSwge1wic2F0dXJhdGlvblwiOiAxMDB9LCB7XCJsaWdodG5lc3NcIjogNH0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzMzMzMzM1wifSwge1wic2F0dXJhdGlvblwiOiAtIDEwMH0sIHtcImxpZ2h0bmVzc1wiOiAtIDc0fSwge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjYmFmNGM0XCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDEwfSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2VmZmVmZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLCBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2U5ZTllOVwifSwge1wibGlnaHRuZXNzXCI6IDE3fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2Y1ZjVmNVwifSwge1wibGlnaHRuZXNzXCI6IDIwfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMTd9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSwge1wibGlnaHRuZXNzXCI6IDI5fSwge1wid2VpZ2h0XCI6IDAuMn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMTh9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSwge1wibGlnaHRuZXNzXCI6IDE2fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2Y1ZjVmNVwifSwge1wibGlnaHRuZXNzXCI6IDIxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZGVkZWRlXCJ9LCB7XCJsaWdodG5lc3NcIjogMjF9IF1cbn0sIHtcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9LCB7XCJjb2xvclwiOiBcIiNmZmZmZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAxNn0gXVxufSwge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wic2F0dXJhdGlvblwiOiAzNn0sIHtcImNvbG9yXCI6IFwiIzMzMzMzM1wifSwge1wibGlnaHRuZXNzXCI6IDQwfSBdXG59LCB7XCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2YyZjJmMlwifSwge1wibGlnaHRuZXNzXCI6IDE5fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZWZlZmVcIn0sIHtcImxpZ2h0bmVzc1wiOiAyMH0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZWZlZmVcIn0sIHtcImxpZ2h0bmVzc1wiOiAxN30sIHtcIndlaWdodFwiOiAxLjJ9IF1cbn0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjMmMyZTMzXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDd9LCB7XCJsaWdodG5lc3NcIjogMTl9LCB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2ZmZmZmZlwifSwge1wic2F0dXJhdGlvblwiOiAtIDEwMH0sIHtcImxpZ2h0bmVzc1wiOiAxMDB9LCB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZmZmZmZmXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gMTAwfSwge1wibGlnaHRuZXNzXCI6IDEwMH0sIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2JiYzBjNFwifSwge1wic2F0dXJhdGlvblwiOiAtIDkzfSwge1wibGlnaHRuZXNzXCI6IDMxfSwge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNiYmMwYzRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA5M30sIHtcImxpZ2h0bmVzc1wiOiAzMX0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2JiYzBjNFwifSwge1wic2F0dXJhdGlvblwiOiAtIDkzfSwge1wibGlnaHRuZXNzXCI6IC0gMn0sIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNlOWViZWRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA5MH0sIHtcImxpZ2h0bmVzc1wiOiAtIDh9LCB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2U5ZWJlZFwifSwge1wic2F0dXJhdGlvblwiOiAxMH0sIHtcImxpZ2h0bmVzc1wiOiA2OX0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNlOWViZWRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA3OH0sIHtcImxpZ2h0bmVzc1wiOiA2N30sIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9IF1cbn0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjRkZBODAwXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDB9LCB7XCJsaWdodG5lc3NcIjogMH0sIHtcImdhbW1hXCI6IDF9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzUzRkYwMFwifSwge1wic2F0dXJhdGlvblwiOiAtIDczfSwge1wibGlnaHRuZXNzXCI6IDQwfSwge1wiZ2FtbWFcIjogMX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI0ZCRkYwMFwifSwge1wic2F0dXJhdGlvblwiOiAwfSwge1wibGlnaHRuZXNzXCI6IDB9LCB7XCJnYW1tYVwiOiAxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjMDBGRkZEXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDB9LCB7XCJsaWdodG5lc3NcIjogMzB9LCB7XCJnYW1tYVwiOiAxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzAwQkZGRlwifSwge1wic2F0dXJhdGlvblwiOiA2fSwge1wibGlnaHRuZXNzXCI6IDh9LCB7XCJnYW1tYVwiOiAxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiM2Nzk3MTRcIn0sIHtcInNhdHVyYXRpb25cIjogMzMuNH0sIHtcImxpZ2h0bmVzc1wiOiAtIDI1LjR9LCB7XCJnYW1tYVwiOiAxfSBdXG59IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSwge1wiaHVlXCI6IFwiIzAwNjZmZlwifSwge1wic2F0dXJhdGlvblwiOiA3NH0sIHtcImxpZ2h0bmVzc1wiOiAxMDB9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIiwgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9LCB7XCJ3ZWlnaHRcIjogMC42fSwge1wic2F0dXJhdGlvblwiOiAtIDg1fSwge1wibGlnaHRuZXNzXCI6IDYxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIiwgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLCBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9LCB7XCJjb2xvclwiOiBcIiM1Zjk0ZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAyNn0sIHtcImdhbW1hXCI6IDUuODZ9IF1cbn0gXTsiLCJyZXF1aXJlKCcuL293bC9tYWluJyk7XG5yZXF1aXJlKCcuL3NsaWNrL19kZWZhdWx0Jyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrT3dsRGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjID0gdGhpcztcbiAgICAgICAgYy5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IGMuZGF0YSgnaXRlbXMnKSB8fCA0LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGMuZGF0YSgnaXRlbXNMZycpIHx8IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDk5Mjoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogYy5kYXRhKCdpdGVtc01nJykgfHwgM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBjLmRhdGEoJ2l0ZW1zU20nKSB8fCAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA0ODA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGMuZGF0YSgnaXRlbXNYcycpIHx8IDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnRsOiB0aGlzLmRhdGEoJ3J0bCcpLFxuICAgICAgICAgICAgYWZ0ZXJVcGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoXCIub3dsLWJhc2ljXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrT3dsRGVmYXVsdCgpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a093bE1peGVkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgcnRsOiB0aGlzLmRhdGEoJ3J0bCcpLFxuICAgICAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+JywgJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nIF0sXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChcIi5vd2wtbWl4ZWRcIikudGtPd2xNaXhlZCgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHN5bmNQb3NpdGlvbiA9IGZ1bmN0aW9uIChlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgdGFyZ2V0LnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsIFtlLml0ZW0uaW5kZXgsIDMwMCwgdHJ1ZV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtPd2xQcmV2aWV3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5kYXRhKCdzeW5jJykpLFxuICAgICAgICAgICAgcHJldmlldyA9IHRoaXMsXG4gICAgICAgICAgICBydGwgPSB0aGlzLmRhdGEoJ3J0bCcpO1xuXG4gICAgICAgIGlmICghIHRhcmdldC5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgc2xpZGVTcGVlZDogMTAwMCxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG4gICAgICAgICAgICBydGw6IHJ0bCxcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgIG5hdmlnYXRpb25UZXh0OiBbICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nLCAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKCdjaGFuZ2Uub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBzeW5jUG9zaXRpb24oZSwgdGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFyZ2V0Lm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiA1LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNDgwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAxMDAsXG4gICAgICAgICAgICBydGw6IHJ0bCxcbiAgICAgICAgICAgIGFmdGVySW5pdDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuZmluZChcIi5vd2wtaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcInN5bmNlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFyZ2V0Lm9uKCdjaGFuZ2Uub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBzeW5jUG9zaXRpb24oZSwgcHJldmlldyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhcmdldC5maW5kKCcub3dsLWl0ZW0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLmRhdGEoXCJvd2wtaXRlbVwiKTtcbiAgICAgICAgICAgIHByZXZpZXcudHJpZ2dlcihcInRvLm93bC5jYXJvdXNlbFwiLCBbaXRlbS5pbmRleCwgMzAwLCB0cnVlXSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoXCIub3dsLXByZXZpZXdcIikudGtPd2xQcmV2aWV3KCk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fZGVmYXVsdCcpO1xucmVxdWlyZSgnLi9fbWl4ZWQnKTtcbnJlcXVpcmUoJy4vX3ByZXZpZXcnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTbGlja0RlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2xpY2sgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICB2YXIgYyA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBjLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IGMuZGF0YSgnaXRlbXMnKSB8fCAzLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc0xnJykgfHwgNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc01kJykgfHwgM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc1NtJykgfHwgM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc1hzJykgfHwgMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBydGw6IHRoaXMuZGF0YSgncnRsJyksXG4gICAgICAgICAgICBvblNldFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2lkZWJhci5zaG93bicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjLnNsaWNrU2V0T3B0aW9uKCdkb3RzJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoXCIuc2xpY2stYmFzaWNcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtTbGlja0RlZmF1bHQoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdtYXAuaW5pdCcsIGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmlzKCcjZ29vZ2xlLWZzLXJlYWxlc3RhdGUnKSkge1xuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZGF0YS5jb250YWluZXIsXG4gICAgICAgICAgICAgICAgbWFwID0gZGF0YS5tYXAsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRhdGEub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBpdyA9IGRhdGEuaXcud2luZG93O1xuXG4gICAgICAgICAgICB2YXIgbGlicmFyeSA9IHJlcXVpcmUoJy4uLy4uL21hcHMvanMvZ29vZ2xlL19saWJyYXJ5LmpzJykoKTtcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ3NpZGViYXIuc2hvd24gc2lkZWJhci5oaWRkZW4nLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQgPT0gJyNzaWRlYmFyLW1hcCcgfHwgZGF0YS50YXJnZXQgPT0gXCIjc2lkZWJhci1lZGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gaXcuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9XaW5kb3dEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcG9zaXRpb24ubGF0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwb3NpdGlvbi5sbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdzaWRlYmFyLnNob3duJywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudGFyZ2V0ID09IFwiI3NpZGViYXItZWRpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyN0b2dnbGUtc2lkZWJhci1lZGl0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignc2lkZWJhci5oaWRkZW4nLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQgPT0gXCIjc2lkZWJhci1lZGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RvZ2dsZS1zaWRlYmFyLWVkaXQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciByZXN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICAgICAgJCgnLnNpZGViYXIuc2lkZWJhci12aXNpYmxlLWRlc2t0b3AnKS5ub3QoJzp2aXNpYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzaWRlYmFyLm9wdGlvbnMoJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5vcGVuKCQodGhpcykuYXR0cignaWQnKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyOnZpc2libGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmNsb3NlKCQodGhpcykuYXR0cignaWQnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ3NjgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGlmICgkKCcuaGlkZS1zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3RvcmUoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQxMDI0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoJCgnLmhpZGUtc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN0b3JlKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NDgwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBoaWRlKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNDgwKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGhpZGUoKTtcbiAgICB9XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTaWRlYmFyQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgc2lkZWJhciA9IHRoaXM7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudSA+IGxpLmRyb3Bkb3duID4gYScpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUgPiBsaSA+IGEnKS5vZmYoJ21vdXNlZW50ZXInKTtcbiAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub2ZmKCdjbGljaycpO1xuICAgICAgICBzaWRlYmFyLm9mZignbW91c2VsZWF2ZScpO1xuICAgICAgICBzaWRlYmFyLmZpbmQoJy5kcm9wZG93bicpLm9mZignbW91c2VvdmVyJyk7XG4gICAgICAgIHNpZGViYXIuZmluZCgnLmRyb3Bkb3duJykub2ZmKCdtb3VzZW91dCcpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vZmYoJ21vdXNlb3V0JywgJyNkcm9wZG93bi10ZW1wIC5kcm9wZG93bicpO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgndWwuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignc2hvd24uYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignc2hvdy5icy5jb2xsYXBzZScpXG4gICAgICAgICAgICAub2ZmKCdoaWRlLmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5jb2xsYXBzZScpO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5yZW1vdmUoKTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5oYXNTdWJtZW51JykucmVtb3ZlQ2xhc3MoJ2Ryb3Bkb3duJylcbiAgICAgICAgICAgIC5maW5kKCc+IHVsJykuYWRkQ2xhc3MoJ2NvbGxhcHNlJykucmVtb3ZlQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUgc3VibWVudS1oaWRlIHN1Ym1lbnUtc2hvdycpXG4gICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgIC5maW5kKCc+IGEnKS5hdHRyKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmNvbGxhcHNlJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2lkZWJhci5maW5kKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2VcbiAgICAgICAgc2lkZWJhci5maW5kKCcuY29sbGFwc2UnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHBhcmVudHMgPSAkKHRoaXMpLnBhcmVudHMoJ3VsOmZpcnN0JykuZmluZCgnPiBsaS5vcGVuID4gdWwnKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHBhcmVudHMuY29sbGFwc2UoJ2hpZGUnKS5jbG9zZXN0KCcuaGFzU3VibWVudScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5oYXNTdWJtZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5oYXNTdWJtZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSh7IHRvZ2dsZTogZmFsc2UgfSk7XG5cbiAgICB9O1xuXG4gICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudGtTaWRlYmFyQ29sbGFwc2UoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTaWRlYmFyRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgc2lkZWJhciA9IHRoaXM7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignc2hvd24uYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignc2hvdy5icy5jb2xsYXBzZScpXG4gICAgICAgICAgICAub2ZmKCdoaWRkZW4uYnMuY29sbGFwc2UnKTtcblxuICAgICAgICB2YXIgbmljZSA9IHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKClbIDAgXTtcblxuICAgICAgICBuaWNlLnNjcm9sbHN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghIHNpZGViYXIuaXMoJ1tkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpKSByZXR1cm47XG4gICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgICAgIHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAgPiB1bCA+IGxpJykuZW1wdHkoKTtcbiAgICAgICAgICAgIHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmljZS5zY3JvbGxlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykpIHJldHVybjtcbiAgICAgICAgICAgICQuZGF0YSh0aGlzLCAnbGFzdFNjcm9sbFRvcCcsIG5pY2UuZ2V0U2Nyb2xsVG9wKCkpO1xuICAgICAgICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmhhc1N1Ym1lbnUnKS5hZGRDbGFzcygnZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICAuZmluZCgnPiB1bCcpLmFkZENsYXNzKCdkcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlIGluJykucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgICAuZmluZCgnPiBhJykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpXG4gICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS10b2dnbGUnKTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUgPiBsaS5kcm9wZG93biA+IGEnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIGMgPSBzaWRlYmFyLmZpbmQoJyNkcm9wZG93bi10ZW1wJyk7XG5cbiAgICAgICAgICAgIHNpZGViYXIuZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgYy5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmICghICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKS5pcygnLm9wZW4nKSAmJiAhIHNpZGViYXIuaXMoJy5zY3JvbGxpbmcnKSkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gJCh0aGlzKS5wYXJlbnQoJy5kcm9wZG93bicpLFxuICAgICAgICAgICAgICAgICAgICB0ID0gcC5maW5kKCc+IC5kcm9wZG93bi1tZW51JykuY2xvbmUoKS5yZW1vdmVDbGFzcygnc3VibWVudS1oaWRlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBjLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjID0gJCgnPGRpdi8+JykuYXR0cignaWQnLCAnZHJvcGRvd24tdGVtcCcpLmFwcGVuZFRvKHNpZGViYXIpO1xuICAgICAgICAgICAgICAgICAgICBjLmh0bWwoJzx1bD48bGk+PC9saT48L3VsPicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMuc2hvdygpO1xuICAgICAgICAgICAgICAgIGMuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjID0gYy5maW5kKCc+IHVsID4gbGknKS5jc3Moe292ZXJmbG93OiAndmlzaWJsZSd9KS5hZGRDbGFzcygnZHJvcGRvd24gb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgcC5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIHQuYXBwZW5kVG8oYykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBwLm9mZnNldCgpLnRvcCAtIGMub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnMTAwJSdcbiAgICAgICAgICAgICAgICB9KS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2lkZWJhci5pcygnLnJpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoISAkKHRoaXMpLnBhcmVudCgpLmlzKCcuZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKS5jbG9zZXN0KCcuc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmlzKCcuZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcjZHJvcGRvd24tdGVtcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5kcm9wZG93bicpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuJykuY2hpbGRyZW4oJ3VsJykucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnUtaGlkZScpLmFkZENsYXNzKCdzdWJtZW51LXNob3cnKTtcbiAgICAgICAgfSkub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnLnN1Ym1lbnUtc2hvdycpLmFkZENsYXNzKCdzdWJtZW51LWhpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZW91dCcsICcjZHJvcGRvd24tdGVtcCAuZHJvcGRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhci1tZW51IC5vcGVuJywgJCh0aGlzKS5jbG9zZXN0KCcuc2lkZWJhcicpKS5yZW1vdmVDbGFzcygnLm9wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdmFyIHRyYW5zZm9ybV9kZCA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRrU2lkZWJhckRyb3Bkb3duKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHZhciB0cmFuc2Zvcm1fY29sbGFwc2UgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50a1NpZGViYXJDb2xsYXBzZSgpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICB0cmFuc2Zvcm1fZGQoKTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ0ODAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykuYXR0cignZGF0YS10eXBlJywgJ2NvbGxhcHNlJykuYXR0cignZGF0YS10cmFuc2Zvcm1lZCcsIHRydWUpO1xuICAgICAgICB0cmFuc2Zvcm1fY29sbGFwc2UoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1ha2VfZGQoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdW2RhdGEtdHJhbnNmb3JtZWRdJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdW2RhdGEtdHJhbnNmb3JtZWRdJykuYXR0cignZGF0YS10eXBlJywgJ2Ryb3Bkb3duJykuYXR0cignZGF0YS10cmFuc2Zvcm1lZCcsIHRydWUpO1xuICAgICAgICB0cmFuc2Zvcm1fZGQoKTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgbWFrZV9kZCk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50MTAyNCcsIG1ha2VfZGQpO1xuXG59KShqUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNpZGViYXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInRyYW5zZm9ybS1idXR0b25cIjogc2lkZWJhci5kYXRhKCd0cmFuc2Zvcm1CdXR0b24nKSA9PT0gdHJ1ZSxcbiAgICAgICAgXCJ0cmFuc2Zvcm0tYnV0dG9uLWljb25cIjogc2lkZWJhci5kYXRhKCd0cmFuc2Zvcm1CdXR0b25JY29uJykgfHwgJ2ZhLWVsbGlwc2lzLWgnXG4gICAgfTtcbn07IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2lkZWJhcnMgPSAkKCcuc2lkZWJhcicpO1xuXG4gICAgc2lkZWJhcnMuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHJlcXVpcmUoJy4vX29wdGlvbnMnKShzaWRlYmFyKTtcblxuICAgICAgICBpZiAob3B0aW9uc1sgJ3RyYW5zZm9ybS1idXR0b24nIF0pIHtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nKTtcblxuICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ3NpZGViYXItdHJhbnNmb3JtJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2J0biBidG4tZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiZmEgJyArIG9wdGlvbnNbICd0cmFuc2Zvcm0tYnV0dG9uLWljb24nIF0gKyAnXCI+PC9pPicpO1xuXG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUnKS5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCgnI3N1Ym5hdicpLmNvbGxhcHNlKHsndG9nZ2xlJzogZmFsc2V9KTtcblxuICAgIGZ1bmN0aW9uIG1vYmlsZWNoZWNrKCkge1xuICAgICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoLyhhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsa3xiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSlcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0OiAnc3QtZWZmZWN0LTEnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1NTAsXG4gICAgICAgICAgICAgICAgb3ZlcmxheTogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbnRhaW5lclNlbGVjdG9yID0gJy5zdC1jb250YWluZXInLFxuXG4gICAgICAgICAgICBldmVudHR5cGUgPSBtb2JpbGVjaGVjaygpID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJyxcblxuICAgICAgICAgICAgZ2V0TGF5b3V0Q2xhc3NlcyA9IGZ1bmN0aW9uIChzaWRlYmFyLCBkaXJlY3Rpb24pIHtcblxuICAgICAgICAgICAgICAgIHZhciBsYXlvdXRDbGFzc2VzID0gc2lkZWJhci5kYXRhKCdsYXlvdXRDbGFzc2VzJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBsYXlvdXRDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2dnbGVMYXlvdXQgPSBzaWRlYmFyLmRhdGEoJ3RvZ2dsZUxheW91dCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvZ2dsZUxheW91dCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9IHRvZ2dsZUxheW91dC5zcGxpdChcIixcIikuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLmRhdGEoJ2xheW91dENsYXNzZXMnLCBsYXlvdXRDbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXRDbGFzc2VzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbmV3IFJlZ0V4cCgnc2lkZWJhci0nICsgZGlyZWN0aW9uICsgJyhcXFxcUyspJywgJ2lnJyk7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dENsYXNzZXMgPSAkKCdodG1sJykuZ2V0KDApLmNsYXNzTmFtZS5tYXRjaChtYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXRDbGFzc2VzICE9PSBudWxsICYmIGxheW91dENsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gbGF5b3V0Q2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXIuZGF0YSgnbGF5b3V0Q2xhc3NlcycsIGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheW91dENsYXNzZXM7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldFNpZGViYXJEYXRhT3B0aW9ucyA9IGZ1bmN0aW9uKHNpZGViYXIpe1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0OiBzaWRlYmFyLmRhdGEoJ2VmZmVjdCcpLFxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5OiBzaWRlYmFyLmRhdGEoJ292ZXJsYXknKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFuaW1hdGluZyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2FuaW1hdGluZycpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2FuaW1hdGluZycpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYW5pbWF0aW5nJyk7XG4gICAgICAgICAgICAgICAgfSwgZGVmYXVsdHMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNldCA9IGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoY29udGFpbmVyU2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHR5cGVvZiBpZCAhPT0gJ3VuZGVmaW5lZCcgPyAnIycgKyBpZCA6IGNvbnRhaW5lci5kYXRhKCdzdE1lbnVUYXJnZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9ICQodGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnOnZpc2libGUnKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLmhhc0NsYXNzKCdzaWRlYmFyLWNsb3NlZCcpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgZWZmZWN0ID0gdHlwZW9mIG9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmIG9wdGlvbnMuZWZmZWN0ID8gb3B0aW9ucy5lZmZlY3QgOiBjb250YWluZXIuZGF0YSgnc3RNZW51RWZmZWN0JyksXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHNpZGViYXIuaXMoJy5sZWZ0JykgPyAnbCcgOiAncicsXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBzaWRlYmFyLmdldCgwKS5jbGFzc05hbWUubWF0Y2goL3NpZGViYXItc2l6ZS0oXFxTKykvKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbENsYXNzID0gJ3N0LWVmZmVjdC0nICsgZGlyZWN0aW9uICsgc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGF5b3V0ID0gc2lkZWJhci5kYXRhKCd0b2dnbGVMYXlvdXQnKSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9IGdldExheW91dENsYXNzZXMoc2lkZWJhciwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogc2lkZWJhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLmhpZGUnLCBldmVudERhdGEpO1xuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdW2hyZWY9XCInICsgdGFyZ2V0ICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcyhodG1sQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoZWZmZWN0KTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc3QtbWVudS1vcGVuIHN0LXB1c2hlci1vdmVybGF5Jyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKGh0bWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYXlvdXQpICQoJ2h0bWwnKS5yZW1vdmVDbGFzcyhsYXlvdXRDbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcyhlZmZlY3QpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuZ2V0KDApLmNsYXNzTmFtZSA9ICdzdC1jb250YWluZXInOyAvLyBjbGVhclxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKCdzaWRlYmFyLWNsb3NlZCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignc2lkZWJhci5oaWRkZW4nLCBldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIH0sIGRlZmF1bHRzLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3BlbiA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKGNvbnRhaW5lclNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgIHZhciBzaWRlYmFyID0gJCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBvbiBtb2JpbGUsIGFsbG93IG9ubHkgb25lIHNpZGViYXIgdG8gYmUgb3BlbiBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4ICYmIGNvbnRhaW5lci5oYXNDbGFzcygnc3QtbWVudS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdW2hyZWY9XCInICsgdGFyZ2V0ICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIHZhciBlZmZlY3QgPSBvcHRpb25zLmVmZmVjdCxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheSA9IG9wdGlvbnMub3ZlcmxheTtcblxuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBzaWRlYmFyLmlzKCcubGVmdCcpID8gJ2wnIDogJ3InLFxuICAgICAgICAgICAgICAgICAgICBzaXplID0gc2lkZWJhci5nZXQoMCkuY2xhc3NOYW1lLm1hdGNoKC9zaWRlYmFyLXNpemUtKFxcUyspLykucG9wKCksXG4gICAgICAgICAgICAgICAgICAgIGh0bWxDbGFzcyA9ICdzdC1lZmZlY3QtJyArIGRpcmVjdGlvbiArIHNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxheW91dCA9IHNpZGViYXIuZGF0YSgndG9nZ2xlTGF5b3V0JyksXG4gICAgICAgICAgICAgICAgICAgIGxheW91dENsYXNzZXMgPSBnZXRMYXlvdXRDbGFzc2VzKHNpZGViYXIsIGRpcmVjdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXI6IHNpZGViYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignc2lkZWJhci5zaG93JywgZXZlbnREYXRhKTtcblxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcyhodG1sQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuc2hvdygpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWNsb3NlZCcpO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmRhdGEoJ3N0TWVudUVmZmVjdCcsIGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmRhdGEoJ3N0TWVudVRhcmdldCcsIHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXkpIGNvbnRhaW5lci5hZGRDbGFzcygnc3QtcHVzaGVyLW92ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoJ3N0LW1lbnUtb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgICAgICAgfSwgMjUpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYXlvdXQpICQoJ2h0bWwnKS5hZGRDbGFzcyhsYXlvdXRDbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignc2lkZWJhci5zaG93bicsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgfSwgZGVmYXVsdHMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYSA9IGFuaW1hdGluZygpO1xuICAgICAgICAgICAgICAgIGlmIChhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gYnV0dG9uLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyID0gJCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEFjdGl2ZUVsZW1lbnQgPSAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nKS5ub3QodGhpcykuY2xvc2VzdCgnbGknKS5sZW5ndGggPyAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nKS5ub3QodGhpcykuY2xvc2VzdCgnbGknKSA6ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykubGVuZ3RoID8gJCh0aGlzKS5jbG9zZXN0KCdsaScpIDogJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZlRWxlbWVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCdodG1sJykuaGFzQ2xhc3MoJ3Nob3ctc2lkZWJhcicpKSBhY3RpdmVFbGVtZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkgJCgnaHRtbCcpLmFkZENsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkYXRhT3B0aW9ucyA9IGdldFNpZGViYXJEYXRhT3B0aW9ucyhzaWRlYmFyKSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uT3B0aW9ucyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5kYXRhKCdlZmZlY3QnKSkgYnV0dG9uT3B0aW9ucy5lZmZlY3QgPSBidXR0b24uZGF0YSgnZWZmZWN0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5kYXRhKCdvdmVybGF5JykpIGJ1dHRvbk9wdGlvbnMub3ZlcmxheSA9IGJ1dHRvbi5kYXRhKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgZGF0YU9wdGlvbnMsIGJ1dHRvbk9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5oYXNDbGFzcygnc2lkZWJhci1jbG9zZWQnKSAmJiBzaWRlYmFyLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KHNpZGViYXIuYXR0cignaWQnKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcGVuKHRhcmdldCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgJCgnYm9keScpLm9uKGV2ZW50dHlwZSwgJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScsIHRvZ2dsZSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBudWxsLCAnZXNjJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJChjb250YWluZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIGlmIChjb250YWluZXIuaGFzQ2xhc3MoJ3N0LW1lbnUtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAgICAgKi9cbiAgICAgICAgJC5mbi50a1NpZGViYXJUb2dnbGVCYXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBzaWRlYmFyID0gdGhpcztcblxuICAgICAgICAgICAgLyogU2lkZWJhciBUb2dnbGUgQmFyICovXG4gICAgICAgICAgICBpZiAoc2lkZWJhci5kYXRhKCd0b2dnbGVCYXInKSkge1xuICAgICAgICAgICAgICAgIHZhciBiYXIgPSAkKCc8YT48L2E+Jyk7XG4gICAgICAgICAgICAgICAgYmFyLmF0dHIoJ2hyZWYnLCAnIycgKyBzaWRlYmFyLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRvZ2dsZScsICdzaWRlYmFyLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NpZGViYXItdG9nZ2xlLWJhcicpO1xuXG4gICAgICAgICAgICAgICAgc2lkZWJhci5hcHBlbmQoYmFyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgICQoJy5zaWRlYmFyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50a1NpZGViYXJUb2dnbGVCYXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnNpZGViYXIgPSB7XG5cbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBhbmltYXRpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoYSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbignIycgKyBpZCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0KGlkLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3B0aW9uczogZ2V0U2lkZWJhckRhdGFPcHRpb25zXG5cbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMnKTtcbnJlcXVpcmUoJy4vX3NpZGViYXItbWVudScpO1xucmVxdWlyZSgnLi9fY29sbGFwc2libGUnKTtcbnJlcXVpcmUoJy4vX2Ryb3Bkb3duJyk7XG5yZXF1aXJlKCcuL19zaWRlYmFyLXRvZ2dsZScpO1xuXG4oZnVuY3Rpb24oJCl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2lkZWJhciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgICBtZW51VHlwZTogZmFsc2UsXG4gICAgICAgICAgICB0b2dnbGVCYXI6IGZhbHNlXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBzaWRlYmFyID0gdGhpcztcblxuICAgICAgICBpZiAoc2V0dGluZ3MubWVudVR5cGUgPT0gXCJjb2xsYXBzZVwiKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnRrU2lkZWJhckNvbGxhcHNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3MubWVudVR5cGUgPT0gXCJkcm9wZG93blwiKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnRrU2lkZWJhckRyb3Bkb3duKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3MudG9nZ2xlQmFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzaWRlYmFyLnRrU2lkZWJhclRvZ2dsZUJhcigpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG59KShqUXVlcnkpOyIsIi8vIENVU1RPTVxucmVxdWlyZSgncmVhbC1lc3RhdGUvanMvX21hcHMnKTsiXX0=
