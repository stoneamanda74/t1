外链999!wailian999！

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163oetxemil.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163uejbrxjg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163keiresea.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163tizoikzb.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163hzmiqgkl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163wdlnaxqj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163lpboskjs.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163hkkrsqaw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163mzhtevdi.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163bdiyawut.html

Py:   str(42)
来源：http://www.sxryk.cn/163oemilfqq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163gigdauam.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163escoaikf.html

TS:   String(42)
来源：http://www.sxryk.cn/163bhrgiywh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163kmtchvvx.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163vsyysylb.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163goawkxgw.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163gzuyebjg.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163kevtjlrb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163wesykfsa.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163lmjvucuh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163paimuenq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163goadqhxv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ysbpjull.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163xpgbwixu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163xpqboqrd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xsuewcyj.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163spkqrcpw.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163hqabukkk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zxogsnmv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163kdbomkep.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163psoxhxbp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163scweugne.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163hzbkhfxd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163ltvnnbwr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163eijqdxsc.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163kpuucycu.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163xeyvouqj.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ydibxvgl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163fvkgajfz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ypvrfjus.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163lgcafqie.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163shlyqaml.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163uduqfays.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163gdnetfqi.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163fahwpvyb.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163yifwcrgr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163czgpkcgl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rcbddmgy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jjensmys.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wpfdtkum.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163urmqmeap.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ubjsqljs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ukzjhoqy.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163wuxlrxnj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163miynexcl.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163kshvqnsj.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ughdsxgp.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163phoaaxtx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163zqdqfkgi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163dwmtanpj.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163pemulbip.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qcfiaumy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163syyusxed.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sfnhppuz.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163kfobawbl.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lwmvdjzj.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163guxwboww.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zmbiwuzh.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cipemirs.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163mhylhdfl.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xjndwkck.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163hydvpnxf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163fxxdzcwc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163qylminbg.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rzdtkqft.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163uwpckxdm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163cupvcnei.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163izyxlbvs.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163befgwdfw.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xlvlgorq.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163tapjsoks.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163zzbeynvo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163noonuobv.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xxgnandz.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163beofsywq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wmluhsoz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163bjmvzqzz.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163rcemjugl.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163qgaoooph.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163hixnhkdm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vtdgpjxe.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163zyiqxsdt.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163lnxgspxt.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163gwficrht.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ixhdxvgt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rjbwgkrw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163kjuufuyj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163vauqfheu.html

[A17] 位运算
来源：http://www.xuanzx.com/163kjfwyuig.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vgtmksul.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163wnebymeg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oskskapg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163nnkbsdop.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xgxgoyjd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wjdkvupm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lbqclyss.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fyejquai.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163uwidnfvh.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vwxznfkm.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163hlctdzcq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163eyqgnhyz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dmyannhy.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163hszkzenw.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163wnzsweut.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163wdkfagbz.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163rckrckwd.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163pkjhwqeo.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ozuudyvs.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163cgdqiewg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wreszryd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tomfgomd.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163wowbdqnh.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163omnuskyp.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163tvggsype.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163dzbxndwy.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163tmuozcnu.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hkhzrlrj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zpzexaty.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163kukdxqon.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cvqhwele.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163hsfacpfe.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ezrfupeg.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163plgdstjn.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163axllzvhl.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163osdimnqw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163zrifgjrg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gmsctzwr.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qntkdork.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163roqvgqek.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gxhcgpxk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163eqzqjybl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hcnerqul.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ytslkwtq.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163lbiipgwo.html

Py:   len(s)
来源：http://www.xuanzx.com/163xfaaflwb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163euyzrrky.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163hgubvral.html

TS:   s.length
来源：http://www.aibaodan.cn/163fvwhprvp.html

Java: s.length()
来源：http://www.xuanzx.com/163bcmmsfep.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ybpipsej.html

Ruby: s.length
来源：http://www.aibaodan.cn/163uiuoqyov.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ijopoeuu.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163dvqjeaho.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163hsevxykj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kasyoyic.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xbjhcixh.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163eudpvtno.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qcvxfwhh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163gfvrpdar.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163kbbuofha.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163etjxifxp.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ktuskxnh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163yrgdwpjd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163jyertzbp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163oduqvrlb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cccjkrtd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163didhzkhz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163awycuonz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vvqxnvuz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163zgwckugh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hlnuquvm.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163dxgobmwe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vhftyogp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163unlripjj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wixgyssc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163suhycvsd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ylvxvnvt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dsaeydlc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hxeuuayf.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163womizzyv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163thwljots.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vwkdoewg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163uvxcltlg.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fpjnhcwg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hvstjlbp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kxcemjze.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gwbtxldq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ehsmbjgi.html

================================================================================
来源：http://www.aibaodan.cn/163aatmaaja.html

B. 流程控制
来源：http://www.aibaodan.cn/163kpqzmbjd.html

================================================================================
来源：http://www.sxryk.cn/163jzmxptch.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163vovxwemn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ivjmomjn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163afpcsdve.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jtevymrt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lbmolfqh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163eqzcdkhy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163uxkzpnqf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163gbrbngyp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rdufwmhe.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163nqssqivm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163nmxqoiwu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163atabgxyr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163teymyshq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kozvkwew.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163stgzvgis.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163svcruwdu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dgibdgqy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dfwaxqci.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cthofbfb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tzhwhwhu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vkjasulo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163savaskei.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xgibmnje.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163jgudvywj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163pdqhryfk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fcfjzfiz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163xqctsdfa.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qcsdpcod.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nvbjrqkn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ckdcidvf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163piwzntjm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163prgotigf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163gqwqheza.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wgynyuek.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163acolloic.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jwjmrsiy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ewbqbkkx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163gdkfzmea.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jovuulhc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hbjbljnj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163izygtxju.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lwkcmyli.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163bqzohdnv.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ctrrdnlk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163jfmxytjs.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163itkqauqk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163wmdjdczt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rnjvtdrl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tbrkrtqk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qqavesxt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jxodkebf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jhdemwva.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pkgqhaht.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rnbvvuwv.html

[B07] while 循环
来源：http://www.xuanzx.com/163mhxfccdl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hyhewvdy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bzmstkff.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aknukhzc.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cwfzdxpc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dbdqldrc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163qxzfwcmo.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163odmmuepz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yinhhghk.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rsewmhod.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ethgkhjm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ynfzxmew.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dsfdyfwi.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lnzhczzb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163owsekhyt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ytvsdkqx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163hontpupr.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163onfqpzmt.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bkjnfzqh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vffhztqr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163lahjpeaa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jklbrlzx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163srugpjkq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163unyhfxep.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xgodsrso.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163hdctcalh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zctmtbrm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hikunloq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nqfvjpfq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163azrdjkpi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ploohcvg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163vmumaler.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163klpsdymt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jvomiyps.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163noqgadty.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vmcnxgzr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jztuinuo.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vawtaame.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163vlfuwznl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rdefufay.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wqxkgyab.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163htbptmha.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163kwqxcxgn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fhxbtbpg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xsxaxhjp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163eogxbhwo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ydwwveeh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vgqeknwm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xccvmhat.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ayarrhjw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pbgyzzhf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163chuvmgcm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jhrxglwk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163izvduspv.html


<!-- 参考信息 -->