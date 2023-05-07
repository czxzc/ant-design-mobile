import { ComponentMetadata, Snippet } from '@alilc/lowcode-types'

const SelectorMeta: ComponentMetadata = {
  'componentName': 'Selector',
  'title': 'Selector',
  'docUrl': '',
  'screenshot': '',
  'devMode': 'proCode',
  'npm': {
    'package': 'antd-mobile',
    'version': '5.30.0',
    'exportName': 'Selector',
    'main': 'src/index.ts',
    'destructuring': true,
    'subName': '',
  },
  'configure': {
    'props': [
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'options',
            'zh-CN': 'options',
          },
        },
        'name': 'options',
        'setter': {
          'componentName': 'ArraySetter',
          'props': {
            'itemSetter': {
              'componentName': 'ObjectSetter',
              'props': {
                'config': {
                  'items': [
                    {
                      'title': {
                        'label': {
                          'type': 'i18n',
                          'en-US': 'V',
                          'zh-CN': 'V',
                        },
                      },
                      'name': 'V',
                      'setter': {
                        'componentName': 'MixedSetter',
                        'isRequired': true,
                        'props': {},
                      },
                    },
                    {
                      'title': {
                        'label': {
                          'type': 'i18n',
                          'en-US': 'label',
                          'zh-CN': 'label',
                        },
                      },
                      'name': 'label',
                      'setter': {
                        'componentName': 'SlotSetter',
                        'props': {
                          'mode': 'node',
                        },
                        'isRequired': true,
                        'initialValue': {
                          'type': 'JSSlot',
                          'value': [],
                        },
                      },
                    },
                    {
                      'title': {
                        'label': {
                          'type': 'i18n',
                          'en-US': 'description',
                          'zh-CN': 'description',
                        },
                      },
                      'name': 'description',
                      'setter': {
                        'componentName': 'SlotSetter',
                        'props': {
                          'mode': 'node',
                        },
                        'isRequired': false,
                        'initialValue': {
                          'type': 'JSSlot',
                          'value': [],
                        },
                      },
                    },
                    {
                      'title': {
                        'label': {
                          'type': 'i18n',
                          'en-US': 'value',
                          'zh-CN': 'value',
                        },
                      },
                      'name': 'value',
                      'setter': {
                        'componentName': 'ObjectSetter',
                        'props': {
                          'config': {
                            'extraSetter': {
                              'componentName': 'MixedSetter',
                              'isRequired': false,
                              'props': {},
                            },
                          },
                        },
                        'isRequired': true,
                        'initialValue': {},
                      },
                    },
                    {
                      'title': {
                        'label': {
                          'type': 'i18n',
                          'en-US': 'disabled',
                          'zh-CN': 'disabled',
                        },
                      },
                      'name': 'disabled',
                      'setter': {
                        'componentName': 'MixedSetter',
                        'props': {
                          'setters': [
                            {
                              'componentName': 'ObjectSetter',
                              'props': {
                                'config': {
                                  'extraSetter': {
                                    'componentName': 'MixedSetter',
                                    'isRequired': false,
                                    'props': {},
                                  },
                                },
                              },
                              'isRequired': false,
                              'initialValue': {},
                            },
                            {
                              'componentName': 'BoolSetter',
                              'isRequired': false,
                              'initialValue': false,
                            },
                          ],
                        },
                      },
                    },
                  ],
                  'extraSetter': {
                    'componentName': 'MixedSetter',
                    'isRequired': false,
                    'props': {},
                  },
                },
              },
            },
          },
          'isRequired': true,
          'initialValue': [],
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'columns',
            'zh-CN': 'columns',
          },
        },
        'name': 'columns',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'NumberSetter',
                'isRequired': false,
                'initialValue': 0,
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple',
          },
        },
        'name': 'multiple',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'BoolSetter',
                'isRequired': false,
                'initialValue': false,
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled',
          },
        },
        'name': 'disabled',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'BoolSetter',
                'isRequired': false,
                'initialValue': false,
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue',
          },
        },
        'name': 'defaultValue',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'ArraySetter',
                'props': {
                  'itemSetter': {
                    'componentName': 'ObjectSetter',
                    'props': {
                      'config': {
                        'extraSetter': {
                          'componentName': 'MixedSetter',
                          'isRequired': false,
                          'props': {},
                        },
                      },
                    },
                    'isRequired': false,
                    'initialValue': {},
                  },
                },
                'initialValue': [],
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'value',
            'zh-CN': 'value',
          },
        },
        'name': 'value',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'ArraySetter',
                'props': {
                  'itemSetter': {
                    'componentName': 'ObjectSetter',
                    'props': {
                      'config': {
                        'extraSetter': {
                          'componentName': 'MixedSetter',
                          'isRequired': false,
                          'props': {},
                        },
                      },
                    },
                    'isRequired': false,
                    'initialValue': {},
                  },
                },
                'initialValue': [],
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange',
          },
        },
        'name': 'onChange',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'FunctionSetter',
                'isRequired': false,
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'showCheckMark',
            'zh-CN': 'showCheckMark',
          },
        },
        'name': 'showCheckMark',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'BoolSetter',
                'isRequired': false,
                'initialValue': false,
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'className',
            'zh-CN': 'className',
          },
        },
        'name': 'className',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'StringSetter',
                'isRequired': false,
                'initialValue': '',
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'style',
            'zh-CN': 'style',
          },
        },
        'name': 'style',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
            ],
          },
        },
      },
      {
        'title': {
          'label': {
            'type': 'i18n',
            'en-US': 'tabIndex',
            'zh-CN': 'tabIndex',
          },
        },
        'name': 'tabIndex',
        'setter': {
          'componentName': 'MixedSetter',
          'props': {
            'setters': [
              {
                'componentName': 'ObjectSetter',
                'props': {
                  'config': {
                    'extraSetter': {
                      'componentName': 'MixedSetter',
                      'isRequired': false,
                      'props': {},
                    },
                  },
                },
                'isRequired': false,
                'initialValue': {},
              },
              {
                'componentName': 'NumberSetter',
                'isRequired': false,
                'initialValue': 0,
              },
            ],
          },
        },
      },
    ],
    'supports': {},
    'component': {},
  },
}
const snippets: Snippet[] = [
  {
    'title': 'Selector',
    'screenshot': '',
    'schema': {
      'componentName': 'Selector',
      'props': {},
    },
  },
]

export default {
  ...SelectorMeta,
  snippets,
}
