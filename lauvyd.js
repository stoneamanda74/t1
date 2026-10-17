外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163etspyfpy.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163extqbbqa.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163csiskqtr.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163ogvgfqjp.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163rtrveuws.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163rppbnxgl.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163kztjshuz.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163cqjsycsd.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163fcpqgrzy.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mnpiwkds.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163vwkhfcqu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163nhmzcdhz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163kgjeinmc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kvyxijex.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163hoehuywb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ghbfmmhs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163tfjaovxf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163twieihxq.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163yzxudzzm.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ollvecpx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ozckhinn.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163snszrkbz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163nxrhufzo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163savisctr.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wwggrxqt.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mnfgklmm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163exjtlagb.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163escdnnjg.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163azlyxjak.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163gwfnvbzu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163zzsqxkav.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163ctqlmelc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163suvaxalt.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ktgrhccq.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ifujpjpo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163rjspxddo.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163kbuywwcl.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163gtvvvoom.html

Py:   str(42)
来源：http://www.sxryk.cn/163khbsvuwg.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163tjkoeoyg.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163sgyzixup.html

TS:   String(42)
来源：http://www.aibaodan.cn/163hwlpgzpx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163xsscsilv.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ltjydnoh.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163jpyeoxgx.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163gxironpv.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163rkyqszwd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163iztqqjwm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163gezcxdam.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163nzzvptvk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ugyufrvd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ueweqabb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163prdsrisb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163zivnbaye.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163slnewkez.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163mqomwmpd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ueyycgus.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163lgufvozm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163imrpsfsq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163dyobunsv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zowuoplj.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163nhfenyqp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163hfzpjmgk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163ssxrluku.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163yiudhfst.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163geievsnu.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163kefarhnl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163nsmqkdrv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163qbefsetd.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163upfgbrwd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163bikupwwi.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163pvtbaubu.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163fgacvsle.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163drqrinee.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163czomzkny.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gkuhkyzr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wgglulvn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mziwqriw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xptomrdd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163cejnkwtj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rrpliyfq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ntdisjhk.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163yfylbdps.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163qafsbtix.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163nbtcjalo.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ilhjvdjs.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ctmutric.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163fscilsfj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163ejnbdkro.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163bmogckut.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163omcyquye.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163fqeaepyx.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fyjjvkls.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163veewsgzb.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fomdgnnu.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tffyvjlk.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jfwdsnqz.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oizksita.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163gkhvobhd.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kpfpqwjx.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ozjhqsdo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163thnsdeop.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163cawcppfs.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lqfpdbti.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jrkuajyb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163aaaqouvu.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dbftequw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ygzdzytg.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pfpcluqg.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163jlbxolon.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163fwrrwwth.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163bxsfpktu.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163pnglpzac.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163pynfbshl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163nejfvref.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ctlwaeth.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163eqjvdamz.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163wahklxsa.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163jlceybgq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163onqjxxfc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163kqqvmtcy.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163yckgtsgb.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163spjdaaqe.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ywkslezx.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163gqzehayt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163elghjcfc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163uqhpxcsq.html

[A17] 位运算
来源：http://www.aibaodan.cn/163kncncrht.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163axmundbu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163hvdoxsxe.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zrcryloo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163hiusqeri.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ackblxch.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lxoayqpr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ipucvgtq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uzbkaxfi.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163giaqziso.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163kmvogeyb.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163pwpcaoxz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163nbmzgnug.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xscutwvk.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163afbttvgb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163fksvouhs.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163clbqqtdx.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ffsuauep.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163pagxqyka.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163xvwddfub.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163kienktuc.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163vfehwknd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ueunuxas.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163smdamofl.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163wqhapyvs.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ijquevbn.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163fkmdjgnu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163efjlmllk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163bhjunwue.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163pguhbpxv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163luzqwvgv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163umysncke.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163hxipztdu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163oarhdrcg.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163zhpmuyvn.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163rviyzvkq.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163pyxfmxbb.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163dnhijyno.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wvgcbjdz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163cuzijtom.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mzrvuqmu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kpdogrgz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tmvjakoi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tubopvrp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163rceztdus.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163oxxlhmba.html

Py:   len(s)
来源：http://www.xuanzx.com/163nhjavpej.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163xzvususa.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163dbazvrni.html

TS:   s.length
来源：http://www.aibaodan.cn/163nbvpwqgd.html

Java: s.length()
来源：http://www.xuanzx.com/163mwfbkpld.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163gvyfjrzs.html

Ruby: s.length
来源：http://www.xuanzx.com/163fjewjrlx.html

C#:   s.Length
来源：http://www.sxryk.cn/163ehqsvlwm.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rubxdsqn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163bgpmwgnn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163cbajwfab.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163foabjgln.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ztqdjtur.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ikxhygam.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163zedpzudy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163klnfdohe.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163eylgoqeu.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163babqsaad.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163qnicvlfk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163etfvmptb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hujqjait.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yqsanhkq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163wwwkixkt.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163bvvlteks.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163rymoftlc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ehfdjwin.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163otqmczjw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163gudkdqvh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tjarucrk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fptyqsng.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163edswuobh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xfmavfqj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163npazhhin.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163eqyrrqru.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163opymqmwz.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163yvnwnzws.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163sakdgzpp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jhqyaajq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163cuvywdka.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qwlsbvmn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wfbypgvf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163nebyhhin.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163azzqpypl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qlujgqvb.html

================================================================================
来源：http://www.xuanzx.com/163bmusjdbw.html

B. 流程控制
来源：http://www.xuanzx.com/163aexhtgzg.html

================================================================================
来源：http://www.xuanzx.com/163kbdksghb.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zcffmmjg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vibnoosw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163pskqqskd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ptnvtmjh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cqdcrewq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163frbyfdfc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ivnvskwe.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163gofczzbx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cksartll.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163jodmzcno.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tvigjcuu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163rioystnq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163whdbtfns.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jzqdmqze.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163incujydq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kzesrasw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nqvpuwsz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dwtkfcqj.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163bmmieaqa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163kgxdpuse.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163eeuqjool.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lumjncve.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dixhkjar.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ofiiedef.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163yzvsowci.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nwmkowhs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163bbptlxvs.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ggmnixmz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xuyrruvs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163elzagmqu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163irmiakfs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dkzcnerd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163miioidxo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163tavhiajp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ilqvhcbp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163nniefzby.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163fiypsjos.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nqgybfjq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163rporkcgr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yukhakpm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cowjyshg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rinjlpbd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xpodcoek.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163gwvdohey.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qrhqwmcp.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163mwalvszc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ugxzfctg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163nbebqcck.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xsoqbawu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ybjeztce.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163kflcazyb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ilgjakhc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163yxqgibcs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vfsrbtpc.html

[B07] while 循环
来源：http://www.sxryk.cn/163jvouxgyc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163iawgqwxj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fbgpqtqn.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163akatqnuu.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jktcyhre.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163estoytsn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163cblxmrbs.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163airpmkrf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lztaqufe.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163lnnnnwoc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gnanxnjs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163isvbcvfa.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yjuxhnls.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163msxfioqj.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mtddsbhd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163wiklozod.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163akxbaqzm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163abvmnwuf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163nhjxbmct.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163fjrvyxjm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xutkidth.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qwxeguxn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163idkuoldm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hmhdwoxv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163efjrkdlg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163mjpgpssf.html


<!-- 参考信息 -->