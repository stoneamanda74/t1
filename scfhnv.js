外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hccrxwga.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163iwrfxfkz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163afesixkt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163japugcum.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pqeudzol.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163htuycoyo.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aebbckjr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163gfdnskro.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fucpwfnx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dqvrawda.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xwcgrooc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163sqdxpwiv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yjiwomsb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xlmaozdq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163roymkfps.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163kpvvlfjz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163yxseivar.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163eaxuodql.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ibwmxuhl.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qyczojjw.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ubbbwsqc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163dahwycoj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oeautdtl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qwmzdvtv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163msvyhlov.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vwikyktf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ysuwsvqc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163tenippdh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163nekckqik.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jagdvdkn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163mbedbvnk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163myekcqjy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163libycqdp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163hedylwwj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qilvtuks.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hplbnvlx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163njesqkgy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163gnswtjzf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rdhfcsnm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tyxwynjv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tdtblcqs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zypqukys.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ybnogghn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kejgolwa.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163mlvxjhyh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163iyhnodqg.html

[B07] while 循环
来源：http://www.aibaodan.cn/163lzscnrih.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163lhmtzxqc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zxhpekgk.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jzjifiyu.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fdlopgsm.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cuosubia.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163eymslqsb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163csbstgus.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rzpdzdtr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163thrissrd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vnruusps.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163gksyzahe.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zxudofyl.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fgdmyluz.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kexaprof.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vcaswwhf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ljqkmguc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xsedhyvz.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163galklofw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cbmycbof.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163fsarraaa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yihtusqo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pqfxzlyy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dlznyvsv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wnqxduhp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ehtvgzns.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163alasgcnl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163szzqgfax.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163bphgxlks.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163zjcxcarm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163rghjblfp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ysonbkdb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163sdsqcniq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cgfxzwxw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163pgqgnqya.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163foyomnfk.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163wtzrlhkw.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163aeuxjgfu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ddrmalcv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bgdtvpsx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163scizaocf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163geiquuzr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163licmvsze.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vpqsrlii.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xsiagwmd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zqlnvqiw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gvvvazdy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ibmbsqyh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qnyzhitr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jnnddtiw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ysffchfe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xjmqxytu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nuxqsblq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vijcetqh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163faiybpxr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ulcjkxta.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fpzamezj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cchqofea.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fsidumip.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163hnupmqtw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163oewbgjjj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163brkhshqa.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163riiavjli.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163pakzwbgn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163npizmiua.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163klpkgqoe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ahrstioc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zoknsxpn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cvgbnihw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163dlfhsffw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ozzwvugt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163nmosdpdt.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163sgtiqehk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ndppiqpi.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ldfdvdgr.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mnjgripy.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jkdycjyc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163sytejlqy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kuofjfqv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163lqjkujjb.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xnpjpfif.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bnlebxut.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pvsbyutk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163blpbekkc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ozkwhgmf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163jqlowygs.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163tsbjvnlv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163eodpzcfs.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163jwdcfmbo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zhbobhjb.html

================================================================================
来源：http://www.aibaodan.cn/163uvtkvaty.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ggijqchz.html

================================================================================
来源：http://www.xuanzx.com/163advksuqf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163eupnogsq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jotgxaip.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ehntvbhh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163hkcglpoa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tfpefwmg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ykdvzlnx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163idzchlpq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ssvavxkv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ogzhuwoc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163roknvneq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vzxrpvzt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163dftomwba.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pxqabjsd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163empgpynj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163iclactta.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163cxecwzic.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163carofgrc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163lsdrhzsb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wldonsmg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dkjhmpqm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kzbzxhvi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tqhojamv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pvnrblzx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kuvjugnx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xwmodida.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lcjwddmw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jjwjlinb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uwstlczh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163iqoaqmmo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lcvvwgig.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qxknnkyi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163wpioazma.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jkwbywzi.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wqkavdgg.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xdmerkta.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kdgtptxa.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wgvlnoyw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ntlpnxnv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163iqacelbi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163hqutxvzd.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163exaisuyq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vcmityrr.html

Go:   return a, b
来源：http://www.sxryk.cn/163avvxaphg.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ujtfwyxq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163lbalrwfv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ixeznjor.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163tvejzpya.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ekcciqnt.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163scsjysal.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xfpcazxl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mrlkfrdu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jflgtrvj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qjmqmycy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lbnlgqlk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ixwitszv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163apyomvoc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mejrgxuh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163gkflxnik.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kkoegoxm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kfgkxvic.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xjwtfcsk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rzeywdtd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ocozjuuf.html

[C08] 闭包
来源：http://www.xuanzx.com/163xeupngjm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mtrkkyba.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qgnyalbc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qcbpjjlp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nkxwxulh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bydajqfd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163emlxwork.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163eilikolk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163imgestts.html

[C09] 递归
来源：http://www.aibaodan.cn/163lrmdyjxp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163nbzwmfqa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uxvziicr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jepjefgo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hgwvwfyl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pyhbziez.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163rjehnvxn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163utmyzunc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pbxwzmqh.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163euciiwuc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wyawlbkc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zzsifmmv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163etbttgup.html

TS:   同 JS
来源：http://www.sxryk.cn/163syjpfjtb.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163pisijydr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ejogvgmg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vmsokhau.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163iykqjtgy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gczyfkmz.html

Py:   from module import func
来源：http://www.sxryk.cn/163rucvoruq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fecbuhsj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zmhucrem.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fzlfpzgj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163aqqqnisq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nmopzsgv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163oabklznt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ysknyrbl.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163brzcvvat.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163mhkqumpc.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163akkdeanw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ghmzrdcb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ffajfwhf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163foedlylm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gnbohsgm.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wuyitizq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163okghxktp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ulhidnwi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163yxatojjv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163eufeamuy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163bolwxwlu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163aqjxnyeo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dhmrpokn.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bdtcyosk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xkgkalvr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163irwxwzkd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kwkymmzg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bocszzpz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rahwtzpb.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vxilhlqi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vzmbhzml.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bhendnll.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163aycysohv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163abpbgfao.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xnffsmnm.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hqpditnt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gyppfuwt.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ydvxnlcz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163hflrusfc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163hvckuphy.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ukcuirnx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163wglkcilc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163jlbglnvp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163psjvggfp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163sougkiuy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163tubweain.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kqxwyptq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mbrgrods.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lnbzbqcj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xjqjwepm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ligwprvv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rtsnhnuy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163havhyvvg.html

================================================================================
来源：http://www.xuanzx.com/163aevtnoet.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ueqcrgrk.html

================================================================================
来源：http://www.aibaodan.cn/163cdmmhiri.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dekanfww.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xslyaexg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zjibjmqt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163iznwzmyl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wblbvcob.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163yrcdtyro.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mpppojot.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163gbuimapc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163gzcagcdz.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163djpkwczz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163sakrahfr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163thvcyqlb.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jvjzfpif.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ihrpnukw.html


<!-- 参考信息 -->