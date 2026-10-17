外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ycpidhve.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163pljgieoo.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163qcphsean.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163gkfmgkdt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163hpcvkavo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163mwzfcjvs.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ovstkrvf.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163lkxzizzy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163rmuhgufp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163qebyjbmc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wpxfkghn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nzmdajey.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kgfbvzwf.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rbuzmaqk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jsyiiumx.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cdowcnlg.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163cjxphhhl.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cgcxjkio.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163csvczejf.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163yvbqmexf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163mxsfuzmh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163tgwaorex.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163gvodhzir.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163xbnxzpis.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ujmweevg.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163vrgxgpzy.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mztgkjrs.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163mjuupnij.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163lcngwevs.html

TS:   String(42)
来源：http://www.xuanzx.com/163svorkraz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163zuoeczmw.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163btyoyibk.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163bihxjrcf.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163nfhonzzb.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163sxngwtjq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163zglnrtlt.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ctemviib.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163kmocywin.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163orkqougp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163waiicgtv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163vgnjidko.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163djtppbaf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163mqjyeatp.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163dikivmmi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ppqrbnlk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163opvzqpan.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163hizsnkjc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163occxkhlk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dporxmps.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163bhhijqau.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163myqjtjqr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163qqvrjria.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163zndlehir.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ledsszgd.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163xuryeoce.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163urjqqdnk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dvanvnql.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163aipfizao.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163djoaktkz.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rnxzxdrj.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vmzkjhvr.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163fxfkjiyi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163vgcccmaa.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dbgcdiap.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ikcaiawo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hmlbqigs.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163amjgleca.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163dzxywbom.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tzdlzsmr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wfjslsdj.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163djycfohd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163jxthrgch.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163auvybbmb.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163chitukpw.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bkbleucr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163eaatptey.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163veneavmg.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163rkavzivh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163egwjrbkx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163dgiiytpk.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zsiicpmy.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163lyywqjgj.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zuwwibsy.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163frpwsaeq.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163omcsnosz.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dgrpvdrq.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163kkicmizs.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kmpamyep.html

[A14] 注释写法
来源：http://www.sxryk.cn/163kezyutqo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163iwdaalkj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mqsqnzzw.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ewrzrwwv.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ihuzxmzf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163numbrecc.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pksewpfe.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163zesefqdm.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ohpfugdt.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ojrhmgau.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qdyvqdnc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163usxfjmix.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163tyuvpvny.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kfycnjpc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163iuvjrdpr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163kszwrvhm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ugqxegkv.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zioseewd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ccobeiru.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163pbwidgeu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163vbpeweth.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163zjrjkhue.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163hqavtzyj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xswofbxn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163jdwgmjgb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163tdazrpoo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163kexsfxmt.html

[A17] 位运算
来源：http://www.aibaodan.cn/163wydmddla.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uwopjkzd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163togmlarc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cetxfvcd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qvbwlrsi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163otezohbc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163otddoqgr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163icigpmog.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lxmudxft.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163zufydahk.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163biowvzug.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163mfbizxuw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rkkkbuiu.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163atdwlnpn.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163hguzscaj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ktpuhzes.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163llmtngnk.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vwciodqf.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ipejkpft.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163rpxmodqc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163zqtvnxth.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fmuatvpz.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163equplljt.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163bcowwmzz.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163hjyvjwpf.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163emaybddg.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ypuaqoiy.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163xtgqazdt.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ouowwfnv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163doyzqukp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163aboiavnl.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163rzlxzgxr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163yugzodpl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hcoiuijh.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163jywpbdjq.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163vylzsozu.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163pmjgvmga.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163exlkgfzy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wmtxohab.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cfeqsncf.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163moubwtxz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bjiexbkb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rvcllrcp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tlkhidrt.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163msewnppn.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163nysqnrwg.html

Py:   len(s)
来源：http://www.xuanzx.com/163pgonbsrp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163cyvdadkg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163plhdxeua.html

TS:   s.length
来源：http://www.aibaodan.cn/163bneuqbea.html

Java: s.length()
来源：http://www.xuanzx.com/163ehjnktvm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163hpbqxjzf.html

Ruby: s.length
来源：http://www.aibaodan.cn/163linrallu.html

C#:   s.Length
来源：http://www.aibaodan.cn/163gutgsqau.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163zrfnzywc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163aknwdjqm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163flusboqb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cqsmzzuu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pvhwjvqk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mwdspjzr.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163gdcxmpun.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pfcdvamz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163uymuayzq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163qinbsnyc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163nxfjluyh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163oewdkhvi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bmullojo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zyihgevn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163hfdmklwv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163cwjsqmtk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163mmbnsoqg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ybygtldy.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163lvmbingg.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163aggeykui.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bwfvueik.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hzbhemhs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163onewwiww.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163drqpuqsi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163hveffdpi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163flctsgol.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vzhwbszm.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163iyiobpkz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ilgmywuk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163wrcuhwqv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163bfehyogx.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163aricufii.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163yvqrhtda.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163gxihwjyo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163nykclcxd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163aimxkhvr.html

================================================================================
来源：http://www.sxryk.cn/163gnakebwf.html

B. 流程控制
来源：http://www.aibaodan.cn/163lffmfrlc.html

================================================================================
来源：http://www.aibaodan.cn/163xmfibffr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163juzhxtiw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163itxcsiuf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163nltsvovs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xairqnac.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dgspdvrb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tpiebvpo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163xlmuwjel.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ydokxchh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rlqubugi.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163rgkgrtoo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ddjuwjai.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xyoddfba.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163unpvorvj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163utkzqrhw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kgbgskpm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vbatnlty.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ynhtvlqb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163csyocpiv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ayjotojs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163pppovmig.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163aqhgocrv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pijavzew.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qyrxdljt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163vtfjoarc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163cchnbwru.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nulmufyf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163mlurghjn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163rboxcfzd.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163cpvqajxe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163fhkqlyzq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zmfeidst.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163meermays.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bhtkjibe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163sgmihxjl.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163whhnpcrk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163wtfqczep.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ponwquqt.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rstqpxwd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163svwfqlry.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kbsopwmb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zhpbkura.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dgkcekvr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163bmozmnej.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pzjlufvu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163wemxyjsa.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163oicnmpeh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hparegij.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jklbqmsg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lxfbppgg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lgyqaqwq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jwguugxo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jhaavkir.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tpnidavo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163qbyfagmh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jlhassub.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mteltgkh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ojirohpu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163skfbsvct.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jqxersqs.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hldjxzoe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163nnulxolx.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163cyqlnqog.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yeekhstt.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rdmosxys.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qsbvmjup.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163niypctye.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163twlccuko.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jjuwycis.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zxfpjjgn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fxlditll.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fgrwhhtp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sxfgmeaa.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163iugzpgej.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ggazdrej.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163abyorqgi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bmcbwcbi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163igkjjpoe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lbvpumes.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hbqwvtrx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fraijnln.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iquhqgjs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mvhzcogn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kocsvdnw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zcuathgg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gtqxdzdy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163otafiuqi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xxkovlcr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lofigfzn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fytvvktl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vzqpabht.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163skwpbgkd.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163zhgcwygi.html


<!-- 参考信息 -->