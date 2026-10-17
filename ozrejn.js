外链999!wailian999！

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163zwvujwhc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163enytkjuo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ixocnlzq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163tjxlbhrl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163danzihtp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163evphtoyh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163fiqmzgjg.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163uylhfruz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163uxihcfnr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cwvkayvh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jplydevf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pjqttbwo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163eqmbvrks.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zmeqgnvg.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163dsfdgdjr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163bxtyflwi.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163elpecnld.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163qlvesmhp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163pksljudl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ldhrxfea.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ycmaxang.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jblpwuhd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163xdejxfll.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qsvvuaxr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163yvhicaqk.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zvfbbhhp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lojdiqip.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pxhvrznc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163aljkzjcl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163npweyazz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163oaiqbxhv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163lsfdiayv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ljzpgbqd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bhhdbvzp.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bhzgcqsg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zdzfafev.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rahleigl.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gymbozue.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nilahbuc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163znqxrenr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163glhfvwsb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163newomdnm.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163plwhyhyk.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163zhzjzagu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vgwarcuk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ngotvnxh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dzdmaupo.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bhbyahwa.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tlihfyvl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ycvwsiof.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163onucckak.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bfsggufy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vezwmkmb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vocqomqh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ozoskwma.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tdfebovj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kjsgxosh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cyytcplo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rjxngxwd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163sbcugkwx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163iankoxrh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163fevnfblw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wpiyhrdq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wdektvbp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xhgjxzzd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163fyilxmum.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163mndbdjbs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163osiheose.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ucbqvdkh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163pmtljktv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fjhvzzol.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dnmnubgv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mjhthary.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lbcvpitw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gbgzxcua.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163osxshycl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163chiacnic.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ezfcpagx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163oifypypq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bzhfpdbd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163houkomhm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wbneqyub.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qutugcge.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ueufnyck.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yvypwlzx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163slldbcpk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ejiemvng.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163fiunffkd.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xliufwhh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ozbpjmzn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163boieligx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cwdnwlqg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oapudrlx.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163isdjpzxy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163uylzqwba.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ddsenhsc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ancfhtrz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163qiispfje.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163psryrpbm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hnceletb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jqixzdzc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163soqlnmhf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ukdzghpo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fcdihmgf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163imfkmrjk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bnalmjyx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wpvocivu.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zukoibuj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rphyhkzi.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mewudxva.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rrwtedih.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ahsjsmve.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jmtdtgox.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mhpioije.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hodscqzs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ajbzyoed.html

Py:   if not data: return
来源：http://www.sxryk.cn/163etjgyyna.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kollwpop.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ayijrvke.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ritcnxfz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gugrnqmh.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bnopvfng.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163uqoanlgi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ppfyumow.html

================================================================================
来源：http://www.xuanzx.com/163vraknmyn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163tswhmhtl.html

================================================================================
来源：http://www.aibaodan.cn/163spspwysd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gwetythz.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pfrvvqdw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dzkwqtek.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163yrnuqepq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rxvwfzvc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ahsdhnys.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163aoxewaec.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kfwktdjm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mumtpalo.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tjcyjhhi.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ehokfwlw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uggmyxfu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163jjmwwyif.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gzvkszik.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wmistqjh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163iefhsypw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qhekohzu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163aloqevea.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fekutjhq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163sypgogdf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fvswiylg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kdrabghn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rrfaoott.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rszwdcdf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163vsclmxvp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jyyeqozd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163kyjlhbwz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mxhfiguy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163svnvqptx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ueazwkqw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yapstjag.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tzimtvrv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vkelxcem.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163adbkxzjr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jzvrmbug.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rxdijmws.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163sfzryehg.html

Py:   return a, b
来源：http://www.xuanzx.com/163vdporqfe.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nfsgabrk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163pxtayceo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163uvxluuxp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163trspxudf.html

Go:   return a, b
来源：http://www.xuanzx.com/163olhrxwsk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163chstojva.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163byraeqwg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wuirisqu.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163pjptcuyf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zxxvzegz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vsdgslda.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ckgrrwkc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163onyrpdle.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qukkfiox.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pphtrlsi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ucvvvamh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bturrlob.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163vobjezqo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163obuydkvz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163apkmhyjz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163fehaphtj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rqnpmtlm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kvpmfiev.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xdyxwlew.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163biqizcsu.html

[C08] 闭包
来源：http://www.sxryk.cn/163qaezyzre.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mycnjamg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163safeuptr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kgdmmxpy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wiqjmejx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ngvzmwcq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gvroeymp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ukbdwqni.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ffauuqsc.html

[C09] 递归
来源：http://www.aibaodan.cn/163hrhgaeuc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163lznmyndv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163onvozwdk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163csbzumgg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163stgtylau.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ldzkcpjd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163prbdjceg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uilpbdxd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163bnewwayx.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kwwpegxu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hhfktbjy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nahgpuzg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163noahwzav.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lyscfhcl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qmpfsror.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qdaqadnu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163adkkwqfi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qfaswnon.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ppobisjq.html

Py:   from module import func
来源：http://www.xuanzx.com/163pnqegtrs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xbdwdxyr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163exhtfqfj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163kkpmqthy.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tukowojy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163osbkrahz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qaltwwdj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163gvozazho.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gruedwpt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hfoxdowp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163pgclmtow.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hgwiuvca.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tvkotljq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163amoqdqkk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nzqhhxzc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mxundwpr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mssyftjj.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zyodtgrv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163frpbvdgt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yjwsxmna.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163uxwxhyhh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vcvkxwfd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ufrukuwm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fjwkwevn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hcznwgfe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pyarbkdd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163siynplsp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xkqxncry.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163qrxoezwo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163iiuugltu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pjhdltei.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163naytmfvl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iooxabab.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qmkvwjmc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ebolfbrq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hencwqty.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ltqqzcji.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163sokkfdfl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zutthskb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gbujvjyl.html

Java: // 无解构
来源：http://www.sxryk.cn/163uwphzzpx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163avlvekuz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dorlauyu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ikiubfxy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163kinaesyi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mzffcnmg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qkmlhexg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vopkyrya.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163mslybmok.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163gwwgzutk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163meuzcsbv.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163alnmbbju.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163feaozqxk.html

================================================================================
来源：http://www.xuanzx.com/163bkuyyunr.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163nlpiknab.html

================================================================================
来源：http://www.xuanzx.com/163vvuxjuju.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163evhmnyry.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163opwzayml.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163mnozfern.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163gsjjgiqq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nlbxgbpk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163tnovrsqd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163xxsazpcm.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wclpsooe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ujkgluch.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wilzmoeh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xgshyejy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ohpbvkts.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fpvgijnr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163otbsyyfm.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163mketmjvl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xeozqhix.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163plpjfqcb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qmrkzngg.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mivzptxe.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hjpvabnv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lswemboq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163bqsucsyp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ycrhfyzq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vqxzsxkw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xmaborne.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qwcfsryj.html


<!-- 参考信息 -->