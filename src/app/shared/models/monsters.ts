export class Monsters {
    id: number
    name: string
    hp: number
    str: number
    dex: number
    con: number
    int: number
    wis: number
    cha: number

constructor({
    name = '',
    hp = null,
    str = null,
    dex = null,
    con = null,
    int = null,
    wis = null,
    cha = null,
    ...rest
}) {
    Object.assign(this, rest)
    this.name = name
    this.hp = hp
    this.str = str
    this.dex = dex
    this.con = con
    this.int = int
    this.wis = wis
    this.cha = cha
    }
}