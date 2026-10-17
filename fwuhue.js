外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163icqqytab.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jgtpzddq.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163linfqojs.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qnqbtqjv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fweuttyd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163reugfrkb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bicgklsz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163nnhfrshb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163nqdarego.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bztewnux.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bznqyxcd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163sfzseogu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qmbznyeq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163yxnlaewa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gpzbvzec.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wiyusdml.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kouuukvv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163olkycbai.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yzdoefqv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bmktmzjq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163nboaihio.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163anonvdfn.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ehxxewir.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ouuplwxm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ktbugusm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163wosbudza.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163rmpvhnrf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vwvvkwos.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163gfucdkib.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163itvjnpap.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163eemhrsct.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163eehlwzwx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mwacauuj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uqwummzu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jucztfgx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163rghninjx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xbaydlkv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163tmgikmwe.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ihafwzci.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163nkfnvpux.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hdymcddo.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163isofvpwg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hcusrkss.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nidogrwa.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ljjgzdkd.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163rguelhqa.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iwrnwvcy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gqawhrcz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ozrgzmaq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163vwunkrvv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163gtsbakvk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gkoizeav.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163xppitozm.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vjwgrjyy.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fatjwejt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hhppcqwy.html

================================================================================
来源：http://www.xuanzx.com/163irbnehfm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wqsarvzo.html

================================================================================
来源：http://www.aibaodan.cn/163yweqkkxm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qrvbyezi.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163avvhvrcj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ewvvldis.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rnygmobi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zikkmrjs.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qqrxaogh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163izmsaqeu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ndjlkiyc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zmudfjjk.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cfurclft.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163sjhbmzye.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xkgizmvl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163kdzfujed.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ovqcfwaf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ujbbgcog.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163fgxnchvv.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163umwqeuwb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163qvwvzjyd.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ncnsciog.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163irqhrigp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163rwjpejut.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163uspyuqzb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ukrxdykb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163yphkpsss.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qrxblrmp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163uigzgkjv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bjaamoov.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lhqnbueh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163wsbnjnno.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nasgoqhm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163touvyufl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lkosuryn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pwhbafvs.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163prpamjou.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lmalaqtc.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mfyhlxbf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bquyutje.html

Py:   return a, b
来源：http://www.sxryk.cn/163muieyybq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kpapbwno.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qktfumhu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163sbdneton.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163eaulyidx.html

Go:   return a, b
来源：http://www.sxryk.cn/163tssfvcda.html

Ruby: return a, b
来源：http://www.sxryk.cn/163milgfsfi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ubsjfybn.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lzakspyr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163tuemsnnf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gxwigjyx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ccjkgguz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163iakjzpdm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zccvjvzr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ffyelyuo.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rxqmkhul.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jxiwjcsh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sprlrgqp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163iuqycbaj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zzphyleh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163phdjewot.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163fepgzlgs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qlmdzfdh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qdzpmoqj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nbhyplwq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fmjokjha.html

[C08] 闭包
来源：http://www.sxryk.cn/163pjnydhtp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163igcgcagt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wzlwsbqw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163sjojxueu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qrwzlubd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163uittcxsn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163habirzhj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vtpokhvw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rfxtmhxt.html

[C09] 递归
来源：http://www.aibaodan.cn/163teqywsfv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gpoytnao.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163yjqotcln.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163myuovxgp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vaoyjtyn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fkwuwses.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nvptjvue.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163uhyghzkl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xtjysdzi.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vvthydlh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163isavcqjz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163pfazdrdp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hvobtnwb.html

TS:   同 JS
来源：http://www.aibaodan.cn/163mzmmmeef.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163njivpjfx.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ytkyuiet.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dpeuenjg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163uldvltyp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cjegyrdh.html

Py:   from module import func
来源：http://www.aibaodan.cn/163anqqxnyq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qaehrwti.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163endzqpad.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163azmztiff.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vaqiptrw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163wseycfhl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rlbgnujh.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zczgmirc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163acxhrlbc.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jdxpzjoq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yhbyiage.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lekarwrh.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163webnzcnq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zdbgzlwp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gttctcmc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lnfsdzrt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163xncfqfbj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lkkhefed.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lsnillwv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bguztzon.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gyfortuy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nhalcvuu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rumsqoev.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hzcghqgr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163csvahkti.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163emkbppzk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163srovqeoj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163azgocwcj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xvqimqhr.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163dhkrgkgf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ktqqzihn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163tvbihdlp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tsdatsbr.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bnzjpwhr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rzblszta.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ovcdmrwl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163cprvsmhs.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dxxjcppz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163deblfrzw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163qbdkqell.html

Java: // 无解构
来源：http://www.xuanzx.com/163oabdkzhb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hrchtnsz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163mcwkskxl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tkvorvup.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jgntecov.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ioytcocj.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kuuspuzx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163eafyllyf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vjzfsfqj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xhdqhfnc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kxoqijjw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ubjddvyp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163kgeecrjm.html

================================================================================
来源：http://www.sxryk.cn/163uoknxqgi.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163icmrfyqk.html

================================================================================
来源：http://www.xuanzx.com/163dooqhtqm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163wkhrjovm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163tltujnzq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163farczzty.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jbgdyrkn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163euoffdjg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163dqrgvsal.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dhdreact.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163sfvoetpw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zbaymjwi.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ajeloiee.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zeghifbq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hfazpabu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163slakcznr.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163yqxrulbl.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163cbzgqebj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163psebajzk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163qeecezqw.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xeismlxt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jpttkwsb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rdmspedu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xtkbdqez.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163gfjvwjhy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wpbkrvra.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163oqwngrcp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163egjpzqty.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ligrskly.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163tjquiiwr.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mykzwddd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163khxngrxv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163erlbbdcb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hnvrpwok.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qottzlbl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163vrnwlmhv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163akixrzsi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lckyqvhy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pfssogoj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163uaozyspk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163aviygxmp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ljhmmxuc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wltbcfgy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qylpidao.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163faiflqoz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163bdkqrelf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kxobjevw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xavboaom.html

[D06] 数组长度
来源：http://www.xuanzx.com/163eciuqtov.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tlzbcjev.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qldutqhk.html

JS:   arr.length
来源：http://www.xuanzx.com/163ewzjqojs.html

TS:   arr.length
来源：http://www.xuanzx.com/163yofymlzf.html

Java: list.size();
来源：http://www.aibaodan.cn/163fpjepkok.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163kdqkwskj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kvxexhrr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wpmogtlr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ljfnrdza.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sndajvjn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ccdbbhcy.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cdgflbhy.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ourepgku.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163csuqtell.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163nrkanruc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vbheuqyl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163kehajzyi.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fmfgrapr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vyvpcizw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zomxgnxy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mwlumikq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hdbqvgtm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163pnelzivw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wwjcgufb.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wdlxgqog.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qsgapjsp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163onssjeib.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163eqhysxlm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163btotwzpd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163bataozri.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163judbpjnr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163toubtbmf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mjkhewbm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jcpexloa.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bwuvsfzp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ytlblkbd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mzwqaklj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vlhawagn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mxmtwuiw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xnkpypkf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163weivqkrg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163pwhyfckc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gvtzdftz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ekdhgyee.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ajvwdefc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163yjcjvfqn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qwqfrust.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163swonamhs.html


<!-- 参考信息 -->