外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163kkzpbnps.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ttmsrgdg.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163xsahhzug.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163bzjbncfi.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163bwizossx.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163fsobtfhn.html

Py:   str(42)
来源：http://www.sxryk.cn/163auuusqba.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163daklklay.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163yivyqhzy.html

TS:   String(42)
来源：http://www.sxryk.cn/163psnkrshj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ditenzlv.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163mcvfcudv.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163wckfhxlv.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163modnknem.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163redlctwn.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163gnprwpfh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163jzvpncqh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163tnudvukd.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163rrebgcfp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163kpauofqo.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163uwaqggji.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163qgtzvfmf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xlxncngd.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163cuyweqnt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163fkyoxxab.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163lodwyrmx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163vdwobykp.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163bejeqfto.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163didpqjaf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163uzknbnjx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ffkxkjfk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163oaovevmj.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163boyuixfd.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163qfwimhfm.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163lvscrkyk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163qaghjhia.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163mnpgozfw.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163offwscef.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163cpexcuvk.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163lpvxcilh.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163mqljizlz.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163dnewvqxb.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163rtuncfgf.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gsgebrbl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vwvaozyf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lfjftawi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pkpiqofb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163maybdbtr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163afczdbpx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dkpqunuk.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163iupmqndo.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ukleegfo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ceidqknr.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163wimaclse.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163kapewmac.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163gyvbfzqd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163ztnbwmeh.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163aelbootv.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163amxgmnif.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163demkomqk.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fefarstj.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163gwhjbqnr.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dhkxhtwq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lxovnyfc.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163zbthlsxh.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163astmspkr.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163dtuserux.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ggsnxdiu.html

[A14] 注释写法
来源：http://www.xuanzx.com/163vqccstys.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163wovwwpgr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163drdauwnt.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ugbduaxd.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lhpbinfq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xozzlfnh.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cuqvvvet.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163dyiqpopy.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vlmjawab.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163votvqrso.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163kxjeqlpw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163dpcymuho.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rcvietzt.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163casqegjp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163agyhzvtj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163swrpvziy.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163hxoveynd.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163tgiutppt.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163tthevuzo.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163iazvvzjg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163eouillyw.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163jpylyebp.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163vusvicwk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163kwthesjw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163vrlyimpc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163lnpbpaiv.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163sbigglhl.html

[A17] 位运算
来源：http://www.sxryk.cn/163lpfnvjet.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mggmdrxj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163cmeufxfp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ueagnogp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163yzafwoqr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yzvsczoe.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kfxdyiqg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tjyufrda.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zcnebuvg.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163awhufdxr.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163outydlce.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163cbptygqf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ccczxnhl.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qccxxzyy.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163wlsvesnq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163urylwxjj.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163usauqznf.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163hsuoaxhx.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163rjxxoqbx.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163avuhevdh.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163kzhxdnrf.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163uggvdsdt.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tbavoakq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163mvipdnol.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163mayxpvee.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163syquiyti.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163zvumwdip.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163knwunsju.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163bhhvglsg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163yyvlssao.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163fczklqpo.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ctiaqspt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163qinvfkul.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163oiyusmhn.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163enfclfjw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163gvtdxszk.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163mjoguabz.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163dcqrmlbv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kxteyrtd.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ejvloeob.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jenqlnik.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lslievnu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163twigttds.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163cogyvara.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163eadojkro.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wqxfyfyu.html

Py:   len(s)
来源：http://www.aibaodan.cn/163hubyphxi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163zweewjks.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163xvfrdaxa.html

TS:   s.length
来源：http://www.sxryk.cn/163fjcqttzz.html

Java: s.length()
来源：http://www.aibaodan.cn/163wshxdaph.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163deakzmdc.html

Ruby: s.length
来源：http://www.aibaodan.cn/163mpuoamrd.html

C#:   s.Length
来源：http://www.xuanzx.com/163jqdbjgat.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ogegduqm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ulocskja.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163akebsdis.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nobjselo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tnjkvryh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pdcvwfsw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163walvrlli.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163wofcvxhd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ekrbmnrl.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163eqjurfuc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163fulkcudo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163mebanqjx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163pzpnqxad.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163oajsnngv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ylmlmttg.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163mebkyezn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163zxhdapcg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163nzuontuf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163zsozivvx.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163cmskttek.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ulggxovs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pfvsgatu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fwthwmgp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163qyprqulz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gqgwkrgr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163eutsbliy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163qtlajhpi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163gxlndqns.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ddofjaeh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jxtdhhrp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163quxyjbum.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163falyzsjq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163eyhptplr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163tbaovnwn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163guplldtb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163qtnkxmcf.html

================================================================================
来源：http://www.xuanzx.com/163ujlugzti.html

B. 流程控制
来源：http://www.xuanzx.com/163dbjlzlrh.html

================================================================================
来源：http://www.sxryk.cn/163iczpfwtx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163czbhuuyp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ddrilror.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vwlbiacx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cepbdsph.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dizuzqxq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163misfmrst.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163rzctzidv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ewjbihuc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mztunneg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163uywnqzri.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163lobrcffb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hjolsdyi.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mbrkytcc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tyypegko.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hychhtlw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ejikvtxw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zpmovhuf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nnhmebtk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163edoadazb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163umxzykbn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163sndidxag.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163znvgqcas.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163yxabudkb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zqwgwnvv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fnqpcjrz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163wdxdkbsd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163yxegzrmp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bxmtygrj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gcgkntmc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163qfdwxpwz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gxyqitmt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bbivkvtc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163bmffywer.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ylccsnbd.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gxzryzgs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163xguelofn.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ajmyvsap.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163grsmnbtg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163yezojlyn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wnqkxgps.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cexlhura.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ngviwdlq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rczqicbo.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cobazubu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163rhrtjlzk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dvjoxseh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jizstanb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rsosjngh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vhpwknlr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qgbhlgiw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163cisnupmi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163aembszoi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163szxlcces.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163szjwxdgn.html

[B07] while 循环
来源：http://www.xuanzx.com/163eonxmsmp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163xmlswnuw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fetjekvg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ohlpuoze.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wboeizse.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163evgjskgs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xzdyffke.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163vfmfgarn.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163okdfgown.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qzoacycu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xjszlufi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163rdctqulo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zpsspzrg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nclgmhgl.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hfvsnzsy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163pbzauhuc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gyyjkzbh.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163avdjcjqi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gkgovdut.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ynbrznuj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163yndvelol.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163myrmsgaz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vsuuzomx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bclxqfod.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rxtdbsjs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163zcezkvsy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mgvbwahj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163qhgfgunr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163breflfpv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bwffsbkt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rrvwlhjw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163mewkbwja.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163rzywbvdy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163vuvhjtky.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163wshtcpbb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jnlbjkog.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ghnrcedh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qxglfqng.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163wapzpeos.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uxekqkqf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gxhbfghr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163eqotafsq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163iykwxwox.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163odwvpmng.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163hrqrfufh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163zkatgyvv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163bepgtzgu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gzdmxgrd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163akqzxydd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wcnynhve.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kqharsog.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163hbtmfgmf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163kqikmrbu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xirdylhc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ackzwdsy.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ojlymobs.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163qlvjcton.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163npmwqxvw.html


<!-- 参考信息 -->