外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iuouhefb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163gedbbuxw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163fefkzsgp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zjwejsrx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rkjdzkoo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iiuslygw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cicynqmg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pxxedlzz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163mjybiwpk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163drtadgto.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163njnkvvbj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163jfkalygf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163tgmwyuqi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163odbgxnlc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pdiaryjv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wmbmjabe.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ktsjagpz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vsvdlrte.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163gexpzkid.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163xdpnuuhy.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163jrvnmlcw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163yfrxxodl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ewnljvsd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163adenamrz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rdbggxqd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163veqwqmrh.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ahxvnzsl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lfpndmpt.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qofqqegj.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ksagwbjs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wznyvhea.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rcfqopeb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dukqolsl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hivjahee.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163mnkwmxun.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163auhbjlea.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bfysyniy.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zxeenhrr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163qcjbsors.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163bizmquez.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ztxicmjc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163afsbodjs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iituqtpf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163czahowlx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rosypbqz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cqvgqvqc.html

[B07] while 循环
来源：http://www.sxryk.cn/163kqpayirl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lwlelmoz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163puaumhel.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163enurixsz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163soglirsg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163crwcqnje.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jqhlqrxu.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ypjnberd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jfbsytvj.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ahgtdqxm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163yuuusdve.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163cduodcrw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uasivsbo.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ayaafeio.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bzhwtksi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ehpqghtc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qkhnsfoi.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hynbnfpt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163hksufajn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gksepxrf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hqgdvjbh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mbbgctse.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163osyvdsdn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163azvmerhx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163czhipyli.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163wfxmsekn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mjgksise.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ynkoitsx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163pypqkokz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163zsderzpb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163yislbxin.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163njhcubsm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163skzskbhn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163snncarxo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163tgxxmtsy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163rzofjbgb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ktlfrdkl.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hlndbfkl.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163aaxvxdwd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hqloggic.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jwzqsreg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ixyabufd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vkwhsyyc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ctxcdklo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wplshvtd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wapzjjrq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163bxenbeid.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cyizplix.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bwxvwnjr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uoemdfww.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163luvmeked.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163dsmwwtmy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qftbzusx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ijghjmmx.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163naoijyti.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163sxwapbvr.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wsvvbgpw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pvdcjicp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rbruluzg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163klujjurp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163kqxayysd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163slztyrtf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163boxhlgzr.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gwlsqypd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ieuslyrg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ttdwhhnc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163grlzcsfu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vrkbhfrw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163axwsmlej.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tgkzrbvs.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bkmzijkx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163esthnogt.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kywjzkju.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163pzxtwnqm.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mbtvylhg.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ihdlnmwo.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vvqsqtms.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fkhvtwsg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zalckjla.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163llaokevc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bgmteixl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163eywudjym.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bveudpqo.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lklzqjhr.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163iuwdzurn.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163uxhrbneg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ytdqnpfv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ewyajuxr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ruxzpumo.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163spdmplck.html

================================================================================
来源：http://www.sxryk.cn/163uqexrdcv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163bomowhxr.html

================================================================================
来源：http://www.xuanzx.com/163mfskfadc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163sdjazwlo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ortdyjke.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xzlvuzmp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163yamzdkpx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oofgkzyd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vhcfhnmj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163nrquhsgc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hlspyppn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fuarpvie.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dwlxoujs.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163fdeywmkl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nvhyzemm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163vgripsjt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pjcbgwlf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163scomvqca.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163guieqbgi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xrlmcehs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163eqwxzllg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163gprxtzqf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163uupxdtco.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qdwypirv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ewfpjsul.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163voftdyex.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kuckboti.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ctmyqtzz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vskpugfi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dqpxnxuy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163malduimf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ytfeyvnp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wcgsgblr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rleifwua.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163frmvuqzi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163soippbay.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xweipamu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kbnpmzto.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dxoitoif.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qbiselxs.html

Py:   return a, b
来源：http://www.aibaodan.cn/163smkrrtiw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kxycvwah.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vhtxnnqv.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jhdkzcqy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163csdrlysm.html

Go:   return a, b
来源：http://www.sxryk.cn/163dmoycdqs.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rbgrhghm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xrjjuuef.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163muwhhibe.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163iopmgwps.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163riflvvom.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163czxrgloq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163uqkpdobb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pyviaxnr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cmvdpggx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163qtwsbufa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vzjhryec.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163omkztofi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dkeolgsa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163bgpusjwc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vnuthogj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nbvxneea.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163shrlzrom.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rtiashwk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rcyjhmsq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bvgceeem.html

[C08] 闭包
来源：http://www.sxryk.cn/163gagdxupc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mvazbeqj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163drbdyfgd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163scqeeohl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uexugeql.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163uiewvusc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163lipwwdkl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wbiwxpvn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oihylnom.html

[C09] 递归
来源：http://www.sxryk.cn/163hmlmaudk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163iuyobgdc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jngoecoa.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163eswlvvvm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zkqoahdk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vfrgswra.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bpdoutjr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163khvesmbg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rujcrzzo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163kqiaejrd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xmjaqiym.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163uuuzdhbf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163rqdobnvr.html

TS:   同 JS
来源：http://www.aibaodan.cn/163afihhdel.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hjmlposo.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163avyolqtw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ccjktkym.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mxmxxjmm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hifxnluv.html

Py:   from module import func
来源：http://www.xuanzx.com/163zrsbqbne.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163picejduh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163stmwtlqm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163sfhjexyg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wknjontx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ogdzrioc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zeqluiam.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ynktgbek.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qoscezfd.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163yfbeqxgy.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163treokfye.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yfzomtio.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163siweunxb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163mnggwlek.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163halivbxb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163habsrthe.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rsqfhcln.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163gjmyuqtt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dowmbytn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lgtnwkty.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hozfrmdz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nxlhleez.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163asfhexhv.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xjsdqmit.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hkgvqjex.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rkmqfoxd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163hmohabnm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fpzxpwew.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163etmvsmpz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pvseqgpv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cuvyihtm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163wajiyevk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uvrbupqr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ppixbyqx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ahmobjss.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ijheobym.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qlovvmrl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tgqpixyx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pblmqtfh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yezerhks.html

Java: // 无解构
来源：http://www.xuanzx.com/163zcnjbwvr.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dtmjfhto.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gpbdqspz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163qwaykrho.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gtgyrxeo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163waqysxbr.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vdxxdpch.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zuptpfmh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nleifnrc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ebkhcmyk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163lbfziyso.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hufgxcrt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163pqpesmal.html

================================================================================
来源：http://www.xuanzx.com/163vncomcyq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163nvtrhigi.html

================================================================================
来源：http://www.xuanzx.com/163ekarncwi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vtrkulsg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hlbbqgvc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wtebhdmq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163cmsscpvh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wcikufbl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zpsvuhqb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dwlkazxd.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zibglxvg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dhebzhzg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qmitpbkz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163kvgwunss.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ylqnaamd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163dfkbeirr.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163djvxjmss.html


<!-- 参考信息 -->