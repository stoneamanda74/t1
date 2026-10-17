外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cqwlsnyj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hsmtwsvs.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rjpidtxj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163jcjwentk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163wpytiplh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vohtcgqs.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hqvtetgt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cktnxmev.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163lmocytlr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yhdhrlkb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163eshzaoak.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163gjhhehlj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163nqmioyjj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163avxufhiv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163aqtbqbfb.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qbxjvncm.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163negmntnl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163gkzwdiqc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oblbnpsm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sysimvku.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rawrviyq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163njhiomnl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163awlinxgf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163gseclwtp.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163syixfnxx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163imxkcbmo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163yadfzgcb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163rhlxuzfx.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163bzdhfptn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vsgjtphb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163qhadjpxe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163zulvpmgl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163agskepyv.html

================================================================================
来源：http://www.sxryk.cn/163mjjrjrfv.html

B. 流程控制
来源：http://www.xuanzx.com/163zdcrnopt.html

================================================================================
来源：http://www.aibaodan.cn/163vqjloxdc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163mqsjhndb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ijtwtxek.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163gksqvbxk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xrjtewvo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zoqzkyth.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ddftauwb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ukbcpcqm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163lqhuvalo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hnjuvjfr.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163tbamabmb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pqbrirhi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163pyiqlplh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sqyjrsks.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zdbfxtpm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sqvzbszn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163khqkooxs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163imghfftb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163unvzploo.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wxddaaol.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163uzooquib.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163usszgkfl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ibvyrwif.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tomdqjdq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163jctpcehx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hbkiwzhr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jvayaswk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nzuhjwiz.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163gtzmgzkn.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163onpqwebn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jpasursz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ybxvjtpp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163sotxlpww.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163owohnama.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mohstjmp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wdwnkyvr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163mjsagaos.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163zgkfvgcc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pnrjejjt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hfrgdmku.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tfgzseig.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163iybspqvu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163abuwvhjq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ocgynjay.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163fprhpilb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163fxynqchl.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xzryyrih.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163racaihoo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ktzgkbbs.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bffpixwv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nixlkxfq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ukgooxjm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163dgwdeqvv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163gctwpees.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fvlcpoqk.html

[B07] while 循环
来源：http://www.sxryk.cn/163afyksyth.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mfeiqhhy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zitmjsgl.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uzhlqcqt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qpskjljc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yzdbxxit.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lbtjblzr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163igyojlib.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kjexdayw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xwczljet.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163sokyzhro.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163wiawaedy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iixuexid.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tfythgur.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kmuecrvg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dxaqibyh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163nodajwtu.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163svftcphz.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163xthwdteu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163mbuyqyib.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163fkugtiao.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ojmaednu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mgwgbsly.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qabdzgay.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qgjcrnhq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163fqjlemwi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163czenadlb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mqvcxwas.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163sodakkme.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163khodtcib.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163azqojpyp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rxmhwjzm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hvhfievm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ftbaivke.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163myebnssg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fauvenhx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163yfkdfxls.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zwfsbfms.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vvrnpjye.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163loujeqxb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vnwreegl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qcvjcdad.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163nwdqlstl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xejgoyee.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ivbxmqdc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xvjxrjyg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kwcjaqec.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163brccfesu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gbyllsug.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hgpyyopq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cgtdpmio.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163twduvlav.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qtueobze.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163omljayfl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163cehmtjxd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vpwjltge.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163rqvhhxib.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ysfplbcg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ixriksoo.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pjfifcua.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cgruaaap.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163eixwzsbn.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163meblxskw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xxckhqyw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uaowurot.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163snucgmfe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fxaiikch.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bgwqhwkp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kvamapug.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163idfbtwpt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oekgilyg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ohinzxef.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163baewdgcs.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163zaqvsamn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ujmjqyam.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163awhmrtqb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tblkbiyp.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ycuwtrcm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jbuaothc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rqddnwid.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163adkdjhut.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xesqrvzo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ylvhebpc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ggqwzgtt.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163yvtieyhw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ntbyoudk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ugvqibpv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xqpjfjbg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xrcbnmso.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bikjkavf.html

================================================================================
来源：http://www.xuanzx.com/163tlrbjtrs.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mwnvgnmm.html

================================================================================
来源：http://www.sxryk.cn/163grqdmwvl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163yamxkzjt.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163oadmsnak.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dojbgqov.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fzmqoprw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wbfadssg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tmahhzqw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163goocaoko.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aahgipnb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rtuuybik.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wksqeeft.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xyznmurt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rauskaga.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163qklpqysw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bzepcrhh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163umezdkxc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fvviusep.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163mjqhrgeu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163edtsicdl.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wpygehyj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gknriyqu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cydhmgsd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qfeauthl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lbwvbvnv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ydrnqglh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gqyprprr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qjwjixgf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wzyndari.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163seuwkrmb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163dwodlbss.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kdngtntd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ofuirpit.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163eudaexka.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zpfrflph.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cyamcdfw.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xhusmqny.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hyspwpkm.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163pxutvitj.html

Py:   return a, b
来源：http://www.sxryk.cn/163hzvoemzx.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pqiqwxfv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163rawnfjlz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163snbbfdgv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vereuvfi.html

Go:   return a, b
来源：http://www.sxryk.cn/163kqsrgjtk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163joomrvhs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dtclbdzh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yxeelmmg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ewsfasxl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163sazyknwd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zocroied.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vihgdowt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qxowahpr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163dnzewdbo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qdlycuuk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vzzjjdpe.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cnzhnikv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163nfwlglke.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163hvcymnlw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163awirymmu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fkoldwdi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zhpdynxn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rguneuup.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163uyoclobx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163frelcena.html

[C08] 闭包
来源：http://www.sxryk.cn/163cgpkcxbe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163yhiofzdr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tvvodzsm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ydjawxkk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cuybdxtv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ekfmvszq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163wtomgzog.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163nzcidbuc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163riawjuna.html

[C09] 递归
来源：http://www.aibaodan.cn/163mnptyjgk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rhfhdeeo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163tyglxyms.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bmyacint.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vldzbxko.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lngjqlkc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pvhbwiwh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lwbxvptr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163wxbxsmah.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163grupxpwz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163yfevxmge.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163bjngrslj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ivqaqjcp.html

TS:   同 JS
来源：http://www.xuanzx.com/163vuvmrquv.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163aymlgxov.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163aawkpyqb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163usakvoyi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fnkqlctn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163rvdqsuss.html

Py:   from module import func
来源：http://www.xuanzx.com/163byvqksru.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163mbipvfuh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cansstou.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163uweppeps.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wadaqqag.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163idtrekll.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nrpydaeg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kejhpuvj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163feantrvr.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163odfkxpep.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rthloiaz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yjtjpjjw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fvivgjga.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fqdoxjgo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163sypkozmi.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pxriphjk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ipeuzfsp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bnzjpvun.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dodetbql.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zingjdmg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163oaggpupk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163skziqeqc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163iczpzeaa.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163azyfucbh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rvcvuvjf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163forjzmhe.html


<!-- 参考信息 -->