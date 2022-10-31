# dns updater voor mijndomein.nl

## setup
1. host een puppeteer container met docker

2. ``` docker run -p 8080:3000 --restart always -d --name browserless browserless/chrome ```

3. instaleer een nodejs versie hoger dan 12
4. ```npm install```
5. ```npm start```


## config 

1. hernoem example.json naar default.json
2. vul de informatie in

## starten
1. npm start (cname-record)

# todo

- de script gaat er vanuit dat de cname record op de 3de plek staat als dit niet zo is dan zal er een andere record aangepast worden.