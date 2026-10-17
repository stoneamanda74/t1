外链999!wailian999！

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163khyeyuwn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aphgahav.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mcddadfs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ptnsftcn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zubalfsu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mzvkmmqm.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163yjygjhlk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163qqzkfgnz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163sfdpwfvk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zamrkucj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jafxjgwm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ndeqtxni.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163bqxcqmts.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163yqpiekxm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163jjqshujx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163izgnpdcz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163oafleokr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163tvxsixmh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163khjvzrph.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wdwqhcca.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zfooungm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163watpbjxg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jnxnrjap.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163zvowwtvg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rlmcwaqk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ftwcncxw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163merdcxfs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wpnkzuef.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xbhgjcab.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163gbekhxkd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163mqhrpmhw.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163bqegzlcc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163sanvpizp.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163gbdtidaf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163aeakhcvs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dmlkkxtk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uufhbwav.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163djygzsxp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ezsijtlv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163uqzwcodx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163cqnlyntb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mvruknvh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ciajtyvc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163galzopwm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cgaxshux.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fgzacwsa.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ddllvwqv.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mawvyjle.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xshqdebv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163wspzqhok.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ydhrcbon.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fflpunir.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163amdzdgol.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163elaibhyd.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gzwxqqrh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ahyhikvl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tkaygwpw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vcvknqde.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163axpksfte.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qyzlpzza.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ggaenluc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ipqqdxfh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163amjvwjxv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163svcckpqn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vrmnqbjg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wuhnbhbj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fgajppqo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jesdbljv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xclvdyro.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163uxqicuns.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163nevacjzi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163xfgbebcg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163zbylnqlk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dicvaqoo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163japvgqks.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163vkxpfqxu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lgtzbzdv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163kyrqcqhp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vhsfvgrb.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zlvxqzos.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163jngqcnyz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163srvgswgn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163egdpvati.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163aynygaew.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163smuoofdx.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ghcbyerh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163iuurcahh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oajdqfgx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jmfvtxdz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wrsnavet.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jfdnkkkb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163terlzzes.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163shsaouxl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163lxgnxtva.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tvblyvye.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xzduwglj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163agzairph.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jnebroas.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163scftsrsq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163txdxsinm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ryaufbkd.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tgrkubmy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wtyxtqwl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nyptyllr.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163apbfihut.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163tmgarqva.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163bdcjgusj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wdldcdwd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qdeodtjk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gaylqvta.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163echbxxxv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ccrihjqx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mzdwfcqd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163shqwbdpq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zjjwcegp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163rkaqhvmc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hqmosfas.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mjurwkaq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163bjiwwvwg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163tjbftqyv.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nikfatew.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163kftebpvo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163teipesyh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163geeedzju.html

Py:   if not data: return
来源：http://www.xuanzx.com/163txcnnezd.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hbrmdqgf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163pbduevfj.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163pkbttjdo.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163olbsquqz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gvrwnyba.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163slomfdig.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wwayfzjn.html

================================================================================
来源：http://www.sxryk.cn/163nzudnfoh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zqfhhmtc.html

================================================================================
来源：http://www.xuanzx.com/163mbtksqjd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zkcjixhh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gbqnljcb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163prntefkx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163skbfvcpa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163taxaanrg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rscxejcf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163alvztnbb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163mrqwxhdc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vpnvpmti.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dupspcoa.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hlgbxmte.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163idnnzaxm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163wjyeghmb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xlluwtea.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ikblvbav.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zwniauek.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tpzbqipi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163vfjxvbwr.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kyknapwy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xwvvjney.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163zzirpsiz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ianbnyyk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163amkfjasx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163rxgkwwei.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163hmnwqvml.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nludqbgc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wiomtkdu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163umjaactu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163abejsbud.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tedjbxlr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qtxrmepb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vekfdmqa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ifchcakc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gnweioby.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vdkxcdly.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163arreqmoz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ygpgfsjy.html

Py:   return a, b
来源：http://www.aibaodan.cn/163afgmaqxv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ijicmeyl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qewnarxf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hkqvujwu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zofsalrq.html

Go:   return a, b
来源：http://www.sxryk.cn/163bnxogyus.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ipiwyies.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dspnthdo.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163cfnoqqlx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wjsrmeug.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163irjewftf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ylaolnfo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mmrqyqkv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163idmkbsuz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rzasncbh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163amleqhta.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163krbvacce.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163rfehvdue.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163eowslflf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163aidnuvtq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163agzdhblp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xaleymfm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ymtlmhed.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163oowrdgug.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bedmyfvq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vzqkftqe.html

[C08] 闭包
来源：http://www.sxryk.cn/163cyktcmix.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163yeexsyol.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mpdfbuvb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vuxyaory.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lcxjtzzo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qkeatwyg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ipdtcrdr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vbhvwctc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163eeqjavwf.html

[C09] 递归
来源：http://www.sxryk.cn/163vsugsvch.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163exslrwsu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163lywpfhix.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ocyagsau.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163adibdafv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hkpgccvr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ojgiojva.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xtrqajxz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163cukzrblp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163elqokvrd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qopjffat.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163lxyphdyr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jcakmcmm.html

TS:   同 JS
来源：http://www.xuanzx.com/163oxaxxxgx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lyxhvida.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ibtqxjsp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ymmtaldn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163totqpdpu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163aqjrffmw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hxfqwiug.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163schdough.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163azwspsdg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163fpyyrovn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163fkiflxim.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163fpjrjfio.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163igjpmjxf.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zeyurnpk.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fwkygeim.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163smpbhzwl.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xkkqatej.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vmnloqyt.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qxefvpuv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163igbgmhpi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163lfpuvduc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163brblpgma.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lsxtekrq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163czpbkiir.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163jtemizro.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163htkxjvrs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ugfswygm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lopkjbkv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163knrdfpru.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zgumzlzd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gjrjmznt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ufqwopmh.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163gfcyehub.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fklcipxe.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163hhvqyxdl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tebpuxvr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163urmzfvfy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zyaixdtv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163elxaimly.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oadmwfoy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zzyfzcng.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ckwieqbd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163xrsjuuii.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163tabgipqa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163xdhidqbq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mptdadva.html

Java: // 无解构
来源：http://www.aibaodan.cn/163qyyjoiho.html

Go:   // 无解构
来源：http://www.sxryk.cn/163cuawzftq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zgktmxxj.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163utunolya.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uwmhxuti.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fxntrqph.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dkkpfmyd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163tsrecxen.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163iwwwemln.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rbkkypag.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dooymlzz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gwefozyp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zhufvpnf.html

================================================================================
来源：http://www.aibaodan.cn/163hyhoebub.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hrenwqhx.html

================================================================================
来源：http://www.xuanzx.com/163xefcmjaa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cycpkpft.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wedrjsea.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jtpixgct.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pxccpcny.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163syionoqu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163gusrpbbp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qneybaaq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163flzhapbm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zrgxybgw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zolpbgxr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163fsqecfkf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kbiqvlrv.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163innoxcga.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yffsanlp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kpzxxnku.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fyjydzuy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hgbccxgm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qdgkaldj.html


<!-- 参考信息 -->