/**
* Changed by hanxiaojun on 17/4/21.
*/
<template>
  <form id="search-form">
    <input type="text" id="search-query-nav" class="search-query st-default-search-input">
  </form>
  <!-- search -->
</template>
<script>
  window.onload = function () {
    [
      '#search-query-nav',
    ].forEach(function (selector) {
      if (!document.querySelector(selector)) return
      // search index defaults to v2
      //var match = window.location.pathname.match(/^\/(v\d+)/)
      docsearch({
        appId: 'BH4D9OD16A',
        apiKey: '5638280abff9d207417bb03be05f0b25',
        indexName: 'vuejs_cn2',
        inputSelector: selector,
        algoliaOptions: {facetFilters: ["version:v2"]}
      })
    })
  }

</script>
<style lang="css">
  .search-query {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
    background: #fff url("../../assets/img/search.png") 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }

  .search-query:focus {
    border-color: #42b983;
  }

  .algolia-autocomplete {
    line-height: normal;
  }

  .aa-dropdown-menu {
    width: 100%;
    border-color: #999;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    .aa-dropdown-menu {
      min-width: 515px;
    }
  }

  .algolia-docsearch-suggestion {
    border-color: #ddd;
  }

  .algolia-docsearch-suggestion--content {
    color: #2c3e50;
  }

  .algolia-docsearch-suggestion--subcategory-column {
    border-color: #ddd;
  }

  .algolia-docsearch-suggestion--category-header {
    background: #42b983;
  }

  .algolia-docsearch-footer {
    border-color: #ddd;
  }

  .algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--highlight {
    background: rgba(255, 255, 255, 0.6);
  }

  .algolia-docsearch-suggestion--highlight {
    color: #2c815b;
  }

  .aa-cursor .algolia-docsearch-suggestion--content {
    color: #2c3e50;
  }

</style>
