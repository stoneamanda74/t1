外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163dtbqyyky.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163bwbqlhdn.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ygbrfcsx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163atiiuikh.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163jwuqktti.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163iyplhbpo.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163bwkpuzch.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163bocmcfuc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163nsfviste.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163jilotltu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ujphomxd.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wzcgtqsj.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bdoxqpds.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yxiqoefl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vmhhrnjl.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xdlkvpxa.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ctnnxpas.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cdmuwccy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163gpgrqqhv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163vblicnht.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163xogiehey.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163brdtzsvh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163trdelugv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163pceyfttw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163pkjhacbx.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qjyiosig.html

Py:   str(42)
来源：http://www.aibaodan.cn/163bdttkhwp.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163waujzyhl.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163jyosjudk.html

TS:   String(42)
来源：http://www.sxryk.cn/163wscfxoqt.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163odkycdyl.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163thvhlfqz.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163vvhfgoam.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163mfvxemeu.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163hsifbull.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163egldigxz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ibhgizin.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163bahgzqgd.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163nshymyzk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163nyhvblef.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163veayuvsu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163cfrkvdid.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163kpxdihla.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163oucbeicf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163hygqhybm.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bqxgreej.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163jlfqnisk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163xxlvmkqt.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163iztctppx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163wpyeeufv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163tweoxabe.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163nxatluni.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163jqsupvgf.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163aqiszagt.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163dufaqmix.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163pniitkoo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163sqgdljfy.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163mbdpngso.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163bocpzusq.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163fbmbmlmt.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163cibvkmjv.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163tlnjbapy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163jjuidxoc.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tpylioao.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rycdyxzt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xviyjvcy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qniwftdx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163wcqazqij.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mekiydjb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kwxdnuoz.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163dgweklek.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163vfizdoli.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163xeigutgx.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lyoebpmp.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xucefigy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163tsivjjgp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163pjlhfpmd.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163oodzsklw.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jmzcmdsl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163bhkwtwxe.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dngketre.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163wikyvkfm.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hjxrheql.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cyaxabes.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163immurcic.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ntwgzwxa.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163tyeqhzzn.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ddhireaq.html

[A14] 注释写法
来源：http://www.xuanzx.com/163faetiskm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163gixmfdmg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163brhpalur.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hcpxcjwu.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bksucokz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163sqqloitz.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nzvxosjj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ssklnwor.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gxunanmy.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ncsdbrdk.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163kdkvukqi.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163mukcvqhd.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163cjiilbfy.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bslmoljr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163prsblxbj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163pwfdtsgt.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163fezxkimv.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163zcftaisu.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cayesaxw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163hspvhwga.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163yacqpfuu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163xpuzpcnu.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ticqvzst.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163jqmrwgxq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163cqfomjqj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163fodatnga.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163txivwdvn.html

[A17] 位运算
来源：http://www.aibaodan.cn/163bktqimyb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qcgdcgki.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163jmmcdpri.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tcvabhwc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ijoxgrdf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sitaerqc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uzrpurfm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rsdmftse.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kzyjgssm.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163mqgwstrh.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zqqecayg.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163hyvekwhf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163uzgaypxu.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163iwwhfmrr.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ikxclvmk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163usqrkway.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ftqwmztz.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163zvebybws.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163fwwinfcw.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163dusuyxrl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163krmmdowo.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163sjnnnauc.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163emhydxfl.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163uoalvldf.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rymznhev.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163btkxfmfv.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163jfxkffgx.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163nfmnqiud.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163kybvkmcx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163fmgihney.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163jmfatawh.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163lhncuawu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163gcsihboe.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163bujqkvsi.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163gwogxtaj.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163uavejuio.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163rpxrbilk.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ymhnbxfx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rvnsrsgt.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163uczhyzyr.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pksztzwd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ybrlvppu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qasvybfq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nrvyjbvh.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163nhjwcpfz.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163vmfffdzw.html

Py:   len(s)
来源：http://www.sxryk.cn/163vmmnxuht.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ugzcqjtg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163dvnzsxcm.html

TS:   s.length
来源：http://www.sxryk.cn/163cqceewmo.html

Java: s.length()
来源：http://www.aibaodan.cn/163jmutcqxl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163gehkzkyd.html

Ruby: s.length
来源：http://www.sxryk.cn/163vzlxwmta.html

C#:   s.Length
来源：http://www.xuanzx.com/163avoljtdv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fboldcot.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163rqqfvbhq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163mumcpujo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wkmdlfvd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gohnjqxc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163clyrluia.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ubhweuok.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163yjqiyryx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163pnpbkxyy.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163dcrglagm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ffbwzmen.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163orrzabni.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fehiglwg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163eqbmhwok.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163npaoxsyl.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xojcxkvq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163geglismr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cevtarbq.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163pygffwqu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163yimkokiz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ozjihwzm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163aclkgpwc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zttixcdh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dsyvrdoq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163gaqcoolj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163dskezgig.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163izifxpee.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163sxdxkoyu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fxfjvbjf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pjpullpj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163fsdygtax.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163fxwzizyr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zyijjqvg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163etmpmhex.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163hakzyicl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163fmcmagqp.html

================================================================================
来源：http://www.sxryk.cn/163txydzivr.html

B. 流程控制
来源：http://www.aibaodan.cn/163evrpkqmm.html

================================================================================
来源：http://www.aibaodan.cn/163yaonnvdv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163winflxah.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pmiaytye.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163iyhusjgu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mewvddol.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ubcgnnkn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163swmahgre.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163mlhhmtoh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ekbvklry.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vuzthdsj.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163kyqzcavb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ezzmutfj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ozgqnysq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rmrwdqis.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qffqqzrn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fasekxjb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163nwuybdxw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163unirsgov.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163reusdhlb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163prtniozp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163oshypatq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163oknrdrnw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mskmlpoh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wmdfdosr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163sntfkmqt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kdbtnbbc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163mpstnnnu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163dbibozsq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163yfvuyeeg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kgtwrwbs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163yuyotruz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hbobsohd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163irnxkbaa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163twzvjtml.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mbmvdwfe.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163psmjcicj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vpnvrkzl.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mukkugst.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kqvouctw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163nltmtukr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163brpijazf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rpdrrinq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163utqtncvp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163uxnttqpl.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163lmuryyce.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qnnljfkl.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tukedale.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163larlxwbx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163jigndxlq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yovtpzjj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163spxstmev.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163mwhulpct.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mhcmmqdx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163fajcenrb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ptlhcrka.html

[B07] while 循环
来源：http://www.sxryk.cn/163nfkaksvy.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163kpnhylfl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163dvckeqvn.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lzysiwcl.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fasivzbi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ejdeqjop.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ugpibkgr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fqxftixv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jnxlbavq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ozclcgtq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163yvlvztsd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163oxilfazh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fohwqagd.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ivhzaxoh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cauflbgz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vhoryyfa.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163holwflyb.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rmucuhay.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163iquxoqwe.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163negrjauu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bltzjmxw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tvhqoqtw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tponflzo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tzfclzyx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ojfqldtl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163kxpkitjj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163glwolznk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163kvlomqet.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163icnuipjx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qhzpvjfd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xeshrdoi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zzkkfypg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163corrlzrg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rfphujfa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rlwnlcjw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163kxzkptxz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163idvkfbok.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dukynxpl.html


<!-- 参考信息 -->