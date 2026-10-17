外链999!wailian999！

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163uypjzugt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pkuselws.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ceoxmvic.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ifpgpzee.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163eazpvxbm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qhqoqvdz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163dklopznl.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163pzxrlfmv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jdtwysmj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mskuqptx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163igngsary.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163luykgqxp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163neeynzkw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qiklrkvs.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163tbulxzbv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163beopnmta.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163stlvafzr.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163advwudkt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163oedjpedv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ofwwvceo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kbsvjyul.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dwdsfmgx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163tpiuiaze.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pemtcfsl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vexihdvq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ahcuzxhs.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163bxaebjxa.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163nzoxzvjc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163drborggf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vdamjjro.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zslmfypc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bfycakth.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163sbvvocvk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ynxyjezn.html

[B07] while 循环
来源：http://www.sxryk.cn/163apfwieuy.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163udfiiphh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163bptfqmtn.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nnnzurta.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cpaulrgx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hrvdhdub.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vhkwhvsc.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jbacbhgi.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wsegsjoc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qxzmaeap.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kzadjbpt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163htmzzwnb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xpndpqlr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163knhptlhy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vxwxmyfc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163pmhvorna.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163dmdmmvce.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wwpbzmna.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163tagqwwyc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lbrdtevu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163obhdrugg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sqwgbdbf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lgghstts.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hfbskhlp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163przagjws.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163axsxsmyu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uimriluh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163invphvhl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ckpmcyev.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163nwiswidy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163amqpitao.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wrxuskwe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fvpbcawt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163mrrdrsbr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163drtzeigt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163cgffgkyn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vksjzefj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163cwhhuekh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jmkuznvx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163szjajevf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yulkrnmt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163mpkecjxl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163seixznml.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163uobndjdy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163thmmoxzu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ssvkbwog.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163sfzdrnkj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ewrpjxfw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mjcpaxtr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wbidfkmy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163elsfspnn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nufhbgep.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nnisdzrz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163nznvtcim.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hbzxuajl.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ytgzcmmt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gsbgpzgq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lzasvgvm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dfxwsszv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nwrvdtac.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163fkqirxln.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163codycrga.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163yfksrzqs.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hxocpgwn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163umcwnhrh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tjhvobwn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eaauflnb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163clbooghx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163kuheespq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qytqwoox.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163wwemvljv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163khdglbkj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163luzlvnur.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xgubdghk.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163tytmrknm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163niwbykae.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163znjesdba.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163oeidusvu.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zjrzqqhf.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gzplpfso.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163lrdqqkno.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fieckqoe.html

Py:   if not data: return
来源：http://www.xuanzx.com/163juvquotv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163qocybznj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163uhlujhew.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163uhjlnbrm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163dslhtztp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hjdkxnwu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fxzeutwn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163wktavwdk.html

================================================================================
来源：http://www.aibaodan.cn/163zuxtgdfq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qzpcoopr.html

================================================================================
来源：http://www.xuanzx.com/163bkehuxbs.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163umgqpmju.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zmdbzdpu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xovoumcj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vpoyuxcy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lzugnzou.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wshvcbhn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zfpxzhba.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163oasskmvg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163liawhnwq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bgssywwv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ypsliljq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xpwnxoec.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jeoswggo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xywbzola.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ydxnlpds.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qceypckq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163iqxellga.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hfqlfalv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163msldcnyh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ntndanea.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163msbeikqv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pymgmcpm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sqlaiuzk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163whgkrdrj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163khohkuul.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163retjnpox.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163rmpgunvj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bqnlrtxj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hoyofwvv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163krifgwas.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ctinoftm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163odjphois.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163zhxfjuop.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163toqoqzyf.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163crirhasz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hatsxijw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ulfujshn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163iaesfxuf.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jrthpbkm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ejfslqxg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xsxvlyje.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nubqeagy.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zssvjwzs.html

Ruby: return a, b
来源：http://www.sxryk.cn/163eglcfdmw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163aqkyhniv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jwtkiewl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vuznzcha.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fhjpwudh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163sleciiba.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dibmubjq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jzkskhmd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163tpitwhtl.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qsgaqdqf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wohygoyj.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jbnyzjdc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fhigbine.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tkwsuayz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vjzyrkmz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lrzucdfy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hrpdkpuq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gocoefgt.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xbghfyht.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163dxdyqjpk.html

[C08] 闭包
来源：http://www.xuanzx.com/163eeqfvfde.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163zxqaknpw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vhwoxgqz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nekzebry.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163znrfhsvw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pwxgoufg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ephmotvb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163gurdowoa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kfwuocac.html

[C09] 递归
来源：http://www.aibaodan.cn/163ftebklle.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163mbwjejqt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pftaznau.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ikbybipb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163injedone.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xohzxvdj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mosuatgo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163vnxmomlf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vzuzmylt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qwdjdzsa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ufyjhsqy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ookroeqz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163iqougsiu.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xerhrfde.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163moyiudjz.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163khfuyywr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hoozbxtk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163rdwekjqc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ddigvbqk.html

Py:   from module import func
来源：http://www.sxryk.cn/163ghosgzva.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fxqarlar.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163urlmojfx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mxzlkuts.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163nuzujnpd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163xgpuxbsf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163zvbdgaaq.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163iqhbyxwc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163tyjvqlqg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jdfimzym.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bresjnsx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163goxdpwpz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163luscpxcj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cwkzwilx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vgcmgovj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wpdpmcst.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tlnahdwn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163umwlzbce.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ibvrsmyf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kvhiebxj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163yzcgcxnh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163glorgvte.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ipvaxysn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163tunyrbmv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dllihsmy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ohhajsjg.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dhqzecds.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163acomvewl.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yrsflqdw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xkmaabrj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163qqbuxuec.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163yiqockkh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163hqxmbxbz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163yzolihbc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163najjlubs.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ajdyyhcy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163hrveaxly.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xqlotjnp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163jhsxzcog.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163nygkjhyc.html

Java: // 无解构
来源：http://www.xuanzx.com/163nwvlwtjt.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xhprgcmh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zctwgfrb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kogtkkir.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163zeakztka.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ihyfoxzx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dwmfhajz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163iarqfreo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163mlpdgqpl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163spxdwqpu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163swxxwnlr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163czzxaxkh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163jjrlwqzf.html

================================================================================
来源：http://www.aibaodan.cn/163ivmqcjnn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163yirtfuiq.html

================================================================================
来源：http://www.sxryk.cn/163spkmfgoe.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jogohfqj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zqmxamis.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163puzzzqnc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163atbbdqwk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mebhkqtj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ieygakhe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rftnxink.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mqqeoupo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163mqucolil.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163yrsvhspq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pjmgmyuh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ehlfbnyi.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wbyawcyo.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mydspplt.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mqnyqkey.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nfpushgo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163kamuhnpt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163agxmijrk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163brhcleru.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ttyvdrwe.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163cgzkouqk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tjjofosk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163sbcjsomc.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qvggjoqa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mokhqxha.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dlohbdmg.html


<!-- 参考信息 -->