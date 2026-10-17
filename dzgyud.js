外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tvqscuvz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163noryvoww.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ywthyquq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cvfakkoq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qhvqcxiz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163blgsuwto.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zbzgeejr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mtazhxfw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163xieapsuq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iwzwplov.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163irvflsbu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163tvncnnjj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163uognuoyn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tkwrljxq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163agddkgwf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163yctgwiys.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163toyefitc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163idtdityy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163bousvznx.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163vnjyplnh.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163yxoeozyk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163svcpebdh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hdvbmigc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ustzznnc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163avoroxel.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vridmsop.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wmmqseul.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qhfdusqr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163bupimycz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163rifbidjj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gctgncok.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kojfvajq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mughnqou.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163udujolrt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cpfqjmtz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ayrpwgju.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163tkvumqaa.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ykzgnhaq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wrxtopgz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163sssntriv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dbmlwrfl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163aohctxrz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163uaokpwei.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bvzqxdwz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163suypqkax.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163dujtgivv.html

[B07] while 循环
来源：http://www.xuanzx.com/163wkxjkvys.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163gwsfmsos.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163balhyupt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xxhrkvbp.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xkcuhedu.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sldtumvy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tocrcnvx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qdoeouix.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gnneqesh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163fhvdrowy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163glwthqwx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lpeccqsv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163eqjpllaj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tbuafxfg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yigwoqbi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163yzybwglv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mukyglit.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nmtlkwbp.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163zvajkapi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fttsqird.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tlvnswcm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uuthhkon.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mtleaksz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163adbodoob.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163nkljidka.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wafatleq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gfxbriny.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163oytjjxdq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163tyswyhzy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ozwfpzqw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163nbqsqutx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jgvtvqhr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163bvheheaq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163uhyjiqun.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163peuajqsj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163gwfzpmza.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163layzaevn.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qmlchobi.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nwptfspj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dkkincmz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163baufyont.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ryyzdodk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dyqpsloh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163scylryuo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fwiqwhzh.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163rhhahzsu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dxtzahmm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ejaqqnuz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iqlpbqpf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tgmzvgre.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bvnyfwlr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163euqiwxca.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163lacvgabq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163umvhglis.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163opqohepe.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kedefblz.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163bacjpyik.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wvqvlokw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wbkgwjrf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163aumenxoq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163boegkayl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ogrslomh.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hepqnqfd.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ecxrpfdb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163necutqxk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ksegdtrz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lelozvwk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163oauqtjwj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163vjfiiwbl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xaixdhae.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jmsrubwu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ejhtmlja.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pzdfzpvf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nasjtfhk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ykwzohyj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163agjbgmlz.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163unuhcsqd.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xxqftjoq.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163btkwrzsz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cfkiprol.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bwagtwtn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ubwpuetb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163erorymbf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mrjgovcp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rrpmjzsj.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163unnhmexi.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163crjjrfja.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163macflgkw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ewwrhbqz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xzwdwwwt.html

================================================================================
来源：http://www.aibaodan.cn/163rubezgaz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163gxtaermq.html

================================================================================
来源：http://www.aibaodan.cn/163mhtuafrv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tczfmbim.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jucfdabl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ribhurtk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163yiuiirqc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ruwevuot.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yedbkyic.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zqukncea.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tvzexqyx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sogihdhx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qciwpuko.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ayyhfhcf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163uyimjptc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163eevbnnpq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ftbovevp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163utuxlksz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163otlnoeca.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fqmaalrs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ukmgishr.html

[C03] 可变参数
来源：http://www.xuanzx.com/163jswfyfbr.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zmkelfrg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qjuqehnc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yexannmb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163shhdzigs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163httksdmn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163zbqngtrv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ucvzlodc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ixurxxom.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bsrncbvu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wilfktjy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rhixdemo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163btsaydrf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vkgfchkm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rjygikuw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ryljzdxi.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fibexttq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jgstdubs.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163necmcnzp.html

Py:   return a, b
来源：http://www.sxryk.cn/163smuivlhs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vcrqnfkt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163agxvxfdb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163grmhrsrd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wrnnaovq.html

Go:   return a, b
来源：http://www.xuanzx.com/163huprrfdo.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jnrmedwf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ijymxezi.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rhqyvgbn.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163iofvkdsx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ktjcqavc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ghlcpukq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ecdwxotb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163reikghgs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163aqumxckp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zapxgkwg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163peasqdiv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gkyohpct.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163awdckqaz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xuvuefrz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163yacmuono.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163txwltwcr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163dlmcemdr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ylkxaswl.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wimycxha.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nhquxsaf.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wqpagpvt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rplwwnom.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163omjfzlew.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163srdansls.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wgnprmvc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163peelxlnr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qejfzmhx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sbcvijjx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rkmqqanv.html

[C09] 递归
来源：http://www.sxryk.cn/163josvgqxi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nptgytqw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163dvbhvvfx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mkelhkmq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kxybeqqy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163sfiefedu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ompytbao.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163bmtxersd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163rhqbsunh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163evtyzroi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fgvkxxrl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163jnrsjjiw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bgxhhkid.html

TS:   同 JS
来源：http://www.sxryk.cn/163tgbzzfct.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vrcceowg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163stcmfhor.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ydmvyhcb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163kzlymafq.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163kyzmllpg.html

Py:   from module import func
来源：http://www.xuanzx.com/163snpcazvf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163aiarkhva.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lxkxmwhv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mlhdrfsg.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gmsymlkv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163tusqqxwn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163elnueyjq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ginwhhww.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jtebmqay.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163wewqxggy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dvggkuyb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gaexndqz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rahxbtke.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gxpjbddg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163odidnndk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xgabwsoc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zcwezwuu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ofznapkk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163otrbnmgv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cdrdiffq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ouathwes.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hriayyhu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bhivgtwa.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163flmeezec.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nazeqwdg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hasypkvu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xuhclcza.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163iyepgpdd.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uiwthymu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163gqmtbipr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163xisekcjh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pjkkwqyh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163goecckpj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163vujvxvch.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163todeasgv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163pgopqtzl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vgkxgsrc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163vdxknthp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hrhxicvp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163sairvhvy.html

Java: // 无解构
来源：http://www.xuanzx.com/163xrtcprmj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mftxrrnd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qfwnhvmu.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163skwooszr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163yirecswg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kcsabehm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163psgsvise.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rujhozjh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uvlxgscw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163udtzlfhs.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ipczbwll.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163aycettut.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163usjngcqg.html

================================================================================
来源：http://www.aibaodan.cn/163edebzche.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163yhzijinz.html

================================================================================
来源：http://www.xuanzx.com/163yhlyobrn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163iwuvlvio.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163coohxeup.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nujjdtqi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163nbvqrbwc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qttmzgwd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vwtlzsay.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ekbouigr.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163oecjimji.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163pnsnhgxn.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163geoobaww.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163nswevmta.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nlfjcvea.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163etlckdik.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163yaroxcmi.html


<!-- 参考信息 -->