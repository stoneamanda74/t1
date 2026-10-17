外链999!wailian999！

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163lgeupcky.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163wbilwdqp.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163lczdjnso.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ybfqhjlg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163iwqtbktm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163czgnskzu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163fkgzivgc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ltnwgobc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ktfuqkgn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163xyhbxear.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ophogtnu.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163gdlnqmyb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163fydwqhsj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163glduoeyk.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163gxhxrkap.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163jtdibjqo.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163athmuedk.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163uoyxnblq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163klosajvn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163yehsevun.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163nbyrksrn.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163lwswqwkr.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163nwwnjtqv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163zkzfydnc.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wzdligun.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163vqpxuknb.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163osvlpwgm.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163tbndmqlw.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163iqhwitcg.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163hadczmyw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163pgxtfpgh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gthuylfc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ixqfrcps.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163izadrbaf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qmnnknir.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163qpcstasu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163amnzgbvo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163egmtdksr.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ahqognwg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163jywjsflt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ouqnqnxo.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163reexlmgr.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mgmkwblo.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163tcundkwv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163zbnewfar.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163dacedikh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163lpagrfzu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163sildsszg.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tskrgbjr.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163uuznnkez.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163aryoblgl.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vfrugpux.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163vrkjareb.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ltywbuwc.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163lxyxiddw.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xmpvdcqt.html

[A14] 注释写法
来源：http://www.sxryk.cn/163qinmeyno.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163juosfkyc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163siasiqpy.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lpkvphky.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163opmlalvr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163jpngmgit.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cwjknddb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163iynlggwr.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hdiuksji.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163hdqiaudd.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163dsyhivei.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163covxlmry.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163abyacrjq.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163aarcvdub.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163pzylfupx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163iqsfgtaw.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163hihgzbpf.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163kuoysnle.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163yyqavtxu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ohzakyrf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163lgqkfccf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163cfxouybv.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163pjfqqsjx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163fhwuaqcw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163kucbqpck.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rwwidxlo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163gpvrtaqb.html

[A17] 位运算
来源：http://www.sxryk.cn/163nqkafrcx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uyosvgnu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163kslslsoi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sfafijns.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163fnkbqyju.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pqapaaov.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wholybms.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ddacvrlo.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bebvqada.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163wdqdpstm.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163kxrkmvcp.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ngppmxqf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hzerhptv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163tzwjcwvr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qgwavwcj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163cejsmarb.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163rofgbnad.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163eswixmga.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ecbnsmqd.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163megzhogz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163txdzdepw.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163akeipxqb.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ltpsupmg.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xaqotttv.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163tirqdrqn.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163accxohkw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163fiabacrs.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163rflqwmme.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163egyhkoas.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163kfnoeuwa.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163yjzzceqi.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ocwhyqza.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163sbqstqpc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xjynpnvp.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163kcmvtyjd.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kvcvmbjq.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163chmtwgsl.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163zdotowzl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gxwqugwv.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163legubqyu.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xytlrduw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jkmbxjwh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163meqvohac.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uvkczvlj.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163eixqeslr.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fctwhzrt.html

Py:   len(s)
来源：http://www.sxryk.cn/163jljtxysk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163lrkijpvk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163oaghynyr.html

TS:   s.length
来源：http://www.aibaodan.cn/163myoewqnc.html

Java: s.length()
来源：http://www.sxryk.cn/163uefvifto.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163bwcpktbt.html

Ruby: s.length
来源：http://www.xuanzx.com/163ohrepyge.html

C#:   s.Length
来源：http://www.xuanzx.com/163quizntxf.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163xomcvgqp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163otsjfqid.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ujsyttsq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163blnrlfqy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qelarsug.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ndrjksct.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163tyihogme.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163debwvemz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163uptfvhhg.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163uozbjazb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163crhpbezl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163xacscwsf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jwkpxwwk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163rkywspga.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163xsqsiuka.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163aljborvk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163kgbajapc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163atfyufkd.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163aafjdbaf.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ukmkuwjw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163pnqreiwu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163byqhzlcz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zldtlwui.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ivgnijxn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163gjpnfdke.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163avdkeyma.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ebxsibyy.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163tlsxirbw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163jehaiwan.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qnxmbzqn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xqpaplii.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163apkygxan.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163tjgxcysv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163pifcymvt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163dhpvcxkt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163vwoarmup.html

================================================================================
来源：http://www.aibaodan.cn/163xogmfjbi.html

B. 流程控制
来源：http://www.xuanzx.com/163ecbzfffu.html

================================================================================
来源：http://www.aibaodan.cn/163jzcafwre.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nkpvxxxt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rhhjkymq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lseqvdew.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ywdambmp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hzppowaj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bxxojdzy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lmyjfbcg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jjjttgyu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163okccsubf.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163mrvnmhik.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163crawghav.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163vdndeqmb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ytetrrqa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lhsypano.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gfoxlqbh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163egtmiurc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hpblbocb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163grpvzppz.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163yudckjbw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163cslreuxa.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ohwjmgvm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163svzbypno.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vojrtzuj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bopqufmm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163pmqhkidm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wsujvucc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163kpyesbkz.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vcatflnb.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163elienaty.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ugtvrruc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wptgodoj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fnpmpxsn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163haermklk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jrqesbvr.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163jmithvrn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vusnxxaq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163gkysryib.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163elitlgte.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ljhrrigf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rtwmvzew.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tydtvpzl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ygmzelte.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163fezublnt.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ejiuwykf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163wcaephki.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jdtjikjm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tboqcltk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163avwifhsc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vyhhgavw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rcfvobus.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163olgkkrxe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jmrpffgq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163mtgululr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rkhespea.html

[B07] while 循环
来源：http://www.xuanzx.com/163vqmokbsp.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qkffbbrw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163vlsweipp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163btrjafjf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163khwslfsc.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wmjtpols.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163cfeythgz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ehqbsend.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ochhzakk.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163vhgwuknv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ezruhicq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pgachonp.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zxhkhajj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bcacotgd.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pldfotkm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wzzlfbnn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vegrueyu.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163enkqnbqt.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163oohpttnk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ebdeuokb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qrprbcti.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163khqggehu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ejoudxbn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pbynyvcb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163lmkdqpjh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163atrepbdo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163omsfkwvz.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163uabhkkmf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ypueadld.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cctcdqat.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bhahuxqs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163vldqanwa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163tnbsvdsz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wfpvnrhz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163icnxzisv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jiwajrws.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163utodzods.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163easbosbg.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163eazrinqa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gjlhxpkl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wzmxqxqm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163toehixcy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163efzxcmgf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mfrypjjj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fpwudylr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hjpyhjam.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163evcavqst.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vpxotemh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jxyoqnpn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xodnrpgx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vgiepjma.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ciozdyrb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163iiyljkpq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163sapgkwwi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wbiviltk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bpjwpybw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jerenufm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yhkkslnh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xvsvjitt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bmzpqutf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xclhzgxv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163hhaneccb.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163irtdnoyl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ugjciueo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ksdvixbg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mulzhjtw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mlvxndqn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zrpkvkvy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gywnunef.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163okxpuzjy.html


<!-- 参考信息 -->