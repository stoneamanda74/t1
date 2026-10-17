外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163cgvckbwi.html

TS:   String(42)
来源：http://www.sxryk.cn/163kiuurgmz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163uqagukws.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163efhsqqoj.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163vgvadrfa.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163jbkfxthn.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163jhnsaufl.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163twdtbnfp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163oojscjyx.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163jnahrzve.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163rdkgwdpy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163egyhvvcs.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ebmamksp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163unzajgdh.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163pguvuovb.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163urswahph.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163zyldxgey.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163cxmvjzym.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163revncnwo.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163fapjigrn.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qsatenhc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163kcfxuiev.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163lbovtpnl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ztpwpxpi.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163zeauikcr.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163lvqxvzze.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163itnmxxyk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163hemnpzgp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163fkiqqikp.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163mspyhejx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163xadixzlb.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163qxjldkpe.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163fkthuntp.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163fpcikrbd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ooxclmfx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xxjiuzeb.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lrnpqcbs.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zqfiqrrq.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yupftpvs.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163uinazakb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163iovwyzyp.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uscpeyvl.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163kukrlnkj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163zcvyehyx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ksbctttp.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163trcohzqs.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pexhwsce.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163plkrkiju.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163xjwxixlt.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163umvogezr.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163iyfycgli.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163fwifedfw.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fmcncdpa.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163cbaalael.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ssxvsuzr.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hakhufzz.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ugijeesl.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163emuefdlv.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ibjajmcv.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sbfowola.html

[A14] 注释写法
来源：http://www.sxryk.cn/163odqavtjx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163kljzyydy.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163nfwlzggl.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dkjtodrp.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jlmbhgke.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163nxovffdz.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163shwsbjip.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mhifwifa.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163arrhtyvr.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163xguulqbw.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163muiovkip.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163mefhbgnl.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ytgpnbqf.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163djblwowz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163rexzcsdf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ldadsfht.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163loiyppef.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ddmprhic.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163dxzuwteu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163avpqpclz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163dgqscwri.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163apmdboaf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163afalnzgf.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163xmtxyvjl.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163pqcdhrum.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163togqfemp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163kxtibnoc.html

[A17] 位运算
来源：http://www.aibaodan.cn/163vsytsalt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163elozpovh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163gtijdepk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163crlplrsh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163uwxukuye.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mthlrswg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zlqukevq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mryexnrh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lnkxypsg.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163bafdxkho.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163oellhnmt.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ymhkjbuo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163twsyqwla.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163dspszjar.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163auqdjdhl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163wsyumzoa.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163lwnfinzi.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163sxtmmiph.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ldswfkls.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zgkmkzsl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wdeqtasw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163sajttuov.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mddlnfip.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163mxwtkxsy.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ehwzuybn.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163bufsjwgh.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ekoxogkx.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163txmvsxmy.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163fswqptlb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163cbzsjbvu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ucwfbrdq.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163srbukviq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163yvvsdwpn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163vjcjkznt.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163dovjydnq.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mqyyhkfq.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163zenkulid.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163xbrlngan.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fvvgrtsc.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lxdoxcor.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pxjanfpc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fqwlokzx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mxzrgcwv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hovnshpr.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163dmflqhwn.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163sndlbfjq.html

Py:   len(s)
来源：http://www.aibaodan.cn/163atgggwgh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163hnoqthmj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wjecuhbk.html

TS:   s.length
来源：http://www.xuanzx.com/163qomdaytf.html

Java: s.length()
来源：http://www.aibaodan.cn/163cvzehtbw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fnwezyyp.html

Ruby: s.length
来源：http://www.sxryk.cn/163wwekpjdu.html

C#:   s.Length
来源：http://www.sxryk.cn/163ldwihaxu.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163idrnvyrs.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163kdmozilp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ftsfdkue.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163unxqfgfr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ajsxbncz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hpbhvtix.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163hmltnlps.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163swlarbqj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163mhkkwizb.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163yqpqaxnn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ouofsbws.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163fincilvd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163eyczbyfi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nywrxqck.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163jyjwprxn.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163tehjhkdr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163qjduwucx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zbkeiwin.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163bglmdarh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163swprusdl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163aymgslxt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fsvuvkjx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rpxjvhjh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163uptcbfou.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ukvfkzwo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ozbtyevq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ngitfwmb.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163taxywyol.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xrwcdlse.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163txaemxwy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163xdoannyd.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ipjpgdwe.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163agimjwph.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tpgizaym.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163clhtedxd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163tzozuehr.html

================================================================================
来源：http://www.aibaodan.cn/163wwliwjdi.html

B. 流程控制
来源：http://www.xuanzx.com/163ldcpeuyc.html

================================================================================
来源：http://www.sxryk.cn/163ewokqwjb.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163caypwabp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163cmtcjntv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dylipfci.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bycoxnmm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mcrvatbb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kechpgvu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ghigxeis.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vzclpfvz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qgqaxzdr.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163hkucgorc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163qrudiuvw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zdxhonyi.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163onaaocli.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gfnvelqi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ojwfyzvy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xlnvfhkm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163jhwzmpap.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163naukbegm.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163niexkytg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163kbjblpnr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163zjqagytw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tskjlviz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dchhcwhk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163wgxmjlhk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163dvxclyfo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jkoauyyj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ntonzvlx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cuepoxkm.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163twszacnu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163urbjiqpr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rxudqddl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163czgipqxg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163cuyyalmz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wdkfqeqd.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163unsmburb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ozrtkbiv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xbdbulgq.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163qfddljia.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163tvcyhqzq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pgdmbkvk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mcxzovhw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163aepsuiov.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163bqptgyvl.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mnjmpauw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163gpyomdmd.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163kxxieaje.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xezarilw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zjpldfuu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kixadoxg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kliodhsb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163sogfvjvm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163csybdadp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163yisvgywj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163cyhguiqi.html

[B07] while 循环
来源：http://www.xuanzx.com/163zcnebyjp.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fdobpmka.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hhlwwimu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oaxgqqin.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dltbcjpi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163avbvpuci.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nnieocbz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163grpmatqn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eplvnyry.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zsnwwenv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vvqneuxy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163atjgiksn.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vgeaeayz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wjbagswk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kpjguxqv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vldjylot.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ggqqabbe.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eqpjqcwq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163uspvvjnu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163sbjqafxv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163xsdeqgxu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qdedtryx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gttufwyw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dgtczbbr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zsvxikta.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jtdxykzl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163psmlratx.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hvbnfgjg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vlqdpqpy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163thfgwipt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ptyylmzw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163skvpszpv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xyquslaf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nrjzdxpd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fpmdjaug.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ubxonleh.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ghrtmxvh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mcyzftgu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163amvyjucn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163orznvawe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163unwbbezm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ebhcfbyu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hdmkyljp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yddphbmc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163dfndilwk.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wvkcumjm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xwvbbvzj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163khvdgrrd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oyvkijze.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163stxehsfp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nyvjqpiu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jlqkrctv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163endbegap.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hgahteze.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wpscskoi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163cuxkeyvg.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wlcfciys.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gjsiozmx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yhrwpavu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ukzfrwpx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163adfavdgp.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163esxiwiiv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ehowcuqv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163upipffax.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163eyggqjsf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qnqsedtd.html


<!-- 参考信息 -->