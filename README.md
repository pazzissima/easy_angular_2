NG-init & ng-repeat:

```html
<body ng-init="names=['John Smith', 'John Doe', 'Jane Doe']">
  <ul>
    <li ng-repeat="personName in names">{{ personName }}</li>
  </ul>
</body>
```
