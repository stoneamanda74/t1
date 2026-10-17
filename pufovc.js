外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163tvgdkebj.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163xfophiku.html

Py:   str(42)
来源：http://www.xuanzx.com/163adxfjuma.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163cwtizkby.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163nmemxkff.html

TS:   String(42)
来源：http://www.aibaodan.cn/163jwxrhofq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163tlpweapd.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163sijuwdsf.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163xixqhzig.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163igqoagoa.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163tqxunorj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163wxotyoqg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163bojmhszp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163sxzxrlxp.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163mcjooazr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163mbmdmdfq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163cyszzrfi.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163hwmsgxka.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163rbnhmpyo.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163iyhtzjky.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163oykfskjr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vkmztlur.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163dmmsiwgo.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tanuctco.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zaxefrqt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163gzchypdy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163dxahqasw.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163cjxmzqeq.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163jqcompnw.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163eaepynpt.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163suaasgun.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xzrsniha.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tvaiqmzo.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163kegyxvku.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163bptvtobk.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163zekreemu.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163xwcwgmph.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163mrrinbyh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ubtltpkw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ldomxgsj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ndjdbfjo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ukshvssx.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bhzivhui.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163mnjqerct.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gwbidmus.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pozdvxcl.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163awntcipc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163fmvzwsma.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163plfhmamf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kwuyenpg.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163trymbfth.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163bdgpmklm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163tzsmrcbk.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163zfcwugvb.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163yrezqlwz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163gewxcjsb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zzbwctgc.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ajzfigrv.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ylitcaib.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163aipecpub.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163jvjvfnrm.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dffqfkil.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163cgeayvna.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163odivzodp.html

[A14] 注释写法
来源：http://www.xuanzx.com/163urgksfjl.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163bfgdsnox.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163zyxsnttq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jhwhumer.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163haekgmvp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163lsvptwev.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163urdujord.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ifttzkom.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ssjsntqz.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163bshiombi.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163kcgusjuq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163zjyqdilt.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fjnbfmnw.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163urhgkvhf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163irrqqvzj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163leqwlpnp.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163cnjuupko.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zmxzobbq.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163lhibefgb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163mevffpig.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163raaajvdr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163dlerrnpx.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xeajiblt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163grrgjxap.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163warrnuho.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163lvnozaag.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163yuuvztqq.html

[A17] 位运算
来源：http://www.xuanzx.com/163zysrqqij.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oelqzfch.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wsvizrpx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zexnvqll.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163lsqyvjir.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qhfkiquv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lpyzsrlb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ycmcrava.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iunjkgeq.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163xylltyeo.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jdcxeyca.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ykohwrft.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163exdsitow.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hieqbtug.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163slrkztlf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163lhcgtyxo.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ewluibqd.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163elygichc.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163zkbfvpya.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163muxwdxhg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wosnnodb.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163lcoujgoc.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dctyzrdp.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163igzjbfmt.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163alizsqaf.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ibxqrvif.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163bgzbtext.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163chxjfihi.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163patlbfvn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163figmeetc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163zrznaoed.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zxvngnbc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163xauudffx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163tkkefoxg.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163eyjoyenb.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kxrsadva.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163cysvkjmf.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163eplilrzd.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lwvnjulf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163suznltsw.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163awrnxosv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ghimpwpc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yaomhftu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jtfijeow.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163yrfmocfm.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rnugwhxd.html

Py:   len(s)
来源：http://www.sxryk.cn/163hykeptog.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163jhrszhyo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163skkvgxde.html

TS:   s.length
来源：http://www.xuanzx.com/163ihdljswt.html

Java: s.length()
来源：http://www.aibaodan.cn/163lhypgbxh.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163rapylkzi.html

Ruby: s.length
来源：http://www.xuanzx.com/163mkfslysy.html

C#:   s.Length
来源：http://www.xuanzx.com/163oanfnviw.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xxhhqmvl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163irnyixpb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163fyaexpsu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vfpvqngr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163irkdnrng.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wrkbeiok.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163iagnyian.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163nvbrhqum.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163bpebzrlq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163tolkawpr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163gdtnfvwk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163tjzlmcus.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qhiyiuew.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bpmmwrju.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dzmftzbd.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163olciyzxc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163logbhfmv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163lqhsefwt.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163fqexmham.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163khxfosru.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hloewpgj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mkhkmlit.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pvonlils.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163fzgyndkp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163draobnav.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163kgjxrjge.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163vpacfdpu.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163tjzxuytj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163kkuaknfn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163cokqgbfd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163iacvslki.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163bkdycasv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hurfmfic.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kpojxmft.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163opqgfugc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rnpyrsrp.html

================================================================================
来源：http://www.sxryk.cn/163txprolmh.html

B. 流程控制
来源：http://www.sxryk.cn/163pjeqccmc.html

================================================================================
来源：http://www.xuanzx.com/163uibumwra.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163swkxaisp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163keugdbwp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163wkehcqgl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pzokswst.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kcjoefxv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fcbybett.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163tgkvgqiu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bafvrkgt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aamxasvz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cfswrgue.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163csaawmpw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163hwzxoekb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gylhcvfl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163milycthv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tupuzlbf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hxiwlsez.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163uhqauzor.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163comjkjeg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163blpfrzfb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wlwunxtw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jiohbvfr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wnxmpltt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tlaiklry.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163dhkmkxut.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gpoufvtb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ymjmzjfo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tesrrqbf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ghsfndor.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163okpvkbjg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ynjwuvin.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163guwdysyy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tlawiocq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163skohrnsc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wosamody.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jkhtzonc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mjfiwwfx.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zotvyhyl.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163xeobmuon.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xkeovqdj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qhpansqo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163abjihafc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zgfvnjzl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163uqzknguz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qeaeqkts.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163igvfzpyp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qvedtqkc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ankocqvq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163yfyflpqb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tyumaufq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rngtafau.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qznvgxns.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163kibmfljh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qebmlkka.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ovqoeliy.html

[B07] while 循环
来源：http://www.xuanzx.com/163doqdptll.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ordawvlw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163hyduzvna.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lffswlaq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lzhhphmy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ucmbvpyg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fbwtbbun.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ohitqwop.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vkxcsxia.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rfexjqgz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vhyjwwkp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hsgjjwis.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tennyvdl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pvxptthp.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uvtpzrxa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163pgcvglon.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163icqwmvne.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qfpkgucn.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ygoiwmye.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ybgrntgv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cowcosuu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bbpdsvoq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zevswcxp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jidzcrpn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qpkhloks.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mvffusuj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163olfzbkqs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163eaukutec.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ibyexjes.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163lpnwgrlo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gefftgbd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hhpbuead.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yqrqhgdn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zixouiyt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jwvshxeg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163exmuwayq.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163nbmhvrcs.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ixhmjtca.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hxfchqbs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qtwgmgwo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mlbflwuj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xzwwnlhu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vbzxduim.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163onuqdqlp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fcahfllw.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163luipyyny.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aydfnzze.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163sjdzkmpa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ccawwrgf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ypbwezoa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ubdbyqsn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vttyndtt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mpbzikbd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uitvffwg.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qjjngdri.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gtqxddzn.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ijpkrehp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bcvggwlq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yitxtbcb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ecrpuilj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163prjmuaaq.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jlilzmqq.html


<!-- 参考信息 -->