外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163bgxiyewi.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hgxrqgfu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163lscdfsix.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ptjcjxhc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fhugvngt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jkfufbfv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163iktwpubh.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163uncwoigg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lenqsmiw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163abqwnwyy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163rqngsain.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163cacprcqh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163blabqjan.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hpivumeb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163bbhbkadq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gwrkekqc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163jdomhrim.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163mpprcfnj.html

[B07] while 循环
来源：http://www.sxryk.cn/163urwbatqc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163swlwsshq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vswtvubn.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kzivfyas.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ybdrbvaj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163npnxdsit.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163kthfmqji.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163epikcexv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xjtihlpe.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ekmxupom.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163sfnjvwky.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wbndtlau.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dmsvzksy.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zbddjqrp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163enanigkp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163eognedws.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163dqgzexki.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pnpuwxvf.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zpktknlx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ampmxwbp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163vnonsfib.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cgywboxz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163btzfbfip.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xpgarzvr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163uxsuuwgv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163eppndyza.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hxhdynmc.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163lryjtbtt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hlybnmuj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163chvvtcmg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nyggucod.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163fwuehqud.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mzkmrshr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163xlftyrlg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163fpagrjdm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163qnfusxtv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163onwnrltg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163gycnbmuw.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vszpyhms.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tusaxztf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dcjyalve.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sgwgafqz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hagmqdxv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jnqgrdsa.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163pmevthtg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163dsingoan.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qpfuadbs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ngfvesam.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rrqftvzd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nkmbukah.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nqcilhvz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kmllfyew.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gvycvsvy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163atwiphdg.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zhzpgbpg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vtewchbc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163xncrnynm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163aisoiwno.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yeeqnntw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yqzmkitb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163edtmahwr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jhivertj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163itmisejg.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163vedkqdtn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163orvxueub.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163tjbtifan.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ccphcper.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vspyoete.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kszhnsjj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163unpahyxq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jfqcqbux.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wmpapgcw.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mclnjifw.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163wfalfjjd.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wdrlpgbc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163lqkefaqc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jzdwyilc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xtcxfybb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zbwkvomq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163pohhjceh.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bjiupzug.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163exdzeimn.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163trtmuwyv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cmskreew.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wmelbmjh.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163uwuxajad.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163uxyoitst.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mxjykxhn.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163yfcuzmap.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kerlkisr.html

================================================================================
来源：http://www.sxryk.cn/163lqujbjba.html

C. 函数与作用域
来源：http://www.xuanzx.com/163cjwwrrqw.html

================================================================================
来源：http://www.aibaodan.cn/163aootgejd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163goproyhb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163llthecfk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oudkdyfx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ufdumbnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sfsvhigi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ehnlbdzv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fyzeiful.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nvjatyyk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ahpnxcwi.html

[C02] 默认参数
来源：http://www.xuanzx.com/163njhddfvf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163homvfwkd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163peobpqls.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163telbejxk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163onhpeteb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wysrkdbp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163owwilsbh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163cjlqeiwy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dkenvrhs.html

[C03] 可变参数
来源：http://www.sxryk.cn/163cprffjcy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jogqbrbl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cnwdbtpn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163njbcaeeo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pwbotdha.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163icjwtvel.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ucljwqwe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ysookmef.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163urtfgkxg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dyfpfelh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163sdswxaqf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163peonvckv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ioydpcrz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pynkbhll.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163iyhkgucd.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163iqdphqpi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ghivedjr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yqlajstz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dbpatdap.html

Py:   return a, b
来源：http://www.xuanzx.com/163qgltarky.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fmvazaeg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nhbrjlrx.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163irvkyjyw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163leidbxfj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163etywjrfy.html

Ruby: return a, b
来源：http://www.xuanzx.com/163sjrfknez.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xdoukhug.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bbkvtjfx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ggputkxk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163eossdbtu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163yauhifwz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nomtkevy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163flcozraw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rtozhhbb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ukwhqgmh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ggemnebr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jefwuvga.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163pdtxekzh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163fulxhctq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qzgepdnc.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hccwqyuu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zqymjcgs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qowczfct.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gesqnabw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163edcvjcor.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qhrtttqx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163pihygpaz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wjnhvajh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dqduayht.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uuopirxz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163spotqiwb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ljuwoijn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163vakskafn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mjfsfbda.html

[C09] 递归
来源：http://www.xuanzx.com/163hkdavwiq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jcujuomy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jbtnuaii.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pigsvhlx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kojrkqbf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qglvvslt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ubyodaxw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vtdzercv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163loytoffo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bxforffb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ppafqdsc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ihcsfwkb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163djhkfkds.html

TS:   同 JS
来源：http://www.sxryk.cn/163kysngfxt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163psosrebl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hsefixqi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nsbxwdic.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163sgnitqnt.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ytulnrqe.html

Py:   from module import func
来源：http://www.sxryk.cn/163gxqrjoce.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jrsmgibp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qyxacfki.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gqmiicnh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ymeoyshg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163eiitrggn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ujieifad.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dfdmdkal.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163avtgooxq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kjofbvwu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163migcnico.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lqfgbwws.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yjfhyrjz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rblaogbk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163imrjspyi.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ktbpgoif.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163pbceobbv.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vtwolpiq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163glhbbvgh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163idraqeum.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tlhfpajq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163odfqeqsd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jpfzmusz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mbxlyydd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163qibylfea.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bguudwoj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kpwylmwp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163omzfhrnu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zemcugbu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ttxnjkfg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163isgecefk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163gtedzqjq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163yrfgtpop.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163osxeqhtx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163khobtvxe.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163pkcpmbfe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gcxznhcf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mbrnjiyp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163socmllvt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ndueekek.html

Java: // 无解构
来源：http://www.xuanzx.com/163mbvfywiy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163weiiabcn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bsnwcvhm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gcopevyc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163elrbyfos.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cvzqqxmg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ayubgbgs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ahhdujme.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fovrzvdu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163oncvpxlc.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163afgivwtb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nzaudnwg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dxtjurmh.html

================================================================================
来源：http://www.xuanzx.com/163fkhltlof.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163bnjwrbeo.html

================================================================================
来源：http://www.aibaodan.cn/163yzjoeqqc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163krlorhtt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nxxfpnoa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163iazeefoi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vaxqioiv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163khbueqnq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xzqjkkmh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mfhjxdez.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163itcdjkqd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xietyndi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ocghabkh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163kreljinu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ozoayxeg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aqlhgoiq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163cbofwaxp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zyzyqdsm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163czjoondr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163dphpcqul.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163eeuufssv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mkjvehff.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fnahvnjg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gekuhour.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ixqddshs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pydoevtx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wsluitnt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ygnrrwaq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163eufcvdcc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nntkpbgk.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hdkmqiha.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163borouode.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163prximiba.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kbdbhwpo.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163zhxloiww.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rkigfqgt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bwkcpanj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rwcvfqij.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zcuskdqr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163pvloepef.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kppcxtyu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163okbdzynl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vrkuedzn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163hmudoslf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163faexhwlc.html


<!-- 参考信息 -->