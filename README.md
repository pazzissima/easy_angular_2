1. NG-init & ng-repeat:

```html
<body ng-init="names=['John Smith', 'John Doe', 'Jane Doe']">
  <ul>
    <li ng-repeat="personName in names">{{ personName }}</li>
  </ul>
</body>
```

2. Changed array to array of objects:

```html
<body data-ng-init="customers=[{name:'John Smith',city:'Phoenix'}, {name:'John Doe',city:'New York'}, {name:'Jane Doe',city:'San Francisco'}]">
```

also:

```html
<ul>
  <li data-ng-repeat="cust in customers">{{ cust.name }} - {{ cust.city }}</li>
</ul>
```

3. Changed input data-binding to search by adding filter:

<li data-ng-repeat="cust in customers | filter: name">{{ cust.name }} - {{ cust.city }}</li>

Now when we type something in the box, it works as autocomplete.