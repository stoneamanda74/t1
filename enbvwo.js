外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163suhmhukw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163urzvuvwa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xvnojyff.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163stvkojsr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ygwhjtng.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mvnkkwvr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qswhhvxp.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bhrrtrmi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qoddqpuu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163edwikdkl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163fqldemkd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163nlrcpgei.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ynxrryvi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rrvvfeea.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163iznhfuuk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163vochhokd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163gqlqmsve.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163faymuvrz.html

[B07] while 循环
来源：http://www.xuanzx.com/163dzvrztnq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zxfnmknn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163tvuyqjuo.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xtakzllj.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fpafwyaw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163meluqmyz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163pfytarob.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fsbgizqb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dpeakohn.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jszbpigh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163igkzlwem.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wuwwivcx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nfssilyo.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nlmugppb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xdgjgwxh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hjjoypur.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163wxfloeob.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163prpeoble.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bknlbset.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bzwkrnku.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163jaqledve.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dcwzyidt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lasiyeed.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163igalglrk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xcysallr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163yuvsjjyg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hwekukcx.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163oscqsbxr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163anqjwwki.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163dhqzukpg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163onalrrng.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163uuqlmcfe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163lgwycxed.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163judvqqxs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gisbousw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163llzpsgmd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163qgyshkdr.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163tvcuwjtl.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163irxbbnty.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163czpaqhfe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fwbakzob.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wflfacoc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kaqyppqi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163rlyhrjxn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163inqlzguz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ntfpynfi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fabepjbf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vicigxbj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yajhhbcq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163twqbddqs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nmpkupon.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zozirqhb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163fltpqmtb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ucyydymx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rsuvdhpd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163rotucpiw.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dsgehjuy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yvukmktj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gfdvyygr.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163uvxpvzil.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qckmlemt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163upzrmbow.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163okeafvzv.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kampwfox.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tfyaccsx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163jtwsltmr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163podbrfun.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163panyzqvv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fczuhtho.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ylxvbjlt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hgbvulpy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dhuxukzv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163boiamchj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dvopofnv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163avqslsjo.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mbumgvsc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kezhgnju.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xgyhgmmq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163pofzzzsg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163brbiwjne.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fshudoyi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163uycponlq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163twquqpbr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nlhkbykj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163pcffswdf.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rybgaqrx.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ajtjscch.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hcqdbzup.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vjfcqazs.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163oewbkpml.html

================================================================================
来源：http://www.xuanzx.com/163gxercbtt.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rozceeqf.html

================================================================================
来源：http://www.sxryk.cn/163lyazpsfa.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ryaovznb.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bksiqazx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163idvkhvom.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ojdsotou.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163muzjnffg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lgetauot.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163drvivyoe.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kpptehor.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163icxafyhz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163utwpdlxj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ukyszohp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vyhsuwtx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163bhybmrjx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mtmncqra.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ipnnxpbt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163perpgkvl.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wbsornxj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pulascrz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zabulqjp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163cmvcchxl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cznzphss.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fnyahkxp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sgmcocxd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163iudpctnj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mlckemlo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163abchlrci.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ofooabqr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mbzgrvzm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kzgtsvum.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dclrceug.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tfifatny.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163esdfxkya.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wlkgqifx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ghzbqupz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xxixgtpx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zhwohbcd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163okkualsz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163slubfwmh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163btffzmcl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163adxrqjid.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163trlfmhoy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vexpebwi.html

Go:   return a, b
来源：http://www.aibaodan.cn/163kfsggudx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qlfkozxh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163hrfyuzsp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163erkxytdu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pmkimsfw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wospmdsy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jqymdnsa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ffvclyud.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jnilxush.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lutcrhcc.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vxyfrnel.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bjbpltyh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163asqtexyr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zcnxkzev.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163malgcufd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163axpmijrd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163afqsqkgb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ikbftujr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163sicqhtzm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163cxxluskc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163cmosvwkw.html

[C08] 闭包
来源：http://www.xuanzx.com/163cxgtinxz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163scazdkbm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163kougwohy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ihkglhar.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pzgvitls.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fyugxfqs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hszfuvjb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163crplhzpj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lztkzrdj.html

[C09] 递归
来源：http://www.aibaodan.cn/163oshdnlnv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tcuzfkde.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rsprxhgj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lfaktlrf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xxmcpleq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163okxjslfu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163vewhuetu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ofagstyz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163susxewre.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ckcozgol.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163uudljnzl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ookdauzt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ccamxukv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wsgzkapb.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nipulpfs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fbexepkf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163czktjquo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163hsrvybul.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163agmcwcxq.html

Py:   from module import func
来源：http://www.sxryk.cn/163eymgpmtn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jrthjqhf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gshurduy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sfzqzmco.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vmytkrpy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163heoibhlp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163pkzycmxa.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163rcdiyytf.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163dacjjwps.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163unhcvykk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ktoishvb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163stqeytyr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fwvsdobs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163modwgdil.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vntpvbqf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hqrjjopc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163dsftznkm.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jnhgyzao.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163eilomkdm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wpmpywwg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163onivjsnk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163khibvlju.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163edjinazx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ktapksbs.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163idiahhbg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ivawmboh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163yiraiupk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jtyouleq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jgrnxkws.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163rcprwaos.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mqsyohll.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ojdrexet.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163eegueeoq.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163febbfjeu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xyrkojjk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cfazjkas.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163hkyetxrq.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163pkfnokvd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dfasbwdy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vwcwmopv.html

Java: // 无解构
来源：http://www.sxryk.cn/163dnlmmgpk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163asynzadr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ozyxatyq.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163udzhacvt.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xkgslfhb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163cogzedsl.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vcgsbufa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ldbnnxnn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163humxqzsp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163npqofbgg.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jbdopiya.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163yzfydtwb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163jvalzkjr.html

================================================================================
来源：http://www.aibaodan.cn/163smqjkyuf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zsetbkoo.html

================================================================================
来源：http://www.sxryk.cn/163jqdubwqd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ygqolgjy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163gqvszyze.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163yciapjdx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163bmofsikn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pqdiysrm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163yzzrjycs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163trspcipa.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pqwwnpmc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ivmwmnth.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hunckdiq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ijoitdkm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163toajgxdh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163myzyelzd.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qupbeuct.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nbmibnkp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bywzmdmj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nuqqzubr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nmwhfgyu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kzpjcihi.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xpltdmbq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163cvzwrsrt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163speinnlu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tvtnhxwr.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ztsxykpy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ihcspobw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wukunlfr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163grsphhla.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ummsdnqn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163tvybsjlv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kkrmskeq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zrimzhya.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163iycmrrkx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163gfqonkoc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kujqieqp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163dfbqiidy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163cufhhlmy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mxoksrrd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jezjdnns.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163sgiqaehv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ondfopaj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vyejqpsj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163kinksyhh.html


<!-- 参考信息 -->