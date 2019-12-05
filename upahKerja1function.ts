function inputTime(idElemen : string, indexArray : number)
{
    let inputElement : HTMLInputElement
    inputElement = <HTMLInputElement>document.getElementById(idElemen)
    let strTime : string;
    strTime = inputElement.value
    let arrayTime : Array<string>;
    arrayTime = strTime.split(":")
    let waktu : number;
    waktu = parseInt(arrayTime[indexArray])
    return waktu
}

function prosesUpah(jamMasuk : number, jamKeluar : number, menitMasuk : number, menitKeluar : number)
{
    const _upahBiasa = 10000
    let upahKerja : number
    let upahLembur : number
    let upahTotal : number
    
    let keterangan : HTMLInputElement
    keterangan = <HTMLInputElement>document.getElementById("outKeterangan")
    let upah : Array<number>

    if((jamMasuk < 8) || (jamMasuk == 8 && menitMasuk == 0)){
        if((jamKeluar <= 14) && (jamKeluar > 8)){
            upahKerja = (jamKeluar - 8) * _upahBiasa
            keterangan.value = "Selamat! Anda tidak terlambat dan tidak lembur"
            upahLembur = 0
        }
        else if(((jamKeluar < 20) && (jamKeluar > 8)) || ((jamKeluar == 20) && (menitKeluar == 0))){
                upahKerja = (14 - 8) * _upahBiasa
                upahLembur = (jamKeluar - 14) * (_upahBiasa * 2)
                keterangan.value = "Selamat! Anda tidak terlambat dan Anda lembur"
        }
        else{
            upahKerja = (14 - 8) * _upahBiasa
            upahLembur = (20 - 14) * (_upahBiasa * 2)
            keterangan.value = "Maaf kantor sudah Tutup :("
        }
            
        }
    else{
        upahKerja = 0
        upahLembur = 0
        keterangan.value = "Maaf Anda Terlambat"

    }
    
    upahTotal = upahKerja + upahLembur

    upah = new Array();
    upah[0] = upahKerja
    upah[1] = upahLembur
    upah[2] = upahTotal

    return upah
}

function output(hasil : number, idElemen : string)
{
    let txtOutput : HTMLInputElement
    txtOutput = <HTMLInputElement>document.getElementById(idElemen)
    txtOutput.value = hasil.toString()
}

function hitungUpah()
{
    let jamMasuk : number
    jamMasuk = inputTime('jamMasuk',0)
    let menitMasuk : number
    menitMasuk = inputTime('jamMasuk',1)
    let jamKeluar : number
    jamKeluar = inputTime('jamKeluar', 0)
    let menitKeluar : number
    menitKeluar = inputTime('jamKeluar', 1)

    let upahArray : Array<number>
    upahArray = prosesUpah(jamMasuk, jamKeluar, menitMasuk, menitKeluar)
    let upahKerja : number;
    let upahLembur : number;
    let upahTotal : number;
    upahKerja = upahArray[0]
    upahLembur = upahArray[1]
    upahTotal = upahArray[2]
    output(upahKerja, 'outUpahKerja')
    output(upahLembur, 'outUpahLembur')
    output(upahTotal, 'outUpahTotal')

}
