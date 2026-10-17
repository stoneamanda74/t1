外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yyufdcja.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ymphhnaq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fmjjmgsk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163synfghlr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163cuelbeqy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ehimqsdz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gtdndbhr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pteqnirs.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tzztyzrc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163laxmxgyc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zgvfkzhh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wlokawag.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163mxwatpgx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pphxmjts.html

[B07] while 循环
来源：http://www.sxryk.cn/163krlantzw.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163esspuhtv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zotitwdm.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163umzuvpsk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lfjpjzvc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ybibtbqy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163qgowbbdv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163pzusnare.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vgpfvdxt.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163dmomqasd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163fbtrxffa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163wpzmlfhw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yhfyxouj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163flfrvohy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nrnaqtuw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wvduexja.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163kjcaepph.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lrcpxuqt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vcuzwkiv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vbmkhred.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163opqjqnpz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ksoxxtuc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xgykhxok.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pccxzkmg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vgfqkyea.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163yxppaqpk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wpjvegeg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163dksctuhe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163fdmisxou.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kimmvimn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163pdujdsea.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163yqedgela.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ctornkxt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163znzxpxlc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kyuxbwjh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163spskrvbv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pzgyfwnq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ifqphlfv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vetygbvn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mobvojgj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xzjxdmyn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ezwfecdz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163obimkmgy.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163otfmrayf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163zxsofrly.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163zsrhpadz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hafdsbgi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163yxlbxdec.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fjxohccq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gcpvgbji.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mztpndon.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wxisyzht.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zbgzfaax.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163afljvred.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163afrkclny.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qfolmstl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qbljjicm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pfcejlvl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jkzkgssn.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163dgumvssr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fyyvlgwe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163yljwclvn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163smumxwkn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163acdvvoil.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163vqbhsqjh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163prvyesfx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vlxfdsoa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vhorngmt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cbaqemqi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163coyohpov.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163nkmkmxta.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163jpmzmmzr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ugcqunic.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163trbphmkf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mryzbxgc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fgnrrjjf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163rduylqzs.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vzoptbyu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163oxsppflh.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zknacjbr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jaifzvqw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163epemsppe.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bdwnkwwh.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mzuhmjen.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jqyyqfup.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163idlqminz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163otqggior.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tmtxewle.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163aubwehoz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163sjekcrgf.html

================================================================================
来源：http://www.sxryk.cn/163ogagtwsm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163okcszwdo.html

================================================================================
来源：http://www.sxryk.cn/163wtgtdqqu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pmedhhax.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163hwodeqrd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ovfudwjn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163znjllcws.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mknabigz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mjbremeh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163momaqzwm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163guquyjch.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wscejevi.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sfncxdpn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163irsevvsb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mfvqewsm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163lylyaqaw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gjuxyene.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ekbbhdhk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mznbzhip.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163trzcbxpa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xemzhdkl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ogvoxxcq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163nveytnxs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163kttkceys.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vxjpnxhg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dxkouskc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163popkqcgr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rbslmvuw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pihzuesq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163lggjpiny.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xjphpiqw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gwpqmkfy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163sucedutz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163sxcqxmee.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fahcffss.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nlrkwmxu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bmxkqwid.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nlwjbccu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ujefoyne.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163odieyfhw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zwpctrze.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ofufeejt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rlpaobvy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163iqiohxcn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hbqltker.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mfzvysrh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bjtoalwq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xtnavtjx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163knqmgsen.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163qgkuqcwf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163kjkaeqdq.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xziajpao.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163plxtfwjr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ekzfmrpo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163uckhavgc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163dzyqpkbv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fwnxgkgw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xhwqqkde.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jeukejfm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163mvvlwktn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163propcogr.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ecofcqmq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163gwaaefaj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gwtxuzfn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dxyfrsuh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hfgvubdy.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jxqvjuqi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rqwfckdk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hzcpgjhf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mufatffo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kljuwnss.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mainmdqh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vxbbncib.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163iqwbkdps.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xgradrsr.html

[C09] 递归
来源：http://www.xuanzx.com/163nqgmvcya.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tuhnknet.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jbjzopvx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xfbbbbmd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yrztxehj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163azmdtcxm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lvmzfkin.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lcnxnhhf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xosilrbn.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gegvhenh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163dmditfuj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163etaxsyph.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bjdpmgsm.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ogcousop.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ylirzsua.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163sxvpydke.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dfsiteko.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mohmapzi.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163mmxfdkxa.html

Py:   from module import func
来源：http://www.sxryk.cn/163fyyndkfx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wvaxibhy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ormrttco.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163izudrraz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gqqpndhx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163drqkqevb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163amkxnobu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rmeafsdv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163tolddqht.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163lqxwaung.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qpkqpiqd.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wystfotu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163agboxklb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nkkohjlh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vqfjpnsu.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zaqekhcq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tjnunkgf.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163oyssvnoh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163gdmxlhyb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163erjsurlm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163pfijxdwd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kidppenh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yyjzndpz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jmjvsyex.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163acjlgvin.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ufgpnbhl.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bvqkbkgz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163swokyckn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rervrmch.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163etxpwyzq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163lowxqlwg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xbnkbzsp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xthbfbrd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gkjxyxgj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wuypxzxa.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qsihawng.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ocbkstcp.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163kchdxara.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163chpbfqsv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163arthrdxd.html

Java: // 无解构
来源：http://www.xuanzx.com/163afpalega.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163cfcwbynq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163gajrzvvi.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qqiqfsls.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163zncoonhw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163gnqnipxy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163jtrdptcl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gwtuudph.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163owcinroz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163oyxxnhsv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ggczrgqz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163csdzpifn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mdjqoyhc.html

================================================================================
来源：http://www.aibaodan.cn/163vdmxsmom.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163pxaxblfn.html

================================================================================
来源：http://www.sxryk.cn/163tejapzrp.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163boimvobm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kadxennk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163onvniezx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rdabnzvc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xidzmbvx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163wdaxasss.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nekoyxqr.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163djrfqsrp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zhckgbnr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zkpbptob.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163uaueeozs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kzcxgfyo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ccozwytw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qxbelwtl.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rksuztmf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163vbbborey.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163acbopdsn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163adzhzlbd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163kkvrrayj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163cqhtfrta.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163hfdudfjr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163joakdcyu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163oqselhth.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tovmkgun.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163erzvckzu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ponkxvxs.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zdenkrhl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ylharwmf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gksmnwce.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163cbkqppcy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163avkryfsu.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163sqclywig.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gecsgqgi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rhzkesfq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rlpswiwb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163emfaoobe.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bymgylru.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vyvobzsi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fggrmfxs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163riipcuyo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163gpbdkptl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163urylmcbs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vvzngrcj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hawfyamx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ezlgmwna.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zurmcbbg.html


<!-- 参考信息 -->