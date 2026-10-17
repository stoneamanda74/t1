外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ucprcmyx.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163yampojkt.html

Py:   str(42)
来源：http://www.sxryk.cn/163pbzqfehx.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163fvbswsci.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163kpkvlxaq.html

TS:   String(42)
来源：http://www.aibaodan.cn/163futpqsap.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163cbogfoph.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163icnnkhvj.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163ifeysghf.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ktqkmpxv.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163vjpomcun.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163kxwrridk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163iccdgwby.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163fjsaizzo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163ykvkjplr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163eauxttgh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163nmsgblsx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163mprysqqn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163rxeairxn.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ozxecuvb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163dfvcvjzt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163mqlvwhcv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163sjtehiud.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zdablybs.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163nfrcvtzo.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163rfaeiave.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ocryjdkh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163kzfnqcrc.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163vhzdluxc.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ydvpfgpu.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163nmkgndxx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163dwejrfri.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gekwfzwc.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163qnlhyffi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ioywetre.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163cewzoqmf.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163umvmztjr.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163nqbxlszf.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163iqxkbxex.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ywrdjlvg.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163azecawgy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tvedaoif.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qjbjbfxn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163oqggoxdw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vaqfulgo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eubdbfvm.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163jlugranu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163dzedtgki.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163irefqvla.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ibjnvaua.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lidwkbkp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163vpjqjbxh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163pmijtqxi.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163cseanvmf.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163asivibif.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163qlxoljvm.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163twnpjqjh.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ncykyrlh.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163skhtwxzs.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qpsnqejk.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163pdfvyzfc.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jbkfocbj.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ptdhavdf.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kddtlign.html

[A14] 注释写法
来源：http://www.sxryk.cn/163fjwkphqz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163mlglrwza.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163tglsteyr.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yqtzbyda.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gvtefqaj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163clxxwvmj.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fwbbnfob.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163xzekoxit.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gbxvamyk.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163fkghzzvs.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163cabrodfg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163xlnxfdoa.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bwzsbkdr.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163gosnbvxp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163xnzwpotr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ivjckbzq.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163rwkddzsh.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163uchgbeno.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163yiauhlbb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163nmmbzoeb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163rvcfkytk.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163kpouvskb.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ofgcssow.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163yslhpdop.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163nhaxkpnc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163pccwrged.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163esfigueh.html

[A17] 位运算
来源：http://www.aibaodan.cn/163eulrguok.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hvtxpccq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163gbdxsaby.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dnymbxod.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163exdttmmd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uximfyaf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163seacbody.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fqwachts.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zednsepq.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pghraewl.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jxmsxrbx.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ytldyrym.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163bbhyqowt.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ojosknqc.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ypqzarfk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ywvygbga.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163mmpitqvg.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ibhlzsca.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163cgrhtujf.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163mrzhwvtj.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163izvfcyhs.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163eeydwfco.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ekxptchb.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163qruypocd.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ndgcjbtk.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ujczpzlr.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163mdnvipzz.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163zdtiwzxm.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163pmhmxugj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163vogjbqqk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163tkllxeft.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ayktbhar.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163zfbpglmi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163bhtfrctq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163sfaokyqh.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ltxjibar.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163yhyydypu.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ojbhkdbc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163neixyzkk.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163iaxhlenr.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hdabjvyj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vbrwbwcw.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cvbfisdw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163eflhctht.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163oqkfyffx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163nnnozzcn.html

Py:   len(s)
来源：http://www.aibaodan.cn/163dmieqakn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163hajnquqd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jwrmruys.html

TS:   s.length
来源：http://www.xuanzx.com/163bearjabl.html

Java: s.length()
来源：http://www.aibaodan.cn/163vvvfrotv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163mjmhsdsw.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bbipftpu.html

C#:   s.Length
来源：http://www.sxryk.cn/163kbcpzrsc.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163wnfneulp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163luzgncfn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163psfpbafc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dbjjstqd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bdzftehw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163swdnegsy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163rspqncnf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163pkhleafk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163aoopyrcg.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163soloyzfn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rpndchfx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163yiuyyyqm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vttyimyw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zcqjfqdp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wluwzzvn.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jmpezorm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wotuwpol.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163dyoxkbzb.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163opuorupo.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163dsxjhgsd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ddlzrquv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tgvobfiy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ojjrojwu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163gbnprezd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163evkjdyhz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163rediwfmo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163dwfttojt.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wtvlmatn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xpyqduoa.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163cgmfvoec.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163eybtaywm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kjabztzv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163cnnauizk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163blrutkgv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163pzdnpchl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163wtabcqnk.html

================================================================================
来源：http://www.xuanzx.com/163bgzuhcyc.html

B. 流程控制
来源：http://www.xuanzx.com/163iawdrxjq.html

================================================================================
来源：http://www.xuanzx.com/163wyagdafw.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163wbfxaaod.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ghltdlkv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tnblfvrk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163njoeupep.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gaseekof.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lmfagpew.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163eokwiusl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wyaodbrz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ilbvoodw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163cfkvmewn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163dtymhqpj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163cjiynrhe.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163epxcijet.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kyunpusj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zcurrtit.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xqijjofd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ntdmecki.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fxlfynha.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fqwzshsf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163yxnanawm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163netzregn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jkqngejn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jiuflott.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163gvfkjkqk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qdawafjq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163rsmmjxqm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163creltyth.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163guynewar.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163izibcoxc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gkgjmmhq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ubempxmx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qjozybvb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wzgumlem.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wfdsycop.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gdcykuuf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163rjhwrkdt.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163qoewrebm.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ifxieyjt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163mrmbwqxb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wluunnnu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163obeskxlv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vvelgrmq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ktonbvzy.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163admshmmo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163qfkqugxb.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163iqooatsc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cswexlcq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163nfstebhe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pcqtzdea.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pjacadbk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163cgicjwie.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163sdbcmlpw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qviameer.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ulxktwbk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163wyqumsjf.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ttfikvsq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163abpvtvyx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lmecunyn.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163krmnelfq.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xtdetrmg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163iqnqpywr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qtcwkysp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rxfejkkz.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vsmusgqa.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gvjgkdqi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fevomxsv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zlcrnmov.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dpznsmbv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jeanmedm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gupizhvz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ynbzrzfw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nkzugoor.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163elqvfcbv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163qgjainmf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ulrdpevl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bngpuoom.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vwyutnry.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163drgqtnnb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gzxrfopf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xncxlsdm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hyqllfke.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ugqexwaq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ljhxgwan.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rcqwrgjt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vcertywe.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163awxkamey.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ipbbgele.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qisomyki.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pjanprbp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163agbgqciz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163lqwzenau.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hkugfukk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dxnyksdt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lofpgzen.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rxfmkpog.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wvvctuir.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163djnmduhk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163oqirttib.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tzznzjmu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163pgwowxsb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163vabpcvjx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163njncgybw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163grdsbufq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kuepzziw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oevqksys.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163guxwotvd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163higifgdy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163iieeaask.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zjwusgat.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rqtbhfuz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xaoqwhjb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ywumusca.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vupwztxb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163rvkruqwt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nulzqqdp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wdoljewk.html


<!-- 参考信息 -->