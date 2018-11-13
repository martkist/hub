import palette from '../../../styles/palette';

const white = palette.white;
const primary = palette.primary;
const primaryLight = palette.primaryLight;
const grey = palette.textLignt;
const greyDark = palette.greyDark;
const red = palette.red;

export default {
  root: {
    marginTop: 20,
    '& .chat_box_container': {
      wraper: {
        position: 'absolute',
        bottom: '0px',
      },
      '& .paper-style': {
        textAlign: 'center',
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        '& .chatbox-Header': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: primaryLight,
          height: '35px',
          textAlign: 'left',
          paddingLeft: '10px',
          '& .close-icon': {
            fill: white,
            '&:hover': {
              cursor: 'pointer',
              fill: red
            }
          },
          '& .chatBox-headerText': {
            color: white,
            marginRight: '52px',
            marginLeft: '6px',
            fontSize: '16px',
          },
        },
        '& .list': {
          maxHeight: '80%',
          '& .chat-list': {
            height: 'calc(100vh - 245px)',
            overflowY: 'auto',
            '& .chatContent-listItemText': {
              padding: '10px',
              textAlign: 'left',
              marginLeft: '10px',
              display: 'block',
            },
            '& .chatContent-primaryText': {
              display: 'block',
              padding: '8px 0px',
              color: primary,
            },
            '& .chatContent-secondaryText': {
              display: 'block',
              color: greyDark,
              padding: '0px 0px 0px 5px',
              fontWeight: '400',
            },
          },
        },
        '& .form': {
          border: 'thin solid ' + grey,
          backgroundColor: white,
          '&>div': {
            width: 'calc(100% - 60px)',
          },
          '& ::before': {
            backgroundColor: 'transparent',
          },
          '& .send-button': {
            position: 'absolute',
            cursor: 'pointer',
            color: primary,
            right: 15,
            bottom: 50
          },
        },
      },
    },
  },
  mRoot: {
    extend: 'root',
    height: '100%',
    marginTop: 0,
    ' & .chat_box_container': {
      height: '100%',
      '& .paper-style': {
        height: '100%',
        '& form': {
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: 50,
          '& div': {
            width: 'calc(100% - 0px) !important',
            marginBottom: '0px !important',
            height: '100%',
            '& textarea': {
              height: '50px !important',
              border: 'none',
              borderTop: '2px solid ' + primary
            }
          },
          '& .send-button': {
            top: 8
          }
        },
        '& .chatbox-Header': {
          textAlign: 'center !important',
          height: '50px  !important',
          padding: 10,
          '& .chatBox-headerText': {
            fontSize: '22px !important',
            fontWeight: 'normal',
            marginRight: '0px !important',
            marginLeft: '0px !important',
          },
          '&>span>img': {
            display: 'none'
          },
        },
        '& .list': {
          maxHeight: 'calc(100% - 155px) !important',
          overflowY: 'scroll',
          '& .chat-list': {
            height: 'calc(100% - 110px) !important',
          }
        }
      }
    }

  },
};