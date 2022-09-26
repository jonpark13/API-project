'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Songs', [
            {
                "userId": 1,
                "albumId": 1,
                "title": "Yesterday",
                "description": "A song about the past.",
                "url": 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/uhBpfV1T7y1Przb2A2pzEcYNmuN8dhpSZdyp4nl7.mp3',
                "createdAt": "2021-11-19 20:39:36",
                "updatedAt": "2021-11-19 20:39:36",
                "previewImage": 'https://picsum.photos/seed/1/173'
            },
            {
                "userId": 1,
                "albumId": 1,
                "title": "Today",
                "description": "A song about now.",
                "url": 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Michael_Chapman__The_Woodpiles/NATCH_7/Michael_Chapman__The_Woodpiles_-_03_-_A_Strangers_Map_of_Texas.mp3',
                "createdAt": "2021-11-19 20:39:36",
                "updatedAt": "2021-11-19 20:39:36",
                "previewImage": 'https://picsum.photos/seed/2/173'
            },
            {
                "userId": 2,
                "albumId": 2,
                "title": "Noday",
                "description": "A song about nothing.",
                "url": 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Best_of_2014/Kevin_MacLeod_-_Monkeys_Spinning_Monkeys.mp3',
                "createdAt": "2021-11-19 20:39:36",
                "updatedAt": "2021-11-19 20:39:36",
                "previewImage": 'https://picsum.photos/seed/3/173'
            },
            {
                'albumId': 2,
                'userId': 3,
                'title': 'Night Owl',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/4/173'
            }, {
                'albumId': 2,
                'userId': 4,
                'title': 'Starling',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/5/173'
            }, {
                'albumId': 2,
                'userId': 5,
                'title': "It's Your Birthday!",
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Monk_Turner__Fascinoma/The_New_Birthday_Song_Contest/Monk_Turner__Fascinoma_-_01_-_Its_Your_Birthday.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/6/173'
            }, {
                'albumId': 2,
                'userId': 6,
                'title': 'Springish',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Gillicuddy/Plays_Guitar/Gillicuddy_-_05_-_Springish.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/7/173'
            }, {
                'albumId': 2,
                'userId': 7,
                'title': 'Fater Lee',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Black_Ant/Free_Beats_Sel_3/Black_Ant_-_01_-_Fater_Lee.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/8/173'
            }, {
                'albumId': 2,
                'userId': 8,
                'title': 'Epic Song',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/9/173'
            }, {
                'albumId': 2,
                'userId': 9,
                'title': 'Enthusiast',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/10/173'
            }, {
                'albumId': 2,
                'userId': 10,
                'title': 'Siesta',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Jahzzar/Travellers_Guide_Excerpt/Jahzzar_-_05_-_Siesta.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/11/173'
            }, {
                'albumId': 2,
                'userId': 11,
                'title': 'Moonlight Reprise',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Irsens_Tale/Kai_Engel_-_04_-_Moonlight_Reprise.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/12/173'
            }, {
                'albumId': 2,
                'userId': 12,
                'title': 'Hachiko (The Faithtful Dog)',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/13/173'
            }, {
                'albumId': 2,
                'userId': 13,
                'title': 'Algorithms',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Algorithms.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/14/173'
            }, {
                'albumId': 2,
                'userId': 14,
                'title': 'O Tannenbaum',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Dan_Lerch/A_Very_Badgerland_Christmas_2011/Dan_Lerch_-_09_-_O_Tannenbaum.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/15/173'
            }, {
                'albumId': 2,
                'userId': 15,
                'title': 'Holiday (instrumental)',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Silence_Is_Sexy/Antique_Instrumentals/Silence_Is_Sexy_-_01_-_Holiday_instrumental.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/16/173'
            }, {
                'albumId': 2,
                'userId': 16,
                'title': 'Stance Gives You Balance',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Hogan_Grip/Hogan_Grip_-_Stance_Gives_You_Balance/Hogan_Grip_-_03_-_Stance_Gives_You_Balance.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/17/173'
            }, {
                'albumId': 2,
                'userId': 17,
                'title': 'Little Star',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WM_Recordings/Manuele_Atzeni/The_Miyazaki_Tour_EP/Manuele_Atzeni_-_04_-_Little_Star.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/18/173'
            }, {
                'albumId': 2,
                'userId': 18,
                'title': 'Epic Cinematic',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/GxTbOJmXzdlcsSKkhTruX2Acy2DhoJVYMOR4iZx7.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/19/173'
            }, {
                'albumId': 2,
                'userId': 19,
                'title': 'An Alternative Birthday Song',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Bob_Barta/The_New_Birthday_Song_Contest/Bob_Barta_-_02_-_An_Alternative_Birthday_Song.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/20/173'
            }, {
                'albumId': 2,
                'userId': 20,
                'title': "It's Your Birthday!",
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/The_Blank_Tapes/Entries/The_Blank_Tapes_-_03_-_Its_Your_Birthday.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/21/173'
            }, {
                'albumId': 2,
                'userId': 21,
                'title': 'RUNNING WATERS',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Jason_Shaw/Audionautix_Acoustic/Jason_Shaw_-_RUNNING_WATERS.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/22/173'
            }, {
                'albumId': 2,
                'userId': 3,
                'title': 'As Colorful As Ever',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Broke_For_Free/Layers/Broke_For_Free_-_01_-_As_Colorful_As_Ever.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/23/173'
            }, {
                'albumId': 2,
                'userId': 10,
                'title': 'The last ones',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Jahzzar/Smoke_Factory_Excerpt/Jahzzar_-_01_-_The_last_ones.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/24/173'
            }, {
                'albumId': 2,
                'userId': 22,
                'title': 'El barzón',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Otho/Los_Amparito/Los_Amparito_Demo/Los_Amparito_-_El_barzn.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/25/173'
            }, {
                'albumId': 2,
                'userId': 23,
                'title': 'The Pirate And The Dancer',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Pirate_And_The_Dancer/Rolemusic_-_04_-_The_Pirate_And_The_Dancer.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/26/173'
            }, {
                'albumId': 2,
                'userId': 3,
                'title': 'Something Elated',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Something_EP/Broke_For_Free_-_05_-_Something_Elated.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/27/173'
            }, {
                'albumId': 2,
                'userId': 24,
                'title': 'Faerie',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WM_Recordings/Datapanik/Unknown_questions/Datapanik_-_02_-_Faerie.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/28/173'
            }, {
                'albumId': 2,
                'userId': 25,
                'title': 'Chantiers Navals 412',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/LJ_Kruzer/Dance_Audit_Hour/LJ_Kruzer_-_01_-_Chantiers_Navals_412.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/29/173'
            }, {
                'albumId': 2,
                'userId': 8,
                'title': 'Battle (Boss)',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_05_-_Battle_Boss.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/30/173'
            }, {
                'albumId': 2,
                'userId': 26,
                'title': 'Little Grass Shack',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Voodoo_Suite/blissbloodcom/Voodoo_Suite_-_03_-_Little_Grass_Shack.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/31/173'
            }, {
                'albumId': 2,
                'userId': 27,
                'title': 'Noahs Stark',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/krackatoa/Noahs_Stark/krackatoa_-_01_-_Noahs_Stark.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/32/173'
            }, {
                'albumId': 2,
                'userId': 28,
                'title': 'nostalgia of an ex-gangsta-rapper',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/33/173'
            }, {
                'albumId': 2,
                'userId': 29,
                'title': 'Dream (instrumental)',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Oddio_Overplay/Chan_Wai_Fat/Children_of_Soul_Mountain_original_soundtrack/Chan_Wai_Fat_-_05_-_Dream_instrumental.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/34/173'
            }, {
                'albumId': 2,
                'userId': 30,
                'title': 'Teals Descending Upon The Level Sand',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Arbiter_Records/Lo_Ka_Ping/Lost_Sounds_of_the_Tao/Lo_Ka_Ping_-_01_-_Teals_Descending_Upon_The_Level_Sand.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/35/173'
            }, {
                'albumId': 2,
                'userId': 31,
                'title': 'Hallon',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Oddio_Overplay/Christian_Bjoerklund/Skapmat/Christian_Bjoerklund_-_01_-_Hallon.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/36/173'
            }, {
                'albumId': 2,
                'userId': 32,
                'title': 'Exotica',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Oddio_Overplay/Juanitos/Exotica/Juanitos_-_06_-_Exotica.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/37/173'
            }, {
                'albumId': 2,
                'userId': 33,
                'title': 'Hot Boxing The Cockpit',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Phlow_Magazine/Shlohmo/Shlomoshun/Shlohmo_-_Hot_Boxing_The_Cockpit.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/38/173'
            }, {
                'albumId': 2,
                'userId': 10,
                'title': 'Take Me Higher',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Jahzzar/Tumbling_Dishes_Like_Old-Mans_Wishes/Jahzzar_-_10_-_Take_Me_Higher.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/39/173'
            }, {
                'albumId': 2,
                'userId': 5,
                'title': "It's Your Birthday! (Instrumental Version)",
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Monk_Turner__Fascinoma/Entries/Monk_Turner__Fascinoma_-_04_-_Its_Your_Birthday_Instrumental_Version.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/40/173'
            }, {
                'albumId': 2,
                'userId': 34,
                'title': 'Ghost Dance',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Classical_Sampler/Kevin_MacLeod_-_Ghost_Dance.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/41/173'
            }, {
                'albumId': 2,
                'userId': 35,
                'title': 'Drag along behind',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/aboombong/asynchronic/aboombong_-_06_-_Drag_along_behind.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/42/173'
            }, {
                'albumId': 2,
                'userId': 36,
                'title': 'Cantina Rag',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/The_Beehive_Recording_Company/Jackson_F_Smith/Jackson_Frederick_Smith/Jackson_F_Smith_-_01_-_Cantina_Rag.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/43/173'
            }, {
                'albumId': 2,
                'userId': 37,
                'title': 'Requiem for a Fish',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/The_Freak_Fandango_Orchestra/Tales_Of_A_Dead_Fish/The_Freak_Fandango_Orchestra_-_01_-_Requiem_for_a_Fish.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/44/173'
            }, {
                'albumId': 2,
                'userId': 4,
                'title': 'Sad Cyclops',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Podington_Bear/Panoramic__Ambient/Podington_Bear_-_Sad_Cyclops.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/45/173'
            }, {
                'albumId': 2,
                'userId': 38,
                'title': 'Favorite Secrets',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Mystery_Club/02_-_Favorite_Secrets.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/46/173'
            }, {
                'albumId': 2,
                'userId': 39,
                'title': 'Carol of the Bells',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Live_Action_Fezz/A_Very_Badgerland_Christmas_2011/Live_Action_Fezz_-_15_-_Carol_of_the_Bells.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/47/173'
            }, {
                'albumId': 2,
                'userId': 34,
                'title': 'Impact Prelude',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Impact/Kevin_MacLeod_-_01_-_Impact_Prelude.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/48/173'
            }, {
                'albumId': 2,
                'userId': 6,
                'title': 'Adventure, Darling',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Gillicuddy/Plays_Guitar_Again/Gillicuddy_-_01_-_Adventure_Darling.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/49/173'
            }, {
                'albumId': 2,
                'userId': 40,
                'title': 'Lips',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Plurabelle/Money_Blood_and_Light/Plurabelle_-_01_-_Lips.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/50/173'
            }, {
                'albumId': 2,
                'userId': 41,
                'title': 'Speaker Joy',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/RadioPink/Blue_Dot_Sessions_-_Speaker_Joy.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/51/173'
            }, {
                'albumId': 2,
                'userId': 41,
                'title': 'Night Watch',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/RadioPink/Blue_Dot_Sessions_-_Night_Watch.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/52/173'
            }, {
                'albumId': 2,
                'userId': 42,
                'title': 'Sorry',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Creative_Commons/Comfort_Fit/Forget_And_Remember/Comfort_Fit_-_03_-_Sorry.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/53/173'
            }, {
                'albumId': 2,
                'userId': 43,
                'title': 'Snowing',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Peter_Rudenko/15_Etudes/Peter_Rudenko_-_12_-_Snowing.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/54/173'
            }, {
                'albumId': 2,
                'userId': 44,
                'title': 'Le petit jardin (with Les Gauchers Orchestra)',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Oddio_Overplay/Lee_Maddeford/Instrumentals_1/Lee_Maddeford_-_09_-_Le_petit_jardin_with_Les_Gauchers_Orchestra.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/55/173'
            }, {
                'albumId': 2,
                'userId': 41,
                'title': 'I Recall',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/RadioPink/Blue_Dot_Sessions_-_I_Recall.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/56/173'
              }, {
                'albumId': 2,
                'userId': 34,
                'title': 'DD Groove',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kevin_MacLeod/Blues_Sampler/Kevin_MacLeod_-_04_-_DD_Groove.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/57/173'
              }, {
                'albumId': 2,
                'userId': 19,
                'title': 'Instrumental Version',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Bob_Barta/The_New_Birthday_Song_Contest/Bob_Barta_-_07_-_Instrumental_Version.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/58/173'
            }, {
                'albumId': 2,
                'userId': 5,
                'title': 'Piano Version, in B',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Monk_Turner__Fascinoma/Entries/Monk_Turner__Fascinoma_-_05_-_Piano_Version_in_B.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/59/173'
            }, {
                'albumId': 2,
                'userId': 16,
                'title': 'Interlude - "Reading The Greens"',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Hogan_Grip/Hogan_Grip_-_Stance_Gives_You_Balance/Hogan_Grip_-_04_-_Interlude_-_Reading_The_Greens.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/60/173'
            }, {
                'albumId': 2,
                'userId': 45,
                'title': 'Amsterdam',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/LASERS/LASERS_EP/LASERS_-_01_-_Amsterdam.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/61/173'
            }, {
                'albumId': 2,
                'userId': 46,
                'title': 'Hungaria',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Latch_Swing/demo_2008/Latch_Swing_-_01_-_Hungaria.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/62/173'
            }, {
                'albumId': 2,
                'userId': 47,
                'title': 'Happy Birthday',
                'description': 'A free song',
                'url': 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kevin_Lax/The_New_Birthday_Song_Contest/Kevin_Lax_-_Happy_Birthday.mp3',
                'createdAt': '2021-11-19 20:39:36',
                'updatedAt': '2021-11-19 20:39:36',
                'previewImage': 'https://picsum.photos/seed/63/173'
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Songs');
    }
};
