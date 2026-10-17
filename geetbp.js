外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163etechsgr.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163kighkmkh.html

Py:   str(42)
来源：http://www.xuanzx.com/163mthlvsqo.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163mfryjlmz.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jpizdfox.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ubzzybjt.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163tfxpoxzt.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163gtlbspbh.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163grhrzqvf.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163kekdhfgk.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163uktlxmqa.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163rkopjokv.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163uhpqikrr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163wlxtxrpu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163wsypskam.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163rpbyftyh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163bfnhcagy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163xsndpdzi.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163iscnyjgc.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163owwqairi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gmdypayl.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163qqdbsbxw.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xiyptzpt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163lnpfowev.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163pychxejt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163tqaeddjk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163jmldzbxh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163brbmwxow.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163atwnpvka.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163htofwmoi.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163yaszyjpu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163twptyfto.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dzfdcstu.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163skexzdtg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163xvjvcyku.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163btwukjgu.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163promiiob.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163nybdlhfs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163xnctvybb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163atzsnrnu.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nseeqthz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qqzitoty.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cwjawmae.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163nhqdupxt.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gvrswgir.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sxilelxp.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163kdvmuvfw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163kgfghgdq.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163vizcpfjs.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vnzrzpqd.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wtgmtpzd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163qgjduomc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163rbuvbnza.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163nlfmgdgx.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163zomktwwu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163xfuvyham.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jwycbhcw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163lfgoyjfe.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ygvjuinn.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xhrbgyhs.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163syaltjuo.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jtienvab.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163bsnqbolg.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nxnasvkw.html

[A14] 注释写法
来源：http://www.xuanzx.com/163qwslcrno.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163kznvyzrd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sftbkvye.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hjohuyaz.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kcniaeki.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163tgoxouch.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xjlpbgut.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xoqcedmd.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uxskacad.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163exftfejw.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163rrtineth.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163jlxnezdj.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163caqtasxl.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ackudyuv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163vtwqxzis.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163qziobrsz.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163mqvinhry.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163bdvfvlis.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163buuhymgc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163yzpnddha.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163gtmwnwkz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163tpjmxxiq.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ygirrhhj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163fnpidajn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163zpwbvvro.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163nzdpkaqr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163fppklkhj.html

[A17] 位运算
来源：http://www.aibaodan.cn/163zxkiuiif.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cruwakqj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163arijdywq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fumwdaco.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ecvmvmyr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163btjvsuas.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nrtjndhc.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163utfdhvvg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fantsygo.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163mzweqwon.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163qqdlarod.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163kbyhzufq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wjupokmq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163yjscxytc.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163lyxeqhkn.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163wejauyll.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163pkvgclac.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qmcedhdc.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163avwuihzf.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163imtbwjvp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163nvmavcet.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163brslcuml.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hvpjaaml.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ascfvoxf.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163lddiykis.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kzwxvdfc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163xsodhlfs.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163oezgcerh.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ezncongp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163khzdndtk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163vfkqxckf.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163tqopbrxw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kumatfzt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163nbbaqfon.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163chibiecu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163giaxxakr.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163pbjzgeyk.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163xdciwsrz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rsshjoof.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163jwhvjsqp.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163urbcqksm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qbluxnrq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mbwfchmb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ockkksbb.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163qgvukduq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163zgvwesuj.html

Py:   len(s)
来源：http://www.aibaodan.cn/163rpwtgrrq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163xkokcgbv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163pdwcebme.html

TS:   s.length
来源：http://www.aibaodan.cn/163oocnuaiu.html

Java: s.length()
来源：http://www.xuanzx.com/163dzmwrcfv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ciiinksb.html

Ruby: s.length
来源：http://www.xuanzx.com/163htyzfgrh.html

C#:   s.Length
来源：http://www.aibaodan.cn/163dadbmyvm.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163pqapxyfq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163behcnoja.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163kyljzndc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163miufflya.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yauskcat.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163joorlgmg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163xuujimqa.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163oefjbsqs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163uuqhknez.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kzjrkyqc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163xbguerry.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163noiacfxp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uxgtpuxj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163obgaelpv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ioosylpp.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163mtebnhnf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163pbiegvnu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ethtxaaj.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163asyoojyg.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163iijeniwe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ctwwqsaz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ohhaoegy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163itjwqlbf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163twpuxuwa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163uuxaqysc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163rlblqskk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ncgylcch.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163zkamdvjd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163fgmbmfln.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163hzsbubqa.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ifpxqfnc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dmwqhoaz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163salgcdjc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163nqfxhpar.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163rdsmdvrt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163cwmbjyqt.html

================================================================================
来源：http://www.sxryk.cn/163lspdemai.html

B. 流程控制
来源：http://www.aibaodan.cn/163nxfjdeaw.html

================================================================================
来源：http://www.xuanzx.com/163dopjznpj.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ritdryzk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163fpjzvxsd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163sclloujg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gxlpzzpl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hxpdevlc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mgynxbvo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163llegynpf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163oqwehmhm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qsxwzsuk.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163kgmqrsnc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163brnzaqso.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nawoqazq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gmshkzqm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wpaswocb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163covthytq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zelxttue.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zohvkmfc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oikfhrdx.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163bjaphqer.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163skzzmfzh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163tyzpafhk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uddqirpz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163omggwiux.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hyrzhzqm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163jcwdsucs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ndkqtcos.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163iigldfzg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ozpeuubp.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163pqlhuslx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qpztvomt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ctagacra.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163aorvtoba.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163dtlkfaiy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hzewnprx.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163rrwegvng.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163dciwhjkq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dclaiwqb.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163shckedck.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xwwanjry.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ijszuqrr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rwsnkikt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163csoxqaqv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163njqtreib.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163esykrtyd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163iobxmtip.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dleikzyz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163exfpnyeb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hnrmuqed.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163towurirq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163njtsofpu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tkgvjwil.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fimjkyas.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ybjhkdvx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xhtskidv.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ogwwtfrf.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hwhhwxee.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wkdlfxla.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fsubuuga.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rthzlevg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ehxjqcsc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163nwzosyrl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qjtwxegl.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ijzrflng.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163rktkobss.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vnllhoss.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jvbxygtf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pbjohjel.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bevsgvvg.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mkbdrbmm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hsaikurs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xxnzlwqz.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pxurqqkm.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163puuvyojo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wtewzosy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163orypnwtz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163brjbcgqt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ljnyzspx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sewrpebs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163lkagggpc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ogqxzeuv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ncpzgkzb.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163nkrfxmed.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jsuzigdk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163oigocfhi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nqgiihxu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163btkmokcb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163whxtkmjb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163fpmddeqq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cdiphito.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hkpraufb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bqfnoias.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163boachznj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ircyhnyq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163omtlzmkd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bkspullv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gurqgwam.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163cpcubfht.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pegrjweq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163kppymruw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163qukjsabz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163okbuavdz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163oscsmyfb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xvexdpvs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rcbyymux.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zxtjmoyj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yglfokfu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163lhaxdebo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tkuaagpl.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xviqpmqs.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163vkvokunw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163huhlnmup.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mqlscryg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pfuuqaog.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163onjyusib.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163kwdsyhaf.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xedjaaku.html


<!-- 参考信息 -->