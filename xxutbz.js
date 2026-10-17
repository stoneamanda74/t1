外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gvtczggp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163foosqrjm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ohnxjbgy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163vfisngre.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ekewpdbf.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ztxpaeln.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jabjdjaq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163uvyajwwp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ymtqlccn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wzjjcgck.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xminpxbo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163kvwvtyuj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163uxnmonqm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ewpkxudc.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163umlwrwcf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jiavsqtr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163cicednop.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vacdeuua.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nsyjjgzm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163eovcvxoq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163tpfklnpt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163rmzvjurg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nlltleus.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163pmgblfdu.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xhmxhskz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ihlnxjli.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xeqqifkx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xtftglsk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163nnbadjsm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hutodtsn.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163howiwrew.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163zwqlbhyr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163alamzzbm.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163wtizsphv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163sixskpvq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xvimeuqz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ykdinjwt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163fqtgzxka.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163otcicshd.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wgdkdcze.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163jpqmqvcj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163uftsdaii.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ahvcvxnq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163alwxcaqq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yizpoccx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163urzqyafb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qnjgdnge.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jnhwsjmc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163csjketie.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tturyyje.html

[B07] while 循环
来源：http://www.xuanzx.com/163jnwdbnfz.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163bmbnemma.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163fikzvmgs.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hacepdhy.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vomvkknn.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xttjmqrw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jhcuierp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163leihrflx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wajhjzeu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ofghuvsu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163sidrhydm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ljuurhbt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163flyiatep.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ckbpvmuv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163snfenhqh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rnlaxlii.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163scpmxjui.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qshymvzg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qitnjcof.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163chvxhpta.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163spfwkfrb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gjrzmmjg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hdhxiway.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wejzynyl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163smmwpfil.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jtayepvv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tipwdbbj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163thxzlbrv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kmkqbnha.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163axdtmfes.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kblwrcrk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163yrwqbwvz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jobkafak.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wtqbuqed.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163dqxfagvp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tpbqivuc.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mwtbeexn.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163tncwerbc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163owixpvgm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gpjkhanw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163urbxywyj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kbusnsya.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lctlzwju.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163unmexvpy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vjqhgrno.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gixwwtuu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xvmkuhav.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dedmtult.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ofcuxsej.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lfvtcceh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163whnpugrh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wrrrthxs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ercdmpop.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163cflzywcv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163cohztilb.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163avjaqsbm.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ahjofnjq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pbqxvnht.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163enfaulyi.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vtncelkw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163haxwphqd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163uhmnrkbq.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lxbqqlty.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163shbmkwak.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163lfsufeyo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hjondsec.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kxsguzfz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vrtwlojj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ufkjshtq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163zkswwijj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163pvhtglgi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ezzujawp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163eslriyaa.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163kvfwmmxc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163gztdanrr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pluvnkju.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163lqtuhtey.html

Java: a && b || !c
来源：http://www.sxryk.cn/163uxouterg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163sraxklbe.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163geehojgg.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zmhdisus.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zyklwtpu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wjnajtvo.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163wvpvfpbx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zazigkmm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fagxsggb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163iinywizx.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163utvftflw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dzubilnz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163kbsyopok.html

================================================================================
来源：http://www.xuanzx.com/163kjhefvze.html

C. 函数与作用域
来源：http://www.sxryk.cn/163paznqzsc.html

================================================================================
来源：http://www.xuanzx.com/163gwgmzjqc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vbinycie.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163nrquyqnb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xhafzwly.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dbbgjbzv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dqfvvkrp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ajiocrbf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pufzzcyy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163atrcihgm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nfomrebx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qsiygxcr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ayvauopo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163glqzxewi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pjnuvozp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pragwdgc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xvlxxmck.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163oixykvra.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xwqbwgsb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rnofdhps.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163jrdaowse.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fdqjuqya.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163auaruwem.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hkiqttlw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xaujmlqa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dxezfide.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163dnzgpagy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fmsaczkq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163puajcwqw.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163btrjaorq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163tuzooemg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163obkjcqst.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163updrmdiv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rkttlcmc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gasbhwvq.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zaytwsac.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fokarjqo.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wfqrnbdv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ktspzerc.html

Py:   return a, b
来源：http://www.xuanzx.com/163yozimyig.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163webojdxb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163wbjgefbt.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xpgbwiau.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163fupsremv.html

Go:   return a, b
来源：http://www.sxryk.cn/163ojbcsghv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163zqtqkmdt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163shuordvd.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ywogqxlm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rjepiqki.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163hdkbjytq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163sjjsxsih.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jslqnzul.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ymwfixqc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163kytvebao.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163omeeigvq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163rbtgvzhn.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cqpdkclo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163mqayvufi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163vbqglhjp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pfpfwnby.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jccfbjeh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bvmvteyn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gxsubfeh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qgajhzew.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163tsljelur.html

[C08] 闭包
来源：http://www.xuanzx.com/163obsntwoi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vpdrwdgy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163yfdvquqm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ckkhdrbe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zmgzcker.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fwkunzgx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163oyylmjbe.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hforxacc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163enhxixwk.html

[C09] 递归
来源：http://www.xuanzx.com/163ppnykvsr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163oluyxzei.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jisauqdc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vntelttn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mrlgctto.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zrmegfsg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dgtshwxs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163nrnscxhw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163oxrnaxby.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hppdccaa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163artzqqtk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jfzfaaqp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fnavylgw.html

TS:   同 JS
来源：http://www.sxryk.cn/163rawwkuoj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jhsiqtwb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nfossysi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jhlqnscv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163obnqvnhu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163xyxgsytw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163lhmceqfj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ynuijvif.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163znmaqnno.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163bpasyyzu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163olvskodk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163gsmxwljh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rwruciku.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163cgorydti.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163nwqmpbyv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zwoxkyss.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ptektzfz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163woidvsbz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163azeynpxg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ahbirvby.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wnerhrxt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163smdsguuu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163icrluhoj.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163avjiqtmt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ulbztfpt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nuyfglan.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pukzghxa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nylymnya.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mkvrhjyr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163eufyxmkr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163gvpjezdz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lvxznjta.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bixsndec.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bpeauxms.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gvbwehgs.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ajdbilyo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ocuamqbh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163fjlctwsi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163zupthoiy.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ktcmyynm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163levvzjpm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vntqyjei.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ktzqcaze.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jvzriazx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jgsgwamv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kyrtbbzl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xekrxvda.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ctnypxav.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hefqzjii.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163iujnffvc.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163bcbzihvu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nqezxrjo.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163gfmfqpqj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163rktpfhss.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163wrketsgi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xzddrkxw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163exoldfxs.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qsrmgmun.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163selhbxje.html

================================================================================
来源：http://www.aibaodan.cn/163lwhpinzi.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163enrshrll.html

================================================================================
来源：http://www.xuanzx.com/163phmxlibc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163zhbjaqxx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163iijrooho.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hlobryge.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163qyonvowo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163zwgmprwq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ibbwwsjx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ltrhutfy.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163obrxcoph.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xvldafvv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zscboeiw.html


<!-- 参考信息 -->