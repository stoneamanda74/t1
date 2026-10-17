外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ybnykcmj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mecrhwut.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ocvyhvac.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163uxdenago.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cbmajdts.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163woahuuxw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163oztfhxye.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ozsipezv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163avglljxd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163zdreogpj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kiqcihqd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163effznixi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aoryktjn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rhrjonbm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dutgufvx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163voalwtaf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jaxaalof.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ecuhvxqn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xfgjinkp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gjemkehn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bthmeayn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pdswxxsd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jzokwzps.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hhcseklv.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163bymvanhm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163myakketa.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163tqtcxpag.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vmwiithk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kshegfgq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ozaznxqx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ncccjnbi.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163akzaokhr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wzyfgbyc.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rydavzut.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163dmjxofay.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ettfchtc.html

================================================================================
来源：http://www.sxryk.cn/163yojlpans.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sotssvdn.html

================================================================================
来源：http://www.aibaodan.cn/163czuhflje.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dprxzbtd.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jprqsxih.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mxsvckpu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163wzlcngbf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xqzcmurr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eufkvzbt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bejjeiip.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fstceqmo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jvqnginq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hgyplbsk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163usybtbne.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163igsisrxl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163pkgovxuf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163qzrqswky.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vyizdtng.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163rnatpheh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163rvcngrnd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163muqfxsnu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ycgbvcud.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163onovrers.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jhnvvjqf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pimhkvyu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zsnptkok.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pyuidykl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163foanzaxa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163yfhdrfgj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jyihfwsq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163fzsooaps.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fsulxixy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ndwuefqc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fwpfkmrv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zlotvliz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wzhjkqoq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nscxcdeg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pmmmusih.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rzwkuhtk.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163auxfraup.html

Py:   return a, b
来源：http://www.sxryk.cn/163ogotwidj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163edeylpny.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ajvvgcib.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163pwduyakc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dpdkibeg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hxxqlhit.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163hdrhplme.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163blkafwiu.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163goyqhnod.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mncujdmb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163sjkpwung.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163lbzzgowt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ccenbani.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wyvtlcip.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lidwuzri.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tylliumk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dgrlriaj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163finwgckn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jlrahugb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jliuckxq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zyinrcgb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163plzlqpbx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163uqwkcfxm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163lnlxfehi.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163blofrzoj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163eptxabfx.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lucohzkz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vhlgcnci.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xwbxxxwt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jcndbpxr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163armnssdu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163bggcybdq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163xfqxasfi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163svgxgbcq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163akwuotzs.html

[C09] 递归
来源：http://www.xuanzx.com/163sowxxnvn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163punvqduk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163vvhnlzlh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tmcqapmq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bossefmo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ghwjribp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163syfstpkn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163yvdsanqe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163jwrsnlhl.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ozwiwscc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ftqwsbdx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163jzgwmwzu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163dryvbrsp.html

TS:   同 JS
来源：http://www.xuanzx.com/163sofsjggw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kalyxiqs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ogodzcob.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163socdxrzy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mzzfcxdl.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163sphyjaus.html

Py:   from module import func
来源：http://www.sxryk.cn/163rzmrrmpk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163vnxwjfos.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163osconmlw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jjqzjngq.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gqidwcbm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lcufyjxd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xmyhhrgf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163lfdzxzeg.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163tsajwwig.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qncghkfn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163uurydjuj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163spzgdmuk.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nignlwbb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163crffjitx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zwioqatu.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163dehalqyl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jzbhzryp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fwqzjklu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nvkzdxil.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fxijdydk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hbshhqhh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xxvtzhwk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fjttbnsx.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jlpyiwvs.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gjparrsn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yobwznri.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163xwbexfiq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163spweddxj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163zsiphiwy.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163raaajvdf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163sifbjalr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lxooghlo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163coyujuyn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fxvtmvlm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gzfphkcy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ymebngfc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163wenxbrhn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lgzatcby.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mepdwtfy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wfkdnzzs.html

Java: // 无解构
来源：http://www.sxryk.cn/163yqcsoohf.html

Go:   // 无解构
来源：http://www.sxryk.cn/163yunoqbfq.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nmshmtzv.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ivmgoymd.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163khcylaxr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fpfrrsti.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163nxtvhlzf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163eimhejys.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wdcoqzur.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163nxhyhrcy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zcimaupb.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163lgobgxjb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163deshsjoc.html

================================================================================
来源：http://www.sxryk.cn/163hdcxaeiw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163azmcjjmj.html

================================================================================
来源：http://www.aibaodan.cn/163aittkvcl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ckapaewu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ulgxffqp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zqfjtunm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fnlhjjqe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rvnystlm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xuqlcnqh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163kcmenten.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163egzrlqkh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zjfqrzsj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fdtnqxfz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fwrqayue.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gascmizm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163rzsozoym.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vonxledy.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163mxcliqxy.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163amsxkbgr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ywhplkmh.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163uzhsmtbe.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xiiqbkce.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dxwtfkfj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163qwlgfndd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163wkiqhaaj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jloyuaqy.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ebrelabv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gsmprebb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163axgrzqpg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163regfyozz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163exfaqpoa.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mysumdjr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163lcbubhzw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jefckfos.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163vgtpurmt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163pwxqnnzb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ntjwshpy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ulhfjoes.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qenoxhio.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xqxdzxvp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bnqxzkzy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163fwycomfs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cewdkjst.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nbtqcrqa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163lxtobjjg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cndqbdoq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ifjgerkq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ymnbounr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163mwfkecqp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163klbmfpvy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163iygukbyu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ybszrftl.html

TS:   arr.length
来源：http://www.xuanzx.com/163ijngxihq.html

Java: list.size();
来源：http://www.aibaodan.cn/163ggtlvxpb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tdqrhurz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ybougjqx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163urowndkc.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163emfysooh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nmnluleh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hhagsnqd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bnyzaeck.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nzmdqggw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nrydjtyf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163bzvdzhwa.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163imaelibl.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163omiblpzx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qcegsgqf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ksndahnh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xwwheryl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wbaalcsq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rxqahgcl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163eijsnmsa.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bpgqdngb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hsbqsveq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ztjveslx.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fipsetwr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cmnecliv.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163chxyktql.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163yqekvkrz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jiijlldb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163dteomepx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163shcwahbq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163piaqblji.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jejgdbcn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163eldqkcqv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163idmmyazf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kppklikl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ygiifxcq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bgmuupqr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163jydcbkyr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163wjmlffkj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xelpyqjk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rqczmble.html

[D11] 反转数组
来源：http://www.xuanzx.com/163xwbmrrib.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zwnaxgbv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vqsntenk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kuiwezfd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ruzxufht.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ddnnvqoq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uxmjmsbi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163chqekavg.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xszrbder.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hmiyccsi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163sephuzjd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jyfmfsig.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xxbopbjm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xcmahqkl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vdkznizu.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163vloeogri.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163suowhcro.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163wktcbray.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bnovinic.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163oegihuej.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163oqianrom.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163klsfupud.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163easieumj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qcolejcp.html


<!-- 参考信息 -->