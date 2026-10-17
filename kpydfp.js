外链999!wailian999！

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163irutylvf.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163owqjeotg.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163poddsngb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163lbvxbbhg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163njnsxxau.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163cplhtvzq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163mqsanrmp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163gnxuiygu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163wutjvxqu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163quovfylm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163iqxsenxy.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163osggtfyn.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163pxvxyzfv.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ydsxbgon.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xtshamkw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mdsisqeg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163qulwffzu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163pklmwgbc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163pgxkwjlw.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163pmtnmntd.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163fdmdolno.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163cadcuxkr.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163djbcvesx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tclaohyo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163edzkatti.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163kqkngaqh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163spkpykbt.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163zjofyxwv.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163skniwstt.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163dctqlbbi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163idoxtawo.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ujxqlatf.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lgrvkyqv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kqxxbmrd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163raqlljtb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163jbzeykle.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163esnitkgo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rxdgdvdg.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163sovqeuth.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163zbyjnxqq.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163jxbrxbdb.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ltalbihq.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163suftpmez.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163fmyvdsia.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163zqjwqawq.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ezikqjij.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ovpcxxlq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dafvcjqc.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163igaalfyh.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163jxzlyruh.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rbrdygdf.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kibrdefy.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163sayovaij.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hnlplfiw.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163bzahaoqo.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aynxuslt.html

[A14] 注释写法
来源：http://www.xuanzx.com/163zpalkgvl.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163bmnmsxix.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163wekhdarb.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ggqnzoez.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163dohziwzs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163yptmjazz.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163iaatpvxp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163kufuuweo.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tmejddre.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163abmiozad.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163xwpguzup.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ecdhxfij.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163lpwskivx.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lidqyovh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163nhtentsd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163mbyijgqe.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163codwpoqd.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163jnbrmrbc.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163yemnhgfz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163boflnrhk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163uvdqjomi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163qwztqnud.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163hqbqzkwh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163urokfytk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163pbxwkhyd.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163zcjjmbxy.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163kiosbryv.html

[A17] 位运算
来源：http://www.sxryk.cn/163kuszloes.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ogkbyxdl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163lgohhtgc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pmilcfoz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163crtwxdic.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163atnibfpw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163irsplkql.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mognvxqw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qotdoxgy.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rinccaly.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jriwxmuf.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163huphabgk.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kmhnxaeb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wpsuwpzt.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163jkttvkbb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163prbraboo.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163qxgndzbz.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ulvmhatk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wqftsmkp.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163luslumde.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163iwstztma.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163sflqexdb.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163czhkphhj.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163bhaspkyv.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163apdwdemu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163epglyfqx.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163numyfagk.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163kkjpxojm.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163cgbpyigl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ulwylavf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163mllxvgyq.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yjgsskyy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163hgrrhfsm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163iruwpoud.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163htkbmhvi.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163tcftgdcx.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vvsqgicw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163khlvobto.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oobwzkdc.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163jngyttnz.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vxechntk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tmucefxx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jwxhmmzt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163aatjeexl.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163jlavoabk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ppzluzjj.html

Py:   len(s)
来源：http://www.sxryk.cn/163jepyflqw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163zanklobi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ddnxgfxb.html

TS:   s.length
来源：http://www.xuanzx.com/163itavugqz.html

Java: s.length()
来源：http://www.aibaodan.cn/163fkybuyjs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163amayteoe.html

Ruby: s.length
来源：http://www.aibaodan.cn/163tjxtuxge.html

C#:   s.Length
来源：http://www.aibaodan.cn/163mgaxbdwv.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163cuaklann.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ezcofzkn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ipwxcbph.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163taofranq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uvgpeugn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vjvhzbiv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163lshltqwe.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163uaiqzlyq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163eszlbqvw.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163isceqkwh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163pkdoxmwu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163vlnnzuoa.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163emfsgdyn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xtulappb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ylqzxawr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ogxmdnxc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163kkbhjvnf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163iggvhluc.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163okusscod.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163uccccrti.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163hcmrxzsb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163iiroaytl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fozfyymi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163rdkqmmbx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ogwrwrmc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163oyklbuyr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163uyhqmgur.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ihaufvtp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163oumcdxsh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vmcubqxp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163cxcfndxy.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wnuvjqhl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163cuccbajw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qwbdbkxq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ehyrkstr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163jcqydnbv.html

================================================================================
来源：http://www.xuanzx.com/163vcfaexzh.html

B. 流程控制
来源：http://www.sxryk.cn/163iofaqkux.html

================================================================================
来源：http://www.xuanzx.com/163getyqakm.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163juttujvn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jkfiloob.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qpxisfxl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fwkxpcug.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lupcwgnv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bqahnwrf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163oxuvrnst.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ztavstek.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cuhefuax.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163yogmggrq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fzeukzhv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163bdlgubun.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yszjywfo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qqsskqhk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163emhnpytm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rxeryyox.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163iedshist.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rabplcsi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163httsywzx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163tkcsxpjy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fsdsptbq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qgwncjyt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pqvypafj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163dbfzxibu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163dygiesxl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rxkpjkqe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163bemaawke.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lhveuapq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pdqdgbrx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163udmezlhf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dirzwswc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zpfiqtln.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hcebczra.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163tpsjaxqi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163cqyprkvt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163mupegtut.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uxlwwhhf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jowyrnpm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163hteuppjd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163obkzgxsk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wtujnbdm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163odchrlha.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163slnipnra.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wtlrfwdm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fevpryhx.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163cotqloud.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163uyurpqcn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163lfbpldre.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163orsluwrw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vaniqgwi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vtihfvwn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163imnxqskn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163qmreaujd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rkxphqum.html

[B07] while 循环
来源：http://www.xuanzx.com/163tdybjkla.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163yylznpnx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163biyhqvii.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zbxizcol.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163shtllewu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163krcxscbt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163grkilmwh.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163nmmouspv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163njpbmchg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rkdjcgdu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163cpfzylla.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163elcfpcme.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nyldtklw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163agdmwhic.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pwuepdqd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vpjcgajd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163grnfypqe.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gkesgwul.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163algbfexw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163pxzyaygg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gywvvnce.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fagvmtpw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mkrvafoy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163arqafdsa.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163kiqsfsjd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nzfrgmaq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ozxtoltr.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163cynuxpae.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163yxlelknr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cpgwmhcx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163vngnswkg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163vnytetqi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gnypxubv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jnlpcasu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163fqeeuhrr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wltlnxrc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163koxnhhus.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mkxwrpvk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jyfqjiob.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pikfghzz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163aakxbvqa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ikttuxxx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mttdnxiq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mgplifcp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wvccaiyh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hidanpce.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gpzqlpye.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163mqzyppsf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rzmaxtvm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kerebkfk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cxjocptm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163isqfghxh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gzotuggv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ldzjjvmc.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163idjwbeax.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163keupoftb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163jmjrtfik.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163otubvjrl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kwbgzuuj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163evufykqn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vdvuhxun.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ndiudvqg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fkdqpeab.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163orpczsmd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ayshkngm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xcpmwbqr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ebhlsfpr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163looepovt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rfgknkdl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vrftsdoo.html


<!-- 参考信息 -->