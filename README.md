
# Proiektuaren Deskribapena
Proiektu honek multimedia-streaming zerbitzu bat eskaintzen du, aurrez grabatutako bideoak eta zuzeneko emanaldiak zerbitzatzeko. Bezeroek bideoak eta emanaldiak webgune baten bidez atzitu ditzakete, nabigatzailea erabiliz.



## Ezaugarriak

1. **Aurrez Grabatutako Bideoak**:  
   Bideoak hainbat kalitate/bereizmenekin zerbitzatzen dira, erabiltzailearen internet-abiaduraren arabera egokitzeko.
   
2. **Zuzeneko Emanaldiak**:  
   RTMP eta HLS bidez kamera batetik zuzeneko emanaldia igortzeko aukera.

3. **Erreprodukzio Desberdinak**:  
   - HTML5 `<video>` elementua.  
   - **Video.js** liburutegia, erabiltzaile-esperientzia hobetzeko eta ezaugarri gehigarriak eskaintzeko.

4. **NGINX Konfigurazioa**:  
   - RTMP eta HLS protokoloak erabiliz streaming-a.  
   - **CORS** konponbidea, edukien bateragarritasuna bermatzeko.


## Instalazioa

### Erabiltzaileak behar dituen softwareak instalatu:
- **[NGINX](https://nginx.org/en/download.html)**.
- **[Node.js](https://nodejs.org/)** .

### Proiektua klonatu:

```bash
git clone https://github.com/Alaitz19/Multimedia_Zerbitzua.git
cd Multimedia_Zerbitzua
```
### Dependentziak instalatu:
```bash
npm install
```
### NGINX konfigurazioa aktibatu:
1. nginx.conf fitxategia kopiatu eta NGINX-en konfigurazio karpetan jarri.
2. Public-en dauden bideoak Ngnix-eko html karpeta barruan videos karpeta sortu eta itsatsi.
3. Zerbitzaria berrabiarazi:
```bash
sudo service nginx restart
```
### Aplikazioa abiarazi:
```bash
node server.js
```
## Egileak
- [Leire Sesma](https://github.com/leiresesma)
- [Alaitz Shan Ye](https://github.com/Alaitz19)
