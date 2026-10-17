外链999!wailian999！

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zcwjptci.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tqxpmsdx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qgbbmrdh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vbnfjsmq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tnpngcnc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bcfimlzj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163smutvbqr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163gcmxemsi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bpuzxulm.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bvtaiohj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163taelyljm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163aiqeuqtg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wwwvcmiy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cqnvgqkd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163upiowvtx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dhyvmvgq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163iucqbvnw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bbsgfueq.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163yzpgesxg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163yatijhyv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hntnjnli.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qiujjiow.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163enfvnddv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xvleukiy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163eezxkgsq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163btbwvgrh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163rmwjrsmm.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163oagyaiif.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hfflmuds.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gdyvecct.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gljjjsmk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mwkdhdud.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uzjtdwwb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bfelmecr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qfnxgkui.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fanpdopa.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wbnbzarl.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vftxzmqq.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vbctdema.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cwyiataj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vzzzfpiu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163tfmxifdw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wnsfcdcq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xgshonsq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pzbviead.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163oueufiat.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163shtzhmkh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163pbqcerdu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fhxluklr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jmdkrsbh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rtcosibn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vjjaupmr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163heezwyrv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dvyqrkdv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163fmfuedwf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zinallqn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hpgqgnsb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163szzokieu.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qnnizmbi.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163tcznizus.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163sowyetbt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jttuelcj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yeadvwoi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163kxvvctmq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qeguhaix.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jcdedtrm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163aenidsho.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dkmprhfy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yfucgygr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rqnomehs.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163faledbxv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ngwjfxol.html

================================================================================
来源：http://www.sxryk.cn/163atvkkljk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qixhazzn.html

================================================================================
来源：http://www.xuanzx.com/163zzmhrxnx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rkjoqamh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rloehepa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hlgifdbb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ctlpjtrv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163inakcicc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pejjbylb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zcvwujif.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hroxzuiv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sbxotklg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qljqwujq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ukdtjqtx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fazxkhhw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vsypmllq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163lxzjzgwu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fkdyaivp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ktbjkaov.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wjxycuij.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nadrophk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163facgcpus.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jctcvuzi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lymftlmw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yysptjro.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cbnekfkb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pankgqgr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ghcipdtl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ivyvmmws.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fkxpfwhy.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nmpxzvod.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ciaojobc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163icjrfclf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pluheraq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163cijnwozx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qogpqlqp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163maczkyrr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163elsjjybx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163smxjgcmk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wwlbiofd.html

Py:   return a, b
来源：http://www.xuanzx.com/163kuqbwdkm.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163niwwmmki.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xnntpvua.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163wnvmxnni.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163okuvhesm.html

Go:   return a, b
来源：http://www.xuanzx.com/163skzxxtuh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jlwrkcms.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ouivirkz.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qyamswno.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163drcedktw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gwgneqdd.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ifqthxjq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jskqyjtj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jstelgtv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163yvghsswo.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163rntqxxhs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163epkcgstd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163nfcgipqd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fuffpiem.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163hbxncpax.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mwddxjvc.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jsezaszi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163glgcepdd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163yqddfegn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163bqifwwbd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gpbgssnz.html

[C08] 闭包
来源：http://www.sxryk.cn/163fpdrjbkm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163guvfxlxh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ajrtibun.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163toewjgwd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dbvyzbqs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vkwuudrx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qzxeazpr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ydtlwqex.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pzbghoug.html

[C09] 递归
来源：http://www.xuanzx.com/163paydnkfh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163oublbquq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163zneevsfs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163opuxmocp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ythmkuoa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fpwsmsdd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163yzqanvzw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xgvbzalr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hdzihqnm.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163oqpzfqqk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163teouccjp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xdsjozvr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163goaynnwi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163idrifsxs.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nmeiwqwi.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ilahijcp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zkgufrhb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163cadsoknd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ngjlbndg.html

Py:   from module import func
来源：http://www.xuanzx.com/163gtxonmvv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163aniczjpp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163frsyvnhy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mvthdoqy.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wsyyqohc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cbgdhwam.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163axjmtzos.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ptxuvdxo.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163idmlnorc.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163btbaafbf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163joggewfb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xlicfosm.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163iluyubwq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163culqhfgs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163sabvouhq.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163kwkelulf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dyqhlarv.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163drajnxex.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hkmhvxmq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pffzidnp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163cxjljunv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vvmrwsgn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wgvvwdpt.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cwbexuji.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rwcemcyg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163rcjxzjmu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163eqvqmzun.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gtmnzatp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xjvlfozp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163oyprkuhd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163aqmawtuc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163nrfkzqnm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ilrbtizn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163rghvcnme.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163duhollmb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gglinebt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dgqhtjyq.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163btppztth.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163njmjppdl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163mmcimvds.html

Java: // 无解构
来源：http://www.xuanzx.com/163zladzscq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163akknqpsy.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yzwvysjh.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hzafrlia.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ftcxvnxo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hrhtxelp.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163zftlxfik.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163vsnumfji.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nqjvjzax.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cidrjkln.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163fgsdvmnp.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163opbohqif.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163wpijtgea.html

================================================================================
来源：http://www.sxryk.cn/163xhgntivn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mhrhdqha.html

================================================================================
来源：http://www.sxryk.cn/163pqmzpvae.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163oormuymw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163fxzwouxu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qnbaxaol.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xihqvbyg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ksaoqnwg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163vwbmmdlf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qbojogek.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163kafpyuou.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163yrgforrd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163thnhadwc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163huermhou.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hdlgnacp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xatrwdsp.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qdvqopae.html

Java: list.add(4);
来源：http://www.xuanzx.com/163pkasmcik.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163hzxvwdpz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vpfzkllx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gkcusufx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163zuwrtdif.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ccbjcgkh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163rimwihbu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163yuyicybt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163pfakfkde.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163xpymcpsh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nhtedsbn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pgfwlkst.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wyqwyhsc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vctusdkh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163eyronxjw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gksexvyz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fgpfgvfj.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dhtkfrbw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yibmetwf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ceudztxl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163wkamxcdw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ahfvswou.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vlcnnale.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163erycjaru.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163szlnopjw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163yovupfdu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163doblifej.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163aluhtdoc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ytmatinj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qjodycmx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163staxkgol.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163fwcgmopr.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xrvfdspe.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163abzqdxlv.html

JS:   arr.length
来源：http://www.sxryk.cn/163rtqoymqk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kxgdyxem.html

Java: list.size();
来源：http://www.sxryk.cn/163qfnhenao.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163eclolhcd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jorhgawz.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bvygrasr.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cbsmhtzi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qwvhibxc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kjogbpjf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bxprpyeb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cqlfhnab.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qyysdbed.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nkvqlezy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163lonpotqu.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mcdivuwu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163mydrsmej.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qouezuna.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hahokbsz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lpzqkvft.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wchuwvxc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163kmlndahk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hibuzrxi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163vwqzyokc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hdsbuqgx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163unawxlei.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zylkttbm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163layagudo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xipaxxoa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163gvcizvxk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xzjkussu.html


<!-- 参考信息 -->