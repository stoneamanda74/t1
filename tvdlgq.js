外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163zwrjltoh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nrsddkdx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jckyfgvy.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163dsgmpiwy.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vgiyukfl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kheqmzzp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nhcyvmga.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ziduvgjs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163gprxkuob.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163dcdmbjlt.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163srgifokx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163iqyygvri.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163tvsjduhq.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fgjjfkjt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163mxsgdomf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163alqndxzt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163eswldzfb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ornwfeqq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163tbqjytov.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163pfjqmqaf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163dxpaides.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163obxlkfgn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163krdosouf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163mtrykzle.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xmcpjbzj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kixlpitd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ewwqjdxs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163dtwcwsxj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pmqeivdt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ffndafre.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nbpftbiw.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wdojprik.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ldwywkbw.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rzureine.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yuvvyuqo.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hnecpgbl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163mrfnfjie.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qwuatpqh.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163taosgegi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zmjxnprb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163amuzcqgd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163sucxshfk.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163strytisa.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hnewxvnl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ugaclfnb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nxcxmfab.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163lpdmahzn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aukscmmn.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xufzabpy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ddkjtsrk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kipomsno.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163empwwotk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eiyphvkr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kykntgbb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163glewkytf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hwqmwrgx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jilqrtsa.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163korwmqud.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jyrmkwzp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163llvnyzlm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pddjpcmf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sphwwxnf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163cmsjbyzt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163khyjaagl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163hmqrusfz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163upvatcnc.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163sinuujju.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163dyleknyk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163aprvnvjz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qbgsretm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163awkfgoco.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xocixmpj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dizugcxe.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163efuundta.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oultdyem.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163rvtxvxns.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nbkdfopu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163keznwktf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oamzeyxc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yxflcexz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gzkciyeo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xgtgoazy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gfrnzrgi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163wiogwlmo.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163azmduafh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163utldcehv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ezeitspk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163juqocito.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163htwzuxok.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zlhdlbyg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163dbqauxcv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gqxtyrvf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163emnvopqg.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163claqwqek.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ygbksdax.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163knhyewqs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rcznkxwk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wkovkzjf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163bdvsaroy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163euihyoeb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gktojgil.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163krduuxik.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163owgratkf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163eeafobtb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163rakovlfk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lugdjuth.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163szmlzveh.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xygvqscd.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163stwfzvbf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163durparqp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163vkwvduwb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163rzjiyahu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163zaprjpiq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ghyrsqdh.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163uhpcxbjq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pwotcsvn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ionjezkn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163eljtyflp.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wesbjcfl.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163exjdnbti.html

================================================================================
来源：http://www.xuanzx.com/163brjcqxmr.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yxxuqxat.html

================================================================================
来源：http://www.aibaodan.cn/163onhjamov.html

[C01] 定义函数
来源：http://www.sxryk.cn/163panewnpl.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163yvfbsbvz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qlnijaex.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163zqtiukxs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rigscehc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wjoluffi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rcxlyyux.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ezsjoxfz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rijwiuec.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163boczrzms.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hmvywwel.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xcffvcub.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ypkdyddr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vyptcxsw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163upmbhmew.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gazczbcy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163jqueippu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163yjyugpmd.html

[C03] 可变参数
来源：http://www.sxryk.cn/163lqlndpmh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163harfkohl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lcbgyitv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nhycpzzr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163psaeneax.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gdlrtchb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bpzabgfh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pxbqnjlv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163luyjvqpv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vgnaegnr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fxifgzfe.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163yueuhlss.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cmcqubfb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163xirskqku.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wwkhsxly.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163mrqaprlc.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ltfuzqxv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jujnbwtb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163olmhruqz.html

Py:   return a, b
来源：http://www.sxryk.cn/163nxhvxutf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gkckmjrk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ahmpzyqc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163dnyzdont.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163hbsrczzf.html

Go:   return a, b
来源：http://www.aibaodan.cn/163njzwkgxp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jcbcvcxt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163mgyhashv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ttyxtasn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mhkfjsdj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163oylemety.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ylzdmpbt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rblhujyt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fftteqpv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163sxovxipz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163gqjzhrqf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hsuiybcr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163toexfuhm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vhtxptgn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xuzagkhp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163redionkf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hpwodjfb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ujfdxiqz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dmfbcfwo.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jpwqqjkf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163gsofuvpz.html

[C08] 闭包
来源：http://www.sxryk.cn/163rzpcewtq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163forpscha.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zbthtjcu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wwfsrkgv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163shitwhvv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163tvtybjwu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163btykoaxm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jxnnauab.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uyadgjwh.html

[C09] 递归
来源：http://www.sxryk.cn/163bbuddiqp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163rfmqdebt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163podzqhme.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zizsnzsx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bxezvmjt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163qggtixwm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wocminwr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163qcuopquj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qwmmugwq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wdiqhlvx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ncofzhvn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163otpwctzi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163knjrixyp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163stgnypyf.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163suwkeoew.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163pzigslew.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163kdthgcla.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lhpfodlr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ummzzjdy.html

Py:   from module import func
来源：http://www.sxryk.cn/163dixmtyfj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lgmwsybd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xakzeazx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163vdtfcrer.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163smylghal.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dztlxbcp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ygpygjee.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163aqytldrr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163mhnkfdxp.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163skegxhfu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163oprijkta.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ozzfcasb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sfbnxklk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pnvhjaxp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jmcjmfbr.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163tdbxgoha.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yxqhxbdt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qmhbzbvf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163aiwebnke.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jbavlzww.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163sfsiyulz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kxmqhsra.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yduptcms.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ytiarsxu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163famufksx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vzcerpso.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163glenoifq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rxzrufev.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hikpqlyw.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yedtdmad.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163muwnxeur.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163flhdhnmt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nypyuxqw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163bxbhwfys.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xhjhmukt.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163pefbdaeg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163htooeuug.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163haysxmls.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qmcalsvg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lscwbmlm.html

Java: // 无解构
来源：http://www.sxryk.cn/163lxrrhemn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163iittwkmr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163eomwigot.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163mpoomkoh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lqfiehxp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ommfagne.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kmijycbb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163egjqvgrk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dxsgteei.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163uknhubwn.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163desfrkec.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163lcsoeasy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163phxagvle.html

================================================================================
来源：http://www.xuanzx.com/163toctbbkz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rrhcswfu.html

================================================================================
来源：http://www.aibaodan.cn/163pqvqzokq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163qwundoqn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ffmkikvi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xizxkkix.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163milegbfu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163wupjsrwo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jwsmtlwx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xhtbossn.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163yoqmvqua.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ekmzdbem.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jbqkutdh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163payawqax.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163biuzlynp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wxchgoyl.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163buferaho.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lrngiovt.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163xemvdvlk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xbgyvalk.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kowkaerr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kdfaeipw.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163fuqqbhtc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lhacgswt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163bhzrzzjo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163lbhlttpj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163oxmmzyzx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163rkkepulh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163vqadezyf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163aznzagjo.html

[D04] 删除元素
来源：http://www.sxryk.cn/163apypgbpq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163sfdoaxmq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rpaiczsl.html


<!-- 参考信息 -->