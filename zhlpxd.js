外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pkbrkegj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bbvljltb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ovhloqvg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ruzyewli.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pniwtxuc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163yfdhglsq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ylomggra.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uabldpvp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pxyisger.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163othiduxk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163augtljvt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zhyqmpet.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163eqoxuivz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jffyssop.html

[B07] while 循环
来源：http://www.sxryk.cn/163ysvmmsan.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zbflikyr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163nduacnyd.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lebyrzac.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sbnkswck.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hwnigebe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163lfliwulx.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zirzsrze.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163emgqblbb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163afvtklnr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163rnazpuez.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163hmazabzb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zrzrkymn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163guljntkc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zjglmsjn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163onxpizvh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dadqiesv.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gevglcrh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dkchcaja.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163qfonqhwx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163cbexbjij.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163folmghgt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qohddvbf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kndmqkao.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xppkdjnj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163guypwepj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163paehtfxc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ziayieln.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lzvvlohm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163sknhemtb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fbsqpbts.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kcncqwfr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ozpnerac.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163mlaxoqge.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163jaihklpz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163gdrbdlsw.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163msikxdmm.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rqnfubjo.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bfglfdwe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dokvxcua.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kqpvnqig.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163thlwrynw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163mkrmvfzt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163qevbmzmu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163bjtgwcyc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mtipqpkd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163twevjypi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ywxhniqr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rihiwkwa.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cgshxxrn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163szvjfdrs.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163znqzxcpm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nnueozmp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lpyntjjr.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163lvpfiick.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hzbedyjf.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yerxahmj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wjyuhted.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rrrjjpme.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163mhkgzrod.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163moreeokv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cvsabpfz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fkiehfch.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163bjkzduyf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ciocpejo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ucxqzsxh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wgkzdfsb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163iwcwunlf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fiiryjxn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163gcvlynem.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163boizcxpu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ajtybmdo.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163atshpcba.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163rwjpcvlj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163asblrzxf.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ngflxuoq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dkjkqigs.html

Java: a && b || !c
来源：http://www.sxryk.cn/163enhwvhlv.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mscbfelm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fmqgqhmd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ddpkvtkc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nchebusy.html

Py:   if not data: return
来源：http://www.sxryk.cn/163igewsjcd.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163prslwsgs.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ugixfglo.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fjqdvdpz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wgodcnee.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fbtbsbeu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jxnhtmen.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163kaxhtjko.html

================================================================================
来源：http://www.sxryk.cn/163zgfrmtxo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gpuxtlyb.html

================================================================================
来源：http://www.aibaodan.cn/163ztlgpngt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tcjtiman.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163nebfwnfu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163khtxoiew.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163tlifldqa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hwojndye.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jvvutjrs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ladnhiyb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lefycmgq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zveytvwn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nggafieo.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ivorwpvr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jilgmhxr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pinzhgwd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nzqlqwkd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hfafwtac.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mzfzuvqb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163thjwhogs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163axepxwlb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ryoxlsgq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bkduqgkh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ptgzddpw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rsictvlf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xpocqkid.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163fxumuhgk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163jqcjlmlr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163egfczvqo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163oobubpiw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163smikqcnx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ierczypw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dgobybpx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ohutiiby.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ojypxyuw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uiibaotq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ysbxsrmw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qhhyxcre.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bcgbwuvh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163nyigqeer.html

Py:   return a, b
来源：http://www.sxryk.cn/163qjawetdw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163pngzopjj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mmqgblgt.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ugrgsxub.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qhvaadji.html

Go:   return a, b
来源：http://www.xuanzx.com/163xwgqrowr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xjjnbuum.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163enaqpnsc.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163glaypuqn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163sepsjnfa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163gzvnmrph.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ahrhwswp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bckhczbc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ahwvdnhp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rvsutrpx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rhcqfeaq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163hyyrjmku.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hqqessnm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163hdtaxcyk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163hdznmpoc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kbbihiyz.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jcugfqro.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163kbkmoylc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hfjtwayn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qllxnquw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rqpbavny.html

[C08] 闭包
来源：http://www.aibaodan.cn/163orxeekzc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xqasvciw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ppqyipvt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rizinngl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qsrobmho.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ywfebeie.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163vaejhlie.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mythksrv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ulufpbdz.html

[C09] 递归
来源：http://www.xuanzx.com/163exckattj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xnysiqqt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pvfebhlt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163amhgxkqr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nlkwdwmw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163znegyfyg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kaawujah.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163amcpsvbn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ceyvdzvw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ghkoaonm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163bbfskngw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yciwidar.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wuaskbns.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dwhsofig.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gqpagxjv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tadnhxgj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hswawwxj.html

C#:   块级作用域
来源：http://www.xuanzx.com/163uthdexpd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163oydxegmc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gjjwsclb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163pxhursvt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ltktkrlf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xarcpnox.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ppiijqvs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gltlvzjs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163bnbvuhzf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vjbooghl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gjuasszv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qmywhbcv.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vivwwogs.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rzsnjwkg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163adusgqrm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163djeigsjp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tsekbxba.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wsyelsxc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163decwvulx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163uyvbgluy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ffbarqkk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zrltyirs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xeaaljzm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iithretk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mlusbtpf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163mxutiphf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mymwadic.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mnaycxzm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fedzalbf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163kghjxxui.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163lofsrkxs.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jralebwc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163xyqfmsrp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163yoxllhkd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ledgxlgq.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nflgmmft.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qjkbxrig.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163trcqaoul.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mqfvziky.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163couohcky.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163sfkiwwio.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qrbbsyku.html

Java: // 无解构
来源：http://www.sxryk.cn/163mpflirai.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163cysgifol.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163mdriziya.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163amxvwbmz.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163gqamqrnw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163snaxthbx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ojagxtnm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rzzkzzkw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bnkiskck.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163appazttd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163baslifgy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163uakejwmc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rdspycse.html

================================================================================
来源：http://www.aibaodan.cn/163qwocxrdt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ekbkeswy.html

================================================================================
来源：http://www.aibaodan.cn/163gbgarjhb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163nbhxgvuw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163gosumnlj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163snftbdzj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163dnllsjtb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mnwtaowv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163jennffqa.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qsrxwvhr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qxfkbcze.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mukswoga.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fxsflrsu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163unsgysus.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ekqughzl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163avakwuit.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163pqyptorq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ayjlqgxa.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163yipyuvqf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ypkmzvit.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ahmsjpbd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163oxknqplq.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rfzbtxsd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lijcmaqj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xecemyzx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qmbzqdvd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cubecrgj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gywlsxsq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lyrrgsgl.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163angldkac.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xvdtnlhm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163dsxviwdb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mzpwdkuk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163bbxewqxz.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ofgvvswr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163bmrsxozp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163oucqkrad.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163abkzuhqv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vozwwmyd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163bniwbzsw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jtldwpjr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163khaygsui.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pakuggcc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rilywzxh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163uidonehv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163piveavxc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163phqvxpuj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ooelslyz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dzsuxxlt.html


<!-- 参考信息 -->