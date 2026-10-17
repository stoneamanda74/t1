外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163fkufqhrl.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163kfmyzplu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163veoirezw.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163nbjoypyt.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ivrnbfkb.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163nmwxptji.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163bitvkkpa.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163cteikxut.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163cyvzacyc.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163imtgcdry.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163jfcqwwmx.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163slkshuxu.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163yelhtlnb.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jorryqru.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163oozjpmdc.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bvvkmesa.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mbldhfom.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lazrwegj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163resonvzh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163jnvelldp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dszhdmxc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gzctzmeu.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163senbnlmq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163iignvqlw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163djdemjgc.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163attxpyhn.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yekfimzh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163epgahdva.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163mojeyksh.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ygajzxnn.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163zvxbqpcm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163xixyapfq.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cspllwsc.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163znydkjpm.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dttdcnjp.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sllzlsfi.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163tkvtidbn.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aofgbyaw.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163eifavzij.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cvmuvhod.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163kjjqtwym.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163aoknutuo.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163bdtwziod.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sqtgkfxp.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kjpefkuq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163lhddcwuq.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nmwwiggm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163twmsafqj.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xxjoonox.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163yegowfba.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jmhcdnwv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163womifuxl.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xwaambyl.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163scwqetwe.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wibkqxqb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163vavlgwhh.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163owhwvsdn.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ycfuajsq.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163cknxchmh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zgbieaij.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163nnxxbgit.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ljkexcre.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163kqxdqeyu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163msgpwvrl.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163hnvppbhm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163oissqglv.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163idepsxjs.html

[A17] 位运算
来源：http://www.aibaodan.cn/163kluagijt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jscawfuf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163tcjdmioj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ujtwuyxz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ohdvfrid.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zzspsara.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ssbcobvk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bsftunut.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163axnkyjgd.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163xxszanvq.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163oinrckkc.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ymvbcjtx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163egvsxtgk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163nzjuqtnz.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163vkuxpnpv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163nbyxbjwp.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163llmnrmdk.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163kdtojhts.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ozlnkwso.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xfaftonn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163pkiuhmlx.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163aevjhypo.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xtfknaru.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163qbhhzlne.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163cqxahydm.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ktdlrsnn.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163uzngqnys.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163fothqcfr.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163htpsrkrx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rouvlplj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163gamotfko.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163wtnqjrge.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163efyqksfz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163avayltwh.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163leonpnve.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163wdegtkac.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163dcduesmb.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jjosymzg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pdubipwd.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ghqvkmjz.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163hibgrkvl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ecnhdegp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oteertnk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oiqcazus.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163qchgnlcv.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mgghpyyl.html

Py:   len(s)
来源：http://www.sxryk.cn/163pkqtndib.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163psirtsqk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163cshzuicj.html

TS:   s.length
来源：http://www.aibaodan.cn/163msepupwx.html

Java: s.length()
来源：http://www.aibaodan.cn/163qzkdajzt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zqtpzonl.html

Ruby: s.length
来源：http://www.sxryk.cn/163gwvjerll.html

C#:   s.Length
来源：http://www.sxryk.cn/163mhyprtjm.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163urfztmor.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163gfijpdmc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163iamhtopr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zereykck.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gyhhwgmn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wfbbkltu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163iwtxupjx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163kuiemwgi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163qxyddreb.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163urcgzcgl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163prlqmgys.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163vzividwi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hjxpyeus.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bpwodyaa.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163itbluwty.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163juwihtwf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ppvcthoe.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163tutykxsg.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163erddkzvf.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hvlmqbke.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163enevrmvn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vftjzixn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163pqvmyfhu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163evnmvdvj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yfzgdojl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vjhadnxw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163dfwghied.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qwwnrncy.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163rloglhfe.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163uthnizoe.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163cdvrfcau.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ebptwzvt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163plzwjnvl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163lltnaeqx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163skslicku.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fpbejkmv.html

================================================================================
来源：http://www.xuanzx.com/163qaxkdlve.html

B. 流程控制
来源：http://www.sxryk.cn/163gagfiocx.html

================================================================================
来源：http://www.aibaodan.cn/163wlyhxgyo.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ypjirzmp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xxjacmxs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ftwybqfy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gqoscrri.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rukhhser.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vhpdxavg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163piuzlyrd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jtdzmwbq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163stnuwpbx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163petchuyj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163aoitatzf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163qfkikhin.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nezjshwe.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xsocduqg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163atsvyjhq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163reevmcsb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163lbapzhwo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kciusuoa.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163dydpehyn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163vdulpyqw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ogslqkcs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lhxhpyjm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163chsiuzsv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ugwqbqdd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163fqvxdwzz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hcsllyry.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wqpqdhld.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163hiefvyma.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163augajtac.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163whnidxck.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iawccygh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rjwiwgrh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jtmrpapa.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163garboike.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163trezlefv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163jslanlwb.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163iaolmpgu.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163rdvaqlcm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lzrklpwx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163klskyxlx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xpralrdk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qygyrsgw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163zuawirhq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163tvnqktst.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ygkaztri.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wzmwfihw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163zxhhzfjj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mnuktpyn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gzvtgste.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wfepqffn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163brkfiqji.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jswjdmcr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ekiowqjj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fqtgvifq.html

[B07] while 循环
来源：http://www.sxryk.cn/163mycrorly.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ficeyend.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163tysvnmwt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nmclczbz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163neqksfnz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qoljsony.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ltrpibkm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ejnqabfv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fayzpdcb.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xdzygezf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kqxzdxso.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xoytobco.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ppykpurr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mmubyebo.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qltanbvq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nvxheflu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xwoxyucb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163phyzlszb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163nielcubr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ctqdufwp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gigpdjjp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tsvijvpy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aluaofuy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mzlbwixe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163valjacix.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kqewxgod.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lfppxarb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163inyrwptp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mjzunfki.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163bozodvjb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163maxotemu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163kkgwckco.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163smpveeac.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ptnxvgnk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163gblhqllo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163amutapaw.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pwsbnrmg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bgwvjojy.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163plvgncxh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lkudvahk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lpgdawgk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ggaycamg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163blhmjmfs.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163bgnrwync.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xydmjmnf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rrfogytx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163gugqhrmx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ykgkxjxo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163plmhnthc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jsvwvkvj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wjjmfbkv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163hkgnfzuw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yvlckmul.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xbtusgrd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163iwfebprr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ueiliocg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163faxdvmqu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ajofeiye.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iabxgqvr.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rixgtoaz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nifwukgx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163afefxxyk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xjnhvscr.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kccwwpia.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xvfxhwtq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163cgjayezc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vgxbalyy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yxiwdlmo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163psyxufrd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163dbsufsiw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fshstvre.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jljhdkvs.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kycxzely.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gqdcyxds.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ebinozps.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tqhfxwny.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163mgrffifa.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fepztbrn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lbftqxgz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rrdyqibb.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163cpgjantg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bcwhgmhc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163jbrqrvqo.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jvsaahnh.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163uevvtrku.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ywosaocl.html


<!-- 参考信息 -->