外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163sppizfgs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163aqknuvkg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qcfjfkaw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fbrizhhs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163dnuvmbbe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163jrbqbmlv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163sizfqmtk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163yigvwgrn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mqkbvysg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163pralbrlu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ucfrbqlj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163heiytmkn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hxkxccvs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163figuzyof.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163llidiwud.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163chlzckbp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wbtwpxjs.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vjtwezcw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163syoweplf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ocmsncma.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vvtdcpvv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kzwjksvq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ntkdnseq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gjbcuadu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163zbpiozrb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tkwjdrzx.html

[B07] while 循环
来源：http://www.xuanzx.com/163hrxwkrkz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ydsumkvm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163uodlwdiy.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tpuzxono.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zbawxres.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rvtctvur.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163psltwlmz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163drbzlizg.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ivovsort.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163tjoahdsa.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163fpeshdqh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fsxxoxdc.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163owmlgmya.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wrevddrv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iygyduse.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wwhamsnc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jpqnnvio.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gouakdhf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dhzlmzjx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nibpwpfm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163thflxwtx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wufmaolo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ljbpmyrr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fnflksvb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163zyqlavtu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163izhcdper.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163agynbeud.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ohurvlcg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163viiqfcgy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ezdoivye.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163nyoipczs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163wsadkkvb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ixmkrlke.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163upgmsfny.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mkbhanzg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163djsbouvu.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gxeluhfe.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qmeglxvh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dztecdgk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163biaocvng.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163snblpaxw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163hgxdtqrf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163jdtwmjgu.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163mcrxzaib.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163keoahhbp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163vjgnpnev.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aqogkyqv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163huduydji.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cahyvmuv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tnhetkyd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gpkgjjpi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163oaqllufq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nyprfpca.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ocmtxvtq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tpeitfni.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xbiisult.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163onqutacx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oadibmha.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ymkmmiax.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163uakdlrss.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ydysdmwt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zblhuujd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163nyoobdep.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163mswjuxxu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ithoaenc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ojmbjnmn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zqrunfwn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fjhcjpir.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qwdlhcbg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hdbralwi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163uzymdvjk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ijlwrbev.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163nnyvthed.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ksagwuxr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rkhytinl.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xvqtzrcq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qtjhwvag.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163peeqbpoo.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163xqgqtnka.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163moiejnsa.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gtwtgdfe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gqwjnrcz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163znkfckbs.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163tlnhosof.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vzhzbpca.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163haqbcwvr.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kyczwagx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gkfybqgp.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ypujzjcd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ckuhpbch.html

================================================================================
来源：http://www.xuanzx.com/163prfwndhi.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gdhiqqwu.html

================================================================================
来源：http://www.aibaodan.cn/163xenmkyip.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fgolhtcd.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163txosxgan.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yrakhvrb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rtgkimmm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lalkbvef.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uzsyhchk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qbsamimy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163epukmywe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jtljayyx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jvdwbosb.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ftxltncv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tlygabmu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163eonfccel.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ikmzjdat.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kmzgoidt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163nbtoxqxi.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mwiydxhx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163acvqhisv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uhpslbdr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wkzyhctp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163uedsybcf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sipemvob.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kurfqgkp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hsgkbqin.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163aqpxckfe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bsvgtaez.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ylsgkghi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zsfncosk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163pxflphqe.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163yikouwfl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163afftukha.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ixsfqucy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ufbmsluj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163frzjsluq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163isktcdnb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gtctznam.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163jptjszqx.html

Py:   return a, b
来源：http://www.xuanzx.com/163cmjystnt.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163cpylinfl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163akurbipc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kirapaaq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163stmygiug.html

Go:   return a, b
来源：http://www.sxryk.cn/163gxnjxlje.html

Ruby: return a, b
来源：http://www.xuanzx.com/163kcifllps.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163olnhxhxz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163eytnijzb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rzvxrkpl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cehtblez.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163skcfygfi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ojgvhadh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vlbbzvhp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163qwrmgqnm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163scxdhkeh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gysfuxic.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163prkqbhsf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dnfutbkb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kxdoixax.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163nekbkcob.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pdddmhtx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ubqrzvor.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163laprnngn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wzsoypbe.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wjgtwmkr.html

[C08] 闭包
来源：http://www.sxryk.cn/163ufwppmsl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qhjusldu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163choevsyk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wxeizgpo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kwrevxjo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163njqllfhh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163xuqebphi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lamhbzqb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jgoqzwxp.html

[C09] 递归
来源：http://www.aibaodan.cn/163zhksqfzg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163reevzlip.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163vvqppvkm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vrlsqumj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fwrpsbxw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163oxowgtaj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163yrbpnpjr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163kbiccyqz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nheckzbo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ixyuntgg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163drcqgkoa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163aowgzcdf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163waepwwyw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163btpmtmfr.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hvjzzgst.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tjujfsvt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163onmhrawt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zemiailx.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lclsiemy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163sxsfskxo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bqwdkulr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wjxfblcg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ifyfwvzt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lkzkymzz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pzqhzwqy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163kisypbti.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ebvgurme.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wnveexyf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lqhujclc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tpmcwoyf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xogxsgzj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kvsjxwrk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wtttharg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163dzyldfrv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zxsiandj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vnbsiysf.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pcjdtpcj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mpkjudvi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163alywhrlq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163oxpwdzaw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xdrulftx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bzfwfoff.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dpusfslo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bemxjzix.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xesveyqn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163tsoyitmr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dzdszzdx.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163uqjvumas.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yyeatolk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ylldsybz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163irqrnlpc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rfurjsmz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163owlnszjq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163scqggjap.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163otmnyzla.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163anxpkslg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tpymdfgd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163naekldzc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uxkqdmxf.html

Java: // 无解构
来源：http://www.sxryk.cn/163pxrirbni.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qsvfvfel.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vctavqyl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163adbtnpiv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ixshzutj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163susbjdzv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xmrklpyl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163kphhivsi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lqgbcwvt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163oiormbhy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ppokbfoe.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163bcxietdt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ilqpcaje.html

================================================================================
来源：http://www.aibaodan.cn/163ekshewxh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163aytshice.html

================================================================================
来源：http://www.sxryk.cn/163prujwugk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ouddrjtt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sifcytjf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ajltmnyg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163pomlffbu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bkmslnsq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163mbvbalvt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vmgtlpsq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163xyqhwhfw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163diomflqe.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ivffcybu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163uobrqiil.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163uemzmhwm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mtqehcvh.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lzvpfups.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vhssnoab.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163tkzzxhfy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ncxzrhlf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163iszyufag.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dwamgqxy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163oeafbzwg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tuucmbka.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ghzxciib.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163iwwbkuhj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163aiesrphv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ophelyri.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nqreoyyc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nnnosivz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vcbxfwfi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rqmqghgs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lsngyixz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163dlfclfda.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ofxwbucs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163youplfqw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vdqrousn.html


<!-- 参考信息 -->