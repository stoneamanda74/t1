外链999!wailian999！

[A10] 生成随机数
来源：http://www.sxryk.cn/163micxdfic.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163kxomunrv.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163utrxjuqn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163frlxlkgd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163hnnebfhy.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163lykldgxb.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163souxigee.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rohxolhw.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163slochiak.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163hueafztq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163dukypafw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ekzyikft.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163apsxyyhs.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rfkuipte.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ehffuhtx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163qypkmkoq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kmxmmxgd.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163guuwroco.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163yoiwrqzk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ozuwcemu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163dyspojqv.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zhmrbeox.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hrsfasrt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163tdwkaoxz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163igslwmis.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163mhbdmsue.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163uebdggip.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ooepyaau.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163krrptfjd.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163sfuibjws.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163phhpeypl.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163byyjftcb.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163yfdmwxpn.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gkgqsord.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163axnrhvxq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nkdpdpch.html

[A14] 注释写法
来源：http://www.sxryk.cn/163odogakdt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163enexfmvw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163odrkixie.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wxdmjola.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rxfoywwi.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163srjabcrp.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163odawnavc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163yjqmlfmr.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wpjxcnwk.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163rbkowlpe.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163sgqbkgaq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163biakiash.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zwmkoywy.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163waaklqcy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ayzbswwc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163kblunrzc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163enydtspz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163dquycyxy.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163pbiyqhve.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vpwoqvnq.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jmvfnavc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163oqwbcseq.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163frknwlxx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xzbxpmxn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163siivxgye.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163xysnihac.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163iicxanuw.html

[A17] 位运算
来源：http://www.aibaodan.cn/163vhuvkymr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dflvcuax.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163zvixrbmm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163odahscht.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nuxefgzk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mkkoixjv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qpeidlcn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ncnkkgsp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ddjzkykb.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163kwgkdmqj.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pbchwdba.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zyoiknlg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mgwggbpw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163gshxhxpg.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163kfmigjlk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tbbtvxte.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163nkvndcpw.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163gqvggpoi.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163jstwamhl.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163suppgbac.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wjiikafv.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163zottokft.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163tfjhphmg.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wcusqvvn.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163dtegakzc.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163njwpzjfi.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163zcoxldom.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163uvoniqzs.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163lmacsefa.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163rzsjkpsr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163dxdfvwzo.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163yrtvmfiz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163hddpkyfq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163kdveamcr.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163pxdkxuir.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163vbhvzpol.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163idmszkoq.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ddlnjccu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dmelmbws.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hzmsbxyc.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rorwdhfc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oohppocu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163defziakp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rqsfmtgd.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cmrosthp.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163msihgowm.html

Py:   len(s)
来源：http://www.xuanzx.com/163uruphkyp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dvibglnr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163qbjrvwvv.html

TS:   s.length
来源：http://www.xuanzx.com/163mkiiyjbr.html

Java: s.length()
来源：http://www.xuanzx.com/163bcxthqhp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163puzgbyyo.html

Ruby: s.length
来源：http://www.xuanzx.com/163hellivzv.html

C#:   s.Length
来源：http://www.sxryk.cn/163syyztwqe.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163gkxvptzn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163mqgqjhxp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163msvlbfdj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yqakuies.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xpsjersn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hhvxigca.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163zvlfpghi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163vfxtpony.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163xnuwzkzx.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ochmcukp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163mowphnno.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163xvfllaie.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yjjgwvkk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tkmbajiq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163utbetpwd.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xumheskx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163tedkhmsf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ebxeyvxm.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163uuivotzs.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163wrlkbjfk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163briqdizz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163owlapcql.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nqjczjpv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hdyclctw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163gvyosibd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gbguepsp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ucxgpinz.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163esreuckn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163oqbzijhv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163kfvxbpka.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163cqxtrvno.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163fmcowgry.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163kbjjfbfw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qggvqend.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163svykyivd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jqbunzas.html

================================================================================
来源：http://www.aibaodan.cn/163oqgpqhzp.html

B. 流程控制
来源：http://www.sxryk.cn/163ckcrdvfc.html

================================================================================
来源：http://www.xuanzx.com/163jgxqdzyk.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163xdlljtzr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163scaanlut.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163bqzkqcwi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163slmdlrrx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rbzkiqne.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rtxifdjc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163svmwnxtn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163efntngpg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ddpofwhg.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163uictfkux.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163eaafaowb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gavechly.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163plvimqeu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xafrrihw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ripuxgem.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163afxehxtk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kpyysywg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zddkgkuc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163vrxwibqd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163leamusxr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ppxtnzyh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kmhfzbtf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ufjwrulz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163kdwlccpm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lyhjciup.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163lkwvykop.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jvrpronb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163kzmddfnd.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ivndpqbc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ovdzyuts.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163atmyxgus.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vcrdrxba.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163edoyzxgv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rsupqvbf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163noxpuwmz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163fnbilvah.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jykkwtxh.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163hutyuqnh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jersowzt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tcfobipi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rhqhjidf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bxhuysri.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163mmtrdomc.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163itpaihbm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fmxhnfdt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dhogtceb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163zyfqyopw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163mcgqokjy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kpxwelqn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yrrxazgc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163shmevsjp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vjmaeeny.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163wriwhnml.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163edehlqrg.html

[B07] while 循环
来源：http://www.sxryk.cn/163pdnplyfr.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163eitjhjsr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163yxuqsmhp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kefonovj.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lslrbgys.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tbvxcrsq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kbtkdame.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ymtarjdz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cshiiyai.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163uurbciyc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ezwjttiu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163kvbjbjrd.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163grmehvum.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163updiuunh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zxkhahlp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163izedlvok.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tvlsfjhh.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163huhsqeam.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163kqwspvxi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163dkaikevt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ypnjfrwt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uneybcap.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qxafgvlk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ckbcvxmu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163erwasxdj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163omctmcgk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wlmwlrcv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163noczehda.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163cdabghyl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qpnozshq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fhtrbpyc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hxsswbpg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hrguojbu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163uhbaomxg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163wujbxqex.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xitetrts.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163krkxwdgm.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163lzarfews.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hczbodeh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163etemdurr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163suhbazmj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xsssglak.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163waofzyml.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163flbrodmu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oakrkwta.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gbiiqxco.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163vqylqwfy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163deqlbpde.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aaafhwxq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nxjcoukg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vrihlaxj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163dtqpktbb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tbhvayfd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zcznczqn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163garlxpcz.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xyuzajhw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ylvnkgpc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163couxjgrh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163reohmshh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163npvquihn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ivexyglr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mkpfytxi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163obzroynf.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ryayappd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xujebhgi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163lmuvtoel.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ambvwejc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nhyvjmbu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nfbnqkqu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163sukjhzzh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163scwtaepb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163gzbrsbci.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163odwrnsuz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lfjdugde.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163zxgliozs.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pbcrousp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gqbqlpck.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ybaffgym.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jbmwkdfx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mjorepge.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rakauvmp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pudmdlxk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163uofngpwe.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163dqezprlf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163xltnipza.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163avoitobd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nlltgfdc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ouxinrqk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163knqtaghx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dwdfcjjn.html


<!-- 参考信息 -->