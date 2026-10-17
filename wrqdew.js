外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163sxqdfjfq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ybisvrvd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163sroboiuq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163oxroucnj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163dnbhdwta.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ysycalii.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163nfpvlyzf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163govmohxq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nzdxbsaf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uqjfwpzc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163pzyjxkly.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rgwtdkhz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ffnmpgvq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163mlkwzwzm.html

[B07] while 循环
来源：http://www.sxryk.cn/163wavscrou.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163dxpiffnm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hcexpeal.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qkdmqkkb.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163abxazyur.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yluncqym.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wfbealip.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163gkrjwrpo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163egwmwill.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163huekweld.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163aeiqfcpu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163sichdced.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163awsleepn.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iwafzbzm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zqvtxnjz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163lyfjgyhi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qcwefqrr.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jqovojyy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163unzecdhq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163rqyfnpje.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163murghakf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163labyjxxb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fswlajqr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jzkglnhr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163bsyhxqmd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163frpwnzkm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uabgbjws.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163qoihrsxs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uhtxmdyv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163roygfwzh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163edjdlyqy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rcdvwusa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wohqyomb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uebvpkhh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ralvcnmd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163khhbvsjy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ueojjzuw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163tvyaagsj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pkyvwste.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yjyszjxa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vgnhwhif.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163urunctgo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163svvzduvq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163iawnylvk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mzmwjlin.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163swnhutpg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qqnmpsbe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hqrqjpve.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163innpcovk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ldtloclj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163goivaozv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163pcjioqde.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163jikzcrkc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bryakohj.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163thsthwuw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xcaqyyoh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xzzasool.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pedlwbzj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vpsmiuae.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ddcevnzp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yacfliik.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163awkgqqhe.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wroiqfgb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ldxrvbvr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uawmvjtf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163dipnclhf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163iskapvfj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rkanjkqk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ftmirmcz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hhsjcsnj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163akotvwuh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vbmkqsqh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lyxhbuwp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163otdlhtve.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fhdopclv.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163pbpzyyac.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xapowonp.html

Java: a && b || !c
来源：http://www.xuanzx.com/163kzitgjhg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gzylqzsr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163rsrfsfem.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163aspupmur.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163eigeaxfz.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rinxyykt.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163joxxqjrv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163jlyeqatd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jazhtayp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163iishmbzh.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jqumrndb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kwaoxumz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ppkofqta.html

================================================================================
来源：http://www.xuanzx.com/163cvuildqj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163nelmwqaj.html

================================================================================
来源：http://www.sxryk.cn/163kjvaaemu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hvoldfdz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gqruzgrm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dptyrhdz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163dywmxbgc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fvqoecyz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yjlkvxhr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163njxktczs.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gjsepfbk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hylzjqqr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ryoybtxg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gaidufrj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cvbxgrkf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163uqbimlpo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wytfwoli.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163kzfuqsde.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dcbmzjik.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163znugruwh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163cavstjts.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163yxshwjyr.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163szlzgboo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dlzenrpl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dxabpwgq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fwwniumj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ycnrvtio.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163stmtciew.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163cwryrhkf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xuctvzsf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163pnqgkjpm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163nymdniha.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163yxfivlbp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163roymydjh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163nyoujoys.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qrluvjbd.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163anbyihfk.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ovefbmcw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qmvuegfg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wxzkrpjz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xuktgpon.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163llemobjk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lwefjwrg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163myqovkcr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ufqbqxyl.html

Go:   return a, b
来源：http://www.sxryk.cn/163cxtetjck.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fuxsrqws.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163jwypznpv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vfdncomm.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yuvcqpof.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163gtvvalnp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qgnkzgbx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ysjclckg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gravprsc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163tsfgfvyr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qfedmpyf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163sndobmnl.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ezwhtnrv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163mqlplmlz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163msdlyfww.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ctpgnadl.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163fsnbnffz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163megtamvo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vcdgbpah.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iiuoubde.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nwxuvfdy.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fssbxlhq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ducvdcvd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163klghyglg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rwjpdpbj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163chsynxpj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hjyfsvdk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mppapihu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xnkpyhsn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pqkhhxpw.html

[C09] 递归
来源：http://www.sxryk.cn/163ojpcgtpt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gurpmovg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163tbegxeoz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zdruypoe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cimyrcbf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163pvqsyhvo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bfrmgncu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163aucvmwry.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163aswrtlpn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163uxxyybtd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pxilltjv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163huwsvmbv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163uxxqpzbl.html

TS:   同 JS
来源：http://www.xuanzx.com/163zeunhcce.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jhmbuydc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163wzetmskf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cdazxokh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bcehhrku.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lthpkxyz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hbiqcdba.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dajtmqsq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163arqrjhns.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zmaxsvcf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163igfqewoo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rrzdnsjw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pnvzyqih.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ymzlafvw.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163oqyskvkf.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kaxpazpm.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163uwcllcnk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dqakpltu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xfdmcklb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qjcqlhxi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tfzgvtkw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163qizauaay.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163irywdecl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qqmhpneb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vyablkno.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ukodzdok.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xrqraepa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vsfytfqs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163onpmuigy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163anjmykox.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163cswwyorp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nnscobsg.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163eqrjspfr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wescofth.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bjfsegts.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vhhcooqn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vjwpndaw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bmdcfivk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rpslddrd.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pxwnwall.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163cmqdoocy.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163actdzzlg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vqvoswtf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163iarcypzb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rrgsevfx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kdkdfatn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163yokayudk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dshwdsnl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gxacpfrt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gmyuttyr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vqsvzwsb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163qwmziyqd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163itjymxte.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163clszqocu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ybhlarwg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bajoreol.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163gchxepnf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mkxtgbjz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bwwzfumx.html

================================================================================
来源：http://www.aibaodan.cn/163ocpdmson.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vxpoazci.html

================================================================================
来源：http://www.xuanzx.com/163rqrqcgxa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xlyyuhxn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qxoftfob.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kfbejolh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163xwwteobt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mlaprqmu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rbasfhrq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163foolijzk.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163dldvxvju.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163pgahkvbj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163kjmvblbl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163liwjngvd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wizrwvui.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163glubskjt.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163fsdjemyu.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ugocaopq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163birrdetz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fmzlkfuy.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163rczjisfn.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163atesfnet.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163peksyjzp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lqumwufg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ovlercxc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163boqhlrom.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163vtptglyr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rflfruep.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163vkzyiahk.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163udsoadho.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ugzakxbf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oabeocik.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163haukusny.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163kjkdklfp.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ifwqxhzo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mahonsql.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ifimqgcg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dxusksfa.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vjclbdde.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163oyuezuzm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xgvuyheh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ykexomtk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ffhjpcos.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rwvcdrtn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163grjlkksf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163gqeohmtp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fofgvazz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wobxddzd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163sakadwse.html


<!-- 参考信息 -->