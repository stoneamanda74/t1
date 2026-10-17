外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163mlijausg.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ksnydimu.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163vahhimhp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163bmamjkwb.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ltubxrtj.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163iwhqxbbc.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163badlkbum.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163stwstczy.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163exqpfvfk.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163hpvmyjhw.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163jewfyyjn.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163deyievyo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163anaisagy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ugihdxfk.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zjojuvfb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163lghdbzzq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163wtwqkbng.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163rwjgbzqh.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163iaqxyfmi.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163rwwiefin.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163dkueigoe.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sqrbnjqk.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lpqzaqaa.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bbxsmvvg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wpijlnbv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xxbvrxoo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ojwcwlrx.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163nkrkmlso.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163dhyxeavq.html

Py:   len(s)
来源：http://www.sxryk.cn/163uypvcawi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163weudowyi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163glcvngge.html

TS:   s.length
来源：http://www.sxryk.cn/163mkwqsovx.html

Java: s.length()
来源：http://www.xuanzx.com/163dbkyzwvw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163hjrksdhw.html

Ruby: s.length
来源：http://www.sxryk.cn/163eztjjxql.html

C#:   s.Length
来源：http://www.sxryk.cn/163onkpexye.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163upunwlif.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163vvxgnzxf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163atjrblje.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wjvmtxas.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163luhgyguf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163aoacfaky.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163csrgrvax.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163dkzsdxde.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163xgesrrpc.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163uollvaxl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vlykphvy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cuujovtq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kzrzxttd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wmkzikib.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163lboaitny.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163plfmrzrn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163uaebbhtl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163odzucaei.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163bhgcnbcr.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163drltnsth.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pceaknhj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ecrwyrjn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163czdodndk.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jpmwmoxt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163eiydtbti.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ysipmgvg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163btcndgow.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163nxrhuqvr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163cibtyhfs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jcmrquqm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163exvfsbst.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163tiwiieep.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163vlkuzpcw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163fegsrvml.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163phcnvpql.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mtupacyb.html

================================================================================
来源：http://www.aibaodan.cn/163flnfrovn.html

B. 流程控制
来源：http://www.xuanzx.com/163kwouzaia.html

================================================================================
来源：http://www.xuanzx.com/163pohhgxyb.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bpiwnybj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163pwvxmrkf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163cyiifdqp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kwhmtgqf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163szsgzeep.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pjuaydzg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163uxcgxjco.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163zlpfenjn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163skznpbbk.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ufholrxp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163aiiyekft.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wsqmpuju.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163efssddih.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rfjdojir.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pbrgxplv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163cjxdupqb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163niiircwh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gdqxfdgh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163blhxqkuw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163vhueuhzx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163mlcfnvjw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wemsqngd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xnavcndp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163stkjrgvi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163rdcsjfdt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163oiafzhbg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163krxxvcoh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bezndpvk.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163tgqkrszo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163yvparqvk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pbkktnwg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tjvzczyp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163azcuwjcn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163yskarzrx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wbfwypac.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ljeexeta.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163xaskeaxn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vmdlhvqn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163zssswwqt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ojyolmah.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kwuwkglr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163vqeuzxmx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163acypfcri.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bnqsrnds.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lerrcagp.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163bqprsdla.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163qiygzwdn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163pklyyhvg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sppjoaiy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kjusjdcp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tzlvlvoc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163rkeunjjv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163lqvlztxe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163urkgxump.html

[B07] while 循环
来源：http://www.xuanzx.com/163qxyiiqya.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ldrffshq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163blqkblap.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gukisxiw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ojvcehfx.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lrfyeipa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dwsjlgoy.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163hpofmjlx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ibkdosfw.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ehsycebt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jtlqyqug.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ohnowgfp.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mgldijiv.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ygjhzfuu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pzfrkykc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163zmnzkxzv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163lrrgrwzf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163govdsiuz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163krcywecw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163sbrkzxkn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ngxprnbb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163afsnlkhm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mqsfnxjf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uxvcweyy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163poesfnzo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163atlyptpl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tmdjgxpm.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163cpwzpjpg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rmpylija.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163pbvwpcsf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vdswvtun.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163wcnuwpnk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vlhaavfn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jqgntjvm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qzzayhmw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163stnpiqpi.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163tjwmcaqs.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163elobkapy.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163kbieryje.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pnramodf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pewajlll.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163gbjbskqb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qqthlmpe.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163oufcpiii.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ndjvhopv.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rerklvqn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163yhbjhfbe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hbntodhi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163byajlmme.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rsufxemz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ruacgzqh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ayfmjfvb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163opshfyhc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wnqdmmht.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jmzrletg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xyxzytoo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ikmyhzml.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163htpzewqb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ycpccrzq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163esyhkakv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163alzvcamb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jhcxnxvz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163embrrsfw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163fitqstsz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163usnqrlcy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163duqtvdrg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tiddewua.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163drntcrpl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zcenrbdk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xjghukpl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163angqzcsp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dlgrazrd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163apmvvlqz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163exrdjqcj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jowixqag.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mbmizslb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163acxwywse.html

Java: a && b || !c
来源：http://www.xuanzx.com/163wceibzty.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163kzphstpm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dyksdmbb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ykucleou.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ncypxwuk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163asejskfk.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lnhezoci.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bpxwcbbv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fnudrjsu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nrjvwqnl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nfgmdiqz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163uoyfsysc.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bwbxxlzb.html

================================================================================
来源：http://www.aibaodan.cn/163obwfnmgn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lvvrgrkw.html

================================================================================
来源：http://www.sxryk.cn/163hahojvfa.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hmcetrqn.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163hgvbazfl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ilvqwljt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fgtvrguf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mlbwjkoi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vgkiwbsr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ujlvvqta.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163skwfsujh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163exqhkptu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163lizrlrbf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163usgotgph.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cdjulflg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163leahpyju.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jxmqxvgv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163djrmhhvk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163smerwuxn.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ekkpeqsq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dpauumyf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xwfxxnkw.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hnsntrjd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jbzsxtgn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163neitrqht.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ipgdzloj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163msekwfpp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163dpfboppe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163npqhtycf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163pxpnifnj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ilekmlkr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tsaqcwrh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zicjwfmj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pazxnbcd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163uanvehjh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163csgwliyn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163bzelafte.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vdvoaqfr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dioxtmtw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pdjjwcat.html

Py:   return a, b
来源：http://www.aibaodan.cn/163iniwnnok.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163uijxzxbm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hsersoax.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ytnjfoba.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163qttyofih.html

Go:   return a, b
来源：http://www.sxryk.cn/163pdodvxxh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163acerykjo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163satdliuc.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163txwaghrd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mgurtgnd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pyrnrzbi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ezqijjwh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163nqucjyqp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mxbmthpr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163uijjkoox.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163fzlgpddm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163olatxbms.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163onigxxmw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zyeltdnh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163srdotqqu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163dcowyqih.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163algcuyxb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vwpimaqp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163bhxzqaqj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163papbldea.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163tjbuvtle.html

[C08] 闭包
来源：http://www.xuanzx.com/163icqngyrr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163kiwpkvza.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163odtyrbrp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163reyyidkb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dfgrbldu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ydknjaww.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163betebene.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163moinlxsa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163psuzjoiu.html

[C09] 递归
来源：http://www.aibaodan.cn/163wtfpabna.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ntbsdjyn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dttwlbzs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qcrusoaw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dupbbvvf.html


<!-- 参考信息 -->