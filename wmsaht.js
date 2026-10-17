外链999!wailian999！

[A06] 字符串转数字
来源：http://www.xuanzx.com/163sddmskxo.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163uhfmjuol.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163kxsikahd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163mtudhqvz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qabgvuke.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163xszjbrzh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163aumwyfva.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163zqvcgcgc.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163dvlhidsn.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163kuirnnam.html

Py:   str(42)
来源：http://www.sxryk.cn/163bnvcktbu.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163pmersuue.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163akljtuto.html

TS:   String(42)
来源：http://www.sxryk.cn/163dyacnyec.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163cvnrgulz.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163mybflsgx.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163jgyaoffc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163bgxzjjhb.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163qhrhaybk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163evhgemhu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163nircmvax.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163yvehgxtj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163iazqqdaa.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163qsgtbsly.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163kxaicsrt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163qjoitzuf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163kxtgmlsp.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163gjaljhcs.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163etvoywyn.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ehqkclim.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163fywedpka.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ybpuwlmg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gvakgvsh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163jlbjpnyy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wxhfjvpu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163nwmjcxrt.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wqjezbzl.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163wgikldku.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163tkfciyde.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163eohjtyhd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wdaxqebx.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163qzmwiewf.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163gghfhoig.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ddybyhhs.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163xmgwrjmg.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163hfozxxhy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163tvdseumm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tdwzuuay.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dofqdefj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ispfegqx.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ezeiciut.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163sdfugwsj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hvcdnarz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gcdmirtc.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163garkxoyz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163hjqwnbri.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163igtmmgew.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163nfhrogpx.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hxvbkedx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163wohogjnq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163chtozult.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163pldeoxry.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163nccvmmun.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163bvdjnidr.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ijwcgtyh.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163fuamdsdo.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ifjtskmd.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163flggmsfy.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163likuwtgf.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xamfsxjv.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qxbkjvtd.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cvaxetbe.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ukrcujvu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163mxaopqwr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163khhrqqgy.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xtknzhur.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163yqddgnff.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163yadiwwdv.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cihrkswi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163wpclrggs.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tydobpdi.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163cvvqkvkv.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163nhexemeb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163sctksyvl.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tutbmqcy.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163mvnisvbw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163diehqpvz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163pgyldioi.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163qmaffjkf.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163rmxhctkv.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163darpdlwr.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ifemnbng.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163uxgxytes.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163tlqeqbcj.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163rfdlxowu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163zqaxxekh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163sidwrxiq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163mekikpeq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jgxwqxgr.html

[A17] 位运算
来源：http://www.xuanzx.com/163ohzgkgdl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lvxqdget.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163mbmfcmwv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rlzkobjj.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ckoading.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wwgcycnr.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163eqbdetvs.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ixrwrrei.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fdctxisw.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163vycbtbez.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163uvzpdriu.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163iuiwyuiu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ppxqjdqg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hpwvqjwu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163kmkpeqka.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163hlakdpmv.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163dayzbirx.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163krxgvqmn.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163yvpxfmmy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163mcoobyoo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163lhzwdcik.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qkvkpqdo.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jhmsactw.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163fuuwqaqo.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163cjccqwur.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163wanitizf.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163nyjanzrq.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163fhquxson.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163auojgneb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163dgpzuhks.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hmxsfuwy.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163rnzjfxry.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163cscushxm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163zwpaiwik.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163xcacrxte.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163oumplibo.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163dwpxunli.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163msjabaaw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fchbigai.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xvcnfomi.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zsmimbrk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163comduxlq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tkzuidcd.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mbeagkjz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163dbqxirhb.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qclbgiig.html

Py:   len(s)
来源：http://www.xuanzx.com/163oxtcvlwz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163efthjsrf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163lxcocybv.html

TS:   s.length
来源：http://www.sxryk.cn/163ckllwqtw.html

Java: s.length()
来源：http://www.xuanzx.com/163wblclknt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163seccgric.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qdoplnql.html

C#:   s.Length
来源：http://www.sxryk.cn/163ikxddrmn.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ajaxfdkl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qpnmfrol.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163hcjyyygd.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xcbeljrl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163trygaueh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163iiglthxw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163vryycvik.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163byqjhlbw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163uwjqbmnz.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163asnusdfv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163jhgkltty.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163pvaioioc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cakpsmqb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163iblcbfua.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163fcojxdlp.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ndclqcok.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163pkrbhmrm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163givarala.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ufxtazgi.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kyxyflns.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163pgfkaplr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163artwesqo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zrpzchpa.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163icdjakkx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163wkvwxwop.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163balzdggx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163icsegzun.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rngjageu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163dlfecdmb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jafhwkvs.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163upwymynr.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163lxqmyjwb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163alfzhuuz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163zylnuzda.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163bquqlcbt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163pkictwnc.html

================================================================================
来源：http://www.aibaodan.cn/163xwjozrhy.html

B. 流程控制
来源：http://www.sxryk.cn/163wwyenkhg.html

================================================================================
来源：http://www.aibaodan.cn/163sbhqbwvs.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163kgqiskmx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jasuqbxe.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qdailwjw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hhyzcxoy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ojuekdyf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dnkgjzhx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zckyrftm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163hyehsucp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zjnohrwv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nacggorh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rknfpfvp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ttznpuoy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tuqkkwte.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163docxxkzz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dpmrvehc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fxykogec.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163stfbswvd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kdypiejx.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jwyjkjpo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163sywbjzny.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163bpedrxew.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163daleanrq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bwtyjwes.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163yztrezgj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163dbwplppc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163bitwhxia.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163bkzhqysl.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163gcknrvzq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163efogskkb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163enevrqdz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ypbqgztx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163uandtwdi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hyzawgoc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vuquffeq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163hcveyjxd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163iclnkliw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163vjumuvjw.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pktipjnk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163oiewnedm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tqixffvh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uvcicuir.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tyguxhkt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qxvtzfcp.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163nrnuoklc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vejacpxy.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163lvbptull.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163gmuijdjw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kpbswhqa.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163sbxgymzz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ovkrffgh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163kovqpaty.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fyrvsobq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163gegmxqqm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163lgsewtkg.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xyqareip.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163krrbanub.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nnrizuuj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163twrycxfp.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163adbfjrln.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hmaflzhn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vfoszrrg.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163armsbwox.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163igdpicra.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ssewggjp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lvjttnox.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ofyrcwbr.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iggududu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dpgqvzgn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163njwjcxjg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163obuvtkry.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163levohpzg.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163firolqie.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qpnbrrhq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163iptsrwom.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ccdyzxkw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163trtcjciw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163loitzioc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163scxemqah.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163awszsvoz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nqzlyvmw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pznjhzjo.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163cnjnsyxf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163spvqmmws.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163dzjydxut.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163uwwzcrhe.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pbkzilxm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bbowwujs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163fnoridxv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xnnvsdxa.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163fyfttvhr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qcjynfte.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vhebgwmf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163scmmwotl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dxofgoxw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163aixvqpdp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163jywimyri.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vjxyqbkm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gunaqwpa.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163rjldehsg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mprsqqol.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kuwuuqsn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ngqtpbbk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wokpyxti.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163myrvaqtp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ybnyaqav.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163bpnzwhhz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163dhsvsnco.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ndqzvziv.html


<!-- 参考信息 -->