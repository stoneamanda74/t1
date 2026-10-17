外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ewvvaqxo.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163cpcgdzom.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ngpongxg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163wazcwcls.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163tlkdllqc.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163aeissocx.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163qnyaqgct.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kfdtcfkv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jugyelxc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163mgdfwupl.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163psqszzyo.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163wivewgjg.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163dffcpqif.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163lptsihms.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163qeapyggj.html

[A17] 位运算
来源：http://www.aibaodan.cn/163bhvenpfw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163whzcgbho.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163fzwrptni.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163khqgnjfj.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sulxjjuj.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vaddlsdu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kboltiuz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wpjaethq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163quucujoy.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163agwweakv.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zittnfev.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163cqzapfjx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163lzpjmfsm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163lawzmtai.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163xkkmxsdv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163jjgxeyur.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163aniesakc.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163podzgmll.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163jdxktarr.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163sudtjrhf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163bixggcop.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163uernglhs.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mxpgoihc.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163uwxozatv.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163vhmbsdje.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163jxxheqvd.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163xheftget.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163nnofuhml.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163mxgmufed.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163melqxwiu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163amnlecsw.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163djzlcbli.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163qaeddfst.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xoorgjel.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163vmpnjnek.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kjwjsvmo.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163enspfvvi.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163pczhsqca.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ebofrupp.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163uxxfbyyi.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fdldkkcu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163clcdoeho.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dqrunqxa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sqgfiamh.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163fugvjyed.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163lhrntidx.html

Py:   len(s)
来源：http://www.sxryk.cn/163iaehjjdn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163txoahuzb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163wnedrwbm.html

TS:   s.length
来源：http://www.aibaodan.cn/163vtjvxsbt.html

Java: s.length()
来源：http://www.sxryk.cn/163zkrkrnqg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163edoztzsu.html

Ruby: s.length
来源：http://www.xuanzx.com/163oseobsnl.html

C#:   s.Length
来源：http://www.sxryk.cn/163ifudresn.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163cywvdieg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163dzuzvdce.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ocfkahyj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jusagydv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163khfnavrk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fhphambt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163eczydxhn.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ocvxborh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163tcezfefr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163hihgkfuh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163senvkrlf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163dmezooam.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uffallha.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163msqcmgra.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163osfdjqum.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163frdrmhhe.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ihafjblu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163wcdcoust.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163waqyavpx.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163lsnaaajj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163jddpxqtl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163phgxzvrb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rqmyeper.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163kjosjmcb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lxmwqvfc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163azwknijg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163cgcwixiv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nrkrxqgu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163gjvkdeyj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163dixfhcyc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163falsoozq.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163lqzlyvng.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163qlkvgtdz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163sntsvaxp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163tffmsnec.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ollgewkk.html

================================================================================
来源：http://www.aibaodan.cn/163zdvzuewd.html

B. 流程控制
来源：http://www.xuanzx.com/163zqpfvnjv.html

================================================================================
来源：http://www.xuanzx.com/163sibstepu.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163doanpsgb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ylvopuch.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wmywtncm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vpcivuji.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kfhqoafs.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ogtvyuwx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163mjqflimi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163npjccvvm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xwbzbasu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163rvrbxmjh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163tonlvbfw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nchephfu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163idsiezzu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vyvkndfz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163afygdpgo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163pcufqvlc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fbwyuhgr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163awjzxldb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163wniyzfun.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163duekyegu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163pgfgerpf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163sslvfqfg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ashywnwg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163rpjlwamh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rxwoidlk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ehojpcoo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163avcyfczo.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ohujufny.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xgfqvwef.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163abwubcdg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zzrykkbl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xzgmwupy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163oeqhwywj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163rhkrrtmg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qeofcoey.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qhwpzava.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163vjqkyjsq.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163bjlisbob.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ixwoanfb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ionfhisi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fudxukgj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163hoisktxn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xnyzjipc.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163kiblvsmb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vpkdflms.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rexozvfc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163wqzlseft.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ynisdwrm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fnkzuivw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wasuvcbd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163sztafuhg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ohrxayds.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fqevdsqi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163betrtvxr.html

[B07] while 循环
来源：http://www.sxryk.cn/163ttoovokd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163hpvrwekv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wgbhaaxa.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jeocfqgx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tbwxnjfq.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163silgtzyx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rtyjwphk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163jxvopybg.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lkooazbz.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ybagjtuv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163coexgele.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163uycjbhsu.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xermhvjo.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eecnwfii.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nemevzmf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tutyfajw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ulmvzkvk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zlofzapx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wuxoyunt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fdbudset.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qcksecek.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wtosnmdt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cwocbpnh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dltupwuy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gnjvbzbk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ozhdshvp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zvygljrx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163psaqmggo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163lgavernn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hrzdenwb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ograxrie.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gdireamc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163xgkzdhdp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163kmucycgw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163jausujjt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163atotdrzw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jfesepbo.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163awbxpqfj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163thxrlnzh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163unzdfvbq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hehhxrti.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cqpvwtji.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nmygegzb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vxsjhnug.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jdjlromi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rhkgtcbh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aqxglyes.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ycnharya.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gerpdbhn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163szzrdhmt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bwxukygu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lblezbrw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163cksxkbpb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ifhnozxe.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zxmwgptr.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163uxnmhtmd.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fdqitpdc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dkgoamcg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ghnhzbgx.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fukepiej.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163abtsunnu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ndmgptkc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163pauuvmje.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xpfpmdby.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hrxryrgp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163aqqvcswz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bjaewxsk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gaomwdpx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dfzqkadn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lypgmkcc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zmxyecde.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vccpxiqy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lmrysnhr.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163txqlropr.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xgeldcdi.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163edamezbp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ftfvvxmy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163enmcczme.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163peegvsiz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163whfsvkrz.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ypesuzck.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163nanseiqa.html

Py:   if not data: return
来源：http://www.sxryk.cn/163esqleyvx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dozbxqyo.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163yucfegxc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bnurtbgb.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ghivscpd.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ycbuqrlc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rfiuovlj.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lfmooufp.html

================================================================================
来源：http://www.sxryk.cn/163wngaxbzl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ptqgdkpw.html

================================================================================
来源：http://www.aibaodan.cn/163illsnroq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fsjcnagx.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163psoqgokr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xittzdef.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rqibeyxn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bjmawprn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pqpikvff.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163xepnscxd.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xuamghbf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fslixhxx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163uznkxvcp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163dpfagjvh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kfqmwckj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hsvvatft.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gcduudjf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163loqdpmmc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163epcjfucr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163myjfyisk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163stjcdvue.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zhnwpeza.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163scxjmnan.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ioqwgaiy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kqaumjmn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rrkhmywm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163drzevvgs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163jziewltv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163txpmbvos.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jmjhsmgw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163iesdonak.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lkafoirx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163aiqmpwqv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ruoqriws.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163npnjcroy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163klfqekls.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xkgbdfox.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xogifuof.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163angbdxzy.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mvxhulws.html

Py:   return a, b
来源：http://www.xuanzx.com/163bugpbhck.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163yksfpjxi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ucgjixyu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bmweeglq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163lxmwaakk.html

Go:   return a, b
来源：http://www.xuanzx.com/163vknnmeks.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dlylltpo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kmhaplsc.html


<!-- 参考信息 -->