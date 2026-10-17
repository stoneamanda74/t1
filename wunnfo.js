外链999!wailian999！

[B09] break 与 continue
来源：http://www.xuanzx.com/163umffqaiv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xtdqfuoa.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rjrtcoeu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kzvwtzzx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ewtuvvnn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fyfsspcx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163mieotqbs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163iyodhroz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wvdqlmin.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163nugdvbua.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163smuxxsso.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zwkjrnta.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163uobmekuo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qobfcneh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xbxsqkcz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hdsxhlio.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hjohpgum.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163lnrfyocp.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163imgfyduc.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ixhwbqhr.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163flrjwqcm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wncghici.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kpbrmjkj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163esqdivjk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xxegkbbc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163iwviixif.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wqirsjja.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163sgrsajcs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163mahvakgm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163bkgzaeaq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vckiytps.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kweygbyi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fvpyahcz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163slhmjrtp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wcbtbhph.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rfdcjefz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163enbdpppm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fbcivjta.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ononibyp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iyyqkslp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rpfraqvu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vzdjtxoq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163dffxmdyq.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163mcdwmwix.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163vtgznhfu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cjmcuilq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zcinteyz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163aqbsmqbr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ptqisgxs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ksuqhwmv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jvwqrave.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hngyelcb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163athofels.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163kikqnhqe.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vsyccnym.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163owmspmus.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pstfylyf.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163khyyvkyq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163fxaugtwe.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ybwrounh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163visupaac.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163odwnfbxm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qnplvisl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ovymvytv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gqvyakac.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mdqjiqbe.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mabgrdxi.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163sospdngm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fmyelpsl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gnxgreub.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gjdsjkdp.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163cwwjlscx.html

================================================================================
来源：http://www.sxryk.cn/163hvyjuuxl.html

C. 函数与作用域
来源：http://www.xuanzx.com/163egtkduwg.html

================================================================================
来源：http://www.xuanzx.com/163klcdglqr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163cokuqvmd.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hgoypzuk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mymruhjt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ejgkpxwi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ezspebnl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mgszxptv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ufdacfmk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163cblsymbi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lpdyhzpq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163lyysqhnr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163agwuvlku.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163wzmplsqx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qralrnns.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163uaeeaijo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163pilzjxom.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xsnypacx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163inmmpuvs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xcowizdp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kclkqypz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ypsxjnzw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163twwsvjqz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nmmkvsst.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bkibcdxu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163oruuuext.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163seixvoez.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163gwfdplml.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163haijbprb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uojbeemt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gvplogkm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163reyqtihf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mehpeidz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rkbuyilj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mwrfmffe.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lfinejbb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gtziypot.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vjzdpdsi.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163syxcauca.html

Py:   return a, b
来源：http://www.aibaodan.cn/163mmdrnahw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ohvineyn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jpcgamxs.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163yljsiwrx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163dcyotjgr.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zwhneqpn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bpvrgxnh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dwugvjsm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kjhjejvy.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163drnieqiu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ajhupvjm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163kuydebnn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ynifhrqq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163sjivwpys.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163enfldkrm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vnprywkk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163snzhutqd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ncdyijxy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163btzyfzld.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163votizhos.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xzqliklq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hwhoavlx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163plezkobd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163seutvezm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ddhntghl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163otpafkxs.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fxwyqcdu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dkxwibjq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rxzgksum.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uoxsnqya.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ihlnlmgl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163hqrmhhmd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mylyrsjb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zexcswmc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mvsigevf.html

[C09] 递归
来源：http://www.sxryk.cn/163dxopocvi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bkkzbeoc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163joorwfwu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fqtvifxp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vfaezrvz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163yqfcjlqe.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163htkxgfsl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wqkytbky.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ulitnhhu.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ftxzekrt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163mcanhcoe.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wljvaeqk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pgkdivpq.html

TS:   同 JS
来源：http://www.sxryk.cn/163mazjxbnb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bslbnqnv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bmdwwfgw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uyumjpiu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163izarcmqh.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163hnswftvf.html

Py:   from module import func
来源：http://www.xuanzx.com/163kmymwayl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xcxmhfry.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lxmdgarx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163khyiozqs.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zahexkvt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qxzelbxj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cojsfeoq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163yvylucay.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163bjqetoii.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hqumhvum.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163msuxhsmj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xolxiufj.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fsxvdymb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ltbhvkjw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163liyqdqnw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zhwfraii.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dhktqaug.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ccjncqjz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ndcbduoq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qaorotzk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vgyownap.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163aezmgioy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eucdbtmg.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163artraarn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nuoxijmr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163oiahvoor.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163wmbupfxg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163wdqtjioi.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163qjapxywg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163uxnvfupe.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vgivhmgj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vvlazqsw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jubodygf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163uxjxyqzy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163nzaxxbrs.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xhcwzaew.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nlwullzm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wjbothlh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dcvchgud.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ullbgkdo.html

Java: // 无解构
来源：http://www.sxryk.cn/163hijkpotu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fowlqrbi.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hofcewor.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163feggspkj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zldocgmg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xnwryyuv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wooizidd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ijcbmtjf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163nkqctjab.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163iubrfwld.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mliunlib.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zeatnlns.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ankgoxhi.html

================================================================================
来源：http://www.aibaodan.cn/163exabvuhy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163yjifnfac.html

================================================================================
来源：http://www.aibaodan.cn/163jksufydu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163psgejitg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hofxdzoo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163spkeffbf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vpdqczzy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163xcepqhfm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tozlzmdo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163uqayphpw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ahmzlxbx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163afzslpxn.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jpnsehwz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lcycxrut.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ikespeij.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163lzkgsahc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wpexingt.html

Java: list.add(4);
来源：http://www.sxryk.cn/163oxytbtzm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163bzbsvhdh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163gdeyljdu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163puqtxkax.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kzusfzju.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163qlzszqni.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hclsktee.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jsppfehx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vyqflhhb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gfgljuaz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xpnjblvo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163wagyhuci.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xoanoyum.html

[D04] 删除元素
来源：http://www.sxryk.cn/163oyumthze.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wqieflbn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163eviyzbjq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163grnnvdgz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dpcxnlfu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rknxjrmp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rlhoatnm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gnzgcczv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vudugmyf.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163akudvwbf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sbtfaaoa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163uzccbamx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zzegydeo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163shvkzbng.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163waroqwlb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pbsgwomp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zrzlhqou.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163focoppnk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163srkdyiti.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jorupzld.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rimutahe.html

JS:   arr.length
来源：http://www.aibaodan.cn/163pxdoejpb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qqxpzits.html

Java: list.size();
来源：http://www.sxryk.cn/163pgaoizdt.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pumjnrrv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163etmjjvov.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ivihsrao.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ltytxmjw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163pdtebzye.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xcenbses.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sjiikorp.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bouqedzj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zeqefuwh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xkqwovqv.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163kprhflcf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163togdpwkn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xppyaujs.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163spyhctrb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163lfaznurg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163oiexheja.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vhpsmiek.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ozixthum.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xnjrsumg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163svfezyvp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rwjddifk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zjclhqfs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rwurcbuu.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ckdnvccu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163lmipgicz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163gwxwwyzo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163skptiham.html


<!-- 参考信息 -->