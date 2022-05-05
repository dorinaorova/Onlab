## 3.hét
A héten leginkább a kód megismerésével foglalkoztam. Elolvastam a mellékelt szakdolgozatot, valamint azt vetettem össze a programmal és egyes részeivel.
Próbálgattam a kódot, megnéztem, egyes részei hogy működnek. Az első futtatás során egy hibába ütköztem, ugyanis a következő hibát kaptam: "Microsoft.AspNetCore.Server.Kestrel[0] Unable to start Kestrel. unable to configure https endpoint". Ezt végül sikerült megoldanom, hosszas keresgélés után (itt találtam megoldást: https://www.niceonecode.com/question/20641/unable-to-configure-https-endpoint.-no-server-certificate-was-specified-and-the-default-developer-certif, a certificateket kellett törölni, majd újra hozzáadni).

Átírtam a kódot úgy, hogy a kártyákhoz már hangot is lehet megadni, azondban nem kötelező. Ehhez egy-egy string propertyt vettem fel a Card osztályba (Question_sound, Answer_sound) a képek mintájára, valamint hozzáadtam egy Migartionnel az adatbázishoz a változásokat (CardWithSound).

A swaggeres felülettel szontén ismerkedtem, viszont a kártyák lekérdezésénél nem jutotttam sokra, mivel 401-Unauthorized hibát kapok. Gyanítom, mivel nincs bejelntkezett felhasználó. Még ismerkedek a rendszerrel és próbálok rájönni, hogyan tudom kikerülni ezt.

Elkészítettem a github repot, ahova az egész kódot feltettem, itt fogok dolgozni majd.

## 4.hét
A backendel nem foglalkoztam sokat, főként az adatbázissal szenvedtem. Valamiért a kártya sound-jai nullként kerültek be, pedig az inicializáló osztályban (ahogy a képeknél is) üres stringként szerepel. Ezt kódból nem is tudtam kijavítani, így végül kézzel ítam át. Ezen kívül szerintem itt minden jól működik, midnenhol átírtam a kódot.

A héten nagyrészt a kliensoldalon dolgoztam. Nem foglalkoztam még Angularral se TypeScriptel, így sok nehézségbe ütköztem. Próbáltam átlátni, hogy mi hol van, hogy működik, de még nem teljesen értem. Sokszor kaptam ezt a hibát:

![image](https://user-images.githubusercontent.com/71429144/157693451-0142a4ac-0bc8-44e5-aa14-8f2cca9705da.png)

Kiderült, hogy az új kártya létrehozásánál volt a gond, de emiatt semmi sem töltött be. Miután ezt kijavítottam, már rendesen működött. Hozzáadtam a kártyák nézetéhez egy gombot, ami lenyomásakor lejátsza a question_sound-ként kapott hangot. Ez egyenlőre nem működik, még nem tudom, hogyan kellene hangot lejátszani. Sokat kutattam ezután, és többféle dolgot is kipróbáltam, de még nincs meg a jó megoldás.

## 5.hét
A card-element.component.html módosításán dolgoztam legfőképp, egy új sorban most megjelenik egy hangot lejátszó rész. Az mp3-k lejátszása már teljesen jól működik. Azt próbáltam megoldani, hogy akkor ez ne jelenlen meg, ha nincs az adott kártyához hang, de még nem jutottam vele megoldásra. A képek mintájára írtam meg az hangfájlok elérési útvonalát meghatározó függvényt. Egyenlőre van külön kérdés- és válasz hang a kártyákhoz, de nem vagyok benne biztos, hogy erre szükség van.

Arra továbbra sem jöttem rá, hogy kódból üres stringek helyett mirét NULL-ként szúrta be a hang attribútumokat az adatbázisba. 

## 6.hét
A héten az új kártya létrehozását bővítettem azzal, hogy lehessen hangot is felölteni. Ehhez a car-form.component-ekben dolgoztam. A html fileokt bővítettem egy-egy rsszel, ahol a kérdés és válaszhoz tartozó hangfileokat lehet feltölteni. Itt a hangot meg is lehet hallgatni, abban az esetben, ha létezik. Ha nincs, akkor nem jelenik meg az audiot lejátszó komponens, illetve a törlés gomb sem látható ekkor.
Az upload.component fileokban dolgoztam még. Próbáltam egységesíteni a képfeltöltéssel ezt a részt, hogy ne elljen külön osztályt létrehoznom a hanganyagokhoz. Viszont mivel typescripttel nem igazán foglalkoztam eddig, még nem sikerült teljesen megoldanom, illetve nem is értem mi történik. Sokat kerestem, de hasonló fájl feltöltési megoldásokat nem találtam, így nem egészen értem, hogyan tudnám bővíteni. A választható fájl kiterjesztéseket kiegészítettem az mp3-al, viszont ezt nem ismeri fel, így hibát dob, ha iylen típust szeretnék feltölteni. A többi részt a kép feltöltés mintájára készítettem, csak itt semmiylen megkötés nincs a fájl méretére.
Ezek mellett a kártya megjelenítésén dolgoztam. Sikerült megoldani, hogy az alsó hangot lejátszó sáv, csak abban az esetben jelenjen meg, ha van hang feltöltve az adott kártyához, illetve a válasznál is lehet már hangot lejátszani.

### 7.hét
A múlt heti munkát folytatva a kártyák szerkesztési felületén dolgoztam. Elkülönítettem a kép és hangfeltöltést: mostmár a képhez csak képet, a hanghoz csak hangot lehet. Ehhez egy külön komponsenst kellett létrehoznom a hangk feltöltésére, ami lényegében ugyanaz, mint a hang feltöltés, csak a fájlformátumok mások, amiket engegélyez.
A hangok feltöltése nem ment zökkenőmentesen, sok különböző osztályt kellett módosítanom. Ezeket a részeket nehézkes volt megtalálni, az idő nagyrészét ezzel töltöttem. Létrehoztam a Resources mappán belül egy Sounds mappát, a hang fájlokat már ide tölti fel. Sz elnevezésük a képek mintájára történik.
A frontenden az upload-sound.componenteken sokat kellett dolgozni, sok olyan hibát írt amit nem tudtam értelmezni. Többek között ezt írja: 
![image](https://user-images.githubusercontent.com/71429144/160946719-1daadb7b-8d69-4c1f-94d9-ffacaadf4845.png)
Nem sikerült rájönnöm miért, ugaynis a tsconfig.json fájlban engedélyezve van ez. Ettől függetlenül lefut a program, és jól működik.
Sokszor ütköztem továbbá abba a hibába, hogy többszöri futtatásra máshogy viselkedett a program (nem engedett képet felölteni, vagy hiányzott a kérdés-válasz szöveget szerkesztő mező).

### 8.hét
A hangok feltöltése már teljesen jól működik, ehhez a backenden egy külön UploadAudioController osztályt hoztam létre, az UploadController mintájára. Az 'api/UploadAudio'-ra érkező kéréseket dolgozza fel: elvégzi a fájl átnevezését, majd azt a Resources/ Sounds mappába helyezi el. Válaszként, az UploadController-hez hasonlóan OK választ ad ha sikerült a kérést teljesíteni, ellenben BadRequest-et.
A backenden ezen kívül 
### 9. - 10.hét
A hangotkat a jelen pillaatban a kártyakészítő, a főlektor, a fő grafikus (miután lektorálva lett), illetve a szaklektor és a fő szaklektor (grafikálás után) tudja módosítani. Ehhez legfőképp a car-form-component.ts fájlban dolgoztam. A képek, illetve a kérdés-válasz szövegek mintájára létrehoztam egy isSoundEditable függvényt, ami ezt felügyeli. A bejelentkezett felhasználó szerepköre és a kártyapakli állapota alapján eldönti, hogy ki szerkesztheti a hangot. Ezen kívül a szerepkörökkel mást nem kellett csinálni. 

### 11.hét
Az adatbázist és magát a projektet is feltettem Azureba. Az adatbázishoz egy SQl adatbázist hoztam létre, ezzel kapcsoltam össze projektet. Nehézséget okozott, hogy a kapcsolati stringet sok helyen meg kellett változtatni, emiatt előszőr csak lokálisan futtatva látva aza datbázist, Azure-ról nem. 
A projekt feltelepítése sokkal nehezebben ment, sok hibába is ütköztem. Ezt a hibaüzenetet kaptam sokszor: 500.30 - asp.net core app failed to start, amiből nehéz volt következtetni a hiba pontos okára. Az Azure-os konzolból az exe fájlt futtatva már több és pontosabb hibaüzenetet kaptam. KEzdetben az adatbázist nem látta rendesen, majd amikor sikerült kicserélni ezt mindenhol, tanusítvány hiányát jelezte.
![image](https://user-images.githubusercontent.com/71429144/167009668-66321b80-f684-40ff-93e0-b7645534a6fd.png)


### 12. hét
Sikerült kijavítani a múltheti problémákat. Kezdetben próbálkoztam egy selfsigned tanúsítvány létrehozásával, viszont így sem akart működni. Hosszas keresgélés után találtam másik emgoldást, az appsettings.json fájlban kellett átírni a Key Type-ot Store-ról Developmentre. 
Ezek mellett teszteket készítettem, amik főként a hangok hozzááadásának és törlésének működését ellenőrzik: kitörlődik-e a kérdés/válasz hang, megfelelő választ ad-e ha nem jó id-u kártyát adunk meg, átíródik-e a hang, ha frissítjük a kártyát, illetve a hang is hozzáadódik-e a új kártyát veszünk fel.
