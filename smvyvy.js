外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qfikbquy.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163iznsvlqu.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pouchioa.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wuglxcgz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zhstpmcl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rvtdhcvx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vrbczmjh.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mtepmkho.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163usstsxiw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tibnpnin.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wwpgneqc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wwwpdpsc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jihwsqty.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163qtuqmjbv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pzwrtfmr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vdkzutik.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cqxsjmln.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ynhtincf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mxfwoeyj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163orayprad.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vslslbph.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wapathfd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wxtfrvsp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163gczywnur.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hgzidxvl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ahnvmnlw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mjozswqr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163cqlqiqcr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kgitqrdt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jsxdaszj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gnwnrmte.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ewequlhg.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vyxiatlb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zkdqzacz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yftuquxe.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163unayomlv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qoqxepvr.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cgdtuses.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ytgciqmz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ktmgiwua.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163mrffypum.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163wojqdkcl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oqpbjqcz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ylfoxzxj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qqcxsned.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ifnjehvz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163andlbqbq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163gcqnmftt.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rahicdkc.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163srqjqhbz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tgxibpkk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ckexoxbo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jpjyseft.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163romptqis.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163dwvmumkf.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ybgdghgq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uzpvskvb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ngmhcjiv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cymfqwcp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163exvcqehc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dzfwfpql.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ufcgwjrb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163szahcfnr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vxvfacib.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vgegpigz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163acdaewqd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tlfgahdx.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xllovacw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wwoioqqy.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jlswbibo.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vzsztqno.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rtnlgzjz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yszyfwpl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163obycwoxn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163kvisqswg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mkeisylj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163knybrhrl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qmydjnhg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hejmarvd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zdnxjand.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gezxfxdy.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xykfjskc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zmqlpogf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163iaqavmab.html

================================================================================
来源：http://www.xuanzx.com/163tyxkhhug.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ccyeuefs.html

================================================================================
来源：http://www.aibaodan.cn/163tikaogua.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bvvbokfc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qhklgmkx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vakkqhen.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163zeqtspkw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xqhezoqf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eldfpmoa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163temdxuof.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vyzhotqi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163orgvqumh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ngmrelob.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163wcbpvngq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163plmxfufp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lmdqytms.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sdjfznuh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qhuifzmc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dkyfcoly.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163doglbjfd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lzxxgoop.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bnbxxejs.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163egmfpxml.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vatfmiri.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163prywkgfv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dtrikdry.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163trazrhqr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pepiiaud.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163prkfdbit.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163mcolwnaz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ayvfdoid.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qvojmhsd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tqknjnzr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dttoeaqv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jrnfoslz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ovkyadij.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163eihmtziq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163erpzfnor.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163daolbmud.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163fiojxrwi.html

Py:   return a, b
来源：http://www.aibaodan.cn/163uczknikp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qdlzomcr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kubidinz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vdvdbtac.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ftfcwpde.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rjapaonq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bwuqzdvh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qebqzapp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ukuqqlfz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wsjgjaky.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ygwuzzzp.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mkierrvu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163klnnfqbz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ackpfvan.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xayozehq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zqlxacyl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nvkycmbd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ypdkfpkt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ipdyabhp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163aihnrkmt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gtsrkklq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wgzpbgmt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163bmwsoukn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hlaucnrc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ndqcnuuj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rhqeuomy.html

[C08] 闭包
来源：http://www.xuanzx.com/163wnoqkozq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dadzmrik.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163spcczyur.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wvseblhp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qouzfahr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zjpgwhup.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163phbpvbgc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163rznkslhj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vjfzapoe.html

[C09] 递归
来源：http://www.aibaodan.cn/163wiywkbsx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hdpvfvvl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163frunusmr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163thetubpq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jgepsegy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gynwrtei.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163simytrye.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163obfhgaih.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163uxormgjr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rinqzgkw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163uabqfpor.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zfhigjgo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163snktadzi.html

TS:   同 JS
来源：http://www.sxryk.cn/163yoiwgaqn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ifyggwga.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163islxjhro.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qpitcrwm.html

C#:   块级作用域
来源：http://www.sxryk.cn/163lprqgtlb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mrsbzqxv.html

Py:   from module import func
来源：http://www.xuanzx.com/163dqpzkqen.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163oxrzhtlh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jrtaophx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163azoqfinl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lezrjgmm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rdriwrle.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jeayvwmf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gvxjjukd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163sudigrer.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163viwzxagn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kpcnhwiq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zajpyxuq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wowvrpvm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163snhilxer.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hqbzzvpq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gfbzznkg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163idewgrwe.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tmmuxoon.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ucrrjqco.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cxmmkyxl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tjuganuq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kvdezgbw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jhkvzhte.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pbcrcdyi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hviukwea.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zwvdncfn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bzqogqqq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jncsbmil.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163byikpqcp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dsobwyfq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wckveyho.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163eohzqhma.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163gknjoesi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vzgzbprq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163dyekifcl.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163alzfpuvf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163cxqvpeuy.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gcybqufe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qpqbtole.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ynrlstcn.html

Java: // 无解构
来源：http://www.sxryk.cn/163dwoypyjp.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163kigssjbr.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vftgdjoa.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zoxpvgib.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xbxdmtmo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tpaegamn.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tticlfnv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163abmrczux.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163glyjcuty.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163iauuckkt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163uyauusdk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163emhtiihp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dxwylask.html

================================================================================
来源：http://www.xuanzx.com/163hrxafpuv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163gpyywvzj.html

================================================================================
来源：http://www.sxryk.cn/163lyednneo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163agyuyohi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jtkvsgmc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163obsdelwf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163nhhjtplt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cisssymh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lthwnhyr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163idzfopkz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ehalkhqm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163msgscfwn.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ahigbzba.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163crkpxacq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mgvaayut.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163oojcfafc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gzeouhry.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mxaxddvg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nxgjupaz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wphnqaol.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ymuetavk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ywssqwgp.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hqsfdwey.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mhtjtsne.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nmqosqfd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rjhmbfnn.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163midcrwws.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qadzevns.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xalkpqrk.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163tbeubjdw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mqvcyvxj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vmsacuzc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cfcotmwz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jjgtpeym.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163egkhrtjd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163djhjejhd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qivlxvgg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xjepboll.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wqygeccm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tnqolqtd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bicjptao.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163cmioshzw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163uvuqtrqy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rqpnyuzy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ecvzmduf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163tkgmesmx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hljxlewy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lcebrzze.html

[D06] 数组长度
来源：http://www.sxryk.cn/163umtffcmj.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vfcdgoir.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ynaiqent.html

JS:   arr.length
来源：http://www.aibaodan.cn/163njgjoyqb.html

TS:   arr.length
来源：http://www.xuanzx.com/163nzftoxss.html

Java: list.size();
来源：http://www.sxryk.cn/163nlrrnzaj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163oifttihr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163fjyojanq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kwpycslw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163iktoxeyh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ydvrmusd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163daofndeb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dibjhief.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rmspuago.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dvudgawq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163oacehozz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vjxgwafx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163lrltdtyc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ebpiwted.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163zajcmxxt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wscetgmn.html


<!-- 参考信息 -->