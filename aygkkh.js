外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163lhsqocnz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cuodfutd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mdcfrkhr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163stkujdha.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bveofugw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163muqrwdde.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163itrnayzy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163zkpdznil.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163nvfhslsa.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163yyoekpyq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jclxsacw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gstrsmsd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ucmuyalv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ytauqyni.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163kznfukzd.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163gfbzunse.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163himiqern.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wynsdbfy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163owzbtgcs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tdoptqcl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ocrmgtdt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163efbasvgh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163udojapmt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163psnjihbn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163htowmyra.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dcsrecmf.html

[B07] while 循环
来源：http://www.xuanzx.com/163iztbqtps.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163czvszxkj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vzoujadd.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mbbwokcg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aiwyevdz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zhgwjpul.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uovjrhln.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fhixgvpe.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zgqqaacw.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163mifiaaqi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qvyejonm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jzuxgcyp.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ocjwogdz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zaacihzp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ldsksutb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163mlvcjcdg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fiuyrlzh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163utemadzz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dadrldoo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ktrelpmn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163warkwdbs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pttyvscr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163weaeysdf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tccqhahp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163uhytaatg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gdhrcmaz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163erbcxfcs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qejxcbtl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163wpxlgyzc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fotmaxbr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fdmaudti.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163viiobasv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gtavkbru.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163cfjmtkgf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163aaumojat.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dhfjcrnx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vuyynvav.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163tqczpcnb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ylsegrvn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163narrajka.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kpczjtvj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ereaedyc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xvpqltfr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163onsnwuhn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lawxzdru.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gwajlugx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163glooolxj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163njvpxkkd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fmlqjstb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bmrddmku.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yiqbmsgg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lmectxoc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zvuknqlc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hfqlyzro.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jqcuyprb.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163scwzcdur.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163kpvtbuax.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163svygwtlk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163uwwbfjgo.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ygxnqxdk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ppznizbs.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163alnrqmxh.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ehxnreiy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163pyjphwrc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zpcfuqaq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163vijxplqt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nyrbdlnz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pvbqheiy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163umojhims.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xlwgisyc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163yayvkkty.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163eikuhhgr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163hlftqohz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163cijigwcy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ptlvxjko.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wikuackh.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163btveedzk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dmlvryhv.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163fsvvwdrw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jujjzhcn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163oxnweipx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qmvjplzy.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lpmdfspn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xovrmzpd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vtfbvxju.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163feeszvyd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163iyubdbti.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163waxthgcp.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163mexbgpmo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wcrznuvj.html

================================================================================
来源：http://www.xuanzx.com/163qfkoacgl.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rxgoiwpr.html

================================================================================
来源：http://www.sxryk.cn/163mckwqvsi.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wwdwneqb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pieehjgp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ifarcyct.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163aqwxxogi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pgwpbipo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163waghfpfg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163tjuidrjf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dcxddukk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ifenatkl.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jonsnssi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cxnbmsqd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163iglgrvuy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163petxdsnb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163skxwruzk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163pptyodnr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ckubeolz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163kmpmporm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ynuqbnwi.html

[C03] 可变参数
来源：http://www.sxryk.cn/163zeweudla.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gaawesme.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163tmybpjyu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163irugunfe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vmpmvsja.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163yvlkexyg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163tahksrtt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163isnnygbt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hzvazjjh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ganmacnz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dcmklkuk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ytqktqvu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163abuqqmrb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bhzqrjtu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jaeahrae.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zcpxkqdk.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163edxsolmf.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tcnsphkg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163elcueatk.html

Py:   return a, b
来源：http://www.xuanzx.com/163xqvwihdd.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163bzcccfku.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163eabtxkzv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163zfvdwoif.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163arjaujxt.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lqouzfuq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bmwpkfgp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163smwhrdyb.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vflcnpwl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rezeyofd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163qpcyivzz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163zuuqhkya.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163cjjiwhsb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163njroqkfj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pnknsvpw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tyzcywjd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wetefwvl.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163dtykptse.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ucxmwyfq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163gxdycbgt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163tlzbsxfi.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163uqeoxbrb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vtttiujz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163nnjxdamf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163neowppbc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163lzjktbrb.html

[C08] 闭包
来源：http://www.sxryk.cn/163yyluivhc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163jkekeifl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163terowmeb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nwpplnug.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bdoaxmxn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pvkxssck.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xmumdzoi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ygawzjtq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aucxrcky.html

[C09] 递归
来源：http://www.aibaodan.cn/163czeiiqzf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bafwwlte.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ggxtdisr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163aqkmhcde.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rbxzwnok.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fkswlwpc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uqiovefm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gjvqbpmn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ogloponp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ximemkdc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lsyxpbfu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163wbbqpmub.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163yuyboodj.html

TS:   同 JS
来源：http://www.sxryk.cn/163lmpkboce.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kgzmgdxg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ifwxcbic.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163clmccnwp.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163panytsnd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163glqhteoo.html

Py:   from module import func
来源：http://www.sxryk.cn/163qcfrokun.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163evhdbhbp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qecxxmtv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163bhfvvgmm.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ushqysqg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163bkoczzwd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163tatiztqy.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163exooygln.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163syebpdkt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kdeddzwa.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yzkfbowf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kpltpbgd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163erhdftfj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163aeoozbgz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163skazuxqf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dpkypfas.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ccbjxypf.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163moahnhsd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wmwcamwh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lehjvlnr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163dibrajhv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yesvjwbf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kewsyqsa.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ipuutsce.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163aozyvgez.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fhsqdefx.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xyyarjzr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ekvnkpfs.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uetcgrkj.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ehabycur.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vnqhzdos.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wncwxqzj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ymyyhfhq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163tiatfvqn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ndhooucc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163spayaoec.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163brpkgmnh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jecnbcoo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ggyspfjb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ksmbzzet.html

Java: // 无解构
来源：http://www.xuanzx.com/163osaoevrb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163kkvrdawb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163jmscxoeo.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163nowpvizq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ospdvjix.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vbbbzokp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163iszfhgic.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163gyfrqnhq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163lxgotxpo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163twmriigr.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cdghoemx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jevooqzw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qbmljlsm.html

================================================================================
来源：http://www.aibaodan.cn/163wixbyavd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163dsycnghn.html

================================================================================
来源：http://www.aibaodan.cn/163eocvgwpz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fleedmms.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mgpcbjnx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xintwsam.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jmyaopwu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mklkbxbo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163yhwkayra.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bqymmatg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xzkhqeck.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gvebpudo.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163cibnfulb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ugvjcclh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163puxpskeh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xmalkhay.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ylbadtbk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163bvroupiu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163iqibfrtl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163tryopsnn.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nxgwtiga.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163sijaejdt.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163apfngqwk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ahtxxddg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xvmuzyyi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163fuvnlnfy.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rsstwqup.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fwktzivt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dvdoyznp.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163sdsglroi.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tdtvdrqd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163cvhifndj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fjqsbgdd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fbtrouip.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ljmdzpjd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ywsyzdbs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163wgdrbwnd.html


<!-- 参考信息 -->