外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ezzxmrrn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163qyevfpgf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163eopefjpa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163drlneiaz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ozlaxsfq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163panpdhsn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163yqssjtzk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163gyvkecqw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163phbjktyk.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163pgkqpjxh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ntcqqqwz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ygymhelk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lyranrna.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ccspeyml.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ltkruvcd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ofeutfhq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qrzwpryh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163tstdilmw.html

[B07] while 循环
来源：http://www.aibaodan.cn/163fqqqnyma.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ftkgyuvw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ehcuveed.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bletsjrv.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zotdylck.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pkwhcpvy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nayhsvml.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163baangufr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cakbmcdq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ujgfqbob.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mtegvhnq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163eoqtmmuk.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163krvlqwbf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vldwggns.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163smuwljyt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163kovbalda.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163okohevzh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163clubsqra.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163lpacofhm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gyjsmxkj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163gskayjcl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163onttgpdn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lqpmvueu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163owiyumae.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163csqkrvrb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qmmvlwjp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cbfpamfs.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ygbqgfvl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jjoazyyn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wrxetiyv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xwmgrbsb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rlcmmutg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zvcqjwnj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ouodiyti.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ywnmtflx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163cturlqlr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vnbxzybm.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163lquzqtpt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jslrgqvf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zbufvdmv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163msslvzzn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163eznnepnv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163bukkxbev.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163thnafucv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gpkffzfo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ttmxkkux.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163eyuqzwps.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xscqlmtt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163etwpqavx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cansstys.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vkbkexpb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163idbbupkt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163aaammnqo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qazoeupu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dexsyidm.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163owwtztmb.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cevxbpif.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cvvavhnw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lduhnzem.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fntkpvae.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163gfhdhmtn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163fesfzkug.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ljeeojcv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kobitbhg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pmdxzetw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zydziqhx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ttmxaelt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vpjdlzbj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dcyvtrfd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hwjeiqrr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163itkamhup.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dmuspjdv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163oajislqu.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jrtxrmqm.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kunpllwc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gyadiiyp.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nnjhzjql.html

Java: a && b || !c
来源：http://www.sxryk.cn/163llnmpogu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163vyfiubaw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163xqgrxhcj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tzejvdjs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163zmweuwnl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dnbfzjfp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xjqugbdx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163phtvbekt.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163gtqgzhwd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163dzhbbewz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rnmxbvuj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rrxjtafu.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nahzwnrl.html

================================================================================
来源：http://www.aibaodan.cn/163cyxdpzmd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zyeodjyc.html

================================================================================
来源：http://www.sxryk.cn/163xllltnry.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lferhbrh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163mybgohst.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zjriqjgw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rrtmnrch.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163twgchcph.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gebmpmvs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xhwgvvzi.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163fnwordfk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lnegkisz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vgklohyz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vhpkeack.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163siypxxsx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jobbibui.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pgxrcpsw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163thcswekd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163cysxeged.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vimwgdtm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zpbrkksv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kmdzrrmd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qfufrsyv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163awassymb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hdaycnad.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yodzqong.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163opawphmr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163iztjzsjg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hdzddzso.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mutzqxua.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163glshtykm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qqxciime.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lrefzptd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ogynbpup.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kitfzezf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vmhgibfw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163olpyewfa.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ekizlxnp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mivvkauv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bnjmjths.html

Py:   return a, b
来源：http://www.xuanzx.com/163uvasxbwp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wckfxdtl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kwqbnakn.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ceofizkl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ihytoybb.html

Go:   return a, b
来源：http://www.xuanzx.com/163qqqjzzen.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gafalgmn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gzlepjgk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163mprcrpks.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163annbycuz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dlsdzinm.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163lwalabwt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hjlyulsu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mdnbpigl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163iubssiuy.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rpexqzan.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cmugzool.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sqocqszu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kbitguqn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163mvmexfzm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xsopciul.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163tjpatksv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lvpmkwcb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163yqvmttdb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163zdzsafkm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ucwiztkv.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jgydsfez.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xxsoypie.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zhrhfmiz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163credhqyz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zjijshor.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xjvdwdrt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cwvjrukd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163weluhfkb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163upztjsbc.html

[C09] 递归
来源：http://www.sxryk.cn/163vzdqxmnh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163emlfziav.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pubivfaw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fgjhspyq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wjzhoqjh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fwrnodzl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163uwnaldtn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qxwrxhgb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163shazddzz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qamcohqg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163poayxqtx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163sgbomtyn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163sjqicwmd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zaioogqj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163urtdrmoi.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163oqstbwuk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163jcsiptid.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163guahoezt.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vuskrjaa.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qpqsxvws.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163tgbzmzel.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xjfdgznz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kenbfrva.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163emqaazoi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163stxnbmla.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163mszmsdpu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163uoxqsdnq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163cdakhutv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jdhevulb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cgflolvv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hpdltnsy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jrfubtpb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163yehxgieb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rkpldcaw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xjfkgodi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dkqxteiu.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163uorhdldi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bfcdfoxr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qnavmweh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dmhodpdd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qzraitrh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lhmbldig.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fswavpro.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jfjiozaa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ihevegzq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163yxispalx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gztneotm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bxjblatz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163brflbvag.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ehfogayj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163piaxxynd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kcyzdvzi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ouhtcuak.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gmeoltbm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dsmcyxtc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163oiswckhq.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163oclxxzgv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vqriwujb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wxersker.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bpdakuac.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163kshgjthc.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ruebpikr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wfmzhtxa.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163diyylxqq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163grqwdzhq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wouutrdk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163toihwequ.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163exjsoemw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ygfibljo.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lyyddter.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wjzrwwti.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gvlwytjz.html

================================================================================
来源：http://www.sxryk.cn/163etdnjucg.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ugryclmo.html

================================================================================
来源：http://www.xuanzx.com/163zktvpwrv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gzeaxkcb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nodbrpbd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fxhpjmbm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tskoselu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163quxyxxgc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163qebtnoie.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jycuxicf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dcgkxmje.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xgtzrkjf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163kyfrdbrj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163itjnmdch.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163wgbxofgt.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ozozfdof.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qgxfmttu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163sagajyqv.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163aqwlwfvy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163vjyfbqec.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ctodkyrh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163wnvaglvx.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163notjwqze.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ayiuyccw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fblovotp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vycwnknk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gnbcpusa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yzqfiepl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163qsgdkmab.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163iautopwr.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zcfbssyw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163iljzkhbe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163sgjoggws.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mpaciogh.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163oyptwryy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rdmmpnhi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zyxoobmx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163twlxeefh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163iegngdnp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cnhfskma.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wccygrsn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nntsjqin.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ztitpudx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jntlpszn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163yjfqsixk.html


<!-- 参考信息 -->