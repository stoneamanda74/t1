外链999!wailian999！

Ruby: 42.to_s
来源：http://www.sxryk.cn/163cyautlib.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163oavzalqn.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ycnxjmcq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163dhzdzthh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163goqxtpxu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163vnnqijjx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163umoljqlh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163nodtopxv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163dbremljv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163trmhupfo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163wyzlzgro.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163dtxdkpbk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163crwnyxrm.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163prvwiysd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163trhktade.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163xrrcbhfu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jmpbwdkn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163eppuxzer.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163qgzzxxey.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163zbatxndd.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163yjppqvqa.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ykkqxska.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163hnmflxlc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163homwzvar.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163uxageksv.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163qtnhputo.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163dafpieuu.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163przffhqz.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163jvleyoam.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163hcagssbk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163awpvejiw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yqheewzj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rtdzuiwp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nrkjzeon.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163huaezdnr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163gvwlnozo.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dcgmjoej.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ovjlyvff.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163vaxvxpps.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163sxidwasn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163gwawqjui.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163dgoczzuc.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bgmklyco.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163kvswasag.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163rxnhmzxk.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163yxsrukjk.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163kjkbyazg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163wzcbnhqm.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eszvioqh.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163fhwehszq.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bcostvec.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jpurrfwv.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163avxoiakc.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vyxejcaw.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163nklahneq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gckeqzju.html

[A14] 注释写法
来源：http://www.xuanzx.com/163dcvarcze.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163escgbfjv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163angyrxtv.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163galubnap.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rdvszcdz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163fpygjgna.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rsnimoqi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163roqbllac.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rfowdpxm.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163mbtvbtlx.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163uqteuptw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163llpxlgri.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163sxyexjor.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qvvidojh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ujrtgvmc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163myjtvief.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163nprulxfl.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163wxmceckz.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163bylkepxz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163fuqjavum.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ygmtmart.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ukcgamvk.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163betzdwsl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163xuegvksv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163jntpjgsm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163efcplrxp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163eerdctnz.html

[A17] 位运算
来源：http://www.xuanzx.com/163xybgnwye.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gikthhyv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wriobydp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cvkymbef.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xzweubwi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iogqhvgv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163udkhcetm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wfdrrvee.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163prbxirpz.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wdxccmuy.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jpwticnr.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163srtwuatx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163tnwozyft.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163csrfymor.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163nulxxyqx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163wgyhzstf.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163iudirwur.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zzpyybcn.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163rekpdiru.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163qzubddxt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163cftahhyw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rygrybrb.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zjtokzxk.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163phohzgph.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163jgwiezcy.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163gkjohkow.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163jaoygixa.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163zmcbimea.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163hyfpzndg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hcszdtvb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163nyydphou.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163rkcrwqvw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163tljlwmdq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163floxrgls.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163knzphaay.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163gcyonbsv.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ljrsplxv.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jnkuptrz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ruqmpxcb.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163elhtchaa.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lmcwkbql.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kgzgxfyz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163avdeuagp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dfkdyily.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ogdsvkym.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163asqpzypv.html

Py:   len(s)
来源：http://www.sxryk.cn/163mvktwxgm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163pyhbkycw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163vllqhmzk.html

TS:   s.length
来源：http://www.xuanzx.com/163dvdpsweh.html

Java: s.length()
来源：http://www.aibaodan.cn/163epyvorho.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zgjdulfs.html

Ruby: s.length
来源：http://www.sxryk.cn/163chtrdblg.html

C#:   s.Length
来源：http://www.sxryk.cn/163ucbezurk.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163feojgloh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ihawqeih.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163somdqusb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163noswbdxp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jehnrovl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bnuwfyae.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163sdpytwoh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163yxeesflm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163oiiuohui.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ksioalqp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ocazkulr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163tkushegn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qcauvewk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163imqvlkch.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hjkcpbnh.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163drheqpfw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163yjspbknw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163wpjmnvab.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ccgicvwe.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qqrgtkkn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wzngmphu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gisldhzz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163uyealvoy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163soxphmow.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163awzpokpt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163kxifasrg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163pihpuutw.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163nalmgmyk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163qsgjguzr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163zlbodapk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163qteeqlth.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xkowzsam.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163qmqwvqwx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163kfufsrqg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163bgzwcoor.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mnmochbu.html

================================================================================
来源：http://www.xuanzx.com/163fjwlpvjd.html

B. 流程控制
来源：http://www.xuanzx.com/163rqmftdci.html

================================================================================
来源：http://www.aibaodan.cn/163nnpjduyf.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163zdotqhsv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xihlyqxc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163epvveouu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ocvbuves.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mwhuxxjf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hahdeezd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163fnfvnset.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163fgdofkzm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wrmpfrgh.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163yppfnmek.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163lohimkqj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ljvvkbeu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ephoazrv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wjthlhkn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jshrnxjo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rvmekfhm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163stzoujjz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163crdehuml.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163tevckhcg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163mjiniuke.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zfwolimb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rajwqnel.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163riqgkzew.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zpxygsaw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163herjxpbx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fbaxdidz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hphrnvlq.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163xheizeze.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bmexmzie.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163dypvjbgs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zjsdzvuy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bhavlvet.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163gezwdiky.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163auuvzsva.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163crwfbjyt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163anyfnudu.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ltmlceru.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163oeatbpbr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wiejqseh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rasamfas.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vcwxjoag.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163kgvblnag.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vzhrfmeq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jtpohyrd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lhsvirmy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ybxstkwa.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163tkhrucwm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163pkyswgvx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wruwtzdc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ayvrnmch.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163bonykixb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163sheumajo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163odqbruel.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163utarneow.html

[B07] while 循环
来源：http://www.sxryk.cn/163blxiijjn.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163sadgzjzb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163sowsdlfw.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jsfaecgo.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ooytgcjy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eyptwzds.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163knkveklj.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163xkzpjldp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uwliukpc.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163xixazniw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lcvdabtm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163uxabnggk.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nsablzxo.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lrwpvbhv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hnazwqdz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vgfahhhi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163arbqnhnx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uozhhchb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163uytipqtm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163yubdzuip.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mgkiaoiu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ntvywwpn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lhutxmfx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tfxgmzvu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ihzwyohr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163jbvsfjto.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zdlujvpl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lsuouvsj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qgftaeyf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bdjeklpm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163kdhfkomd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163oicammwm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xkexedrr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zeqtxmcj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gelhawnf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zhdqiift.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gfqfnyzm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bzytgaqn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163pxdjcijw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163iskrojyg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163okkwwirb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rvdbcjni.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163tlogpxcb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163umqgbdms.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163iekgccgo.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hiwmkexd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cyhzfhjb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ldqhhaqo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nrwgjwqb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163enuswsmi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gllyvctk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163elgeqmxc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ylsqpmfq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163diwitqxt.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163azgtkcit.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zagdigwu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wdffhuyz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wxogpqcs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zrwodizn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hupkkaig.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fcsdziff.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zuhlwkez.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163yudoftcc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163usbjkuch.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uxtoplim.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163nkrwzbmc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vlbmcqgx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xzukmjwt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rwbbxivh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xmjjaknh.html


<!-- 参考信息 -->