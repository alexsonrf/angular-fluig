var app = angular.module('ExampleApp', ['angular.fluig']);

app.controller('ExampleController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

    var vm = this;
    vm.Formulario = {
        estadoIe: 'SP'
    }
    vm.autocompleteJson = [{
        "_id": "57ca0ecd95c8e8df83de29e9",
        "name": "Mia Stanley",
        "company": "GEOFARM",
        "email": "miastanley@geofarm.com"
    }, {
        "_id": "57ca0ecd1a0d0658d33650ca",
        "name": "Flora Mullen",
        "company": "BIOSPAN",
        "email": "floramullen@biospan.com"
    }, {
        "_id": "57ca0ecdf7ed278f2170c814",
        "name": "Barton Dean",
        "company": "DIGIAL",
        "email": "bartondean@digial.com"
    }, {
        "_id": "57ca0ecd0a3c2286b0ff6f61",
        "name": "Stephanie Padilla",
        "company": "SEALOUD",
        "email": "stephaniepadilla@sealoud.com"
    }, {
        "_id": "57ca0ecd242010cf204e2a2e",
        "name": "Roberson Ball",
        "company": "FURNITECH",
        "email": "robersonball@furnitech.com"
    }, {
        "_id": "57ca0ecd1f7b82ea3d1d48ca",
        "name": "Grace George",
        "company": "SENMAO",
        "email": "gracegeorge@senmao.com"
    }, {
        "_id": "57ca0ecd00d266becf575198",
        "name": "Lelia Alston",
        "company": "XYQAG",
        "email": "leliaalston@xyqag.com"
    }, {
        "_id": "57ca0ecded662211a75067de",
        "name": "Raquel Pruitt",
        "company": "QUORDATE",
        "email": "raquelpruitt@quordate.com"
    }, {
        "_id": "57ca0ecdc033083f9246130d",
        "name": "Potts England",
        "company": "GEEKNET",
        "email": "pottsengland@geeknet.com"
    }, {
        "_id": "57ca0ecdc2c1b4ffa5f733e3",
        "name": "Mejia Hayden",
        "company": "ENERSAVE",
        "email": "mejiahayden@enersave.com"
    }, {
        "_id": "57ca0ecdf6106c5477be209c",
        "name": "Velasquez Slater",
        "company": "FANGOLD",
        "email": "velasquezslater@fangold.com"
    }, {
        "_id": "57ca0ecd7e39d17d72bc403e",
        "name": "Suzette Christensen",
        "company": "MANTRO",
        "email": "suzettechristensen@mantro.com"
    }, {
        "_id": "57ca0ecdef5f0e9e1d103876",
        "name": "Rosario Cooley",
        "company": "XIXAN",
        "email": "rosariocooley@xixan.com"
    }, {
        "_id": "57ca0ecd95d988ea2d5ea14a",
        "name": "Massey Hawkins",
        "company": "MOBILDATA",
        "email": "masseyhawkins@mobildata.com"
    }, {
        "_id": "57ca0ecd12aed0fc96702b2b",
        "name": "Deleon Rowland",
        "company": "SPEEDBOLT",
        "email": "deleonrowland@speedbolt.com"
    }, {
        "_id": "57ca0ecda1544daf24dd7c91",
        "name": "Cote Jacobson",
        "company": "FUTURITY",
        "email": "cotejacobson@futurity.com"
    }, {
        "_id": "57ca0ecd58aeb3fcf8dfcbb0",
        "name": "Veronica Dalton",
        "company": "PHORMULA",
        "email": "veronicadalton@phormula.com"
    }, {
        "_id": "57ca0ecd153c50c36e38f303",
        "name": "Felecia Decker",
        "company": "TERAPRENE",
        "email": "feleciadecker@teraprene.com"
    }, {
        "_id": "57ca0ecd82fcc3ad2b35db02",
        "name": "Dora Huffman",
        "company": "ULTRASURE",
        "email": "dorahuffman@ultrasure.com"
    }, {
        "_id": "57ca0ecd7eff50173d5f5129",
        "name": "Jocelyn Whitehead",
        "company": "SIGNITY",
        "email": "jocelynwhitehead@signity.com"
    }, {
        "_id": "57ca0ecd77221e4e302d304c",
        "name": "Caldwell Mcmillan",
        "company": "ARCTIQ",
        "email": "caldwellmcmillan@arctiq.com"
    }, {
        "_id": "57ca0ecd1fb571af86f4c716",
        "name": "Sonya Meadows",
        "company": "ACCUPRINT",
        "email": "sonyameadows@accuprint.com"
    }, {
        "_id": "57ca0ecd17588db7019f7aab",
        "name": "Santos Hickman",
        "company": "NETROPIC",
        "email": "santoshickman@netropic.com"
    }, {
        "_id": "57ca0ecd4de17fc0a6d22e56",
        "name": "Ortega Obrien",
        "company": "ZOMBOID",
        "email": "ortegaobrien@zomboid.com"
    }, {
        "_id": "57ca0ecd353fa931e7224f1a",
        "name": "Guadalupe Morris",
        "company": "SEQUITUR",
        "email": "guadalupemorris@sequitur.com"
    }, {
        "_id": "57ca0ecdf01511b727a38012",
        "name": "Vicki Price",
        "company": "ZOLAVO",
        "email": "vickiprice@zolavo.com"
    }, {
        "_id": "57ca0ecdf4dcf5655fbaf954",
        "name": "Laurel Santiago",
        "company": "JETSILK",
        "email": "laurelsantiago@jetsilk.com"
    }, {
        "_id": "57ca0ecd4fb1e8313a0d85bd",
        "name": "Deborah Donovan",
        "company": "LEXICONDO",
        "email": "deborahdonovan@lexicondo.com"
    }, {
        "_id": "57ca0ecdc37911bde160cc6e",
        "name": "Kim Carver",
        "company": "VICON",
        "email": "kimcarver@vicon.com"
    }, {
        "_id": "57ca0ecd1274e206515fb641",
        "name": "Melton Randall",
        "company": "ORBOID",
        "email": "meltonrandall@orboid.com"
    }, {
        "_id": "57ca0ecd3e07336885d3fda2",
        "name": "Johnson Rush",
        "company": "ENERSOL",
        "email": "johnsonrush@enersol.com"
    }, {
        "_id": "57ca0ecd00f1efc88920e2d6",
        "name": "Hinton Santos",
        "company": "HELIXO",
        "email": "hintonsantos@helixo.com"
    }, {
        "_id": "57ca0ecd36e371f2272aaa76",
        "name": "Matilda Gibbs",
        "company": "MELBACOR",
        "email": "matildagibbs@melbacor.com"
    }, {
        "_id": "57ca0ecde64b4e4a6dd7c018",
        "name": "Lacey Pearson",
        "company": "MATRIXITY",
        "email": "laceypearson@matrixity.com"
    }, {
        "_id": "57ca0ecd05953a335c660a38",
        "name": "Jordan Nunez",
        "company": "NETBOOK",
        "email": "jordannunez@netbook.com"
    }, {
        "_id": "57ca0ecd9774b3f69c72b7c4",
        "name": "Franklin Avery",
        "company": "PRINTSPAN",
        "email": "franklinavery@printspan.com"
    }, {
        "_id": "57ca0ecd69da061268f2d658",
        "name": "Marla Cantu",
        "company": "SURETECH",
        "email": "marlacantu@suretech.com"
    }, {
        "_id": "57ca0ecde7575d8fd65b989a",
        "name": "Freida Robertson",
        "company": "JIMBIES",
        "email": "freidarobertson@jimbies.com"
    }, {
        "_id": "57ca0ecd931562ebf0c3cb17",
        "name": "Leila Barron",
        "company": "LOCAZONE",
        "email": "leilabarron@locazone.com"
    }, {
        "_id": "57ca0ecdd89c48a0e89daad2",
        "name": "Carolina Mckay",
        "company": "DYMI",
        "email": "carolinamckay@dymi.com"
    }, {
        "_id": "57ca0ecd5764ef212b47ea1b",
        "name": "Paulette Dickson",
        "company": "GLASSTEP",
        "email": "paulettedickson@glasstep.com"
    }, {
        "_id": "57ca0ecdf5696d7c5b15c49a",
        "name": "Hebert Good",
        "company": "COMBOGEN",
        "email": "hebertgood@combogen.com"
    }, {
        "_id": "57ca0ecd869a2f3ab34bde90",
        "name": "Harmon Mcdowell",
        "company": "CUIZINE",
        "email": "harmonmcdowell@cuizine.com"
    }, {
        "_id": "57ca0ecd904652473bfe8e78",
        "name": "Tanner Forbes",
        "company": "ZILENCIO",
        "email": "tannerforbes@zilencio.com"
    }, {
        "_id": "57ca0ecd649c562621f7303f",
        "name": "Margery Vance",
        "company": "ZILCH",
        "email": "margeryvance@zilch.com"
    }, {
        "_id": "57ca0ecd093f7df129c94c66",
        "name": "Johnnie Eaton",
        "company": "MEDMEX",
        "email": "johnnieeaton@medmex.com"
    }, {
        "_id": "57ca0ecdd5fd207249617229",
        "name": "Helen Ellis",
        "company": "ORBIXTAR",
        "email": "helenellis@orbixtar.com"
    }, {
        "_id": "57ca0ecd76a5b19d8749e763",
        "name": "Ortiz Lindsey",
        "company": "ZILLANET",
        "email": "ortizlindsey@zillanet.com"
    }, {
        "_id": "57ca0ecdf301307aadbc5980",
        "name": "Payne Reed",
        "company": "SENMEI",
        "email": "paynereed@senmei.com"
    }, {
        "_id": "57ca0ecda7f05a9bb0741e86",
        "name": "Sarah Parrish",
        "company": "CINCYR",
        "email": "sarahparrish@cincyr.com"
    }, {
        "_id": "57ca0ecda9352e9e03453101",
        "name": "Chen Haney",
        "company": "VORTEXACO",
        "email": "chenhaney@vortexaco.com"
    }, {
        "_id": "57ca0ecdd00b969efc715621",
        "name": "Keri Fuentes",
        "company": "ZBOO",
        "email": "kerifuentes@zboo.com"
    }, {
        "_id": "57ca0ecd21e7b885e368e906",
        "name": "Small Kemp",
        "company": "PARCOE",
        "email": "smallkemp@parcoe.com"
    }, {
        "_id": "57ca0ecd59a924d2632217c8",
        "name": "Rich Dodson",
        "company": "FILODYNE",
        "email": "richdodson@filodyne.com"
    }, {
        "_id": "57ca0ecd76083954b7f9b56a",
        "name": "Sherry Delaney",
        "company": "CONFERIA",
        "email": "sherrydelaney@conferia.com"
    }, {
        "_id": "57ca0ecd3f83a3c88154b858",
        "name": "Meredith Russo",
        "company": "GEEKUS",
        "email": "meredithrusso@geekus.com"
    }, {
        "_id": "57ca0ecdf5c007c73558aecf",
        "name": "Bright Armstrong",
        "company": "ZAJ",
        "email": "brightarmstrong@zaj.com"
    }, {
        "_id": "57ca0ecd6640ccd9cfdb346d",
        "name": "Lina Mayer",
        "company": "COMTRACT",
        "email": "linamayer@comtract.com"
    }, {
        "_id": "57ca0ecdcb18b2fc238ef18f",
        "name": "Henrietta Nicholson",
        "company": "CEPRENE",
        "email": "henriettanicholson@ceprene.com"
    }, {
        "_id": "57ca0ecdfa4b60af7b383e0a",
        "name": "Francisca Schroeder",
        "company": "OATFARM",
        "email": "franciscaschroeder@oatfarm.com"
    }, {
        "_id": "57ca0ecda226c9147c13fd70",
        "name": "Shannon Callahan",
        "company": "EZENTIA",
        "email": "shannoncallahan@ezentia.com"
    }, {
        "_id": "57ca0ecdf60ba7d215af414b",
        "name": "Levine Miller",
        "company": "STROZEN",
        "email": "levinemiller@strozen.com"
    }, {
        "_id": "57ca0ecd62b52fc4ace33f4f",
        "name": "Mara Colon",
        "company": "FARMAGE",
        "email": "maracolon@farmage.com"
    }, {
        "_id": "57ca0ecdb975948e7a105a22",
        "name": "Alicia Joyner",
        "company": "AEORA",
        "email": "aliciajoyner@aeora.com"
    }, {
        "_id": "57ca0ecd86bc7a6c31d2e755",
        "name": "Lenore Flynn",
        "company": "AUSTEX",
        "email": "lenoreflynn@austex.com"
    }, {
        "_id": "57ca0ecda32725d7c4344a42",
        "name": "Langley Sexton",
        "company": "PAPRIKUT",
        "email": "langleysexton@paprikut.com"
    }, {
        "_id": "57ca0ecdc8e984dc85da04b4",
        "name": "Mcdaniel Whitfield",
        "company": "MOREGANIC",
        "email": "mcdanielwhitfield@moreganic.com"
    }, {
        "_id": "57ca0ecdfad25522fdf527e6",
        "name": "Yvonne Galloway",
        "company": "DRAGBOT",
        "email": "yvonnegalloway@dragbot.com"
    }, {
        "_id": "57ca0ecd7d7094783e835070",
        "name": "Estrada Day",
        "company": "LUNCHPAD",
        "email": "estradaday@lunchpad.com"
    }, {
        "_id": "57ca0ecde6b3f0fa81fbf077",
        "name": "Jacklyn Henson",
        "company": "ENTALITY",
        "email": "jacklynhenson@entality.com"
    }, {
        "_id": "57ca0ecdcda0aef6b8027331",
        "name": "Franks Gillespie",
        "company": "TETAK",
        "email": "franksgillespie@tetak.com"
    }, {
        "_id": "57ca0ecd5bde3c8f8d5c84ef",
        "name": "Justice Tyson",
        "company": "ETERNIS",
        "email": "justicetyson@eternis.com"
    }, {
        "_id": "57ca0ecd6f4362c8685ba2c0",
        "name": "Gilmore Lewis",
        "company": "TALKOLA",
        "email": "gilmorelewis@talkola.com"
    }, {
        "_id": "57ca0ecda5a270569417337e",
        "name": "Kelsey Boyle",
        "company": "MAGNEMO",
        "email": "kelseyboyle@magnemo.com"
    }, {
        "_id": "57ca0ecdeec68c3114e8a0e0",
        "name": "Sophia Vazquez",
        "company": "ISONUS",
        "email": "sophiavazquez@isonus.com"
    }, {
        "_id": "57ca0ecdc4988314c707baf4",
        "name": "Ginger Burris",
        "company": "OZEAN",
        "email": "gingerburris@ozean.com"
    }, {
        "_id": "57ca0ecda4f2411a2109a844",
        "name": "Stafford Frye",
        "company": "SNIPS",
        "email": "staffordfrye@snips.com"
    }, {
        "_id": "57ca0ecdaebc25a7bc760571",
        "name": "Lilly Rasmussen",
        "company": "SECURIA",
        "email": "lillyrasmussen@securia.com"
    }, {
        "_id": "57ca0ecdc9f4c9610b801732",
        "name": "Ada Elliott",
        "company": "INDEXIA",
        "email": "adaelliott@indexia.com"
    }, {
        "_id": "57ca0ecd9880573886a61ad3",
        "name": "Kane Stokes",
        "company": "ZOXY",
        "email": "kanestokes@zoxy.com"
    }, {
        "_id": "57ca0ecd28c23046ee4dfdd8",
        "name": "Camacho Ferguson",
        "company": "MANTRIX",
        "email": "camachoferguson@mantrix.com"
    }, {
        "_id": "57ca0ecd92228e5a0823f671",
        "name": "Gallegos Houston",
        "company": "GENMOM",
        "email": "gallegoshouston@genmom.com"
    }, {
        "_id": "57ca0ecde42c3d76a6f0b6fe",
        "name": "Rosalind Mcguire",
        "company": "HONOTRON",
        "email": "rosalindmcguire@honotron.com"
    }, {
        "_id": "57ca0ecd5d015127330e5500",
        "name": "English Short",
        "company": "TALAE",
        "email": "englishshort@talae.com"
    }, {
        "_id": "57ca0ecdea7ba9e7c8ff7406",
        "name": "Doyle Buchanan",
        "company": "UNIWORLD",
        "email": "doylebuchanan@uniworld.com"
    }, {
        "_id": "57ca0ecdc424d45fe4f751b4",
        "name": "Paige Adams",
        "company": "ISOTRONIC",
        "email": "paigeadams@isotronic.com"
    }, {
        "_id": "57ca0ecd27f4a988d92e498e",
        "name": "Effie Miranda",
        "company": "UNQ",
        "email": "effiemiranda@unq.com"
    }, {
        "_id": "57ca0ecd9a58ff02e86250cc",
        "name": "Miranda Simmons",
        "company": "ZILLAN",
        "email": "mirandasimmons@zillan.com"
    }, {
        "_id": "57ca0ecdd64be48de0bea4ef",
        "name": "Mcfadden Alvarado",
        "company": "ASSISTIX",
        "email": "mcfaddenalvarado@assistix.com"
    }, {
        "_id": "57ca0ecd1992b3dde55a764d",
        "name": "Beulah Mclean",
        "company": "IDEGO",
        "email": "beulahmclean@idego.com"
    }, {
        "_id": "57ca0ecd7e91adde928bd35a",
        "name": "Richards Stone",
        "company": "KINETICUT",
        "email": "richardsstone@kineticut.com"
    }, {
        "_id": "57ca0ecd00a91eb0dc5670ed",
        "name": "Mavis Burton",
        "company": "VOIPA",
        "email": "mavisburton@voipa.com"
    }, {
        "_id": "57ca0ecd570a02b21aaac2ac",
        "name": "Kara Carroll",
        "company": "BITREX",
        "email": "karacarroll@bitrex.com"
    }, {
        "_id": "57ca0ecd754eee99b8a015af",
        "name": "Tami Oneil",
        "company": "NEBULEAN",
        "email": "tamioneil@nebulean.com"
    }, {
        "_id": "57ca0ecdce855ae9c0d67c00",
        "name": "Mattie Sykes",
        "company": "GOKO",
        "email": "mattiesykes@goko.com"
    }, {
        "_id": "57ca0ecd00325c489af552b4",
        "name": "Myra Macdonald",
        "company": "COMVERGES",
        "email": "myramacdonald@comverges.com"
    }, {
        "_id": "57ca0ecdec24b3508b8888a8",
        "name": "Bowman Jenkins",
        "company": "AUSTECH",
        "email": "bowmanjenkins@austech.com"
    }, {
        "_id": "57ca0ecd1a6e6c28de174f92",
        "name": "Fulton Michael",
        "company": "ACLIMA",
        "email": "fultonmichael@aclima.com"
    }, {
        "_id": "57ca0ecd8031b12162e13492",
        "name": "Gutierrez Whitley",
        "company": "COMTREK",
        "email": "gutierrezwhitley@comtrek.com"
    }, {
        "_id": "57ca0ecdfa5457603ead61ad",
        "name": "Callie Olsen",
        "company": "IDEALIS",
        "email": "callieolsen@idealis.com"
    }]

}]);