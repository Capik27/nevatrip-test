Nevatrip layout test task

///////
ВЕРСТКА
///////

https://capik27.github.io/nevatrip-test/

Поскольку изображения в фигме изменённые, взял пикчи с вашего сайта.

1. Создан компонент адаптивной карточки, в который мы пробрасываем шаблонные данные о событии.
   Так же задав внутренние свойства компонента, можно имитировать отображение карточки для мобилки или десктопа.
   Можно кастомизировать внутр. элементы: кнопку и слоган("новинка")

2. На десктопе таблицы выглядят хорошо, но на мобиле - появляется горизонтальный скролл, верстка едет. Что делать?

Ответ: переделать отображение в карточки. Меняем отображение tr и td элеменов с инлайнового в блочный. Если есть шапка и нужны тайтлы, то добавляем aria-label атрибут с именем каждому td елементу таблицы, и через псевдоелемент :before задаём имя attr(aria-label).

///////
JS
///////

БИЛЕТЫ НА СОБЫТИЕ:

Немного укоротил заголовки в таблице.

1. Некоторые события нужно продавать с дополнительными типами билетов - льготный и групповой, у которых будут свои цены и название. Имеется информация, что вероятно, будут другие типы билетов, которые нужно будет добавить. Нужно уметь сохранять при заказе 2 дополнительных типа билета, льготный и групповой в бд. Задача - Показать конечный вид таблицы с добавленными типами билетов. Объяснить свое решение.

Ответ: просто добавляем нужное кол-во полей для соответствующих типов билетов.

2. Часто посетители из одного заказа приходят не одновременно на события. Возникает необходимость чекинить их по отдельности. Для этого у каждого билета должен быть свой баркод. Если в одном заказе было куплено несколько билетов, 2 взрослых, 3 детских, 4 льготных - то должно быть 9 баркодов для каждого билета соответственно. Задача - Показать конечный вид таблицы, где у каждого билета свой баркод. Объяснить свое решение.

Ответ: поскольку для каждого билета нужен свой баркод, то нужно завести каждый из них, как отдельный заказ.
В целом из этого следует, что кол-во будет всегда равно единице и можно убрать "меню" типов билетов с их ценниками, а вместо этого создать поле ticket_type, который будет показывать тип билета, исходя из которого будет появляться нужная цена. Заказ формируется в один момент одним пользователем, поэтому значения этих полей будет одинаковыми.

Время из A в B:

в самом низу - https://capik27.github.io/nevatrip-test/