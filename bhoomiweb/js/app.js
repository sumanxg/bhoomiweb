/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function () {
			c = !0
		});
		var e = function () {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function (b) {
				if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function (b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a("#" === f ? [] : f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function (b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.7", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function (b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
		}, this), 0)
	}, c.prototype.toggle = function () {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target).closest(".btn");
		b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function (b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
			d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap) return b;
		var e = "prev" == a ? -1 : 1,
			f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function (a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function () {
		if (!this.sliding) return this.slide("next")
	}, c.prototype.prev = function () {
		if (!this.sliding) return this.slide("prev")
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if (f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this
	};
	var e = function (c) {
		var d, e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function (b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
				e = b(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
		}))
	}

	function d(b) {
		return this.each(function () {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function (b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = b(e),
				g = f.hasClass("open");
			if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
			}
			return !1
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
					g = e.hasClass("open");
				if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find(".dropdown-menu" + h);
				if (i.length) {
					var j = i.index(c.target);
					38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
	"use strict";

	function b(b, d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function (b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function (b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function () {
		var a = this;
		this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function (b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function () {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState)
			if (this.inState[a]) return !0;
		return !1
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide()
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function () {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using: function (a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
	}, c.prototype.fixTitle = function () {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function () {
		return this.getTitle()
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = window.SVGElement && c instanceof window.SVGElement,
			g = d ? {
				top: 0,
				left: 0
			} : f ? null : b.offset(),
			h = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			i = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, h, i, g)
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function () {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function (a) {
		do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
		return a
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function () {
		this.enabled = !0
	}, c.prototype.disable = function () {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function (b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function () {
		var a = this;
		clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function () {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.7", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function () {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function (a, b) {
			return a[0] - b[0]
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function () {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this
	};
	var e = function (c) {
		c.preventDefault(), b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed) return e < c && "top";
		if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top,
			j = h ? g : b;
		return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = Math.max(a(document).height(), a(document.body).height());
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery);;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}

}(function ($) {
	'use strict';
	var Slick = window.Slick || {};

	Slick = (function () {

		var instanceUid = 0;

		function Slick(element, settings) {

			var _ = this,
				dataSettings;

			_.defaults = {
				accessibility: true,
				adaptiveHeight: false,
				appendArrows: $(element),
				appendDots: $(element),
				arrows: true,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: false,
				autoplaySpeed: 3000,
				centerMode: false,
				centerPadding: '50px',
				cssEase: 'ease',
				customPaging: function (slider, i) {
					return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
				},
				dots: false,
				dotsClass: 'slick-dots',
				draggable: true,
				easing: 'linear',
				edgeFriction: 0.35,
				fade: false,
				focusOnSelect: false,
				infinite: true,
				initialSlide: 0,
				lazyLoad: 'ondemand',
				mobileFirst: false,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: false,
				respondTo: 'window',
				responsive: null,
				rows: 1,
				rtl: false,
				slide: '',
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: true,
				swipeToSlide: false,
				touchMove: true,
				touchThreshold: 5,
				useCSS: true,
				useTransform: true,
				variableWidth: false,
				vertical: false,
				verticalSwiping: false,
				waitForAnimate: true,
				zIndex: 1000
			};

			_.initials = {
				animating: false,
				dragging: false,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: false,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: false,
				unslicked: false
			};

			$.extend(_, _.initials);

			_.activeBreakpoint = null;
			_.animType = null;
			_.animProp = null;
			_.breakpoints = [];
			_.breakpointSettings = [];
			_.cssTransitions = false;
			_.focussed = false;
			_.interrupted = false;
			_.hidden = 'hidden';
			_.paused = true;
			_.positionProp = null;
			_.respondTo = null;
			_.rowCount = 1;
			_.shouldClick = true;
			_.$slider = $(element);
			_.$slidesCache = null;
			_.transformType = null;
			_.transitionType = null;
			_.visibilityChange = 'visibilitychange';
			_.windowWidth = 0;
			_.windowTimer = null;

			dataSettings = $(element).data('slick') || {};

			_.options = $.extend({}, _.defaults, settings, dataSettings);

			_.currentSlide = _.options.initialSlide;

			_.originalSettings = _.options;

			if (typeof document.mozHidden !== 'undefined') {
				_.hidden = 'mozHidden';
				_.visibilityChange = 'mozvisibilitychange';
			} else if (typeof document.webkitHidden !== 'undefined') {
				_.hidden = 'webkitHidden';
				_.visibilityChange = 'webkitvisibilitychange';
			}

			_.autoPlay = $.proxy(_.autoPlay, _);
			_.autoPlayClear = $.proxy(_.autoPlayClear, _);
			_.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
			_.changeSlide = $.proxy(_.changeSlide, _);
			_.clickHandler = $.proxy(_.clickHandler, _);
			_.selectHandler = $.proxy(_.selectHandler, _);
			_.setPosition = $.proxy(_.setPosition, _);
			_.swipeHandler = $.proxy(_.swipeHandler, _);
			_.dragHandler = $.proxy(_.dragHandler, _);
			_.keyHandler = $.proxy(_.keyHandler, _);

			_.instanceUid = instanceUid++;

			// A simple way to check for HTML strings
			// Strict HTML recognition (must start with <)
			// Extracted from jQuery v1.11 source
			_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


			_.registerBreakpoints();
			_.init(true);

		}

		return Slick;

	}());

	Slick.prototype.activateADA = function () {
		var _ = this;

		_.$slideTrack.find('.slick-active').attr({
			'aria-hidden': 'false'
		}).find('a, input, button, select').attr({
			'tabindex': '0'
		});

	};

	Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

		var _ = this;

		if (typeof (index) === 'boolean') {
			addBefore = index;
			index = null;
		} else if (index < 0 || (index >= _.slideCount)) {
			return false;
		}

		_.unload();

		if (typeof (index) === 'number') {
			if (index === 0 && _.$slides.length === 0) {
				$(markup).appendTo(_.$slideTrack);
			} else if (addBefore) {
				$(markup).insertBefore(_.$slides.eq(index));
			} else {
				$(markup).insertAfter(_.$slides.eq(index));
			}
		} else {
			if (addBefore === true) {
				$(markup).prependTo(_.$slideTrack);
			} else {
				$(markup).appendTo(_.$slideTrack);
			}
		}

		_.$slides = _.$slideTrack.children(this.options.slide);

		_.$slideTrack.children(this.options.slide).detach();

		_.$slideTrack.append(_.$slides);

		_.$slides.each(function (index, element) {
			$(element).attr('data-slick-index', index);
		});

		_.$slidesCache = _.$slides;

		_.reinit();

	};

	Slick.prototype.animateHeight = function () {
		var _ = this;
		if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
			var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
			_.$list.animate({
				height: targetHeight
			}, _.options.speed);
		}
	};

	Slick.prototype.animateSlide = function (targetLeft, callback) {

		var animProps = {},
			_ = this;

		_.animateHeight();

		if (_.options.rtl === true && _.options.vertical === false) {
			targetLeft = -targetLeft;
		}
		if (_.transformsEnabled === false) {
			if (_.options.vertical === false) {
				_.$slideTrack.animate({
					left: targetLeft
				}, _.options.speed, _.options.easing, callback);
			} else {
				_.$slideTrack.animate({
					top: targetLeft
				}, _.options.speed, _.options.easing, callback);
			}

		} else {

			if (_.cssTransitions === false) {
				if (_.options.rtl === true) {
					_.currentLeft = -(_.currentLeft);
				}
				$({
					animStart: _.currentLeft
				}).animate({
					animStart: targetLeft
				}, {
					duration: _.options.speed,
					easing: _.options.easing,
					step: function (now) {
						now = Math.ceil(now);
						if (_.options.vertical === false) {
							animProps[_.animType] = 'translate(' +
								now + 'px, 0px)';
							_.$slideTrack.css(animProps);
						} else {
							animProps[_.animType] = 'translate(0px,' +
								now + 'px)';
							_.$slideTrack.css(animProps);
						}
					},
					complete: function () {
						if (callback) {
							callback.call();
						}
					}
				});

			} else {

				_.applyTransition();
				targetLeft = Math.ceil(targetLeft);

				if (_.options.vertical === false) {
					animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
				} else {
					animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
				}
				_.$slideTrack.css(animProps);

				if (callback) {
					setTimeout(function () {

						_.disableTransition();

						callback.call();
					}, _.options.speed);
				}

			}

		}

	};

	Slick.prototype.getNavTarget = function () {

		var _ = this,
			asNavFor = _.options.asNavFor;

		if (asNavFor && asNavFor !== null) {
			asNavFor = $(asNavFor).not(_.$slider);
		}

		return asNavFor;

	};

	Slick.prototype.asNavFor = function (index) {

		var _ = this,
			asNavFor = _.getNavTarget();

		if (asNavFor !== null && typeof asNavFor === 'object') {
			asNavFor.each(function () {
				var target = $(this).slick('getSlick');
				if (!target.unslicked) {
					target.slideHandler(index, true);
				}
			});
		}

	};

	Slick.prototype.applyTransition = function (slide) {

		var _ = this,
			transition = {};

		if (_.options.fade === false) {
			transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
		} else {
			transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
		}

		if (_.options.fade === false) {
			_.$slideTrack.css(transition);
		} else {
			_.$slides.eq(slide).css(transition);
		}

	};

	Slick.prototype.autoPlay = function () {

		var _ = this;

		_.autoPlayClear();

		if (_.slideCount > _.options.slidesToShow) {
			_.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
		}

	};

	Slick.prototype.autoPlayClear = function () {

		var _ = this;

		if (_.autoPlayTimer) {
			clearInterval(_.autoPlayTimer);
		}

	};

	Slick.prototype.autoPlayIterator = function () {

		var _ = this,
			slideTo = _.currentSlide + _.options.slidesToScroll;

		if (!_.paused && !_.interrupted && !_.focussed) {

			if (_.options.infinite === false) {

				if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
					_.direction = 0;
				} else if (_.direction === 0) {

					slideTo = _.currentSlide - _.options.slidesToScroll;

					if (_.currentSlide - 1 === 0) {
						_.direction = 1;
					}

				}

			}

			_.slideHandler(slideTo);

		}

	};

	Slick.prototype.buildArrows = function () {

		var _ = this;

		if (_.options.arrows === true) {

			_.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
			_.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

			if (_.slideCount > _.options.slidesToShow) {

				_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
				_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

				if (_.htmlExpr.test(_.options.prevArrow)) {
					_.$prevArrow.prependTo(_.options.appendArrows);
				}

				if (_.htmlExpr.test(_.options.nextArrow)) {
					_.$nextArrow.appendTo(_.options.appendArrows);
				}

				if (_.options.infinite !== true) {
					_.$prevArrow
						.addClass('slick-disabled')
						.attr('aria-disabled', 'true');
				}

			} else {

				_.$prevArrow.add(_.$nextArrow)

					.addClass('slick-hidden')
					.attr({
						'aria-disabled': 'true',
						'tabindex': '-1'
					});

			}

		}

	};

	Slick.prototype.buildDots = function () {

		var _ = this,
			i, dot;

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

			_.$slider.addClass('slick-dotted');

			dot = $('<ul />').addClass(_.options.dotsClass);

			for (i = 0; i <= _.getDotCount(); i += 1) {
				dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
			}

			_.$dots = dot.appendTo(_.options.appendDots);

			_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

		}

	};

	Slick.prototype.buildOut = function () {

		var _ = this;

		_.$slides =
			_.$slider
			.children(_.options.slide + ':not(.slick-cloned)')
			.addClass('slick-slide');

		_.slideCount = _.$slides.length;

		_.$slides.each(function (index, element) {
			$(element)
				.attr('data-slick-index', index)
				.data('originalStyling', $(element).attr('style') || '');
		});

		_.$slider.addClass('slick-slider');

		_.$slideTrack = (_.slideCount === 0) ?
			$('<div class="slick-track"/>').appendTo(_.$slider) :
			_.$slides.wrapAll('<div class="slick-track"/>').parent();

		_.$list = _.$slideTrack.wrap(
			'<div aria-live="polite" class="slick-list"/>').parent();
		_.$slideTrack.css('opacity', 0);

		if (_.options.centerMode === true || _.options.swipeToSlide === true) {
			_.options.slidesToScroll = 1;
		}

		$('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

		_.setupInfinite();

		_.buildArrows();

		_.buildDots();

		_.updateDots();


		_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

		if (_.options.draggable === true) {
			_.$list.addClass('draggable');
		}

	};

	Slick.prototype.buildRows = function () {

		var _ = this,
			a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

		newSlides = document.createDocumentFragment();
		originalSlides = _.$slider.children();

		if (_.options.rows > 1) {

			slidesPerSection = _.options.slidesPerRow * _.options.rows;
			numOfSlides = Math.ceil(
				originalSlides.length / slidesPerSection
			);

			for (a = 0; a < numOfSlides; a++) {
				var slide = document.createElement('div');
				for (b = 0; b < _.options.rows; b++) {
					var row = document.createElement('div');
					for (c = 0; c < _.options.slidesPerRow; c++) {
						var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
						if (originalSlides.get(target)) {
							row.appendChild(originalSlides.get(target));
						}
					}
					slide.appendChild(row);
				}
				newSlides.appendChild(slide);
			}

			_.$slider.empty().append(newSlides);
			_.$slider.children().children().children()
				.css({
					'width': (100 / _.options.slidesPerRow) + '%',
					'display': 'inline-block'
				});

		}

	};

	Slick.prototype.checkResponsive = function (initial, forceUpdate) {

		var _ = this,
			breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
		var sliderWidth = _.$slider.width();
		var windowWidth = window.innerWidth || $(window).width();

		if (_.respondTo === 'window') {
			respondToWidth = windowWidth;
		} else if (_.respondTo === 'slider') {
			respondToWidth = sliderWidth;
		} else if (_.respondTo === 'min') {
			respondToWidth = Math.min(windowWidth, sliderWidth);
		}

		if (_.options.responsive &&
			_.options.responsive.length &&
			_.options.responsive !== null) {

			targetBreakpoint = null;

			for (breakpoint in _.breakpoints) {
				if (_.breakpoints.hasOwnProperty(breakpoint)) {
					if (_.originalSettings.mobileFirst === false) {
						if (respondToWidth < _.breakpoints[breakpoint]) {
							targetBreakpoint = _.breakpoints[breakpoint];
						}
					} else {
						if (respondToWidth > _.breakpoints[breakpoint]) {
							targetBreakpoint = _.breakpoints[breakpoint];
						}
					}
				}
			}

			if (targetBreakpoint !== null) {
				if (_.activeBreakpoint !== null) {
					if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
						_.activeBreakpoint =
							targetBreakpoint;
						if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
							_.unslick(targetBreakpoint);
						} else {
							_.options = $.extend({}, _.originalSettings,
								_.breakpointSettings[
									targetBreakpoint]);
							if (initial === true) {
								_.currentSlide = _.options.initialSlide;
							}
							_.refresh(initial);
						}
						triggerBreakpoint = targetBreakpoint;
					}
				} else {
					_.activeBreakpoint = targetBreakpoint;
					if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
						_.unslick(targetBreakpoint);
					} else {
						_.options = $.extend({}, _.originalSettings,
							_.breakpointSettings[
								targetBreakpoint]);
						if (initial === true) {
							_.currentSlide = _.options.initialSlide;
						}
						_.refresh(initial);
					}
					triggerBreakpoint = targetBreakpoint;
				}
			} else {
				if (_.activeBreakpoint !== null) {
					_.activeBreakpoint = null;
					_.options = _.originalSettings;
					if (initial === true) {
						_.currentSlide = _.options.initialSlide;
					}
					_.refresh(initial);
					triggerBreakpoint = targetBreakpoint;
				}
			}

			// only trigger breakpoints during an actual break. not on initialize.
			if (!initial && triggerBreakpoint !== false) {
				_.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
			}
		}

	};

	Slick.prototype.changeSlide = function (event, dontAnimate) {

		var _ = this,
			$target = $(event.currentTarget),
			indexOffset, slideOffset, unevenOffset;

		// If target is a link, prevent default action.
		if ($target.is('a')) {
			event.preventDefault();
		}

		// If target is not the <li> element (ie: a child), find the <li>.
		if (!$target.is('li')) {
			$target = $target.closest('li');
		}

		unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
		indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

		switch (event.data.message) {

			case 'previous':
				slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
				if (_.slideCount > _.options.slidesToShow) {
					_.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
				}
				break;

			case 'next':
				slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
				if (_.slideCount > _.options.slidesToShow) {
					_.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
				}
				break;

			case 'index':
				var index = event.data.index === 0 ? 0 :
					event.data.index || $target.index() * _.options.slidesToScroll;

				_.slideHandler(_.checkNavigable(index), false, dontAnimate);
				$target.children().trigger('focus');
				break;

			default:
				return;
		}

	};

	Slick.prototype.checkNavigable = function (index) {

		var _ = this,
			navigables, prevNavigable;

		navigables = _.getNavigableIndexes();
		prevNavigable = 0;
		if (index > navigables[navigables.length - 1]) {
			index = navigables[navigables.length - 1];
		} else {
			for (var n in navigables) {
				if (index < navigables[n]) {
					index = prevNavigable;
					break;
				}
				prevNavigable = navigables[n];
			}
		}

		return index;
	};

	Slick.prototype.cleanUpEvents = function () {

		var _ = this;

		if (_.options.dots && _.$dots !== null) {

			$('li', _.$dots)
				.off('click.slick', _.changeSlide)
				.off('mouseenter.slick', $.proxy(_.interrupt, _, true))
				.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

		}

		_.$slider.off('focus.slick blur.slick');

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
			_.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
		}

		_.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
		_.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
		_.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
		_.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

		_.$list.off('click.slick', _.clickHandler);

		$(document).off(_.visibilityChange, _.visibility);

		_.cleanUpSlideEvents();

		if (_.options.accessibility === true) {
			_.$list.off('keydown.slick', _.keyHandler);
		}

		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().off('click.slick', _.selectHandler);
		}

		$(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

		$(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

		$('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

		$(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
		$(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

	};

	Slick.prototype.cleanUpSlideEvents = function () {

		var _ = this;

		_.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
		_.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

	};

	Slick.prototype.cleanUpRows = function () {

		var _ = this,
			originalSlides;

		if (_.options.rows > 1) {
			originalSlides = _.$slides.children().children();
			originalSlides.removeAttr('style');
			_.$slider.empty().append(originalSlides);
		}

	};

	Slick.prototype.clickHandler = function (event) {

		var _ = this;

		if (_.shouldClick === false) {
			event.stopImmediatePropagation();
			event.stopPropagation();
			event.preventDefault();
		}

	};

	Slick.prototype.destroy = function (refresh) {

		var _ = this;

		_.autoPlayClear();

		_.touchObject = {};

		_.cleanUpEvents();

		$('.slick-cloned', _.$slider).detach();

		if (_.$dots) {
			_.$dots.remove();
		}


		if (_.$prevArrow && _.$prevArrow.length) {

			_.$prevArrow
				.removeClass('slick-disabled slick-arrow slick-hidden')
				.removeAttr('aria-hidden aria-disabled tabindex')
				.css('display', '');

			if (_.htmlExpr.test(_.options.prevArrow)) {
				_.$prevArrow.remove();
			}
		}

		if (_.$nextArrow && _.$nextArrow.length) {

			_.$nextArrow
				.removeClass('slick-disabled slick-arrow slick-hidden')
				.removeAttr('aria-hidden aria-disabled tabindex')
				.css('display', '');

			if (_.htmlExpr.test(_.options.nextArrow)) {
				_.$nextArrow.remove();
			}

		}


		if (_.$slides) {

			_.$slides
				.removeClass('slick-slide slick-active slick-center slick-visible slick-current')
				.removeAttr('aria-hidden')
				.removeAttr('data-slick-index')
				.each(function () {
					$(this).attr('style', $(this).data('originalStyling'));
				});

			_.$slideTrack.children(this.options.slide).detach();

			_.$slideTrack.detach();

			_.$list.detach();

			_.$slider.append(_.$slides);
		}

		_.cleanUpRows();

		_.$slider.removeClass('slick-slider');
		_.$slider.removeClass('slick-initialized');
		_.$slider.removeClass('slick-dotted');

		_.unslicked = true;

		if (!refresh) {
			_.$slider.trigger('destroy', [_]);
		}

	};

	Slick.prototype.disableTransition = function (slide) {

		var _ = this,
			transition = {};

		transition[_.transitionType] = '';

		if (_.options.fade === false) {
			_.$slideTrack.css(transition);
		} else {
			_.$slides.eq(slide).css(transition);
		}

	};

	Slick.prototype.fadeSlide = function (slideIndex, callback) {

		var _ = this;

		if (_.cssTransitions === false) {

			_.$slides.eq(slideIndex).css({
				zIndex: _.options.zIndex
			});

			_.$slides.eq(slideIndex).animate({
				opacity: 1
			}, _.options.speed, _.options.easing, callback);

		} else {

			_.applyTransition(slideIndex);

			_.$slides.eq(slideIndex).css({
				opacity: 1,
				zIndex: _.options.zIndex
			});

			if (callback) {
				setTimeout(function () {

					_.disableTransition(slideIndex);

					callback.call();
				}, _.options.speed);
			}

		}

	};

	Slick.prototype.fadeSlideOut = function (slideIndex) {

		var _ = this;

		if (_.cssTransitions === false) {

			_.$slides.eq(slideIndex).animate({
				opacity: 0,
				zIndex: _.options.zIndex - 2
			}, _.options.speed, _.options.easing);

		} else {

			_.applyTransition(slideIndex);

			_.$slides.eq(slideIndex).css({
				opacity: 0,
				zIndex: _.options.zIndex - 2
			});

		}

	};

	Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

		var _ = this;

		if (filter !== null) {

			_.$slidesCache = _.$slides;

			_.unload();

			_.$slideTrack.children(this.options.slide).detach();

			_.$slidesCache.filter(filter).appendTo(_.$slideTrack);

			_.reinit();

		}

	};

	Slick.prototype.focusHandler = function () {

		var _ = this;

		_.$slider
			.off('focus.slick blur.slick')
			.on('focus.slick blur.slick',
				'*:not(.slick-arrow)',
				function (event) {

					event.stopImmediatePropagation();
					var $sf = $(this);

					setTimeout(function () {

						if (_.options.pauseOnFocus) {
							_.focussed = $sf.is(':focus');
							_.autoPlay();
						}

					}, 0);

				});
	};

	Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

		var _ = this;
		return _.currentSlide;

	};

	Slick.prototype.getDotCount = function () {

		var _ = this;

		var breakPoint = 0;
		var counter = 0;
		var pagerQty = 0;

		if (_.options.infinite === true) {
			while (breakPoint < _.slideCount) {
				++pagerQty;
				breakPoint = counter + _.options.slidesToScroll;
				counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
			}
		} else if (_.options.centerMode === true) {
			pagerQty = _.slideCount;
		} else if (!_.options.asNavFor) {
			pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
		} else {
			while (breakPoint < _.slideCount) {
				++pagerQty;
				breakPoint = counter + _.options.slidesToScroll;
				counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
			}
		}

		return pagerQty - 1;

	};

	Slick.prototype.getLeft = function (slideIndex) {

		var _ = this,
			targetLeft,
			verticalHeight,
			verticalOffset = 0,
			targetSlide;

		_.slideOffset = 0;
		verticalHeight = _.$slides.first().outerHeight(true);

		if (_.options.infinite === true) {
			if (_.slideCount > _.options.slidesToShow) {
				_.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
				verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
			}
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
					if (slideIndex > _.slideCount) {
						_.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
						verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
					} else {
						_.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
						verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
					}
				}
			}
		} else {
			if (slideIndex + _.options.slidesToShow > _.slideCount) {
				_.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
				verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
			}
		}

		if (_.slideCount <= _.options.slidesToShow) {
			_.slideOffset = 0;
			verticalOffset = 0;
		}

		if (_.options.centerMode === true && _.options.infinite === true) {
			_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
		} else if (_.options.centerMode === true) {
			_.slideOffset = 0;
			_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
		}

		if (_.options.vertical === false) {
			targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
		} else {
			targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
		}

		if (_.options.variableWidth === true) {

			if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
				targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
			} else {
				targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
			}

			if (_.options.rtl === true) {
				if (targetSlide[0]) {
					targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
				} else {
					targetLeft = 0;
				}
			} else {
				targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
			}

			if (_.options.centerMode === true) {
				if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
					targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
				} else {
					targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
				}

				if (_.options.rtl === true) {
					if (targetSlide[0]) {
						targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
					} else {
						targetLeft = 0;
					}
				} else {
					targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
				}

				targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
			}
		}

		return targetLeft;

	};

	Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

		var _ = this;

		return _.options[option];

	};

	Slick.prototype.getNavigableIndexes = function () {

		var _ = this,
			breakPoint = 0,
			counter = 0,
			indexes = [],
			max;

		if (_.options.infinite === false) {
			max = _.slideCount;
		} else {
			breakPoint = _.options.slidesToScroll * -1;
			counter = _.options.slidesToScroll * -1;
			max = _.slideCount * 2;
		}

		while (breakPoint < max) {
			indexes.push(breakPoint);
			breakPoint = counter + _.options.slidesToScroll;
			counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
		}

		return indexes;

	};

	Slick.prototype.getSlick = function () {

		return this;

	};

	Slick.prototype.getSlideCount = function () {

		var _ = this,
			slidesTraversed, swipedSlide, centerOffset;

		centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

		if (_.options.swipeToSlide === true) {
			_.$slideTrack.find('.slick-slide').each(function (index, slide) {
				if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
					swipedSlide = slide;
					return false;
				}
			});

			slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

			return slidesTraversed;

		} else {
			return _.options.slidesToScroll;
		}

	};

	Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

		var _ = this;

		_.changeSlide({
			data: {
				message: 'index',
				index: parseInt(slide)
			}
		}, dontAnimate);

	};

	Slick.prototype.init = function (creation) {

		var _ = this;

		if (!$(_.$slider).hasClass('slick-initialized')) {

			$(_.$slider).addClass('slick-initialized');

			_.buildRows();
			_.buildOut();
			_.setProps();
			_.startLoad();
			_.loadSlider();
			_.initializeEvents();
			_.updateArrows();
			_.updateDots();
			_.checkResponsive(true);
			_.focusHandler();

		}

		if (creation) {
			_.$slider.trigger('init', [_]);
		}

		if (_.options.accessibility === true) {
			_.initADA();
		}

		if (_.options.autoplay) {

			_.paused = false;
			_.autoPlay();

		}

	};

	Slick.prototype.initADA = function () {
		var _ = this;
		_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
			'aria-hidden': 'true',
			'tabindex': '-1'
		}).find('a, input, button, select').attr({
			'tabindex': '-1'
		});

		_.$slideTrack.attr('role', 'listbox');

		_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
			$(this).attr({
				'role': 'option',
				'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
			});
		});

		if (_.$dots !== null) {
			_.$dots.attr('role', 'tablist').find('li').each(function (i) {
					$(this).attr({
						'role': 'presentation',
						'aria-selected': 'false',
						'aria-controls': 'navigation' + _.instanceUid + i + '',
						'id': 'slick-slide' + _.instanceUid + i + ''
					});
				})
				.first().attr('aria-selected', 'true').end()
				.find('button').attr('role', 'button').end()
				.closest('div').attr('role', 'toolbar');
		}
		_.activateADA();

	};

	Slick.prototype.initArrowEvents = function () {

		var _ = this;

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
			_.$prevArrow
				.off('click.slick')
				.on('click.slick', {
					message: 'previous'
				}, _.changeSlide);
			_.$nextArrow
				.off('click.slick')
				.on('click.slick', {
					message: 'next'
				}, _.changeSlide);
		}

	};

	Slick.prototype.initDotEvents = function () {

		var _ = this;

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
			$('li', _.$dots).on('click.slick', {
				message: 'index'
			}, _.changeSlide);
		}

		if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

			$('li', _.$dots)
				.on('mouseenter.slick', $.proxy(_.interrupt, _, true))
				.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

		}

	};

	Slick.prototype.initSlideEvents = function () {

		var _ = this;

		if (_.options.pauseOnHover) {

			_.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
			_.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

		}

	};

	Slick.prototype.initializeEvents = function () {

		var _ = this;

		_.initArrowEvents();

		_.initDotEvents();
		_.initSlideEvents();

		_.$list.on('touchstart.slick mousedown.slick', {
			action: 'start'
		}, _.swipeHandler);
		_.$list.on('touchmove.slick mousemove.slick', {
			action: 'move'
		}, _.swipeHandler);
		_.$list.on('touchend.slick mouseup.slick', {
			action: 'end'
		}, _.swipeHandler);
		_.$list.on('touchcancel.slick mouseleave.slick', {
			action: 'end'
		}, _.swipeHandler);

		_.$list.on('click.slick', _.clickHandler);

		$(document).on(_.visibilityChange, $.proxy(_.visibility, _));

		if (_.options.accessibility === true) {
			_.$list.on('keydown.slick', _.keyHandler);
		}

		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().on('click.slick', _.selectHandler);
		}

		$(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

		$(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

		$('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

		$(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
		$(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

	};

	Slick.prototype.initUI = function () {

		var _ = this;

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

			_.$prevArrow.show();
			_.$nextArrow.show();

		}

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

			_.$dots.show();

		}

	};

	Slick.prototype.keyHandler = function (event) {

		var _ = this;
		//Dont slide if the cursor is inside the form fields and arrow keys are pressed
		if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
			if (event.keyCode === 37 && _.options.accessibility === true) {
				_.changeSlide({
					data: {
						message: _.options.rtl === true ? 'next' : 'previous'
					}
				});
			} else if (event.keyCode === 39 && _.options.accessibility === true) {
				_.changeSlide({
					data: {
						message: _.options.rtl === true ? 'previous' : 'next'
					}
				});
			}
		}

	};

	Slick.prototype.lazyLoad = function () {

		var _ = this,
			loadRange, cloneRange, rangeStart, rangeEnd;

		function loadImages(imagesScope) {

			$('img[data-lazy]', imagesScope).each(function () {

				var image = $(this),
					imageSource = $(this).attr('data-lazy'),
					imageToLoad = document.createElement('img');

				imageToLoad.onload = function () {

					image
						.animate({
							opacity: 0
						}, 100, function () {
							image
								.attr('src', imageSource)
								.animate({
									opacity: 1
								}, 200, function () {
									image
										.removeAttr('data-lazy')
										.removeClass('slick-loading');
								});
							_.$slider.trigger('lazyLoaded', [_, image, imageSource]);
						});

				};

				imageToLoad.onerror = function () {

					image
						.removeAttr('data-lazy')
						.removeClass('slick-loading')
						.addClass('slick-lazyload-error');

					_.$slider.trigger('lazyLoadError', [_, image, imageSource]);

				};

				imageToLoad.src = imageSource;

			});

		}

		if (_.options.centerMode === true) {
			if (_.options.infinite === true) {
				rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
				rangeEnd = rangeStart + _.options.slidesToShow + 2;
			} else {
				rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
				rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
			}
		} else {
			rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
			rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
			if (_.options.fade === true) {
				if (rangeStart > 0) rangeStart--;
				if (rangeEnd <= _.slideCount) rangeEnd++;
			}
		}

		loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
		loadImages(loadRange);

		if (_.slideCount <= _.options.slidesToShow) {
			cloneRange = _.$slider.find('.slick-slide');
			loadImages(cloneRange);
		} else
		if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
			cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
			loadImages(cloneRange);
		} else if (_.currentSlide === 0) {
			cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
			loadImages(cloneRange);
		}

	};

	Slick.prototype.loadSlider = function () {

		var _ = this;

		_.setPosition();

		_.$slideTrack.css({
			opacity: 1
		});

		_.$slider.removeClass('slick-loading');

		_.initUI();

		if (_.options.lazyLoad === 'progressive') {
			_.progressiveLazyLoad();
		}

	};

	Slick.prototype.next = Slick.prototype.slickNext = function () {

		var _ = this;

		_.changeSlide({
			data: {
				message: 'next'
			}
		});

	};

	Slick.prototype.orientationChange = function () {

		var _ = this;

		_.checkResponsive();
		_.setPosition();

	};

	Slick.prototype.pause = Slick.prototype.slickPause = function () {

		var _ = this;

		_.autoPlayClear();
		_.paused = true;

	};

	Slick.prototype.play = Slick.prototype.slickPlay = function () {

		var _ = this;

		_.autoPlay();
		_.options.autoplay = true;
		_.paused = false;
		_.focussed = false;
		_.interrupted = false;

	};

	Slick.prototype.postSlide = function (index) {

		var _ = this;

		if (!_.unslicked) {

			_.$slider.trigger('afterChange', [_, index]);

			_.animating = false;

			_.setPosition();

			_.swipeLeft = null;

			if (_.options.autoplay) {
				_.autoPlay();
			}

			if (_.options.accessibility === true) {
				_.initADA();
			}

		}

	};

	Slick.prototype.prev = Slick.prototype.slickPrev = function () {

		var _ = this;

		_.changeSlide({
			data: {
				message: 'previous'
			}
		});

	};

	Slick.prototype.preventDefault = function (event) {

		event.preventDefault();

	};

	Slick.prototype.progressiveLazyLoad = function (tryCount) {

		tryCount = tryCount || 1;

		var _ = this,
			$imgsToLoad = $('img[data-lazy]', _.$slider),
			image,
			imageSource,
			imageToLoad;

		if ($imgsToLoad.length) {

			image = $imgsToLoad.first();
			imageSource = image.attr('data-lazy');
			imageToLoad = document.createElement('img');

			imageToLoad.onload = function () {

				image
					.attr('src', imageSource)
					.removeAttr('data-lazy')
					.removeClass('slick-loading');

				if (_.options.adaptiveHeight === true) {
					_.setPosition();
				}

				_.$slider.trigger('lazyLoaded', [_, image, imageSource]);
				_.progressiveLazyLoad();

			};

			imageToLoad.onerror = function () {

				if (tryCount < 3) {

					/**
					 * try to load the image 3 times,
					 * leave a slight delay so we don't get
					 * servers blocking the request.
					 */
					setTimeout(function () {
						_.progressiveLazyLoad(tryCount + 1);
					}, 500);

				} else {

					image
						.removeAttr('data-lazy')
						.removeClass('slick-loading')
						.addClass('slick-lazyload-error');

					_.$slider.trigger('lazyLoadError', [_, image, imageSource]);

					_.progressiveLazyLoad();

				}

			};

			imageToLoad.src = imageSource;

		} else {

			_.$slider.trigger('allImagesLoaded', [_]);

		}

	};

	Slick.prototype.refresh = function (initializing) {

		var _ = this,
			currentSlide, lastVisibleIndex;

		lastVisibleIndex = _.slideCount - _.options.slidesToShow;

		// in non-infinite sliders, we don't want to go past the
		// last visible index.
		if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
			_.currentSlide = lastVisibleIndex;
		}

		// if less slides than to show, go to start.
		if (_.slideCount <= _.options.slidesToShow) {
			_.currentSlide = 0;

		}

		currentSlide = _.currentSlide;

		_.destroy(true);

		$.extend(_, _.initials, {
			currentSlide: currentSlide
		});

		_.init();

		if (!initializing) {

			_.changeSlide({
				data: {
					message: 'index',
					index: currentSlide
				}
			}, false);

		}

	};

	Slick.prototype.registerBreakpoints = function () {

		var _ = this,
			breakpoint, currentBreakpoint, l,
			responsiveSettings = _.options.responsive || null;

		if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

			_.respondTo = _.options.respondTo || 'window';

			for (breakpoint in responsiveSettings) {

				l = _.breakpoints.length - 1;
				currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

				if (responsiveSettings.hasOwnProperty(breakpoint)) {

					// loop through the breakpoints and cut out any existing
					// ones with the same breakpoint number, we don't want dupes.
					while (l >= 0) {
						if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
							_.breakpoints.splice(l, 1);
						}
						l--;
					}

					_.breakpoints.push(currentBreakpoint);
					_.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

				}

			}

			_.breakpoints.sort(function (a, b) {
				return (_.options.mobileFirst) ? a - b : b - a;
			});

		}

	};

	Slick.prototype.reinit = function () {

		var _ = this;

		_.$slides =
			_.$slideTrack
			.children(_.options.slide)
			.addClass('slick-slide');

		_.slideCount = _.$slides.length;

		if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
			_.currentSlide = _.currentSlide - _.options.slidesToScroll;
		}

		if (_.slideCount <= _.options.slidesToShow) {
			_.currentSlide = 0;
		}

		_.registerBreakpoints();

		_.setProps();
		_.setupInfinite();
		_.buildArrows();
		_.updateArrows();
		_.initArrowEvents();
		_.buildDots();
		_.updateDots();
		_.initDotEvents();
		_.cleanUpSlideEvents();
		_.initSlideEvents();

		_.checkResponsive(false, true);

		if (_.options.focusOnSelect === true) {
			$(_.$slideTrack).children().on('click.slick', _.selectHandler);
		}

		_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

		_.setPosition();
		_.focusHandler();

		_.paused = !_.options.autoplay;
		_.autoPlay();

		_.$slider.trigger('reInit', [_]);

	};

	Slick.prototype.resize = function () {

		var _ = this;

		if ($(window).width() !== _.windowWidth) {
			clearTimeout(_.windowDelay);
			_.windowDelay = window.setTimeout(function () {
				_.windowWidth = $(window).width();
				_.checkResponsive();
				if (!_.unslicked) {
					_.setPosition();
				}
			}, 50);
		}
	};

	Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

		var _ = this;

		if (typeof (index) === 'boolean') {
			removeBefore = index;
			index = removeBefore === true ? 0 : _.slideCount - 1;
		} else {
			index = removeBefore === true ? --index : index;
		}

		if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
			return false;
		}

		_.unload();

		if (removeAll === true) {
			_.$slideTrack.children().remove();
		} else {
			_.$slideTrack.children(this.options.slide).eq(index).remove();
		}

		_.$slides = _.$slideTrack.children(this.options.slide);

		_.$slideTrack.children(this.options.slide).detach();

		_.$slideTrack.append(_.$slides);

		_.$slidesCache = _.$slides;

		_.reinit();

	};

	Slick.prototype.setCSS = function (position) {

		var _ = this,
			positionProps = {},
			x, y;

		if (_.options.rtl === true) {
			position = -position;
		}
		x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
		y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

		positionProps[_.positionProp] = position;

		if (_.transformsEnabled === false) {
			_.$slideTrack.css(positionProps);
		} else {
			positionProps = {};
			if (_.cssTransitions === false) {
				positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
				_.$slideTrack.css(positionProps);
			} else {
				positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
				_.$slideTrack.css(positionProps);
			}
		}

	};

	Slick.prototype.setDimensions = function () {

		var _ = this;

		if (_.options.vertical === false) {
			if (_.options.centerMode === true) {
				_.$list.css({
					padding: ('0px ' + _.options.centerPadding)
				});
			}
		} else {
			_.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
			if (_.options.centerMode === true) {
				_.$list.css({
					padding: (_.options.centerPadding + ' 0px')
				});
			}
		}

		_.listWidth = _.$list.width();
		_.listHeight = _.$list.height();


		if (_.options.vertical === false && _.options.variableWidth === false) {
			_.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
			_.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

		} else if (_.options.variableWidth === true) {
			_.$slideTrack.width(5000 * _.slideCount);
		} else {
			_.slideWidth = Math.ceil(_.listWidth);
			_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
		}

		var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
		if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

	};

	Slick.prototype.setFade = function () {

		var _ = this,
			targetLeft;

		_.$slides.each(function (index, element) {
			targetLeft = (_.slideWidth * index) * -1;
			if (_.options.rtl === true) {
				$(element).css({
					position: 'relative',
					right: targetLeft,
					top: 0,
					zIndex: _.options.zIndex - 2,
					opacity: 0
				});
			} else {
				$(element).css({
					position: 'relative',
					left: targetLeft,
					top: 0,
					zIndex: _.options.zIndex - 2,
					opacity: 0
				});
			}
		});

		_.$slides.eq(_.currentSlide).css({
			zIndex: _.options.zIndex - 1,
			opacity: 1
		});

	};

	Slick.prototype.setHeight = function () {

		var _ = this;

		if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
			var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
			_.$list.css('height', targetHeight);
		}

	};

	Slick.prototype.setOption =
		Slick.prototype.slickSetOption = function () {

			/**
			 * accepts arguments in format of:
			 *
			 *  - for changing a single option's value:
			 *     .slick("setOption", option, value, refresh )
			 *
			 *  - for changing a set of responsive options:
			 *     .slick("setOption", 'responsive', [{}, ...], refresh )
			 *
			 *  - for updating multiple values at once (not responsive)
			 *     .slick("setOption", { 'option': value, ... }, refresh )
			 */

			var _ = this,
				l, item, option, value, refresh = false,
				type;

			if ($.type(arguments[0]) === 'object') {

				option = arguments[0];
				refresh = arguments[1];
				type = 'multiple';

			} else if ($.type(arguments[0]) === 'string') {

				option = arguments[0];
				value = arguments[1];
				refresh = arguments[2];

				if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

					type = 'responsive';

				} else if (typeof arguments[1] !== 'undefined') {

					type = 'single';

				}

			}

			if (type === 'single') {

				_.options[option] = value;


			} else if (type === 'multiple') {

				$.each(option, function (opt, val) {

					_.options[opt] = val;

				});


			} else if (type === 'responsive') {

				for (item in value) {

					if ($.type(_.options.responsive) !== 'array') {

						_.options.responsive = [value[item]];

					} else {

						l = _.options.responsive.length - 1;

						// loop through the responsive object and splice out duplicates.
						while (l >= 0) {

							if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

								_.options.responsive.splice(l, 1);

							}

							l--;

						}

						_.options.responsive.push(value[item]);

					}

				}

			}

			if (refresh) {

				_.unload();
				_.reinit();

			}

		};

	Slick.prototype.setPosition = function () {

		var _ = this;

		_.setDimensions();

		_.setHeight();

		if (_.options.fade === false) {
			_.setCSS(_.getLeft(_.currentSlide));
		} else {
			_.setFade();
		}

		_.$slider.trigger('setPosition', [_]);

	};

	Slick.prototype.setProps = function () {

		var _ = this,
			bodyStyle = document.body.style;

		_.positionProp = _.options.vertical === true ? 'top' : 'left';

		if (_.positionProp === 'top') {
			_.$slider.addClass('slick-vertical');
		} else {
			_.$slider.removeClass('slick-vertical');
		}

		if (bodyStyle.WebkitTransition !== undefined ||
			bodyStyle.MozTransition !== undefined ||
			bodyStyle.msTransition !== undefined) {
			if (_.options.useCSS === true) {
				_.cssTransitions = true;
			}
		}

		if (_.options.fade) {
			if (typeof _.options.zIndex === 'number') {
				if (_.options.zIndex < 3) {
					_.options.zIndex = 3;
				}
			} else {
				_.options.zIndex = _.defaults.zIndex;
			}
		}

		if (bodyStyle.OTransform !== undefined) {
			_.animType = 'OTransform';
			_.transformType = '-o-transform';
			_.transitionType = 'OTransition';
			if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
		}
		if (bodyStyle.MozTransform !== undefined) {
			_.animType = 'MozTransform';
			_.transformType = '-moz-transform';
			_.transitionType = 'MozTransition';
			if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
		}
		if (bodyStyle.webkitTransform !== undefined) {
			_.animType = 'webkitTransform';
			_.transformType = '-webkit-transform';
			_.transitionType = 'webkitTransition';
			if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
		}
		if (bodyStyle.msTransform !== undefined) {
			_.animType = 'msTransform';
			_.transformType = '-ms-transform';
			_.transitionType = 'msTransition';
			if (bodyStyle.msTransform === undefined) _.animType = false;
		}
		if (bodyStyle.transform !== undefined && _.animType !== false) {
			_.animType = 'transform';
			_.transformType = 'transform';
			_.transitionType = 'transition';
		}
		_.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
	};


	Slick.prototype.setSlideClasses = function (index) {

		var _ = this,
			centerOffset, allSlides, indexOffset, remainder;

		allSlides = _.$slider
			.find('.slick-slide')
			.removeClass('slick-active slick-center slick-current')
			.attr('aria-hidden', 'true');

		_.$slides
			.eq(index)
			.addClass('slick-current');

		if (_.options.centerMode === true) {

			centerOffset = Math.floor(_.options.slidesToShow / 2);

			if (_.options.infinite === true) {

				if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

					_.$slides
						.slice(index - centerOffset, index + centerOffset + 1)
						.addClass('slick-active')
						.attr('aria-hidden', 'false');

				} else {

					indexOffset = _.options.slidesToShow + index;
					allSlides
						.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
						.addClass('slick-active')
						.attr('aria-hidden', 'false');

				}

				if (index === 0) {

					allSlides
						.eq(allSlides.length - 1 - _.options.slidesToShow)
						.addClass('slick-center');

				} else if (index === _.slideCount - 1) {

					allSlides
						.eq(_.options.slidesToShow)
						.addClass('slick-center');

				}

			}

			_.$slides
				.eq(index)
				.addClass('slick-center');

		} else {

			if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

				_.$slides
					.slice(index, index + _.options.slidesToShow)
					.addClass('slick-active')
					.attr('aria-hidden', 'false');

			} else if (allSlides.length <= _.options.slidesToShow) {

				allSlides
					.addClass('slick-active')
					.attr('aria-hidden', 'false');

			} else {

				remainder = _.slideCount % _.options.slidesToShow;
				indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

				if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

					allSlides
						.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
						.addClass('slick-active')
						.attr('aria-hidden', 'false');

				} else {

					allSlides
						.slice(indexOffset, indexOffset + _.options.slidesToShow)
						.addClass('slick-active')
						.attr('aria-hidden', 'false');

				}

			}

		}

		if (_.options.lazyLoad === 'ondemand') {
			_.lazyLoad();
		}

	};

	Slick.prototype.setupInfinite = function () {

		var _ = this,
			i, slideIndex, infiniteCount;

		if (_.options.fade === true) {
			_.options.centerMode = false;
		}

		if (_.options.infinite === true && _.options.fade === false) {

			slideIndex = null;

			if (_.slideCount > _.options.slidesToShow) {

				if (_.options.centerMode === true) {
					infiniteCount = _.options.slidesToShow + 1;
				} else {
					infiniteCount = _.options.slidesToShow;
				}

				for (i = _.slideCount; i > (_.slideCount -
						infiniteCount); i -= 1) {
					slideIndex = i - 1;
					$(_.$slides[slideIndex]).clone(true).attr('id', '')
						.attr('data-slick-index', slideIndex - _.slideCount)
						.prependTo(_.$slideTrack).addClass('slick-cloned');
				}
				for (i = 0; i < infiniteCount; i += 1) {
					slideIndex = i;
					$(_.$slides[slideIndex]).clone(true).attr('id', '')
						.attr('data-slick-index', slideIndex + _.slideCount)
						.appendTo(_.$slideTrack).addClass('slick-cloned');
				}
				_.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
					$(this).attr('id', '');
				});

			}

		}

	};

	Slick.prototype.interrupt = function (toggle) {

		var _ = this;

		if (!toggle) {
			_.autoPlay();
		}
		_.interrupted = toggle;

	};

	Slick.prototype.selectHandler = function (event) {

		var _ = this;

		var targetElement =
			$(event.target).is('.slick-slide') ?
			$(event.target) :
			$(event.target).parents('.slick-slide');

		var index = parseInt(targetElement.attr('data-slick-index'));

		if (!index) index = 0;

		if (_.slideCount <= _.options.slidesToShow) {

			_.setSlideClasses(index);
			_.asNavFor(index);
			return;

		}

		_.slideHandler(index);

	};

	Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

		var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
			_ = this,
			navTarget;

		sync = sync || false;

		if (_.animating === true && _.options.waitForAnimate === true) {
			return;
		}

		if (_.options.fade === true && _.currentSlide === index) {
			return;
		}

		if (_.slideCount <= _.options.slidesToShow) {
			return;
		}

		if (sync === false) {
			_.asNavFor(index);
		}

		targetSlide = index;
		targetLeft = _.getLeft(targetSlide);
		slideLeft = _.getLeft(_.currentSlide);

		_.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

		if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
			if (_.options.fade === false) {
				targetSlide = _.currentSlide;
				if (dontAnimate !== true) {
					_.animateSlide(slideLeft, function () {
						_.postSlide(targetSlide);
					});
				} else {
					_.postSlide(targetSlide);
				}
			}
			return;
		} else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
			if (_.options.fade === false) {
				targetSlide = _.currentSlide;
				if (dontAnimate !== true) {
					_.animateSlide(slideLeft, function () {
						_.postSlide(targetSlide);
					});
				} else {
					_.postSlide(targetSlide);
				}
			}
			return;
		}

		if (_.options.autoplay) {
			clearInterval(_.autoPlayTimer);
		}

		if (targetSlide < 0) {
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
			} else {
				animSlide = _.slideCount + targetSlide;
			}
		} else if (targetSlide >= _.slideCount) {
			if (_.slideCount % _.options.slidesToScroll !== 0) {
				animSlide = 0;
			} else {
				animSlide = targetSlide - _.slideCount;
			}
		} else {
			animSlide = targetSlide;
		}

		_.animating = true;

		_.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

		oldSlide = _.currentSlide;
		_.currentSlide = animSlide;

		_.setSlideClasses(_.currentSlide);

		if (_.options.asNavFor) {

			navTarget = _.getNavTarget();
			navTarget = navTarget.slick('getSlick');

			if (navTarget.slideCount <= navTarget.options.slidesToShow) {
				navTarget.setSlideClasses(_.currentSlide);
			}

		}

		_.updateDots();
		_.updateArrows();

		if (_.options.fade === true) {
			if (dontAnimate !== true) {

				_.fadeSlideOut(oldSlide);

				_.fadeSlide(animSlide, function () {
					_.postSlide(animSlide);
				});

			} else {
				_.postSlide(animSlide);
			}
			_.animateHeight();
			return;
		}

		if (dontAnimate !== true) {
			_.animateSlide(targetLeft, function () {
				_.postSlide(animSlide);
			});
		} else {
			_.postSlide(animSlide);
		}

	};

	Slick.prototype.startLoad = function () {

		var _ = this;

		if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

			_.$prevArrow.hide();
			_.$nextArrow.hide();

		}

		if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

			_.$dots.hide();

		}

		_.$slider.addClass('slick-loading');

	};

	Slick.prototype.swipeDirection = function () {

		var xDist, yDist, r, swipeAngle, _ = this;

		xDist = _.touchObject.startX - _.touchObject.curX;
		yDist = _.touchObject.startY - _.touchObject.curY;
		r = Math.atan2(yDist, xDist);

		swipeAngle = Math.round(r * 180 / Math.PI);
		if (swipeAngle < 0) {
			swipeAngle = 360 - Math.abs(swipeAngle);
		}

		if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
			return (_.options.rtl === false ? 'left' : 'right');
		}
		if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
			return (_.options.rtl === false ? 'left' : 'right');
		}
		if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
			return (_.options.rtl === false ? 'right' : 'left');
		}
		if (_.options.verticalSwiping === true) {
			if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
				return 'down';
			} else {
				return 'up';
			}
		}

		return 'vertical';

	};

	Slick.prototype.swipeEnd = function (event) {

		var _ = this,
			slideCount,
			direction;

		_.dragging = false;
		_.interrupted = false;
		_.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

		if (_.touchObject.curX === undefined) {
			return false;
		}

		if (_.touchObject.edgeHit === true) {
			_.$slider.trigger('edge', [_, _.swipeDirection()]);
		}

		if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

			direction = _.swipeDirection();

			switch (direction) {

				case 'left':
				case 'down':

					slideCount =
						_.options.swipeToSlide ?
						_.checkNavigable(_.currentSlide + _.getSlideCount()) :
						_.currentSlide + _.getSlideCount();

					_.currentDirection = 0;

					break;

				case 'right':
				case 'up':

					slideCount =
						_.options.swipeToSlide ?
						_.checkNavigable(_.currentSlide - _.getSlideCount()) :
						_.currentSlide - _.getSlideCount();

					_.currentDirection = 1;

					break;

				default:


			}

			if (direction != 'vertical') {

				_.slideHandler(slideCount);
				_.touchObject = {};
				_.$slider.trigger('swipe', [_, direction]);

			}

		} else {

			if (_.touchObject.startX !== _.touchObject.curX) {

				_.slideHandler(_.currentSlide);
				_.touchObject = {};

			}

		}

	};

	Slick.prototype.swipeHandler = function (event) {

		var _ = this;

		if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
			return;
		} else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
			return;
		}

		_.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
			event.originalEvent.touches.length : 1;

		_.touchObject.minSwipe = _.listWidth / _.options
			.touchThreshold;

		if (_.options.verticalSwiping === true) {
			_.touchObject.minSwipe = _.listHeight / _.options
				.touchThreshold;
		}

		switch (event.data.action) {

			case 'start':
				_.swipeStart(event);
				break;

			case 'move':
				_.swipeMove(event);
				break;

			case 'end':
				_.swipeEnd(event);
				break;

		}

	};

	Slick.prototype.swipeMove = function (event) {

		var _ = this,
			edgeWasHit = false,
			curLeft, swipeDirection, swipeLength, positionOffset, touches;

		touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

		if (!_.dragging || touches && touches.length !== 1) {
			return false;
		}

		curLeft = _.getLeft(_.currentSlide);

		_.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
		_.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

		_.touchObject.swipeLength = Math.round(Math.sqrt(
			Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

		if (_.options.verticalSwiping === true) {
			_.touchObject.swipeLength = Math.round(Math.sqrt(
				Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
		}

		swipeDirection = _.swipeDirection();

		if (swipeDirection === 'vertical') {
			return;
		}

		if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
			event.preventDefault();
		}

		positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
		if (_.options.verticalSwiping === true) {
			positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
		}


		swipeLength = _.touchObject.swipeLength;

		_.touchObject.edgeHit = false;

		if (_.options.infinite === false) {
			if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
				swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
				_.touchObject.edgeHit = true;
			}
		}

		if (_.options.vertical === false) {
			_.swipeLeft = curLeft + swipeLength * positionOffset;
		} else {
			_.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
		}
		if (_.options.verticalSwiping === true) {
			_.swipeLeft = curLeft + swipeLength * positionOffset;
		}

		if (_.options.fade === true || _.options.touchMove === false) {
			return false;
		}

		if (_.animating === true) {
			_.swipeLeft = null;
			return false;
		}

		_.setCSS(_.swipeLeft);

	};

	Slick.prototype.swipeStart = function (event) {

		var _ = this,
			touches;

		_.interrupted = true;

		if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
			_.touchObject = {};
			return false;
		}

		if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
			touches = event.originalEvent.touches[0];
		}

		_.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
		_.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

		_.dragging = true;

	};

	Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

		var _ = this;

		if (_.$slidesCache !== null) {

			_.unload();

			_.$slideTrack.children(this.options.slide).detach();

			_.$slidesCache.appendTo(_.$slideTrack);

			_.reinit();

		}

	};

	Slick.prototype.unload = function () {

		var _ = this;

		$('.slick-cloned', _.$slider).remove();

		if (_.$dots) {
			_.$dots.remove();
		}

		if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
			_.$prevArrow.remove();
		}

		if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
			_.$nextArrow.remove();
		}

		_.$slides
			.removeClass('slick-slide slick-active slick-visible slick-current')
			.attr('aria-hidden', 'true')
			.css('width', '');

	};

	Slick.prototype.unslick = function (fromBreakpoint) {

		var _ = this;
		_.$slider.trigger('unslick', [_, fromBreakpoint]);
		_.destroy();

	};

	Slick.prototype.updateArrows = function () {

		var _ = this,
			centerOffset;

		centerOffset = Math.floor(_.options.slidesToShow / 2);

		if (_.options.arrows === true &&
			_.slideCount > _.options.slidesToShow &&
			!_.options.infinite) {

			_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
			_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

			if (_.currentSlide === 0) {

				_.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
				_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

			} else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

				_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
				_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

			} else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

				_.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
				_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

			}

		}

	};

	Slick.prototype.updateDots = function () {

		var _ = this;

		if (_.$dots !== null) {

			_.$dots
				.find('li')
				.removeClass('slick-active')
				.attr('aria-hidden', 'true');

			_.$dots
				.find('li')
				.eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
				.addClass('slick-active')
				.attr('aria-hidden', 'false');

		}

	};

	Slick.prototype.visibility = function () {

		var _ = this;

		if (_.options.autoplay) {

			if (document[_.hidden]) {

				_.interrupted = true;

			} else {

				_.interrupted = false;

			}

		}

	};

	$.fn.slick = function () {
		var _ = this,
			opt = arguments[0],
			args = Array.prototype.slice.call(arguments, 1),
			l = _.length,
			i,
			ret;
		for (i = 0; i < l; i++) {
			if (typeof opt == 'object' || typeof opt == 'undefined')
				_[i].slick = new Slick(_[i], opt);
			else
				ret = _[i].slick[opt].apply(_[i].slick, args);
			if (typeof ret != 'undefined') return ret;
		}
		return _;
	};

}));;
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		define("bloodhound", ["jquery"], function (a0) {
			return root["Bloodhound"] = factory(a0);
		});
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"));
	} else {
		root["Bloodhound"] = factory(jQuery);
	}
})(this, function ($) {
	var _ = function () {
		"use strict";
		return {
			isMsie: function () {
				return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
			},
			isBlankString: function (str) {
				return !str || /^\s*$/.test(str);
			},
			escapeRegExChars: function (str) {
				return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			},
			isString: function (obj) {
				return typeof obj === "string";
			},
			isNumber: function (obj) {
				return typeof obj === "number";
			},
			isArray: $.isArray,
			isFunction: $.isFunction,
			isObject: $.isPlainObject,
			isUndefined: function (obj) {
				return typeof obj === "undefined";
			},
			isElement: function (obj) {
				return !!(obj && obj.nodeType === 1);
			},
			isJQuery: function (obj) {
				return obj instanceof $;
			},
			toStr: function toStr(s) {
				return _.isUndefined(s) || s === null ? "" : s + "";
			},
			bind: $.proxy,
			each: function (collection, cb) {
				$.each(collection, reverseArgs);

				function reverseArgs(index, value) {
					return cb(value, index);
				}
			},
			map: $.map,
			filter: $.grep,
			every: function (obj, test) {
				var result = true;
				if (!obj) {
					return result;
				}
				$.each(obj, function (key, val) {
					if (!(result = test.call(null, val, key, obj))) {
						return false;
					}
				});
				return !!result;
			},
			some: function (obj, test) {
				var result = false;
				if (!obj) {
					return result;
				}
				$.each(obj, function (key, val) {
					if (result = test.call(null, val, key, obj)) {
						return false;
					}
				});
				return !!result;
			},
			mixin: $.extend,
			identity: function (x) {
				return x;
			},
			clone: function (obj) {
				return $.extend(true, {}, obj);
			},
			getIdGenerator: function () {
				var counter = 0;
				return function () {
					return counter++;
				};
			},
			templatify: function templatify(obj) {
				return $.isFunction(obj) ? obj : template;

				function template() {
					return String(obj);
				}
			},
			defer: function (fn) {
				setTimeout(fn, 0);
			},
			debounce: function (func, wait, immediate) {
				var timeout, result;
				return function () {
					var context = this,
						args = arguments,
						later, callNow;
					later = function () {
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
			throttle: function (func, wait) {
				var context, args, timeout, result, previous, later;
				previous = 0;
				later = function () {
					previous = new Date();
					timeout = null;
					result = func.apply(context, args);
				};
				return function () {
					var now = new Date(),
						remaining = wait - (now - previous);
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
			stringify: function (val) {
				return _.isString(val) ? val : JSON.stringify(val);
			},
			noop: function () {}
		};
	}();
	var VERSION = "0.11.1";
	var tokenizers = function () {
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
			return function setKey(keys) {
				keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
				return function tokenize(o) {
					var tokens = [];
					_.each(keys, function (k) {
						tokens = tokens.concat(tokenizer(_.toStr(o[k])));
					});
					return tokens;
				};
			};
		}
	}();
	var LruCache = function () {
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
				var tailItem = this.list.tail,
					node;
				if (this.size >= this.maxSize) {

					this.list.remove(tailItem);
					delete this.hash[tailItem.key];
					this.size--;
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
			moveToFront: function (node) {
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
	var PersistentStorage = function () {
		"use strict";
		var LOCAL_STORAGE;
		try {
			LOCAL_STORAGE = window.localStorage;
			LOCAL_STORAGE.setItem("~~~", "!");
			LOCAL_STORAGE.removeItem("~~~");
		} catch (err) {
			LOCAL_STORAGE = null;
		}

		function PersistentStorage(namespace, override) {
			this.prefix = ["__", namespace, "__"].join("");
			this.ttlKey = "__ttl__";
			this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
			this.ls = override || LOCAL_STORAGE;
			!this.ls && this._noop();
		}
		_.mixin(PersistentStorage.prototype, {
			_prefix: function (key) {
				return this.prefix + key;
			},
			_ttlKey: function (key) {
				return this._prefix(key) + this.ttlKey;
			},
			_noop: function () {
				this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
			},
			_safeSet: function (key, val) {
				try {
					this.ls.setItem(key, val);
				} catch (err) {
					if (err.name === "QuotaExceededError") {
						this.clear();
						this._noop();
					}
				}
			},
			get: function (key) {
				if (this.isExpired(key)) {
					this.remove(key);
				}
				return decode(this.ls.getItem(this._prefix(key)));
			},
			set: function (key, val, ttl) {
				if (_.isNumber(ttl)) {
					this._safeSet(this._ttlKey(key), encode(now() + ttl));
				} else {
					this.ls.removeItem(this._ttlKey(key));
				}
				return this._safeSet(this._prefix(key), encode(val));
			},
			remove: function (key) {
				this.ls.removeItem(this._ttlKey(key));
				this.ls.removeItem(this._prefix(key));
				return this;
			},
			clear: function () {
				var i, keys = gatherMatchingKeys(this.keyMatcher);
				for (i = keys.length; i--;) {
					this.remove(keys[i]);
				}
				return this;
			},
			isExpired: function (key) {
				var ttl = decode(this.ls.getItem(this._ttlKey(key)));
				return _.isNumber(ttl) && now() > ttl ? true : false;
			}
		});
		return PersistentStorage;

		function now() {
			return new Date().getTime();
		}

		function encode(val) {
			return JSON.stringify(_.isUndefined(val) ? null : val);
		}

		function decode(val) {
			return $.parseJSON(val);
		}

		function gatherMatchingKeys(keyMatcher) {
			var i, key, keys = [],
				len = LOCAL_STORAGE.length;
			for (i = 0; i < len; i++) {
				if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
					keys.push(key.replace(keyMatcher, ""));
				}
			}
			return keys;
		}
	}();
	var Transport = function () {
		"use strict";
		var pendingRequestsCount = 0,
			pendingRequests = {},
			maxPendingRequests = 6,
			sharedCache = new LruCache(10);

		function Transport(o) {
			o = o || {};
			this.cancelled = false;
			this.lastReq = null;
			this._send = o.transport;
			this._get = o.limiter ? o.limiter(this._get) : this._get;
			this._cache = o.cache === false ? new LruCache(0) : sharedCache;
		}
		Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
			maxPendingRequests = num;
		};
		Transport.resetCache = function resetCache() {
			sharedCache.reset();
		};
		_.mixin(Transport.prototype, {
			_fingerprint: function fingerprint(o) {
				o = o || {};
				return o.url + o.type + $.param(o.data || {});
			},
			_get: function (o, cb) {
				var that = this,
					fingerprint, jqXhr;
				fingerprint = this._fingerprint(o);
				if (this.cancelled || fingerprint !== this.lastReq) {
					return;
				}
				if (jqXhr = pendingRequests[fingerprint]) {
					jqXhr.done(done).fail(fail);
				} else if (pendingRequestsCount < maxPendingRequests) {
					pendingRequestsCount++;
					pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
				} else {
					this.onDeckRequestArgs = [].slice.call(arguments, 0);
				}

				function done(resp) {
					cb(null, resp);
					that._cache.set(fingerprint, resp);
				}

				function fail() {
					cb(true);
				}

				function always() {
					pendingRequestsCount--;
					delete pendingRequests[fingerprint];
					if (that.onDeckRequestArgs) {
						that._get.apply(that, that.onDeckRequestArgs);
						that.onDeckRequestArgs = null;
					}
				}
			},
			get: function (o, cb) {
				var resp, fingerprint;
				cb = cb || $.noop;
				o = _.isString(o) ? {
					url: o
				} : o || {};
				fingerprint = this._fingerprint(o);
				this.cancelled = false;
				this.lastReq = fingerprint;
				if (resp = this._cache.get(fingerprint)) {
					cb(null, resp);
				} else {
					this._get(o, cb);
				}
			},
			cancel: function () {
				this.cancelled = true;
			}
		});
		return Transport;
	}();
	var SearchIndex = window.SearchIndex = function () {
		"use strict";
		var CHILDREN = "c",
			IDS = "i";

		function SearchIndex(o) {
			o = o || {};
			if (!o.datumTokenizer || !o.queryTokenizer) {
				$.error("datumTokenizer and queryTokenizer are both required");
			}
			this.identify = o.identify || _.stringify;
			this.datumTokenizer = o.datumTokenizer;
			this.queryTokenizer = o.queryTokenizer;
			this.reset();
		}
		_.mixin(SearchIndex.prototype, {
			bootstrap: function bootstrap(o) {
				this.datums = o.datums;
				this.trie = o.trie;
			},
			add: function (data) {
				var that = this;
				data = _.isArray(data) ? data : [data];
				_.each(data, function (datum) {
					var id, tokens;
					that.datums[id = that.identify(datum)] = datum;
					tokens = normalizeTokens(that.datumTokenizer(datum));
					_.each(tokens, function (token) {
						var node, chars, ch;
						node = that.trie;
						chars = token.split("");
						while (ch = chars.shift()) {
							node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
							node[IDS].push(id);
						}
					});
				});
			},
			get: function get(ids) {
				var that = this;
				return _.map(ids, function (id) {
					return that.datums[id];
				});
			},
			search: function search(query) {
				var that = this,
					tokens, matches;
				tokens = normalizeTokens(this.queryTokenizer(query));
				_.each(tokens, function (token) {
					var node, chars, ch, ids;
					if (matches && matches.length === 0) {
						return false;
					}
					node = that.trie;
					chars = token.split("");
					while (node && (ch = chars.shift())) {
						node = node[CHILDREN][ch];
					}
					if (node && chars.length === 0) {
						ids = node[IDS].slice(0);
						matches = matches ? getIntersection(matches, ids) : ids;
					} else {
						matches = [];
						return false;
					}
				});
				return matches ? _.map(unique(matches), function (id) {
					return that.datums[id];
				}) : [];
			},
			all: function all() {
				var values = [];
				for (var key in this.datums) {
					values.push(this.datums[key]);
				}
				return values;
			},
			reset: function reset() {
				this.datums = {};
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
			tokens = _.filter(tokens, function (token) {
				return !!token;
			});
			tokens = _.map(tokens, function (token) {
				return token.toLowerCase();
			});
			return tokens;
		}

		function newNode() {
			var node = {};
			node[IDS] = [];
			node[CHILDREN] = {};
			return node;
		}

		function unique(array) {
			var seen = {},
				uniques = [];
			for (var i = 0, len = array.length; i < len; i++) {
				if (!seen[array[i]]) {
					seen[array[i]] = true;
					uniques.push(array[i]);
				}
			}
			return uniques;
		}

		function getIntersection(arrayA, arrayB) {
			var ai = 0,
				bi = 0,
				intersection = [];
			arrayA = arrayA.sort();
			arrayB = arrayB.sort();
			var lenArrayA = arrayA.length,
				lenArrayB = arrayB.length;
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
		}
	}();
	var Prefetch = function () {
		"use strict";
		var keys;
		keys = {
			data: "data",
			protocol: "protocol",
			thumbprint: "thumbprint"
		};

		function Prefetch(o) {
			this.url = o.url;
			this.ttl = o.ttl;
			this.cache = o.cache;
			this.prepare = o.prepare;
			this.transform = o.transform;
			this.transport = o.transport;
			this.thumbprint = o.thumbprint;
			this.storage = new PersistentStorage(o.cacheKey);
		}
		_.mixin(Prefetch.prototype, {
			_settings: function settings() {
				return {
					url: this.url,
					type: "GET",
					dataType: "json"
				};
			},
			store: function store(data) {
				if (!this.cache) {
					return;
				}
				this.storage.set(keys.data, data, this.ttl);
				this.storage.set(keys.protocol, location.protocol, this.ttl);
				this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
			},
			fromCache: function fromCache() {
				var stored = {},
					isExpired;
				if (!this.cache) {
					return null;
				}
				stored.data = this.storage.get(keys.data);
				stored.protocol = this.storage.get(keys.protocol);
				stored.thumbprint = this.storage.get(keys.thumbprint);
				isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
				return stored.data && !isExpired ? stored.data : null;
			},
			fromNetwork: function (cb) {
				var that = this,
					settings;
				if (!cb) {
					return;
				}
				settings = this.prepare(this._settings());
				this.transport(settings).fail(onError).done(onResponse);

				function onError() {
					cb(true);
				}

				function onResponse(resp) {
					cb(null, that.transform(resp));
				}
			},
			clear: function clear() {
				this.storage.clear();
				return this;
			}
		});
		return Prefetch;
	}();
	var Remote = function () {
		"use strict";

		function Remote(o) {
			this.url = o.url;
			this.prepare = o.prepare;
			this.transform = o.transform;
			this.transport = new Transport({
				cache: o.cache,
				limiter: o.limiter,
				transport: o.transport
			});
		}
		_.mixin(Remote.prototype, {
			_settings: function settings() {
				return {
					url: this.url,
					type: "GET",
					dataType: "json"
				};
			},
			get: function get(query, cb) {
				var that = this,
					settings;
				if (!cb) {
					return;
				}
				query = query || "";
				settings = this.prepare(query, this._settings());
				return this.transport.get(settings, onResponse);

				function onResponse(err, resp) {
					err ? cb([]) : cb(that.transform(resp));
				}
			},
			cancelLastRequest: function cancelLastRequest() {
				this.transport.cancel();
			}
		});
		return Remote;
	}();
	var oParser = function () {
		"use strict";
		return function parse(o) {
			var defaults, sorter;
			defaults = {
				initialize: true,

				identify: _.stringify,
				datumTokenizer: null,
				queryTokenizer: null,
				sufficient: 5,
				sorter: null,
				local: [],
				prefetch: null,
				remote: null
			};
			o = _.mixin(defaults, o || {});
			!o.datumTokenizer && $.error("datumTokenizer is required");
			!o.queryTokenizer && $.error("queryTokenizer is required");
			sorter = o.sorter;
			o.sorter = sorter ? function (x) {
				return x.sort(sorter);
			} : _.identity;
			o.local = _.isFunction(o.local) ? o.local() : o.local;
			o.prefetch = parsePrefetch(o.prefetch);
			o.remote = parseRemote(o.remote);
			return o;
		};

		function parsePrefetch(o) {
			var defaults;
			if (!o) {
				return null;
			}
			defaults = {
				url: null,
				ttl: 24 * 60 * 60 * 1e3,
				cache: true,
				cacheKey: null,
				thumbprint: "",
				prepare: _.identity,
				transform: _.identity,
				transport: null
			};
			o = _.isString(o) ? {
				url: o
			} : o;
			o = _.mixin(defaults, o);
			!o.url && $.error("prefetch requires url to be set");
			o.transform = o.filter || o.transform;
			o.cacheKey = o.cacheKey || o.url;
			o.thumbprint = VERSION + o.thumbprint;
			o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
			return o;
		}

		function parseRemote(o) {
			var defaults;
			if (!o) {
				return;
			}
			defaults = {
				url: null,
				cache: true,
				prepare: null,
				replace: null,
				wildcard: null,
				limiter: null,
				rateLimitBy: "debounce",
				rateLimitWait: 300,
				transform: _.identity,
				transport: null
			};
			o = _.isString(o) ? {
				url: o
			} : o;
			o = _.mixin(defaults, o);
			!o.url && $.error("remote requires url to be set");
			o.transform = o.filter || o.transform;
			o.prepare = toRemotePrepare(o);
			o.limiter = toLimiter(o);
			o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
			delete o.replace;
			delete o.wildcard;
			delete o.rateLimitBy;
			delete o.rateLimitWait;
			return o;
		}

		function toRemotePrepare(o) {
			var prepare, replace, wildcard;
			prepare = o.prepare;
			replace = o.replace;
			wildcard = o.wildcard;
			if (prepare) {
				return prepare;
			}
			if (replace) {
				prepare = prepareByReplace;
			} else if (o.wildcard) {
				prepare = prepareByWildcard;
			} else {
				prepare = idenityPrepare;
			}
			return prepare;

			function prepareByReplace(query, settings) {
				settings.url = replace(settings.url, query);
				return settings;
			}

			function prepareByWildcard(query, settings) {
				settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
				return settings;
			}

			function idenityPrepare(query, settings) {
				return settings;
			}
		}

		function toLimiter(o) {
			var limiter, method, wait;
			limiter = o.limiter;
			method = o.rateLimitBy;
			wait = o.rateLimitWait;
			if (!limiter) {
				limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
			}
			return limiter;

			function debounce(wait) {
				return function debounce(fn) {
					return _.debounce(fn, wait);
				};
			}

			function throttle(wait) {
				return function throttle(fn) {
					return _.throttle(fn, wait);
				};
			}
		}

		function callbackToDeferred(fn) {
			return function wrapper(o) {
				var deferred = $.Deferred();
				fn(o, onSuccess, onError);
				return deferred;

				function onSuccess(resp) {
					_.defer(function () {
						deferred.resolve(resp);
					});
				}

				function onError(err) {
					_.defer(function () {
						deferred.reject(err);
					});
				}
			};
		}
	}();
	var Bloodhound = function () {
		"use strict";
		var old;
		old = window && window.Bloodhound;

		function Bloodhound(o) {
			o = oParser(o);
			this.sorter = o.sorter;
			this.identify = o.identify;
			this.sufficient = o.sufficient;
			this.local = o.local;
			this.remote = o.remote ? new Remote(o.remote) : null;
			this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
			this.index = new SearchIndex({
				identify: this.identify,
				datumTokenizer: o.datumTokenizer,
				queryTokenizer: o.queryTokenizer
			});
			o.initialize !== false && this.initialize();
		}
		Bloodhound.noConflict = function noConflict() {
			window && (window.Bloodhound = old);
			return Bloodhound;
		};
		Bloodhound.tokenizers = tokenizers;
		_.mixin(Bloodhound.prototype, {
			__ttAdapter: function ttAdapter() {
				var that = this;
				return this.remote ? withAsync : withoutAsync;

				function withAsync(query, sync, async) {
					return that.search(query, sync, async);
				}

				function withoutAsync(query, sync) {
					return that.search(query, sync);
				}
			},
			_loadPrefetch: function loadPrefetch() {
				var that = this,
					deferred, serialized;
				deferred = $.Deferred();
				if (!this.prefetch) {
					deferred.resolve();
				} else if (serialized = this.prefetch.fromCache()) {
					this.index.bootstrap(serialized);
					deferred.resolve();
				} else {
					this.prefetch.fromNetwork(done);
				}
				return deferred.promise();

				function done(err, data) {
					if (err) {
						return deferred.reject();
					}
					that.add(data);
					that.prefetch.store(that.index.serialize());
					deferred.resolve();
				}
			},
			_initialize: function initialize() {
				var that = this,
					deferred;
				this.clear();
				(this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
				return this.initPromise;

				function addLocalToIndex() {
					that.add(that.local);
				}
			},
			initialize: function initialize(force) {
				return !this.initPromise || force ? this._initialize() : this.initPromise;
			},
			add: function add(data) {
				this.index.add(data);
				return this;
			},
			get: function get(ids) {
				ids = _.isArray(ids) ? ids : [].slice.call(arguments);
				return this.index.get(ids);
			},
			search: function search(query, sync, async) {
				var that = this,
					local;
				local = this.sorter(this.index.search(query));
				sync(this.remote ? local.slice() : local);
				if (this.remote && local.length < this.sufficient) {
					this.remote.get(query, processRemote);
				} else if (this.remote) {
					this.remote.cancelLastRequest();
				}
				return this;

				function processRemote(remote) {
					var nonDuplicates = [];
					_.each(remote, function (r) {
						!_.some(local, function (l) {
							return that.identify(r) === that.identify(l);
						}) && nonDuplicates.push(r);
					});
					async && async(nonDuplicates);
				}
			},
			all: function all() {
				return this.index.all();
			},
			clear: function clear() {
				this.index.reset();
				return this;
			},
			clearPrefetchCache: function clearPrefetchCache() {
				this.prefetch && this.prefetch.clear();
				return this;
			},
			clearRemoteCache: function clearRemoteCache() {
				Transport.resetCache();
				return this;
			},
			ttAdapter: function ttAdapter() {
				return this.__ttAdapter();
			}
		});
		return Bloodhound;
	}();
	return Bloodhound;
});

(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		define("typeahead.js", ["jquery"], function (a0) {
			return factory(a0);
		});
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"));
	} else {
		factory(jQuery);
	}
})(this, function ($) {
	var _ = function () {
		"use strict";
		return {
			isMsie: function () {
				return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
			},
			isBlankString: function (str) {
				return !str || /^\s*$/.test(str);
			},
			escapeRegExChars: function (str) {
				return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			},
			isString: function (obj) {
				return typeof obj === "string";
			},
			isNumber: function (obj) {
				return typeof obj === "number";
			},
			isArray: $.isArray,
			isFunction: $.isFunction,
			isObject: $.isPlainObject,
			isUndefined: function (obj) {
				return typeof obj === "undefined";
			},
			isElement: function (obj) {
				return !!(obj && obj.nodeType === 1);
			},
			isJQuery: function (obj) {
				return obj instanceof $;
			},
			toStr: function toStr(s) {
				return _.isUndefined(s) || s === null ? "" : s + "";
			},
			bind: $.proxy,
			each: function (collection, cb) {
				$.each(collection, reverseArgs);

				function reverseArgs(index, value) {
					return cb(value, index);
				}
			},
			map: $.map,
			filter: $.grep,
			every: function (obj, test) {
				var result = true;
				if (!obj) {
					return result;
				}
				$.each(obj, function (key, val) {
					if (!(result = test.call(null, val, key, obj))) {
						return false;
					}
				});
				return !!result;
			},
			some: function (obj, test) {
				var result = false;
				if (!obj) {
					return result;
				}
				$.each(obj, function (key, val) {
					if (result = test.call(null, val, key, obj)) {
						return false;
					}
				});
				return !!result;
			},
			mixin: $.extend,
			identity: function (x) {
				return x;
			},
			clone: function (obj) {
				return $.extend(true, {}, obj);
			},
			getIdGenerator: function () {
				var counter = 0;
				return function () {
					return counter++;
				};
			},
			templatify: function templatify(obj) {
				return $.isFunction(obj) ? obj : template;

				function template() {
					return String(obj);
				}
			},
			defer: function (fn) {
				setTimeout(fn, 0);
			},
			debounce: function (func, wait, immediate) {
				var timeout, result;
				return function () {
					var context = this,
						args = arguments,
						later, callNow;
					later = function () {
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
			throttle: function (func, wait) {
				var context, args, timeout, result, previous, later;
				previous = 0;
				later = function () {
					previous = new Date();
					timeout = null;
					result = func.apply(context, args);
				};
				return function () {
					var now = new Date(),
						remaining = wait - (now - previous);
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
			stringify: function (val) {
				return _.isString(val) ? val : JSON.stringify(val);
			},
			noop: function () {}
		};
	}();
	var WWW = function () {
		"use strict";
		var defaultClassNames = {
			wrapper: "twitter-typeahead",
			input: "tt-input",
			hint: "tt-hint",
			menu: "tt-menu",
			dataset: "tt-dataset",
			suggestion: "tt-suggestion",
			selectable: "tt-selectable",
			empty: "tt-empty",
			open: "tt-open",
			cursor: "tt-cursor",
			highlight: "tt-highlight"
		};
		return build;

		function build(o) {
			var www, classes;
			classes = _.mixin({}, defaultClassNames, o);
			www = {
				css: buildCss(),
				classes: classes,
				html: buildHtml(classes),
				selectors: buildSelectors(classes)
			};
			return {
				css: www.css,
				html: www.html,
				classes: www.classes,
				selectors: www.selectors,
				mixin: function (o) {
					_.mixin(o, www);
				}
			};
		}

		function buildHtml(c) {
			return {
				wrapper: '<span class="' + c.wrapper + '"></span>',
				menu: '<div class="' + c.menu + '"></div>'
			};
		}

		function buildSelectors(classes) {
			var selectors = {};
			_.each(classes, function (v, k) {
				selectors[k] = "." + v;
			});
			return selectors;
		}

		function buildCss() {
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
				menu: {
					position: "absolute",
					top: "100%",
					left: "0",
					zIndex: "100",
					display: "none"
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
			return css;
		}
	}();
	var EventBus = function () {
		"use strict";
		var namespace, deprecationMap;
		namespace = "typeahead:";
		deprecationMap = {
			render: "rendered",
			cursorchange: "cursorchanged",
			select: "selected",
			autocomplete: "autocompleted"
		};

		function EventBus(o) {
			if (!o || !o.el) {
				$.error("EventBus initialized without el");
			}
			this.$el = $(o.el);
		}
		_.mixin(EventBus.prototype, {
			_trigger: function (type, args) {
				var $e;
				$e = $.Event(namespace + type);
				(args = args || []).unshift($e);
				this.$el.trigger.apply(this.$el, args);
				return $e;
			},
			before: function (type) {
				var args, $e;
				args = [].slice.call(arguments, 1);
				$e = this._trigger("before" + type, args);
				return $e.isDefaultPrevented();
			},
			trigger: function (type) {
				var deprecatedType;
				this._trigger(type, [].slice.call(arguments, 1));
				if (deprecatedType = deprecationMap[type]) {
					this._trigger(deprecatedType, [].slice.call(arguments, 1));
				}
			}
		});
		return EventBus;
	}();
	var EventEmitter = function () {
		"use strict";
		var splitter = /\s+/,
			nextTick = getNextTick();
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
					setImmediate(function () {
						fn();
					});
				};
			} else {
				nextTickFn = function nextTickSetTimeout(fn) {
					setTimeout(function () {
						fn();
					}, 0);
				};
			}
			return nextTickFn;
		}

		function bindContext(fn, context) {
			return fn.bind ? fn.bind(context) : function () {
				fn.apply(context, [].slice.call(arguments, 0));
			};
		}
	}();
	var highlight = function (doc) {
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
			var escapedPatterns = [],
				regexStr;
			for (var i = 0, len = patterns.length; i < len; i++) {
				escapedPatterns.push(_.escapeRegExChars(patterns[i]));
			}
			regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
			return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
		}
	}(window.document);
	var Input = function () {
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

		function Input(o, www) {
			o = o || {};
			if (!o.input) {
				$.error("input is missing");
			}
			www.mixin(this);
			this.$hint = $(o.hint);
			this.$input = $(o.input);
			this.query = this.$input.val();
			this.queryWhenFocused = this.hasFocus() ? this.query : null;
			this.$overflowHelper = buildOverflowHelper(this.$input);
			this._checkLanguageDirection();
			if (this.$hint.length === 0) {
				this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
			}
		}
		Input.normalizeQuery = function (str) {
			return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
		};
		_.mixin(Input.prototype, EventEmitter, {
			_onBlur: function onBlur() {
				this.resetInputValue();
				this.trigger("blurred");
			},
			_onFocus: function onFocus() {
				this.queryWhenFocused = this.query;
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
				this._setQuery(this.getInputValue());
				this.clearHintIfInvalid();
				this._checkLanguageDirection();
			},
			_managePreventDefault: function managePreventDefault(keyName, $e) {
				var preventDefault;
				switch (keyName) {
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
			_checkLanguageDirection: function checkLanguageDirection() {
				var dir = (this.$input.css("direction") || "ltr").toLowerCase();
				if (this.dir !== dir) {
					this.dir = dir;
					this.$hint.attr("dir", dir);
					this.trigger("langDirChanged", dir);
				}
			},
			_setQuery: function setQuery(val, silent) {
				var areEquivalent, hasDifferentWhitespace;
				areEquivalent = areQueriesEquivalent(val, this.query);
				hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
				this.query = val;
				if (!silent && !areEquivalent) {
					this.trigger("queryChanged", this.query);
				} else if (!silent && hasDifferentWhitespace) {
					this.trigger("whitespaceChanged", this.query);
				}
			},
			bind: function () {
				var that = this,
					onBlur, onFocus, onKeydown, onInput;
				onBlur = _.bind(this._onBlur, this);
				onFocus = _.bind(this._onFocus, this);
				onKeydown = _.bind(this._onKeydown, this);
				onInput = _.bind(this._onInput, this);
				this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
				if (!_.isMsie() || _.isMsie() > 9) {
					this.$input.on("input.tt", onInput);
				} else {
					this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function ($e) {
						if (specialKeyCodeMap[$e.which || $e.keyCode]) {
							return;
						}
						_.defer(_.bind(that._onInput, that, $e));
					});
				}
				return this;
			},
			focus: function focus() {
				this.$input.focus();
			},
			blur: function blur() {
				this.$input.blur();
			},
			getLangDir: function getLangDir() {
				return this.dir;
			},
			getQuery: function getQuery() {
				return this.query || "";
			},
			setQuery: function setQuery(val, silent) {
				this.setInputValue(val);
				this._setQuery(val, silent);
			},
			hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
				return this.query !== this.queryWhenFocused;
			},
			getInputValue: function getInputValue() {
				return this.$input.val();
			},
			setInputValue: function setInputValue(value) {
				this.$input.val(value);
				this.clearHintIfInvalid();
				this._checkLanguageDirection();
			},
			resetInputValue: function resetInputValue() {
				this.setInputValue(this.query);
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
			hasFocus: function hasFocus() {
				return this.$input.is(":focus");
			},
			hasOverflow: function hasOverflow() {
				var constraint = this.$input.width() - 2;
				this.$overflowHelper.text(this.getInputValue());
				return this.$overflowHelper.width() >= constraint;
			},
			isCursorAtEnd: function () {
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
				this.$overflowHelper.remove();
				this.$hint = this.$input = this.$overflowHelper = $("<div>");
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
	var Dataset = function () {
		"use strict";
		var keys, nameGenerator;
		keys = {
			val: "tt-selectable-display",
			obj: "tt-selectable-object"
		};
		nameGenerator = _.getIdGenerator();

		function Dataset(o, www) {
			o = o || {};
			o.templates = o.templates || {};
			o.templates.notFound = o.templates.notFound || o.templates.empty;
			if (!o.source) {
				$.error("missing source");
			}
			if (!o.node) {
				$.error("missing node");
			}
			if (o.name && !isValidName(o.name)) {
				$.error("invalid dataset name: " + o.name);
			}
			www.mixin(this);
			this.highlight = !!o.highlight;
			this.name = o.name || nameGenerator();
			this.limit = o.limit || 5;
			this.displayFn = getDisplayFn(o.display || o.displayKey);
			this.templates = getTemplates(o.templates, this.displayFn);
			this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
			this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
			this._resetLastSuggestion();
			this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
		}
		Dataset.extractData = function extractData(el) {
			var $el = $(el);
			if ($el.data(keys.obj)) {
				return {
					val: $el.data(keys.val) || "",
					obj: $el.data(keys.obj) || null
				};
			}
			return null;
		};
		_.mixin(Dataset.prototype, EventEmitter, {
			_overwrite: function overwrite(query, suggestions) {
				suggestions = suggestions || [];
				if (suggestions.length) {
					this._renderSuggestions(query, suggestions);
				} else if (this.async && this.templates.pending) {
					this._renderPending(query);
				} else if (!this.async && this.templates.notFound) {
					this._renderNotFound(query);
				} else {
					this._empty();
				}
				this.trigger("rendered", this.name, suggestions, false);
			},
			_append: function append(query, suggestions) {
				suggestions = suggestions || [];
				if (suggestions.length && this.$lastSuggestion.length) {
					this._appendSuggestions(query, suggestions);
				} else if (suggestions.length) {
					this._renderSuggestions(query, suggestions);
				} else if (!this.$lastSuggestion.length && this.templates.notFound) {
					this._renderNotFound(query);
				}
				this.trigger("rendered", this.name, suggestions, true);
			},
			_renderSuggestions: function renderSuggestions(query, suggestions) {
				var $fragment;
				$fragment = this._getSuggestionsFragment(query, suggestions);
				this.$lastSuggestion = $fragment.children().last();
				this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
			},
			_appendSuggestions: function appendSuggestions(query, suggestions) {
				var $fragment, $lastSuggestion;
				$fragment = this._getSuggestionsFragment(query, suggestions);
				$lastSuggestion = $fragment.children().last();
				this.$lastSuggestion.after($fragment);
				this.$lastSuggestion = $lastSuggestion;
			},
			_renderPending: function renderPending(query) {
				var template = this.templates.pending;
				this._resetLastSuggestion();
				template && this.$el.html(template({
					query: query,
					dataset: this.name
				}));
			},
			_renderNotFound: function renderNotFound(query) {
				var template = this.templates.notFound;
				this._resetLastSuggestion();
				template && this.$el.html(template({
					query: query,
					dataset: this.name

				}));
			},
			_empty: function empty() {
				this.$el.empty();
				this._resetLastSuggestion();
			},
			_getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
				var that = this,
					fragment;
				fragment = document.createDocumentFragment();
				_.each(suggestions, function getSuggestionNode(suggestion) {
					var $el, context;
					context = that._injectQuery(query, suggestion);
					$el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
					fragment.appendChild($el[0]);
				});
				this.highlight && highlight({
					className: this.classes.highlight,
					node: fragment,
					pattern: query
				});
				return $(fragment);
			},
			_getFooter: function getFooter(query, suggestions) {
				return this.templates.footer ? this.templates.footer({
					query: query,
					suggestions: suggestions,
					dataset: this.name
				}) : null;
			},
			_getHeader: function getHeader(query, suggestions) {
				return this.templates.header ? this.templates.header({
					query: query,
					suggestions: suggestions,
					dataset: this.name
				}) : null;
			},
			_resetLastSuggestion: function resetLastSuggestion() {
				this.$lastSuggestion = $();
			},
			_injectQuery: function injectQuery(query, obj) {
				return _.isObject(obj) ? _.mixin({
					_query: query
				}, obj) : obj;
			},
			update: function update(query) {
				var that = this,
					canceled = false,
					syncCalled = false,
					rendered = 0;
				this.cancel();
				this.cancel = function cancel() {
					canceled = true;
					that.cancel = $.noop;
					that.async && that.trigger("asyncCanceled", query);
				};
				this.source(query, sync, async);
				!syncCalled && sync([]);

				function sync(suggestions) {
					if (syncCalled) {
						return;
					}
					syncCalled = true;
					suggestions = (suggestions || []).slice(0, that.limit);
					rendered = suggestions.length;
					that._overwrite(query, suggestions);
					if (rendered < that.limit && that.async) {
						that.trigger("asyncRequested", query);
					}
				}

				function async(suggestions) {
					suggestions = suggestions || [];
					if (!canceled && rendered < that.limit) {
						that.cancel = $.noop;
						rendered += suggestions.length;
						that._append(query, suggestions.slice(0, that.limit - rendered));
						that.async && that.trigger("asyncReceived", query);
					}
				}
			},
			cancel: $.noop,
			clear: function clear() {
				this._empty();
				this.cancel();
				this.trigger("cleared");
			},
			isEmpty: function isEmpty() {
				return this.$el.is(":empty");
			},
			destroy: function destroy() {
				this.$el = $("<div>");
			}
		});
		return Dataset;

		function getDisplayFn(display) {
			display = display || _.stringify;
			return _.isFunction(display) ? display : displayFn;

			function displayFn(obj) {
				return obj[display];
			}
		}

		function getTemplates(templates, displayFn) {
			return {
				notFound: templates.notFound && _.templatify(templates.notFound),
				pending: templates.pending && _.templatify(templates.pending),
				header: templates.header && _.templatify(templates.header),
				footer: templates.footer && _.templatify(templates.footer),
				suggestion: templates.suggestion || suggestionTemplate
			};

			function suggestionTemplate(context) {
				return $("<div>").text(displayFn(context));
			}
		}

		function isValidName(str) {
			return /^[_a-zA-Z0-9-]+$/.test(str);
		}
	}();
	var Menu = function () {
		"use strict";

		function Menu(o, www) {
			var that = this;
			o = o || {};
			if (!o.node) {
				$.error("node is required");
			}
			www.mixin(this);
			this.$node = $(o.node);
			this.query = null;
			this.datasets = _.map(o.datasets, initializeDataset);

			function initializeDataset(oDataset) {
				var node = that.$node.find(oDataset.node).first();
				oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
				return new Dataset(oDataset, www);
			}
		}
		_.mixin(Menu.prototype, EventEmitter, {
			_onSelectableClick: function onSelectableClick($e) {
				this.trigger("selectableClicked", $($e.currentTarget));
			},
			_onRendered: function onRendered(type, dataset, suggestions, async) {
				this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
				this.trigger("datasetRendered", dataset, suggestions, async);
			},
			_onCleared: function onCleared() {
				this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
				this.trigger("datasetCleared");
			},
			_propagate: function propagate() {
				this.trigger.apply(this, arguments);
			},
			_allDatasetsEmpty: function allDatasetsEmpty() {
				return _.every(this.datasets, isDatasetEmpty);

				function isDatasetEmpty(dataset) {
					return dataset.isEmpty();
				}
			},
			_getSelectables: function getSelectables() {
				return this.$node.find(this.selectors.selectable);
			},
			_removeCursor: function _removeCursor() {
				var $selectable = this.getActiveSelectable();
				$selectable && $selectable.removeClass(this.classes.cursor);
			},
			_ensureVisible: function ensureVisible($el) {
				var elTop, elBottom, nodeScrollTop, nodeHeight;
				elTop = $el.position().top;
				elBottom = elTop + $el.outerHeight(true);
				nodeScrollTop = this.$node.scrollTop();
				nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
				if (elTop < 0) {
					this.$node.scrollTop(nodeScrollTop + elTop);
				} else if (nodeHeight < elBottom) {
					this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
				}
			},
			bind: function () {
				var that = this,
					onSelectableClick;
				onSelectableClick = _.bind(this._onSelectableClick, this);
				this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
				_.each(this.datasets, function (dataset) {
					dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
				});
				return this;
			},
			isOpen: function isOpen() {
				return this.$node.hasClass(this.classes.open);
			},
			open: function open() {
				this.$node.addClass(this.classes.open);
			},
			close: function close() {
				this.$node.removeClass(this.classes.open);
				this._removeCursor();
			},
			setLanguageDirection: function setLanguageDirection(dir) {
				this.$node.attr("dir", dir);
			},
			selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
				var $selectables, $oldCursor, oldIndex, newIndex;
				$oldCursor = this.getActiveSelectable();
				$selectables = this._getSelectables();
				oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
				newIndex = oldIndex + delta;
				newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
				newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
				return newIndex === -1 ? null : $selectables.eq(newIndex);
			},
			setCursor: function setCursor($selectable) {
				this._removeCursor();
				if ($selectable = $selectable && $selectable.first()) {
					$selectable.addClass(this.classes.cursor);
					this._ensureVisible($selectable);
				}
			},
			getSelectableData: function getSelectableData($el) {
				return $el && $el.length ? Dataset.extractData($el) : null;
			},
			getActiveSelectable: function getActiveSelectable() {
				var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
				return $selectable.length ? $selectable : null;
			},
			getTopSelectable: function getTopSelectable() {
				var $selectable = this._getSelectables().first();
				return $selectable.length ? $selectable : null;
			},
			update: function update(query) {
				var isValidUpdate = query !== this.query;
				if (isValidUpdate) {
					this.query = query;
					_.each(this.datasets, updateDataset);
				}
				return isValidUpdate;

				function updateDataset(dataset) {
					dataset.update(query);
				}
			},
			empty: function empty() {
				_.each(this.datasets, clearDataset);
				this.query = null;
				this.$node.addClass(this.classes.empty);

				function clearDataset(dataset) {
					dataset.clear();
				}
			},
			destroy: function destroy() {
				this.$node.off(".tt");
				this.$node = $("<div>");
				_.each(this.datasets, destroyDataset);

				function destroyDataset(dataset) {
					dataset.destroy();
				}
			}
		});
		return Menu;
	}();
	var DefaultMenu = function () {
		"use strict";
		var s = Menu.prototype;

		function DefaultMenu() {
			Menu.apply(this, [].slice.call(arguments, 0));
		}
		_.mixin(DefaultMenu.prototype, Menu.prototype, {
			open: function open() {
				!this._allDatasetsEmpty() && this._show();
				return s.open.apply(this, [].slice.call(arguments, 0));
			},
			close: function close() {
				this._hide();
				return s.close.apply(this, [].slice.call(arguments, 0));
			},
			_onRendered: function onRendered() {
				if (this._allDatasetsEmpty()) {
					this._hide();
				} else {
					this.isOpen() && this._show();
				}
				return s._onRendered.apply(this, [].slice.call(arguments, 0));
			},
			_onCleared: function onCleared() {
				if (this._allDatasetsEmpty()) {
					this._hide();
				} else {
					this.isOpen() && this._show();
				}
				return s._onCleared.apply(this, [].slice.call(arguments, 0));
			},
			setLanguageDirection: function setLanguageDirection(dir) {
				this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
				return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
			},
			_hide: function hide() {
				this.$node.hide();
			},
			_show: function show() {
				this.$node.css("display", "block");
			}
		});
		return DefaultMenu;
	}();
	var Typeahead = function () {
		"use strict";

		function Typeahead(o, www) {
			var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
			o = o || {};
			if (!o.input) {
				$.error("missing input");
			}
			if (!o.menu) {
				$.error("missing menu");
			}
			if (!o.eventBus) {
				$.error("missing event bus");
			}
			www.mixin(this);
			this.eventBus = o.eventBus;
			this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
			this.input = o.input;
			this.menu = o.menu;
			this.enabled = true;
			this.active = false;
			this.input.hasFocus() && this.activate();
			this.dir = this.input.getLangDir();
			this._hacks();
			this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
			onFocused = c(this, "activate", "open", "_onFocused");
			onBlurred = c(this, "deactivate", "_onBlurred");
			onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
			onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
			onEscKeyed = c(this, "isActive", "_onEscKeyed");
			onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
			onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
			onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
			onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
			onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
			onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
			this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
		}
		_.mixin(Typeahead.prototype, {
			_hacks: function hacks() {
				var $input, $menu;
				$input = this.input.$input || $("<div>");
				$menu = this.menu.$node || $("<div>");
				$input.on("blur.tt", function ($e) {
					var active, isActive, hasActive;
					active = document.activeElement;
					isActive = $menu.is(active);
					hasActive = $menu.has(active).length > 0;
					if (_.isMsie() && (isActive || hasActive)) {
						$e.preventDefault();
						$e.stopImmediatePropagation();
						_.defer(function () {
							$input.focus();
						});
					}
				});
				$menu.on("mousedown.tt", function ($e) {
					$e.preventDefault();
				});
			},
			_onSelectableClicked: function onSelectableClicked(type, $el) {
				this.select($el);
			},
			_onDatasetCleared: function onDatasetCleared() {
				this._updateHint();
			},
			_onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
				this._updateHint();
				this.eventBus.trigger("render", suggestions, async, dataset);
			},
			_onAsyncRequested: function onAsyncRequested(type, dataset, query) {
				this.eventBus.trigger("asyncrequest", query, dataset);
			},
			_onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
				this.eventBus.trigger("asynccancel", query, dataset);
			},
			_onAsyncReceived: function onAsyncReceived(type, dataset, query) {
				this.eventBus.trigger("asyncreceive", query, dataset);
			},
			_onFocused: function onFocused() {
				this._minLengthMet() && this.menu.update(this.input.getQuery());
			},
			_onBlurred: function onBlurred() {
				if (this.input.hasQueryChangedSinceLastFocus()) {
					this.eventBus.trigger("change", this.input.getQuery());
				}
			},
			_onEnterKeyed: function onEnterKeyed(type, $e) {
				var $selectable;
				if ($selectable = this.menu.getActiveSelectable()) {
					this.select($selectable) && $e.preventDefault();
				}
			},
			_onTabKeyed: function onTabKeyed(type, $e) {
				var $selectable;
				if ($selectable = this.menu.getActiveSelectable()) {
					this.select($selectable) && $e.preventDefault();
				} else if ($selectable = this.menu.getTopSelectable()) {
					this.autocomplete($selectable) && $e.preventDefault();
				}
			},
			_onEscKeyed: function onEscKeyed() {
				this.close();
			},
			_onUpKeyed: function onUpKeyed() {
				this.moveCursor(-1);
			},
			_onDownKeyed: function onDownKeyed() {
				this.moveCursor(+1);
			},
			_onLeftKeyed: function onLeftKeyed() {
				if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
					this.autocomplete(this.menu.getTopSelectable());
				}
			},
			_onRightKeyed: function onRightKeyed() {
				if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
					this.autocomplete(this.menu.getTopSelectable());
				}
			},
			_onQueryChanged: function onQueryChanged(e, query) {
				this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
			},
			_onWhitespaceChanged: function onWhitespaceChanged() {
				this._updateHint();
			},
			_onLangDirChanged: function onLangDirChanged(e, dir) {
				if (this.dir !== dir) {
					this.dir = dir;
					this.menu.setLanguageDirection(dir);
				}
			},
			_openIfActive: function openIfActive() {
				this.isActive() && this.open();
			},
			_minLengthMet: function minLengthMet(query) {
				query = _.isString(query) ? query : this.input.getQuery() || "";
				return query.length >= this.minLength;
			},
			_updateHint: function updateHint() {
				var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
				$selectable = this.menu.getTopSelectable();
				data = this.menu.getSelectableData($selectable);
				val = this.input.getInputValue();
				if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
					query = Input.normalizeQuery(val);
					escapedQuery = _.escapeRegExChars(query);
					frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
					match = frontMatchRegEx.exec(data.val);
					match && this.input.setHint(val + match[1]);
				} else {
					this.input.clearHint();
				}
			},
			isEnabled: function isEnabled() {
				return this.enabled;
			},
			enable: function enable() {
				this.enabled = true;
			},
			disable: function disable() {
				this.enabled = false;
			},
			isActive: function isActive() {
				return this.active;
			},
			activate: function activate() {
				if (this.isActive()) {
					return true;
				} else if (!this.isEnabled() || this.eventBus.before("active")) {
					return false;
				} else {
					this.active = true;
					this.eventBus.trigger("active");
					return true;
				}
			},
			deactivate: function deactivate() {
				if (!this.isActive()) {
					return true;
				} else if (this.eventBus.before("idle")) {
					return false;
				} else {
					this.active = false;
					this.close();
					this.eventBus.trigger("idle");
					return true;
				}
			},
			isOpen: function isOpen() {
				return this.menu.isOpen();
			},
			open: function open() {
				if (!this.isOpen() && !this.eventBus.before("open")) {
					this.menu.open();
					this._updateHint();
					this.eventBus.trigger("open");
				}
				return this.isOpen();
			},
			close: function close() {
				if (this.isOpen() && !this.eventBus.before("close")) {
					this.menu.close();
					this.input.clearHint();
					this.input.resetInputValue();
					this.eventBus.trigger("close");
				}
				return !this.isOpen();
			},
			setVal: function setVal(val) {
				this.input.setQuery(_.toStr(val));
			},
			getVal: function getVal() {
				return this.input.getQuery();
			},
			select: function select($selectable) {
				var data = this.menu.getSelectableData($selectable);
				if (data && !this.eventBus.before("select", data.obj)) {
					this.input.setQuery(data.val, true);
					this.eventBus.trigger("select", data.obj);
					this.close();
					return true;
				}
				return false;
			},
			autocomplete: function autocomplete($selectable) {
				var query, data, isValid;
				query = this.input.getQuery();
				data = this.menu.getSelectableData($selectable);
				isValid = data && query !== data.val;
				if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
					this.input.setQuery(data.val);
					this.eventBus.trigger("autocomplete", data.obj);
					return true;
				}
				return false;
			},
			moveCursor: function moveCursor(delta) {
				var query, $candidate, data, payload, cancelMove;
				query = this.input.getQuery();
				$candidate = this.menu.selectableRelativeToCursor(delta);
				data = this.menu.getSelectableData($candidate);
				payload = data ? data.obj : null;
				cancelMove = this._minLengthMet() && this.menu.update(query);
				if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
					this.menu.setCursor($candidate);
					if (data) {
						this.input.setInputValue(data.val);
					} else {
						this.input.resetInputValue();
						this._updateHint();
					}
					this.eventBus.trigger("cursorchange", payload);
					return true;
				}
				return false;
			},
			destroy: function destroy() {
				this.input.destroy();
				this.menu.destroy();
			}
		});
		return Typeahead;

		function c(ctx) {
			var methods = [].slice.call(arguments, 1);
			return function () {
				var args = [].slice.call(arguments);
				_.each(methods, function (method) {
					return ctx[method].apply(ctx, args);
				});
			};
		}
	}();
	(function () {
		"use strict";
		var old, keys, methods;
		old = $.fn.typeahead;
		keys = {
			www: "tt-www",
			attrs: "tt-attrs",
			typeahead: "tt-typeahead"
		};
		methods = {
			initialize: function initialize(o, datasets) {
				var www;
				datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
				o = o || {};
				www = WWW(o.classNames);
				return this.each(attach);

				function attach() {
					var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
					_.each(datasets, function (d) {
						d.highlight = !!o.highlight;
					});
					$input = $(this);
					$wrapper = $(www.html.wrapper);
					$hint = $elOrNull(o.hint);
					$menu = $elOrNull(o.menu);
					defaultHint = o.hint !== false && !$hint;
					defaultMenu = o.menu !== false && !$menu;
					defaultHint && ($hint = buildHintFromInput($input, www));
					defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
					$hint && $hint.val("");
					$input = prepInput($input, www);
					if (defaultHint || defaultMenu) {
						$wrapper.css(www.css.wrapper);
						$input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
						$input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
					}
					MenuConstructor = defaultMenu ? DefaultMenu : Menu;
					eventBus = new EventBus({
						el: $input
					});
					input = new Input({
						hint: $hint,
						input: $input
					}, www);
					menu = new MenuConstructor({
						node: $menu,
						datasets: datasets
					}, www);
					typeahead = new Typeahead({
						input: input,
						menu: menu,
						eventBus: eventBus,
						minLength: o.minLength
					}, www);
					$input.data(keys.www, www);
					$input.data(keys.typeahead, typeahead);
				}
			},
			isEnabled: function isEnabled() {
				var enabled;
				ttEach(this.first(), function (t) {
					enabled = t.isEnabled();
				});
				return enabled;
			},
			enable: function enable() {
				ttEach(this, function (t) {
					t.enable();
				});
				return this;
			},
			disable: function disable() {
				ttEach(this, function (t) {
					t.disable();
				});
				return this;
			},
			isActive: function isActive() {
				var active;
				ttEach(this.first(), function (t) {
					active = t.isActive();
				});
				return active;
			},
			activate: function activate() {
				ttEach(this, function (t) {
					t.activate();
				});
				return this;
			},
			deactivate: function deactivate() {
				ttEach(this, function (t) {
					t.deactivate();
				});
				return this;
			},
			isOpen: function isOpen() {
				var open;
				ttEach(this.first(), function (t) {
					open = t.isOpen();
				});
				return open;
			},
			open: function open() {
				ttEach(this, function (t) {
					t.open();
				});
				return this;
			},
			close: function close() {
				ttEach(this, function (t) {
					t.close();
				});
				return this;
			},
			select: function select(el) {
				var success = false,
					$el = $(el);
				ttEach(this.first(), function (t) {
					success = t.select($el);
				});
				return success;
			},
			autocomplete: function autocomplete(el) {
				var success = false,
					$el = $(el);
				ttEach(this.first(), function (t) {
					success = t.autocomplete($el);
				});
				return success;
			},
			moveCursor: function moveCursoe(delta) {
				var success = false;
				ttEach(this.first(), function (t) {
					success = t.moveCursor(delta);
				});
				return success;
			},
			val: function val(newVal) {
				var query;
				if (!arguments.length) {
					ttEach(this.first(), function (t) {
						query = t.getVal();
					});
					return query;
				} else {
					ttEach(this, function (t) {
						t.setVal(newVal);
					});
					return this;
				}
			},
			destroy: function destroy() {
				ttEach(this, function (typeahead, $input) {
					revert($input);
					typeahead.destroy();
				});
				return this;
			}
		};
		$.fn.typeahead = function (method) {
			if (methods[method]) {
				return methods[method].apply(this, [].slice.call(arguments, 1));
			} else {
				return methods.initialize.apply(this, arguments);
			}
		};
		$.fn.typeahead.noConflict = function noConflict() {
			$.fn.typeahead = old;
			return this;
		};

		function ttEach($els, fn) {
			$els.each(function () {
				var $input = $(this),
					typeahead;
				(typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
			});
		}

		function buildHintFromInput($input, www) {
			return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
				autocomplete: "off",
				spellcheck: "false",
				tabindex: -1
			});
		}

		function prepInput($input, www) {
			$input.data(keys.attrs, {
				dir: $input.attr("dir"),
				autocomplete: $input.attr("autocomplete"),
				spellcheck: $input.attr("spellcheck"),
				style: $input.attr("style")
			});
			$input.addClass(www.classes.input).attr({
				autocomplete: "off",
				spellcheck: false
			});
			try {
				!$input.attr("dir") && $input.attr("dir", "auto");
			} catch (e) {}
			return $input;
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

		function revert($input) {
			var www, $wrapper;
			www = $input.data(keys.www);
			$wrapper = $input.parent().filter(www.selectors.wrapper);
			_.each($input.data(keys.attrs), function (val, key) {
				_.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
			});
			$input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
			if ($wrapper.length) {
				$input.detach().insertAfter($wrapper);
				$wrapper.remove();
			}
		}

		function $elOrNull(obj) {
			var isValid, $el;
			isValid = _.isJQuery(obj) || _.isElement(obj);
			$el = isValid ? $(obj).first() : [];
			return $el.length ? $el : null;
		}
	})();
});;
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

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

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function () {
	return /******/ (function (modules) { // webpackBootstrap
		/******/ // The module cache
		/******/
		var installedModules = {};

		/******/ // The require function
		/******/
		function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/
			if (installedModules[moduleId])
				/******/
				return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/
			var module = installedModules[moduleId] = {
				/******/
				exports: {},
				/******/
				id: moduleId,
				/******/
				loaded: false
				/******/
			};

			/******/ // Execute the module function
			/******/
			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/
			module.loaded = true;

			/******/ // Return the exports of the module
			/******/
			return module.exports;
			/******/
		}


		/******/ // expose the modules object (__webpack_modules__)
		/******/
		__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/
		__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/
		__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/
		return __webpack_require__(0);
		/******/
	})
	/************************************************************************/
	/******/
	([
		/* 0 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _handlebarsRuntime = __webpack_require__(2);

			var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

			// Compiler imports

			var _handlebarsCompilerAst = __webpack_require__(21);

			var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

			var _handlebarsCompilerBase = __webpack_require__(22);

			var _handlebarsCompilerCompiler = __webpack_require__(27);

			var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);

			var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

			var _handlebarsCompilerVisitor = __webpack_require__(25);

			var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

			var _handlebarsNoConflict = __webpack_require__(20);

			var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

			var _create = _handlebarsRuntime2['default'].create;

			function create() {
				var hb = _create();

				hb.compile = function (input, options) {
					return _handlebarsCompilerCompiler.compile(input, options, hb);
				};
				hb.precompile = function (input, options) {
					return _handlebarsCompilerCompiler.precompile(input, options, hb);
				};

				hb.AST = _handlebarsCompilerAst2['default'];
				hb.Compiler = _handlebarsCompilerCompiler.Compiler;
				hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
				hb.Parser = _handlebarsCompilerBase.parser;
				hb.parse = _handlebarsCompilerBase.parse;

				return hb;
			}

			var inst = create();
			inst.create = create;

			_handlebarsNoConflict2['default'](inst);

			inst.Visitor = _handlebarsCompilerVisitor2['default'];

			inst['default'] = inst;

			exports['default'] = inst;
			module.exports = exports['default'];

			/***/
		},
		/* 1 */
		/***/
		function (module, exports) {

			"use strict";

			exports["default"] = function (obj) {
				return obj && obj.__esModule ? obj : {
					"default": obj
				};
			};

			exports.__esModule = true;

			/***/
		},
		/* 2 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireWildcard = __webpack_require__(3)['default'];

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _handlebarsBase = __webpack_require__(4);

			var base = _interopRequireWildcard(_handlebarsBase);

			// Each of these augment the Handlebars object. No need to setup here.
			// (This is done to easily share code between commonjs and browse envs)

			var _handlebarsSafeString = __webpack_require__(18);

			var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

			var _handlebarsException = __webpack_require__(6);

			var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

			var _handlebarsUtils = __webpack_require__(5);

			var Utils = _interopRequireWildcard(_handlebarsUtils);

			var _handlebarsRuntime = __webpack_require__(19);

			var runtime = _interopRequireWildcard(_handlebarsRuntime);

			var _handlebarsNoConflict = __webpack_require__(20);

			var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

			// For compatibility and usage outside of module systems, make the Handlebars object a namespace
			function create() {
				var hb = new base.HandlebarsEnvironment();

				Utils.extend(hb, base);
				hb.SafeString = _handlebarsSafeString2['default'];
				hb.Exception = _handlebarsException2['default'];
				hb.Utils = Utils;
				hb.escapeExpression = Utils.escapeExpression;

				hb.VM = runtime;
				hb.template = function (spec) {
					return runtime.template(spec, hb);
				};

				return hb;
			}

			var inst = create();
			inst.create = create;

			_handlebarsNoConflict2['default'](inst);

			inst['default'] = inst;

			exports['default'] = inst;
			module.exports = exports['default'];

			/***/
		},
		/* 3 */
		/***/
		function (module, exports) {

			"use strict";

			exports["default"] = function (obj) {
				if (obj && obj.__esModule) {
					return obj;
				} else {
					var newObj = {};

					if (obj != null) {
						for (var key in obj) {
							if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
						}
					}

					newObj["default"] = obj;
					return newObj;
				}
			};

			exports.__esModule = true;

			/***/
		},
		/* 4 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.HandlebarsEnvironment = HandlebarsEnvironment;

			var _utils = __webpack_require__(5);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _helpers = __webpack_require__(7);

			var _decorators = __webpack_require__(15);

			var _logger = __webpack_require__(17);

			var _logger2 = _interopRequireDefault(_logger);

			var VERSION = '4.0.5';
			exports.VERSION = VERSION;
			var COMPILER_REVISION = 7;

			exports.COMPILER_REVISION = COMPILER_REVISION;
			var REVISION_CHANGES = {
				1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
				2: '== 1.0.0-rc.3',
				3: '== 1.0.0-rc.4',
				4: '== 1.x.x',
				5: '== 2.0.0-alpha.x',
				6: '>= 2.0.0-beta.1',
				7: '>= 4.0.0'
			};

			exports.REVISION_CHANGES = REVISION_CHANGES;
			var objectType = '[object Object]';

			function HandlebarsEnvironment(helpers, partials, decorators) {
				this.helpers = helpers || {};
				this.partials = partials || {};
				this.decorators = decorators || {};

				_helpers.registerDefaultHelpers(this);
				_decorators.registerDefaultDecorators(this);
			}

			HandlebarsEnvironment.prototype = {
				constructor: HandlebarsEnvironment,

				logger: _logger2['default'],
				log: _logger2['default'].log,

				registerHelper: function registerHelper(name, fn) {
					if (_utils.toString.call(name) === objectType) {
						if (fn) {
							throw new _exception2['default']('Arg not supported with multiple helpers');
						}
						_utils.extend(this.helpers, name);
					} else {
						this.helpers[name] = fn;
					}
				},
				unregisterHelper: function unregisterHelper(name) {
					delete this.helpers[name];
				},

				registerPartial: function registerPartial(name, partial) {
					if (_utils.toString.call(name) === objectType) {
						_utils.extend(this.partials, name);
					} else {
						if (typeof partial === 'undefined') {
							throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
						}
						this.partials[name] = partial;
					}
				},
				unregisterPartial: function unregisterPartial(name) {
					delete this.partials[name];
				},

				registerDecorator: function registerDecorator(name, fn) {
					if (_utils.toString.call(name) === objectType) {
						if (fn) {
							throw new _exception2['default']('Arg not supported with multiple decorators');
						}
						_utils.extend(this.decorators, name);
					} else {
						this.decorators[name] = fn;
					}
				},
				unregisterDecorator: function unregisterDecorator(name) {
					delete this.decorators[name];
				}
			};

			var log = _logger2['default'].log;

			exports.log = log;
			exports.createFrame = _utils.createFrame;
			exports.logger = _logger2['default'];

			/***/
		},
		/* 5 */
		/***/
		function (module, exports) {

			'use strict';

			exports.__esModule = true;
			exports.extend = extend;
			exports.indexOf = indexOf;
			exports.escapeExpression = escapeExpression;
			exports.isEmpty = isEmpty;
			exports.createFrame = createFrame;
			exports.blockParams = blockParams;
			exports.appendContextPath = appendContextPath;
			var escape = {
				'&': '&',
				'<': '<',
				'>': '>',
				'"': '"',
				'=': '='
			};

			var badChars = /[&<>"'`=]/g,
				possible = /[&<>"'`=]/;

			function escapeChar(chr) {
				return escape[chr];
			}

			function extend(obj /* , ...source */ ) {
				for (var i = 1; i < arguments.length; i++) {
					for (var key in arguments[i]) {
						if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
							obj[key] = arguments[i][key];
						}
					}
				}

				return obj;
			}

			var toString = Object.prototype.toString;

			exports.toString = toString;
			// Sourced from lodash
			// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
			/* eslint-disable func-style */
			var isFunction = function isFunction(value) {
				return typeof value === 'function';
			};
			// fallback for older versions of Chrome and Safari
			/* istanbul ignore next */
			if (isFunction(/x/)) {
				exports.isFunction = isFunction = function (value) {
					return typeof value === 'function' && toString.call(value) === '[object Function]';
				};
			}
			exports.isFunction = isFunction;

			/* eslint-enable func-style */

			/* istanbul ignore next */
			var isArray = Array.isArray || function (value) {
				return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
			};

			exports.isArray = isArray;
			// Older IE versions do not directly support indexOf so we must implement our own, sadly.

			function indexOf(array, value) {
				for (var i = 0, len = array.length; i < len; i++) {
					if (array[i] === value) {
						return i;
					}
				}
				return -1;
			}

			function escapeExpression(string) {
				if (typeof string !== 'string') {
					// don't escape SafeStrings, since they're already safe
					if (string && string.toHTML) {
						return string.toHTML();
					} else if (string == null) {
						return '';
					} else if (!string) {
						return string + '';
					}

					// Force a string conversion as this will be done by the append regardless and
					// the regex test will do this transparently behind the scenes, causing issues if
					// an object's to string has escaped characters in it.
					string = '' + string;
				}

				if (!possible.test(string)) {
					return string;
				}
				return string.replace(badChars, escapeChar);
			}

			function isEmpty(value) {
				if (!value && value !== 0) {
					return true;
				} else if (isArray(value) && value.length === 0) {
					return true;
				} else {
					return false;
				}
			}

			function createFrame(object) {
				var frame = extend({}, object);
				frame._parent = object;
				return frame;
			}

			function blockParams(params, ids) {
				params.path = ids;
				return params;
			}

			function appendContextPath(contextPath, id) {
				return (contextPath ? contextPath + '.' : '') + id;
			}

			/***/
		},
		/* 6 */
		/***/
		function (module, exports) {

			'use strict';

			exports.__esModule = true;

			var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

			function Exception(message, node) {
				var loc = node && node.loc,
					line = undefined,
					column = undefined;
				if (loc) {
					line = loc.start.line;
					column = loc.start.column;

					message += ' - ' + line + ':' + column;
				}

				var tmp = Error.prototype.constructor.call(this, message);

				// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
				for (var idx = 0; idx < errorProps.length; idx++) {
					this[errorProps[idx]] = tmp[errorProps[idx]];
				}

				/* istanbul ignore else */
				if (Error.captureStackTrace) {
					Error.captureStackTrace(this, Exception);
				}

				if (loc) {
					this.lineNumber = line;
					this.column = column;
				}
			}

			Exception.prototype = new Error();

			exports['default'] = Exception;
			module.exports = exports['default'];

			/***/
		},
		/* 7 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.registerDefaultHelpers = registerDefaultHelpers;

			var _helpersBlockHelperMissing = __webpack_require__(8);

			var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

			var _helpersEach = __webpack_require__(9);

			var _helpersEach2 = _interopRequireDefault(_helpersEach);

			var _helpersHelperMissing = __webpack_require__(10);

			var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

			var _helpersIf = __webpack_require__(11);

			var _helpersIf2 = _interopRequireDefault(_helpersIf);

			var _helpersLog = __webpack_require__(12);

			var _helpersLog2 = _interopRequireDefault(_helpersLog);

			var _helpersLookup = __webpack_require__(13);

			var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

			var _helpersWith = __webpack_require__(14);

			var _helpersWith2 = _interopRequireDefault(_helpersWith);

			function registerDefaultHelpers(instance) {
				_helpersBlockHelperMissing2['default'](instance);
				_helpersEach2['default'](instance);
				_helpersHelperMissing2['default'](instance);
				_helpersIf2['default'](instance);
				_helpersLog2['default'](instance);
				_helpersLookup2['default'](instance);
				_helpersWith2['default'](instance);
			}

			/***/
		},
		/* 8 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerHelper('blockHelperMissing', function (context, options) {
					var inverse = options.inverse,
						fn = options.fn;

					if (context === true) {
						return fn(this);
					} else if (context === false || context == null) {
						return inverse(this);
					} else if (_utils.isArray(context)) {
						if (context.length > 0) {
							if (options.ids) {
								options.ids = [options.name];
							}

							return instance.helpers.each(context, options);
						} else {
							return inverse(this);
						}
					} else {
						if (options.data && options.ids) {
							var data = _utils.createFrame(options.data);
							data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
							options = {
								data: data
							};
						}

						return fn(context, options);
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 9 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			exports['default'] = function (instance) {
				instance.registerHelper('each', function (context, options) {
					if (!options) {
						throw new _exception2['default']('Must pass iterator to #each');

					}

					var fn = options.fn,
						inverse = options.inverse,
						i = 0,
						ret = '',
						data = undefined,
						contextPath = undefined;

					if (options.data && options.ids) {
						contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
					}

					if (_utils.isFunction(context)) {
						context = context.call(this);
					}

					if (options.data) {
						data = _utils.createFrame(options.data);
					}

					function execIteration(field, index, last) {
						if (data) {
							data.key = field;
							data.index = index;
							data.first = index === 0;
							data.last = !!last;

							if (contextPath) {
								data.contextPath = contextPath + field;
							}
						}

						ret = ret + fn(context[field], {
							data: data,
							blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
						});
					}

					if (context && typeof context === 'object') {
						if (_utils.isArray(context)) {
							for (var j = context.length; i < j; i++) {
								if (i in context) {
									execIteration(i, i, i === context.length - 1);
								}
							}
						} else {
							var priorKey = undefined;

							for (var key in context) {
								if (context.hasOwnProperty(key)) {
									// We're running the iterations one step out of sync so we can detect
									// the last iteration without have to scan the object twice and create
									// an itermediate keys array.
									if (priorKey !== undefined) {
										execIteration(priorKey, i - 1);
									}
									priorKey = key;
									i++;
								}
							}
							if (priorKey !== undefined) {
								execIteration(priorKey, i - 1, true);
							}
						}
					}

					if (i === 0) {
						ret = inverse(this);
					}

					return ret;
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 10 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			exports['default'] = function (instance) {
				instance.registerHelper('helperMissing', function () /* [args, ]options */ {
					if (arguments.length === 1) {
						// A missing field in a {{foo}} construct.
						return undefined;
					} else {
						// Someone is actually trying to call something, blow up.
						throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 11 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerHelper('if', function (conditional, options) {
					if (_utils.isFunction(conditional)) {
						conditional = conditional.call(this);
					}

					// Default behavior is to render the positive path if the value is truthy and not empty.
					// The `includeZero` option may be set to treat the condtional as purely not empty based on the
					// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
					if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
						return options.inverse(this);
					} else {
						return options.fn(this);
					}
				});

				instance.registerHelper('unless', function (conditional, options) {
					return instance.helpers['if'].call(this, conditional, {
						fn: options.inverse,
						inverse: options.fn,
						hash: options.hash
					});
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 12 */
		/***/
		function (module, exports) {

			'use strict';

			exports.__esModule = true;

			exports['default'] = function (instance) {
				instance.registerHelper('log', function () /* message, options */ {
					var args = [undefined],
						options = arguments[arguments.length - 1];
					for (var i = 0; i < arguments.length - 1; i++) {
						args.push(arguments[i]);
					}

					var level = 1;
					if (options.hash.level != null) {
						level = options.hash.level;
					} else if (options.data && options.data.level != null) {
						level = options.data.level;
					}
					args[0] = level;

					instance.log.apply(instance, args);
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 13 */
		/***/
		function (module, exports) {

			'use strict';

			exports.__esModule = true;

			exports['default'] = function (instance) {
				instance.registerHelper('lookup', function (obj, field) {
					return obj && obj[field];
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 14 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerHelper('with', function (context, options) {
					if (_utils.isFunction(context)) {
						context = context.call(this);
					}

					var fn = options.fn;

					if (!_utils.isEmpty(context)) {
						var data = options.data;
						if (options.data && options.ids) {
							data = _utils.createFrame(options.data);
							data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
						}

						return fn(context, {
							data: data,
							blockParams: _utils.blockParams([context], [data && data.contextPath])
						});
					} else {
						return options.inverse(this);
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 15 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.registerDefaultDecorators = registerDefaultDecorators;

			var _decoratorsInline = __webpack_require__(16);

			var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

			function registerDefaultDecorators(instance) {
				_decoratorsInline2['default'](instance);
			}

			/***/
		},
		/* 16 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerDecorator('inline', function (fn, props, container, options) {
					var ret = fn;
					if (!props.partials) {
						props.partials = {};
						ret = function (context, options) {
							// Create a new partials stack frame prior to exec.
							var original = container.partials;
							container.partials = _utils.extend({}, original, props.partials);
							var ret = fn(context, options);
							container.partials = original;
							return ret;
						};
					}

					props.partials[options.args[0]] = options.fn;

					return ret;
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 17 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			var logger = {
				methodMap: ['debug', 'info', 'warn', 'error'],
				level: 'info',

				// Maps a given level value to the `methodMap` indexes above.
				lookupLevel: function lookupLevel(level) {
					if (typeof level === 'string') {
						var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
						if (levelMap >= 0) {
							level = levelMap;
						} else {
							level = parseInt(level, 10);
						}
					}

					return level;
				},

				// Can be overridden in the host environment
				log: function log(level) {
					level = logger.lookupLevel(level);

					if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
						var method = logger.methodMap[level];
						if (!console[method]) {
							// eslint-disable-line no-console
							method = 'log';
						}

						for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							message[_key - 1] = arguments[_key];
						}

						console[method].apply(console, message); // eslint-disable-line no-console
					}
				}
			};

			exports['default'] = logger;
			module.exports = exports['default'];

			/***/
		},
		/* 18 */
		/***/
		function (module, exports) {

			// Build out our basic SafeString type
			'use strict';

			exports.__esModule = true;

			function SafeString(string) {
				this.string = string;
			}

			SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
				return '' + this.string;
			};

			exports['default'] = SafeString;
			module.exports = exports['default'];

			/***/
		},
		/* 19 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireWildcard = __webpack_require__(3)['default'];

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.checkRevision = checkRevision;
			exports.template = template;
			exports.wrapProgram = wrapProgram;
			exports.resolvePartial = resolvePartial;
			exports.invokePartial = invokePartial;
			exports.noop = noop;

			var _utils = __webpack_require__(5);

			var Utils = _interopRequireWildcard(_utils);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _base = __webpack_require__(4);

			function checkRevision(compilerInfo) {
				var compilerRevision = compilerInfo && compilerInfo[0] || 1,
					currentRevision = _base.COMPILER_REVISION;

				if (compilerRevision !== currentRevision) {
					if (compilerRevision < currentRevision) {
						var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
							compilerVersions = _base.REVISION_CHANGES[compilerRevision];
						throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
					} else {
						// Use the embedded version info since the runtime doesn't know about this revision yet
						throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
					}
				}
			}

			function template(templateSpec, env) {
				/* istanbul ignore next */
				if (!env) {
					throw new _exception2['default']('No environment passed to template');
				}
				if (!templateSpec || !templateSpec.main) {
					throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
				}

				templateSpec.main.decorator = templateSpec.main_d;

				// Note: Using env.VM references rather than local var references throughout this section to allow
				// for external users to override these as psuedo-supported APIs.
				env.VM.checkRevision(templateSpec.compiler);

				function invokePartialWrapper(partial, context, options) {
					if (options.hash) {
						context = Utils.extend({}, context, options.hash);
						if (options.ids) {
							options.ids[0] = true;
						}
					}

					partial = env.VM.resolvePartial.call(this, partial, context, options);
					var result = env.VM.invokePartial.call(this, partial, context, options);

					if (result == null && env.compile) {
						options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
						result = options.partials[options.name](context, options);
					}
					if (result != null) {
						if (options.indent) {
							var lines = result.split('\n');
							for (var i = 0, l = lines.length; i < l; i++) {
								if (!lines[i] && i + 1 === l) {
									break;
								}

								lines[i] = options.indent + lines[i];
							}
							result = lines.join('\n');
						}
						return result;
					} else {
						throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
					}
				}

				// Just add water
				var container = {
					strict: function strict(obj, name) {
						if (!(name in obj)) {
							throw new _exception2['default']('"' + name + '" not defined in ' + obj);
						}
						return obj[name];
					},
					lookup: function lookup(depths, name) {
						var len = depths.length;
						for (var i = 0; i < len; i++) {
							if (depths[i] && depths[i][name] != null) {
								return depths[i][name];
							}
						}
					},
					lambda: function lambda(current, context) {
						return typeof current === 'function' ? current.call(context) : current;
					},

					escapeExpression: Utils.escapeExpression,
					invokePartial: invokePartialWrapper,

					fn: function fn(i) {
						var ret = templateSpec[i];
						ret.decorator = templateSpec[i + '_d'];
						return ret;
					},

					programs: [],
					program: function program(i, data, declaredBlockParams, blockParams, depths) {
						var programWrapper = this.programs[i],
							fn = this.fn(i);
						if (data || depths || blockParams || declaredBlockParams) {
							programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
						} else if (!programWrapper) {
							programWrapper = this.programs[i] = wrapProgram(this, i, fn);
						}
						return programWrapper;
					},

					data: function data(value, depth) {
						while (value && depth--) {
							value = value._parent;
						}
						return value;
					},
					merge: function merge(param, common) {
						var obj = param || common;

						if (param && common && param !== common) {
							obj = Utils.extend({}, common, param);
						}

						return obj;
					},

					noop: env.VM.noop,
					compilerInfo: templateSpec.compiler
				};

				function ret(context) {
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var data = options.data;

					ret._setup(options);
					if (!options.partial && templateSpec.useData) {
						data = initData(context, data);
					}
					var depths = undefined,
						blockParams = templateSpec.useBlockParams ? [] : undefined;
					if (templateSpec.useDepths) {
						if (options.depths) {
							depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
						} else {
							depths = [context];
						}
					}

					function main(context /*, options*/ ) {
						return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
					}
					main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
					return main(context, options);
				}
				ret.isTop = true;

				ret._setup = function (options) {
					if (!options.partial) {
						container.helpers = container.merge(options.helpers, env.helpers);

						if (templateSpec.usePartial) {
							container.partials = container.merge(options.partials, env.partials);
						}
						if (templateSpec.usePartial || templateSpec.useDecorators) {
							container.decorators = container.merge(options.decorators, env.decorators);
						}
					} else {
						container.helpers = options.helpers;
						container.partials = options.partials;
						container.decorators = options.decorators;
					}
				};

				ret._child = function (i, data, blockParams, depths) {
					if (templateSpec.useBlockParams && !blockParams) {
						throw new _exception2['default']('must pass block params');
					}
					if (templateSpec.useDepths && !depths) {
						throw new _exception2['default']('must pass parent depths');
					}

					return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
				};
				return ret;
			}

			function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
				function prog(context) {
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var currentDepths = depths;
					if (depths && context !== depths[0]) {
						currentDepths = [context].concat(depths);
					}

					return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
				}

				prog = executeDecorators(fn, prog, container, depths, data, blockParams);

				prog.program = i;
				prog.depth = depths ? depths.length : 0;
				prog.blockParams = declaredBlockParams || 0;
				return prog;
			}

			function resolvePartial(partial, context, options) {
				if (!partial) {
					if (options.name === '@partial-block') {
						partial = options.data['partial-block'];
					} else {
						partial = options.partials[options.name];
					}
				} else if (!partial.call && !options.name) {
					// This is a dynamic partial that returned a string
					options.name = partial;
					partial = options.partials[partial];
				}
				return partial;
			}

			function invokePartial(partial, context, options) {
				options.partial = true;
				if (options.ids) {
					options.data.contextPath = options.ids[0] || options.data.contextPath;
				}

				var partialBlock = undefined;
				if (options.fn && options.fn !== noop) {
					options.data = _base.createFrame(options.data);
					partialBlock = options.data['partial-block'] = options.fn;

					if (partialBlock.partials) {
						options.partials = Utils.extend({}, options.partials, partialBlock.partials);
					}
				}

				if (partial === undefined && partialBlock) {
					partial = partialBlock;
				}

				if (partial === undefined) {
					throw new _exception2['default']('The partial ' + options.name + ' could not be found');
				} else if (partial instanceof Function) {
					return partial(context, options);
				}
			}

			function noop() {
				return '';
			}

			function initData(context, data) {
				if (!data || !('root' in data)) {
					data = data ? _base.createFrame(data) : {};
					data.root = context;
				}
				return data;
			}

			function executeDecorators(fn, prog, container, depths, data, blockParams) {
				if (fn.decorator) {
					var props = {};
					prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
					Utils.extend(prog, props);
				}
				return prog;
			}

			/***/
		},
		/* 20 */
		/***/
		function (module, exports) {

			/* WEBPACK VAR INJECTION */
			(function (global) { /* global window */
				'use strict';

				exports.__esModule = true;

				exports['default'] = function (Handlebars) {
					/* istanbul ignore next */
					var root = typeof global !== 'undefined' ? global : window,
						$Handlebars = root.Handlebars;
					/* istanbul ignore next */
					Handlebars.noConflict = function () {
						if (root.Handlebars === Handlebars) {
							root.Handlebars = $Handlebars;
						}
						return Handlebars;
					};
				};

				module.exports = exports['default'];
				/* WEBPACK VAR INJECTION */
			}.call(exports, (function () {
				return this;
			}())))

			/***/
		},
		/* 21 */
		/***/
		function (module, exports) {

			'use strict';

			exports.__esModule = true;
			var AST = {
				// Public API used to evaluate derived attributes regarding AST nodes
				helpers: {
					// a mustache is definitely a helper if:
					// * it is an eligible helper, and
					// * it has at least one parameter or hash segment
					helperExpression: function helperExpression(node) {
						return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
					},

					scopedId: function scopedId(path) {
						return (/^\.|this\b/.test(path.original));
					},

					// an ID is simple if it only has one part, and that part is not
					// `..` or `this`.
					simpleId: function simpleId(path) {
						return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
					}
				}
			};

			// Must be exported as an object rather than the root of the module as the jison lexer
			// must modify the object to operate properly.
			exports['default'] = AST;
			module.exports = exports['default'];

			/***/
		},
		/* 22 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			var _interopRequireWildcard = __webpack_require__(3)['default'];

			exports.__esModule = true;
			exports.parse = parse;

			var _parser = __webpack_require__(23);

			var _parser2 = _interopRequireDefault(_parser);

			var _whitespaceControl = __webpack_require__(24);

			var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

			var _helpers = __webpack_require__(26);

			var Helpers = _interopRequireWildcard(_helpers);

			var _utils = __webpack_require__(5);

			exports.parser = _parser2['default'];

			var yy = {};
			_utils.extend(yy, Helpers);

			function parse(input, options) {
				// Just return if an already-compiled AST was passed in.
				if (input.type === 'Program') {
					return input;
				}

				_parser2['default'].yy = yy;

				// Altering the shared object here, but this is ok as parser is a sync operation
				yy.locInfo = function (locInfo) {
					return new yy.SourceLocation(options && options.srcName, locInfo);
				};

				var strip = new _whitespaceControl2['default'](options);
				return strip.accept(_parser2['default'].parse(input));
			}

			/***/
		},
		/* 23 */
		/***/
		function (module, exports) {

			/* istanbul ignore next */
			/* Jison generated parser */
			"use strict";

			var handlebars = (function () {
				var parser = {
					trace: function trace() {},
					yy: {},
					symbols_: {
						"error": 2,
						"root": 3,
						"program": 4,
						"EOF": 5,
						"program_repetition0": 6,
						"statement": 7,
						"mustache": 8,
						"block": 9,
						"rawBlock": 10,
						"partial": 11,
						"partialBlock": 12,
						"content": 13,
						"COMMENT": 14,
						"CONTENT": 15,
						"openRawBlock": 16,
						"rawBlock_repetition_plus0": 17,
						"END_RAW_BLOCK": 18,
						"OPEN_RAW_BLOCK": 19,
						"helperName": 20,
						"openRawBlock_repetition0": 21,
						"openRawBlock_option0": 22,
						"CLOSE_RAW_BLOCK": 23,
						"openBlock": 24,
						"block_option0": 25,
						"closeBlock": 26,
						"openInverse": 27,
						"block_option1": 28,
						"OPEN_BLOCK": 29,
						"openBlock_repetition0": 30,
						"openBlock_option0": 31,
						"openBlock_option1": 32,
						"CLOSE": 33,
						"OPEN_INVERSE": 34,
						"openInverse_repetition0": 35,
						"openInverse_option0": 36,
						"openInverse_option1": 37,
						"openInverseChain": 38,
						"OPEN_INVERSE_CHAIN": 39,
						"openInverseChain_repetition0": 40,
						"openInverseChain_option0": 41,
						"openInverseChain_option1": 42,
						"inverseAndProgram": 43,
						"INVERSE": 44,
						"inverseChain": 45,
						"inverseChain_option0": 46,
						"OPEN_ENDBLOCK": 47,
						"OPEN": 48,
						"mustache_repetition0": 49,
						"mustache_option0": 50,
						"OPEN_UNESCAPED": 51,
						"mustache_repetition1": 52,
						"mustache_option1": 53,
						"CLOSE_UNESCAPED": 54,
						"OPEN_PARTIAL": 55,
						"partialName": 56,
						"partial_repetition0": 57,
						"partial_option0": 58,
						"openPartialBlock": 59,
						"OPEN_PARTIAL_BLOCK": 60,
						"openPartialBlock_repetition0": 61,
						"openPartialBlock_option0": 62,
						"param": 63,
						"sexpr": 64,
						"OPEN_SEXPR": 65,
						"sexpr_repetition0": 66,
						"sexpr_option0": 67,
						"CLOSE_SEXPR": 68,
						"hash": 69,
						"hash_repetition_plus0": 70,
						"hashSegment": 71,
						"ID": 72,
						"EQUALS": 73,
						"blockParams": 74,
						"OPEN_BLOCK_PARAMS": 75,
						"blockParams_repetition_plus0": 76,
						"CLOSE_BLOCK_PARAMS": 77,
						"path": 78,
						"dataName": 79,
						"STRING": 80,
						"NUMBER": 81,
						"BOOLEAN": 82,
						"UNDEFINED": 83,
						"NULL": 84,
						"DATA": 85,
						"pathSegments": 86,
						"SEP": 87,
						"$accept": 0,
						"$end": 1
					},
					terminals_: {
						2: "error",
						5: "EOF",
						14: "COMMENT",
						15: "CONTENT",
						18: "END_RAW_BLOCK",
						19: "OPEN_RAW_BLOCK",
						23: "CLOSE_RAW_BLOCK",
						29: "OPEN_BLOCK",
						33: "CLOSE",
						34: "OPEN_INVERSE",
						39: "OPEN_INVERSE_CHAIN",
						44: "INVERSE",
						47: "OPEN_ENDBLOCK",
						48: "OPEN",
						51: "OPEN_UNESCAPED",
						54: "CLOSE_UNESCAPED",
						55: "OPEN_PARTIAL",
						60: "OPEN_PARTIAL_BLOCK",
						65: "OPEN_SEXPR",
						68: "CLOSE_SEXPR",
						72: "ID",
						73: "EQUALS",
						75: "OPEN_BLOCK_PARAMS",
						77: "CLOSE_BLOCK_PARAMS",
						80: "STRING",
						81: "NUMBER",
						82: "BOOLEAN",
						83: "UNDEFINED",
						84: "NULL",
						85: "DATA",
						87: "SEP"
					},
					productions_: [0, [3, 2],
						[4, 1],
						[7, 1],
						[7, 1],
						[7, 1],
						[7, 1],
						[7, 1],
						[7, 1],
						[7, 1],
						[13, 1],
						[10, 3],
						[16, 5],
						[9, 4],
						[9, 4],
						[24, 6],
						[27, 6],
						[38, 6],
						[43, 2],
						[45, 3],
						[45, 1],
						[26, 3],
						[8, 5],
						[8, 5],
						[11, 5],
						[12, 3],
						[59, 5],
						[63, 1],
						[63, 1],
						[64, 5],
						[69, 1],
						[71, 3],
						[74, 3],
						[20, 1],
						[20, 1],
						[20, 1],
						[20, 1],
						[20, 1],
						[20, 1],
						[20, 1],
						[56, 1],
						[56, 1],
						[79, 2],
						[78, 1],
						[86, 3],
						[86, 1],
						[6, 0],
						[6, 2],
						[17, 1],
						[17, 2],
						[21, 0],
						[21, 2],
						[22, 0],
						[22, 1],
						[25, 0],
						[25, 1],
						[28, 0],
						[28, 1],
						[30, 0],
						[30, 2],
						[31, 0],
						[31, 1],
						[32, 0],
						[32, 1],
						[35, 0],
						[35, 2],
						[36, 0],
						[36, 1],
						[37, 0],
						[37, 1],
						[40, 0],
						[40, 2],
						[41, 0],
						[41, 1],
						[42, 0],
						[42, 1],
						[46, 0],
						[46, 1],
						[49, 0],
						[49, 2],
						[50, 0],
						[50, 1],
						[52, 0],
						[52, 2],
						[53, 0],
						[53, 1],
						[57, 0],
						[57, 2],
						[58, 0],
						[58, 1],
						[61, 0],
						[61, 2],
						[62, 0],
						[62, 1],
						[66, 0],
						[66, 2],
						[67, 0],
						[67, 1],
						[70, 1],
						[70, 2],
						[76, 1],
						[76, 2]
					],
					performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
						/**/
					) {

						var $0 = $$.length - 1;
						switch (yystate) {
							case 1:
								return $$[$0 - 1];
								break;
							case 2:
								this.$ = yy.prepareProgram($$[$0]);
								break;
							case 3:
								this.$ = $$[$0];
								break;
							case 4:
								this.$ = $$[$0];
								break;
							case 5:
								this.$ = $$[$0];
								break;
							case 6:
								this.$ = $$[$0];
								break;
							case 7:
								this.$ = $$[$0];
								break;
							case 8:
								this.$ = $$[$0];
								break;
							case 9:
								this.$ = {
									type: 'CommentStatement',
									value: yy.stripComment($$[$0]),
									strip: yy.stripFlags($$[$0], $$[$0]),
									loc: yy.locInfo(this._$)
								};

								break;
							case 10:
								this.$ = {
									type: 'ContentStatement',
									original: $$[$0],
									value: $$[$0],
									loc: yy.locInfo(this._$)
								};

								break;
							case 11:
								this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
								break;
							case 12:
								this.$ = {
									path: $$[$0 - 3],
									params: $$[$0 - 2],
									hash: $$[$0 - 1]
								};
								break;
							case 13:
								this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
								break;
							case 14:
								this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
								break;
							case 15:
								this.$ = {
									open: $$[$0 - 5],
									path: $$[$0 - 4],
									params: $$[$0 - 3],
									hash: $$[$0 - 2],
									blockParams: $$[$0 - 1],
									strip: yy.stripFlags($$[$0 - 5], $$[$0])
								};
								break;
							case 16:
								this.$ = {
									path: $$[$0 - 4],
									params: $$[$0 - 3],
									hash: $$[$0 - 2],
									blockParams: $$[$0 - 1],
									strip: yy.stripFlags($$[$0 - 5], $$[$0])
								};
								break;
							case 17:
								this.$ = {
									path: $$[$0 - 4],
									params: $$[$0 - 3],
									hash: $$[$0 - 2],
									blockParams: $$[$0 - 1],
									strip: yy.stripFlags($$[$0 - 5], $$[$0])
								};
								break;
							case 18:
								this.$ = {
									strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
									program: $$[$0]
								};
								break;
							case 19:
								var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
									program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
								program.chained = true;

								this.$ = {
									strip: $$[$0 - 2].strip,
									program: program,
									chain: true
								};

								break;
							case 20:
								this.$ = $$[$0];
								break;
							case 21:
								this.$ = {
									path: $$[$0 - 1],
									strip: yy.stripFlags($$[$0 - 2], $$[$0])
								};
								break;
							case 22:
								this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
								break;
							case 23:
								this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
								break;
							case 24:
								this.$ = {
									type: 'PartialStatement',
									name: $$[$0 - 3],
									params: $$[$0 - 2],
									hash: $$[$0 - 1],
									indent: '',
									strip: yy.stripFlags($$[$0 - 4], $$[$0]),
									loc: yy.locInfo(this._$)
								};

								break;
							case 25:
								this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
								break;
							case 26:
								this.$ = {
									path: $$[$0 - 3],
									params: $$[$0 - 2],
									hash: $$[$0 - 1],
									strip: yy.stripFlags($$[$0 - 4], $$[$0])
								};
								break;
							case 27:
								this.$ = $$[$0];
								break;
							case 28:
								this.$ = $$[$0];
								break;
							case 29:
								this.$ = {
									type: 'SubExpression',
									path: $$[$0 - 3],
									params: $$[$0 - 2],
									hash: $$[$0 - 1],
									loc: yy.locInfo(this._$)
								};

								break;
							case 30:
								this.$ = {
									type: 'Hash',
									pairs: $$[$0],
									loc: yy.locInfo(this._$)
								};
								break;
							case 31:
								this.$ = {
									type: 'HashPair',
									key: yy.id($$[$0 - 2]),
									value: $$[$0],
									loc: yy.locInfo(this._$)
								};
								break;
							case 32:
								this.$ = yy.id($$[$0 - 1]);
								break;
							case 33:
								this.$ = $$[$0];
								break;
							case 34:
								this.$ = $$[$0];
								break;
							case 35:
								this.$ = {
									type: 'StringLiteral',
									value: $$[$0],
									original: $$[$0],
									loc: yy.locInfo(this._$)
								};
								break;
							case 36:
								this.$ = {
									type: 'NumberLiteral',
									value: Number($$[$0]),
									original: Number($$[$0]),
									loc: yy.locInfo(this._$)
								};
								break;
							case 37:
								this.$ = {
									type: 'BooleanLiteral',
									value: $$[$0] === 'true',
									original: $$[$0] === 'true',
									loc: yy.locInfo(this._$)
								};
								break;
							case 38:
								this.$ = {
									type: 'UndefinedLiteral',
									original: undefined,
									value: undefined,
									loc: yy.locInfo(this._$)
								};
								break;
							case 39:
								this.$ = {
									type: 'NullLiteral',
									original: null,
									value: null,
									loc: yy.locInfo(this._$)
								};
								break;
							case 40:
								this.$ = $$[$0];
								break;
							case 41:
								this.$ = $$[$0];
								break;
							case 42:
								this.$ = yy.preparePath(true, $$[$0], this._$);
								break;
							case 43:
								this.$ = yy.preparePath(false, $$[$0], this._$);
								break;
							case 44:
								$$[$0 - 2].push({
									part: yy.id($$[$0]),
									original: $$[$0],
									separator: $$[$0 - 1]
								});
								this.$ = $$[$0 - 2];
								break;
							case 45:
								this.$ = [{
									part: yy.id($$[$0]),
									original: $$[$0]
								}];
								break;
							case 46:
								this.$ = [];
								break;
							case 47:
								$$[$0 - 1].push($$[$0]);
								break;
							case 48:
								this.$ = [$$[$0]];
								break;
							case 49:
								$$[$0 - 1].push($$[$0]);
								break;
							case 50:
								this.$ = [];
								break;
							case 51:
								$$[$0 - 1].push($$[$0]);
								break;
							case 58:
								this.$ = [];
								break;
							case 59:
								$$[$0 - 1].push($$[$0]);
								break;
							case 64:
								this.$ = [];
								break;
							case 65:
								$$[$0 - 1].push($$[$0]);
								break;
							case 70:
								this.$ = [];
								break;
							case 71:
								$$[$0 - 1].push($$[$0]);
								break;
							case 78:
								this.$ = [];
								break;
							case 79:
								$$[$0 - 1].push($$[$0]);
								break;
							case 82:
								this.$ = [];
								break;
							case 83:
								$$[$0 - 1].push($$[$0]);
								break;
							case 86:
								this.$ = [];
								break;
							case 87:
								$$[$0 - 1].push($$[$0]);
								break;
							case 90:
								this.$ = [];
								break;
							case 91:
								$$[$0 - 1].push($$[$0]);
								break;
							case 94:
								this.$ = [];
								break;
							case 95:
								$$[$0 - 1].push($$[$0]);
								break;
							case 98:
								this.$ = [$$[$0]];
								break;
							case 99:
								$$[$0 - 1].push($$[$0]);
								break;
							case 100:
								this.$ = [$$[$0]];
								break;
							case 101:
								$$[$0 - 1].push($$[$0]);
								break;
						}
					},
					table: [{
						3: 1,
						4: 2,
						5: [2, 46],
						6: 3,
						14: [2, 46],
						15: [2, 46],
						19: [2, 46],
						29: [2, 46],
						34: [2, 46],
						48: [2, 46],
						51: [2, 46],
						55: [2, 46],
						60: [2, 46]
					}, {
						1: [3]
					}, {
						5: [1, 4]
					}, {
						5: [2, 2],
						7: 5,
						8: 6,
						9: 7,
						10: 8,
						11: 9,
						12: 10,
						13: 11,
						14: [1, 12],
						15: [1, 20],
						16: 17,
						19: [1, 23],
						24: 15,
						27: 16,
						29: [1, 21],
						34: [1, 22],
						39: [2, 2],
						44: [2, 2],
						47: [2, 2],
						48: [1, 13],
						51: [1, 14],
						55: [1, 18],
						59: 19,
						60: [1, 24]
					}, {
						1: [2, 1]
					}, {
						5: [2, 47],
						14: [2, 47],
						15: [2, 47],
						19: [2, 47],
						29: [2, 47],
						34: [2, 47],
						39: [2, 47],
						44: [2, 47],
						47: [2, 47],
						48: [2, 47],
						51: [2, 47],
						55: [2, 47],
						60: [2, 47]
					}, {
						5: [2, 3],
						14: [2, 3],
						15: [2, 3],
						19: [2, 3],
						29: [2, 3],
						34: [2, 3],
						39: [2, 3],
						44: [2, 3],
						47: [2, 3],
						48: [2, 3],
						51: [2, 3],
						55: [2, 3],
						60: [2, 3]
					}, {
						5: [2, 4],
						14: [2, 4],
						15: [2, 4],
						19: [2, 4],
						29: [2, 4],
						34: [2, 4],
						39: [2, 4],
						44: [2, 4],
						47: [2, 4],
						48: [2, 4],
						51: [2, 4],
						55: [2, 4],
						60: [2, 4]
					}, {
						5: [2, 5],
						14: [2, 5],
						15: [2, 5],
						19: [2, 5],
						29: [2, 5],
						34: [2, 5],
						39: [2, 5],
						44: [2, 5],
						47: [2, 5],
						48: [2, 5],
						51: [2, 5],
						55: [2, 5],
						60: [2, 5]
					}, {
						5: [2, 6],
						14: [2, 6],
						15: [2, 6],
						19: [2, 6],
						29: [2, 6],
						34: [2, 6],
						39: [2, 6],
						44: [2, 6],
						47: [2, 6],
						48: [2, 6],
						51: [2, 6],
						55: [2, 6],
						60: [2, 6]
					}, {
						5: [2, 7],
						14: [2, 7],
						15: [2, 7],
						19: [2, 7],
						29: [2, 7],
						34: [2, 7],
						39: [2, 7],
						44: [2, 7],
						47: [2, 7],
						48: [2, 7],
						51: [2, 7],
						55: [2, 7],
						60: [2, 7]
					}, {
						5: [2, 8],
						14: [2, 8],
						15: [2, 8],
						19: [2, 8],
						29: [2, 8],
						34: [2, 8],
						39: [2, 8],
						44: [2, 8],
						47: [2, 8],
						48: [2, 8],
						51: [2, 8],
						55: [2, 8],
						60: [2, 8]
					}, {
						5: [2, 9],
						14: [2, 9],
						15: [2, 9],
						19: [2, 9],
						29: [2, 9],
						34: [2, 9],
						39: [2, 9],
						44: [2, 9],
						47: [2, 9],
						48: [2, 9],
						51: [2, 9],
						55: [2, 9],
						60: [2, 9]
					}, {
						20: 25,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 36,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						4: 37,
						6: 3,
						14: [2, 46],
						15: [2, 46],
						19: [2, 46],
						29: [2, 46],
						34: [2, 46],
						39: [2, 46],
						44: [2, 46],
						47: [2, 46],
						48: [2, 46],
						51: [2, 46],
						55: [2, 46],
						60: [2, 46]
					}, {
						4: 38,
						6: 3,
						14: [2, 46],
						15: [2, 46],
						19: [2, 46],
						29: [2, 46],
						34: [2, 46],
						44: [2, 46],
						47: [2, 46],
						48: [2, 46],
						51: [2, 46],
						55: [2, 46],
						60: [2, 46]
					}, {
						13: 40,
						15: [1, 20],
						17: 39
					}, {
						20: 42,
						56: 41,
						64: 43,
						65: [1, 44],
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						4: 45,
						6: 3,
						14: [2, 46],
						15: [2, 46],
						19: [2, 46],
						29: [2, 46],
						34: [2, 46],
						47: [2, 46],
						48: [2, 46],
						51: [2, 46],
						55: [2, 46],
						60: [2, 46]
					}, {
						5: [2, 10],
						14: [2, 10],
						15: [2, 10],
						18: [2, 10],
						19: [2, 10],
						29: [2, 10],
						34: [2, 10],
						39: [2, 10],
						44: [2, 10],
						47: [2, 10],
						48: [2, 10],
						51: [2, 10],
						55: [2, 10],
						60: [2, 10]
					}, {
						20: 46,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 47,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 48,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 42,
						56: 49,
						64: 43,
						65: [1, 44],
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						33: [2, 78],
						49: 50,
						65: [2, 78],
						72: [2, 78],
						80: [2, 78],
						81: [2, 78],
						82: [2, 78],
						83: [2, 78],
						84: [2, 78],
						85: [2, 78]
					}, {
						23: [2, 33],
						33: [2, 33],
						54: [2, 33],
						65: [2, 33],
						68: [2, 33],
						72: [2, 33],
						75: [2, 33],
						80: [2, 33],
						81: [2, 33],
						82: [2, 33],
						83: [2, 33],
						84: [2, 33],
						85: [2, 33]
					}, {
						23: [2, 34],
						33: [2, 34],
						54: [2, 34],
						65: [2, 34],
						68: [2, 34],
						72: [2, 34],
						75: [2, 34],
						80: [2, 34],
						81: [2, 34],
						82: [2, 34],
						83: [2, 34],
						84: [2, 34],
						85: [2, 34]
					}, {
						23: [2, 35],
						33: [2, 35],
						54: [2, 35],
						65: [2, 35],
						68: [2, 35],
						72: [2, 35],
						75: [2, 35],
						80: [2, 35],
						81: [2, 35],
						82: [2, 35],
						83: [2, 35],
						84: [2, 35],
						85: [2, 35]
					}, {
						23: [2, 36],
						33: [2, 36],
						54: [2, 36],
						65: [2, 36],
						68: [2, 36],
						72: [2, 36],
						75: [2, 36],
						80: [2, 36],
						81: [2, 36],
						82: [2, 36],
						83: [2, 36],
						84: [2, 36],
						85: [2, 36]
					}, {
						23: [2, 37],
						33: [2, 37],
						54: [2, 37],
						65: [2, 37],
						68: [2, 37],
						72: [2, 37],
						75: [2, 37],
						80: [2, 37],
						81: [2, 37],
						82: [2, 37],
						83: [2, 37],
						84: [2, 37],
						85: [2, 37]
					}, {
						23: [2, 38],
						33: [2, 38],
						54: [2, 38],
						65: [2, 38],
						68: [2, 38],
						72: [2, 38],
						75: [2, 38],
						80: [2, 38],
						81: [2, 38],
						82: [2, 38],
						83: [2, 38],
						84: [2, 38],
						85: [2, 38]
					}, {
						23: [2, 39],
						33: [2, 39],
						54: [2, 39],
						65: [2, 39],
						68: [2, 39],
						72: [2, 39],
						75: [2, 39],
						80: [2, 39],
						81: [2, 39],
						82: [2, 39],
						83: [2, 39],
						84: [2, 39],
						85: [2, 39]
					}, {
						23: [2, 43],
						33: [2, 43],
						54: [2, 43],
						65: [2, 43],
						68: [2, 43],
						72: [2, 43],
						75: [2, 43],
						80: [2, 43],
						81: [2, 43],
						82: [2, 43],
						83: [2, 43],
						84: [2, 43],
						85: [2, 43],
						87: [1, 51]
					}, {
						72: [1, 35],
						86: 52
					}, {
						23: [2, 45],
						33: [2, 45],
						54: [2, 45],
						65: [2, 45],
						68: [2, 45],
						72: [2, 45],
						75: [2, 45],
						80: [2, 45],
						81: [2, 45],
						82: [2, 45],
						83: [2, 45],
						84: [2, 45],
						85: [2, 45],
						87: [2, 45]
					}, {
						52: 53,
						54: [2, 82],
						65: [2, 82],
						72: [2, 82],
						80: [2, 82],
						81: [2, 82],
						82: [2, 82],
						83: [2, 82],
						84: [2, 82],
						85: [2, 82]
					}, {
						25: 54,
						38: 56,
						39: [1, 58],
						43: 57,
						44: [1, 59],
						45: 55,
						47: [2, 54]
					}, {
						28: 60,
						43: 61,
						44: [1, 59],
						47: [2, 56]
					}, {
						13: 63,
						15: [1, 20],
						18: [1, 62]
					}, {
						15: [2, 48],
						18: [2, 48]
					}, {
						33: [2, 86],
						57: 64,
						65: [2, 86],
						72: [2, 86],
						80: [2, 86],
						81: [2, 86],
						82: [2, 86],
						83: [2, 86],
						84: [2, 86],
						85: [2, 86]
					}, {
						33: [2, 40],
						65: [2, 40],
						72: [2, 40],
						80: [2, 40],
						81: [2, 40],
						82: [2, 40],
						83: [2, 40],
						84: [2, 40],
						85: [2, 40]
					}, {
						33: [2, 41],
						65: [2, 41],
						72: [2, 41],
						80: [2, 41],
						81: [2, 41],
						82: [2, 41],
						83: [2, 41],
						84: [2, 41],
						85: [2, 41]
					}, {
						20: 65,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						26: 66,
						47: [1, 67]
					}, {
						30: 68,
						33: [2, 58],
						65: [2, 58],
						72: [2, 58],
						75: [2, 58],
						80: [2, 58],
						81: [2, 58],
						82: [2, 58],
						83: [2, 58],
						84: [2, 58],
						85: [2, 58]
					}, {
						33: [2, 64],
						35: 69,
						65: [2, 64],
						72: [2, 64],
						75: [2, 64],
						80: [2, 64],
						81: [2, 64],
						82: [2, 64],
						83: [2, 64],
						84: [2, 64],
						85: [2, 64]
					}, {
						21: 70,
						23: [2, 50],
						65: [2, 50],
						72: [2, 50],
						80: [2, 50],
						81: [2, 50],
						82: [2, 50],
						83: [2, 50],
						84: [2, 50],
						85: [2, 50]
					}, {
						33: [2, 90],
						61: 71,
						65: [2, 90],
						72: [2, 90],
						80: [2, 90],
						81: [2, 90],
						82: [2, 90],
						83: [2, 90],
						84: [2, 90],
						85: [2, 90]
					}, {
						20: 75,
						33: [2, 80],
						50: 72,
						63: 73,
						64: 76,
						65: [1, 44],
						69: 74,
						70: 77,
						71: 78,
						72: [1, 79],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						72: [1, 80]
					}, {
						23: [2, 42],
						33: [2, 42],
						54: [2, 42],
						65: [2, 42],
						68: [2, 42],
						72: [2, 42],
						75: [2, 42],
						80: [2, 42],
						81: [2, 42],
						82: [2, 42],
						83: [2, 42],
						84: [2, 42],
						85: [2, 42],
						87: [1, 51]
					}, {
						20: 75,
						53: 81,
						54: [2, 84],
						63: 82,
						64: 76,
						65: [1, 44],
						69: 83,
						70: 77,
						71: 78,
						72: [1, 79],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						26: 84,
						47: [1, 67]
					}, {
						47: [2, 55]
					}, {
						4: 85,
						6: 3,
						14: [2, 46],
						15: [2, 46],
						19: [2, 46],
						29: [2, 46],
						34: [2, 46],
						39: [2, 46],
						44: [2, 46],
						47: [2, 46],
						48: [2, 46],
						51: [2, 46],
						55: [2, 46],
						60: [2, 46]
					}, {
						47: [2, 20]
					}, {
						20: 86,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						4: 87,
						6: 3,
						14: [2, 46],
						15: [2, 46],
						19: [2, 46],
						29: [2, 46],
						34: [2, 46],
						47: [2, 46],
						48: [2, 46],
						51: [2, 46],
						55: [2, 46],
						60: [2, 46]
					}, {
						26: 88,
						47: [1, 67]
					}, {
						47: [2, 57]
					}, {
						5: [2, 11],
						14: [2, 11],
						15: [2, 11],
						19: [2, 11],
						29: [2, 11],
						34: [2, 11],
						39: [2, 11],
						44: [2, 11],
						47: [2, 11],
						48: [2, 11],
						51: [2, 11],
						55: [2, 11],
						60: [2, 11]
					}, {
						15: [2, 49],
						18: [2, 49]
					}, {
						20: 75,
						33: [2, 88],
						58: 89,
						63: 90,
						64: 76,
						65: [1, 44],
						69: 91,
						70: 77,
						71: 78,
						72: [1, 79],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						65: [2, 94],
						66: 92,
						68: [2, 94],
						72: [2, 94],
						80: [2, 94],
						81: [2, 94],
						82: [2, 94],
						83: [2, 94],
						84: [2, 94],
						85: [2, 94]
					}, {
						5: [2, 25],
						14: [2, 25],
						15: [2, 25],
						19: [2, 25],
						29: [2, 25],
						34: [2, 25],
						39: [2, 25],
						44: [2, 25],
						47: [2, 25],
						48: [2, 25],
						51: [2, 25],
						55: [2, 25],
						60: [2, 25]
					}, {
						20: 93,
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 75,
						31: 94,
						33: [2, 60],
						63: 95,
						64: 76,
						65: [1, 44],
						69: 96,
						70: 77,
						71: 78,
						72: [1, 79],
						75: [2, 60],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 75,
						33: [2, 66],
						36: 97,
						63: 98,
						64: 76,
						65: [1, 44],
						69: 99,
						70: 77,
						71: 78,
						72: [1, 79],
						75: [2, 66],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 75,
						22: 100,
						23: [2, 52],
						63: 101,
						64: 76,
						65: [1, 44],
						69: 102,
						70: 77,
						71: 78,
						72: [1, 79],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						20: 75,
						33: [2, 92],
						62: 103,
						63: 104,
						64: 76,
						65: [1, 44],
						69: 105,
						70: 77,
						71: 78,
						72: [1, 79],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						33: [1, 106]
					}, {
						33: [2, 79],
						65: [2, 79],
						72: [2, 79],
						80: [2, 79],
						81: [2, 79],
						82: [2, 79],
						83: [2, 79],
						84: [2, 79],
						85: [2, 79]
					}, {
						33: [2, 81]
					}, {
						23: [2, 27],
						33: [2, 27],
						54: [2, 27],
						65: [2, 27],
						68: [2, 27],
						72: [2, 27],
						75: [2, 27],
						80: [2, 27],
						81: [2, 27],
						82: [2, 27],
						83: [2, 27],
						84: [2, 27],
						85: [2, 27]
					}, {
						23: [2, 28],
						33: [2, 28],
						54: [2, 28],
						65: [2, 28],
						68: [2, 28],
						72: [2, 28],
						75: [2, 28],
						80: [2, 28],
						81: [2, 28],
						82: [2, 28],
						83: [2, 28],
						84: [2, 28],
						85: [2, 28]
					}, {
						23: [2, 30],
						33: [2, 30],
						54: [2, 30],
						68: [2, 30],
						71: 107,
						72: [1, 108],
						75: [2, 30]
					}, {
						23: [2, 98],
						33: [2, 98],
						54: [2, 98],
						68: [2, 98],
						72: [2, 98],
						75: [2, 98]
					}, {
						23: [2, 45],
						33: [2, 45],
						54: [2, 45],
						65: [2, 45],
						68: [2, 45],
						72: [2, 45],
						73: [1, 109],
						75: [2, 45],
						80: [2, 45],
						81: [2, 45],
						82: [2, 45],
						83: [2, 45],
						84: [2, 45],
						85: [2, 45],
						87: [2, 45]
					}, {
						23: [2, 44],
						33: [2, 44],
						54: [2, 44],
						65: [2, 44],
						68: [2, 44],
						72: [2, 44],
						75: [2, 44],
						80: [2, 44],
						81: [2, 44],
						82: [2, 44],
						83: [2, 44],
						84: [2, 44],
						85: [2, 44],
						87: [2, 44]
					}, {
						54: [1, 110]
					}, {
						54: [2, 83],
						65: [2, 83],
						72: [2, 83],
						80: [2, 83],
						81: [2, 83],
						82: [2, 83],
						83: [2, 83],
						84: [2, 83],
						85: [2, 83]
					}, {
						54: [2, 85]
					}, {
						5: [2, 13],
						14: [2, 13],
						15: [2, 13],
						19: [2, 13],
						29: [2, 13],
						34: [2, 13],
						39: [2, 13],
						44: [2, 13],
						47: [2, 13],
						48: [2, 13],
						51: [2, 13],
						55: [2, 13],
						60: [2, 13]
					}, {
						38: 56,
						39: [1, 58],
						43: 57,
						44: [1, 59],
						45: 112,
						46: 111,
						47: [2, 76]
					}, {
						33: [2, 70],
						40: 113,
						65: [2, 70],
						72: [2, 70],
						75: [2, 70],
						80: [2, 70],
						81: [2, 70],
						82: [2, 70],
						83: [2, 70],
						84: [2, 70],
						85: [2, 70]
					}, {
						47: [2, 18]
					}, {
						5: [2, 14],
						14: [2, 14],
						15: [2, 14],
						19: [2, 14],
						29: [2, 14],
						34: [2, 14],
						39: [2, 14],
						44: [2, 14],
						47: [2, 14],
						48: [2, 14],
						51: [2, 14],
						55: [2, 14],
						60: [2, 14]
					}, {
						33: [1, 114]
					}, {
						33: [2, 87],
						65: [2, 87],
						72: [2, 87],
						80: [2, 87],
						81: [2, 87],
						82: [2, 87],
						83: [2, 87],
						84: [2, 87],
						85: [2, 87]
					}, {
						33: [2, 89]
					}, {
						20: 75,
						63: 116,
						64: 76,
						65: [1, 44],
						67: 115,
						68: [2, 96],
						69: 117,
						70: 77,
						71: 78,
						72: [1, 79],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						33: [1, 118]
					}, {
						32: 119,
						33: [2, 62],
						74: 120,
						75: [1, 121]
					}, {
						33: [2, 59],
						65: [2, 59],
						72: [2, 59],
						75: [2, 59],
						80: [2, 59],
						81: [2, 59],
						82: [2, 59],
						83: [2, 59],
						84: [2, 59],
						85: [2, 59]
					}, {
						33: [2, 61],
						75: [2, 61]
					}, {
						33: [2, 68],
						37: 122,
						74: 123,
						75: [1, 121]
					}, {
						33: [2, 65],
						65: [2, 65],
						72: [2, 65],
						75: [2, 65],
						80: [2, 65],
						81: [2, 65],
						82: [2, 65],
						83: [2, 65],
						84: [2, 65],
						85: [2, 65]
					}, {
						33: [2, 67],
						75: [2, 67]
					}, {
						23: [1, 124]
					}, {
						23: [2, 51],
						65: [2, 51],
						72: [2, 51],
						80: [2, 51],
						81: [2, 51],
						82: [2, 51],
						83: [2, 51],
						84: [2, 51],
						85: [2, 51]
					}, {
						23: [2, 53]
					}, {
						33: [1, 125]
					}, {
						33: [2, 91],
						65: [2, 91],
						72: [2, 91],
						80: [2, 91],
						81: [2, 91],
						82: [2, 91],
						83: [2, 91],
						84: [2, 91],
						85: [2, 91]
					}, {
						33: [2, 93]
					}, {
						5: [2, 22],
						14: [2, 22],
						15: [2, 22],
						19: [2, 22],
						29: [2, 22],
						34: [2, 22],
						39: [2, 22],
						44: [2, 22],
						47: [2, 22],
						48: [2, 22],
						51: [2, 22],
						55: [2, 22],
						60: [2, 22]
					}, {
						23: [2, 99],
						33: [2, 99],
						54: [2, 99],
						68: [2, 99],
						72: [2, 99],
						75: [2, 99]
					}, {
						73: [1, 109]
					}, {
						20: 75,
						63: 126,
						64: 76,
						65: [1, 44],
						72: [1, 35],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						5: [2, 23],
						14: [2, 23],
						15: [2, 23],
						19: [2, 23],
						29: [2, 23],
						34: [2, 23],
						39: [2, 23],
						44: [2, 23],
						47: [2, 23],
						48: [2, 23],
						51: [2, 23],
						55: [2, 23],
						60: [2, 23]
					}, {
						47: [2, 19]
					}, {
						47: [2, 77]
					}, {
						20: 75,
						33: [2, 72],
						41: 127,
						63: 128,
						64: 76,
						65: [1, 44],
						69: 129,
						70: 77,
						71: 78,
						72: [1, 79],
						75: [2, 72],
						78: 26,
						79: 27,
						80: [1, 28],
						81: [1, 29],
						82: [1, 30],
						83: [1, 31],
						84: [1, 32],
						85: [1, 34],
						86: 33
					}, {
						5: [2, 24],
						14: [2, 24],
						15: [2, 24],
						19: [2, 24],
						29: [2, 24],
						34: [2, 24],
						39: [2, 24],
						44: [2, 24],
						47: [2, 24],
						48: [2, 24],
						51: [2, 24],
						55: [2, 24],
						60: [2, 24]
					}, {
						68: [1, 130]
					}, {
						65: [2, 95],
						68: [2, 95],
						72: [2, 95],
						80: [2, 95],
						81: [2, 95],
						82: [2, 95],
						83: [2, 95],
						84: [2, 95],
						85: [2, 95]
					}, {
						68: [2, 97]
					}, {
						5: [2, 21],
						14: [2, 21],
						15: [2, 21],
						19: [2, 21],
						29: [2, 21],
						34: [2, 21],
						39: [2, 21],
						44: [2, 21],
						47: [2, 21],
						48: [2, 21],
						51: [2, 21],
						55: [2, 21],
						60: [2, 21]
					}, {
						33: [1, 131]
					}, {
						33: [2, 63]
					}, {
						72: [1, 133],
						76: 132
					}, {
						33: [1, 134]
					}, {
						33: [2, 69]
					}, {
						15: [2, 12]
					}, {
						14: [2, 26],
						15: [2, 26],
						19: [2, 26],
						29: [2, 26],
						34: [2, 26],
						47: [2, 26],
						48: [2, 26],
						51: [2, 26],
						55: [2, 26],
						60: [2, 26]
					}, {
						23: [2, 31],
						33: [2, 31],
						54: [2, 31],
						68: [2, 31],
						72: [2, 31],
						75: [2, 31]
					}, {
						33: [2, 74],
						42: 135,
						74: 136,
						75: [1, 121]
					}, {
						33: [2, 71],
						65: [2, 71],
						72: [2, 71],
						75: [2, 71],
						80: [2, 71],
						81: [2, 71],
						82: [2, 71],
						83: [2, 71],
						84: [2, 71],
						85: [2, 71]
					}, {
						33: [2, 73],
						75: [2, 73]
					}, {
						23: [2, 29],
						33: [2, 29],
						54: [2, 29],
						65: [2, 29],
						68: [2, 29],
						72: [2, 29],
						75: [2, 29],
						80: [2, 29],
						81: [2, 29],
						82: [2, 29],
						83: [2, 29],
						84: [2, 29],
						85: [2, 29]
					}, {
						14: [2, 15],
						15: [2, 15],
						19: [2, 15],
						29: [2, 15],
						34: [2, 15],
						39: [2, 15],
						44: [2, 15],
						47: [2, 15],
						48: [2, 15],
						51: [2, 15],
						55: [2, 15],
						60: [2, 15]
					}, {
						72: [1, 138],
						77: [1, 137]
					}, {
						72: [2, 100],
						77: [2, 100]
					}, {
						14: [2, 16],
						15: [2, 16],
						19: [2, 16],
						29: [2, 16],
						34: [2, 16],
						44: [2, 16],
						47: [2, 16],
						48: [2, 16],
						51: [2, 16],
						55: [2, 16],
						60: [2, 16]
					}, {
						33: [1, 139]
					}, {
						33: [2, 75]
					}, {
						33: [2, 32]
					}, {
						72: [2, 101],
						77: [2, 101]
					}, {
						14: [2, 17],
						15: [2, 17],
						19: [2, 17],
						29: [2, 17],
						34: [2, 17],
						39: [2, 17],
						44: [2, 17],
						47: [2, 17],
						48: [2, 17],
						51: [2, 17],
						55: [2, 17],
						60: [2, 17]
					}],
					defaultActions: {
						4: [2, 1],
						55: [2, 55],
						57: [2, 20],
						61: [2, 57],
						74: [2, 81],
						83: [2, 85],
						87: [2, 18],
						91: [2, 89],
						102: [2, 53],
						105: [2, 93],
						111: [2, 19],
						112: [2, 77],
						117: [2, 97],
						120: [2, 63],
						123: [2, 69],
						124: [2, 12],
						136: [2, 75],
						137: [2, 32]
					},
					parseError: function parseError(str, hash) {
						throw new Error(str);
					},
					parse: function parse(input) {
						var self = this,
							stack = [0],
							vstack = [null],
							lstack = [],
							table = this.table,
							yytext = "",
							yylineno = 0,
							yyleng = 0,
							recovering = 0,
							TERROR = 2,
							EOF = 1;
						this.lexer.setInput(input);
						this.lexer.yy = this.yy;
						this.yy.lexer = this.lexer;
						this.yy.parser = this;
						if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
						var yyloc = this.lexer.yylloc;
						lstack.push(yyloc);
						var ranges = this.lexer.options && this.lexer.options.ranges;
						if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;

						function popStack(n) {
							stack.length = stack.length - 2 * n;
							vstack.length = vstack.length - n;
							lstack.length = lstack.length - n;
						}

						function lex() {
							var token;
							token = self.lexer.lex() || 1;
							if (typeof token !== "number") {
								token = self.symbols_[token] || token;
							}
							return token;
						}
						var symbol,
							preErrorSymbol,
							state,
							action,
							a,
							r,
							yyval = {},
							p,
							len,
							newState,
							expected;
						while (true) {
							state = stack[stack.length - 1];
							if (this.defaultActions[state]) {
								action = this.defaultActions[state];
							} else {
								if (symbol === null || typeof symbol == "undefined") {
									symbol = lex();
								}
								action = table[state] && table[state][symbol];
							}
							if (typeof action === "undefined" || !action.length || !action[0]) {
								var errStr = "";
								if (!recovering) {
									expected = [];
									for (p in table[state])
										if (this.terminals_[p] && p > 2) {
											expected.push("'" + this.terminals_[p] + "'");
										}
									if (this.lexer.showPosition) {
										errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
									} else {
										errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
									}
									this.parseError(errStr, {
										text: this.lexer.match,
										token: this.terminals_[symbol] || symbol,
										line: this.lexer.yylineno,
										loc: yyloc,
										expected: expected
									});
								}
							}
							if (action[0] instanceof Array && action.length > 1) {
								throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
							}
							switch (action[0]) {
								case 1:
									stack.push(symbol);
									vstack.push(this.lexer.yytext);
									lstack.push(this.lexer.yylloc);
									stack.push(action[1]);
									symbol = null;
									if (!preErrorSymbol) {
										yyleng = this.lexer.yyleng;
										yytext = this.lexer.yytext;
										yylineno = this.lexer.yylineno;
										yyloc = this.lexer.yylloc;
										if (recovering > 0) recovering--;
									} else {
										symbol = preErrorSymbol;
										preErrorSymbol = null;
									}
									break;
								case 2:
									len = this.productions_[action[1]][1];
									yyval.$ = vstack[vstack.length - len];
									yyval._$ = {
										first_line: lstack[lstack.length - (len || 1)].first_line,
										last_line: lstack[lstack.length - 1].last_line,
										first_column: lstack[lstack.length - (len || 1)].first_column,
										last_column: lstack[lstack.length - 1].last_column
									};
									if (ranges) {
										yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
									}
									r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
									if (typeof r !== "undefined") {
										return r;
									}
									if (len) {
										stack = stack.slice(0, -1 * len * 2);
										vstack = vstack.slice(0, -1 * len);
										lstack = lstack.slice(0, -1 * len);
									}
									stack.push(this.productions_[action[1]][0]);
									vstack.push(yyval.$);
									lstack.push(yyval._$);
									newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
									stack.push(newState);
									break;
								case 3:
									return true;
							}
						}
						return true;
					}
				};
				/* Jison generated lexer */
				var lexer = (function () {
					var lexer = {
						EOF: 1,
						parseError: function parseError(str, hash) {
							if (this.yy.parser) {
								this.yy.parser.parseError(str, hash);
							} else {
								throw new Error(str);
							}
						},
						setInput: function setInput(input) {
							this._input = input;
							this._more = this._less = this.done = false;
							this.yylineno = this.yyleng = 0;
							this.yytext = this.matched = this.match = '';
							this.conditionStack = ['INITIAL'];
							this.yylloc = {
								first_line: 1,
								first_column: 0,
								last_line: 1,
								last_column: 0
							};
							if (this.options.ranges) this.yylloc.range = [0, 0];
							this.offset = 0;
							return this;
						},
						input: function input() {
							var ch = this._input[0];
							this.yytext += ch;
							this.yyleng++;
							this.offset++;
							this.match += ch;
							this.matched += ch;
							var lines = ch.match(/(?:\r\n?|\n).*/g);
							if (lines) {
								this.yylineno++;
								this.yylloc.last_line++;
							} else {
								this.yylloc.last_column++;
							}
							if (this.options.ranges) this.yylloc.range[1]++;

							this._input = this._input.slice(1);
							return ch;
						},
						unput: function unput(ch) {
							var len = ch.length;
							var lines = ch.split(/(?:\r\n?|\n)/g);

							this._input = ch + this._input;
							this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
							//this.yyleng -= len;
							this.offset -= len;
							var oldLines = this.match.split(/(?:\r\n?|\n)/g);
							this.match = this.match.substr(0, this.match.length - 1);
							this.matched = this.matched.substr(0, this.matched.length - 1);

							if (lines.length - 1) this.yylineno -= lines.length - 1;
							var r = this.yylloc.range;

							this.yylloc = {
								first_line: this.yylloc.first_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.first_column,
								last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
							};

							if (this.options.ranges) {
								this.yylloc.range = [r[0], r[0] + this.yyleng - len];
							}
							return this;
						},
						more: function more() {
							this._more = true;
							return this;
						},
						less: function less(n) {
							this.unput(this.match.slice(n));
						},
						pastInput: function pastInput() {
							var past = this.matched.substr(0, this.matched.length - this.match.length);
							return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
						},
						upcomingInput: function upcomingInput() {
							var next = this.match;
							if (next.length < 20) {
								next += this._input.substr(0, 20 - next.length);
							}
							return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
						},
						showPosition: function showPosition() {
							var pre = this.pastInput();
							var c = new Array(pre.length + 1).join("-");
							return pre + this.upcomingInput() + "\n" + c + "^";
						},
						next: function next() {
							if (this.done) {
								return this.EOF;
							}
							if (!this._input) this.done = true;

							var token, match, tempMatch, index, col, lines;
							if (!this._more) {
								this.yytext = '';
								this.match = '';
							}
							var rules = this._currentRules();
							for (var i = 0; i < rules.length; i++) {
								tempMatch = this._input.match(this.rules[rules[i]]);
								if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
									match = tempMatch;
									index = i;
									if (!this.options.flex) break;
								}
							}
							if (match) {
								lines = match[0].match(/(?:\r\n?|\n).*/g);
								if (lines) this.yylineno += lines.length;
								this.yylloc = {
									first_line: this.yylloc.last_line,
									last_line: this.yylineno + 1,
									first_column: this.yylloc.last_column,
									last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
								};
								this.yytext += match[0];
								this.match += match[0];
								this.matches = match;
								this.yyleng = this.yytext.length;
								if (this.options.ranges) {
									this.yylloc.range = [this.offset, this.offset += this.yyleng];
								}
								this._more = false;
								this._input = this._input.slice(match[0].length);
								this.matched += match[0];
								token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
								if (this.done && this._input) this.done = false;
								if (token) return token;
								else return;
							}
							if (this._input === "") {
								return this.EOF;
							} else {
								return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
									text: "",
									token: null,
									line: this.yylineno
								});
							}
						},
						lex: function lex() {
							var r = this.next();
							if (typeof r !== 'undefined') {
								return r;
							} else {
								return this.lex();
							}
						},
						begin: function begin(condition) {
							this.conditionStack.push(condition);
						},
						popState: function popState() {
							return this.conditionStack.pop();
						},
						_currentRules: function _currentRules() {
							return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
						},
						topState: function topState() {
							return this.conditionStack[this.conditionStack.length - 2];
						},
						pushState: function begin(condition) {
							this.begin(condition);
						}
					};
					lexer.options = {};
					lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
						/**/
					) {

						function strip(start, end) {
							return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
						}

						var YYSTATE = YY_START;
						switch ($avoiding_name_collisions) {
							case 0:
								if (yy_.yytext.slice(-2) === "\\\\") {
									strip(0, 1);
									this.begin("mu");
								} else if (yy_.yytext.slice(-1) === "\\") {
									strip(0, 1);
									this.begin("emu");
								} else {
									this.begin("mu");
								}
								if (yy_.yytext) return 15;

								break;
							case 1:
								return 15;
								break;
							case 2:
								this.popState();
								return 15;

								break;
							case 3:
								this.begin('raw');
								return 15;
								break;
							case 4:
								this.popState();
								// Should be using `this.topState()` below, but it currently
								// returns the second top instead of the first top. Opened an
								// issue about it at https://github.com/zaach/jison/issues/291
								if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
									return 15;
								} else {
									yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
									return 'END_RAW_BLOCK';
								}

								break;
							case 5:
								return 15;
								break;
							case 6:
								this.popState();
								return 14;

								break;
							case 7:
								return 65;
								break;
							case 8:
								return 68;
								break;
							case 9:
								return 19;
								break;
							case 10:
								this.popState();
								this.begin('raw');
								return 23;

								break;
							case 11:
								return 55;
								break;
							case 12:
								return 60;
								break;
							case 13:
								return 29;
								break;
							case 14:
								return 47;
								break;
							case 15:
								this.popState();
								return 44;
								break;
							case 16:
								this.popState();
								return 44;
								break;
							case 17:
								return 34;
								break;
							case 18:
								return 39;
								break;
							case 19:
								return 51;
								break;
							case 20:
								return 48;
								break;
							case 21:
								this.unput(yy_.yytext);
								this.popState();
								this.begin('com');

								break;
							case 22:
								this.popState();
								return 14;

								break;
							case 23:
								return 48;
								break;
							case 24:
								return 73;
								break;
							case 25:
								return 72;
								break;
							case 26:
								return 72;
								break;
							case 27:
								return 87;
								break;
							case 28:
								// ignore whitespace
								break;
							case 29:
								this.popState();
								return 54;
								break;
							case 30:
								this.popState();

								return 33;
								break;
							case 31:
								yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
								return 80;
								break;
							case 32:
								yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
								return 80;
								break;
							case 33:
								return 85;
								break;
							case 34:
								return 82;
								break;
							case 35:
								return 82;
								break;
							case 36:
								return 83;
								break;
							case 37:
								return 84;
								break;
							case 38:
								return 81;
								break;
							case 39:
								return 75;
								break;
							case 40:
								return 77;
								break;
							case 41:
								return 72;
								break;
							case 42:
								yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
								return 72;
								break;
							case 43:
								return 'INVALID';
								break;
							case 44:
								return 5;
								break;
						}
					};
					lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
					lexer.conditions = {
						"mu": {
							"rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
							"inclusive": false
						},
						"emu": {
							"rules": [2],
							"inclusive": false
						},
						"com": {
							"rules": [6],
							"inclusive": false
						},
						"raw": {
							"rules": [3, 4, 5],
							"inclusive": false
						},
						"INITIAL": {
							"rules": [0, 1, 44],
							"inclusive": true
						}
					};
					return lexer;
				})();
				parser.lexer = lexer;

				function Parser() {
					this.yy = {};
				}
				Parser.prototype = parser;
				parser.Parser = Parser;
				return new Parser();
			})();
			exports.__esModule = true;
			exports['default'] = handlebars;

			/***/
		},
		/* 24 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _visitor = __webpack_require__(25);

			var _visitor2 = _interopRequireDefault(_visitor);

			function WhitespaceControl() {
				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				this.options = options;
			}
			WhitespaceControl.prototype = new _visitor2['default']();

			WhitespaceControl.prototype.Program = function (program) {
				var doStandalone = !this.options.ignoreStandalone;

				var isRoot = !this.isRootSeen;
				this.isRootSeen = true;

				var body = program.body;
				for (var i = 0, l = body.length; i < l; i++) {
					var current = body[i],
						strip = this.accept(current);

					if (!strip) {
						continue;
					}

					var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
						_isNextWhitespace = isNextWhitespace(body, i, isRoot),
						openStandalone = strip.openStandalone && _isPrevWhitespace,
						closeStandalone = strip.closeStandalone && _isNextWhitespace,
						inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

					if (strip.close) {
						omitRight(body, i, true);
					}
					if (strip.open) {
						omitLeft(body, i, true);
					}

					if (doStandalone && inlineStandalone) {
						omitRight(body, i);

						if (omitLeft(body, i)) {
							// If we are on a standalone node, save the indent info for partials
							if (current.type === 'PartialStatement') {
								// Pull out the whitespace from the final line
								current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
							}
						}
					}
					if (doStandalone && openStandalone) {
						omitRight((current.program || current.inverse).body);

						// Strip out the previous content node if it's whitespace only
						omitLeft(body, i);
					}
					if (doStandalone && closeStandalone) {
						// Always strip the next node
						omitRight(body, i);

						omitLeft((current.inverse || current.program).body);
					}
				}

				return program;
			};

			WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
				this.accept(block.program);
				this.accept(block.inverse);

				// Find the inverse program that is involed with whitespace stripping.
				var program = block.program || block.inverse,
					inverse = block.program && block.inverse,
					firstInverse = inverse,
					lastInverse = inverse;

				if (inverse && inverse.chained) {
					firstInverse = inverse.body[0].program;

					// Walk the inverse chain to find the last inverse that is actually in the chain.
					while (lastInverse.chained) {
						lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
					}
				}

				var strip = {
					open: block.openStrip.open,
					close: block.closeStrip.close,

					// Determine the standalone candiacy. Basically flag our content as being possibly standalone
					// so our parent can determine if we actually are standalone
					openStandalone: isNextWhitespace(program.body),
					closeStandalone: isPrevWhitespace((firstInverse || program).body)
				};

				if (block.openStrip.close) {
					omitRight(program.body, null, true);
				}

				if (inverse) {
					var inverseStrip = block.inverseStrip;

					if (inverseStrip.open) {
						omitLeft(program.body, null, true);
					}

					if (inverseStrip.close) {
						omitRight(firstInverse.body, null, true);
					}
					if (block.closeStrip.open) {
						omitLeft(lastInverse.body, null, true);
					}

					// Find standalone else statments
					if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
						omitLeft(program.body);
						omitRight(firstInverse.body);
					}
				} else if (block.closeStrip.open) {
					omitLeft(program.body, null, true);
				}

				return strip;
			};

			WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
				return mustache.strip;
			};

			WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
				/* istanbul ignore next */
				var strip = node.strip || {};
				return {
					inlineStandalone: true,
					open: strip.open,
					close: strip.close
				};
			};

			function isPrevWhitespace(body, i, isRoot) {
				if (i === undefined) {
					i = body.length;
				}

				// Nodes that end with newlines are considered whitespace (but are special
				// cased for strip operations)
				var prev = body[i - 1],
					sibling = body[i - 2];
				if (!prev) {
					return isRoot;
				}

				if (prev.type === 'ContentStatement') {
					return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
				}
			}

			function isNextWhitespace(body, i, isRoot) {
				if (i === undefined) {
					i = -1;
				}

				var next = body[i + 1],
					sibling = body[i + 2];
				if (!next) {
					return isRoot;
				}

				if (next.type === 'ContentStatement') {
					return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
				}
			}

			// Marks the node to the right of the position as omitted.
			// I.e. {{foo}}' ' will mark the ' ' node as omitted.
			//
			// If i is undefined, then the first child will be marked as such.
			//
			// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
			// content is met.
			function omitRight(body, i, multiple) {
				var current = body[i == null ? 0 : i + 1];
				if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
					return;
				}

				var original = current.value;
				current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
				current.rightStripped = current.value !== original;
			}

			// Marks the node to the left of the position as omitted.
			// I.e. ' '{{foo}} will mark the ' ' node as omitted.
			//
			// If i is undefined then the last child will be marked as such.
			//
			// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
			// content is met.
			function omitLeft(body, i, multiple) {
				var current = body[i == null ? body.length - 1 : i - 1];
				if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
					return;
				}

				// We omit the last node if it's whitespace only and not preceeded by a non-content node.
				var original = current.value;
				current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
				current.leftStripped = current.value !== original;
				return current.leftStripped;
			}

			exports['default'] = WhitespaceControl;
			module.exports = exports['default'];

			/***/
		},
		/* 25 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			function Visitor() {
				this.parents = [];
			}

			Visitor.prototype = {
				constructor: Visitor,
				mutating: false,

				// Visits a given value. If mutating, will replace the value if necessary.
				acceptKey: function acceptKey(node, name) {
					var value = this.accept(node[name]);
					if (this.mutating) {
						// Hacky sanity check: This may have a few false positives for type for the helper
						// methods but will generally do the right thing without a lot of overhead.
						if (value && !Visitor.prototype[value.type]) {
							throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
						}
						node[name] = value;
					}
				},

				// Performs an accept operation with added sanity check to ensure
				// required keys are not removed.
				acceptRequired: function acceptRequired(node, name) {
					this.acceptKey(node, name);

					if (!node[name]) {
						throw new _exception2['default'](node.type + ' requires ' + name);
					}
				},

				// Traverses a given array. If mutating, empty respnses will be removed
				// for child elements.
				acceptArray: function acceptArray(array) {
					for (var i = 0, l = array.length; i < l; i++) {
						this.acceptKey(array, i);

						if (!array[i]) {
							array.splice(i, 1);
							i--;
							l--;
						}
					}
				},

				accept: function accept(object) {
					if (!object) {
						return;
					}

					/* istanbul ignore next: Sanity code */
					if (!this[object.type]) {
						throw new _exception2['default']('Unknown type: ' + object.type, object);
					}

					if (this.current) {
						this.parents.unshift(this.current);
					}
					this.current = object;

					var ret = this[object.type](object);

					this.current = this.parents.shift();

					if (!this.mutating || ret) {
						return ret;
					} else if (ret !== false) {
						return object;
					}
				},

				Program: function Program(program) {
					this.acceptArray(program.body);
				},

				MustacheStatement: visitSubExpression,
				Decorator: visitSubExpression,

				BlockStatement: visitBlock,
				DecoratorBlock: visitBlock,

				PartialStatement: visitPartial,
				PartialBlockStatement: function PartialBlockStatement(partial) {
					visitPartial.call(this, partial);

					this.acceptKey(partial, 'program');
				},

				ContentStatement: function ContentStatement() /* content */ {},
				CommentStatement: function CommentStatement() /* comment */ {},

				SubExpression: visitSubExpression,

				PathExpression: function PathExpression() /* path */ {},

				StringLiteral: function StringLiteral() /* string */ {},
				NumberLiteral: function NumberLiteral() /* number */ {},
				BooleanLiteral: function BooleanLiteral() /* bool */ {},
				UndefinedLiteral: function UndefinedLiteral() /* literal */ {},
				NullLiteral: function NullLiteral() /* literal */ {},

				Hash: function Hash(hash) {
					this.acceptArray(hash.pairs);
				},
				HashPair: function HashPair(pair) {
					this.acceptRequired(pair, 'value');
				}
			};

			function visitSubExpression(mustache) {
				this.acceptRequired(mustache, 'path');
				this.acceptArray(mustache.params);
				this.acceptKey(mustache, 'hash');
			}

			function visitBlock(block) {
				visitSubExpression.call(this, block);

				this.acceptKey(block, 'program');
				this.acceptKey(block, 'inverse');
			}

			function visitPartial(partial) {
				this.acceptRequired(partial, 'name');
				this.acceptArray(partial.params);
				this.acceptKey(partial, 'hash');
			}

			exports['default'] = Visitor;
			module.exports = exports['default'];

			/***/
		},
		/* 26 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.SourceLocation = SourceLocation;
			exports.id = id;
			exports.stripFlags = stripFlags;
			exports.stripComment = stripComment;
			exports.preparePath = preparePath;
			exports.prepareMustache = prepareMustache;
			exports.prepareRawBlock = prepareRawBlock;
			exports.prepareBlock = prepareBlock;
			exports.prepareProgram = prepareProgram;
			exports.preparePartialBlock = preparePartialBlock;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			function validateClose(open, close) {
				close = close.path ? close.path.original : close;

				if (open.path.original !== close) {
					var errorNode = {
						loc: open.path.loc
					};

					throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
				}
			}

			function SourceLocation(source, locInfo) {
				this.source = source;
				this.start = {
					line: locInfo.first_line,
					column: locInfo.first_column
				};
				this.end = {
					line: locInfo.last_line,
					column: locInfo.last_column
				};
			}

			function id(token) {
				if (/^\[.*\]$/.test(token)) {
					return token.substr(1, token.length - 2);
				} else {
					return token;
				}
			}

			function stripFlags(open, close) {
				return {
					open: open.charAt(2) === '~',
					close: close.charAt(close.length - 3) === '~'
				};
			}

			function stripComment(comment) {
				return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
			}

			function preparePath(data, parts, loc) {
				loc = this.locInfo(loc);

				var original = data ? '@' : '',
					dig = [],
					depth = 0,
					depthString = '';

				for (var i = 0, l = parts.length; i < l; i++) {
					var part = parts[i].part,

						// If we have [] syntax then we do not treat path references as operators,
						// i.e. foo.[this] resolves to approximately context.foo['this']
						isLiteral = parts[i].original !== part;
					original += (parts[i].separator || '') + part;

					if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
						if (dig.length > 0) {
							throw new _exception2['default']('Invalid path: ' + original, {
								loc: loc
							});
						} else if (part === '..') {
							depth++;
							depthString += '../';
						}
					} else {
						dig.push(part);
					}
				}

				return {
					type: 'PathExpression',
					data: data,
					depth: depth,
					parts: dig,
					original: original,
					loc: loc
				};
			}

			function prepareMustache(path, params, hash, open, strip, locInfo) {
				// Must use charAt to support IE pre-10
				var escapeFlag = open.charAt(3) || open.charAt(2),
					escaped = escapeFlag !== '{' && escapeFlag !== '&';

				var decorator = /\*/.test(open);
				return {
					type: decorator ? 'Decorator' : 'MustacheStatement',
					path: path,
					params: params,
					hash: hash,
					escaped: escaped,
					strip: strip,
					loc: this.locInfo(locInfo)
				};
			}

			function prepareRawBlock(openRawBlock, contents, close, locInfo) {
				validateClose(openRawBlock, close);

				locInfo = this.locInfo(locInfo);
				var program = {
					type: 'Program',
					body: contents,
					strip: {},
					loc: locInfo
				};

				return {
					type: 'BlockStatement',
					path: openRawBlock.path,
					params: openRawBlock.params,
					hash: openRawBlock.hash,
					program: program,
					openStrip: {},
					inverseStrip: {},
					closeStrip: {},
					loc: locInfo
				};
			}

			function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
				if (close && close.path) {
					validateClose(openBlock, close);
				}

				var decorator = /\*/.test(openBlock.open);

				program.blockParams = openBlock.blockParams;

				var inverse = undefined,
					inverseStrip = undefined;

				if (inverseAndProgram) {
					if (decorator) {
						throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
					}

					if (inverseAndProgram.chain) {
						inverseAndProgram.program.body[0].closeStrip = close.strip;
					}

					inverseStrip = inverseAndProgram.strip;
					inverse = inverseAndProgram.program;
				}

				if (inverted) {
					inverted = inverse;
					inverse = program;
					program = inverted;
				}

				return {
					type: decorator ? 'DecoratorBlock' : 'BlockStatement',
					path: openBlock.path,
					params: openBlock.params,
					hash: openBlock.hash,
					program: program,
					inverse: inverse,
					openStrip: openBlock.strip,
					inverseStrip: inverseStrip,
					closeStrip: close && close.strip,
					loc: this.locInfo(locInfo)
				};
			}

			function prepareProgram(statements, loc) {
				if (!loc && statements.length) {
					var firstLoc = statements[0].loc,
						lastLoc = statements[statements.length - 1].loc;

					/* istanbul ignore else */
					if (firstLoc && lastLoc) {
						loc = {
							source: firstLoc.source,
							start: {
								line: firstLoc.start.line,
								column: firstLoc.start.column
							},
							end: {
								line: lastLoc.end.line,
								column: lastLoc.end.column
							}
						};
					}
				}

				return {
					type: 'Program',
					body: statements,
					strip: {},
					loc: loc
				};
			}

			function preparePartialBlock(open, program, close, locInfo) {
				validateClose(open, close);

				return {
					type: 'PartialBlockStatement',
					name: open.path,
					params: open.params,
					hash: open.hash,
					program: program,
					openStrip: open.strip,
					closeStrip: close && close.strip,
					loc: this.locInfo(locInfo)
				};
			}

			/***/
		},
		/* 27 */
		/***/
		function (module, exports, __webpack_require__) {

			/* eslint-disable new-cap */

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.Compiler = Compiler;
			exports.precompile = precompile;
			exports.compile = compile;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _utils = __webpack_require__(5);

			var _ast = __webpack_require__(21);

			var _ast2 = _interopRequireDefault(_ast);

			var slice = [].slice;

			function Compiler() {}

			// the foundHelper register will disambiguate helper lookup from finding a
			// function in a context. This is necessary for mustache compatibility, which
			// requires that context functions in blocks are evaluated by blockHelperMissing,
			// and then proceed as if the resulting value was provided to blockHelperMissing.

			Compiler.prototype = {
				compiler: Compiler,

				equals: function equals(other) {
					var len = this.opcodes.length;
					if (other.opcodes.length !== len) {
						return false;
					}

					for (var i = 0; i < len; i++) {
						var opcode = this.opcodes[i],
							otherOpcode = other.opcodes[i];
						if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
							return false;
						}
					}

					// We know that length is the same between the two arrays because they are directly tied
					// to the opcode behavior above.
					len = this.children.length;
					for (var i = 0; i < len; i++) {
						if (!this.children[i].equals(other.children[i])) {
							return false;
						}
					}

					return true;
				},

				guid: 0,

				compile: function compile(program, options) {
					this.sourceNode = [];
					this.opcodes = [];
					this.children = [];
					this.options = options;
					this.stringParams = options.stringParams;
					this.trackIds = options.trackIds;

					options.blockParams = options.blockParams || [];

					// These changes will propagate to the other compiler components
					var knownHelpers = options.knownHelpers;
					options.knownHelpers = {
						'helperMissing': true,
						'blockHelperMissing': true,
						'each': true,
						'if': true,
						'unless': true,
						'with': true,
						'log': true,
						'lookup': true
					};
					if (knownHelpers) {
						for (var _name in knownHelpers) {
							/* istanbul ignore else */
							if (_name in knownHelpers) {
								options.knownHelpers[_name] = knownHelpers[_name];
							}
						}
					}

					return this.accept(program);
				},

				compileProgram: function compileProgram(program) {
					var childCompiler = new this.compiler(),
						// eslint-disable-line new-cap
						result = childCompiler.compile(program, this.options),
						guid = this.guid++;

					this.usePartial = this.usePartial || result.usePartial;

					this.children[guid] = result;
					this.useDepths = this.useDepths || result.useDepths;

					return guid;
				},

				accept: function accept(node) {
					/* istanbul ignore next: Sanity code */
					if (!this[node.type]) {
						throw new _exception2['default']('Unknown type: ' + node.type, node);
					}

					this.sourceNode.unshift(node);
					var ret = this[node.type](node);
					this.sourceNode.shift();
					return ret;
				},

				Program: function Program(program) {
					this.options.blockParams.unshift(program.blockParams);

					var body = program.body,
						bodyLength = body.length;
					for (var i = 0; i < bodyLength; i++) {
						this.accept(body[i]);
					}

					this.options.blockParams.shift();

					this.isSimple = bodyLength === 1;
					this.blockParams = program.blockParams ? program.blockParams.length : 0;

					return this;
				},

				BlockStatement: function BlockStatement(block) {
					transformLiteralToPath(block);

					var program = block.program,
						inverse = block.inverse;

					program = program && this.compileProgram(program);
					inverse = inverse && this.compileProgram(inverse);

					var type = this.classifySexpr(block);

					if (type === 'helper') {
						this.helperSexpr(block, program, inverse);
					} else if (type === 'simple') {
						this.simpleSexpr(block);

						// now that the simple mustache is resolved, we need to
						// evaluate it by executing `blockHelperMissing`
						this.opcode('pushProgram', program);
						this.opcode('pushProgram', inverse);
						this.opcode('emptyHash');
						this.opcode('blockValue', block.path.original);
					} else {
						this.ambiguousSexpr(block, program, inverse);

						// now that the simple mustache is resolved, we need to
						// evaluate it by executing `blockHelperMissing`
						this.opcode('pushProgram', program);
						this.opcode('pushProgram', inverse);
						this.opcode('emptyHash');
						this.opcode('ambiguousBlockValue');
					}

					this.opcode('append');
				},

				DecoratorBlock: function DecoratorBlock(decorator) {
					var program = decorator.program && this.compileProgram(decorator.program);
					var params = this.setupFullMustacheParams(decorator, program, undefined),
						path = decorator.path;

					this.useDecorators = true;
					this.opcode('registerDecorator', params.length, path.original);
				},

				PartialStatement: function PartialStatement(partial) {
					this.usePartial = true;

					var program = partial.program;
					if (program) {
						program = this.compileProgram(partial.program);
					}

					var params = partial.params;
					if (params.length > 1) {
						throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
					} else if (!params.length) {
						if (this.options.explicitPartialContext) {
							this.opcode('pushLiteral', 'undefined');
						} else {
							params.push({
								type: 'PathExpression',
								parts: [],
								depth: 0
							});
						}
					}

					var partialName = partial.name.original,
						isDynamic = partial.name.type === 'SubExpression';
					if (isDynamic) {
						this.accept(partial.name);
					}

					this.setupFullMustacheParams(partial, program, undefined, true);

					var indent = partial.indent || '';
					if (this.options.preventIndent && indent) {
						this.opcode('appendContent', indent);
						indent = '';
					}

					this.opcode('invokePartial', isDynamic, partialName, indent);
					this.opcode('append');
				},
				PartialBlockStatement: function PartialBlockStatement(partialBlock) {
					this.PartialStatement(partialBlock);
				},

				MustacheStatement: function MustacheStatement(mustache) {
					this.SubExpression(mustache);

					if (mustache.escaped && !this.options.noEscape) {
						this.opcode('appendEscaped');
					} else {
						this.opcode('append');
					}
				},
				Decorator: function Decorator(decorator) {
					this.DecoratorBlock(decorator);
				},

				ContentStatement: function ContentStatement(content) {
					if (content.value) {
						this.opcode('appendContent', content.value);
					}
				},

				CommentStatement: function CommentStatement() {},

				SubExpression: function SubExpression(sexpr) {
					transformLiteralToPath(sexpr);
					var type = this.classifySexpr(sexpr);

					if (type === 'simple') {
						this.simpleSexpr(sexpr);
					} else if (type === 'helper') {
						this.helperSexpr(sexpr);
					} else {
						this.ambiguousSexpr(sexpr);
					}
				},
				ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
					var path = sexpr.path,
						name = path.parts[0],
						isBlock = program != null || inverse != null;

					this.opcode('getContext', path.depth);

					this.opcode('pushProgram', program);
					this.opcode('pushProgram', inverse);

					path.strict = true;
					this.accept(path);

					this.opcode('invokeAmbiguous', name, isBlock);
				},

				simpleSexpr: function simpleSexpr(sexpr) {
					var path = sexpr.path;
					path.strict = true;
					this.accept(path);
					this.opcode('resolvePossibleLambda');
				},

				helperSexpr: function helperSexpr(sexpr, program, inverse) {
					var params = this.setupFullMustacheParams(sexpr, program, inverse),
						path = sexpr.path,
						name = path.parts[0];

					if (this.options.knownHelpers[name]) {
						this.opcode('invokeKnownHelper', params.length, name);
					} else if (this.options.knownHelpersOnly) {
						throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
					} else {
						path.strict = true;
						path.falsy = true;

						this.accept(path);
						this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
					}
				},

				PathExpression: function PathExpression(path) {
					this.addDepth(path.depth);
					this.opcode('getContext', path.depth);

					var name = path.parts[0],
						scoped = _ast2['default'].helpers.scopedId(path),
						blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

					if (blockParamId) {
						this.opcode('lookupBlockParam', blockParamId, path.parts);
					} else if (!name) {
						// Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
						this.opcode('pushContext');
					} else if (path.data) {
						this.options.data = true;
						this.opcode('lookupData', path.depth, path.parts, path.strict);
					} else {
						this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
					}
				},

				StringLiteral: function StringLiteral(string) {
					this.opcode('pushString', string.value);
				},

				NumberLiteral: function NumberLiteral(number) {
					this.opcode('pushLiteral', number.value);
				},

				BooleanLiteral: function BooleanLiteral(bool) {
					this.opcode('pushLiteral', bool.value);
				},

				UndefinedLiteral: function UndefinedLiteral() {
					this.opcode('pushLiteral', 'undefined');
				},

				NullLiteral: function NullLiteral() {
					this.opcode('pushLiteral', 'null');
				},

				Hash: function Hash(hash) {
					var pairs = hash.pairs,
						i = 0,
						l = pairs.length;

					this.opcode('pushHash');

					for (; i < l; i++) {
						this.pushParam(pairs[i].value);
					}
					while (i--) {
						this.opcode('assignToHash', pairs[i].key);
					}
					this.opcode('popHash');
				},

				// HELPERS
				opcode: function opcode(name) {
					this.opcodes.push({
						opcode: name,
						args: slice.call(arguments, 1),
						loc: this.sourceNode[0].loc
					});
				},

				addDepth: function addDepth(depth) {
					if (!depth) {
						return;
					}

					this.useDepths = true;
				},

				classifySexpr: function classifySexpr(sexpr) {
					var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

					var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

					// a mustache is an eligible helper if:
					// * its id is simple (a single part, not `this` or `..`)
					var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

					// if a mustache is an eligible helper but not a definite
					// helper, it is ambiguous, and will be resolved in a later
					// pass or at runtime.
					var isEligible = !isBlockParam && (isHelper || isSimple);

					// if ambiguous, we can possibly resolve the ambiguity now
					// An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
					if (isEligible && !isHelper) {
						var _name2 = sexpr.path.parts[0],
							options = this.options;

						if (options.knownHelpers[_name2]) {
							isHelper = true;
						} else if (options.knownHelpersOnly) {
							isEligible = false;
						}
					}

					if (isHelper) {
						return 'helper';
					} else if (isEligible) {
						return 'ambiguous';
					} else {
						return 'simple';
					}
				},

				pushParams: function pushParams(params) {
					for (var i = 0, l = params.length; i < l; i++) {
						this.pushParam(params[i]);
					}
				},

				pushParam: function pushParam(val) {
					var value = val.value != null ? val.value : val.original || '';

					if (this.stringParams) {
						if (value.replace) {
							value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
						}

						if (val.depth) {
							this.addDepth(val.depth);
						}
						this.opcode('getContext', val.depth || 0);
						this.opcode('pushStringParam', value, val.type);

						if (val.type === 'SubExpression') {
							// SubExpressions get evaluated and passed in
							// in string params mode.
							this.accept(val);
						}
					} else {
						if (this.trackIds) {
							var blockParamIndex = undefined;
							if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
								blockParamIndex = this.blockParamIndex(val.parts[0]);
							}
							if (blockParamIndex) {
								var blockParamChild = val.parts.slice(1).join('.');
								this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
							} else {
								value = val.original || value;
								if (value.replace) {
									value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
								}

								this.opcode('pushId', val.type, value);
							}
						}
						this.accept(val);
					}
				},

				setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
					var params = sexpr.params;
					this.pushParams(params);

					this.opcode('pushProgram', program);
					this.opcode('pushProgram', inverse);

					if (sexpr.hash) {
						this.accept(sexpr.hash);
					} else {
						this.opcode('emptyHash', omitEmpty);
					}

					return params;
				},

				blockParamIndex: function blockParamIndex(name) {
					for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
						var blockParams = this.options.blockParams[depth],
							param = blockParams && _utils.indexOf(blockParams, name);
						if (blockParams && param >= 0) {
							return [depth, param];
						}
					}
				}
			};

			function precompile(input, options, env) {
				if (input == null || typeof input !== 'string' && input.type !== 'Program') {
					throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
				}

				options = options || {};
				if (!('data' in options)) {
					options.data = true;
				}
				if (options.compat) {
					options.useDepths = true;
				}

				var ast = env.parse(input, options),
					environment = new env.Compiler().compile(ast, options);
				return new env.JavaScriptCompiler().compile(environment, options);
			}

			function compile(input, options, env) {
				if (options === undefined) options = {};

				if (input == null || typeof input !== 'string' && input.type !== 'Program') {
					throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
				}

				if (!('data' in options)) {
					options.data = true;
				}
				if (options.compat) {
					options.useDepths = true;
				}

				var compiled = undefined;

				function compileInput() {
					var ast = env.parse(input, options),
						environment = new env.Compiler().compile(ast, options),
						templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
					return env.template(templateSpec);
				}

				// Template is only compiled on first use and cached after that point.
				function ret(context, execOptions) {
					if (!compiled) {
						compiled = compileInput();
					}
					return compiled.call(this, context, execOptions);
				}
				ret._setup = function (setupOptions) {
					if (!compiled) {
						compiled = compileInput();
					}
					return compiled._setup(setupOptions);
				};
				ret._child = function (i, data, blockParams, depths) {
					if (!compiled) {
						compiled = compileInput();
					}
					return compiled._child(i, data, blockParams, depths);
				};
				return ret;
			}

			function argEquals(a, b) {
				if (a === b) {
					return true;
				}

				if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
					for (var i = 0; i < a.length; i++) {
						if (!argEquals(a[i], b[i])) {
							return false;
						}
					}
					return true;
				}
			}

			function transformLiteralToPath(sexpr) {

				if (!sexpr.path.parts) {
					var literal = sexpr.path;
					// Casting to string here to make false and 0 literal values play nicely with the rest
					// of the system.
					sexpr.path = {
						type: 'PathExpression',
						data: false,
						depth: 0,
						parts: [literal.original + ''],
						original: literal.original + '',
						loc: literal.loc
					};
				}
			}

			/***/
		},
		/* 28 */
		/***/
		function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _base = __webpack_require__(4);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _utils = __webpack_require__(5);

			var _codeGen = __webpack_require__(29);

			var _codeGen2 = _interopRequireDefault(_codeGen);

			function Literal(value) {
				this.value = value;
			}

			function JavaScriptCompiler() {}

			JavaScriptCompiler.prototype = {
				// PUBLIC API: You can override these methods in a subclass to provide
				// alternative compiled forms for name lookup and buffering semantics
				nameLookup: function nameLookup(parent, name /* , type*/ ) {
					if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
						return [parent, '.', name];
					} else {
						return [parent, '[', JSON.stringify(name), ']'];
					}
				},
				depthedLookup: function depthedLookup(name) {
					return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
				},

				compilerInfo: function compilerInfo() {
					var revision = _base.COMPILER_REVISION,
						versions = _base.REVISION_CHANGES[revision];
					return [revision, versions];
				},

				appendToBuffer: function appendToBuffer(source, location, explicit) {
					// Force a source as this simplifies the merge logic.
					if (!_utils.isArray(source)) {
						source = [source];
					}
					source = this.source.wrap(source, location);

					if (this.environment.isSimple) {
						return ['return ', source, ';'];
					} else if (explicit) {
						// This is a case where the buffer operation occurs as a child of another
						// construct, generally braces. We have to explicitly output these buffer
						// operations to ensure that the emitted code goes in the correct location.
						return ['buffer += ', source, ';'];
					} else {
						source.appendToBuffer = true;
						return source;
					}
				},

				initializeBuffer: function initializeBuffer() {
					return this.quotedString('');
				},
				// END PUBLIC API

				compile: function compile(environment, options, context, asObject) {
					this.environment = environment;
					this.options = options;
					this.stringParams = this.options.stringParams;
					this.trackIds = this.options.trackIds;
					this.precompile = !asObject;

					this.name = this.environment.name;
					this.isChild = !!context;
					this.context = context || {
						decorators: [],
						programs: [],
						environments: []
					};

					this.preamble();

					this.stackSlot = 0;
					this.stackVars = [];
					this.aliases = {};
					this.registers = {
						list: []
					};
					this.hashes = [];
					this.compileStack = [];
					this.inlineStack = [];
					this.blockParams = [];

					this.compileChildren(environment, options);

					this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
					this.useBlockParams = this.useBlockParams || environment.useBlockParams;

					var opcodes = environment.opcodes,
						opcode = undefined,
						firstLoc = undefined,
						i = undefined,
						l = undefined;

					for (i = 0, l = opcodes.length; i < l; i++) {
						opcode = opcodes[i];

						this.source.currentLocation = opcode.loc;
						firstLoc = firstLoc || opcode.loc;
						this[opcode.opcode].apply(this, opcode.args);
					}

					// Flush any trailing content that might be pending.
					this.source.currentLocation = firstLoc;
					this.pushSource('');

					/* istanbul ignore next */
					if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
						throw new _exception2['default']('Compile completed with content left on stack');
					}

					if (!this.decorators.isEmpty()) {
						this.useDecorators = true;

						this.decorators.prepend('var decorators = container.decorators;\n');
						this.decorators.push('return fn;');

						if (asObject) {
							this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
						} else {
							this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
							this.decorators.push('}\n');
							this.decorators = this.decorators.merge();
						}
					} else {
						this.decorators = undefined;
					}

					var fn = this.createFunctionContext(asObject);
					if (!this.isChild) {
						var ret = {
							compiler: this.compilerInfo(),
							main: fn
						};

						if (this.decorators) {
							ret.main_d = this.decorators; // eslint-disable-line camelcase
							ret.useDecorators = true;
						}

						var _context = this.context;
						var programs = _context.programs;
						var decorators = _context.decorators;

						for (i = 0, l = programs.length; i < l; i++) {
							if (programs[i]) {
								ret[i] = programs[i];
								if (decorators[i]) {
									ret[i + '_d'] = decorators[i];
									ret.useDecorators = true;
								}
							}
						}

						if (this.environment.usePartial) {
							ret.usePartial = true;
						}
						if (this.options.data) {
							ret.useData = true;
						}
						if (this.useDepths) {
							ret.useDepths = true;
						}
						if (this.useBlockParams) {
							ret.useBlockParams = true;
						}
						if (this.options.compat) {
							ret.compat = true;
						}

						if (!asObject) {
							ret.compiler = JSON.stringify(ret.compiler);

							this.source.currentLocation = {
								start: {
									line: 1,
									column: 0
								}
							};
							ret = this.objectLiteral(ret);

							if (options.srcName) {
								ret = ret.toStringWithSourceMap({
									file: options.destName
								});
								ret.map = ret.map && ret.map.toString();
							} else {
								ret = ret.toString();
							}
						} else {
							ret.compilerOptions = this.options;
						}

						return ret;
					} else {
						return fn;
					}
				},

				preamble: function preamble() {
					// track the last context pushed into place to allow skipping the
					// getContext opcode when it would be a noop
					this.lastContext = 0;
					this.source = new _codeGen2['default'](this.options.srcName);
					this.decorators = new _codeGen2['default'](this.options.srcName);
				},

				createFunctionContext: function createFunctionContext(asObject) {
					var varDeclarations = '';

					var locals = this.stackVars.concat(this.registers.list);
					if (locals.length > 0) {
						varDeclarations += ', ' + locals.join(', ');
					}

					// Generate minimizer alias mappings
					//
					// When using true SourceNodes, this will update all references to the given alias
					// as the source nodes are reused in situ. For the non-source node compilation mode,
					// aliases will not be used, but this case is already being run on the client and
					// we aren't concern about minimizing the template size.
					var aliasCount = 0;
					for (var alias in this.aliases) {
						// eslint-disable-line guard-for-in
						var node = this.aliases[alias];

						if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
							varDeclarations += ', alias' + ++aliasCount + '=' + alias;
							node.children[0] = 'alias' + aliasCount;
						}
					}

					var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

					if (this.useBlockParams || this.useDepths) {
						params.push('blockParams');
					}
					if (this.useDepths) {
						params.push('depths');
					}

					// Perform a second pass over the output to merge content when possible
					var source = this.mergeSource(varDeclarations);

					if (asObject) {
						params.push(source);

						return Function.apply(this, params);
					} else {
						return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
					}
				},
				mergeSource: function mergeSource(varDeclarations) {
					var isSimple = this.environment.isSimple,
						appendOnly = !this.forceBuffer,
						appendFirst = undefined,
						sourceSeen = undefined,
						bufferStart = undefined,
						bufferEnd = undefined;
					this.source.each(function (line) {
						if (line.appendToBuffer) {
							if (bufferStart) {
								line.prepend('  + ');
							} else {
								bufferStart = line;
							}
							bufferEnd = line;
						} else {
							if (bufferStart) {
								if (!sourceSeen) {
									appendFirst = true;
								} else {
									bufferStart.prepend('buffer += ');
								}
								bufferEnd.add(';');
								bufferStart = bufferEnd = undefined;
							}

							sourceSeen = true;
							if (!isSimple) {
								appendOnly = false;
							}
						}
					});

					if (appendOnly) {
						if (bufferStart) {
							bufferStart.prepend('return ');
							bufferEnd.add(';');
						} else if (!sourceSeen) {
							this.source.push('return "";');
						}
					} else {
						varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

						if (bufferStart) {
							bufferStart.prepend('return buffer + ');
							bufferEnd.add(';');
						} else {
							this.source.push('return buffer;');
						}
					}

					if (varDeclarations) {
						this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
					}

					return this.source.merge();
				},

				// [blockValue]
				//
				// On stack, before: hash, inverse, program, value
				// On stack, after: return value of blockHelperMissing
				//
				// The purpose of this opcode is to take a block of the form
				// `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
				// replace it on the stack with the result of properly
				// invoking blockHelperMissing.
				blockValue: function blockValue(name) {
					var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
						params = [this.contextName(0)];
					this.setupHelperArgs(name, 0, params);

					var blockName = this.popStack();
					params.splice(1, 0, blockName);

					this.push(this.source.functionCall(blockHelperMissing, 'call', params));
				},

				// [ambiguousBlockValue]
				//
				// On stack, before: hash, inverse, program, value
				// Compiler value, before: lastHelper=value of last found helper, if any
				// On stack, after, if no lastHelper: same as [blockValue]
				// On stack, after, if lastHelper: value
				ambiguousBlockValue: function ambiguousBlockValue() {
					// We're being a bit cheeky and reusing the options value from the prior exec
					var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
						params = [this.contextName(0)];
					this.setupHelperArgs('', 0, params, true);

					this.flushInline();

					var current = this.topStack();
					params.splice(1, 0, current);

					this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
				},

				// [appendContent]
				//
				// On stack, before: ...
				// On stack, after: ...
				//
				// Appends the string value of `content` to the current buffer
				appendContent: function appendContent(content) {
					if (this.pendingContent) {
						content = this.pendingContent + content;
					} else {
						this.pendingLocation = this.source.currentLocation;
					}

					this.pendingContent = content;
				},

				// [append]
				//
				// On stack, before: value, ...
				// On stack, after: ...
				//
				// Coerces `value` to a String and appends it to the current buffer.
				//
				// If `value` is truthy, or 0, it is coerced into a string and appended
				// Otherwise, the empty string is appended
				append: function append() {
					if (this.isInline()) {
						this.replaceStack(function (current) {
							return [' != null ? ', current, ' : ""'];
						});

						this.pushSource(this.appendToBuffer(this.popStack()));
					} else {
						var local = this.popStack();
						this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
						if (this.environment.isSimple) {
							this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
						}
					}
				},

				// [appendEscaped]
				//
				// On stack, before: value, ...
				// On stack, after: ...
				//
				// Escape `value` and append it to the buffer
				appendEscaped: function appendEscaped() {
					this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
				},

				// [getContext]
				//
				// On stack, before: ...
				// On stack, after: ...
				// Compiler value, after: lastContext=depth
				//
				// Set the value of the `lastContext` compiler value to the depth
				getContext: function getContext(depth) {
					this.lastContext = depth;
				},

				// [pushContext]
				//
				// On stack, before: ...
				// On stack, after: currentContext, ...
				//
				// Pushes the value of the current context onto the stack.
				pushContext: function pushContext() {
					this.pushStackLiteral(this.contextName(this.lastContext));
				},

				// [lookupOnContext]
				//
				// On stack, before: ...
				// On stack, after: currentContext[name], ...
				//
				// Looks up the value of `name` on the current context and pushes
				// it onto the stack.
				lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
					var i = 0;

					if (!scoped && this.options.compat && !this.lastContext) {
						// The depthed query is expected to handle the undefined logic for the root level that
						// is implemented below, so we evaluate that directly in compat mode
						this.push(this.depthedLookup(parts[i++]));
					} else {
						this.pushContext();
					}

					this.resolvePath('context', parts, i, falsy, strict);
				},

				// [lookupBlockParam]
				//
				// On stack, before: ...
				// On stack, after: blockParam[name], ...
				//
				// Looks up the value of `parts` on the given block param and pushes
				// it onto the stack.
				lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
					this.useBlockParams = true;

					this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
					this.resolvePath('context', parts, 1);
				},

				// [lookupData]
				//
				// On stack, before: ...
				// On stack, after: data, ...
				//
				// Push the data lookup operator
				lookupData: function lookupData(depth, parts, strict) {
					if (!depth) {
						this.pushStackLiteral('data');
					} else {
						this.pushStackLiteral('container.data(data, ' + depth + ')');
					}

					this.resolvePath('data', parts, 0, true, strict);
				},

				resolvePath: function resolvePath(type, parts, i, falsy, strict) {
					// istanbul ignore next

					var _this = this;

					if (this.options.strict || this.options.assumeObjects) {
						this.push(strictLookup(this.options.strict && strict, this, parts, type));
						return;
					}

					var len = parts.length;
					for (; i < len; i++) {
						/* eslint-disable no-loop-func */
						this.replaceStack(function (current) {
							var lookup = _this.nameLookup(current, parts[i], type);
							// We want to ensure that zero and false are handled properly if the context (falsy flag)
							// needs to have the special handling for these values.
							if (!falsy) {
								return [' != null ? ', lookup, ' : ', current];
							} else {
								// Otherwise we can use generic falsy handling
								return [' && ', lookup];
							}
						});
						/* eslint-enable no-loop-func */
					}
				},

				// [resolvePossibleLambda]
				//
				// On stack, before: value, ...
				// On stack, after: resolved value, ...
				//
				// If the `value` is a lambda, replace it on the stack by
				// the return value of the lambda
				resolvePossibleLambda: function resolvePossibleLambda() {
					this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
				},

				// [pushStringParam]
				//
				// On stack, before: ...
				// On stack, after: string, currentContext, ...
				//
				// This opcode is designed for use in string mode, which
				// provides the string value of a parameter along with its
				// depth rather than resolving it immediately.
				pushStringParam: function pushStringParam(string, type) {
					this.pushContext();
					this.pushString(type);

					// If it's a subexpression, the string result
					// will be pushed after this opcode.
					if (type !== 'SubExpression') {
						if (typeof string === 'string') {
							this.pushString(string);
						} else {
							this.pushStackLiteral(string);
						}
					}
				},

				emptyHash: function emptyHash(omitEmpty) {
					if (this.trackIds) {
						this.push('{}'); // hashIds
					}
					if (this.stringParams) {
						this.push('{}'); // hashContexts
						this.push('{}'); // hashTypes
					}
					this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
				},
				pushHash: function pushHash() {
					if (this.hash) {
						this.hashes.push(this.hash);
					}
					this.hash = {
						values: [],
						types: [],
						contexts: [],
						ids: []
					};
				},
				popHash: function popHash() {
					var hash = this.hash;
					this.hash = this.hashes.pop();

					if (this.trackIds) {
						this.push(this.objectLiteral(hash.ids));
					}
					if (this.stringParams) {
						this.push(this.objectLiteral(hash.contexts));
						this.push(this.objectLiteral(hash.types));
					}

					this.push(this.objectLiteral(hash.values));
				},

				// [pushString]
				//
				// On stack, before: ...
				// On stack, after: quotedString(string), ...
				//
				// Push a quoted version of `string` onto the stack
				pushString: function pushString(string) {
					this.pushStackLiteral(this.quotedString(string));
				},

				// [pushLiteral]
				//
				// On stack, before: ...
				// On stack, after: value, ...
				//
				// Pushes a value onto the stack. This operation prevents
				// the compiler from creating a temporary variable to hold
				// it.
				pushLiteral: function pushLiteral(value) {
					this.pushStackLiteral(value);
				},

				// [pushProgram]
				//
				// On stack, before: ...
				// On stack, after: program(guid), ...
				//
				// Push a program expression onto the stack. This takes
				// a compile-time guid and converts it into a runtime-accessible
				// expression.
				pushProgram: function pushProgram(guid) {
					if (guid != null) {
						this.pushStackLiteral(this.programExpression(guid));
					} else {
						this.pushStackLiteral(null);
					}
				},

				// [registerDecorator]
				//
				// On stack, before: hash, program, params..., ...
				// On stack, after: ...
				//
				// Pops off the decorator's parameters, invokes the decorator,
				// and inserts the decorator into the decorators list.
				registerDecorator: function registerDecorator(paramSize, name) {
					var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
						options = this.setupHelperArgs(name, paramSize);

					this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
				},

				// [invokeHelper]
				//
				// On stack, before: hash, inverse, program, params..., ...
				// On stack, after: result of helper invocation
				//
				// Pops off the helper's parameters, invokes the helper,
				// and pushes the helper's return value onto the stack.
				//
				// If the helper is not found, `helperMissing` is called.
				invokeHelper: function invokeHelper(paramSize, name, isSimple) {
					var nonHelper = this.popStack(),
						helper = this.setupHelper(paramSize, name),
						simple = isSimple ? [helper.name, ' || '] : '';

					var lookup = ['('].concat(simple, nonHelper);
					if (!this.options.strict) {
						lookup.push(' || ', this.aliasable('helpers.helperMissing'));
					}
					lookup.push(')');

					this.push(this.source.functionCall(lookup, 'call', helper.callParams));
				},

				// [invokeKnownHelper]
				//
				// On stack, before: hash, inverse, program, params..., ...
				// On stack, after: result of helper invocation
				//
				// This operation is used when the helper is known to exist,
				// so a `helperMissing` fallback is not required.
				invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
					var helper = this.setupHelper(paramSize, name);
					this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
				},

				// [invokeAmbiguous]
				//
				// On stack, before: hash, inverse, program, params..., ...
				// On stack, after: result of disambiguation
				//
				// This operation is used when an expression like `{{foo}}`
				// is provided, but we don't know at compile-time whether it
				// is a helper or a path.
				//
				// This operation emits more code than the other options,
				// and can be avoided by passing the `knownHelpers` and
				// `knownHelpersOnly` flags at compile-time.
				invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
					this.useRegister('helper');

					var nonHelper = this.popStack();

					this.emptyHash();
					var helper = this.setupHelper(0, name, helperCall);

					var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

					var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
					if (!this.options.strict) {
						lookup[0] = '(helper = ';
						lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
					}

					this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
				},

				// [invokePartial]
				//
				// On stack, before: context, ...
				// On stack after: result of partial invocation
				//
				// This operation pops off a context, invokes a partial with that context,
				// and pushes the result of the invocation back.
				invokePartial: function invokePartial(isDynamic, name, indent) {
					var params = [],
						options = this.setupParams(name, 1, params);

					if (isDynamic) {
						name = this.popStack();
						delete options.name;
					}

					if (indent) {
						options.indent = JSON.stringify(indent);
					}
					options.helpers = 'helpers';
					options.partials = 'partials';
					options.decorators = 'container.decorators';

					if (!isDynamic) {
						params.unshift(this.nameLookup('partials', name, 'partial'));
					} else {
						params.unshift(name);
					}

					if (this.options.compat) {
						options.depths = 'depths';
					}
					options = this.objectLiteral(options);
					params.push(options);

					this.push(this.source.functionCall('container.invokePartial', '', params));
				},

				// [assignToHash]
				//
				// On stack, before: value, ..., hash, ...
				// On stack, after: ..., hash, ...
				//
				// Pops a value off the stack and assigns it to the current hash
				assignToHash: function assignToHash(key) {
					var value = this.popStack(),
						context = undefined,
						type = undefined,
						id = undefined;

					if (this.trackIds) {
						id = this.popStack();
					}
					if (this.stringParams) {
						type = this.popStack();
						context = this.popStack();
					}

					var hash = this.hash;
					if (context) {
						hash.contexts[key] = context;
					}
					if (type) {
						hash.types[key] = type;
					}
					if (id) {
						hash.ids[key] = id;
					}
					hash.values[key] = value;
				},

				pushId: function pushId(type, name, child) {
					if (type === 'BlockParam') {
						this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
					} else if (type === 'PathExpression') {
						this.pushString(name);
					} else if (type === 'SubExpression') {
						this.pushStackLiteral('true');
					} else {
						this.pushStackLiteral('null');
					}
				},

				// HELPERS

				compiler: JavaScriptCompiler,

				compileChildren: function compileChildren(environment, options) {
					var children = environment.children,
						child = undefined,
						compiler = undefined;

					for (var i = 0, l = children.length; i < l; i++) {
						child = children[i];
						compiler = new this.compiler(); // eslint-disable-line new-cap

						var index = this.matchExistingProgram(child);

						if (index == null) {
							this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
							index = this.context.programs.length;
							child.index = index;
							child.name = 'program' + index;
							this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
							this.context.decorators[index] = compiler.decorators;
							this.context.environments[index] = child;

							this.useDepths = this.useDepths || compiler.useDepths;
							this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
						} else {
							child.index = index;
							child.name = 'program' + index;

							this.useDepths = this.useDepths || child.useDepths;
							this.useBlockParams = this.useBlockParams || child.useBlockParams;
						}
					}
				},
				matchExistingProgram: function matchExistingProgram(child) {
					for (var i = 0, len = this.context.environments.length; i < len; i++) {
						var environment = this.context.environments[i];
						if (environment && environment.equals(child)) {
							return i;
						}
					}
				},

				programExpression: function programExpression(guid) {
					var child = this.environment.children[guid],
						programParams = [child.index, 'data', child.blockParams];

					if (this.useBlockParams || this.useDepths) {
						programParams.push('blockParams');
					}
					if (this.useDepths) {
						programParams.push('depths');
					}

					return 'container.program(' + programParams.join(', ') + ')';
				},

				useRegister: function useRegister(name) {
					if (!this.registers[name]) {
						this.registers[name] = true;
						this.registers.list.push(name);
					}
				},

				push: function push(expr) {
					if (!(expr instanceof Literal)) {
						expr = this.source.wrap(expr);
					}

					this.inlineStack.push(expr);
					return expr;
				},

				pushStackLiteral: function pushStackLiteral(item) {
					this.push(new Literal(item));
				},

				pushSource: function pushSource(source) {
					if (this.pendingContent) {
						this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
						this.pendingContent = undefined;
					}

					if (source) {
						this.source.push(source);
					}
				},

				replaceStack: function replaceStack(callback) {
					var prefix = ['('],
						stack = undefined,
						createdStack = undefined,
						usedLiteral = undefined;

					/* istanbul ignore next */
					if (!this.isInline()) {
						throw new _exception2['default']('replaceStack on non-inline');
					}

					// We want to merge the inline statement into the replacement statement via ','
					var top = this.popStack(true);

					if (top instanceof Literal) {
						// Literals do not need to be inlined
						stack = [top.value];
						prefix = ['(', stack];
						usedLiteral = true;
					} else {
						// Get or create the current stack name for use by the inline
						createdStack = true;
						var _name = this.incrStack();

						prefix = ['((', this.push(_name), ' = ', top, ')'];
						stack = this.topStack();
					}

					var item = callback.call(this, stack);

					if (!usedLiteral) {
						this.popStack();
					}
					if (createdStack) {
						this.stackSlot--;
					}
					this.push(prefix.concat(item, ')'));
				},

				incrStack: function incrStack() {
					this.stackSlot++;
					if (this.stackSlot > this.stackVars.length) {
						this.stackVars.push('stack' + this.stackSlot);
					}
					return this.topStackName();
				},
				topStackName: function topStackName() {
					return 'stack' + this.stackSlot;
				},
				flushInline: function flushInline() {
					var inlineStack = this.inlineStack;
					this.inlineStack = [];
					for (var i = 0, len = inlineStack.length; i < len; i++) {
						var entry = inlineStack[i];
						/* istanbul ignore if */
						if (entry instanceof Literal) {
							this.compileStack.push(entry);
						} else {
							var stack = this.incrStack();
							this.pushSource([stack, ' = ', entry, ';']);
							this.compileStack.push(stack);
						}
					}
				},
				isInline: function isInline() {
					return this.inlineStack.length;
				},

				popStack: function popStack(wrapped) {
					var inline = this.isInline(),
						item = (inline ? this.inlineStack : this.compileStack).pop();

					if (!wrapped && item instanceof Literal) {
						return item.value;
					} else {
						if (!inline) {
							/* istanbul ignore next */
							if (!this.stackSlot) {
								throw new _exception2['default']('Invalid stack pop');
							}
							this.stackSlot--;
						}
						return item;
					}
				},

				topStack: function topStack() {
					var stack = this.isInline() ? this.inlineStack : this.compileStack,
						item = stack[stack.length - 1];

					/* istanbul ignore if */
					if (item instanceof Literal) {
						return item.value;
					} else {
						return item;
					}
				},

				contextName: function contextName(context) {
					if (this.useDepths && context) {
						return 'depths[' + context + ']';
					} else {
						return 'depth' + context;
					}
				},

				quotedString: function quotedString(str) {
					return this.source.quotedString(str);
				},

				objectLiteral: function objectLiteral(obj) {
					return this.source.objectLiteral(obj);
				},

				aliasable: function aliasable(name) {
					var ret = this.aliases[name];
					if (ret) {
						ret.referenceCount++;
						return ret;
					}

					ret = this.aliases[name] = this.source.wrap(name);
					ret.aliasable = true;
					ret.referenceCount = 1;

					return ret;
				},

				setupHelper: function setupHelper(paramSize, name, blockHelper) {
					var params = [],
						paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
					var foundHelper = this.nameLookup('helpers', name, 'helper'),
						callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

					return {
						params: params,
						paramsInit: paramsInit,
						name: foundHelper,
						callParams: [callContext].concat(params)
					};
				},

				setupParams: function setupParams(helper, paramSize, params) {
					var options = {},
						contexts = [],
						types = [],
						ids = [],
						objectArgs = !params,
						param = undefined;

					if (objectArgs) {
						params = [];
					}

					options.name = this.quotedString(helper);
					options.hash = this.popStack();

					if (this.trackIds) {
						options.hashIds = this.popStack();
					}
					if (this.stringParams) {
						options.hashTypes = this.popStack();
						options.hashContexts = this.popStack();
					}

					var inverse = this.popStack(),
						program = this.popStack();

					// Avoid setting fn and inverse if neither are set. This allows
					// helpers to do a check for `if (options.fn)`
					if (program || inverse) {
						options.fn = program || 'container.noop';
						options.inverse = inverse || 'container.noop';
					}

					// The parameters go on to the stack in order (making sure that they are evaluated in order)
					// so we need to pop them off the stack in reverse order
					var i = paramSize;
					while (i--) {
						param = this.popStack();
						params[i] = param;

						if (this.trackIds) {
							ids[i] = this.popStack();
						}
						if (this.stringParams) {
							types[i] = this.popStack();
							contexts[i] = this.popStack();
						}
					}

					if (objectArgs) {
						options.args = this.source.generateArray(params);
					}

					if (this.trackIds) {
						options.ids = this.source.generateArray(ids);
					}
					if (this.stringParams) {
						options.types = this.source.generateArray(types);
						options.contexts = this.source.generateArray(contexts);
					}

					if (this.options.data) {
						options.data = 'data';
					}
					if (this.useBlockParams) {
						options.blockParams = 'blockParams';
					}
					return options;
				},

				setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
					var options = this.setupParams(helper, paramSize, params);
					options = this.objectLiteral(options);
					if (useRegister) {
						this.useRegister('options');
						params.push('options');
						return ['options=', options];
					} else if (params) {
						params.push(options);
						return '';
					} else {
						return options;
					}
				}
			};

			(function () {
				var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

				var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

				for (var i = 0, l = reservedWords.length; i < l; i++) {
					compilerWords[reservedWords[i]] = true;
				}
			})();

			JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
				return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
			};

			function strictLookup(requireTerminal, compiler, parts, type) {
				var stack = compiler.popStack(),
					i = 0,
					len = parts.length;
				if (requireTerminal) {
					len--;
				}

				for (; i < len; i++) {
					stack = compiler.nameLookup(stack, parts[i], type);
				}

				if (requireTerminal) {
					return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
				} else {
					return stack;
				}
			}

			exports['default'] = JavaScriptCompiler;
			module.exports = exports['default'];

			/***/
		},
		/* 29 */
		/***/
		function (module, exports, __webpack_require__) {

			/* global define */
			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			var SourceNode = undefined;

			try {
				/* istanbul ignore next */
				if (false) {
					// We don't support this in AMD environments. For these environments, we asusme that
					// they are running on the browser and thus have no need for the source-map library.
					var SourceMap = require('source-map');
					SourceNode = SourceMap.SourceNode;
				}
			} catch (err) {}
			/* NOP */

			/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
			if (!SourceNode) {
				SourceNode = function (line, column, srcFile, chunks) {
					this.src = '';
					if (chunks) {
						this.add(chunks);
					}
				};
				/* istanbul ignore next */
				SourceNode.prototype = {
					add: function add(chunks) {
						if (_utils.isArray(chunks)) {
							chunks = chunks.join('');
						}
						this.src += chunks;
					},
					prepend: function prepend(chunks) {
						if (_utils.isArray(chunks)) {
							chunks = chunks.join('');
						}
						this.src = chunks + this.src;
					},
					toStringWithSourceMap: function toStringWithSourceMap() {
						return {
							code: this.toString()
						};
					},
					toString: function toString() {
						return this.src;
					}
				};
			}

			function castChunk(chunk, codeGen, loc) {
				if (_utils.isArray(chunk)) {
					var ret = [];

					for (var i = 0, len = chunk.length; i < len; i++) {
						ret.push(codeGen.wrap(chunk[i], loc));
					}
					return ret;
				} else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
					// Handle primitives that the SourceNode will throw up on
					return chunk + '';
				}
				return chunk;
			}

			function CodeGen(srcFile) {
				this.srcFile = srcFile;
				this.source = [];
			}

			CodeGen.prototype = {
				isEmpty: function isEmpty() {
					return !this.source.length;
				},
				prepend: function prepend(source, loc) {
					this.source.unshift(this.wrap(source, loc));
				},
				push: function push(source, loc) {
					this.source.push(this.wrap(source, loc));
				},

				merge: function merge() {
					var source = this.empty();
					this.each(function (line) {
						source.add(['  ', line, '\n']);
					});
					return source;
				},

				each: function each(iter) {
					for (var i = 0, len = this.source.length; i < len; i++) {
						iter(this.source[i]);
					}
				},

				empty: function empty() {
					var loc = this.currentLocation || {
						start: {}
					};
					return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
				},
				wrap: function wrap(chunk) {
					var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
						start: {}
					} : arguments[1];

					if (chunk instanceof SourceNode) {
						return chunk;
					}

					chunk = castChunk(chunk, this, loc);

					return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
				},

				functionCall: function functionCall(fn, type, params) {
					params = this.generateList(params);
					return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
				},

				quotedString: function quotedString(str) {
					return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
						.replace(/\u2029/g, '\\u2029') + '"';
				},

				objectLiteral: function objectLiteral(obj) {
					var pairs = [];

					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							var value = castChunk(obj[key], this);
							if (value !== 'undefined') {
								pairs.push([this.quotedString(key), ':', value]);
							}
						}
					}

					var ret = this.generateList(pairs);
					ret.prepend('{');
					ret.add('}');
					return ret;
				},

				generateList: function generateList(entries) {
					var ret = this.empty();

					for (var i = 0, len = entries.length; i < len; i++) {
						if (i) {
							ret.add(',');
						}

						ret.add(castChunk(entries[i], this));
					}

					return ret;
				},

				generateArray: function generateArray(entries) {
					var ret = this.generateList(entries);
					ret.prepend('[');
					ret.add(']');

					return ret;
				}
			};

			exports['default'] = CodeGen;
			module.exports = exports['default'];

			/***/
		}
		/******/
	])
});;; //! moment.js
//! version : 2.17.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function (a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
	"use strict";

	function a() {
		return od.apply(null, arguments)
	}
	// This is done to register the method called with moment()
	// without creating circular dependencies.
	function b(a) {
		od = a
	}

	function c(a) {
		return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		// IE8 will treat undefined and null as object if it wasn't for
		// input != null
		return null != a && "[object Object]" === Object.prototype.toString.call(a)
	}

	function e(a) {
		var b;
		for (b in a)
			// even if its not own property I'd still call it non-empty
			return !1;
		return !0
	}

	function f(a) {
		return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
	}

	function g(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function h(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
		return d
	}

	function i(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function j(a, b) {
		for (var c in b) i(b, c) && (a[c] = b[c]);
		return i(b, "toString") && (a.toString = b.toString), i(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function k(a, b, c, d) {
		return rb(a, b, c, d, !0).utc()
	}

	function l() {
		// We need to deep clone this object.
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1,
			parsedDateParts: [],
			meridiem: null
		}
	}

	function m(a) {
		return null == a._pf && (a._pf = l()), a._pf
	}

	function n(a) {
		if (null == a._isValid) {
			var b = m(a),
				c = qd.call(b.parsedDateParts, function (a) {
					return null != a
				}),
				d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
			if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
			a._isValid = d
		}
		return a._isValid
	}

	function o(a) {
		var b = k(NaN);
		return null != a ? j(m(b), a) : m(b).userInvalidated = !0, b
	}

	function p(a) {
		return void 0 === a
	}

	function q(a, b) {
		var c, d, e;
		if (p(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), p(b._i) || (a._i = b._i), p(b._f) || (a._f = b._f), p(b._l) || (a._l = b._l), p(b._strict) || (a._strict = b._strict), p(b._tzm) || (a._tzm = b._tzm), p(b._isUTC) || (a._isUTC = b._isUTC), p(b._offset) || (a._offset = b._offset), p(b._pf) || (a._pf = m(b)), p(b._locale) || (a._locale = b._locale), rd.length > 0)
			for (c in rd) d = rd[c], e = b[d], p(e) || (a[d] = e);
		return a
	}
	// Moment prototype object
	function r(b) {
		q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)),
			// Prevent infinite loop in case updateOffset creates new moment
			// objects.
			sd === !1 && (sd = !0, a.updateOffset(this), sd = !1)
	}

	function s(a) {
		return a instanceof r || null != a && null != a._isAMomentObject
	}

	function t(a) {
		return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
	}

	function u(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = t(b)), c
	}
	// compare two arrays, return the number of differences
	function v(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
		return g + f
	}

	function w(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function x(b, c) {
		var d = !0;
		return j(function () {
			if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
				for (var e, f = [], g = 0; g < arguments.length; g++) {
					if (e = "", "object" == typeof arguments[g]) {
						e += "\n[" + g + "] ";
						for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
						e = e.slice(0, -2)
					} else e = arguments[g];
					f.push(e)
				}
				w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
			}
			return c.apply(this, arguments)
		}, c)
	}

	function y(b, c) {
		null != a.deprecationHandler && a.deprecationHandler(b, c), td[b] || (w(c), td[b] = !0)
	}

	function z(a) {
		return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
	}

	function A(a) {
		var b, c;
		for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
		this._config = a,
			// Lenient ordinal parsing accepts just a number in addition to
			// number + (possibly) stuff coming from _ordinalParseLenient.
			this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function B(a, b) {
		var c, e = j({}, a);
		for (c in b) i(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, j(e[c], a[c]), j(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
		for (c in a) i(a, c) && !i(b, c) && d(a[c]) && (
			// make sure changes to properties don't modify parent config
			e[c] = j({}, e[c]));
		return e
	}

	function C(a) {
		null != a && this.set(a)
	}

	function D(a, b, c) {
		var d = this._calendar[a] || this._calendar.sameElse;
		return z(d) ? d.call(b, c) : d
	}

	function E(a) {
		var b = this._longDateFormat[a],
			c = this._longDateFormat[a.toUpperCase()];
		return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
			return a.slice(1)
		}), this._longDateFormat[a])
	}

	function F() {
		return this._invalidDate
	}

	function G(a) {
		return this._ordinal.replace("%d", a)
	}

	function H(a, b, c, d) {
		var e = this._relativeTime[c];
		return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function I(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return z(c) ? c(b) : c.replace(/%s/i, b)
	}

	function J(a, b) {
		var c = a.toLowerCase();
		Dd[c] = Dd[c + "s"] = Dd[b] = a
	}

	function K(a) {
		return "string" == typeof a ? Dd[a] || Dd[a.toLowerCase()] : void 0
	}

	function L(a) {
		var b, c, d = {};
		for (c in a) i(a, c) && (b = K(c), b && (d[b] = a[c]));
		return d
	}

	function M(a, b) {
		Ed[a] = b
	}

	function N(a) {
		var b = [];
		for (var c in a) b.push({
			unit: c,
			priority: Ed[c]
		});
		return b.sort(function (a, b) {
			return a.priority - b.priority
		}), b
	}

	function O(b, c) {
		return function (d) {
			return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
		}
	}

	function P(a, b) {
		return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
	}

	function Q(a, b, c) {
		a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}
	// MOMENTS
	function R(a) {
		return a = K(a), z(this[a]) ? this[a]() : this
	}

	function S(a, b) {
		if ("object" == typeof a) {
			a = L(a);
			for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
		} else if (a = K(a), z(this[a])) return this[a](b);
		return this
	}

	function T(a, b, c) {
		var d = "" + Math.abs(a),
			e = b - d.length,
			f = a >= 0;
		return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
	}
	// token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function U(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function () {
			return this[d]()
		}), a && (Id[a] = e), b && (Id[b[0]] = function () {
			return T(e.apply(this, arguments), b[1], b[2])
		}), c && (Id[c] = function () {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function V(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function W(a) {
		var b, c, d = a.match(Fd);
		for (b = 0, c = d.length; b < c; b++) Id[d[b]] ? d[b] = Id[d[b]] : d[b] = V(d[b]);
		return function (b) {
			var e, f = "";
			for (e = 0; e < c; e++) f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
			return f
		}
	}
	// format date using native date object
	function X(a, b) {
		return a.isValid() ? (b = Y(b, a.localeData()), Hd[b] = Hd[b] || W(b), Hd[b](a)) : a.localeData().invalidDate()
	}

	function Y(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (Gd.lastIndex = 0; d >= 0 && Gd.test(a);) a = a.replace(Gd, c), Gd.lastIndex = 0, d -= 1;
		return a
	}

	function Z(a, b, c) {
		$d[a] = z(b) ? b : function (a, d) {
			return a && c ? c : b
		}
	}

	function $(a, b) {
		return i($d, a) ? $d[a](b._strict, b._locale) : new RegExp(_(a))
	}
	// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function _(a) {
		return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
			return b || c || d || e
		}))
	}

	function aa(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function ba(a, b) {
		var c, d = b;
		for ("string" == typeof a && (a = [a]), f(b) && (d = function (a, c) {
				c[b] = u(a)
			}), c = 0; c < a.length; c++) _d[a[c]] = d
	}

	function ca(a, b) {
		ba(a, function (a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function da(a, b, c) {
		null != b && i(_d, a) && _d[a](b, c._a, c, a)
	}

	function ea(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function fa(a, b) {
		return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || ke).test(b) ? "format" : "standalone"][a.month()] : this._months
	}

	function ga(a, b) {
		return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[ke.test(b) ? "format" : "standalone"][a.month()] : this._monthsShort
	}

	function ha(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._monthsParse)
			for (
				// this is not used
				this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = k([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
		return c ? "MMM" === b ? (e = je.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = je.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = je.call(this._shortMonthsParse, g), e !== -1 ? e : (e = je.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = je.call(this._longMonthsParse, g), e !== -1 ? e : (e = je.call(this._shortMonthsParse, g), e !== -1 ? e : null))
	}

	function ia(a, b, c) {
		var d, e, f;
		if (this._monthsParseExact) return ha.call(this, a, b, c);
		// TODO: add sorting
		// Sorting makes sure if one month (or abbr) is a prefix of another
		// see sorting in computeMonthsParse
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
			// test the regex
			if (
				// make the regex if we don't have it already
				e = k([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
			if (!c && this._monthsParse[d].test(a)) return d
		}
	}
	// MOMENTS
	function ja(a, b) {
		var c;
		if (!a.isValid())
			// No op
			return a;
		if ("string" == typeof b)
			if (/^\d+$/.test(b)) b = u(b);
			else
				// TODO: Another silent failure?
				if (b = a.localeData().monthsParse(b), !f(b)) return a;
		return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
	}

	function ka(b) {
		return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
	}

	function la() {
		return ea(this.year(), this.month())
	}

	function ma(a) {
		return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = ne), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function na(a) {
		return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (i(this, "_monthsRegex") || (this._monthsRegex = oe), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
	}

	function oa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d = [],
			e = [],
			f = [];
		for (b = 0; b < 12; b++)
			// make the regex if we don't have it already
			c = k([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
		for (
			// Sorting makes sure if one month (or abbr) is a prefix of another it
			// will match the longer piece.
			d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
		for (b = 0; b < 24; b++) f[b] = aa(f[b]);
		this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
	}
	// HELPERS
	function pa(a) {
		return qa(a) ? 366 : 365
	}

	function qa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function ra() {
		return qa(this.year())
	}

	function sa(a, b, c, d, e, f, g) {
		//can't just apply() to create a date:
		//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
		var h = new Date(a, b, c, d, e, f, g);
		//the date constructor remaps years 0-99 to 1900-1999
		return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
	}

	function ta(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		//the Date.UTC function remaps years 0-99 to 1900-1999
		return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
	}
	// start-of-first-week - start-of-year
	function ua(a, b, c) {
		var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
			d = 7 + b - c,
			// first-week day local weekday -- which local weekday is fwd
			e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
		return -e + d - 1
	}
	//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function va(a, b, c, d, e) {
		var f, g, h = (7 + c - d) % 7,
			i = ua(a, d, e),
			j = 1 + 7 * (b - 1) + h + i;
		return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
			year: f,
			dayOfYear: g
		}
	}

	function wa(a, b, c) {
		var d, e, f = ua(a.year(), b, c),
			g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
		return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
			week: d,
			year: e
		}
	}

	function xa(a, b, c) {
		var d = ua(a, b, c),
			e = ua(a + 1, b, c);
		return (pa(a) - d + e) / 7
	}
	// HELPERS
	// LOCALES
	function ya(a) {
		return wa(a, this._week.dow, this._week.doy).week
	}

	function za() {
		return this._week.dow
	}

	function Aa() {
		return this._week.doy
	}
	// MOMENTS
	function Ba(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ca(a) {
		var b = wa(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}
	// HELPERS
	function Da(a, b) {
		return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
	}

	function Ea(a, b) {
		return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
	}

	function Fa(a, b) {
		return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : this._weekdays
	}

	function Ga(a) {
		return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
	}

	function Ha(a) {
		return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
	}

	function Ia(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._weekdaysParse)
			for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = k([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
		return c ? "dddd" === b ? (e = je.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = je.call(this._weekdaysParse, g), e !== -1 ? e : (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = je.call(this._weekdaysParse, g), e !== -1 ? e : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = je.call(this._weekdaysParse, g), e !== -1 ? e : (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
	}

	function Ja(a, b, c) {
		var d, e, f;
		if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
			// test the regex
			if (
				// make the regex if we don't have it already
				e = k([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
			if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
			if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
			if (!c && this._weekdaysParse[d].test(a)) return d
		}
	}
	// MOMENTS
	function Ka(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function La(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function Ma(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		// behaves the same as moment#day except
		// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		// as a setter, sunday should belong to the previous week.
		if (null != a) {
			var b = Ea(a, this.localeData());
			return this.day(this.day() % 7 ? b : b - 7)
		}
		return this.day() || 7
	}

	function Na(a) {
		return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = ue), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function Oa(a) {
		return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (i(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ve), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function Pa(a) {
		return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = we), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function Qa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d, e, f, g = [],
			h = [],
			i = [],
			j = [];
		for (b = 0; b < 7; b++)
			// make the regex if we don't have it already
			c = k([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
		for (
			// Sorting makes sure if one weekday (or abbr) is a prefix of another it
			// will match the longer piece.
			g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
		this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
	}
	// FORMATTING
	function Ra() {
		return this.hours() % 12 || 12
	}

	function Sa() {
		return this.hours() || 24
	}

	function Ta(a, b) {
		U(a, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}
	// PARSING
	function Ua(a, b) {
		return b._meridiemParse
	}
	// LOCALES
	function Va(a) {
		// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		// Using charAt should be more compatible.
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Wa(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Xa(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}
	// pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function Ya(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = Za(e.slice(0, b).join("-"))) return d;
				if (c && c.length >= b && v(e, c, !0) >= b - 1)
					//the next array item is better than a shallower substring of this one
					break;
				b--
			}
			f++
		}
		return null
	}

	function Za(a) {
		var b = null;
		// TODO: Find a better way to register and load all the locales in Node
		if (!Be[a] && "undefined" != typeof module && module && module.exports) try {
			b = xe._abbr, require("./locale/" + a),
				// because defineLocale currently also sets the global locale, we
				// want to undo that for lazy loaded locales
				$a(b)
		} catch (a) {}
		return Be[a]
	}
	// This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	function $a(a, b) {
		var c;
		// moment.duration._locale = moment._locale = data;
		return a && (c = p(b) ? bb(a) : _a(a, b), c && (xe = c)), xe._abbr
	}

	function _a(a, b) {
		if (null !== b) {
			var c = Ae;
			if (b.abbr = a, null != Be[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Be[a]._config;
			else if (null != b.parentLocale) {
				if (null == Be[b.parentLocale]) return Ce[b.parentLocale] || (Ce[b.parentLocale] = []), Ce[b.parentLocale].push({
					name: a,
					config: b
				}), null;
				c = Be[b.parentLocale]._config
			}
			// backwards compat for now: also set the locale
			// make sure we set the locale AFTER all child locales have been
			// created, so we won't end up with the child locale set.
			return Be[a] = new C(B(c, b)), Ce[a] && Ce[a].forEach(function (a) {
				_a(a.name, a.config)
			}), $a(a), Be[a]
		}
		// useful for testing
		return delete Be[a], null
	}

	function ab(a, b) {
		if (null != b) {
			var c, d = Ae;
			// MERGE
			null != Be[a] && (d = Be[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Be[a], Be[a] = c,
				// backwards compat for now: also set the locale
				$a(a)
		} else
			// pass null for config to unupdate, useful for tests
			null != Be[a] && (null != Be[a].parentLocale ? Be[a] = Be[a].parentLocale : null != Be[a] && delete Be[a]);
		return Be[a]
	}
	// returns locale data
	function bb(a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return xe;
		if (!c(a)) {
			if (
				//short-circuit everything else
				b = Za(a)) return b;
			a = [a]
		}
		return Ya(a)
	}

	function cb() {
		return wd(Be)
	}

	function db(a) {
		var b, c = a._a;
		return c && m(a).overflow === -2 && (b = c[be] < 0 || c[be] > 11 ? be : c[ce] < 1 || c[ce] > ea(c[ae], c[be]) ? ce : c[de] < 0 || c[de] > 24 || 24 === c[de] && (0 !== c[ee] || 0 !== c[fe] || 0 !== c[ge]) ? de : c[ee] < 0 || c[ee] > 59 ? ee : c[fe] < 0 || c[fe] > 59 ? fe : c[ge] < 0 || c[ge] > 999 ? ge : -1, m(a)._overflowDayOfYear && (b < ae || b > ce) && (b = ce), m(a)._overflowWeeks && b === -1 && (b = he), m(a)._overflowWeekday && b === -1 && (b = ie), m(a).overflow = b), a
	}
	// date from iso format
	function eb(a) {
		var b, c, d, e, f, g, h = a._i,
			i = De.exec(h) || Ee.exec(h);
		if (i) {
			for (m(a).iso = !0, b = 0, c = Ge.length; b < c; b++)
				if (Ge[b][1].exec(i[1])) {
					e = Ge[b][0], d = Ge[b][2] !== !1;
					break
				}
			if (null == e) return void(a._isValid = !1);
			if (i[3]) {
				for (b = 0, c = He.length; b < c; b++)
					if (He[b][1].exec(i[3])) {
						// match[2] should be 'T' or space
						f = (i[2] || " ") + He[b][0];
						break
					}
				if (null == f) return void(a._isValid = !1)
			}
			if (!d && null != f) return void(a._isValid = !1);
			if (i[4]) {
				if (!Fe.exec(i[4])) return void(a._isValid = !1);
				g = "Z"
			}
			a._f = e + (f || "") + (g || ""), kb(a)
		} else a._isValid = !1
	}
	// date from iso format or fallback
	function fb(b) {
		var c = Ie.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
	}
	// Pick the first defined of two or three arguments.
	function gb(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function hb(b) {
		// hooks is actually the exported moment object
		var c = new Date(a.now());
		return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
	}
	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function ib(a) {
		var b, c, d, e, f = [];
		if (!a._d) {
			// Default to current date.
			// * if no year, month, day of month are given, default to today
			// * if day of month is given, default month and year
			// * if month is given, default only year
			// * if year is given, don't default anything
			for (d = hb(a),
				//compute day of the year from weeks and weekdays
				a._w && null == a._a[ce] && null == a._a[be] && jb(a),
				//if the day of the year is set, figure out what it is
				a._dayOfYear && (e = gb(a._a[ae], d[ae]), a._dayOfYear > pa(e) && (m(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[be] = c.getUTCMonth(), a._a[ce] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
			// Zero out whatever was not defaulted, including time
			for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			// Check for 24:00:00.000
			24 === a._a[de] && 0 === a._a[ee] && 0 === a._a[fe] && 0 === a._a[ge] && (a._nextDay = !0, a._a[de] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f),
				// Apply timezone offset from input. The actual utcOffset can be changed
				// with parseZone.
				null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[de] = 24)
		}
	}

	function jb(a) {
		var b, c, d, e, f, g, h, i;
		if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4,
			// TODO: We need to take the current isoWeekYear, but that depends on
			// how we interpret now (local, utc, fixed offset). So create
			// a now version of current config (take local/utc/offset flags, and
			// create now).
			c = gb(b.GG, a._a[ae], wa(sb(), 1, 4).year), d = gb(b.W, 1), e = gb(b.E, 1), (e < 1 || e > 7) && (i = !0);
		else {
			f = a._locale._week.dow, g = a._locale._week.doy;
			var j = wa(sb(), f, g);
			c = gb(b.gg, a._a[ae], j.year),
				// Default to current week.
				d = gb(b.w, j.week), null != b.d ? (
					// weekday -- low day numbers are considered next week
					e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (
					// local weekday -- counting starts from begining of week
					e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) :
				// default to begining of week
				e = f
		}
		d < 1 || d > xa(c, f, g) ? m(a)._overflowWeeks = !0 : null != i ? m(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ae] = h.year, a._dayOfYear = h.dayOfYear)
	}
	// date from string and format string
	function kb(b) {
		// TODO: Move this to another part of the creation flow to prevent circular deps
		if (b._f === a.ISO_8601) return void eb(b);
		b._a = [], m(b).empty = !0;
		// This array is used to make a Date, either with `new Date` or `Date.UTC`
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			j = 0;
		for (e = Y(b._f, b._locale).match(Fd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0],
			// console.log('token', token, 'parsedInput', parsedInput,
			//         'regex', getParseRegexForToken(token, config));
			d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && m(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length),
			// don't parse if it's not a known token
			Id[f] ? (d ? m(b).empty = !1 : m(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && m(b).unusedTokens.push(f);
		// add remaining unparsed input length to the string
		m(b).charsLeftOver = i - j, h.length > 0 && m(b).unusedInput.push(h),
			// clear _12h flag if hour is <= 12
			b._a[de] <= 12 && m(b).bigHour === !0 && b._a[de] > 0 && (m(b).bigHour = void 0), m(b).parsedDateParts = b._a.slice(0), m(b).meridiem = b._meridiem,
			// handle meridiem
			b._a[de] = lb(b._locale, b._a[de], b._meridiem), ib(b), db(b)
	}

	function lb(a, b, c) {
		var d;
		// Fallback
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
	}
	// date from string and array of format strings
	function mb(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) return m(a).invalidFormat = !0, void(a._d = new Date(NaN));
		for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], kb(b), n(b) && (
			// if there is any input that was not parsed add a penalty for that format
			f += m(b).charsLeftOver,
			//or tokens
			f += 10 * m(b).unusedTokens.length, m(b).score = f, (null == d || f < d) && (d = f, c = b));
		j(a, c || b)
	}

	function nb(a) {
		if (!a._d) {
			var b = L(a._i);
			a._a = h([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
				return a && parseInt(a, 10)
			}), ib(a)
		}
	}

	function ob(a) {
		var b = new r(db(pb(a)));
		// Adding is smart enough around DST
		return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
	}

	function pb(a) {
		var b = a._i,
			d = a._f;
		return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? o({
			nullInput: !0
		}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (g(b) ? a._d = b : c(d) ? mb(a) : d ? kb(a) : qb(a), n(a) || (a._d = null), a))
	}

	function qb(b) {
		var d = b._i;
		void 0 === d ? b._d = new Date(a.now()) : g(d) ? b._d = new Date(d.valueOf()) : "string" == typeof d ? fb(b) : c(d) ? (b._a = h(d.slice(0), function (a) {
				return parseInt(a, 10)
			}), ib(b)) : "object" == typeof d ? nb(b) : f(d) ?
			// from milliseconds
			b._d = new Date(d) : a.createFromInputFallback(b)
	}

	function rb(a, b, f, g, h) {
		var i = {};
		// object construction must be done this way.
		// https://github.com/moment/moment/issues/1423
		return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, ob(i)
	}

	function sb(a, b, c, d) {
		return rb(a, b, c, d, !1)
	}
	// Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function tb(a, b) {
		var d, e;
		if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return sb();
		for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
		return d
	}
	// TODO: Use [].sort instead?
	function ub() {
		var a = [].slice.call(arguments, 0);
		return tb("isBefore", a)
	}

	function vb() {
		var a = [].slice.call(arguments, 0);
		return tb("isAfter", a)
	}

	function wb(a) {
		var b = L(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		// representation for dateAddRemove
		this._milliseconds = +k + 1e3 * j + // 1000
			6e4 * i + // 1000 * 60
			1e3 * h * 60 * 60, //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
			// Because of dateAddRemove treats 24 hours as different from a
			// day when working around DST, we need to store them separately
			this._days = +g + 7 * f,
			// It is impossible translate months into days without knowing
			// which months you are are talking about, so we have to store
			// it separately.
			this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
	}

	function xb(a) {
		return a instanceof wb
	}

	function yb(a) {
		return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
	}
	// FORMATTING
	function zb(a, b) {
		U(a, 0, 0, function () {
			var a = this.utcOffset(),
				c = "+";
			return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
		})
	}

	function Ab(a, b) {
		var c = (b || "").match(a);
		if (null === c) return null;
		var d = c[c.length - 1] || [],
			e = (d + "").match(Me) || ["-", 0, 0],
			f = +(60 * e[1]) + u(e[2]);
		return 0 === f ? 0 : "+" === e[0] ? f : -f
	}
	// Return a moment from input, that is local/utc/zone equivalent to model.
	function Bb(b, c) {
		var d, e;
		// Use low-level api, because this fn is low-level api.
		return c._isUTC ? (d = c.clone(), e = (s(b) || g(b) ? b.valueOf() : sb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : sb(b).local()
	}

	function Cb(a) {
		// On Firefox.24 Date#getTimezoneOffset returns a floating point.
		// https://github.com/moment/moment/pull/1871
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}
	// MOMENTS
	// keepLocalTime = true means only change the timezone, without
	// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	// +0200, so we adjust the time as needed, to be valid.
	//
	// Keeping the time actually adds/subtracts (one hour)
	// from the actual represented time. That is why we call updateOffset
	// a second time. In case it wants us to change the offset again
	// _changeInProgress == true case, then we have to adjust, because
	// there is no such time in the given timezone.
	function Db(b, c) {
		var d, e = this._offset || 0;
		if (!this.isValid()) return null != b ? this : NaN;
		if (null != b) {
			if ("string" == typeof b) {
				if (b = Ab(Xd, b), null === b) return this
			} else Math.abs(b) < 16 && (b = 60 * b);
			return !this._isUTC && c && (d = Cb(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Tb(this, Ob(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
		}
		return this._isUTC ? e : Cb(this)
	}

	function Eb(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Fb(a) {
		return this.utcOffset(0, a)
	}

	function Gb(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Cb(this), "m")), this
	}

	function Hb() {
		if (null != this._tzm) this.utcOffset(this._tzm);
		else if ("string" == typeof this._i) {
			var a = Ab(Wd, this._i);
			null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
		}
		return this
	}

	function Ib(a) {
		return !!this.isValid() && (a = a ? sb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
	}

	function Jb() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Kb() {
		if (!p(this._isDSTShifted)) return this._isDSTShifted;
		var a = {};
		if (q(a, this), a = pb(a), a._a) {
			var b = a._isUTC ? k(a._a) : sb(a._a);
			this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
		} else this._isDSTShifted = !1;
		return this._isDSTShifted
	}

	function Lb() {
		return !!this.isValid() && !this._isUTC
	}

	function Mb() {
		return !!this.isValid() && this._isUTC
	}

	function Nb() {
		return !!this.isValid() && (this._isUTC && 0 === this._offset)
	}

	function Ob(a, b) {
		var c, d, e, g = a,
			// matching against regexp is expensive, do it on demand
			h = null; // checks for null or undefined
		return xb(a) ? g = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : f(a) ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Ne.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: 0,
			d: u(h[ce]) * c,
			h: u(h[de]) * c,
			m: u(h[ee]) * c,
			s: u(h[fe]) * c,
			ms: u(yb(1e3 * h[ge])) * c
		}) : (h = Oe.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: Pb(h[2], c),
			M: Pb(h[3], c),
			w: Pb(h[4], c),
			d: Pb(h[5], c),
			h: Pb(h[6], c),
			m: Pb(h[7], c),
			s: Pb(h[8], c)
		}) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Rb(sb(g.from), sb(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new wb(g), xb(a) && i(a, "_locale") && (d._locale = a._locale), d
	}

	function Pb(a, b) {
		// We'd normally use ~~inp for this, but unfortunately it also
		// converts floats to ints.
		// inp may be undefined, so careful calling replace on it.
		var c = a && parseFloat(a.replace(",", "."));
		// apply sign while we're at it
		return (isNaN(c) ? 0 : c) * b
	}

	function Qb(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Rb(a, b) {
		var c;
		return a.isValid() && b.isValid() ? (b = Bb(b, a), a.isBefore(b) ? c = Qb(a, b) : (c = Qb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
			milliseconds: 0,
			months: 0
		}
	}
	// TODO: remove 'name' arg after deprecation is removed
	function Sb(a, b) {
		return function (c, d) {
			var e, f;
			//invert the arguments, but complain about it
			return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ob(c, d), Tb(this, e, a), this
		}
	}

	function Tb(b, c, d, e) {
		var f = c._milliseconds,
			g = yb(c._days),
			h = yb(c._months);
		b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
	}

	function Ub(a, b) {
		var c = a.diff(b, "days", !0);
		return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
	}

	function Vb(b, c) {
		// We want to compare the start of today, vs this.
		// Getting start-of-today depends on whether we're local/utc/offset or not.
		var d = b || sb(),
			e = Bb(d, this).startOf("day"),
			f = a.calendarFormat(this, e) || "sameElse",
			g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
		return this.format(g || this.localeData().calendar(f, this, sb(d)))
	}

	function Wb() {
		return new r(this)
	}

	function Xb(a, b) {
		var c = s(a) ? a : sb(a);
		return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
	}

	function Yb(a, b) {
		var c = s(a) ? a : sb(a);
		return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
	}

	function Zb(a, b, c, d) {
		return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
	}

	function $b(a, b) {
		var c, d = s(a) ? a : sb(a);
		return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
	}

	function _b(a, b) {
		return this.isSame(a, b) || this.isAfter(a, b)
	}

	function ac(a, b) {
		return this.isSame(a, b) || this.isBefore(a, b)
	}

	function bc(a, b, c) {
		var d, e, f, g; // 1000
		// 1000 * 60
		// 1000 * 60 * 60
		// 1000 * 60 * 60 * 24, negate dst
		// 1000 * 60 * 60 * 24 * 7, negate dst
		return this.isValid() ? (d = Bb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = cc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
	}

	function cc(a, b) {
		// difference in months
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			// b is in (anchor - 1 month, anchor + 1 month)
			f = a.clone().add(e, "months");
		//check for negative zero, return zero if negative zero
		// linear across the month
		// linear across the month
		return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
	}

	function dc() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function ec() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}
	/**
	 * Return a human readable representation of a moment that can
	 * also be evaluated to get a new moment which is the same
	 *
	 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	 */
	function fc() {
		if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
		var a = "moment",
			b = "";
		this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
		var c = "[" + a + '("]',
			d = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
			e = "-MM-DD[T]HH:mm:ss.SSS",
			f = b + '[")]';
		return this.format(c + d + e + f)
	}

	function gc(b) {
		b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
		var c = X(this, b);
		return this.localeData().postformat(c)
	}

	function hc(a, b) {
		return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function ic(a) {
		return this.from(sb(), a)
	}

	function jc(a, b) {
		return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function kc(a) {
		return this.to(sb(), a)
	}
	// If passed a locale key, it will set the locale for this
	// instance.  Otherwise, it will return the locale configuration
	// variables for this instance.
	function lc(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
	}

	function mc() {
		return this._locale
	}

	function nc(a) {
		// the following switch intentionally omits break keywords
		// to utilize falling through the cases.
		switch (a = K(a)) {
			case "year":
				this.month(0); /* falls through */
			case "quarter":
			case "month":
				this.date(1); /* falls through */
			case "week":
			case "isoWeek":
			case "day":
			case "date":
				this.hours(0); /* falls through */
			case "hour":
				this.minutes(0); /* falls through */
			case "minute":
				this.seconds(0); /* falls through */
			case "second":
				this.milliseconds(0)
		}
		// weeks are a special case
		// quarters are also special
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function oc(a) {
		// 'date' is an alias for 'day', so it should be considered as such.
		return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
	}

	function pc() {
		return this._d.valueOf() - 6e4 * (this._offset || 0)
	}

	function qc() {
		return Math.floor(this.valueOf() / 1e3)
	}

	function rc() {
		return new Date(this.valueOf())
	}

	function sc() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function tc() {
		var a = this;
		return {
			years: a.year(),
			months: a.month(),
			date: a.date(),
			hours: a.hours(),
			minutes: a.minutes(),
			seconds: a.seconds(),
			milliseconds: a.milliseconds()
		}
	}

	function uc() {
		// new Date(NaN).toJSON() === null
		return this.isValid() ? this.toISOString() : null
	}

	function vc() {
		return n(this)
	}

	function wc() {
		return j({}, m(this))
	}

	function xc() {
		return m(this).overflow
	}

	function yc() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}

	function zc(a, b) {
		U(0, [a, a.length], 0, b)
	}
	// MOMENTS
	function Ac(a) {
		return Ec.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function Bc(a) {
		return Ec.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Cc() {
		return xa(this.year(), 1, 4)
	}

	function Dc() {
		var a = this.localeData()._week;
		return xa(this.year(), a.dow, a.doy)
	}

	function Ec(a, b, c, d, e) {
		var f;
		return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Fc.call(this, a, b, c, d, e))
	}

	function Fc(a, b, c, d, e) {
		var f = va(a, b, c, d, e),
			g = ta(f.year, 0, f.dayOfYear);
		return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
	}
	// MOMENTS
	function Gc(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}
	// HELPERS
	// MOMENTS
	function Hc(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function Ic(a, b) {
		b[ge] = u(1e3 * ("0." + a))
	}
	// MOMENTS
	function Jc() {
		return this._isUTC ? "UTC" : ""
	}

	function Kc() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Lc(a) {
		return sb(1e3 * a)
	}

	function Mc() {
		return sb.apply(null, arguments).parseZone()
	}

	function Nc(a) {
		return a
	}

	function Oc(a, b, c, d) {
		var e = bb(),
			f = k().set(d, b);
		return e[c](f, a)
	}

	function Pc(a, b, c) {
		if (f(a) && (b = a, a = void 0), a = a || "", null != b) return Oc(a, b, c, "month");
		var d, e = [];
		for (d = 0; d < 12; d++) e[d] = Oc(a, d, c, "month");
		return e
	}
	// ()
	// (5)
	// (fmt, 5)
	// (fmt)
	// (true)
	// (true, 5)
	// (true, fmt, 5)
	// (true, fmt)
	function Qc(a, b, c, d) {
		"boolean" == typeof a ? (f(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, f(b) && (c = b, b = void 0), b = b || "");
		var e = bb(),
			g = a ? e._week.dow : 0;
		if (null != c) return Oc(b, (c + g) % 7, d, "day");
		var h, i = [];
		for (h = 0; h < 7; h++) i[h] = Oc(b, (h + g) % 7, d, "day");
		return i
	}

	function Rc(a, b) {
		return Pc(a, b, "months")
	}

	function Sc(a, b) {
		return Pc(a, b, "monthsShort")
	}

	function Tc(a, b, c) {
		return Qc(a, b, c, "weekdays")
	}

	function Uc(a, b, c) {
		return Qc(a, b, c, "weekdaysShort")
	}

	function Vc(a, b, c) {
		return Qc(a, b, c, "weekdaysMin")
	}

	function Wc() {
		var a = this._data;
		return this._milliseconds = Ze(this._milliseconds), this._days = Ze(this._days), this._months = Ze(this._months), a.milliseconds = Ze(a.milliseconds), a.seconds = Ze(a.seconds), a.minutes = Ze(a.minutes), a.hours = Ze(a.hours), a.months = Ze(a.months), a.years = Ze(a.years), this
	}

	function Xc(a, b, c, d) {
		var e = Ob(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}
	// supports only 2.0-style add(1, 's') or add(duration)
	function Yc(a, b) {
		return Xc(this, a, b, 1)
	}
	// supports only 2.0-style subtract(1, 's') or subtract(duration)
	function Zc(a, b) {
		return Xc(this, a, b, -1)
	}

	function $c(a) {
		return a < 0 ? Math.floor(a) : Math.ceil(a)
	}

	function _c() {
		var a, b, c, d, e, f = this._milliseconds,
			g = this._days,
			h = this._months,
			i = this._data;
		// if we have a mix of positive and negative values, bubble down first
		// check: https://github.com/moment/moment/issues/2166
		// The following code bubbles up values, see the tests for
		// examples of what that means.
		// convert days to months
		// 12 months -> 1 year
		return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * $c(bd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ad(g)), h += e, g -= $c(bd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
	}

	function ad(a) {
		// 400 years have 146097 days (taking into account leap year rules)
		// 400 years have 12 months === 4800
		return 4800 * a / 146097
	}

	function bd(a) {
		// the reverse of daysToMonths
		return 146097 * a / 4800
	}

	function cd(a) {
		var b, c, d = this._milliseconds;
		if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ad(b), "month" === a ? c : c / 12;
		switch (
			// handle milliseconds separately because of floating point math errors (issue #1867)
			b = this._days + Math.round(bd(this._months)), a) {
			case "week":
				return b / 7 + d / 6048e5;
			case "day":
				return b + d / 864e5;
			case "hour":
				return 24 * b + d / 36e5;
			case "minute":
				return 1440 * b + d / 6e4;
			case "second":
				return 86400 * b + d / 1e3;
				// Math.floor prevents floating point math errors here
			case "millisecond":
				return Math.floor(864e5 * b) + d;
			default:
				throw new Error("Unknown unit " + a)
		}
	}
	// TODO: Use this.as('ms')?
	function dd() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12)
	}

	function ed(a) {
		return function () {
			return this.as(a)
		}
	}

	function fd(a) {
		return a = K(a), this[a + "s"]()
	}

	function gd(a) {
		return function () {
			return this._data[a]
		}
	}

	function hd() {
		return t(this.days() / 7)
	}
	// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function id(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function jd(a, b, c) {
		var d = Ob(a).abs(),
			e = of (d.as("s")),
			f = of (d.as("m")),
			g = of (d.as("h")),
			h = of (d.as("d")),
			i = of (d.as("M")),
			j = of (d.as("y")),
			k = e < pf.s && ["s", e] || f <= 1 && ["m"] || f < pf.m && ["mm", f] || g <= 1 && ["h"] || g < pf.h && ["hh", g] || h <= 1 && ["d"] || h < pf.d && ["dd", h] || i <= 1 && ["M"] || i < pf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, id.apply(null, k)
	}
	// This function allows you to set the rounding function for relative time strings
	function kd(a) {
		return void 0 === a ? of : "function" == typeof a && ( of = a, !0)
	}
	// This function allows you to set a threshold for relative time strings
	function ld(a, b) {
		return void 0 !== pf[a] && (void 0 === b ? pf[a] : (pf[a] = b, !0))
	}

	function md(a) {
		var b = this.localeData(),
			c = jd(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function nd() {
		// for ISO strings we do not use the normal bubbling rules:
		//  * milliseconds bubble up until they become hours
		//  * days do not bubble at all
		//  * months bubble up until they become years
		// This is because there is no context-free conversion between hours and days
		// (think of clock changes)
		// and also not between days and months (28-31 days per month)
		var a, b, c, d = qf(this._milliseconds) / 1e3,
			e = qf(this._days),
			f = qf(this._months);
		// 3600 seconds -> 60 minutes -> 1 hour
		a = t(d / 60), b = t(a / 60), d %= 60, a %= 60,
			// 12 months -> 1 year
			c = t(f / 12), f %= 12;
		// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		var g = c,
			h = f,
			i = e,
			j = b,
			k = a,
			l = d,
			m = this.asSeconds();
		return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
	}
	var od, pd;
	pd = Array.prototype.some ? Array.prototype.some : function (a) {
		for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
			if (d in b && a.call(this, b[d], d, b)) return !0;
		return !1
	};
	var qd = pd,
		rd = a.momentProperties = [],
		sd = !1,
		td = {};
	a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
	var ud;
	ud = Object.keys ? Object.keys : function (a) {
		var b, c = [];
		for (b in a) i(a, b) && c.push(b);
		return c
	};
	var vd, wd = ud,
		xd = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		yd = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		},
		zd = "Invalid date",
		Ad = "%d",
		Bd = /\d{1,2}/,
		Cd = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		Dd = {},
		Ed = {},
		Fd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		Gd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Hd = {},
		Id = {},
		Jd = /\d/,
		Kd = /\d\d/,
		Ld = /\d{3}/,
		Md = /\d{4}/,
		Nd = /[+-]?\d{6}/,
		Od = /\d\d?/,
		Pd = /\d\d\d\d?/,
		Qd = /\d\d\d\d\d\d?/,
		Rd = /\d{1,3}/,
		Sd = /\d{1,4}/,
		Td = /[+-]?\d{1,6}/,
		Ud = /\d+/,
		Vd = /[+-]?\d+/,
		Wd = /Z|[+-]\d\d:?\d\d/gi,
		Xd = /Z|[+-]\d\d(?::?\d\d)?/gi,
		Yd = /[+-]?\d+(\.\d{1,3})?/,
		Zd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		$d = {},
		_d = {},
		ae = 0,
		be = 1,
		ce = 2,
		de = 3,
		ee = 4,
		fe = 5,
		ge = 6,
		he = 7,
		ie = 8;
	vd = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
		// I know
		var b;
		for (b = 0; b < this.length; ++b)
			if (this[b] === a) return b;
		return -1
	};
	var je = vd;
	// FORMATTING
	U("M", ["MM", 2], "Mo", function () {
			return this.month() + 1
		}), U("MMM", 0, 0, function (a) {
			return this.localeData().monthsShort(this, a)
		}), U("MMMM", 0, 0, function (a) {
			return this.localeData().months(this, a)
		}),
		// ALIASES
		J("month", "M"),
		// PRIORITY
		M("month", 8),
		// PARSING
		Z("M", Od), Z("MM", Od, Kd), Z("MMM", function (a, b) {
			return b.monthsShortRegex(a)
		}), Z("MMMM", function (a, b) {
			return b.monthsRegex(a)
		}), ba(["M", "MM"], function (a, b) {
			b[be] = u(a) - 1
		}), ba(["MMM", "MMMM"], function (a, b, c, d) {
			var e = c._locale.monthsParse(a, d, c._strict);
			// if we didn't find a month name, mark the date as invalid.
			null != e ? b[be] = e : m(c).invalidMonth = a
		});
	// LOCALES
	var ke = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		me = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		ne = Zd,
		oe = Zd;
	// FORMATTING
	U("Y", 0, 0, function () {
			var a = this.year();
			return a <= 9999 ? "" + a : "+" + a
		}), U(0, ["YY", 2], 0, function () {
			return this.year() % 100
		}), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"),
		// ALIASES
		J("year", "y"),
		// PRIORITIES
		M("year", 1),
		// PARSING
		Z("Y", Vd), Z("YY", Od, Kd), Z("YYYY", Sd, Md), Z("YYYYY", Td, Nd), Z("YYYYYY", Td, Nd), ba(["YYYYY", "YYYYYY"], ae), ba("YYYY", function (b, c) {
			c[ae] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
		}), ba("YY", function (b, c) {
			c[ae] = a.parseTwoDigitYear(b)
		}), ba("Y", function (a, b) {
			b[ae] = parseInt(a, 10)
		}),
		// HOOKS
		a.parseTwoDigitYear = function (a) {
			return u(a) + (u(a) > 68 ? 1900 : 2e3)
		};
	// MOMENTS
	var pe = O("FullYear", !0);
	// FORMATTING
	U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"),
		// ALIASES
		J("week", "w"), J("isoWeek", "W"),
		// PRIORITIES
		M("week", 5), M("isoWeek", 5),
		// PARSING
		Z("w", Od), Z("ww", Od, Kd), Z("W", Od), Z("WW", Od, Kd), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
			b[d.substr(0, 1)] = u(a)
		});
	var qe = {
		dow: 0, // Sunday is the first day of the week.
		doy: 6
	};
	// FORMATTING
	U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
			return this.localeData().weekdaysMin(this, a)
		}), U("ddd", 0, 0, function (a) {
			return this.localeData().weekdaysShort(this, a)
		}), U("dddd", 0, 0, function (a) {
			return this.localeData().weekdays(this, a)
		}), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"),
		// ALIASES
		J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"),
		// PRIORITY
		M("day", 11), M("weekday", 11), M("isoWeekday", 11),
		// PARSING
		Z("d", Od), Z("e", Od), Z("E", Od), Z("dd", function (a, b) {
			return b.weekdaysMinRegex(a)
		}), Z("ddd", function (a, b) {
			return b.weekdaysShortRegex(a)
		}), Z("dddd", function (a, b) {
			return b.weekdaysRegex(a)
		}), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
			var e = c._locale.weekdaysParse(a, d, c._strict);
			// if we didn't get a weekday name, mark the date as invalid
			null != e ? b.d = e : m(c).invalidWeekday = a
		}), ca(["d", "e", "E"], function (a, b, c, d) {
			b[d] = u(a)
		});
	// LOCALES
	var re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		se = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		te = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		ue = Zd,
		ve = Zd,
		we = Zd;
	U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
			return "" + Ra.apply(this) + T(this.minutes(), 2)
		}), U("hmmss", 0, 0, function () {
			return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
		}), U("Hmm", 0, 0, function () {
			return "" + this.hours() + T(this.minutes(), 2)
		}), U("Hmmss", 0, 0, function () {
			return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
		}), Ta("a", !0), Ta("A", !1),
		// ALIASES
		J("hour", "h"),
		// PRIORITY
		M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Od), Z("h", Od), Z("HH", Od, Kd), Z("hh", Od, Kd), Z("hmm", Pd), Z("hmmss", Qd), Z("Hmm", Pd), Z("Hmmss", Qd), ba(["H", "HH"], de), ba(["a", "A"], function (a, b, c) {
			c._isPm = c._locale.isPM(a), c._meridiem = a
		}), ba(["h", "hh"], function (a, b, c) {
			b[de] = u(a), m(c).bigHour = !0
		}), ba("hmm", function (a, b, c) {
			var d = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d)), m(c).bigHour = !0
		}), ba("hmmss", function (a, b, c) {
			var d = a.length - 4,
				e = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d, 2)), b[fe] = u(a.substr(e)), m(c).bigHour = !0
		}), ba("Hmm", function (a, b, c) {
			var d = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d))
		}), ba("Hmmss", function (a, b, c) {
			var d = a.length - 4,
				e = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d, 2)), b[fe] = u(a.substr(e))
		});
	var xe, ye = /[ap]\.?m?\.?/i,
		ze = O("Hours", !0),
		Ae = {
			calendar: xd,
			longDateFormat: yd,
			invalidDate: zd,
			ordinal: Ad,
			ordinalParse: Bd,
			relativeTime: Cd,
			months: le,
			monthsShort: me,
			week: qe,
			weekdays: re,
			weekdaysMin: te,
			weekdaysShort: se,
			meridiemParse: ye
		},
		Be = {},
		Ce = {},
		De = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Ee = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Fe = /Z|[+-]\d\d(?::?\d\d)?/,
		Ge = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			// YYYYMM is NOT allowed by the standard
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		He = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Ie = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
			a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
		}),
		// constant that refers to the ISO standard
		a.ISO_8601 = function () {};
	var Je = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var a = sb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a < this ? this : a : o()
		}),
		Ke = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
			var a = sb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a > this ? this : a : o()
		}),
		Le = function () {
			return Date.now ? Date.now() : +new Date
		};
	zb("Z", ":"), zb("ZZ", ""),
		// PARSING
		Z("Z", Xd), Z("ZZ", Xd), ba(["Z", "ZZ"], function (a, b, c) {
			c._useUTC = !0, c._tzm = Ab(Xd, a)
		});
	// HELPERS
	// timezone chunker
	// '+10:00' > ['10',  '00']
	// '-1530'  > ['-15', '30']
	var Me = /([\+\-]|\d\d)/gi;
	// HOOKS
	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	a.updateOffset = function () {};
	// ASP.NET json date format regex
	var Ne = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
		Oe = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	Ob.fn = wb.prototype;
	var Pe = Sb(1, "add"),
		Qe = Sb(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Re = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	// FORMATTING
	U(0, ["gg", 2], 0, function () {
			return this.weekYear() % 100
		}), U(0, ["GG", 2], 0, function () {
			return this.isoWeekYear() % 100
		}), zc("gggg", "weekYear"), zc("ggggg", "weekYear"), zc("GGGG", "isoWeekYear"), zc("GGGGG", "isoWeekYear"),
		// ALIASES
		J("weekYear", "gg"), J("isoWeekYear", "GG"),
		// PRIORITY
		M("weekYear", 1), M("isoWeekYear", 1),
		// PARSING
		Z("G", Vd), Z("g", Vd), Z("GG", Od, Kd), Z("gg", Od, Kd), Z("GGGG", Sd, Md), Z("gggg", Sd, Md), Z("GGGGG", Td, Nd), Z("ggggg", Td, Nd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
			b[d.substr(0, 2)] = u(a)
		}), ca(["gg", "GG"], function (b, c, d, e) {
			c[e] = a.parseTwoDigitYear(b)
		}),
		// FORMATTING
		U("Q", 0, "Qo", "quarter"),
		// ALIASES
		J("quarter", "Q"),
		// PRIORITY
		M("quarter", 7),
		// PARSING
		Z("Q", Jd), ba("Q", function (a, b) {
			b[be] = 3 * (u(a) - 1)
		}),
		// FORMATTING
		U("D", ["DD", 2], "Do", "date"),
		// ALIASES
		J("date", "D"),
		// PRIOROITY
		M("date", 9),
		// PARSING
		Z("D", Od), Z("DD", Od, Kd), Z("Do", function (a, b) {
			return a ? b._ordinalParse : b._ordinalParseLenient
		}), ba(["D", "DD"], ce), ba("Do", function (a, b) {
			b[ce] = u(a.match(Od)[0], 10)
		});
	// MOMENTS
	var Se = O("Date", !0);
	// FORMATTING
	U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
		// ALIASES
		J("dayOfYear", "DDD"),
		// PRIORITY
		M("dayOfYear", 4),
		// PARSING
		Z("DDD", Rd), Z("DDDD", Ld), ba(["DDD", "DDDD"], function (a, b, c) {
			c._dayOfYear = u(a)
		}),
		// FORMATTING
		U("m", ["mm", 2], 0, "minute"),
		// ALIASES
		J("minute", "m"),
		// PRIORITY
		M("minute", 14),
		// PARSING
		Z("m", Od), Z("mm", Od, Kd), ba(["m", "mm"], ee);
	// MOMENTS
	var Te = O("Minutes", !1);
	// FORMATTING
	U("s", ["ss", 2], 0, "second"),
		// ALIASES
		J("second", "s"),
		// PRIORITY
		M("second", 15),
		// PARSING
		Z("s", Od), Z("ss", Od, Kd), ba(["s", "ss"], fe);
	// MOMENTS
	var Ue = O("Seconds", !1);
	// FORMATTING
	U("S", 0, 0, function () {
			return ~~(this.millisecond() / 100)
		}), U(0, ["SS", 2], 0, function () {
			return ~~(this.millisecond() / 10)
		}), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
			return 10 * this.millisecond()
		}), U(0, ["SSSSS", 5], 0, function () {
			return 100 * this.millisecond()
		}), U(0, ["SSSSSS", 6], 0, function () {
			return 1e3 * this.millisecond()
		}), U(0, ["SSSSSSS", 7], 0, function () {
			return 1e4 * this.millisecond()
		}), U(0, ["SSSSSSSS", 8], 0, function () {
			return 1e5 * this.millisecond()
		}), U(0, ["SSSSSSSSS", 9], 0, function () {
			return 1e6 * this.millisecond()
		}),
		// ALIASES
		J("millisecond", "ms"),
		// PRIORITY
		M("millisecond", 16),
		// PARSING
		Z("S", Rd, Jd), Z("SS", Rd, Kd), Z("SSS", Rd, Ld);
	var Ve;
	for (Ve = "SSSS"; Ve.length <= 9; Ve += "S") Z(Ve, Ud);
	for (Ve = "S"; Ve.length <= 9; Ve += "S") ba(Ve, Ic);
	// MOMENTS
	var We = O("Milliseconds", !1);
	// FORMATTING
	U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
	var Xe = r.prototype;
	Xe.add = Pe, Xe.calendar = Vb, Xe.clone = Wb, Xe.diff = bc, Xe.endOf = oc, Xe.format = gc, Xe.from = hc, Xe.fromNow = ic, Xe.to = jc, Xe.toNow = kc, Xe.get = R, Xe.invalidAt = xc, Xe.isAfter = Xb, Xe.isBefore = Yb, Xe.isBetween = Zb, Xe.isSame = $b, Xe.isSameOrAfter = _b, Xe.isSameOrBefore = ac, Xe.isValid = vc, Xe.lang = Re, Xe.locale = lc, Xe.localeData = mc, Xe.max = Ke, Xe.min = Je, Xe.parsingFlags = wc, Xe.set = S, Xe.startOf = nc, Xe.subtract = Qe, Xe.toArray = sc, Xe.toObject = tc, Xe.toDate = rc, Xe.toISOString = ec, Xe.inspect = fc, Xe.toJSON = uc, Xe.toString = dc, Xe.unix = qc, Xe.valueOf = pc, Xe.creationData = yc,
		// Year
		Xe.year = pe, Xe.isLeapYear = ra,
		// Week Year
		Xe.weekYear = Ac, Xe.isoWeekYear = Bc,
		// Quarter
		Xe.quarter = Xe.quarters = Gc,
		// Month
		Xe.month = ka, Xe.daysInMonth = la,
		// Week
		Xe.week = Xe.weeks = Ba, Xe.isoWeek = Xe.isoWeeks = Ca, Xe.weeksInYear = Dc, Xe.isoWeeksInYear = Cc,
		// Day
		Xe.date = Se, Xe.day = Xe.days = Ka, Xe.weekday = La, Xe.isoWeekday = Ma, Xe.dayOfYear = Hc,
		// Hour
		Xe.hour = Xe.hours = ze,
		// Minute
		Xe.minute = Xe.minutes = Te,
		// Second
		Xe.second = Xe.seconds = Ue,
		// Millisecond
		Xe.millisecond = Xe.milliseconds = We,
		// Offset
		Xe.utcOffset = Db, Xe.utc = Fb, Xe.local = Gb, Xe.parseZone = Hb, Xe.hasAlignedHourOffset = Ib, Xe.isDST = Jb, Xe.isLocal = Lb, Xe.isUtcOffset = Mb, Xe.isUtc = Nb, Xe.isUTC = Nb,
		// Timezone
		Xe.zoneAbbr = Jc, Xe.zoneName = Kc,
		// Deprecations
		Xe.dates = x("dates accessor is deprecated. Use date instead.", Se), Xe.months = x("months accessor is deprecated. Use month instead", ka), Xe.years = x("years accessor is deprecated. Use year instead", pe), Xe.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Eb), Xe.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Kb);
	var Ye = C.prototype;
	Ye.calendar = D, Ye.longDateFormat = E, Ye.invalidDate = F, Ye.ordinal = G, Ye.preparse = Nc, Ye.postformat = Nc, Ye.relativeTime = H, Ye.pastFuture = I, Ye.set = A,
		// Month
		Ye.months = fa, Ye.monthsShort = ga, Ye.monthsParse = ia, Ye.monthsRegex = na, Ye.monthsShortRegex = ma,
		// Week
		Ye.week = ya, Ye.firstDayOfYear = Aa, Ye.firstDayOfWeek = za,
		// Day of Week
		Ye.weekdays = Fa, Ye.weekdaysMin = Ha, Ye.weekdaysShort = Ga, Ye.weekdaysParse = Ja, Ye.weekdaysRegex = Na, Ye.weekdaysShortRegex = Oa, Ye.weekdaysMinRegex = Pa,
		// Hours
		Ye.isPM = Va, Ye.meridiem = Wa, $a("en", {
			ordinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			}
		}),
		// Side effect imports
		a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
	var Ze = Math.abs,
		$e = ed("ms"),
		_e = ed("s"),
		af = ed("m"),
		bf = ed("h"),
		cf = ed("d"),
		df = ed("w"),
		ef = ed("M"),
		ff = ed("y"),
		gf = gd("milliseconds"),
		hf = gd("seconds"),
		jf = gd("minutes"),
		kf = gd("hours"),
		lf = gd("days"),
		mf = gd("months"),
		nf = gd("years"),
		of = Math.round,
		pf = {
			s: 45, // seconds to minute
			m: 45, // minutes to hour
			h: 22, // hours to day
			d: 26, // days to month
			M: 11
		},
		qf = Math.abs,
		rf = wb.prototype;
	// Deprecations
	// Side effect imports
	// FORMATTING
	// PARSING
	// Side effect imports
	return rf.abs = Wc, rf.add = Yc, rf.subtract = Zc, rf.as = cd, rf.asMilliseconds = $e, rf.asSeconds = _e, rf.asMinutes = af, rf.asHours = bf, rf.asDays = cf, rf.asWeeks = df, rf.asMonths = ef, rf.asYears = ff, rf.valueOf = dd, rf._bubble = _c, rf.get = fd, rf.milliseconds = gf, rf.seconds = hf, rf.minutes = jf, rf.hours = kf, rf.days = lf, rf.weeks = hd, rf.months = mf, rf.years = nf, rf.humanize = md, rf.toISOString = nd, rf.toString = nd, rf.toJSON = nd, rf.locale = lc, rf.localeData = mc, rf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", nd), rf.lang = Re, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Vd), Z("X", Yd), ba("X", function (a, b, c) {
		c._d = new Date(1e3 * parseFloat(a, 10))
	}), ba("x", function (a, b, c) {
		c._d = new Date(u(a))
	}), a.version = "2.17.0", b(sb), a.fn = Xe, a.min = ub, a.max = vb, a.now = Le, a.utc = k, a.unix = Lc, a.months = Rc, a.isDate = g, a.locale = $a, a.invalid = o, a.duration = Ob, a.isMoment = s, a.weekdays = Tc, a.parseZone = Mc, a.localeData = bb, a.isDuration = xb, a.monthsShort = Sc, a.weekdaysMin = Vc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Uc, a.normalizeUnits = K, a.relativeTimeRounding = kd, a.relativeTimeThreshold = ld, a.calendarFormat = Ub, a.prototype = Xe, a
});; + function ($) {
	'use strict';

	// DROPDOWN CLASS DEFINITION
	// =========================

	var backdrop = '.dropdown-backdrop'
	var toggle = '[data-toggle="dropdown"]'
	var Dropdown = function (element) {
		$(element).on('click.bs.dropdown', this.toggle)
	}

	Dropdown.VERSION = '3.3.7'

	function getParent($this) {
		var selector = $this.attr('data-target')

		if (!selector) {
			selector = $this.attr('href')
			selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
		}

		var $parent = selector && $(selector)

		return $parent && $parent.length ? $parent : $this.parent()
	}

	function clearMenus(e) {
		if (e && e.which === 3) return
		$(backdrop).remove()
		$(toggle).each(function () {
			var $this = $(this)
			var $parent = getParent($this)
			var relatedTarget = {
				relatedTarget: this
			}

			if (!$parent.hasClass('open')) return

			if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

			$parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

			if (e.isDefaultPrevented()) return

			$this.attr('aria-expanded', 'false')
			$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
		})
	}

	Dropdown.prototype.toggle = function (e) {
		var $this = $(this)

		if ($this.is('.disabled, :disabled')) return

		var $parent = getParent($this)
		var isActive = $parent.hasClass('open')

		clearMenus()

		if (!isActive) {
			if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
				// if mobile we use a backdrop because click events don't delegate
				$(document.createElement('div'))
					.addClass('dropdown-backdrop')
					.insertAfter($(this))
					.on('click', clearMenus)
			}

			var relatedTarget = {
				relatedTarget: this
			}
			$parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

			if (e.isDefaultPrevented()) return

			$this
				.trigger('focus')
				.attr('aria-expanded', 'true')

			$parent
				.toggleClass('open')
				.trigger($.Event('shown.bs.dropdown', relatedTarget))
		}

		return false
	}

	Dropdown.prototype.keydown = function (e) {
		if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

		var $this = $(this)

		e.preventDefault()
		e.stopPropagation()

		if ($this.is('.disabled, :disabled')) return

		var $parent = getParent($this)
		var isActive = $parent.hasClass('open')

		if (!isActive && e.which != 27 || isActive && e.which == 27) {
			if (e.which == 27) $parent.find(toggle).trigger('focus')
			return $this.trigger('click')
		}

		var desc = ' li:not(.disabled):visible a'
		var $items = $parent.find('.dropdown-menu' + desc)

		if (!$items.length) return

		var index = $items.index(e.target)

		if (e.which == 38 && index > 0) index-- // up
			if (e.which == 40 && index < $items.length - 1) index++ // down
				if (!~index) index = 0

		$items.eq(index).trigger('focus')
	}


	// DROPDOWN PLUGIN DEFINITION
	// ==========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this)
			var data = $this.data('bs.dropdown')

			if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
			if (typeof option == 'string') data[option].call($this)
		})
	}

	var old = $.fn.dropdown

	$.fn.dropdown = Plugin
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
		.on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
			e.stopPropagation()
		})
		.on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
		.on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
		.on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);;
(function ($) {

	var $event = $.event,
		$special,
		resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function () {
			$(this).on("resize", $special.handler);
		},
		teardown: function () {
			$(this).off("resize", $special.handler);
		},
		handler: function (event, execAsap) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function () {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply(context, args);
				};

			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout(dispatch, $special.threshold);
		},
		threshold: 150
	};

})(jQuery);;
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
;
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module. 
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS 
		factory(require('jquery'));
	} else {
		// Browser globals 
		factory(window.jQuery || window.Zepto);
	}
}(function ($) {

	/*>>core*/
	/**
	 * 
	 * Magnific Popup Core JS file
	 * 
	 */


	/**
	 * Private static constants
	 */
	var CLOSE_EVENT = 'Close',
		BEFORE_CLOSE_EVENT = 'BeforeClose',
		AFTER_CLOSE_EVENT = 'AfterClose',
		BEFORE_APPEND_EVENT = 'BeforeAppend',
		MARKUP_PARSE_EVENT = 'MarkupParse',
		OPEN_EVENT = 'Open',
		CHANGE_EVENT = 'Change',
		NS = 'mfp',
		EVENT_NS = '.' + NS,
		READY_CLASS = 'mfp-ready',
		REMOVING_CLASS = 'mfp-removing',
		PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


	/**
	 * Private vars 
	 */
	/*jshint -W079 */
	var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
		MagnificPopup = function () {},
		_isJQ = !!(window.jQuery),
		_prevStatus,
		_window = $(window),
		_document,
		_prevContentType,
		_wrapClasses,
		_currPopupType;


	/**
	 * Private functions
	 */
	var _mfpOn = function (name, f) {
			mfp.ev.on(NS + name + EVENT_NS, f);
		},
		_getEl = function (className, appendTo, html, raw) {
			var el = document.createElement('div');
			el.className = 'mfp-' + className;
			if (html) {
				el.innerHTML = html;
			}
			if (!raw) {
				el = $(el);
				if (appendTo) {
					el.appendTo(appendTo);
				}
			} else if (appendTo) {
				appendTo.appendChild(el);
			}
			return el;
		},
		_mfpTrigger = function (e, data) {
			mfp.ev.triggerHandler(NS + e, data);

			if (mfp.st.callbacks) {
				// converts "mfpEventName" to "eventName" callback and triggers it if it's present
				e = e.charAt(0).toLowerCase() + e.slice(1);
				if (mfp.st.callbacks[e]) {
					mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
				}
			}
		},
		_getCloseBtn = function (type) {
			if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
				mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
				_currPopupType = type;
			}
			return mfp.currTemplate.closeBtn;
		},
		// Initialize Magnific Popup only when called at least once
		_checkInstance = function () {
			if (!$.magnificPopup.instance) {
				/*jshint -W020 */
				mfp = new MagnificPopup();
				mfp.init();
				$.magnificPopup.instance = mfp;
			}
		},
		// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
		supportsTransitions = function () {
			var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
				v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

			if (s['transition'] !== undefined) {
				return true;
			}

			while (v.length) {
				if (v.pop() + 'Transition' in s) {
					return true;
				}
			}

			return false;
		};


	/**
	 * Public functions
	 */
	MagnificPopup.prototype = {

		constructor: MagnificPopup,

		/**
		 * Initializes Magnific Popup plugin. 
		 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
		 */
		init: function () {
			var appVersion = navigator.appVersion;
			mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
			mfp.isAndroid = (/android/gi).test(appVersion);
			mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
			mfp.supportsTransition = supportsTransitions();

			// We disable fixed positioned lightbox on devices that don't handle it nicely.
			// If you know a better way of detecting this - let me know.
			mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
			_document = $(document);

			mfp.popupsCache = {};
		},

		/**
		 * Opens popup
		 * @param  data [description]
		 */
		open: function (data) {

			var i;

			if (data.isObj === false) {
				// convert jQuery collection to array to avoid conflicts later
				mfp.items = data.items.toArray();

				mfp.index = 0;
				var items = data.items,
					item;
				for (i = 0; i < items.length; i++) {
					item = items[i];
					if (item.parsed) {
						item = item.el[0];
					}
					if (item === data.el[0]) {
						mfp.index = i;
						break;
					}
				}
			} else {
				mfp.items = $.isArray(data.items) ? data.items : [data.items];
				mfp.index = data.index || 0;
			}

			// if popup is already opened - we just update the content
			if (mfp.isOpen) {
				mfp.updateItemHTML();
				return;
			}

			mfp.types = [];
			_wrapClasses = '';
			if (data.mainEl && data.mainEl.length) {
				mfp.ev = data.mainEl.eq(0);
			} else {
				mfp.ev = _document;
			}

			if (data.key) {
				if (!mfp.popupsCache[data.key]) {
					mfp.popupsCache[data.key] = {};
				}
				mfp.currTemplate = mfp.popupsCache[data.key];
			} else {
				mfp.currTemplate = {};
			}


			mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
			mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

			if (mfp.st.modal) {
				mfp.st.closeOnContentClick = false;
				mfp.st.closeOnBgClick = false;
				mfp.st.showCloseBtn = false;
				mfp.st.enableEscapeKey = false;
			}


			// Building markup
			// main containers are created only once
			if (!mfp.bgOverlay) {

				// Dark overlay
				mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
					mfp.close();
				});

				mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
					if (mfp._checkIfClose(e.target)) {
						mfp.close();
					}
				});

				mfp.container = _getEl('container', mfp.wrap);
			}

			mfp.contentContainer = _getEl('content');
			if (mfp.st.preloader) {
				mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
			}


			// Initializing modules
			var modules = $.magnificPopup.modules;
			for (i = 0; i < modules.length; i++) {
				var n = modules[i];
				n = n.charAt(0).toUpperCase() + n.slice(1);
				mfp['init' + n].call(mfp);
			}
			_mfpTrigger('BeforeOpen');


			if (mfp.st.showCloseBtn) {
				// Close button
				if (!mfp.st.closeBtnInside) {
					mfp.wrap.append(_getCloseBtn());
				} else {
					_mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
						values.close_replaceWith = _getCloseBtn(item.type);
					});
					_wrapClasses += ' mfp-close-btn-in';
				}
			}

			if (mfp.st.alignTop) {
				_wrapClasses += ' mfp-align-top';
			}


			if (mfp.fixedContentPos) {
				mfp.wrap.css({
					overflow: mfp.st.overflowY,
					overflowX: 'hidden',
					overflowY: mfp.st.overflowY
				});
			} else {
				mfp.wrap.css({
					top: _window.scrollTop(),
					position: 'absolute'
				});
			}
			if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
				mfp.bgOverlay.css({
					height: _document.height(),
					position: 'absolute'
				});
			}


			if (mfp.st.enableEscapeKey) {
				// Close on ESC key
				_document.on('keyup' + EVENT_NS, function (e) {
					if (e.keyCode === 27) {
						mfp.close();
					}
				});
			}

			_window.on('resize' + EVENT_NS, function () {
				mfp.updateSize();
			});


			if (!mfp.st.closeOnContentClick) {
				_wrapClasses += ' mfp-auto-cursor';
			}

			if (_wrapClasses)
				mfp.wrap.addClass(_wrapClasses);


			// this triggers recalculation of layout, so we get it once to not to trigger twice
			var windowHeight = mfp.wH = _window.height();


			var windowStyles = {};

			if (mfp.fixedContentPos) {
				if (mfp._hasScrollBar(windowHeight)) {
					var s = mfp._getScrollbarSize();
					if (s) {
						windowStyles.marginRight = s;
					}
				}
			}

			if (mfp.fixedContentPos) {
				if (!mfp.isIE7) {
					windowStyles.overflow = 'hidden';
				} else {
					// ie7 double-scroll bug
					$('body, html').css('overflow', 'hidden');
				}
			}


			var classesToadd = mfp.st.mainClass;
			if (mfp.isIE7) {
				classesToadd += ' mfp-ie7';
			}
			if (classesToadd) {
				mfp._addClassToMFP(classesToadd);
			}

			// add content
			mfp.updateItemHTML();

			_mfpTrigger('BuildControls');

			// remove scrollbar, add margin e.t.c
			$('html').css(windowStyles);

			// add everything to DOM
			mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));

			// Save last focused element
			mfp._lastFocusedEl = document.activeElement;

			// Wait for next cycle to allow CSS transition
			setTimeout(function () {

				if (mfp.content) {
					mfp._addClassToMFP(READY_CLASS);
					mfp._setFocus();
				} else {
					// if content is not defined (not loaded e.t.c) we add class only for BG
					mfp.bgOverlay.addClass(READY_CLASS);
				}

				// Trap the focus in popup
				_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

			}, 16);

			mfp.isOpen = true;
			mfp.updateSize(windowHeight);
			_mfpTrigger(OPEN_EVENT);

			return data;
		},

		/**
		 * Closes the popup
		 */
		close: function () {
			if (!mfp.isOpen) return;
			_mfpTrigger(BEFORE_CLOSE_EVENT);

			mfp.isOpen = false;
			// for CSS3 animation
			if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
				mfp._addClassToMFP(REMOVING_CLASS);
				setTimeout(function () {
					mfp._close();
				}, mfp.st.removalDelay);
			} else {
				mfp._close();
			}
		},

		/**
		 * Helper for close() function
		 */
		_close: function () {
			_mfpTrigger(CLOSE_EVENT);

			var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

			mfp.bgOverlay.detach();
			mfp.wrap.detach();
			mfp.container.empty();

			if (mfp.st.mainClass) {
				classesToRemove += mfp.st.mainClass + ' ';
			}

			mfp._removeClassFromMFP(classesToRemove);

			if (mfp.fixedContentPos) {
				var windowStyles = {
					marginRight: ''
				};
				if (mfp.isIE7) {
					$('body, html').css('overflow', '');
				} else {
					windowStyles.overflow = '';
				}
				$('html').css(windowStyles);
			}

			_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
			mfp.ev.off(EVENT_NS);

			// clean up DOM elements that aren't removed
			mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
			mfp.bgOverlay.attr('class', 'mfp-bg');
			mfp.container.attr('class', 'mfp-container');

			// remove close button from target element
			if (mfp.st.showCloseBtn &&
				(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
				if (mfp.currTemplate.closeBtn)
					mfp.currTemplate.closeBtn.detach();
			}


			if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
				$(mfp._lastFocusedEl).focus(); // put tab focus back
			}
			mfp.currItem = null;
			mfp.content = null;
			mfp.currTemplate = null;
			mfp.prevHeight = 0;

			_mfpTrigger(AFTER_CLOSE_EVENT);
		},

		updateSize: function (winHeight) {

			if (mfp.isIOS) {
				// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
				var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
				var height = window.innerHeight * zoomLevel;
				mfp.wrap.css('height', height);
				mfp.wH = height;
			} else {
				mfp.wH = winHeight || _window.height();
			}
			// Fixes #84: popup incorrectly positioned with position:relative on body
			if (!mfp.fixedContentPos) {
				mfp.wrap.css('height', mfp.wH);
			}

			_mfpTrigger('Resize');

		},

		/**
		 * Set content of popup based on current index
		 */
		updateItemHTML: function () {
			var item = mfp.items[mfp.index];

			// Detach and perform modifications
			mfp.contentContainer.detach();

			if (mfp.content)
				mfp.content.detach();

			if (!item.parsed) {
				item = mfp.parseEl(mfp.index);
			}

			var type = item.type;

			_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
			// BeforeChange event works like so:
			// _mfpOn('BeforeChange', function(e, prevType, newType) { });

			mfp.currItem = item;

			if (!mfp.currTemplate[type]) {
				var markup = mfp.st[type] ? mfp.st[type].markup : false;

				// allows to modify markup
				_mfpTrigger('FirstMarkupParse', markup);

				if (markup) {
					mfp.currTemplate[type] = $(markup);
				} else {
					// if there is no markup found we just define that template is parsed
					mfp.currTemplate[type] = true;
				}
			}

			if (_prevContentType && _prevContentType !== item.type) {
				mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
			}

			var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
			mfp.appendContent(newContent, type);

			item.preloaded = true;

			_mfpTrigger(CHANGE_EVENT, item);
			_prevContentType = item.type;

			// Append container back after its content changed
			mfp.container.prepend(mfp.contentContainer);

			_mfpTrigger('AfterChange');
		},


		/**
		 * Set HTML content of popup
		 */
		appendContent: function (newContent, type) {
			mfp.content = newContent;

			if (newContent) {
				if (mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
					mfp.currTemplate[type] === true) {
					// if there is no markup, we just append close button element inside
					if (!mfp.content.find('.mfp-close').length) {
						mfp.content.append(_getCloseBtn());
					}
				} else {
					mfp.content = newContent;
				}
			} else {
				mfp.content = '';
			}

			_mfpTrigger(BEFORE_APPEND_EVENT);
			mfp.container.addClass('mfp-' + type + '-holder');

			mfp.contentContainer.append(mfp.content);
		},


		/**
		 * Creates Magnific Popup data object based on given data
		 * @param  {int} index Index of item to parse
		 */
		parseEl: function (index) {
			var item = mfp.items[index],
				type;

			if (item.tagName) {
				item = {
					el: $(item)
				};
			} else {
				type = item.type;
				item = {
					data: item,
					src: item.src
				};
			}

			if (item.el) {
				var types = mfp.types;

				// check for 'mfp-TYPE' class
				for (var i = 0; i < types.length; i++) {
					if (item.el.hasClass('mfp-' + types[i])) {
						type = types[i];
						break;
					}
				}

				item.src = item.el.attr('data-mfp-src');
				if (!item.src) {
					item.src = item.el.attr('href');
				}
			}

			item.type = type || mfp.st.type || 'inline';
			item.index = index;
			item.parsed = true;
			mfp.items[index] = item;
			_mfpTrigger('ElementParse', item);

			return mfp.items[index];
		},


		/**
		 * Initializes single popup or a group of popups
		 */
		addGroup: function (el, options) {
			var eHandler = function (e) {
				e.mfpEl = this;
				mfp._openClick(e, el, options);
			};

			if (!options) {
				options = {};
			}

			var eName = 'click.magnificPopup';
			options.mainEl = el;

			if (options.items) {
				options.isObj = true;
				el.off(eName).on(eName, eHandler);
			} else {
				options.isObj = false;
				if (options.delegate) {
					el.off(eName).on(eName, options.delegate, eHandler);
				} else {
					options.items = el;
					el.off(eName).on(eName, eHandler);
				}
			}
		},
		_openClick: function (e, el, options) {
			var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


			if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
				return;
			}

			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

			if (disableOn) {
				if ($.isFunction(disableOn)) {
					if (!disableOn.call(mfp)) {
						return true;
					}
				} else { // else it's number
					if (_window.width() < disableOn) {
						return true;
					}
				}
			}

			if (e.type) {
				e.preventDefault();

				// This will prevent popup from closing if element is inside and popup is already opened
				if (mfp.isOpen) {
					e.stopPropagation();
				}
			}

			options.el = $(e.mfpEl);
			if (options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		},


		/**
		 * Updates text on preloader
		 */
		updateStatus: function (status, text) {

			if (mfp.preloader) {
				if (_prevStatus !== status) {
					mfp.container.removeClass('mfp-s-' + _prevStatus);
				}

				if (!text && status === 'loading') {
					text = mfp.st.tLoading;
				}

				var data = {
					status: status,
					text: text
				};
				// allows to modify status
				_mfpTrigger('UpdateStatus', data);

				status = data.status;
				text = data.text;

				mfp.preloader.html(text);

				mfp.preloader.find('a').on('click', function (e) {
					e.stopImmediatePropagation();
				});

				mfp.container.addClass('mfp-s-' + status);
				_prevStatus = status;
			}
		},



		/*
			"Private" helpers that aren't private at all
		 */
		// Check to close popup or not
		// "target" is an element that was clicked
		_checkIfClose: function (target) {

			if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
				return;
			}

			var closeOnContent = mfp.st.closeOnContentClick;
			var closeOnBg = mfp.st.closeOnBgClick;

			if (closeOnContent && closeOnBg) {
				return true;
			} else {

				// We close the popup if click is on close button or on preloader. Or if there is no content.
				if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
					return true;
				}

				// if click is outside the content
				if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
					if (closeOnBg) {
						// last check, if the clicked element is in DOM, (in case it's removed onclick)
						if ($.contains(document, target)) {
							return true;
						}
					}
				} else if (closeOnContent) {
					return true;
				}

			}
			return false;
		},
		_addClassToMFP: function (cName) {
			mfp.bgOverlay.addClass(cName);
			mfp.wrap.addClass(cName);
		},
		_removeClassFromMFP: function (cName) {
			this.bgOverlay.removeClass(cName);
			mfp.wrap.removeClass(cName);
		},
		_hasScrollBar: function (winHeight) {
			return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
		},
		_setFocus: function () {
			(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
		},
		_onFocusIn: function (e) {
			if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
				mfp._setFocus();
				return false;
			}
		},
		_parseMarkup: function (template, values, item) {
			var arr;
			if (item.data) {
				values = $.extend(item.data, values);
			}
			_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

			$.each(values, function (key, value) {
				if (value === undefined || value === false) {
					return true;
				}
				arr = key.split('_');
				if (arr.length > 1) {
					var el = template.find(EVENT_NS + '-' + arr[0]);

					if (el.length > 0) {
						var attr = arr[1];
						if (attr === 'replaceWith') {
							if (el[0] !== value[0]) {
								el.replaceWith(value);
							}
						} else if (attr === 'img') {
							if (el.is('img')) {
								el.attr('src', value);
							} else {
								el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
							}
						} else {
							el.attr(arr[1], value);
						}
					}

				} else {
					template.find(EVENT_NS + '-' + key).html(value);
				}
			});
		},

		_getScrollbarSize: function () {
			// thx David
			if (mfp.scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return mfp.scrollbarSize;
		}

	}; /* MagnificPopup core prototype end */


	/**
	 * Public static functions
	 */
	$.magnificPopup = {
		instance: null,
		proto: MagnificPopup.prototype,
		modules: [],

		open: function (options, index) {
			_checkInstance();

			if (!options) {
				options = {};
			} else {
				options = $.extend(true, {}, options);
			}

			options.isObj = true;
			options.index = index || 0;
			return this.instance.open(options);
		},

		close: function () {
			return $.magnificPopup.instance && $.magnificPopup.instance.close();
		},

		registerModule: function (name, module) {
			if (module.options) {
				$.magnificPopup.defaults[name] = module.options;
			}
			$.extend(this.proto, module.proto);
			this.modules.push(name);
		},

		defaults: {

			// Info about options is in docs:
			// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

			disableOn: 0,

			key: null,

			midClick: false,

			mainClass: '',

			preloader: true,

			focus: '', // CSS selector of input to focus after popup is opened

			closeOnContentClick: false,

			closeOnBgClick: true,

			closeBtnInside: true,

			showCloseBtn: true,

			enableEscapeKey: true,

			modal: false,

			alignTop: false,

			removalDelay: 0,

			prependTo: null,

			fixedContentPos: 'auto',

			fixedBgPos: 'auto',

			overflowY: 'auto',

			closeMarkup: '<button title="%title%" type="button" class="mfp-close">×</button>',

			tClose: 'Close (Esc)',

			tLoading: 'Loading...',

			autoFocusLast: true

		}
	};


	$.fn.magnificPopup = function (options) {
		_checkInstance();

		var jqEl = $(this);

		// We call some API method of first param is a string
		if (typeof options === "string") {

			if (options === 'open') {
				var items,
					itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
					index = parseInt(arguments[1], 10) || 0;

				if (itemOpts.items) {
					items = itemOpts.items[index];
				} else {
					items = jqEl;
					if (itemOpts.delegate) {
						items = items.find(itemOpts.delegate);
					}
					items = items.eq(index);
				}
				mfp._openClick({
					mfpEl: items
				}, jqEl, itemOpts);
			} else {
				if (mfp.isOpen)
					mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
			}

		} else {
			// clone options obj
			options = $.extend(true, {}, options);

			/*
			 * As Zepto doesn't support .data() method for objects
			 * and it works only in normal browsers
			 * we assign "options" object directly to the DOM element. FTW!
			 */
			if (_isJQ) {
				jqEl.data('magnificPopup', options);
			} else {
				jqEl[0].magnificPopup = options;
			}

			mfp.addGroup(jqEl, options);

		}
		return jqEl;
	};

	/*>>core*/

	/*>>inline*/

	var INLINE_NS = 'inline',
		_hiddenClass,
		_inlinePlaceholder,
		_lastInlineElement,
		_putInlineElementsBack = function () {
			if (_lastInlineElement) {
				_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
				_lastInlineElement = null;
			}
		};

	$.magnificPopup.registerModule(INLINE_NS, {
		options: {
			hiddenClass: 'hide', // will be appended with `mfp-` prefix
			markup: '',
			tNotFound: 'Content not found'
		},
		proto: {

			initInline: function () {
				mfp.types.push(INLINE_NS);

				_mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
					_putInlineElementsBack();
				});
			},

			getInline: function (item, template) {

				_putInlineElementsBack();

				if (item.src) {
					var inlineSt = mfp.st.inline,
						el = $(item.src);

					if (el.length) {

						// If target element has parent - we replace it with placeholder and put it back after popup is closed
						var parent = el[0].parentNode;
						if (parent && parent.tagName) {
							if (!_inlinePlaceholder) {
								_hiddenClass = inlineSt.hiddenClass;
								_inlinePlaceholder = _getEl(_hiddenClass);
								_hiddenClass = 'mfp-' + _hiddenClass;
							}
							// replace target inline element with placeholder
							_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
						}

						mfp.updateStatus('ready');
					} else {
						mfp.updateStatus('error', inlineSt.tNotFound);
						el = $('<div>');
					}

					item.inlineElement = el;
					return el;
				}

				mfp.updateStatus('ready');
				mfp._parseMarkup(template, {}, item);
				return template;
			}
		}
	});

	/*>>inline*/

	/*>>ajax*/
	var AJAX_NS = 'ajax',
		_ajaxCur,
		_removeAjaxCursor = function () {
			if (_ajaxCur) {
				$(document.body).removeClass(_ajaxCur);
			}
		},
		_destroyAjaxRequest = function () {
			_removeAjaxCursor();
			if (mfp.req) {
				mfp.req.abort();
			}
		};

	$.magnificPopup.registerModule(AJAX_NS, {

		options: {
			settings: null,
			cursor: 'mfp-ajax-cur',
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},

		proto: {
			initAjax: function () {
				mfp.types.push(AJAX_NS);
				_ajaxCur = mfp.st.ajax.cursor;

				_mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
				_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
			},
			getAjax: function (item) {

				if (_ajaxCur) {
					$(document.body).addClass(_ajaxCur);
				}

				mfp.updateStatus('loading');

				var opts = $.extend({
					url: item.src,
					success: function (data, textStatus, jqXHR) {
						var temp = {
							data: data,
							xhr: jqXHR
						};

						_mfpTrigger('ParseAjax', temp);

						mfp.appendContent($(temp.data), AJAX_NS);

						item.finished = true;

						_removeAjaxCursor();

						mfp._setFocus();

						setTimeout(function () {
							mfp.wrap.addClass(READY_CLASS);
						}, 16);

						mfp.updateStatus('ready');

						_mfpTrigger('AjaxContentAdded');
					},
					error: function () {
						_removeAjaxCursor();
						item.finished = item.loadError = true;
						mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
					}
				}, mfp.st.ajax.settings);

				mfp.req = $.ajax(opts);

				return '';
			}
		}
	});

	/*>>ajax*/

	/*>>image*/
	var _imgInterval,
		_getTitle = function (item) {
			if (item.data && item.data.title !== undefined)
				return item.data.title;

			var src = mfp.st.image.titleSrc;

			if (src) {
				if ($.isFunction(src)) {
					return src.call(mfp, item);
				} else if (item.el) {
					return item.el.attr(src) || '';
				}
			}
			return '';
		};

	$.magnificPopup.registerModule('image', {

		options: {
			markup: '<div class="mfp-figure">' +
				'<div class="mfp-close"></div>' +
				'<figure>' +
				'<div class="mfp-img"></div>' +
				'<figcaption>' +
				'<div class="mfp-bottom-bar">' +
				'<div class="mfp-title"></div>' +
				'<div class="mfp-counter"></div>' +
				'</div>' +
				'</figcaption>' +
				'</figure>' +
				'</div>',
			cursor: 'mfp-zoom-out-cur',
			titleSrc: 'title',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},

		proto: {
			initImage: function () {
				var imgSt = mfp.st.image,
					ns = '.image';

				mfp.types.push('image');

				_mfpOn(OPEN_EVENT + ns, function () {
					if (mfp.currItem.type === 'image' && imgSt.cursor) {
						$(document.body).addClass(imgSt.cursor);
					}
				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (imgSt.cursor) {
						$(document.body).removeClass(imgSt.cursor);
					}
					_window.off('resize' + EVENT_NS);
				});

				_mfpOn('Resize' + ns, mfp.resizeImage);
				if (mfp.isLowIE) {
					_mfpOn('AfterChange', mfp.resizeImage);
				}
			},
			resizeImage: function () {
				var item = mfp.currItem;
				if (!item || !item.img) return;

				if (mfp.st.image.verticalFit) {
					var decr = 0;
					// fix box-sizing in ie7/8
					if (mfp.isLowIE) {
						decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
					}
					item.img.css('max-height', mfp.wH - decr);
				}
			},
			_onImageHasSize: function (item) {
				if (item.img) {

					item.hasSize = true;

					if (_imgInterval) {
						clearInterval(_imgInterval);
					}

					item.isCheckingImgSize = false;

					_mfpTrigger('ImageHasSize', item);

					if (item.imgHidden) {
						if (mfp.content)
							mfp.content.removeClass('mfp-loading');

						item.imgHidden = false;
					}

				}
			},

			/**
			 * Function that loops until the image has size to display elements that rely on it asap
			 */
			findImageSize: function (item) {

				var counter = 0,
					img = item.img[0],
					mfpSetInterval = function (delay) {

						if (_imgInterval) {
							clearInterval(_imgInterval);
						}
						// decelerating interval that checks for size of an image
						_imgInterval = setInterval(function () {
							if (img.naturalWidth > 0) {
								mfp._onImageHasSize(item);
								return;
							}

							if (counter > 200) {
								clearInterval(_imgInterval);
							}

							counter++;
							if (counter === 3) {
								mfpSetInterval(10);
							} else if (counter === 40) {
								mfpSetInterval(50);
							} else if (counter === 100) {
								mfpSetInterval(500);
							}
						}, delay);
					};

				mfpSetInterval(1);
			},

			getImage: function (item, template) {

				var guard = 0,

					// image load complete handler
					onLoadComplete = function () {
						if (item) {
							if (item.img[0].complete) {
								item.img.off('.mfploader');

								if (item === mfp.currItem) {
									mfp._onImageHasSize(item);

									mfp.updateStatus('ready');
								}

								item.hasSize = true;
								item.loaded = true;

								_mfpTrigger('ImageLoadComplete');

							} else {
								// if image complete check fails 200 times (20 sec), we assume that there was an error.
								guard++;
								if (guard < 200) {
									setTimeout(onLoadComplete, 100);
								} else {
									onLoadError();
								}
							}
						}
					},

					// image error handler
					onLoadError = function () {
						if (item) {
							item.img.off('.mfploader');
							if (item === mfp.currItem) {
								mfp._onImageHasSize(item);
								mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
							}

							item.hasSize = true;
							item.loaded = true;
							item.loadError = true;
						}
					},
					imgSt = mfp.st.image;


				var el = template.find('.mfp-img');
				if (el.length) {
					var img = document.createElement('img');
					img.className = 'mfp-img';
					if (item.el && item.el.find('img').length) {
						img.alt = item.el.find('img').attr('alt');
					}
					item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
					img.src = item.src;

					// without clone() "error" event is not firing when IMG is replaced by new IMG
					// TODO: find a way to avoid such cloning
					if (el.is('img')) {
						item.img = item.img.clone();
					}

					img = item.img[0];
					if (img.naturalWidth > 0) {
						item.hasSize = true;
					} else if (!img.width) {
						item.hasSize = false;
					}
				}

				mfp._parseMarkup(template, {
					title: _getTitle(item),
					img_replaceWith: item.img
				}, item);

				mfp.resizeImage();

				if (item.hasSize) {
					if (_imgInterval) clearInterval(_imgInterval);

					if (item.loadError) {
						template.addClass('mfp-loading');
						mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
					} else {
						template.removeClass('mfp-loading');
						mfp.updateStatus('ready');
					}
					return template;
				}

				mfp.updateStatus('loading');
				item.loading = true;

				if (!item.hasSize) {
					item.imgHidden = true;
					template.addClass('mfp-loading');
					mfp.findImageSize(item);
				}

				return template;
			}
		}
	});

	/*>>image*/

	/*>>zoom*/
	var hasMozTransform,
		getHasMozTransform = function () {
			if (hasMozTransform === undefined) {
				hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
			}
			return hasMozTransform;
		};

	$.magnificPopup.registerModule('zoom', {

		options: {
			enabled: false,
			easing: 'ease-in-out',
			duration: 300,
			opener: function (element) {
				return element.is('img') ? element : element.find('img');
			}
		},

		proto: {

			initZoom: function () {
				var zoomSt = mfp.st.zoom,
					ns = '.zoom',
					image;

				if (!zoomSt.enabled || !mfp.supportsTransition) {
					return;
				}

				var duration = zoomSt.duration,
					getElToAnimate = function (image) {
						var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
							transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
							cssObj = {
								position: 'fixed',
								zIndex: 9999,
								left: 0,
								top: 0,
								'-webkit-backface-visibility': 'hidden'
							},
							t = 'transition';

						cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

						newImg.css(cssObj);
						return newImg;
					},
					showMainContent = function () {
						mfp.content.css('visibility', 'visible');
					},
					openTimeout,
					animatedImg;

				_mfpOn('BuildControls' + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);
						mfp.content.css('visibility', 'hidden');

						// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

						image = mfp._getItemToZoom();

						if (!image) {
							showMainContent();
							return;
						}

						animatedImg = getElToAnimate(image);

						animatedImg.css(mfp._getOffset());

						mfp.wrap.append(animatedImg);

						openTimeout = setTimeout(function () {
							animatedImg.css(mfp._getOffset(true));
							openTimeout = setTimeout(function () {

								showMainContent();

								setTimeout(function () {
									animatedImg.remove();
									image = animatedImg = null;
									_mfpTrigger('ZoomAnimationEnded');
								}, 16); // avoid blink when switching images

							}, duration); // this timeout equals animation duration

						}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


						// Lots of timeouts...
					}
				});
				_mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);

						mfp.st.removalDelay = duration;

						if (!image) {
							image = mfp._getItemToZoom();
							if (!image) {
								return;
							}
							animatedImg = getElToAnimate(image);
						}

						animatedImg.css(mfp._getOffset(true));
						mfp.wrap.append(animatedImg);
						mfp.content.css('visibility', 'hidden');

						setTimeout(function () {
							animatedImg.css(mfp._getOffset());
						}, 16);
					}

				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {
						showMainContent();
						if (animatedImg) {
							animatedImg.remove();
						}
						image = null;
					}
				});
			},

			_allowZoom: function () {
				return mfp.currItem.type === 'image';
			},

			_getItemToZoom: function () {
				if (mfp.currItem.hasSize) {
					return mfp.currItem.img;
				} else {
					return false;
				}
			},

			// Get element postion relative to viewport
			_getOffset: function (isLarge) {
				var el;
				if (isLarge) {
					el = mfp.currItem.img;
				} else {
					el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
				}

				var offset = el.offset();
				var paddingTop = parseInt(el.css('padding-top'), 10);
				var paddingBottom = parseInt(el.css('padding-bottom'), 10);
				offset.top -= ($(window).scrollTop() - paddingTop);


				/*

				Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

				 */
				var obj = {
					width: el.width(),
					// fix Zepto height+padding issue
					height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
				};

				// I hate to do this, but there is no another option
				if (getHasMozTransform()) {
					obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
				} else {
					obj.left = offset.left;
					obj.top = offset.top;
				}
				return obj;
			}

		}
	});


	/*>>zoom*/

	/*>>iframe*/

	var IFRAME_NS = 'iframe',
		_emptyPage = '//about:blank',

		_fixIframeBugs = function (isShowing) {
			if (mfp.currTemplate[IFRAME_NS]) {
				var el = mfp.currTemplate[IFRAME_NS].find('iframe');
				if (el.length) {
					// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
					if (!isShowing) {
						el[0].src = _emptyPage;
					}

					// IE8 black screen bug fix
					if (mfp.isIE8) {
						el.css('display', isShowing ? 'block' : 'none');
					}
				}
			}
		};

	$.magnificPopup.registerModule(IFRAME_NS, {

		options: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
				'</div>',

			srcAction: 'iframe_src',

			// we don't care and support only one default type of URL by default
			patterns: {
				youtube: {
					index: 'youtube.com',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		},

		proto: {
			initIframe: function () {
				mfp.types.push(IFRAME_NS);

				_mfpOn('BeforeChange', function (e, prevType, newType) {
					if (prevType !== newType) {
						if (prevType === IFRAME_NS) {
							_fixIframeBugs(); // iframe if removed
						} else if (newType === IFRAME_NS) {
							_fixIframeBugs(true); // iframe is showing
						}
					} // else {
					// iframe source is switched, don't do anything
					//}
				});

				_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
					_fixIframeBugs();
				});
			},

			getIframe: function (item, template) {
				var embedSrc = item.src;
				var iframeSt = mfp.st.iframe;

				$.each(iframeSt.patterns, function () {
					if (embedSrc.indexOf(this.index) > -1) {
						if (this.id) {
							if (typeof this.id === 'string') {
								embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
							} else {
								embedSrc = this.id.call(this, embedSrc);
							}
						}
						embedSrc = this.src.replace('%id%', embedSrc);
						return false; // break;
					}
				});

				var dataObj = {};
				if (iframeSt.srcAction) {
					dataObj[iframeSt.srcAction] = embedSrc;
				}
				mfp._parseMarkup(template, dataObj, item);

				mfp.updateStatus('ready');

				return template;
			}
		}
	});


	/*>>iframe*/

	/*>>gallery*/
	/**
	 * Get looped index depending on number of slides
	 */
	var _getLoopedId = function (index) {
			var numSlides = mfp.items.length;
			if (index > numSlides - 1) {
				return index - numSlides;
			} else if (index < 0) {
				return numSlides + index;
			}
			return index;
		},
		_replaceCurrTotal = function (text, curr, total) {
			return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
		};

	$.magnificPopup.registerModule('gallery', {

		options: {
			enabled: false,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: true,
			arrows: true,

			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%'
		},

		proto: {
			initGallery: function () {

				var gSt = mfp.st.gallery,
					ns = '.mfp-gallery';

				mfp.direction = true; // true - next, false - prev

				if (!gSt || !gSt.enabled) return false;

				_wrapClasses += ' mfp-gallery';

				_mfpOn(OPEN_EVENT + ns, function () {

					if (gSt.navigateByImgClick) {
						mfp.wrap.on('click' + ns, '.mfp-img', function () {
							if (mfp.items.length > 1) {
								mfp.next();
								return false;
							}
						});
					}

					_document.on('keydown' + ns, function (e) {
						if (e.keyCode === 37) {
							mfp.prev();
						} else if (e.keyCode === 39) {
							mfp.next();
						}
					});
				});

				_mfpOn('UpdateStatus' + ns, function (e, data) {
					if (data.text) {
						data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
					}
				});

				_mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
					var l = mfp.items.length;
					values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
				});

				_mfpOn('BuildControls' + ns, function () {
					if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
						var markup = gSt.arrowMarkup,
							arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
							arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

						arrowLeft.click(function () {
							mfp.prev();
						});
						arrowRight.click(function () {
							mfp.next();
						});

						mfp.container.append(arrowLeft.add(arrowRight));
					}
				});

				_mfpOn(CHANGE_EVENT + ns, function () {
					if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

					mfp._preloadTimeout = setTimeout(function () {
						mfp.preloadNearbyImages();
						mfp._preloadTimeout = null;
					}, 16);
				});


				_mfpOn(CLOSE_EVENT + ns, function () {
					_document.off(ns);
					mfp.wrap.off('click' + ns);
					mfp.arrowRight = mfp.arrowLeft = null;
				});

			},
			next: function () {
				mfp.direction = true;
				mfp.index = _getLoopedId(mfp.index + 1);
				mfp.updateItemHTML();
			},
			prev: function () {
				mfp.direction = false;
				mfp.index = _getLoopedId(mfp.index - 1);
				mfp.updateItemHTML();
			},
			goTo: function (newIndex) {
				mfp.direction = (newIndex >= mfp.index);
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			preloadNearbyImages: function () {
				var p = mfp.st.gallery.preload,
					preloadBefore = Math.min(p[0], mfp.items.length),
					preloadAfter = Math.min(p[1], mfp.items.length),
					i;

				for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
					mfp._preloadItem(mfp.index + i);
				}
				for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
					mfp._preloadItem(mfp.index - i);
				}
			},
			_preloadItem: function (index) {
				index = _getLoopedId(index);

				if (mfp.items[index].preloaded) {
					return;
				}

				var item = mfp.items[index];
				if (!item.parsed) {
					item = mfp.parseEl(index);
				}

				_mfpTrigger('LazyLoad', item);

				if (item.type === 'image') {
					item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
						item.hasSize = true;
					}).on('error.mfploader', function () {
						item.hasSize = true;
						item.loadError = true;
						_mfpTrigger('LazyLoadError', item);
					}).attr('src', item.src);
				}


				item.preloaded = true;
			}
		}
	});

	/*>>gallery*/

	/*>>retina*/

	var RETINA_NS = 'retina';

	$.magnificPopup.registerModule(RETINA_NS, {
		options: {
			replaceSrc: function (item) {
				return item.src.replace(/\.\w+$/, function (m) {
					return '@2x' + m;
				});
			},
			ratio: 1 // Function or number.  Set to 1 to disable.
		},
		proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {

					var st = mfp.st.retina,
						ratio = st.ratio;

					ratio = !isNaN(ratio) ? ratio : ratio();

					if (ratio > 1) {
						_mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
							item.img.css({
								'max-width': item.img[0].naturalWidth / ratio,
								'width': '100%'
							});
						});
						_mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
							item.src = st.replaceSrc(item, ratio);
						});
					}
				}

			}
		}
	});

	/*>>retina*/
	_checkInstance();
}));;;
(function (document, window, $, undefined) {
	//  'use strict';
	//flexibility(document.documentElement);
	$(document).ready(function () {
		var App = function () {
			this.slider = $('.banner--slider');
			this.init();
		};

		App.prototype.init = function () {
			this.initBloodHound();
			this.initSlider();
			this.initModal();
		};

		App.prototype.initSlider = function () {
			this.slider.slick();
			/*
			$('select').selectpicker({
			  style: 'btn-info',
			  size: 4
			});
			$( document.body ).on( 'updated_wc_div', function(){
			  //re-do your jquery
			  $('select').selectpicker({
			    style: 'btn-info',
			    size: 4
			  });
			});
			*/
		};

		App.prototype.initModal = function () {

			$("#modal-1").on("change", function () {
				if ($(this).is(":checked")) {
					$("body").addClass("modal-open");
				} else {
					$("body").removeClass("modal-open");
				}
			});


			$(".modal-fade-screen, .modal-close").on("click", function () {
				$(".modal-state:checked").prop("checked", false).change();
			});

			$(".modal-inner").on("click", function (e) {
				e.stopPropagation();
			});
		};


		/*
		 * Initializing search suggetion
		 * check for the data payload -> theme-inc/rest-api-endpoints.php
		 **/
		App.prototype.initBloodHound = function () {
			var
				// config bloodhound pageEngine
				restaurantEngine = new Bloodhound({
					// this depends on what kind of data structure you cooked on your server
					datumTokenizer: function (data) {
						var returns = [],
							ft;
						returns.push(data.name);
						/*
						if(data.meta.hasOwnProperty('lounge_bar_cuisine')){
						  returns.push(data.meta.lounge_bar_cuisine.label);
						  returns.push(data.meta.lounge_bar_area_name);
						}
						if(data.meta.hasOwnProperty('restaurant_cuisine')){
						  returns.push(data.meta.restaurant_cuisine.label);
						  returns.push(data.meta.restaurant_area_name);
						}
						*/

						//returns = returns.concat(ft);
						return Bloodhound.tokenizers.whitespace(returns.join(' '));
					},

					queryTokenizer: Bloodhound.tokenizers.whitespace,

					prefetch: {
						url: 'http://olivierdolz.com/wp-json/api/v1/pages',
						cache: false
					}
				});
			// start search engine
			restaurantEngine.initialize();
			console.log(restaurantEngine);
			$('.search__input__js').typeahead({
				height: true
			}, {
				name: 'pages',
				displayKey: 'name',
				source: restaurantEngine.ttAdapter(),
				templates: {
					header: '<h3 class="search--result--section-title">RESULTS</h3>',
					suggestion: Handlebars.compile($('#typeahead-list').html())
				}
			});
		};

		$(document).ready(function () {
			$('.popup-youtube').magnificPopup({
				disableOn: 300,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});

			$(".wpcf7-form-control-wrap").css('position', 'static');
		});


		var app = new App();
	});

	var fblightbox = $('#fblightbox');
	fblightbox.css({
		'margin-left': '-' + (fblightbox.width() / 2) + 'px',
		'margin-top': '-' + (fblightbox.height() / 2) + 'px'
	});

	$("#launch").click(function () {
		$('.overlay').fadeIn();
		fblightbox.fadeIn();
	});
	$("#close").click(function () {
		$('.overlay').fadeOut();
		fblightbox.fadeOut();
	});

	$('#chooseFile').bind('change', function () {
		var filename = $("#chooseFile").val();
		if (/^\s*$/.test(filename)) {
			$(".file-upload").removeClass('active');
			$("#noFile").text("No file chosen...");
		} else {
			$(".file-upload").addClass('active');
			$("#noFile").text(filename.replace("C:\\fakepath\\", ""));
		}
	});

	$('#chooseFile1').bind('change', function () {
		var filename1 = $("#chooseFile1").val();
		if (/^\s*$/.test(filename1)) {
			$(".file-upload1").removeClass('active');
			$("#noFile1").text("No file chosen...");
		} else {
			$(".file-upload1").addClass('active');
			$("#noFile1").text(filename1.replace("C:\\fakepath\\", ""));
		}
	});

	$('.menu_cls').click(function () {
		$.sidr('close');
		console.log('clicked');
	});
}(document, window, jQuery, undefined));