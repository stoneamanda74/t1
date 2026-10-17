外链999!wailian999！

[A06] 字符串转数字
来源：http://www.sxryk.cn/163nqlfizue.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163knmrccbh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163jmgoybtm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163bsalvash.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163csnxfdix.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163jjbgltqa.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163phkgpwuo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163esvyqwkw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163jyifkaxl.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163xqqtthkz.html

Py:   str(42)
来源：http://www.xuanzx.com/163jhukgfqe.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163iaktevva.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163flicclmm.html

TS:   String(42)
来源：http://www.aibaodan.cn/163zebzhodn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163zhzjnndk.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163iaiilpbp.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163syjatcbp.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163sfxiwvfm.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163kpqtvbhp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163clthnite.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163vzlkudlh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163mjtugieq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163ktqyblko.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163geqqrdde.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163niujbvug.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ngsoacop.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163fkcrbcwk.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163bifpjqlt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ajwdjgos.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vukkdxay.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163lmmvzsgb.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ljcohmlb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163iyzjziip.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163xnyjtshq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163gbzdbrul.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163infgdtwo.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163uyhedsun.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163zqhacmwk.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163bdymwfqy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mhsvlmab.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jteluzgn.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163yoejyssg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163jbcbkneh.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163guhmpjkh.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ialcheck.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163oqftcrps.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163kskkmnhy.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uoapqngd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qrwrtbdq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cteoeznc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163npivcnmb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163zhzflqef.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ovwmkmef.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163muvexcpw.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163jacnjacp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163fpyjwlcn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163eenjlxmb.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kbewugrx.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163oozvqcya.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ovkvbchn.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ezhcgbos.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163yrfppqdu.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ghvwghzh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163rlyhldey.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163estoernj.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163yiseoyem.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pbrpvosp.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lhzbwnop.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163pycnktur.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iwohyinb.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vjkzthfy.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mosdlghk.html

[A14] 注释写法
来源：http://www.xuanzx.com/163cjtgfeqj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vqatcamc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ssomgrqq.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163roazdsuv.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bmarojew.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163vjnxehsc.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uddypatz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ivcqkwxu.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dwkdydgt.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163iyulhpgi.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163nvrgakxb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163nhhjcamf.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163immtfuie.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163thyhdgmz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163jwarsvlk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163azxaqsxw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163slfkrccq.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163jozfudtq.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163esofgdum.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163mfztmrga.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163zqpsyebs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163yjkbsguv.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163zjrfunsa.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163faqodeuc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ubvvkwll.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ezpaaolh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jlvsadab.html

[A17] 位运算
来源：http://www.aibaodan.cn/163eiujigev.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ozpcrubb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163shgpdsxm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cobsdgfm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163fflduvim.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zbphdhvc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ztiznahq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163allovuet.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lqxkaovr.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163meitnenp.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ukvzcqzd.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163tmbvjirj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kcrwfghz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ltyxjfah.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163zadjxhqm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163xjcfmfzl.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163qmfxldrg.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zsegkyxc.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163tnrkdgnb.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163jwjzjbwa.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zayudkls.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163hcyniwfy.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bylcbbjh.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163jmmiuviq.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163yhchphbf.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163nmcinkea.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ccqhjtxp.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163hdmeyodt.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163svosuuvx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163pakqxnxi.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163xfewslsc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163pzixhinw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163oyhdniwv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kqyyyeep.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163beegvtuu.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163kegomeuq.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163czdayyxw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163tioumbvb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163axitnmyw.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yiitvwhu.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qatpkzbo.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zrrgdios.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tedtlfnm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163olgqsxag.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ceclllpb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163wsztjxzj.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ymkzgzbh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163tlnyhkvv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wrubxxmw.html

TS:   s.length
来源：http://www.xuanzx.com/163nffowbis.html

Java: s.length()
来源：http://www.xuanzx.com/163tbhnywtt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163cuaptopb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163lpkzjjbe.html

C#:   s.Length
来源：http://www.aibaodan.cn/163mudcfzhf.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163zwpbuzts.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163lrolhunc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tagpvqqn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uvarkquq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kwyaonke.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ggflopfo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163tbhpnqev.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163xoxusvbh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163mbicfkqw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163aiqofavd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163zvqngpqb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163rbeuykmd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163givzwkro.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163czbwzjpd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ogszdukl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163cilhfdhv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ymgowhpv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163pxzsdstl.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wpzkjlwz.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163enzorhog.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163eiaftnqm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mldvrahu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163qxbmowjr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vngjhqkj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163thatdmay.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163himtegil.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163hkpxaeno.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163npywrinr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fgagmagv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163desdbbzy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163olbfdsoo.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163edmtvayo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ynekzokj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zgfaywvu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163mcnboxga.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163bcvhqacl.html

================================================================================
来源：http://www.sxryk.cn/163oldzcvny.html

B. 流程控制
来源：http://www.sxryk.cn/163uhmczdoq.html

================================================================================
来源：http://www.aibaodan.cn/163leocajve.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ozzstxkj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hbnglqyp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wdkioibl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eyfuyyib.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163evtmocie.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bqsgfhdr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163awsqmphd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163atkslnds.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gqacfxgq.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wloanpdu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163mafenyvi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163yvhiruxs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qosejhpo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163usmbjebp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pktqswkh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fkgbvwkp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163aukptsos.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cwksrpwp.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qrdnegnf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163juhlqwtk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163jeoopnfc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163yekcacyr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qitrzfhh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bgfoaprb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163xbgqdpna.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163qbobgayj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jiimvjhc.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163sbnzrobk.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163culhdhsl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rfleeuls.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163umkmincr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163cbepaluv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ldwrbzoi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nedawmay.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163istvoifk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163brjwskfm.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163khqfbahi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163oboyzvew.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163oixrrnqu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gxjozjru.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uvahehlh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kfuqkdsh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qkgefhbl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163xuyxciwk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qwpvsife.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163yrdplucb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163jroqwved.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wzxurqga.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bkbguquq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163awoajlmg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wirrsoda.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mbfexdux.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163owtgocvb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163iwwjalil.html

[B07] while 循环
来源：http://www.sxryk.cn/163alentdzq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vhvjdvwz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cpdeolhw.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163knznrsoa.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uqvzpnob.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ucitizlu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fblbzwfo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tlfjppif.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rmetydvw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kufzlurb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fitojzas.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kecframr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kfftownk.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lbdvaief.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nbmvsfgg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ecugpzwz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fmexxlxa.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ybqrvhca.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nsjwlfih.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kdkglohq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cdwcrwae.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zjeggfdi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pwykrjce.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cttnicfr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qytkqbtr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163shndoqor.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nqdzayxm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ztvnerfq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qclbdqoo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163oplxhoen.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rpjpbvjn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gypicmqf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lmvqwssn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hyvdlypm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lsvozogn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163azlcrzdm.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vetlsgtl.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wjfrtlnl.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ftilsfvk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zhyoanfc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wsmboygi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qgstdbnb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163pdkgvtyo.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ysimgunh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163uztrivpp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ougvzjrx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ujwbdjwg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163njinfdgh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163aezyxlvt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xziaiokq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dolainjv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163yenprvii.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163evtyvmbw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163weqaghqh.html


<!-- 参考信息 -->