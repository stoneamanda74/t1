外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163woshfhpw.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163pflkdvop.html

Py:   str(42)
来源：http://www.aibaodan.cn/163pyggcioc.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163einechyb.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163nqywxyew.html

TS:   String(42)
来源：http://www.sxryk.cn/163soplcrpl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163syhumbby.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163fcvdgbjs.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163kpxlzuzo.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ocampqiy.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163mbmblsjb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163agzvhmzk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163jszqocqh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163luqghssp.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163cloqkjlw.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163bnirxmjz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163xsadouqx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163ifejhpbj.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163phygqzti.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163oegpugxb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ficfmqdq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163znginawd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163wxqedmir.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ptxjyeub.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163oxpaxkdc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163wotlqtuc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163iiaubntn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163cxkboaog.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163zzaiarhm.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163rnbmmjuo.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163xckhnlgv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163oreypihy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163nhxievre.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163zeyifzpa.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163udrjibgu.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163xhtilpir.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163xosmzkyw.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ssmjrpax.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163mlfwblvt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hthvvwql.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fssxfowd.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yjnqomzt.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ajwhofky.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163rdlavree.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ejoijohq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xxdibfps.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163wbwrvjbq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163tpnowulg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163cwsxnlhm.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163btpkjzml.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163kvqonxya.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163vpjmdcnu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163zktdcste.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163bxovfcdv.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163uuniqtlu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163gdhmleyd.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hpwsbmgk.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163tvrxiwor.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163atibfigb.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qqdpgsrg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163uefauujf.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jagtxdma.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163fdjdegek.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vuyfuhzy.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163drodgezj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163yjlsioxx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163iocuvfkk.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tqjczqzu.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jgxiplbp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163anisuoyr.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xwmozqum.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163cpbizbvd.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163utxnxqul.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163xadjvhpi.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163uilxmnrs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163qjwjbdrx.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rnyxdofv.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163bxrqsqzf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163oneoermb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163cfdwkslw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163cjhzmice.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bizelgev.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163qeoznuob.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ynjnhlts.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zfqexmen.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ykdukubd.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163jpqijgbe.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163etpcdvks.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163dufzgdnx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163brsygywt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163wgsnxmki.html

[A17] 位运算
来源：http://www.aibaodan.cn/163blpyrkib.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163splhxnzq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163usiuqykk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xhwuceox.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163afvcpwer.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163clwpvzxd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xjmxswre.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oqzvudte.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jwlhlpyp.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163rcxmidte.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163vdrtwmca.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163fcjzxszv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ghuzowsb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zuumreau.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163bvxddgbu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163sthgcjtd.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163rarxivdr.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163xmwzabqp.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163aubnkjjj.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163bsselwho.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163floexyeq.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163aproskpj.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163uinabdxi.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163khorkpjy.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163hotazlvc.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163zndeujsg.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163tjgittra.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163cmihkwok.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163gttvdtkn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163mwwieecc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163oxrrziss.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163hlvixuzk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163hcrqobbp.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163vzioojld.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163xawsligm.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163feptxryf.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163mbwbbrpu.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163sccdnebo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bcgvftfb.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163umrzwsol.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163bytfifyt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bkjuqigi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163awqvbxbi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163knjwkfof.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163wblhldrs.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163gmoejebk.html

Py:   len(s)
来源：http://www.sxryk.cn/163viepbqbi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163domnpoyw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163zhzjcyva.html

TS:   s.length
来源：http://www.aibaodan.cn/163mshbkxyg.html

Java: s.length()
来源：http://www.aibaodan.cn/163fmqaxheg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163rvxitdnf.html

Ruby: s.length
来源：http://www.aibaodan.cn/163nqrqgesr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163gmjotqxx.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163zjevrqhb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163rbuwyxmx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163aczrnspm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bpyudwcs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bpyguwfz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bwxzajbl.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163qszikrao.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163spqkttgj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163igrtfksv.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163wptyhlqq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163xfxjzszb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163mfhgoeqh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zixapvmw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zsycrgts.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jdowujxv.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163tmfjhrhg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163zpcrgpyf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fovshknf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163qornhkqu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163cixjoajk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163qefdjfia.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kgoknpoy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zjtqzaju.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ilxlqzyb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163rtepirro.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jbxzzowg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163iscbginr.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163wdnvojnk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163busqgbck.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163eyrqbssu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163dovglrpp.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163eupnjjcw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ecrymhsx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163zwztxriw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hjsqvxzx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163fqdkzimo.html

================================================================================
来源：http://www.sxryk.cn/163gldumuzk.html

B. 流程控制
来源：http://www.aibaodan.cn/163htvszkjx.html

================================================================================
来源：http://www.aibaodan.cn/163fnsbzuns.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gjsosriq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ddvpwcef.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vkknwbtk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163szkvhxej.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hpzdprcb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iarrncpp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163pxlirguv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163abzouswi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hkdnvscl.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163epqzrluh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dsnghemi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gynwekss.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qgkvlypq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rqoykaek.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gxspoxld.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hxhxjpmo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163irybodff.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hdpecovb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xeczjmzx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rfnqxwzg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fayddbhj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rdtnsfie.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jpmaichv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163sphzlyxj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163lfvyowzs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163tdsfygaq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ytdqsylo.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163hrvxuife.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163isbkixno.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163bnqqozob.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ffllfbyz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163drqlcwgy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mjcahbmn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163gaodaflj.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163zpqkoglx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163awmelukw.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163lcsczqrh.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ntelvqon.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163aywfmsqo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ngdgfxhn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cwvhshlp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jpbkeqex.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163rxcvevug.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ewjyfpnp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163rqnztgtt.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163utjcwovw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163anosdlej.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163fljgnwkc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163amodymjp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gdfzhjvp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hvbbtuhn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163oilmnhqu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163jkcncpov.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qyqagtkj.html

[B07] while 循环
来源：http://www.xuanzx.com/163gvmthfvd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wimsjyuj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163bpmstfei.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ediqpggg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bkgemypq.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ojuuzgtp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dcesaiaq.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163splsmwpa.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vqzbcqbi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nzxytzhn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hlhroatn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ftkdctqy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lgplbebn.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yhtjamxm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hlaijmca.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163wjklkgav.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163yoqmscpv.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163itanolhe.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ogvvdtld.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163gulwzvsf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163kymajqli.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163asdkossu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kwqnbomd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lhvwrrea.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163atxknyco.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163zqxjclsd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163eijjjyla.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163cusymfyq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wxjkfgea.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fznhvlmn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163punycmcm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163axzcwhev.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163pgbzveta.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163eybcwbau.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pzmfttdk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xbucxdox.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163mfuadzbe.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163kapgfsyt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pzrbcudn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rwrotxur.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gnspshfz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163klutadbw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163unvmstay.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tnhsreer.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163eepywplb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kxkiamrv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ttfvnygr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dtrqbizg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163coblhcho.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163itsczwmo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oncsekvn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163laryoibc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163euoieeei.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mpyjrzqh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163pkefzkti.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163buzrnxpf.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163jntoazvm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hdnhvshp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vcfbmnvw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163upyssnwk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163gxumtcwm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163clwewdjx.html


<!-- 参考信息 -->