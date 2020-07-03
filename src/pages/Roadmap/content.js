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
          'Флеминг',
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
            feature: 'Malice Detection',
            desc: 'Preventing malicious nodes subverting the consensus algorithm, PARSEC',
            status: 'Законченный',
            para: [
              'The way that nodes identify malicious nodes that are damaging the Network within a Disjoint Section and the mechanism by which they agree to eject that node, or mitigate the risk.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            }
          }, {
            feature: 'Test Safecoin & Wallet',
            desc: 'Allow the Network to charge, and a user to send and receive payments to a wallet, in units called Test Safecoins',
            status: 'Законченный',
            para: [
              'Safecoin is the incentive mechanism that encourages individuals to provide the computing resources that the Network requires: storage, broadband, and CPU resources.',
            ]
          }, {
            feature: 'Farming',
            desc: 'The process of providing resource and receiving Safecoin in return',
            status: 'Development',
            para: [
              'Individuals who choose to supply the resources that the Network requires have the opportunity to be rewarded with Safecoin. This work ensures that the Network rewards those who provide it with valuable resources.',
            ],
          }, {
            feature: 'Vaults From Home',
            desc: 'The ability for anyone to download software and run Vaults from home, creating decentralised storage for the Network',
            status: 'Development',
            para: [
              'Decentralised data storage is a key element of the SAFE Network. This release will enable nodes to participate regardless of the resources they offer.'
            ],
          }, {
            feature: 'Published and Unpublished Data Types',
            desc: 'Allow the network to store Published and Unpublished data via AppendOnlyData or MutableData types',
            status: 'Законченный',
            para: [
              'Published data refers to content that is published (made available) for everyone such as websites, blogs, or research papers. For such public content, it becomes important to retain a history of changes. History must not be allowed to be tampered with and the published data must remain forever. Unpublished data is data that is not desired to be made public such as personal data or organisations’ data stored on the network'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Unpublished ImmutableData Data Type',
            desc: 'Enhance ImmutableData to make it an unpublished or published, with the difference that unpublished can be deleted',
            status: 'Законченный',
            para: [
              'There are many times when a user will require to create Immutable Data to store private content. As long as this content is not published (made available for others) this will be deleteable by the data owner only.'
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
      overline: 'Next Up',
      title: 'SAFE Maxwell Network',
      para: ['The release of SAFE Maxwell builds on top of Fleming and enables the network to upgrade, improves security and sets the ground work for switching Test Safecoin to real Safecoin.'],
      accordion: {
        header: [
          'Maxwell Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Spam Handling',
            desc: 'Ability to handle spam attacks',
            status: 'Concept',
            para: [
              'Spam includes nodes attempting to carry out activities that they shouldn’t or valid activities at a scale that is intended to choke the Network. The Network should be able to withstand a reasonable volume of such attacks.'
            ],
          }, {
            feature: 'Identity Management',
            desc: 'Ability for users to create and manage multiple identities for use on the network',
            status: 'Concept',
            para: [
              'Users will be able to create multiple identities in the Network. Each identity can be used as required by the User and each should be independent unless the User explicitly wants to connect them. This helps protect identity and privacy.'
            ],
          },
          {
            feature: 'Upgrades',
            desc: 'The ability for the Network to upgrade itself, with no harm caused',
            status: 'Concept',
            para: [
              'The Network will have the ability to upgrade itself in order to allow features and improvements to disseminate throughout the Network. The upgrades must be done in a way such that they don’t cause harm to the Network.',
              'This is an important stage in the evolution of the Network as it means that new software can then continue to be rolled out onto the existing Network without disrupting the existing functionality.'
            ],
            CTA: {
              name: 'Follow the Discussion',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'Coming Soon',
      title: 'Upcoming Network Features',
      para: ['The following list represents network work that remains to be completed. The order should not be seen as fixed in any way as in certain cases, work will be carried out in parallel by different teams.'],
      accordion: {
        header: [
          'Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Secure Enclaves',
            desc: 'A trusted executable environment within existing computers',
            status: 'Concept',
            para: [
              'Creates an area within the hardware of a computer that is a secure, trusted environment that stands separate from the rest of the computer. It functions like a mini-computer inside existing computers that cannot be opened.'
            ],
          }, {
            feature: 'Network Growth',
            desc: 'Allow the network to grow and scale in a sustainable way',
            status: 'Concept',
            para: [
              'The Network allows controlled growth to ensure that the majority of decision-makers are healthy nodes that follow the rules of the Network. This growth should be sustainable in order to avoid unnecessary mergers between Sections.'
            ],
          }, {
            feature: 'Network Restarts',
            desc: 'Ability for the network to restart after a catastrophe',
            status: 'Concept',
            para: [
              'In the event of a catastrophic outage, the Network should be able to rebuild itself because it maintains the integrity of essential data (such as chain history) which enables it to start functioning again on the basis of the last known state of the Network.'
            ],
          }, {
            feature: 'RDF Support',
            desc: 'The Network will have native support for RDF, enabling data to be compatible with the Semantic Web',
            status: 'RFC',
            para: [
              'Ensures that data on the SAFE Network is stored in such a way that the format can be understood by other Semantic Web projects, such as Solid.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Vault on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Concept',
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
            status: 'Development',
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
                status: 'Concept',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Concept',
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
                status: 'Concept',
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
                status: 'Concept',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Concept',
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
                status: 'Development',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Concept',
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
