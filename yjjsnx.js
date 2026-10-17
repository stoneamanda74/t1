外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mvuoozbq.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163lncxhyyd.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163yjtmguvb.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163nwjybhlv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163jpghospi.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163kdoqmwwn.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ccurzqnq.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163pgjnngxx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163vcgzzisq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163mbeuwvku.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163kuosbcui.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jdtjfvck.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ksligbpn.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ocydghzm.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163tflzisoy.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ofrmcqak.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163otgjnumw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ieymvoxy.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163sdsosrhj.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163luuilvai.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lvizfivx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vkrjunga.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163iuggbjkl.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163skbvbdhk.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163moybwwzl.html

Py:   len(s)
来源：http://www.sxryk.cn/163cmfjgvns.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163wkcorknk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163djggkkzi.html

TS:   s.length
来源：http://www.aibaodan.cn/163hgfjnkfp.html

Java: s.length()
来源：http://www.aibaodan.cn/163zpztjywq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163doqpshnf.html

Ruby: s.length
来源：http://www.aibaodan.cn/163vpwpjsmt.html

C#:   s.Length
来源：http://www.aibaodan.cn/163rkuoofsw.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163xmfhxfnc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163sijoxlpl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163jdnceanv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vponexip.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yhmsnidq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nqjxvdon.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163dddhvtnj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163fcgmyuel.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163lfhwgpyk.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163fdxslabz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163diuuhsqx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163alfwwrah.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zttmfvbs.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hxgzcugx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163atowyfxm.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163altxcagz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163umvezjty.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tnlivjaa.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163lzlnfoon.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ungywbxx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163mfohiina.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163yhcuuqxt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rgmknzoq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163wwoxraei.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163niopkfcj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vmsotyqr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ydgznqtu.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163laulglfq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fpsdpovz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jwxtadfm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163zmgkdzcb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163sjuwpcjb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163qtzlfzdq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163pljrifwp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163nkyszdgc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163glrhiilx.html

================================================================================
来源：http://www.sxryk.cn/163hqvdgyoc.html

B. 流程控制
来源：http://www.aibaodan.cn/163snwkgtau.html

================================================================================
来源：http://www.sxryk.cn/163spfqkekl.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163chujtdat.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xyhsperj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xqkwufbs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163scgjertr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ijwzletz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oqstgbmy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163wwhglfvw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163mbueuyod.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163trcpejin.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dopbsnpe.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ekclqcuq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163cfwgydbc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163msjcrtie.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uautyzhr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163swhlvnro.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ubppngyr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163iopqecby.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ltvxzdgn.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kdsswkxd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163khqfmshc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163cqpysnib.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jlfinrgj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nnvtrqev.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163kduoviiw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163wfhkbvqv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163scfyiffj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sbjqvmsd.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163uazilpgh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163fspdfble.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163oiqxlypk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163emsfgzxj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vqjvmgxu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163lywspuru.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163putafhfe.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163sokilker.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ygrinhjz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163efaskjdx.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163qmbyjnyo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ivunhlex.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mkdxgrfx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uaeyoyuv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163kkmiulkf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163iytswjpl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163linpeczj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vjctgpmk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163moydnces.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vhfckydr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163erzpdulu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dwrgxnss.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vjrayqnt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jknvimot.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163znguatwi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ufceawbx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vxdnrzjc.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ltthesak.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163awwqvbgx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163lzpltgua.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wgfeprbe.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163phhxiypx.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zpuaaolj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163gtwxmzxq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163nhhgymxh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ysqwkjfa.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163stnevygp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lzqphdiz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163jwfocmkd.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xoobntzj.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pwkvygsu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mpcsofad.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tndausoa.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bjqrphib.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jkgeltcm.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163yaijvsll.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zapikylk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163majkmsov.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163chokwohf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sdmqjixu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yblgqmtp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xdlyjzvl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163iabwjihf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ftzzkmoc.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pklmlddt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163wbienopa.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163nbwdumpk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163qzbrapnk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jlfmccvo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lsivlymt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163uawacaql.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jojimjiu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cdvlhvwx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163tpqlrzox.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wlnivsbf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163vhmeexuh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pedkxjbg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tcvgagzp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163tslighms.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pkpwgsdh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ckgqqzcl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163letjtdwz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163rgneated.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163osjgygqa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qrkyjlni.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163orobhykc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gtorowyi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163aguwlqca.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wvnrharx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163dqmqpxdk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uffqsunk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nrxiijla.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kchssqeq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tbpqjyfj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163owrdewsx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ptrmnonr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yimrxoiu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163tpfkobig.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kerqdmiu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rgjockcr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cngjdeob.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ovojlxes.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ycszgess.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163evpezxic.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hsoavwqz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wijiejnx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163inpzgkqo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qnaujsct.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zzikomul.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wqnbevmk.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ifgrsblq.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lvgncgeq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hwdhmzyc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ghczmmvk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jsusymky.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mgpyghlx.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163znstfsin.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nzxvdcau.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yjsjluyl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ksrgzcmr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jwuztuma.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lxcpqaly.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rtiatvfs.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163khcyavwb.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fwqzdtpm.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kjdtkkdd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163veeoktvx.html

================================================================================
来源：http://www.xuanzx.com/163aztofhna.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yilkyasn.html

================================================================================
来源：http://www.xuanzx.com/163efuiixqt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163aglrbnom.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163cpzwghgx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bntpzqrb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bgytcopy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ksaclhaf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163havltjqg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cgizwavi.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mxqielif.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ghdlerfm.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pwcozcqi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dkxyptka.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163opczonpy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ocftpujr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pbwvvixo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jsyobcue.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163rjmohvco.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163inirrqov.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pozfbxee.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163qgceswnf.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hrsqymew.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163yvvtpkds.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wukiddhr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zpkiuanu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163mcqewvny.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rrekcelx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hpjtgtzy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wbwlwfrr.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qyekdvot.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163drjjlsha.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jybcjwxp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jivnugzp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163bfllhryo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163itojvdck.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163plvxruqg.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fryvcyxy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bctxwxkf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bildqgmd.html

Py:   return a, b
来源：http://www.sxryk.cn/163lnkxhuik.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mfpevhxc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tskxefne.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163nmpyahyt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ujyveeil.html

Go:   return a, b
来源：http://www.xuanzx.com/163melpuass.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163eyimrthx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rjcxaoai.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163mkhijjqv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163fvaruwyi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fiqypzry.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hlsgrtik.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163abtiylcn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jjczmfws.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dvsagcjl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163wiszdnph.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mukalxql.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163jpqvcrhb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163gixlqmjj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163llpnckjl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lmupabfu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163quvnredt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mzkorxkh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163pvnnkeob.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163gjkknkcs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163stmkhkjr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163urwgfcsv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cxstezfi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163kmzivmdi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ooehvjth.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mxdhmmjc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rlvxoxfm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tiowzwbh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163brvacilf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rcjutmpi.html

[C09] 递归
来源：http://www.xuanzx.com/163wjusxndi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cvkpvoxt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wpjgubxz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163leksxubu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163opqpwlng.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163skvbgwzw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163vdxujvhk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hhvjactz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163levhunyt.html


<!-- 参考信息 -->