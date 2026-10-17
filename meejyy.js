外链999!wailian999！

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163vexoglsr.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163eobvxdgl.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163ikegulok.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163tocasgmt.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163eryedfzt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163miiufbsn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163dbmmagfp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163obwestmu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163ypcpvfyk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163dkgzoakh.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163yyusiafi.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163srtgdznp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163hswslyyt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ugcjwlvf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163qhyofmlv.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ilpvztqw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163kasquvah.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163bkvohgbq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163ivnqpktn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163vulnalfy.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163vveqoosu.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163aslvhqkz.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163aeltfcrc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jnwhinxr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163bqcupmnr.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163islaghvk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ezmccril.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163zusotbmo.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163hznujzah.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163vogegkee.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163pzqujmoy.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163muhiwfsf.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163olbzfked.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cdzpohsc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163shkhppvd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163olekqird.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fclbscts.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zxgiyvvi.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163pvfkczmb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163pkyrqwwo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163pkkfpwvi.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163xhrkvvie.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163egntyveu.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163lpjgrqyk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163lpksenja.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163bnujylbr.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163ynzpduda.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163aqvhsyhp.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ernmxbsr.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163vxtlreho.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163piodgszu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ldxmynrj.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163uxnkrxmw.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163emvbvuue.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163mhuqcuvb.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yonytmnt.html

[A14] 注释写法
来源：http://www.sxryk.cn/163zimptwqk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163acchbrpm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163oyezfovd.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mjxglzgj.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lmfhopkd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163tdkbxwqw.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nmlxwxjt.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163qegcpqbu.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gespcfnp.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163joaafjwr.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163kmtanycy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163dallclfd.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163praymzhd.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vvzhiojd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163faccqpnm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163aqemflkb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wiggoaii.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163diwnsyes.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163skcuemgz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163exnkwfgr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163jkavuztg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163vpclimya.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163wvnybxhx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163mocuksgm.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163pdbhaqie.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163nnopazta.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163rrkfadac.html

[A17] 位运算
来源：http://www.sxryk.cn/163kowmcdvd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hlawhtql.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wytfyftl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jnkfnbxq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rhduzora.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pefltruu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ofgkuffc.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fawnarlh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hghzblhb.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163badwustp.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pbehqwrd.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163znclfcjo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zxktqgzf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163akhugaaj.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163utuxrzjl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163yyofbkib.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ozyxjopj.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qcptdiiq.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163sdvzdzgq.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163tjnyckqd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163kjuvczce.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fcljrbtj.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163khsnlocs.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163muupyijx.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163fuvhrzaq.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vnayjaox.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ejywpwok.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ymnlysvp.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163qktmijla.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163pzuxzwqx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163fcdhnntl.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163pyiatrew.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163bzouwjmr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163onncctgq.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ghhttrer.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mckmeiyb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163oyghifuu.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163gvdsjkjl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lyxcpemf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rksqsrvs.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163zvkmyqoy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hkfynwyr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jlgcmvgg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nwoeosyi.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163jmlgxkhz.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qaqdjsfg.html

Py:   len(s)
来源：http://www.aibaodan.cn/163vgvqxnmf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163hgcbraoe.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163cujrhcld.html

TS:   s.length
来源：http://www.aibaodan.cn/163rgyymndk.html

Java: s.length()
来源：http://www.aibaodan.cn/163ojpspcvl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163nncvnmcz.html

Ruby: s.length
来源：http://www.sxryk.cn/163bcruehtk.html

C#:   s.Length
来源：http://www.aibaodan.cn/163exgkluud.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mjrsperw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163pwbwptud.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163mstlyein.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nbnbytcl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mjfnxlcx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xgfghwob.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163chposphl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163zrvurrbu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163vfudrpip.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163wfpefjyj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163wzupptxf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ngdiofji.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ykemwkux.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fmzvbijy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kffpblgb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163fcjaqcmx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163kxhpamhx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163qiktghjs.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163acocsegl.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163iuwxswmd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163iozysaav.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cyshmrdp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163lhadhzgn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ibbexurt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bqkozlux.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163abhkuvxp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wadjrofe.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163cqdesxnw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163peoseaow.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163kyludnwl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163lsovxzmt.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163xqrdwdts.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ebrjjxub.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163noivryay.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163dxckgyux.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163yyywkmzw.html

================================================================================
来源：http://www.aibaodan.cn/163uakwlvft.html

B. 流程控制
来源：http://www.xuanzx.com/163akyitwjh.html

================================================================================
来源：http://www.xuanzx.com/163qpqnuxfe.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163wblmkvog.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wzeqbtvb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vzdsqovt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wskqxwqc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hdwxamek.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163skjybhxo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163xixrkbxx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163rthimaal.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kpqhjhio.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163axfrrrje.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rjokrimh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xlorynfa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xpnhwfrr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lwydfdgw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jcrvqmby.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163gcenizph.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163veiurbaj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tsxeuzns.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163vpynluaa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ilcoebwe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163yasgpgod.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mfqmxelz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wjqvrewg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163abumdant.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163vkbmqblo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163qqrcbvlc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163fzsbrdyy.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163bgmsdfhl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ynenvova.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163htdrzwcy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mnlilfmn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rbfndwjo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ormvyumm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ftcanivu.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gnjougjp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163gshvyfsf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xrfonuak.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163owwkrfvd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xdvgklda.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qoemhnvz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wvfvgzxo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163yilmwyvz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ggynysth.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163njqfiips.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pfnghfyu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dxxtbzgk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ydkduhiv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ntupejso.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fsriwxjo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mirakcac.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163xgkbacfv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wrxcelyf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163cnvngcok.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rikervox.html

[B07] while 循环
来源：http://www.sxryk.cn/163tvdtjizq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163nadenxmt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163uinkowog.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163adtbxoje.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nbtfuquy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cciwzzrx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ywglnxgj.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163rqdtwlde.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rdqxrtmx.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tqleubzn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ccuxjjxq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vxtmvomn.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ajdlxdsi.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ssukbgpf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bzjywzad.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163nipyhgsv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163afocnzxs.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fpfvsqct.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163grlaynym.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163phulmvjo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163srdzvlqz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pooeovoq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163owtoiklz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ftthfngl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163kpdrobjh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nhnqvzyu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tkqsyjlx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163fdkwdbdz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163dmpekobp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rmqaglju.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163wcwljykk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163guoubuka.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xmjogsom.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nrttmnsi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jgejtgnp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163almmdpqk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zehqcvrx.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rjfvfsmb.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ysukqtmi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rjrybogf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vyqhfois.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163czezzzcj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qllbdymv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ybkpfxen.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lveompzk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lpjsahfh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aygbpfbs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163yrdqclnb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mgczucdn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oelqnamd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hycqblok.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163pqspitmh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163udycjidc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xppxuael.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qqjsmigj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mhnfgoui.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163plnhdtom.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ytazzeni.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pdfpiwoz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vpghhtau.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ctjadohq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dkmmcvlt.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jzphvcub.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163prwvrdan.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zjxoocoy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163qiiioiva.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ldscwunn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ulymivca.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hzqhzoyn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kaytfvrt.html


<!-- 参考信息 -->