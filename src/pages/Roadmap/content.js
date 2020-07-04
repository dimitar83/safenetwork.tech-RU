export default {
  banner: {
    pageTitle: '~~Не~~Возможная Сеть',
    pageDesc: `14 лет исследований и разработок приносят свои плоды, поскольку мы собрали окончательные блоки того, что, по мнению некоторых, было невозможно: безопасный доступ для всех.`,
    latestUpdate: {
      overline: 'ПОСЛЕДНИЕ ОБНОВЛЕНИЯ',
      date: '29 августа 2019 г.',
      title: 'Хранилище - Фаза 1',
      para: `Последняя часть головоломки завершена, и теперь у нас есть SAFE CLI, SAFE Client Libs, SAFE Хранилище и SAFE Браузер.`,
       CTA: {
         name: 'SAFE Network Форум',
         url: 'https://safenetforum.org/t/safe-network-dev-update-march-26-2020/31360'
       }
    }
  },
  subscribe: {
    title: 'Подписаться на обновления:'
  },
  releases: {
    release1: {
      overline: 'Сейчас',
      title: 'Хранилище - Фаза 1',
      para:[
        `Этот выпуск Хранилище - Фаза 1 предназначен главным образом для демонстрации сетевых функций потребителям (люди, использующие Сеть для просмотра, обмена данными и т. д.) и Создатели (разработчики или те кто публикуют контент). Это позволяет пользователям тестировать такие функции, как SAFE CLI и SAFE Client Libs, а также введение новых типов данных.`,
        'Это просто в использовании. Просто скачайте бинарный файл Хранилище, который будет работать локально на вашем компьютере. Подробности и ссылки можно найти в этом форуме.'
      ],
      // accordion: {
      //   header: [
      //     'The Share Vault Network Feature',
      //     'Description',
      //     'Status'
      //   ],
      //   items: [
      //   ]
      // }
    },
    release2: {
      overline: 'ПРЕДСТОЯЩИЙ ЭТАП',
      title: 'SAFE Network Флеминга',
      para: ['Следующий важный этап для SAFE Network. Хотя сеть общего хранилища будет продолжать функционировать, это будет автономная сеть, которая позволит отдельным пользователям запускать Хранилища - децентрализованное хранилище с домашних компьютеров. Выпуск Флеминга будет примечательным по многим причинам, не в последнюю очередь из-за того, что благодаря хранилищу данных сеть теперь будет содержать Test Safecoin.'],
      accordion: {
        header: [
          'Флеминг функция',
          'Описание',
          'Статус'
        ],
        items: [
          {
            feature: 'Само-засвидетельствование',
            desc: 'Возможность входа в децентрализованную сеть без разрешения или наличия третьей стороны',
            status: 'Законченный',
            para: [
              'MaidSafe изобрели технологию, которая позволяет кому-либо безопасно входить в децентрализованную сеть, не требуя участия третьей стороны. Сеть Shared Vault - единственное место в мире, где вы можете увидеть это в действии.'
            ],
            // CTA: {
            //   name: 'Read More',
            //   url: 'https://safenetwork.tech/roadmap/#self-authentication'
            // },
          }, {
            feature: 'Само-шифрования',
            desc: 'Данные зашифровываются на вашем компьютере перед сохранением в сети: никакие ключи или пароли никогда не покидают ваш компьютер.',
            status: 'Законченный',
            para: [
              'Изобретенный MaidSafe-ом, это процесс, с помощью которого любой файл, который будет храниться в сети, сначала разбивается на блоки, хэшируется, а затем шифруется. Эти блоки затем сами шифруются с использованием хеша другого блока из того же файла.'
            ],
            video: {
              url: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
              caption: 'Объясние Самошифрования'
            }
          }, {
            feature: 'Непересекающиеся разделы',
            desc: 'В противном случае, известном как шардинг, это позволяет масштабировать сеть, разделяя обязанности для определенных функций сети.',
            status: 'Законченный',
            para: [
              'Гарантирует, что Сеть может масштабироваться, управляя обязанностями и местоположениями каждого узла, не требуя вмешательства человека. Это также служит мерой безопасности, гарантирующей, что злоумышленник не сможет выбрать свое местоположение или обязанности.'
            ],
            CTA: {
              name: 'Читать далее',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-6-disjoint-sections/28530'
            },
          }, {
            feature: 'Ретрансляция сообщений',
            desc: 'Гарантирует, что сообщение может быть отправлено между узлами в разных непересекающихся секциях',
            status: 'Законченный',
            para: [
              'Гарантирует, что сообщение может быть отправлено между узлами в разных непересекающихся секциях. На этой ранней итерации каждое сообщение содержит подписи членов непересекающихся разделов, но еще не проверяет сами подписи.'
            ],
          },
          {
            feature: 'PARSEC',
            desc: 'Алгоритм асинхронного согласия',
            status: 'Законченный',
            para: [
              'Гарантирует, что глобальная децентрализованная, не имеющая разрешений Сеть может прийти к соглашению о событиях, которые разрешены, и порядке, в котором они должны записываться. Алгоритм на основе DAG, который обеспечивает высочайший стандарт безопасности, изобретенный MaidSafe-ом таким образом, что он обеспечивает математическую уверенность в том, что каждая часть сети достигнет возможного соглашения. Во Флеминге мы выпустим сильно асинхронную версию ПАРСЕК с полной асинхронностью, которая появится позже.'
            ],
            CTA: {
              name: 'Читать далее',
              url: 'https://hub.safedev.org/parsec/'
            },
          }, {
            feature: 'Узел старения',
            desc: 'Децентрализованная система ранжирования поведения, производительности и возможностей узлов в сети, которая не требует вмешательства человека.',
            status: 'Законченный',
            para: [
              'Каждый узел в SAFE Network получает возраст самой сети. Возраст узла увеличивается каждый раз, когда узел перемещается между непересекающимися секциями, и только самые старшие (старейшины) имеют право голосовать во время алгоритма консенсуса ПАРСЕК.',
              'Покопайтесь в деталях в RFC и [присоединяйтесь к обсуждению](https://forum.safedev.org/t/rfc-45-node-ageing/157) на форуме.'
            ],
            CTA: {
              name: 'Читать RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'Безопасная доставка сообщений',
            desc: 'Доверенная связь между узлами - сообщения с аутентифицированным источником',
            status: 'Законченный',
            para: [
              'Гарантирует, что сообщения отправляются и подписываются таким образом, что узлы могут полагаться на содержимое каждого сообщения, несмотря на то что ранее не имели никаких отношений с отправителем. Это решает проблему, с которой сталкиваются многие существующие проекты на основе блокчейна, и это важно, когда у вас есть сеть, которая будет автономно перемещать узлы по мере необходимости.'
            ],
            CTA: {
              name: 'Читать RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'Надежная доставка сообщений',
            desc: 'Общение, гарантирующее успешную доставку сообщений.',
            status: 'Законченный',
            para: [
              'Гарантирует, что все отправленные сообщения будут успешно доставлены по назначению, даже если некоторые узлы, ответственные за доставку, не работают.'
            ],
            CTA: {
              name: 'Читать RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QUIC-P2P',
            desc: 'Язык низкого уровня, который пользователи, подключающиеся к SAFE, будет использоваться для всех сетевых коммуникаций',
            status: 'Законченный',
            para: [
              'Программное обеспечение, которое позволяет компьютерам общаться в зашифрованном виде в безопасной сети. Программное обеспечение обеспечивает инфраструктуру для перемещения сообщений, в то время как уровень маршрутизации в сети устанавливает правила, по которым эти сообщения могут перемещаться.'
            ],
          }, {
            feature: 'Диагностика злобы',
            desc: 'Предотвращая вредоносные узлы, подрывающие согласованный алгоритм, PARSEC',
            status: 'Законченный',
            para: [
              'Способ, которым узлы идентифицируют вредоносные узлы, которые повреждают Сеть в непересекающемся разделе, и механизм, с помощью которого они соглашаются удалить этот узел или снизить риск.'
            ],
            CTA: {
              name: 'Читать RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            }
          }, {
            feature: 'Тест Safecoin-а и кошелька',
            desc: 'Разрешить сети взимать плату, а пользователю отправлять и получать платежи на кошелек в единицах, называемых Тест Safecoins',
            status: 'Законченный',
            para: [
              'Safecoin - это механизм стимулирования, который побуждает людей предоставлять вычислительные ресурсы, которые требуются Сети: хранилище, широкополосный доступ и ресурсы процессора (CPU).',
            ]
          }, {
            feature: 'Фермерства',
            desc: 'Процесс предоставления ресурса и получения Safecoin взамен',
            status: 'В стадии разработки',
            para: [
              'Лица, решившие предоставить ресурсы, необходимые для Сети, имеют возможность получить вознаграждение с помощью Safecoin. Эта работа гарантирует, что Сеть вознаграждает тех, кто предоставляет ей ценные ресурсы.',
            ],
          }, {
            feature: 'Хранилище из дома',
            desc: 'Возможность загружать программное обеспечение и запускать Хранилища из дома, создавая децентрализованное Хранилище для сети',
            status: 'В стадии разработки',
            para: [
              'Децентрализованное хранение данных является ключевым элементом SAFE Network. Этот выпуск позволит узлам участвовать независимо от ресурсов, которые они предлагают.'
            ],
          }, {
            feature: 'Опубликованные и неопубликованные типы данных',
            desc: 'Разрешить сети хранить опубликованные и неопубликованные данные через типы AppendOnlyData или MutableData',
            status: 'Законченный',
            para: [
              'Опубликованные данные относятся к контенту, которые публикуется (делаются доступными) для всех, например веб-сайты, блоги или исследовательские работы. Для такого публичного контента становится важным сохранить историю изменений. Нельзя допускать вмешательства в историю, и опубликованные данные должны оставаться навсегда. Неопубликованные данные - это данные, которые нежелательно публиковать, такие как личные данные или данные организаций, хранящиеся в сети.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Неопубликованные неизменяемые данные',
            desc: 'Улучшение неизменных данных, чтобы сделать их неопубликованными или опубликованными, с той разницей, что неопубликованные могут быть удалены.',
            status: 'Законченный',
            para: [
              'Часто пользователю требуется создать неизменяемые данные для хранения частного контента. Пока это содержимое не опубликовано (предоставлены для других), оно может быть удалено только владельцем данных.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            //},
          }
        ]
      }
    },
    release3: {
      overline: 'ДАЛЕЕ',
      title: 'SAFE Network Максвелла',
      para: ['Выпуск SAFE Максвелла построен на основе Fleming и позволяет модернизировать сеть, повышает безопасность и устанавливает основу для переключения теста SAFE Coin на настоящую SAFEcoin.'],
      accordion: {
        header: [
          'Максвелл функция',
          'Описание',
          'Статус'
        ],
        items: [
          {
            feature: 'Обработка спама',
            desc: 'Возможность обрабатывать спам-атаки',
            status: 'Концепт',
            para: [
              'Спам включает в себя узлы, пытающиеся выполнять действия, которые они не должны выполнять, или действия предназначенные для подавления сети. Сеть должна быть способна противостоять допустимому количеству таких атак.'
            ],
          }, {
            feature: 'Управление идентификацией',
            desc: 'Возможность для пользователей создавать и управлять несколькими идентификаторами для использования в сети',
            status: 'Концепт',
            para: [
              'Пользователи смогут создавать несколько идентификаторов в сети. Каждая личность может использоваться в соответствии с требованиями Пользователя, и каждая из них должна быть независимой, если только Пользователь явно не хочет подключить их. Это помогает защитить личность и конфиденциальность.'
            ],
          },
          {
            feature: 'Обновления',
            desc: 'Возможность для Сети обновлять себя без причинения вреда',
            status: 'Концепт',
            para: [
              'Сеть будет иметь возможность обновлять себя, чтобы позволить функциям и улучшениям распространяться по всей Сети. Обновления должны быть выполнены таким образом, чтобы они не причиняли вреда Сети.',
              'Это важный этап в эволюции Сети, поскольку это означает, что новое программное обеспечение может затем продолжать развертывание в существующей Сети, не нарушая существующую функциональность.'
            ],
            CTA: {
              name: 'Следите за обсуждением',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'СКОРО',
      title: 'Предстоящие сетевые функции',
      para: ['Следующий список представляет работу сети, которая еще не завершена. Порядок не должен рассматриваться как фиксированный каким-либо образом, так как в определенных случаях работа будет выполняться параллельно разными командами.'],
      accordion: {
        header: [
          'Особенность',
          'Описание',
          'Статус'
        ],
        items: [
          {
            feature: 'Безопасные „анклавы“',
            desc: 'Доверенное исполняемое окружение на существующих компьютерах',
            status: 'Концепт',
            para: [
              'Создает область в оборудовании компьютера, которая представляет собой безопасную доверенную среду, которая отделена от остальной части компьютера. Он функционирует как мини-компьютер внутри существующих компьютеров, которые нельзя открыть.'
            ],
          }, {
            feature: 'Развитие сети',
            desc: 'Позвольте сети расти и масштабироваться устойчивым способом',
            status: 'Концепт',
            para: [
              'Сеть позволяет осуществлять контролируемый рост, чтобы гарантировать, что директивные органы, принимающих решения, являются здоровыми узлами, которые следуют правилам Сети. Этот рост должен быть устойчивым, чтобы избежать ненужных слияний между Секциями.'
            ],
          }, {
            feature: 'Перезагрузка Сети',
            desc: 'Возможность перезагрузки сети после катастрофы',
            status: 'Концепт',
            para: [
              'В случае катастрофического сбоя Сеть должна быть в состоянии восстановить себя, потому что она поддерживает целостность важных данных (таких как история цепочки), что позволяет ей снова начать функционировать на основе последнего известного состояния сети.'
            ],
          }, {
            feature: 'Поддержка RDF',
            desc: 'Сеть будет иметь встроенную поддержку RDF, что позволит данным быть совместимыми с Семантическая паутина',
            status: 'RFC',
            para: [
              'Гарантирует, что данные в SAFE Network хранятся таким образом, что формат может быть понят другими проектами Семантической сети, такие как Solid.'
            ],
            CTA: {
              name: 'Читать RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Vault on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Концепт',
            para: [
              'Ensures that even the smallest piece of data that is stored in a Vault cannot be read by the person controlling the computer on which it is stored.'
            ],
          }, {
            feature: 'Common Coin',
            desc: 'Replace our concrete coin with a common coin to make PARSEC fully asynchronous',
            status: 'Design',
            para: [
              'Common coin is a device that nodes can use to generate a “random” binary value (true or false). Every time a node flips the coin, all other nodes are guaranteed to observe the same value for their coin flip. Also, the value must be unpredictable, which means that no malicious node can know the outcome before a honest node has observed it.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Apps and User Experience',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'The latest release includes some of the beginnings of the Perpetual Web. Please note that it\'s only compatible with the Vaults Phase 1 release.',
        status: 'Latest Version v0.16.0'
      }
    ],
    currentMilestone: {
      status: 'Current Milestone',
      title: 'The Perpetual Web',
      para: 'The SAFE Network is designed to ensure that public data is permanent and can never be deleted. Individuals and groups can choose to keep their data private, but once it’s been published, it will remain permanently available. This milestone aims to showcase the incredible power of this facet of the Network, by building out the User Experience, and iterating on it right through to launch.',
      accordion: {
        header: [
          'Milestone Features',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'SAFE Browser',
            desc: 'Enhancements to the browser designed specifically to take advantage of the functionalities of the Perpetual Web',
            status: 'Законченный',
            para: [
              'The SAFE Browser functionality will be extended to incorporate new features that are unique to the Perpetual Web, such as the ability to roll-back through the version history of any SAFE website or asset.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of SAFE browser which is limited to browsing published data from the SAFE Network',
            status: 'Законченный',
            para: [
              'Enables individuals to access the SAFE Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of SAFE sites and Perpetual Data',
            status: 'В стадии разработки',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the SAFE Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Законченный',
            para: [
              'A command line tool to manage data on the SAFE Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'Законченный',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The SAFE Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Upcoming Milestones',
      list: [
        {
          title: 'Private Communications',
          para: 'If we want a world in which individuals can communicate freely whenever they choose, privacy is essential. This milestone aims to deliver just that.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Private Messaging',
                desc: 'Send secure private messages between clients',
                status: 'Концепт',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Концепт',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Концепт',
                para: [
                  'Enables SAFE users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The SAFE Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Data Manager',
                desc: 'Fine-grained management of your personal data',
                status: 'Концепт',
                para: [
                  'The extension of the Data Manager tool to allow fine-grained control by individuals over their private and unpublished data.'
                ],
              },
              {
                feature: 'RDF Support',
                desc: 'Support storing and querying RDF resources in SAFE-Core',
                status: 'RFC',
                para: [
                  'Ensures that the SAFE Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Support',
                desc: 'Add native support for SPARQL to allow searching of data',
                status: 'Концепт',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Концепт',
                para: [
                  'Manage sharing and permissions of private, unpublised data and files, for collaboration between individuals and groups. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'A way of sharing and accessing SAFE Network files without the need for a Public Name',
                status: 'Законченный',
                para: [
                  'Create a system of standardised URL’s on the SAFE Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner.'
                ],
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the SAFE Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safecoin Wallet',
                desc: 'Transact using Test Safecoins',
                status: 'В стадии разработки',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Концепт',
                para: [
                  'Users will see greatly-improved Vault User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
