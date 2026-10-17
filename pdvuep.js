外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163zzzpzzeg.html

[A03] 常量定义
来源：http://www.xuanzx.com/163etaykojg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163mldewufp.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163hsflqsfy.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ppanjzvp.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163wtjcyvmt.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ephpytcl.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ruvkxxby.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163sbjckmjl.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163pwdozbbx.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163hdyogsfe.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163piuqknyu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ecyhgfhd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163yddwzwrg.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163isjzsuvc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163mjckbxjj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163razgjsvu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163prcapqdb.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jpefgunk.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163fppwofyu.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hlkybxls.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163qhmkttsx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gnhjmnzc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ziaufcoo.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163auduyupa.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kdtqqxln.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mlniqfuz.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vbhbotcc.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163pgupcbmz.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163bmptzjtf.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163dsmmpaso.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ncinqjrq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163itaicxcc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163iyccvtil.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163ycchlcky.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163svtiivpo.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163wqmjempt.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163zetuylsm.html

Py:   str(42)
来源：http://www.sxryk.cn/163cerfwivy.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163lnaivmjz.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163zunorauy.html

TS:   String(42)
来源：http://www.xuanzx.com/163qyqdmpzs.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163unhgigds.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163llzlrrgh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163fembqmpk.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163yynkltll.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163iokpirsp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qqubxzgp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163djpuhlst.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163jqiizgwr.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163utnnsbln.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163pzebnstt.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163psfwzuiq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163nngauwnx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163hjxpgrwk.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163nwuaprlj.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ktgyuiyy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vptwdzdg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ryobfhsg.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163acxumdil.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gealewgy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163tkkdaobz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163ijivjdze.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163salnmcmu.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163xubgvmmi.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163hnpbpguq.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163yjyfitdu.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ehfeedqr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163nsyghykz.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163dxuzbhwl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ulqgroyw.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163iwzzlvlt.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163cuqgkhmk.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ouvcyjmq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163pmcxhjkg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hkfsavet.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yslgdrmu.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wfzbobvc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ongggibz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163hmlmyzly.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ldquwcfr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163weuelfyb.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163okplxwkp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163omvmzccs.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163fwdcxioo.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163tjybnojt.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163brfhnivg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163fuckjgoq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163bfzraizh.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163zveyeipm.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163djffodit.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163harmooxm.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nunvcxdv.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163dnkaundb.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mpogbojw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xuyjkczv.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wdcfkdpi.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xmcopsgi.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163vraikmrp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qblccolc.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ivfzyejp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163iqdyuweb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jdahmayy.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lkyivars.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163troinflj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163lqifspof.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kllebuil.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163cxmiknsc.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bgzfdqqr.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ghwdcddq.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163mmtefyfv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163lkitrcrb.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zgllwnrn.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zbupcuni.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163yjgirxcr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163jcxpmpxf.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163zwxvjlhs.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163oxndozwy.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ftskrjpx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163xsviwuzd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ivyglqdp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163collquxi.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163tveekbvg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163szxzxlhx.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163kcolfhwu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163jpxrazry.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jrsfjcqb.html

[A17] 位运算
来源：http://www.xuanzx.com/163dhrsvnnc.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cwlohvnh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163kggufdtd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dvhihtci.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gmvrygsd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iekxgokm.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yjmspbgr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bwxusuhd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bzpqteja.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ojlbowcw.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163dbsffsyn.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163kvrwrwcj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163havbsdcn.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dbsfiuxi.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163dlygxdbq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163yrtibpql.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163envdmsjt.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163gsmevzla.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163gwczuyro.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163pzeldtje.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163qgeeqrdl.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163fghrpfvb.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pdvzcmhr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ylqdjrqe.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ujqhqvlh.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163mdfgibss.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163dqyfbrhs.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163nkunvjln.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rudmayyo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163nyjafdtf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163adgbhrun.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163fosacdyi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163luedawrw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ocowtxrn.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163tsjwasnv.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163gepilyjo.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163pjljxkmo.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hwqstyke.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gohuuyhf.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zpygltol.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ztpwzcmv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uukkcjaz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163iwclbaeg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163idgiqxhn.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163fpejjlsp.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163nzzhoyry.html

Py:   len(s)
来源：http://www.sxryk.cn/163mzjdwrmn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163gwkvriik.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163xfpjxjij.html

TS:   s.length
来源：http://www.sxryk.cn/163kwwgjhlc.html

Java: s.length()
来源：http://www.sxryk.cn/163yeszxuho.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163cpwiffgf.html

Ruby: s.length
来源：http://www.sxryk.cn/163fcdeojfb.html

C#:   s.Length
来源：http://www.xuanzx.com/163hkgkxpyz.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163acisubwl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163yfozivry.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163zribxtvq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163brwvcrcs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gzluqmnb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hcvjiuxx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163zvqkdlxj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163pishyyaq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163eatmivtv.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163giotacoe.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163niivrbpt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163kqlrrsmv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dcybrwex.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uwbajeqc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163kijldkhk.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163izlbburk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ejbtysil.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cetyxazi.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163seuffxie.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kbdygcwz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tqqyhnyc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fpciyfsx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tfvktnry.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hlbzpbjc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ofyczezy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jwgfoztp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163wbrvctea.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qgezouhn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163vlvszhiy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163rqrshats.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163vfkvtqdw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163pmisjpfw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ptaxglnh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163obvtywoo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163atttoelz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163smpgfplt.html

================================================================================
来源：http://www.xuanzx.com/163kocdngil.html

B. 流程控制
来源：http://www.aibaodan.cn/163nosvutik.html

================================================================================
来源：http://www.aibaodan.cn/163ukiaheqe.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163frqztpai.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163yiaptryf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gxhmdnho.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jqkclniu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pwpvxgtp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lliwtwyy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163idntzyyb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zatidnfh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bkkegzps.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163fyafvqao.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163cutkhjfj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163kmxqnhho.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tsngzfag.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kvwrjjes.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wrrjsjnr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163cutmanyy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163svtgnres.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zresbrqi.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cfjqckxg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ruzjjjqs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163nxhvltot.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qpnuorla.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wzwuvbiv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163cpiuqykk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163mrdsboet.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163dttzrxpt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163knpsrtxc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ulnqqvdx.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jylzoqkr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163xpwolycz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qzvwpdqm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lxvovmoi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jyecnvqc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163qcgomjld.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ezpqaggz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163pyndlnwu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qfqjuyhv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ifyvpofc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163luvsoywr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fwpxhyte.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wszsbjof.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163qtbimdah.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pineefxf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hkvaqjmd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ypzgkwwt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tjdvyzji.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ckrpimyn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163sucivgej.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kivnpnay.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ekteyacs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hfqqtucu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yxltoqow.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dddeftud.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dyhrrwgr.html

[B07] while 循环
来源：http://www.xuanzx.com/163nxftryte.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ebwtniwx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163avkaefbg.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hlnlrlkg.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oilswrhl.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bpqlwmnq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hwuapxzz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163bflgaixv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163msjctmaw.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fmugryxy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xhabgnpa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xbefjhnd.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163olrehhrj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rmygzaqj.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fopregjt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163bymvdljc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163sgdfhocg.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qowlmrng.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zipicuvu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nynsakee.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163iurzkdmx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xdoarpyn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lxillkyx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cbikgitg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ppzoieko.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163uedcedlp.html


<!-- 参考信息 -->