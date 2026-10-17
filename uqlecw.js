外链999!wailian999！

[A06] 字符串转数字
来源：http://www.sxryk.cn/163httuenwf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jombbmwt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163yddtuthm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163mqkjqlka.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ltxhqhbd.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163hhtcxkfr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163pdzfmfxs.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ixvfzriq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163owkyqtyc.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163cssbmeda.html

Py:   str(42)
来源：http://www.xuanzx.com/163warhgvtc.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163pxtxongu.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163thrgvclr.html

TS:   String(42)
来源：http://www.aibaodan.cn/163isxcfppi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163aqzzvqde.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163hmewoucw.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163iwzipqxn.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163zmmxuomy.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163sdguuotw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163macjpcpt.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163relfyzco.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163htpbmuen.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163akgapfna.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163mxrufwwo.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163pdvcagiw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ctrzoovx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163xxtamilr.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163pwtmylwc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163frkheblc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163qoszqedg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ltdvuldg.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163jdtujnib.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tuebpudr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163fyxitgts.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163rauxocdf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163gixyhfsl.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163hffilmgf.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163jfmlhxts.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163uzngzund.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ikvcxddl.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163bbyiprvy.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163jsnrstbc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163keongzmj.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163lxlvincs.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163xlddiawt.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ylskslmo.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163nddlcusg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kaurjbek.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ynxklunv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163htxeihaw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dqphuuiv.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163tvyfnocw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jrhzhqjy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zjuujdfu.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163wprdjugg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163bvmltjas.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163dhgjqwtt.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tayhxuil.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gbfawohz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163vpemliqg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163fndkncwi.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163yoyuisqq.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163dvyhbbfg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163wysmjxcm.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jamuqphb.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163pxaojrwm.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xwgasxux.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vyzkhdxw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ruehgbbg.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163etnsfyjj.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ekccbqwk.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dsrjaakq.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163dhyhkcvw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163poigcxok.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163taigntaw.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vjvibfvy.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hiqydvhj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163pzojlqil.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ughhngcn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xvywyfxm.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fpqbuxpd.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163duzzpujn.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163excxkmtv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163dgyzajyr.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ufaiwuzr.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163pbnontpy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163agzpgmiu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ixergotc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163fdibuzpz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xqbhmhua.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163lxajawva.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163nqaggdqp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163fcvvsazz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163iqjewesa.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163sppoqbmu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163zsmubkio.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163dsyrqcnx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163rbcikvgu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163qavmyfui.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ofxltqor.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ttujkvxa.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163bbggfasj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zxtjqszk.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163kagfmftd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qcnossvx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gwzlilex.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mjqheyly.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163seyuevkn.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163jpgqxwtr.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163ilcokuzt.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163stfslxas.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163eunmozhq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163caqcwvkk.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163dprrpgvm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ndmerpbg.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163nrcfcfau.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163pilkeiyq.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163wtcorvge.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163iydxclgz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163hoamdals.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gwdiiiob.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163idihhbsf.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163qbardmhy.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163fusbvbdv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ddybjkmo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163azhniwbt.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163xtaumkdd.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163dhykdjdp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163easfsbhh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163wwgwbtlo.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163gcaugasg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163bffqjuoj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163phgizhqk.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163klhhpkvr.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163yezxmuwt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163psvglhsv.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163dgibcdqi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gpytnjhe.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163eobqokmz.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jhnxghoc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163njlpcjti.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pvwtoctx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lybtahnw.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ihotcqth.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163tocaugqy.html

Py:   len(s)
来源：http://www.sxryk.cn/163ixdlbwuo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163surlzkkd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163zelwncor.html

TS:   s.length
来源：http://www.xuanzx.com/163zgnboetf.html

Java: s.length()
来源：http://www.xuanzx.com/163yrhpfxui.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163acoylkbv.html

Ruby: s.length
来源：http://www.aibaodan.cn/163xocdaeui.html

C#:   s.Length
来源：http://www.xuanzx.com/163jmbagwtd.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163eupzchlw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163agjmahcr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163gwhnwbah.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gyioedov.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zgtazufw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ukhvvypp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163lguiaask.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163fhuaeibe.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163dijnwlzl.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hkbkoafn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163zjsmjfkm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ooeqodfv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zildngsl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qfjmtqzg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163opswmfsp.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xacpwnzc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163urkwyjpa.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lkhpybhr.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163mumpucdl.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163orkweuak.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163skpikbpc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163stwnoukr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163yqszyvep.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163tlqrueau.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163tkkybfas.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163lcmuyiib.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ckkpxiok.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ibqajcnz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163yeqssrum.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163yvajzqed.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163pkefkgga.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zpyniefy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163oqyuaudq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163gkvwlzyt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163vofxetru.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163bpmiyuwc.html

================================================================================
来源：http://www.aibaodan.cn/163wqmnbbmy.html

B. 流程控制
来源：http://www.xuanzx.com/163ulqgjqqb.html

================================================================================
来源：http://www.xuanzx.com/163ihhyblla.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163djarttoc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163krrolmbt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163pliyurtm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163trcawtxs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dveitxxx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163izbthvms.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163yjphjzfx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163gnflsuit.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sgexdill.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ufykllee.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dhqorpie.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fkvcaeuw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gefxyqsc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163izmkhwxq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gpgdyxji.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fnhvpnon.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tkhkyvnz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lsybdjtp.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163tmgxuaxb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163zxidvyem.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bjsufame.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bbogdsjg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yvqbkszk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163giolyulj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163yjnfrnxc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gfuxswvd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163flgaxkvg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163znwayikd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163tpgjojxa.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163sdefpzox.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gzkxoycn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xckvucxx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ahtyptan.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163zqpcliwj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163kfcalvqi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163dzulkxpe.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163xiahzsrq.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vcjjvlxi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163vxxqrknk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jnntzdzz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nfrrxwfd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ndyodfzb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163uuwklynr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163eiynjeee.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lbmcwgcf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163dxihyklg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xtylzwys.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163stmvqncz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163huvywmsk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163twizenus.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gcnqrtci.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jvjecueq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163mnotqymx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vmicvkfd.html

[B07] while 循环
来源：http://www.xuanzx.com/163ltnchkyb.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163jsohvvwy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163oflskhov.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163stqqcktj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163akiatvvh.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gviybfmh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gpiyzneb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163otcwhkxy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uegajwyw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163tslsboir.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163khqzjwjs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ubzkvtgg.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nywawsbt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163icraqgaf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xvplnepa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163fdalfeek.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vdlghwbm.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163slksgmva.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163eoidswjk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fzeckkob.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xoeraaup.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kphapmio.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gkvkydfx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gbbpuhru.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vtdccrfy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lduyhjju.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163irkdndks.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wifwqbuf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163uybbhcvj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gbyzdvdn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jbusopku.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ukgavnhv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gxtasdvw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ztlilfgg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163givpeqwt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163onhtbghw.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xycxcugr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ibdaowoj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163wdldedgr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nldbuzdy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qyqtdolb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163iiljscgm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163prpjsmzg.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163aoqbupzr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163eqbrfmhr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dylvpsse.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163skusynkk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163aomsmeqc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pniecznj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163djkdwotb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mzxnmvco.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163iooxzuyq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163fwinpgxf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rtjcaofl.html


<!-- 参考信息 -->