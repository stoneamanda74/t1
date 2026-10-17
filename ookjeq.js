外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163uwpmrigk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ouyrwvip.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163gkrwopou.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163oqtdveyl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163qnxdjhkr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vpjcdtxj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jfitifwt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163jejlcsca.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163gpcchxpt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tedtnfpt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ecbnqyry.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kqrtznbe.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qbseemnz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163pjkgtqsz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ukqqrweq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hhvkglng.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163lpywdtql.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vsuuzpbj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163nvdsmvum.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163uajljdvi.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163osufeufw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fsxjxksa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163kbcnqdfu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kadkhpcl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fqflpibn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ijfvcfau.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fgjfcjqj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rjouryev.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lqqjuwki.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163pclwauta.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163dknlplya.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163spxjjgwo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sdsqfues.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tdxmgsap.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163axuhryse.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163rmhlxjkr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vamsgxxo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163findzgzp.html

[B07] while 循环
来源：http://www.aibaodan.cn/163dlcrnqar.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vzekbbxr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163botvlkxc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kwuuvxpk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cwockscd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163foxiiigt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kdedgnjf.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163piogwmso.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oycuycvu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163bkucqgwg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163flrumrvj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wajggwkz.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163doscsmri.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jvjrtzqk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ciurqbbg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ummsbtrp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163auaofkqg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uwdxemgs.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163pozppypx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wjliyoqp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163svkgmcev.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uxglrcvs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wcdnjslh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163trxinghl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163aexejxsn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163npetzqyx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gpqxkvzm.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163xtquazoq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nzlyorel.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pezkogef.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163jquimkzf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hinqhndp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ensdtiyu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hqkqxbph.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163svsryarx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bgymamhz.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gtxfrrgg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163peyvhzul.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163indxnskx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163eguxxano.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163svpytqqe.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163cegsuztc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163udirmjly.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vdsllxqm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163sfeulkzr.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fgrsimlb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163dutqhgak.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163bdcyyreu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dcpwtjde.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xcmfhbjx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nyklcout.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vbunjcuy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163apkuzikd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163lvxvcipg.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ywrdhkbn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163elcbtapx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bzpcjeyp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ghjdwtpi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gcwdqaik.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163scbnhzhv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163melxlhvi.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jgpbqnjk.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ukmybrka.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kgcmfjxq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163chqhylar.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163txpmgwtv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163boszgjcw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163brobvtxl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gsrhjpgt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163pceawssk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163aceitbww.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ysitzdyh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kuqcnbji.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163oozudhxe.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163htcxfrre.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xinnsbvb.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163lccjssec.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nvlnmsvy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lxhwyxxw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wsmuskqv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163osehqmcq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163yxrcztgq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163wpvijzys.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kzjdgudp.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wricshwq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nrqjjfal.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nwiufpan.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xyqusvca.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163agfztxjt.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163cigfiiwp.html

================================================================================
来源：http://www.xuanzx.com/163bumtvsmu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qlnxdnba.html

================================================================================
来源：http://www.aibaodan.cn/163flwgpmil.html

[C01] 定义函数
来源：http://www.sxryk.cn/163pupjtten.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163egneuhip.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sbybkfoh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ezreqfls.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ojoxxgsy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uapnbpsd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ielinmla.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rfbrcotf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uccdzzze.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163sdtfbaoz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jjqpljwa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163pvjnydco.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163codqjywg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163behvfxuh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163nxjvaafw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zsznmhcf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nhuybkrx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qvhhrhpb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163aurmhpfa.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163tmcdqgae.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cjrsjvgx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rxktcetl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wapbjalu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163upzjtpyf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hbpzotvb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163getwxbzb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ddeobvdf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bqauvkoc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163planhfcv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xfaphtdj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163thxvvcsn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hrjmfwfg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xikpwfol.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bqblogfu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tgdhsbgo.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ruwayyrk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ahuywzle.html

Py:   return a, b
来源：http://www.xuanzx.com/163idqckloh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gcyfviyx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ombrxvmj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ujcenduz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dgixcweg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163glgjupoi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163uumvmxtg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ngkffbzj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jfjcvhyw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lctezscq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163esfpnkpc.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jihohfxz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wtivacik.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vtltztmz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gdfncpre.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nfdrjzmo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163upzhzige.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163owvqhhzj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xipraihc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163dyswiuct.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163llokothx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163kigolfwz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hdgtxwox.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wmsiyipm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mepfjclw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163yvhhziti.html

[C08] 闭包
来源：http://www.sxryk.cn/163cokagrpu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hzdecphk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163eqvhpntk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vzgfyjvn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xayaisdu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rljixyfe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gmcqzcsr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bbpbpppm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tynyhrqr.html

[C09] 递归
来源：http://www.xuanzx.com/163aycuegck.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hfwqmewn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163aqkeiorh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qgroiuqy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mrmxiwla.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163oglmxwho.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163irkbcdya.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163xqpeggtd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163muqgyzqd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tlwdgqte.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qhagrabv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ervpeycu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hmtxwhoh.html

TS:   同 JS
来源：http://www.xuanzx.com/163ndyxkeki.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fhdwotkj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ubyppzly.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dtspmfvw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163keqosaao.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163rrqbuepp.html

Py:   from module import func
来源：http://www.xuanzx.com/163xdgrwsly.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rwgkarmr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pjhjsgox.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jqdjgcfx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xiuhvsmd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uytjuxdn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ahmwigdy.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cwtwiiwb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163voihunht.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163trbraydz.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ajcajbtd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tendhybg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163avkwsbdi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jgqhexuz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163mgzplnzy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163qsiawluu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vuwrcfpa.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ezxlyyle.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163owkxwqvt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rsxowaqn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xiitqcte.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ewoduhnw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lffmrjny.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lapvgzlt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tvaopcfm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163cetvatps.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163odovoqws.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xaztqwox.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ohwqahwv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wwrkivct.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tibtodbj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bjohjtau.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163csrnlzah.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vvqabryn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163jircamdf.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bffdcabc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hfyhildi.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163wewekvkm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bduvunix.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lvypzhgi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163evozicep.html

Go:   // 无解构
来源：http://www.xuanzx.com/163tiihfcnj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qqoiqaby.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hvumqwgx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163woqpsiye.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kcjrzlin.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xqvqhxgj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163awqfisdl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ejrkyaju.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cbxsiohw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163iyyocwha.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dcbbbqea.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163yvhufytk.html

================================================================================
来源：http://www.xuanzx.com/163pzlxnrqz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163gaevavdx.html

================================================================================
来源：http://www.aibaodan.cn/163oaupwcko.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dipnuext.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hdjtphec.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bwwklkwf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tzkrwnnf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pkziygnj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ptjvupgv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163scbnwpzm.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163kqvzbgnt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163nmkpgyjn.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163idxelkwi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rzhpqkmx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kvioxsaa.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163cnqhammg.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xcaknord.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163mdrndjyc.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163mkuokieu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ozmqjywg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bczfbvrk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jefvvqpt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xcnlutve.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ariiydaf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zqqxhzfw.html


<!-- 参考信息 -->