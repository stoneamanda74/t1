外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kccndpuu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163tnkhoklw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vmccrwxe.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qqeuerho.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ixuxestz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dauiekxo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163cjwwjgxh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uyyjddep.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mbjfdbaw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163puvxuorx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zavmolii.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jkeqjtbe.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163kneghooh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163qtfakntx.html

[B07] while 循环
来源：http://www.xuanzx.com/163fzscyxyr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163lxojmpcw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ihpzamfi.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mynpokgs.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lghiaguj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yylrctlg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163hbnwoydm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ugldtmgu.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163agqxvuvy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163mlodvndg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jwskczkv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163kvbiphnc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gkfvdbmy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qmxvqgph.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tiuxrfjd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tfjyxqja.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163yknadudv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jdmzujzs.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fawrvnnh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163grrbncpl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163sjdyyvkx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163efetnlly.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163shagsggx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uxkbactt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163viyfobdk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jbicnbxi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xgdcihgu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163oyadtsgo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163eqwzirzs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163prgndscb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qpxwjamm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wimomtia.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tdslabwf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vpvumvht.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163yzagaaos.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163iackxair.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163yfeozlgs.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pkehcvoj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163tdofltbs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163avnlxvse.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yqfkzngc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163iryetpsk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rzpekjiv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163bpjfrwnj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tgmrfmsx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vnhnjrlv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163coaerlum.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163avrffrwx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163erfmjuwc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qlszrzak.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vaaqwrwx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nbeqiywj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ymcmusus.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163pwilbewf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wujmmoks.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kjvomtjx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rxwbbjyn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xmxyfomd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vdrfzage.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163dtpgqjmq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fgybxcss.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163yacrthuq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gwousndf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163nlgakvhd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uvtichjm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163bvhcdyow.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163odmcbqts.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mgupspar.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xzbqasoo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163urraswsj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lqvqcchh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wfavhvze.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163htctkjsp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hgwukhou.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163akjdrsgz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ybcyavih.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zjevczfk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163urqikpfb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pdkjcuql.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163regxcdkr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nzqcprsl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cxdzjlug.html

Py:   if not data: return
来源：http://www.sxryk.cn/163eppeharv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mvotqbst.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ehakvfhl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vyppyefk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163lshmaixg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163kdeylygc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163qgwyqyhc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hrklrmen.html

================================================================================
来源：http://www.aibaodan.cn/163unqclcdp.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ygtaijsh.html

================================================================================
来源：http://www.aibaodan.cn/163tjvrqetp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ihyqymoy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tqbsohiv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ykdrkhje.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163solsxdge.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hlbuqwbs.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sikcltla.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vljxgats.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163oxptbxje.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163otetsgtb.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rjmuhvnx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dunfdgvj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lqkvxgjy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163trpyedhv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sjzyxeal.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fpfxqfhn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lhwoeuof.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163tuvsqnus.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163yuinpizh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ogepngaz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lintmjmn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nzdytxba.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vrzbcqiy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lwcpozyd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rzczbcxv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cljfzbso.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wbqcvkkm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163smlrdrlz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wituxzbq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163uqasdxnw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163iffrzdls.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wzvpgqhn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pmftkoci.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163uwlrmgkw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163jkrcefox.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dnvcfjcc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pianvany.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163frtmavin.html

Py:   return a, b
来源：http://www.xuanzx.com/163mwmbfwvf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ybxoeenw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xhxpybli.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vkbbvmdu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163sdrlxzca.html

Go:   return a, b
来源：http://www.aibaodan.cn/163shdhcvav.html

Ruby: return a, b
来源：http://www.xuanzx.com/163sfghtqwq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163sagmkznl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vcubmwkl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ggoyutca.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fygngevb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ttpaiqkx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vdyjqsuc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163dubiyzln.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163suyyabcj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163netinrmd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fmmedolp.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pzotppsu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163htwgoptk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163mouxwgnu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pgnoshug.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wwtpuggn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163specjvew.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kikhzlha.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mipoenaf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163unluwsjm.html

[C08] 闭包
来源：http://www.xuanzx.com/163lcsusxwg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pmsrolho.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ccxpuxii.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ixjnavzh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bqbdlmna.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mcbicgeq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ajhmxxfc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163dpkevszt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zrszeyqx.html

[C09] 递归
来源：http://www.xuanzx.com/163deznmqzu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cptlxecw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163fjmidkrg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163loznluaw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ufytyqzt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163cgiozenb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163fxgrutfq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163glqvtogp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vkvzxemy.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163uzyncqzo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tktxycug.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vlnpghsr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163asmqfnww.html

TS:   同 JS
来源：http://www.sxryk.cn/163ejxsidvz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163volahwkm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hyapopje.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163iymtvgqh.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bmzjtnew.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163egbyphuy.html

Py:   from module import func
来源：http://www.xuanzx.com/163uuuowtbd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fvczmsgc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ykswxwdk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jmksigjs.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jebjcwpl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ywzumeac.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163truxnlas.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xtnukmhv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ygorispp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163gubcnujd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163skltnuzf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vdkamdhk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eilzrpzw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163nbfehlfk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wctgyytp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yvthglwl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rpgpmbaz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163uluekytm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hpixyxtt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kkpkehzv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ycrlwbhq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gbhhwmui.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xybufiiu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cbcrtgqa.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163cpwjmuhj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163swpdgjww.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yvikztyc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163tbdneteo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uqcqrydu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163rjjgjfvf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ztliomdk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163yoxuvtbe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163equvxlef.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qfpcfbgx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zczwzvxe.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163pzxcccyv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163bhhruuyo.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163myihpyqr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hneaqhbd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163sdfesoqb.html

Java: // 无解构
来源：http://www.xuanzx.com/163rwunkmdm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ikwhvsoh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163elozketn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rmqliwhy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ngjntttd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rjcpidyb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tofqgdve.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163gtivtkgk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xxrhrdrb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nucxsgpq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zadzypdh.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163iqeirhol.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163lmjunebw.html

================================================================================
来源：http://www.xuanzx.com/163kkdlzjni.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ohicbbbg.html

================================================================================
来源：http://www.sxryk.cn/163ubwsetty.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163flifxmsi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rdqmxdll.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163cyanuimv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ncjdydsq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vqzixvfb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163zsjaikjd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dtmnenqx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163emmtjuzn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xlhcjpjb.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bjfcgqfx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fysdzrto.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163stcxbevj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vfqwcokt.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163fkqxpksv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fzugboaq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ihxmcvdn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hywhxqfh.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163lcryeayx.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163awsgrhdq.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kjoiwqbu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163oshmlive.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163nizinxdk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jgakxfiv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163lscthhka.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163sqrnwmre.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163gnegtgeg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lcsitwrf.html

[D04] 删除元素
来源：http://www.xuanzx.com/163faepqmdc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163cuyljxao.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ayymxcsu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yxaeiwfr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163frkpuusz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kfyijqzt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zxvldyiw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163osqfikdd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163iuddvmwk.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ifisszyw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qhpjgykq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lkbrlhzw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163eloflznn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nbtsxsvu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pdjfhczn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yevatvqg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jgbckqvm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163yibtbelg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163edsuiscd.html


<!-- 参考信息 -->