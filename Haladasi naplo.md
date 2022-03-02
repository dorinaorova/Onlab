## 3.hét
A héten leginkább a kód megismerésével foglalkoztam. Elolvastam a mellékelt szakdolgozatot, valamint azt vetettem össze a programmal és egyes részeivel.
Próbálgattam a kódot, megnéztem, egyes részei hogy működnek. Az első futtatás során egy hibába ütköztem, ugyanis a következő hibát kaptam: "Microsoft.AspNetCore.Server.Kestrel[0] Unable to start Kestrel. unable to configure https endpoint". Ezt végül sikerült megoldanom, hosszas keresgélés után (itt találtam megoldást: https://www.niceonecode.com/question/20641/unable-to-configure-https-endpoint.-no-server-certificate-was-specified-and-the-default-developer-certif, a certificateket kellett törölni, majd újra hozzáadni).

Átírtam a kódot úgy, hogy a kártyákhoz már hangot is lehet megadni, azondban nem kötelező. Ehhez egy-egy string propertyt vettem fel a Card osztályba (Question_sound, Answer_sound) a képek mintájára, valamint hozzáadtam egy Migartionnel az adatbázishoz a változásokat (CardWithSound).

A swaggeres felülettel szontén ismerkedtem, viszont a kártyák lekérdezésénél nem jutotttam sokra, mivel 401-Unauthorized hibát kapok. Gyanítom, mivel nincs bejelntkezett felhasználó. Még ismerkedek a rendszerrel és próbálok rájönni, hogyan tudom kikerülni ezt.

Elkészítettem a github repot, ahova az egész kódot feltettem, itt fogok dolgozni majd.
