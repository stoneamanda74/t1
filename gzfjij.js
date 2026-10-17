外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mqfhpgnm.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dcjawolj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163yjlgrnrk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tjndlbzs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mhwycows.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163scimxfac.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163dsamespr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163lnwfttrm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163qzyzznmh.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nkxzwims.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163bcjcyuwx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163igcfvzqm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xfcydroe.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xawkpbyl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ucdpdzxr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163iyrtfzrn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xtysqagp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kbjlmmhi.html

[B07] while 循环
来源：http://www.xuanzx.com/163rahwmvdm.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xobcmvxw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163uiicvqyb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vmbnnqgh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aujcbpav.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nivpgmzw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163irryqdjl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163kfteeihh.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sbzolllw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163dzyptgoc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xdngczsn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ffkvxbhe.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zsismiyi.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zkjpxzjw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dkcshmdh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163igfqfarb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mahrtzuv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163irlzbdfc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163upomydaw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fdgjtehn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dwtsgogd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hmepjrqe.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wzlvetuh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qdyopzoe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zrpcenwt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163eyswylfo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fydyicfd.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ppjcdias.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gbghonyj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pylycftk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qalpvscp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163tpwyeapo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163niuzxucy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aqhzuykf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ocoqykks.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nrufxois.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sfhzcrmt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163covsqtpw.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163iwwdbyzh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ehseduca.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163diaxjily.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ddddfnby.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163lsotptlf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163iokyrqtx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163algmnxrn.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163pqhikdfc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163dvwzoyoi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163htcsjiqk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163plypxonc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163snklcnuw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yhdjgvzi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163rulddiwj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163cnxpzsls.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wolszjpz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163iwskpddq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pzqeaire.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zojqaqjv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163itevsvsm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mwtynlgk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xbmazqmc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bcvimycz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163llnuxjew.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163coxpuuoc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kcqwmbrg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163owfyraal.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163saiixyll.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163drbplidi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uyogoeks.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163lrrgezcl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163bnycnchc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vriovtve.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163fkryvczp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ztsrpglt.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xqautytc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163skzpwdgi.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163necvewhl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163lnvohant.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rijosboz.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163vqupsxnw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nxyrodqz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kahywfie.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163crsoxbkz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jnckkobf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163uhfyikgu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mfrxoqsd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163jidvoufv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163tvuhazsr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bdprjrhs.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tbkmhvqo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163pcnuvptx.html

================================================================================
来源：http://www.xuanzx.com/163aslffwii.html

C. 函数与作用域
来源：http://www.sxryk.cn/163bdiwdotq.html

================================================================================
来源：http://www.sxryk.cn/163frtqfvbx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vsupyhoy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163lvtpypum.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163thrkjqsl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mamnqiwp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163uxjagbif.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jxcgxdsz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163sghikfsx.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163cusilzvp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ngngusfb.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qqmalfri.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vxakirtx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hmapkoun.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qvqsszjf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gwrknfyi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jgrnbadm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dlpefosz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163aiyhstfa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qhhtidrm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163zdevugvq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cxmkvbgz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163iqdjefue.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jvezmtei.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fbgedtdd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gjgvltlt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yptcaofz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bxgapoda.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163tuqmjafn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163owljmljn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ecxmkibk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163omyrnafw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gfylivds.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jqilulqg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163trcaokqd.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ovhuajhm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163snyenwmt.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zdzmonto.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163njckoqyh.html

Py:   return a, b
来源：http://www.sxryk.cn/163quiecyer.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163okgugano.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163rsbdqumf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rntmhcml.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jyqtrqal.html

Go:   return a, b
来源：http://www.xuanzx.com/163zdavhxkp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163esrqjmvy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vssiwvdo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163kvcxzsci.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163btqjctwy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163empfrymw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ryjrksdw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wcwyyagw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ukferjio.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vamyykos.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tlukkdbq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163sxkzegsr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163anxzttxt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zlmemqxj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ypppktgm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vzgchytx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lreadigf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vdhwgupz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ztnqxjzq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163hyxjlnlb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163lbfaddhh.html

[C08] 闭包
来源：http://www.aibaodan.cn/163bplcyecl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163pbtvcaoh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163euseslla.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fkgxioqq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ggdixdek.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tzjcmdij.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163aipawogm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vresagmg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kyhszvnv.html

[C09] 递归
来源：http://www.sxryk.cn/163esjyefpn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dzmpvspf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pgcywobd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jpkftfqx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kvrhzbvd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jodjscuc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163btrdzwbl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jpghgbwi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ihinouvv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zoqxrkcp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jlglrvbo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163elsrygmq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nfograwz.html

TS:   同 JS
来源：http://www.xuanzx.com/163ggbfpnoy.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163phjhmckf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nqenczys.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163xklupyfl.html

C#:   块级作用域
来源：http://www.xuanzx.com/163aapwbaez.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163thgsfnem.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fmqncxir.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rcfhvljq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163kailjgnq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lkaawpgj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vkxqtdtv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fnpdezwh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wrkbhsvi.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xwjfqald.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163sglnmwnn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dvhmuryz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kypkwzdi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gupwxqey.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163eaezmdnl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163yvvfudim.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vhrullyz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qzhipsng.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zvtxkock.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163piaidrzd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dkbpbezo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163glaybjvs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163svznqghg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kgihhryu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fwubxfek.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163izgmmylx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ppvgdvjb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wfbczbsq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163szbecdzi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gqmtihaf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rvprpdjx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ysowxujp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163boibwtzv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vcvpqeqj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mdfibyku.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mjeevbvg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163uotqptlv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163sjbmkxde.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163pkymvchk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nshobjlm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ffgkltvx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gbpososi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hhzzcimw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rjxvadza.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163klduwqov.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163moeunqnd.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163tcvsqyfy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rujfefei.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dnsjiqab.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zbuzpkja.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zrnbosta.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wotdklkg.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ltxvkhbp.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ahxfcmbm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hebwgoge.html

================================================================================
来源：http://www.xuanzx.com/163zjlicnkm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ovyqzxbg.html

================================================================================
来源：http://www.sxryk.cn/163ooyvyngc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mgwfneah.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163siorqzxr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163niehbyhe.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163lvjyqsrn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163aclcqxaz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163iznsqlbl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pyhisniq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ltmuajhl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163fpggkkui.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163kmapxzvm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ljnsdduj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xcspswnh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163krkubvtu.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163eydeyncc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sqbuqofu.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163puaxuufa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163azxdbfni.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163shygbksd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163aduzytci.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kjpqsamp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163czwbtcnq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ltcjmdqp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163waajalwf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163gwuxqafc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lidqawda.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dxsdhlry.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vqrmpmoq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zkxquypt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163exhizgay.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163jffxyqct.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hyxoqduc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163kfysuqxb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kzdxmocb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zgjkbrmy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qdgouuoy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163muaogddh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kszosguf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bnftufek.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bzgxctjz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163siomnexs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163sctfkqty.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vpvzxbai.html


<!-- 参考信息 -->