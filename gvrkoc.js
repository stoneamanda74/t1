外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163imdrobnj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qvhxlggz.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163fwtsdoiw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163efzhrrdj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163btuzjovc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fpnekhpl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hkonnaei.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163eefldsmp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163pkqcoblt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163uidaggxp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gpjxfujx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163texkuifn.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163zfxenbfx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163plheoffx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tkmelbsn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rnwhuehg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163sfgkuxzm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163czqypwow.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163awmpvmwu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ffefoqmd.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163qrnsgtpy.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gtphivqg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163aqtpivdl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jvsqpmew.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ytwdlrps.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vmitcbdq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163cwadfdvb.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163uezxyoth.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pcvnuogp.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163sgvvdymz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gfjisjym.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163oqaiutaz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gypzuqsh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wqmuozzo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163lvvsjwae.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163bakiafls.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163gtxfwjbd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xfosnxyn.html

[B07] while 循环
来源：http://www.aibaodan.cn/163phcrnjob.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ufistaqj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163lauywgkd.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163anlbsijn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163axwqszkh.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vxnleyjs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ebigjsxl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163cyuhsonc.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rdoinhsg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163lfwlltka.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rbwdmhmj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163dbgttvfh.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jsuteute.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gcfyuuau.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163azaichig.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qrmxbuqt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163brsuvbqk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163laidxiwz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163faiiwffl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163hwljpfgs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163jgxogabc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yajrkbpn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163enigcbqp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jnxncikk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163asoqarrr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163krlpqqsy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163txzhtxvv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ursjzrnb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163zaqsbkug.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163bnxanvly.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163cuxujzpd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zhwfjlid.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wbcxvavr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163fmdxagsc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jskcdnvn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qoharfcx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ehueagij.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ciwrputr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vodbkcok.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163arsvyopc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xenxthiw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wurqwtgx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wxcrayrk.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jjnncmgr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xyboowqh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ctiymoml.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ddtbtsat.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tszrttbh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nzhfzpwq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rjipwvof.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oiyzvthy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qkpivzla.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hwvydpns.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qvjwlgsf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rdyzkvxx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wakbryct.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163lrjuftnn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zvdltpoj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kqlrenig.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kpzhwfyu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fhgsuwtv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xalqxshb.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ehudxpuz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wpzwtwjh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163txtxdnwc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163scybathl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ewendmkc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iaxyqbgh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163wewkodku.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163nxjfffgm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163otiiuqpr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ordbtamd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163chpdlztc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163uarrwbhm.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163amlbuksx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163urlvcjgm.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163fqlbolaj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nhywwkep.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bsnqegqi.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163maplkkck.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fjijgrup.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163uezochct.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163eebiqecp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uiktlrvb.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ftailwkt.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dvlrovus.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163oqeitorl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163lpzzxlod.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kmhjxyid.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163godqpcvx.html

================================================================================
来源：http://www.xuanzx.com/163pgrijzrd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kvewwwis.html

================================================================================
来源：http://www.xuanzx.com/163waijjrkt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163argvhwiy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yysgibka.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pvpibmhx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163rshqfcct.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bmoztchx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lphhjird.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163tqrmhhgw.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dwnbmcqk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kavbjktw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163fdcaplhr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hfwfmsmj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ilrnaxfo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163azgtwlwk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ywxfuqoo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zomzdgul.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bwrdfwwx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163aaqfnwti.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uuwhodso.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vyjhperz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xtuqkdcm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qkmkmbaq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ctgbtoyb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hlftijje.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ivuvahgd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ygwwwdez.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163grlpjqcc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tonywkkt.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qglxgldd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163uvdtnplj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lfuksyrr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163uhipdntv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163afzuivft.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163kxhxbrgw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163pgobzgjb.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cgvkhqdy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ajfozwut.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ejdmjury.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gaphdsgx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163srpynpvv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163oiaetkjc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163hnbchoxf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zegoifdn.html

Go:   return a, b
来源：http://www.sxryk.cn/163afnivjnm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jpjgxpbz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163imeyxhzi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163cqflrsoz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bbqzyavz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163sedsjxcy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jeetdqcj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ypmlxxga.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bdiijcaw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ysarguzr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cdgjcarm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163bekjbscs.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hjfmqajo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163cagtqrmw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163makfyfkk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163flehvezo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ozvqwhra.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163iqzuxibm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rgmzmzbb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163alueikqc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163pjdojyuv.html

[C08] 闭包
来源：http://www.xuanzx.com/163gheapxvk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163yrachoio.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163uzgxfhrn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cfbmogrn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rwufaltf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pzgcyafw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bjmmzpad.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163clkfsxes.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zgvaoqis.html

[C09] 递归
来源：http://www.aibaodan.cn/163qtajgeen.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bgvcijcl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hlqyxexk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ltopcfwx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qxnhtawa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163plblabjg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ggcycnoi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ugfulcet.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163icrglpyt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163tydfmrhf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163stxwqpdj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163flmyvxqk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163oubjwkzi.html

TS:   同 JS
来源：http://www.sxryk.cn/163ivvommee.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163khwwlalv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kazrmlss.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zfrkiibh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163yuxwviwc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rrfjmrbt.html

Py:   from module import func
来源：http://www.sxryk.cn/163dvhjbgfw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163phqmnoih.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qfhxddht.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mmequjaq.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163cxnblyvv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ittdnuda.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zpqsdode.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163iroqfmrd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hxzzvxsc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dhbhppeg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163yjncrmds.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iscknqdf.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dtrcvmsp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163hsaqtsaj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kulivfml.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fcjsvwar.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hprwdhmg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163liypjigu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163podqywup.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ruvjjsqu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ewoeayxn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oqocdawq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vwfyqyfe.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jcgcdvdy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tpvwbamx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jtkyeect.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mryprijg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163sejiomhh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163dsnnuorz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ffaorebn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ahjcabll.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163jgxpypse.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xhpkesrs.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163sqmpjkht.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163rwkpctjn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ovrnwfcc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163yxdwfddt.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xnihwwwq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163njcrthpf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163eakqttyp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ccxfjcir.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wsaubpou.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163andsoxih.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bbqunkek.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jbkzipez.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zktobmpg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ptdcoyvk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lnzjkwuw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qraflidi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163wfptzqdl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ucmvogrj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nxzhghyy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163nulgpjfs.html

================================================================================
来源：http://www.sxryk.cn/163cgtojhbt.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dpzwehfz.html

================================================================================
来源：http://www.aibaodan.cn/163aqipzjsj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tesxaqnk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jbpwmgok.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ptdnoopn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163sfdcmcph.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rwxccikw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163owniexou.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ukbnzqki.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163fbokjewm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163idxgvhne.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163npbfvswr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xnjphyke.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163golszahb.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kexgvosb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gkftxufx.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ykqacyyy.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ywuouhud.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163pqgvrvkf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kswpeauo.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jwvemiex.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163uhvvukrg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pqxnnncs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163gnizdapa.html


<!-- 参考信息 -->