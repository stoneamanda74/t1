外链999!wailian999！

[A06] 字符串转数字
来源：http://www.xuanzx.com/163udaewgoq.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163xphaasow.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ambfxrqt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163asomffnm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163gauekrcp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163llfaieum.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163mzfpxptn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163uctfzszn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jjzzlvaa.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163hetiadvp.html

Py:   str(42)
来源：http://www.xuanzx.com/163kgjyqhsz.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163aqqgmxpl.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163gfcxpafu.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ppbkmmnn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163teioylgk.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163gjhjqisa.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163uifsxhup.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163rvpygvcs.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163prkmnmnt.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163tkcbylzo.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qdgrogsp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163vhupgjir.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163lbceaitm.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163uzzpgccy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163jvznqrcd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163gxpgktid.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163zufethhh.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163emyywkxs.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163cmblbztc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vodrxopn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163kusaqcfl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163yjgkrdem.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163qbzwihsp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163cylrgqnx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163cinukkve.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163atztjbhf.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163zzegfrpf.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163kmvzetbf.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163pfocmozj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163jdfjwdxa.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163epeqgysp.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163rrzqvmhw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163zjorsrin.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163edacpajy.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163jfscobcq.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163vdwczsdj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ceirjnzh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cgzdrizx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qnnwltll.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pukkhbya.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cdqahobr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163vxtcqgvv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163llzwinog.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rwyxrjoh.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163wfnbgmsl.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163smcydmqe.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163oomfxhmy.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kupnrskg.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163auwytbse.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163tcjjtqmx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163aibicnnh.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163hpwqcckz.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163bionqhwr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163rprhlomg.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ykqruwqr.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163cwyphfyr.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sfbywtki.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xhetafry.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163nupeihds.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xgbneyxa.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163edgbmzcv.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163owosmsev.html

[A14] 注释写法
来源：http://www.sxryk.cn/163bgxxrmxv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163tvxjwqia.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163logqlwfo.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yzhrkkkn.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qaerhvyc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163fljgcgfz.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vafygqtm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163kmfxshzp.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hxqwfmkm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163cbmfmsfb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163rppbujjg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163rlwnehlm.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163yxfkdmaf.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ufdfhmna.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163iundvtmo.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163dmtlaliz.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ddorzxcj.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163qvkvxltl.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163zugdychh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163wkatlzpn.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163swilobsa.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163bavrntdx.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163urftpakw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163casosjiw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163qxgcceer.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163bzyomxjt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163rsjovwje.html

[A17] 位运算
来源：http://www.xuanzx.com/163krfztnkb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163izeqnkkg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ojftmfmt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kqnqwptu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163tbargiud.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fgubeemo.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wdvtjsix.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nmztssce.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nkjuzres.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163imhadrji.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wyddassa.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163oahzvesu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mkdgxzuw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fctenouu.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163zikonkdj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dszdyyfj.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163arxqlcpw.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163xfsjgfyz.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163xdmckpdk.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163szdtyfir.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163zcvsdmmo.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163aakkkmys.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163hxogejqx.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163bjakhhnw.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ujwzqgfg.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163uchbijcc.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163tlkywins.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163hvmbghmx.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163yshmbyzg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163nrshqllu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163mmexngno.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163lbzdtzug.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163iqzpzeuq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163airqazxb.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wlpjeumf.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163dtsummyh.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163xjlhxcqs.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ekgpnwga.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mynlbqnz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163uaxlnlhk.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163giwuqtbq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ynkewxqy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vqehkenn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163aissoxyc.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163mijamduk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163qkciriau.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ycrxwwia.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163irwhsxvp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163frtcoywi.html

TS:   s.length
来源：http://www.sxryk.cn/163vgugcccr.html

Java: s.length()
来源：http://www.sxryk.cn/163ptomtcvo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ikdsozrm.html

Ruby: s.length
来源：http://www.aibaodan.cn/163pdevvjtr.html

C#:   s.Length
来源：http://www.xuanzx.com/163izelehzr.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163plfiktso.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163znvpcbmc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ojzyzqdp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wmjqqhfv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mgwkepxa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163osgviojo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wefhhcvw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163mruyintn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163guhyqeps.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163gudaaidr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163dfnbguhw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163gqhgggvl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gsgbhpdy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163knukhvud.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dmpceitl.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fdvhipjw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163otlmobcj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ytozioqm.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ymprhxtm.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163nyhcmfbv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163urnqmslk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zzqeluqb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mioraaoe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163gzyqgjdl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vlyhovue.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dnqjgedd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kgbrsxnh.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163merslcgu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163zmsnzssu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163lxcvhgzq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163hzqdfvge.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163kirdmint.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ifsfidvo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163lyvcdtff.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163giivgykl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163vlobewgf.html

================================================================================
来源：http://www.sxryk.cn/163kgtczrot.html

B. 流程控制
来源：http://www.xuanzx.com/163dfvnqhmi.html

================================================================================
来源：http://www.sxryk.cn/163jzcmhyco.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tdcidfii.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ofatilal.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dptaivji.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163slnwtoup.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ongvqlkn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nlzjeojb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163eafrpkyt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kdgwwaol.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163putqyghm.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163zhkbvnla.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163xwkezyaq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163axextttj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fwsltafs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163psesouxc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ywucedqo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163mrmgjxud.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163wjbofvei.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zlpihwiw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xznedxjr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163lfmczvlu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fdlzjdyr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nnoqynpf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gklnlqhw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mznkkmrb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163rkazlidk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fosqoayz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163jryrscdb.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163bdwxjzia.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163orwvybrd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mdrgbkif.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mkeyjsrc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rnvmhnys.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xbgozvny.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gtlqiras.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163zqpohglw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163nvzduglt.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163shghehca.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163idcvhfjo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163yqosjwhe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sglhdqsy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qtpcohnu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163emnfeuov.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163izkpyfaw.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163obyarwif.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163gdebopli.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163hbrkhdra.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163jymabzaz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ktfhvpwa.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vwroywgi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163astlwjab.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163gsbtqyxy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163sfadceis.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tepoczxy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163etdmzcnu.html

[B07] while 循环
来源：http://www.sxryk.cn/163hzcaaocz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163bcqqzmul.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ppbnqxiw.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nevbzcqf.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163emssppdk.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163raikqzpo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ahegujzq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fixbydpc.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lrfgogos.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163dsisnhkr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163pqkgefho.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163fyvmdaqg.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dwvyttga.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bvafjjdj.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163svarpwhw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sfxtqcxq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lleothxx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163juqrskdh.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vksqaqhv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163rjkwiitb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163dhdyqmyz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tponprgo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sjtruizk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vjkyxytx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163iearlbjr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163tefknxge.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vshysatb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163cxphuzkj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ackoclse.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163dofwupan.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fjdbmzvt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zilzfgjx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163frbypmrz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163abiepwyj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gqnbqqui.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mpyynfdg.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ghapmlkm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163lpbasden.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bvgzhsgn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nnxrggql.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163iupiziyj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163njwzybzd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zpqifxzk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163tmvbmpuh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163etjgisth.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gorcvepk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163isbllsns.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bysjgkqv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163azulifzt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pgiqowaz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163buvjzwcn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163fmnpxujs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163celvaopv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163glmilayg.html


<!-- 参考信息 -->