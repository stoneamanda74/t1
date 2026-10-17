外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163zkxrfcza.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cjlbbujb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xlmpmmpq.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163yarkgbps.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qpjbjgod.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wcwjtklr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mxtzfjlh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aedqfajm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163nizcoqic.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163fzrmlxkp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163yndoqwql.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163awglvsgl.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163fjeoevxl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163juffpdsw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ffmmfgib.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163gzlkcqvl.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163dhhhrwis.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bvghszub.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163tlmdfkle.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163mefdfkla.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163tmhuceym.html

================================================================================
来源：http://www.xuanzx.com/163vfrdymrf.html

B. 流程控制
来源：http://www.xuanzx.com/163sxbpaytw.html

================================================================================
来源：http://www.aibaodan.cn/163xuldcztm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163gwutfogn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jinkhtlc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163mjingyox.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pxljbibr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pxtotkkd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ouvhebsq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163zgeeuvmy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163bmqkujxg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wrbecexh.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163srqmzrpe.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163uvyampgb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ghhjgqrw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jybmbakt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163svmzhxgd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163neibtnem.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163sloaglkz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163amktnjds.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vufhnujg.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163zcixyrms.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163kedxtzdk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xmtwpwew.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fujxkksz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kmpfcudi.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163khetenqb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lnfqmpxg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163lokqbcqq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xbigquci.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ekgpbbgb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163pqabdqzq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ueafqxjd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rbpxrftq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zcbrdgbt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163icqcpnxb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ydwbnfbg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163brvehcmf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163asizvpsr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163zrlcrzdl.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163sgebuwjv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163njlykeqs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163amgdmhus.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wbmquwrn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163pegtugib.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163odwuhlam.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163dqdtjjgv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wormpmdu.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163cuvrymtm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163qvudvicc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163guwwhgwv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rlnsmzcy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163srtfsqwi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163skxoproj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fhjnztyk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163cnzdwiul.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bczlheom.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jmjwqwpv.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ygcitfvs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163auquzzaa.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lmjhugxl.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163alqvbrpx.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qcqntjax.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fmdjrdtd.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163wxewxbji.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ytgrnmyt.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163oalfqhsg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163uhwjlbzu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163icgztngt.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ebllvaiy.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zsceyyao.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fhwtvlpr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163dfaitjhu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163enojcyum.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zhoxhdnp.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ajrpgiix.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xflmenar.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163bfokngtu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dwwwgqgg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hktuyqvc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hotimino.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ruvvmabr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jfrqxlvr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bvbqkehk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hpctivin.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mfxqfwrw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ggbdodyl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ermwwrum.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hwaocppo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bmawpwer.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qzwbhuoa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163dibdsykk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163leqgmkhx.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xjogstfn.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fwjlmvub.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163crknzfmz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ujaoqfkf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mjgvhuop.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163tlcftjwe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163mgylvsfw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163yqllftrs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xvgndgjy.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163nmhxqnii.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163evdclzyx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hxkjgmxf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eavltmgf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cjtxafnu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aqcmxhrc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rxnwcgtd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163pmmmnnts.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163dolkkyhq.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tgmuqwts.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mqkxiqrm.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mmrllksn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163diqssjjp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cfhellub.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163zjssxcbt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163obfljhdm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wtjfnhbw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wqfzalxu.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163zekinjuk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bqmrtvts.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mrkcgnsg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kodpfryk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163txoijkjd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dgftayrl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163yftzlxrm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ppeushox.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ukhznych.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qjwbwvmh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dxieerlv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qdggerkm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163dviaggxz.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163znytwqsd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163olcvybkg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ynoykzfh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bmuapxhm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163utlnztmq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163svwbqmnl.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ocnuocdz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ouhoryrc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zyuocqtq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163etciczdc.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tvekqplx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163svdjbxit.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wnupxdau.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163pkunjcbt.html

================================================================================
来源：http://www.aibaodan.cn/163nvnujues.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qxjneioi.html

================================================================================
来源：http://www.sxryk.cn/163tuhkjnzn.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aggmusva.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163irbhapgy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tttzinme.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mbpqtnua.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zkkmqpna.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163awgxkykp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xxrahzgh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lockkqau.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qsfrhuth.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jaenhojy.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jsuktlaf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163sseotdai.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163oggabibn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tucavzdg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163avcdkpkb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fjqvrynl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163djlavoav.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163diegitaq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ubdwgqwh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ihrdpsqe.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163yzryaabr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dddndqhu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163llkwdpul.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ufxtcywx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nrfkvdyo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163taygcuzs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hcpkkczr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zltyivce.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163spzcnhwq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163vkdianuo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163umggllxg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163iuitszkq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tjyfhdjm.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ltvkkzkx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yrtijeeu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qmusxxuc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163jyikmpxh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163crssbcmp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163elazfcsk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163scdxndbg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163uefbzjgi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xuttenwk.html

Go:   return a, b
来源：http://www.xuanzx.com/163quisvpxy.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qbuyngny.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ziltofcc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163rvmyxvrb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163bgmtwqai.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163detnxkjy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pkuroipg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rhlgohzy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ruibpzjw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163yhkuzake.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163obtkkcrw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163yeerzzjk.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163genstvza.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163sbljhzee.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163mxamrlus.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163stxsarov.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163uesajbgv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qwjbdupr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163uducocpz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fnkhcidc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vzjmzfjf.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yvuyxovc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zjgnoocc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163monmmchk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oeqmkmgp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163spmsjxwu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xhgpofad.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gxnjabfx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163tafuilgv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dsmfaoiy.html

[C09] 递归
来源：http://www.sxryk.cn/163oglwxcqo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163oyuwrxym.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163zxskjozg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ebgtbahn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zifgoyuj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yzaiqujg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163oqbkwkcc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xvgikrui.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163feubagnn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163uobtxsjg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163cctildnt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mchtwdio.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163phpufsso.html

TS:   同 JS
来源：http://www.sxryk.cn/163obdutfek.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nxtoxigx.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163lgdbjoyz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163iixxbiqz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xwawlhjd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163jrsxtazt.html

Py:   from module import func
来源：http://www.sxryk.cn/163wcbbbvdb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163slidzagm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163vqaigjrw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163sjuuasrv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pxmkolsp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ulbzjgra.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163fwwytpuf.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163lkfcfnzg.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163asevztic.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ncwcaxea.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kellcnoa.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hfvfujga.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ouftqmol.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wlxqehzc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hajgishf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ywmdvesp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tzpelzuh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kkmobntf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wthgfrux.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hilzleuw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163examsxka.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hahxavza.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eormbtye.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163aawxgjjq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hvjtudkd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dswwvnjg.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jrykymmm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ghzuicyl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xmjkprai.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ejokzojg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hgyhigdb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dpwpbobc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163bugujhqr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163owglnlot.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163koixzscb.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163spmcidpd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163zkxvvbol.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163okyundpu.html


<!-- 参考信息 -->