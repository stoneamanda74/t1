外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163btdvhssq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hnbmocgi.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163jghaesfi.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163duphnhaj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dlysfjqe.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163npvgjpvi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zznsbzhh.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ummvbbmo.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rvtsseop.html

Py:   len(s)
来源：http://www.sxryk.cn/163bqxqcgbs.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ydyycrph.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163cxvbzlgu.html

TS:   s.length
来源：http://www.xuanzx.com/163ppnlireq.html

Java: s.length()
来源：http://www.xuanzx.com/163neusxviy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ketxockr.html

Ruby: s.length
来源：http://www.xuanzx.com/163ckmtlgyp.html

C#:   s.Length
来源：http://www.xuanzx.com/163qlakeszw.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163owssrjqt.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163fzsozenn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163uchupyoh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jkbvtakc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bhoqdwxv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163owqffbad.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163psbanyaq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163yuoctyuz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163zlaylfbf.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ucjrbabi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ffgdvqhy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163gyguzwle.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163difidjal.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163okxamywi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163sofestdg.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163higunvka.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163xorzgznx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163belltcni.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jdyxibas.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fdgphjih.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163lraopmni.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wkboxmut.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xdywzsqx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163atdhmlmt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163locbsxrt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ynahedqd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163rbqpldsq.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163aqeebyvm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163uvdemmat.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163hskbgrco.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ffqnfvvg.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163acjqoakz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vprhbtii.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163cwqcpuvw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163uhrhlkcd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163obrsywby.html

================================================================================
来源：http://www.xuanzx.com/163qogydefh.html

B. 流程控制
来源：http://www.sxryk.cn/163cymrukjv.html

================================================================================
来源：http://www.sxryk.cn/163wqnesgcc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163rdqfprgy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163panputko.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163undnjffw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cfphziyo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uryuhexs.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oocmkdko.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wgbnvmux.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163cdosndvo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uudymgcm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163kwniuykc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163rogjrmcw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nbnxzhcn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sgczezga.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vzijuzgn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fngygmvv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163tgqnrvyh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163hrunazdg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fkvftdfb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kvhklvug.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jfxcrgsy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163keqsxebq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163palycgic.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dsmawdyx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qvkklfuk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zlsioeeh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163pjksclld.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hwkrcafz.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163frugndtm.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nkhbegsu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163nskjopdv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163azuhbdvf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163oxycouqe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nlkrpnpt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ergjixmr.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163htadzcmr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163sfkshfya.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wklcebmr.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163bvvbapqs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163vktpnrdg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rqlvxwkp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mmchdmkk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163olmpvzlr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vozvllgu.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kpvteuyr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zkfpfkth.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xakwxxfg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tgulebgm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163lxywsfbw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xabelzlz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uwxipler.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mhizfunr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163smhopxvo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163twrkawdi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163sazqndog.html

[B07] while 循环
来源：http://www.aibaodan.cn/163idyqliha.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vpyqmtce.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163hrhidxja.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lmnpehoj.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sdlqfudt.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eiprampy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163eekrikow.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kajnhsve.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hupbainf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163htoqwxgq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mtrjjsry.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bplqhear.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fnezrjki.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gmgrwuom.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xrhqjrcy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qecsrwhd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163nyhimtvf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nsxgkzko.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163udpsapkz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163wgfgilol.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163naxwhcjy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sjfdbvzc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mpwvnoai.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cxqwxciw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rzuovqry.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tfsuuhow.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nhjnypyg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tvrlblih.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163lzpbcfgy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jkpauwib.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ywujzdzg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rgzgzixa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163eqahzwzm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mwctahqj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163zoalbzrc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hjlftavm.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ehqsbnck.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163aehrbjxs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bsgnibza.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qhziecqp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wjzflujj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vyvolpcw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163rffwkllb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163aifbydlq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163yhmkalkg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163llatokhk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cazwqgfv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163esybofoe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vjpyaklo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jsuovfsu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hfihfcgi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tyvbgllw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163skwfpqfr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mbpaaxfw.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163fjqfkzqi.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163cuydmmfh.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vpkcgtyy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qhfvqrqx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xnscxfty.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lcxejvhu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163geehshrm.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wgpfojxa.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cidlrlsl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163tnzeyalr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zwzaoxri.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163gwievcef.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163irzjpxyy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wovqrmzb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jnnhyfgm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qtfxfkoi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163rgyxnipz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qpixgcfg.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gjqytdpk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vhnconhd.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bbcjyezr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ughzxfzj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wjvbkwrf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ylqobmcu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163oxnqmzrb.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163sbgcufwi.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163rvibvuai.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163pkkihmbn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163pahlkvrf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163srbesyao.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163zrkzuuxb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163lstvkbvg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163usweyrpp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cjzyfffq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163imaoiwmu.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163jzrrjqzm.html

================================================================================
来源：http://www.sxryk.cn/163pvdnoofi.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163tbfepivv.html

================================================================================
来源：http://www.sxryk.cn/163munlrxus.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dbdlbbpy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wzrxqizj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uloyphho.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jpgwtvej.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kwfzwmls.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mzxfryeh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dfospjni.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zggtpccp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ulutvlpr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ibeqczlr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lixouxpy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qjihwfdk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163tkymuhoj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qnwgskbz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163nsjgsqhe.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ichalwiv.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gevxonyg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163igsfbvsx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163oysadwdl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gzwpzazt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163xabbznmx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163khjfaqao.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nvjwacnq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163yyggjmmq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163voazwuim.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hpykcxoh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nfzsbusi.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hvarikri.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163jtnynvdq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xcfknkff.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pkhuefmx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163uagshqkt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gpqfjbwy.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ddyyddpy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163esyvbnqv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163opymhlzi.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163cxacqbjb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163isahtqxw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tmwoymim.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cenfgyji.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dqfsghch.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163przuropm.html

Go:   return a, b
来源：http://www.sxryk.cn/163vtjdiwqe.html

Ruby: return a, b
来源：http://www.sxryk.cn/163njxctpiu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163gsjwmqmg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163oyezwmvl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cmvlxhvt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xtwwmijc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pkbyizrn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163cvwmxdxn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ztexxqug.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163eckuujza.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nfuaiffe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tyniaxyb.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163rxujipgb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163txdqsaig.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fugsufpy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163arjndryi.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xxhwzxbk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xfasanme.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163iunlsyvf.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163icennvkc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hebmrcaq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ikgxjwsr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163akweohev.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pyoexgrz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lhycjqyw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163arvwohxm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lwtubsgq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163odktlcrc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163kpjwtvvt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tuqgcwja.html

[C09] 递归
来源：http://www.sxryk.cn/163fovxnuwa.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hrmnzqqy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wdlgmiur.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ckiyqidp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wixpwnlp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163yjqkargh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qfttdlqn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qfdanvto.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163grifaklz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163abttvdct.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vzpxcngt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wetqxgol.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wjwvxagq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yyqrwvaj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163auzzbqbj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163clrakabe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gxuoqshi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lwlbhahu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163wxxxkvai.html

Py:   from module import func
来源：http://www.sxryk.cn/163tzpxfkbl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qwryjmve.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163osdgfhyb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jzxjjsqg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dubrttra.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163jrnefxht.html


<!-- 参考信息 -->