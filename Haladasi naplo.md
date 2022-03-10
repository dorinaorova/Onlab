## 3.hét
A héten leginkább a kód megismerésével foglalkoztam. Elolvastam a mellékelt szakdolgozatot, valamint azt vetettem össze a programmal és egyes részeivel.
Próbálgattam a kódot, megnéztem, egyes részei hogy működnek. Az első futtatás során egy hibába ütköztem, ugyanis a következő hibát kaptam: "Microsoft.AspNetCore.Server.Kestrel[0] Unable to start Kestrel. unable to configure https endpoint". Ezt végül sikerült megoldanom, hosszas keresgélés után (itt találtam megoldást: https://www.niceonecode.com/question/20641/unable-to-configure-https-endpoint.-no-server-certificate-was-specified-and-the-default-developer-certif, a certificateket kellett törölni, majd újra hozzáadni).

Átírtam a kódot úgy, hogy a kártyákhoz már hangot is lehet megadni, azondban nem kötelező. Ehhez egy-egy string propertyt vettem fel a Card osztályba (Question_sound, Answer_sound) a képek mintájára, valamint hozzáadtam egy Migartionnel az adatbázishoz a változásokat (CardWithSound).

A swaggeres felülettel szontén ismerkedtem, viszont a kártyák lekérdezésénél nem jutotttam sokra, mivel 401-Unauthorized hibát kapok. Gyanítom, mivel nincs bejelntkezett felhasználó. Még ismerkedek a rendszerrel és próbálok rájönni, hogyan tudom kikerülni ezt.

Elkészítettem a github repot, ahova az egész kódot feltettem, itt fogok dolgozni majd.

##4
A backendel nem foglalkoztam sokat, főként az adatbázissal szenvedtem. Valamiért a kártya sound-jai nullként kerültek be, pedig az inicializáló osztályban (ahogy a képeknél is) üres stringként szerepel. Ezt kódból nem is tudtam kijavítani, így végül kézzel ítam át. Ezen kívül szerintem itt minden jól működik, midnenhol átírtam a kódot.

A héten nagyrészt a kliensoldalon dolgoztam. Nem foglalkoztam még Angularral se TypeScriptel, így sok nehézségbe ütköztem. Próbáltam átlátni, hogy mi hol van, hogy működik, de még nem teljesen értem. Sokszor kaptam ezt a hibát:

![image](https://user-images.githubusercontent.com/71429144/157693451-0142a4ac-0bc8-44e5-aa14-8f2cca9705da.png)

Kiderült, hogy az új kártya létrehozásánál volt a gond, de emiatt semmi sem töltött be. Miután ezt kijavítottam, már rendesen működött. Hozzáadtam a kártyák nézetéhez egy gombot, ami lenyomásakor lejátsza a question_sound-ként kapott hangot. Ez egyenlőre nem működik, még nem tudom, hogyan kellene hangot lejátszani. Sokat kutattam ezután, és többféle dolgot is kipróbáltam, de még nincs meg a jó megoldás.
