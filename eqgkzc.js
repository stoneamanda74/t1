外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163gvvojwig.html

TS:   String(42)
来源：http://www.xuanzx.com/163qkwcqlfc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163xvthjvre.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ixebuacg.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163jwyezggd.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163mzyltiyd.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163moxzonul.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163lmwsumdr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163cjugxgdf.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163uwgmqfwp.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163sefybalz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163vqbipcnq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163tahpykfi.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163zhwayfuk.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163yeynmsrg.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fkwtzmsm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163jecieibp.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163kwbskvvt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163tkixyqaz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163nubxgsnp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163klinjyxc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163vcppbzge.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163xiqjzsmn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163vcvaewsl.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163zisrukqx.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163amgbfryc.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163xyqetqlk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163nalhmwpt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163zyotvtpm.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163lmmmhyks.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163hhrdlwir.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163bpvrlkki.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163sjskozbb.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163egbjfeek.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ptuuvabw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fbsmlbsq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163arvbtyhv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wnhuavzz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cudfltpp.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163radjohya.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gfrabvxr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mwozegec.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ywydzjnz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jelbktzz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163evqvlomp.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163weywjazd.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163yzzmrsxe.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163rvelcpcl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163bwkpowid.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163gnkzatjb.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163pfkmkgfw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163yawibvrq.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iygvjtur.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163afniiucu.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aueqaegy.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ulukfhsa.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163iimayjqr.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hyrrdfhy.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vvearazb.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nyqdroay.html

[A14] 注释写法
来源：http://www.sxryk.cn/163jucayxji.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163lfzsctwt.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163fbpwjaqg.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gvmjnzyv.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163opyphwbd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163uoepblhl.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163clyxlmdg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163glzaorvg.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tcpplqsd.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ahtovxtd.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163dykjduew.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ttyotjxh.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lwwrsexb.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tzzsmofg.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163wqmqyhlw.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163owubphrf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163lncwiqcz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cfdnrxvo.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163duhilvku.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163gbmmceze.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163gxtlmnvr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163mvuftabg.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163kuxktnna.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163orgjogbk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163blnbtehz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163aylgtogj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163prrlstlb.html

[A17] 位运算
来源：http://www.sxryk.cn/163ipfhgzuz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163duofotir.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xmlkkjwa.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ehsqzlwc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163mxvlmuyv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rehjzlgv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xpldmqhl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xivauejg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mtsmwcgc.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163wfltimum.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163iqmsdayq.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163gzsluztp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mspkfmrr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163errivbef.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163nunshdin.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163kugvtguv.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ukvzzwdy.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163gglchwpv.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163fwjwxbvd.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163zyjvwqeu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163cyvmvlsr.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163vwjhlhyz.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163uktwjlld.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163zrxxpocl.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163bagcaivp.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163cqewxcfl.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163kuwlrtye.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163tqjuomhc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163wgfyjrvg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163outavrgw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163naawilzf.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163mkodkgcj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163rwepzauy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163hgplzubs.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163juyswwpd.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163pxanlufw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163spgbkkvn.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163jipdfefb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oiuuwvzz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ftejentn.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163cjuogter.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ynqfjmjy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hneoowlp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gancvowl.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ptgffpxk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rftbiijt.html

Py:   len(s)
来源：http://www.sxryk.cn/163bhecvvrx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jyexjgkg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163fvomtxxq.html

TS:   s.length
来源：http://www.aibaodan.cn/163pqomprgm.html

Java: s.length()
来源：http://www.xuanzx.com/163bxeqflah.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qsxekgmz.html

Ruby: s.length
来源：http://www.sxryk.cn/163xbplhqmj.html

C#:   s.Length
来源：http://www.xuanzx.com/163mxxtswkq.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163aedycvbl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163sdrnbceu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163eyhezykl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163sicgrwrq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hqqwrzpa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ywpgxymr.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163swobzylv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163wknmssiy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163wljucqcu.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163agtvwhba.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163knxfgjki.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163emvwcnxg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163stmtiuqe.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163utdillen.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163wlthiros.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163pdxdabom.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163judnfeyo.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ezfykuew.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163lzutmrnm.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rcrzqjej.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163evhmjpup.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aldkgatj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ypipyxtx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dlvkmwxk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163toooodne.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163lebcgjzo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vlnjnrex.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163bmctufbf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163yqxrrvyc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jtiugcfn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163kvmkueje.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163aorsryov.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wnarnwfz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163bciyhekh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lursoqdd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163muaegcjh.html

================================================================================
来源：http://www.xuanzx.com/163sgwhmkdt.html

B. 流程控制
来源：http://www.sxryk.cn/163celytfmo.html

================================================================================
来源：http://www.sxryk.cn/163zqhkfuqq.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ficigjvk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qehuthjk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163hnwmbbdf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nyjjgspb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ufblrlgh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gdrpjmde.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163hliqmowx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kiptjaov.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zpumbvsa.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gkmlzccr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kbwoodkz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163lkdbwxuh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fzlavmvd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163idsvhcnw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vykowrkv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163skferyid.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dtjsluln.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hpynnibt.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163vadketvh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163nvjmrtrx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163jgepzzpr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mjsormtb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zdxzohjm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163qwwoyjwq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kdpxietr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vcaneetz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qfohduod.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163dwzhihjw.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163twubqugp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163rrysnblh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ntpsyiop.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163quaduyty.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pekpslsc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163tpjpjfbu.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163umnbqorc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163azhyzqio.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163fgcmeswk.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163cfhhyekh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163kexfwxfj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163skcqvbie.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163czmghaqz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163acyixfmi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163djptjyrl.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163hrzgogwn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163aheoyszw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163rooglasj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163jlfaimya.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163okfuigax.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yzfvnksc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xwezzcdk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163npnfbnlw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163hwfbvndp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163duebkrbq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163lbvwmmcu.html

[B07] while 循环
来源：http://www.aibaodan.cn/163catditmk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hgwwwspb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163goapoxfm.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pcaseiwu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sezvbbyl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xelprznr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qntksmmt.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163pruaaxyl.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163beudrqed.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qpdkvfbh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dhlinvnb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iasbuvhx.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163klvnzgxm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ezonzshx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pettycnm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ynenkaye.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ukminnau.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uooydlai.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gxhaiibm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163lzegkywt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163muxvwwhv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vlqywrzk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nkmejxuk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xuiyxgtn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xmgyoptv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163udyokaac.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zduziybb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163awqacyyo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163lxdkmnno.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163noaosdsn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rsbsfpfp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163gfjkfkps.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fshycvja.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163prvqyymr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qxvhkvhr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ewmdbvig.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163hbmeccxm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mhholbuw.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pqqpsiif.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xkazswma.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mctxhuvi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ugkrrkhd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163sznzjucu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ljrrkquy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163easpncjl.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pqugkfcl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dlcyxtod.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zlnsmoiw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ebtxvyhx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163evvsexyp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uulkgfiq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wdchaptw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lxujkyuo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pmxehyke.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nkvjbngy.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163yggqgydq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163botfppqm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cvmqqubx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kknkisql.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cykjjnqy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ugkatuah.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163pecccmfg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pqxfkyur.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163vbeodtni.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fhxnmtvk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kpzqtqbe.html


<!-- 参考信息 -->