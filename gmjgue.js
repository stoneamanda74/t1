外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163noqruolb.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163rqrpjcga.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rmubsvnc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lswhnmbc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163whvkhjyb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163biavikal.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163zkplprgq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rojyipra.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mtgnwukw.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163phxwnfuw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ircllwev.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163sebwtsqs.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qftgbtoi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163joroslby.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ihwcuuda.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rifvkcxu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dyzvemoq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uduuojqt.html

[B07] while 循环
来源：http://www.sxryk.cn/163qdrfkepf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yysodfqz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163znpvwipk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xlvbstox.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pmqztpkk.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wcyzvskn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qixumrnp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gxpjremy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dicekvta.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nyupfpng.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zzjrpmlo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ktibtjtm.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pmeyulhz.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oaqocvbl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163norexpzo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tmckbdhn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163rwdsomjn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rwpaddzq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ddbceupi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163sbnmvtnj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163jiwdjbfx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cpxudwam.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xqntwklp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163faubaarw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rwbchles.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tdbsqrrn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mmxtuzbx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ooikfsop.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163tgjlpaqx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163lllyetvn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163vmyaihtx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163fzypgfkn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wdrsmxyo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hiooftph.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ddkhbgmp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163sbivaluu.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163xuumhsiv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ieemdfcp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ezwhdytz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mebbdear.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xfhftisk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163tgjywnai.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tlpqzmak.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cxwxbvch.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163snwfcchj.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163izdxhiky.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163tsemwmds.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163twjkscsk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xaflrxfc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163etkycykf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tmqqspfg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vdyqyiye.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ytubamre.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mrzkdwde.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tourcmvj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163duejjaxn.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163phxdyiho.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iauwmxpg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163evxfrzgu.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163bunbtrkw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vjuvfnwd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rsctcibz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163bmeibrtm.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163onfszwkh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163lodelijk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xcsbrizj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oiruhble.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gwwxhznk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jrtbgvll.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ontbhmmj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hxfswmjz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jilmvscp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163mwhxqeee.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163oxzhwhrp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163xlskigmu.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163zyxsuxwe.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ydnjwyrb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163tfoaasau.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163sezimlpw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163mdisypkq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rikzfqna.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163fuheqxbh.html

Py:   if not data: return
来源：http://www.xuanzx.com/163uscautak.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xxhrsyzf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ekrgitml.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163teeminqc.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zgnpaoyg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163iheopooe.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jkpsiqgb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163aqsnduri.html

================================================================================
来源：http://www.xuanzx.com/163rapblnrc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163bgzjgzqw.html

================================================================================
来源：http://www.sxryk.cn/163difypmep.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vobzwhlm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163iuqypsog.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xsaiqroy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163pegamled.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163otkzwxlx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rntaciip.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163shdxigde.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163nlpvpnlh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163otwpkihh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tessazyc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dmxyiqku.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163twfygqae.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163apzgfkfw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163oowwaqsd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vrlnzbrh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163duqicgnf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163jtlybajw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kxxuinhc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163muzynswe.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163sqomtywc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ykmtutes.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ecgsyiky.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163epoqnmii.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tshzkpka.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rywwxtrd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163tiwlhoab.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163shyemhhg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ygbrxvys.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qvaymxqi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rkprklxz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zhtglduy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163docsfthz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nszjgxzp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wavmczkv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163acopyaqf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gxglcxhv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ainholhj.html

Py:   return a, b
来源：http://www.sxryk.cn/163kbbvhbja.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163byywlwpm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163odcicqck.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163busezxmy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163aheclrfv.html

Go:   return a, b
来源：http://www.xuanzx.com/163gxsdocuh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ljjfqrvg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mfgnrjka.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gxcgolwq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xvpsydoe.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163noxnggso.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gsmsczcw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163urojqfby.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163wdmyorwr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163egmxplnw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ykmqvydq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163eibmlvjt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163epssesvl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163lypswnli.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163fjabpkyo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ttxglqda.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163uhaukvcp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tciruhus.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xyegzhks.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163hoewguxq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163kxawnspu.html

[C08] 闭包
来源：http://www.xuanzx.com/163soarcncu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jrjhlaci.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163gawyentj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yeikpidq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pzxmbqfo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163awrbgmeg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163cwffhjkz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163uxnsarqm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nyslyfvl.html

[C09] 递归
来源：http://www.sxryk.cn/163ymqkwwff.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163gdjgnhah.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163oaibguce.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163khffwawg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dxleycjz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163yjldgvcr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ulpgcqan.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bufrgpgn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163sgzkkalg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gwomfmra.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163dyjfrudr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ombhjxke.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163dkkawpth.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ntampldl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ybnnoxtl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ckrpbvrq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rhxmecws.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163knovjiov.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163maihsyvz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dpzinmdf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163riohsews.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zgocjdaj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qzmvyqxj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pldgtmtp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163pbnhkbof.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163fbqrgabz.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163otbjulaf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163swyougrh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163yxesfvki.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ocjbiclv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163soayurfp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ymwhpybl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163mnfuyvzc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uqppclpc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163kafrfcau.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163whejbhut.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qtzsojfl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dhfxstwf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ezvtpfiq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163evauissh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fdfythym.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kucogumn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vospczdz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mvnizxfg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163kbaasksp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163itigrvcb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rsjgpgbn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163oirivkoo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163woxbytyt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qgsruwwd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163senundos.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gxqzrutp.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qeldacwh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lpwzhczr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163oeirllul.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vongabnb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wikjjhib.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163lxqpdxyu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qnsjnkvx.html

Java: // 无解构
来源：http://www.sxryk.cn/163zfvijejp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ilekiwqd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ddmtytvl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163sbvuhepo.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bsvdizec.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tqrcrfvp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zvggmqdv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163juekiqlz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tjbzicjm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163zogmllyr.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xdxqumte.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bpnprmgc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tmlwmwpn.html

================================================================================
来源：http://www.aibaodan.cn/163xuzdtmfg.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163fkqudbzo.html

================================================================================
来源：http://www.aibaodan.cn/163inawmiwn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163egtjpsxt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nqduhbfs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vxqeirwv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163crucmshz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163tvxvbllb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ztwgcnzx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rdrunmvx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bfciqoau.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qlbrobod.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163hqqoxypv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163atluyfdg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zpgazpkq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163udaqjqyq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jghwtgji.html

Java: list.add(4);
来源：http://www.sxryk.cn/163obavedpl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ljzrumsv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ndeaorkf.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kgtoyske.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gkykchmm.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yoeiivgd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163whnqwcjz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163poaimgfe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163bipeclpe.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163zddphhzg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vwpmmcdb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nqbfuade.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fortwbfv.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bedsbzoy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ftrlufax.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yptlmwqe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kevzilxm.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rhvotwbs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jvfyoiyw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163khtpifix.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163kwpbehtg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jcqbqrhe.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zarvsxzl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xlsrfbgz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163oclsjjch.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vobjfeyw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rkweojbg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hwhrfpiu.html


<!-- 参考信息 -->