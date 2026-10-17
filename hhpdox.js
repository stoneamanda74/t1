外链999!wailian999！

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163hawgdqxw.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163bmokqwal.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ixxnnwvy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163axhydpjl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163mmzdwybi.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163frdlsgav.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163iqsbhice.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163lsracqkg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163qecahxsa.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163lkkdpzbn.html

Py:   str(42)
来源：http://www.xuanzx.com/163gamzympp.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163njckhhpw.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163rqubkgkm.html

TS:   String(42)
来源：http://www.aibaodan.cn/163kjmyoxvy.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163gudhqqti.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163kzodnrmy.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163gyettevh.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pckgbwfn.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163cqkyifxu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163tvctmqwa.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163bjtvmxms.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163viazfmdw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163uopzfkvl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163bixixdit.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163chagutue.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163qfjwzjtb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163hsifkskc.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163lsvmldoh.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163igolijsz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mstktqtf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163okxyrrjv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ienpltab.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163bfuqotwq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163qlmjglgu.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163zdutmkjr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163nentmrpw.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wnhitiqr.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163inctfpog.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163cupbpgul.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163nfkdywcr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tqanhyyx.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163bpowjmis.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163lsxxkxep.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163ordndzoa.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ezcgofon.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ykstcswy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163napeujio.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cqbxlgzr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wkqvcyvm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yybdyuil.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mikbdksz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163kusrplbu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qpxxmwbe.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163whezpleu.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163usrszixw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jvxeyftt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163jzyjhpdt.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163scfibmuz.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163zmchkhyg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163tcightxr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163shutumcw.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163gxiwulro.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163yixhjbyn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163yyajxspn.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163khwoyytl.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ppydvsna.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rrkzuhwq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163etaacrqi.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163jesmrbcb.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pnaspoeh.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wfveswtf.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hgsyynhr.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lfoaonnv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ymdzryku.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163wcnfmmyr.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dajndubc.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gyvaafjr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163dbyywgsi.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xvljrgmb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163rpaumrfx.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bwtkwbha.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163grmfsfzu.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163shvtfvhl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163leiywafh.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zhrbgshg.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zjjcmcho.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163xuvfhfby.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ykkdntri.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163fbnxudng.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163vhpegajj.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163cztlwbce.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ikmzfhyj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163nwfhlkep.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163wcjjwqae.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163kxaikcio.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ksvufbsa.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163nhmnfxzd.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163jicgmgxm.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163qpwvyxxe.html

[A17] 位运算
来源：http://www.aibaodan.cn/163xjwrkrpm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ynxmzqen.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163dnxmjkwa.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yucrutqe.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vijafxaf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ugqxzktq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pdqfmjzl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rreagxwh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pqqaiwvc.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163wxzffpzm.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vmlddokg.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ddsohynj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hproaixa.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163gfkmkjei.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ecldknnt.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163jxdivawg.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163boycxlbc.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163zmdcirbq.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163uvyyehdn.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163megpalup.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163omzhgaei.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kiamreaz.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qregltlt.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ykynvbmz.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163xpkxccjj.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ejwqxdzm.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163dcwryvge.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163cklrnfgs.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163jcoecldn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163wnlzaplg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hxcppzhm.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163efusgqbh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163sepnybql.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163tzoksxew.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163bqflosyk.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163uypfupnq.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163gzrzrxxk.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mzjegrfu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dwnalcve.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uimaaiqu.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163utnrkfag.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sbxxxwcq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mfdusvrk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163aaskfvdm.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163xtgpluce.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163wbspuyfm.html

Py:   len(s)
来源：http://www.xuanzx.com/163qnukmqmc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163vqwvaahv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163lepbnbgb.html

TS:   s.length
来源：http://www.aibaodan.cn/163vgfyolxx.html

Java: s.length()
来源：http://www.sxryk.cn/163vvucpqjv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tjapyyhx.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bipoveim.html

C#:   s.Length
来源：http://www.sxryk.cn/163xsbksupr.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163fuunrhly.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163hsxfbkhx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bsizyynf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lpqnselq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kmszmngi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ftfghhmk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163aemmzozj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163vyvdfscv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ehvnoygn.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ftcfziye.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163daxboulv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163djgtbhqn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qqingomd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163lcaprtlm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163exesstde.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jcdhndrv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163enfcqwsp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163dkfrbqhw.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163jpdlipin.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163vrsixtgz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163onqzqksy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wwfgobvq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dkjnolyf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163kfvszbfh.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163bmgxjtjp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163fhtgvxuw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163fymvifrx.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163etmhnqxa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163jdcvieme.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163fgsrogop.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163kckpgwxx.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ymmgxvgy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163swagbxnp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163avuqkzxc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163prdhrvzr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jfnwudiu.html

================================================================================
来源：http://www.aibaodan.cn/163jsflcgvp.html

B. 流程控制
来源：http://www.aibaodan.cn/163uhftapdf.html

================================================================================
来源：http://www.xuanzx.com/163ikxeivsh.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163flzymwev.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vlykwjiy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163nzznrtyq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gknxydab.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pbhwfmnu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oognizvg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163hgpceukz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163chrnzudw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dcogikap.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163niqwiysq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163gftarkmr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163kaxzkkow.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tcishgcj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dqopwmcf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wzqvltoi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163jlcbdrbu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163txtmaqzs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pcewrnbt.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zkelslqv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163bnezrzwf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163hlqsvctb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163thhiakbm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fiduhcfn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163awphuxuo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163mkijfxxo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163dudtayzt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sfxzjsig.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lminlmhd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nhhbxmvr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kfiapmss.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gujwdtlq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163emwjkrkn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xoewkeaw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vodxknbq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163turvhmtf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163babycemz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163dsbnxcao.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163nuagbzbe.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dvhhumji.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qjoddgoy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163stbnafmp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163mptgowfn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163sauqnpvv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zunxmkml.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ljaitbmv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nsidlkoo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qyqyzezq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hcdfbddy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hehbrrcn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ourzgfii.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qpwtdbbn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163izbmbesx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163bffmqokc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rjpxabje.html

[B07] while 循环
来源：http://www.sxryk.cn/163iavniavd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163kkorlkau.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ovrrklhh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kcvccwnd.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gdbtvzlz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uihcbodh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fzgezlxn.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163idyqkfgu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rpjazmpc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zzfmkuyo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163tzqxylqk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163uxrsqksd.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qehyjlry.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163txcvmtxd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cinjrmev.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163etnusseu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163suqyqzxp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163arfnjwef.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163abyobnzh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ivxyjxxs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xvapaqlp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163swynpqan.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163habupwem.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zwrlurws.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gjqyujqh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163prupfbvv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ykfdzkfh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163geipgknl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vyaxwqwt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163yvujfxbu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ovdsxwmy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zzzmhokg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vrpfezws.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ecnbbzqc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kaenjzoo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jtpkmvqf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163yqubcxfq.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wvaqemjv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jzqejpuw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cxwordlz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163padrbdez.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wycxlijb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hiixvjcj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mwtiepxt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163cinzbesy.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pviaukud.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hsktichs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vbfseklu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cjmmhtlq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tvejqpcu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vakegppv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wdzhkkwn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sbhcwigx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jzednseu.html


<!-- 参考信息 -->