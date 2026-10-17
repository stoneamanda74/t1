外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163djmctudl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cvzwroax.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ickchccw.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bummboqw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xxyubcjr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pzlgkvjv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mtknihkc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ubamsyql.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163knmqkhlu.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mwqmecwm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163plambjkh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163phmmvlvp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163siorjeqi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163inbkhoti.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tyiglbhq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163odrkovnj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jjbimctk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163bhsfaldr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nthdihwk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vrmzqhqp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vybwqyuu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dgohbczx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ivmyiwbh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sgzqslnm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zblrammw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163dqsfhnvh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163uzgkysfg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163baexszjg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163iztoonit.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163jsuxengu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kjfjjbsf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tiofxqcb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ohmpapbg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163btpftoqq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163lssfcmix.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ohxlkujr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nnupqdau.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wpktxjid.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wxtkejxw.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163nialsgji.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nbhddyoa.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163tpdrbsdy.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qfbatpje.html

Java: a && b || !c
来源：http://www.xuanzx.com/163olusbyay.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nuhfaeoq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mpcfieon.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163pjetflfg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163oiydonlf.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nlnytdyw.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kkbdshgn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163zriwelxk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mlxajait.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163bnnvskce.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163lfkufndj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zpsvvuob.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163djevidds.html

================================================================================
来源：http://www.xuanzx.com/163rynhaqke.html

C. 函数与作用域
来源：http://www.xuanzx.com/163dkzcycxs.html

================================================================================
来源：http://www.aibaodan.cn/163ogpxbhbf.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vfdclqcv.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163zmxsxpnh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pprwjnva.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qdxzbdey.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cwizoezg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xcnjcpuy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wvdtktji.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fkhztmdx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vywnhibs.html

[C02] 默认参数
来源：http://www.xuanzx.com/163osybehha.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nihovyxf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163tkgzlzun.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163awxlwktb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163blaynvfh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163yysfkdwd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163viiqsojo.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163baddjnqx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ijsxykeh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dgoqxcfa.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ysqmwelk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ylsqbswb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dtbhttpw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ckflrndz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163spgbkcdm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gtrwzqmo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163nffjmogq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163gtyliwgn.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vtglhdqn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163sgxnjyih.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163iadgjkdc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163uyviddax.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163nkfqarig.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ogjjcgqb.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163vlykgkyo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oebzvmqn.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wedjnmbe.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zaxxvwnn.html

Py:   return a, b
来源：http://www.sxryk.cn/163cshfztae.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163eakwlbmi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bfsdezdo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rodbnjxl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163lbeeknmy.html

Go:   return a, b
来源：http://www.sxryk.cn/163oxnmzeoh.html

Ruby: return a, b
来源：http://www.xuanzx.com/163tbwxlher.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cvbqvodi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hiqvrjiq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163tcmfelyi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163doifzmbb.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mkailivi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163afndsmcz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163otterhld.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163eosrrxtm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ubqfmzti.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fjrhgdiv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cwkbfanm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lnkmkmhe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mgxcrqse.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dplmvlxp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ujuacutn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163loaguztn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jdupscao.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163czchnblo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ljqbrccm.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wmvwkzin.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163towpmrad.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163uxswjljg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eebcteoo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vemycogz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pccdmckq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ddmxsaqg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163usafpuus.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fjloqlwz.html

[C09] 递归
来源：http://www.xuanzx.com/163rkodddrp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ggnqmwtf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cdntybqo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lgupouzx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bisssaft.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163mhzrpleq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163fkuxwijp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163cigmzmyh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163mxciqvdm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163peyhrkdz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ufkwernl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163uvyioyjr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163knvjbiih.html

TS:   同 JS
来源：http://www.sxryk.cn/163zksqnrgn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jiudceqc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rjuhmlmp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yrmfppqb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163blamynpb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hfbzexrc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163eylhpuxj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163wcruhzls.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ywcqqvis.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wdkhnhfl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tvuxojjs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gmsqvjyz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163igdasfsf.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163nptfxpfu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163tpopshwm.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163sicwracn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vqctqeth.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iswtetti.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pxvkjgwy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163yhugxmyx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bdffamdf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163humoywsi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163sistafpe.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pnqeuzda.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hbuyuhjf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tmrcpbpu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jmxcrdmy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bnhkgbks.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gzzfphtq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nzlvfivm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lbjovayz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cbrljvey.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163lgwqosuy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163opgoqrzq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mogmgsqi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163bsmvqbnd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dshigmkz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qpgzpgyw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qgrwxodv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jbluaptg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xjurwfzm.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163czfggwbw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163zdqiyyfj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dotmwxgg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ugmnabsf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163hetpbvxp.html

Java: // 无解构
来源：http://www.sxryk.cn/163gmtdtsij.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fmcgnqlr.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163gyqxhlrd.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qajktbsw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163rskkejrq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xmzptsec.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163gykczhgx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163llpkkfqh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163hdpyqtdr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163pgwjvzxm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163yxgpnjdc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pnodmtia.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dvcuzero.html

================================================================================
来源：http://www.xuanzx.com/163gwvlzsfo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163nbncqscw.html

================================================================================
来源：http://www.aibaodan.cn/163xgkwpazz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163rhthfygn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nfydwvbc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xtgjfaaq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163nuswfhot.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yfhgksfs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163zztbkadl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jpwtjvbm.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163rlabfeje.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163iuueqdiu.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163wxrpyjsp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tuahxjqc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xrlovnkh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fdfubfvf.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163dbyvbazs.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rznllvja.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ruxhvqfr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mxdjlrkt.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bnpsnmtf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163fqqacopx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163pphezwrp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jypndxrm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163aarcbhnv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163bmgmgnzs.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163krvxmvkw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zfxkbtok.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163clzlnmtu.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vskipvey.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ilcaympl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163owllllmv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163edkwdjfd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dvgmvxcu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gptdgntl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163owhhlnxq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ltrmazij.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hqeoebxw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163uwmwfxlb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fpjujypf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sggyfspf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163dfuvcgyg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163cxigynye.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163abhlmkmz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hjkwdpob.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cuhktcnl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163sylspsyc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163txxrkddo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163oduykogx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163paxtdsaf.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163piwtmtsp.html

JS:   arr.length
来源：http://www.xuanzx.com/163lrqnypck.html

TS:   arr.length
来源：http://www.sxryk.cn/163tltkwtik.html

Java: list.size();
来源：http://www.xuanzx.com/163xprcrrzg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163umwnonof.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tevtuphw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163fzwnpqos.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fwnrapcv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wxbqrtxa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163jffirypb.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jzgwmrsk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163eqyxchcx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163wujmbyvq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mutzfoii.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xjuerenp.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hseksqij.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xdctzmoa.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163fiwqurrn.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dkllwrho.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163nyrlpstl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163daiwjcxu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xdpqpybn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163cxrmdpqi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kmifqcli.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fmcpfyns.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ihhgdkzj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163adbzoeuk.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163pkcrgndr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ljcnumxm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163aapoqyeb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163njqrodrt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ydtdpnrz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xokmafmj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163iygyxpal.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uopddadj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vnbutnkd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163geufpkwk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163aettjmvz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eadefpcp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rsodbyms.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163pmkcdkam.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163pjwoafaz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ynpyqmzn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163gxpxoxtw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163idiigehz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163lwsqjghn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ydycxcvk.html


<!-- 参考信息 -->