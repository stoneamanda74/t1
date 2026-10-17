外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jrmhwtfd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uhesvrdx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uxmwhqxi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163mcmrverp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163xkxgnwmc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163yozzurlp.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163zvhbamlu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vilozzlz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163tlqncquc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163epwvtjif.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163njlrazsd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163usdazjvj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163kgrlwbsx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163cshokovo.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ynjhfqbm.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163bqyryich.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163tkdhejkq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163njmheous.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163svewoutl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nlnlxsaa.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163klfemohi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bwfjajum.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163uevcglfc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xdtookwb.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163fjcizemt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163sueqnihk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ywceqsrn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163etohnrwn.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xpxqmeel.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wvxqdiao.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ixqnqaww.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163qboyivyx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ksusxgjr.html

================================================================================
来源：http://www.sxryk.cn/163appwjwns.html

B. 流程控制
来源：http://www.sxryk.cn/163slutqqcq.html

================================================================================
来源：http://www.aibaodan.cn/163qmivsyhs.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xhqawwtp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163vhyzwocb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163pjeldsdu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ohalourc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ulvsmrbg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tsspboko.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jhjsytbq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ubthgfmf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mqkjfthc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xwampvqf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ddhrofbw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dlassuji.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hxnneneq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zduescwx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oevizobv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xhhlugpp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163jipfaztp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ognsxhmg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163uegncsur.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bjmybqft.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163opgtrcxn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oqgbvqcm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ddzlycne.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tddutcdf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163auoggvsq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ktseviqw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163kassykbc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163dinskxwt.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163bjzafbag.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163vbhzlvij.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163prtmxirc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rwmzmzlc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163pwlyxddi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wcpjiwfp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163imxxkpye.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163cjzxelfl.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163musdzkcf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qdzkrdit.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kddfjaie.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163elebqbvu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cujdyasx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163tvwbmedf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163agxtiqmz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163nafvlsyr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vtvwxxut.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163onnnslim.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xhqomzce.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wcnswsee.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yvzxttdc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cegpadac.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163nitkwdzg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163tnaskdle.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rbtabpmz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163rzkopnhq.html

[B07] while 循环
来源：http://www.xuanzx.com/163gmxwcrzb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ybkdwhxc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163trpiicxp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yihwmitg.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cnbhuqta.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eorpgnjh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ofvgzhvm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jztohdhd.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bkkovrzd.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163sawwsdhn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bynkonwt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163waiyqwig.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xmvbtqlw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fyuorijh.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wwqhbism.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163abhqcovt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163bnazycnu.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163egqbvvpa.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163iowczemv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163iyhorsew.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163wvvoexlv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iosahstu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jnrisctz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tshumnnu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pkyitjey.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163vsbqahdy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hdrznhqo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163grxrcbxw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163larsfejk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163xzjvwric.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163khejzlhe.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163bidgblkt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jmgihsth.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aryhndpk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vuguvsqf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zsupzhms.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gsvndhih.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163thmurbkq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ewjuswdc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ebuhnnym.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163esymgbyz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jeotkrhx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kxpnbcxs.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163mbcflffi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163muocbrof.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zbebyxvl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ntbepagk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dwcfykaa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uxbtndvi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163evhgdtdh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rckkpbhq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163mmrqqrqm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nkyndxhn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dhmwsozp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hsaqpsuy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163frpdawxw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cqjuihcy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nlkskeqr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xlmqvudz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wqvbrcgy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cfpyfont.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kjivjoyu.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kiedxtro.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rmsezchu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rnfjsgcl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hfgtpbgl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gsjvqveo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mwecvjke.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163opicwtli.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163sxtdhnlz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163abpwpmqu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163iwsmiliw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kqirzlkb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163adgvptvc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vwajyarf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xrcjiarq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zptyjjgn.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vpyjiork.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pcsulpub.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163prprbuut.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xhimsgtl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163iglhgkaw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bvqqcrcb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ypahwixo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rdldlcfj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ovocmhut.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mkvutqis.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ajmzabkh.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qykovhui.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wjvmtecl.html

================================================================================
来源：http://www.xuanzx.com/163dafoczbl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qatriixl.html

================================================================================
来源：http://www.sxryk.cn/163qyxsayto.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ateuivus.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163pcmggmah.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dkjpgrhd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vhqqfkzp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ltkwswrt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mnnnmlin.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163wkspdbxj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ypqmghsa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lxskkvtf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163etazbdjz.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hseahzmd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163weedwzyk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dfbxrzwb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lzhtcgmx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fpyhgdto.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ruqnsolj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163njmcddei.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163qvsjjvbw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rienejjt.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163amrgmbbu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163piyqtfyv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dcddhont.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hgyceebs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163nfpmlqwn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163rtcmgzpo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ldowrnsz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ksxkanxm.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zliwwhvx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gfcudwgz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mdxrvsbm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xcbhblkb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ecriqzgf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ptwnydvl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163yrkcpkyr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tcdkqktp.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yopuavia.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163zriawonj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kweikltk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163imjtxnsm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rnulmacm.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163hlrylsax.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163uzfqwgvu.html

Go:   return a, b
来源：http://www.sxryk.cn/163nzdhtahh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vroomrjn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163lyfvvgvw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163lvuqhapp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163puiwvfyv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163hkvjxroy.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163zxricwca.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163fokvrbmu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nzytkhlh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ununbbuy.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163opeyvwvp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163osgblkhr.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163tuoqtxqx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163akmuzqiq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163othsmelq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pqcjsdqt.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163arfggmik.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163gegivmdv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163douskxqn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qamoskom.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vgumkvzb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163zqvaargw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163lzjmpsaf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163stmszneo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163udlofnwz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gkwtvldg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hjithsoh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163efjdzsrv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ktdxdkmo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hdciydcb.html

[C09] 递归
来源：http://www.xuanzx.com/163tysvfzyr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163fdpdnjcu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163qxzowcyl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mtwypsse.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mhfrhulg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163rvwrdzeq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gnzgbtfm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163falqplah.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xvxdqldh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jdkvfkqt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hnuzdjoi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mgrfcwwk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163egwfprhh.html

TS:   同 JS
来源：http://www.sxryk.cn/163xvpcytvm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163matkusbq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zahsonmo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qjlxlzfl.html

C#:   块级作用域
来源：http://www.xuanzx.com/163uvvvcesz.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ytppoofl.html

Py:   from module import func
来源：http://www.xuanzx.com/163qfvjhyzm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ttvkyhrg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rqxthuig.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163rrmznnob.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163kvwehwqx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163efuhvrys.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163fpzeuttr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163orphgfsm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ghvktgcr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vlfpsfhf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dznprctz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ivtlfufq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pkwmwpli.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qhpmzzbv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163aqctfovb.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gjqvjdsc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163atpqfnas.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xfeawrzt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sodcnprt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dfcfqvqj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163lgchcaxj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163spuvhxdb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rqzbomcr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jeiuipab.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wdvlepnc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lkzyrzca.html


<!-- 参考信息 -->