外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tnuroyyn.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163emtbqtyg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163imeteazq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163bodqdxdb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lshurrpq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hzhmyfxg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163opzgnjzz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163rtkjylor.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163cyhnvrmk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yammxhaj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163svcrorgi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bjshptqw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163obervhyw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qjivelzm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xflolfis.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rpoksayj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163xlnlvbhg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ylitdrrc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163fctnlvyk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jjarcady.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xtfqbpci.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163cchiqcmz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163omiuqkve.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vgdnokoq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ltnaeefj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163xvsjbnxi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163mmviobpv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163tylfmvks.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kweugidi.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163cqjlrvqn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ckcmperb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fkubtagg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ondbscdi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fssgpjhe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qahkbhyq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163essrjyra.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163yblrqvtf.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lngmlhvr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gurvkbvk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ppezmuya.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mpigtqoy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uccgmkdc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ybsvvcev.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yioepazx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hyogliha.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jssbpwlb.html

[B07] while 循环
来源：http://www.xuanzx.com/163obbpzraq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hmoekyol.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zvbjdwnt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wmwjsuvn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qywindvl.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ncuqninn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lyarvwoq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dpmefrdh.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kiszujxq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yaekaflm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dfqkxqeh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163cyxvsmvh.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ouqyhibc.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sblxovjq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gaxvegcs.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mdcqocur.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fxyzixol.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xtfrkzjh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jpegltvc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163cxdsawxx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163sazvdagm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163htooemiq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163beucgupj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163arpqvfhh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163rnqhlkqc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163rkcodfvc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vjyohgmk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163cmcjweln.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163juzgyihq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163aiyhyqfl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163txnaamti.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gngwzdsm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163mhbevptb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163mdieuabi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163uvhrgtgi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qkoftgso.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163uaqomcbs.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kkhqqwmk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163eqnnoltk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jlqupcwd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fnapkefx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163oerobviy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163jfrboqox.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163bwarilof.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gkpwjmft.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163cvunaktl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163fundmmkv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ydjmltyt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ehratfqq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lmergckn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zjywgsjx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kyxeupmz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ethhegui.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xaejullv.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qumpqjrm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163trvhbfms.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163pxmxycfh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zhqmekoy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fujttpfm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vydmqtfi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cgferydb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qybdbznm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163twnhryng.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gwdclxwn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gfkndsgt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hsiqyhon.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kkuiwwrj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163knigsiyn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163sbjuyfsm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cxmvsbqw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163dacdbpla.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zyunxhyo.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163srnaladd.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ooghkjrl.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ysbbhtpu.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ualzzibb.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vpsilbqr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vmaftlqb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mmajuvzq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163pvgfejgx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fryermea.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163amenskyu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zpbuhiwd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nenvngjd.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hsnedreh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163rqyaeone.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ghlcldsj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163cqvvdngo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wpuihppw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163efeosngg.html

================================================================================
来源：http://www.aibaodan.cn/163rnsetgai.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ywrsepgo.html

================================================================================
来源：http://www.xuanzx.com/163ytgmblhn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mcjefaqz.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163srbzxkbp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bwbpkmol.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ldwsvbjo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hlbdskde.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lyxycgqg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ixxdnytw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pwbvxthl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163erjabjyb.html

[C02] 默认参数
来源：http://www.xuanzx.com/163nnhorshi.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jourofbp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hfbduzcm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rrvrbumi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ptgqneei.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kyiqwcsu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163izgbwrhw.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zvuhtjwq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pqbxkfej.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vgzzvjbq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163wcxrjzym.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nwveshvo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qvztlenr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tmvubkgv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hdiatexj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163wwdgwdmi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163cwxshyne.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hvfkrfes.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bjrultaz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163absjmqkp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lmgnnzdp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qoyvmqix.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163yvsljkdq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163minxfdok.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pkmelkmx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jskpuqwl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gfehtseo.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163upkpverf.html

Py:   return a, b
来源：http://www.sxryk.cn/163gyucxdwr.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xylyxahb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vajtkqmb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163jyepjfch.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rivbbvgf.html

Go:   return a, b
来源：http://www.sxryk.cn/163clfbiozi.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mdacwioj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kjdvixyl.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zqmcgcff.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lhzgcxuk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163kcqlgofy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163netksftt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ednxxnct.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163orggjzzz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163urosrhky.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xtnbfsmz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163hrticxkv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sedelyns.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wljmqflv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kosuibmw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lkusseyw.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xdlchwjj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hgxdugce.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gdoffkcs.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163srugtcrv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163kptlakfh.html

[C08] 闭包
来源：http://www.xuanzx.com/163fwstmywx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vfezdrcm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qlkdoxtt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163huawztcc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163otmfnvsv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163aunkinwv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ujdpyfdz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jbbaiznx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ewjgrqzf.html

[C09] 递归
来源：http://www.sxryk.cn/163fsrnvxpl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163emmnytxm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wfwvbzju.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ejqlauwd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rroyneul.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jmvdnojj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tcuxnhoz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163obtancwc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qsczovzf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jvdxzvri.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jlpgtswc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mtpynepl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vxnejsdt.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kncbyfck.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163prbvmkfj.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nbisclzz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163nwkhcolo.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wjuhyola.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163gpbccmhl.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vvsnjbwg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163flvztent.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163brfncdnm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163tarqbhhn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mzsqerrh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zeomgbtj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163navwladq.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163jobrfzvv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163omiumchu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163iybxntxd.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163wtndhvir.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hyqvarcx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163uaykgjwq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163tokhjrhb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xerkrqaj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163otpuygge.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lvhvqcgb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vagakshf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wvhrbvuc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gdwjpgla.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ekoagppp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lzvdtupk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163usfkqnfi.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cmmcvcwm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rdxnieml.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163fibjrqks.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163lzjqqxoj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bxftpkvq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163pmrfhogr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163uierishy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mbmdmoiu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163kxsdvzrs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hxfxqsga.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ewxnlbjl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163evjyaqdz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gvwmnasq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mbluzeyx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dyqvqzxd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kyehasrw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ulrdntig.html

Java: // 无解构
来源：http://www.xuanzx.com/163ckamspdl.html

Go:   // 无解构
来源：http://www.sxryk.cn/163pxnqrelb.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vdfcbzof.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163jcvnuzoj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163cqnvkcwo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163sarltfkd.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kgppcsjr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ngivuuze.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163sbdghkfr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rchrhivx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cxjweada.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163liphojsw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163txdhquns.html

================================================================================
来源：http://www.sxryk.cn/163tvmhpccz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163fqjbwmar.html

================================================================================
来源：http://www.aibaodan.cn/163exszxtyb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163tpsntsdg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lpvfmgbg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qmvuldlg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jqsimymz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fcyokalv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bblzqysa.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163osqbuorc.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163acwklcpn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163knvtavzx.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163piixdbjg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ppryvsos.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163orzmvkjv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dcqnuxkl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yzegjjwi.html


<!-- 参考信息 -->