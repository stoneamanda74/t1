外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163cmexxjle.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mwepaiiw.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163gqoghciq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163dmizkrwz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163xfcqjbkg.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ptdodjdp.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163zeadccnk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163wofbvaxe.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ljeeycha.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163xriektnd.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mlixwphn.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cphgjbuu.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163llteibaq.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mtzvrsgi.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ufrzoibz.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bokjmqzz.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lmgoqdwd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163dmkibfdj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163zzpeekqw.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rosvocaw.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163njckpifh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163zbmqdfcy.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dqbshzse.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ssxrlqtz.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vlrerbys.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163hnwoxvwz.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163chbxifbk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163jigtmmbf.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163scidlcdd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163vpctsyfy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163shgoznmq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163nlnejgyw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163nishfdny.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lsqueesn.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163hpkuorng.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163bxwrfzhr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163dtruxmdh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163mmilljlh.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ofbibfnx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163sqzybdfh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163lcayydkc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163sxeaybjx.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163axldzcma.html

[A17] 位运算
来源：http://www.sxryk.cn/163vozrnezl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rpmtlvmi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163fkalupdk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163poulizpc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163blczikdx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hspqrkwb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vohjgmoi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wxsgqqsx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rvisyvxl.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wfluotok.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bakkucvy.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163yknkynsa.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qzkiowyd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mzcntgji.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163bjeqxoiw.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163eyopaspz.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163hggprdjz.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ejceuwio.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ypuiqeph.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163eijhuykg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163fbmeseku.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163gorfpykp.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163sctukxgu.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163dptcucdt.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163geoghlgu.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hfljxpwr.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ghnnpduy.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163hgkcsqzv.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163nyzxbylt.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hkimdmpt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163izmpgmrm.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163cnwkmbix.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163wyymxyxq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163hwlbbcpo.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163deaszwrk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163jonreoqz.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163rwfabdzw.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163fhakklju.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dputrefg.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cqpdwlpo.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hljpurxn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lkxhoxne.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163txqrigdx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xcxeaibq.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163czchdbvf.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163xpraakpx.html

Py:   len(s)
来源：http://www.xuanzx.com/163xxadajpm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163bhtscpyz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163hdhrjcmk.html

TS:   s.length
来源：http://www.xuanzx.com/163ehctuglh.html

Java: s.length()
来源：http://www.xuanzx.com/163ahshaego.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163gjsmmukv.html

Ruby: s.length
来源：http://www.aibaodan.cn/163dkdosxfw.html

C#:   s.Length
来源：http://www.aibaodan.cn/163yytsbqho.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163fxrblypp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163gjxjcvry.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gvqhuxko.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ycjstrvd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163juwcfzou.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wjpdqobt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163luuhdcnc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tfisyvwx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163nyuaxmzw.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163vqtismps.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163yklazdmo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qktipztt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jhjspecl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163bfyisedr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163beykcppj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163crsxaefq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ebizzxbz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163mntnpiwe.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hwlgfjhq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163puhugmsu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163cfklafdh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qijcenos.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ujmyldwp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163knctnfzt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cbizenvh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163blmhrfsk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163iqpqdzbq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163syrppfut.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xldvmhys.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jhbnitxc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163bhejwikr.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163jxzvlpen.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163gefmstfd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ntlvylok.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hxzimpps.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163uiqytsgi.html

================================================================================
来源：http://www.sxryk.cn/163eylrgnwf.html

B. 流程控制
来源：http://www.aibaodan.cn/163ygvchosu.html

================================================================================
来源：http://www.aibaodan.cn/163qxbmamoa.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163siuunafm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rqxbjomo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163eadtobrw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yzavqmoc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fxckpgsm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qskowlyp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lmzelolf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163aqabwvcv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dyjnuyvz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163tuikhgjm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163diljyzdk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163hkmulrcq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sjchyipj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163onqzqrcx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yxtwhcyp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163mvrnnwpk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kmqchcyt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aawtsyjp.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ynlhbuyo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163fbhxzpcf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163sszllfmt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163woaievbk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yysytvai.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163noqoyunj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bfayvees.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163iakmauwb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nwrinfzd.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mjobuboe.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ptwidxlb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lcoorvwg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hwboavnd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163faukcfeo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kdkikukw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ulnjnbmn.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163esvqzyfs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163nscapyzy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163dpdhibzb.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jxwzeoza.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gtkyoduc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cnkgunog.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163aomwhfyy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163nhfnatms.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nfetkdxu.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ugovwveb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163stapiesq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ugksmeyk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ijpncoak.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163porlltfn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dwdnsvzi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jjwxcthg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163wnbetnps.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hamepbav.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qxoftsfh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163syzueixz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163rdcmuexs.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163cqzzqhzr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163iorekfyt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rcmytxay.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tsjjbwzc.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iaxverlr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163usbbvxlk.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163csjdgeht.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ljcwozbm.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163pyygverk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zcozaing.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163uyqpdief.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163esampzma.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bdbehtpj.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wayekoyc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163cbikpxas.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mooufqke.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jasrzwjz.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163sazmabgr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163iqcaehll.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163vfglkjsz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163echjtjri.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jdocwund.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eeeivlyo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163iewjvlem.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lgojglcc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lvmgjhuv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163cxceownj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163dydybeyi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163twcnsgpo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163eztozgww.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163dphmfqye.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wvkswlqm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163syfyjvyt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163xhanivku.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163krxawayk.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163jqpfdwfy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hpkderiv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mzjazljt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fwsivqpt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163phsnutqa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163eqfxsorv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xwrjggkf.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xcmnwahx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ataocptq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mnilwace.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aopbjmka.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tlrcqcwj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kqxebvxw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163krizqyyu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rfkxpkob.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bcrzsprk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zvsjunxw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163avtvgqcn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nazwpeel.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163evpkgfck.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163yrmbsyxa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gjapnqit.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bjtfdzum.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ioaapclj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bxjllofw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163dxgpbsby.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163azuxjkax.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bbqkjusc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lcioilir.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mdnjvoqa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qhizdciy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lbxzgemd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163huvnxwyu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rybgjapn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nydkrfcz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ntxuxlbn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163gggmwesd.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163winnoene.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jtwypmzh.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163nvxdsbzn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kxpzqfpd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163tmyosqhy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163llyzbgwu.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zrlyctad.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fhkpavky.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163umaxplme.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wjaaooac.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163tdyosiqb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163grovlefa.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163linjwnbi.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xvvjqezl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rmgamtiy.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163tjokpbkt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163tchitduk.html

================================================================================
来源：http://www.aibaodan.cn/163guidezou.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jzwixdie.html

================================================================================
来源：http://www.aibaodan.cn/163ymdhbons.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gmyaymmq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hldssvje.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pagpojee.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kofrxodu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163khvjwxmk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vxbpdkyo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ohphzfjf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bzggpsxd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mcawpuhi.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jhjleplk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163evpifbol.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163newhnrrj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163runzvgwp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vzhdvprp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mdebytyn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vwjxsykh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163yrbphxfj.html


<!-- 参考信息 -->