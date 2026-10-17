外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163xnkkvnxl.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163mjfyzcml.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163utocrfuy.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zjzylscj.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163zmkbfokf.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163tgsatebp.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163hlvrrtyv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163evszsffs.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163duetqcbg.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163klmflsrk.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163furepakk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163cgdrvyqq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163chyevpcf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ldrtrgxg.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163bycfhatd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163sddigvjk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163efvoyrvg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163nztkzijg.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163pjwpvjwo.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163cmhjlzrp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163sivxzgym.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163cglqpyyw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ggvqesjb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163pspsujrv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rhnajifz.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nctifpri.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mbrbhjey.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163riwvpwap.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163pirhirhw.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163bhoactnz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163xvewmylr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163icwdjrlc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163frbkadzf.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163kchguilc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163pmhsoxqh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163hgnjfzqj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163kjiilqst.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163nutnbkjh.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hbhfrrgz.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163nuhzwoyz.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163sgquxjnp.html

TS:   String(42)
来源：http://www.sxryk.cn/163pnczlcdr.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163iwuypcub.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163rmjgtwvx.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163walwhiug.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163vsycdabp.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163usbiypqs.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ctppadfi.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163yqfwphdv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ubpzxpjs.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163sniiliep.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163uakckqmk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163nkaouysy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163kbtojzwj.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163uxivippo.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163yqjekvwj.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163dkxtgbur.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163zjqgpzuz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163iiebcmwo.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163arlvqdpl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wdmpzigw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163yymynfgl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163qsfrasuk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163nrqussgx.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163wxpldvdl.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163twzqzrhv.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163fmwiwqmy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163mynaaiad.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gylfxcvo.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163sggnzwta.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163kcfmoipv.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163lngwoqfi.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163diccmcmb.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163iniyjmih.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163zhmbmjua.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pbenrfxc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hmkquhof.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163feacwyyg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tnmdsbti.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163rybtqwfn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wimwhatw.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dxnvyyqv.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163nrtxidde.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163yhyrqfpd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163vejzssmm.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163cyykimha.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163kuulszob.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163agnldnyk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163romsbltt.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163njeoasbt.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163yrdjwzgj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163mvcktuhq.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uhipinlf.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163qyixupzf.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163adksdyzr.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163olzojdtl.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163wxtxswjy.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iqzbnchv.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163tvbfvufg.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jfgqwtrz.html

[A14] 注释写法
来源：http://www.xuanzx.com/163zjsajass.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163uppnevus.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163tkfdrrkp.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163exjyhpii.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163fhgucqcj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163vowjdzkh.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rvxyoqdy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163vqszeggt.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163oeyhgkys.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163edqmfinx.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163qbpdpyca.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163gqxuwvmc.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ttalhuqe.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163qwnftnfn.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163zljqsqak.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163nxwllopf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163clbnudzy.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163jdezwtsc.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cziwapph.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163agtwhjtl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163hegydwll.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163wevsinku.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163dapduaiv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163lgkjqrbo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163jkbjxbll.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163tczlcijf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163mndkqugp.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ynggypsq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wijyuvbz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163unxdowjr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zctojtuu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163iqrajkiq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163chapcsos.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jtclxdbl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lnyinfnx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tepccovi.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163sscbcbad.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jdnzoizv.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ftwgnozg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163avxjzmtp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ahqxhrpk.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163wsemskyq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163oooeskcq.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163obfhjisi.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163kjpyvxug.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163izjozfwv.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163uvrckzhu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zcwacuvl.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163urgtchqo.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163cpsphauh.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163crxdmcun.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163gqgpxgvq.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fkvkvqjc.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163bwalqmzx.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163xlihazlw.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ssgkgxzv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163mxkvigxj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163mvnhitzl.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163aqacgeim.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163btwobbzi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hipaqphv.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163npcifyej.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163sqaqhskx.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163jeltzetx.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163oaeauoze.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uyvqavfe.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163abvqcxet.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wgzmspbb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nyvsvbzf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fbufyqfe.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ofouchtv.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163idgwkwwb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163qireptqj.html

Py:   len(s)
来源：http://www.sxryk.cn/163ddszzwvl.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163nlghgfao.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163otiibmqz.html

TS:   s.length
来源：http://www.xuanzx.com/163soxgehdx.html

Java: s.length()
来源：http://www.xuanzx.com/163niexwtqg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163mgecvdqt.html

Ruby: s.length
来源：http://www.sxryk.cn/163yrgzcjtl.html

C#:   s.Length
来源：http://www.xuanzx.com/163vraofflo.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hvflrbwn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163osmyvgyl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163epddontc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hnyekbjk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163htgdrqeo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mynsltuz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163gneuqzpe.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163qyypibnf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gyszuoma.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163tkvuchfu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163sroekdjw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163aennkdvs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vdyinxwl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hqiavbgy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163rzvexezc.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ovjikkrf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hljbezfu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163fhenytib.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163lctgorxy.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hlcfwtye.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163rlxoayei.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vhpiwlir.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wuddjemg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ttawcnfe.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zshsharp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163vouxizsv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163claznuvx.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163mnszplga.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xqvvlxah.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163pgprlbdk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163vdbmfgpk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ctuqtqep.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163aeiwosnk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163jurnpsed.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163psucxjxe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163tgetyuzj.html

================================================================================
来源：http://www.sxryk.cn/163wdudhdgn.html

B. 流程控制
来源：http://www.sxryk.cn/163aqogeaww.html

================================================================================
来源：http://www.xuanzx.com/163yczfnchq.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ttaiiudb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163gabinndk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tkwppmqo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ywltwgdn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163grduznqi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yjdzgics.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163cqaqvdts.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163pjmrlgbz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dshwtjhe.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163zqdgxgwn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163okvssjwv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hjfgdhmy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rbrjqcum.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163npackpyk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oowhlqpo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mfvastcw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163lkiynrlo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qmsjfsli.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163dtqxozeu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qjzjavtg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163jxijdchl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rrggutsv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gpdqkfhf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ppjerint.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163kljyfrqe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ahroxcux.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163airvgjmz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163cgbvhucz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xcmfnpot.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163syrjrhcq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ulrdlhsj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vshctzyy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163skgiinyu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163veqkxdhg.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163azzktzsb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rhucvudb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163roagfeps.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pewgfizk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163zdyriaci.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rmwkcave.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ndkcdpds.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163xxrqbvlc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163alqjsnyj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163eepwcqvt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zuvxmclo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163cphtjews.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xscgqcoj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hpukhgjl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ifwtpxut.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fhjekxtz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qhdffxht.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ebvzcaqn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163yavmxejh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163otrcapxd.html

[B07] while 循环
来源：http://www.sxryk.cn/163ktxncmkd.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ldporlao.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163itmxlojb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vydparjs.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163erywvauj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sjfhykte.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163uucvdtrm.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163emcxbfnm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xvppfazt.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163udlfebku.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ieoorotq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ffbbroro.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vyryntdy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ilpfqxjo.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kefybevk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lvdjvaya.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163feorkegx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uolpsdqx.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dupbtfnu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qrcskkcw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163negkfeda.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163glsvqskg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qsjimcvg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dijmoffh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163reszljgr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ykrvicon.html


<!-- 参考信息 -->