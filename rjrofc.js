外链999!wailian999！

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pavxoecc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kvmbwuyn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xvzyzfqs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163uzaxewxs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163axwagqyb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gjiyexkw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ozuvpall.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163tjjpdpjn.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qssaebwh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163fjdbfkfq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cxhnpfoc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163eqqzyhdu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163cipsdrvg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ddbgrqtl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163rhgiizmo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163zoftswij.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163doekmfmm.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163tqdsjhpi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163zatqsfcb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mllpkozr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163brgtqifv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dnlsqwuz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vhjbovrt.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163onsyadlq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163eorjyvqp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ruhsnzsp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163oscpwidq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163oskviujk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vflwruxy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sbkpzbzg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hdlbfmar.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163iiyqybyh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163jzdplmlf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163dhimandk.html

[B07] while 循环
来源：http://www.sxryk.cn/163uekrwphs.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163leuztxiq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163oykxhzro.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oluqsunh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jnfizgwc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163apdkqzyd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163xtpaasea.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163djjxvhmj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rrthfvsx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rtnoprxv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163nnsvizzw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163rhmdqwxy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ujdcracv.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hhrlflsn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pdiitijz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ofikoqet.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163yjylulbk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cggnpnfi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ptzuhtbz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vwxzjueo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163oqrulrla.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pqltlhim.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wknwlnnd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163csizultl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rygvxbug.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163chddyvau.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yjhebxhl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zylnarkv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163giglxkbh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163schnwmbn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163taerinhx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163dosjaazw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rxdfbmzy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163owluvuas.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mghhyzjm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ickkzghy.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163yadrczjl.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vkezorog.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hjbxyyoy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gkhhuust.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lxxsejxc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zldzibja.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163oppvkvwe.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163onduwmjj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kymcgpxn.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hjhzvumx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ukqyqrly.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fbsdpfxb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mctwwwoc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163weoqgudy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ixmhzdht.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zovstxrc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zeyfxfem.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163vyryjqpq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wwygwkwn.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kxzpwteq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rgpfynxf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lckyhucw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163snmhuchl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xhjbzlzr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163htoidlms.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hgkeyvwr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kfuorlsh.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bjerymlu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qtjpyzlq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kajsctdn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ahtcvcso.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163durwomyx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tfqkunbq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bbkzibdx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163axjhkqiz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163prozdxys.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163eaprzvgt.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ylgpckab.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qeedxryy.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163klpnajta.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vnusmjek.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zgyqyuqa.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163pnahgint.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163pdxlsudx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hhyvfxdg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163bnzlfytp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163psxqwdjc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rwhnvazt.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163qoryuwir.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cdjpduhm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fdpfncce.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163yhodtjaw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cnemucuz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163adbaocto.html

================================================================================
来源：http://www.xuanzx.com/163ujafzugd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163twjhgafw.html

================================================================================
来源：http://www.sxryk.cn/163jyslipfl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wmcmnomc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wmcbxjxi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vxvptdda.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ghoatpbl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mcabmcvv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kxqpvcyy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fccetegd.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163mljbnxxh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yeyrgovw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163oopvbwbd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163meriqtbt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uzoqwotm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163rqccnxnk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qpjpytfx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ncgwnuku.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163sxdibpxd.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163njcrssjq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xiyfdknk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163epknjzvo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163clcjafxj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vsgfmhxv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dunubzoc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163orvqcebn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bmivtwxi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kvxoopkr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xzqpezlu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ljjqzobt.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163aekwgkln.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163psgfjzxm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163yhnxejca.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163oryigsiz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163fmicvmex.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163iodloolk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fqtetzvs.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vmfzjrir.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qlqcgbgw.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fvljhldv.html

Py:   return a, b
来源：http://www.sxryk.cn/163jviewweg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163aylhcnkt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xovnvhpd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163leejussg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163gsqpbwrq.html

Go:   return a, b
来源：http://www.xuanzx.com/163pnscgonq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kfmkmlhj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jnwdrwts.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163whnpgosu.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zkeidfct.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163szhyeiii.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163acanmrxa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bimywral.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163oqjahejr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163acgvyplq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tvuekxhe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zklkvgtx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fzcxnjzl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163drvpdsaz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lwqqivwm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rncdfovw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zjycvgic.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163njcsxtiy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163olvujrmq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ednednmh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rrkftkdy.html

[C08] 闭包
来源：http://www.aibaodan.cn/163rtfijcbp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163nmxsyfsr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163fscputdn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wvmdijdu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gdtvfnvy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163aygjswvv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kpomjzkw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163abeauqhk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163geqjgepf.html

[C09] 递归
来源：http://www.xuanzx.com/163ryfkrtxj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163fojezovo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bwwyerqg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163sladajmm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fsdyekeb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163qkyzlyzl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kdfpaqzg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kuxrebhz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163eamtypoz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163wmrnycfi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zkvvoupj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bsuklflh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163syxugmcv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ndybuqnr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nnepkebt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163unqufoac.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163llkwxcdw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gwmejwox.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ronhuclq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vbrpbjpz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zsnihybu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ffmleksq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ogbshqwp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163riokzlhr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rkpiaazu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163mxdypsyo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163nwfykepp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163eotltauv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lkrbvqpq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163obgagwnb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xltvfsdt.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ztrokall.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163psjreswo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rsmsqrpl.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163crrjqgxy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jtxurmrv.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xsobsrue.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zgcibico.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wlhxjqeh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mmokavnb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ybruszzf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mpffmwjq.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xnegqzrb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ebgjnmme.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bdelavra.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163imhnpszp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uwwlzzqp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163otxlyggb.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gpgwrzbr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mftrkmxt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163wuqchgih.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ybmspfnj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163dsxslyes.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gbvkhkck.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dhgfidxq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163neebfbof.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mpdeqhet.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163flirxskr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jlecuria.html

Java: // 无解构
来源：http://www.sxryk.cn/163kenntead.html

Go:   // 无解构
来源：http://www.xuanzx.com/163aytfdruu.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163zkdtggar.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dinyfegu.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ueyatwpw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mhqpizcu.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zqrqyhgy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163inwozyqt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163xvkeleud.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ghyjbknn.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163evsopfrg.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gqjklhdv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dpghiknw.html

================================================================================
来源：http://www.sxryk.cn/163xfnoquvg.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cqiwioxb.html

================================================================================
来源：http://www.aibaodan.cn/163gwygatie.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mbfdzzyf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wpcuqxbv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163mrjickzt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163acywmizj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163duzdhcdp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sbbesksb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zimcpfah.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163pmahzbwp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163tkemaeaj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163otvukklr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lbspltuz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qmikngrk.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wvgcgovc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bfoblayb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jbldsqyf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163roqzsfhz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bgaxxsjf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163guamagfl.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xubloccq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qqokgewq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lsteikxm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163esozzeoq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rkeofzdc.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qbazijkh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fxzbbvxh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163riidtgjh.html


<!-- 参考信息 -->