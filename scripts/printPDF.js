// создание объекта для pdf-create

function DownloadResultPDF() {
    let organizationName = document.getElementById('org').value;
    let userName = document.getElementById('fio2').value;
    let testResult = document.getElementById('endResult').value;


    //==============содержимое PDF================================================
    var docInfo = {

            info: {
                title: 'Результат тестирования знаний правил пользования СКЗИ',
                author: userName,
                subject: 'СКЗИ',
                keywords: 'СКЗИ'
            },

            pageSize: 'A4',
            pageOrientation: 'portrait',
            pageMargins: [40, 40, 30, 40],

            header: function(currentPage, pageCount) {
                return {
                    text: currentPage.toString() + ' из ' + pageCount,
                    fontSize: 8,
                    alignment: 'right',
                    margin: [0, 5, 10, 0]
                }
            },

            footer: [{
                text: '',
                alignment: 'right', //left  right
            }],

            content: [

                {
                    text: 'Заключение № ____________',
                    fontSize: 12,
                    alignment: "center",
                },

                {
                    text: 'о допуске пользователя к самостоятельной работе с СКЗИ',
                    fontSize: 11,
                    alignment: "center",
                    margin: [0, 5, 0, 5]
                        //pageBreak:'after'
                },

                {
                    text: 'Во исполнение требований пункта 21 "Инструкции об организации и обеспечении безопасности хранения, обработки и передачи по каналам связи с использованием средств криптографической защиты информации с ограниченным доступом, не содержащей сведений, составляющих государственную тайну", утвержденной приказом ФАПСИ от 13 июня 2001 г. № 152, пользователь прошел обучение правилам работы со средствами криптографической защиты информации (СКЗИ) и показал следующие результаты в рамках принятого зачета:',
                    fontSize: 10,
                    margin: [0, 15, 0, 5],
                    alignment: 'justify'
                        //pageBreak:'after'
                },

                {
                    table: {

                        widths: [135, '*'],
                        body: [
                            ['Фамилия Имя Отчество', userName],
                            ['Результат тестирования', testResult + ' из 18 правильных ответов']
                        ]
                    },
                    fontSize: 10
                },

                {
                    table: {
                        widths: ['*'],
                        body: [
                            [{
                                margin: [0, 10, 0, 0],
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 8.5
                            }],
                            [{
                                border: [false, false, false, false],
                                text: 'На основании результатов принятого зачета комиссия сотрудников органа криптографической защиты информации ' + organizationName + ' даёт заключение о том, что ' + userName + ' готов(а) к самостоятельной работе с СКЗИ.',
                                fontSize: 10,
                                alignment: 'justify'
                            }],

                            [{
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 8.5
                            }],

                            [{
                                margin: [0, 10, 0, 0],
                                border: [false, false, false, false],
                                table: {
                                    widths: ['*', 130, 'auto'],

                                    body: [
                                        [{
                                            border: [false, false, false, false],
                                            text: ''
                                        }, {
                                            border: [false, false, false, false],
                                            text: ''
                                        }, {
                                            border: [false, false, false, false],
                                            text: 'Члены комиссии:'
                                        }]
                                    ]
                                }
                            }],


                            [{
                                margin: [0, 10, 0, 0],
                                border: [false, false, false, false],
                                table: {
                                    widths: ['*', 130, 130],

                                    body: [
                                        [{
                                            border: [false, false, false, false],
                                            text: ''
                                        }, {
                                            border: [false, false, false, true],
                                            text: ''
                                        }, {
                                            border: [false, false, false, true],
                                            text: '/' + ''
                                        }],
                                        [{
                                            border: [false, false, false, false],
                                            text: '',
                                            fontSize: 8
                                        }, {
                                            border: [false, false, false, false],
                                            text: '(подпись)',
                                            fontSize: 8,
                                            color: 'gray',
                                            alignment: 'center'
                                        }, {
                                            border: [false, false, false, false],
                                            text: '(фамилия имя отчество)',
                                            fontSize: 8,
                                            color: 'gray',
                                            alignment: 'center'
                                        }]
                                    ]
                                }
                            }],
                            [{
                                margin: [0, 10, 0, 0],
                                border: [false, false, false, false],
                                table: {
                                    widths: ['*', 130, 130],

                                    body: [
                                        [{
                                            border: [false, false, false, false],
                                            text: ''
                                        }, {
                                            border: [false, false, false, true],
                                            text: ''
                                        }, {
                                            border: [false, false, false, true],
                                            text: '/' + ''
                                        }],
                                        [{
                                            border: [false, false, false, false],
                                            text: '',
                                            fontSize: 8
                                        }, {
                                            border: [false, false, false, false],
                                            text: '(подпись)',
                                            fontSize: 8,
                                            color: 'gray',
                                            alignment: 'center'
                                        }, {
                                            border: [false, false, false, false],
                                            text: '(фамилия имя отчество)',
                                            fontSize: 8,
                                            color: 'gray',
                                            alignment: 'center'
                                        }]
                                    ]
                                }
                            }],
                            [{
                                margin: [0, 10, 0, 0],
                                border: [false, false, false, false],
                                table: {
                                    widths: ['*', 130, 130],

                                    body: [
                                        [{
                                            border: [false, false, false, false],
                                            text: ''
                                        }, {
                                            border: [false, false, false, true],
                                            text: ''
                                        }, {
                                            border: [false, false, false, true],
                                            text: '/' + ''
                                        }],
                                        [{
                                            border: [false, false, false, false],
                                            text: '',
                                            fontSize: 8
                                        }, {
                                            border: [false, false, false, false],
                                            text: '(подпись)',
                                            fontSize: 8,
                                            color: 'gray',
                                            alignment: 'center'
                                        }, {
                                            border: [false, false, false, false],
                                            text: '(фамилия имя отчество)',
                                            fontSize: 8,
                                            color: 'gray',
                                            alignment: 'center'
                                        }]
                                    ]
                                }
                            }],
                        ]
                    },
                    fontSize: 10
                },

                {
                    text: 'Я, ' + userName + ', подтверждаю, что самостоятельно прошел(ла) тестирование на знание правил работы с СКЗИ и ознакомлен(а) с требованиями нормативных документов в области СКЗИ. Их содержание мне понятно, обязуюсь руководствоваться данными требованиями при работе с СКЗИ.',
                    fontSize: 10,
                    margin: [0, 15, 0, 5],
                    alignment: 'justify'
                },

                {
                    margin: [0, 20, 0, 0],
                    border: [true, false, true, true],
                    table: {
                        margin: [0, 0, 0, 0],
                        widths: ['*', 130, "auto"],

                        body: [
                            [{
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 10
                            }, {
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 10
                            }, {
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 10
                            }],
                            [{
                                border: [false, false, false, false],
                                text: userName,
                                fontSize: 10
                            }, {
                                border: [false, false, false, true],
                                text: '',
                                fontSize: 10,
                                alignment: 'right'
                            }, {
                                border: [false, false, false, true],
                                text: '',
                                fontSize: 10,
                                alignment: 'right'
                            }],
                            [{
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 8,
                                alignment: 'left'
                            }, {
                                border: [false, false, false, false],
                                text: '(подпись пользователя)',
                                fontSize: 8,
                                color: 'gray',
                                alignment: 'center'
                            }, {
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 8,
                                color: 'gray',
                                alignment: 'right'
                            }],
                            [{
                                border: [false, false, false, false],
                                text: '«_________» __________________ 20_____ г.',
                                fontSize: 10
                            }, {
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 10,
                                alignment: 'right'
                            }, {
                                border: [false, false, false, false],
                                text: '',
                                fontSize: 10,
                                alignment: 'right'
                            }]
                        ]
                    }
                }

            ]
        }
        //=======================================================================================

    pdfMake.createPdf(docInfo).download('results.pdf');
}