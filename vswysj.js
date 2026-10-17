外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163zixuvcfk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163eykgztag.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163jpmdpugn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163whtnvaea.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163hnuyjgom.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lawksbfw.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163zelbvepo.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ysmfgskd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ilucljwm.html

[A03] 常量定义
来源：http://www.xuanzx.com/163kjgogfld.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163uptywbrj.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163uamwrzsv.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163cphnpbbw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163gyojuyhl.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163glsfhlsk.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ktpggraf.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163opdsbuur.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163bcqjwwgs.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163dkbknmhx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163vsmgmlnb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163wnrgmfci.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163mkvdfwcg.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163xrotqwhv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163idrulixy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163disfwunp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163sahsmonl.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ujkludyc.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163rwtmhfuj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tgycfpdl.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ycyerlcj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163leuqlkri.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163mzihikmd.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163tnbmqccp.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pynszejh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163akhefcjq.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163azlmniei.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163vvcragri.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163tjhrpnug.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163deerfzzs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163sxfcjjmk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163gdgjptmq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163atwpupzd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163zbayafqm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163qkczjsgh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163gaqmkzqt.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163tbpoluep.html

Py:   str(42)
来源：http://www.xuanzx.com/163juaddthq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163kqldpdoo.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ocynwusk.html

TS:   String(42)
来源：http://www.xuanzx.com/163aqlbmgkj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163svzzolps.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163eptermfy.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163pkigtozq.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xwyzswrr.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163mjajvcuj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163qrcxdish.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163vgcukdsy.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163hupdtudo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163sggcynrk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163fetyykxs.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163izeagvsf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163madfeukn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163tqmgdsvx.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163rjrrqrlj.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163belinejd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tsmnrlxy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ngbkoeqv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163comnknfg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163hitagrkh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163wzbwlmvo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163hhbusung.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163sgwjacvg.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163daexfkxx.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163gcpsfrci.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163icuwdhlw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163bkqsiphj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163hycovsji.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163dmgqsmfl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163yxszbwpa.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163wfakylxl.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163gwslesao.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163sbrtxind.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163yymnieaw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fxnsyrzw.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163afqjqwyx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163epyjtets.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163omanzayu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163vuevkkix.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163obycwpku.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jtzccfcm.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163nhsixwaf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163tplztnfp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163guwnacew.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163oellbxcs.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bprptvkv.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163czgmgpzr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163gmsgvofn.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163mczdhman.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163tspvcnkm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dvfbkwgx.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mvdtylle.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163gwmwihve.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hdqgzpwc.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lyevmwiu.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163svpjdsxu.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hxganjqd.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163yxsbnutp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163onumrtgp.html

[A14] 注释写法
来源：http://www.xuanzx.com/163xixlmzte.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163qkeortai.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jeglqioj.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mhuhvdrf.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kqumcird.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163zaanthfs.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163seuobfjj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163arnnctxn.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jqcjdklx.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163psfjhfdf.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163cnmbuuht.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163jjmzslya.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zsbnxuoo.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163wihwbnxt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163rvvykmxf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163nmsghrfl.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ffehekpc.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163uwxzpvgv.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163shznwkui.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163choyxlay.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163csgfnmqt.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163llcovbvd.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163kvxvlnnh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ccujszhv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163uzbqfitq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163qrfdorvh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163horbbrrr.html

[A17] 位运算
来源：http://www.sxryk.cn/163aiznxzxp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dolrscax.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163udaiinvy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wuucxqgj.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jmzrapmb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lawoupye.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qzihfiww.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ynyuzgdq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163umzrojhb.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163cktpdtnh.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163fipsstta.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163vycakarw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163vgochtdn.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163lmibwehf.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163rjgjkpxm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163hzsoktyu.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163xorblzjt.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vixrleby.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ogbsxrdf.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163oaodunbf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163rvrgteae.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gyaccehy.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ivtlbmzr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163oxqxdlur.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ddlnulut.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vzafkaaw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163srlrdagh.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163fzhibgzc.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hxgwowir.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163xztftzdx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163zssxlbuv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163bboeejnl.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163gjfwkwhz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163vkphwoth.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ayjxrpdw.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163jibfauak.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ivfjpdbw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163vhbrsviw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pcotnmpj.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pdkudtmg.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yyomqfdg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wcdupece.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zhptyayi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ebaavold.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tdtutmve.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ojqgptvu.html

Py:   len(s)
来源：http://www.sxryk.cn/163mlodddfs.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163jgksrrsb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163shzzmbrx.html

TS:   s.length
来源：http://www.xuanzx.com/163vfdnfbzx.html

Java: s.length()
来源：http://www.sxryk.cn/163fzcilhav.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163xyltarhr.html

Ruby: s.length
来源：http://www.aibaodan.cn/163tidhdgbb.html

C#:   s.Length
来源：http://www.xuanzx.com/163dlwbajwr.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163sfadhzrq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ipkeslzl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163urpqueff.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gtrqveeb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rgfksqzs.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uewbtqse.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163miumnthp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163kyiadpsi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gitskfwl.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qturxtjd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kmjavwgn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163xkkgmywm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dblgecgg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qambwnce.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ppfqmvia.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163sglqowit.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ljrbpijw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163znhpjeth.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163wpkeqtks.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qcdazapw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163dlevbwgf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fugiitge.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163yyujjqcu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163pxcfuwwj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163suqudsgd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163hljrlcmb.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163mdpgklbo.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163rhbftdoh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163rjutnzef.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163kpdhcvay.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163figjqvgk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163uodcrflz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163lzqimqfj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gkvsvqya.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163wcabhtww.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163tifldeqz.html

================================================================================
来源：http://www.sxryk.cn/163zuugsqkf.html

B. 流程控制
来源：http://www.aibaodan.cn/163syxennqs.html

================================================================================
来源：http://www.sxryk.cn/163syuipvov.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163djxquknw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163spszjdbs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163iqakmbny.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163azpycnhx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163elhmxywn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rsllidym.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163iciupzmh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163myjolgvn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163krwqxzjv.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163msavmtyt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xqtllahc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163hqcvmyfj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mdboelsr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zmapmmrs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mpdmwpox.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163tbuheflr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ieyjkmzl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pkqzdueb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ladfyude.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163wfyhyhxe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163trcgcjxd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fdkfrllz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ecxrfiuh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163vcqafzcx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hlolezfd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rqwxtymu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ojdopihn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163hiauaoyg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xcnfgoob.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163shvfhtlg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yzitkdcl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dreykddw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163njrrhpfg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ijjwmaef.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163chisrwig.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163wuxukiwz.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pjcionku.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163dwxwhbfv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gliefvor.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hmhsxjvk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nzsuofjz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ugvlofkm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163cgjnqpab.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163yxzdjunq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163midolrwz.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zeljgwsb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163miowwpvz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mrviexvd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163otltfevr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qzhtplro.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fnxxfxlh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163lmikooij.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163wtsnykgg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ifyltxun.html

[B07] while 循环
来源：http://www.aibaodan.cn/163wmqzvpuv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tjkibhjl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163uatmncpl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163chzrgpqk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mmarqzbd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yerjxpwe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163hvgcwigy.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163snimphpe.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qgujkiup.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xorgqmim.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lpbidljl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163agruyqsn.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163skjfduuy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iwcbphde.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vsvzbjsr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163trarlsvp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163rfngiykw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yjjgvsud.html


<!-- 参考信息 -->