/*

CharFunk v1.0.0

*********************************** License ************************************

Copyright 2009 Joseph Larson

This library is free software: you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation, either
version 3 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.

************************************ Doco *************************************

See: https://github.com/joelarson4/CharFunk (previously http://code.google.com/p/charfunk/)

Intended to support:
 1) Supporting a "General Type", avoiding more specific proper unicode charpoint type
 2) Supporting isWhiteSpace test

Not intending to support:
 1) Not supporting directionality test right now, just adding a table to support that would double the size of this library.  However, the way to do that would be very similar to GTYPE.
 2) Deliberately ignoring complexity at the higher end of unicode, because frankly I don't have time or need to understand it yet...

Each key in "GTYPE_TABLE" represents the lower bound charcode of a range of characters, the value being the type of character.
These were harvested using Java's Character.isLetter() and .isDigit()

*/

var CharFunk={
  GTYPE_LETTER: 1,
  GTYPE_DIGIT: 2,
  GTYPE_OTHER: 3,
  NAME_ALLOW_STANDARD:"_-",
  GTYPE_TABLE:{0:3,48:2,58:3,65:1,91:3,97:1,123:3,170:1,171:3,181:1,182:3,186:1,187:3,192:1,215:3,216:1,247:3,248:1,567:3,592:1,706:3,710:1,722:3,736:1,741:3,750:1,751:3,890:1,891:3,902:1,903:3,904:1,907:3,908:1,909:3,910:1,930:3,931:1,975:3,976:1,1014:3,1015:1,1020:3,1024:1,1154:3,1162:1,1231:3,1232:1,1270:3,1272:1,1274:3,1280:1,1296:3,1329:1,1367:3,1369:1,1370:3,1377:1,1416:3,1488:1,1515:3,1520:1,1523:3,1569:1,1595:3,1600:1,1611:3,1632:2,1642:3,1646:1,1648:3,1649:1,1748:3,1749:1,1750:3,1765:1,1767:3,1774:1,1776:2,1786:1,1789:3,1791:1,1792:3,1808:1,1809:3,1810:1,1840:3,1869:1,1872:3,1920:1,1958:3,1969:1,1970:3,2308:1,2362:3,2365:1,2366:3,2384:1,2385:3,2392:1,2402:3,2406:2,2416:3,2437:1,2445:3,2447:1,2449:3,2451:1,2473:3,2474:1,2481:3,2482:1,2483:3,2486:1,2490:3,2493:1,2494:3,2524:1,2526:3,2527:1,2530:3,2534:2,2544:1,2546:3,2565:1,2571:3,2575:1,2577:3,2579:1,2601:3,2602:1,2609:3,2610:1,2612:3,2613:1,2615:3,2616:1,2618:3,2649:1,2653:3,2654:1,2655:3,2662:2,2672:3,2674:1,2677:3,2693:1,2702:3,2703:1,2706:3,2707:1,2729:3,2730:1,2737:3,2738:1,2740:3,2741:1,2746:3,2749:1,2750:3,2768:1,2769:3,2784:1,2786:3,2790:2,2800:3,2821:1,2829:3,2831:1,2833:3,2835:1,2857:3,2858:1,2865:3,2866:1,2868:3,2869:1,2874:3,2877:1,2878:3,2908:1,2910:3,2911:1,2914:3,2918:2,2928:3,2929:1,2930:3,2947:1,2948:3,2949:1,2955:3,2958:1,2961:3,2962:1,2966:3,2969:1,2971:3,2972:1,2973:3,2974:1,2976:3,2979:1,2981:3,2984:1,2987:3,2990:1,2998:3,2999:1,3002:3,3047:2,3056:3,3077:1,3085:3,3086:1,3089:3,3090:1,3113:3,3114:1,3124:3,3125:1,3130:3,3168:1,3170:3,3174:2,3184:3,3205:1,3213:3,3214:1,3217:3,3218:1,3241:3,3242:1,3252:3,3253:1,3258:3,3261:1,3262:3,3294:1,3295:3,3296:1,3298:3,3302:2,3312:3,3333:1,3341:3,3342:1,3345:3,3346:1,3369:3,3370:1,3386:3,3424:1,3426:3,3430:2,3440:3,3461:1,3479:3,3482:1,3506:3,3507:1,3516:3,3517:1,3518:3,3520:1,3527:3,3585:1,3633:3,3634:1,3636:3,3648:1,3655:3,3664:2,3674:3,3713:1,3715:3,3716:1,3717:3,3719:1,3721:3,3722:1,3723:3,3725:1,3726:3,3732:1,3736:3,3737:1,3744:3,3745:1,3748:3,3749:1,3750:3,3751:1,3752:3,3754:1,3756:3,3757:1,3761:3,3762:1,3764:3,3773:1,3774:3,3776:1,3781:3,3782:1,3783:3,3792:2,3802:3,3804:1,3806:3,3840:1,3841:3,3872:2,3882:3,3904:1,3912:3,3913:1,3947:3,3976:1,3980:3,4096:1,4130:3,4131:1,4136:3,4137:1,4139:3,4160:2,4170:3,4176:1,4182:3,4256:1,4294:3,4304:1,4345:3,4352:1,4442:3,4447:1,4515:3,4520:1,4602:3,4608:1,4615:3,4616:1,4679:3,4680:1,4681:3,4682:1,4686:3,4688:1,4695:3,4696:1,4697:3,4698:1,4702:3,4704:1,4743:3,4744:1,4745:3,4746:1,4750:3,4752:1,4783:3,4784:1,4785:3,4786:1,4790:3,4792:1,4799:3,4800:1,4801:3,4802:1,4806:3,4808:1,4815:3,4816:1,4823:3,4824:1,4847:3,4848:1,4879:3,4880:1,4881:3,4882:1,4886:3,4888:1,4895:3,4896:1,4935:3,4936:1,4955:3,4969:2,4978:3,5024:1,5109:3,5121:1,5521:1,5741:3,5743:1,5751:3,5761:1,5787:3,5792:1,5867:3,5888:1,5901:3,5902:1,5906:3,5920:1,5938:3,5952:1,5970:3,5984:1,5997:3,5998:1,6001:3,6016:1,6068:3,6103:1,6104:3,6108:1,6109:3,6112:2,6122:3,6160:2,6170:3,6176:1,6264:3,6272:1,6313:3,6400:1,6429:3,6470:2,6480:1,6510:3,6512:1,6517:3,6917:3,7317:3,7424:1,7532:3,7680:1,7836:3,7840:1,7930:3,7936:1,7958:3,7960:1,7966:3,7968:1,8006:3,8008:1,8014:3,8016:1,8024:3,8025:1,8026:3,8027:1,8028:3,8029:1,8030:3,8031:1,8062:3,8064:1,8117:3,8118:1,8125:3,8126:1,8127:3,8130:1,8133:3,8134:1,8141:3,8144:1,8148:3,8150:1,8156:3,8160:1,8173:3,8178:1,8181:3,8182:1,8189:3,8305:1,8306:3,8319:1,8320:3,8450:1,8451:3,8455:1,8456:3,8458:1,8468:3,8469:1,8470:3,8473:1,8478:3,8484:1,8485:3,8486:1,8487:3,8488:1,8489:3,8490:1,8494:3,8495:1,8498:3,8499:1,8506:3,8509:1,8512:3,8517:1,8522:3,8922:3,9322:3,9722:3,10122:3,10522:3,10922:3,11322:3,11722:3,12122:3,12293:1,12295:3,12337:1,12342:3,12347:1,12349:3,12353:1,12439:3,12445:1,12448:3,12449:1,12539:3,12540:1,12544:3,12549:1,12589:3,12593:1,12687:3,12704:1,12728:3,12784:1,12800:3,13200:3,13312:1,13712:1,14112:1,14512:1,14912:1,15312:1,15712:1,16112:1,16512:1,16912:1,17312:1,17712:1,18112:1,18512:1,18912:1,19312:1,19712:1,19894:3,19968:1,20368:1,20768:1,21168:1,21568:1,21968:1,22368:1,22768:1,23168:1,23568:1,23968:1,24368:1,24768:1,25168:1,25568:1,25968:1,26368:1,26768:1,27168:1,27568:1,27968:1,28368:1,28768:1,29168:1,29568:1,29968:1,30368:1,30768:1,31168:1,31568:1,31968:1,32368:1,32768:1,33168:1,33568:1,33968:1,34368:1,34768:1,35168:1,35568:1,35968:1,36368:1,36768:1,37168:1,37568:1,37968:1,38368:1,38768:1,39168:1,39568:1,39968:1,40368:1,40768:1,40870:3,40960:1,41360:1,41760:1,42125:3,42525:3,42925:3,43325:3,43725:3,44032:1,44432:1,44832:1,45232:1,45632:1,46032:1,46432:1,46832:1,47232:1,47632:1,48032:1,48432:1,48832:1,49232:1,49632:1,50032:1,50432:1,50832:1,51232:1,51632:1,52032:1,52432:1,52832:1,53232:1,53632:1,54032:1,54432:1,54832:1,55204:3,55604:3,56004:3,56404:3,56804:3,57204:3,57604:3,58004:3,58404:3,58804:3,59204:3,59604:3,60004:3,60404:3,60804:3,61204:3,61604:3,62004:3,62404:3,62804:3,63204:3,63604:3,63744:1,64046:3,64048:1,64107:3,64256:1,64263:3,64275:1,64280:3,64285:1,64286:3,64287:1,64297:3,64298:1,64311:3,64312:1,64317:3,64318:1,64319:3,64320:1,64322:3,64323:1,64325:3,64326:1,64434:3,64467:1,64830:3,64848:1,64912:3,64914:1,64968:3,65008:1,65020:3,65136:1,65141:3,65142:1,65277:3,65296:2,65306:3,65313:1,65339:3,65345:1,65371:3,65382:1,65471:3,65474:1,65480:3,65482:1,65488:3,65490:1,65496:3,65498:1,65501:0},
  WSPACE_TABLE:{9:1,10:1,11:1,12:1,13:1,28:1,29:1,30:1,31:1,32:1,5760:1,6158:1,8192:1,8193:1,8194:1,8195:1,8196:1,8197:1,8198:1,8200:1,8201:1,8202:1,8203:1,8232:1,8233:1,8287:1,12288:1},
  getGeneralType:function(cp) {
    if(typeof cp=="string") { cp=cp.charCodeAt(0); }
    if(cp<0 || cp>65535) { return this.GTYPE_OTHER; }
    while(!this.GTYPE_TABLE[cp] && cp>0) { cp--; }
    return this.GTYPE_TABLE[cp];
    },
  isLetterOrDigit:function(ch) {
    return (this.getGeneralType(ch)!=this.GTYPE_OTHER);
    },
  isDigit:function(ch) {
    return (this.getGeneralType(ch)==this.GTYPE_DIGIT);
    },
  isLetter:function(ch) {
    return (this.getGeneralType(ch)==this.GTYPE_LETTER);
    },
  isWhiteSpace:function(ch) {
    return (this.WSPACE_TABLE[ch.charCodeAt(0)]==1);
    },
  allLettersOrDigits:function(str,frm) {
    for(var ci=frm || 0; ci<str.length; ci++) {
      if(!this.isLetterOrDigit(str.charAt(ci))) { return false; }
      }
    return true;
    },
  isValidFirst:function(str) {
    return (this.isLetter(str.charAt(0)) || str.charAt(0)=='_');
    },
  isValidName:function(str,alw) {
    if(!this.isValidFirst(str)) { return false; }
    alw=alw || this.NAME_ALLOW_STANDARD;
    for(var ci=1; ci<str.length; ci++) {
      if(!this.isLetterOrDigit(str.charAt(ci)) && alw.indexOf(str.charAt(ci))) { return false; }
      }
    return true;
    }
  };