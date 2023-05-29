const { Telegraf, Markup } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();
const text = require('./const');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command('start', async (ctx)=> {
    try {
        await console.log(ctx.message);
        await ctx.reply('ПЕРЕД НАДАННЯМ ПЕРШОЇ ДОМЕДИЧНОЇ ДОПОМОГИ УПЕВНІТЬСЯ У ДОТРИМАННІ ПРАВИЛ:');
        await ctx.replyWithPhoto({source: './img/pravyla.webp'});
        await ctx.reply(`Вітаю ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнайомцю'}! Що сталося?`, Markup.inlineKeyboard(
            [
                [Markup.button.callback('Травми та порізи', 'btn_1')], 
                [Markup.button.callback('Опіки та обмороження', 'btn_2')], 
                [Markup.button.callback('Ураження електричним струмом', 'btn_3')],
                [Markup.button.callback('Удавлення', 'btn_4')],
                [Markup.button.callback('Непереносимість та алергічні реакції', 'btn_5')],
                [Markup.button.callback('Серцеві проблеми', 'btn_6')],
                [Markup.button.callback('Зупинка дихання', 'btn_7')],
                [Markup.button.callback('Отруєння', 'btn_8')],
                [Markup.button.callback('Утоплення', 'btn_9')],
                [Markup.button.callback('Інсульт', 'btn_10')],
                [Markup.button.callback('Курси', 'btn_courses')]
            ]
        ));
    } catch(e) {
        console.error(e);
    }
});
bot.help((ctx) => ctx.reply(text.commands));

bot.command('emergency', async (ctx)=> {
    try {
        const chatId = ctx.chat.id;
        await ctx.replyWithHTML('🚑Номери екстренних служб🚑');
        await ctx.telegram.sendContact(chatId, '103', 'ШВИДКА ДОПОМОГА');
        await ctx.telegram.sendContact(chatId, '101', 'ДСНС');
    } catch(e) {
        console.error(e);
    }
});

bot.command('reanimation', async (ctx)=> {
    try {
        const chatId = ctx.chat.id;
        await ctx.replyWithHTML(`<b>ЯКЩО ДИХАННЯ НЕМАЄ, РОЗПОЧАТИ СЕРЦЕВО-ЛЕГЕНЕВУ РЕАНІМАЦІЮ🫁:</b> виконати 30 натискань на грудну клітку глибиною не менше 5 см (не більше 6 см), з частотою 100 натискань (не більше 120) за хвилину;
        виконати 2 вдихи з використанням маски-клапану, дихальної маски, тощо. При відсутності захисних засобів можна не виконувати штучне дихання, а проводити тільки натискання на грудну клітку. Виконання двох вдихів повинно тривати не більше 5 секунд;
        поперемінно повторювати попередні два пункти до приїзду швидкої. Важливо змінювати особу, що проводить натиснення на грудну клітку, кожні 2 хвилини.
        https://www.youtube.com/watch?v=mSKJIlqaYqo&ab_channel=DSNSKHM`);
    } catch(e) {
        console.error(e);
    }
});

bot.command('directory', async (ctx)=> {
    try {
        const chatId = ctx.chat.id;
        await ctx.replyWithHTML(`У разі відсутності інтернету🌐 завантажте методичку за посиланням: 
        https://redcross.org.ua/wp-content/uploads/2016/10/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-%D0%9F%D0%9F-%E2%80%94-%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%9A%D0%9A_last.pdf`);
    } catch(e) {
        console.error(e);
    }
});

bot.command('feedback', async (ctx) => {
    try {
        const chatId = ctx.chat.id;
        await ctx.replyWithHTML(`📊Посилання на форму: https://docs.google.com/forms/d/e/1FAIpQLSfGR4nauBOlF5WBA-Cs_BwQS3xC5TTA6VyJ22eRmtwuMhSZnA/viewform?usp=sf_link`);
    } catch(e) {
        console.error(e);
    }
});

bot.action('btn_back', async (ctx)=> {
    try {
        await ctx.answerCbQuery();
        await ctx.reply(`Вітаю! Що сталося?`, Markup.inlineKeyboard(
            [
                [Markup.button.callback('Травми та порізи', 'btn_1')], 
                [Markup.button.callback('Опіки та обмороження', 'btn_2')], 
                [Markup.button.callback('Ураження електричним струмом', 'btn_3')],
                [Markup.button.callback('Удавлення', 'btn_4')], 
                [Markup.button.callback('Непереносимість та алергічні реакції', 'btn_5')], 
                [Markup.button.callback('Серцевий напад', 'btn_6')],
                [Markup.button.callback('Зупинка дихання', 'btn_7')],
                [Markup.button.callback('Отруєння', 'btn_8')],
                [Markup.button.callback('Утоплення', 'btn_9')],
                [Markup.button.callback('Інсульт', 'btn_10')],
                [Markup.button.callback('Курси', 'btn_courses')]
            ]
        ));
    } catch(e) {
        console.error(e);
    }
});

bot.action('btn_1', async (ctx) => {
    try {
        const chatId = ctx.chat.id;
        await ctx.answerCbQuery();
        await ctx.reply('Оберіть тип поранення:', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Порізи', 'btn_cuts'), Markup.button.callback('Забої', 'btn_contusions'), Markup.button.callback('Переломи', 'btn_fractures')], 
                [Markup.button.callback('🔙Повернутись назад', 'btn_back')]
            ]
        ));
    } catch(e) {
        console.error(e);
    }
});
bot.action('btn_2', async (ctx) => {
    try {
        const chatId = ctx.chat.id;
        await ctx.answerCbQuery();
        await ctx.reply('Оберіть тип поранення:', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Опіки', 'btn_burns'), Markup.button.callback('Обмороження', 'btn_frostbite')], 
                [Markup.button.callback('🔙Повернутись назад', 'btn_back')]
            ]
        ));
    } catch(e) {
        console.error(e);
    }
});

bot.action('btn_courses', async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML('💪🏿Курси з надання першої домедичної допомоги:');
        await ctx.reply('Курс Prometheus: https://courses.prometheus.org.ua/courses/course-v1:Prometheus+FAW+2022_T2/about');
        await ctx.reply('Курс "Центр спеціальної підготовки": https://1aid.com.ua/uk');
    } catch(e) {
        console.error(e);
    }
});

function addActionBot(name, src, text) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery();
            if(src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                });
            }
            await ctx.replyWithHTML(text, Markup.inlineKeyboard(
                    [Markup.button.callback('🔙Повернутись назад', 'btn_back')]
            ))
            }
        catch (e) {
            console.error(e);
        }
    })
}
addActionBot('btn_cuts', false, text.cuts);
addActionBot('btn_contusions', './img/contusions.jpg', text.contusions);
addActionBot('btn_fractures', './img/fractures.webp', text.fractures);
addActionBot('btn_burns', './img/burns.jpg', text.burns);
addActionBot('btn_frostbite', './img/frostbite.png', text.frostbite);
addActionBot('btn_3', './img/electricShock.jpg', text.electricShock);
addActionBot('btn_4', false, text.compression);
addActionBot('btn_5', false, text.allergic);
addActionBot('btn_6', false, text.heartAttack);
addActionBot('btn_7', false, text.stopBreath);
addActionBot('btn_8', './img/poisoning.png', text.poisoning);
addActionBot('btn_9', false, text.drowning);
addActionBot('btn_10', './img/stroke2.jpeg', text.stroke);
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));