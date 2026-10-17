外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163gkbttwbd.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jxktfegt.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163sdpqmyaa.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kvzxynvx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163epnwzitp.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163mcdfurmj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163pmmccuzm.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ktfekkdt.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163iuuqmrps.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163vynbqsiy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ctsytmgo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163flfznonp.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qkeildfm.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gfduegfb.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163vmvnlgye.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163anflyhkh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163rglkhayy.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vfrpzpgf.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163mspxsdct.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163vepkjhik.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163axyinyic.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163aqsevbfq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163axvedkpg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163svwolagq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163kwhdlbjw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163skipkwvb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mesbscem.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163xusiybay.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163hknafrzh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qonulfck.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163osoxewxx.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163llhmewdw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tmqbnggm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163huiumygx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jiabrlne.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163iczrpkjo.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qiuhvtxs.html

Py:   len(s)
来源：http://www.sxryk.cn/163izwulwwg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163dmriufko.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163vaigrlvh.html

TS:   s.length
来源：http://www.aibaodan.cn/163vctyffyd.html

Java: s.length()
来源：http://www.xuanzx.com/163xxhcavvp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163hueufpje.html

Ruby: s.length
来源：http://www.aibaodan.cn/163rawebmbo.html

C#:   s.Length
来源：http://www.sxryk.cn/163xxftqfhi.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163bjqvouwo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qgfpvncw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163guqfrlvd.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wvikkqgt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163msldacvi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zegfcnrh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163poxovqge.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ymousjbj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163nicnqifm.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zqxjwzqj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bvujmkge.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163caccgjwm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jqdmhofp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163lmzgyewc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163yvajbtkb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163zcikrudq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163cazdxohm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163omxlaldr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rmwevidq.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163rcbbguvh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hsbdmozb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bhkzbpvo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ddessbvw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163cozpdsan.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163wmbehixb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163zexruqoc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zqcfotnf.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163nneghqqf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lzwqrvdm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163swtazuad.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163wsxodbwd.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163rikqdqhr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ekhbbtni.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gkzsqndk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163uupipvec.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zfpyowjl.html

================================================================================
来源：http://www.sxryk.cn/163oewjhckg.html

B. 流程控制
来源：http://www.aibaodan.cn/163swqqflsi.html

================================================================================
来源：http://www.xuanzx.com/163cxsddaog.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163gofqecnt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163waoxaycr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163xsziosru.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lqiuywgf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cqjlctnl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wezqtwex.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163oqmxzyru.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163asopxjgu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zhjphdcy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163cecnjkdc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jukihovt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163erhnsvdi.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dccxwhhs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rbecjzit.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bltrsosm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163wehnhzzn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nipzzlze.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hyebxeca.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163znxrktcb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163wvbwlixb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163frdiebck.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163kojbheql.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163clcphhuc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zcndzhkm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rhhhfknl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163cppmyjdz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163lgijsity.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jwaypkvh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163oegyalwe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163nrezzakc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vjfwsdgc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lpocxbjh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163jsowuoeg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fktfjutc.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163dvyhsqof.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jioatcmu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163yvdfyurd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gsphxacl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ttlukppi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xvujwhbp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jtcedvzn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lysgowqk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163bgjrinmh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163kgxeawcl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163iudrazxd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rfnoxpje.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163whkcsags.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tqovjffr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163empeskyo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ppuyvbmp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163znkfcsbm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bfblmmvx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163urfyrzxh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163lisqalzf.html

[B07] while 循环
来源：http://www.sxryk.cn/163cvgjdrbq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ousfvznc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163aaakefvi.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hnwphbqp.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cdahtycy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ponrqcbw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163aahfvfwy.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zzftotvp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cezegnyr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ktcotveb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ojixazow.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163qjhhfwun.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mblzecsk.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jxinqtbz.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xpendlvy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163wsjhtirl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nxvlxrlq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jtpqioou.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ezoqwuwe.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163veuobvsy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dtlzabnq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163molfoiuu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fajuivrj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vfrztkmk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163lwjlduox.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jvrwazjo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ozbmhpxg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vwjivhlp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pmnnwknq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163czwrmyow.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163shgyblsd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163leydonrg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xliajlhx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nghenijn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163otsvqbwb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163hdjhvdjz.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163wgfnkded.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ptbqguxn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tnkpgewe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163boawyrvw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ykbkshjk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ulxytgbt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kyntrxsv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xzhxghig.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kqzbjkne.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fcbicpau.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jzlixsbi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163immhspal.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jambkjbs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qrqujicg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163smwdhzis.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163okpeewix.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163cmvprdxq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kmqmxbtt.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163iszuavyl.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kzmpatyu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163micmvqek.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jfoswjav.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mzpelnbw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xxrtigtd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163gqneubkp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163llegthnn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qhmogsip.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163lbenvkoy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163zkihydwl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ozwficjx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rknnovth.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lbpeykzz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xoblcqhm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ssoretpc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xhnhjtvv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163szfcvyrj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mfkxopej.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qmpxuiez.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163buxhardh.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163bgcdrgaq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163srkbtbcv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163pdozrpat.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163iqmlgznv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163sefimyet.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163duapuwad.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jktpecxc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163iitwedja.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jqaxmpkm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mrycszch.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163oawxddli.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qqfbhfuw.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bgovsgea.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163emccveor.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dofcgmig.html

================================================================================
来源：http://www.aibaodan.cn/163mczrmftx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163muvqctwv.html

================================================================================
来源：http://www.sxryk.cn/163kszfrjvj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ibjranvm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163obqcyxhg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cctjwyjg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163biangqsg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gsclpyau.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163orpxhgya.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163fofldjuc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163gjuqrrug.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ohrytpeq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163isjeqvny.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wpkmizhj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163dumnbusu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163rosloply.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vvavikai.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bzrerslb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dtqlmecq.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163hunuzwjy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tdsnyqiz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dvdfzefq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163aodsgcjy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qacbpebq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bqkcijuf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lxnqdtsg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ciwdjxbs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ujyvkwct.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zxatcjlu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163njaazvxl.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163xywykarl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ecjjhenc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mtsgyczk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163aaxsrucc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163fopllxgy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163fxpycnub.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163jisipjga.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163obppiect.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mnojqbfb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cdbxroye.html

Py:   return a, b
来源：http://www.xuanzx.com/163gueihvsa.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ustegsxn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tpwpzkvb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jhewjell.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ajioehsz.html

Go:   return a, b
来源：http://www.sxryk.cn/163fnwnxfac.html

Ruby: return a, b
来源：http://www.xuanzx.com/163vkedhwqi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tsnaxlmj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163qqlxutpp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163oikyoejd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ixreggct.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wyekblga.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qmpooopc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163cpbzmucx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163urxejejm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163dvvjmhor.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xtuppxwu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ujmfjeoy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163gxqojoqc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rjagygxw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163fllkjekq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163iaghwnnm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gcizqmle.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163lhlvsrsm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rruomeil.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zflnwals.html

[C08] 闭包
来源：http://www.xuanzx.com/163rjsutkyp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cybjnvay.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163quoqjyqx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zuemuryj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163efenxjiv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163osrfwysg.html


<!-- 参考信息 -->