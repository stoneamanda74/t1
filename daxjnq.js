外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lhgsfzlz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163txvhfmar.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163wtkihzsj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ogwlidqm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kafhllaf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cwblfoeb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hzoxgznm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163upcwvxel.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163iairhowr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hfpxjsrr.html

[B07] while 循环
来源：http://www.xuanzx.com/163shwlvewh.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ftyanrpv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163yytjosve.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ansgkugw.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ogceazvb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163psyjcpqq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qywxtzqb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fjlreicz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ybkyhlts.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ezmjbvuj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dageawia.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163seckzxio.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nbqzwycc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gfrxytdo.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tuijtxex.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163bbpxtbao.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163whbrndmn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oeztjwym.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ujqjtvpt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163dvwuhpnl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xzehzacr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bgjgbawj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ddilqfkb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jdolurhg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163futcyqbu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bdiamttm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nqqzprwt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163axinsjlk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163tucdmkfa.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ygihcvbs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163exruggld.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mqqliakj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ktylwpdv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pgrepocx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163zgxxeqbz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vpbapqru.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gilnskre.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ghwmucyx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163extvvciz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163atjqmxdu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fmxyzhbp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zuugxhiy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163rpbzoshr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cvzlmnow.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163anesklsh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163inrtntew.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jjlpgumb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pxakeirs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zbmxelry.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jnvdmibi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gzbpxcvv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163judatgpa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bqhuaalu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fdcjfqba.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jmfioexm.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163olfteaut.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ftenwpge.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163azmxglqa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ukuuywiq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fgqpmyuv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163pyyhvezi.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163uipbrlks.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fqhukmcf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mbwqffth.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163wwxjhkyt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163cgxvtpaw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dilkaexk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yggmfvft.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lujptjtm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163cyfppcop.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qsvrhtoj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ltkjuatb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163utwufxwb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qoengrxj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163fuagiwyd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kblfgdgs.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163tgpvujfs.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bvromwfk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zhngwbqm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163hmtdddks.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qkrshxvc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bxenfrbc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163wtsoggkc.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163udkhgpxm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163nrinebmf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vhftzpvy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163kxhbyhpx.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vhiiyfim.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163legcerna.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163aczuzsmf.html

================================================================================
来源：http://www.sxryk.cn/163ikvlppcf.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fbnrkmiz.html

================================================================================
来源：http://www.xuanzx.com/163twtvhggd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qemiyvqr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qgyzvcep.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163chtoclvf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163gdabuyap.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qnepfslm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vwlurwth.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163kpxxqfst.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lzqiuzti.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yijqamki.html

[C02] 默认参数
来源：http://www.sxryk.cn/163vzbejfik.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163oneuupco.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ezcungse.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163htybxuyd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xlowiegi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163rxrgesjd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163bjprorsd.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163dhrcmkit.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nssstkaf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rrvpeajf.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hymiijye.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xhebmiks.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jilednhf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vaoattgm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163daxrxjbp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qejittfa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zoatktxj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jnlytchz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ialcinjb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163mdeuvgmu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163fcbdgoue.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kkwfhjdx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dsekbity.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zhmsnpqj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163jqillskr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163usszmgji.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fbvwptsb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163tbubgitu.html

Py:   return a, b
来源：http://www.sxryk.cn/163jqprqhtb.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163udgwefvc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rqobeapo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xrdxucks.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163lahgytzp.html

Go:   return a, b
来源：http://www.sxryk.cn/163pgpypzsr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163kfmulrwc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163efdgukkv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zsxxxrqg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hspzcjyf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163nqnlicjp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163jhkcuhpz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vbtuytcw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qrxgdkil.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qxjdnabj.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kreremza.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lbietnbp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163hupxwami.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163pqdtfkdl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163nyynpxmo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pvwwtosp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163bzsqoume.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fmwumewn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163jstxphad.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163uchaacbw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xbibblgm.html

[C08] 闭包
来源：http://www.aibaodan.cn/163hntqvllf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ffcdqooi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163oqenujrk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vcdprjvr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wzgcnnjy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rizswnqn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bxfhnkht.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jhifcmig.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163umtclkgx.html

[C09] 递归
来源：http://www.xuanzx.com/163vxtzcdcd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kkxaqeda.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dytgqlnh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yrldzejh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mcfjczzn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163uzmhunqn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zzcxwcnz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pvwutfgv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163upjcthux.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mmdxtuoo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163suellrxb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163sqinqkiv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163mhexulun.html

TS:   同 JS
来源：http://www.sxryk.cn/163frnhlzak.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163loymwlxr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mbvltgpd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sxpqajgf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rcmsiofw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vtpyabuj.html

Py:   from module import func
来源：http://www.xuanzx.com/163zktwnnix.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163oisgcubt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yulkuida.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163rxfalruv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163inialhfo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ryrqllwr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ljkiwdnj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ebyoeisk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163amapuhon.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163iiowrvzh.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lvrcfasx.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hdqtvrye.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xkkuhjql.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pxibsvak.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163cblvcphu.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jqzybaua.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163flijosut.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163itertnjh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mxgnfhog.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163skttfdiu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163fdffqivw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gfuuvuyc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qftmnmsh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hmrzewrl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163otvlsphi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hiljfbzi.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163fmxwprth.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163skujpdei.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rqkdbagj.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cmarnyxp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163yifxpkcr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163qmxoyuyc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163revkzwiw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163trlhhjfr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vyfulisw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vypcepuk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gxlggrvs.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lrlgntua.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ihkwhwvf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163zjauehgq.html

Java: // 无解构
来源：http://www.xuanzx.com/163ottwnbbc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ohtavjtu.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163emwcclmm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vrcycchj.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163znkruntv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ihnxismu.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163acnktgvi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ffbvbwvz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163cavcycmy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qncndulo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xuakyypu.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ktammliz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dahmislq.html

================================================================================
来源：http://www.aibaodan.cn/163hinrdguh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ayheqysu.html

================================================================================
来源：http://www.xuanzx.com/163znmpnksd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163noktdnmg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163anfrqdbo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jrvkrorh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163solrwjpr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pevhqyrj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163yqcmthun.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163gdstvkdv.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yhmhauma.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163irqvsofy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mostaxmf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163aiqcocuj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ccivruvs.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163gyfxrjey.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163okpkuzzi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dmmoukhw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bbvkxltm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ulhoiznl.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mbzkixkr.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163cyvdibbj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ivcffgmh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pvpevytk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dayxoewn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jhluyjrp.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163xcmxsekg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163dgnkfqic.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kiexaszl.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fsaydddf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ihqbpyiw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163eajacqxv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hdjootof.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163lvbdaojj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tamidmxa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163bacwynth.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lrbstqyg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163oqdqbeln.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163cmikerfj.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163rjsxracg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pvlkvjwe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lzgbvrdm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163evbtpkao.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bpcbdmmb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yeeshejg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163nuelncmp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163benubbmz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163kbsirsmc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163jjomybfh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qsfrpadi.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rhisuday.html

JS:   arr.length
来源：http://www.xuanzx.com/163fqmjuoba.html

TS:   arr.length
来源：http://www.sxryk.cn/163vfkvzqzt.html


<!-- 参考信息 -->