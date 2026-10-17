外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163rsnopift.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163thtaaxrk.html

Py:   str(42)
来源：http://www.xuanzx.com/163sfrskcak.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163owsjcuav.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163qtzilary.html

TS:   String(42)
来源：http://www.xuanzx.com/163srzdvdjr.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163jckjtend.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ejmyvhte.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163eqmzmmgp.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163mothzgxv.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163ohastevp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163vcsiyrix.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163xiqjclan.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163mcpkmksk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163cmbiigsk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163zveivomn.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rxjivuru.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163lbkfjjio.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163fvvmmkzc.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jsocvdff.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vpkqqvyy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163iwhynhze.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163dcyqehjk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163grenacqg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zulldupc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163efhkmjxu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163gyxwiekr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163azdyqnau.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163jzputlvw.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163aedggxed.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163orwagwnx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163laqxfxwf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xhqltnzm.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163fudsbuvc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163wrxennyw.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163wnzrrefm.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163huflobdb.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163kelklzxo.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163uhygozjw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163eskruiyx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ktxozhgx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jmubffwd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kdfuitaj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163vmhgguuv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ecgjzklp.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163frprjlpv.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163azvlwbad.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163lcfaxihi.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163hrkatjxk.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ekyhzxrw.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163tgpmlovk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ydacehpn.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163rpwctpxx.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163zzzmqtoi.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163rofvzzba.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163prritskk.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cweiqcia.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163jwotjzin.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nfztdsfo.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xtxgrmrl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rotebzeq.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jglntfra.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163giicpqck.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bbtcicpy.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163mswqysna.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163mbmureje.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163lghkzdbu.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wprlyumq.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qjzwkday.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163pipektdw.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ereqbgyb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xotzvcey.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cprrrzny.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163vhndfojr.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163jvqflaif.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163voqjziig.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dtlvtrzh.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wtihryjy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163idhhmzpe.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163jwckhwtc.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163hzuxwhhn.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163vwsnpofr.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163dvkavvcs.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163mnecefoj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163vxjjyawu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163onkfvbuo.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163zxlulquz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163qjfydzyk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163onpyhyvo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163nyluancq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ynhsyavd.html

[A17] 位运算
来源：http://www.sxryk.cn/163hxkbejmp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163frkebgao.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163mvgwndkt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ebsrskmm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iwkhmxdr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zyjglhsi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eetuzyma.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ytmfqbcn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163enhotabf.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163kfbzejxf.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163watylpvj.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zfpwqtji.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163higtvrqw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163kvpsqbtc.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163sowjcpwg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163eqyqcgyi.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163fdeqtcdf.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163nzwnaekx.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ewjbpjwo.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163cmgbcbkd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zfjejbyi.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163sitcwrvz.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jtkzjlel.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163kttjtjpz.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ymfabewe.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163nqwyrecf.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163bqxjwpod.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163jomouzof.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163xzvszdsd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rrlqileo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163bjkeyrdw.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163wgobbblu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163jmywqwwt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163hyhfrgbp.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163aefflyua.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163fmecifze.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163yusbitif.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163utrmygmf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jdznsiww.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163iigrdiry.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ftupgyrk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bpojqaph.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jrmexmeh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163reglzcke.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163nwbkhqys.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163fsyxjbdb.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ocwlwlzh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163xhfnldfj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zeuvcbxy.html

TS:   s.length
来源：http://www.aibaodan.cn/163ypulkwtu.html

Java: s.length()
来源：http://www.sxryk.cn/163phbvsqch.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163nudmkuog.html

Ruby: s.length
来源：http://www.aibaodan.cn/163fvykjuaf.html

C#:   s.Length
来源：http://www.xuanzx.com/163vwqjtxdl.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163gnvtzorh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nsauaubb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163wwsifbgn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hjeyqkmv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hnnicqje.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pkhujkoj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ndjmlvsc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163kbvkhand.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lqlfqclv.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163sponajsh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163jpsilxml.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163pfddtyfp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ymkihefy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uascvejy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163taerqksy.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163alxkuvvu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cuavqlce.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163kjocydfj.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163gfwcrvbp.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163gttxrlsa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163nzpgmgdp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yibgjmby.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jvgpzuzd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dtsxyaiw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163plirwlkr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dtcnicdn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163rkuzsdmu.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zzmyubdx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163yobzzdbt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163czggtozu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163shajpjpu.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163jqhjxygb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163nvreipmf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dqjmemxm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163yydwzixw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163uckpjxsw.html

================================================================================
来源：http://www.aibaodan.cn/163ighqfebb.html

B. 流程控制
来源：http://www.sxryk.cn/163upgdqobp.html

================================================================================
来源：http://www.xuanzx.com/163weysizae.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163abepiwhh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jllaxume.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163zztkjgbq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163otcruink.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163afsgkhbf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163djirzxwy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163bvbzgggk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ssfmqdtx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hptbqvjr.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163befnnzjj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163isjvgyoy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163yidrfftx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vqxpwixh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mwyblher.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fwrseywp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fvvuaymh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163atwdjiyd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cztckjtz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kbbhioei.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163tqenqhdc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163wizkfuhp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cjnpvqwz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vaovtaxt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rjdwiakv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163opleyzvi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xjqnlsue.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163otuyysyx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mwwpafkr.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163uxvmurph.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163pytlzufs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163mewescnl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rctryxxm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ciqldxce.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163inpcraeq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xjdnrcfz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ptmkvhcc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dpfgwprf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163lllzncie.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163cwkikpvx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163aeftrwlb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uldltbnt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163yadfvzcr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fbhinzgy.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163gckozwxx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163tufvbshk.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163eluslpuf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rzhwzroq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163yhdzhcyk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xhsoibbv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163agythtrw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163mlikhucb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wulxodhd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nxathzzx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xcqsepgs.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bbdbciul.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tftbonwv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gbsqgxuh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zhayhlvc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xaqsrmym.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cxzhiggd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fzoqjixg.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163uvabktpx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vmqptibw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163olsbyosr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163zcqgchwt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tbbjsrsa.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nvoqrrii.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bajmzwmd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fegvkddr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ziialyqy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163oslddxzn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gxxpfgiq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163takuydbx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mivyiuor.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163yajgohom.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gmebmxle.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vjzrtnfd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163klftkmoy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wlaymqfe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kserauwt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163axwsofgq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xxesifvq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nvlymidr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wqglmcpm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cuzfrfxx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zuwqnexw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163yszsvfce.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163flildeqv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163cngzzyly.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163yeaxfpbe.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ppnzodre.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mminylnm.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bqfsvdnw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163thubrnmi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zfbbocnc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qrpmxaar.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dwxbvjkj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163dgtdeoeh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jhvovyaj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163opndshck.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163phiybpck.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kjdptpmd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lonejiox.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yibmpptv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hpqosmey.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163niseukgd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bkvcethz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163wmmcmtsl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163emcghjwn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163phdhbprl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163awwnslff.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vnmcbpir.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dgbkfdln.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nieveili.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163liczvgfm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qdiwfarg.html


<!-- 参考信息 -->