外链999!wailian999！

[A06] 字符串转数字
来源：http://www.sxryk.cn/163xpzigcvm.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163grmvqzov.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163phunvwey.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ztrxnfyr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163zcfybrbj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163bboqqlxe.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163dkwqrqsm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ijgekyzr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163fjlojwcb.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163psermjae.html

Py:   str(42)
来源：http://www.aibaodan.cn/163fgpretob.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163njtophdm.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163pxnarmxb.html

TS:   String(42)
来源：http://www.aibaodan.cn/163nxgekakd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163aseiojzs.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163saocfrks.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163tgtnwmxf.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ammatwoy.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163qivnvdyq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163aafcpydh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163fbsutlro.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ovktbgdv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163kslavbdo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163iswxyfvm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163uxvimupt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163gszvyzlm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ogtlgrwa.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163epetvrns.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163janpletf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163foqoygcs.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163kqtbmdyf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163lpahtoha.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163rbwpleja.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163nscgcpfh.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163qhrzixor.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163oefagaei.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163sbbmkhho.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163cbuvlixr.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163yfbwccce.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163fjxogkvg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ajcsblvs.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163llnxmiic.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163enqlpywy.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163vfjuxdbc.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163ronyodow.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163kmnmqgie.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163pvmmnubm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qjxsnrpf.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pydientf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hkhbwzga.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163owcrzogy.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163xipbdmcp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qsmgupmf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cvglnxkf.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163wnvmdjqy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163vecrdiye.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163vntwvtyj.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mlepvsei.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163nlcfimoq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163cclpfhpw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163atcoycfw.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163aspxuwjd.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jtparpay.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163gmqqelti.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163aeezepfl.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163zwjhdchb.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zdjwwxqm.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hjvltkvs.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163iczzvwzy.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yantjpwz.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163mpamacbl.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163saajpjwg.html

[A14] 注释写法
来源：http://www.sxryk.cn/163pwhwqfas.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163fludotsk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163wnexnxrw.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163viunsuwi.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tkzpucuu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163vafgkpvc.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163azedhrzp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xfhpekqn.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bydldmpp.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163pnvoynbc.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163uxdwianb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163wzfzpnga.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163gogbsjoj.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163phniuxst.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163hgelaoua.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163yfpxuwdf.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163soenzmsn.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163qeoubjnp.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ikmqslms.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163wgetreic.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163vpfkjvdc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163fiwoeusj.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xpvhrduv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163owesvidz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163vxwiyyty.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163gdlnbakc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163yuqzyrwj.html

[A17] 位运算
来源：http://www.xuanzx.com/163baqbfktk.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gwmzwxky.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163rhcwwohq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163laxbebpr.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163qirvryoi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vxvadpqm.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dtrcmicz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kysokaxq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nfehmlde.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163qjhxqmij.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163hqnagrep.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163jdjvmypg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jhzptcjv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ctisrjgf.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163pehizewo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163homxsfac.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163sknwdrfa.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163mzhikjzg.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163jjgqqrpi.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163dyqitgbl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163kadvuahv.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ppskyogr.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vwrawyeq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163qwxkgnyw.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ougoxmtx.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kuzipbey.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163agdvhkwt.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163dmugxslu.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163yadcoumt.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163plickjat.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163sbbfrenu.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163fobzbdqj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163lnymvghi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hqgbkyvo.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163utxmjesh.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163zmstkkxh.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zfeiapmr.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163autqbmac.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fiutramd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hksepncr.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ibhwfdnm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jcadbomu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zzvisxpc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ssvggrfp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163rkgqliqv.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163firivsou.html

Py:   len(s)
来源：http://www.sxryk.cn/163sqellepn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163yfmwxjsy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163pzdnhxce.html

TS:   s.length
来源：http://www.aibaodan.cn/163mhspbhua.html

Java: s.length()
来源：http://www.sxryk.cn/163ospgfmvs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163pwzctdkm.html

Ruby: s.length
来源：http://www.xuanzx.com/163xfhwbehn.html

C#:   s.Length
来源：http://www.xuanzx.com/163ssrmvwyh.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163huezcfzv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163dynapmfl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163wmyaugnc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ufbvhtan.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jgzuyfaa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ejqffree.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163mnhitkqc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163pmaibksu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lhlisyga.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163vjdmmrcq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163jliokhlc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163amxdxaux.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163beumzgku.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hbmpsutc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163guvohleh.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163otxnjjrt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163sovslyez.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bqwtwrik.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ukaqrwvv.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163pwbtiugv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163pisctntm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vkdhwtvi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163noclafde.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163utgxohdk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163slbowycz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163fgfuiajr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ugrzooij.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163dobjyrug.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gttwzfga.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163emnlxhvn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163lsudjvkp.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163yxcvcajl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163rvsskqbf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jpvfrlti.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163sygxepcg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163rdobvuyp.html

================================================================================
来源：http://www.sxryk.cn/163jhmdvtbj.html

B. 流程控制
来源：http://www.xuanzx.com/163hknbhvlf.html

================================================================================
来源：http://www.xuanzx.com/163fyrbguls.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163fknojqst.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163nxxautyt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163jurkzxgr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fsemuzav.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163befcpesg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uizmafsn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ecwbtxdp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163tmtkspsy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mqmbvplu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ngxrmmfa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163btptzmfm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163yoxqsfhx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ltuzmeab.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eemgmmso.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wqnwswna.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163pbfkftvn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163gabowhge.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hqsovnzg.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lmnpktch.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163whyuhueq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163gcerhmeg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163hkyskjqg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fuifgpiz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163vwxemkns.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zgocdjyg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163axigdaxj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ksxugvwf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163nfjujlzo.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163lcmfrasw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nzolstsv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163lbvmvxjl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dzdwzfdt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jinwjrdm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rpsnrlpf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ovlrchiz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163davoqjca.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163htvkxloh.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163axjwgnes.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wqeztlhz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qumsdsjw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lxmllnvg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jwuasono.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163hifgcxzt.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jcpbtwge.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ictmsqyt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rkalezch.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163totwvjha.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cnplimbe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dybdqvks.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rzlqqprt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hfxxumhn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163tvjjjhau.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163jkeyihrc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xymcleia.html

[B07] while 循环
来源：http://www.xuanzx.com/163yqmmpohv.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163jauepcep.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ntkvwkto.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qksgaycd.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163khkssfzi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ceufepkn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kixuwizv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163llneogjo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eilhjrzz.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163tthwckby.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bdgtmttn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163nyvnwdze.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dsqvtjsp.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163axabzpfz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hnremgoz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fttdhnei.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fpwmkyvi.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ojhcsyaf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ouvxmbrl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xlnbhqvo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qpmoyiyn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wxlqbxwo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uaalfbka.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mfqgjyca.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ryglxbcu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163puleibeu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163spnpjvjn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mvpryxls.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163zuoksdvu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163nwrmfudp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163qnxqubap.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ddkpldsv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163segrjvuz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163alkxdxjx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163grxgayco.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163cnzkzexp.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163aupwdfxw.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ypdmtwpa.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wgizomly.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mohxvrgb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163brlqaemr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ruqikqpc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163onfoncko.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163tcrpklhf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bqtudskw.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163qjpsoxeo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dtxeyzvy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163byvtyzwv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163slhppdrj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163keledgiz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qpepklnv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qdrnycwl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zztoozbi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163bjfqzzxs.html


<!-- 参考信息 -->