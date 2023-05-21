
export const BG_COLORS = [ 'black', 'white', 'violet', 'pink', 'magenta', 'red', 'aqua', 'grey','yellow' ] 
export const LIGHT_COLORS =[ 'white', 'aqua', 'yellow', 'pink']

export const FIELDS_NUM = {
    EMPTY : 0,
    DOT : 1,
    GREAT_DOT : 2,
    FRUIT : 3,
    PACMAN_PLACE : 4,
    PORTAL : 5,
    BORDER : -1,
    DOUBLE_BORDER : -2,
    DOOR : -3,
    GHOST_PLACE : -4,
    OTHER_BORDERS : -10
}

export const FIELDS = {
    [FIELDS_NUM.EMPTY]:'empty',
    [FIELDS_NUM.DOT]:'dot',
    [FIELDS_NUM.GREAT_DOT]:'great-dot',
    [FIELDS_NUM.FRUIT]:'fruit',
    [FIELDS_NUM.PACMAN_PLACE]:'pacman-place',
    [FIELDS_NUM.PORTAL]:'portal',
    [FIELDS_NUM.BORDER]:'border',
    [FIELDS_NUM.DOUBLE_BORDER]:'double-border',
    [FIELDS_NUM.DOOR]:'door',
    [FIELDS_NUM.GHOST_PLACE]:'ghost-place',
    '-11':'field-blue',
    '-12':'field-yellow',
    '-13':'field-red',
    '-14':'field-green',
    '-15':'field-pink'
}
