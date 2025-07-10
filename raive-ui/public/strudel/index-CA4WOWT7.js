import { C as noteToMidi, H as registerSound, I as getADSRValues, J as getSoundIndex, K as getAudioContext, L as getParamADSR, M as getVibratoOscillator, N as getPitchEnvelope, O as freqToMidi, P as Pattern, Q as getPlayableNoteValue } from "./index-Dtmgwx_K.js";
const gm = {
  gm_piano: [
    //'gm_acoustic_piano': [
    // Acoustic Grand Piano: Piano
    "0000_JCLive_sf2_file",
    "0000_FluidR3_GM_sf2_file",
    "0000_Aspirin_sf2_file",
    "0000_Chaos_sf2_file",
    "0000_GeneralUserGS_sf2_file",
    //0000_SBLive_sf2
    //0000_SoundBlasterOld_sf2
    "0001_FluidR3_GM_sf2_file",
    "0001_GeneralUserGS_sf2_file",
    //],
    //'gm_bright_acoustic_piano': [
    // Bright Acoustic Piano: Piano
    "0010_Aspirin_sf2_file",
    "0010_Chaos_sf2_file",
    "0010_FluidR3_GM_sf2_file",
    "0010_GeneralUserGS_sf2_file",
    "0010_JCLive_sf2_file",
    //0010_SBLive_sf2
    //0010_SoundBlasterOld_sf2
    "0011_Aspirin_sf2_file",
    "0011_FluidR3_GM_sf2_file",
    "0011_GeneralUserGS_sf2_file",
    "0012_GeneralUserGS_sf2_file",
    //],
    //'gm_electric_grand_piano': [
    // Electric Grand Piano: Piano
    "0020_Aspirin_sf2_file",
    "0020_Chaos_sf2_file",
    "0020_FluidR3_GM_sf2_file",
    "0020_GeneralUserGS_sf2_file",
    "0020_JCLive_sf2_file",
    //0020_SBLive_sf2
    //0020_SoundBlasterOld_sf2
    "0021_Aspirin_sf2_file",
    "0021_GeneralUserGS_sf2_file",
    // ?
    "0022_Aspirin_sf2_file",
    //],
    //'gm_honky_tonk_piano': [
    // Honky_tonk Piano: Piano
    "0030_Aspirin_sf2_file",
    "0030_Chaos_sf2_file",
    "0030_FluidR3_GM_sf2_file",
    "0030_GeneralUserGS_sf2_file",
    "0030_JCLive_sf2_file",
    //0030_SBLive_sf2
    //0030_SoundBlasterOld_sf2
    "0031_Aspirin_sf2_file",
    "0031_FluidR3_GM_sf2_file",
    "0031_GeneralUserGS_sf2_file"
    //0031_SoundBlasterOld_sf2 // pianos until her
  ],
  gm_epiano1: [
    // Electric Piano 1: Piano
    "0040_JCLive_sf2_file",
    "0040_FluidR3_GM_sf2_file",
    "0040_Aspirin_sf2_file",
    "0040_Chaos_sf2_file",
    "0040_GeneralUserGS_sf2_file",
    //0040_SBLive_sf2 // ?
    //0040_SoundBlasterOld_sf2 // ?
    "0041_FluidR3_GM_sf2_file",
    "0041_GeneralUserGS_sf2_file",
    //0041_SoundBlasterOld_sf2 // ?
    "0042_GeneralUserGS_sf2_file",
    "0043_GeneralUserGS_sf2_file",
    "0044_GeneralUserGS_sf2_file",
    //0045_GeneralUserGS_sf2_file // ?
    "0046_GeneralUserGS_sf2_file"
  ],
  gm_epiano2: [
    // Electric Piano 2: Piano
    "0050_JCLive_sf2_file",
    "0050_FluidR3_GM_sf2_file",
    "0050_Aspirin_sf2_file",
    "0050_Chaos_sf2_file",
    // ?
    "0050_GeneralUserGS_sf2_file",
    // cont
    //0050_SBLive_sf2 // ?
    //0050_SoundBlasterOld_sf2 // ?
    "0051_FluidR3_GM_sf2_file",
    "0051_GeneralUserGS_sf2_file",
    //0052_GeneralUserGS_sf2_file // ?
    "0053_GeneralUserGS_sf2_file",
    // normal piano...
    "0054_GeneralUserGS_sf2_file"
  ],
  gm_harpsichord: [
    // Harpsichord: Piano
    "0060_JCLive_sf2_file",
    "0060_FluidR3_GM_sf2_file",
    "0060_Aspirin_sf2_file",
    "0060_Chaos_sf2_file",
    "0060_GeneralUserGS_sf2_file",
    //0060_SBLive_sf2
    //0060_SoundBlasterOld_sf2
    "0061_Aspirin_sf2_file",
    "0061_GeneralUserGS_sf2_file",
    //0061_SoundBlasterOld_sf2
    "0062_GeneralUserGS_sf2_file"
  ],
  gm_clavinet: [
    // Clavinet: Piano
    "0070_JCLive_sf2_file",
    "0070_FluidR3_GM_sf2_file",
    "0070_Aspirin_sf2_file",
    "0070_Chaos_sf2_file"
    // 0070_GeneralUserGS_sf2_file // half broken
    //0070_SBLive_sf2
    //0070_SoundBlasterOld_sf2
    // 0071_GeneralUserGS_sf2_file // half broke
  ],
  gm_celesta: [
    // Celesta: Chromatic Percussion
    "0080_JCLive_sf2_file",
    "0080_Aspirin_sf2_file",
    "0080_Chaos_sf2_file",
    "0080_FluidR3_GM_sf2_file",
    "0080_GeneralUserGS_sf2_file",
    //0080_SBLive_sf2
    //0080_SoundBlasterOld_sf2
    "0081_FluidR3_GM_sf2_file"
    // 0081_GeneralUserGS_sf2_file // weird detuned
    //0081_SoundBlasterOld_sf
  ],
  gm_glockenspiel: [
    // Glockenspiel: Chromatic Percussion
    "0090_JCLive_sf2_file",
    "0090_Aspirin_sf2_file",
    "0090_Chaos_sf2_file",
    "0090_FluidR3_GM_sf2_file",
    "0090_GeneralUserGS_sf2_file"
    //0090_SBLive_sf2
    //0090_SoundBlasterOld_sf2
    //0091_SoundBlasterOld_sf
  ],
  gm_music_box: [
    // Music Box: Chromatic Percussion
    "0100_JCLive_sf2_file",
    "0100_Aspirin_sf2_file",
    "0100_Chaos_sf2_file",
    "0100_FluidR3_GM_sf2_file",
    "0100_GeneralUserGS_sf2_file"
    //0100_SBLive_sf2
    //0100_SoundBlasterOld_sf2
    // 0101_GeneralUserGS_sf2_file // weird detuned
    //0101_SoundBlasterOld_sf
  ],
  gm_vibraphone: [
    // Vibraphone: Chromatic Percussion
    "0110_JCLive_sf2_file",
    "0110_Aspirin_sf2_file",
    "0110_Chaos_sf2_file",
    "0110_FluidR3_GM_sf2_file",
    "0110_GeneralUserGS_sf2_file",
    //0110_SBLive_sf2
    //0110_SoundBlasterOld_sf2
    "0111_FluidR3_GM_sf2_file"
  ],
  gm_marimba: [
    // Marimba: Chromatic Percussion
    "0120_JCLive_sf2_file",
    "0120_Aspirin_sf2_file",
    "0120_Chaos_sf2_file",
    "0120_FluidR3_GM_sf2_file",
    "0120_GeneralUserGS_sf2_file",
    //0120_SBLive_sf2
    //0120_SoundBlasterOld_sf2
    "0121_FluidR3_GM_sf2_file",
    "0121_GeneralUserGS_sf2_file"
  ],
  gm_xylophone: [
    // Xylophone: Chromatic Percussion
    "0130_JCLive_sf2_file",
    "0130_Aspirin_sf2_file",
    "0130_Chaos_sf2_file",
    "0130_FluidR3_GM_sf2_file",
    "0130_GeneralUserGS_sf2_file",
    //0130_SBLive_sf2
    //0130_SoundBlasterOld_sf2
    "0131_FluidR3_GM_sf2_file"
  ],
  gm_tubular_bells: [
    // Tubular Bells: Chromatic Percussion
    "0140_JCLive_sf2_file",
    "0140_Aspirin_sf2_file",
    // 0140_Chaos_sf2_file // same as aspirin?
    "0140_FluidR3_GM_sf2_file",
    "0140_GeneralUserGS_sf2_file",
    //0140_SBLive_sf2
    //0140_SoundBlasterOld_sf2
    "0141_FluidR3_GM_sf2_file",
    //0141_GeneralUserGS_sf2_file
    "0142_GeneralUserGS_sf2_file"
    // 0143_GeneralUserGS_sf2_file // bugg
  ],
  gm_dulcimer: [
    // Dulcimer: Chromatic Percussion
    "0150_Aspirin_sf2_file",
    "0150_Chaos_sf2_file",
    "0150_FluidR3_GM_sf2_file",
    "0150_GeneralUserGS_sf2_file",
    // 0150_JCLive_sf2_file // detuned???
    //0150_SBLive_sf2
    //0150_SoundBlasterOld_sf2
    "0151_FluidR3_GM_sf2_file"
  ],
  gm_drawbar_organ: [
    // Drawbar Organ: Organ
    "0160_JCLive_sf2_file",
    "0160_Aspirin_sf2_file",
    "0160_Chaos_sf2_file",
    "0160_FluidR3_GM_sf2_file",
    "0160_GeneralUserGS_sf2_file",
    //0160_SBLive_sf2
    //0160_SoundBlasterOld_sf2
    "0161_Aspirin_sf2_file",
    "0161_FluidR3_GM_sf2_file"
    //0161_SoundBlasterOld_sf
  ],
  gm_percussive_organ: [
    // Percussive Organ: Organ
    "0170_JCLive_sf2_file",
    "0170_Aspirin_sf2_file",
    "0170_Chaos_sf2_file",
    "0170_FluidR3_GM_sf2_file",
    // 0170_GeneralUserGS_sf2_file // repitched
    //0170_SBLive_sf2
    //0170_SoundBlasterOld_sf2
    "0171_FluidR3_GM_sf2_file",
    // 0171_GeneralUserGS_sf2_file  // repitched
    "0172_FluidR3_GM_sf2_file"
  ],
  gm_rock_organ: [
    // Rock Organ: Organ
    "0180_JCLive_sf2_file",
    "0180_Aspirin_sf2_file",
    "0180_Chaos_sf2_file",
    "0180_FluidR3_GM_sf2_file",
    "0180_GeneralUserGS_sf2_file"
    //0180_SBLive_sf2
    //0180_SoundBlasterOld_sf2
    //0181_Aspirin_sf2_file // flute
    //0181_GeneralUserGS_sf2_file // marimbalike
    //0181_SoundBlasterOld_sf
  ],
  gm_church_organ: [
    // Church Organ: Organ
    "0190_JCLive_sf2_file",
    "0190_Aspirin_sf2_file",
    "0190_Chaos_sf2_file",
    "0190_FluidR3_GM_sf2_file",
    "0190_GeneralUserGS_sf2_file"
    //0190_SBLive_sf2
    //0190_SoundBlasterOld_sf2
    //0191_Aspirin_sf2_file // string??
    //0191_GeneralUserGS_sf2_file // weird organ
    //0191_SoundBlasterOld_sf
  ],
  gm_reed_organ: [
    // Reed Organ: Organ
    "0200_JCLive_sf2_file",
    "0200_Aspirin_sf2_file",
    "0200_Chaos_sf2_file",
    "0200_FluidR3_GM_sf2_file",
    "0200_GeneralUserGS_sf2_file",
    //0200_SBLive_sf2
    //0200_SoundBlasterOld_sf2
    "0201_Aspirin_sf2_file",
    "0201_FluidR3_GM_sf2_file",
    "0201_GeneralUserGS_sf2_file"
    //0201_SoundBlasterOld_sf2
    //0210_Aspirin_sf2_file // buggy
    //0210_Chaos_sf2_file // bugg
  ],
  gm_accordion: [
    // Accordion: Organ
    "0210_JCLive_sf2_file",
    "0210_FluidR3_GM_sf2_file",
    "0210_GeneralUserGS_sf2_file",
    //0210_SBLive_sf2
    //0210_SoundBlasterOld_sf2
    "0211_Aspirin_sf2_file",
    "0211_FluidR3_GM_sf2_file",
    "0211_GeneralUserGS_sf2_file",
    //0211_SoundBlasterOld_sf2
    "0212_GeneralUserGS_sf2_file"
  ],
  gm_harmonica: [
    // Harmonica: Organ
    "0220_FluidR3_GM_sf2_file",
    "0220_JCLive_sf2_file",
    "0220_Aspirin_sf2_file",
    "0220_Chaos_sf2_file",
    "0220_GeneralUserGS_sf2_file",
    //0220_SBLive_sf2
    //0220_SoundBlasterOld_sf2
    "0221_FluidR3_GM_sf2_file"
  ],
  gm_bandoneon: [
    // Tango Accordion: Organ
    "0230_Aspirin_sf2_file",
    "0230_JCLive_sf2_file",
    "0230_Chaos_sf2_file",
    "0230_FluidR3_GM_sf2_file",
    "0230_GeneralUserGS_sf2_file",
    //0230_SBLive_sf2
    //0230_SoundBlasterOld_sf2
    "0231_FluidR3_GM_sf2_file",
    "0231_GeneralUserGS_sf2_file",
    "0231_JCLive_sf2_file",
    //0231_SoundBlasterOld_sf2
    "0232_FluidR3_GM_sf2_file",
    "0233_FluidR3_GM_sf2_file"
  ],
  gm_acoustic_guitar_nylon: [
    // Acoustic Guitar (nylon): Guitar
    "0240_JCLive_sf2_file",
    "0240_Aspirin_sf2_file",
    "0240_Chaos_sf2_file",
    "0240_FluidR3_GM_sf2_file",
    "0240_GeneralUserGS_sf2_file",
    "0240_LK_Godin_Nylon_SF2_file",
    //0240_SBLive_sf2
    //0240_SoundBlasterOld_sf2
    // 0241_GeneralUserGS_sf2_file // organ like
    "0241_JCLive_sf2_file",
    "0242_JCLive_sf2_file",
    "0243_JCLive_sf2_file"
  ],
  gm_acoustic_guitar_steel: [
    // Acoustic Guitar (steel): Guitar
    "0253_Acoustic_Guitar_sf2_file",
    "0250_Aspirin_sf2_file",
    "0250_Chaos_sf2_file",
    "0250_FluidR3_GM_sf2_file",
    "0250_GeneralUserGS_sf2_file",
    // 0250_JCLive_sf2_file // detuned
    "0250_LK_AcousticSteel_SF2_file",
    //0250_SBLive_sf2
    //0250_SoundBlasterOld_sf2
    //0251_Acoustic_Guitar_sf2_file // detuned?
    // 0251_GeneralUserGS_sf2_file // broken: missing pitches
    // 0252_Acoustic_Guitar_sf2_file // detuned..
    // 0252_GeneralUserGS_sf2_file // broken: missing pitches
    "0253_Acoustic_Guitar_sf2_file",
    "0253_GeneralUserGS_sf2_file",
    "0254_Acoustic_Guitar_sf2_file",
    "0254_GeneralUserGS_sf2_file"
    //0255_GeneralUserGS_sf2_file // no guitar.
  ],
  gm_electric_guitar_jazz: [
    // Electric Guitar (jazz): Guitar
    "0260_JCLive_sf2_file",
    "0260_Aspirin_sf2_file",
    "0260_Chaos_sf2_file",
    "0260_FluidR3_GM_sf2_file",
    "0260_GeneralUserGS_sf2_file",
    //0260_SBLive_sf2
    //0260_SoundBlasterOld_sf2
    "0260_Stratocaster_sf2_file",
    "0261_GeneralUserGS_sf2_file",
    //0261_SoundBlasterOld_sf2
    "0261_Stratocaster_sf2_file",
    "0262_Stratocaster_sf2_file"
  ],
  gm_electric_guitar_clean: [
    // Electric Guitar (clean): Guitar
    "0270_Aspirin_sf2_file",
    "0270_Chaos_sf2_file",
    "0270_FluidR3_GM_sf2_file",
    "0270_GeneralUserGS_sf2_file",
    //0270_Gibson_Les_Paul_sf2_file // detuned
    // 0270_JCLive_sf2_file // broken: missing notes
    "0270_SBAWE32_sf2_file",
    //0270_SBLive_sf2
    //0270_SoundBlasterOld_sf2
    "0270_Stratocaster_sf2_file",
    "0271_GeneralUserGS_sf2_file",
    "0271_Stratocaster_sf2_file",
    "0272_Stratocaster_sf2_file"
  ],
  gm_electric_guitar_muted: [
    // Electric Guitar (muted): Guitar
    "0280_Aspirin_sf2_file",
    "0280_Chaos_sf2_file",
    // 0280_FluidR3_GM_sf2_file // broken: wrong notes
    "0280_GeneralUserGS_sf2_file",
    "0280_JCLive_sf2_file",
    //0280_LesPaul_sf2 // missing
    "0280_LesPaul_sf2_file",
    "0280_SBAWE32_sf2_file",
    //0280_SBLive_sf2
    //0280_SoundBlasterOld_sf2
    "0281_Aspirin_sf2_file",
    "0281_FluidR3_GM_sf2_file",
    "0281_GeneralUserGS_sf2_file",
    "0282_FluidR3_GM_sf2_file"
    // 0282_GeneralUserGS_sf2_file // broken: missing notes
    // 0283_GeneralUserGS_sf2_file // missin
  ],
  gm_overdriven_guitar: [
    // Overdriven Guitar: Guitar
    "0290_FluidR3_GM_sf2_file",
    "0290_Aspirin_sf2_file",
    "0290_Chaos_sf2_file",
    "0290_GeneralUserGS_sf2_file",
    //0290_JCLive_sf2_file // detuned....
    //0290_LesPaul_sf2 // broken
    "0290_LesPaul_sf2_file",
    "0290_SBAWE32_sf2_file",
    //0290_SBLive_sf2
    //0290_SoundBlasterOld_sf2
    // 0291_Aspirin_sf2_file // broken
    // 0291_LesPaul_sf2 // broken
    "0291_LesPaul_sf2_file",
    "0291_SBAWE32_sf2_file",
    //0291_SoundBlasterOld_sf2
    "0292_Aspirin_sf2_file",
    // 0292_LesPaul_sf2 // broken
    "0292_LesPaul_sf2_file"
  ],
  gm_distortion_guitar: [
    // Distortion Guitar: Guitar
    "0300_FluidR3_GM_sf2_file",
    "0300_Aspirin_sf2_file",
    "0300_Chaos_sf2_file",
    "0300_GeneralUserGS_sf2_file",
    // 0300_JCLive_sf2_file // broken
    // 0300_LesPaul_sf2 // broken
    "0300_LesPaul_sf2_file",
    //0300_SBAWE32_sf2_file // _2 octave
    //0300_SBLive_sf2
    //0300_SoundBlasterOld_sf2
    // 0301_Aspirin_sf2_file // missing
    //0301_FluidR3_GM_sf2_file // weird broken bell
    // 0301_GeneralUserGS_sf2_file // broken
    // 0301_JCLive_sf2_file // broken
    // 0301_LesPaul_sf2 // missing
    // 0301_LesPaul_sf2_file // + 1 oct?
    "0302_Aspirin_sf2_file",
    // 0302_GeneralUserGS_sf2_file // not a guitar..
    //0302_JCLive_sf2_file // broken...
    // 0303_Aspirin_sf2_file // guitar harmonic??
    "0304_Aspirin_sf2_file"
  ],
  gm_guitar_harmonics: [
    // Guitar Harmonics: Guitar
    "0310_Aspirin_sf2_file",
    "0310_FluidR3_GM_sf2_file",
    "0310_Chaos_sf2_file"
    //0310_GeneralUserGS_sf2_file // weird..
    // 0310_JCLive_sf2_file // weird
    //0310_LesPaul_sf2 // missing
    //0310_LesPaul_sf2_file // wrong pitches
    //0310_SBAWE32_sf2_file // wrong pitches
    //0310_SBLive_sf2
    //0310_SoundBlasterOld_sf2
    //0311_FluidR3_GM_sf2_file // knackt
    //0311_GeneralUserGS_sf2_file // wrong note
  ],
  gm_acoustic_bass: [
    // Acoustic Bass: Bass
    "0320_JCLive_sf2_file",
    "0320_FluidR3_GM_sf2_file",
    "0320_Aspirin_sf2_file",
    "0320_Chaos_sf2_file"
    // 0320_GeneralUserGS_sf2_file // missing notes
    //0320_SBLive_sf2
    //0320_SoundBlasterOld_sf2
    // 0321_GeneralUserGS_sf2_file // nice sound but missing notes
    // 0322_GeneralUserGS_sf2_file // missing note
  ],
  gm_electric_bass_finger: [
    // Electric Bass (finger): Bass
    "0330_JCLive_sf2_file",
    "0330_FluidR3_GM_sf2_fible",
    "0330_Aspirin_sf2_file",
    //0330_Chaos_sf2_file // same as last
    "0330_GeneralUserGS_sf2_file"
    //0330_SBLive_sf2
    //0330_SoundBlasterOld_sf2
    //0331_GeneralUserGS_sf2_file // knackt
    // 0332_GeneralUserGS_sf2_file // missin
  ],
  gm_electric_bass_pick: [
    // Electric Bass (pick): Bass
    "0340_JCLive_sf2_file",
    "0340_FluidR3_GM_sf2_file",
    "0340_Aspirin_sf2_file",
    //0340_Chaos_sf2_file // same as last
    "0340_GeneralUserGS_sf2_file",
    //0340_SBLive_sf2
    //0340_SoundBlasterOld_sf2
    "0341_Aspirin_sf2_file"
    //0341_GeneralUserGS_sf2_file // knack
  ],
  gm_fretless_bass: [
    // Fretless Bass: Bass
    "0350_Aspirin_sf2_file",
    // 0350_Chaos_sf2_file // same as last
    //0350_FluidR3_GM_sf2_file // knackt
    //0350_GeneralUserGS_sf2_file // _1 oct + knackt
    "0350_JCLive_sf2_file"
    //0350_SBLive_sf2
    //0350_SoundBlasterOld_sf2
    //0351_GeneralUserGS_sf2_file // missin
  ],
  gm_slap_bass_1: [
    // Slap Bass 1: Bass
    "0360_Aspirin_sf2_file",
    "0360_JCLive_sf2_file",
    "0360_FluidR3_GM_sf2_file",
    "0360_Chaos_sf2_file"
    //0360_GeneralUserGS_sf2_file // _1 oct
    //0360_SBLive_sf2
    //0360_SoundBlasterOld_sf2
    //0361_GeneralUserGS_sf2_file // missin
  ],
  gm_slap_bass_2: [
    // Slap Bass 2: Bass
    "0370_Aspirin_sf2_file",
    // 0370_Chaos_sf2_file // same as last
    "0370_FluidR3_GM_sf2_file",
    "0370_GeneralUserGS_sf2_fil e",
    "0370_JCLive_sf2_file"
    //0370_SBLive_sf2
    //0370_SoundBlasterOld_sf2
    //0371_GeneralUserGS_sf2_file // missing
    //0372_GeneralUserGS_sf2_file // detuned
    //0385_GeneralUserGS_sf2_file // missin
  ],
  gm_synth_bass_1: [
    // Synth Bass 1: Bass
    "0380_Aspirin_sf2_file",
    "0380_Chaos_sf2_file",
    "0380_FluidR3_GM_sf2_file",
    // 0380_GeneralUserGS_sf2_file // laut
    "0380_JCLive_sf2_file",
    //0380_SBLive_sf2
    //0380_SoundBlasterOld_sf2
    "0381_FluidR3_GM_sf2_file",
    "0381_GeneralUserGS_sf2_file",
    //0382_FluidR3_GM_sf2_file // kein synth bass
    "0382_GeneralUserGS_sf2_file",
    "0383_GeneralUserGS_sf2_file",
    "0384_GeneralUserGS_sf2_file",
    //0386_GeneralUserGS_sf2_file // knackt
    "0387_GeneralUserGS_sf2_file"
  ],
  gm_synth_bass_2: [
    // Synth Bass 2: Bass
    "0390_Aspirin_sf2_file",
    // 0390_Chaos_sf2_file // same as last
    "0390_FluidR3_GM_sf2_file",
    "0390_GeneralUserGS_sf2_file",
    "0390_JCLive_sf2_file",
    //0390_SBLive_sf2
    //0390_SoundBlasterOld_sf2
    "0391_FluidR3_GM_sf2_file",
    // 0391_GeneralUserGS_sf2_file // missing
    //0391_SoundBlasterOld_sf2
    "0392_FluidR3_GM_sf2_file",
    //0392_GeneralUserGS_sf2_file // kein synth und _1oct
    "0393_GeneralUserGS_sf2_file"
  ],
  gm_violin: [
    // Violin: Strings
    "0400_Aspirin_sf2_file",
    "0400_Chaos_sf2_file",
    "0400_JCLive_sf2_file",
    "0400_FluidR3_GM_sf2_file",
    "0400_GeneralUserGS_sf2_file",
    //0400_SBLive_sf2
    //0400_SoundBlasterOld_sf2
    "0401_Aspirin_sf2_file",
    "0401_FluidR3_GM_sf2_file",
    "0401_GeneralUserGS_sf2_file",
    "0402_GeneralUserGS_sf2_file"
  ],
  gm_viola: [
    // Viola: Strings
    "0410_Aspirin_sf2_file",
    // 0410_Chaos_sf2_file // laut und sehr unstringy
    "0410_FluidR3_GM_sf2_file",
    "0410_GeneralUserGS_sf2_file",
    "0410_JCLive_sf2_file",
    //0410_SBLive_sf2
    //0410_SoundBlasterOld_sf2
    "0411_FluidR3_GM_sf2_file"
  ],
  gm_cello: [
    // Cello: Strings
    "0420_Aspirin_sf2_file",
    // 0420_Chaos_sf2_file // kein cello und laut
    "0420_FluidR3_GM_sf2_file",
    "0420_GeneralUserGS_sf2_file",
    "0420_JCLive_sf2_file",
    //0420_SBLive_sf2
    //0420_SoundBlasterOld_sf2
    "0421_FluidR3_GM_sf2_file",
    "0421_GeneralUserGS_sf2_file"
  ],
  gm_contrabass: [
    // Contrabass: Strings
    "0430_Aspirin_sf2_file",
    "0430_Chaos_sf2_file",
    // 0430_FluidR3_GM_sf2_file // missing notes
    "0430_GeneralUserGS_sf2_file"
    //0430_JCLive_sf2_file // _1 oct und meh
    //0430_SBLive_sf2
    //0430_SoundBlasterOld_sf2
    // 0431_FluidR3_GM_sf2_file // missing note
  ],
  gm_tremolo_strings: [
    // Tremolo Strings: Strings
    "0440_Aspirin_sf2_file",
    "0440_Chaos_sf2_file",
    //0440_FluidR3_GM_sf2_file // huuuge
    "0440_GeneralUserGS_sf2_file",
    "0440_JCLive_sf2_file",
    //0440_SBLive_sf2
    //0440_SoundBlasterOld_sf2
    "0441_GeneralUserGS_sf2_file",
    "0442_GeneralUserGS_sf2_file"
  ],
  gm_pizzicato_strings: [
    // Pizzicato Strings: Strings
    "0450_Aspirin_sf2_file",
    "0450_Chaos_sf2_file",
    "0450_FluidR3_GM_sf2_file",
    "0450_GeneralUserGS_sf2_file",
    "0450_JCLive_sf2_file",
    //0450_SBLive_sf2
    //0450_SoundBlasterOld_sf2
    "0451_FluidR3_GM_sf2_file"
  ],
  gm_orchestral_harp: [
    // Orchestral Harp: Strings
    "0460_Aspirin_sf2_file",
    // 0460_Chaos_sf2_file // knackt
    "0460_FluidR3_GM_sf2_file",
    "0460_GeneralUserGS_sf2_file",
    "0460_JCLive_sf2_file",
    //0460_SBLive_sf2
    //0460_SoundBlasterOld_sf2
    "0461_FluidR3_GM_sf2_file"
  ],
  gm_timpani: [
    // Timpani: Strings
    "0470_Aspirin_sf2_file",
    "0470_Chaos_sf2_file",
    "0470_FluidR3_GM_sf2_file",
    "0470_GeneralUserGS_sf2_file",
    // 0470_JCLive_sf2_file // wrong pitches
    //0470_SBLive_sf2
    //0470_SoundBlasterOld_sf2
    "0471_FluidR3_GM_sf2_file",
    "0471_GeneralUserGS_sf2_file"
  ],
  gm_string_ensemble_1: [
    // String Ensemble 1: Ensemble
    "0480_Aspirin_sf2_file",
    "0480_Chaos_sf2_file",
    "0480_FluidR3_GM_sf2_file",
    "0480_GeneralUserGS_sf2_file",
    "0480_JCLive_sf2_file",
    //0480_SBLive_sf2
    //0480_SoundBlasterOld_sf2
    // these dont work..
    //04810_GeneralUserGS_sf2_file // missing notes + brass
    //04811_GeneralUserGS_sf2_file  // missing notes + brass
    //04812_GeneralUserGS_sf2_file
    //04813_GeneralUserGS_sf2_file
    //04814_GeneralUserGS_sf2_file
    //04815_GeneralUserGS_sf2_file
    //04816_GeneralUserGS_sf2_file
    //04817_GeneralUserGS_sf2_file
    "0481_Aspirin_sf2_file",
    "0481_FluidR3_GM_sf2_file",
    "0481_GeneralUserGS_sf2_file",
    "0482_Aspirin_sf2_file",
    "0482_GeneralUserGS_sf2_file",
    "0483_GeneralUserGS_sf2_file"
    // another block of buggyness:
    //0484_GeneralUserGS_sf2_file // keys?! + knackt
    //0485_GeneralUserGS_sf2_file // missing notes
    //0486_GeneralUserGS_sf2_file
    //0487_GeneralUserGS_sf2_file
    //0488_GeneralUserGS_sf2_file
    //0489_GeneralUserGS_sf2_fil
  ],
  gm_string_ensemble_2: [
    // String Ensemble 2: Ensemble
    "0490_Aspirin_sf2_file",
    "0490_Chaos_sf2_file",
    "0490_FluidR3_GM_sf2_file",
    "0490_GeneralUserGS_sf2_file",
    "0490_JCLive_sf2_file",
    //0490_SBLive_sf2
    //0490_SoundBlasterOld_sf2
    "0491_GeneralUserGS_sf2_file",
    "0492_GeneralUserGS_sf2_file"
  ],
  gm_synth_strings_1: [
    // Synth Strings 1: Ensemble
    "0500_Aspirin_sf2_file",
    // 0500_Chaos_sf2_file // same as above
    //0500_FluidR3_GM_sf2_file // detune + knack
    "0500_GeneralUserGS_sf2_file",
    "0500_JCLive_sf2_file",
    //0500_SBLive_sf2
    //0500_SoundBlasterOld_sf2
    "0501_FluidR3_GM_sf2_file",
    // 0501_GeneralUserGS_sf2_file // crackles
    // 0502_FluidR3_GM_sf2_file // missing
    "0502_GeneralUserGS_sf2_file",
    "0503_FluidR3_GM_sf2_file",
    // 0504_FluidR3_GM_sf2_file // missing
    "0505_FluidR3_GM_sf2_file"
  ],
  gm_synth_strings_2: [
    // Synth Strings 2: Ensemble
    "0510_Aspirin_sf2_file",
    "0510_Chaos_sf2_file",
    // 0510_FluidR3_GM_sf2_file // detune + crackle
    "0510_GeneralUserGS_sf2_file",
    //0510_JCLive_sf2_file // laarge and meh
    //0510_SBLive_sf2 // missing
    //0510_SoundBlasterOld_sf2
    "0511_GeneralUserGS_sf2_file"
    //0511_SoundBlasterOld_sf
  ],
  gm_choir_aahs: [
    // Choir Aahs: Ensemble
    "0520_Aspirin_sf2_file",
    "0520_Chaos_sf2_file",
    "0520_FluidR3_GM_sf2_file",
    "0520_GeneralUserGS_sf2_file",
    "0520_JCLive_sf2_file",
    //0520_SBLive_sf2
    "0520_Soul_Ahhs_sf2_file",
    //0520_SoundBlasterOld_sf2
    "0521_FluidR3_GM_sf2_file",
    "0521_Soul_Ahhs_sf2_file",
    //0521_SoundBlasterOld_sf2
    "0522_Soul_Ahhs_sf2_file"
  ],
  gm_voice_oohs: [
    // Voice Oohs: Ensemble
    "0530_Aspirin_sf2_file",
    "0530_Chaos_sf2_file",
    "0530_FluidR3_GM_sf2_file",
    "0530_GeneralUserGS_sf2_file",
    //0530_JCLive_sf2_file // same as above
    //0530_SBLive_sf2
    // 0530_Soul_Ahhs_sf2_file // not ooh
    //0530_SoundBlasterOld_sf2
    "0531_FluidR3_GM_sf2_file",
    // 0531_GeneralUserGS_sf2_file // ends crackle
    "0531_JCLive_sf2_file"
    //0531_SoundBlasterOld_sf
  ],
  gm_synth_choir: [
    // Synth Choir: Ensemble
    "0540_Aspirin_sf2_file",
    "0540_Chaos_sf2_file",
    "0540_FluidR3_GM_sf2_file",
    "0540_GeneralUserGS_sf2_file",
    //0540_JCLive_sf2_file // large + crackles
    //0540_SBLive_sf2
    //0540_SoundBlasterOld_sf2
    "0541_FluidR3_GM_sf2_file"
  ],
  gm_orchestra_hit: [
    // Orchestra Hit: Ensemble
    "0550_Aspirin_sf2_file",
    "0550_Chaos_sf2_file",
    "0550_FluidR3_GM_sf2_file",
    "0550_GeneralUserGS_sf2_file",
    //0550_JCLive_sf2_file // same as above
    //0550_SBLive_sf2
    //0550_SoundBlasterOld_sf2
    //0551_Aspirin_sf2_file // not an orch hit..
    "0551_FluidR3_GM_sf2_file"
  ],
  gm_trumpet: [
    // Trumpet: Brass
    "0560_FluidR3_GM_sf2_file",
    "0560_JCLive_sf2_file",
    "0560_Aspirin_sf2_file",
    "0560_Chaos_sf2_file"
    //0560_GeneralUserGS_sf2_file // _1 oct
    //0560_SBLive_sf2
    //0560_SoundBlasterOld_sf
  ],
  gm_trombone: [
    // Trombone: Brass
    "0570_Aspirin_sf2_file",
    "0570_Chaos_sf2_file",
    "0570_FluidR3_GM_sf2_file",
    "0570_GeneralUserGS_sf2_file",
    //0570_JCLive_sf2_file // _1oct
    //0570_SBLive_sf2
    //0570_SoundBlasterOld_sf2
    "0571_GeneralUserGS_sf2_file"
  ],
  gm_tuba: [
    // Tuba: Brass
    "0580_FluidR3_GM_sf2_file",
    "0580_Aspirin_sf2_file",
    "0580_Chaos_sf2_file",
    "0580_GeneralUserGS_sf2_file"
    //0580_JCLive_sf2_file // _1oct
    //0580_SBLive_sf2
    //0580_SoundBlasterOld_sf2
    //0581_GeneralUserGS_sf2_file // missin
  ],
  gm_muted_trumpet: [
    // Muted Trumpet: Brass
    "0590_JCLive_sf2_file",
    "0590_Aspirin_sf2_file",
    "0590_Chaos_sf2_file",
    "0590_FluidR3_GM_sf2_file",
    "0590_GeneralUserGS_sf2_file"
    //0590_SBLive_sf2
    //0590_SoundBlasterOld_sf2
    // 0591_GeneralUserGS_sf2_file // missin
  ],
  gm_french_horn: [
    // French Horn: Brass
    "0600_Aspirin_sf2_file",
    //0600_Chaos_sf2_file // weird jumps
    "0600_FluidR3_GM_sf2_file",
    "0600_GeneralUserGS_sf2_file",
    "0600_JCLive_sf2_file",
    //0600_SBLive_sf2
    //0600_SoundBlasterOld_sf2
    "0601_FluidR3_GM_sf2_file"
    //0601_GeneralUserGS_sf2_file // tiny crackles
    // 0602_GeneralUserGS_sf2_file // bad gain diffs
    // 0603_GeneralUserGS_sf2_file // tiny crackle
  ],
  gm_brass_section: [
    // Brass Section: Brass
    "0610_JCLive_sf2_file",
    "0610_Aspirin_sf2_file",
    "0610_Chaos_sf2_file",
    "0610_FluidR3_GM_sf2_file",
    "0610_GeneralUserGS_sf2_file"
    //0610_SBLive_sf2
    //0610_SoundBlasterOld_sf2
    // 0611_GeneralUserGS_sf2_file // missing sounds
    // 0612_GeneralUserGS_sf2_file
    //0613_GeneralUserGS_sf2_file // _1 oct
    // 0614_GeneralUserGS_sf2_file // missing sounds
    // 0615_GeneralUserGS_sf2_file // missing sound
  ],
  gm_synth_brass_1: [
    // Synth Brass 1: Brass
    "0620_Aspirin_sf2_file",
    //0620_Chaos_sf2_file // weird gain diff
    "0620_FluidR3_GM_sf2_file",
    //0620_GeneralUserGS_sf2_file // loooud
    // 0620_JCLive_sf2_file // weird gain diff
    //0620_SBLive_sf2
    //0620_SoundBlasterOld_sf2
    "0621_Aspirin_sf2_file",
    "0621_FluidR3_GM_sf2_file"
    // 0621_GeneralUserGS_sf2_file // detune + loooud
    //0622_FluidR3_GM_sf2_file // loud..
    //0622_GeneralUserGS_sf2_file // loud + crackle
  ],
  gm_synth_brass_2: [
    // Synth Brass 2: Brass
    "0630_Aspirin_sf2_file",
    "0630_Chaos_sf2_file",
    "0630_FluidR3_GM_sf2_file",
    //0630_GeneralUserGS_sf2_file // detune + looud
    "0630_JCLive_sf2_file",
    //0630_SBLive_sf2
    //0630_SoundBlasterOld_sf2
    // 0631_Aspirin_sf2_file // looud + detune + gain diffs
    "0631_FluidR3_GM_sf2_file",
    //0631_GeneralUserGS_sf2_file // crackles
    "0632_FluidR3_GM_sf2_file",
    "0633_FluidR3_GM_sf2_file"
  ],
  gm_soprano_sax: [
    // Soprano Sax: Reed
    "0640_JCLive_sf2_file",
    "0640_Aspirin_sf2_file",
    "0640_Chaos_sf2_file",
    "0640_FluidR3_GM_sf2_file",
    // 0640_GeneralUserGS_sf2_file // crackles
    //0640_SBLive_sf2
    //0640_SoundBlasterOld_sf2
    "0641_FluidR3_GM_sf2_file"
  ],
  gm_alto_sax: [
    // Alto Sax: Reed
    //0650_Aspirin_sf2_file // this is not an alto sax
    "0650_JCLive_sf2_file",
    "0650_Chaos_sf2_file",
    "0650_FluidR3_GM_sf2_file",
    "0650_GeneralUserGS_sf2_file",
    //0650_SBLive_sf2
    //0650_SoundBlasterOld_sf2
    "0651_Aspirin_sf2_file",
    "0651_FluidR3_GM_sf2_file"
  ],
  gm_tenor_sax: [
    // Tenor Sax: Reed
    "0660_JCLive_sf2_file",
    "0660_Aspirin_sf2_file",
    "0660_Chaos_sf2_file",
    //0660_FluidR3_GM_sf2_file // weird pitches
    "0660_GeneralUserGS_sf2_file"
    //0660_SBLive_sf2
    //0660_SoundBlasterOld_sf2
    // 0661_FluidR3_GM_sf2_file // weird pitches
    // 0661_GeneralUserGS_sf2_file // missin
  ],
  gm_baritone_sax: [
    // Baritone Sax: Reed
    "0670_JCLive_sf2_file",
    "0670_Aspirin_sf2_file",
    "0670_Chaos_sf2_file",
    "0670_FluidR3_GM_sf2_file",
    "0670_GeneralUserGS_sf2_file",
    //0670_SBLive_sf2
    //0670_SoundBlasterOld_sf2
    "0671_FluidR3_GM_sf2_file"
  ],
  gm_oboe: [
    // Oboe: Reed
    //0680_Aspirin_sf2_file // tiny crackles
    "0680_JCLive_sf2_file",
    "0680_Chaos_sf2_file",
    "0680_FluidR3_GM_sf2_file",
    "0680_GeneralUserGS_sf2_file",
    //0680_SBLive_sf2
    //0680_SoundBlasterOld_sf2
    "0681_FluidR3_GM_sf2_file"
  ],
  gm_english_horn: [
    // English Horn: Reed
    "0690_JCLive_sf2_file",
    "0690_Aspirin_sf2_file",
    //0690_Chaos_sf2_file // detuned
    "0690_FluidR3_GM_sf2_file",
    //0690_GeneralUserGS_sf2_file // +1 oct
    //0690_SBLive_sf2
    //0690_SoundBlasterOld_sf2
    "0691_FluidR3_GM_sf2_file"
  ],
  gm_bassoon: [
    // Bassoon: Reed
    "0700_JCLive_sf2_file",
    //0700_Aspirin_sf2_file // detune + gain diffs
    // 0700_Chaos_sf2_file // detune + crackles
    "0700_FluidR3_GM_sf2_file",
    "0700_GeneralUserGS_sf2_file",
    //0700_SBLive_sf2
    //0700_SoundBlasterOld_sf2
    "0701_FluidR3_GM_sf2_file"
    //0701_GeneralUserGS_sf2_file // missin
  ],
  gm_clarinet: [
    // Clarinet: Reed
    "0710_JCLive_sf2_file",
    "0710_Aspirin_sf2_file",
    "0710_Chaos_sf2_file",
    "0710_FluidR3_GM_sf2_file",
    "0710_GeneralUserGS_sf2_file",
    //0710_SBLive_sf2
    //0710_SoundBlasterOld_sf2
    "0711_FluidR3_GM_sf2_file"
  ],
  gm_piccolo: [
    // Piccolo: Pipe
    "0720_JCLive_sf2_file",
    "0720_Aspirin_sf2_file",
    // 0720_Chaos_sf2_file // not a piccolo
    "0720_FluidR3_GM_sf2_file",
    "0720_GeneralUserGS_sf2_file",
    //0720_SBLive_sf2
    //0720_SoundBlasterOld_sf2
    "0721_FluidR3_GM_sf2_file"
    //0721_SoundBlasterOld_sf
  ],
  gm_flute: [
    // Flute: Pipe
    "0730_JCLive_sf2_file",
    "0730_Aspirin_sf2_file",
    //0730_Chaos_sf2_file // etune
    "0730_FluidR3_GM_sf2_file",
    "0730_GeneralUserGS_sf2_file",
    //0730_SBLive_sf2
    //0730_SoundBlasterOld_sf2
    //0731_Aspirin_sf2_file // not a flute
    "0731_FluidR3_GM_sf2_file"
    //0731_SoundBlasterOld_sf
  ],
  gm_recorder: [
    // Recorder: Pipe
    "0740_JCLive_sf2_file",
    "0740_Aspirin_sf2_file",
    "0740_Chaos_sf2_file",
    "0740_FluidR3_GM_sf2_file",
    "0740_GeneralUserGS_sf2_file"
    //0740_SBLive_sf2
    //0740_SoundBlasterOld_sf2
    // 0741_GeneralUserGS_sf2_file // missin
  ],
  gm_pan_flute: [
    // Pan Flute: Pipe
    "0750_JCLive_sf2_file",
    "0750_FluidR3_GM_sf2_file",
    "0750_Aspirin_sf2_file",
    "0750_Chaos_sf2_file",
    "0750_GeneralUserGS_sf2_file",
    //0750_SBLive_sf2
    //0750_SoundBlasterOld_sf2
    "0751_Aspirin_sf2_file",
    "0751_FluidR3_GM_sf2_file",
    "0751_GeneralUserGS_sf2_file"
    //0751_SoundBlasterOld_sf
  ],
  gm_blown_bottle: [
    // Blown bottle: Pipe
    "0760_FluidR3_GM_sf2_file",
    "0760_JCLive_sf2_file",
    // 0760_Aspirin_sf2_file // same as below w crackle
    "0760_Chaos_sf2_file",
    "0760_GeneralUserGS_sf2_file",
    //0760_SBLive_sf2
    //0760_SoundBlasterOld_sf2
    "0761_FluidR3_GM_sf2_file"
    // 0761_GeneralUserGS_sf2_file // missing
    //0761_SoundBlasterOld_sf2
    // 0762_GeneralUserGS_sf2_file // missin
  ],
  gm_shakuhachi: [
    // Shakuhachi: Pipe
    "0770_JCLive_sf2_file",
    "0771_FluidR3_GM_sf2_file",
    "0770_Aspirin_sf2_file",
    //0770_Chaos_sf2_file // not shakuhachi
    "0770_FluidR3_GM_sf2_file",
    "0770_GeneralUserGS_sf2_file"
    //0770_SBLive_sf2
    //0770_SoundBlasterOld_sf2
    // 0771_GeneralUserGS_sf2_file // missing
    // 0772_GeneralUserGS_sf2_file // missin
  ],
  gm_whistle: [
    // Whistle: Pipe
    "0780_FluidR3_GM_sf2_file",
    "0780_JCLive_sf2_file",
    "0780_Aspirin_sf2_file",
    "0780_Chaos_sf2_file"
    //0780_GeneralUserGS_sf2_file // loud..
    //0780_SBLive_sf2
    //0780_SoundBlasterOld_sf2
    // 0781_GeneralUserGS_sf2_file // detune + crackle
  ],
  gm_ocarina: [
    // Ocarina: Pipe
    "0790_FluidR3_GM_sf2_file",
    "0790_JCLive_sf2_file",
    "0790_Aspirin_sf2_file",
    //0790_Chaos_sf2_file // same as above
    "0790_GeneralUserGS_sf2_file"
    //0790_SBLive_sf2
    //0790_SoundBlasterOld_sf2
    //0791_GeneralUserGS_sf2_file // missin
  ],
  gm_lead_1_square: [
    // Lead 1 (square): Synth Lead
    "0800_Aspirin_sf2_file",
    "0800_Chaos_sf2_file",
    "0800_FluidR3_GM_sf2_file"
    // 0800_GeneralUserGS_sf2_file // detuned
    // 0800_JCLive_sf2_file // detuned
    //0800_SBLive_sf2
    //0800_SoundBlasterOld_sf2
    //0801_FluidR3_GM_sf2_file // detune
    // 0801_GeneralUserGS_sf2_file // detun
  ],
  gm_lead_2_sawtooth: [
    // Lead 2 (sawtooth): Synth Lead
    "0810_JCLive_sf2_file",
    "0810_Aspirin_sf2_file",
    "0810_Chaos_sf2_file",
    "0810_FluidR3_GM_sf2_file",
    "0810_GeneralUserGS_sf2_file",
    //0810_SBLive_sf2
    //0810_SoundBlasterOld_sf2
    "0811_Aspirin_sf2_file",
    "0811_GeneralUserGS_sf2_file"
    //0811_SoundBlasterOld_sf
  ],
  gm_lead_3_calliope: [
    // Lead 3 (calliope): Synth Lead
    "0820_JCLive_sf2_file",
    "0820_Aspirin_sf2_file",
    "0820_Chaos_sf2_file",
    "0820_FluidR3_GM_sf2_file",
    "0820_GeneralUserGS_sf2_file",
    //0820_SBLive_sf2
    //0820_SoundBlasterOld_sf2
    "0821_FluidR3_GM_sf2_file",
    "0821_GeneralUserGS_sf2_file"
    //0821_SoundBlasterOld_sf2
    // 0822_GeneralUserGS_sf2_file // missing
    //0823_GeneralUserGS_sf2_file // missin
  ],
  gm_lead_4_chiff: [
    // Lead 4 (chiff): Synth Lead
    "0830_JCLive_sf2_file",
    "0830_Aspirin_sf2_file",
    // 0830_Chaos_sf2_file // same as above
    "0830_FluidR3_GM_sf2_file",
    "0830_GeneralUserGS_sf2_file",
    //0830_SBLive_sf2
    //0830_SoundBlasterOld_sf2
    "0831_FluidR3_GM_sf2_file",
    "0831_GeneralUserGS_sf2_file"
    //0831_SoundBlasterOld_sf
  ],
  gm_lead_5_charang: [
    // Lead 5 (charang): Synth Lead
    "0840_JCLive_sf2_file",
    "0840_FluidR3_GM_sf2_file",
    "0840_Aspirin_sf2_file",
    "0840_Chaos_sf2_file",
    "0840_GeneralUserGS_sf2_file",
    //0840_SBLive_sf2
    //0840_SoundBlasterOld_sf2
    "0841_Aspirin_sf2_file",
    "0841_Chaos_sf2_file",
    "0841_FluidR3_GM_sf2_file",
    "0841_GeneralUserGS_sf2_file",
    //0841_JCLive_sf2_file // +1oct + detune
    //0841_SoundBlasterOld_sf2
    "0842_FluidR3_GM_sf2_file"
  ],
  gm_lead_6_voice: [
    // Lead 6 (voice): Synth Lead
    "0850_JCLive_sf2_file",
    "0850_Aspirin_sf2_file",
    // 0850_Chaos_sf2_file // same as above
    "0850_FluidR3_GM_sf2_file",
    // 0850_GeneralUserGS_sf2_file // no voice
    //0850_SBLive_sf2
    //0850_SoundBlasterOld_sf2
    "0851_FluidR3_GM_sf2_file",
    "0851_GeneralUserGS_sf2_file",
    "0851_JCLive_sf2_file"
    //0851_SoundBlasterOld_sf
  ],
  gm_lead_7_fifths: [
    // Lead 7 (fifths): Synth Lead
    "0860_JCLive_sf2_file",
    "0860_Aspirin_sf2_file",
    "0860_Chaos_sf2_file",
    // 0860_FluidR3_GM_sf2_file // loud and not fitting
    "0860_GeneralUserGS_sf2_file",
    //0860_SBLive_sf2
    //0860_SoundBlasterOld_sf2
    "0861_Aspirin_sf2_file"
    // 0861_FluidR3_GM_sf2_file // lout and not fitting
    //0861_SoundBlasterOld_sf
  ],
  gm_lead_8_bass_lead: [
    // Lead 8 (bass + lead): Synth Lead
    "0870_JCLive_sf2_file",
    "0870_Aspirin_sf2_file",
    "0870_Chaos_sf2_file",
    "0870_FluidR3_GM_sf2_file",
    "0870_GeneralUserGS_sf2_file"
    //0870_SBLive_sf2
    //0870_SoundBlasterOld_sf2
    // 0871_GeneralUserGS_sf2_file // loud + detune
    //0872_GeneralUserGS_sf2_file // loud
    //0873_GeneralUserGS_sf2_file // lou
  ],
  gm_pad_new_age: [
    // Pad 1 (new age): Synth Pad
    "0880_JCLive_sf2_file",
    "0880_Aspirin_sf2_file",
    "0880_Chaos_sf2_file",
    "0880_FluidR3_GM_sf2_file",
    "0880_GeneralUserGS_sf2_file",
    //0880_SBLive_sf2
    //0880_SoundBlasterOld_sf2
    "0881_Aspirin_sf2_file",
    "0881_FluidR3_GM_sf2_file",
    "0881_GeneralUserGS_sf2_file",
    //0881_SoundBlasterOld_sf2
    "0882_Aspirin_sf2_file",
    // 0882_FluidR3_GM_sf2_file // missing
    "0882_GeneralUserGS_sf2_file",
    //0883_GeneralUserGS_sf2_file // missing
    // 0884_GeneralUserGS_sf2_file // broken
    "0885_GeneralUserGS_sf2_file",
    //0886_GeneralUserGS_sf2_file // not a pad
    "0887_GeneralUserGS_sf2_file"
    //0888_GeneralUserGS_sf2_file // not a pad
    //0889_GeneralUserGS_sf2_file // not a pa
  ],
  gm_pad_warm: [
    // Pad 2 (warm): Synth Pad
    "0890_JCLive_sf2_file",
    "0890_Aspirin_sf2_file",
    "0890_Chaos_sf2_file",
    "0890_FluidR3_GM_sf2_file",
    "0890_GeneralUserGS_sf2_file",
    //0890_SBLive_sf2
    //0890_SoundBlasterOld_sf2
    "0891_Aspirin_sf2_file",
    "0891_FluidR3_GM_sf2_file"
    // 0891_GeneralUserGS_sf2_file // nois
  ],
  gm_pad_poly: [
    // Pad 3 (polysynth): Synth Pad
    //0900_Aspirin_sf2_file // same as belo
    "0900_JCLive_sf2_file",
    "0900_Chaos_sf2_file",
    "0900_FluidR3_GM_sf2_file",
    "0900_GeneralUserGS_sf2_file",
    //0900_SBLive_sf2
    //0900_SoundBlasterOld_sf2
    "0901_Aspirin_sf2_file",
    "0901_FluidR3_GM_sf2_file",
    "0901_GeneralUserGS_sf2_file"
    //0901_SoundBlasterOld_sf
  ],
  gm_pad_choir: [
    // Pad 4 (choir): Synth Pad
    "0910_FluidR3_GM_sf2_file",
    "0910_JCLive_sf2_file",
    "0910_Aspirin_sf2_file",
    //0910_Chaos_sf2_file // +1oct
    "0910_GeneralUserGS_sf2_file",
    //0910_SBLive_sf2
    //0910_SoundBlasterOld_sf2
    // 0911_Aspirin_sf2_file // fluty crackles
    "0911_GeneralUserGS_sf2_file",
    "0911_JCLive_sf2_file"
    //0911_SoundBlasterOld_sf
  ],
  gm_pad_bowed: [
    // Pad 5 (bowed): Synth Pad
    "0920_JCLive_sf2_file",
    "0920_Aspirin_sf2_file",
    //0920_Chaos_sf2_file // same as above
    //0920_FluidR3_GM_sf2_file // detuned?
    "0920_GeneralUserGS_sf2_file",
    //0920_SBLive_sf2
    //0920_SoundBlasterOld_sf2
    "0921_Aspirin_sf2_file",
    "0921_GeneralUserGS_sf2_file"
    //0921_SoundBlasterOld_sf
  ],
  gm_pad_metallic: [
    // Pad 6 (metallic): Synth Pad
    "0930_Aspirin_sf2_file",
    "0930_Chaos_sf2_file",
    "0930_FluidR3_GM_sf2_file",
    "0930_GeneralUserGS_sf2_file",
    // 0930_JCLive_sf2_file // buggy zones: guitar / synth
    //0930_SBLive_sf2
    //0930_SoundBlasterOld_sf2
    "0931_Aspirin_sf2_file",
    "0931_FluidR3_GM_sf2_file",
    "0931_GeneralUserGS_sf2_file"
    //0931_SoundBlasterOld_sf
  ],
  gm_pad_halo: [
    // Pad 7 (halo): Synth Pad
    // 0940_Aspirin_sf2_file // same as below
    "0940_Chaos_sf2_file",
    "0940_FluidR3_GM_sf2_file",
    "0940_GeneralUserGS_sf2_file",
    "0940_JCLive_sf2_file",
    //0940_SBLive_sf2
    //0940_SoundBlasterOld_sf2
    "0941_Aspirin_sf2_file",
    "0941_FluidR3_GM_sf2_file",
    "0941_GeneralUserGS_sf2_file",
    "0941_JCLive_sf2_file"
  ],
  gm_pad_sweep: [
    // Pad 8 (sweep): Synth Pad
    "0950_Aspirin_sf2_file",
    "0950_Chaos_sf2_file",
    "0950_FluidR3_GM_sf2_file",
    "0950_GeneralUserGS_sf2_file",
    "0950_JCLive_sf2_file",
    //0950_SBLive_sf2
    //0950_SoundBlasterOld_sf2
    "0951_FluidR3_GM_sf2_file",
    "0951_GeneralUserGS_sf2_file"
  ],
  gm_fx_rain: [
    // FX 1 (rain): Synth Effects
    //0960_Aspirin_sf2_file //mixed samples?
    "0960_FluidR3_GM_sf2_file",
    "0960_Chaos_sf2_file",
    "0960_GeneralUserGS_sf2_file",
    // 0960_JCLive_sf2_file // mixed samples?
    //0960_SBLive_sf2
    //0960_SoundBlasterOld_sf2
    "0961_Aspirin_sf2_file",
    "0961_FluidR3_GM_sf2_file",
    // 0961_GeneralUserGS_sf2_file // ?!?!
    //0961_SoundBlasterOld_sf2
    "0962_GeneralUserGS_sf2_file"
  ],
  gm_fx_soundtrack: [
    // FX 2 (soundtrack): Synth Effects
    "0970_FluidR3_GM_sf2_file",
    "0970_Aspirin_sf2_file",
    //0970_Chaos_sf2_file // wrong pitch
    "0970_GeneralUserGS_sf2_file",
    //0970_JCLive_sf2_file // wrong pitch
    //0970_SBLive_sf2
    //0970_SoundBlasterOld_sf2
    "0971_FluidR3_GM_sf2_file",
    "0971_GeneralUserGS_sf2_file"
    //0971_SoundBlasterOld_sf
  ],
  gm_fx_crystal: [
    // FX 3 (crystal): Synth Effects
    "0980_Aspirin_sf2_file",
    "0980_JCLive_sf2_file",
    "0980_Chaos_sf2_file",
    // 0980_FluidR3_GM_sf2_file // some notes are weird
    "0980_GeneralUserGS_sf2_file",
    "0981_FluidR3_GM_sf2_file",
    //0980_SBLive_sf2
    //0980_SoundBlasterOld_sf2
    "0981_Aspirin_sf2_file",
    "0981_GeneralUserGS_sf2_file",
    //0981_SoundBlasterOld_sf2
    "0982_GeneralUserGS_sf2_file",
    "0983_GeneralUserGS_sf2_file",
    "0984_GeneralUserGS_sf2_file"
  ],
  gm_fx_atmosphere: [
    // FX 4 (atmosphere): Synth Effects
    "0990_JCLive_sf2_file",
    "0990_Aspirin_sf2_file",
    "0990_Chaos_sf2_file",
    "0990_FluidR3_GM_sf2_file",
    "0990_GeneralUserGS_sf2_file",
    //0990_SBLive_sf2
    //0990_SoundBlasterOld_sf2
    "0991_Aspirin_sf2_file",
    "0991_FluidR3_GM_sf2_file",
    "0991_GeneralUserGS_sf2_file",
    "0991_JCLive_sf2_file",
    //0991_SoundBlasterOld_sf2
    "0992_FluidR3_GM_sf2_file",
    "0992_JCLive_sf2_file",
    "0993_JCLive_sf2_file",
    "0994_JCLive_sf2_file"
  ],
  gm_fx_brightness: [
    // FX 5 (brightness): Synth Effects
    "1000_JCLive_sf2_file",
    "1000_Aspirin_sf2_file",
    "1000_Chaos_sf2_file",
    "1000_FluidR3_GM_sf2_file",
    "1000_GeneralUserGS_sf2_file",
    //1000_SBLive_sf2
    //1000_SoundBlasterOld_sf2
    "1001_Aspirin_sf2_file",
    "1001_FluidR3_GM_sf2_file",
    "1001_GeneralUserGS_sf2_file",
    "1001_JCLive_sf2_file",
    //1001_SoundBlasterOld_sf2
    "1002_Aspirin_sf2_file",
    "1002_FluidR3_GM_sf2_file",
    "1002_GeneralUserGS_sf2_file"
  ],
  gm_fx_goblins: [
    // FX 6 (goblins): Synth Effects
    "1010_FluidR3_GM_sf2_file",
    "1010_JCLive_sf2_file",
    "1010_Aspirin_sf2_file",
    "1010_Chaos_sf2_file",
    "1010_GeneralUserGS_sf2_file",
    //1010_SBLive_sf2
    //1010_SoundBlasterOld_sf2
    "1011_Aspirin_sf2_file",
    "1011_FluidR3_GM_sf2_file",
    "1011_JCLive_sf2_file",
    "1012_Aspirin_sf2_file"
  ],
  gm_fx_echoes: [
    // FX 7 (echoes): Synth Effects
    "1020_FluidR3_GM_sf2_file",
    "1020_JCLive_sf2_file",
    "1020_Aspirin_sf2_file",
    "1020_Chaos_sf2_file",
    "1020_GeneralUserGS_sf2_file",
    //1020_SBLive_sf2
    //1020_SoundBlasterOld_sf2
    "1021_Aspirin_sf2_file",
    "1021_FluidR3_GM_sf2_file",
    "1021_GeneralUserGS_sf2_file",
    "1021_JCLive_sf2_file",
    //1021_SoundBlasterOld_sf2
    "1022_GeneralUserGS_sf2_file"
  ],
  gm_fx_sci_fi: [
    // FX 8 (sci_fi): Synth Effects
    "1030_FluidR3_GM_sf2_file",
    "1030_Aspirin_sf2_file",
    "1030_Chaos_sf2_file",
    "1030_GeneralUserGS_sf2_file",
    "1030_JCLive_sf2_file",
    //1030_SBLive_sf2
    //1030_SoundBlasterOld_sf2
    "1031_Aspirin_sf2_file",
    "1031_FluidR3_GM_sf2_file",
    "1031_GeneralUserGS_sf2_file",
    //1031_SoundBlasterOld_sf2
    "1032_FluidR3_GM_sf2_file"
  ],
  gm_sitar: [
    // Sitar: Ethnic
    "1040_Aspirin_sf2_file",
    "1040_FluidR3_GM_sf2_file",
    "1040_JCLive_sf2_file",
    "1040_Chaos_sf2_file",
    "1040_GeneralUserGS_sf2_file",
    //1040_SBLive_sf2
    //1040_SoundBlasterOld_sf2
    "1041_FluidR3_GM_sf2_file",
    "1041_GeneralUserGS_sf2_file"
  ],
  gm_banjo: [
    // Banjo: Ethnic
    "1050_FluidR3_GM_sf2_file",
    "1050_JCLive_sf2_file",
    "1050_Aspirin_sf2_file",
    "1050_Chaos_sf2_file",
    "1050_GeneralUserGS_sf2_file",
    //1050_SBLive_sf2
    //1050_SoundBlasterOld_sf2
    "1051_GeneralUserGS_sf2_file"
  ],
  gm_shamisen: [
    // Shamisen: Ethnic
    "1060_JCLive_sf2_file",
    "1060_FluidR3_GM_sf2_file",
    "1060_Aspirin_sf2_file",
    "1060_Chaos_sf2_file",
    "1060_GeneralUserGS_sf2_file",
    //1060_SBLive_sf2
    //1060_SoundBlasterOld_sf2
    "1061_FluidR3_GM_sf2_file",
    "1061_GeneralUserGS_sf2_file"
    //1061_SoundBlasterOld_sf
  ],
  gm_koto: [
    // Koto: Ethnic
    "1070_FluidR3_GM_sf2_file",
    "1070_JCLive_sf2_file",
    "1070_Aspirin_sf2_file",
    "1070_Chaos_sf2_file",
    "1070_GeneralUserGS_sf2_file",
    //1070_SBLive_sf2
    //1070_SoundBlasterOld_sf2
    "1071_FluidR3_GM_sf2_file",
    "1071_GeneralUserGS_sf2_file",
    "1072_GeneralUserGS_sf2_file",
    "1073_GeneralUserGS_sf2_file"
  ],
  gm_kalimba: [
    // Kalimba: Ethnic
    "1080_JCLive_sf2_file",
    "1080_FluidR3_GM_sf2_file",
    "1080_Aspirin_sf2_file",
    "1080_Chaos_sf2_file",
    "1080_GeneralUserGS_sf2_file"
    //1080_SBLive_sf2
    //1080_SoundBlasterOld_sf2
    //1081_SoundBlasterOld_sf
  ],
  gm_bagpipe: [
    // Bagpipe: Ethnic
    "1090_Aspirin_sf2_file"
    // '1090_Chaos_sf2_file', // broken pitches
    // '1090_GeneralUserGS_sf2_file', // broken pitches
    // '1090_FluidR3_GM_sf2_file', // broken pitches ?
    // '1090_JCLive_sf2_file', // broken pitches ?
    //1090_SBLive_sf2
    //1090_SoundBlasterOld_sf2
    //1091_SoundBlasterOld_sf
  ],
  gm_fiddle: [
    // Fiddle: Ethnic
    "1100_JCLive_sf2_file",
    "1100_Aspirin_sf2_file",
    "1100_Chaos_sf2_file",
    "1100_FluidR3_GM_sf2_file",
    "1100_GeneralUserGS_sf2_file",
    //1100_SBLive_sf2
    //1100_SoundBlasterOld_sf2
    "1101_Aspirin_sf2_file",
    "1101_FluidR3_GM_sf2_file",
    "1101_GeneralUserGS_sf2_file",
    "1102_GeneralUserGS_sf2_file"
  ],
  gm_shanai: [
    // Shanai: Ethnic
    "1110_Aspirin_sf2_file",
    "1110_FluidR3_GM_sf2_file",
    "1110_JCLive_sf2_file",
    "1110_Chaos_sf2_file",
    "1110_GeneralUserGS_sf2_file"
    //1110_SBLive_sf2
    //1110_SoundBlasterOld_sf
  ],
  gm_tinkle_bell: [
    // Tinkle Bell: Percussive
    "1120_Aspirin_sf2_file"
    // '1120_Chaos_sf2_file', // same as above
    // '1120_GeneralUserGS_sf2_file', // sounds exactly as Aspirin
    // '1120_FluidR3_GM_sf2_file', // +1oct
    // '1120_JCLive_sf2_file', // +1oct
    //1120_SBLive_sf2
    //1120_SoundBlasterOld_sf2
    //1121_SoundBlasterOld_sf
  ],
  gm_agogo: [
    // Agogo: Percussive
    "1130_JCLive_sf2_file",
    "1130_Aspirin_sf2_file",
    "1130_Chaos_sf2_file",
    "1130_FluidR3_GM_sf2_file",
    "1130_GeneralUserGS_sf2_file",
    //1130_SBLive_sf2
    //1130_SoundBlasterOld_sf2
    "1131_FluidR3_GM_sf2_file"
    //1131_SoundBlasterOld_sf
  ],
  gm_steel_drums: [
    // Steel Drums: Percussive
    "1140_FluidR3_GM_sf2_file",
    "1140_Aspirin_sf2_file",
    "1140_JCLive_sf2_file",
    "1140_Chaos_sf2_file",
    "1140_GeneralUserGS_sf2_file",
    //1140_SBLive_sf2
    //1140_SoundBlasterOld_sf2
    "1141_FluidR3_GM_sf2_file"
  ],
  gm_woodblock: [
    // Woodblock: Percussive
    "1150_JCLive_sf2_file",
    "1150_Aspirin_sf2_file",
    "1150_Chaos_sf2_file",
    "1150_FluidR3_GM_sf2_file",
    "1150_GeneralUserGS_sf2_file",
    //1150_SBLive_sf2
    //1150_SoundBlasterOld_sf2
    "1151_FluidR3_GM_sf2_file",
    "1151_GeneralUserGS_sf2_file",
    "1152_FluidR3_GM_sf2_file",
    "1152_GeneralUserGS_sf2_file"
  ],
  gm_taiko_drum: [
    // Taiko Drum: Percussive
    "1160_JCLive_sf2_file",
    "1160_FluidR3_GM_sf2_file",
    "1160_Aspirin_sf2_file",
    "1160_Chaos_sf2_file",
    "1160_GeneralUserGS_sf2_file",
    //1160_SBLive_sf2
    //1160_SoundBlasterOld_sf2
    "1161_FluidR3_GM_sf2_file",
    "1161_GeneralUserGS_sf2_file",
    //1161_SoundBlasterOld_sf2
    "1162_FluidR3_GM_sf2_file",
    "1162_GeneralUserGS_sf2_file",
    "1163_FluidR3_GM_sf2_file"
  ],
  gm_melodic_tom: [
    // Melodic Tom: Percussive
    "1170_JCLive_sf2_file",
    "1170_Aspirin_sf2_file",
    "1170_Chaos_sf2_file",
    "1170_FluidR3_GM_sf2_file",
    "1170_GeneralUserGS_sf2_file",
    //1170_SBLive_sf2
    //1170_SoundBlasterOld_sf2
    "1171_FluidR3_GM_sf2_file",
    "1171_GeneralUserGS_sf2_file",
    "1172_FluidR3_GM_sf2_file",
    "1173_FluidR3_GM_sf2_file"
  ],
  gm_synth_drum: [
    // Synth Drum: Percussive
    "1180_JCLive_sf2_file",
    "1180_Aspirin_sf2_file",
    "1180_Chaos_sf2_file",
    "1180_FluidR3_GM_sf2_file",
    "1180_GeneralUserGS_sf2_file",
    //1180_SBLive_sf2
    //1180_SoundBlasterOld_sf2
    "1181_FluidR3_GM_sf2_file",
    "1181_GeneralUserGS_sf2_file"
    //1181_SoundBlasterOld_sf
  ],
  gm_reverse_cymbal: [
    // Reverse Cymbal: Percussive
    "1190_JCLive_sf2_file",
    "1190_Aspirin_sf2_file",
    "1190_Chaos_sf2_file",
    "1190_FluidR3_GM_sf2_file",
    "1190_GeneralUserGS_sf2_file",
    //1190_SBLive_sf2
    //1190_SoundBlasterOld_sf2
    "1191_GeneralUserGS_sf2_file",
    "1192_GeneralUserGS_sf2_file",
    "1193_GeneralUserGS_sf2_file",
    "1194_GeneralUserGS_sf2_file"
  ],
  gm_guitar_fret_noise: [
    // Guitar Fret Noise: Sound effects
    "1200_JCLive_sf2_file",
    "1200_Aspirin_sf2_file",
    "1200_Chaos_sf2_file",
    "1200_FluidR3_GM_sf2_file",
    "1200_GeneralUserGS_sf2_file",
    //1200_SBLive_sf2
    //1200_SoundBlasterOld_sf2
    "1201_Aspirin_sf2_file",
    "1201_GeneralUserGS_sf2_file",
    "1202_GeneralUserGS_sf2_file"
  ],
  gm_breath_noise: [
    // Breath Noise: Sound effects
    "1210_FluidR3_GM_sf2_file",
    "1210_JCLive_sf2_file",
    "1210_Aspirin_sf2_file",
    "1210_Chaos_sf2_file",
    "1210_GeneralUserGS_sf2_file",
    //1210_SBLive_sf2
    //1210_SoundBlasterOld_sf2
    "1211_Aspirin_sf2_file",
    "1211_GeneralUserGS_sf2_file",
    "1212_GeneralUserGS_sf2_file"
  ],
  gm_seashore: [
    // Seashore: Sound effects
    "1220_JCLive_sf2_file",
    "1220_Aspirin_sf2_file",
    "1220_Chaos_sf2_file",
    "1220_FluidR3_GM_sf2_file",
    "1220_GeneralUserGS_sf2_file",
    //1220_SBLive_sf2
    //1220_SoundBlasterOld_sf2
    "1221_Aspirin_sf2_file",
    "1221_GeneralUserGS_sf2_file",
    "1221_JCLive_sf2_file",
    "1222_Aspirin_sf2_file",
    "1222_GeneralUserGS_sf2_file",
    "1223_Aspirin_sf2_file",
    "1223_GeneralUserGS_sf2_file",
    "1224_Aspirin_sf2_file",
    "1224_GeneralUserGS_sf2_file",
    "1225_GeneralUserGS_sf2_file",
    "1226_GeneralUserGS_sf2_file"
  ],
  gm_bird_tweet: [
    // Bird Tweet: Sound effects
    "1230_FluidR3_GM_sf2_file",
    "1230_JCLive_sf2_file",
    "1230_Aspirin_sf2_file",
    // '1230_Chaos_sf2_file',
    "1230_GeneralUserGS_sf2_file",
    //1230_SBLive_sf2
    //1230_SoundBlasterOld_sf2
    //'1231_Aspirin_sf2_file',
    "1231_GeneralUserGS_sf2_file",
    // dog
    // '1232_Aspirin_sf2_file',// ?
    "1232_GeneralUserGS_sf2_file",
    // horse
    // '1233_GeneralUserGS_sf2_file', //
    "1234_GeneralUserGS_sf2_file"
    // scratch
  ],
  gm_telephone: [
    // Telephone Ring: Sound effects
    "1240_JCLive_sf2_file",
    "1240_Aspirin_sf2_file",
    "1240_Chaos_sf2_file",
    "1240_FluidR3_GM_sf2_file",
    // '1240_GeneralUserGS_sf2_file',
    //1240_SBLive_sf2
    //1240_SoundBlasterOld_sf2
    "1241_Aspirin_sf2_file",
    // door?
    //'1241_GeneralUserGS_sf2_file',
    // '1242_Aspirin_sf2_file', // ?
    "1242_GeneralUserGS_sf2_file",
    // door
    "1243_Aspirin_sf2_file",
    // scratch
    "1243_GeneralUserGS_sf2_file",
    // door close?
    "1244_Aspirin_sf2_file",
    // bells
    "1244_GeneralUserGS_sf2_file"
    // bells
  ],
  gm_helicopter: [
    // Helicopter: Sound effects
    "1250_JCLive_sf2_file",
    "1250_Aspirin_sf2_file",
    // '1250_Chaos_sf2_file', // same as above
    "1250_FluidR3_GM_sf2_file",
    "1250_GeneralUserGS_sf2_file",
    //1250_SBLive_sf2
    //1250_SoundBlasterOld_sf2
    // '1251_Aspirin_sf2_file', // slooow
    "1251_FluidR3_GM_sf2_file",
    // guitar
    "1251_GeneralUserGS_sf2_file",
    // engine start with loop at end..
    "1252_Aspirin_sf2_file",
    // alien
    "1252_FluidR3_GM_sf2_file",
    // seashore
    "1252_GeneralUserGS_sf2_file",
    // carbreak
    // '1253_Aspirin_sf2_file', // plane
    "1253_GeneralUserGS_sf2_file",
    // racing car
    // '1254_Aspirin_sf2_file',
    "1254_GeneralUserGS_sf2_file",
    // breaking
    // '1255_Aspirin_sf2_file',
    "1255_GeneralUserGS_sf2_file",
    // siren
    // '1256_Aspirin_sf2_file',
    "1256_GeneralUserGS_sf2_file",
    // hmm
    // '1257_Aspirin_sf2_file',
    "1257_GeneralUserGS_sf2_file",
    // noise
    // '1258_Aspirin_sf2_file',
    "1258_GeneralUserGS_sf2_file",
    // metallic noise
    "1259_GeneralUserGS_sf2_file"
    // watery nosie
  ],
  gm_applause: [
    // Applause: Sound effects
    "1260_JCLive_sf2_file",
    "1260_Aspirin_sf2_file",
    "1260_Chaos_sf2_file",
    "1260_FluidR3_GM_sf2_file",
    "1260_GeneralUserGS_sf2_file",
    //1260_SBLive_sf2
    //1260_SoundBlasterOld_sf2
    "1261_Aspirin_sf2_file",
    "1261_GeneralUserGS_sf2_file",
    "1262_Aspirin_sf2_file",
    "1262_GeneralUserGS_sf2_file",
    "1263_Aspirin_sf2_file",
    "1263_GeneralUserGS_sf2_file",
    "1264_Aspirin_sf2_file",
    "1264_GeneralUserGS_sf2_file",
    "1265_Aspirin_sf2_file",
    "1265_GeneralUserGS_sf2_file"
  ],
  gm_gunshot: [
    // Gunshot: Sound effects
    "1270_JCLive_sf2_file",
    "1270_Aspirin_sf2_file",
    "1270_Chaos_sf2_file",
    "1270_FluidR3_GM_sf2_file",
    "1270_GeneralUserGS_sf2_file",
    //1270_SBLive_sf2
    //1270_SoundBlasterOld_sf2
    "1271_Aspirin_sf2_file",
    "1271_GeneralUserGS_sf2_file",
    "1272_Aspirin_sf2_file",
    "1272_GeneralUserGS_sf2_file",
    "1273_GeneralUserGS_sf2_file",
    "1274_GeneralUserGS_sf2_file",
    ""
  ]
};
let defaultSoundfontUrl = "https://felixroos.github.io/webaudiofontdata/sound", soundfontUrl = defaultSoundfontUrl;
function setSoundfontUrl(v) {
  soundfontUrl = v;
}
let loadCache = {};
async function loadFont(name) {
  if (loadCache[name])
    return loadCache[name];
  const load = async () => {
    const url = `${soundfontUrl}/${name}.js`, preset = await fetch(url).then((v) => v.text());
    let [_, data] = preset.split("={");
    return eval("{" + data);
  };
  return loadCache[name] = load(), loadCache[name];
}
async function getFontBufferSource(v, F, p) {
  let { note: l = "c3", freq: e } = F, f;
  if (e)
    f = freqToMidi(e);
  else if (typeof l == "string")
    f = noteToMidi(l);
  else if (typeof l == "number")
    f = l;
  else
    throw new Error(`unexpected "note" type "${typeof l}"`);
  const { buffer: s, zone: n } = await getFontPitch(v, f, p), t = p.createBufferSource();
  t.buffer = s;
  const i = n.originalPitch - 100 * n.coarseTune - n.fineTune, c = 1 * Math.pow(2, (100 * f - i) / 1200);
  return t.playbackRate.value = c, n.loopStart > 1 && n.loopStart < n.loopEnd && (t.loop = !0, t.loopStart = n.loopStart / n.sampleRate, t.loopEnd = n.loopEnd / n.sampleRate), t;
}
let bufferCache = {};
async function getFontPitch(v, F, p) {
  const l = `${v}:::${F}`;
  if (bufferCache[l])
    return bufferCache[l];
  const e = async () => {
    const f = await loadFont(v);
    if (!f)
      throw new Error(`Could not load soundfont ${v}`);
    const s = findZone(f, F);
    if (!s)
      throw new Error("no soundfont zone found for preset ", v, "pitch", F);
    const n = await getBuffer(s, p);
    if (!n)
      throw new Error(`no soundfont buffer found for preset ${v}, pitch: ${F}`);
    return { buffer: n, zone: s };
  };
  return bufferCache[l] = e(), bufferCache[l];
}
function findZone(v, F) {
  return v.find((p) => p.keyRangeLow <= F && p.keyRangeHigh + 1 >= F);
}
async function getBuffer(v, F) {
  if (v.sample) {
    console.warn("zone.sample untested!");
    const l = atob(v.sample);
    v.buffer = F.createBuffer(1, l.length / 2, v.sampleRate);
    const e = v.buffer.getChannelData(0);
    let f, s, n;
    for (var p = 0; p < l.length / 2; p++)
      f = l.charCodeAt(p * 2), s = l.charCodeAt(p * 2 + 1), f < 0 && (f = 256 + f), s < 0 && (s = 256 + s), n = s * 256 + f, n >= 65536 / 2 && (n = n - 65536), e[p] = n / 65536;
  } else if (v.file) {
    const l = v.file.length, e = new ArrayBuffer(l), f = new Uint8Array(e), s = atob(v.file);
    let n;
    for (let t = 0; t < s.length; t++)
      n = s.charCodeAt(t), f[t] = n;
    return new Promise((t) => F.decodeAudioData(e, t));
  }
}
function registerSoundfonts() {
  Object.entries(gm).forEach(([v, F]) => {
    registerSound(
      v,
      async (p, l, e) => {
        const [f, s, n, t] = getADSRValues([
          l.attack,
          l.decay,
          l.sustain,
          l.release
        ]), { duration: i } = l, c = getSoundIndex(l.n, F.length), h = F[c], S = getAudioContext(), r = await getFontBufferSource(h, l, S);
        r.start(p);
        const d = S.createGain(), a = r.connect(d), u = p + i;
        getParamADSR(a.gain, f, s, n, t, 0, 0.3, p, u, "linear");
        let o = u + t + 0.01, g = getVibratoOscillator(r.detune, l, p);
        getPitchEnvelope(r.detune, l, p, u), r.stop(o);
        const R = (U) => {
        };
        return r.onended = () => {
          r.disconnect(), g?.stop(), a.disconnect(), e();
        }, { node: a, stop: R };
      },
      { type: "soundfont", prebake: !0, fonts: F }
    );
  });
}
const instruments = [
  // Acoustic Grand Piano: Piano
  "0000_JCLive_sf2_file",
  "0000_Aspirin_sf2_file",
  "0000_Chaos_sf2_file",
  "0000_FluidR3_GM_sf2_file",
  "0000_GeneralUserGS_sf2_file",
  //'0000_SBLive_sf2',
  //'0000_SoundBlasterOld_sf2',
  "0001_FluidR3_GM_sf2_file",
  "0001_GeneralUserGS_sf2_file",
  // Bright Acoustic Piano: Piano
  "0010_Aspirin_sf2_file",
  "0010_Chaos_sf2_file",
  "0010_FluidR3_GM_sf2_file",
  "0010_GeneralUserGS_sf2_file",
  "0010_JCLive_sf2_file",
  //'0010_SBLive_sf2',
  //'0010_SoundBlasterOld_sf2',
  "0011_Aspirin_sf2_file",
  "0011_FluidR3_GM_sf2_file",
  "0011_GeneralUserGS_sf2_file",
  "0012_GeneralUserGS_sf2_file",
  // string??
  // Electric Grand Piano: Piano
  "0020_Aspirin_sf2_file",
  "0020_Chaos_sf2_file",
  "0020_FluidR3_GM_sf2_file",
  "0020_GeneralUserGS_sf2_file",
  "0020_JCLive_sf2_file",
  //'0020_SBLive_sf2',
  //'0020_SoundBlasterOld_sf2',
  "0021_Aspirin_sf2_file",
  "0021_GeneralUserGS_sf2_file",
  // ?
  "0022_Aspirin_sf2_file",
  // dx7 epiano like
  // Honky-tonk Piano: Piano
  "0030_Aspirin_sf2_file",
  "0030_Chaos_sf2_file",
  "0030_FluidR3_GM_sf2_file",
  "0030_GeneralUserGS_sf2_file",
  "0030_JCLive_sf2_file",
  //'0030_SBLive_sf2',
  //'0030_SoundBlasterOld_sf2',
  "0031_Aspirin_sf2_file",
  "0031_FluidR3_GM_sf2_file",
  "0031_GeneralUserGS_sf2_file",
  //'0031_SoundBlasterOld_sf2', // pianos until here
  // Electric Piano 1: Piano
  "0040_Aspirin_sf2_file",
  "0040_Chaos_sf2_file",
  "0040_FluidR3_GM_sf2_file",
  // rhodes
  "0040_GeneralUserGS_sf2_file",
  // staccato rhodes
  "0040_JCLive_sf2_file",
  // warbly rhodes
  //'0040_SBLive_sf2', // ?
  //'0040_SoundBlasterOld_sf2', // ?
  "0041_FluidR3_GM_sf2_file",
  // rhodes
  "0041_GeneralUserGS_sf2_file",
  // staccato rhodes
  //'0041_SoundBlasterOld_sf2', // ?
  "0042_GeneralUserGS_sf2_file",
  // staccato wurly
  "0043_GeneralUserGS_sf2_file",
  // high bell
  "0044_GeneralUserGS_sf2_file",
  // reed organ
  //'0045_GeneralUserGS_sf2_file', // ?
  "0046_GeneralUserGS_sf2_file",
  // reed organ
  // Electric Piano 2: Piano
  "0050_Aspirin_sf2_file",
  // glass piano
  "0050_Chaos_sf2_file",
  // short glass piano
  "0050_FluidR3_GM_sf2_file",
  // long glass piano !
  // ?
  "0050_GeneralUserGS_sf2_file",
  // short glass piano
  // cont
  "0050_JCLive_sf2_file",
  // glass piano
  //'0050_SBLive_sf2', // ?
  //'0050_SoundBlasterOld_sf2', // ?
  "0051_FluidR3_GM_sf2_file",
  // long lass organ
  "0051_GeneralUserGS_sf2_file",
  //'0052_GeneralUserGS_sf2_file', // ?
  "0053_GeneralUserGS_sf2_file",
  // normal piano...
  "0054_GeneralUserGS_sf2_file",
  // piano
  // Harpsichord: Piano
  "0060_Aspirin_sf2_file",
  // harpsichord
  "0060_Chaos_sf2_file",
  "0060_FluidR3_GM_sf2_file",
  // harpsichord !
  "0060_GeneralUserGS_sf2_file",
  "0060_JCLive_sf2_file",
  //'0060_SBLive_sf2',
  //'0060_SoundBlasterOld_sf2',
  "0061_Aspirin_sf2_file",
  "0061_GeneralUserGS_sf2_file",
  //'0061_SoundBlasterOld_sf2',
  "0062_GeneralUserGS_sf2_file",
  // Clavinet: Piano
  "0070_Aspirin_sf2_file",
  "0070_Chaos_sf2_file",
  "0070_FluidR3_GM_sf2_file",
  // '0070_GeneralUserGS_sf2_file', // half broken
  "0070_JCLive_sf2_file",
  //'0070_SBLive_sf2',
  //'0070_SoundBlasterOld_sf2',
  // '0071_GeneralUserGS_sf2_file', // half broken
  // Celesta: Chromatic Percussion
  "0080_Aspirin_sf2_file",
  "0080_Chaos_sf2_file",
  "0080_FluidR3_GM_sf2_file",
  "0080_GeneralUserGS_sf2_file",
  "0080_JCLive_sf2_file",
  //'0080_SBLive_sf2',
  //'0080_SoundBlasterOld_sf2',
  "0081_FluidR3_GM_sf2_file",
  // '0081_GeneralUserGS_sf2_file', // weird detuned
  //'0081_SoundBlasterOld_sf2',
  // Glockenspiel: Chromatic Percussion
  "0090_Aspirin_sf2_file",
  "0090_Chaos_sf2_file",
  "0090_FluidR3_GM_sf2_file",
  "0090_GeneralUserGS_sf2_file",
  "0090_JCLive_sf2_file",
  //'0090_SBLive_sf2',
  //'0090_SoundBlasterOld_sf2',
  //'0091_SoundBlasterOld_sf2',
  // Music Box: Chromatic Percussion
  "0100_Aspirin_sf2_file",
  "0100_Chaos_sf2_file",
  "0100_FluidR3_GM_sf2_file",
  "0100_GeneralUserGS_sf2_file",
  "0100_JCLive_sf2_file",
  //'0100_SBLive_sf2',
  //'0100_SoundBlasterOld_sf2',
  // '0101_GeneralUserGS_sf2_file', // weird detuned
  //'0101_SoundBlasterOld_sf2',
  // Vibraphone: Chromatic Percussion
  "0110_Aspirin_sf2_file",
  "0110_Chaos_sf2_file",
  "0110_FluidR3_GM_sf2_file",
  "0110_GeneralUserGS_sf2_file",
  "0110_JCLive_sf2_file",
  //'0110_SBLive_sf2',
  //'0110_SoundBlasterOld_sf2',
  "0111_FluidR3_GM_sf2_file",
  // Marimba: Chromatic Percussion
  "0120_Aspirin_sf2_file",
  "0120_Chaos_sf2_file",
  "0120_FluidR3_GM_sf2_file",
  "0120_GeneralUserGS_sf2_file",
  "0120_JCLive_sf2_file",
  //'0120_SBLive_sf2',
  //'0120_SoundBlasterOld_sf2',
  "0121_FluidR3_GM_sf2_file",
  "0121_GeneralUserGS_sf2_file",
  // not really a marimba
  // Xylophone: Chromatic Percussion
  "0130_Aspirin_sf2_file",
  "0130_Chaos_sf2_file",
  "0130_FluidR3_GM_sf2_file",
  "0130_GeneralUserGS_sf2_file",
  "0130_JCLive_sf2_file",
  //'0130_SBLive_sf2',
  //'0130_SoundBlasterOld_sf2',
  "0131_FluidR3_GM_sf2_file",
  // Tubular Bells: Chromatic Percussion
  "0140_Aspirin_sf2_file",
  // '0140_Chaos_sf2_file', // same as aspirin?
  "0140_FluidR3_GM_sf2_file",
  "0140_GeneralUserGS_sf2_file",
  "0140_JCLive_sf2_file",
  //'0140_SBLive_sf2',
  //'0140_SoundBlasterOld_sf2',
  "0141_FluidR3_GM_sf2_file",
  //'0141_GeneralUserGS_sf2_file',
  "0142_GeneralUserGS_sf2_file",
  // epiano..
  // '0143_GeneralUserGS_sf2_file', // buggy
  // Dulcimer: Chromatic Percussion
  "0150_Aspirin_sf2_file",
  "0150_Chaos_sf2_file",
  // long load?
  "0150_FluidR3_GM_sf2_file",
  "0150_GeneralUserGS_sf2_file",
  // '0150_JCLive_sf2_file', // detuned???
  //'0150_SBLive_sf2',
  //'0150_SoundBlasterOld_sf2',
  "0151_FluidR3_GM_sf2_file",
  // Drawbar Organ: Organ
  "0160_Aspirin_sf2_file",
  "0160_Chaos_sf2_file",
  "0160_FluidR3_GM_sf2_file",
  "0160_GeneralUserGS_sf2_file",
  "0160_JCLive_sf2_file",
  //'0160_SBLive_sf2',
  //'0160_SoundBlasterOld_sf2',
  "0161_Aspirin_sf2_file",
  "0161_FluidR3_GM_sf2_file",
  //'0161_SoundBlasterOld_sf2',
  // Percussive Organ: Organ
  "0170_Aspirin_sf2_file",
  "0170_Chaos_sf2_file",
  "0170_FluidR3_GM_sf2_file",
  // '0170_GeneralUserGS_sf2_file', // repitched
  "0170_JCLive_sf2_file",
  //'0170_SBLive_sf2',
  //'0170_SoundBlasterOld_sf2',
  "0171_FluidR3_GM_sf2_file",
  // '0171_GeneralUserGS_sf2_file',  // repitched
  "0172_FluidR3_GM_sf2_file",
  // Rock Organ: Organ
  "0180_Aspirin_sf2_file",
  "0180_Chaos_sf2_file",
  "0180_FluidR3_GM_sf2_file",
  "0180_GeneralUserGS_sf2_file",
  "0180_JCLive_sf2_file",
  //'0180_SBLive_sf2',
  //'0180_SoundBlasterOld_sf2',
  //'0181_Aspirin_sf2_file', // flute
  //'0181_GeneralUserGS_sf2_file', // marimbalike
  //'0181_SoundBlasterOld_sf2',
  // Church Organ: Organ
  "0190_Aspirin_sf2_file",
  "0190_Chaos_sf2_file",
  "0190_FluidR3_GM_sf2_file",
  "0190_GeneralUserGS_sf2_file",
  "0190_JCLive_sf2_file",
  //'0190_SBLive_sf2',
  //'0190_SoundBlasterOld_sf2',
  //'0191_Aspirin_sf2_file', // string??
  //'0191_GeneralUserGS_sf2_file', // weird organ
  //'0191_SoundBlasterOld_sf2',
  // Reed Organ: Organ
  "0200_Aspirin_sf2_file",
  "0200_Chaos_sf2_file",
  "0200_FluidR3_GM_sf2_file",
  "0200_GeneralUserGS_sf2_file",
  "0200_JCLive_sf2_file",
  // stringy
  //'0200_SBLive_sf2',
  //'0200_SoundBlasterOld_sf2',
  "0201_Aspirin_sf2_file",
  // stringy
  "0201_FluidR3_GM_sf2_file",
  "0201_GeneralUserGS_sf2_file",
  //'0201_SoundBlasterOld_sf2',
  //'0210_Aspirin_sf2_file', // buggy
  //'0210_Chaos_sf2_file', // buggy
  // Accordion: Organ
  "0210_FluidR3_GM_sf2_file",
  "0210_GeneralUserGS_sf2_file",
  "0210_JCLive_sf2_file",
  //'0210_SBLive_sf2',
  //'0210_SoundBlasterOld_sf2',
  "0211_Aspirin_sf2_file",
  // stringy
  "0211_FluidR3_GM_sf2_file",
  "0211_GeneralUserGS_sf2_file",
  //'0211_SoundBlasterOld_sf2',
  "0212_GeneralUserGS_sf2_file",
  // Harmonica: Organ
  "0220_Aspirin_sf2_file",
  "0220_Chaos_sf2_file",
  "0220_FluidR3_GM_sf2_file",
  "0220_GeneralUserGS_sf2_file",
  "0220_JCLive_sf2_file",
  //'0220_SBLive_sf2',
  //'0220_SoundBlasterOld_sf2',
  "0221_FluidR3_GM_sf2_file",
  // Tango Accordion: Organ
  "0230_Aspirin_sf2_file",
  "0230_Chaos_sf2_file",
  "0230_FluidR3_GM_sf2_file",
  "0230_GeneralUserGS_sf2_file",
  "0230_JCLive_sf2_file",
  //'0230_SBLive_sf2',
  //'0230_SoundBlasterOld_sf2',
  "0231_FluidR3_GM_sf2_file",
  "0231_GeneralUserGS_sf2_file",
  // warbly
  "0231_JCLive_sf2_file",
  //'0231_SoundBlasterOld_sf2',
  "0232_FluidR3_GM_sf2_file",
  "0233_FluidR3_GM_sf2_file",
  // Acoustic Guitar (nylon): Guitar
  "0240_Aspirin_sf2_file",
  "0240_Chaos_sf2_file",
  "0240_FluidR3_GM_sf2_file",
  "0240_GeneralUserGS_sf2_file",
  "0240_JCLive_sf2_file",
  "0240_LK_Godin_Nylon_SF2_file",
  //'0240_SBLive_sf2',
  //'0240_SoundBlasterOld_sf2',
  // '0241_GeneralUserGS_sf2_file', // organ like
  "0241_JCLive_sf2_file",
  "0242_JCLive_sf2_file",
  "0243_JCLive_sf2_file",
  // Acoustic Guitar (steel): Guitar
  "0253_Acoustic_Guitar_sf2_file",
  "0250_Aspirin_sf2_file",
  "0250_Chaos_sf2_file",
  "0250_FluidR3_GM_sf2_file",
  "0250_GeneralUserGS_sf2_file",
  // '0250_JCLive_sf2_file', // detuned
  "0250_LK_AcousticSteel_SF2_file",
  //'0250_SBLive_sf2',
  //'0250_SoundBlasterOld_sf2',
  //'0251_Acoustic_Guitar_sf2_file', // detuned?
  // '0251_GeneralUserGS_sf2_file', // broken: missing pitches
  // '0252_Acoustic_Guitar_sf2_file', // detuned..
  // '0252_GeneralUserGS_sf2_file', // broken: missing pitches
  "0253_Acoustic_Guitar_sf2_file",
  "0253_GeneralUserGS_sf2_file",
  "0254_Acoustic_Guitar_sf2_file",
  // bends.. detuned
  "0254_GeneralUserGS_sf2_file",
  //'0255_GeneralUserGS_sf2_file', // no guitar..
  // Electric Guitar (jazz): Guitar
  "0260_Aspirin_sf2_file",
  // sounds like an epiano
  "0260_Chaos_sf2_file",
  // weird but cool detune
  "0260_FluidR3_GM_sf2_file",
  "0260_GeneralUserGS_sf2_file",
  "0260_JCLive_sf2_file",
  //'0260_SBLive_sf2',
  //'0260_SoundBlasterOld_sf2',
  "0260_Stratocaster_sf2_file",
  // -1 octave
  "0261_GeneralUserGS_sf2_file",
  //'0261_SoundBlasterOld_sf2',
  "0261_Stratocaster_sf2_file",
  // -1 octave
  "0262_Stratocaster_sf2_file",
  // -1 octave
  // Electric Guitar (clean): Guitar
  "0270_Aspirin_sf2_file",
  "0270_Chaos_sf2_file",
  // sounds meh
  "0270_FluidR3_GM_sf2_file",
  "0270_GeneralUserGS_sf2_file",
  //'0270_Gibson_Les_Paul_sf2_file', // detuned
  // '0270_JCLive_sf2_file', // broken: missing notes
  "0270_SBAWE32_sf2_file",
  //'0270_SBLive_sf2',
  //'0270_SoundBlasterOld_sf2',
  "0270_Stratocaster_sf2_file",
  // -1 octave
  "0271_GeneralUserGS_sf2_file",
  "0271_Stratocaster_sf2_file",
  // -1 octave
  "0272_Stratocaster_sf2_file",
  // -1 octave
  // Electric Guitar (muted): Guitar
  "0280_Aspirin_sf2_file",
  "0280_Chaos_sf2_file",
  // '0280_FluidR3_GM_sf2_file', // broken: wrong notes
  "0280_GeneralUserGS_sf2_file",
  "0280_JCLive_sf2_file",
  //'0280_LesPaul_sf2', // missing
  "0280_LesPaul_sf2_file",
  // not really muted..
  "0280_SBAWE32_sf2_file",
  //'0280_SBLive_sf2',
  //'0280_SoundBlasterOld_sf2',
  "0281_Aspirin_sf2_file",
  "0281_FluidR3_GM_sf2_file",
  "0281_GeneralUserGS_sf2_file",
  "0282_FluidR3_GM_sf2_file",
  // '0282_GeneralUserGS_sf2_file', // broken: missing notes
  // '0283_GeneralUserGS_sf2_file', // missing
  // Overdriven Guitar: Guitar
  "0290_Aspirin_sf2_file",
  "0290_Chaos_sf2_file",
  "0290_FluidR3_GM_sf2_file",
  "0290_GeneralUserGS_sf2_file",
  //'0290_JCLive_sf2_file', // detuned....
  //'0290_LesPaul_sf2', // broken
  "0290_LesPaul_sf2_file",
  "0290_SBAWE32_sf2_file",
  //'0290_SBLive_sf2',
  //'0290_SoundBlasterOld_sf2',
  // '0291_Aspirin_sf2_file', // broken
  // '0291_LesPaul_sf2', // broken
  "0291_LesPaul_sf2_file",
  "0291_SBAWE32_sf2_file",
  //'0291_SoundBlasterOld_sf2',
  "0292_Aspirin_sf2_file",
  // '0292_LesPaul_sf2', // broken
  "0292_LesPaul_sf2_file",
  // Distortion Guitar: Guitar
  "0300_Aspirin_sf2_file",
  "0300_Chaos_sf2_file",
  "0300_FluidR3_GM_sf2_file",
  "0300_GeneralUserGS_sf2_file",
  // '0300_JCLive_sf2_file', // broken
  // '0300_LesPaul_sf2', // broken
  "0300_LesPaul_sf2_file",
  //'0300_SBAWE32_sf2_file', // -2 octave
  //'0300_SBLive_sf2',
  //'0300_SoundBlasterOld_sf2',
  // '0301_Aspirin_sf2_file', // missing
  //'0301_FluidR3_GM_sf2_file', // weird broken bell
  // '0301_GeneralUserGS_sf2_file', // broken
  // '0301_JCLive_sf2_file', // broken
  // '0301_LesPaul_sf2', // missing
  // '0301_LesPaul_sf2_file', // + 1 oct?
  "0302_Aspirin_sf2_file",
  // '0302_GeneralUserGS_sf2_file', // not a guitar..
  //'0302_JCLive_sf2_file', // broken...
  // '0303_Aspirin_sf2_file', // guitar harmonic??
  "0304_Aspirin_sf2_file",
  // Guitar Harmonics: Guitar
  "0310_Aspirin_sf2_file",
  "0310_Chaos_sf2_file",
  "0310_FluidR3_GM_sf2_file",
  // weird..
  //'0310_GeneralUserGS_sf2_file', // weird..
  // '0310_JCLive_sf2_file', // weird
  //'0310_LesPaul_sf2', // missing
  //'0310_LesPaul_sf2_file', // wrong pitches
  //'0310_SBAWE32_sf2_file', // wrong pitches
  //'0310_SBLive_sf2',
  //'0310_SoundBlasterOld_sf2',
  //'0311_FluidR3_GM_sf2_file', // knackt
  //'0311_GeneralUserGS_sf2_file', // wrong notes
  // Acoustic Bass: Bass
  "0320_Aspirin_sf2_file",
  "0320_Chaos_sf2_file",
  "0320_FluidR3_GM_sf2_file",
  // '0320_GeneralUserGS_sf2_file', // missing notes
  "0320_JCLive_sf2_file",
  //'0320_SBLive_sf2',
  //'0320_SoundBlasterOld_sf2',
  // '0321_GeneralUserGS_sf2_file', // nice sound but missing notes
  // '0322_GeneralUserGS_sf2_file', // missing notes
  // Electric Bass (finger): Bass
  "0330_Aspirin_sf2_file",
  //'0330_Chaos_sf2_file', // same as last
  "0330_FluidR3_GM_sf2_file",
  // knackt..
  "0330_GeneralUserGS_sf2_file",
  // -1 oct
  "0330_JCLive_sf2_file",
  //'0330_SBLive_sf2',
  //'0330_SoundBlasterOld_sf2',
  //'0331_GeneralUserGS_sf2_file', // knackt
  // '0332_GeneralUserGS_sf2_file', // missing
  // Electric Bass (pick): Bass
  "0340_Aspirin_sf2_file",
  //'0340_Chaos_sf2_file', // same as last
  "0340_FluidR3_GM_sf2_file",
  "0340_GeneralUserGS_sf2_file",
  // -1oct
  "0340_JCLive_sf2_file",
  //'0340_SBLive_sf2',
  //'0340_SoundBlasterOld_sf2',
  "0341_Aspirin_sf2_file",
  //'0341_GeneralUserGS_sf2_file', // knackt
  // Fretless Bass: Bass
  "0350_Aspirin_sf2_file",
  // '0350_Chaos_sf2_file', // same as last
  //'0350_FluidR3_GM_sf2_file', // knackt
  //'0350_GeneralUserGS_sf2_file', // -1 oct + knackt
  "0350_JCLive_sf2_file",
  // weird detuned
  //'0350_SBLive_sf2',
  //'0350_SoundBlasterOld_sf2',
  //'0351_GeneralUserGS_sf2_file', // missing
  // Slap Bass 1: Bass
  "0360_Aspirin_sf2_file",
  "0360_Chaos_sf2_file",
  "0360_FluidR3_GM_sf2_file",
  // knackt
  //'0360_GeneralUserGS_sf2_file', // -1 oct
  "0360_JCLive_sf2_file",
  //'0360_SBLive_sf2',
  //'0360_SoundBlasterOld_sf2',
  //'0361_GeneralUserGS_sf2_file', // missing
  // Slap Bass 2: Bass
  "0370_Aspirin_sf2_file",
  // '0370_Chaos_sf2_file', // same as last
  "0370_FluidR3_GM_sf2_file",
  "0370_GeneralUserGS_sf2_file",
  "0370_JCLive_sf2_file",
  //'0370_SBLive_sf2',
  //'0370_SoundBlasterOld_sf2',
  //'0371_GeneralUserGS_sf2_file', // missing
  //'0372_GeneralUserGS_sf2_file', // detuned
  //'0385_GeneralUserGS_sf2_file', // missing
  // Synth Bass 1: Bass
  "0380_Aspirin_sf2_file",
  // laut!
  "0380_Chaos_sf2_file",
  "0380_FluidR3_GM_sf2_file",
  // bisl detuned
  // '0380_GeneralUserGS_sf2_file', // laut
  "0380_JCLive_sf2_file",
  //'0380_SBLive_sf2',
  //'0380_SoundBlasterOld_sf2',
  "0381_FluidR3_GM_sf2_file",
  // bisl detuned
  "0381_GeneralUserGS_sf2_file",
  //'0382_FluidR3_GM_sf2_file', // kein synth bass
  "0382_GeneralUserGS_sf2_file",
  "0383_GeneralUserGS_sf2_file",
  "0384_GeneralUserGS_sf2_file",
  //'0386_GeneralUserGS_sf2_file', // knackt
  "0387_GeneralUserGS_sf2_file",
  // Synth Bass 2: Bass
  "0390_Aspirin_sf2_file",
  // '0390_Chaos_sf2_file', // same as last
  "0390_FluidR3_GM_sf2_file",
  "0390_GeneralUserGS_sf2_file",
  "0390_JCLive_sf2_file",
  //'0390_SBLive_sf2',
  //'0390_SoundBlasterOld_sf2',
  "0391_FluidR3_GM_sf2_file",
  // lauuut
  // '0391_GeneralUserGS_sf2_file', // missing
  //'0391_SoundBlasterOld_sf2',
  "0392_FluidR3_GM_sf2_file",
  // lauut
  //'0392_GeneralUserGS_sf2_file', // kein synth und -1oct
  "0393_GeneralUserGS_sf2_file",
  // lauuuut
  // Violin: Strings
  "0400_Aspirin_sf2_file",
  "0400_Chaos_sf2_file",
  "0400_FluidR3_GM_sf2_file",
  "0400_GeneralUserGS_sf2_file",
  "0400_JCLive_sf2_file",
  //'0400_SBLive_sf2',
  //'0400_SoundBlasterOld_sf2',
  "0401_Aspirin_sf2_file",
  // synth
  "0401_FluidR3_GM_sf2_file",
  "0401_GeneralUserGS_sf2_file",
  "0402_GeneralUserGS_sf2_file",
  // pizzicato
  // Viola: Strings
  "0410_Aspirin_sf2_file",
  // '0410_Chaos_sf2_file', // laut und sehr unstringy
  "0410_FluidR3_GM_sf2_file",
  "0410_GeneralUserGS_sf2_file",
  "0410_JCLive_sf2_file",
  // <3
  //'0410_SBLive_sf2',
  //'0410_SoundBlasterOld_sf2',
  "0411_FluidR3_GM_sf2_file",
  // Cello: Strings
  "0420_Aspirin_sf2_file",
  // '0420_Chaos_sf2_file', // kein cello und laut
  "0420_FluidR3_GM_sf2_file",
  "0420_GeneralUserGS_sf2_file",
  "0420_JCLive_sf2_file",
  //'0420_SBLive_sf2',
  //'0420_SoundBlasterOld_sf2',
  "0421_FluidR3_GM_sf2_file",
  "0421_GeneralUserGS_sf2_file",
  // pizzicato
  // Contrabass: Strings
  "0430_Aspirin_sf2_file",
  "0430_Chaos_sf2_file",
  // '0430_FluidR3_GM_sf2_file', // missing notes
  "0430_GeneralUserGS_sf2_file",
  //'0430_JCLive_sf2_file', // -1 oct und meh
  //'0430_SBLive_sf2',
  //'0430_SoundBlasterOld_sf2',
  // '0431_FluidR3_GM_sf2_file', // missing notes
  // Tremolo Strings: Strings
  "0440_Aspirin_sf2_file",
  "0440_Chaos_sf2_file",
  //'0440_FluidR3_GM_sf2_file', // huuuge
  "0440_GeneralUserGS_sf2_file",
  "0440_JCLive_sf2_file",
  //'0440_SBLive_sf2',
  //'0440_SoundBlasterOld_sf2',
  "0441_GeneralUserGS_sf2_file",
  "0442_GeneralUserGS_sf2_file",
  // Pizzicato Strings: Strings
  "0450_Aspirin_sf2_file",
  "0450_Chaos_sf2_file",
  // same as last
  "0450_FluidR3_GM_sf2_file",
  // chrono trigger flashback
  "0450_GeneralUserGS_sf2_file",
  // -1 oct?
  "0450_JCLive_sf2_file",
  // filter env
  //'0450_SBLive_sf2',
  //'0450_SoundBlasterOld_sf2',
  "0451_FluidR3_GM_sf2_file",
  // Orchestral Harp: Strings
  "0460_Aspirin_sf2_file",
  // '0460_Chaos_sf2_file', // knackt
  "0460_FluidR3_GM_sf2_file",
  "0460_GeneralUserGS_sf2_file",
  "0460_JCLive_sf2_file",
  //'0460_SBLive_sf2',
  //'0460_SoundBlasterOld_sf2',
  "0461_FluidR3_GM_sf2_file",
  // Timpani: Strings
  "0470_Aspirin_sf2_file",
  "0470_Chaos_sf2_file",
  "0470_FluidR3_GM_sf2_file",
  "0470_GeneralUserGS_sf2_file",
  // '0470_JCLive_sf2_file', // wrong pitches
  //'0470_SBLive_sf2',
  //'0470_SoundBlasterOld_sf2',
  "0471_FluidR3_GM_sf2_file",
  "0471_GeneralUserGS_sf2_file",
  // String Ensemble 1: Ensemble
  "0480_Aspirin_sf2_file",
  "0480_Chaos_sf2_file",
  "0480_FluidR3_GM_sf2_file",
  // large
  "0480_GeneralUserGS_sf2_file",
  "0480_JCLive_sf2_file",
  //'0480_SBLive_sf2',
  //'0480_SoundBlasterOld_sf2',
  // these dont work..
  //'04810_GeneralUserGS_sf2_file', // missing notes + brass
  //'04811_GeneralUserGS_sf2_file',  // missing notes + brass
  //'04812_GeneralUserGS_sf2_file',
  //'04813_GeneralUserGS_sf2_file',
  //'04814_GeneralUserGS_sf2_file',
  //'04815_GeneralUserGS_sf2_file',
  //'04816_GeneralUserGS_sf2_file',
  //'04817_GeneralUserGS_sf2_file',
  "0481_Aspirin_sf2_file",
  "0481_FluidR3_GM_sf2_file",
  // brass
  "0481_GeneralUserGS_sf2_file",
  "0482_Aspirin_sf2_file",
  // brass
  "0482_GeneralUserGS_sf2_file",
  "0483_GeneralUserGS_sf2_file",
  // brass
  // another block of buggyness:
  //'0484_GeneralUserGS_sf2_file', // keys?! + knackt
  //'0485_GeneralUserGS_sf2_file', // missing notes
  //'0486_GeneralUserGS_sf2_file',
  //'0487_GeneralUserGS_sf2_file',
  //'0488_GeneralUserGS_sf2_file',
  //'0489_GeneralUserGS_sf2_file',
  // String Ensemble 2: Ensemble
  "0490_Aspirin_sf2_file",
  "0490_Chaos_sf2_file",
  "0490_FluidR3_GM_sf2_file",
  // large
  "0490_GeneralUserGS_sf2_file",
  "0490_JCLive_sf2_file",
  //'0490_SBLive_sf2',
  //'0490_SoundBlasterOld_sf2',
  "0491_GeneralUserGS_sf2_file",
  "0492_GeneralUserGS_sf2_file",
  // Synth Strings 1: Ensemble
  "0500_Aspirin_sf2_file",
  // '0500_Chaos_sf2_file', // same as above
  //'0500_FluidR3_GM_sf2_file', // detune + knack
  "0500_GeneralUserGS_sf2_file",
  "0500_JCLive_sf2_file",
  //'0500_SBLive_sf2',
  //'0500_SoundBlasterOld_sf2',
  "0501_FluidR3_GM_sf2_file",
  // '0501_GeneralUserGS_sf2_file', // crackles
  // '0502_FluidR3_GM_sf2_file', // missing
  "0502_GeneralUserGS_sf2_file",
  "0503_FluidR3_GM_sf2_file",
  // large
  // '0504_FluidR3_GM_sf2_file', // missing
  "0505_FluidR3_GM_sf2_file",
  // Synth Strings 2: Ensemble
  "0510_Aspirin_sf2_file",
  "0510_Chaos_sf2_file",
  // '0510_FluidR3_GM_sf2_file', // detune + crackle
  "0510_GeneralUserGS_sf2_file",
  //'0510_JCLive_sf2_file', // laarge and meh
  //'0510_SBLive_sf2', // missing
  //'0510_SoundBlasterOld_sf2',
  "0511_GeneralUserGS_sf2_file",
  // crackly
  //'0511_SoundBlasterOld_sf2',
  // Choir Aahs: Ensemble
  "0520_Aspirin_sf2_file",
  "0520_Chaos_sf2_file",
  "0520_FluidR3_GM_sf2_file",
  "0520_GeneralUserGS_sf2_file",
  "0520_JCLive_sf2_file",
  //'0520_SBLive_sf2',
  "0520_Soul_Ahhs_sf2_file",
  // large
  //'0520_SoundBlasterOld_sf2',
  "0521_FluidR3_GM_sf2_file",
  "0521_Soul_Ahhs_sf2_file",
  // large
  //'0521_SoundBlasterOld_sf2',
  "0522_Soul_Ahhs_sf2_file",
  // large
  // Voice Oohs: Ensemble
  "0530_Aspirin_sf2_file",
  "0530_Chaos_sf2_file",
  "0530_FluidR3_GM_sf2_file",
  "0530_GeneralUserGS_sf2_file",
  //'0530_JCLive_sf2_file', // same as above
  //'0530_SBLive_sf2',
  // '0530_Soul_Ahhs_sf2_file', // not ooh
  //'0530_SoundBlasterOld_sf2',
  "0531_FluidR3_GM_sf2_file",
  // '0531_GeneralUserGS_sf2_file', // ends crackle
  "0531_JCLive_sf2_file",
  //'0531_SoundBlasterOld_sf2',
  // Synth Choir: Ensemble
  "0540_Aspirin_sf2_file",
  "0540_Chaos_sf2_file",
  "0540_FluidR3_GM_sf2_file",
  "0540_GeneralUserGS_sf2_file",
  //'0540_JCLive_sf2_file', // large + crackles
  //'0540_SBLive_sf2',
  //'0540_SoundBlasterOld_sf2',
  "0541_FluidR3_GM_sf2_file",
  // Orchestra Hit: Ensemble
  "0550_Aspirin_sf2_file",
  "0550_Chaos_sf2_file",
  "0550_FluidR3_GM_sf2_file",
  "0550_GeneralUserGS_sf2_file",
  //'0550_JCLive_sf2_file', // same as above
  //'0550_SBLive_sf2',
  //'0550_SoundBlasterOld_sf2',
  //'0551_Aspirin_sf2_file', // not an orch hit..
  "0551_FluidR3_GM_sf2_file",
  // Trumpet: Brass
  "0560_Aspirin_sf2_file",
  "0560_Chaos_sf2_file",
  "0560_FluidR3_GM_sf2_file",
  //'0560_GeneralUserGS_sf2_file', // -1 oct
  "0560_JCLive_sf2_file",
  //'0560_SBLive_sf2',
  //'0560_SoundBlasterOld_sf2',
  // Trombone: Brass
  "0570_Aspirin_sf2_file",
  "0570_Chaos_sf2_file",
  "0570_FluidR3_GM_sf2_file",
  "0570_GeneralUserGS_sf2_file",
  //'0570_JCLive_sf2_file', // -1oct
  //'0570_SBLive_sf2',
  //'0570_SoundBlasterOld_sf2',
  "0571_GeneralUserGS_sf2_file",
  // Tuba: Brass
  "0580_Aspirin_sf2_file",
  "0580_Chaos_sf2_file",
  "0580_FluidR3_GM_sf2_file",
  "0580_GeneralUserGS_sf2_file",
  //'0580_JCLive_sf2_file', // -1oct
  //'0580_SBLive_sf2',
  //'0580_SoundBlasterOld_sf2',
  //'0581_GeneralUserGS_sf2_file', // missing
  // Muted Trumpet: Brass
  "0590_Aspirin_sf2_file",
  "0590_Chaos_sf2_file",
  "0590_FluidR3_GM_sf2_file",
  "0590_GeneralUserGS_sf2_file",
  "0590_JCLive_sf2_file",
  // winner
  //'0590_SBLive_sf2',
  //'0590_SoundBlasterOld_sf2',
  // '0591_GeneralUserGS_sf2_file', // missing
  // French Horn: Brass
  "0600_Aspirin_sf2_file",
  //'0600_Chaos_sf2_file', // weird jumps
  "0600_FluidR3_GM_sf2_file",
  // tiny crackles
  "0600_GeneralUserGS_sf2_file",
  // tiny crackles
  "0600_JCLive_sf2_file",
  // tiny crackles
  //'0600_SBLive_sf2',
  //'0600_SoundBlasterOld_sf2',
  "0601_FluidR3_GM_sf2_file",
  //'0601_GeneralUserGS_sf2_file', // tiny crackles
  // '0602_GeneralUserGS_sf2_file', // bad gain diffs
  // '0603_GeneralUserGS_sf2_file', // tiny crackles
  // Brass Section: Brass
  "0610_Aspirin_sf2_file",
  "0610_Chaos_sf2_file",
  "0610_FluidR3_GM_sf2_file",
  // large
  "0610_GeneralUserGS_sf2_file",
  "0610_JCLive_sf2_file",
  //'0610_SBLive_sf2',
  //'0610_SoundBlasterOld_sf2',
  // '0611_GeneralUserGS_sf2_file', // missing sounds
  // '0612_GeneralUserGS_sf2_file',
  //'0613_GeneralUserGS_sf2_file', // -1 oct
  // '0614_GeneralUserGS_sf2_file', // missing sounds
  // '0615_GeneralUserGS_sf2_file', // missing sounds
  // Synth Brass 1: Brass
  "0620_Aspirin_sf2_file",
  //'0620_Chaos_sf2_file', // weird gain diff
  "0620_FluidR3_GM_sf2_file",
  //'0620_GeneralUserGS_sf2_file', // loooud
  // '0620_JCLive_sf2_file', // weird gain diff
  //'0620_SBLive_sf2',
  //'0620_SoundBlasterOld_sf2',
  "0621_Aspirin_sf2_file",
  "0621_FluidR3_GM_sf2_file",
  // '0621_GeneralUserGS_sf2_file', // detune + loooud
  //'0622_FluidR3_GM_sf2_file', // loud..
  //'0622_GeneralUserGS_sf2_file', // loud + crackles
  // Synth Brass 2: Brass
  "0630_Aspirin_sf2_file",
  "0630_Chaos_sf2_file",
  "0630_FluidR3_GM_sf2_file",
  //'0630_GeneralUserGS_sf2_file', // detune + looud
  "0630_JCLive_sf2_file",
  //'0630_SBLive_sf2',
  //'0630_SoundBlasterOld_sf2',
  // '0631_Aspirin_sf2_file', // looud + detune + gain diffs
  "0631_FluidR3_GM_sf2_file",
  //'0631_GeneralUserGS_sf2_file', // crackles
  "0632_FluidR3_GM_sf2_file",
  "0633_FluidR3_GM_sf2_file",
  // tiny crackles
  // Soprano Sax: Reed
  "0640_Aspirin_sf2_file",
  "0640_Chaos_sf2_file",
  "0640_FluidR3_GM_sf2_file",
  // '0640_GeneralUserGS_sf2_file', // crackles
  "0640_JCLive_sf2_file",
  //'0640_SBLive_sf2',
  //'0640_SoundBlasterOld_sf2',
  "0641_FluidR3_GM_sf2_file",
  // Alto Sax: Reed
  //'0650_Aspirin_sf2_file', // this is not an alto sax
  "0650_Chaos_sf2_file",
  "0650_FluidR3_GM_sf2_file",
  // sounds really stringy
  "0650_GeneralUserGS_sf2_file",
  "0650_JCLive_sf2_file",
  //'0650_SBLive_sf2',
  //'0650_SoundBlasterOld_sf2',
  "0651_Aspirin_sf2_file",
  "0651_FluidR3_GM_sf2_file",
  // really stringy
  // Tenor Sax: Reed
  "0660_Aspirin_sf2_file",
  "0660_Chaos_sf2_file",
  //'0660_FluidR3_GM_sf2_file', // weird pitches
  "0660_GeneralUserGS_sf2_file",
  "0660_JCLive_sf2_file",
  //'0660_SBLive_sf2',
  //'0660_SoundBlasterOld_sf2',
  // '0661_FluidR3_GM_sf2_file', // weird pitches
  // '0661_GeneralUserGS_sf2_file', // missing
  // Baritone Sax: Reed
  "0670_Aspirin_sf2_file",
  "0670_Chaos_sf2_file",
  "0670_FluidR3_GM_sf2_file",
  // huge
  "0670_GeneralUserGS_sf2_file",
  "0670_JCLive_sf2_file",
  //'0670_SBLive_sf2',
  //'0670_SoundBlasterOld_sf2',
  "0671_FluidR3_GM_sf2_file",
  // huge
  // Oboe: Reed
  //'0680_Aspirin_sf2_file', // tiny crackles
  "0680_Chaos_sf2_file",
  // tiny crackles
  "0680_FluidR3_GM_sf2_file",
  // tiny crackles
  "0680_GeneralUserGS_sf2_file",
  "0680_JCLive_sf2_file",
  //'0680_SBLive_sf2',
  //'0680_SoundBlasterOld_sf2',
  "0681_FluidR3_GM_sf2_file",
  // tiny crackles
  // English Horn: Reed
  "0690_Aspirin_sf2_file",
  //'0690_Chaos_sf2_file', // detuned
  "0690_FluidR3_GM_sf2_file",
  //'0690_GeneralUserGS_sf2_file', // +1 oct
  "0690_JCLive_sf2_file",
  //'0690_SBLive_sf2',
  //'0690_SoundBlasterOld_sf2',
  "0691_FluidR3_GM_sf2_file",
  // tiny crackles
  // Bassoon: Reed
  //'0700_Aspirin_sf2_file', // detune + gain diffs
  // '0700_Chaos_sf2_file', // detune + crackles
  "0700_FluidR3_GM_sf2_file",
  "0700_GeneralUserGS_sf2_file",
  // tiny crackles
  "0700_JCLive_sf2_file",
  //'0700_SBLive_sf2',
  //'0700_SoundBlasterOld_sf2',
  "0701_FluidR3_GM_sf2_file",
  // tiny crackles
  //'0701_GeneralUserGS_sf2_file', // missing
  // Clarinet: Reed
  "0710_Aspirin_sf2_file",
  // tiny crackles
  "0710_Chaos_sf2_file",
  // tiny crackles
  "0710_FluidR3_GM_sf2_file",
  "0710_GeneralUserGS_sf2_file",
  "0710_JCLive_sf2_file",
  //'0710_SBLive_sf2',
  //'0710_SoundBlasterOld_sf2',
  "0711_FluidR3_GM_sf2_file",
  // Piccolo: Pipe
  "0720_Aspirin_sf2_file",
  // +1oct
  // '0720_Chaos_sf2_file', // not a piccolo
  "0720_FluidR3_GM_sf2_file",
  "0720_GeneralUserGS_sf2_file",
  // crackles
  "0720_JCLive_sf2_file",
  //'0720_SBLive_sf2',
  //'0720_SoundBlasterOld_sf2',
  "0721_FluidR3_GM_sf2_file",
  //'0721_SoundBlasterOld_sf2',
  // Flute: Pipe
  "0730_Aspirin_sf2_file",
  //'0730_Chaos_sf2_file', // etune
  "0730_FluidR3_GM_sf2_file",
  "0730_GeneralUserGS_sf2_file",
  "0730_JCLive_sf2_file",
  //'0730_SBLive_sf2',
  //'0730_SoundBlasterOld_sf2',
  //'0731_Aspirin_sf2_file', // not a flute
  "0731_FluidR3_GM_sf2_file",
  //'0731_SoundBlasterOld_sf2',
  // Recorder: Pipe
  "0740_Aspirin_sf2_file",
  "0740_Chaos_sf2_file",
  "0740_FluidR3_GM_sf2_file",
  "0740_GeneralUserGS_sf2_file",
  "0740_JCLive_sf2_file",
  //'0740_SBLive_sf2',
  //'0740_SoundBlasterOld_sf2',
  // '0741_GeneralUserGS_sf2_file', // missing
  // Pan Flute: Pipe
  "0750_Aspirin_sf2_file",
  // staccato
  "0750_Chaos_sf2_file",
  "0750_FluidR3_GM_sf2_file",
  "0750_GeneralUserGS_sf2_file",
  // crackles
  "0750_JCLive_sf2_file",
  //'0750_SBLive_sf2',
  //'0750_SoundBlasterOld_sf2',
  "0751_Aspirin_sf2_file",
  "0751_FluidR3_GM_sf2_file",
  "0751_GeneralUserGS_sf2_file",
  // crackles
  //'0751_SoundBlasterOld_sf2',
  // Blown bottle: Pipe
  // '0760_Aspirin_sf2_file', // same as below w crackle
  "0760_Chaos_sf2_file",
  "0760_FluidR3_GM_sf2_file",
  "0760_GeneralUserGS_sf2_file",
  "0760_JCLive_sf2_file",
  //'0760_SBLive_sf2',
  //'0760_SoundBlasterOld_sf2',
  "0761_FluidR3_GM_sf2_file",
  // '0761_GeneralUserGS_sf2_file', // missing
  //'0761_SoundBlasterOld_sf2',
  // '0762_GeneralUserGS_sf2_file', // missing
  // Shakuhachi: Pipe
  "0770_Aspirin_sf2_file",
  // staccato
  //'0770_Chaos_sf2_file', // not shakuhachi
  "0770_FluidR3_GM_sf2_file",
  "0770_GeneralUserGS_sf2_file",
  "0770_JCLive_sf2_file",
  //'0770_SBLive_sf2',
  //'0770_SoundBlasterOld_sf2',
  "0771_FluidR3_GM_sf2_file",
  // '0771_GeneralUserGS_sf2_file', // missing
  // '0772_GeneralUserGS_sf2_file', // missing
  // Whistle: Pipe
  "0780_Aspirin_sf2_file",
  // crackles
  "0780_Chaos_sf2_file",
  // crackles
  "0780_FluidR3_GM_sf2_file",
  //'0780_GeneralUserGS_sf2_file', // loud..
  "0780_JCLive_sf2_file",
  // crackles
  //'0780_SBLive_sf2',
  //'0780_SoundBlasterOld_sf2',
  // '0781_GeneralUserGS_sf2_file', // detune + crackles
  // Ocarina: Pipe
  "0790_Aspirin_sf2_file",
  // tiny crackles
  //'0790_Chaos_sf2_file', // same as above
  "0790_FluidR3_GM_sf2_file",
  "0790_GeneralUserGS_sf2_file",
  "0790_JCLive_sf2_file",
  // crackles
  //'0790_SBLive_sf2',
  //'0790_SoundBlasterOld_sf2',
  //'0791_GeneralUserGS_sf2_file', // missing
  // Lead 1 (square): Synth Lead
  "0800_Aspirin_sf2_file",
  "0800_Chaos_sf2_file",
  "0800_FluidR3_GM_sf2_file",
  // '0800_GeneralUserGS_sf2_file', // detuned
  // '0800_JCLive_sf2_file', // detuned
  //'0800_SBLive_sf2',
  //'0800_SoundBlasterOld_sf2',
  //'0801_FluidR3_GM_sf2_file', // detune
  // '0801_GeneralUserGS_sf2_file', // detune
  // Lead 2 (sawtooth): Synth Lead
  "0810_Aspirin_sf2_file",
  "0810_Chaos_sf2_file",
  "0810_FluidR3_GM_sf2_file",
  "0810_GeneralUserGS_sf2_file",
  "0810_JCLive_sf2_file",
  //'0810_SBLive_sf2',
  //'0810_SoundBlasterOld_sf2',
  "0811_Aspirin_sf2_file",
  "0811_GeneralUserGS_sf2_file",
  //'0811_SoundBlasterOld_sf2',
  // Lead 3 (calliope): Synth Lead
  "0820_Aspirin_sf2_file",
  "0820_Chaos_sf2_file",
  "0820_FluidR3_GM_sf2_file",
  "0820_GeneralUserGS_sf2_file",
  "0820_JCLive_sf2_file",
  // +1 oct
  //'0820_SBLive_sf2',
  //'0820_SoundBlasterOld_sf2',
  "0821_FluidR3_GM_sf2_file",
  "0821_GeneralUserGS_sf2_file",
  //'0821_SoundBlasterOld_sf2',
  // '0822_GeneralUserGS_sf2_file', // missing
  //'0823_GeneralUserGS_sf2_file', // missing
  // Lead 4 (chiff): Synth Lead
  "0830_Aspirin_sf2_file",
  // '0830_Chaos_sf2_file', // same as above
  "0830_FluidR3_GM_sf2_file",
  "0830_GeneralUserGS_sf2_file",
  "0830_JCLive_sf2_file",
  // flute synth
  //'0830_SBLive_sf2',
  //'0830_SoundBlasterOld_sf2',
  "0831_FluidR3_GM_sf2_file",
  "0831_GeneralUserGS_sf2_file",
  //'0831_SoundBlasterOld_sf2',
  // Lead 5 (charang): Synth Lead
  "0840_Aspirin_sf2_file",
  "0840_Chaos_sf2_file",
  "0840_FluidR3_GM_sf2_file",
  "0840_GeneralUserGS_sf2_file",
  "0840_JCLive_sf2_file",
  // detune?
  //'0840_SBLive_sf2',
  //'0840_SoundBlasterOld_sf2',
  "0841_Aspirin_sf2_file",
  "0841_Chaos_sf2_file",
  "0841_FluidR3_GM_sf2_file",
  "0841_GeneralUserGS_sf2_file",
  //'0841_JCLive_sf2_file', // +1oct + detune
  //'0841_SoundBlasterOld_sf2',
  "0842_FluidR3_GM_sf2_file",
  // Lead 6 (voice): Synth Lead
  "0850_Aspirin_sf2_file",
  // '0850_Chaos_sf2_file', // same as above
  "0850_FluidR3_GM_sf2_file",
  // '0850_GeneralUserGS_sf2_file', // no voice
  "0850_JCLive_sf2_file",
  // more a flute
  //'0850_SBLive_sf2',
  //'0850_SoundBlasterOld_sf2',
  "0851_FluidR3_GM_sf2_file",
  "0851_GeneralUserGS_sf2_file",
  "0851_JCLive_sf2_file",
  //'0851_SoundBlasterOld_sf2',
  // Lead 7 (fifths): Synth Lead
  "0860_Aspirin_sf2_file",
  "0860_Chaos_sf2_file",
  // '0860_FluidR3_GM_sf2_file', // loud and not fitting
  "0860_GeneralUserGS_sf2_file",
  "0860_JCLive_sf2_file",
  //'0860_SBLive_sf2',
  //'0860_SoundBlasterOld_sf2',
  "0861_Aspirin_sf2_file",
  // '0861_FluidR3_GM_sf2_file', // lout and not fitting
  //'0861_SoundBlasterOld_sf2',
  // Lead 8 (bass + lead): Synth Lead
  "0870_Aspirin_sf2_file",
  "0870_Chaos_sf2_file",
  "0870_FluidR3_GM_sf2_file",
  "0870_GeneralUserGS_sf2_file",
  "0870_JCLive_sf2_file",
  //'0870_SBLive_sf2',
  //'0870_SoundBlasterOld_sf2',
  // '0871_GeneralUserGS_sf2_file', // loud + detune
  //'0872_GeneralUserGS_sf2_file', // loud
  //'0873_GeneralUserGS_sf2_file', // loud
  // Pad 1 (new age): Synth Pad
  "0880_Aspirin_sf2_file",
  "0880_Chaos_sf2_file",
  "0880_FluidR3_GM_sf2_file",
  "0880_GeneralUserGS_sf2_file",
  "0880_JCLive_sf2_file",
  //'0880_SBLive_sf2',
  //'0880_SoundBlasterOld_sf2',
  "0881_Aspirin_sf2_file",
  "0881_FluidR3_GM_sf2_file",
  "0881_GeneralUserGS_sf2_file",
  //'0881_SoundBlasterOld_sf2',
  "0882_Aspirin_sf2_file",
  // staccato
  // '0882_FluidR3_GM_sf2_file', // missing
  "0882_GeneralUserGS_sf2_file",
  //'0883_GeneralUserGS_sf2_file', // missing
  // '0884_GeneralUserGS_sf2_file', // broken
  "0885_GeneralUserGS_sf2_file",
  //'0886_GeneralUserGS_sf2_file', // not a pad
  "0887_GeneralUserGS_sf2_file",
  //'0888_GeneralUserGS_sf2_file', // not a pad
  //'0889_GeneralUserGS_sf2_file', // not a pad
  // Pad 2 (warm): Synth Pad
  "0890_Aspirin_sf2_file",
  "0890_Chaos_sf2_file",
  "0890_FluidR3_GM_sf2_file",
  "0890_GeneralUserGS_sf2_file",
  // 1mb large
  "0890_JCLive_sf2_file",
  //'0890_SBLive_sf2',
  //'0890_SoundBlasterOld_sf2',
  "0891_Aspirin_sf2_file",
  "0891_FluidR3_GM_sf2_file",
  // '0891_GeneralUserGS_sf2_file', // noise
  // Pad 3 (polysynth): Synth Pad
  //'0900_Aspirin_sf2_file', // same as belo
  "0900_Chaos_sf2_file",
  "0900_FluidR3_GM_sf2_file",
  "0900_GeneralUserGS_sf2_file",
  "0900_JCLive_sf2_file",
  // a bit plucky for a pad
  //'0900_SBLive_sf2',
  //'0900_SoundBlasterOld_sf2',
  "0901_Aspirin_sf2_file",
  "0901_FluidR3_GM_sf2_file",
  "0901_GeneralUserGS_sf2_file",
  //'0901_SoundBlasterOld_sf2',
  // Pad 4 (choir): Synth Pad
  "0910_Aspirin_sf2_file",
  //'0910_Chaos_sf2_file', // +1oct
  "0910_FluidR3_GM_sf2_file",
  "0910_GeneralUserGS_sf2_file",
  "0910_JCLive_sf2_file",
  //'0910_SBLive_sf2',
  //'0910_SoundBlasterOld_sf2',
  // '0911_Aspirin_sf2_file', // fluty, crackles
  "0911_GeneralUserGS_sf2_file",
  "0911_JCLive_sf2_file",
  // the only choiry pad
  //'0911_SoundBlasterOld_sf2',
  // Pad 5 (bowed): Synth Pad
  "0920_Aspirin_sf2_file",
  //'0920_Chaos_sf2_file', // same as above
  //'0920_FluidR3_GM_sf2_file', // detuned?
  "0920_GeneralUserGS_sf2_file",
  "0920_JCLive_sf2_file",
  //'0920_SBLive_sf2',
  //'0920_SoundBlasterOld_sf2',
  "0921_Aspirin_sf2_file",
  "0921_GeneralUserGS_sf2_file",
  //'0921_SoundBlasterOld_sf2',
  // Pad 6 (metallic): Synth Pad
  "0930_Aspirin_sf2_file",
  "0930_Chaos_sf2_file",
  "0930_FluidR3_GM_sf2_file",
  // little crackles
  "0930_GeneralUserGS_sf2_file",
  // '0930_JCLive_sf2_file', // buggy zones: guitar / synth
  //'0930_SBLive_sf2',
  //'0930_SoundBlasterOld_sf2',
  "0931_Aspirin_sf2_file",
  // sitar
  "0931_FluidR3_GM_sf2_file",
  "0931_GeneralUserGS_sf2_file",
  // guitar
  //'0931_SoundBlasterOld_sf2',
  // Pad 7 (halo): Synth Pad
  // '0940_Aspirin_sf2_file', // same as below
  "0940_Chaos_sf2_file",
  "0940_FluidR3_GM_sf2_file",
  "0940_GeneralUserGS_sf2_file",
  "0940_JCLive_sf2_file",
  //'0940_SBLive_sf2',
  //'0940_SoundBlasterOld_sf2',
  "0941_Aspirin_sf2_file",
  "0941_FluidR3_GM_sf2_file",
  "0941_GeneralUserGS_sf2_file",
  "0941_JCLive_sf2_file",
  // Pad 8 (sweep): Synth Pad
  "0950_Aspirin_sf2_file",
  "0950_Chaos_sf2_file",
  "0950_FluidR3_GM_sf2_file",
  "0950_GeneralUserGS_sf2_file",
  "0950_JCLive_sf2_file",
  //'0950_SBLive_sf2',
  //'0950_SoundBlasterOld_sf2',
  "0951_FluidR3_GM_sf2_file",
  "0951_GeneralUserGS_sf2_file",
  // FX 1 (rain): Synth Effects
  //'0960_Aspirin_sf2_file', //mixed samples?
  "0960_Chaos_sf2_file",
  // pad?
  "0960_FluidR3_GM_sf2_file",
  // ???
  "0960_GeneralUserGS_sf2_file",
  // pad
  // '0960_JCLive_sf2_file', // mixed samples?
  //'0960_SBLive_sf2',
  //'0960_SoundBlasterOld_sf2',
  "0961_Aspirin_sf2_file",
  "0961_FluidR3_GM_sf2_file",
  // '0961_GeneralUserGS_sf2_file', // ?!?!
  //'0961_SoundBlasterOld_sf2',
  "0962_GeneralUserGS_sf2_file",
  // FX 2 (soundtrack): Synth Effects
  "0970_Aspirin_sf2_file",
  //'0970_Chaos_sf2_file', // wrong pitch
  "0970_FluidR3_GM_sf2_file",
  "0970_GeneralUserGS_sf2_file",
  // not looping..
  //'0970_JCLive_sf2_file', // wrong pitch
  //'0970_SBLive_sf2',
  //'0970_SoundBlasterOld_sf2',
  "0971_FluidR3_GM_sf2_file",
  "0971_GeneralUserGS_sf2_file",
  //'0971_SoundBlasterOld_sf2',
  // FX 3 (crystal): Synth Effects
  "0980_Aspirin_sf2_file",
  "0980_Chaos_sf2_file",
  // '0980_FluidR3_GM_sf2_file', // some notes are weird
  "0980_GeneralUserGS_sf2_file",
  "0980_JCLive_sf2_file",
  //'0980_SBLive_sf2',
  //'0980_SoundBlasterOld_sf2',
  "0981_Aspirin_sf2_file",
  // strings
  "0981_FluidR3_GM_sf2_file",
  // mallet
  "0981_GeneralUserGS_sf2_file",
  //'0981_SoundBlasterOld_sf2',
  "0982_GeneralUserGS_sf2_file",
  "0983_GeneralUserGS_sf2_file",
  // guitar
  "0984_GeneralUserGS_sf2_file",
  // FX 4 (atmosphere): Synth Effects
  "0990_Aspirin_sf2_file",
  // pad
  "0990_Chaos_sf2_file",
  // pad
  "0990_FluidR3_GM_sf2_file",
  // guitar
  "0990_GeneralUserGS_sf2_file",
  // guitar
  "0990_JCLive_sf2_file",
  // pad
  //'0990_SBLive_sf2',
  //'0990_SoundBlasterOld_sf2',
  "0991_Aspirin_sf2_file",
  // guitar
  "0991_FluidR3_GM_sf2_file",
  // pad
  "0991_GeneralUserGS_sf2_file",
  // pad
  "0991_JCLive_sf2_file",
  // guitar
  //'0991_SoundBlasterOld_sf2',
  "0992_FluidR3_GM_sf2_file",
  // pad
  "0992_JCLive_sf2_file",
  // guitar
  "0993_JCLive_sf2_file",
  // guitar
  "0994_JCLive_sf2_file",
  // guitar
  // FX 5 (brightness): Synth Effects
  "1000_Aspirin_sf2_file",
  "1000_Chaos_sf2_file",
  "1000_FluidR3_GM_sf2_file",
  "1000_GeneralUserGS_sf2_file",
  "1000_JCLive_sf2_file",
  //'1000_SBLive_sf2',
  //'1000_SoundBlasterOld_sf2',
  "1001_Aspirin_sf2_file",
  "1001_FluidR3_GM_sf2_file",
  "1001_GeneralUserGS_sf2_file",
  "1001_JCLive_sf2_file",
  //'1001_SoundBlasterOld_sf2',
  "1002_Aspirin_sf2_file",
  "1002_FluidR3_GM_sf2_file",
  "1002_GeneralUserGS_sf2_file",
  // FX 6 (goblins): Synth Effects
  "1010_Aspirin_sf2_file",
  "1010_Chaos_sf2_file",
  "1010_FluidR3_GM_sf2_file",
  "1010_GeneralUserGS_sf2_file",
  "1010_JCLive_sf2_file",
  //'1010_SBLive_sf2',
  //'1010_SoundBlasterOld_sf2',
  "1011_Aspirin_sf2_file",
  "1011_FluidR3_GM_sf2_file",
  "1011_JCLive_sf2_file",
  "1012_Aspirin_sf2_file",
  // FX 7 (echoes): Synth Effects
  "1020_Aspirin_sf2_file",
  "1020_Chaos_sf2_file",
  "1020_FluidR3_GM_sf2_file",
  "1020_GeneralUserGS_sf2_file",
  "1020_JCLive_sf2_file",
  //'1020_SBLive_sf2',
  //'1020_SoundBlasterOld_sf2',
  "1021_Aspirin_sf2_file",
  "1021_FluidR3_GM_sf2_file",
  "1021_GeneralUserGS_sf2_file",
  "1021_JCLive_sf2_file",
  //'1021_SoundBlasterOld_sf2',
  "1022_GeneralUserGS_sf2_file",
  // FX 8 (sci-fi): Synth Effects
  "1030_Aspirin_sf2_file",
  "1030_Chaos_sf2_file",
  "1030_FluidR3_GM_sf2_file",
  "1030_GeneralUserGS_sf2_file",
  "1030_JCLive_sf2_file",
  //'1030_SBLive_sf2',
  //'1030_SoundBlasterOld_sf2',
  "1031_Aspirin_sf2_file",
  "1031_FluidR3_GM_sf2_file",
  "1031_GeneralUserGS_sf2_file",
  //'1031_SoundBlasterOld_sf2',
  "1032_FluidR3_GM_sf2_file",
  // 'Sitar: Ethnic
  "1040_Aspirin_sf2_file",
  "1040_Chaos_sf2_file",
  "1040_FluidR3_GM_sf2_file",
  "1040_GeneralUserGS_sf2_file",
  "1040_JCLive_sf2_file",
  //'1040_SBLive_sf2',
  //'1040_SoundBlasterOld_sf2',
  "1041_FluidR3_GM_sf2_file",
  "1041_GeneralUserGS_sf2_file",
  // Banjo: Ethnic
  "1050_Aspirin_sf2_file",
  "1050_Chaos_sf2_file",
  "1050_FluidR3_GM_sf2_file",
  "1050_GeneralUserGS_sf2_file",
  "1050_JCLive_sf2_file",
  //'1050_SBLive_sf2',
  //'1050_SoundBlasterOld_sf2',
  "1051_GeneralUserGS_sf2_file",
  // Shamisen: Ethnic
  "1060_Aspirin_sf2_file",
  "1060_Chaos_sf2_file",
  "1060_FluidR3_GM_sf2_file",
  "1060_GeneralUserGS_sf2_file",
  "1060_JCLive_sf2_file",
  //'1060_SBLive_sf2',
  //'1060_SoundBlasterOld_sf2',
  "1061_FluidR3_GM_sf2_file",
  "1061_GeneralUserGS_sf2_file",
  //'1061_SoundBlasterOld_sf2',
  // Koto: Ethnic
  "1070_Aspirin_sf2_file",
  "1070_Chaos_sf2_file",
  "1070_FluidR3_GM_sf2_file",
  "1070_GeneralUserGS_sf2_file",
  "1070_JCLive_sf2_file",
  //'1070_SBLive_sf2',
  //'1070_SoundBlasterOld_sf2',
  "1071_FluidR3_GM_sf2_file",
  "1071_GeneralUserGS_sf2_file",
  "1072_GeneralUserGS_sf2_file",
  "1073_GeneralUserGS_sf2_file",
  // Kalimba: Ethnic
  "1080_Aspirin_sf2_file",
  "1080_Chaos_sf2_file",
  "1080_FluidR3_GM_sf2_file",
  "1080_GeneralUserGS_sf2_file",
  "1080_JCLive_sf2_file",
  //'1080_SBLive_sf2',
  //'1080_SoundBlasterOld_sf2',
  //'1081_SoundBlasterOld_sf2',
  // Bagpipe: Ethnic
  "1090_Aspirin_sf2_file",
  "1090_Chaos_sf2_file",
  "1090_FluidR3_GM_sf2_file",
  "1090_GeneralUserGS_sf2_file",
  "1090_JCLive_sf2_file",
  //'1090_SBLive_sf2',
  //'1090_SoundBlasterOld_sf2',
  //'1091_SoundBlasterOld_sf2',
  // Fiddle: Ethnic
  "1100_Aspirin_sf2_file",
  "1100_Chaos_sf2_file",
  "1100_FluidR3_GM_sf2_file",
  "1100_GeneralUserGS_sf2_file",
  "1100_JCLive_sf2_file",
  //'1100_SBLive_sf2',
  //'1100_SoundBlasterOld_sf2',
  "1101_Aspirin_sf2_file",
  "1101_FluidR3_GM_sf2_file",
  "1101_GeneralUserGS_sf2_file",
  "1102_GeneralUserGS_sf2_file",
  // Shanai: Ethnic
  "1110_Aspirin_sf2_file",
  "1110_Chaos_sf2_file",
  "1110_FluidR3_GM_sf2_file",
  "1110_GeneralUserGS_sf2_file",
  "1110_JCLive_sf2_file",
  //'1110_SBLive_sf2',
  //'1110_SoundBlasterOld_sf2',
  // Tinkle Bell: Percussive
  "1120_Aspirin_sf2_file",
  "1120_Chaos_sf2_file",
  "1120_FluidR3_GM_sf2_file",
  "1120_GeneralUserGS_sf2_file",
  "1120_JCLive_sf2_file",
  //'1120_SBLive_sf2',
  //'1120_SoundBlasterOld_sf2',
  //'1121_SoundBlasterOld_sf2',
  // Agogo: Percussive
  "1130_Aspirin_sf2_file",
  "1130_Chaos_sf2_file",
  "1130_FluidR3_GM_sf2_file",
  "1130_GeneralUserGS_sf2_file",
  "1130_JCLive_sf2_file",
  //'1130_SBLive_sf2',
  //'1130_SoundBlasterOld_sf2',
  "1131_FluidR3_GM_sf2_file",
  //'1131_SoundBlasterOld_sf2',
  // Steel Drums: Percussive
  "1140_Aspirin_sf2_file",
  "1140_Chaos_sf2_file",
  "1140_FluidR3_GM_sf2_file",
  "1140_GeneralUserGS_sf2_file",
  "1140_JCLive_sf2_file",
  //'1140_SBLive_sf2',
  //'1140_SoundBlasterOld_sf2',
  "1141_FluidR3_GM_sf2_file",
  // Woodblock: Percussive
  "1150_Aspirin_sf2_file",
  "1150_Chaos_sf2_file",
  "1150_FluidR3_GM_sf2_file",
  "1150_GeneralUserGS_sf2_file",
  "1150_JCLive_sf2_file",
  //'1150_SBLive_sf2',
  //'1150_SoundBlasterOld_sf2',
  "1151_FluidR3_GM_sf2_file",
  "1151_GeneralUserGS_sf2_file",
  "1152_FluidR3_GM_sf2_file",
  "1152_GeneralUserGS_sf2_file",
  // Taiko Drum: Percussive
  "1160_Aspirin_sf2_file",
  "1160_Chaos_sf2_file",
  "1160_FluidR3_GM_sf2_file",
  "1160_GeneralUserGS_sf2_file",
  "1160_JCLive_sf2_file",
  //'1160_SBLive_sf2',
  //'1160_SoundBlasterOld_sf2',
  "1161_FluidR3_GM_sf2_file",
  "1161_GeneralUserGS_sf2_file",
  //'1161_SoundBlasterOld_sf2',
  "1162_FluidR3_GM_sf2_file",
  "1162_GeneralUserGS_sf2_file",
  "1163_FluidR3_GM_sf2_file",
  // Melodic Tom: Percussive
  "1170_Aspirin_sf2_file",
  "1170_Chaos_sf2_file",
  "1170_FluidR3_GM_sf2_file",
  "1170_GeneralUserGS_sf2_file",
  "1170_JCLive_sf2_file",
  //'1170_SBLive_sf2',
  //'1170_SoundBlasterOld_sf2',
  "1171_FluidR3_GM_sf2_file",
  "1171_GeneralUserGS_sf2_file",
  "1172_FluidR3_GM_sf2_file",
  "1173_FluidR3_GM_sf2_file",
  // Synth Drum: Percussive
  "1180_Aspirin_sf2_file",
  "1180_Chaos_sf2_file",
  "1180_FluidR3_GM_sf2_file",
  "1180_GeneralUserGS_sf2_file",
  "1180_JCLive_sf2_file",
  //'1180_SBLive_sf2',
  //'1180_SoundBlasterOld_sf2',
  "1181_FluidR3_GM_sf2_file",
  "1181_GeneralUserGS_sf2_file",
  //'1181_SoundBlasterOld_sf2',
  // Reverse Cymbal: Percussive
  "1190_Aspirin_sf2_file",
  "1190_Chaos_sf2_file",
  "1190_FluidR3_GM_sf2_file",
  "1190_GeneralUserGS_sf2_file",
  "1190_JCLive_sf2_file",
  //'1190_SBLive_sf2',
  //'1190_SoundBlasterOld_sf2',
  "1191_GeneralUserGS_sf2_file",
  "1192_GeneralUserGS_sf2_file",
  "1193_GeneralUserGS_sf2_file",
  "1194_GeneralUserGS_sf2_file",
  // Guitar Fret Noise: Sound effects
  "1200_Aspirin_sf2_file",
  "1200_Chaos_sf2_file",
  "1200_FluidR3_GM_sf2_file",
  "1200_GeneralUserGS_sf2_file",
  "1200_JCLive_sf2_file",
  //'1200_SBLive_sf2',
  //'1200_SoundBlasterOld_sf2',
  "1201_Aspirin_sf2_file",
  "1201_GeneralUserGS_sf2_file",
  "1202_GeneralUserGS_sf2_file",
  // Breath Noise: Sound effects
  "1210_Aspirin_sf2_file",
  "1210_Chaos_sf2_file",
  "1210_FluidR3_GM_sf2_file",
  "1210_GeneralUserGS_sf2_file",
  "1210_JCLive_sf2_file",
  //'1210_SBLive_sf2',
  //'1210_SoundBlasterOld_sf2',
  "1211_Aspirin_sf2_file",
  "1211_GeneralUserGS_sf2_file",
  "1212_GeneralUserGS_sf2_file",
  // Seashore: Sound effects
  "1220_Aspirin_sf2_file",
  "1220_Chaos_sf2_file",
  "1220_FluidR3_GM_sf2_file",
  "1220_GeneralUserGS_sf2_file",
  "1220_JCLive_sf2_file",
  //'1220_SBLive_sf2',
  //'1220_SoundBlasterOld_sf2',
  "1221_Aspirin_sf2_file",
  "1221_GeneralUserGS_sf2_file",
  "1221_JCLive_sf2_file",
  "1222_Aspirin_sf2_file",
  "1222_GeneralUserGS_sf2_file",
  "1223_Aspirin_sf2_file",
  "1223_GeneralUserGS_sf2_file",
  "1224_Aspirin_sf2_file",
  "1224_GeneralUserGS_sf2_file",
  "1225_GeneralUserGS_sf2_file",
  "1226_GeneralUserGS_sf2_file",
  // Bird Tweet: Sound effects
  "1230_Aspirin_sf2_file",
  "1230_Chaos_sf2_file",
  "1230_FluidR3_GM_sf2_file",
  "1230_GeneralUserGS_sf2_file",
  "1230_JCLive_sf2_file",
  //'1230_SBLive_sf2',
  //'1230_SoundBlasterOld_sf2',
  "1231_Aspirin_sf2_file",
  "1231_GeneralUserGS_sf2_file",
  "1232_Aspirin_sf2_file",
  "1232_GeneralUserGS_sf2_file",
  "1233_GeneralUserGS_sf2_file",
  "1234_GeneralUserGS_sf2_file",
  // Telephone Ring: Sound effects
  "1240_Aspirin_sf2_file",
  "1240_Chaos_sf2_file",
  "1240_FluidR3_GM_sf2_file",
  "1240_GeneralUserGS_sf2_file",
  "1240_JCLive_sf2_file",
  //'1240_SBLive_sf2',
  //'1240_SoundBlasterOld_sf2',
  "1241_Aspirin_sf2_file",
  "1241_GeneralUserGS_sf2_file",
  "1242_Aspirin_sf2_file",
  "1242_GeneralUserGS_sf2_file",
  "1243_Aspirin_sf2_file",
  "1243_GeneralUserGS_sf2_file",
  "1244_Aspirin_sf2_file",
  "1244_GeneralUserGS_sf2_file",
  // Helicopter: Sound effects
  "1250_Aspirin_sf2_file",
  "1250_Chaos_sf2_file",
  "1250_FluidR3_GM_sf2_file",
  "1250_GeneralUserGS_sf2_file",
  "1250_JCLive_sf2_file",
  //'1250_SBLive_sf2',
  //'1250_SoundBlasterOld_sf2',
  "1251_Aspirin_sf2_file",
  "1251_FluidR3_GM_sf2_file",
  "1251_GeneralUserGS_sf2_file",
  "1252_Aspirin_sf2_file",
  "1252_FluidR3_GM_sf2_file",
  "1252_GeneralUserGS_sf2_file",
  "1253_Aspirin_sf2_file",
  "1253_GeneralUserGS_sf2_file",
  "1254_Aspirin_sf2_file",
  "1254_GeneralUserGS_sf2_file",
  "1255_Aspirin_sf2_file",
  "1255_GeneralUserGS_sf2_file",
  "1256_Aspirin_sf2_file",
  "1256_GeneralUserGS_sf2_file",
  "1257_Aspirin_sf2_file",
  "1257_GeneralUserGS_sf2_file",
  "1258_Aspirin_sf2_file",
  "1258_GeneralUserGS_sf2_file",
  "1259_GeneralUserGS_sf2_file",
  // Applause: Sound effects
  "1260_Aspirin_sf2_file",
  "1260_Chaos_sf2_file",
  "1260_FluidR3_GM_sf2_file",
  "1260_GeneralUserGS_sf2_file",
  "1260_JCLive_sf2_file",
  //'1260_SBLive_sf2',
  //'1260_SoundBlasterOld_sf2',
  "1261_Aspirin_sf2_file",
  "1261_GeneralUserGS_sf2_file",
  "1262_Aspirin_sf2_file",
  "1262_GeneralUserGS_sf2_file",
  "1263_Aspirin_sf2_file",
  "1263_GeneralUserGS_sf2_file",
  "1264_Aspirin_sf2_file",
  "1264_GeneralUserGS_sf2_file",
  "1265_Aspirin_sf2_file",
  "1265_GeneralUserGS_sf2_file",
  // Gunshot: Sound effects
  "1270_Aspirin_sf2_file",
  "1270_Chaos_sf2_file",
  "1270_FluidR3_GM_sf2_file",
  "1270_GeneralUserGS_sf2_file",
  "1270_JCLive_sf2_file",
  //'1270_SBLive_sf2',
  //'1270_SoundBlasterOld_sf2',
  "1271_Aspirin_sf2_file",
  "1271_GeneralUserGS_sf2_file",
  "1272_Aspirin_sf2_file",
  "1272_GeneralUserGS_sf2_file",
  "1273_GeneralUserGS_sf2_file",
  "1274_GeneralUserGS_sf2_file"
], drums = [
  ////'35_0_SBLive_sf2'
  "35_0_Chaos_sf2_file",
  "35_12_JCLive_sf2_file",
  "35_16_JCLive_sf2_file",
  "35_18_JCLive_sf2_file",
  "35_4_Chaos_sf2_file",
  //'36_0_SBLive_sf2',
  "36_12_JCLive_sf2_file",
  "36_16_JCLive_sf2_file",
  "36_18_JCLive_sf2_file",
  "36_4_Chaos_sf2_file",
  //'37_0_SBLive_sf2',
  "37_12_JCLive_sf2_file",
  "37_16_JCLive_sf2_file",
  "37_18_JCLive_sf2_file",
  "37_4_Chaos_sf2_file",
  //'38_0_SBLive_sf2',
  "38_12_JCLive_sf2_file",
  "38_16_JCLive_sf2_file",
  "38_18_JCLive_sf2_file",
  "38_4_Chaos_sf2_file",
  //'39_0_SBLive_sf2',
  "39_12_JCLive_sf2_file",
  "39_16_JCLive_sf2_file",
  "39_18_JCLive_sf2_file",
  "39_4_Chaos_sf2_file",
  //'40_0_SBLive_sf2',
  "40_12_JCLive_sf2_file",
  "40_16_JCLive_sf2_file",
  "40_18_JCLive_sf2_file",
  "40_4_Chaos_sf2_file",
  //'41_0_SBLive_sf2',
  "41_12_JCLive_sf2_file",
  "41_16_JCLive_sf2_file",
  "41_18_JCLive_sf2_file",
  "41_4_Chaos_sf2_file",
  //'42_0_SBLive_sf2',
  "42_12_JCLive_sf2_file",
  "42_16_JCLive_sf2_file",
  "42_18_JCLive_sf2_file",
  "42_4_Chaos_sf2_file",
  //'43_0_SBLive_sf2',
  "43_12_JCLive_sf2_file",
  "43_16_JCLive_sf2_file",
  "43_18_JCLive_sf2_file",
  "43_4_Chaos_sf2_file",
  //'44_0_SBLive_sf2',
  "44_12_JCLive_sf2_file",
  "44_16_JCLive_sf2_file",
  "44_18_JCLive_sf2_file",
  "44_4_Chaos_sf2_file",
  //'45_0_SBLive_sf2',
  "45_12_JCLive_sf2_file",
  "45_16_JCLive_sf2_file",
  "45_18_JCLive_sf2_file",
  "45_4_Chaos_sf2_file",
  //'46_0_SBLive_sf2',
  "46_12_JCLive_sf2_file",
  "46_16_JCLive_sf2_file",
  "46_18_JCLive_sf2_file",
  "46_4_Chaos_sf2_file",
  //'47_0_SBLive_sf2',
  "47_12_JCLive_sf2_file",
  "47_16_JCLive_sf2_file",
  "47_18_JCLive_sf2_file",
  "47_4_Chaos_sf2_file",
  //'48_0_SBLive_sf2',
  "48_12_JCLive_sf2_file",
  "48_16_JCLive_sf2_file",
  "48_18_JCLive_sf2_file",
  "48_4_Chaos_sf2_file",
  //'49_0_SBLive_sf2',
  "49_12_JCLive_sf2_file",
  "49_16_JCLive_sf2_file",
  "49_18_JCLive_sf2_file",
  "49_4_Chaos_sf2_file",
  //'50_0_SBLive_sf2',
  "50_12_JCLive_sf2_file",
  "50_16_JCLive_sf2_file",
  "50_18_JCLive_sf2_file",
  "50_4_Chaos_sf2_file",
  //'51_0_SBLive_sf2',
  "51_12_JCLive_sf2_file",
  "51_16_JCLive_sf2_file",
  "51_18_JCLive_sf2_file",
  "51_4_Chaos_sf2_file",
  //'52_0_SBLive_sf2',
  "52_12_JCLive_sf2_file",
  "52_16_JCLive_sf2_file",
  "52_18_JCLive_sf2_file",
  "52_4_Chaos_sf2_file",
  //'53_0_SBLive_sf2',
  "53_12_JCLive_sf2_file",
  "53_16_JCLive_sf2_file",
  "53_18_JCLive_sf2_file",
  "53_4_Chaos_sf2_file",
  //'54_0_SBLive_sf2',
  "54_12_JCLive_sf2_file",
  "54_16_JCLive_sf2_file",
  "54_18_JCLive_sf2_file",
  "54_4_Chaos_sf2_file",
  //'55_0_SBLive_sf2',
  "55_12_JCLive_sf2_file",
  "55_16_JCLive_sf2_file",
  "55_18_JCLive_sf2_file",
  "55_4_Chaos_sf2_file",
  //'56_0_SBLive_sf2',
  "56_12_JCLive_sf2_file",
  "56_16_JCLive_sf2_file",
  "56_18_JCLive_sf2_file",
  "56_4_Chaos_sf2_file",
  //'57_0_SBLive_sf2',
  "57_12_JCLive_sf2_file",
  "57_16_JCLive_sf2_file",
  "57_18_JCLive_sf2_file",
  "57_4_Chaos_sf2_file",
  //'58_0_SBLive_sf2',
  "58_12_JCLive_sf2_file",
  "58_16_JCLive_sf2_file",
  "58_18_JCLive_sf2_file",
  "58_4_Chaos_sf2_file",
  //'59_0_SBLive_sf2',
  "59_12_JCLive_sf2_file",
  "59_16_JCLive_sf2_file",
  "59_18_JCLive_sf2_file",
  "59_4_Chaos_sf2_file",
  //'60_0_SBLive_sf2',
  "60_12_JCLive_sf2_file",
  "60_16_JCLive_sf2_file",
  "60_18_JCLive_sf2_file",
  "60_4_Chaos_sf2_file",
  //'61_0_SBLive_sf2',
  "61_12_JCLive_sf2_file",
  "61_16_JCLive_sf2_file",
  "61_18_JCLive_sf2_file",
  "61_4_Chaos_sf2_file",
  //'62_0_SBLive_sf2',
  "62_12_JCLive_sf2_file",
  "62_16_JCLive_sf2_file",
  "62_18_JCLive_sf2_file",
  "62_4_Chaos_sf2_file",
  //'63_0_SBLive_sf2',
  "63_12_JCLive_sf2_file",
  "63_16_JCLive_sf2_file",
  "63_18_JCLive_sf2_file",
  "63_4_Chaos_sf2_file",
  //'64_0_SBLive_sf2',
  "64_12_JCLive_sf2_file",
  "64_16_JCLive_sf2_file",
  "64_18_JCLive_sf2_file",
  "64_4_Chaos_sf2_file",
  //'65_0_SBLive_sf2',
  "65_12_JCLive_sf2_file",
  "65_16_JCLive_sf2_file",
  "65_18_JCLive_sf2_file",
  "65_4_Chaos_sf2_file",
  //'66_0_SBLive_sf2',
  "66_12_JCLive_sf2_file",
  "66_16_JCLive_sf2_file",
  "66_18_JCLive_sf2_file",
  "66_4_Chaos_sf2_file",
  //'67_0_SBLive_sf2',
  "67_12_JCLive_sf2_file",
  "67_16_JCLive_sf2_file",
  "67_18_JCLive_sf2_file",
  "67_4_Chaos_sf2_file",
  //'68_0_SBLive_sf2',
  "68_12_JCLive_sf2_file",
  "68_16_JCLive_sf2_file",
  "68_18_JCLive_sf2_file",
  "68_4_Chaos_sf2_file",
  //'69_0_SBLive_sf2',
  "69_12_JCLive_sf2_file",
  "69_16_JCLive_sf2_file",
  "69_18_JCLive_sf2_file",
  "69_4_Chaos_sf2_file",
  //'70_0_SBLive_sf2',
  "70_12_JCLive_sf2_file",
  "70_16_JCLive_sf2_file",
  "70_18_JCLive_sf2_file",
  "70_4_Chaos_sf2_file",
  //'71_0_SBLive_sf2',
  "71_12_JCLive_sf2_file",
  "71_16_JCLive_sf2_file",
  "71_18_JCLive_sf2_file",
  "71_4_Chaos_sf2_file",
  //'72_0_SBLive_sf2',
  "72_12_JCLive_sf2_file",
  "72_16_JCLive_sf2_file",
  "72_18_JCLive_sf2_file",
  "72_4_Chaos_sf2_file",
  //'73_0_SBLive_sf2',
  "73_12_JCLive_sf2_file",
  "73_16_JCLive_sf2_file",
  "73_18_JCLive_sf2_file",
  "73_4_Chaos_sf2_file",
  //'74_0_SBLive_sf2',
  "74_12_JCLive_sf2_file",
  "74_16_JCLive_sf2_file",
  "74_18_JCLive_sf2_file",
  "74_4_Chaos_sf2_file",
  //'75_0_SBLive_sf2',
  "75_12_JCLive_sf2_file",
  "75_16_JCLive_sf2_file",
  "75_18_JCLive_sf2_file",
  "75_4_Chaos_sf2_file",
  //'76_0_SBLive_sf2',
  "76_12_JCLive_sf2_file",
  "76_16_JCLive_sf2_file",
  "76_18_JCLive_sf2_file",
  "76_4_Chaos_sf2_file",
  //'77_0_SBLive_sf2',
  "77_12_JCLive_sf2_file",
  "77_16_JCLive_sf2_file",
  "77_18_JCLive_sf2_file",
  "77_4_Chaos_sf2_file",
  //'78_0_SBLive_sf2',
  "78_12_JCLive_sf2_file",
  "78_16_JCLive_sf2_file",
  "78_18_JCLive_sf2_file",
  "78_4_Chaos_sf2_file",
  //'79_0_SBLive_sf2',
  "79_12_JCLive_sf2_file",
  "79_16_JCLive_sf2_file",
  "79_18_JCLive_sf2_file",
  "79_4_Chaos_sf2_file",
  //'80_0_SBLive_sf2',
  "80_12_JCLive_sf2_file",
  "80_16_JCLive_sf2_file",
  "80_18_JCLive_sf2_file",
  "80_4_Chaos_sf2_file",
  //'81_0_SBLive_sf2',
  "81_12_JCLive_sf2_file",
  "81_16_JCLive_sf2_file",
  "81_18_JCLive_sf2_file",
  "81_4_Chaos_sf2_file"
], instrumentNames = [];
instrumentNames[0] = "Acoustic Grand Piano: Piano";
instrumentNames[1] = "Bright Acoustic Piano: Piano";
instrumentNames[2] = "Electric Grand Piano: Piano";
instrumentNames[3] = "Honky-tonk Piano: Piano";
instrumentNames[4] = "Electric Piano 1: Piano";
instrumentNames[5] = "Electric Piano 2: Piano";
instrumentNames[6] = "Harpsichord: Piano";
instrumentNames[7] = "Clavinet: Piano";
instrumentNames[8] = "Celesta: Chromatic Percussion";
instrumentNames[9] = "Glockenspiel: Chromatic Percussion";
instrumentNames[10] = "Music Box: Chromatic Percussion";
instrumentNames[11] = "Vibraphone: Chromatic Percussion";
instrumentNames[12] = "Marimba: Chromatic Percussion";
instrumentNames[13] = "Xylophone: Chromatic Percussion";
instrumentNames[14] = "Tubular Bells: Chromatic Percussion";
instrumentNames[15] = "Dulcimer: Chromatic Percussion";
instrumentNames[16] = "Drawbar Organ: Organ";
instrumentNames[17] = "Percussive Organ: Organ";
instrumentNames[18] = "Rock Organ: Organ";
instrumentNames[19] = "Church Organ: Organ";
instrumentNames[20] = "Reed Organ: Organ";
instrumentNames[21] = "Accordion: Organ";
instrumentNames[22] = "Harmonica: Organ";
instrumentNames[23] = "Tango Accordion: Organ";
instrumentNames[24] = "Acoustic Guitar (nylon): Guitar";
instrumentNames[25] = "Acoustic Guitar (steel): Guitar";
instrumentNames[26] = "Electric Guitar (jazz): Guitar";
instrumentNames[27] = "Electric Guitar (clean): Guitar";
instrumentNames[28] = "Electric Guitar (muted): Guitar";
instrumentNames[29] = "Overdriven Guitar: Guitar";
instrumentNames[30] = "Distortion Guitar: Guitar";
instrumentNames[31] = "Guitar Harmonics: Guitar";
instrumentNames[32] = "Acoustic Bass: Bass";
instrumentNames[33] = "Electric Bass (finger): Bass";
instrumentNames[34] = "Electric Bass (pick): Bass";
instrumentNames[35] = "Fretless Bass: Bass";
instrumentNames[36] = "Slap Bass 1: Bass";
instrumentNames[37] = "Slap Bass 2: Bass";
instrumentNames[38] = "Synth Bass 1: Bass";
instrumentNames[39] = "Synth Bass 2: Bass";
instrumentNames[40] = "Violin: Strings";
instrumentNames[41] = "Viola: Strings";
instrumentNames[42] = "Cello: Strings";
instrumentNames[43] = "Contrabass: Strings";
instrumentNames[44] = "Tremolo Strings: Strings";
instrumentNames[45] = "Pizzicato Strings: Strings";
instrumentNames[46] = "Orchestral Harp: Strings";
instrumentNames[47] = "Timpani: Strings";
instrumentNames[48] = "String Ensemble 1: Ensemble";
instrumentNames[49] = "String Ensemble 2: Ensemble";
instrumentNames[50] = "Synth Strings 1: Ensemble";
instrumentNames[51] = "Synth Strings 2: Ensemble";
instrumentNames[52] = "Choir Aahs: Ensemble";
instrumentNames[53] = "Voice Oohs: Ensemble";
instrumentNames[54] = "Synth Choir: Ensemble";
instrumentNames[55] = "Orchestra Hit: Ensemble";
instrumentNames[56] = "Trumpet: Brass";
instrumentNames[57] = "Trombone: Brass";
instrumentNames[58] = "Tuba: Brass";
instrumentNames[59] = "Muted Trumpet: Brass";
instrumentNames[60] = "French Horn: Brass";
instrumentNames[61] = "Brass Section: Brass";
instrumentNames[62] = "Synth Brass 1: Brass";
instrumentNames[63] = "Synth Brass 2: Brass";
instrumentNames[64] = "Soprano Sax: Reed";
instrumentNames[65] = "Alto Sax: Reed";
instrumentNames[66] = "Tenor Sax: Reed";
instrumentNames[67] = "Baritone Sax: Reed";
instrumentNames[68] = "Oboe: Reed";
instrumentNames[69] = "English Horn: Reed";
instrumentNames[70] = "Bassoon: Reed";
instrumentNames[71] = "Clarinet: Reed";
instrumentNames[72] = "Piccolo: Pipe";
instrumentNames[73] = "Flute: Pipe";
instrumentNames[74] = "Recorder: Pipe";
instrumentNames[75] = "Pan Flute: Pipe";
instrumentNames[76] = "Blown bottle: Pipe";
instrumentNames[77] = "Shakuhachi: Pipe";
instrumentNames[78] = "Whistle: Pipe";
instrumentNames[79] = "Ocarina: Pipe";
instrumentNames[80] = "Lead 1 (square): Synth Lead";
instrumentNames[81] = "Lead 2 (sawtooth): Synth Lead";
instrumentNames[82] = "Lead 3 (calliope): Synth Lead";
instrumentNames[83] = "Lead 4 (chiff): Synth Lead";
instrumentNames[84] = "Lead 5 (charang): Synth Lead";
instrumentNames[85] = "Lead 6 (voice): Synth Lead";
instrumentNames[86] = "Lead 7 (fifths): Synth Lead";
instrumentNames[87] = "Lead 8 (bass + lead): Synth Lead";
instrumentNames[88] = "Pad 1 (new age): Synth Pad";
instrumentNames[89] = "Pad 2 (warm): Synth Pad";
instrumentNames[90] = "Pad 3 (polysynth): Synth Pad";
instrumentNames[91] = "Pad 4 (choir): Synth Pad";
instrumentNames[92] = "Pad 5 (bowed): Synth Pad";
instrumentNames[93] = "Pad 6 (metallic): Synth Pad";
instrumentNames[94] = "Pad 7 (halo): Synth Pad";
instrumentNames[95] = "Pad 8 (sweep): Synth Pad";
instrumentNames[96] = "FX 1 (rain): Synth Effects";
instrumentNames[97] = "FX 2 (soundtrack): Synth Effects";
instrumentNames[98] = "FX 3 (crystal): Synth Effects";
instrumentNames[99] = "FX 4 (atmosphere): Synth Effects";
instrumentNames[100] = "FX 5 (brightness): Synth Effects";
instrumentNames[101] = "FX 6 (goblins): Synth Effects";
instrumentNames[102] = "FX 7 (echoes): Synth Effects";
instrumentNames[103] = "FX 8 (sci-fi): Synth Effects";
instrumentNames[104] = "Sitar: Ethnic";
instrumentNames[105] = "Banjo: Ethnic";
instrumentNames[106] = "Shamisen: Ethnic";
instrumentNames[107] = "Koto: Ethnic";
instrumentNames[108] = "Kalimba: Ethnic";
instrumentNames[109] = "Bagpipe: Ethnic";
instrumentNames[110] = "Fiddle: Ethnic";
instrumentNames[111] = "Shanai: Ethnic";
instrumentNames[112] = "Tinkle Bell: Percussive";
instrumentNames[113] = "Agogo: Percussive";
instrumentNames[114] = "Steel Drums: Percussive";
instrumentNames[115] = "Woodblock: Percussive";
instrumentNames[116] = "Taiko Drum: Percussive";
instrumentNames[117] = "Melodic Tom: Percussive";
instrumentNames[118] = "Synth Drum: Percussive";
instrumentNames[119] = "Reverse Cymbal: Percussive";
instrumentNames[120] = "Guitar Fret Noise: Sound effects";
instrumentNames[121] = "Breath Noise: Sound effects";
instrumentNames[122] = "Seashore: Sound effects";
instrumentNames[123] = "Bird Tweet: Sound effects";
instrumentNames[124] = "Telephone Ring: Sound effects";
instrumentNames[125] = "Helicopter: Sound effects";
instrumentNames[126] = "Applause: Sound effects";
instrumentNames[127] = "Gunshot: Sound effects";
const list = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drums,
  instrumentNames,
  instruments
}, Symbol.toStringTag, { value: "Module" }));
var SoundFont2 = { exports: {} }, hasRequiredSoundFont2;
function requireSoundFont2() {
  return hasRequiredSoundFont2 || (hasRequiredSoundFont2 = 1, function(v, F) {
    (function(p, l) {
      v.exports = l();
    })(window, function() {
      return function(p) {
        var l = {};
        function e(f) {
          if (l[f]) return l[f].exports;
          var s = l[f] = { i: f, l: !1, exports: {} };
          return p[f].call(s.exports, s, s.exports, e), s.l = !0, s.exports;
        }
        return e.m = p, e.c = l, e.d = function(f, s, n) {
          e.o(f, s) || Object.defineProperty(f, s, { enumerable: !0, get: n });
        }, e.r = function(f) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
        }, e.t = function(f, s) {
          if (1 & s && (f = e(f)), 8 & s || 4 & s && typeof f == "object" && f && f.__esModule) return f;
          var n = /* @__PURE__ */ Object.create(null);
          if (e.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: f }), 2 & s && typeof f != "string") for (var t in f) e.d(n, t, function(i) {
            return f[i];
          }.bind(null, t));
          return n;
        }, e.n = function(f) {
          var s = f && f.__esModule ? function() {
            return f.default;
          } : function() {
            return f;
          };
          return e.d(s, "a", s), s;
        }, e.o = function(f, s) {
          return Object.prototype.hasOwnProperty.call(f, s);
        }, e.p = "", e(e.s = "./src/index.ts");
      }({ "./src/chunk.ts": (
        /*!**********************!*\
          !*** ./src/chunk.ts ***!
          \**********************/
        /*! exports provided: SF2Chunk */
        function(p, l, e) {
          e.r(l), e.d(l, "SF2Chunk", function() {
            return r;
          });
          var f = e(
            /*! ./riff */
            "./src/riff/index.ts"
          ), s = e(
            /*! ./constants */
            "./src/constants.ts"
          ), n = e(
            /*! ./chunks */
            "./src/chunks/index.ts"
          );
          function t(d) {
            return (t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
              return typeof a;
            } : function(a) {
              return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
            })(d);
          }
          function i(d, a) {
            for (var u = 0; u < a.length; u++) {
              var o = a[u];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(d, o.key, o);
            }
          }
          function c(d) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
              return a.__proto__ || Object.getPrototypeOf(a);
            })(d);
          }
          function h(d, a) {
            return (h = Object.setPrototypeOf || function(u, o) {
              return u.__proto__ = o, u;
            })(d, a);
          }
          function S(d) {
            if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return d;
          }
          var r = function(d) {
            function a(g) {
              var R, U, L, A, b, y;
              return function(M, O) {
                if (!(M instanceof O)) throw new TypeError("Cannot call a class as a function");
              }(this, a), U = this, R = !(L = c(a).call(this, g.id, g.length, g.buffer, g.subChunks)) || t(L) !== "object" && typeof L != "function" ? S(U) : L, A = S(S(R)), y = void 0, (b = "subChunks") in A ? Object.defineProperty(A, b, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : A[b] = y, R.subChunks = g.subChunks.map(function(M) {
                return new a(M);
              }), R;
            }
            var u, o;
            return function(g, R) {
              if (typeof R != "function" && R !== null) throw new TypeError("Super expression must either be null or a function");
              g.prototype = Object.create(R && R.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), R && h(g, R);
            }(a, f.RIFFChunk), u = a, (o = [{ key: "getMetaData", value: function() {
              if (this.id !== "LIST") throw new f.ParseError("Unexpected chunk ID", "'LIST'", "'".concat(this.id, "'"));
              var g = this.subChunks.reduce(function(R, U) {
                if (U.id === "ifil" || U.id === "iver") {
                  if (U.length !== s.SF_VERSION_LENGTH) throw new f.ParseError("Invalid size for the '".concat(U.id, "' sub-chunk"));
                  R[U.id] = "".concat(U.getInt16(), ".").concat(U.getInt16(2));
                } else R[U.id] = U.getString();
                return R;
              }, {});
              if (!g.ifil) throw new f.ParseError("Missing required 'ifil' sub-chunk");
              if (!g.INAM) throw new f.ParseError("Missing required 'INAM' sub-chunk");
              return { version: g.ifil, soundEngine: g.isng || "EMU8000", name: g.INAM, rom: g.irom, romVersion: g.iver, creationDate: g.ICRD, author: g.IENG, product: g.IPRD, copyright: g.ICOP, comments: g.ICMT, createdBy: g.ISFT };
            } }, { key: "getSampleData", value: function() {
              if (this.id !== "LIST") throw new f.ParseError("Unexpected chunk ID", "'LIST'", "'".concat(this.id, "'"));
              var g = this.subChunks[0];
              if (g.id !== "smpl") throw new f.ParseError("Invalid chunk signature", "'smpl'", "'".concat(g.id, "'"));
              return g.buffer;
            } }, { key: "getPresetData", value: function() {
              if (this.id !== "LIST") throw new f.ParseError("Unexpected chunk ID", "'LIST'", "'".concat(this.id, "'"));
              return { presetHeaders: Object(n.getPresetHeaders)(this.subChunks[0]), presetZones: Object(n.getZones)(this.subChunks[1], "pbag"), presetModulators: Object(n.getModulators)(this.subChunks[2], "pmod"), presetGenerators: Object(n.getGenerators)(this.subChunks[3], "pgen"), instrumentHeaders: Object(n.getInstrumentHeaders)(this.subChunks[4]), instrumentZones: Object(n.getZones)(this.subChunks[5], "ibag"), instrumentModulators: Object(n.getModulators)(this.subChunks[6], "imod"), instrumentGenerators: Object(n.getGenerators)(this.subChunks[7], "igen"), sampleHeaders: Object(n.getSampleHeaders)(this.subChunks[8]) };
            } }]) && i(u.prototype, o), a;
          }();
        }
      ), "./src/chunks/generators.ts": (
        /*!**********************************!*\
          !*** ./src/chunks/generators.ts ***!
          \**********************************/
        /*! exports provided: getGenerators */
        function(p, l, e) {
          e.r(l), e.d(l, "getGenerators", function() {
            return h;
          });
          var f = e(
            /*! ~/riff */
            "./src/riff/index.ts"
          ), s = e(
            /*! ~/types */
            "./src/types/index.ts"
          ), n = e(
            /*! ~/constants */
            "./src/constants.ts"
          ), t = [s.GeneratorType.StartAddrsOffset, s.GeneratorType.EndAddrsOffset, s.GeneratorType.StartLoopAddrsOffset, s.GeneratorType.EndLoopAddrsOffset, s.GeneratorType.StartAddrsCoarseOffset, s.GeneratorType.EndAddrsCoarseOffset, s.GeneratorType.StartLoopAddrsCoarseOffset, s.GeneratorType.KeyNum, s.GeneratorType.Velocity, s.GeneratorType.EndLoopAddrsCoarseOffset, s.GeneratorType.SampleModes, s.GeneratorType.ExclusiveClass, s.GeneratorType.OverridingRootKey], i = [s.GeneratorType.Unused1, s.GeneratorType.Unused2, s.GeneratorType.Unused3, s.GeneratorType.Unused4, s.GeneratorType.Reserved1, s.GeneratorType.Reserved2, s.GeneratorType.Reserved3], c = [s.GeneratorType.KeyRange, s.GeneratorType.VelRange], h = function(S, r) {
            if (S.id !== r) throw new f.ParseError("Unexpected chunk ID", "'".concat(r, "'"), "'".concat(S.id, "'"));
            if (S.length % n.SF_GENERATOR_SIZE) throw new f.ParseError("Invalid size for the '".concat(r, "' sub-chunk"));
            return S.iterate(function(d) {
              var a = d.getInt16();
              return s.GeneratorType[a] ? r === "pgen" && t.includes(a) || r === "igen" && i.includes(a) ? null : c.includes(a) ? { id: a, range: { lo: d.getByte(), hi: d.getByte() } } : { id: a, value: d.getInt16BE() } : null;
            });
          };
        }
      ), "./src/chunks/index.ts": (
        /*!*****************************!*\
          !*** ./src/chunks/index.ts ***!
          \*****************************/
        /*! exports provided: getGenerators, getModulators, getZones, getItemsInZone, getInstrumentHeaders, getPresetHeaders, getSampleHeaders */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./instruments */
            "./src/chunks/instruments/index.ts"
          );
          e.d(l, "getInstrumentHeaders", function() {
            return f.getInstrumentHeaders;
          });
          var s = e(
            /*! ./presets */
            "./src/chunks/presets/index.ts"
          );
          e.d(l, "getPresetHeaders", function() {
            return s.getPresetHeaders;
          });
          var n = e(
            /*! ./samples */
            "./src/chunks/samples/index.ts"
          );
          e.d(l, "getSampleHeaders", function() {
            return n.getSampleHeaders;
          });
          var t = e(
            /*! ./generators */
            "./src/chunks/generators.ts"
          );
          e.d(l, "getGenerators", function() {
            return t.getGenerators;
          });
          var i = e(
            /*! ./modulators */
            "./src/chunks/modulators.ts"
          );
          e.d(l, "getModulators", function() {
            return i.getModulators;
          });
          var c = e(
            /*! ./zones */
            "./src/chunks/zones.ts"
          );
          e.d(l, "getZones", function() {
            return c.getZones;
          }), e.d(l, "getItemsInZone", function() {
            return c.getItemsInZone;
          });
        }
      ), "./src/chunks/instruments/headers.ts": (
        /*!*******************************************!*\
          !*** ./src/chunks/instruments/headers.ts ***!
          \*******************************************/
        /*! exports provided: getInstrumentHeaders */
        function(p, l, e) {
          e.r(l), e.d(l, "getInstrumentHeaders", function() {
            return n;
          });
          var f = e(
            /*! ~/riff */
            "./src/riff/index.ts"
          ), s = e(
            /*! ~/constants */
            "./src/constants.ts"
          ), n = function(t) {
            if (t.id !== "inst") throw new f.ParseError("Unexpected chunk ID", "'inst'", "'".concat(t.id, "'"));
            if (t.length % s.SF_INSTRUMENT_HEADER_SIZE) throw new f.ParseError("Invalid size for the 'inst' sub-chunk");
            return t.iterate(function(i) {
              return { name: i.getString(), bagIndex: i.getInt16() };
            });
          };
        }
      ), "./src/chunks/instruments/index.ts": (
        /*!*****************************************!*\
          !*** ./src/chunks/instruments/index.ts ***!
          \*****************************************/
        /*! exports provided: getInstrumentHeaders */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./headers */
            "./src/chunks/instruments/headers.ts"
          );
          e.d(l, "getInstrumentHeaders", function() {
            return f.getInstrumentHeaders;
          });
        }
      ), "./src/chunks/modulators.ts": (
        /*!**********************************!*\
          !*** ./src/chunks/modulators.ts ***!
          \**********************************/
        /*! exports provided: getModulators */
        function(p, l, e) {
          e.r(l), e.d(l, "getModulators", function() {
            return t;
          });
          var f = e(
            /*! ~/riff */
            "./src/riff/index.ts"
          ), s = e(
            /*! ~/constants */
            "./src/constants.ts"
          ), n = function(i) {
            return { type: i >> 10 & 63, polarity: i >> 9 & 1, direction: i >> 8 & 1, palette: i >> 7 & 1, index: 127 & i };
          }, t = function(i, c) {
            if (i.id !== c) throw new f.ParseError("Unexpected chunk ID", "'".concat(c, "'"), "'".concat(i.id, "'"));
            if (i.length % s.SF_MODULATOR_SIZE) throw new f.ParseError("Invalid size for the '".concat(c, "' sub-chunk"));
            return i.iterate(function(h) {
              return { source: n(h.getInt16BE()), id: h.getInt16BE(), value: h.getInt16BE(), valueSource: n(h.getInt16BE()), transform: h.getInt16BE() };
            });
          };
        }
      ), "./src/chunks/presets/headers.ts": (
        /*!***************************************!*\
          !*** ./src/chunks/presets/headers.ts ***!
          \***************************************/
        /*! exports provided: getPresetHeaders */
        function(p, l, e) {
          e.r(l), e.d(l, "getPresetHeaders", function() {
            return n;
          });
          var f = e(
            /*! ~/riff */
            "./src/riff/index.ts"
          ), s = e(
            /*! ~/constants */
            "./src/constants.ts"
          ), n = function(t) {
            if (t.id !== "phdr") throw new f.ParseError("Invalid chunk ID", "'phdr'", "'".concat(t.id, "'"));
            if (t.length % s.SF_PRESET_HEADER_SIZE) throw new f.ParseError("Invalid size for the 'phdr' sub-chunk");
            return t.iterate(function(i) {
              return { name: i.getString(), preset: i.getInt16(), bank: i.getInt16(), bagIndex: i.getInt16(), library: i.getUInt32(), genre: i.getUInt32(), morphology: i.getUInt32() };
            });
          };
        }
      ), "./src/chunks/presets/index.ts": (
        /*!*************************************!*\
          !*** ./src/chunks/presets/index.ts ***!
          \*************************************/
        /*! exports provided: getPresetHeaders */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./headers */
            "./src/chunks/presets/headers.ts"
          );
          e.d(l, "getPresetHeaders", function() {
            return f.getPresetHeaders;
          });
        }
      ), "./src/chunks/samples/headers.ts": (
        /*!***************************************!*\
          !*** ./src/chunks/samples/headers.ts ***!
          \***************************************/
        /*! exports provided: getSampleHeaders */
        function(p, l, e) {
          e.r(l), e.d(l, "getSampleHeaders", function() {
            return n;
          });
          var f = e(
            /*! ~/riff */
            "./src/riff/index.ts"
          ), s = e(
            /*! ~/constants */
            "./src/constants.ts"
          ), n = function(t) {
            if (t.id !== "shdr") throw new f.ParseError("Unexpected chunk ID", "'shdr'", "'".concat(t.id, "'"));
            if (t.length % s.SF_SAMPLE_HEADER_SIZE) throw new f.ParseError("Invalid size for the 'shdr' sub-chunk");
            return t.iterate(function(i) {
              return { name: i.getString(), start: i.getUInt32(), end: i.getUInt32(), startLoop: i.getUInt32(), endLoop: i.getUInt32(), sampleRate: i.getUInt32(), originalPitch: i.getByte(), pitchCorrection: i.getChar(), link: i.getInt16(), type: i.getInt16() };
            });
          };
        }
      ), "./src/chunks/samples/index.ts": (
        /*!*************************************!*\
          !*** ./src/chunks/samples/index.ts ***!
          \*************************************/
        /*! exports provided: getSampleHeaders */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./headers */
            "./src/chunks/samples/headers.ts"
          );
          e.d(l, "getSampleHeaders", function() {
            return f.getSampleHeaders;
          });
        }
      ), "./src/chunks/zones.ts": (
        /*!*****************************!*\
          !*** ./src/chunks/zones.ts ***!
          \*****************************/
        /*! exports provided: getZones, getItemsInZone */
        function(p, l, e) {
          e.r(l), e.d(l, "getZones", function() {
            return t;
          }), e.d(l, "getItemsInZone", function() {
            return i;
          });
          var f = e(
            /*! ~/riff */
            "./src/riff/index.ts"
          ), s = e(
            /*! ~/constants */
            "./src/constants.ts"
          ), n = e(
            /*! ~/types */
            "./src/types/index.ts"
          ), t = function(r, d) {
            if (r.id !== d) throw new f.ParseError("Unexpected chunk ID", "'".concat(d, "'"), "'".concat(r.id, "'"));
            if (r.length % s.SF_BAG_SIZE) throw new f.ParseError("Invalid size for the '".concat(d, "' sub-chunk"));
            return r.iterate(function(a) {
              return { generatorIndex: a.getInt16(), modulatorIndex: a.getInt16() };
            });
          }, i = function(r, d, a, u, o, g) {
            for (var R = [], U = 0; U < r.length; U++) {
              for (var L = r[U], A = r[U + 1], b = L.bagIndex, y = A ? A.bagIndex : d.length, M = [], O = void 0, E = b; E < y; E++) {
                var P = c(E, d, a), k = h(E, d, u), I = k[n.GeneratorType.KeyRange] && k[n.GeneratorType.KeyRange].range, N = k[g];
                if (N) {
                  var w = o[N.value];
                  w && M.push({ keyRange: I, modulators: P, generators: k, reference: w });
                } else E - b == 0 && (O = { keyRange: I, modulators: P, generators: k });
              }
              R.push({ header: L, globalZone: O, zones: M });
            }
            return R;
          }, c = function(r, d, a) {
            var u = d[r], o = d[r + 1], g = u.modulatorIndex, R = o ? o.modulatorIndex : d.length;
            return S(g, R, a);
          }, h = function(r, d, a) {
            var u = d[r], o = d[r + 1], g = u.generatorIndex, R = o ? o.generatorIndex : d.length;
            return S(g, R, a);
          }, S = function(r, d, a) {
            for (var u = {}, o = r; o < d; o++) {
              var g = a[o];
              g && (u[g.id] = g);
            }
            return u;
          };
        }
      ), "./src/constants.ts": (
        /*!**************************!*\
          !*** ./src/constants.ts ***!
          \**************************/
        /*! exports provided: SF_VERSION_LENGTH, SF_PRESET_HEADER_SIZE, SF_BAG_SIZE, SF_MODULATOR_SIZE, SF_GENERATOR_SIZE, SF_INSTRUMENT_HEADER_SIZE, SF_SAMPLE_HEADER_SIZE, DEFAULT_SAMPLE_RATE */
        function(p, l, e) {
          e.r(l), e.d(l, "SF_VERSION_LENGTH", function() {
            return f;
          }), e.d(l, "SF_PRESET_HEADER_SIZE", function() {
            return s;
          }), e.d(l, "SF_BAG_SIZE", function() {
            return n;
          }), e.d(l, "SF_MODULATOR_SIZE", function() {
            return t;
          }), e.d(l, "SF_GENERATOR_SIZE", function() {
            return i;
          }), e.d(l, "SF_INSTRUMENT_HEADER_SIZE", function() {
            return c;
          }), e.d(l, "SF_SAMPLE_HEADER_SIZE", function() {
            return h;
          }), e.d(l, "DEFAULT_SAMPLE_RATE", function() {
            return S;
          });
          var f = 4, s = 38, n = 4, t = 10, i = 4, c = 22, h = 46, S = 22050;
        }
      ), "./src/index.ts": (
        /*!**********************!*\
          !*** ./src/index.ts ***!
          \**********************/
        /*! no static exports found */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./types */
            "./src/types/index.ts"
          );
          for (var s in f) s !== "default" && function(c) {
            e.d(l, c, function() {
              return f[c];
            });
          }(s);
          var n = e(
            /*! ./chunk */
            "./src/chunk.ts"
          );
          e.d(l, "SF2Chunk", function() {
            return n.SF2Chunk;
          });
          var t = e(
            /*! ./constants */
            "./src/constants.ts"
          );
          e.d(l, "SF_VERSION_LENGTH", function() {
            return t.SF_VERSION_LENGTH;
          }), e.d(l, "SF_PRESET_HEADER_SIZE", function() {
            return t.SF_PRESET_HEADER_SIZE;
          }), e.d(l, "SF_BAG_SIZE", function() {
            return t.SF_BAG_SIZE;
          }), e.d(l, "SF_MODULATOR_SIZE", function() {
            return t.SF_MODULATOR_SIZE;
          }), e.d(l, "SF_GENERATOR_SIZE", function() {
            return t.SF_GENERATOR_SIZE;
          }), e.d(l, "SF_INSTRUMENT_HEADER_SIZE", function() {
            return t.SF_INSTRUMENT_HEADER_SIZE;
          }), e.d(l, "SF_SAMPLE_HEADER_SIZE", function() {
            return t.SF_SAMPLE_HEADER_SIZE;
          }), e.d(l, "DEFAULT_SAMPLE_RATE", function() {
            return t.DEFAULT_SAMPLE_RATE;
          });
          var i = e(
            /*! ./soundFont2 */
            "./src/soundFont2.ts"
          );
          e.d(l, "SoundFont2", function() {
            return i.SoundFont2;
          });
        }
      ), "./src/riff/chunkIterator.ts": (
        /*!***********************************!*\
          !*** ./src/riff/chunkIterator.ts ***!
          \***********************************/
        /*! exports provided: ChunkIterator */
        function(p, l, e) {
          e.r(l), e.d(l, "ChunkIterator", function() {
            return t;
          });
          var f = e(
            /*! ~/utils */
            "./src/utils/index.ts"
          );
          function s(i, c) {
            for (var h = 0; h < c.length; h++) {
              var S = c[h];
              S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(i, S.key, S);
            }
          }
          function n(i, c, h) {
            return c in i ? Object.defineProperty(i, c, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : i[c] = h, i;
          }
          var t = function() {
            function i(S) {
              var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              (function(d, a) {
                if (!(d instanceof a)) throw new TypeError("Cannot call a class as a function");
              })(this, i), n(this, "target", []), n(this, "chunk", void 0), n(this, "position", 0), this.chunk = S, this.position = r;
            }
            var c, h;
            return c = i, (h = [{ key: "iterate", value: function(S) {
              for (; this.position < this.chunk.length; ) {
                var r = S(this);
                r && this.target.push(r);
              }
            } }, { key: "getString", value: function() {
              var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 20, r = Object(f.getStringFromBuffer)(this.getBuffer(this.position, S));
              return this.position += S, r;
            } }, { key: "getInt16", value: function() {
              return this.chunk.buffer[this.position++] | this.chunk.buffer[this.position++] << 8;
            } }, { key: "getInt16BE", value: function() {
              return this.getInt16() << 16 >> 16;
            } }, { key: "getUInt32", value: function() {
              return (this.chunk.buffer[this.position++] | this.chunk.buffer[this.position++] << 8 | this.chunk.buffer[this.position++] << 16 | this.chunk.buffer[this.position++] << 24) >>> 0;
            } }, { key: "getByte", value: function() {
              return this.chunk.buffer[this.position++];
            } }, { key: "getChar", value: function() {
              return this.chunk.buffer[this.position++] << 24 >> 24;
            } }, { key: "skip", value: function(S) {
              this.position += S;
            } }, { key: "getBuffer", value: function(S, r) {
              return this.chunk.buffer.subarray(S, S + r);
            } }, { key: "currentPosition", get: function() {
              return this.position;
            } }]) && s(c.prototype, h), i;
          }();
        }
      ), "./src/riff/index.ts": (
        /*!***************************!*\
          !*** ./src/riff/index.ts ***!
          \***************************/
        /*! exports provided: ChunkIterator, ParseError, parseBuffer, getChunk, getChunkLength, getSubChunks, getChunkId, RIFFChunk */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./chunkIterator */
            "./src/riff/chunkIterator.ts"
          );
          e.d(l, "ChunkIterator", function() {
            return f.ChunkIterator;
          });
          var s = e(
            /*! ./parseError */
            "./src/riff/parseError.ts"
          );
          e.d(l, "ParseError", function() {
            return s.ParseError;
          });
          var n = e(
            /*! ./parser */
            "./src/riff/parser.ts"
          );
          e.d(l, "parseBuffer", function() {
            return n.parseBuffer;
          }), e.d(l, "getChunk", function() {
            return n.getChunk;
          }), e.d(l, "getChunkLength", function() {
            return n.getChunkLength;
          }), e.d(l, "getSubChunks", function() {
            return n.getSubChunks;
          }), e.d(l, "getChunkId", function() {
            return n.getChunkId;
          });
          var t = e(
            /*! ./riffChunk */
            "./src/riff/riffChunk.ts"
          );
          e.d(l, "RIFFChunk", function() {
            return t.RIFFChunk;
          });
        }
      ), "./src/riff/parseError.ts": (
        /*!********************************!*\
          !*** ./src/riff/parseError.ts ***!
          \********************************/
        /*! exports provided: ParseError */
        function(p, l, e) {
          function f(S) {
            return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
              return typeof r;
            } : function(r) {
              return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
            })(S);
          }
          function s(S, r) {
            return !r || f(r) !== "object" && typeof r != "function" ? function(d) {
              if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return d;
            }(S) : r;
          }
          function n(S) {
            var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
            return (n = function(d) {
              if (d === null || (a = d, Function.toString.call(a).indexOf("[native code]") === -1)) return d;
              var a;
              if (typeof d != "function") throw new TypeError("Super expression must either be null or a function");
              if (r !== void 0) {
                if (r.has(d)) return r.get(d);
                r.set(d, u);
              }
              function u() {
                return t(d, arguments, c(this).constructor);
              }
              return u.prototype = Object.create(d.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), i(u, d);
            })(S);
          }
          function t(S, r, d) {
            return (t = function() {
              if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), !0;
              } catch {
                return !1;
              }
            }() ? Reflect.construct : function(a, u, o) {
              var g = [null];
              g.push.apply(g, u);
              var R = new (Function.bind.apply(a, g))();
              return o && i(R, o.prototype), R;
            }).apply(null, arguments);
          }
          function i(S, r) {
            return (i = Object.setPrototypeOf || function(d, a) {
              return d.__proto__ = a, d;
            })(S, r);
          }
          function c(S) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
              return r.__proto__ || Object.getPrototypeOf(r);
            })(S);
          }
          e.r(l), e.d(l, "ParseError", function() {
            return h;
          });
          var h = function(S) {
            function r(d, a, u) {
              return function(o, g) {
                if (!(o instanceof g)) throw new TypeError("Cannot call a class as a function");
              }(this, r), s(this, c(r).call(this, "".concat(d).concat(a && u ? ", expected ".concat(a, ", received ").concat(u) : "")));
            }
            return function(d, a) {
              if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
              d.prototype = Object.create(a && a.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), a && i(d, a);
            }(r, n(Error)), r;
          }();
        }
      ), "./src/riff/parser.ts": (
        /*!****************************!*\
          !*** ./src/riff/parser.ts ***!
          \****************************/
        /*! exports provided: parseBuffer, getChunk, getChunkLength, getSubChunks, getChunkId */
        function(p, l, e) {
          e.r(l), e.d(l, "parseBuffer", function() {
            return t;
          }), e.d(l, "getChunk", function() {
            return i;
          }), e.d(l, "getChunkLength", function() {
            return c;
          }), e.d(l, "getSubChunks", function() {
            return h;
          }), e.d(l, "getChunkId", function() {
            return S;
          });
          var f = e(
            /*! ./parseError */
            "./src/riff/parseError.ts"
          ), s = e(
            /*! ~/utils/buffer */
            "./src/utils/buffer.ts"
          ), n = e(
            /*! ./riffChunk */
            "./src/riff/riffChunk.ts"
          ), t = function(r) {
            var d = S(r);
            if (d !== "RIFF") throw new f.ParseError("Invalid file format", "RIFF", d);
            var a = S(r, 8);
            if (a !== "sfbk") throw new f.ParseError("Invalid signature", "sfbk", a);
            var u = r.subarray(8), o = h(u.subarray(4));
            return new n.RIFFChunk(d, u.length, u, o);
          }, i = function(r, d) {
            var a = S(r, d), u = c(r, d + 4), o = [];
            return a !== "RIFF" && a !== "LIST" || (o = h(r.subarray(d + 12))), new n.RIFFChunk(a, u, r.subarray(d + 8), o);
          }, c = function(r, d) {
            return ((r = r.subarray(d, d + 4))[0] | r[1] << 8 | r[2] << 16 | r[3] << 24) >>> 0;
          }, h = function(r) {
            for (var d = [], a = 0; a <= r.length - 8; ) {
              var u = i(r, a);
              d.push(u), a = (a += 8 + u.length) % 2 ? a + 1 : a;
            }
            return d;
          }, S = function(r) {
            var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return Object(s.getStringFromBuffer)(r.subarray(d, d + 4));
          };
        }
      ), "./src/riff/riffChunk.ts": (
        /*!*******************************!*\
          !*** ./src/riff/riffChunk.ts ***!
          \*******************************/
        /*! exports provided: RIFFChunk */
        function(p, l, e) {
          e.r(l), e.d(l, "RIFFChunk", function() {
            return i;
          });
          var f = e(
            /*! ./chunkIterator */
            "./src/riff/chunkIterator.ts"
          ), s = e(
            /*! ~/utils */
            "./src/utils/index.ts"
          );
          function n(c, h) {
            for (var S = 0; S < h.length; S++) {
              var r = h[S];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(c, r.key, r);
            }
          }
          function t(c, h, S) {
            return h in c ? Object.defineProperty(c, h, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : c[h] = S, c;
          }
          var i = function() {
            function c(r, d, a, u) {
              (function(o, g) {
                if (!(o instanceof g)) throw new TypeError("Cannot call a class as a function");
              })(this, c), t(this, "id", void 0), t(this, "length", void 0), t(this, "buffer", void 0), t(this, "subChunks", void 0), this.id = r, this.length = d, this.buffer = a, this.subChunks = u;
            }
            var h, S;
            return h = c, (S = [{ key: "getString", value: function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, d = arguments.length > 1 ? arguments[1] : void 0;
              return Object(s.getStringFromBuffer)(this.getBuffer(r, d || this.length - r));
            } }, { key: "getInt16", value: function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return this.buffer[r++] | this.buffer[r] << 8;
            } }, { key: "getUInt32", value: function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return (this.buffer[r++] | this.buffer[r++] << 8 | this.buffer[r++] << 16 | this.buffer[r] << 24) >>> 0;
            } }, { key: "getByte", value: function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return this.buffer[r];
            } }, { key: "getChar", value: function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return this.buffer[r] << 24 >> 24;
            } }, { key: "iterator", value: function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return new f.ChunkIterator(this, r);
            } }, { key: "iterate", value: function(r) {
              var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = new f.ChunkIterator(this, d);
              return a.iterate(r), a.target;
            } }, { key: "getBuffer", value: function(r, d) {
              return this.buffer.subarray(r, r + d);
            } }]) && n(h.prototype, S), c;
          }();
        }
      ), "./src/soundFont2.ts": (
        /*!***************************!*\
          !*** ./src/soundFont2.ts ***!
          \***************************/
        /*! exports provided: SoundFont2 */
        function(p, l, e) {
          e.r(l), e.d(l, "SoundFont2", function() {
            return d;
          });
          var f = e(
            /*! ./types */
            "./src/types/index.ts"
          ), s = e(
            /*! ./chunk */
            "./src/chunk.ts"
          ), n = e(
            /*! ./riff */
            "./src/riff/index.ts"
          ), t = e(
            /*! ./chunks */
            "./src/chunks/index.ts"
          ), i = e(
            /*! ./utils */
            "./src/utils/index.ts"
          );
          function c(a) {
            for (var u = 1; u < arguments.length; u++) {
              var o = arguments[u] != null ? arguments[u] : {}, g = Object.keys(o);
              typeof Object.getOwnPropertySymbols == "function" && (g = g.concat(Object.getOwnPropertySymbols(o).filter(function(R) {
                return Object.getOwnPropertyDescriptor(o, R).enumerable;
              }))), g.forEach(function(R) {
                r(a, R, o[R]);
              });
            }
            return a;
          }
          function h(a, u) {
            for (var o = 0; o < u.length; o++) {
              var g = u[o];
              g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(a, g.key, g);
            }
          }
          function S(a, u, o) {
            return u && h(a.prototype, u), o && h(a, o), a;
          }
          function r(a, u, o) {
            return u in a ? Object.defineProperty(a, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : a[u] = o, a;
          }
          var d = function() {
            function a(u) {
              if (function(g, R) {
                if (!(g instanceof R)) throw new TypeError("Cannot call a class as a function");
              }(this, a), r(this, "chunk", void 0), r(this, "metaData", void 0), r(this, "sampleData", void 0), r(this, "samples", void 0), r(this, "presetData", void 0), r(this, "instruments", void 0), r(this, "presets", void 0), r(this, "banks", void 0), !(u instanceof s.SF2Chunk)) {
                var o = Object(n.parseBuffer)(u);
                u = new s.SF2Chunk(o);
              }
              if (u.subChunks.length !== 3) throw new n.ParseError("Invalid sfbk structure", "3 chunks", "".concat(u.subChunks.length, " chunks"));
              this.chunk = u, this.metaData = u.subChunks[0].getMetaData(), this.sampleData = u.subChunks[1].getSampleData(), this.presetData = u.subChunks[2].getPresetData(), this.samples = this.getSamples(), this.instruments = this.getInstruments(), this.presets = this.getPresets(), this.banks = this.getBanks();
            }
            return S(a, null, [{ key: "from", value: function(u) {
              return new a(u);
            } }]), S(a, [{ key: "getKeyData", value: function(u) {
              var o = this, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
              return Object(i.memoize)(function(U, L, A) {
                var b = o.banks[L];
                if (b) {
                  var y = b.presets[A];
                  if (y) {
                    var M = y.zones.find(function(N) {
                      return o.isKeyInRange(N, U);
                    });
                    if (M) {
                      var O = M.instrument, E = O.zones.find(function(N) {
                        return o.isKeyInRange(N, U);
                      });
                      if (E) {
                        var P = E.sample, k = c({}, M.generators, E.generators), I = c({}, M.modulators, E.modulators);
                        return { keyNumber: U, preset: y, instrument: O, sample: P, generators: k, modulators: I };
                      }
                    }
                  }
                }
                return null;
              })(u, g, R);
            } }, { key: "isKeyInRange", value: function(u, o) {
              return u.keyRange === void 0 || u.keyRange.lo <= o && u.keyRange.hi >= o;
            } }, { key: "getBanks", value: function() {
              return this.presets.reduce(function(u, o) {
                var g = o.header.bank;
                return u[g] || (u[g] = { presets: [] }), u[g].presets[o.header.preset] = o, u;
              }, []);
            } }, { key: "getPresets", value: function() {
              var u = this.presetData, o = u.presetHeaders, g = u.presetZones, R = u.presetGenerators, U = u.presetModulators;
              return Object(t.getItemsInZone)(o, g, U, R, this.instruments, f.GeneratorType.Instrument).filter(function(L) {
                return L.header.name !== "EOP";
              }).map(function(L) {
                return { header: L.header, globalZone: L.globalZone, zones: L.zones.map(function(A) {
                  return { keyRange: A.keyRange, generators: A.generators, modulators: A.modulators, instrument: A.reference };
                }) };
              });
            } }, { key: "getInstruments", value: function() {
              var u = this.presetData, o = u.instrumentHeaders, g = u.instrumentZones, R = u.instrumentModulators, U = u.instrumentGenerators;
              return Object(t.getItemsInZone)(o, g, R, U, this.samples, f.GeneratorType.SampleId).filter(function(L) {
                return L.header.name !== "EOI";
              }).map(function(L) {
                return { header: L.header, globalZone: L.globalZone, zones: L.zones.map(function(A) {
                  return { keyRange: A.keyRange, generators: A.generators, modulators: A.modulators, sample: A.reference };
                }) };
              });
            } }, { key: "getSamples", value: function() {
              var u = this;
              return this.presetData.sampleHeaders.filter(function(o) {
                return o.name !== "EOS";
              }).map(function(o) {
                if (o.name !== "EOS" && o.sampleRate <= 0) throw new Error("Illegal sample rate of ".concat(o.sampleRate, " hz in sample '").concat(o.name, "'"));
                return o.originalPitch >= 128 && o.originalPitch <= 254 && (o.originalPitch = 60), o.startLoop -= o.start, o.endLoop -= o.start, { header: o, data: new Int16Array(new Uint8Array(u.sampleData.subarray(2 * o.start, 2 * o.end)).buffer) };
              });
            } }]), a;
          }();
        }
      ), "./src/types/bank.ts": (
        /*!***************************!*\
          !*** ./src/types/bank.ts ***!
          \***************************/
        /*! no static exports found */
        function(p, l) {
        }
      ), "./src/types/generator.ts": (
        /*!********************************!*\
          !*** ./src/types/generator.ts ***!
          \********************************/
        /*! exports provided: GeneratorType, DEFAULT_GENERATOR_VALUES */
        function(p, l, e) {
          var f, s;
          function n(i, c, h) {
            return c in i ? Object.defineProperty(i, c, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : i[c] = h, i;
          }
          e.r(l), e.d(l, "GeneratorType", function() {
            return s;
          }), e.d(l, "DEFAULT_GENERATOR_VALUES", function() {
            return t;
          }), function(i) {
            i[i.StartAddrsOffset = 0] = "StartAddrsOffset", i[i.EndAddrsOffset = 1] = "EndAddrsOffset", i[i.StartLoopAddrsOffset = 2] = "StartLoopAddrsOffset", i[i.EndLoopAddrsOffset = 3] = "EndLoopAddrsOffset", i[i.StartAddrsCoarseOffset = 4] = "StartAddrsCoarseOffset", i[i.ModLFOToPitch = 5] = "ModLFOToPitch", i[i.VibLFOToPitch = 6] = "VibLFOToPitch", i[i.ModEnvToPitch = 7] = "ModEnvToPitch", i[i.InitialFilterFc = 8] = "InitialFilterFc", i[i.InitialFilterQ = 9] = "InitialFilterQ", i[i.ModLFOToFilterFc = 10] = "ModLFOToFilterFc", i[i.ModEnvToFilterFc = 11] = "ModEnvToFilterFc", i[i.EndAddrsCoarseOffset = 12] = "EndAddrsCoarseOffset", i[i.ModLFOToVolume = 13] = "ModLFOToVolume", i[i.Unused1 = 14] = "Unused1", i[i.ChorusEffectsSend = 15] = "ChorusEffectsSend", i[i.ReverbEffectsSend = 16] = "ReverbEffectsSend", i[i.Pan = 17] = "Pan", i[i.Unused2 = 18] = "Unused2", i[i.Unused3 = 19] = "Unused3", i[i.Unused4 = 20] = "Unused4", i[i.DelayModLFO = 21] = "DelayModLFO", i[i.FreqModLFO = 22] = "FreqModLFO", i[i.DelayVibLFO = 23] = "DelayVibLFO", i[i.FreqVibLFO = 24] = "FreqVibLFO", i[i.DelayModEnv = 25] = "DelayModEnv", i[i.AttackModEnv = 26] = "AttackModEnv", i[i.HoldModEnv = 27] = "HoldModEnv", i[i.DecayModEnv = 28] = "DecayModEnv", i[i.SustainModEnv = 29] = "SustainModEnv", i[i.ReleaseModEnv = 30] = "ReleaseModEnv", i[i.KeyNumToModEnvHold = 31] = "KeyNumToModEnvHold", i[i.KeyNumToModEnvDecay = 32] = "KeyNumToModEnvDecay", i[i.DelayVolEnv = 33] = "DelayVolEnv", i[i.AttackVolEnv = 34] = "AttackVolEnv", i[i.HoldVolEnv = 35] = "HoldVolEnv", i[i.DecayVolEnv = 36] = "DecayVolEnv", i[i.SustainVolEnv = 37] = "SustainVolEnv", i[i.ReleaseVolEnv = 38] = "ReleaseVolEnv", i[i.KeyNumToVolEnvHold = 39] = "KeyNumToVolEnvHold", i[i.KeyNumToVolEnvDecay = 40] = "KeyNumToVolEnvDecay", i[i.Instrument = 41] = "Instrument", i[i.Reserved1 = 42] = "Reserved1", i[i.KeyRange = 43] = "KeyRange", i[i.VelRange = 44] = "VelRange", i[i.StartLoopAddrsCoarseOffset = 45] = "StartLoopAddrsCoarseOffset", i[i.KeyNum = 46] = "KeyNum", i[i.Velocity = 47] = "Velocity", i[i.InitialAttenuation = 48] = "InitialAttenuation", i[i.Reserved2 = 49] = "Reserved2", i[i.EndLoopAddrsCoarseOffset = 50] = "EndLoopAddrsCoarseOffset", i[i.CoarseTune = 51] = "CoarseTune", i[i.FineTune = 52] = "FineTune", i[i.SampleId = 53] = "SampleId", i[i.SampleModes = 54] = "SampleModes", i[i.Reserved3 = 55] = "Reserved3", i[i.ScaleTuning = 56] = "ScaleTuning", i[i.ExclusiveClass = 57] = "ExclusiveClass", i[i.OverridingRootKey = 58] = "OverridingRootKey", i[i.Unused5 = 59] = "Unused5", i[i.EndOper = 60] = "EndOper";
          }(s || (s = {}));
          var t = (n(f = {}, s.StartAddrsOffset, 0), n(f, s.EndAddrsOffset, 0), n(f, s.StartLoopAddrsOffset, 0), n(f, s.EndLoopAddrsOffset, 0), n(f, s.StartAddrsCoarseOffset, 0), n(f, s.ModLFOToPitch, 0), n(f, s.VibLFOToPitch, 0), n(f, s.ModEnvToPitch, 0), n(f, s.InitialFilterFc, 13500), n(f, s.InitialFilterQ, 0), n(f, s.ModLFOToFilterFc, 0), n(f, s.ModEnvToFilterFc, 0), n(f, s.EndAddrsCoarseOffset, 0), n(f, s.ModLFOToVolume, 0), n(f, s.ChorusEffectsSend, 0), n(f, s.ReverbEffectsSend, 0), n(f, s.Pan, 0), n(f, s.DelayModLFO, -12e3), n(f, s.FreqModLFO, 0), n(f, s.DelayVibLFO, -12e3), n(f, s.FreqVibLFO, 0), n(f, s.DelayModEnv, -12e3), n(f, s.AttackModEnv, -12e3), n(f, s.HoldModEnv, -12e3), n(f, s.DecayModEnv, -12e3), n(f, s.SustainModEnv, 0), n(f, s.ReleaseModEnv, -12e3), n(f, s.KeyNumToModEnvHold, 0), n(f, s.KeyNumToModEnvDecay, 0), n(f, s.DelayVolEnv, -12e3), n(f, s.AttackVolEnv, -12e3), n(f, s.HoldVolEnv, -12e3), n(f, s.DecayVolEnv, -12e3), n(f, s.SustainVolEnv, 0), n(f, s.ReleaseVolEnv, -12e3), n(f, s.KeyNumToVolEnvHold, 0), n(f, s.KeyNumToVolEnvDecay, 0), n(f, s.StartLoopAddrsCoarseOffset, 0), n(f, s.KeyNum, -1), n(f, s.Velocity, -1), n(f, s.InitialAttenuation, 0), n(f, s.EndLoopAddrsCoarseOffset, 0), n(f, s.CoarseTune, 0), n(f, s.FineTune, 0), n(f, s.SampleModes, 0), n(f, s.ScaleTuning, 100), n(f, s.ExclusiveClass, 0), n(f, s.OverridingRootKey, -1), f);
        }
      ), "./src/types/index.ts": (
        /*!****************************!*\
          !*** ./src/types/index.ts ***!
          \****************************/
        /*! no static exports found */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./bank */
            "./src/types/bank.ts"
          );
          for (var s in f) s !== "default" && function(u) {
            e.d(l, u, function() {
              return f[u];
            });
          }(s);
          var n = e(
            /*! ./generator */
            "./src/types/generator.ts"
          );
          e.d(l, "GeneratorType", function() {
            return n.GeneratorType;
          }), e.d(l, "DEFAULT_GENERATOR_VALUES", function() {
            return n.DEFAULT_GENERATOR_VALUES;
          });
          var t = e(
            /*! ./instrument */
            "./src/types/instrument.ts"
          );
          for (var s in t) ["GeneratorType", "DEFAULT_GENERATOR_VALUES", "default"].indexOf(s) < 0 && function(o) {
            e.d(l, o, function() {
              return t[o];
            });
          }(s);
          var i = e(
            /*! ./key */
            "./src/types/key.ts"
          );
          for (var s in i) ["GeneratorType", "DEFAULT_GENERATOR_VALUES", "default"].indexOf(s) < 0 && function(o) {
            e.d(l, o, function() {
              return i[o];
            });
          }(s);
          var c = e(
            /*! ./metaData */
            "./src/types/metaData.ts"
          );
          for (var s in c) ["GeneratorType", "DEFAULT_GENERATOR_VALUES", "default"].indexOf(s) < 0 && function(o) {
            e.d(l, o, function() {
              return c[o];
            });
          }(s);
          var h = e(
            /*! ./modulator */
            "./src/types/modulator.ts"
          );
          e.d(l, "ControllerType", function() {
            return h.ControllerType;
          }), e.d(l, "ControllerPolarity", function() {
            return h.ControllerPolarity;
          }), e.d(l, "ControllerDirection", function() {
            return h.ControllerDirection;
          }), e.d(l, "ControllerPalette", function() {
            return h.ControllerPalette;
          }), e.d(l, "Controller", function() {
            return h.Controller;
          }), e.d(l, "TransformType", function() {
            return h.TransformType;
          }), e.d(l, "DEFAULT_INSTRUMENT_MODULATORS", function() {
            return h.DEFAULT_INSTRUMENT_MODULATORS;
          });
          var S = e(
            /*! ./preset */
            "./src/types/preset.ts"
          );
          for (var s in S) ["GeneratorType", "DEFAULT_GENERATOR_VALUES", "ControllerType", "ControllerPolarity", "ControllerDirection", "ControllerPalette", "Controller", "TransformType", "DEFAULT_INSTRUMENT_MODULATORS", "default"].indexOf(s) < 0 && function(o) {
            e.d(l, o, function() {
              return S[o];
            });
          }(s);
          var r = e(
            /*! ./presetData */
            "./src/types/presetData.ts"
          );
          for (var s in r) ["GeneratorType", "DEFAULT_GENERATOR_VALUES", "ControllerType", "ControllerPolarity", "ControllerDirection", "ControllerPalette", "Controller", "TransformType", "DEFAULT_INSTRUMENT_MODULATORS", "default"].indexOf(s) < 0 && function(o) {
            e.d(l, o, function() {
              return r[o];
            });
          }(s);
          var d = e(
            /*! ./sample */
            "./src/types/sample.ts"
          );
          e.d(l, "SampleType", function() {
            return d.SampleType;
          });
          var a = e(
            /*! ./zone */
            "./src/types/zone.ts"
          );
          for (var s in a) ["GeneratorType", "DEFAULT_GENERATOR_VALUES", "ControllerType", "ControllerPolarity", "ControllerDirection", "ControllerPalette", "Controller", "TransformType", "DEFAULT_INSTRUMENT_MODULATORS", "SampleType", "default"].indexOf(s) < 0 && function(o) {
            e.d(l, o, function() {
              return a[o];
            });
          }(s);
        }
      ), "./src/types/instrument.ts": (
        /*!*********************************!*\
          !*** ./src/types/instrument.ts ***!
          \*********************************/
        /*! no static exports found */
        function(p, l) {
        }
      ), "./src/types/key.ts": (
        /*!**************************!*\
          !*** ./src/types/key.ts ***!
          \**************************/
        /*! no static exports found */
        function(p, l) {
        }
      ), "./src/types/metaData.ts": (
        /*!*******************************!*\
          !*** ./src/types/metaData.ts ***!
          \*******************************/
        /*! no static exports found */
        function(p, l) {
        }
      ), "./src/types/modulator.ts": (
        /*!********************************!*\
          !*** ./src/types/modulator.ts ***!
          \********************************/
        /*! exports provided: ControllerType, ControllerPolarity, ControllerDirection, ControllerPalette, Controller, TransformType, DEFAULT_INSTRUMENT_MODULATORS */
        function(p, l, e) {
          e.r(l), e.d(l, "ControllerType", function() {
            return f;
          }), e.d(l, "ControllerPolarity", function() {
            return s;
          }), e.d(l, "ControllerDirection", function() {
            return n;
          }), e.d(l, "ControllerPalette", function() {
            return t;
          }), e.d(l, "Controller", function() {
            return i;
          }), e.d(l, "TransformType", function() {
            return c;
          }), e.d(l, "DEFAULT_INSTRUMENT_MODULATORS", function() {
            return S;
          });
          var f, s, n, t, i, c, h = e(
            /*! ./generator */
            "./src/types/generator.ts"
          );
          (function(r) {
            r[r.Linear = 0] = "Linear", r[r.Concave = 1] = "Concave", r[r.Convex = 2] = "Convex", r[r.Switch = 3] = "Switch";
          })(f || (f = {})), function(r) {
            r[r.Unipolar = 0] = "Unipolar", r[r.Bipolar = 1] = "Bipolar";
          }(s || (s = {})), function(r) {
            r[r.Increasing = 0] = "Increasing", r[r.Decreasing = 1] = "Decreasing";
          }(n || (n = {})), function(r) {
            r[r.GeneralController = 0] = "GeneralController", r[r.MidiController = 1] = "MidiController";
          }(t || (t = {})), function(r) {
            r[r.NoController = 0] = "NoController", r[r.NoteOnVelocity = 2] = "NoteOnVelocity", r[r.NoteOnKeyNumber = 3] = "NoteOnKeyNumber", r[r.PolyPressure = 10] = "PolyPressure", r[r.ChannelPressure = 13] = "ChannelPressure", r[r.PitchWheel = 14] = "PitchWheel", r[r.PitchWheelSensitivity = 16] = "PitchWheelSensitivity", r[r.Link = 127] = "Link";
          }(i || (i = {})), function(r) {
            r[r.Linear = 0] = "Linear", r[r.Absolute = 2] = "Absolute";
          }(c || (c = {}));
          var S = [{ id: h.GeneratorType.InitialAttenuation, source: { type: f.Concave, polarity: s.Unipolar, direction: n.Decreasing, palette: t.GeneralController, index: i.NoteOnVelocity }, value: 960, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.InitialFilterFc, source: { type: f.Linear, polarity: s.Unipolar, direction: n.Decreasing, palette: t.GeneralController, index: i.NoteOnVelocity }, value: -2400, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.VibLFOToPitch, source: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.ChannelPressure }, value: 50, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.VibLFOToPitch, source: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.MidiController, index: 1 }, value: 50, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.InitialAttenuation, source: { type: f.Concave, polarity: s.Unipolar, direction: n.Decreasing, palette: t.MidiController, index: 7 }, value: 960, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.InitialAttenuation, source: { type: f.Linear, polarity: s.Bipolar, direction: n.Increasing, palette: t.MidiController, index: 10 }, value: 1e3, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.InitialAttenuation, source: { type: f.Concave, polarity: s.Unipolar, direction: n.Decreasing, palette: t.MidiController, index: 11 }, value: 960, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.ReverbEffectsSend, source: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.MidiController, index: 91 }, value: 200, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.ChorusEffectsSend, source: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.MidiController, index: 93 }, value: 200, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.NoController }, transform: c.Linear }, { id: h.GeneratorType.CoarseTune, source: { type: f.Linear, polarity: s.Bipolar, direction: n.Increasing, palette: t.GeneralController, index: i.PitchWheel }, value: 12700, valueSource: { type: f.Linear, polarity: s.Unipolar, direction: n.Increasing, palette: t.GeneralController, index: i.PitchWheelSensitivity }, transform: c.Linear }];
        }
      ), "./src/types/preset.ts": (
        /*!*****************************!*\
          !*** ./src/types/preset.ts ***!
          \*****************************/
        /*! no static exports found */
        function(p, l) {
        }
      ), "./src/types/presetData.ts": (
        /*!*********************************!*\
          !*** ./src/types/presetData.ts ***!
          \*********************************/
        /*! no static exports found */
        function(p, l) {
        }
      ), "./src/types/sample.ts": (
        /*!*****************************!*\
          !*** ./src/types/sample.ts ***!
          \*****************************/
        /*! exports provided: SampleType */
        function(p, l, e) {
          var f;
          e.r(l), e.d(l, "SampleType", function() {
            return f;
          }), function(s) {
            s[s.EOS = 0] = "EOS", s[s.Mono = 1] = "Mono", s[s.Right = 2] = "Right", s[s.Left = 4] = "Left", s[s.Linked = 8] = "Linked", s[s.RomMono = 32769] = "RomMono", s[s.RomRight = 32770] = "RomRight", s[s.RomLeft = 32772] = "RomLeft", s[s.RomLinked = 32776] = "RomLinked";
          }(f || (f = {}));
        }
      ), "./src/types/zone.ts": (
        /*!***************************!*\
          !*** ./src/types/zone.ts ***!
          \***************************/
        /*! no static exports found */
        function(p, l) {
        }
      ), "./src/utils/buffer.ts": (
        /*!*****************************!*\
          !*** ./src/utils/buffer.ts ***!
          \*****************************/
        /*! exports provided: getStringFromBuffer */
        function(p, l, e) {
          e.r(l), e.d(l, "getStringFromBuffer", function() {
            return f;
          });
          var f = function(s) {
            return new TextDecoder("utf8").decode(s).split(/\0/)[0].trim();
          };
        }
      ), "./src/utils/index.ts": (
        /*!****************************!*\
          !*** ./src/utils/index.ts ***!
          \****************************/
        /*! exports provided: getStringFromBuffer, memoize */
        function(p, l, e) {
          e.r(l);
          var f = e(
            /*! ./buffer */
            "./src/utils/buffer.ts"
          );
          e.d(l, "getStringFromBuffer", function() {
            return f.getStringFromBuffer;
          });
          var s = e(
            /*! ./memoize */
            "./src/utils/memoize.ts"
          );
          e.d(l, "memoize", function() {
            return s.memoize;
          });
        }
      ), "./src/utils/memoize.ts": (
        /*!******************************!*\
          !*** ./src/utils/memoize.ts ***!
          \******************************/
        /*! exports provided: memoize */
        function(p, l, e) {
          e.r(l), e.d(l, "memoize", function() {
            return f;
          });
          var f = function(s) {
            var n = {};
            return function() {
              for (var t = arguments.length, i = new Array(t), c = 0; c < t; c++) i[c] = arguments[c];
              var h = JSON.stringify(i);
              if (h in n) return n[h];
              var S = s.apply(void 0, i);
              return n[h] = S, S;
            };
          };
        }
      ) });
    });
  }(SoundFont2)), SoundFont2.exports;
}
var SoundFont2Exports = requireSoundFont2();
const m = (v) => Math.pow(2, v / 1200), Q = (v) => v / 1e3, G = (v, F) => {
  const p = Math.pow(10, F);
  return Math.round(v * p) / p;
};
typeof AudioParam < "u" && (AudioParam.prototype.dahdsr = function(v, F, p, l, e, f, s, n, t) {
  e = Math.max(G(e, 4), 1e-3), s = Math.max(G(s, 4), 1e-3), t = G(t, 4), F = Math.max(F, 1e-3);
  let i = v;
  return this.setValueAtTime(F, i), this.setValueAtTime(F, i += l), this.exponentialRampToValueAtTime(p, i += e), this.setValueAtTime(p, i += f), this.exponentialRampToValueAtTime(Math.max(n * p, 1e-3), i += s), (c, h) => {
    this.cancelAndHoldAtTime(c);
    const S = Math.max(h ?? F, 1e-3);
    this.exponentialRampToValueAtTime(S, c + t);
  };
});
const T = {
  0: "startAddrOffset",
  1: "endAddrOffset",
  2: "startloopAddrsOffset",
  3: "endloopAddrsOffset",
  4: "startAddrsCoarseOffset",
  5: "modLfoToPitch",
  6: "vibLfoToPitch",
  7: "modEnvToPitch",
  8: "initialFilterFc",
  9: "initialFilterQ",
  10: "modLfoToFilterFc",
  11: "modEnvToFilterFc",
  12: "endAddrsCoarseOffset",
  13: "modLfoToVolume",
  14: "unused1",
  15: "chorusEffectsSend",
  16: "reverbEffectsSend",
  17: "pan",
  18: "unused2",
  19: "unused3",
  20: "unused4",
  21: "delayModLFO",
  22: "freqModLFO",
  23: "delayVibLFO",
  24: "freqVibLFO",
  25: "delayModEnv",
  26: "attackModEnv",
  27: "holdModEnv",
  28: "decayModEnv",
  29: "sustainModEnv",
  30: "releaseModEnv",
  31: "keyNumToModEnvHold",
  32: "keyNumToModEnvDecay",
  33: "delayVolEnv",
  34: "attackVolEnv",
  35: "holdVolEnv",
  36: "decayVolEnv",
  37: "sustainVolEnv",
  38: "releaseVolEnv",
  39: "keyNumToVolEnvHold",
  40: "keyNumToVolEnvDecay",
  41: "instrument",
  42: "reserved1",
  43: "keyRange",
  44: "velRange",
  45: "startloopAddrsCoarseOffset",
  46: "keyNum",
  47: "velocity",
  48: "initialAttenuation",
  49: "reserved2",
  50: "endloopAddrsCoarseOffset",
  51: "coarseTune",
  52: "fineTune",
  53: "sampleID",
  54: "sampleModes",
  55: "reserved3",
  56: "scaleTuning",
  57: "exclusiveClass",
  58: "overridingRootKey",
  59: "unused5",
  60: "endOper"
};
Object.fromEntries(
  Object.entries(SoundFont2Exports.DEFAULT_GENERATOR_VALUES).map(([v, F]) => [T[v], F])
);
const D = (v, F, p, l, e) => {
  var f, s, n, t, i, c, h;
  const S = SoundFont2Exports.DEFAULT_GENERATOR_VALUES[v];
  if (typeof S != "number")
    throw new Error(`no default value found for generator with index ${v}`);
  const r = F.generators[v], d = (s = (f = p.globalZone) == null ? void 0 : f.generators) == null ? void 0 : s[v], a = (n = l?.generators) == null ? void 0 : n[v], u = (i = (t = e.globalZone) == null ? void 0 : t.generators) == null ? void 0 : i[v], o = r && "value" in r ? r.value : void 0, g = d && "value" in d ? d.value : void 0, R = a && "value" in a ? a.value : void 0, U = u && "value" in u ? u.value : void 0, L = (c = o ?? g) != null ? c : S, A = (h = R ?? U) != null ? h : 0;
  return L + A;
}, J = (v) => SoundFont2Exports.DEFAULT_GENERATOR_VALUES[v] !== void 0, W = (v, F, p) => {
  var l, e, f, s;
  return Object.fromEntries(
    Array.from(
      new Set(
        [
          Object.keys((e = (l = p.globalZone) == null ? void 0 : l.generators) != null ? e : {}),
          Object.keys(F.generators),
          Object.keys((s = (f = F.instrument.globalZone) == null ? void 0 : f.generators) != null ? s : {}),
          Object.keys(v.generators)
        ].flat()
      )
    ).filter(J).map((n) => [T[n], D(parseInt(n), v, F.instrument, F, p)])
  );
};
async function ae(v) {
  const F = await fetch(v).then((l) => l.arrayBuffer()), p = new Uint8Array(F);
  return new SoundFont2Exports.SoundFont2(p);
}
function X(v, F, p) {
  let { time: l = v.currentTime } = p;
  const {
    midi: e,
    start: f,
    velocity: s = 0.3,
    startLoop: n,
    endLoop: t,
    sampleRate: i,
    originalPitch: c,
    pitchCorrection: h,
    type: S,
    sampleModes: r = 0,
    overridingRootKey: d,
    fineTune: a = 0,
    startloopAddrsOffset: u = 0,
    startloopAddrsCoarseOffset: o = 0,
    endloopAddrsOffset: g = 0,
    endloopAddrsCoarseOffset: R = 0,
    delayVolEnv: U = -12e3,
    attackVolEnv: L = -12e3,
    holdVolEnv: A = -12e3,
    decayVolEnv: b = -12e3,
    sustainVolEnv: y = 0,
    releaseVolEnv: M = -12e3,
    pan: O = 0,
    ...E
  } = p, P = 100 * (d !== void 0 && d !== -1 ? d : c) + h - a, k = e * 100 - P, I = 1 * Math.pow(2, k / 1200);
  F.playbackRate.value = I;
  const N = n + u + o * 32768, w = t + g + R * 32768;
  w > N && r === 1 ? (F.loopStart = N / i, F.loopEnd = w / i, F.loop = !0) : r === 3 && console.warn("unimplemented sampleMode 3 (play till end on note off)"), Object.keys(E).filter(
    (V) => !["name", "instrument", "keyRange", "sampleID", "end"].includes(V)
  ).length;
  const B = v.createGain(), j = [
    l,
    0,
    s,
    m(U),
    m(L),
    m(A),
    m(b),
    y >= 960 ? 0 : 1 - Q(y),
    m(M)
  ], Z = B.gain.dahdsr(...j), H = v.createStereoPanner();
  return H.pan.value = O / 1e3, B.connect(H), F.connect(B), H.connect(v.destination), F.start(l), (V = v.currentTime) => {
    F.stop(V + m(M)), Z(V);
  };
}
function Y(v, F, p = {}) {
  const { header: l, data: e } = F, f = new Float32Array(e.length);
  for (let t = 0; t < e.length; t++)
    f[t] = e[t] / 32768;
  const s = v.createBuffer(1, f.length, l.sampleRate);
  s.getChannelData(0).set(f);
  const n = v.createBufferSource();
  return n.buffer = s, p = { ...l, ...p }, X(v, n, p);
}
const C = (v, F) => !v.keyRange || v.keyRange.lo <= F && F <= v.keyRange.hi, x = (v, F) => v.zones.filter((p) => C(p, F) && p.instrument).map((p) => p.instrument.zones.filter((l) => C(l, F)).map((l) => {
  const e = W(l, p, v);
  return {
    ...l,
    mergedGenerators: e
  };
})).flat(), ce = (v, F, p, l = v.currentTime) => {
  const e = x(F, p).map(
    (f) => Y(v, f.sample, {
      ...f.mergedGenerators,
      midi: p,
      time: l
    })
  );
  return (f = v.currentTime) => {
    e.forEach((s) => s(f));
  };
};
Pattern.prototype.soundfont = function(v, F = 0) {
  return this.onTrigger((p, l, e, f, s) => {
    const n = getAudioContext(), t = getPlayableNoteValue(l), i = v.presets[F % v.presets.length], c = s, h = [n, i, noteToMidi(t), c];
    ce(...h)(c + l.duration);
  });
};
const soundfontCache = /* @__PURE__ */ new Map();
function loadSoundfont(v) {
  if (soundfontCache.get(v))
    return soundfontCache.get(v);
  const F = ae(v);
  return soundfontCache.set(v, F), F;
}
export {
  getFontBufferSource,
  loadSoundfont,
  registerSoundfonts,
  setSoundfontUrl,
  list as soundfontList,
  ce as startPresetNote
};
