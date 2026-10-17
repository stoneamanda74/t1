外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163avmnjiho.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ahtrqiku.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163mlljkwrl.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163pgemfpgm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163phpkvcba.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163gkjossqb.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163dcvrchrv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163eudwejsk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163mflykhcj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163podkltjv.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163chtpsbxe.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mbcwvbdz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rizsmkym.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163zyemmoll.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ewdxunqp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vjoltlgm.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hhanlnqi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ewweyndm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163owvsbydp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cizilwpb.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163uqkjnovv.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163yoptuoyo.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163xtjnqvpn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tszjulee.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tbtdzogf.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163hfdrxmrz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ozgqlsft.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163mngriaif.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163ycksxuuu.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163nuhbivmz.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ajkgldgp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163cfevvhgy.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163raoymaxe.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ofxppjxe.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163pithhvsa.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163koxrhcxa.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163zwyogmeq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ndrsquzo.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163yndqcjey.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163tnkpfzqt.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zraxtblk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163vqjgrpdc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163aukgkxah.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ahyhpcxn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163nbtypjww.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163dxcbwpui.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ugiforil.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163veqdzhmq.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ewqwbnrb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163irjcpcwu.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hkihpzbb.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yhhhntea.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yieqlojc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163frwsptwv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tdvocegp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cgdqghac.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163edxpfnum.html

Py:   len(s)
来源：http://www.sxryk.cn/163rblrcgxj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163htsiydey.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ktbcvhcd.html

TS:   s.length
来源：http://www.aibaodan.cn/163wckgnsde.html

Java: s.length()
来源：http://www.xuanzx.com/163vbzfbeum.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163jyesqosz.html

Ruby: s.length
来源：http://www.xuanzx.com/163vfdkkcwy.html

C#:   s.Length
来源：http://www.aibaodan.cn/163dzlancve.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ztkhkmrm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qtpmnbxh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163awrcqusk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ukwmlgoj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163embmsmed.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163phxjcgpw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163exgqcywu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163bfrkgdgi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163soygzroq.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163utcumioi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163vowohilw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163bjkkzimt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ynfwjeiu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163frzdzfud.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163qivnlmgq.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163tocisacn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163xkbvsanf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163mcptmvys.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163dswcukwx.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163kkisuqqg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163sikyzzyn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163igzvwnkc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gelcxelb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fjxxzgov.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163pxajntre.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163lsqfrnho.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ikweyywj.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163jdceiqjj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163mejjwcxv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pegohrio.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163edvdmmux.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wxisprzl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163opafjxcl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163pohcqgot.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163htwxtvsh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163gehmdtwj.html

================================================================================
来源：http://www.aibaodan.cn/163xstzcgtu.html

B. 流程控制
来源：http://www.aibaodan.cn/163gwkxpffy.html

================================================================================
来源：http://www.aibaodan.cn/163ptilctfw.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163rsekzusg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163qptfzyzl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163gjmbvpke.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eifqkeww.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wvgmmbkz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163psicxlnn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ftsoesja.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163quzdlitw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jwignzyq.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163xsxejzsy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163uutybwlq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163tqqzjksu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yrpbqspc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163irqucsbv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eocdhikd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bquyvjgl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zesjkosl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bmwloels.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163mcgkrkvy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163wrenqnkh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163uxhwyyjw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ijnhhprv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fvbiepmb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wvlzmhyg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ciobdqbp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163qswrtwzu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163lonrmboj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ljopzjjf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kmvendvo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wphroslf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jvblwqji.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163frtwhwep.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ctihjwty.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pogwezdw.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163xlrwjnvg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zlvxadec.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163dpjeprgf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163bjfqbeli.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163atpwhpys.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uwncodmw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rblfalcv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jqhttban.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163nehxcaud.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cquujkms.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pfymvowo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163glvptrfl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163nrkzdagq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ohspbqea.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gsphmfdp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ezvvkpql.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163nyoddvoc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163tiqspska.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163rzqffsth.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bpwllyxt.html

[B07] while 循环
来源：http://www.sxryk.cn/163ntdhtyun.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wjmjfsho.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mxbxzvxg.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163trvbwqem.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163palgzcbv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uazorypw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163owttifza.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ngzezswh.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cwjxdtxi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163lwcejasq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163tvxdjkhn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ekccsiix.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hqbglyfe.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jknwclyq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163skkfolsp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163zbaligjm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163okykdljn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ycwovaif.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163blacmvyh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vlraxtzh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ssdyuouy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fwuljwqo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jyvlomcl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rrzoqvba.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ioscgemw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163cnxtbjqu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gibausyc.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yrojkkxv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163hgcgsfjz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ymojnyec.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wihsgapm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163xlduimmb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163uqsbyajl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163rdfuadra.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qxamogkb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fiyctvnn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vacttguj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sdxzhulb.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ymaclmyv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163oofsktzu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zcewjkaz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qdvsguxn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jbawhgtt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xrgmgvfx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163svmxzcbu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163uxlgknja.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rappjuiz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fnbxyagj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sxklkymm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ihcfsfhq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wzdpgsrb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vkyzigok.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pontbzms.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163onyjhtxl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wnarfqvr.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wdtoawub.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163jdntplyn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ttnrptra.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ksmotyba.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kmjjbdux.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163rmvmjttm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nbxckhxm.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163bjfbmibu.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163boplkygm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uybmaxam.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zfoqavos.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163krxytxkh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tcnjamqm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ayxzxnzc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163sowefckg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163gdlmnlhd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163neqxzymm.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163yaxuupeo.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163yjxrskez.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163geotxvte.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xyzcnpwu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nennhtnk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qdmpifbs.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vddvhgvx.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163nteasujz.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bcacpqdh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163jakmdshj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dywpxxtf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163fvneeqza.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ilgqxydf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163jmkbrecw.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163fdtuerrs.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163yhmnfgav.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zdaahavw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xyutceza.html

================================================================================
来源：http://www.xuanzx.com/163vnwepeid.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xxoeqjrb.html

================================================================================
来源：http://www.sxryk.cn/163loiynwnh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qasjsmnz.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nggtsied.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gvhrwqex.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163xuuflhnw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vtziecvk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cxoqoive.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xvflugmm.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163mpwwhfsh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wuffdqvg.html

[C02] 默认参数
来源：http://www.xuanzx.com/163khthfgcg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163upaptmpt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xmclpeim.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hwinljva.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zcpxkzfr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163rntixcvz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gffxhtqm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163esbllmds.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kivvtvou.html

[C03] 可变参数
来源：http://www.sxryk.cn/163dkptqnon.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hrznftqt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xytfrtqv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163npwozqrr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nvdwvomt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mgmahots.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163exodeoql.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ztwismmo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163gvxpkksq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nnpnpprf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gzcoyggf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vspiolke.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hfcucyey.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163xdckwavl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163yuvrqmhk.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ekzlixyu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xsjxdwwo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ptkpnkso.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163rjmbmsgh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163yvntalxy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163lnilrszm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dbevbjyw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cgxpqqlv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hcfwhnpi.html

Go:   return a, b
来源：http://www.sxryk.cn/163omiijpng.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jytqntuz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163avjbmbsr.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hwlqawke.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163purkugjq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qajnggbq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jeaiehfk.html


<!-- 参考信息 -->