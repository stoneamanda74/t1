外链999!wailian999！

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lkkrvnqm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ccswvvnq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qpinttws.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qrszbsxm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dyowfvzr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ufqjqpsg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jkrxssdi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163zrqwulrj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163nxypksuf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jmmmifif.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dtccqweh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163idzosxib.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163rofhujnq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163drfiirsl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163tbwxtuxc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163cdtjtyxh.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163sbjfjpfw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jqqmjumt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pmonexfq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nxtxcate.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163idwmfmnj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163lqffrvhs.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wahltlms.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zteydfty.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163njqmdbrp.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163bihlufqo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ktlqpgri.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jnbtkrpw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dsjljfkj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163dfnxltre.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163mncktelo.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163evxhjvfx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gtxlblbv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163gwgwvsvv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163uyiryhha.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163vbqcbuxg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ixgmjusr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163csobezvy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163uvrejsxs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163xxktstsv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hxkqlqbh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163wwbmvmiy.html

[B07] while 循环
来源：http://www.xuanzx.com/163uhazinjq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163afvuinft.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hrmqodjj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nyhvdlbb.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uybolgik.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cobgkjso.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163aiqdwmgo.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yjnguzep.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wyapnfwh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163grbujcom.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xztqvmjh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bazotfgh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dnkyuzkh.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163huafyfyk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ltafphnh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163dcjnzdft.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gbomgdeb.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wzdhhufg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163mgrgbapc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jurcymqk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163egapfplv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vpjiwxce.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zkwirluw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dnsgjntc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lokoijiw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hqwekilu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cwuncbwv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163lbqpmjig.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163qakbuybo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rfzullyy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163brrssehn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jxdbnvpy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163lqugjemw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163tltatsmf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qcyhiyzl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ldqwfpzl.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ytsnasqz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wxnhxliq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ciytrqso.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163afqkfnst.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cfgarzak.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tujznprg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163xlhkizbv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163hgcsujwz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163rmnkycoq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hproutts.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hexibmqa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163lhrjbcrb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163adkcikyx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pwtxpjsb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dsufybmw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wsmfioif.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ipopockb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163vxzfkzbz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163uehonosg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163thigohya.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vojjkusu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hfjfpgdw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ttgbfcjq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163frksfesz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163eheqsycq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163fkmahyso.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163arytiwzp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163jzreatoz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wnhswymj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fhgflixq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rkfqsdty.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ksyavjen.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163cawfsawf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163yqhuhxff.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kgtsipjy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qydlxdok.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tynzqqiy.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vhstdhpv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163fjpzupxm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gvktkmxi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ruxcycde.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gskfuvrs.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163txsaxnzw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cqrascmp.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sgzfaspc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163kobjkyvd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qxpbhmiw.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cxfljyqz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163sqnmmkuq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zfuenbup.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wlbmhctu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ajrcinpg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wgyksqhw.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163scvfcvtj.html

================================================================================
来源：http://www.sxryk.cn/163ssfalpiu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163amiwkzll.html

================================================================================
来源：http://www.xuanzx.com/163sghyugcc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pferlukc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hbzghhgm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cwqsfjlw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gmxjetmv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rnimbxti.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gavzbzif.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jlxnkzzt.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163gmfczgnt.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lwkgpgya.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uaiaoldx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dccyknlq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wbpcfqkf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163yxxdvddr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163agxzymjs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163axqabczy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pqprukaz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163egmyowst.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dfcpvgcu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dumrfyiv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163wxmalabj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163iuzzvcfi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ftmcnfqp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qhvxnpsk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ocvarnwa.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ugmjtjvc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hddjgpex.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163umwrurbf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bewlhdxm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qdrwojdk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ybmgyyav.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ctopjlbt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nwopgwtv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163yxzbvpne.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kpahsdey.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zyxgzuun.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pabxdklb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163oiiufokp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fsicpate.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fnzawrpe.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163scxggtmj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163uxjyvtgp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163bqcbotro.html

Go:   return a, b
来源：http://www.xuanzx.com/163esdzbjhm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163lgtaidpe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163suknsqrl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jjcjnlgo.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lmahpmkq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yfewaioq.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163aigduzuk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jcollrox.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wjrhvqax.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163veibnthp.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mrikiwvs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gticfboy.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ugwncpbx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163sizsrfhg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163fgsjitcn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163irvubcby.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163vghyvykr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163iusvahua.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bsksxwfr.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nbabyysy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dniqswlx.html

[C08] 闭包
来源：http://www.xuanzx.com/163kzhezmee.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qurwduhq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fgorzabl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xgvlssab.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nkrznkuu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rdnxmxoj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163atlenkys.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ybobpnzf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hjafvnyh.html

[C09] 递归
来源：http://www.sxryk.cn/163hjojdlth.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lwupdkus.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163swwccynb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pjlxgfmw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hpxzlmwh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ybduorlq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jcnfpczt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163osrvvfhd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163jevcuxvx.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163oryluxsk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fdagrnjg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gdmwxwjv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163brrgjekp.html

TS:   同 JS
来源：http://www.sxryk.cn/163ptkkyssv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kefbjwmd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nzzazvsx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163howcrjpj.html

C#:   块级作用域
来源：http://www.xuanzx.com/163fhcevgvd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vmruzryg.html

Py:   from module import func
来源：http://www.sxryk.cn/163yetgxpln.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163bsideixx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hyerzgpg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hbdcukzx.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qhzqiaut.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gamwitqh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cqpnehbj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rezujzmu.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163qcyxymmt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163skpccxyu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tbsktvow.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bbsgksmu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163agomxlba.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vgakfzgy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fkfruuml.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163yptnlvcr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ohmuxnvd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163mqihzngd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sesexghm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qpsmujaq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yqbyyxvg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pjkzhbdi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rtnqadpc.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wtecuokv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ecngukzl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163hhnpsvdp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dxtkinwn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163utzahpzi.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163vxzlzgye.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ywsulpln.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ptosuswx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163osokkmic.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uyhzrbgi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ekaoiqwy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ixjnkgdm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163tsopdzkv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nfzbacfd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rdhyxsxn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gsudpgxq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163eccztgql.html

Java: // 无解构
来源：http://www.xuanzx.com/163hvekscyv.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nxrphaqf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kplzvszn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163effzukov.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uvuitfxp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163xasvdnrn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zsjkxmtc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163eflpsszr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163tjwqjhvf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jnnyrmvz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163froenkdf.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ioreegtr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163abfrvbud.html

================================================================================
来源：http://www.xuanzx.com/163qwokepnp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rvicrowg.html

================================================================================
来源：http://www.aibaodan.cn/163kvielkke.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163nqccyrdi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mnefjvsq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rwvekmlq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163nyqvjqbt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pnenzuhw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163upsojgak.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163nsqxdozk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163hbxvmjxg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163kqbwzbzs.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wbpnzcoj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163itwbtmuv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163wnibwgzm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kuygpohq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163yzruzyvk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163znryiusm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gtktjsul.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163kdfxmgak.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163slanuavp.html


<!-- 参考信息 -->