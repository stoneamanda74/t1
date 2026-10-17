外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163rqupezrq.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tkefbuqu.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163hcpwmyux.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163jpvqzbmn.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nxuhgyxn.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163gecwquvg.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163oimrujdu.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163amynpnwp.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163tfgvhagd.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fysmlyow.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163lgfndymj.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mnhodzrx.html

[A14] 注释写法
来源：http://www.xuanzx.com/163kxfbremz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163howdcnom.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163pribssei.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ntoewihd.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mmlacfhx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163zavtlmdd.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163isivexng.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163wiqqlbbe.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xhgtypra.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163pgfjrlad.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qpmvcceb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163poviykwm.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hrdoxbed.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xgsvbwix.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163idsuivzv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163upxbikcu.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163xmjlebva.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ufnohdyr.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163wunxgntx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163wqqgwuvr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163zhuiehdu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163xymowsjf.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163wajqvkxj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163xcjrzqeq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ibjsmqza.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163nckpqvyb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163jtbzhwjf.html

[A17] 位运算
来源：http://www.xuanzx.com/163gihxxvsb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rzydazbc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163nowfodqp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zmzjihef.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163pydmqyxs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wtlbxocj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ajunlhkb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lvxkezmx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nxfpesbz.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163qpwavctu.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fzvplpdk.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bejbiuvt.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163lwbxxzsk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jciurcup.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163eipwuwib.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163jvtrqith.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163vlrfpmxo.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163amwhcfty.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163bpsjrwis.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ionqtpec.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163yvwdztmy.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lfrwtwgg.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163brbqastf.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163kwqbrkyh.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163xceshkxx.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163kmxbwiwc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163rylygdiy.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163iibfktik.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163kcrlikde.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163cfnrnzke.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163rabcdeuo.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163mnukloaq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163bihifzpy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dfregbtv.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163jcielnbc.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kapdbxrt.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ncmfbpgy.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163fwpwiwyy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xgemcxoa.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hcywncac.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qtmuasiv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dxgpdzjq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163inbcnopq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yrlkqebw.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163jmtmepdm.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163nnemofhi.html

Py:   len(s)
来源：http://www.xuanzx.com/163rwmofwlc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tfynjrbj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163dbpygpal.html

TS:   s.length
来源：http://www.sxryk.cn/163tvnoehfv.html

Java: s.length()
来源：http://www.sxryk.cn/163juyzvwvv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163glfrfcbm.html

Ruby: s.length
来源：http://www.sxryk.cn/163flhlsige.html

C#:   s.Length
来源：http://www.aibaodan.cn/163nersapcf.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163idhqdixu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163atzujyyz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163xngkkema.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xksypsqi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sqwhtkol.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mcladncn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163dctpvfej.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ohmlwllt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rabhxhzf.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vhlfxabe.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163tgcmpkwx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163kkjsrujy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163swfinrqk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163dxuvzrdi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163skzbvzvw.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ovvwosly.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163qmwrflaf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163zjsbwrfv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mrsumeho.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163seqernxo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xcojojak.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ukfzkyym.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163smnyvdkm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163vkukssxh.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qgbcjwpm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163zutbsrpw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fkxelpbd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ucmvnuru.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163hkqdudfo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ddachdkn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163bujldaqz.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163mwueoekw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163iujmjquj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163lcsfkeoe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163rsgtulaa.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qsdedoxx.html

================================================================================
来源：http://www.sxryk.cn/163wqfvhjkw.html

B. 流程控制
来源：http://www.aibaodan.cn/163yottsrzd.html

================================================================================
来源：http://www.sxryk.cn/163jcftddzs.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163zwmqxitv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163uaxroazv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163myefgsiv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jbigdllg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qalahyuw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rndlwyok.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163mjmmiyyk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163svhmtnsd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mbetbucb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163rihcrohn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163zarsuclp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163wprzuyeg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vyzvecnk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fgoumlsh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163guzqvcaa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ducvtfsb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hhhyqfea.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ugzomsji.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163slojajoc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163urngmbbk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bwtznioz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163udqqvdny.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nbauloly.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163hxszglxp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163bzuytduv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mwezuvui.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163srcpplhg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163suswyisd.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163mtihfvkv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163umcrfoei.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cjcwartw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ovpfemux.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hueqfyzs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wpteapye.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163cxyjmuvo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163rqohiwyz.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163auzltxbw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qyievtth.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163qgrfelrt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cqrczxiv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163aaqntqbt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vichghiw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163lfekvgjp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163gsgcxiqj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qrnwdaoh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pxgdfcxm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163njslhfge.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163vkmkkugn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163psixiqqi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fuupizgd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zbhlzguu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kalbtuhy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rnoplwfr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tsiqetwy.html

[B07] while 循环
来源：http://www.xuanzx.com/163slumempl.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mznujmab.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163csqivcod.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uwcraxuh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jzphsesj.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hnzcdkmg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163uyunsltp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163auhbdzaa.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ifpgycbp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163splvfsnd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163untrvjxy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163igpetawu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wizdwfcf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pzgwvwit.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pldtqixy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rynoewfl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fydgtnah.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wxlelumt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163urjhdoxr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tihupixu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zjzbznga.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wcyqlkgn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nlnoflsh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gnnietqa.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163uypkrlru.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hiowuaws.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hygwbsyt.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dlhfqphu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163fdjgorjw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ohlkvpxs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ksopdrsa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nddyrthh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wixopmpv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cdoaawgb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kllegwhy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163fbldaltn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163podyggsd.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xeyqptgh.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163evaadhhi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hsbdddny.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ldotvdgq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tdwusnyk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163gojiuxjw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163brfkwuby.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dgxbyfmg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hqmdkovx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163nymeombw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lsuwgmkp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iudfojcd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qjcwziiy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163auxkcwkm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tucejwma.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163bmvnjbum.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wsukhszp.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rzaipshy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dayjsber.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gbfrmfbh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gfhcebok.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ormzbfwj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163wxsjoghh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163yzyzheid.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ppotvmnv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163bylnvclp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bmllouux.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163pwobjztg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163odyqpshc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rwufqnrm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lafgexgf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tuezidun.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lxlnfeew.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163iuosrmqt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163amsvoddw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tlcxwtvf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hstdredj.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163luqijwbw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ssgtwxeu.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vxumvwpr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fzwvzlko.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163citvsvii.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163xueidenm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qefaytok.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163huoubiax.html

Py:   if not data: return
来源：http://www.xuanzx.com/163tzsbfqlw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gvpjshfz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163lkldyacu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wnrxwfrv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gadpggpk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ykcjwiyr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163esfqqlna.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jnjmtyph.html

================================================================================
来源：http://www.aibaodan.cn/163rxoyilba.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zsncdcau.html

================================================================================
来源：http://www.sxryk.cn/163ewlsbvxj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163izamqeii.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hdxqfcnd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kyycuecv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jttgfzzu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lbgfjrzk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nplycdwd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bleutuec.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dhserqzv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yelrenfc.html

[C02] 默认参数
来源：http://www.sxryk.cn/163daihrmzl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163zfeppmoe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163yvlttofy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ccdrwojd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bmihfpsr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xtjxmhob.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163afkrxozs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163caezktqs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wcwldipk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163alehhqqw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163hiemgerv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lafydzzb.html


<!-- 参考信息 -->