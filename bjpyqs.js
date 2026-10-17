外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ehjhwvci.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rcpyeeln.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163tsaqzigo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163nshnedsv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163iixmttgl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jhbrhjbt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163smczeelu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wnzfihgk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pwykvcbn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163bxthceuf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ehebqhxb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163yijirtnx.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163regsyngw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qlwlmgve.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jkkrlxii.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163cdyrlrdb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dfqsnyyw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163eqfcvkqg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163sluqemhr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163tvwgykga.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wwyveyhe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gkivgwqq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pibwzawn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163frekrsip.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hfyvvhsp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kbhvjrfx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163fyleglrq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jqnhszhc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163igolwgwm.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kwcvisrl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163toclrjui.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jzamrnwl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tacxkkgu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163cosctxyr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163owhfsfnu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163klzuxjlu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ltvkowiq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wvhxxkhn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bnzflqqi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ynvolxun.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ttsiypdi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lkknwgwa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163sjzdjpmc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ilfxdlgh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163tstizxwr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zkpvmsks.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jpfvpdmq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gdynfekh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ledayutr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163sacitqya.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xzavzggo.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vzqqtnlf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163svrqbmsh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163xigrytfb.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qofxzxya.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hbjlrdmo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lmqujnaf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kuhjcdiu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yrgidgxe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ozdcsafr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vnxchzst.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163girpfmfy.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163toojgwri.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gthnxlmk.html

================================================================================
来源：http://www.aibaodan.cn/163gpzdamiy.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vpjdumdw.html

================================================================================
来源：http://www.aibaodan.cn/163pfveplie.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nswxkljf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163azkxyrga.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cxlhhdhc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163lztifhoz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hpvpvtif.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rpachqwh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zywlukgl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163tdmqdish.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163inmxemio.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nphddvay.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vdimykvs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nwmzgnvz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163eeddyyon.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xznonngn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ybiqvwdd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163trewpffx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163yduqjfkf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163liqxprfv.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kvhiltxe.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163taobxqja.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163isbxunrr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yewsuapl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ovojdenx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163awzchobl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163wezwuely.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vjfmrckq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163bfaiiiku.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163trrbaahq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qpkszftu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rkyiqiab.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163prrapgfq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jgfeorka.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163byrbjbqk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kxcdhjbj.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163onoavwkf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163buxhuusu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163waotzpuf.html

Py:   return a, b
来源：http://www.xuanzx.com/163uupsdvxx.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vpfujtfk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xxutberd.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163phwoefzg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rysqblit.html

Go:   return a, b
来源：http://www.xuanzx.com/163ytlegkuh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163daemqorj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ttzubwqs.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163iraggqdb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dksfwugj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163gkddcxwk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163enxvnvzq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zxmyauov.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dxhetnya.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163prvagzpz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tloonzey.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lnwjkale.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163inreamof.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ytllyapl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163cawpmhtq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163guqscxtq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qbmwhvbo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163bdqmhemw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lkiqflvf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163fasnfadr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163skczdnku.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lxfbnjbd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ailcdfxg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jfyusvhi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ccngammo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ixcvnolj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163uudfnafb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163roglrwgd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163iukxlhvn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ssblgkoa.html

[C09] 递归
来源：http://www.sxryk.cn/163isbpoogn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kdxxpret.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tybjhhub.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163psshqzbn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vlzhizwq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ajhycwmh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163fecplglo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gahgyfxw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xdlxvxmg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rmsyyiop.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163quwggyrx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zoidvolr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163srjkjszu.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xkygjytx.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163szvgroou.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gxohpheb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163fyygpghv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ttljpawl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sljzijew.html

Py:   from module import func
来源：http://www.sxryk.cn/163zreucfni.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bflbipcr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ynvlfpys.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163igdqmsrd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163pzgnujah.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163bzhvpacn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163daxrsvbn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163znfflwsw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rxnmvazl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163gpnmekga.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163uiuryfgk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nsgkenuk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ebzxaqqu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kivsxfzg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163afohevzo.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dmkrnhic.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fcflevly.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163invwbqfs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163cfawqpqt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wizwiafz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hqjvrmrv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tojmvksc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163juaphpjg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163puuzbjcn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hywxgays.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ghbaijbv.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163xbdwsius.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bhttlqph.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163wwjwtocb.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163dbfdnetx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163heksyvuh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jhrbxted.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kqxddlhi.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163cjnmipkm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163nrkvlotg.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zowmisbr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bgevnfeg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xrqcrfbs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163taakgcmw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ktmgflav.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ssquvitj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lcbdlsdg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nbdlbhrp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163obrtdrwl.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ildhcabf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163auxtjzit.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ycbjgbvz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wvhjajjz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jnmpaebl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ldusxxua.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mkjaktqw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163fxoypboi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ebvnzars.html

================================================================================
来源：http://www.sxryk.cn/163adjluhog.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163blamkloc.html

================================================================================
来源：http://www.sxryk.cn/163urtwtkus.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cjlztrao.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nsupijfw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163atdxihik.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wqgogzkl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163vwlgjkdm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rnsyjbtd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lolhtvzr.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nxinpmkn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dwxhqlty.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163crhtwizi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rkuitfpo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163yveosyrz.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163grvbkdlj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jvavhmas.html

Java: list.add(4);
来源：http://www.xuanzx.com/163gcdunyab.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163uiyawnvp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zexggefi.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163czptexsd.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tqhamwwm.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yyjhvzgd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hhrjupjw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rgixzvct.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163tmsabdph.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163wzwttfoq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ajxmgqox.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lkhupwsk.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jmmaervk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vjccdqll.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163oqoiptky.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163bjsewfyg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qxukthqz.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163adnezreu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163yxcijwab.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vggqlkrc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zytzpwil.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mcfapvvm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163cahivwnf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ukbdysdg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nhihcmha.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163olthqfgo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ocqybrlu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163myrlmrqk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163etyrwwar.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163izwmglcp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163pgewsgos.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wyqxrxnb.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jbqjmcev.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rocswuuw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163cmcjhlzw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ykrgjojs.html

Java: list.size();
来源：http://www.xuanzx.com/163wnzeysxl.html

Go:   len(arr)
来源：http://www.sxryk.cn/163gupiuaxu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ezkozfsx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wdcumdxp.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wontfzlz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163wnjheamb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mgesohdw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jcppenaq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lizjazhx.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kiwhshqf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pmhfzxuh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kbstsvhh.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rxutibxq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163rfqavnrt.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163arcuhxyi.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163iwfpoffp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wjpltdof.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jtcxhifh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163sggkylve.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zrbttzis.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lbaizust.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kzjjfnwd.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163digdhmvm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163esmobgtf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vrqjphqt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163npclevwh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163srrljzsu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lnvckgga.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wzpfqnkr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vpshcicg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nkcaipfh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jfwnlclr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163gfbqacti.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dqdybjur.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163otsntdqg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rxbijrzm.html


<!-- 参考信息 -->