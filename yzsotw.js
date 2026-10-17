外链999!wailian999！

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163wjggpyrs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ylnuxhou.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lkpmoqhw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hbeexjgi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163pnytwspr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163npdkoctj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cxktmnip.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163sqzefaym.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163busgyjpe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gthvyazu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cdgeuaea.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163kcuepkom.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163jfgujqyy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wepjdmti.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wfgcksnw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163hqsatupk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ivbehbye.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ngyoqbym.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dbsouwqn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hbjzvkod.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ngnollxu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163veghphpn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163nlrsyhgj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ntfzluxl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163kuqsnzwq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tzgtaroc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lruclmyk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163szcatfxy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qvprpkcn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163iebgrzrg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ihioncfl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163kabmehai.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163krwmbdrn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cmtnddzl.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bkvxdwvv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yposqjfi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pfszeysk.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163knvsndtl.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sutehsoc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bvhqayss.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dyodgdth.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163djfrjltw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rvifeacr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ghkxlaal.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xpvsttlz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163nmtqdkxl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bomaxjax.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mwttlabd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dvdtyfba.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163hbkoiklu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dosccjzx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xyojesct.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cjzsscdd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163xrttvwtw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163egesfjco.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pibyyxco.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sfuqgvsk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hpbiyqcu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163awstpkor.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vrduhcdc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rgxhiffe.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qywavxxi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lvqmfovu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163avhkoqin.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xfoghmkg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rvpoaojt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163kowuylwy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ykmasepz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163alpavxxn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163yzrcryjf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163geyklvdw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qqsyfqqj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gnggvdyd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sukoupxw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zmoviacn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ebnncagb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tcabbpnm.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163uiswpvkv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163garfvylh.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163yfnaggew.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rsiqxznr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nfvlvedz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oyiwkvec.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gfdjllhv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zuonggre.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163uznglhbl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gahrchlp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tyqyjeut.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tdbvlpdv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xphbpozh.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nhhrfhco.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lagalbke.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kehdpnyr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163oakorwkv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cnujjczv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163fjrcwejy.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163pzcsafee.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kqwsmvrf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cabfwnnm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163lqogwhkq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163iyicwsqd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rmrqtiix.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jsqbudex.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xkzigkin.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cqvsuduo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rztofrue.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zeqmqzln.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mhgumkne.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163aznkwwar.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ffruhmgd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163qgrhofst.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mjdxhooh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zolmwiws.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fzxncidx.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qvdrakej.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wnqnanwp.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163nqbrpffg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uwzlsdyl.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163tgvcywvv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vszjpogu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fkyizbnm.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163nryzynaq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rtxfrrws.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163clncwphu.html

================================================================================
来源：http://www.sxryk.cn/163rxjqakkc.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jyufigqa.html

================================================================================
来源：http://www.xuanzx.com/163dufmnaij.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mubbfvbd.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ijqufvfo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vmjlzjcv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qykonstj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fzzhplxj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kmjitsra.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ujtyxbsz.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gsagxwpm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mdzhipma.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rooolxst.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fnctjbwv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163gevkopxu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163omjrinzi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pmzcszwl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gffcqjit.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wdwhupfk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163hpnxpmiu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xxhdsouq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163sbhfvurf.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163vfqagvnj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lnrzmvfl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lkyqdmoh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163odqppmoj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dzztgbgd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163mstzcphq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mbvadbdc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ggmwvtaj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163pspaeddo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xqqvnjcv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dvzyabyf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163dwqptjmg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qriormip.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ixgzohin.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ymyugxvh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dfzdtzbb.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163myrfzlgd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163iucubhpw.html

Py:   return a, b
来源：http://www.xuanzx.com/163gjnrvhmi.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163olvmfjmj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jjyqjfcg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lvnbaxcu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163aahpfymu.html

Go:   return a, b
来源：http://www.sxryk.cn/163bqxdzaai.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qwtaqehx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163nuucziaq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163epuackko.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163getsysjc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pclwvyrp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kklngaty.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xtxlxuvc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nafzfzgs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163acnwvoce.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163rxpepxrb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163kwxsueoo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163etfxtkad.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mimajqzp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163rwhvowia.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163tdygzqjq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163rpdidaiw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tqtogfhd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163nsrhhdjy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163zmmcplnf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163crfqbkhp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kfpbscdt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bfvcxnrj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jpoxwwgn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qcnyisvw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qmosyxhj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jdnwhclj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ecvqqqmo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163sktgklib.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ibkhtmmn.html

[C09] 递归
来源：http://www.aibaodan.cn/163xbuojghf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163wswhcdlr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hjipliua.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qgmoqfwd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dawgjnsh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nhvhfqzt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163epbmhqxf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xlgqinyv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vogadabw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163kxelijup.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163otdrhgcf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163zjmmcdsb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163aiklifhw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hlxsyeqi.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jvhpmegg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163pxyjsrba.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163oixrbbzq.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tozjyncp.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wpzxsxke.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vgjgdijl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163sojfjpju.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163vioomucr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163blphello.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pcjuovkt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qzcroacw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163laljgtmi.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163lbgdiqvk.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jkhkefmg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163mdsfcdrh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xfonugdf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fpuqddny.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fmmypstt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163toitwxpk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163hjdajhlj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fspfimaf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163twnkkqyn.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zithphjn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163bllwoytt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163iapnjyqc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163oychbovf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dsmlzpiq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dtkymiay.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cmdwhlrj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fyenxirm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rucgkybb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vsuewhyu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xsahmbzx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163afhlcatu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163abtaikvr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163iygrzvtv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163kxycqwag.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163frtlsjdc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163eetxgkbw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xgamhuwp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jssezvwb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163rnienxhz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163fpknkyea.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163deglbahi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lksrrshu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163qlvmdgwx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gqbnriod.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sllzyaqg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163xathvstj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vfwwkrsd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ciukvhoa.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163bcxkgwrj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jcxooyid.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163szpxjikb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tnwiedlz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nrfdwpjd.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gcxnxmtg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163fahlioeh.html

================================================================================
来源：http://www.xuanzx.com/163tjcploqr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jljvnlzg.html

================================================================================
来源：http://www.xuanzx.com/163wadblymu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kkzzzvnv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163foozzscj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163heywsoss.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163cpzdwizz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wlpouaik.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ddibyaqm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163okrkvhfw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163njmjknby.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qcymvsnx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163znidnfzg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jnljqncr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163spjxurus.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dnhoaunv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163iuepxxqp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163reylapnu.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163dkzxbvmz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163egzjfabw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163acuwhlfb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ctdhedqc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163utuxcqva.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163vmhorkyf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fpdpzvqi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163saghwftx.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163cyzcxhdc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163sipghcsi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163taoxwgle.html


<!-- 参考信息 -->