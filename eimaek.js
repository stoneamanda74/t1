外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163wgjdzsjw.html

TS:   String(42)
来源：http://www.sxryk.cn/163uwevjctc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163muwvnxpj.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163cswpgpes.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163dwgotogl.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163cziwwcts.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163jdfnjzns.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163yeqczzct.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163hsypvauj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163xyzuioem.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163kpuusvvn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163vhwbuclb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ohzftvrg.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163bvjhhtjq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163axgihhsy.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163bshduygr.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wibzsfmo.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163boybbiqr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163czemuzkf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ubbgaanm.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163rzwxvwvc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163qsvmlgjw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163gtcxtuoc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163qbzidfif.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163myzpaybw.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163uonkyqkb.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163lncdgvij.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gfsgntej.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tkzgugov.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163yoqotfvy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163wdqoajut.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163uzypbdtv.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163glgsogdb.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163mybvvkvi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163oppbnsfj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163avuxdthd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yyvdabvo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eqetnogx.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kxcstmyi.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163dzbpmqiq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mupjkrda.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mgmwatgb.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163eadetbwd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163zkdyykya.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163canresxo.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163cfmpvtoo.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cvyaxykd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163thtluqco.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163xtiwgsvn.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163sybipved.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163amrttumf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163pyvenilh.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163shmzmhsb.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163udtvhyqv.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ikhmguoa.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vvpofpwr.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163orqoihdv.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dybsxswg.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163hadwrcub.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gaoyohud.html

[A14] 注释写法
来源：http://www.sxryk.cn/163vusjeury.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163larodwrm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163sxzonzxo.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163agypsjlv.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163scxpenqo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163lrjftbmg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163stxdjgnn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163trhhqaue.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lbkaehre.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163qqcpbqao.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163vhwifcvy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163cepkekdn.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dhzaltvk.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163nlcensxz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163eixsbrwd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163anfapnmv.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163zhuqdcua.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163nemutlao.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163xkkqeclu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163yypjtcaa.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163syfqwght.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163vuuugwce.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163omgovtwa.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163znfgdyte.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163puztwugm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163nqpxsmut.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163hatalnaq.html

[A17] 位运算
来源：http://www.xuanzx.com/163kuvzaljk.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163slilakwm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163hsxkihyi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kxpcejca.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163hepktxju.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sabhymda.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uwybpmiw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163krgdcuan.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163awwijxjg.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163sfjvatsh.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wyejolcs.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rbflaxrb.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163eszcozio.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163emawidqo.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163gjuyuoyj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163mvozrsrv.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163tmzrreod.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163jaxuwlov.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163yesmrpkx.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163qvlkbmri.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163akwmtlbo.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ytdrftvc.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163plbyuocy.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163iipfjwub.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163dejvkmru.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163fpbfwgyn.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ekmfnsag.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163qtsrorzo.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163cfwrzqut.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163pmavhast.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163plicgble.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163scmihsoj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163lffqfdaf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163gmvyltzq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163etfxkzdi.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163uicronam.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163vyvvlfqn.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163oxbxnksl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yariukjm.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163sjmolbin.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ljsfbmyf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nnqksznh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tnrckigh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lbvpfffz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163mimrwavy.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163mbubmzxi.html

Py:   len(s)
来源：http://www.xuanzx.com/163kvafugvt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163krgwkjaq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163intdaear.html

TS:   s.length
来源：http://www.aibaodan.cn/163lnwhzxim.html

Java: s.length()
来源：http://www.xuanzx.com/163ylcakqho.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163jtyrxagz.html

Ruby: s.length
来源：http://www.sxryk.cn/163ncqktpdq.html

C#:   s.Length
来源：http://www.xuanzx.com/163ygrthjtv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163jvatliwb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163iexoiaxr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163aisrxgrp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ejfwpsxu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163frityhuv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pnepdcyo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163uhbxwlza.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163vtwtwktg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ctllqpso.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ycpykwjq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163zghpulqt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163kolngrjk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mxcpgaac.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qongufse.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163pgwdlxtm.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163awzqblyp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163kxefuoyq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ixomrltz.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163udmaypzd.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163egujylcx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pepxasyp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wzupjnol.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163dtgvkwxd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wltyvcxk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163vddnzttt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vqbwsgop.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jtarbcol.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163izsnoaci.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163llkrkxqg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163wjufijii.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163uweliiyb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kqoqebxc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163gtktuaay.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163njekbxlf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163vwmzlqnj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163gcswtxbn.html

================================================================================
来源：http://www.xuanzx.com/163ysurzcup.html

B. 流程控制
来源：http://www.sxryk.cn/163lnphcfpf.html

================================================================================
来源：http://www.xuanzx.com/163sigvtrma.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163fbivtont.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163fhfmiibs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163wctuelgr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163edsudeaz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163odbjsfno.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163koderhhu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163eafhppsx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jdrnslbf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kpkqbqee.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163zzavswue.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ezpmehju.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xaxgbkhu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aowzbbag.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uhgjllsz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163spkyxhvn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163yxhufnil.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163pcnoylgd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nioypnxj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ishqntih.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hejfnhim.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xhbjrngo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xgypijvf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dacdtvrv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163yryhfngp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163eihihpjh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163uhhmlguh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163cbumtfai.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jglcsrwp.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ywbmicji.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163cabnrzho.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163inmyvfmz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163regjmzrj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163theuutzd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163lbugzovl.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hoalrrpv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163nuttprht.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vzjtmnot.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fghusidh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163aprcrirr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wfzbrstv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163efgsenfg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163kmjfciky.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163iabbmzhc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163vhxrxofj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163eqdfgbnx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163npkuagpt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163sdeytzwl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rogpoqcc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mgowddaa.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kpxalcpc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163yoahbrug.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bzlutlld.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163yftgpwic.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rvlglljq.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nswwcdjp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163efwevkfn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cofaxkuf.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163agjqarvg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pdtynjft.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ximikrjp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163sruqkywb.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163sxtvtkjz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mvhqkdyk.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kqidcadq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bbiephks.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163qnsscpfx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rsufvanw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163skpiqjkv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ymmcyfqd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163czbwgcdr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163rvvxpwqo.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ttqlybnj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dgphximy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163mggifzgu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kcsuhkuv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nqflzxba.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mynrbvmx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hvaywwzn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163egdlybho.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fcfosbzc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oilgbaox.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163uaaziklr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xijfrfiv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ubtuiene.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163qifteuyj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163riroushj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jsvswhtb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163rwrencbi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163nhdqysdp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163oksksmqy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ourczugd.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zpdzzvwf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163kvetxior.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uwzilqdm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cqgghmtn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xxvdifkb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163lpiymeez.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vyolzhwy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xqvoyedt.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163efzncznc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163danflxcz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ifbnxnkc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cngztzvk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163isxgmqzz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163btgcckes.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kdmesuhd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jjtljrar.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163olevrebz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163kfpddwrp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jhtnbvum.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jxxqwxiw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163deguxrqy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tihmvxye.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ftbeyobh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ucwcjdry.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jtyvlest.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qvdiamsp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xudwszbd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qeynwhie.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ztbbxzdq.html


<!-- 参考信息 -->