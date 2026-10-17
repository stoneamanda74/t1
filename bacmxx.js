外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163fvpsgwyx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163wqruroze.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163upgvmplp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163rkvgmxte.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163wagckeox.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163rvfvexxx.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163dynmnksi.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163oqchmhsq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ynzxzsky.html

[A03] 常量定义
来源：http://www.sxryk.cn/163gtnxzjrz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163lsxrgzof.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163gyphstjl.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163xgpevihm.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163lptfkvyc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163vivepqjz.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163vyyjpnsz.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ungyqeeo.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163cexwcwed.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163nuqjznfu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163jmewwkgj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ufosvxzx.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163aclkkzse.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163iqfwfcmz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163orujoluv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163fwrwmoil.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163tcznpziz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163grvqwcqv.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163fuqgfnlk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163uyvltgxd.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163kbwwoumf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163iwrtokao.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ovkinsoj.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163yrbywyxm.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zgmikkjq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dwtdcxyt.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zbivremr.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163bbzlhosy.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163nmxrlyjh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163kmtztkvm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163wrwsksso.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163cnkahjoa.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163gbtewjhv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163fttauewu.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163wuwjclhg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163jmrvkrgs.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163osnyoddz.html

Py:   str(42)
来源：http://www.xuanzx.com/163vdppbgoc.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163euvbrdbp.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163oypfwign.html

TS:   String(42)
来源：http://www.xuanzx.com/163nsoctgxn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ufvootqo.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163wzgzpuqm.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163fkvcjlal.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pwbhtjpj.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163cjsjjnyj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163uvevagsa.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163uowozmib.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163saeguggm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163diimelvl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163nndcrfpv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163hzycvfbw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163xdbvocxd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163qmwnxlok.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163wrhqwdoo.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ieutviak.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163tugetaxq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ryyfqale.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nijrxfvs.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163bpufjcrw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163jtjydrok.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163jemcjatz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163xhdgkqvl.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163axnwkerc.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163kmkapihb.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163vphqdfjc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163attuotmv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163olkgmzpo.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163lxsqdhdx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163zyshpizr.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163detpcjny.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163kvoxpmop.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163vwgdphkz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163frqqgkuw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lailbwjw.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mtbbpbde.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ukfdblup.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zhollagt.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163aagqttsu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gyuqcgcn.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dczdahun.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163mahmeqdy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jnkslvbi.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ckhokqzq.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mkzpdqbg.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163tbcyymlb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163kibrwrgs.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163retwmasb.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ezpgjinl.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163qwebamxz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163pswnxkwj.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ljypwwsh.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163iaqiictz.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lcoeikus.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uyafofdh.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ivbzkttd.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163coknmpra.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163wgrjueks.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wqiscigr.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163xfguknvk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163sfgrnprj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163dqqnhdnt.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ssyjyjur.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pfphdsdv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163jgjuthot.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jfmhtevm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163tbfkqyzy.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xegfsalb.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ceoetjeg.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163oothcwjb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163npcbiccx.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ahamnfpm.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163djcqsxpq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163hmzdjylx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163snsxzesc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163mmtfvotn.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163phlcubqp.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ppoonjhk.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163nsifujub.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163zemxshsp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163micrvofn.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ojdqhrhg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163plyysvpt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163gchuvnkp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rrdevgks.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163qiiztujo.html

[A17] 位运算
来源：http://www.xuanzx.com/163ptvecmji.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rjpqlgxt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163zuejfgfy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lfmanjrh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ktrxlcbg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163prumchnd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163smsmzuyo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fvkgfjoz.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bpjoqsxl.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ntveclku.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163kufakhuu.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zsmqlcro.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qjgxabpy.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mhlknisu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163uyxtnrcx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163stabkcxc.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163hmfoozpy.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163vgipgbzl.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163qmztlalx.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163shvpeukz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163rrggxciw.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163oycemglv.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163dwfbqosu.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163nqdihiva.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163pizfxoqc.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163zggznwze.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ftvgjjxi.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163rwvinsdd.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163pxbijorz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163hgaprxnj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163oebjacqb.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yqgaljlp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163pygiedhf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163nwnpcgdf.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jfgtlcpc.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163dfptylrx.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163zxxegdzn.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163nynrwbhc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gtodittv.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fxmwwzcg.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cvilxbgf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mzupghjt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ztozixoy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mrgbyelv.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163mkcmmkly.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ybathvjv.html

Py:   len(s)
来源：http://www.xuanzx.com/163iuixvslc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163hmhbargt.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163glergftg.html

TS:   s.length
来源：http://www.aibaodan.cn/163seechjmt.html

Java: s.length()
来源：http://www.aibaodan.cn/163clglweew.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163lfkvpcgl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163hhdfybid.html

C#:   s.Length
来源：http://www.xuanzx.com/163bchlhqtz.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163serhvejz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163rqkjwjit.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xorduaoj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jftgimzo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bmadjhny.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163behviggc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163qhpwbobx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ntspygrw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163umtshhfm.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hkrpvxrv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163hdfsccvw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163hlovgjch.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wwcmcvqg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tvmmldqw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163gwxnllim.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163pcbiefep.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hqinkgcd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163pgdxjuxv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163aincvpzw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ysirxpdj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xjfempuv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qddwmedx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ltuxeuki.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163kpbnavfs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163brdwaxet.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xvznthjn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163toyvmrfq.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qnorkkuf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163yohmxnbg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163igfplffv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163lrrhukrf.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163oikgezuq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qxullwtl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163lexptwxq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163svesfusi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jqydoyja.html

================================================================================
来源：http://www.xuanzx.com/163shrmhvqj.html

B. 流程控制
来源：http://www.sxryk.cn/163amiobwjl.html

================================================================================
来源：http://www.aibaodan.cn/163nsaxoops.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ezrinoiw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163svlcjxuc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ujbigwbp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163onvvyqxw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163emacdzco.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uehgutay.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ukwczxhk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163pvvzcqzx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uxqnskre.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163qajawbgk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163nskimuaw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wfbpywiv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163couegtfz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vvukujpy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jkwbwkqs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163exeymrtp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163fsfpfmcp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pycuneii.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163rktnrpgy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163brnyqkza.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163mhkqggdt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pssxelap.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mjioaptq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zvdlwxzn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163hufyiamc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wwpqdnip.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163vuchkmyn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163uzaexbrp.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vihfwszc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rhtasjuo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163luomtapd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mdlxnrus.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ltwcmivy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wvzfszis.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163iklcsqxe.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163icmwfkrr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jztouizg.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163uaqgcukr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vqdmkuxr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gwzetkoc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163pnoqljue.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163mnlkmvmv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gbrnccdk.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163tkvppvdt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rpxopqle.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fccrmjjs.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bkdewwdp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163fplfayjx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dkonbxhj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vgzbdyoa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163uxmicywl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vnbyjqds.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dtirmzzs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163judupxda.html

[B07] while 循环
来源：http://www.xuanzx.com/163ygocwiuz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zbndhfhn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rinkmsvk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yymtfuww.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rmqmmctb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ohcfioiv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163kzunehbx.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jtxoynbc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rzsslfqt.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xubxzvck.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zzxitbiy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163uhjmhcxc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dsjhqwjf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163awpniicd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lngfiawb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163kogldiwx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hwlefzia.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rndftlwt.html


<!-- 参考信息 -->