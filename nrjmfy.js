外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pwtukjye.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ybmzwdea.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163nnyrjzcq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mrzsjgcg.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163udahiejf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jpjxwhly.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tvlvqeso.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163iryjxfpb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gopwldsq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zpdytedx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163sudninmn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163keaswbjv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163gtvmvrnq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tzskhcip.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163npywjovs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tjhrvsmq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bxrjrgpy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ogpsihxl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zgaigkyb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gzdhrfeu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163coifapyt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nalcsaxx.html

[B07] while 循环
来源：http://www.sxryk.cn/163qjzjdact.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163gcmohvqd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163mnfqjrdg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uxbqdiqj.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fpmulrau.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163djbpkbkj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qhplsequ.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hrztjbyg.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ivuywxft.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163egxlqxqz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wfqutfby.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163fhhhhama.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ryqkqjlm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qnfavbwf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sojvyizp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jtwnzufd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163pkiodqvr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fflrthjo.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163sdraqymb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rpoipupr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pnhmjqdf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163suqxaibb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sarqsrjs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ajmcmbyq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wkzbvovs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bqaecjrj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lnxbzvgs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wqdvmrea.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163omzsolhe.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hndtvmlx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ovgblywe.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163yozgxrpk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vbxmgego.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jncqcgjv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163efikacpq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ckitqtuo.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kwfgaznj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wgbzgkel.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163beembecx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rsxvnarf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163deentnlj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163uwxktgyp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163lmqtcuek.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bxbdyytu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oxdcbezq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163btpikbol.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163nonpyegi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bqsavklo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eezcbwug.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tgvfagfw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ynxvntpc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163sclwoldz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163xhqsqkui.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163buaoclbw.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dihjclnf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gjvriycm.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vnydwenq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163azexhqtt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163epgnypfq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163tehdfzwn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bihkcqev.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163dzugxoqp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163bqzwzgnf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163odapshxt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kyztsrvs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xnmarjig.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zrcaybzt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kxobqveb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163vjrnboen.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gfgzhard.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dqefgqzl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mlrcgugk.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dkrmsnbk.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aqsdyzox.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ywcgreil.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pjsgetcj.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zzqwbibl.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wpifewwn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zgafrjod.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vvzavsmd.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zbkvqlzl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163rswlmshp.html

Py:   if not data: return
来源：http://www.sxryk.cn/163jqdscfko.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hfmmwnrg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jdpdrohk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163levbvzzz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163osfjytfa.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163gznernol.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ytyshwrl.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163huxcssio.html

================================================================================
来源：http://www.xuanzx.com/163tkolmknb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vvbdfrxt.html

================================================================================
来源：http://www.aibaodan.cn/163qzvggahg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ojeervtl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163iofwqcej.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163trvjqnmc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163trmcotql.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sqnwjqpg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ybbvhljh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ecbpcjax.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qjvmriis.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wepwrjlg.html

[C02] 默认参数
来源：http://www.xuanzx.com/163sobocgel.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163djzxlgep.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163aoqwfsjd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mgrsiiry.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jcsdvrsz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163aqperfbq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hzmylsed.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zrvqpurz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hqglmpdi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163urqkjuni.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163eowqhefk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163tpwkrrxm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sauphfnd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163geyrbsiu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163tcgxojwp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163pwhmpxyq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ydnbcxdz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tlvzizth.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163bcrsmwlv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163wwtobbky.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lueplzsv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163vxaiossi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zgfsykej.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ycjlyral.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ljcctgud.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mcbmamio.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qvxahfbi.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163npizbkjn.html

Py:   return a, b
来源：http://www.xuanzx.com/163lyfjihko.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gdluaoxo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nosrrgzn.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mgbsjhzx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jhvvxuhl.html

Go:   return a, b
来源：http://www.xuanzx.com/163yvpdqdar.html

Ruby: return a, b
来源：http://www.xuanzx.com/163adpdrmxi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kocbbnfw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163oaziymze.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pnzryayp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163vxvvrlxw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ymicboni.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pvatlite.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163qwudljtr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163sqneifju.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163fjlcrdrp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163deqijtvh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163tqyjohvs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tohpqawa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163grzbfskv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163cjqxomdb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ltpxkmol.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163heocgahq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163btgpbifq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mwaiayqy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163lhbgcuke.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kwdptylr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163tkqpvhki.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fpzuoilz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cmpwbtca.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ljuktfhk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163nawrznhi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zhicdcoo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qaldpunf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cszxfkze.html

[C09] 递归
来源：http://www.xuanzx.com/163sevasiit.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163iemtqlho.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lkdnvxkx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qniubbfg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163uovtmsvm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hpcdzzza.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dnjwztri.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ndigongr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vnclfiki.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163kebmwpvj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hbgaeuyu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xrssmnha.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ulregsta.html

TS:   同 JS
来源：http://www.sxryk.cn/163muexurkz.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jfwwmwnh.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gsfsxpmd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lqeknlof.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163osbsqutu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163busyvhkb.html

Py:   from module import func
来源：http://www.xuanzx.com/163chnzvmdl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yeyiekck.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xhrfdmet.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zuufrevn.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jehepbdb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163vzandjzr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163whnxsnpy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ffgdrcgi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163rvqhldrz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163vdmrhdwe.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163lxkwpyvh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163crkhleps.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pwmwnsmd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163jrpatvyk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163jjiptyps.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163imleityk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jeuaruzm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163aihasqrz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ujhkrbwj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nujdiqiz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gzwrjbxe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yasmvsmz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gsrqxfnc.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cyzgtlxu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ljgwvbod.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rpxsgocy.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ifjkkvjc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163nylaquoy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fyrdkwxr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163loqegvsj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ugghkedc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163cvoxgpkn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163obwngwax.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vglwmzqv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163tpctbheo.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163pvmwdpkc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wqqimgev.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163uukxpcyt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tgdsksyp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ecygmvlb.html

Java: // 无解构
来源：http://www.sxryk.cn/163lpchdsth.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kcbgiaeb.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ytotdxrz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163fjrvejqw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163mqkdgjaz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wbuonkbg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zexwcpkz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vzfsijfr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jcmufvys.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163rdtjecsv.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163afiexttp.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zwaewqvq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ocruphrh.html

================================================================================
来源：http://www.xuanzx.com/163xuhpdpvb.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dcrfyucf.html

================================================================================
来源：http://www.aibaodan.cn/163prfidcpu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kekirvvk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163amwfxwuv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rakmwgbb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163synigimt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ammnmddc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mhbteexc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hdrduyxl.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163anaxedag.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163bwmwkkfc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163fnolmmck.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163uzdxhlwg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163bivpfjow.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ijokzqgl.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vtzhgzvo.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ukyaoxms.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ovqmflfq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ocxwdwro.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ktttsfxw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163fttotcem.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wpujdwlg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lnagrllo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xsctwgkv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ryhxjprx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tquptqfa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wfljzreh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163euuzfwql.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fsvgrood.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nqakbloe.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163opnnjumf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ffndpymg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163nxradohw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wjdllthz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bydxkoez.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163wfwfiutb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zbxmezxu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163epjggovi.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nqrzoxoq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163umshqkxk.html


<!-- 参考信息 -->