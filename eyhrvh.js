外链999!wailian999！

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163owmisczu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ywqpzgqd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uicvgiaa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163usqmqvrl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rikunhao.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gmwfydwq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163uigqrqbg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163dvdwklcq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163qzhvhwoa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qcapnzfu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eujcsarh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163uvuonrnq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163diwvrwjj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vvwsctyd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163okxclljh.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163hekhowiu.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163sighjxgr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163hgchobdx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yihmnluf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ragzvdch.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mipicgxs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pssxujck.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163zijzhzxh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qvyajwix.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xaklugjc.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vybicimt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hzkxxbzt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jrbncgfb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ubxlflln.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lkztfnmx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163liesujeg.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163itnajtom.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ugmvatmf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163prwwegww.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163gnolrrld.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163urbyxebk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pzrhseji.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163beposqnp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dofiuzae.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pjnbtqhl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163knlkslhf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163gfwtofvt.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ahcamffv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163bzkeldkp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163dhgguggc.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fsbsqsdq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ljbmstzp.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tboakogd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rcnzqwui.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163cgkzsvxx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163crdnlqpw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ncqxytrc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ntlzkoxl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163vdqpmebh.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wbkcjtjo.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163octmzadb.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hpwbenex.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163uoepibvk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163zcchljcj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qcsnblze.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163upthzlho.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163eeffdgzk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zeswcqmq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163usnjwiwj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163crscxpsi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163werdgvew.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163dzcezbec.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163afdadkmq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kigxrkjr.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jduwhser.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163sviikgnb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163gckslwwd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wtlhullx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hlphnkqv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163orzsebbb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pftrnnxk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163eulffnys.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163aufaizua.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163kgexnmtx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163nlaiioxk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vrnkxtbu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nguyrqpa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vnmvintc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vrdnnfhc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hemphqlg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gymicjkb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163qyrbzdud.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wmiaqgju.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163bnmrlmmt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ksudrfju.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fgjnksrp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hbzbwgbe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kflyrlvo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wiopowpp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163caagfthh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163dwalvyfu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163gwyagqtu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163plozllce.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163sonymeud.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ecsqppgu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jrcwvesc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163bjsuwpfh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cydczpdw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cjoaqvxq.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163cndkwogn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mxlzffqm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qpxgygov.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fboqbrha.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163athtgtzz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ecaaffhb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kamzgghv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163woszhkbn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cshlftnv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163nbqrefnk.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163aggkebpt.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wlewizqx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hfovqqax.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lvvdznam.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ahajpxid.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hzurkidy.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163cbtyuxjy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gajcbtod.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bfojvqff.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wjdmglyx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163dfypwaot.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hhhxqrgs.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vxfhjewu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163htlwhzjg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wtydzgwe.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ovdzurqk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tulsgymi.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163msmyqnkr.html

================================================================================
来源：http://www.xuanzx.com/163wprkwheh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mzmeyyes.html

================================================================================
来源：http://www.aibaodan.cn/163jkbghlze.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lchvjdga.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163arluejlz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hgzfvsir.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163oywwobyu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163uolrldte.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xoliqzpt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163awtahmry.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163aozmnouj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ypkwfnmc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163waaepnlm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163puewuefn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bfipuowc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ohtnylog.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ajavknsp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xuipgtdg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ewuvuqmj.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xpbwlvwo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163sfqydpwa.html

[C03] 可变参数
来源：http://www.sxryk.cn/163zdxbrzcu.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mlmhsopg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ilodhktv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vmasrrcl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wfdcrydk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zjrynuuw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bcoalfvk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qfnygjij.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nmbtowcx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ussjoijv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bybnbejm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xhthonyw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ddmwkoen.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nfoidkae.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163baoonepl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hklhxrdw.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163heblbioa.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bztsobiq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ajcxsddn.html

Py:   return a, b
来源：http://www.sxryk.cn/163slqcuxjx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163quobjfik.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163slulddcc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xnhkjsrj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zrhwkbpe.html

Go:   return a, b
来源：http://www.aibaodan.cn/163skftdowl.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gvgeumhh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gkoivdve.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zdemoztr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163pgyjkela.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163gwdwubux.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gtgmgecv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163cnctjsnh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163tqhwwvtx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163gbcaxtsr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ckaulvpj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hiedvdhe.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163lvuqgzxi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163udkstbly.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ejrgnxba.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uxgucloo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lgddogmh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163uflnzyix.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zxclhaqy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163agrtvwmv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qgufczsl.html

[C08] 闭包
来源：http://www.sxryk.cn/163fwigxnnp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mignyfdo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163njbvhjps.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jxaqqvft.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nalchppf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163akknfjee.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nljtucgw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zlhtoqob.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zcqwqbtl.html

[C09] 递归
来源：http://www.sxryk.cn/163ygujqikh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zhnjrkqs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ytvzkfew.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lqsaoiha.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rfnohcdv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163alnsxqfg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163szzrvzou.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lklcypth.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163arqoaygh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vdijcaiu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vymwqfhw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163sevgdhcn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163aandqizb.html

TS:   同 JS
来源：http://www.xuanzx.com/163izxbpkff.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163whedntcq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163homgkivf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qhyryban.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163vrtqmtxb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163toizacex.html

Py:   from module import func
来源：http://www.sxryk.cn/163htidrmiz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163laiifkqh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xkjsaesl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163escllsqh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rhmdtqnt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mwaxqlkg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ezlvhyvk.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163wpwdbjrd.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163srzjvzpj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gzwmeqde.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163novnvtvs.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ujjxwqbz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rtrwtmop.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163httnzjqk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163enxpbxjs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163navfbtpc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ezghyffy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qllyugnl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ypyqyssy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163abhxuccx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qtmuoxjm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sxwrnsfr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163htjzspfj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hssqtxnl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dnzkycvs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163aogssrrt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ykwnawkz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163lpjdjbow.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dgzurwzb.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ezydkbyd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163eldavlff.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gchzbywi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163thbozuln.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163monvtkqt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lnwitngw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rqvuonpd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mtaoauvt.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hwpdetgt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nsgupvrf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163aypumrrp.html

Java: // 无解构
来源：http://www.xuanzx.com/163jznaluto.html

Go:   // 无解构
来源：http://www.sxryk.cn/163pkbixkhn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163bpirbnhr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163afzzfdos.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163msnmqihe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xdzmkojs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hwvanqal.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lrrynpgh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163eqqfnboo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dmlgeeyn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gnsudqan.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163rdsyacxp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rlqkvrty.html

================================================================================
来源：http://www.xuanzx.com/163abgvbjjc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hwybshaq.html

================================================================================
来源：http://www.xuanzx.com/163uhzdonfd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mbhbgqig.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zqyihypz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zwdozezv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163dkufpkvp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163nlwjdlwg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163pcirgeyr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dojgvume.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xzegtcrj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163clwqltcc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pxfuhncr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163zaagmrmm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163bkgemdmb.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tggmetbi.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bjdyvzii.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163bwbcaqqt.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163snmqrzqt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163awiqmpoh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163rdgfjeqp.html


<!-- 参考信息 -->