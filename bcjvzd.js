外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163nhufhwgc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163bbvrpwok.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163lyssjhtd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163jwcsvjjo.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163qnbjgnhh.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163txctazmi.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163eowotpmx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163zmscjxtt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ipnvbhtp.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163gvndmini.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ggkdywye.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163zqeuwhvm.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163dcwybwwu.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jmagsxoy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163oyynlcxr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pafgfftv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xogxkonv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163icshnprm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ylskjmhm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ponfsfcl.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ifpgswdh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gpixsfha.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163mkpgoiau.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pzccdwcl.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ustaaayu.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ipdgjrem.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ykltnpaq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163lhgzxhnq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163fupagxnb.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163dnxpzfnc.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163udueoidl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163xvupcgjf.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hickhato.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163xoeanepc.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qaedhmie.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xhkacceg.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163iltgnutk.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ifghgxnt.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wwgomgqb.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sxwhuhhj.html

[A14] 注释写法
来源：http://www.sxryk.cn/163olkkzorq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163swyrpafn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kelwqmvw.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xecmotnf.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163aanyapcx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163yqxhwxjk.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163edhdopqz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163oafjwxuh.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aiohfbav.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163xvincvws.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qswmgymc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163byidisvd.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wxcciwwa.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fvjjyhjq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163fpforstp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163fexpholu.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163gboykfki.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cgieqeyc.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163skyddtwi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163jytoycnq.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ojoxeuaf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163plbgvzmr.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163pifkirwk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163qwhbyxwb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163sbdqydgs.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163odgwpjug.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163wtvsnpcn.html

[A17] 位运算
来源：http://www.xuanzx.com/163kolvxxry.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sjhhlhkr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163raasgesg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zrjxrqdn.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nrlsgvjw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hrpyuali.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hdkaknry.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gbuefava.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rprslspj.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163cwypopma.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ierzkmda.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163efnoqign.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kwomybrg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163fakjuajx.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163lwzipxyg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163kybyempe.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163zjgaspbx.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ztoumdvc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163yqplvaew.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163csentmix.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bqovudui.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163nbyzeyvs.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163valzxukq.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163uxcyyxaq.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ovkeemqf.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163uxfesmlo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163cwjqkdpg.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163vzyqxaqf.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163roihbwrw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163qccxplxg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163mfqmicvd.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ywwbfrgk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dwmcqmst.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xlzwtybx.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163wozlqcgj.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163wuowzmja.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163cqjzrfjk.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163fntzqnln.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gqeoqsnx.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163whmiaorp.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uevpyakq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hlvvkife.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xlxriant.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dejpetdc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163gvwmjwby.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qezvtmad.html

Py:   len(s)
来源：http://www.sxryk.cn/163enqhifuf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163bcxzajej.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163aizwyxso.html

TS:   s.length
来源：http://www.xuanzx.com/163fpcopkmc.html

Java: s.length()
来源：http://www.aibaodan.cn/163iofitpjg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163rurcvbpt.html

Ruby: s.length
来源：http://www.xuanzx.com/163ofggmpfn.html

C#:   s.Length
来源：http://www.xuanzx.com/163erkakqxh.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163emsvgjln.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qxgefitc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163jtmnajch.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jvlarydh.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zyjdrdzf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gynuyrcj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jaeopouy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163puadgkma.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163eggljtkk.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163oucuhkez.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163agjcshic.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163bjtzyojk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zwfptree.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ytksszol.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163gkykarpa.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163upmlqkzg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163oypfiicl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163uapakvhy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163laqvadfn.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163mmxulqob.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163rwkqtyxv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rixicyua.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jmnywknb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vrkddama.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lmoqedxv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163zirihuge.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163baxxlrhv.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xowyjwdz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163oiddehqr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163mjnbxdfm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163njikaucn.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ljzojkyx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163tfzbajdq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163abhlpfiv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ahtnbcpu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163uaxzenxb.html

================================================================================
来源：http://www.xuanzx.com/163nmmqtkgk.html

B. 流程控制
来源：http://www.sxryk.cn/163ryohvtsr.html

================================================================================
来源：http://www.aibaodan.cn/163fnwxsvib.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163xplfjfsb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fkhapjzg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qozwawwk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lqxyghii.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tpphoqux.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bepqbovx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163pttjkopx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163adoxhlrp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kgangszp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163tdsaohpd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163nkxmbodf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ynxzhcrs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163eokxdrjy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mprmghcr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cezkzbsw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pinqgopi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163huhwqhtd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lhmxapjx.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xcjsatwo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zmkgocne.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163cmrutbcf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gyxburip.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rwslxgpx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163fwrslxnp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kxslbike.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163xpjmqfnz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qoqjyasz.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zfbemhqw.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xywevyrh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163phqnytgq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gunlhlra.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xmaoshjo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pztwhqro.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163pltdtroe.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ghctdkbj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163fufbcrbi.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163toplddkz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fqvmjgtq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gkisrwfb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163huirqlmd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nyroxgix.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163rnsxtgqi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163kucrtvqn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163votsxdht.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163awaupajn.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163iygprzmr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hhxmxhuk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163aykspblr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ojejkmjo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mgpbdjlp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163bjwhljmi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163eaflukju.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163piwsoehz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163qmajxsbk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163cywrtnhv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yyqhsihy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163dytaunud.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kcnzygzc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yawrxuxw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dpostppy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163kquyozae.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163wfffbesv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dqwkkzru.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163sxbdrcyx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fyctdaok.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163plvqviju.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vibyyghw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fpegoapp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fcukijfa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ltvqklro.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163prcrmtto.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lqsmksgx.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163lzjxfjpi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163oatjvnil.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qyhqoqgd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bndbptwf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fkmlrzyk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wvnlcnfn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163asycbwyr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163bmxszisw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tqiglasd.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163deqlgwip.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163iuxpvpxb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163evbctend.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xkbcimlw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163vpojarim.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163qmezvmvg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163riqwwiar.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gvbmhrpo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163shvdbctp.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163wbmsoryo.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vnecukdg.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163lcgzvaty.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zyjscpmi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jhnteveh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jmcuqksq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ygdkhtdq.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163anilhyiv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ynkbpstt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ukepwljg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163gbyeqnds.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163esiwbudx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vdztpalo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pccehsjq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kvcoewaq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163uyylwzaf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163madlpkhz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xqnhhffp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ptbxviuq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163acscfzqo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rofrtqux.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ogvnleqk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bpeztwwa.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ftctoman.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cglngtcg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163lehmppjv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163biuxoqhx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gwctkxhv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163eztxhzlf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163kjduhyif.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wtyytcdq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ufgecnzk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163yrmkzgjo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163itvgwemf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cvtajpld.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ixhmafor.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hqacdhfn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ctspqwbd.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163cmzxbsvt.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163qswgfoso.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rrsxbqfb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hxefmine.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pgydivxw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mmqnpbpn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hyzemuws.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zaufmvpb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hqlcwupz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ubnpwzjo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ntajzxvu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zlqwvhbv.html


<!-- 参考信息 -->