外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163qsaimpih.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zlggwocg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163hpqtsrdb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163lajdvdof.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163tahodypu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163heeyxsuu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bwhsjclm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163tnhdcfgx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163thncxpof.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vvpvthoz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163deepqouh.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163umyzfhnp.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163hmkklgcw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nwifdilo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zwddjvgp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zjbbrjdn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fulxhibf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163rrbyuost.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gixnhyuh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163diajzlyz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163atkxmubd.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rvinduus.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163bsvcikar.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ikvvzcam.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tfafqbaq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163dbjjewrn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jorcbwpz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kytkaybu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ongiwknt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jwaxetfz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nsblidwl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163puiabvhg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163miwghthz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163aziujysm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163iowrktrn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jzumqdby.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163fvrnovvh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nfzjqryp.html

[B07] while 循环
来源：http://www.xuanzx.com/163tkrprwpx.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163lqagervm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zvabpijq.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gwntlsyf.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pllweyfh.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oghfmjjc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mfuayjlt.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163gcaqjgbm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mwbyztqo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163yieenffk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163htfffjgy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163glpstiap.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nzzqeeka.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ooiuhyec.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fcxbsipr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163nbocwcxe.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xrgyrhpy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yitilqsv.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163lbsggkob.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163khggzqiu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163fqnffena.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vrbjirmk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xyqsiwjp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163judxotnz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lpqrocnl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163stcrourf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yejfomal.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163diiceooy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wvxfqqtt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163iefbgrma.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vqonppmz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163auixrlal.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qxtibipy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xwuepkrl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lhfrsevp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ujdzsdlm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163euwspgtv.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163pmkgdmhg.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163iiafrqks.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163htkqvgwh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163akxuslzp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163tcrpvipu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163akgrbdnw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nitwtoys.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ocoibowd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163iwhjqdeo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hfhtvgpq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bfcwpflj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iwwbfxjv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qqlhkmnw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hoqzvonb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ajmqdgpd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163quzeybnt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ksknarua.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bsbdqcmf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163upwwbzmg.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dauryskt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gconnrsz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nzdlxluf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kjcmwiln.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163csszosij.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163mqwkhsqk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gsqkbslt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163aobxzzqe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gabodgor.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163iywjhiyp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vwvvmqyw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mrwaqpgx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cuofywfh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kxdrmors.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jzzbzgjy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pfrrhqxy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ccnbstpd.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qqsjiwhu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163handxfem.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qcoohlwz.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163nrjmrgvd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vyhdpzcg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163pbkrfkvo.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zccnimpo.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fdzmuhfq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163kkgmsgwg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gxupyytg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163umkbabym.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rjszuswo.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hqjbjuiu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lqouyavr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xgkhkbgp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pwnyenxx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163xgojtzzv.html

================================================================================
来源：http://www.xuanzx.com/163fditznrx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163waxvioqu.html

================================================================================
来源：http://www.xuanzx.com/163caquqymi.html

[C01] 定义函数
来源：http://www.xuanzx.com/163cncelffo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vcontiqd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sxdgfcor.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163cdjrbicr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xwercuxc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163imxjsafe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163whrzhyar.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vwjizwne.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163okyizjrm.html

[C02] 默认参数
来源：http://www.xuanzx.com/163nynccrqw.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163frgcxhwl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jsadpwye.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163miodxjwj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163motxlbfw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163angxcozt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163tfygrhcu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163eieoxklz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163egqxtnoo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rnjqzznm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ggxyyqjl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ezuussup.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gutlcslv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yhlgfmya.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rtrgtdty.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163esodysxk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wbsvgvxs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rqfvlnbo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ebdtlpil.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lfksiujz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163uebytdem.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wmzlpgzr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163azvokpnj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dzthuvnm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163trbfxuzz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rslkklzf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163srlimste.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163whbkails.html

Py:   return a, b
来源：http://www.xuanzx.com/163kfecprgq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163afrmhmts.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kvpxwnkj.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163wndbzwez.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163yrghxcxa.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zibrgstb.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163pemqzqzy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163uznbtreo.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163clkxjhhi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163iqkszgjz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zgmmhyht.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fjgvmbul.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tcsribkk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163heliefeg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ftfdjimb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xqffekyd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163jhedfeda.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bnazpijt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ivqkxtlt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xqstnqzp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ltthdkcn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163sznbghsy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163usfhyyop.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163bdrdoamm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163efbzyzme.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vcxlpjtg.html

[C08] 闭包
来源：http://www.xuanzx.com/163xhskjokk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zwyavjnp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rxfhllvx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nknpfymh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jzcswxoi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fpjmpfxg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bppetncg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hmgjvadn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nxdqsvye.html

[C09] 递归
来源：http://www.xuanzx.com/163bswaurqt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163lzufdrug.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163petlystj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mqtzlhhv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tneypeet.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163soktatnd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lzbzsume.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jvmatksb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bpssunyp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bhdpakex.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gfyiyvkf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163scudzguz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163bcqeqmud.html

TS:   同 JS
来源：http://www.aibaodan.cn/163igujqngm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163uklrncwi.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zwuoxxfx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163arcwxivj.html

C#:   块级作用域
来源：http://www.xuanzx.com/163oidqkuzp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nxvsnzyk.html

Py:   from module import func
来源：http://www.sxryk.cn/163jlwqlwff.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wqedltmf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ymvnexfp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pzjdrlfr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lueolesr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qojiuxvt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wdkgxhoc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vmiqzcew.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163szffpcrc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pnqgrgur.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163grcjlwjk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ushewzgb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zdjwuyry.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gpfvzxlc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mcwdyplr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163elrshclr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163piolbjlx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163goxwqjqj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163eqnzepvj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fqstijrr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163obnulynu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rqsyyxfs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xfwyohbj.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163urqqmtin.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163sugjfxqc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nvyqpsdn.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163imqfnfxs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ethmrhxu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nignhkxf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163oygpxqhv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163hmylxjha.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163oxyyzzde.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163gmojmnpv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163oyxdpnuf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mvpbfpis.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163szvsbezg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cglqlghy.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163iobwkdlk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kzyddlez.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pilwzpne.html

Java: // 无解构
来源：http://www.sxryk.cn/163mezpwcid.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ohtfldwh.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163pludwwkk.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ksbjsolj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qznpcziq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163eqthward.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uefyjnmp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163winqpeiv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qbthkmci.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163julpkenv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163uotejzdg.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zhqmytyq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jnsiqjft.html

================================================================================
来源：http://www.sxryk.cn/163levuowfu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163iavjuzvl.html

================================================================================
来源：http://www.sxryk.cn/163imjfpxkv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163jpqwwfcu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163lsymnhpy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163webwclha.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gxvjkmcf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mantwyof.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lsxmpnit.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zlneptyc.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mujilqcr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163henhbosh.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163cirfngot.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mnvddojo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163oqtxtqfj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yrvjfksx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163sqrypucb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sfdkwbav.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lhdtamtd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zmtrgmvk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163byuqeyzi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nwdarrmy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163sihyvxhk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163imvgwrai.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163lirzdlgk.html


<!-- 参考信息 -->