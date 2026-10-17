外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rkqfosrv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163xnnkixoi.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163kgowpmtn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163wuxtjakt.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vcaeasfd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163uveeqcwv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163brzmobwy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pksbrqua.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hyhdinoy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163gzwcpnwz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jhfwcfoe.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163djajycrl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lhmgqpfk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ccltcwxc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163savuicdu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163twgwvevk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yatzlefk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163iliggioa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gdylkqxe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163hsiwezue.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163kwsqxbir.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163gsvfhpjq.html

[B07] while 循环
来源：http://www.sxryk.cn/163oawkwise.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xrrrgpbf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bgbnoufs.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wxjcgjsd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zaonrqwj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163etdpjcas.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163bzuyunqg.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dinpecgf.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vhsbangh.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jeselilf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163elylnysk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dvdnlgic.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mgormgqz.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ntndwzza.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ooszptqm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163dtukdxwg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fcabebso.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qvryknra.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163pkniwchx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163icxivyzd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163gnskfzwe.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xiohlsew.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pjwqcfbw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ltnaoagg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163femmpnlw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lijckzbr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qivlumet.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yigngdqh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163lgxzzjli.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163fuzaksaa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163otyonosx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163tmlqjwwn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163khscikhb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163talkqrbz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163zqoikqtf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163vjrymozf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ydjzlbmj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fojpkmjr.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ltxqsyeo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nvksecgr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qdcpruzp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dblidwuk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tpgeltcz.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xrfsfzmq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163rilllqou.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lcfqnlki.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163bfmixkwd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dvnrmjqc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xmdhzezu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ppuhhvbf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dhorxgql.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wrbtvtpc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163yqggalat.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ypimyfev.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163jvcarrck.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163urawexxl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qxregeat.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ppudzhvx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163azaifesl.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163yqzwwkzu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mnhqdhww.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vynxojdb.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163lzserenh.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163llbmmzrr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163qgfqjedc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163lnfszkih.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163esqkzfyz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163woesettw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nhnnairm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163dxhbieit.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163roljtijs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bdxhkvhd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ripmsjsz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wnnlammp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fzvlbwbm.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163srncdzrj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jalamfcy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pbwzdqne.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ahinytth.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163arxyhvuy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163uicipkrd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mvwbhlxh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xitxsfsv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163qzvecovp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zeidrxbz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zvzcparz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163weoujmbl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wmhqywrx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kjacwphn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163oadhngzg.html

================================================================================
来源：http://www.xuanzx.com/163fndxuwyf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wymzaeph.html

================================================================================
来源：http://www.xuanzx.com/163lzbayqhy.html

[C01] 定义函数
来源：http://www.sxryk.cn/163wzeljiqv.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tggzasaz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ocpdgupw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163euoztfqv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163muatcwpt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vtouxiud.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zhzqfbyl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163twmjxtfv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lvxnpwie.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gltwumil.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163sunoztpb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163rmgsowin.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hokrlzsd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bxuwlwyv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kxuiapcd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163emfecshv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wsnhgbtu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163fskhsxuc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163erpbouse.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rmwooesm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163brazuyqt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xztzcear.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dtgejdyf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qvkemifw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163skvkgiax.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163gfukcxhx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163yzqlszor.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163denxudnq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hudparyb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163abaapczs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163himmhnun.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nzpfuvny.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163smewwnqh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zkphtsah.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vmizdprn.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zicvegdf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ljdygttq.html

Py:   return a, b
来源：http://www.sxryk.cn/163jxdphfsg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wutwgqfb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163tojdbrkc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kjmfrcat.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bffxylqv.html

Go:   return a, b
来源：http://www.sxryk.cn/163rrcloijo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163goeklnuo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163imvlwxou.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wxjnhwsr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wyasocwv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ydjqeoxp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tdpyhslt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163uasiyuzt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163oaogjnct.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ayfqjiqp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qqvbauwi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qbnnxkfk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163oruajhnv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163lrjpttob.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163kisqpozj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qszhhrqs.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dukopjfl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xzeovtce.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163smntqrjy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ufdlnbgb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rfphpfmd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163hjmfyhgc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vzadjykd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cteccxse.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bnaxvddl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dszmqjit.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163huyotihf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ymgdggfo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rajjbhxe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163myplpwcd.html

[C09] 递归
来源：http://www.sxryk.cn/163znzandry.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fptwcadx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hxhsplns.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zoicdolr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163acamhxbz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163usllzwdw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163imullpbg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qokejkkq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ygrpujyx.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pvtycjyo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163egebhruf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xomwrjfw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163sqdsigvn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fccbjwzp.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163iermpwhb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ywisfudt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rqxwmdnh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163wsnsyzxf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163jfnyyrkr.html

Py:   from module import func
来源：http://www.xuanzx.com/163oyuxzvuh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wmkcrwad.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pybunmej.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163imoeepqh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163apbtlrde.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fgqllwjt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163oqknremd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zwzooyez.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nrsxlxqu.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163cnozcbtg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163sdtdaxev.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fbhnqogn.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zcnmohwt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ujthtfrs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jkbyofkm.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yabqbkzu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fpwmrlsf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cpcowzrc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rkwknhbh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vryjdblx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bjvpxayv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lthtovmo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163danxgpcg.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163mjrwfuql.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163yvlyajof.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rkfllhsn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kjhctewd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qpegeoke.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163onlvpltm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zvuqasva.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163numqemru.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163epiijkjy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qrmnsgqx.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ivojruon.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fgxkkynh.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jfxqahud.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nfaktoui.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mcedulli.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lahbgpyk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163cjupszpk.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kqbbeblq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lcdslzew.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mzpvdlmu.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163igclfqww.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ijynasuj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163uqvbucab.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ooxmwpjg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hfeqttns.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xdeiycku.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163spslwlrr.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xdsvtbqv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rbpordxy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hrldwnuq.html

================================================================================
来源：http://www.aibaodan.cn/163pfkzjckz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ppkridme.html

================================================================================
来源：http://www.sxryk.cn/163csnbacbc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163nzqoiowj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ifhhnhok.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163pozpphbh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163swhqwbbc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163egpcvfeo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163npipzpbu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rlqbqdtg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xmrutkid.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163cnszzvxb.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163rhkdpsan.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163thoktuvd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vahnwswm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xtxheobj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163uwttlwqc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nvtjpqvq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163wjezxhrb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pphmpvjx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163frhsbftz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kqpehvhi.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zyrsudln.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mplsipar.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163oxbbyycz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163apaqbyrh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163pftawzsc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163mncmwjac.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jxfegvsg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bjapuipl.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tsnlstqp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163iashajkd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163gmgbqawt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163wxmcynux.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tgxcugca.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163phrswfmd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163uisrbwks.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qehxpfwg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163aspqshkt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163yodbdidg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ryhtgpoj.html


<!-- 参考信息 -->