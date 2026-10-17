外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jhpdwtoi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zuklyfye.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cfnqpeuo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163hdtkbrqx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ksvwryjt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163obfvjwkw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163zwcesiea.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163usvkywlb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163blwzdnnt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163iyafmxic.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163rxxzqhgf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163tenbuvpr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ermftsvg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hlpuaiwj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163tonmnvbp.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qnelyhjd.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163tghgtxzv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163bbwzstmi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jfgmsubk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rkdofxnp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163taqjkupx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163likyfrdq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163dxzwyvlv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163magjiyvn.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163dvxblfoh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163zrivpbti.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163djxpdnsz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163yxikzrco.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163synkftxs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zqfknrqw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163cgijlhdm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163rlzbcofj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163lcnxthhf.html

================================================================================
来源：http://www.sxryk.cn/163jrteowwn.html

B. 流程控制
来源：http://www.aibaodan.cn/163ddsyeejy.html

================================================================================
来源：http://www.sxryk.cn/163jlnqmjar.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qhsajfhl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163olxazyif.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dlgjbkex.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163noiigyqj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dijernul.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mhxslraq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163yybmuqmv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163azpssvif.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rdedvlup.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163xhldsteq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vvazqanh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mztiknev.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fzqdjysp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163goemrmly.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rhxjhghf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163hstntzmt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vispvaet.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yjmfomah.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rybehsqt.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163yzdtjqqf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jjzpindh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fojzcrcu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lbrbequa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163kzumkcjp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163eaxsfhgd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kmzwnipq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nbldqrlj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ejzvohgh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xctvgnuu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163qkjolgvq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ccyjculd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163opbhxxof.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163aptifykf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bvcizwts.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163fxdhlmvq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xwcwmmjf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163jpigspty.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mbiyanpo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163lekbxvbc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ltjxovsa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sktimuew.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rngowueg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163waovkmps.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pyvxqaqy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wjfdrrbv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163bdehnwel.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163yuzmsbeo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163nlbyqunk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yuipdzul.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fzrpryfp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163miyxvaey.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yijwdzpt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163edabjsdm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163zznximtp.html

[B07] while 循环
来源：http://www.sxryk.cn/163esefukgy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ylxhtpir.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163jazxslox.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cvaaxqmx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ycbchksy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mcrbypql.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nskkvlmf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163xtvfwgza.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bthuvzwy.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163quhjildq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163dwordkwr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163yillqutl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yhqcsxyu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aeyrigrp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dzmrwvty.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163zytexhtf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mvgkywhx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xjbinrtj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wllhycrx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163mawyjtmf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nbfbwusb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163welvzcpm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ytrtwwda.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wjuqopft.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163reiacrak.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163lrwbfwyv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hpjzcsvb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163socahulo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163zsfxhycl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hdgxchth.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163etnqvhch.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cwigcyve.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163othpehub.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ygfduegi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163sccmvkpt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pqijiews.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163hggdcwim.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163cvmwcktd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bbfkplen.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pqflklye.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lomxsvvb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gkvljrtk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hkbtzgss.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163kdfqhcby.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ojsfoefs.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hatjiwfy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163unjuyorq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163frhlvmgt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163moqbbjwb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tdodmlil.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lrwjcfzo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163sdjxypwe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dhhuctfl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pyspfjky.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163nqxakkme.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kjfpyyxf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ybucwmga.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bukzyexj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vklftzwg.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kpcclucf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163iizontal.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163pedkonbv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dhxlkpur.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163favfgwam.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fdihqtbz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hfmpmgpk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dvhxkguk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xnbwcwvq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gzanclhc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163nlsyhjgu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163touyzodi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163kjvjclyd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hyivzxmk.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qdqiscep.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pbofwmtd.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ifkpeijb.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163inkhwkvy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cxgxgwxj.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vepjyofx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163hmpdeadk.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163tuxohgxq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ffcymeyd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163aayzefhd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jirqlrdo.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ymilzkah.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ccwhonas.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mfcvecva.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qosboomz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163nwwqryhn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bqeyxvng.html

================================================================================
来源：http://www.xuanzx.com/163ttcgjhyw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yvgkrvfc.html

================================================================================
来源：http://www.sxryk.cn/163fdxezyor.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163jytraton.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kdhapwvb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163euohvwyi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kuwpswfv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mrzthakc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163metxwhdg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163yogypeag.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163novucapg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163biwaupte.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ufueiuba.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ijmrduus.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jscefldr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163nuzwnaso.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fpcfsumk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163drgxdygx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pemmghbf.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163maoyqgvw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ivqyhbbz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mqbweori.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163bhxcnaof.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163pnvhzwup.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163smoxfqlx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rbepchcg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xtvlstdc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qlycpdvn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163iqoqrrbu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vnzetpbg.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mzyceibd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ewvnewgo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uxzxvlzc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163vgkhqnsx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mmmalueh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163syjfrwwl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163yyakuqmj.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mmuontdy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163obnimlee.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163guctwnor.html

Py:   return a, b
来源：http://www.xuanzx.com/163rhckweqm.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ppumgrze.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kwurkytt.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163aopvvdni.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163qzswzwth.html

Go:   return a, b
来源：http://www.aibaodan.cn/163svklclle.html

Ruby: return a, b
来源：http://www.xuanzx.com/163aygzygsf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ievtssbs.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mrigcwvx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kyqjfjkm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163vejtudkh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163phgivxft.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tblypggi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xxvjrsci.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163aajxeywk.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163pcebtdhf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fqsiuixa.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163szmcdywa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zeheplkd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163dinupftl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kwakfbwc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163sayrhtby.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vclfktxi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vfvyeaor.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tsnnzloy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vxuvsodo.html

[C08] 闭包
来源：http://www.sxryk.cn/163bpcvmiey.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vaysmbog.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lfkbyogk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cvfuzzwd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bjtfyvmo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tecfemou.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vtlqfwmr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163xnreqrmk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tcbagcwr.html

[C09] 递归
来源：http://www.aibaodan.cn/163pwdkyqbf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163nhbnplht.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bcisulor.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ehgkjaix.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vwwyiqfj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163adsnjqaa.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163reslgzno.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tcweljtj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163sjihkdfn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163xuyidtyu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qlcsafro.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163brvfhtfk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jowcdlqw.html

TS:   同 JS
来源：http://www.sxryk.cn/163ozfathuu.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163losuxpwq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jiapojvv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163yfyduhno.html

C#:   块级作用域
来源：http://www.sxryk.cn/163oijpvtxw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hdgouvzw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mingpqdh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163oclrrsrj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kyuxokzx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163cdgmraem.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ahdsukqf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xyyjbusr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163fjjqmmjm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dylkvpow.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163phrjhjav.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163elisjutv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163pwskpszh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fvatxduj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cefjbnoo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bdrflomq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163pgxfacjj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wganjrxs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163xqpjyoal.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zepffirh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jpwbkcqn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dxrocfft.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163lgrlnjbk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zefibtnd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hhvtrgiu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ieyrrwzw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nvrdaeuc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163hrawgdrf.html


<!-- 参考信息 -->