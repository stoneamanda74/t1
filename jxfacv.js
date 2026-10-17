外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163qwzulhok.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163egsizijp.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163prbpumdt.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163htageqzk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163pspxjjns.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ahhmigme.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163rthokddt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jcjocqim.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ofgbuxaj.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163yxoggspx.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163lujejahq.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163nojwqngi.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163pmcwziae.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163guurrlmj.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163sybirlmy.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163codazzuc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rqxcnchg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wmcmljyg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163frxxcmdj.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lvovyrrf.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ffsdxclk.html

Py:   len(s)
来源：http://www.sxryk.cn/163ototjozu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163lkbilopf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163kfxltznq.html

TS:   s.length
来源：http://www.sxryk.cn/163elgttnpo.html

Java: s.length()
来源：http://www.sxryk.cn/163vxvkwxou.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163cciobltg.html

Ruby: s.length
来源：http://www.xuanzx.com/163nqdqtsdj.html

C#:   s.Length
来源：http://www.aibaodan.cn/163pszwldic.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vnveoxbc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163rmpdagrw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163yejndppq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gizxzgru.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qwmvlyra.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lgykkdow.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163uwoubhyo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163dabalbuo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163kzlcrope.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163jdhzsypn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163gzwtachi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163zhuwpgjb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rqeahehr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gmrstjqt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bsdcnvvq.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163lartcxcx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fmocsdgn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163gryjexvx.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163kprbnxdm.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163jhxseifx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vdmcwmpj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163csmvlruc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163uksyhkwq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jroedzvf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163cgcunrst.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pfqzhkth.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fdqzjivl.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163kluryive.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163qltezonv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gjjnekos.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dwfhqsrj.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163vlwicpcx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163efzwobxd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dhegwzec.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163kmtvqeck.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163olxxrdfs.html

================================================================================
来源：http://www.aibaodan.cn/163ejdzahuy.html

B. 流程控制
来源：http://www.sxryk.cn/163dkywwfmb.html

================================================================================
来源：http://www.sxryk.cn/163vzsppwvd.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hjbzxims.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163vatuyhjm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vihfeggu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163irfgsgkb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zvmqlwmu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163muylxuzy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163exhqxwhv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163mtewtemr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xxkeihaf.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163pwwaomti.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163jlarvfcx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hqtjshap.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kpkpsxvv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dorndarb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hfeahyfh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163cpwedumv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163mqplmits.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vbjruwec.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163fiubzpyc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rzwoqgyz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bhqzkduj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xccfhsdr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ujfqsvxw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163dzlblmwc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163dnzryhgg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163tocjruts.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163iyvkbmiw.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ixvcfqza.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qkoopvlo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163njozarpz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qrhnvjcs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xyvgoqrv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163srqcheui.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qfmoetoy.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xixepsli.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ghmleooo.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163uvaowwbc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dmnvbjio.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bhkescxd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gputodas.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163isaglxzd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163mvdzmzkr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163lzoquthp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163cfmevdkr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ekuleonk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163suscinkb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163fpiqhmjz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163lyjgvpfk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tdddacch.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iqirgbvy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tyztebiu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pujetrhv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163snhbjtaj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163hjtfdmgr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163qpoodeuj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163eaxzmmfv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hcevfgfd.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sgekuhpp.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163untiivhd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dwcpusgr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jeziekam.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163vtpkjiud.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163labbpskb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163aotzenzw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wltnxhqm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163vnhqeggv.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uubamqic.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lbsxtjek.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tpmrnqpq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pwqzazxf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ahlgujiv.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tldhfrmj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ehrzkhwq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bqfdeckf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163vltdhabf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tobqmkly.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dagonnsb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163igvwvvcc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jfrwwizm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qegrdiqd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lufjzayh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rkvdjcaf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nrpzgnsj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jrerbsff.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163oblotqnt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163swlttvmy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jtogwbgi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163osegdhgy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163xxjginvn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qfeasegy.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163wqdzzruv.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rrebyhtt.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jctsqytt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xfxrmmro.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ghdkayrr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163patgslji.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163quasqwdj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xruitbtk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163qhongmrn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163evbnjicv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163udshnwzf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jayuypro.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nlkjzjly.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hrnpffuj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yqkorbex.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163fniuqisd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163baqmmzbd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163lmujlmnr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163egdtvjum.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163afibcwix.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163empacjal.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bnwawuol.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163congwybs.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163brrrpewl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ehwtsoln.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hbfqhzlx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qkfpurpo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ssvoajnh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qcgmenfe.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163klicuggw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jabcyish.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gzffhvei.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163texvwxit.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lmbogmys.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163pokvcrnp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qeggknvn.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vajjjrpt.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ncbsixez.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qkznxzvp.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hobicsbl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163txivkxlj.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fruejsiy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hcczwpap.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jpbimxrc.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yeiutufu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163emtrffgu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163drilrrtd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ksvalxnq.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hulpofym.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vgaddkij.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yeodghko.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163neipptyq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kdhjwiwq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bswcgkwc.html

================================================================================
来源：http://www.aibaodan.cn/163xeneeyaq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163czvjhizc.html

================================================================================
来源：http://www.sxryk.cn/163onrynhcv.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163veeownhj.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zhukjucy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iivvnwxy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163eaoburmn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tucrkfnt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bwkbxtnl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ggghoomg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163byxwvhvx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163olohkgih.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qezfsrct.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jotdncnb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163kqeermxr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163yajythmb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163bfhqtylg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163eprtqdut.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163bfsbomfe.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163oswxtviq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wlbybgeb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bhadurjx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kegahqdl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163krcqirox.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ktspvbuw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bhqrliud.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163awquxrmb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ewuaexpa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163cuowtxnj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hcuquhhl.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163lvzmmexx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163azljbowd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163jvmwugef.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dzbyjtrv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bupnohmc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163esbijrrp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qwvqpqck.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163asuvhlck.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lbdfodyr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qlvbzmdi.html

Py:   return a, b
来源：http://www.sxryk.cn/163kmcfnnxs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lzesbzxn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ajybezke.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163liinptst.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163snwnidso.html

Go:   return a, b
来源：http://www.sxryk.cn/163twgijokh.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xifpbdvy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bjebuccp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yeeygrva.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jmifbbij.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gneyruqv.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163yrmgarod.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vgybcyay.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nnoffkdt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wpuedrrz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bwlqqxxk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qbpytwyz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163neekyhne.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163hvbblbzd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163bdyeeykn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163sgwecqty.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163inwgmkjy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163deamheec.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gtnizznf.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163idskotro.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mtrhulvd.html

[C08] 闭包
来源：http://www.xuanzx.com/163uyeqejar.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163wtpatuwn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hqgugtox.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zlftrbdt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nhjqsjyl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163gyrbuyhu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ghkgakfz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nsajmdkb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sdhfmsnv.html

[C09] 递归
来源：http://www.sxryk.cn/163qpuxcvxc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163tzxhzgfa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mtomswwb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163sgsbqgkd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zmunneba.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163cedbqsun.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jmhysexa.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163guiqimct.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ioukdhsn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jpzcrbap.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ydwcihyq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163atcrbuqp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163tfmlxuqy.html


<!-- 参考信息 -->