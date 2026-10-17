外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hxeywmax.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ksgqnvur.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wtrphauh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kigdnguc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fwujlgpf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163biadkkvm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fbyzecsm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163eoiljeyg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163gjtjwqtn.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ywbxtugm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163vyoinxlq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vkxhlywm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gikxbcgn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ullsuovt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163tswqxqht.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gerihglo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uwjgxhfi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163kvhwpcui.html

[B07] while 循环
来源：http://www.sxryk.cn/163aczpznur.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163afdzkaax.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hwtydlmj.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163diafijri.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hphalpxq.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sgnyrwxh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xrrialbl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rinrrglh.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163unzrjlkd.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163thlhlzkz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mzqpoifo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163rrixarai.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gexgjhgc.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sidhmksu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rhrxxjei.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xcywlftm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dfdsqnlw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pirrxsge.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163kjsbnqiq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gocotjcd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hlhyzzrf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bfgcvciv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zewrdqrg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jqatccrr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163edplnxkx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bvvvdjvf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bjsmxzgf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qilplqqv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vcdvmayj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cynrmzlt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nkmsajqs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cwzowvgm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163whzorxfy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ymiulmzn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dhtrendy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163fgsruogw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163siqdmwdb.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fpwohrxp.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163kwgcxuzh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xsmkdeft.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fuqkpsaq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163jzxfzeli.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163kanfohrq.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fmudhhzn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ygpcuayy.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163xidyodvh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163amlmlehe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bevlzczs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lkrngfrn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rizefaiv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pkzcckca.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163izuypdaw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zwjjqfku.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163cjxcnehc.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fxwavxtp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163cizncrcg.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cbkduekh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163idnyvcsu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163unqivbba.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zysgmlis.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mbshvqir.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163yzreifgu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zkmsbscm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163nxftsncd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hsuxwnui.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163kuvuqwrx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jqojrhhm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jgylimfh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rhwvoihl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hfwzmyyt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ttlommfm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163iocgzgwq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zjdbauup.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163pkwhbsfa.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xonwiktx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163iackcvko.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kdimqrqd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fdecdfit.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dwgpzvrc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ceivmohn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163izshenur.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ozucrrhx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163zxkidlfl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163dnmhfzgu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cwewtyfc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qfgoyfaj.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ctyddhed.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bfakeslm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163nosfbqey.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163kixrovqv.html

================================================================================
来源：http://www.xuanzx.com/163toyhufuy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jjdckanf.html

================================================================================
来源：http://www.sxryk.cn/163lopolrts.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vgcupuii.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163cwemqwvs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oqjirgyv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163iueguldg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mqnhfkpo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gxdgjbbf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jxittuqb.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xifgqjlh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fsruzdbh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zzbxjtfz.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wgnnnnfp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163kqogvisu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163qfldnndr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163zuxizqlk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163bxcibycb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163methlspr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dafdeueu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nhglysls.html

[C03] 可变参数
来源：http://www.xuanzx.com/163jlkqhipu.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163yyuzufsz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dvxwbizu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163reqikikf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163shxqagvh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ixcgnbgv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163clodfubm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ubsstidj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nzwejqte.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163xdsqwvtz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yekhnwwd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163hldxvylk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nuxahhhu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zymznkxq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ensoiknn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ohkmcjyf.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aebdcbcz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vqblahlq.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163gysbagev.html

Py:   return a, b
来源：http://www.aibaodan.cn/163sapihrgk.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ryapxhcr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vrwvsycb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163uzanycih.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nyfqhypm.html

Go:   return a, b
来源：http://www.sxryk.cn/163iuqhporc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hyghmjcm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163igxkghpv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fquqkfbi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cclhidmk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yteammgc.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163wyzivrnp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163srkhqkdq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163sfpotytv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cbkdiawx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163bocbtazd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mevapugc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163lmxdfqyd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163lkyodnlj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ubixeutk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163peyrclrr.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163sqxsbmds.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ppreyvto.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wjfnisvs.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ptuljoho.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163efyuqzpm.html

[C08] 闭包
来源：http://www.xuanzx.com/163crfvuvyv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gjbdsbij.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jwwemhyp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kwembbap.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xllfmbnk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163htfcvjxy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163pnwugemd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163krcbmjax.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hvrotweo.html

[C09] 递归
来源：http://www.aibaodan.cn/163popxduxs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ysoepyvs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163nuccoldb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dtdrilvz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sndezohk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163blssyulg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jilcxayx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163vzuzwzro.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163pzvwjxco.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ylbiptcn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163cgnomqjk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xoczdgcn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ncarkjwy.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cvepoehm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163sklkiepi.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163uehikdkq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163btjxituz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qwkmxwfn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bhmpazor.html

Py:   from module import func
来源：http://www.xuanzx.com/163yatumvof.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jtugrkeu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fjnomxer.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163nfivqcxm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gnzhmeed.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xconczcd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mxdgwfio.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163igtflsbz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163gyklawli.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163psfdntjw.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zlnbpsmr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163sicfgwfb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163txckdqdl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163folcplal.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ddjptjhb.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zztlauhz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tgymmyqu.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163zgkqccpv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nbfeqdvk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163swwfyamd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163fwelwydl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mhnikfcu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zbrolhyy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zbctuurn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163qlniaxvw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xlazsptm.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163gulcoyxm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rlnkrwcn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rtrtaebk.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xxhsxzmy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163jtfttktr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cnqduhmk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163hronuesb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163lroznyzz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163atytkjag.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rraxthqo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dxeojbev.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163adcdiwfc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bccfyqim.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nhaaaxok.html

Java: // 无解构
来源：http://www.sxryk.cn/163ymphuflm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dzgyyfwq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bvgufiff.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163sctqzgzr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qfuuxxnd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nqerahnq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xrnjijuz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kooxvucj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163hvnpvbvn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ajzvzotu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jiavpuwx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ivyhhfvz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163iefubldc.html

================================================================================
来源：http://www.sxryk.cn/163iupaxtda.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163prrzfvrv.html

================================================================================
来源：http://www.sxryk.cn/163optfbtua.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163emrklppz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hsuapygc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pvlibrdx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163nthavzke.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qtffhydy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163vgvoqhpv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mijmtetu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nquttjpf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163enqfkowk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163cmzayahm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hhykdxif.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163yazkuahb.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163oaxcunht.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163aubtpzho.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zpzuehqo.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jfvmjuvp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hovtjsix.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qmelduwb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163sggrvqqd.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vlhyfsdc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ickpvqgj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163aqwpvlhx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ogknlffk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lbaikvzz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163tvhmvszu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163aedwponx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163clcpejqr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xbrtgcaz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vfslidbi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pdrwjeqp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163aieavaco.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lblsjlqf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163totdijmk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xidynqmc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163eyfwitob.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163emkcjxan.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163herugkpl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hznusvxx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163czdjgwbr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mtfvrimp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163uppbwkcw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163esqsyrsx.html


<!-- 参考信息 -->