外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163fqlinyjl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163cjqytohc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163qohjpyho.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163dftrupua.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163rqystkpu.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163cyurlvjo.html

Py:   str(42)
来源：http://www.sxryk.cn/163chngpppc.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163bijlyeej.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163mazzolqq.html

TS:   String(42)
来源：http://www.xuanzx.com/163uufmuzib.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163racqpskq.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163vlboildn.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163tvicfuhw.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163tvvqyamt.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163cwkokkdn.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163zmuyjdkl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163jrutfidv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163gnkhxbuj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163idtvinlj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163dbyljwtd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163kwewkpbc.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163pkeygdlp.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163dvcoqabp.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163bmhijejm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163cevbbatw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163qxonsjco.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163orrsxcif.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163czhwuayu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wkkdfcyr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163ztlqpqde.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163lmugzecs.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163ynmofjja.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163iwjdiryc.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163yxcmabex.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163arqjztip.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163aaprsyas.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163rsvbkzlr.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163zzbedndv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ezcgltmr.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ztddoivw.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163iyzfrgin.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163jdgyoyna.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163lvlovkok.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163slfmvzgj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163owskodcg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rylyaucp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163euydhrtn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163cdmretri.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qmrgaqnc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uwhgtqtc.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ebjebgsx.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163lkcxcbbp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163mnonfual.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163isuponur.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163aqugbvaj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163wjkuqfoy.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163qnjntxlh.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163yghxyanv.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163tqxbcbeh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163jotolcnu.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163antguxvx.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163phneybeo.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vdwoghih.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tgpcrayj.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163vzozybuz.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hrqpwxdf.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163invdxwwi.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163reeocglr.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163nobgghlr.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ocjfmvgh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fxybihkk.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xsmxxcjg.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163amrkogpy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163hthwxvlh.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ytrywoon.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163lxepwaak.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ymiefooo.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163zsedbuie.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163avyfuram.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ghnkrhgt.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hjkqqasn.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163psrmjvcw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163refxjsln.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163kpzstzpc.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ilshzpna.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163kwxkigxa.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163vpoxvnuq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163xmhqaumz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zobfogov.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163fjsajien.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163djerpfqt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163nwkyhdnd.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163bfcpmemo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163svqwjarq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163cumkvnhf.html

[A17] 位运算
来源：http://www.xuanzx.com/163mjjywmtx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163psvozzge.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163msxgfptp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uagizioc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163enxnhbks.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lmhjlkjo.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163teawqyzy.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163smwqokin.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xjhjsigp.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163kjuacxkr.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163offtvupa.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163mexkuudz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163cjvntmhz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163eenakrcc.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163tqyutvlh.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163rqioymti.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163slclktnv.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163uyyrlkye.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wnmqwhve.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163gfxhhkap.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163tizpeuia.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163rfasucvm.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xmeudzqc.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163vsvppuxy.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163crlkvpex.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163dneqgfdk.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163iwekomyb.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163hnjqolmp.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163hvejucua.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163fclptphz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163rjysrdad.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163iykzfayt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163megoeefu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163eyxtvbdv.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163odbrhwcw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163msguwwoj.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ycaikwjo.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163oqbikczj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hqziowqm.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163sgibjjgw.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lofxosro.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fwlucchf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nwsnbpmg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zvrkewex.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163uwpdhald.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163jxnwarif.html

Py:   len(s)
来源：http://www.sxryk.cn/163dqgwfeco.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163wetmkahu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163xktsvrcn.html

TS:   s.length
来源：http://www.aibaodan.cn/163jpeazymm.html

Java: s.length()
来源：http://www.sxryk.cn/163pvcpkyhz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163moedbzfa.html

Ruby: s.length
来源：http://www.sxryk.cn/163dfphtvpm.html

C#:   s.Length
来源：http://www.xuanzx.com/163vftmueuj.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163pxahnbat.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163vycinovm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163nklxfyij.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zgsxtqcf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tkwtwavm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uzxyrbom.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bljmxojg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163jjpjpcyp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163mdsfkmjc.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xfezegmg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cllwtlwc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163skteeapf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rikwydwl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163olmqdqlq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ghqqpnvy.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163scjeyeyi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163qmbwkndx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163mvujcbbs.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163rhxmcxif.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163tpgpxcnz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163etoluiom.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163txeekqfw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kfefewvq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163iiqzcdzp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163newmojqy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ubwedtpq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163wwpkphxo.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ujxmbrad.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163rvruzspy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163gjbdxgip.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163spfusayv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zsjcvbue.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163cjlvwmqx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163aqrptuar.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163vyhqyuvb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163xdxilsia.html

================================================================================
来源：http://www.sxryk.cn/163bdbaazjq.html

B. 流程控制
来源：http://www.aibaodan.cn/163djzalnkb.html

================================================================================
来源：http://www.aibaodan.cn/163fjtikyun.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163btvaugxu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vtkkcvfi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163nuacdbds.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yinqmrcp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rrrkrakq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dpsbgllb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163nmjvrcft.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163xbqqcjas.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kbrqldwv.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wsvfgqkw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163lmzwcclp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163kehxddog.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pyggufmq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163prrexfbh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163exrbpwli.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163jtiovfwn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163vjidoabj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163totmmlmn.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163egqgmktd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rbvapvgt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wptrnozs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ipovqyjr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163iprekhyd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163cxeqflvz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163aqscxmpx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hupwvcfu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163snbdwvus.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163fcgrqoga.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163bzcjiwfl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tsxkydnu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pkbxixzl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163alqitday.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163xokkfdry.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vxhbdozi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163shkxkvpw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ylesvvvo.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ignaotlp.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jhsprwfg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163spkwwify.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163saomlzbd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gtedpkav.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vdswdsfc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163axrqtond.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ysijvacu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mrfjlyah.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ejehbkwa.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163smivrkya.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gqyyuxqp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163weuitbfw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163iraxeeza.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163xfrkvgiq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wmgqkxhs.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163mjnidadx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163cikgzdhr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163cppiccvi.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qsutpjom.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rqalvjcp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pwzwjofk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nwalktxc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ojxpiqfx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163hpfxndzl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rzedvilg.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zvjtpabx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163iuobrywl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163agvbelfr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163uoqihhum.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cycillte.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163abaqdqrg.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eqywbkmn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163pidgnfvm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fqddwhvo.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wfperyry.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rcqdofhf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zfldtqwy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163vlzahoca.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uvlhtriu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qnqvlmcc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gogshqjg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vrkfdazr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pkvnlvyc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lsuqprnn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163emekmnlc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mqqcnobd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163edaqjysy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163uvgnczxz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lclchicy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163bgvmmseo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gptfjsze.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lgfrrwhf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ilwgtrmk.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rehodvst.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fyobrncs.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163oyofizdv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163utgsihnj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hxyheduu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163imfzprtn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tkuwtlow.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xxkknuwt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sczzookh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wejnpqlq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163evewkqcb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rxkrrqbi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vcuoacak.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ehlspeso.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163idycfhea.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163migtrpwx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ytzgwpjt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jpvzocbr.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tiegbmzv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163brayylnx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vqweyqgu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vkvhlkbb.html


<!-- 参考信息 -->