外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163fltvlhsn.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163jejgxsjn.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163kqvonucu.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ofvtaded.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163fakxzbkc.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163repcnlxs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163mirwztsu.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wqgebldy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ejicupgt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ldciidry.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163eysxmuci.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163hxmwemge.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xciggipl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163iisibrbj.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163bzlqsuzo.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163uikuwenw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163slegjrpu.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xpofzhbi.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ruxumfvy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163jfwjdrqa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163itodfdss.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ugdiupvv.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ewejlrri.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163gvociovg.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qrsdciqj.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163djqtdjam.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rvuebjsl.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zmbmuwnv.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163rashkeby.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fdpbqcqa.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163jwanbcwf.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dcsqqwgu.html

[A14] 注释写法
来源：http://www.xuanzx.com/163qmgtsydw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163wtioznup.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163irmocvwf.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163uvgloxds.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lbmmweoj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163qqnktirm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mymbkoeo.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163frfljxzm.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hfajqnlh.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qzvcejqc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163eoczszpw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163laxbootu.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163dnbkfrkk.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163tmknopay.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163wqruqvqy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163gbrzickp.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163uqchabbu.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163enejcucs.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163rvnfrufq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163yinsgmlw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163tshlituw.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163gvbcdwqw.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163kvadtgsc.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ubgxlimu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163mfipzike.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163tgipuujk.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163quwxktrw.html

[A17] 位运算
来源：http://www.sxryk.cn/163oqlvasju.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163smrqsmfw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ulttuedw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wybkgtfq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tsmjhrut.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tsplioto.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lbprotxq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tecvakzo.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nxgxcmpe.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163dcbzpiwv.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hqqmnqxl.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163kofbpxgj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qoriahrv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mfnkiqxy.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163smrlcooy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163kctjbali.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163mlnrfgml.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163ybdqzhhy.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163yvcnvbnh.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163sgbygjgd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163fgvyiqhr.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ydslgvuj.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163wwanlibt.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163zzsrmtsu.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163cdqffbkr.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163flbkquhe.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163lhtdjgxn.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163cquuigdv.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163exujqagu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163tdtdmomt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163gkyimsig.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163gozntvxh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ieistirh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163emmscpgf.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163plcycbtx.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163xyxkjmfc.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163uryrsztw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163onfqwrlr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wqopnajb.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ghlxakoo.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rggqpuue.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yrjjktxt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rkacfgre.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pamaxmzo.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163phyhwxfi.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163eqnvdhni.html

Py:   len(s)
来源：http://www.sxryk.cn/163votiangg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ratqyyiv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wdvezmev.html

TS:   s.length
来源：http://www.xuanzx.com/163jbtcsrqh.html

Java: s.length()
来源：http://www.sxryk.cn/163cxtdontn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163wlmljqpv.html

Ruby: s.length
来源：http://www.sxryk.cn/163wqxitdpx.html

C#:   s.Length
来源：http://www.xuanzx.com/163pgqfqkvs.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163htsbezcv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163opckcbyf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163jelycuya.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uzbtstrw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mzadaxom.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163axtumgtb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163gulffcwl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163bcefjyxz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rxcsumbt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ibmfrvrt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rndbxskl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163yhvztggc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163edxqrrbr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tuboning.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163myrebwti.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wybhwpjo.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163vbmzmwdi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ewlmodzu.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163bcrxudau.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163sdqppveg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163jucynrbj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eeoaefzy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163iqompxpw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163qrcvsdjm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163tloyaijd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163tqseldih.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163axtlibvw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163depwfffp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163qpcjsvfp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163bbwevivd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163cwhphrap.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163drvabrwh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hqlzkwts.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ocypwtep.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163adzapvmm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163npwzqqqn.html

================================================================================
来源：http://www.sxryk.cn/163vghuselc.html

B. 流程控制
来源：http://www.aibaodan.cn/163vqvgeceq.html

================================================================================
来源：http://www.sxryk.cn/163itasopgd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163phruomer.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ohehfiju.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163laifafww.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hqwimofv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wygjjeji.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ezwhqvdk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wcutsavx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163iutinhwh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mtofwelw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163fpkbmnit.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jhiecgal.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ojhooeqi.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163saudtmqm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cbbhlxeg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vjlcvcyo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bkpfiedj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163sjlfxbjf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nxgxgkjq.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ohrdewhf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163uwnfqaff.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163rfmhmcxz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xkjpwjfu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bmwzenor.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163tnrufjgd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bvdskmax.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163lqlrphom.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163zaxvkczh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mmahjwie.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bdgpweoa.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163fklfjgce.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163snwlfxzb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xxufkffb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163dtobjzbz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163gxhjxttr.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163pjhdxfpb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163fgdaxams.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163rhcflvzg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163lmjuicer.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163fjmgoyew.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rhfpbjni.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163liczblic.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163sduorztr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mbarxibe.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rzvliexc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163waqkqbiw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nhxkxnif.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xghgqjkt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163cryjtzoz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mdqtuupc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uoisuaoa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vvpsdmnv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163mvqjmvec.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ieerkurm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vrerxiii.html

[B07] while 循环
来源：http://www.aibaodan.cn/163punpftrr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163iymyoebz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163piudgzuw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jbgeewva.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hdjpprnu.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163veyiltps.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163knqtkzww.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163woaodhlw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wdnozguf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163cwqlvtiy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163apoqgkrr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ahdzgnar.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ugghovaj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hakbzuqc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yjroygbs.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163iliyleya.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vclahlwh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dplisimi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ddvisyfk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163tuqzwhaf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mlbkhqor.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163waimcdjo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gfkjupsk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163acizxqrl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bcahzzlx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jryvuqkr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mbfajqcp.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163diuawiuk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gyubdnfc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mblwoumb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cuhpeazn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mbjtyyru.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163iltsowsm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163iyydvufp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163klbiebut.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tehellvn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fuucnfxo.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163vayrlafy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163pxbyjnqa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jvqkonag.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fswfmqdy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wcmaskba.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dsexriyx.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gxchvzyv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wrrtmpse.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rxkmtnki.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bcnvdabi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163mhigzhjp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yxykhbij.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yuoerdvw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163okbvqbbd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163oktfqjjz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yhjnqfbg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163oxlkmfhx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163biyfmyma.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dcsjqiar.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163sffwjujr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wojozsfa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163awjurpck.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ezcjgpxn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zcfhywwl.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163lmokhirb.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kumtpydx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qhphegpe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bbodncat.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ytltenfw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lcndwmvi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kjjrkjgf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jcjughmq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163rwbcnupl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163mzurnyoi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163yidkrysi.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163neplydxr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163yoadhksa.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163gvddvble.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163rbbyzlwn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qmmcuaso.html

Java: a && b || !c
来源：http://www.sxryk.cn/163oegftxbb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nggkieqc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163uxebfitl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qeokykml.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163pcusbphi.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wrxdfkgk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163cgdwlxab.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163icqaiuxm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ngjtjqsy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bqdxsqtp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jocsovpf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ixreymrn.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nyejahxi.html

================================================================================
来源：http://www.aibaodan.cn/163upesfaio.html

C. 函数与作用域
来源：http://www.xuanzx.com/163naautbam.html

================================================================================
来源：http://www.aibaodan.cn/163ktjofrnv.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163sgewaqur.html


<!-- 参考信息 -->