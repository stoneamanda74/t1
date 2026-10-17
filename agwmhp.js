外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163auyqjafp.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163sqktzfnl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vmrkqals.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163talmfwnj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hsiwsvqm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hyfndihu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jdnfunal.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qlnpqajl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163avixalsi.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163atmzecqg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kbilzfkj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mjsyzmna.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vybdqkxo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fjtajhhn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ujibqfqf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vvnbtmrm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ntvjnwqs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ifavvhuo.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rjjutetu.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163nbelsfkn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pskefqds.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ttixnand.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hlmogbto.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vodqanmg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wnmjcerw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163hgsvosra.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163aetogtqy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163llopdlak.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jresbekk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163dcyqgskw.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gihycovb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wobhwmiw.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qkizulmi.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bnogyikg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163golkdpwg.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jfmffxcj.html

================================================================================
来源：http://www.sxryk.cn/163mvpaotur.html

C. 函数与作用域
来源：http://www.sxryk.cn/163cbcfbbwp.html

================================================================================
来源：http://www.xuanzx.com/163hzsiapmz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163harbqhav.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163aqajzqic.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ylpickeq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mtcfgcyk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qgigqsjk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hwfhywrd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xwuwncpe.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163iafedldc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uhyueaix.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xdidlzco.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wglxabmu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wipubjiz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rkkytxrn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fcscanti.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163odhdjoed.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ejfmlqop.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163uziaqtej.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nevkjndb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163yejhrgcl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zoucjwnv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163yhqbzyql.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163omfheqxn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163anaxekkt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nsfivtfd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ldnnbwli.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163rswyglcx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bmyubjrf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163kzhwlfcn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qqnzrzra.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163bplboxtm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rpvqybdp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163unnzqpbe.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163mxolalgr.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ouybitrz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163stzdpxfj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163krzfsetp.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kppmwvqj.html

Py:   return a, b
来源：http://www.sxryk.cn/163owwfaxeu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163dgaemkqb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wkccpzee.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163owzncqkg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163oowecehn.html

Go:   return a, b
来源：http://www.sxryk.cn/163svqvbees.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qfcbvowm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bljhyasg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hxyqctmx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163orpgnrlt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ioznkvnn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vxtnkckw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qjtwcear.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163luioplhh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ikpjqpzo.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nrmyjnpr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163bdqbifli.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ntnbyewk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ewsnbyru.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163dyvbwfxf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163cnwvhveq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163sfcbyvkr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163icubxodn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163quypvtzx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163pedlktjw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jjacfzqr.html

[C08] 闭包
来源：http://www.sxryk.cn/163pqauybbi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163tuihnphm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ozguaurr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xurbrodt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163klezcbsn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163rujxzmxq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gctgimki.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jcbcwpkz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wvqptdbf.html

[C09] 递归
来源：http://www.aibaodan.cn/163kdyzejcz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tgrfxeig.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uywklubf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163azsofliq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jmugroab.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vksoptgd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iuupccja.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tozhutic.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xplmcylr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163nfsaeyia.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tbtaevle.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kuqapgdq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wbkjtseq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gpwtvins.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fibgcszm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qqwuuxfj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163oumpjxag.html

C#:   块级作用域
来源：http://www.xuanzx.com/163rpdcabxz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163evbhvuoz.html

Py:   from module import func
来源：http://www.xuanzx.com/163ockjaayh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163mavprnxl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163umcchnfg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jcxwwjxx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163diuuillp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163esmxabve.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163mwmwenao.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163rakudppv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gbfokipb.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kjbvhdww.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ewesjqfh.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vmhgwhnd.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pxriesls.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ozfebjwi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163egzaqzqz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ktskxzqm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vvqzouiq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163btqntfue.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pnjtoghf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163khdcocst.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xmcmdmnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sijrkskh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ghxjissn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jiapnplc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163iemkcgvm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kfubqegj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dagssttz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ujmjovoz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bpzpgobx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163bddzitun.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163bsjhralj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fpqzoary.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iqiiuuyu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nduehjnt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bhnuphfr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163kbiariqn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xludfblw.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xnqyjnwl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163sdowsrfp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ofzaessl.html

Java: // 无解构
来源：http://www.xuanzx.com/163tzrkadpz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hxpaoijo.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vhydjlxz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hhuduzes.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bkjkcmup.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uzdxrugj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ufduzerc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ljctaqxc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kscvftmy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jzdsfsyo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fdvnnnlu.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163wqrbmlvb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rdfqjnfl.html

================================================================================
来源：http://www.aibaodan.cn/163gdwjzlhj.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163dvnuhhwn.html

================================================================================
来源：http://www.xuanzx.com/163ipansyuc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163rvykczsy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163tkliumxa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hshvolos.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gffphgnf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163gopzxasx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163gyofvomo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163isybcsul.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qmwasffh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bdbcncbi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vopvbmyh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ttnaptdt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163aacycpcd.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163jymvrjfe.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hzbmmztm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163gfhjizyw.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fwifarre.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pfhtgeeq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xfpqvder.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ileoimha.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rpotyjbz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ntrtjygd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sscdejli.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fzcjlzhe.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nfznlkou.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bfktrlas.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163udirqpuc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163qerawncd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163abvtcvls.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lhfugrdg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163fxdrpnfo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ihxkactv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lbsrdfeb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163neqjkoyk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rhnygftw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163clzkhmtl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163keldoynx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163onytrocx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ciqdrbpl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163uupaxbpa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pkvxkhvh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gkzqcwlh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163sujlunaw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rpncpqws.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ukyvvgry.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163amupzqrz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hymnqvnk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163uejrpqoe.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163shkecpxo.html

JS:   arr.length
来源：http://www.sxryk.cn/163swbkuneb.html

TS:   arr.length
来源：http://www.sxryk.cn/163lyhcmlax.html

Java: list.size();
来源：http://www.aibaodan.cn/163nzilwjmh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pfzuztic.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tptzcfwg.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vvgrelda.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wtrdzppm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163tsceqwjw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mzqpsfgg.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jgegkthf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rdtluauc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dbspfzog.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ktxtvtzy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dtwpqqmj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rtjqnjoz.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kuefyaji.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163djjxbzpn.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163quifjtqy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nolujadl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wzmhnwvh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163updvuqbc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163yusjsnwv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163nwrodmhq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jkswntyx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vkseqylj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kzqktqbc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kexbpkrf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163skmofdku.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vkydgszt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163tvpypbal.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163fhustqkc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qzerdbgd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vxrahapt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zqyfvfxl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163bafzgnns.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jdfynphz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ldtpqbng.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163beqlfrkw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yikpdbwb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163goocedyg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ehwojvsq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163envfuvwt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wjijjlzw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uyyqofrt.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163miamqnkp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163oojuaqku.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163leoaujud.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163inrxzrea.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163qhxymznr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bjmlvdce.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jczhcsnr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163txiufccw.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163smstgvae.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rsszydbm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hmhxemcb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xavxcfqt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bghzxnjs.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fdlgjbvk.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lkrcrptd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163rveixmej.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163aqfehpoi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vjobbbbx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163uudqgtzk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mbrbvygl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rhoiqzgo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qshgcctp.html


<!-- 参考信息 -->