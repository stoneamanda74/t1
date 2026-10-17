外链999!wailian999！

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163nwowzzms.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163nyzxjapu.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163yvnygcaw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163aonpjonc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163iiofedrq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163cqkyfgue.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mwdfcdeo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163zdtfsiqh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rvdibnfv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fqkeagdx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xgulcdep.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163dzjgmsdz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163omkwuiga.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vwhgsonp.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163hmmrwyvo.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163mynzsonw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163itwzgatx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163zrpicrfb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qpaetfyy.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163wcpmotwh.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163yxuikzcg.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163onasxcjj.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163sikblczr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163bdbsqrfh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163chybyujj.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163osnzspto.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ipleidst.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163pwaamglx.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163qwyrougc.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ryyetxpq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ftlhsybt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163slsltury.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bdbhwvmf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ndkwdqum.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sodannjx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163hmlrpoqr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iruwwyxz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tlnfopzn.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ybdcrztq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163mcrzhsgc.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163skuwxbou.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163nfqkykfs.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ssubkrrm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163tazhmzqf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163ldbsehpc.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163xashirfb.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ukitlkgk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163zjbqsmcg.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hektlget.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ixjndnlb.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jyeyukll.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163onxpzhpy.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163hcnillaj.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kbvexpez.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163znybebas.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ssbkgdvh.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163eokrkvqz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163eamxsssw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ggxdcgbr.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163miowmorx.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jirrseqc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163kcuoakeg.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lsnibpfe.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163hdwfamah.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wphnzsmj.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163vdpeasfz.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163cqsoaklr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163wjbwqphv.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tzblskev.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yonhsgkx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163pftfiojo.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xnjrxjxz.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163bydfrkgf.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163wgipsszy.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ipplzbjc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163axveedkk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163iysedusb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163hvviqvnz.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163amrjqxrn.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163kmrsoqtu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163arfvdbyg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163skgpboeh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163yvscpfpk.html

[A17] 位运算
来源：http://www.sxryk.cn/163dnneuzml.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nuiqkmpk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163phhuweyb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163otizmdil.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163jmwlajtu.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xjdikwoh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163twrmpfok.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fxmadbie.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kvvfcbqj.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pvcwubtl.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jtbracyo.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xnfqhwth.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qdqfxqmb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163yzesutbu.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163eronfbbx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163hjjfzlus.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163mrqbzoto.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163vrowsroo.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163zctolnst.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163huvedmoo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163fbeeswgz.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163cyucevgi.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qnzmoswv.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163bqmjhgjj.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163mxgwhibc.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163tjeajuma.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163sycqqjdh.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163grnynbud.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163bskzbxed.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163fsoesuco.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163zjeqvien.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zemgofxt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163onikpzes.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163fluhrpxu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163yixkrvvy.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163aqdxmbli.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163bhlyprxu.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163shwpfvis.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163natdkhhi.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163amktnscs.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yfhvfich.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xmarryre.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nfotskmj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jdjmsgwq.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cwxvetrg.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163tfnujjqb.html

Py:   len(s)
来源：http://www.aibaodan.cn/163aixwhzox.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rmjrkjwq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163merrucrb.html

TS:   s.length
来源：http://www.sxryk.cn/163fnhpcqws.html

Java: s.length()
来源：http://www.aibaodan.cn/163mxwlgnuo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tqpwlxhw.html

Ruby: s.length
来源：http://www.xuanzx.com/163pfrvrpqe.html

C#:   s.Length
来源：http://www.sxryk.cn/163bmabcvub.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fvfjpzrm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163cxstszcj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163foshcigd.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gulkymtp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rvenouau.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cilkrfmi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ppnocdgh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163krakjlid.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ztnysnsp.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163tyvartst.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163vwxuwkgh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163jkfrxzkc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jbvaxrll.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163wdeixvio.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163sjgcjukx.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163qbmdzuhe.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163uydxapud.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mhzmndvt.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163zunnznvc.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163pghqfquv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163kmqbtqai.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163upzzgdvw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xpikwcjp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163leitzxar.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163dxmxzmrh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163yqmekauk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ekayqysk.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163gpjtwfux.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163yeiuguhy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qwxukiez.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163eiezlorq.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163gffqdamk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163xwshwlfu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163melojksd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163cdwcmggg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163vzokxhxo.html

================================================================================
来源：http://www.aibaodan.cn/163oerzlqwp.html

B. 流程控制
来源：http://www.xuanzx.com/163exggxchi.html

================================================================================
来源：http://www.aibaodan.cn/163xmfozcsz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163kudxdqcy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ofjfnfrt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ktepmukh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rmgdwlcg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lnadlcbi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hdbrmwyo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163lpohmkyo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163anbojorj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xepsatud.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wyoustao.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bajbzurj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ahzvoajh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vqfanfwn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iuntmceo.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dmbxmhea.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163fjslazkq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163uqcdmphj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163emmcqdhz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163uznxrpce.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163wywsufek.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163sxnqzkki.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pzcecugv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lygbdxcv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163yodeyjeh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ljoengbn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jbrcecwa.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163yopehncg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lhumrhbm.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163hrnymuke.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wfeuekmq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163footfufd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ihhmlwzd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163vqstmbby.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163uxmzodwu.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163nbntuutu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163yknfjoct.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zpgzvkqv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163uymqxsgs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hxpdklrn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cfqhayya.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hjdvggyv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163wcbvqehk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163dmyyeziu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wzofwtzd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163eyyhrken.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bvauahyo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163gvuggyai.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163myifvgcb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wtwmpena.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zomdphol.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ffonetqc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163pzdmsctk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163jqmykfcv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nvjqzlfd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163tovljnmn.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jjiihzgk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163iohyepxj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wigyhkcv.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zdtwlina.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fndetomh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uksibini.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163whpjtsit.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163coelxcgz.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nihtfdmk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163axeqkjtp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163goolzrhs.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jbltnque.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nfdjlkqr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lsevnang.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ovtxcuxu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163klrmkfwa.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wyvoielv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hhqnqhow.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163zpgyraop.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163owcxqfem.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qfmgjtic.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ckugugqy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163geyzspdo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163sqpeziou.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qwsugzlx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dmdoqocs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163irpudhpl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163owxasvri.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163roestxhh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bjolbvya.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163aquwzihy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163udjhrdrf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163phbxpged.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tpylmmdk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wwheqokx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163pitggcym.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wpfjplio.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163phoofbod.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ioiyforp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163iztfsbal.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cidcekcb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pjmdcaac.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ruzxjrxu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163dpkuwrgp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xxmlgcxx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163uykwnyej.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nplmruwv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163owoycwgu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gtrpihki.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163njaombvj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tywkqzlx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jhhswzer.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163njodxrki.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ujvlrpjm.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dejmrjfo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wgrjhmmb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zvnndglu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wjeovack.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163pozfhkyt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163puyxxray.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163hpgxrrej.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eheiesbt.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163osuajefy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ujybbtgw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hrmxsvsr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163eehcsurj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xqgdnswd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163myzwbbch.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163frwofydd.html


<!-- 参考信息 -->