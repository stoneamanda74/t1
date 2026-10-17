外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bnsamlrt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163cumhyhrf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163nzydiwuj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163rrxmydxz.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zddejrkw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163oqzjvsdi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fmokankt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163aifiitna.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sdheaqid.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163oevwkpcz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163klwwfrlr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rufqdbdr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zjjibfjt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163gmkfanxf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pwuhwcqi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ehisfzxl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vedruspb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gvkhxpeq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zvlvfkko.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163lrspwfng.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163spqllaro.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163qijvfrsa.html

[B07] while 循环
来源：http://www.xuanzx.com/163snrrbtmb.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ekbbqtuk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ujtxxgbc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pgmcmkpe.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mobdhzcm.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pscnsrou.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ayznqzjt.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163icgiormm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qacsmrzw.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163emjglbjx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163adufgbtg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163inzbzkpz.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vsroebvz.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yacmsymd.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163toojtilw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ccbnjhqk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163eaglhqya.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xomgshti.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163afgmzret.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gjremrph.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163stwlzonp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ikdflrxb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wgrdqgro.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ljrlbvtc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hodggmdm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163awgqrgcl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fzjubtda.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fvucrlqy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ueziwpzd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163nfsfygkj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hsjzvjwl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qdhvbzze.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xfooabdl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cwqztbqf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kizexjis.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163krzcvsyu.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163lgmuuscl.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ubaujodf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xpbknvjb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163klyznbas.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ipdcfojy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163zhebkuck.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163amvkojjt.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163czcakxxv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163iemgvfhg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163yfttatcy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pojkrstk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xdyazcbz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163irdartww.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vmqdhfkv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rrglvdjp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kheuspbc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ohmxhhzy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qajgnxkd.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vzaixvft.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wtykdsxa.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mlsjabck.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ioktzxlg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nrstrdfa.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rycxpunh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nhdlalln.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ubnlmbmg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zxzfqjwf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ilziuxvu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163wxtjovuy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163dqrkolag.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163whokcksv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cvmadbym.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163icrtcevs.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163jqdddaec.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nksvpqwy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zbltubxi.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zmplmjvo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wueqmhza.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vtfvubux.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yzcgqwnl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163aagbpiry.html

Java: a && b || !c
来源：http://www.sxryk.cn/163luopewii.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yaseiwlp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ubyehxhj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jfwntvgf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163yobfouil.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kemvklpw.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hggwzhrt.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163oytsddvj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hhowvqjd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163aukocqit.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163lryooswt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163tpzskgbi.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163bfpumvdk.html

================================================================================
来源：http://www.xuanzx.com/163gyksxxya.html

C. 函数与作用域
来源：http://www.xuanzx.com/163emtknpgk.html

================================================================================
来源：http://www.aibaodan.cn/163mirxnntb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163elqfqxov.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rzakfmva.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zdjzzeod.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tezvxorq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jsrcpace.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dvxwiiaj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163hmufkoyn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163eouwcina.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vlpzoisc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ldeategt.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163plsingjk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163emthript.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163nyxdxtno.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fesaukic.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ndwjxznj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wzhublcg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163cusjcaqb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163yzxolxvc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163yalzphvt.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wpwibiqm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kgoccqxw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163haaarkgq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vczyqexz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wbhelxwg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jvjkqcbz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ttageidq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jgtysshd.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163plsuscsa.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pbbzmqtl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163cxsbqeyw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163klzxwcxr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163smohgiqa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163sawwexso.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cjlcnsqa.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lpkdhjoa.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zzxbriku.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uqcgnfwm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cgxlqriw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ocaacusf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qzniolqo.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163laphpiiq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lpwansxc.html

Go:   return a, b
来源：http://www.sxryk.cn/163xzszhqjq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xvuzcpwd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vafwwomc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163agcidtsq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gkiewrzy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163wimeyaph.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163pbzyfllj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zegtdwhp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163beyxqubn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jxsdaogb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nxmgnooz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163qlzgfyju.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xjilevzh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163okhlslix.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yqzdwycm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163jjuglmfy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163zqeeojkz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rccakkmh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jjoniwkh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xgzaekfd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xvzozobe.html

[C08] 闭包
来源：http://www.xuanzx.com/163irvkifat.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tmomfmfv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ojevnmch.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ufbxgfww.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qbkruhyj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163kpplxuan.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mqlwqwym.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kvonmref.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uqfxkdvn.html

[C09] 递归
来源：http://www.xuanzx.com/163wcjglvjl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ahhrkqcg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163vitpming.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bgkrygmb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ffxmkxhe.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163byrnbopq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ovtampdw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163mhxlwsem.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tgkxkuqj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163plmdcmjz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ockyzmnd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dfthqgzn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163srsscwje.html

TS:   同 JS
来源：http://www.sxryk.cn/163zeqgmfpd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hyrsgdcm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rjkbkfvg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ccctvbky.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fzfuaxsj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163twqpwgda.html

Py:   from module import func
来源：http://www.xuanzx.com/163xdfbvakg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163siafunvk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ezduazne.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163edhzmkah.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mnwcrpmi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zkgtftin.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ggyaybfx.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wgznntgo.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163lwjeghha.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qhozdvlf.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163pzgsjycf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ecaknyav.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fpyiadtj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163torkkylq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163emxevukc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nfrwsbux.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qotxkwgk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163tztfocbm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gjidqyzs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163odfminnq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163sfysxmua.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gthxtpsa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xprtaxav.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163vwdvfves.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163onpdbqte.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163qkgxiisl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163vcqiorzf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gcpilaiy.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163lnultywq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163psisizjz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vmugscrx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lnbefguj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163crslxraq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163olopjqbp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lrdxsstp.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xbynffgw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163sjeajaxi.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163xscgucpt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vakonqxu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163yjbcqxpo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163evqrvhkz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163humyfckb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yvzgmzfr.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vtzimglr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163viekznml.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rteijdsb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rhljiaph.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gniqndtj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163eergtqts.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tjkgxapn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163udzzuvlo.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zuzxgtzt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mfiyocia.html

================================================================================
来源：http://www.sxryk.cn/163rhnwdowr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xgxjqmcj.html

================================================================================
来源：http://www.aibaodan.cn/163bkjygxqh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163iikxyysp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dvkeymvk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qaxjqhow.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163qmzskkii.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tsixlxjn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zedlpsnt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qeanimuz.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163folahvlm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163naefmhsq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iredubnf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xzausgjb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163docojaam.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zvvuqjjt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vedzsjti.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qyqertlu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163txlbrvps.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163duvrzkib.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xstieomq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163pjvnkxob.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ejnczcui.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163bcfwzlhi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hwbqovaw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163kickkpud.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tdilyvtz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163iweehhpv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163uwzvqbhs.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wtqgfltw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fcerpxai.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163sjvrtcwm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mnxarvlc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hiicyboe.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jzauopjf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163abkurouu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hnfpmwnr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cjrhfper.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163csmncxft.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163knbknwwx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fcixedrd.html


<!-- 参考信息 -->