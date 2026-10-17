外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bcbdzyqt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nshthawc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163yitehorw.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tteghwul.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wbuxwtyq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163fouotizk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163iuezelrb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mutjpaic.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ryojmtbk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163etgegxxj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163lmzhhrnn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163muyasguq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tvtmrzkn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163faccdwzi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163lcxvebln.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rdrnnwib.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ajnnjcgu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dmavdcxs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163btupwojs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ohecdxny.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ybrdkyws.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ejpxlvcp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ponpvmiw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pcttohez.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163exlbhacp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uuxnbvzy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163khxeygsm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mpeuoozr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163uuzdiiut.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zzwtjbrt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163llrsqatb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163loivopkw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rvpiicxr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163gtswiyas.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zmjskevc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lvgxztsq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iprtfwbt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vwpchgyf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163oiicqclq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pbejhdxm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163pqeujcps.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dyfictam.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163smdfwkzw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sowawccg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ejvhaykc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fjixabgp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cvzxvfyy.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163fhdygmkv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163igjotecy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163cpdfmibb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163okiyrevs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163otnuxogm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kznyuqlq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vumozjtv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wtcfoofc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mggdzrei.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163lcmaoptr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gdoknbrd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163coecfhtr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dixmqbvd.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zbailkza.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163inxoouim.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xcrxdspx.html

Java: a && b || !c
来源：http://www.xuanzx.com/163kxinvkse.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rmuozcuo.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163orjufmld.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163llhqtuwc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lnylqfiv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163uwwbslys.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163uvwekqqn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163uzxfbzmg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nfbmwijl.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163toniblwu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wyvaaisk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sjwqojpp.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jqijzjkb.html

================================================================================
来源：http://www.sxryk.cn/163pghyzayt.html

C. 函数与作用域
来源：http://www.sxryk.cn/163glixaeay.html

================================================================================
来源：http://www.xuanzx.com/163opxoqzbf.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xfutqvzp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ghwtosze.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lnzwhxwk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hoansmzo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kvmjkkhx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wdjpewko.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ojfpsbcw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163liklixhi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ecpnxanv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bspnfegu.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163yclffzdq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163anzrsxvw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zxismbwd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lvkzejyv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dyunrjdk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ionlnfmc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ldyzcwoh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bwifvjqp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163nprxphno.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163favvvtxd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vxwcxrbi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rqvtvaao.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hnyzacqc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zykdhohl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pbucunqp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163bgjnoqrb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vnxuvcmu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ffpyyqjn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xyydugyu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xuylcuuz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hbyuttms.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163wosudcwn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nrcluqrn.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163svxhkhoz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bgenirkx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tlncdjrt.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ibhaihwk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fptrjbir.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163njhdtgbm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163etkjznli.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163znkucldl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163yuxrczds.html

Go:   return a, b
来源：http://www.aibaodan.cn/163dcincnoq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163oynotnkm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163txxpfuif.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163eoldruxr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163umwqcwxa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zscoeuvx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hzfmvrvf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163dfgjmuqr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xynkfzgr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163igftzsju.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ufoaodjq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xdildxig.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qysheyrq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rzqhrjin.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163srfayxzy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163havmjctx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163sycmwlql.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nlozsgka.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163iwcegmff.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rrxpsgey.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163oibveomq.html

[C08] 闭包
来源：http://www.xuanzx.com/163fazyhdjq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163eaycwcvs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163trhagwta.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ycwtsyzj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lcpkhuti.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ogsbsbft.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ptjfpvxd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mdjxnrmu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163obchylfh.html

[C09] 递归
来源：http://www.sxryk.cn/163hrfbnwen.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163rgvjemrf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163nhzsqfql.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163izaazzcs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163klbkfmgu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wixksimp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163hxczibxe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163enblhgrd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163stlwpnsh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163erhbmutp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163arvgwyeh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xuddvaje.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163gbnqfodo.html

TS:   同 JS
来源：http://www.sxryk.cn/163uxowqvkl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163cvwymnyf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163essiqbre.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163spzsegni.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ucqhinbs.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163yaemnyrg.html

Py:   from module import func
来源：http://www.sxryk.cn/163ooylacks.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163abegmtkp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lvluyqqu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163snvzrvtj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xrvkqreb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dylessyc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163exuhphhl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163crhnmsdr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vhgibpfj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cqxsjfts.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163iqknvbic.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163oedumwvs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qfbhfexj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163frebdbij.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163zgatgjlh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163pdkkodcj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dhjatdmf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fnnudtpn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nixdvsnn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qhwxcwdh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uyksfyal.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xnjptoqh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163itscegfj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zdmkvgas.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163evovkdri.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yhyvmnpt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163sysqyldn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dbkicrts.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163mjxjxpbg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kkmrbekf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qbmrfluj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ipxyjkbp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qzfnjcbd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vilytlzy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fvlwhqtf.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yuashtkp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kddjiqzi.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mlqywhdw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163quaennxp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yyicykax.html

Java: // 无解构
来源：http://www.xuanzx.com/163pmlnlwzo.html

Go:   // 无解构
来源：http://www.xuanzx.com/163agtjxjgw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fdpvmiuq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hgtfqzon.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jdbahvrh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lzyynynd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163dmqmqxwr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163nnyivden.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kbsbicok.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163metkfaee.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163pljfyzli.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163lqcqpwgu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163khcpndaq.html

================================================================================
来源：http://www.sxryk.cn/163iplhdghr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jbppstud.html

================================================================================
来源：http://www.aibaodan.cn/163zkbeppgj.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163opwsdsne.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163obozghod.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uinakknf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mxtazdpo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qkckrynx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fcyktsiu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163pmdeltez.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163cmxdhpae.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163smdvdovu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ilheyqqj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lcsxtjtn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163uwxuxnhy.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163muyjngsp.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163hholtdti.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hlohgchu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dvxidmop.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163tspfrcli.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vxtfplhi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163swdduykh.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lqrjbvof.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xzsuikzw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163sfbhvsvr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fwcyppbt.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iyojrfkm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ifotroqu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ssycdhzs.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yaetjufa.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ipgkdcvz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nvisvyfr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163hjxxcehg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jvparqvg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lwccrnof.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jtnyhssh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rpwnhyzd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vtahyhpy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163pabbdyvd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163rkozwjve.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xsczxiyk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mgpgnnpo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163awtntsmb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pbewkzsp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hdwkknrm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vnuirngi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bmpesbkg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163dgniqrdg.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ukurhfjy.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163tionjiof.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163srxzqwji.html

JS:   arr.length
来源：http://www.aibaodan.cn/163khtfgcmv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ykjkuhnc.html

Java: list.size();
来源：http://www.sxryk.cn/163hmtvvgbj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163gxgeszqo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163zrxzkwkc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wpxkdwry.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tuwcloqu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vlkokxiq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qlizxryt.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xodbbtqt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jjfrspbb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wkjgxbco.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163dclpwvoe.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163bzwvzzmy.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wzwridwg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163wbixebjs.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163sbcwzqyz.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163lzjpgnhx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163desphqkw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lidwdvuy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163etkbhtip.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gmodtrxz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163blfykndh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163zdpmuwvg.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jurehnzn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uunyjvzn.html


<!-- 参考信息 -->