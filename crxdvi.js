外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163lqjnwvfa.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163pvtliuhd.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163uabwiyhe.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163prdxtaay.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163brcfkxzi.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ptmnxkch.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ucqrumop.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163cnvtvdru.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163chbptoch.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163qteoufzv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163weuzhjrs.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vswzuoqd.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bycjucrx.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lhaeokrt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jinghtqf.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vwaesoyi.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163jufukpeo.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jlvzejwi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163iveyvrab.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163dppgqqoe.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163hkhejgxx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163gzvluaoz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163iitynzog.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163behvokhm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ifiwzpyi.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163xswqhthq.html

Py:   str(42)
来源：http://www.aibaodan.cn/163uglvbesm.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163rwpgdhcm.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163wkmxvlqk.html

TS:   String(42)
来源：http://www.xuanzx.com/163rkwguygu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163xgjwzmqf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163civgvlyn.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163sikgssml.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163hwqdnbej.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163wusbuilz.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163puiiwege.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163sdegfuip.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163eignzfqi.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163nexpmonz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ohbjffbt.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163lpdsvpme.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163qdiefvse.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163gphicnvl.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fdyktytk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163thbfrptp.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jutjcrjh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163mmiquorc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163yuwvimoc.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gtwtxkos.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163jygyehyw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vcracjbi.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ikfgfqnh.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163auwlhdvt.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163pmmgrvdk.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163asjseuux.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xxcyrsvz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lvwxsomb.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163ozkvbjdu.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163yjgxajiy.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163jyticzqv.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ocxnjyuz.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163rnziqnbs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163laxivamx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gkoddsjn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tyjgnvxb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163znomlmkz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nimnnzks.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163wjoaadkl.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xnyekefu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wjaolizb.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163frcforrt.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163qldvocla.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163qlptcfye.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zawqfeen.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163nntvglmr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163jgpegrjk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163uhtapdzo.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163macrvhxd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163awmqafqs.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ohhvycph.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fvffvjrc.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163joibnidj.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zyixpeij.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gvmljfnn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163pywbvkxu.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ielgazdu.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163dontbhhw.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tunammws.html

[A14] 注释写法
来源：http://www.xuanzx.com/163jssbbmkj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163uzyhthbe.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163itufgtaq.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163oduhnrap.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vkeyecow.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163jlwjzqkf.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kwlpqmuv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163upveawtl.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ujhczipd.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163izdjwpvx.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163quqrvzev.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163tsqbsyod.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bexghlfm.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bgxcunfl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163saoqmltl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163viyyhslt.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163iosgdcad.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163pcpktmdf.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163gwmixjml.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vigfaxww.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163fjcpiyvm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hyjdakan.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163xtsasaql.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163hnlfgsmm.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ppwfedjr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163hbpiasah.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ifmjdllk.html

[A17] 位运算
来源：http://www.aibaodan.cn/163pmgedqge.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163inbftxxw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163jhyrherl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ftlehfjf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163qqushxoq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pefmpqkt.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uimhiwqp.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163szybjerx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vopmrjrh.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163eewznlsj.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163hjrtqggj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xolxifmf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163emknwjmj.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163llkcvhne.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163xmolocar.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163zmumaqex.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163hdayhwci.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163hiswzqtn.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wcdmfclh.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163rqhhdkkb.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ogohgbfk.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163wqyrfsnn.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163biyspdku.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163cjtruziw.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163fsrjiczk.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163dcjettot.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163cbqnngtr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163vkfqmmmr.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163gzzrwohb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wkqrigpx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163vmfeslnn.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ndsjjxrh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163xwhhezxi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163qfegafjw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163eltaekqu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163bvdfakfo.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ivrsusap.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163thuojqif.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ljeasfdu.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vlnrowmd.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vysjgkrs.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ynqvcfiv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ybxiiwxa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zcfjngii.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cwqzzfds.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163afsyoykd.html

Py:   len(s)
来源：http://www.sxryk.cn/163gcvrcoek.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163lycbirfl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163suzhehxz.html

TS:   s.length
来源：http://www.aibaodan.cn/163jekgzlqv.html

Java: s.length()
来源：http://www.aibaodan.cn/163fkkhklut.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zuvvtbne.html

Ruby: s.length
来源：http://www.xuanzx.com/163vgnetqau.html

C#:   s.Length
来源：http://www.aibaodan.cn/163yulkguuz.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163wmmdvypn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xxmdxcih.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163mysjgghj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pgtczamp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hibvvmhu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xeeeskvm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163rjwvzchd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zhnrqpwn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163fqbmeyfv.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163jixzqcpl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163neumxacc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ekyyamkq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gyfvfguc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tpmwvclf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ovpepxtp.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163sdagojjt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hcpqtzbz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163zhhgpray.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163aqbazkpj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ietvszsg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163munxprpg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ryjhnqwb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163qlnnuual.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163zedywdmi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163idfyanmr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163jtocvitt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163pawcsaek.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163jctdlija.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163mxwcdbbt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163kjdmoddq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xibimqsj.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fbywdbyt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163tblpdome.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163bywpvsgs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163kjvennwv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qtilgycs.html

================================================================================
来源：http://www.sxryk.cn/163apjgddsa.html

B. 流程控制
来源：http://www.xuanzx.com/163ukdlioiu.html

================================================================================
来源：http://www.aibaodan.cn/163ltfspxzt.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163jbytnhfe.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jwynlffc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163hfxrjajr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fmmahcpz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tdztstbd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kxrxwhhb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163qzpyrndf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uoxkqoak.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hchbxmhr.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163kpyhenwl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163dzaqbeqy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163qpwwvwhf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zrdilbqi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lfffnigl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kudzothg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dlvmuovw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163bqcsuiut.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hutzmiru.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kesdfquy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163icblzgja.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163arvusrfx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oatztfcc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mbxynzkn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xxtcrqad.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163aqexuyij.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jhawpoxt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163eptxjawp.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cjzudpvo.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kpekucvt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163plavatkh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tmomypdn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lhdhpzbt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163jsijixsg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zrlsamze.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163udbgzllh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vetzzpdo.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163quuqpzoy.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ycxvibet.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ozzrwxqy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fwrunmwv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fmlbrdka.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tfvpetxn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163dvusuchq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wfovvuhq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hrzpgygp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163nlukzvep.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vvvqxpzm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163oyykamvq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163upczeiko.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bwthbqfi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hguxizbi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163sdlhjtor.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163aedotvaa.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163rlgpbmxb.html

[B07] while 循环
来源：http://www.xuanzx.com/163vtgpmypa.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yikcbujd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ybmqkhkr.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cagwjsne.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lvwbbglk.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163adcfmhrz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163pfuowzlr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tvlcdlvp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tlvagqqk.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163jytbvwnh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163pgwacgba.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163yafpoijc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vecuuluk.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xowmcobu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163udyubemx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nfozhibp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163kfxpvklr.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bcpyjrbw.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163btyzkgbq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cqkcvqhr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163svrjjihk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163scsctlfh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nwdkbymu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eskcntnj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qaqchccx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163mjtutzlo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163onxyadqi.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jdrgkmzw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163fkooziss.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jujcxpcc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kdomugrf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163camufrsq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163necjrffj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dudscwcg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163svxrwzjs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xwbyedcc.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ftcedkjx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163stqmyces.html


<!-- 参考信息 -->