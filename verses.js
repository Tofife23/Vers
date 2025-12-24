const verses = [
  {
    text: "Hospodin jest světlo mé a spasení mé, kohož bych se bál?",
    ref: "Žalm 27,1"
  },
  {
    text: "Všecko mohu v Kristu, kterýž mne posiluje.",
    ref: "Filipským 4,13"
  },
  {
    text: "Bůh jest láska.",
    ref: "1 Jan 4,8"
  },
  {
    text: "Neboť Bůh tak miloval svět, že Syna svého jednorozeného dal, aby každý, kdož věří v něho, nezahynul, ale měl život věčný.",
    ref: "Jan 3,16"
  },
  {
    text: "Buďte silní a posilněte srdce svého, všickni, kteříž naději máte v Hospodinu.",
    ref: "Žalm 31,25"
  },
  {
    text: "Milujte se vespolek, jakož já miloval jsem vás.",
    ref: "Jan 15,12"
  },
  {
    text: "V světě soužení míti budete, ale doufejte, jáť jsem přemohl svět.",
    ref: "Jan 16,33"
  },
  {
    text: "Hledejte nejprve království Božího a spravedlnosti jeho, a toto všecko bude vám přidáno.",
    ref: "Matouš 6,33"
  },
  {
    text: "Pokoj zanechávám vám, pokoj svůj dávám vám.",
    ref: "Jan 14,27"
  },
  {
    text: "Bůh jest útočiště naše a síla, pomoc v úzkostech vždy velmi osvědčená.",
    ref: "Žalm 46,2"
  },
  {
    text: "Požehnán muž, kterýž doufá v Hospodina.",
    ref: "Jeremiáš 17,7"
  },
  {
    text: "Nebudeť od tebe odjata kniha zákona tohoto od úst tvých, ale přemyšlovati budeš o něm dnem i nocí.",
    ref: "Jozue 1,8"
  },
  {
    text: "Hospodin jest můj pastýř, nebudu míti nedostatku.",
    ref: "Žalm 23,1"
  },
  {
    text: "Blahoslavení čistého srdce, neboť oni Boha viděti budou.",
    ref: "Matouš 5,8"
  },
  {
    text: "Láska nikdy nehyne.",
    ref: "1 Korintským 13,8"
  },
  {
    text: "Vnímejte jeden druhého, jakož i Kristus přijal nás k slávě Boží.",
    ref: "Římanům 15,7"
  },
  {
    text: "Nebojte se, já jsem přemohl svět.",
    ref: "Jan 16,33"
  },
  {
    text: "Blízcí jest Pán všechněm vzývajícím jej, všechněm, kteříž jej vzývají v pravdě.",
    ref: "Žalm 145,18"
  },
  {
    text: "Nebo milostí spaseni jste skrze víru, a to ne sami z sebe: Boží dar jest.",
    ref: "Efezským 2,8"
  },
  {
    text: "Věřím Bohu, že tak bude, jakž mluveno jest ke mně.",
    ref: "Skutky 27,25"
  },
  {
    text: "Posilni se a zmužile se měj, neboj se, ani se strachuj.",
    ref: "Jozue 1,9"
  },
  {
    text: "Ať srdce vaše nebývá zkormouceno. Věříte v Boha, i ve mne věřte.",
    ref: "Jan 14,1"
  },
  {
    text: "Bůh jest láska, a kdož přebývá v lásce, v Bohu přebývá, a Bůh v něm.",
    ref: "1 Jan 4,16"
  },
  {
    text: "Věřím, Pane, ale ty pomoz nedověře mé.",
    ref: "Marek 9,24"
  },
  {
    text: "Spravedlivý z víry živ bude.",
    ref: "Římanům 1,17"
  },
  {
    text: "Ovoce pak Ducha jesť: Láska, radost, pokoj, tichost, dobrotivost, dobrota, věrnost, krotkost, střídmost.",
    ref: "Galatským 5,22-23"
  },
  {
    text: "Já jsem cesta i pravda i život. Žádný nepřichází k Otci než skrze mne.",
    ref: "Jan 14,6"
  },
  {
    text: "Nebesa vypravují slávu Boží, a dílo rukou jeho obloha zvěstuje.",
    ref: "Žalm 19,2"
  },
  {
    text: "Nebo ty jsi stvořil ledví má, přioděls mne v životě matky mé.",
    ref: "Žalm 139,13"
  },
  {
    text: "Přiveďte k Hospodinu syny Boží, přiveďte k Hospodinu slávu a čest.",
    ref: "Žalm 29,1"
  },
  {
    text: "Radujte se v Pánu vždycky, opět pravím: Radujte se.",
    ref: "Filipským 4,4"
  },
  {
    text: "Všeliké starosti vaše uvrhněte na něj, nebo on pečuje o vás.",
    ref: "1 Petr 5,7"
  },
  {
    text: "Spasení jest Hospodinovo.",
    ref: "Žalm 3,9"
  },
  {
    text: "Neodpírej dobře činiti těm, kterýmž náleží, když můžeš učiniti.",
    ref: "Přísloví 3,27"
  },
  {
    text: "Buď věren až do smrti, a dám tobě korunu života.",
    ref: "Zjevení 2,10"
  },
  {
    text: "Slovo tvé jest svíce noze mé, a světlo stezce mé.",
    ref: "Žalm 119,105"
  },
  {
    text: "Pokorným dává milost.",
    ref: "Jakub 4,6"
  },
  {
    text: "Lépe jest doufati v Hospodina, nežli naději skládati v člověku.",
    ref: "Žalm 118,8"
  },
  {
    text: "Sláva na výsostech Bohu, a na zemi pokoj, a v lidech dobrotivost.",
    ref: "Lukáš 2,14"
  },
  {
    text: "A všecko, cožkoli byste činili slovem neb skutkem, všecko čiňte ve jménu Pána Ježíše.",
    ref: "Koloským 3,17"
  },
  {
    text: "Jako jelen dychtí po tekutých vodách, tak touží duše má po tobě, Bože.",
    ref: "Žalm 42,2"
  },
  {
    text: "Neboj se, já s tebou jsem.",
    ref: "Izaiáš 41,10"
  },
  {
    text: "Bděte, stůjte v víře, mužsky se mějte, buďte silní.",
    ref: "1 Korintským 16,13"
  },
  {
    text: "Zkrze něj i my k Otci přístup máme v jednom Duchu.",
    ref: "Efezským 2,18"
  },
  {
    text: "Nebo Syn člověka nepřišel, aby jemu slouženo bylo, ale aby sloužil.",
    ref: "Matouš 20,28"
  },
  {
    text: "Blahoslavení lkající, nebo oni potěšeni budou.",
    ref: "Matouš 5,4"
  },
  {
    text: "Pán jest můj pomocník, nebudu se báti.",
    ref: "Židům 13,6"
  },
  {
    text: "Pán jest dobrý, pevnost má v den soužení.",
    ref: "Nahum 1,7"
  },
  {
    text: "Věrný jest Bůh, skrze kteréhož povoláni jste v tovaryšství Syna jeho Ježíše Krista.",
    ref: "1 Korintským 1,9"
  },
  {
    text: "Milujte nepřátely své, čiňte dobře nenávidícím vás.",
    ref: "Lukáš 6,27"
  },
  {
    text: "A nyní zůstává víra, naděje, láska, ale největší z nich jest láska.",
    ref: "1 Korintským 13,13"
  },
  {
    text: "Máte pokoj v Bohu a nesnáz v světě.",
    ref: "Jan 16,33"
  },
  {
    text: "Já jsem s vámi po všecky dny až do skonání světa.",
    ref: "Matouš 28,20"
  },
  {
    text: "Odpusť nám naše viny, jakož i my odpouštíme našim viníkům.",
    ref: "Matouš 6,12"
  },
  {
    text: "Hospodin, Hospodin, Bůh silný, lítostivý a milostivý, dlouhoshovívající a hojný v milosrdenství.",
    ref: "Exodus 34,6"
  },
  {
    text: "Přijďte ke mně všickni, kteříž pracujete a obtíženi jste, a já vám odpočinutí dám.",
    ref: "Matouš 11,28"
  },
  {
    text: "Pokoj zanechávám vám, pokoj svůj dávám vám, ne jakž svět dává, já dávám vám.",
    ref: "Jan 14,27"
  },
  {
    text: "Buďtež dokonalí, jakož i Otec váš nebeský dokonalý jest.",
    ref: "Matouš 5,48"
  },
  {
    text: "Žízeň má duše po Bohu, po Bohu živém.",
    ref: "Žalm 42,3"
  },
  {
    text: "S Bohem učiníme předivné věci.",
    ref: "Žalm 60,14"
  },
  {
    text: "Hospodin opatruje všecky padající, a pozdvihuje všech sklíčených.",
    ref: "Žalm 145,14"
  },
  {
    text: "Dobrořeč, duše má, Hospodinu, a všecka vnitřnost má jménu svatému jeho.",
    ref: "Žalm 103,1"
  },
  {
    text: "Žádný tě neopustí, aniž tě kdy zanechá.",
    ref: "Židům 13,5"
  },
  {
    text: "Víra jest podstata věcí, v něž se doufá, a důvod neviditelných.",
    ref: "Židům 11,1"
  },
  {
    text: "Nebo kde jsou dva neb tři shromáždění ve jménu mém, tuť jsem já u prostřed nich.",
    ref: "Matouš 18,20"
  },
  {
    text: "Blahoslavený muž, kterýž nesnáší rady bezbožných.",
    ref: "Žalm 1,1"
  },
  {
    text: "Dobré jest očekávati, pravím, a mlčením ostříhati spasení Hospodinova.",
    ref: "Pláč 3,26"
  },
  {
    text: "Amen, amen pravím vám: Kdo slyší slovo mé a věří tomu, kterýž mne poslal, má život věčný.",
    ref: "Jan 5,24"
  },
  {
    text: "Blaze tomu, jemuž jest odpuštěno přestoupení, jehož hřích jest přikryt.",
    ref: "Žalm 32,1"
  },
  {
    text: "Ctěte Hospodina statkem svým.",
    ref: "Přísloví 3,9"
  },
  {
    text: "Nyní pak zůstává víra, naděje, láska.",
    ref: "1 Korintským 13,13"
  },
  {
    text: "Ó jak veliké jest množství dobroty tvé.",
    ref: "Žalm 31,20"
  },
  {
    text: "Hospodin ochraňuje hosty, sirotka a vdovu zdržuje.",
    ref: "Žalm 146,9"
  },
  {
    text: "Mnoho zlého civí na spravedlivého, ale ze všeho vysvobozuje jej Hospodin.",
    ref: "Žalm 34,20"
  },
  {
    text: "Šťastný člověk, kterýž snáší pokušení.",
    ref: "Jakub 1,12"
  },
  {
    text: "Požehnaný Pán Bůh Izraelský, neboť navštívil a vykoupil lid svůj.",
    ref: "Lukáš 1,68"
  },
  {
    text: "Kámen, kterýž zavrhli stavitelé, učiněn jest v hlavu úhelní.",
    ref: "Žalm 118,22"
  },
  {
    text: "Nebo toho, kterýž by hřích nevedět, za nás hříchem učinil.",
    ref: "2 Korintským 5,21"
  },
  {
    text: "A poznal jsem, že nic není lepšího při nich, než veseliti se a činiti dobře v životě svém.",
    ref: "Kazatel 3,12"
  },
  {
    text: "Hospodin dobře činí všechněm, a slitování jeho nade všemi skutky jeho.",
    ref: "Žalm 145,9"
  },
  {
    text: "Milostivý jest Pán a spravedlivý, a Bůh náš lítostivý.",
    ref: "Žalm 116,5"
  },
  {
    text: "Nebesa slavnosti Boží vypravují.",
    ref: "Žalm 19,2"
  },
  {
    text: "Já jsem alfa i omega, počátek i konec.",
    ref: "Zjevení 21,6"
  },
  {
    text: "Dobrořečený buď Hospodin na každý den.",
    ref: "Žalm 68,20"
  },
  {
    text: "Mnozí jsou povolaní, ale málo vyvolených.",
    ref: "Matouš 22,14"
  },
  {
    text: "Odvrať oči mé, aby nepatřily marnosti.",
    ref: "Žalm 119,37"
  },
  {
    text: "Hle, nyní čas příjemný, aj, nyní den spasení.",
    ref: "2 Korintským 6,2"
  },
  {
    text: "Buďte vděčni.",
    ref: "Koloským 3,15"
  },
  {
    text: "Dítky, milujme, ne slovem ani jazykem, ale skutkem a pravdou.",
    ref: "1 Jan 3,18"
  },
  {
    text: "Bojte se Hospodina svatí jeho.",
    ref: "Žalm 34,10"
  },
  {
    text: "Shromáždil mne z zemí, od východu a od západu, od půlnoci i od moře.",
    ref: "Žalm 107,3"
  },
  {
    text: "Cokoli činíte, z duše čiňte, jako Pánu a ne lidem.",
    ref: "Koloským 3,23"
  },
  {
    text: "Hleďte, jakou lásku dal nám Otec, abychom synové Boží slouli.",
    ref: "1 Jan 3,1"
  },
  {
    text: "Hospodin zachovává všecky, kteříž jej milují.",
    ref: "Žalm 145,20"
  },
  {
    text: "Pravda Hospodinova trvá na věky.",
    ref: "Žalm 117,2"
  },
  {
    text: "Slavte Hospodina, nebo jest dobrý, nebo na věky milosrdenství jeho.",
    ref: "Žalm 118,1"
  },
  {
    text: "Ale milujte nepřátely své, dobře čiňte.",
    ref: "Lukáš 6,35"
  },
  {
    text: "Blaze lidu tomu, jemuž se tak děje, blaze lidu tomu, jehož Hospodin Bohem jest.",
    ref: "Žalm 144,15"
  },
  {
    text: "Neboť slovo Boží jest živé a mocné.",
    ref: "Židům 4,12"
  },
  {
    text: "Pojďte a poďme k hoře Hospodinově.",
    ref: "Izaiáš 2,3"
  },
  {
    text: "Šťastný člověk, který nachází moudrost.",
    ref: "Přísloví 3,13"
  },
  {
    text: "On uzdravuje skroušené srdcem, a uvazuje bolesti jejich.",
    ref: "Žalm 147,3"
  },
  {
    text: "Počátek moudrosti jest bázeň Hospodinova.",
    ref: "Přísloví 9,10"
  },
  {
    text: "Tvé, ó Hospodine, jest velikomocnost a moc.",
    ref: "1 Paralipomenon 29,11"
  },
  {
    text: "Já jsem chléb živý, kterýž jsem s nebe sstoupil.",
    ref: "Jan 6,51"
  },
  {
    text: "Požehnání Hospodinovo, to obohacuje.",
    ref: "Přísloví 10,22"
  },
  {
    text: "Dobře činěte, hledejte soudu, pozdvihněte potlačeného.",
    ref: "Izaiáš 1,17"
  },
  {
    text: "Hospodin chrání upřímné.",
    ref: "Přísloví 2,8"
  },
  {
    text: "Hospodinova jest země i plnost její.",
    ref: "Žalm 24,1"
  },
  {
    text: "Kdo jest dobrý člověk? Ten, kterýž se bojí Hospodina.",
    ref: "Žalm 112,1"
  },
  {
    text: "Hospodin jest se mnou, protož nebudu se báti.",
    ref: "Žalm 118,6"
  },
  {
    text: "Žízníte-li, pojďte k vodám.",
    ref: "Izaiáš 55,1"
  },
  {
    text: "Vyhledávati budu, což bylo zahynulo, a zaplašené zase přivodím.",
    ref: "Ezechiel 34,16"
  },
  {
    text: "Hle, činím všecko nové.",
    ref: "Zjevení 21,5"
  },
  {
    text: "Neb u tebe jest studnice života, a v světle tvém světlo vidíme.",
    ref: "Žalm 36,10"
  },
  {
    text: "Blahoslavení milosrdní, nebo oni milosrdenství došlou.",
    ref: "Matouš 5,7"
  },
  {
    text: "Každé dání dobré a každý dar dokonalý svrcху jest.",
    ref: "Jakub 1,17"
  },
  {
    text: "Blahoslavení pokojní, nebo oni synové Boží slouti budou.",
    ref: "Matouš 5,9"
  },
  {
    text: "Žehnej, duše má, Hospodinu, a nezapomínej na všecka dobrodiní jeho.",
    ref: "Žalm 103,2"
  },
  {
    text: "Šťasten lid, jemuž jest Hospodin za Boha.",
    ref: "Žalm 33,12"
  },
  {
    text: "Nebo ty jsi, Hospodine, naděje má.",
    ref: "Žalm 71,5"
  },
  {
    text: "Spravedlivý kvete jako palmový strom.",
    ref: "Žalm 92,13"
  },
  {
    text: "Věrnost tvá až do oblaků.",
    ref: "Žalm 36,6"
  },
  {
    text: "Boží moc až do věčnosti.",
    ref: "Žalm 66,7"
  },
  {
    text: "Blaze těm, jenž chodí v zákoně Hospodinově.",
    ref: "Žalm 119,1"
  },
  {
    text: "Jméno Hospodinovo jest pevná věž.",
    ref: "Přísloví 18,10"
  },
  {
    text: "Světlo spravedlivých jasně svítí.",
    ref: "Přísloví 13,9"
  },
  {
    text: "Hospodinova jest spása.",
    ref: "Jonáš 2,10"
  },
  {
    text: "Vyhledávejte Hospodina a síly jeho, hledejte tváři jeho ustavičně.",
    ref: "Žalm 105,4"
  },
  {
    text: "Milosrdenství Hospodinovo od věků až na věky.",
    ref: "Žalm 103,17"
  },
  {
    text: "V těch, kteříž se ho bojí, zalíbení má Hospodin.",
    ref: "Žalm 147,11"
  },
  {
    text: "Tvá jest, Hospodine, spása.",
    ref: "Žalm 3,9"
  },
  {
    text: "Budiž jméno Hospodinovo požehnané.",
    ref: "Žalm 113,2"
  },
  {
    text: "Hospodin vysvobodí duši služebníků svých.",
    ref: "Žalm 34,23"
  },
  {
    text: "Pravice Hospodinova vyvyšuje.",
    ref: "Žalm 118,16"
  },
  {
    text: "Dobrotivý jest Pán všechněm.",
    ref: "Žalm 145,9"
  },
  {
    text: "Oči Hospodinovy patří na spravedlivé.",
    ref: "Žalm 34,16"
  },
  {
    text: "Z úst nemluvňátek a těch, jenž prsí požívají, založil jsi chválu.",
    ref: "Žalm 8,3"
  },
  {
    text: "Hospodin jest král můj od věků.",
    ref: "Žalm 74,12"
  },
  {
    text: "Dobrý jest Hospodin, síla má v den úzkosti.",
    ref: "Nahum 1,7"
  },
  {
    text: "Věrný jest Pán, kterýž vás utvrdí.",
    ref: "2 Tesalonickým 3,3"
  },
  {
    text: "Hospodin jest král, plésej země.",
    ref: "Žalm 97,1"
  },
  {
    text: "Buďte tedy trpěliví, bratří, až do příchodu Páně.",
    ref: "Jakub 5,7"
  },
  {
    text: "Odpočívej v Hospodinu a očekávej na něj.",
    ref: "Žalm 37,7"
  },
  {
    text: "Hospodin jest blízko všech vzývajících jej.",
    ref: "Žalm 145,18"
  },
  {
    text: "Hledej pokoje, a sic jej.",
    ref: "Žalm 34,15"
  },
  {
    text: "V Pánu mám útěchu a posilu svou.",
    ref: "Žalm 28,7"
  },
  {
    text: "Zachovej jazyk svůj od zlého.",
    ref: "Žalm 34,14"
  },
  {
    text: "Hospodine, kdo jest podobný tobě?",
    ref: "Žalm 35,10"
  },
  {
    text: "Zvelebujte Hospodina se mnou.",
    ref: "Žalm 34,4"
  },
  {
    text: "Dobrotivost a pravda ať tě neopouštějí.",
    ref: "Přísloví 3,3"
  },
  {
    text: "Hospodin jest vysoký, a na poníženého patří.",
    ref: "Žalm 138,6"
  },
  {
    text: "Zpívejte Hospodinu píseň novou.",
    ref: "Žalm 96,1"
  },
  {
    text: "Bůh lásky a pokoje budiž s vámi.",
    ref: "2 Korintským 13,11"
  },
  {
    text: "Moudrý syn veselí otce.",
    ref: "Přísloví 10,1"
  },
  {
    text: "Hospodin jest pastýř můj.",
    ref: "Žalm 23,1"
  },
  {
    text: "Mluvte pravdu jeden každý s bližním svým.",
    ref: "Efezským 4,25"
  },
  {
    text: "Pán jest dobrý ke všechněm, a slitování jeho nade všemi díly jeho.",
    ref: "Žalm 145,9"
  },
  {
    text: "Bůh jestit naše útočiště a síla.",
    ref: "Žalm 46,2"
  },
  {
    text: "Požehnaný, kdož přichází ve jménu Hospodinovu.",
    ref: "Žalm 118,26"
  },
  {
    text: "Šťasten muž, kterýž nachází moudrost.",
    ref: "Přísloví 3,13"
  },
  {
    text: "Hospodin jest král věčný.",
    ref: "Žalm 10,16"
  },
  {
    text: "Slitování Hospodinovo na věky.",
    ref: "Žalm 136,1"
  },
  {
    text: "Pozdvihněte bran svých, ó vratkové, aby všel král slávy.",
    ref: "Žalm 24,7"
  },
  {
    text: "Dobře jest doufati v Hospodina.",
    ref: "Žalm 118,8"
  },
  {
    text: "Hospodin jest pomoc má a štít můj.",
    ref: "Žalm 28,7"
  },
  {
    text: "Velebte Hospodina se mnou, a vyvyšujme jméno jeho společně.",
    ref: "Žalm 34,4"
  },
  {
    text: "Hledejte Hospodina, dokudž může nalezen býti.",
    ref: "Izaiáš 55,6"
  },
  {
    text: "Hospodinova jest země i plnost její, okršlek země i ti, kteříž obývají na něm.",
    ref: "Žalm 24,1"
  },
  {
    text: "Veliké jest milosrdenství tvé, Hospodine.",
    ref: "Žalm 119,156"
  },
  {
    text: "Hospodin jest králem na věčné věky.",
    ref: "Žalm 10,16"
  },
  {
    text: "Zdaliž není Bůh v výsostech nebeských?",
    ref: "Job 22,12"
  },
  {
    text: "Bůh náš, Bůh jest k spasení.",
    ref: "Žalm 68,21"
  },
  {
    text: "Vyznávejte se k hříchům jedni druhým a modlete se jedni za druhé.",
    ref: "Jakub 5,16"
  },
  {
    text: "Neboť všickni zhřešili a nemají slávy Boží.",
    ref: "Římanům 3,23"
  },
  {
    text: "Lítostí a milosrdenstvím očištěna bývá nepravost.",
    ref: "Přísloví 16,6"
  },
  {
    text: "Ten, kdož přichází ke mně, nikoli nevyženu ven.",
    ref: "Jan 6,37"
  },
  {
    text: "Slovo Hospodinovo jest přečisté, jako stříbro v hliněné peci přečištěné.",
    ref: "Žalm 12,7"
  },
  {
    text: "Vy pak, milí, vzdělávajíce se na té své nejsvětější víře.",
    ref: "Juda 1,20"
  },
  {
    text: "Syn můj, srdce své dej mi, a oči tvé cest mých ať ostříhají.",
    ref: "Přísloví 23,26"
  },
  {
    text: "Lépe jest maličko s bázní Hospodinovou než poklad veliký s nepokojem.",
    ref: "Přísloví 15,16"
  },
  {
    text: "A ty, Bethléme, jsi nejmenší mezi knížaty Judskými.",
    ref: "Matouš 2,6"
  },
  {
    text: "Bohatství prospívá v den hněvu, ale spravedlnost vytrhuje od smrti.",
    ref: "Přísloví 11,4"
  },
  {
    text: "Žádný prorok není vzácný v vlasti své.",
    ref: "Lukáš 4,24"
  },
  {
    text: "Nesete břemena jedni druhých, a tak naplníte zákon Kristův.",
    ref: "Galatským 6,2"
  },
  {
    text: "Spravedlivý z víry živ bude.",
    ref: "Habakuk 2,4"
  },
  {
    text: "Neb u Boha nic nemožného nebude.",
    ref: "Lukáš 1,37"
  },
  {
    text: "Nebo není nic skrytého, což by nebylo zjeveno.",
    ref: "Lukáš 8,17"
  },
  {
    text: "Kde jest poklad váš, tuť bude i srdce vaše.",
    ref: "Matouš 6,21"
  },
  {
    text: "Blahoslavení vyhnaní pro spravedlnost, neboť jejich jest království nebeské.",
    ref: "Matouš 5,10"
  },
  {
    text: "Jsem vzkříšení i život. Kdož věří ve mne, byť pak umřel, živ bude.",
    ref: "Jan 11,25"
  },
  {
    text: "Syn člověka nepřišel, aby byl posluhován, ale aby posluhoval.",
    ref: "Marek 10,45"
  },
  {
    text: "Pokoj Boží, kterýž převyšuje všeliký rozum, ostříhejž srdcí vašich.",
    ref: "Filipským 4,7"
  },
  {
    text: "Toto jest vůle Boží, posvěcení vaše.",
    ref: "1 Tesalonickým 4,3"
  },
  {
    text: "Kdo v lásce přebývá, v Bohu přebývá, a Bůh v něm.",
    ref: "1 Jan 4,16"
  },
  {
    text: "Kdo má uši k slyšení, slyš.",
    ref: "Matouš 11,15"
  },
  {
    text: "Blahoslavenější jest dáti nežli bráti.",
    ref: "Skutky 20,35"
  },
  {
    text: "Kdo miluje otce neb matku více nežli mne, není mne hoden.",
    ref: "Matouš 10,37"
  },
  {
    text: "Věřte v evangelium.",
    ref: "Marek 1,15"
  },
  {
    text: "Modlitba spravedlivého může mnoho, mocně působíc.",
    ref: "Jakub 5,16"
  },
  {
    text: "Proste, a bude vám dáno.",
    ref: "Matouš 7,7"
  },
  {
    text: "Hledejte, a naleznete.",
    ref: "Matouš 7,7"
  },
  {
    text: "Tlucte, a budeť vám otevříno.",
    ref: "Matouš 7,7"
  },
  {
    text: "Neboť každý, kdož prosí, béře, a kdo hledá, nalézá.",
    ref: "Matouš 7,8"
  },
  {
    text: "Jestliže Bůh s námi, kdo proti nám?",
    ref: "Římanům 8,31"
  },
  {
    text: "Bůh jest světlo, a žádné v něm není temnosti.",
    ref: "1 Jan 1,5"
  },
  {
    text: "Blahoslavení placoucí, neboť oni potěšeni budou.",
    ref: "Matouš 5,4"
  },
  {
    text: "Já jsem vinný kmen a vy ratolesti.",
    ref: "Jan 15,5"
  },
  {
    text: "Beze mne nemůžete ničeho učiniti.",
    ref: "Jan 15,5"
  },
  {
    text: "Což nevíte, že těla vaše chrám jsou Ducha svatého?",
    ref: "1 Korintským 6,19"
  },
  {
    text: "Nebo jste koupeni za velikou mzdu. Oslavujtež tedy Boha na těle svém.",
    ref: "1 Korintským 6,20"
  },
  {
    text: "Všecko jest možné tomu, kdož věří.",
    ref: "Marek 9,23"
  },
  {
    text: "Den po dni vynáší řeč.",
    ref: "Žalm 19,3"
  },
  {
    text: "Nebo přikázaní jeho není těžké.",
    ref: "1 Jan 5,3"
  },
  {
    text: "Pravda vás vysvobodí.",
    ref: "Jan 8,32"
  },
  {
    text: "Nový zákon dávám vám, abyste se milovali vespolek.",
    ref: "Jan 13,34"
  },
  {
    text: "Po ovoci jejich poznáte je.",
    ref: "Matouš 7,16"
  },
  {
    text: "Požehnaní tiší, nebo oni zemi dědičně vládnouti budou.",
    ref: "Matouš 5,5"
  },
  {
    text: "Žádný nebude moci sloužiti dvěma pánům.",
    ref: "Matouš 6,24"
  },
  {
    text: "Což by mělo prospěti člověku, byť pak všecken svět získal, a své duši uškodil?",
    ref: "Matouš 16,26"
  },
  {
    text: "Slunce vychází i na zlé i na dobré.",
    ref: "Matouš 5,45"
  },
  {
    text: "Ale vy nebuďte nazýváni mistři, nebo jeden jest Mistr váš, Kristus.",
    ref: "Matouš 23,8"
  },
  {
    text: "Větší lásky nad tuto žádný nemá, než když kdo duši svou položí za přátely své.",
    ref: "Jan 15,13"
  },
  {
    text: "Já jsem dobrý pastýř. Dobrý pastýř duši svou pokládá za ovce.",
    ref: "Jan 10,11"
  },
  {
    text: "Já jsem dveře. Skrze mne všel-li by kdo, spasen bude.",
    ref: "Jan 10,9"
  },
  {
    text: "Ovce mé hlasu mého poslouchají, a já znám je, a následují mne.",
    ref: "Jan 10,27"
  },
  {
    text: "A já život věčný dávám jim, a nezahynouť na věky.",
    ref: "Jan 10,28"
  },
  {
    text: "Otec můj, kterýž mi je dal, větší jest nade všecky.",
    ref: "Jan 10,29"
  },
  {
    text: "Já a Otec jedno jsme.",
    ref: "Jan 10,30"
  },
  {
    text: "Pokoj vám.",
    ref: "Jan 20,19"
  },
  {
    text: "Jakož mne poslal Otec, i jáť posílám vás.",
    ref: "Jan 20,21"
  },
  {
    text: "Přijměte Ducha svatého.",
    ref: "Jan 20,22"
  },
  {
    text: "Když jsem byl s nimi v světě, jáť jsem je ostříhal ve jménu tvém.",
    ref: "Jan 17,12"
  },
  {
    text: "Posvěť je v pravdě své. Slovo tvé pravda jest.",
    ref: "Jan 17,17"
  },
  {
    text: "Aby všickni jedno byli, jakož ty, Otče, ve mně, a já v tobě.",
    ref: "Jan 17,21"
  },
  {
    text: "A já slávu, kterouž jsi mi dal, dal jsem jim.",
    ref: "Jan 17,22"
  },
  {
    text: "Otče, chciť, kdežkoli já budu, aby i oni byli se mnou.",
    ref: "Jan 17,24"
  },
  {
    text: "Otče spravedlivý, svět tě nepoznal, ale já jsem tě poznal.",
    ref: "Jan 17,25"
  },
  {
    text: "Miloval jsi je, jakož jsi mne miloval.",
    ref: "Jan 17,23"
  },
  {
    text: "A poznal jsem tě, a tito poznali, že jsi ty mne poslal.",
    ref: "Jan 17,25"
  },
  {
    text: "I oznámil jsem jim jméno tvé, a oznámímť.",
    ref: "Jan 17,26"
  },
  {
    text: "Aby láska, kterouž jsi mne miloval, v nich byla, i já v nich.",
    ref: "Jan 17,26"
  },
  {
    text: "Já jsem světlo světa. Kdo následuje mne, nebudechoditi v temnostech.",
    ref: "Jan 8,12"
  },
  {
    text: "Poznáte pravdu, a pravda vás vysvobodí.",
    ref: "Jan 8,32"
  },
  {
    text: "Každý, kdož činí hřích, služebník jest hříchu.",
    ref: "Jan 8,34"
  },
  {
    text: "Já vím, že jste símě Abrahamovo, ale hledáte mne zabiti.",
    ref: "Jan 8,37"
  },
  {
    text: "Vy z otce ďábla jste, a žádosti otce svého činiti chcete.",
    ref: "Jan 8,44"
  },
  {
    text: "Kdo jest z Boha, slova Boží slyší.",
    ref: "Jan 8,47"
  },
  {
    text: "Abraham, otec váš, veselil se, aby viděl den můj, i viděl, a radoval se.",
    ref: "Jan 8,56"
  },
  {
    text: "Amen, amen pravím vám: Prvé než Abraham byl, já jsem.",
    ref: "Jan 8,58"
  },
  {
    text: "Já jsem přišel na svět, aby ti, kteříž nevidí, vidouce byli.",
    ref: "Jan 9,39"
  },
  {
    text: "Dílo Boží toto jest, abyste věřili v toho, kteréhož on poslal.",
    ref: "Jan 6,29"
  },
  {
    text: "Já jsem chléb života. Kdo přichází ke mně, nikoli lačněti nebude.",
    ref: "Jan 6,35"
  },
  {
    text: "A kdo věří ve mne, nežízní nikdy.",
    ref: "Jan 6,35"
  },
  {
    text: "Všecko, což mi dává Otec, ke mně přijde.",
    ref: "Jan 6,37"
  },
  {
    text: "Tato jest pak vůle Otce toho, kterýž mne poslal, abych neztratil ničeho z toho.",
    ref: "Jan 6,39"
  },
  {
    text: "Tato jest zajisté vůle toho, kterýž mne poslal, aby každý, kdož vidí Syna a věří v něho, měl život věčný.",
    ref: "Jan 6,40"
  },
  {
    text: "Žádný nemůže přijíti ke mně, jediné leč Otec, kterýž mne poslal, přitrhl jej.",
    ref: "Jan 6,44"
  },
  {
    text: "A jáť jej vzkřísím v den nejposlednější.",
    ref: "Jan 6,44"
  },
  {
    text: "Každý, kdož slyšel od Otce a naučil se, jde ke mně.",
    ref: "Jan 6,45"
  },
  {
    text: "Amen, amen pravím vám: Kdo věří ve mne, má život věčný.",
    ref: "Jan 6,47"
  },
  {
    text: "Já jsem chléb ten živý, kterýž jsem s nebe sstoupil.",
    ref: "Jan 6,51"
  },
  {
    text: "Budeť-li kdo jísti ten chléb, živť bude na věky.",
    ref: "Jan 6,51"
  },
  {
    text: "Kdo jí tělo mé a pije krev mou, má život věčný.",
    ref: "Jan 6,54"
  },
  {
    text: "Nebo tělo mé jest právě pokrm, a krev má jest právě nápoj.",
    ref: "Jan 6,55"
  },
  {
    text: "Kdo jí tělo mé a pije krev mou, ve mně přebývá a já v něm.",
    ref: "Jan 6,56"
  },
  {
    text: "Jakož poslal mne živý Otec, i já živ jsem skrze Otce.",
    ref: "Jan 6,57"
  },
  {
    text: "A kdož jí mne, i on živ bude skrze mne.",
    ref: "Jan 6,57"
  },
  {
    text: "Duch jest, kterýž obživuje, těloť nic neprospívá.",
    ref: "Jan 6,63"
  },
  {
    text: "Slova, kteráž já mluvím vám, Duch jsou a život jsou.",
    ref: "Jan 6,63"
  },

]
