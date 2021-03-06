---
title: ClojureScript
tags:
  - client
  - clojure
  - script
  - browser
---

# ClojureScript

<TagLinks />

- Reactivity comes from The change could come from a deref’ed atom, the arguments passed to the component or component state.

## Shadow-cljs vs Figwheel

Shadow-cljs (the compiler) provides for hot-reloading,

Use react with

1. reagent
2. re-frame for SPA

> What is `^` carat sign in cljs?

`^` is "the meta character" it tells the reader to add the symbol starting with `^` as metadata to the next symbol (provided it is something that implements IMetas)

```clojure
;; Clojure code
(ns my.namespace)

;; print using JS console
(def my-js-obj #js{:foo "bar"})  ;; var my_js_obj = {foo: 'bar'};
(.log js/console my-js-object)   ;; console.log(my_js_object);
;; => {foo: 'bar'}

;; JS-callable function
(defn ^:export add [a b]         ;; function add(a, b) {
  (+ a b))                       ;;   return a + b;
                                 ;; }
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/JCY_cHzklRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Resources

- https://purelyfunctional.tv/guide/re-frame-a-visual-explanation/

<Footer />
