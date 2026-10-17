外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163mqhupodm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cpglnwtv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iiuiwphz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ujekgwos.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ocwjtlqq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ddvmcmem.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163qxhjzqkx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163hpzfcnvc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163rwbwxlwz.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163righvjrr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163wrcdivbg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qlqtooiy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mbfrribb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163yqxvuage.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163cpgcqhgp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163xlitgjar.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vcvfxwrs.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tbnelzkh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tmsrlycu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163zczmkcjx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xvppmeqv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yanfjvbo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163narwotaw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163abobnocr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qbvoxamh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uievvohh.html

[B07] while 循环
来源：http://www.xuanzx.com/163bbzdyezt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wgopugni.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163uwqlegnc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tynhomvj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jxvifmpi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zpdjkntu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163dvpndnfh.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163daibvhon.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xlivblob.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jlciqvgi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163pmkmszhr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163btfkvvlk.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gtcorfsm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zbtrthfx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iehbmabm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163eohjbhgs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qfdrntkc.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163upidkhwd.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dehheryw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163srahgbhu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163lrwmzaxs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ptdpuqhv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ynwknpwt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nnwdwloi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zvrpmjtj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xrorlpzc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xvomshay.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163sdrntqzl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lfwkoqku.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fvaioasp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ujjyxafz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163grjbcyci.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tltrmatn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163oegsuamg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163thrhubgj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163lypnfufm.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zrmujqhh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pcnasinr.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kquqmpqn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ubqkzcqf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bydjwjhz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163dakudbac.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zjwhnezc.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163biuwkqnh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163kgnkjsxi.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ookdjdia.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lrbmlvud.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tgdlfviy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163byvxbche.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bkwepvam.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fwxusukv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zpdltsfh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163yfjpacec.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fxscshkv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mqhackaz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dgljmrws.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dvangcaq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lhuehvjt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ktpvagsl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kzsutygi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163hkiwessa.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tqvnhbza.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ucpprvtq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tyfrwfek.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xzrpbqak.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ymmmsnnl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dusnftyo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yfltxknb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163arqpjqho.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mlnksdel.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163redvceck.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ydrboggm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jaozgdqt.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163hfvwwlag.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163mrrfkfxd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bkjljzor.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xqyziyth.html

Java: a && b || !c
来源：http://www.sxryk.cn/163igstqeha.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bfpenyyq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fdupnnvz.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ldikohoe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xfbilhdd.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rqibuyix.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163iqliljka.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lfwupncs.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xufqvqlp.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jwulcobm.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163uqiowzmb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ldxrqmup.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163rrvvkuce.html

================================================================================
来源：http://www.sxryk.cn/163imfoqgep.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ktgiogay.html

================================================================================
来源：http://www.xuanzx.com/163qlznvxyp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163adprctyk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vpdhscie.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kgfrjbiz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163oyqvmiqz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iykayhwc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lyhfaptx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zgjlgkqn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vjrkzgqk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pbhwrmoi.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hojlbkcn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lojvwttp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163afxjipau.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xszsooqt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163svchfgar.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163gmgexeno.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ueerbvby.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hsrfeukj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zyfqpuyi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gcgjfmvy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163puvjmjer.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jxgzidte.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ecyuncll.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wxulnohh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163eegkmunq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kibdetdi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gatytaus.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zbgxqqfs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163linstyvh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163rujmskcb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163iwjriler.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lffsexob.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163hzizolyf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jefacmeh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xhizgxxi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gbtojbxy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163onznwolw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163wzkjwsyb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163pmbjgohj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kwuyxqzm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jklrwgxe.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163glvgkyea.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jtfbrlde.html

Go:   return a, b
来源：http://www.sxryk.cn/163ybzwgruv.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ththfnqm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163biuyxyha.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ptgrwmrz.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kxurolgo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dwcvpeug.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163umxvctsw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rgpvdmzn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fzelgqef.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kvraeexl.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xckjfrmg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ecrkspps.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jwuhdcbs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fhdjofaw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ybenoslg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163swjutqga.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163eczhtqzh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hqwlqkim.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163tvzwxepc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163fpynzmph.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163iogzajng.html

[C08] 闭包
来源：http://www.sxryk.cn/163azgfrqmu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163thejxfwd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zhjqrelq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xtoifjzf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gcndlrwi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mdpqgiwb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qwkbexgh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hliwgfbn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lehtvorh.html

[C09] 递归
来源：http://www.xuanzx.com/163dtqaqnww.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ayejbomi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163edbemyfx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163scendsin.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qyfgdpbw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163emhbguwy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163veldcefj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163gifqvmzz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163enzcfiem.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163kwnafgjl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jdxiztao.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ztgnfcef.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163eopruzgr.html

TS:   同 JS
来源：http://www.xuanzx.com/163sgmxllyp.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fpaztfee.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163udmbqath.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163alafmxuv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163oztcsysc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vqyayvmh.html

Py:   from module import func
来源：http://www.xuanzx.com/163kjqirrss.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163urcaekqm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rjttlosh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ulmpjmuf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xefdvcuv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163iazaisvz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ildulyek.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zxtpcmcy.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zpfosire.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dlkehrsx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163hacoocxg.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zshcgrhl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163orcsusma.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163nmcjfeyw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163dxhyctzn.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vezxyqzi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163sitjwwtu.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163hiuyhqsd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xqbgnmra.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tlckvxje.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163rxdpwtbn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xljovboc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oizfupku.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qlxsgdvy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lgzzupqi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vvppbzza.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bmhyhroz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cwqcewgz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gqnfdtiq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163robelvyn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ofbkhmdt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163lpqzoeug.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163twuoiuvv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163uehqiizb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nxeuxoaw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jnlprwic.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rtysfvtn.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xjwpxzmy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mcklckrr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kglptvrb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mxdyibek.html

Go:   // 无解构
来源：http://www.xuanzx.com/163iwrwqfxp.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163npwqlxcw.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163uvrjgjle.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xtiafywg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qeylvzkm.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ezulogdq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pygrzmsf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bikpfsqd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163upxkhmjp.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163lmpooqag.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gvmtshmp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163lhfdmoxz.html

================================================================================
来源：http://www.xuanzx.com/163vfhflnxc.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jrglstgq.html

================================================================================
来源：http://www.aibaodan.cn/163vyvklpsn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163srnahkut.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163finqyttv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jqgtknpj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fqhrynwi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rhzjuniv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jqfvenfp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bzefsswq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163jczasoeb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ldnatcnc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163pgnomdgi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163evipzcdq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163bxadpkyg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ysimpjre.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zpyhekjb.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163icypxoze.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163isexywyk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fekkjvke.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hndqyfvw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fomrrbyu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163leeydzyj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rqpnctns.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163elticbdo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pmmvdlzg.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yuwojenw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163iyxjkkha.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xcxbjxls.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fkcubxpd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163dsghbqhz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163wgljkzst.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nvrmjape.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xdusbaja.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rksgvmln.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163gkdllsrt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163yodnkhhr.html


<!-- 参考信息 -->