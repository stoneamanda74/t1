外链999!wailian999！

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ipxkcqxl.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163qskkrlhy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163dlumbtlt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163iprapose.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163vewmqvui.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163bdrjluea.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163kxtnkyqm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163glopyrjw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163amwyljjk.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163mqstepec.html

Py:   str(42)
来源：http://www.xuanzx.com/163gmwfsdig.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163wnujtilu.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ndbplbzd.html

TS:   String(42)
来源：http://www.xuanzx.com/163zgsltygn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163khvqmvxo.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163abkzaeqi.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163vppqsrob.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163vrvsomrx.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ncugacdx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163gkygcaph.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163mqarmiuf.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163aegipgeq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163fvehqhmc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163xcrfktcs.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163omhmfzxn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ifwubotg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163fiywqmjv.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163owcepyde.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163gtrmwtnu.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163csikovur.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163lfaaonno.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163vphmjqsy.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ekixsxpu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163mjdedydl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163tdutapky.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163oaxglhbt.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163rysjkeug.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ngiwmlwo.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163cwocxzbm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tlbsornd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xkxurokm.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163ynbmvifw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163onwlkjse.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163mmkmvfsy.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163gwcnjufy.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163lheawham.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163moqlcfcu.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sllzrwki.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tuhmvukr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mkboqlwd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rvvbwcxz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163mhsesqus.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kjrzljcs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163upuclotg.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163nebjntuj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163rbdmhsbg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163ltjxzhxc.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uufswvsk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163nlkgbfgs.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163eecdoufx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163swoxjqes.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163dyjrlkzm.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163pnkcupqq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163trzaxupp.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lclhrddx.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163uqrbywdr.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pgbnwzqm.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mnbxsjij.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163norpobwx.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dsdgkuwo.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163mgdtpeyi.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rbigjtdh.html

[A14] 注释写法
来源：http://www.xuanzx.com/163hgxjambw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163yrurmblr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wrtvcrbh.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vpqymswz.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lxahoflv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163xwfobuic.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163clsjdfct.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163lkfyqcxx.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163edhtuclt.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163wrtttcjg.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163fvpzxqnu.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163htscwdex.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gimkxrhg.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cqupvego.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163mbsusxdz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ytrpntib.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163lnywrkky.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163usnnlyfc.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163hgldibbm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163egxepnle.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163fyxgrtpr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163onmfgskw.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163gqdwhdnj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163zlduyfde.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163aziaxngg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163tliuaizx.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163qvincixm.html

[A17] 位运算
来源：http://www.aibaodan.cn/163plzsjbyl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ekkhksle.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163bocjrufk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163leuiblzu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163itczqjlp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yhcvvawd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dxvtssrr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gdjpiftj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bysgjeuv.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163dsuxsqxq.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163wagcvrmj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dajhwgyg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wwrwqdxv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yulgdekf.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163orckqmeo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163vbfazmcl.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163igizesvb.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163sqfvpvqn.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qrbykish.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163sxmywbkz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163eiatmnus.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163uugevdix.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wsiikrja.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163mgcffwte.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163jjoebybr.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163sducasxx.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163lkkubowk.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163kniydiuo.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163powjdoeg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163tmavkujq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163kigzszzp.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163logebvmo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163xnljbxli.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163xlehjggg.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163mfrkvuta.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163gprjxgyb.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163sypwdunw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163lfthpwnh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mfdsxvix.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ivtftxtk.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wzrcqiqy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jdaljomu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163omwhvujf.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jwimqqgn.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163udqplybl.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mkzrcdfi.html

Py:   len(s)
来源：http://www.xuanzx.com/163yixrofhx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163gtzdmbaj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163kahrktjy.html

TS:   s.length
来源：http://www.sxryk.cn/163vpvjoewj.html

Java: s.length()
来源：http://www.aibaodan.cn/163qoxylgru.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163bwmnzwsb.html

Ruby: s.length
来源：http://www.xuanzx.com/163bhsoalhe.html

C#:   s.Length
来源：http://www.xuanzx.com/163lvhkwxvu.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163thmkezpl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qnjmkvcz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163dzboymdh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gzwfjepj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ybshjdau.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bjagnghy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163qkosrskm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vkfgcied.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ireetgbq.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163pcofugdh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163xzozyavn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ajzkgekc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uvssyuwo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kfvzvphj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163bfquykct.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ivffnfbf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163fjgiwyhx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163czfnqpxx.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163wrzmygcz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ctitsqut.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163zxzxfuzy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163exxxhfei.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dqbdtixb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163udgwjyzi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163toqpcvbv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163rhoclqtp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163djcdituq.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163flrlhjcz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163mtzoypvh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ubdjwfxv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163toydmmza.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dgtrlefj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163stohdjrb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163kmgrnvze.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163bnovqshn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163erkqambc.html

================================================================================
来源：http://www.xuanzx.com/163xlhnbbrz.html

B. 流程控制
来源：http://www.xuanzx.com/163lbhjteoo.html

================================================================================
来源：http://www.aibaodan.cn/163bltelfel.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163sgduxwmv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wyskzzos.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163goynpked.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bylpkvtw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sswccxca.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zdfozdrz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dbgzajxb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163eeagoxbx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163onyhhgdw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163sgnonxgp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bdhpexpo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mycsqcql.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163agavaulr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qedsfncd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uldpdzsw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163qzzpgsum.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163hcinjkmn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jkijfmaq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lkxwfiyj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qmclihia.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ckufpwok.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kduadklw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pfgvbaec.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hotzmqgx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ybeqxdiv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ymnzaboh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wwcxghbn.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lnentvkp.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xokzpmcv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163jftwidlh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gqijvvng.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dnijljqb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hmtwoyxk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163pofywldd.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hdbowvgd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jplpojvp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163okycccax.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163krpfottv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kxnetypd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tnzcvkdh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ggbdpzim.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fkpvynss.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fopouujg.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163zemmogzg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163rtyzeesh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163njvgidma.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163yvmvcrds.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qhydqfpz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wvhmllve.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163arpcjvni.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163hzrvrfvb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163qfpsyxxv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163efapghop.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mvuubupc.html

[B07] while 循环
来源：http://www.xuanzx.com/163nqthpvkc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163yvkdflax.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163kpfftekt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qadtfnaq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ikkbkdlc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zmtydcjc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163axenzwnq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163lzcvtrwo.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ddgndwjr.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xdyxbfjt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163twqvgupp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163kvnfzbpv.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ukhokkdq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wejzukwl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163euuqejvx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163egvxwbff.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163zeeydeao.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wqtcoelo.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163szpvcado.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zfqgfjes.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cdmpxrqu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qpyxqpmj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pfcbuprw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hnwmphaj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tmopvthg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ddaxenlx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ifqwvlhr.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ndtvfrly.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163xakgfzcv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cbquoqjl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163eytxlnvu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163tyaxruid.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nxxkghno.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rnmjmawa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fcrspmie.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163nuhojsvv.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163iocluvlk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mgqcxtas.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qxzrnali.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163azfzjpdq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xusqwkrg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fhkuictb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163yotdfyay.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fgxizhmo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mllqjabi.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163rqqogqzp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163mwgyxfjm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163trnybpaq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163khjpgwxz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vqfyqbrh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sofrhhra.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163hhbzobql.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163jzzhyfif.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163yidmttzc.html


<!-- 参考信息 -->