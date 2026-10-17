外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163owsiirze.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163icmddoqv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163lynrssmn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163hcvnkagb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163auctotnb.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ztskfgsg.html

Py:   str(42)
来源：http://www.sxryk.cn/163bmiuvdxo.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163jthgblty.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163skzroyru.html

TS:   String(42)
来源：http://www.sxryk.cn/163kxghkepg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163xdketumn.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163hpgfaddl.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163mocxjnuy.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163zrykqczn.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163loprknxb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163hfarsbtr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163spvepixh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163knnoknzq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163vggdtkts.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163yzzeeios.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163itvngbqu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163doiathrv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163exiwwbqt.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163wgfjvmcf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jlvgwjkx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zfjutxii.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jvsaermr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wvejveap.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ddsrnoae.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163tfzzpmok.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163sojgftnk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163fblggbfz.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163szfitggu.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163nbfrydfy.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163yvscxwfm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163qeirnpap.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163nunuezad.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163xeayhqgy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163bjvjxnqt.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163nnjuxyjr.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163brjtnmet.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163orbjyzqx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163bngtheyf.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163awbaodlc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163arkvwbzc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pteclzlp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163naaioqyf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163wkzimbke.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163eqqsxflx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pyoyjamx.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ltoyxrwy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163dkfsrgzh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163yamjorce.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163cfqfhpml.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hoxdtvbh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163wtjvxdny.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163kmupmiyn.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163nuuvapdf.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ivitqynw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163pabkfmai.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ikicvboh.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163thplmnrw.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hvdabmlw.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yxuwtwen.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163wvssormd.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jviyetio.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163nxfjyizt.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mlthtlik.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163bexjitav.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163dgkvfpyt.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lbnoymje.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hqvcmgzo.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kpvfuerp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163sphpdrcy.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ngxddbmd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163zoazqaxm.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sadljvqw.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163seqdueof.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163bdijnscz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163twrckuzh.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163wezkjccp.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fzbixszt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163tsfxenxf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163rfwwuyyt.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163kykfihou.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163qajiflhz.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163hhsaqfsg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163hmlguubd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163joaidcdz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163izttyuur.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163jruanpzj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163mzhswbcq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163cysvqtkn.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163swunfbad.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163sirzpjfb.html

[A17] 位运算
来源：http://www.sxryk.cn/163vpkoneqp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163awivyvvj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163wnitsupj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gmaghtfc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163gogrqkhn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kcrvuqgt.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163udswkciq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wodwxslo.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zqmrrjys.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pwkcmnil.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163ilijrojd.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rrapijic.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ftjuuyem.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163oqxglcsb.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163iqfcnzoi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163sabbmjfn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163hwfvxcbx.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qjxhmjxp.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163hiuzjbzd.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163hdgwyvgs.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163himwtihn.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qyfuvssk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163dqqdsrlt.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163emfocvyb.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163bqchdwxi.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163puepdxix.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163imicjzom.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163rfziqrso.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163oblsxpuk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163nekbnpfp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163unszfvtv.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vnhipcfe.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163lrdubmyw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ooxqaitv.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163usbopptj.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163vawicgnp.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ckfssqrt.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163loqdvmnk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yukovxqs.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163kwnjkcpu.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163hnnlbfbl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mrysikth.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cfwdeirv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sjsclkpo.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163iyqvohru.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163eecyawjk.html

Py:   len(s)
来源：http://www.aibaodan.cn/163hxzffeoe.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163jbgopzpe.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163qsgfnnfp.html

TS:   s.length
来源：http://www.xuanzx.com/163fztdrmnj.html

Java: s.length()
来源：http://www.aibaodan.cn/163novkukxx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qgmdafcg.html

Ruby: s.length
来源：http://www.xuanzx.com/163wlktaera.html

C#:   s.Length
来源：http://www.xuanzx.com/163rikefvcg.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163lvbylpiw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163tgdmtxej.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163glmhccng.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kxdyvool.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gbquiwtf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ivgyaats.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163djdfdfyd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ojzwhrzf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163njvaebdt.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163busntkwa.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163adoocypc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163enetxyjc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xmpryubj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wlllbxzm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163kpqallsh.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163yheoebvt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163umlmedtl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163yqxitabq.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163dbckwfzb.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163hlqoidoy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163acqgopoj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jzdauwhx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hebjaofl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163offjrqtc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yrtbraob.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163okmdwqtw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163hfsunfqo.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163onjfeovc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ikwwxdwu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qvjrrrjw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163azsdasaw.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jkhfyvla.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wjodxesl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ahylalbw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hlltofik.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163zfksarkb.html

================================================================================
来源：http://www.sxryk.cn/163ekmuvuxh.html

B. 流程控制
来源：http://www.sxryk.cn/163krkplfkq.html

================================================================================
来源：http://www.xuanzx.com/163ojtxxadn.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163dqtoiixr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163fsvlewcu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163qfdawkeo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mkuckxao.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vpiruqbu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vuysevsz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163pbzjvhbh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163gxdxbhvy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yedeoiwe.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wlwyanbq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pwuhycfp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163vvemwery.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163asairwqf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lzusvpzh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hafqtlap.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163qrhthapi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wfbivywd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bcktgklu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163snyfgwrc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163sgrgivtg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dzktzkph.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qonryksd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bhheiilw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mtqcvjny.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163dpnbbvop.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mkjhkwbn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163lxeiayjy.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163thlkwuwr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163afiuxgmo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rjzmbvsm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gwqsqcim.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163picbhbqx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163rgwjndcs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163tnqrvvde.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163dzqvnzcn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163allylrmq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163skygglfl.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ixiobhkq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163vpzweuxy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qxactzal.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mqehhhzj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163msrcmrhi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163koagmxod.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mwpiskgo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ovsrnevx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163jexifaon.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163suqpkifx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163whaaqcuf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dngfadtd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bsebznwl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fcdtsvqe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163joqyxalf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ajvzpqnq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vlybafmg.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ziispoec.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qkloxyji.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rqkjpyre.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dsidlqpz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jakurawx.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jmcfmgxx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fkcnrmrd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163usmudrgz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ugrwdnco.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gwvqwpsn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hjjopfmy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hopkwhht.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wnwxcand.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dwzxrggu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mubrhlcp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163bucihuvn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163juelwuem.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163guhbqgcq.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163eejjgvmw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163iblyfkyk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163edvpfhzp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qjnakkze.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163squwvhds.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zhesroos.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qbdhgkrz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gcyiympr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lkmhypnv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rpruvbid.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163aelpobzr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163xtpgyqbf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ikgtphez.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163nghxphhh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lflwttjt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dqhsdlnf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163srmzigoq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163fmrewzka.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zcndzvmx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163pybxgetj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163cnhvhyyd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dwqkbnkl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rucqtuig.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wslrasjg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163cppmywyt.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jgozolfb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jrsphvkp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163orahclgf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ziuyszhv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fzqtqbax.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pbigkqrt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fymhjilt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163amwbrhct.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rnjixxmk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ncqhtlhc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mkmqftpk.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wcxxixvs.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163cxdxyqcd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vjoflbno.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ybuvrtkq.html


<!-- 参考信息 -->