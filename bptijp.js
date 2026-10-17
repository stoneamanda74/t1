外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qyhnvosn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163enqmosjx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163caryyntq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163krowupwx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163pmuzkfyg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163dplpglss.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163fqgqujud.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ezcfmhmx.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163imzqjzsa.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163axcgiaki.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ydsppjtv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fsdrtqhx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ogcrmbne.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163sbxisfhm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xebmlxlm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wehexywq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163breuszat.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163grnwhhks.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qgymimkt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ofkeseux.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163leoiqvas.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tegqbojy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vlcropjd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ieeaosfh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163jkilgwzj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yvibfvgn.html

[B07] while 循环
来源：http://www.sxryk.cn/163tunqgoxg.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163bodgwnpb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163rtvzzgaa.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163okheiopk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rzgvmvrh.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tiouqmds.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ftuewsun.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163emxkpsid.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mvcjmsce.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xxynynrk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qwvriwny.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jhfaovcd.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nocfnnrc.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fpspaicg.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gozecdkg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jqvsoemu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163smbkgzey.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fssfebbn.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163sgqtixge.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163bkisrmvn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ynynfkmj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163taaynfuk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hqaokrnm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uhvwjlpw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bgtujydd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mssszcxf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lztcxbxw.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163eopjsgfx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vvdjjnez.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vukvkesa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163glzwmzhc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cytndbbj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163lyniprzv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ghsxppvt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ilikfgsi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163eshopanc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163tybmuido.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163pksrxqel.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163soouqqxn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xhftddor.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163utbyvpya.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163mxvfkmdv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163lcppwazh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bcmfblbx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pzyehmko.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kyafkwpy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163udalexcn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163nsduaolr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163aawqnafj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163acxujxpb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nxmrnesg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ukhzwwbj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163schtupbk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xmwvadco.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ayworvsu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163isvgnipq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163eoggijdd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mcatgeft.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qabeonoz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163sktlfmfg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163dfnvvccn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163zbeiftzh.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kdlecxpe.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bbgkldhx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jjrfopwp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zwlhxsha.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aabxewul.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wcptnwzf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nmnekuyw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ziupcgwr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rbtazqqe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163yjgnanfw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163teftixbe.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163mflmtllp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kuogsxty.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163tgrejbwc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pkdiqdcf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163pdyeuyjl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163qkibwqme.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ovwffquh.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163lnydbzhy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ivivskxt.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rbqvwifl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xxntweik.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163obfsaccd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ldeqkycb.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163inaibfyg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ivwhmsio.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nhesposf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163svrwpnxv.html

================================================================================
来源：http://www.sxryk.cn/163miogeloo.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yvsuqtjy.html

================================================================================
来源：http://www.sxryk.cn/163kujxgwjl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163btuiwihk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mccskbmx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yjscypst.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rfejpdhu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nwtxjpad.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lvimhdqx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pkrotpeo.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163yuftxwxh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hxmzsybk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163adewjgwb.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163gdkewloi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zjiwnfbc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163tpgktjhx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xdylbood.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163znxuhjas.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vmdtooqg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zrllkiqz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gscomrkx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xkrecnhg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163oerymqkt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163auzrqbwj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163brzzjndq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ossvhuao.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163tzlzypdb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bgauvzwv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ubecbgeb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163gcgxxqks.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mwsemtei.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163idmwnxal.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vkwitvuy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163poamxguv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163cnsnhrqw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163faqnjvgl.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rtpkfidn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dpmuwbgr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vjkoeary.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hlkhtnil.html

Py:   return a, b
来源：http://www.sxryk.cn/163ujchclhw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163naxrrruw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163iqdabtdy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vdvtpiqy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zjrvlata.html

Go:   return a, b
来源：http://www.xuanzx.com/163tupotmwp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163tiwxzdbk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ylcatvhy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163iqpafotg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pqahfuhk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163tcgssxjz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ljslctdi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jzndfjep.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163uowbount.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163yrsaxhbo.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xdunqosy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xsusmnlf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ipykleha.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163tvbsxjkm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163chpuqyzv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tafaykkd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tgyxfkfn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163cnpuncpq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163slvqaily.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ptzlguby.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163crobitux.html

[C08] 闭包
来源：http://www.aibaodan.cn/163iacvwzll.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mnxnhmfu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163sxmjotku.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fpaguogs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hmnhvoxr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163retbpcwn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zhpbxyvs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ntfqhmnt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163twcdztuv.html

[C09] 递归
来源：http://www.sxryk.cn/163eytsgnpd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vissnuwd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wvrfqlgc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163acubppbe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163shbsyzyk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163oimrhcea.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zhehsfsp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163igkfhmhb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163suupyscf.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dlygwiup.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vdmfebew.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jlemqwyg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163onzikprb.html

TS:   同 JS
来源：http://www.aibaodan.cn/163iflnuaou.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hunnrdod.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qgjxmyeh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163szecqcox.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tlocuyoz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jgvbffuy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ckcejhlh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163brgjuxvd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163mxklqvgn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ygsutxtt.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163dsxtqlwh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lwlazbka.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nmgnneei.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sedldpec.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163piusbyuy.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kcagxdlb.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fpklvenk.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pmmcwcss.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163afxodvxg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ftrfcqid.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ewrptuax.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163eygjmryo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gbrqmbuo.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qvncrmhz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163qgnnohtg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bbyrqeiu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163wldrkken.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lclpvghl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163utekfdkr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cbnyjkfl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vklvbfwa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lgusvigk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163fiqqptzp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gkssflzk.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163whlijdfm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ddxyrles.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dvljkspv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ndhiqoux.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163larpsiyn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ithmkkst.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163hxbhnzkh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qyahtqcv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rnvgvnxt.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163uluhljnd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163grklokkg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jnvmpcgf.html

Java: // 无解构
来源：http://www.xuanzx.com/163lbjnuamb.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fgwblxrn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163izxhzsbb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qcgbwsbe.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xgjbsfhm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uuxmahsx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163meabocrt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ahmjbvii.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wnlxnrln.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rspywjlk.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ipbheyuu.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163odfdrpug.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pltqxbrh.html

================================================================================
来源：http://www.aibaodan.cn/163ttkzkeox.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rqytijjb.html

================================================================================
来源：http://www.aibaodan.cn/163hhmgujfq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ldrercng.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163tzxduims.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jhywfzfz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rvdalhyf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ddfxmkba.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163yvdzroel.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jrmvurik.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kjtuwpnr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ttoguydt.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163vjakulhw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mjlsnoha.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163sozgajul.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163qtqmsjsk.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ocncudhe.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163dbatcwqd.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ketynczk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ssdphbou.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163uaykuiey.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hyybfzuu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163frfqjjav.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163wqlsvhns.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jdqbohwp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163aycyhgtf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ndvilina.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163enwejadw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xeyfuowb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163qulaavoh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vhjwitbp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hkggrvdm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kuulnsen.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163exkampcc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163yxeramja.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163msgagegz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vvdugsnz.html


<!-- 参考信息 -->