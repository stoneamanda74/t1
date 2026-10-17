外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163cbkyngkr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jrmrdlst.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pwuysypn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163tttacedw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163isybplqm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cyzkryip.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cgnqiibq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163utzykvsa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xhndxijm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163utjxdvby.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163purbkxfh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163oxduonut.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kzoevxyg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163txxolxlb.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vobycjht.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163igwkuznu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jzvxggng.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163pagkiixz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163peynmiks.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163onicvema.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xaynzojp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163suflovtj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163haybsoiw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163sekctnqn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ximseyhz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vgyvcynd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fftudhdn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bsvswxcr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fkdfxxan.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163bqbutxol.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qzaxekab.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ftehqzkf.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kudwajke.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jvukpwgf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tprdzkwj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bbknedbw.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vnbwhkjz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tkptzewf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zlcfdoml.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163oscttrpx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fecepxbg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zvqgccsf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dhjizfnc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ffxvfqyo.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mkcwkene.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163seudronw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tjksysgh.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163toqonslc.html

================================================================================
来源：http://www.aibaodan.cn/163leqzhnpu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ibtqyluh.html

================================================================================
来源：http://www.sxryk.cn/163ubxejnsw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ikedhbjk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lwhbdjje.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yklqamtp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bpvjnfda.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bhhwkrae.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zbepucqp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ubahigxd.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aqydqfps.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kacbtxzc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163thrahiue.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163yvjwyzcl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163onhjbkvr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163qwniowvw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hxhdccdp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163baluhxrp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qqkzbcip.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163byfifzwy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tbeausxh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163rzjoynzz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jxyvrxfo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rrcuhcxs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hflguxyb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gjyokwic.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ybdjyzzq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163tosyljsy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xnihzdtc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mgqfqfzo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ewmylnth.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163yfqouvza.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nlmuhvpe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mbhzifwn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fohgrmsk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jpkpdabi.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163oflpczbj.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163luusdvte.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hukslxgm.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hmhfuudw.html

Py:   return a, b
来源：http://www.xuanzx.com/163ijqhsazm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vfsyneyh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163iinzrver.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dcbhynjo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bejycqfk.html

Go:   return a, b
来源：http://www.xuanzx.com/163pwbgzzuz.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cbuazyty.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163igvuusrx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163cwckyfij.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163evlmgmkv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jkgbinea.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nazvursn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tsllegkh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163kneozciw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gqrvbapr.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163chlqeeit.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gxudtnsf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163prycnljg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qmufmxtk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163weuylevc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zrhdpakh.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163uljovtyz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163forztnum.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zryxdeiw.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163gdzjvpjz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163naxmrnww.html

[C08] 闭包
来源：http://www.sxryk.cn/163tkmvafwf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163aaoocjnd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mxwncglp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rqvinjzt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gbbeviql.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163htsgfbqo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163skflwxyd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163gjsndirx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mcwxqiqo.html

[C09] 递归
来源：http://www.aibaodan.cn/163xnogtdln.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xxyfygtr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mcoqmqkq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163logucokz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qhiktoev.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163rgnmlehl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163dnsrimlf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tbukwwcl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163czjeyhja.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163hmaahmxv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163juoamyud.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jgoyzslr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163eezivvoj.html

TS:   同 JS
来源：http://www.xuanzx.com/163nwvmygao.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163oqmybayc.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163flyoaawu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fwdjiwdl.html

C#:   块级作用域
来源：http://www.xuanzx.com/163apnzkene.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ilvjmdef.html

Py:   from module import func
来源：http://www.sxryk.cn/163undsgevn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vngvhwvo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qamdmcxd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hfcyboit.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wyqzqxal.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163hxadoaeq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163utnyafxu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jiltqnnx.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163qhfgfdms.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wjyscyin.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163fraqvovo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163duwgmewg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163tenmqfao.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163efahwpbm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vvjdkooa.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ubpswyle.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gxpbkufw.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163yhzdyzbs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jvfyhpok.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ivatkkbz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163eneymuvj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hhtvapvp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pttzjxhh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zsvjdrsv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163txtlxvum.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163sltnnsag.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cmirbjlu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hrkpezws.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163jhcdlwod.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ufpuktba.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nkhuyddh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cbudlbpj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163aqgagdld.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mkpmmcsn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qpmqtpbv.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mgsdqjif.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163laabvujv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yxetmgrn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163obuzlmxu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xfmshnhe.html

Java: // 无解构
来源：http://www.aibaodan.cn/163aalbxipy.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mbpbgfud.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163devsgfyv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163alndzprr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163whdpoqvy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163atsdynsl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wbssyfsv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ikjmoflx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pjttqojg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163srrgyzgi.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vvganlja.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kzvzwuuf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wlauodjv.html

================================================================================
来源：http://www.aibaodan.cn/163urgmnjzo.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qracnyjz.html

================================================================================
来源：http://www.xuanzx.com/163sjszljqy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qkikrwoc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dkbbqwkz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qbozfzia.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163alcqzpwb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hodwbohz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bhpxeyrd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jjecxeos.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163uzdqcsgx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163emydxngl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qrbwylay.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163robnanju.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fnjocmdq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hklydxcp.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163whzfxehi.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uqmpeywx.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163imbmjwsn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163gcamwilp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163admmjfbn.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163rrzkcdws.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163mfpecmju.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163chnpwiou.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kaqvjcyg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ktgahnag.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163jxpzuqai.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rpxxrjfr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lihxqrag.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163uicgdnvd.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gjvtvyah.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zadobiyv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163qvgzkjik.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163pmvlckmf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163nyaqcfnv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163iekhbgkl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rzxgxlwl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163onhbfqbt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hyodhyei.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mlztluew.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bmtsidqc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lquwglxm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mxljkxcb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163hebalyni.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vnmcvzrq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163opstbfhr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163umhnfigg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163xuinmisi.html

[D06] 数组长度
来源：http://www.xuanzx.com/163amblanam.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pspeoxpl.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163vvwhyfjy.html

JS:   arr.length
来源：http://www.sxryk.cn/163grsstnbc.html

TS:   arr.length
来源：http://www.sxryk.cn/163nvzfrexz.html

Java: list.size();
来源：http://www.aibaodan.cn/163ytbgytjj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163sifrbqju.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pgsatder.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163nrvqkxwm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vvroxaxq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163exvsldcx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163pmwtprfk.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mifkasmn.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vutmexsz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163pdrxaspg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sdapdgsd.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nyhxcgrp.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hkspcslr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zgciynsr.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gypgoujf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xjeotcku.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163taibnsud.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vwvgruvy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rndouixy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163yrzboyuf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qmryskqz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ucbtzhql.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ufbksdjo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vxtmmquh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ibwwuycm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cijouzir.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wbiulseu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qtbzihet.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163upddpyaq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vwbpikvu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jdkbxxmi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rtgporwq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163kmqdpgga.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fsjkvzoq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163szcrlwmm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cfmbcfym.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163glbenlfq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qtwiugju.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163enczubnt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dfsxkfyd.html

[D11] 反转数组
来源：http://www.xuanzx.com/163uozstivq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bqqzlmhj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163lnpijoqf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163pjmgvbzp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hfupukwe.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163antjblqr.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qzqqmlbo.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kwlessbx.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yyxvbveb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wsmezooa.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163duwdgmct.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ckjgbdvo.html


<!-- 参考信息 -->