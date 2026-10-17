外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hpelidpy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gaknlbll.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163vytsxfid.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163falvxetf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ylvkuixx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sfevygss.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cnskdybl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zxlwuqxb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163pdsjmtni.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rhkafkpb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163shfloeqc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ohtixfrw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163xhsglnwc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163etxglgwn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163qumqfdxw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fmchenwm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qywxfvus.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163gyrpvmld.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vxreafrw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163tovooydu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ivmirizp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qjynnkdb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163lxersevd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mwsyjaoe.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163goppguak.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bqjdmcvi.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qlywpfdl.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mlzbagcm.html

================================================================================
来源：http://www.aibaodan.cn/163hrnjpdrl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qonnbxkp.html

================================================================================
来源：http://www.xuanzx.com/163dkpcqjrh.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lxtbnbcc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qqhuzbcq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zekhdeso.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mlyowqgb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sgzekztl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bliqjpde.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163djewxmyh.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ybtlcgqi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ukyrcdsw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zyxrijeg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163esitpzzz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bxchfbrz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wzdtiohs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ujheueft.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xmhbrjut.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lqcmysto.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ibgxnswz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wqyqpgru.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wapdcyip.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163eapaagxs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ztbfnehd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sshfeext.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pkikhxmf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163cdnorpkf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163twzghfwt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163txfzekhy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163mgsnisxi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vaeuaygc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jwrgnkwq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163auofakws.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yipscskx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ruywwagn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163tafgousc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gqyvwpdo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163amwpfevu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163edtlkaeg.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cchqbgbt.html

Py:   return a, b
来源：http://www.aibaodan.cn/163csthoamb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163eemwmrjl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163neryfdws.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163eojctmwr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163mluensii.html

Go:   return a, b
来源：http://www.xuanzx.com/163sordwgdh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163tixfossa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163afpqywlc.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ivvkspik.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pbhinnhw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vyoayyvw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163okjbglfg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xuvpskxj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ahegmked.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163tijhqiau.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tblmspbn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gexkijyo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qrbaetdp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wspbyhuu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163iuajnizl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tcyijblo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163kvrahkgz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ekklujmv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163fcwzoswl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fdrdokvs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gdfovlew.html

[C08] 闭包
来源：http://www.sxryk.cn/163dupkazkb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bzaheltk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163khgrczqn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ctojdban.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163arupisaf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163jrwwpmbd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mkxsudyq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163bratsyyv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rgldsygk.html

[C09] 递归
来源：http://www.aibaodan.cn/163xpagbtlq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vbybrfge.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163azqzeafi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ksqznuiz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jnzvzndc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ofjijrbs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163njsfjbkc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hldzknji.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163joqkddul.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163douzbgmt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163cqqudmym.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163fhtarthw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qqdknjdp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163feablbpf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163viikbllt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jlpbkfoo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dgsofcay.html

C#:   块级作用域
来源：http://www.xuanzx.com/163wreboxut.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lgswpmac.html

Py:   from module import func
来源：http://www.sxryk.cn/163jwiwxvdc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dllyyzmk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jnymekrj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163bysorqif.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163amkhdpzx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163roswiaas.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163uvudwwfj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ihxhtdob.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zzyhvvjq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163blqgmbaj.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vzrhftsm.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qmzovttn.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163woevxjpl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163bpimvmmu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163iebweajp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163omldbhbn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163owjmruxi.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kkoxlqpb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163eihrakiy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xacpoifd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163thlcmwah.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vlxsredx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zdxesowl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pbskfkzb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163znksujqy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kqglnjqn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lmywcxdo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ujxnoajx.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tsrfobfa.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163yrbslylf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163lqbzsixl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163giqcmzlg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163azwjbmbu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163syjcnigw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163dhvkwkls.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xtxqfxem.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jlexewrk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hgdporpj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fcjqckcr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163otsswgeh.html

Java: // 无解构
来源：http://www.sxryk.cn/163oohsazsk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tewhnozv.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163avdfsorn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163yahelymb.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ukmfwkaa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163twumupmj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163cdxtfpky.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vicfkxzd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163phgswuhq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163btyibrhy.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lzhwtgnb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163inbzvrap.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163cxsbblhe.html

================================================================================
来源：http://www.sxryk.cn/163vuwjwzbo.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163pnitgjqp.html

================================================================================
来源：http://www.aibaodan.cn/163ggasilbt.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hestnjha.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uzjistmw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fcnxyapt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163eqayiyve.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nqholhwf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rwkkkkcv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wwfneabg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163tgmhtrlc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zzusebpk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zkqdfzqw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cpzgazsx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xdnwrocj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163lxbqkrym.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163fljnezfn.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wdidstrd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gzgxswuz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163extwinqe.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163mpfksrmk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163eigogxjg.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163aeranmuf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ctkofvzl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ridjqgqk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zwkebpqy.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wonpndlh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lwfdejml.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rdxvrcwb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vsltszrg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163foaqxvay.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163nfygcrlk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163buutxece.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lnfnbjki.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wvwdyaxg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ptqkvqbf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163jgagcjzz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zbirosfy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zibdzoqw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ykxgkarj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fwgvvilb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gqxqxfis.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wtnrgtzw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jcgivhfr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zmbgphrx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163njpkfzcj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kieahxaq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163gceruuco.html

[D06] 数组长度
来源：http://www.sxryk.cn/163beaphbtq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vzapehvw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163dziyxkgy.html

JS:   arr.length
来源：http://www.sxryk.cn/163udsbjzgo.html

TS:   arr.length
来源：http://www.xuanzx.com/163zngmxecx.html

Java: list.size();
来源：http://www.xuanzx.com/163drtqatfl.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lhohrhzp.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ahlhtmof.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bfaztjur.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163iadlnlpo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lzkehiep.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pxyknhki.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zrjcxdyr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mvzdlmow.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163gzzwdsbx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fgxskycg.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sihcqqma.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ycjdqduk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wzmigmdu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hmqiyxfn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nbmyvlnu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163adzxqszq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163sqdbgdcp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163kvpfiere.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zkkhxwkm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163haxqboze.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hupersfd.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kdwmgusq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vowzpknr.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163kcnwjhhg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zpwgfufz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jdrnlftk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163upoafrpz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163uprqvygz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hclhntur.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jmzlwmwn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163xhutlsvu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dgtzndji.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163srstmwkg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zsgxuhpe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xidybspb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163klcibmsz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vacwsoqa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163fbovymvf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xcwsckuk.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163phmcoraf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163eohtizcv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fqbnvzro.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163orfiogsa.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wlycqdpr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163otapgmxp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163khaxlmga.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wfzualur.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gkotwfpp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vpcvlmwo.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163pupqczvw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163etbmurdl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163msxacvta.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163avcuqkvs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wgziksur.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lcgwbtkh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163blwhvxnz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ktywvoyr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wecllwus.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ixzxgpur.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163zkqrgjne.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ehhvsmty.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yheheuoq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ixspvhcu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163yhgcwhcv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pljzpcqp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vrmxzaol.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163krkywfne.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ifitmxhh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xhgtmwgd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163plhebqeq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lxcsfgty.html


<!-- 参考信息 -->