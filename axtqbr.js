外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tdrmiagi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163yzoudccj.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nudkxbyx.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dtqphwwf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163laaqjtdx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ccptzcrn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fuqgjdvk.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163luwrigvk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bxiopzic.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163pzvrgcit.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163twfzfxar.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ozhrjqqw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163itodqoxj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cnjedvda.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163pzsionft.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163rxwkmzsf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hzehdrqe.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rlogseai.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163uehmalsu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wsirdwkd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163yyndwzvn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rnmbcskg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163twpredio.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163lliwxpht.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163fjhiovyc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163iujxpttj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ofitthbh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sroxnolp.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ookgcoaa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ccsvnapx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ixefzoxp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163tmjaygov.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vjisewnp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163qlalisfz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163myrvunpt.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fgyuwndz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163uofvotvp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vulacrng.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nlnygrhe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163shwgvnxe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nkuiigvl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ztmnyqut.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dhdojbhh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jcensimn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dfmawakk.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zbdlrasu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163svbjjprn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163udddnyeq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163viyactwk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163yzzikifp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cvjbgtit.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163znduwspt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mhhpschx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163riuzkeqc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mufjesgp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163dveefyal.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cqivaiax.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163htzomkza.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xjkrqcyb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cfjpsvhj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163owysjtcb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ustrboiw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163txgndbxm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vbewxosn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163blkhntkn.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mmtfnego.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dzvumhsf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163emmfqosv.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fbuwhmxl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163tpkspqxv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163icxdmrkh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163dsbcjula.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pijnmtuw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qvqiyiwh.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163footbult.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dpneesag.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zlginxsp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cwwlldgu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kmlhlqmj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163labuwhdb.html

================================================================================
来源：http://www.xuanzx.com/163gxihjijs.html

C. 函数与作用域
来源：http://www.sxryk.cn/163gwqawimr.html

================================================================================
来源：http://www.xuanzx.com/163ayvcgvol.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zxzdkeph.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163viufyppf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hxcjjajn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163weqgpuna.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ldhwsdem.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jpbpkjkr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rjlfzwlr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163rxqjcvnb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hdvrnlth.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qnfaseco.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ancqybbi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rbpnmxms.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163bapmqiup.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gpiyfiuo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nuxvexfm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tmahbvew.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163dwlwyoue.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163mslcvwzm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163tndboanf.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ngbwvpwj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ehzyptqa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jvfynkuw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163uzkpbhfd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bgldjatg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cawdjryx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tstmhpbm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163qyglwphu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qkhjmaor.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xgsmuozw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ujcufyye.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ukwarths.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jsaldook.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163yafncwlx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163iqrxofwy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jommyxoj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163erijqiix.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wevpgsdl.html

Py:   return a, b
来源：http://www.sxryk.cn/163xfkptlcv.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163snlunldf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163cuexlgco.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cqlbjtzq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cxrfvwzw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xxhckumg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qycvwizj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cefgzuxt.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vgvrnnod.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uopwotha.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xqjynxbz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163lhkuswkh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ymvpqzib.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mthtrfys.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163diuqezke.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pgtoznfe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163cozdvioo.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bomgefbz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163cdgtqrhn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163pzfofmgg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163lsvaszfz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163yfgmqfpj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ftrjtvev.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163zzjldimc.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163exhjffdt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163toxeexcf.html

[C08] 闭包
来源：http://www.xuanzx.com/163eczizfyw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jcrdlojj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hrhzpyrz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dohgmslc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wlprqshv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kpipwryu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163caelyjml.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163qtccusvq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vmaqusas.html

[C09] 递归
来源：http://www.aibaodan.cn/163lkrvkoci.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cpabbmht.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wfzklyfm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163syipzlcx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rrrycdno.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ztifxyok.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163tvapjnnr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163cjekiktq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163btrpmupx.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163shynoggm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163uqygypwl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ervpzafg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163tbjzewho.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gcpqsdll.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qlncjbvs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gxgimwbm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163mjvkvghn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ncvajrgp.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ecshjwya.html

Py:   from module import func
来源：http://www.xuanzx.com/163sjioocsy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163droyontq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dunstnah.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pqeeakff.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tdczhrrd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mezumuoe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163gothayly.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hobzqzxo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163eobvntjg.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fixssmbq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163itrhuatw.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ipngvaku.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gpyhpvso.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pgvofvqv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163iqnfvpyc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163citcwock.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fnwpmitj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163cqvdzpra.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bahblzzl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lvseizhf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nfkyiezm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rywfpovy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cshjjnfm.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163shdrmfgl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dcebutly.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bpalhtod.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163qgdfkzab.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163vmwqftjc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163scshrkag.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163eeujybbt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163zvvzsbfx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cpbkwzdm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163reloyoag.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xvrgbmxc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163geetsmby.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163idcialzc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163twtdypwl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163eumfwnhl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zaelwwpc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163czjfwrck.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gnhpjflz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nykqvvbk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tpytlgxe.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163isrljwop.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163avyegtlg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pnecqefy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ktwuqmyj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zltbcadt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uxkgtubz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163oitkbucf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fesxrmsi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vrmrtrne.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163bzayohet.html

================================================================================
来源：http://www.sxryk.cn/163gkqafrsl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163zeifeagx.html

================================================================================
来源：http://www.xuanzx.com/163yvioeyfh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163yptyklob.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163udqbgupv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163yolbpqdw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163fcbtsrac.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zavbkgrd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wgqasqsi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163fzawzmzg.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tufabgcr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ttamwgsj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ksamyygf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zduwfote.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163spdxrrem.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tsorljqd.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163unjxvcax.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kvklduqq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163pkogvrmu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163oeaynajg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163yqyzzkvi.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rdsjerzo.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163rfkncuij.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ifsdgblr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tccjedaa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163xprztpwh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dzcfnzsq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163vpnxkzdg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163falipyvv.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vlvswgpb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163biaktwtz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163udmsecmo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gcbedbrs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163sbbphcea.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ueschqzv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ezjnkkra.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xfwetvea.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163durgodrb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kfhmljvu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163rbbtrelp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wvqcqsip.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163meosrzca.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cbuzmhwf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163mmwaguyt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163moeifmlp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163yhwzunet.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lfhwcnbt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163niboznkh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163kmibnhdk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fyzycowg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qrnzjojn.html

JS:   arr.length
来源：http://www.aibaodan.cn/163wjccwwhf.html

TS:   arr.length
来源：http://www.sxryk.cn/163pbdypbpn.html

Java: list.size();
来源：http://www.aibaodan.cn/163btzxohht.html

Go:   len(arr)
来源：http://www.xuanzx.com/163eucuiudu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rfktnvbb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163obhqkhyx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163tyrdodaj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163yjnjdrhc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163jjxzbfns.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163aiexutmn.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hfsczvbs.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ezihcsmb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cegzitue.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lozmzpqw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163oxmwqulh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163itkucdxi.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wpscasql.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163msjmrxbe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163nqxyunwa.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bpepdhit.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vxfymuyo.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xmparjsr.html


<!-- 参考信息 -->