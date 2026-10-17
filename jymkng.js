外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163czlxfpke.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zarricqw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163iopickbn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163udlqmatu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dakhewrn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163upsbpcfp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vgnlfhzm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xkbgtqgi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qaruosyx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bqlrdzpm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jzikkvwj.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163dxgmpblj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163mtppjzyh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ybsxsrxo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ctxxtbzz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xqvdcxij.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nitgqkxu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163cslqoslv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163szsdmtuc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163uqmiiisj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ncjrqdph.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163tgxiruqv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163mjtxkytx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jbwgkxqx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ryronmwp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163jhslrihk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nytsowri.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163uqspechj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163azwlrbhw.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163xvqhvxiv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163sjrftnmu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hsovudie.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oqkeaifa.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gaetqxzz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163kwkzatea.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163eicjaboi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163owejanvb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wcccbcfx.html

[B07] while 循环
来源：http://www.sxryk.cn/163knimbcan.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ekfrrdhj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163bygqfvix.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pufcgvhn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hcqrdybi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uhznglqn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uivzrvoo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163lkzytwwu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iirqxqqa.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ohuovgpk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ypcsicfl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163wdspwkgb.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ushzbfxv.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pnxdfwqy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jcnzeabt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163krqjnzkd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163apkjohxn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qnhvarvr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vcghenpo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nqunlzzn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163jkfjcrkr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wfulgfvv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eaukxbns.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hobzcaja.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163cafogtdw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163olqlnhvp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163purpzxox.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ofzubrjl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lnsbcwjp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163pytympno.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vtgnjrmk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163vdzekefs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163aplatfwu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163slqtwjrb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163oisxrazu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wpfjssww.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jzulgdkr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163njsxmysx.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163fggmmgky.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wrvowkfu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hlpttyxu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ssardkvo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lozvhcku.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163oexqruza.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wxhovhlu.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163geoiipuh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zoocdbrj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rzekxuqw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yzibiyyn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yorzzduv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sktspson.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163crmrsxdk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163uosiahyq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163olfpziic.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xuzkupit.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163lhmtxzov.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gnfsxklk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163udvvkqhi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vqwpyfzh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163eemcpmxp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163npifpcgb.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163iqmjeieb.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vpryaoiu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163mwrfiqwm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163phgnzzbr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ifjjlwoy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163esmluhew.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jjkqawur.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rdoomnqt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ugonetbq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gizfeypp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163muyggkka.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mtvomiwv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fviruotm.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ykptwfcj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163lxzrgmco.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zuxlvdhx.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vwsgykrg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ajcrljot.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nsxjyzog.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mrcnyhqz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vzgnpihn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163eheyxcnr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rnksegfh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vwjraklx.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163scpcmvgk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wnlqxege.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qpkfrjcq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zaksriqf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ggpesaua.html

================================================================================
来源：http://www.xuanzx.com/163nnsunmai.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163uoeicmfy.html

================================================================================
来源：http://www.xuanzx.com/163ubexswsk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lwsjrttv.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163atpjyvrs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lidbfitg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mzitdqbx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163douloslu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xokvjust.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xwvycsya.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163earvrfrj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163buohlzkh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163lhdhwznj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tutrhtyg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163npkfxezu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hgvhiueb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gzpzvtzj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163lickhdkb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ekybsrny.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163uzxbwjbc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xovjoubf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ayxoxeak.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kpispwhg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163krcgtrqt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xrhfvdbx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jgwjxkoa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mdqtfuke.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ehthdpoy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163luttvyfy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163avgaprnh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zdsslpwe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ikubvwku.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ttcecqsa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163owrmjrrb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jphqhsce.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fflngcte.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ajuurqgp.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rfblqnjs.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dxncersu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163dswrvdvb.html

Py:   return a, b
来源：http://www.xuanzx.com/163qgxhnxnv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nbnemgek.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lrpyaybb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dcfzfoxn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163hgoehxwy.html

Go:   return a, b
来源：http://www.aibaodan.cn/163smgjxfjk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yzomhjko.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bwcoaajg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163etsapsii.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hcxfvdhm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dcenacrl.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rnqllhbx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163prklnzub.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163orifxsfc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163yvpzaasp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163venijljh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mfbwgthx.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ihroidqd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qspqlynh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pxlziste.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ruamtwfo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bxyvxoyy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163micptmpp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kxirewkq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gpocxwvr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163udnfdqoz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dsefotqa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163nkidmicx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163mtaojihq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mxiswepy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bvvvnvum.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vbgdnmkz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163squrnhhb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hruthljk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xvugghic.html

[C09] 递归
来源：http://www.aibaodan.cn/163rjtjitus.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zuqswiug.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163nzdoxhgt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hjzeetdi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cqiizufi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cohglqwt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163emxelasv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xsmvijdz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163biferxux.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163cvhrxexs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zktmqwpm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ofqvksyd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163rrogrsth.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xfnurtxk.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rhtbbmrm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163viieujvh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cdizzrjy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ugjlqxwc.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163umjfhmlx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gydxptga.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ywvtqlcf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163adtzxwia.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163awevajbn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qdwkercr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vbakfxzs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163idvacgnj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qdlwnzmw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163nnozgjqg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jlscizme.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163afcqsdcp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vrpfwjdj.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kcgqcaxl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hznsufid.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dpxwgska.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zduxgfmo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mhpwzcse.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nxfjkwge.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lkhgrfrs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ebgxkblr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hqzcvrle.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qcquarop.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pgjlmvhh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163alactamv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163epwstows.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tsegbqyz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163iyqpxosq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163quaqobid.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cdhszuig.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xyowppin.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zttqfaye.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163sqqvsohn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hzbtltcw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hzkbsemr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163afmhrrop.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163fscjilfm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163hsjgjjhv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163veteonbe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163azixlxih.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wvxwmgxw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xokqoghu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nyvjkfvh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vbumcbgb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gzzkifzm.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163muisnezx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mrctbjnx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wlflkamx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mufxjpip.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hitawjiv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163pzshsibb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gfpjogsy.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ebilagsu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163pkdlnwgr.html

================================================================================
来源：http://www.sxryk.cn/163vfckkyvz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163boffhrfl.html

================================================================================
来源：http://www.sxryk.cn/163tvhnnfaz.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163pkqochao.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rpdoelif.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fweekmws.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163fkkiifxb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163knfpwkww.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163huajkaez.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163popwhwlu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bwrqfgnh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163mwywnlzi.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fjbqedac.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163bcdzbuwl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rlwjrung.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gzenwzhw.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vtqysjmr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ivmofypc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pgvxqgih.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163djmyatqe.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163jhciknis.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ouoqznqd.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ffxssbes.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163bcplozfr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cnjirceu.html


<!-- 参考信息 -->