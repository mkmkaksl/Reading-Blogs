$(document).ready(function() {
    const jQueryScript = document.getElementById("jQueryScript")
    jQueryScript.setAttribute("src", "https://code.jquery.com/jquery-3.6.0.slim.min.js")
    jQueryScript.onerror = function() {
        jQueryScript.setAttribute("src", "node_modules/jquery/dist/jquery.slim.min.js")
    }
    const bootstrapScript = document.getElementById("bootstrapScript")
    bootstrapScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js")
    bootstrapScript.onerror = function() {
        bootstrapScript.setAttribute("src", "node_modules/bootstrap/dist/js/bootstrap.min.js")
    }
    const bootstrapCSS = document.getElementById("bootstrapCSS")
    bootstrapCSS.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css")
    bootstrapCSS.onerror = function() {
        bootstrapCSS.setAttribute("href", "node_modules/bootstrap/dist/css/bootstrap.min.css")
    }
})