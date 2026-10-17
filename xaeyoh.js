外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163qsxprhuf.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qmpbrtcn.html

Py:   str(42)
来源：http://www.xuanzx.com/163jtvxtemq.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163tihwxyis.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163obvazaaw.html

TS:   String(42)
来源：http://www.xuanzx.com/163uemxpclu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163dguiktif.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163nigdovzm.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163yxvzrccg.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163adjcrmon.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163esdkxwuj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163nillorig.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163kvtqiltw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163erpgoxlz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163wwtgvimj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163hlburrzp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163uxrbilwh.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163wvjmsfga.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ijkvxifr.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163zogbaeji.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163jejzloai.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163twskooje.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163pifnmqzf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163auashsfq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zjtzrofq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163bizcoxkr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163etrrkifj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163trwhrczj.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163videxjuk.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163pctflcnv.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163rxvilssa.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163rbxcmkpy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163lgonpgvi.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163wpehsnwj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163pvuwttdo.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163seuiioxf.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163npdwqyfh.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163lmuanhmm.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163zaxailbs.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kgqefjce.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bscohzxs.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yagupgck.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cnnqpqsz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163dnhqrcvr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mtlvtmpj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ycqiaobc.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163feemjocf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163zxqlilhh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163seisxhvp.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lzmqbuka.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yqmvgkjt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163vgduijxf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163nktwoelj.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ifbntxdn.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163qmuvxhof.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163hyyxpntr.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jkkalmqf.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163vmqqsupq.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kaztvrez.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fixfcybj.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163obxrdwnd.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ugdtsrft.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163swokcybk.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163joodqwrp.html

[A14] 注释写法
来源：http://www.sxryk.cn/163leorpcyc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163hneosvau.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163naznwrju.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163czriqgnw.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xahuepba.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163athniqde.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163diiuvpvp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163uatjqtiv.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163icclxgcx.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163nivobawu.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163bjsrhcsz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163jcoduwga.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zbxhuahf.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ifrzrfuj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163rfocudtr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163eihyopxn.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163fmqucsoi.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163qyplunlh.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163tuchrfuo.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163skpmuabj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163veprlvoe.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hzvgtjcz.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ogxsmehv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163eqwrajvb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kffgpipf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ljnujcer.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163dhyiufko.html

[A17] 位运算
来源：http://www.xuanzx.com/163drbhifnr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tntwdskw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pwzfmtfp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wlamfrhq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163sqgjdrcd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yshdcscl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nhlexazo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lsmpyenn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fvouowhw.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163pjbclacm.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jyivqruu.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163tfazzylj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163iiyqikmg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163jcqiugub.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163cbfpsggu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163xjjgoyng.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163mdyjktdd.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163jtgmtxba.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163yfdhndbb.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163tiswwlea.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ohmrrxuw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jcgaiwuo.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163lndlbamp.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163vmbletdq.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163jbtxsspg.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163gixssnmw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163walplblg.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163kmygyrrw.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163gzfewnig.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163bivipipa.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ldvjtsyb.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163kpmhzwry.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163vydzwlcc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mbmujube.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zqfaovcb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ztsdkmyo.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163bwasorwj.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163qgwlbvsi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ojiokfcg.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163trhgwgpz.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nzxdjofq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lxawjptk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pwodtyxk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xfialunm.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mqaigivi.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ggshrjuf.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ouoypgvz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163cjshjzuy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163xxnoyhih.html

TS:   s.length
来源：http://www.sxryk.cn/163cfxtbdva.html

Java: s.length()
来源：http://www.sxryk.cn/163suplousg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163sltfhmfp.html

Ruby: s.length
来源：http://www.aibaodan.cn/163wehrodns.html

C#:   s.Length
来源：http://www.xuanzx.com/163clydnsxd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ypzydrtl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163dpztjlzr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163etfjsbyg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tgxqllnt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fjttwzff.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ewjcfkjy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163gzyobnow.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163kgrsbirv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163beejyzxz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163brpwzwnr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163wirtgsmy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ikyblkhh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uxoiulnp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gojfzhzt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163xojhnmrj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163vvspqrdt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cylkpmcx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163uimzndry.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163lljjlxsq.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ffosvhxe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163fjszwqrg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tfdkpqvn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ljhiqwmi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163bplaelkd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163plgbnbbl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163obahwoxc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163komuvkon.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163emvggtkc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163rlpgbjec.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jgcfhysm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163rtndyfqv.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163uniartss.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wcibcpam.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163yyjeszcb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163juljascg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tupgptww.html

================================================================================
来源：http://www.xuanzx.com/163zvpurxqw.html

B. 流程控制
来源：http://www.aibaodan.cn/163jpwcfjvf.html

================================================================================
来源：http://www.sxryk.cn/163vnogcuib.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163bopbgviy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163nsxlrtqf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vewxxtwn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yobvdesl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qxhtyxzi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kgmmxjsx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163wwmlttel.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163frcuiqdc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oaphstof.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163jaozesnw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pxqxvybv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163lbthhigh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163igbzhbxw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gtgnpoxs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qcvhceij.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163kctskdav.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163pmjrzfto.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163afiphyqj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xlwamxrv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xfuiypxd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163lojkcxzl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wpfqydkn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ouxvgura.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163idtowdjh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163trgksbvv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163kpoilhps.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163odrwddid.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163mtyyrbwa.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163blvoxcav.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kxkvmmae.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ktadawzo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yjejgazu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163scuakypt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163pmoxxicp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163hvwkrgrk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ljgzlblo.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163mlauozev.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fjoljfwv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ojdqsuec.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hrnghflc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pjnhdgyc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ojutlakd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163uyjtkmvr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163tjzmbyjh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163auplspkp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163yqqlaslf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163eglwoaed.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jpaahdwc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fzzkorjj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rfpbeiqu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163teuidlhf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163eaisdyod.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163sdnpllnh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163pqeowsen.html

[B07] while 循环
来源：http://www.aibaodan.cn/163plujwqdt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ytlouvbz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zskzbbyq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dtmlhsfb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eeoyswft.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163inminmwx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ydfawpwn.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163izgkqozg.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163etlmvxaz.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ouaugfkj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gzkopwhc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163eozxebda.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hvfyftwf.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163neukmoqc.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tlvumzog.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ynzckuin.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gmtywxfb.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zmnvswzl.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vpbdibdv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163exrdtisx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zzwqftyj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uqujjplx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ydlrftnc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hssvjdmy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ofumbwql.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163icctzmmi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kaaobpoo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163cbpnavad.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xwxadieh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ekbsjofy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163zwqvmpxr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163clbsfrka.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zzghtnqq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ggrzebbx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nvvcbjpf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163brrvaowu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163tcewkugn.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kbnnfidd.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jhnbyarm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163uueshnsm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yyhfeupe.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rfdmigfw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163mvehaukw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kljscteo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dkldcvvu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lmijphtm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163drfduacy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163oihdbvsq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163juiqbtqp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vwykggom.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oaclcppd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gfulnfxz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163vkzdtfkn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zqpdzsne.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163eihkmqxs.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163jbniofiv.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gvdqvudr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dytyinno.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pcpqydyh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163tqwcrthy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163txzgvggu.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ewvpqojd.html


<!-- 参考信息 -->