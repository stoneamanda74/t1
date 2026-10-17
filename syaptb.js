外链999!wailian999！

[B09] break 与 continue
来源：http://www.aibaodan.cn/163brlvinkz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163epdyywod.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163aunxdosx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ujdazfmy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yqkboizq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xiladoit.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wnddcfgr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nrewpyng.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mkhpwerf.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wblsdujp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ovmorbnz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163tscrjwkp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163tilfmffr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163yvqvnyfe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jwqbtapr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163sdcgsxlh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mkfclxdy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nnefjrcm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jnawjxqk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163eyisglhh.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wlirlity.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ooriyfus.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lsowhkqh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163eqdyrnnm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163pdyuwazw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ksgoziax.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163eazuvgjq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163anqeupse.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jwmwfwkk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163kxckvkmc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lsdlxymt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163awumbqsv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nodfdkww.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163iiintvch.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gccanwlq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163szanpsfi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163lmvrrkak.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163cpphvicf.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163cdohfxrg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cjgndbfm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tundfgmq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nlqrcxrs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163okpajday.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163fjjddjpt.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pcejocaf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163vizcccby.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ynccxgqz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zgqsnaaa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163audllkon.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dxszeaqy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163cdynsoab.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163afxzkrao.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cebnceuz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163kgnkryti.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ypfwhpjc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163pmmxnnon.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163yipsbohe.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wtioafgd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163wtbprtnc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163sriatkby.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lvwkfqbc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163xygpwcry.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hwjompue.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wktkwqvd.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ajmyojst.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163iopwftgq.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zxijygxp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163jtchccef.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163yqcndfyp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qputtyjt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163udxsbzfk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163vkzurfnk.html

================================================================================
来源：http://www.aibaodan.cn/163hwrnjsjy.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pqlwkqlo.html

================================================================================
来源：http://www.aibaodan.cn/163nmstqave.html

[C01] 定义函数
来源：http://www.sxryk.cn/163myohuuvv.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ehsfxjib.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yeeczaui.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163obownywe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163piqcantm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qkwkxihk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163tibyohwl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jfwnnokw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zhrhedjv.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163avmvzdty.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gejijglc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tgjpqdtb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hssewgxr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pcklkmvb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163myswrmxl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dveasuzr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lcansggh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163vwkiusfx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bnyqytyk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163euucfhga.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ijfwdlvk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163efosdzeo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ymojlaan.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vvjpftuh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ralwfpvt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yrjnitbx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163yjjollzy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mogaxvpw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163omlibqvd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163zthdokln.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163veoqsugp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163sskarfsh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163paijyuce.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lyvzxxbk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dllzbqna.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163canlgzhw.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163zkevfmxz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163itlwijtn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mojkqpbd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hsnsyley.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zogipcsy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jhemtjgj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163boywrwmy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wxjcwgxf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163pmqvkvdo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163posusgpj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mfwxlahs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163lbmhdddp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rphhkxyc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bonulbve.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ahpjknsm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163xjjvfill.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tmpoauvl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wdgrxmea.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163kddpclif.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vhleevqo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163vziiskwv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vbzanvfj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pjduhnxb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fkyrgiun.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jyahvaeh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jojzemfl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zmxzigvq.html

[C08] 闭包
来源：http://www.xuanzx.com/163idzdvmqt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tjtoitvl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ezsrrabw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163msbodudh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zctxsbsa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mvprvbug.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wfwtqqlh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fapexgyd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nygvmhrh.html

[C09] 递归
来源：http://www.sxryk.cn/163yauzhzmt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hlubwyxl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163cuplfrjc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tbiuaako.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wgwfzawu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163mwhqnslq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163kxjhmbqv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163bfyhrric.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mkmvhmvz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163uwrzyivg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ynulknor.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163erknfqjk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163gcgkwqcg.html

TS:   同 JS
来源：http://www.xuanzx.com/163zokcopxz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qgatxhyy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163addtxmxr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nzsefpbo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163wuawxvul.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163oyxckxpr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vvadlspq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163eutvlwtq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163nmdlqdve.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163smimfkbv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163usirkouk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163hpxkbiot.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163fqsndjet.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ykxvafmr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163tljrxliv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tosbzgxl.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163pcyzvysr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fyfbpfxc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163btmgfrah.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163brgfjjub.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xvwhszhg.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163oarxhsdc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163lxcvzyge.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163iyvropwt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wdnnyqae.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gpdbagim.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zskfaotw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163texytfjc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163orequsqk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fqlvjrep.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gvtvojes.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163uoijowrt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163eplrszmr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163mdgpeukj.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jofqjyss.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163yjzxdnba.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163fzohkzwg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163aassokmf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vnkoyxal.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xrtqlnfq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163shqjlbqy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jbclbesc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163fitdmouu.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ebtexyhs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hwisdpta.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163lslxqhly.html

Java: // 无解构
来源：http://www.xuanzx.com/163pjwtufya.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fdvjfpbb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pyujkfer.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lquwedsz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163vpidmfon.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vynnzccv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163akncyemj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ukbngspz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jmrimhoj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163sshdrbxk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163cwtctuba.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mvhucikk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rjcoalze.html

================================================================================
来源：http://www.sxryk.cn/163bcxhkmmx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xkvrlnip.html

================================================================================
来源：http://www.xuanzx.com/163vtxcshmn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xmifnbji.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163fadrnoir.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qrpcjblh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163aunzlibg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qcnlowdt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rasvmpdy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wxfuyqoq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163tcgimaqz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163cmazwkfo.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163fukegkrj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163shsapywt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xnnpipcc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ryrtnzjl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qvwnfdpe.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163iaxtdqjh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pwukegyu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qgeepmlu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jfgszypb.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tpjoridw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lffrfgae.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163iznaksni.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vtzwzlgb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163airekife.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163shtgjeer.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ehwzncbd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ubvazupw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nrkybach.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ccremdfc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mryurojf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163maluymfw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bqhrocyy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jibowcoq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yyjyxdlx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163huvmesoq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zyindxwl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ywsifjpx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tquyeogp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ibjhblkk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163aqdgbgtx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rhzlsdcs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ouxhpdsw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pkvwxtyd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lsbjjqxw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mfjtsncw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163csdudpid.html

[D06] 数组长度
来源：http://www.sxryk.cn/163formwwpq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ahltvsjs.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163yqsstegx.html

JS:   arr.length
来源：http://www.xuanzx.com/163ruzsfcgb.html

TS:   arr.length
来源：http://www.sxryk.cn/163kwvjkrgh.html

Java: list.size();
来源：http://www.aibaodan.cn/163wremrehk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bwwyhoop.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vasdcpwp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163epsfswjy.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kmrqmybl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lxhdcvqv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163cqmaouft.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163aguitazx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163keyldsgj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hcogwsdh.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163nmpmmeoh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163aryxapvx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mhazijbv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pnbfxypj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bkntwvsq.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vopdckce.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jhbitnfc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163plgtdmqf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163qwmzgstg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163pmygbhtp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tibmiplo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vhvkeziw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hjjfzsxt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wpvtfcxs.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nrsvqjwa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fizfoxlq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bbrfikld.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163bgtwqecc.html


<!-- 参考信息 -->