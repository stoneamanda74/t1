外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163shigrvhv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163eemdosew.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163abdxhofr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zdjqjpcy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zmkmfncl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ezcfwpkf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ehbnewya.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zxfvmhdo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163zfncpttu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bkiairxz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zzkmrzsk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163sxajfudn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163djaeevwg.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nvnggoxp.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163simhgejk.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kraxwbtf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kckkptaa.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163mzmjzexj.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qrywmoox.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163wpkpshjg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163iqvumrxt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xifhxhjb.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ekarmdkh.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mlueodxj.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xvknzzgd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ayiehdsz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163vwdxpyam.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vmhdfdnr.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163alfgbwop.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163tyuguoov.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fcrbazdj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hebrkaba.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ygmbfdvw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ddvkioqv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163syleadhz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163agfeufuh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qiwwbvft.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163shzjmvfw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163fltxnifj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xmxlhkou.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ehhfseaz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ixobokgz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wqprenas.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163poarvikz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163rbcqnhor.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163grasumpg.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hazbcfef.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mepamcfc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rdwxjlpe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163joauvsqc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uwemvqtw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uuenviuv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lqybxhvu.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jttzrith.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163coxiekye.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163pcznobxi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fvsuljnl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ospqsoyk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163axiiytic.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lxysdcug.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vemoxqkz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163aazuerni.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ymecegxv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fvtczfjc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163kpqegatc.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163kauzmmvb.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163psmdrxum.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qejmpiws.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kkiuzghy.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163pakehnmk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lqshqcyu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163wefqpxmv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163iprkdzyg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bubpgjxo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jckitdtb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mxsydmpx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tpudcsil.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mgxcsbfi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jprapvhl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wnxdmfvl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kjxefohb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163mgytbnnl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cipyfwol.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xwtxtufg.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zikawxwo.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ocgfjbre.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xgwhaxmb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rytvndmh.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163eevazlbm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ahalirfg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163etbeiiea.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163tporofle.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163nntukjej.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163fgqlovtr.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163iwhhamgm.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qngkmxnl.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bktxajfo.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rzwivgtd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fderwnmm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ujwuztgt.html

================================================================================
来源：http://www.sxryk.cn/163hngzgjud.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gfqxmwil.html

================================================================================
来源：http://www.aibaodan.cn/163agjrsgkx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ftnwzozz.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pauvihqx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lzmgosax.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ntcfekjp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163doneeezt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163macyunzr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cmkogjci.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163auxlnwzo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dpjpeexe.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rcfttlyt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rlhlqape.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163munufoud.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163baqibllc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163frzdmuwp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163pjzxnoii.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zgstyarr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163obdavgos.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jurkhgun.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rsyrecnf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rionlzfj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163rvaqnlvb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jcdbafxa.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sdiakrqh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163lvwvaqgh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163poucpjzh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163nglbfnfc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163oaiqwoha.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163oucapnbt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dewmduvk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163sygqvraj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xhiqzycq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lhqvxvfa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mylkuhgq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163iiwbukzj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163biayewed.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ronnkagf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163uxnqzvlr.html

Py:   return a, b
来源：http://www.xuanzx.com/163rsckekwk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163zrdyjutf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qglnyelt.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163doorvmoy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ntcqmrkq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163fdqyyhln.html

Ruby: return a, b
来源：http://www.sxryk.cn/163okxqeiqg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vcfykomm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163eljorbgq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uavdznjp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163kkbeaiff.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ysailjhn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qjxbneyd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163sngjxtxj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ouuoqwzx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163moiqkuch.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nbtiayzx.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dhhjqdar.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163iowlibgr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ngdkrhdw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163enrkejtn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pfpbkkrj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xjweayeg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bkggjpfl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163osiektkv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ixjmfiuf.html

[C08] 闭包
来源：http://www.aibaodan.cn/163zownnehi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ziyhnbhw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163txcuzwjf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kbvyymxz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oocobvmj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qhaazase.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gorjcoac.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tjglmwvf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zklphpry.html

[C09] 递归
来源：http://www.aibaodan.cn/163jyjysjwi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lprawsae.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163kxotfinl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pygxvhvw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yfnqbkbu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163isvewgct.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ajtzhgtr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163yzitcnst.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dbnpfmfi.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nhuoilbw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rjjejfje.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163emypamml.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rdseiryz.html

TS:   同 JS
来源：http://www.sxryk.cn/163znehugta.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163otefdtmd.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mdznccvs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wostxwae.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wiqznbah.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tsablakr.html

Py:   from module import func
来源：http://www.xuanzx.com/163kcwxynwa.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wraxthwp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mqueyeuo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163umabnjhr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uwqjqxrb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rudnokot.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qznknojk.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163pwwzrujx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163othypopv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163goeuldra.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fkeduofk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bpybpseb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163codektii.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163otfqnxty.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ycaqmcya.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163kbhlczyf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kmoguhqh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pvsvpozb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hjgoleqm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fxjjwuys.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ztabepxv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qzgkpitt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xlxnexdl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ybvfshhi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ikwmtyhx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pqjafpwu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ecqlprbj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fnevhkfp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163kqiysxmj.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163kplvhpcp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163nfvvuzgd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163psssuffp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163wdihwkdh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163frxdlqfb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qnlqssky.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163skwtnjac.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163caltqflz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hnbwbcdf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163gjvhvvgo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ufyaqeeg.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vfzlbkro.html

Go:   // 无解构
来源：http://www.xuanzx.com/163wrpozotw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qpklzshu.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163awdatbdq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163duywiobq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mjoclrnb.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nqozwsib.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xdigfwxy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vdshhlaw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163fryjzvpl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163pdtwwigv.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gjvsyayh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zdyiiavg.html

================================================================================
来源：http://www.sxryk.cn/163mwhmxmmu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ajfnduyf.html

================================================================================
来源：http://www.sxryk.cn/163yeolblsn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ulkfpphu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wowcqpci.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163csthbqlq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163asejuezi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163egxacgmo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vsmolywk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163uthaektz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163sppucezm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163crskptfz.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gijvcgrg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wkcknplu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163uyplctic.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163iqzpfndi.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163untemele.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163pulpgbwh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ukrxajpa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zlvjnaho.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163lcprehjh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163svpgxjbj.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163avugjrfh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lwztrjsi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dobjnufz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163nsbyvkfl.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163dsjnwcqp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163bjkeinrz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xupwdsix.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vhbfhqec.html

[D04] 删除元素
来源：http://www.sxryk.cn/163maxxdzlz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mqdqpgfw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163bpervsnm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163flapnovl.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163psbvrlge.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tluwgkfx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pbbvmrtn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lccvoche.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ryivmipl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163fgzizwdy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lxsxmvak.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163dpratccy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mwmkxpmi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fqkbnktx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163tiwsgmxv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lkmgxube.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ncskmdbr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163apodzfpy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163oxvvkbqd.html

Py:   len(arr)
来源：http://www.xuanzx.com/163phzwmwrg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163gtahviis.html

JS:   arr.length
来源：http://www.sxryk.cn/163ehwspqct.html

TS:   arr.length
来源：http://www.xuanzx.com/163gibwqqqt.html


<!-- 参考信息 -->