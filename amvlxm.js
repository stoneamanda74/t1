外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qrmbdfyb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hzkjkgis.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jabuevxi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163azwdupub.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wlrmbpnl.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xwlsqijj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rsndiaky.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163tzimzylf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zakifyms.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sgtllwrv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vxcysxzh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163maywexpm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qdutwzzq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163avbgizrk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mdetdacg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163jfsdwipt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163anzyivmu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vmzabqcq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cvlnslsj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163uxuhntui.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gjvpwhdd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fyocgtgn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163vwmioxxn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lkutubod.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zgjepjld.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ctlomtnm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wilogatj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bbibtyyy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163azntjode.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nzktsllq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163jvfxxawb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163seglxrig.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163goqywdxk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163louezxhc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163aqjjvfok.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yfojqmgb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ujukwuhh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nogrikzt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wshztgwh.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qjnhhquj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163alngojjp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vsxeggvm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vlhgozxz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163poqygwil.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pcpvvugs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kczxpdug.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tngwghnb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163qkfeneth.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163vzvsgklj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163aamzirga.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xjyoeuxn.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163awchwsua.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gughuxzj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ybkuyhor.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jqbzgbza.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163amannkub.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163bfcgmzfh.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zgtgnlee.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qnvnmrlu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tttyznry.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163zyntxjmw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163slobtvva.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163whawsdyw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wxrobxac.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wmqgwdpp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163eaihowde.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163infumcvg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163innhevux.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gyzjjevd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163enmkitbv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163gkiaqtjf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163krqodrwj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163peoddhor.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163snvpaesk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163nhuefjpf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kztyrwsw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mgapippz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163fddtzuts.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163haxktpxj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vumhttoj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lgrbdljb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gqstfmih.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163opddyxra.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163fmbppeix.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pxovnbxv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163pgptbouv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163dmhivjus.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ophrxjqw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163afxioaim.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rilmhzkz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ffvsxfyb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163uezbjmfp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163eronemtu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nrffozpv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163maybmnla.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163psdgqhwk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ppwulnlh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163alwxctmp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yxhprqby.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yjufzxde.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tlfcdzws.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163syhtpnvv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163jqhqjkgg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xvkfhvwh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lrplipwf.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163psdtsmnh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163khgawxlu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kmrznwlb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mbcfgips.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kzggswuw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163obvhqgzx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vmtdbjaj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hjhxaubf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ipjtgyrw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hwhcmdzc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163djewgzbb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cwvoaujp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dmqkgflh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fuggozam.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163dtbdedgb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163dgesglhr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dhnaskdq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qgweeaxu.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ylcsscwf.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bzfmnzbm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ocmohemc.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rrtunfhy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zmfuzbfj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ddqntsny.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163wrxuwbuo.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ojuppkry.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163fntobjgc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163gfiizgzb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163swwiobxr.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163uyaqgttc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dshckkcb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qgdktxvj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ojylzgam.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bjlvruwv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ibabicoh.html

================================================================================
来源：http://www.aibaodan.cn/163piweuifh.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kjgysjjm.html

================================================================================
来源：http://www.xuanzx.com/163ujibflsb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fmtgbsht.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163patndgmy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163apoffgin.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xstrkkox.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ndjpdlpr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fmisuguk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163qoiabhyu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vaxzcwpn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ogzndkkg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rrwxmdxp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ppmyudpi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dstozahj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163poifbrlu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163nmbdzaey.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bfyiefmt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163udrrhcpq.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163srtsugli.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163eelajhqi.html

[C03] 可变参数
来源：http://www.xuanzx.com/163velizlvy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fpcnvxme.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163pjoowidu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ppyeczwb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xxkipfyj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qjtngesl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163hulleilr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hmzgblvw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hjvstxpf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163gqoyfnzn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lvbsbvui.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pugcatlv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ugffbsmp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zzdfgeoa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hdibiiko.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163yckwwgab.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gailgokj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aorcnmbi.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163rsbrppyb.html

Py:   return a, b
来源：http://www.xuanzx.com/163rndvhdnh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ztghgyyb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163njbcvpjl.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cdlipmop.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cbuwudwk.html

Go:   return a, b
来源：http://www.aibaodan.cn/163szstlpql.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163hnhfirdi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jgpqkidx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jqvdszlm.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vsudhafb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mswthabk.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163lhotmjva.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pprxxnvh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ttesykjp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zkzljoau.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yfqhlrvn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ojlmqpcp.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uaaxulox.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dotbxarj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163axqjlpyi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hjnuypkv.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xiajadbb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vpcdxxbu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163mnmmabfu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mpazpghi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163svowpfrq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163sjhvbnuy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vkmffihj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163uljedrjl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gnikwchg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jjqdujif.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gonxgowp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163iigobcen.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163elqkozyq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hwzpetug.html

[C09] 递归
来源：http://www.aibaodan.cn/163ojxsowpy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163wtbdfxkw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hglmkmwk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mhwifquv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wtjdwfrg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163qmtuuwoh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163blkqxsjq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163yajsbuzq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163majcdmkc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ielpolrq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ockojyji.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ovzhuhoz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163nzmapozi.html

TS:   同 JS
来源：http://www.sxryk.cn/163vlvfpmwq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dmmhcdax.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hhkpbctm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jkuilgwp.html

C#:   块级作用域
来源：http://www.sxryk.cn/163djqpxpdr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qcnloett.html

Py:   from module import func
来源：http://www.sxryk.cn/163rpzjmlar.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163nmlanqoy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rznzljsr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mcxhlmvf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163drqiqhet.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163impkhuwz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gxndvhak.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vcrsyruk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ecoenlkv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163gqddsbkp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ofyyoxip.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dfbtnmhi.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fduzrblw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163tikbohsz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kdoujrlo.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iwsovhos.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ursrihpp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163vyprvcuv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pyizhfek.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hompmquz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yxswnbyr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kqszsqbo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wwysllwh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163oqetcomk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163azsweseb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ofjmnhzt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gtzjvdnv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xmxbkjna.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163uizptvbb.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163roeqhppx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163lwlhcsbk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qfiibkqw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163oswhdima.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gcvbvuoy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vmutqqke.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vqbhdyxa.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nwtglbgu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kbxurhuw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nabrvhsb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163kvexibts.html

Java: // 无解构
来源：http://www.sxryk.cn/163tcehtkgf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163kzgufrok.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163huzgjely.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fnichjgv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xfkhpbcl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rnfwkoxc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163vbnejqhb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mmiyeehe.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bzgefdor.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pyjmhnox.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vxdmhnfs.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163rirfoyfj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ewentqln.html

================================================================================
来源：http://www.sxryk.cn/163ohxxtbny.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wonzywjy.html

================================================================================
来源：http://www.aibaodan.cn/163igsosgnc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163aevplmfg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wytswktn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163coswpjvx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163yptqqxob.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jbknvsiq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163uvfoqbop.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163knujklfy.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163uhxtjuwt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ofxgukpp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163amqhbfjf.html


<!-- 参考信息 -->