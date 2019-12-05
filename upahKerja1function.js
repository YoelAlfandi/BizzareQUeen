function inputTime(idElemen, indexArray) {
    var inputElement;
    inputElement = document.getElementById(idElemen);
    var strTime;
    strTime = inputElement.value;
    var arrayTime;
    arrayTime = strTime.split(":");
    var waktu;
    waktu = parseInt(arrayTime[indexArray]);
    return waktu;
}
function prosesUpah(jamMasuk, jamKeluar, menitMasuk, menitKeluar) {
    var _upahBiasa = 10000;
    var upahKerja;
    var upahLembur;
    var upahTotal;
    var keterangan;
    keterangan = document.getElementById("outKeterangan");
    var upah;
    if ((jamMasuk < 8) || (jamMasuk == 8 && menitMasuk == 0)) {
        if ((jamKeluar <= 14) && (jamKeluar > 8)) {
            upahKerja = (jamKeluar - 8) * _upahBiasa;
            keterangan.value = "Selamat! Anda tidak terlambat dan tidak lembur";
            upahLembur = 0;
        }
        else if (((jamKeluar < 20) && (jamKeluar > 8)) || ((jamKeluar == 20) && (menitKeluar == 0))) {
            upahKerja = (14 - 8) * _upahBiasa;
            upahLembur = (jamKeluar - 14) * (_upahBiasa * 2);
            keterangan.value = "Selamat! Anda tidak terlambat dan Anda lembur";
        }
        else {
            upahKerja = (14 - 8) * _upahBiasa;
            upahLembur = (20 - 14) * (_upahBiasa * 2);
            keterangan.value = "Maaf kantor sudah Tutup :(";
        }
    }
    else {
        upahKerja = 0;
        upahLembur = 0;
        keterangan.value = "Maaf Anda Terlambat";
    }
    upahTotal = upahKerja + upahLembur;
    upah = new Array();
    upah[0] = upahKerja;
    upah[1] = upahLembur;
    upah[2] = upahTotal;
    return upah;
}
function output(hasil, idElemen) {
    var txtOutput;
    txtOutput = document.getElementById(idElemen);
    txtOutput.value = hasil.toString();
}
function hitungUpah() {
    var jamMasuk;
    jamMasuk = inputTime('jamMasuk', 0);
    var menitMasuk;
    menitMasuk = inputTime('jamMasuk', 1);
    var jamKeluar;
    jamKeluar = inputTime('jamKeluar', 0);
    var menitKeluar;
    menitKeluar = inputTime('jamKeluar', 1);
    var upahArray;
    upahArray = prosesUpah(jamMasuk, jamKeluar, menitMasuk, menitKeluar);
    var upahKerja;
    var upahLembur;
    var upahTotal;
    upahKerja = upahArray[0];
    upahLembur = upahArray[1];
    upahTotal = upahArray[2];
    output(upahKerja, 'outUpahKerja');
    output(upahLembur, 'outUpahLembur');
    output(upahTotal, 'outUpahTotal');
}
