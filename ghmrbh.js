外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163arcattol.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163rscmalwo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bgetneay.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163pqyqbykq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163brjvjttf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mxkdrmec.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163detgzovm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kvobjdmi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fjhnviqu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163tbgcedab.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jztwsrhi.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jhbomolw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163grohtfuf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qseoqtzn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163quxmufsc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163idfgdznh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uowoukdn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lsddbebt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163knvcglqr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ckibycsf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qhrfrzlc.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163pedpdgqs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ldhpkxji.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163digojggz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ahqxfvsj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vchqgeyk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163grceyois.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dpkmvdvl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163yoxbnoof.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kftykiuu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163nfctsxce.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163emayjtxy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mdophxmx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ihkpixnu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163emkblnrb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gkhnewva.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163junsyfvj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ywoavxut.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163yjojbvap.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163hkvmkrhs.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163yvnhtloy.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163lohkmuos.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vkajvrcj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163roteaaqf.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163inyumidf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fqrzbrpg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163mqbmvoev.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kfmykxqq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163unxntpst.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163flwvwuew.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ytstmeqt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qfjdiwds.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163vbdohvzj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zafmzgbg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vcottfxh.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zzefafbn.html

================================================================================
来源：http://www.aibaodan.cn/163hsqrujlm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ktvrcfjs.html

================================================================================
来源：http://www.sxryk.cn/163cdphbqkm.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fgtrmiku.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ktcmvroq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rjxbbxod.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163xkuhxaad.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163clxfnpng.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ebkazjla.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vxjzyrnq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163yozipnrm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ezkrqwbd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hvmuvqil.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ozzdiyib.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163sccxcalx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163swcdhsqf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ovsatrtf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dsbmtzum.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qodzkmag.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vifmzksa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vtaoolob.html

[C03] 可变参数
来源：http://www.sxryk.cn/163wejxqnvp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gtnhlqch.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163defocscc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rplypque.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163psawupzj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163kcfxrfvn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163drydfwki.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163usovestn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163apdnhyjs.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bkxsehcq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163edmygoht.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lfxtbyzl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pqwtqgsg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hsqsgsnb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vpoxtgan.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163soxtssld.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hopkacjr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163duktzyps.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mstmctjs.html

Py:   return a, b
来源：http://www.xuanzx.com/163fssdalbw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mwrbeysa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163txfhudoy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dujgysya.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jbrnasej.html

Go:   return a, b
来源：http://www.sxryk.cn/163xpffazau.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kpovaker.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gxnzelwo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163tmsdkqhk.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163qxddsvsv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dfofpmqd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gunfwizd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hnwuxkzs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163leozwnio.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rrfpndxe.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bwuejtgl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dvnutohn.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jomapsec.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163unvqnmxj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ylnpicdl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jmsdnncu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lqjshrbc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163dhdecmgb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ohdnflnu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xijqlqlf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vmowylxa.html

[C08] 闭包
来源：http://www.sxryk.cn/163remvfika.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163dqyaavhk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lrjhneed.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ttcdffgl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mcksckyc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163evqyuvvc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163oaafhmqe.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dsifeqih.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yyyarmcb.html

[C09] 递归
来源：http://www.sxryk.cn/163incaiokb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hqophasu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ntbxtgez.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ukfgello.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dleewuqf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163dlkgaivd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xpstpvuk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vifsgkwg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163hzrhhckv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rtefjxcl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163sfxquwly.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nvxyqnkw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163qodizesf.html

TS:   同 JS
来源：http://www.sxryk.cn/163jmvqkgxq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dyxucgmf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xkmznwtg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163phhktqxq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163eogjuawz.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ryqldgge.html

Py:   from module import func
来源：http://www.xuanzx.com/163hderypzu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ibmygutt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163phxxnalt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163detxwsiq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jxqdmmis.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rdeiphbe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pxdhefde.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hqcfbvsr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163exzczjon.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163fsktgihi.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tyfhbmka.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vulcbtkf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rfkjzaql.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mcvopyhp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163eblowlgj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lcpnuaiv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fsjzazwz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tqqjuosl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163eqgzimla.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dklbrcxr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163cjolojwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gjcflauc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163grsbmixi.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zfcjvxee.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ozkyrelh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pdudgfxi.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163qjialmuz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163nakafrof.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bhrxpmod.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bclessru.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fkjskvpi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rgammnvv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fawylvtz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ekoiinkl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kvrwdiad.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cypasiad.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pmbzewmm.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163nuiwdtba.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ultdbouv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163bfeoefbr.html

Java: // 无解构
来源：http://www.xuanzx.com/163zbkpialm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vpvoyqoj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163mlwwvuzu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gohvwfwy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163iaadwwal.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yvovacmi.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163qabromfs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163yyfwrked.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vyhukadr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163livevunq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163hfptixiv.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kaldbdih.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tqkvlttg.html

================================================================================
来源：http://www.xuanzx.com/163yvamhxos.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163znqsfyod.html

================================================================================
来源：http://www.xuanzx.com/163wxyibrbg.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jpavkumv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ddojzvta.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163afgpjytv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qcjajmik.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wogbvmlb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kofitlua.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163tdggmdpa.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163awfogqym.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ewgujnml.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zntxsssl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qgztlakv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qhlkgiyk.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163pokxdjqi.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lzwhrjlb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cfqgevcg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fbrqqudc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163modiaidk.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163umsiedyk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yyojejmb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lnaxqmho.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163bxmqhlqv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163etigfpzj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qqldoogv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163thejwzdm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gxdsxfhw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163sqtxswln.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vdsxcncj.html

[D04] 删除元素
来源：http://www.sxryk.cn/163iyvodllb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163xtzfpmgd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163apigqdmi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163azypzvey.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bebnlqdv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bqgkbetp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jkekwpfz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163nekytjjd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163imxyugfd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tdqchsmw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163czhoxtro.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ckblhdsz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xqyhbvaf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163atfcnfmr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jbcpismo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qseyccds.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ejtxoewg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ctggvged.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163fuhlbnvz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qzmxiipr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163oywbtxhw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xxyhyohw.html

TS:   arr.length
来源：http://www.xuanzx.com/163kupbxdmi.html

Java: list.size();
来源：http://www.sxryk.cn/163bellaumh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ejzwudjo.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163biqkaiil.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163cxpiwcti.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ilrsvrro.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163fmyzvlmo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dpjnrxxy.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jdkgmkfp.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163igxkyemu.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163itbdbayx.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163xqwujbve.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163camsgbnk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163amaeqaxm.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fgxxgdre.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163eqawmgdg.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163abmuyaud.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163gjsiticv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163nsfulpwv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ravewwfz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163desuxhdl.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tnnlbchg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fzqrvylu.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ljwaouha.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ielounbc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hvhkryfz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hqxqjnwz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cetunmie.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163cgxaztlt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zvmcfheh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163aovlczfq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vhzlhnqp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uwvhoiyq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163nurwkuhb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ddvvoiuw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fehkddyu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wrbtesfh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xytjimub.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hdxdlcuy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rapxeeoy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163yhaiiasa.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rcmrowiz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163pggelyan.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163kmjkbnfa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wdgatfaa.html


<!-- 参考信息 -->