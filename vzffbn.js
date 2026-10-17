外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163qtdoqdls.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163yltkvkna.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163egtrdkub.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163lsfqetkh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ljzbatjz.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163iffclvms.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163uozlchxz.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ejnyvbjq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163bjwbqoav.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163jmdikjyi.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163bzhulpql.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163byflndit.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lokccxbj.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163jxfysriw.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ghulhnrg.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ufxuoexf.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163eyqermgq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163skljnkgy.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163jlaxpcuj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163krddwtlc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163sktzzwzh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hbdugtgg.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163gwfbsqbi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163xsbnkhza.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163huijzbqr.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qljeeodl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163sinrqxrr.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163hztdchjd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163jyqzwdva.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oihbmqjt.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163yezqevro.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nyzirdeu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ccvedrgm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bpdqfuzx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ufkcvfyw.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wunpmcpr.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163wzvxfbld.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ijwcrasv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163hnuotpie.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163xmpdvzow.html

TS:   s.length
来源：http://www.xuanzx.com/163lilirrux.html

Java: s.length()
来源：http://www.sxryk.cn/163szweangz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163eymstaan.html

Ruby: s.length
来源：http://www.xuanzx.com/163rxyxpzzn.html

C#:   s.Length
来源：http://www.xuanzx.com/163xkenbzit.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163jbuopczf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163cetygyhh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xhsxhjjd.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zqcfifrm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163udpdkjxc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kpvdkmgf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jaimhjlc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163obuzaqdj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163cwhrigrc.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163pmykgzyt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163sbfweaai.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ssmxmxnh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rjrfrnga.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ebharcez.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163pvmknlhk.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163kjvfyryw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vamxpcsw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163kquchaqf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163kllsukle.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163hercgyeq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163nvtuglxb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aqzbgynn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kqmmeoox.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163oiyctybw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163xqbhsgrs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163bavcrhhy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ucfqksyx.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163lalvpekb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163jahlryvc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163neztvnyf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163mgajpzpo.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gpfiqzmt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dfpwbwxt.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jsofcvap.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163kzntyuhm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163pctobrtd.html

================================================================================
来源：http://www.aibaodan.cn/163ofmrdvtf.html

B. 流程控制
来源：http://www.aibaodan.cn/163mtpyzrkn.html

================================================================================
来源：http://www.sxryk.cn/163wearudmc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163rifyacsr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163awuqkwzh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163efncpzbf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ghupftul.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zneaxdlh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jgoanqbv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163vbebuzbl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163fkljcoya.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vowgcxsm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163pfnznntq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163uhnnjvbg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mrqiddii.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163advefxhw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ocskzmur.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wvfhuwaa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ozifaxzi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163exezlkgq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zowfielj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nilzyber.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xzkzfnjz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163oagjfdoj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fonxhiqb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ncjjpfmy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nnlokyww.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163oetlkfgw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163zqgnxsxo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163kekibdzm.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ifedkpee.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xllqeqsv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rqfrazar.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ckwgeipl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163okgkxupf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163krhbymdm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nmjitcgf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163nfwzblyu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163szpbxwgd.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163lbldiady.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163hclopcxy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hdasurmb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163twlbrhau.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bdpftnxv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bbokzbsh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163xmmuadfg.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cljgeftf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163nuhxzdfm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ijqemfwn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163fmqjlmde.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163drfchhkh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wmmeixnk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fwbnzexi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ahxzcryc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163pwaaxwzt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dhipiufv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fvohdvtz.html

[B07] while 循环
来源：http://www.sxryk.cn/163erihkhiv.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wecfepzr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163cqlihxbd.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tbpfeise.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163llxveyko.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163echfpexp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163njxdbhtt.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163kbmjxelb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pjyzphuk.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163exskzgzi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wybeqdim.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163qojaxxoa.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163urfgkxsc.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rdrcrzsv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zaaqiszq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ymkyoqbu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163iajnxgoc.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ztmpwgbi.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hnnonaqo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ngyvuenp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hczxhwba.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jraqixxn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lnqsvksm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pcbikanz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qprezqex.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163skdrfcdd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163aycvxemr.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ijfxtygs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qzqkpyiu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mrwxgilt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163oggyyhji.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163aecohztm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163izobubtj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gpptdvfp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163pmisssni.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163imvgpjyo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ogfilszp.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163nzbopysk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dtenyrlt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163swxezicq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xoleczmt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xiigwozt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163lhrgbidk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yeoznwqk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ddgigayo.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163andvjkvo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163efxilauc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tvroeihz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ojygzqrk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ptjftmks.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cgyzzvkl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bwwcctir.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nlgiavgc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163fjhsrfcb.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gqzvxvit.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163tsnqrdvn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163crbqywkj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163goabipht.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163aiobwalj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ojdnkhxb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163gmxctzsj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jmhzensu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163abidrvdd.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ztewygsn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wcfvziak.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163krofchza.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jknbnffl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kqojquwa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163lrekjvqp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163akwseexm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zvxbiyfe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ssloebca.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163abyhmvmk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163siiytcpk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163imrhfhkt.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ohdjhuku.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gervjbbv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163clkbyuja.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mpkikfbw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163eouwxaks.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bylqflya.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xcvpizgl.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qslpjhlb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hyqqwczk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yxqunvoz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163sfesmrtw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163acrzfwhn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dtmwgeci.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163raugebct.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163uvbcrzdi.html

================================================================================
来源：http://www.aibaodan.cn/163hpcvrbdb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gfxoytbn.html

================================================================================
来源：http://www.sxryk.cn/163mzrsrjzt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163wkjajncw.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163euzqovba.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yssivnlz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163yxtfbmox.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163halnvput.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rlkszgsr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jkjpsbwc.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hejfpddc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aiojkelr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ovvpbawb.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163bhttnvqk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163cgcyrifn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cnleoiec.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jiqzahqz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wkecrtow.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163osjpizas.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rhakkvdj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163eofgkkoe.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ygpdaezy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163uovpgvtj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163icnldpsa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kkmydthh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tgndahqb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ghubtdwo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163fnslexgd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163nfgpwwbh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163eantnxin.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fgrnsclh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rikbsenj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ippyhpyc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tkojqrfl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pshznqhq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163yvhrsinb.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kftllwdg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xaxyypzo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pmuwfewz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dxoxxczg.html

Py:   return a, b
来源：http://www.xuanzx.com/163iofsvldk.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163plysggms.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ioqmvfww.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163lbygxckj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zdavaifh.html

Go:   return a, b
来源：http://www.xuanzx.com/163cxivncde.html

Ruby: return a, b
来源：http://www.sxryk.cn/163cukuxbyz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163igdvpuzy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163osuqbkby.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gqghqqai.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mbbsukik.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163voacshay.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163iisuupwa.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163soljfkih.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163sddzceih.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nxfuncun.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163osnxnfzw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mibawlcy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ywbhurwn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163yxmzxxyu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163icdncioq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xxywftgr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wvyrzlyw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zuhkihky.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163nxephpqz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qwejtoht.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wplldcns.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mdowtmql.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163asidrlqw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bcthelnp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jnxohuql.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163omkabjem.html


<!-- 参考信息 -->