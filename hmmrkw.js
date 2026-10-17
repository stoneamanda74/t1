外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ehuiiabn.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163zuxoytzx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163uywmzvos.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163bgfgpibf.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163cxxeovzg.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163vobenmdp.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163qyghsyei.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163gyjowtgr.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wvywlxbb.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163zentzzyh.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163dmjprlni.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163qtrudlqz.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163mcgugqlc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vhckncwv.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163fupxrvvq.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163jtjhepel.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qavdoxkf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163rsucqypj.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163kvcivdrq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163refpmtph.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163begaqsmu.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163vvwlgapi.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163iliimoul.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163nmcaskoo.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163nhzvivkd.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wzneroig.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mmrkccxd.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ykhjdbhc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dthcwmew.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hvwddmdc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bjyunmlo.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ptiyjdws.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ktzizijq.html

Py:   len(s)
来源：http://www.sxryk.cn/163paaovfiz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jkustwkv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163bzeceldm.html

TS:   s.length
来源：http://www.aibaodan.cn/163sarszfia.html

Java: s.length()
来源：http://www.xuanzx.com/163rsbbglul.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163sfgczfqu.html

Ruby: s.length
来源：http://www.xuanzx.com/163qlrematc.html

C#:   s.Length
来源：http://www.xuanzx.com/163wiorjuan.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163efiautmg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163fqlrlrmv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163yfmvfxpf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163kieafvjz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bfgxqzre.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ikvogucv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163mpyxboos.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163hraxnpqn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163hijqfftg.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zorwsnhv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ktnsvvbz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163agjpivjh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163drvfyllx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163sthcczla.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163lfzrnkvi.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163mbqxryto.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163swvenbnp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163qokvdypq.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163tiaqqpsh.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163lzazmxhu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163mnbrialv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kvrcbokc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xbsqlyho.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163frzppuiy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163walzzsbf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163erexjqns.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163pjfonbpc.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163cdzqkacf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163oddvmsnt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163locscsaq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163gkzifuut.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ypktxhqx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163xplpqcag.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ufxphfhm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163oifikbbh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163jizaqgea.html

================================================================================
来源：http://www.sxryk.cn/163lgletqte.html

B. 流程控制
来源：http://www.aibaodan.cn/163oomgzdzl.html

================================================================================
来源：http://www.sxryk.cn/163lnycwhnb.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163oivpskpr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wagynxuw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163wblepdso.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163inmcsjft.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hwgsohts.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iybxnkxi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163phznhwob.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mgzfienf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fbvckgsk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cbaoqeks.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163yztfdqfv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163jaauavps.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hkcljxck.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ypgmcnhu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cesxrdfv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ubxfwvsp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rzxintmo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kommgzty.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nslqejuv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163fpdhjkfo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163rdjtdfpf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vkgutdvx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kequisyb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163fpkvdmgq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163lotnnkvs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163odhiemoo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163awwgpbap.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163hapankdb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163smjfqhpm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wxhlqwyx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163eacqfudh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pkrlhkqf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hsexloxs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bctlqzei.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hjvjpyri.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163vrtcecrv.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163fupdhbmg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163sklsrvzo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jfoxcaar.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163arracklo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163elsdgtjs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bqhsvfgm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kvgfwewv.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163opizrmgf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pxqesoqs.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163lakbsiee.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rqgdhdra.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163fugnrvvy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vuisvjgk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163eccbxsjh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qsmkxhel.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kjbkabyv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uregfsvn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163gzkfedxf.html

[B07] while 循环
来源：http://www.sxryk.cn/163dgttsmre.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163vdhjpjjs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163tbnxklwj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dkwtsavt.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kviqhwns.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zpfhkazj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163bpgqkbig.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qfjdiyso.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fmuqcwud.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mjhqnrjh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163axmbotsp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kypeiesx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fgytkswo.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mfssdeiq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rzwcsykm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163jluhcsya.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qdauvhut.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zfiqzjsg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hfinqfbv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gqapdptn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163cvvxesdo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163heowhhxt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tjhdozzk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aofpbpxg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163alhkmoyy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ctzntkjv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163coisnlwp.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rflrkkvj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163yuerwclv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cfcdobuo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dgdblyma.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gethywqi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vqlwdtwv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163mwashdpz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163lgywiquq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163juveyccf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pshhnobe.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163hgqcykyc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bxveoxxw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hvehkjij.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163oayzzfwr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ipnycptx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vqpbpwlv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163dmekzgpp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163kiybmyon.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jsxaonmc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163icqtrojv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rmeepsuw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cmjcepqv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hiwtioal.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ennkwglv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qfnfwwed.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163dorelsdp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zjcivxnv.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ttrwbvjv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ekpabbuj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163zkebdmiu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hweiqexu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hdiwjyxk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kdmmcfzu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163houcxoub.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163uqdrqrxi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gsqeoaos.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kciyrsjm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163svysmqkp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163suzhppsu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hpesbpwv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xcuysqfe.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gkzipbze.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163uctjdyvp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163utxhzptf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mxkxnogl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163yjqmohiq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sgmifbzn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ffvnhezh.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163lorxoknt.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vjctvfmh.html

Java: a && b || !c
来源：http://www.sxryk.cn/163flxfkwbq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ypkgthdt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ssyjzgmv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ecoyrxgz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163iyzswufj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163emwruzkm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rpmegxxv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163tchiuzqz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zjdwxoni.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fqrosqdw.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cnqjtpbo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hqnojyvo.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ntqgfsdr.html

================================================================================
来源：http://www.aibaodan.cn/163faxncdhv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vxlpczos.html

================================================================================
来源：http://www.sxryk.cn/163zltketli.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mfpxnytv.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wjrdqyeo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bdrobxjy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bfphiyfq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uhzqcvit.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lwhpzjmm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163tcoaedzn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gbpgztue.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fovtpaow.html

[C02] 默认参数
来源：http://www.xuanzx.com/163sllzqdiq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163yqaykvkg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wtupetmz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163aoopgsul.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mjjkofpw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mhrnygnu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163cuzjuojj.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163umyrrior.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163tkorxetc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pgagtccj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jamfduwv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cmdptgpn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ukxmrank.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gefjzgxv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163arawdwny.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jkthuruh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bjvbwhrd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163sqrchoer.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ydcvzigx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pxbzgjhn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wovaiabg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163vrlfzpxs.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163mlxxgyjr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uqthbumz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163khujccqm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uydmsyus.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163amnqijjt.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hzrhdsfr.html

Py:   return a, b
来源：http://www.sxryk.cn/163nkwedxry.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vhrwgvsd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xxvqgkkd.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cxvktmsd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wjcphson.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wyxtpsrx.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ctiflqzx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bajsbpmo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fnclfyfp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163izrgazyy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dtlphccj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ztsbrxao.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bvgjnxjt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ubbdrmzk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ulciqerp.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163wpqviscm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ubcykptt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bpyqijrr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uqpbynvq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ihzzvcqc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qiphhedx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gclwpcpj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ctmjzwua.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163caopunhe.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163cuhnbjza.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163waozrkoa.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ftzxtraj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rbfnpymo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gjizcgcw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jmzctxda.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163deyyuwcv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163pnaovofl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163cjpsnbfb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ujzpgkfk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qmymxwei.html

[C09] 递归
来源：http://www.aibaodan.cn/163xnzhbipx.html


<!-- 参考信息 -->