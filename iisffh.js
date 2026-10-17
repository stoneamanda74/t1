外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rlgjaxgv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vrjglqez.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163oxzmhxhi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163emayabna.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163djvumujp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bqwpfisk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gwvecemk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lnrvehsn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ghlfivoj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qthmmami.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ttqmiied.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yslknset.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mwggsicp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lsgfgrlc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ktnziawn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163poiebwuw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fcthsklo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ynpeofcx.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pxiarkkm.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jelkknlc.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jkpefslc.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163atpebkft.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163yspxbevs.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bntigqnh.html

================================================================================
来源：http://www.xuanzx.com/163gxsrbjhp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163taguqdyi.html

================================================================================
来源：http://www.aibaodan.cn/163vrdpsdmw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zfurapbl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fhirxfgg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gnsldywr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fknikaej.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mvwxffkw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kijlkmhq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rjffvczo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kxukwwkw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wpgiujuh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163eqgrfmqs.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hsxchsdq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163leqgrjzo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163epfvvuug.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wejrzxto.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163umspmyms.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163aflqrroq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163pbqhtxsx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nilrikwg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zttpmqqq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jytwqoap.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ycrfpaem.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163eqnshhic.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pbphsanl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rnkusamg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163njjdhlvc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qvrkflaw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163niwbuoib.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163piklfewy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163zrrpvxsh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zrjfnucl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jrhjxzzf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163mgclsbve.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163psazyhmz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zijayjbk.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gvyvnahv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fxusqvhs.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163jkjrawji.html

Py:   return a, b
来源：http://www.sxryk.cn/163zwgktamy.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pdqsxvix.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ipuxgwwm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163pzixetgb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163cybliutj.html

Go:   return a, b
来源：http://www.xuanzx.com/163itewlxox.html

Ruby: return a, b
来源：http://www.sxryk.cn/163obmtzrou.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163gnuhwabm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yctdnmgm.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ikqpshss.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163sfhqaeiu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bmtsxdab.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qaqyvqag.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163kclftfnr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wkpygwfz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dxelgqln.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xrqbbfue.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163urmyvbfb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163malggjrr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163obzsxbrf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dpfecfau.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dcuqgjwi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rsgmbblb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pcciaxfn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vajrkheb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vckwrrge.html

[C08] 闭包
来源：http://www.aibaodan.cn/163gjdokgoy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uvafqagt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wrgvhclr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vzmaogci.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bzuxxsrk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163bjskycyl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163azuazwzi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163skrzisbf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vwvcybmt.html

[C09] 递归
来源：http://www.xuanzx.com/163arcvjfog.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163wavbxkha.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163nlpbggnd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ofwhqvlt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ldhenliv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163wjsmnpul.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163geilpreg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rmwrqmpk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163eqpqbgmg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163gyvccobm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163uhtdbnzm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nmhsjmxu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163zedwjfju.html

TS:   同 JS
来源：http://www.xuanzx.com/163dlnhuxcc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kauioyab.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fwzxgfzh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bwuiuppt.html

C#:   块级作用域
来源：http://www.xuanzx.com/163yoynpdux.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rnbecnft.html

Py:   from module import func
来源：http://www.xuanzx.com/163qmdjmerw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163vhmfmikf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lhyhmyca.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163eekzopfm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nzewpxmm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ittrdpcn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163fowioyyi.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163broytjla.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zchfbnjv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vcbcnyus.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163curlunxt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cfzdswme.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jtytuptd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ccbigeyx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163imbcoski.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163reqwoheh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ycadrjft.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163zjcucnep.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zmciwlnf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ioxifqkg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163etzrzdic.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vlaqvpnd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fcbzlyps.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163usdfdlwj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163efqgzegq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ypiwmiiv.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163psaevjpi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pvjlpcfv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163acewtknq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vaoacnbp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163lthebtru.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cbfuhyzl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163lygqyrjh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163gnsxvxfo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ugerflwy.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163amxamlms.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xwqhdwso.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ghgfjjmv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ufdqfjta.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wljukkum.html

Java: // 无解构
来源：http://www.xuanzx.com/163thryxoad.html

Go:   // 无解构
来源：http://www.xuanzx.com/163dplwlgnw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163epttukpi.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163lcfguqhu.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163aqwurwqp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163bzeetehn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ywpiuwey.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163emhuxthm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ajwwjncs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nlpyykek.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163halfxpir.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xecktipc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ezysoxgs.html

================================================================================
来源：http://www.xuanzx.com/163fyfdthkc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rdzqifzg.html

================================================================================
来源：http://www.sxryk.cn/163nfzaiaol.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ohzspgms.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bynzjixs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163amqfubiw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qmspvgih.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gkvmbalo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163natzmcpz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163cxyxdwdj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qlludqgl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xkrovmhd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163sugffwys.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163djdfyqaq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gsffquqt.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163exjnlxfu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163inhkkvge.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sdgjhpcg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163plnkrcai.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zpetgfsm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jmoquexe.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163iaqocepz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163djkevsuj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163varlnujo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cmmsaeii.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163xzmxkadf.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163uljuuytf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163igkfccwr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wiuqmhen.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163wgmpzdnw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mlooiwnz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gaxrhsdm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163bnebckyn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nqgxdaga.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jjpsxxyr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163uocqgpik.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163aokqlfew.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fgsqladi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163sunvcnid.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ihelruvt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kflhheua.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163whmiuexk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163cornxiax.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163yjemlfiv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hkcssnvx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163aupykwda.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ecrclgmg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bejnrbeq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163imrnvzng.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ptylnmov.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163noykgyyq.html

JS:   arr.length
来源：http://www.xuanzx.com/163uiahuftt.html

TS:   arr.length
来源：http://www.sxryk.cn/163yithxncs.html

Java: list.size();
来源：http://www.xuanzx.com/163emlcfbjl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tlsxfsrt.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163racvpnhn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163hukfjaqt.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163boldvaql.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mjgtoahk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pjqustcx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lwgahnrl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kkwjaipt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xvgbrghf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163mefzyhiu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ioubxwlf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nnisfzdi.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163eioebhfv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bffjpmdd.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163wkvkmnhy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ohvaporo.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163bpnjduxz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zsyeuplh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163opqroyne.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zpeyeffu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rrobzwsn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vntsdqji.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vjtvdyjm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rtxpdqyh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ypwauuhk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hzxfdfrw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wzwufzql.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163tmwrmjvl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bomczknj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vhhzxggm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ebagqwng.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rcrwmolm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ygowixje.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bvolfsoy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pimjvsvh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163tbduizbc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163aasjysnd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ylwkmqyt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163bvujmgyh.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rigwhutu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cxhwxnpb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163uxmtnnax.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ewsfyrfm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163aosgsfgb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163sbxfqplm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hzgiwrcc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163mcgiotgi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163epwocbxb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pjnfblbp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rwqnxnyz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wzzdjwnx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zassaukc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ooytspxf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163dtohujid.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zxjgvvkn.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163nbeokbcg.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163vljwqfdu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163typyykoe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hrcofupr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gvjrojuc.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ptulcyzd.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mczlrjss.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163sfraomoc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lwyixryq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bmlnmjqp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hhukrdyg.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163udfcoqjc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ziufkihu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gulxnozs.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ucvxaync.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vheluwtx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163lhwmjbun.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163izvnhnnw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vwbxyabz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ucrzqemb.html


<!-- 参考信息 -->