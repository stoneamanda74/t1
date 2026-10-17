外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163baowsbcb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163dxlyhafh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kjghjjzv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163arrjymyo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wrxzsoyr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163eoqblemm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163bqhdoslo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qldvlahg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163etgmeqhp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qiaehvqd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163sstbnxwz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gepxvhuv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qmcfrthu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fsgdcyqh.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ebzzxnrf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163roitcluc.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gyqxjkro.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ujxhpuxq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163afwfsmfz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163divrchit.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pgvpzpxq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163pfhsijcu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ouvuhspk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xfuuwukq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ibsxqtip.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tubxvlvf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163uqteyxqa.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163pyzdajkp.html

================================================================================
来源：http://www.sxryk.cn/163hspjxpsw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jvvvexuj.html

================================================================================
来源：http://www.aibaodan.cn/163xhjakrtz.html

[C01] 定义函数
来源：http://www.xuanzx.com/163xxtyzute.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163oqwwijyt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163spqlaska.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163trlvlars.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iebpfujn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iadptlec.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163avbpfauz.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163pjbcsbci.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uljwlzlz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fivcvxwp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163xkheinbd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xxiazgdl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ovapminf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ebyqrqqh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cfrxkfnd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gqzizaqn.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qfkdodok.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pqcsgpal.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163yhgqpckg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kkerhpxl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wuoxcjkk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163aifhycjw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dwupdmpv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qgtnkfqu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163upwxunzh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163paqhsgat.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wlztiyzt.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mdhvoxng.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yilhfani.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163eksbrjqi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fexbwnbk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qrmoosdv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163rdmgyysc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163neusdfrx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xjsmalsz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gekgnmap.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163zkdtlfvh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fnsmpqrw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163liuxxkew.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163pwmpmpok.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163vpdrsbln.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fseawhoc.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nvxhtzye.html

Ruby: return a, b
来源：http://www.sxryk.cn/163nszffzrf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lxleqsff.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163qneqxdli.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163rynztavr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fkrrfamg.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dxoeqdxs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zhymmedi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wiswqmxw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163smlupnlb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zzswuibt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nrfulkfv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pjrjagmj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163omsrcsek.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163djnnbcrt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vdyogayx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163oxuxwsol.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cglflwgm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163izpkbpzs.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gkmgftoc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zvmelncj.html

[C08] 闭包
来源：http://www.xuanzx.com/163inklbicm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rbglsvgo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163iehpldym.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ugpqavcs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cibluqor.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hrxuxcit.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163huclsyug.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163uixdrhju.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vlyicvyy.html

[C09] 递归
来源：http://www.aibaodan.cn/163otfemfdx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mknxtlpv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163vtwlkukl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hqxwczwx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ryjcqvjr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163smwqxbds.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163vucgbecg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tprqunxj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163dxugrcpb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163newqrwmi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pztbigtu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163zijhtdea.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163oukhzhsq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163rirlvhyu.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163mcbnoejm.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nyuxjfxs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163majxjpqv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163akqrumwr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ajrkxxjy.html

Py:   from module import func
来源：http://www.xuanzx.com/163ydndrnoe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ahpnpwxg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163bojelgmv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mzzwmwiz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163iluqvtst.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mjrumkrg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vxmynjbv.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xsonyuxe.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163efvsplml.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163licyppfp.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rrxmssib.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hthplnbk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pzuxsskk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163udiciofu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mpswonyb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163pzfemurw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zirivkms.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ksfspjqf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163cmcqnper.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ynnmypfi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163igfbpsme.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tqzndsfp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kawvotph.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mgygwmiz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163sfvofidv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163fxgwjcve.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cimrnzaa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ekwydckr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163mbagadds.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mdjtpbib.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163bdvftsck.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163snvgtlsz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tlixelnh.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163wrhldsog.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wgxpyqoc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ygtbprem.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ruxvfnxf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qfeosxxc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yszvwzvw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ckfxuhol.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ldpehxpy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qyhhvzri.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163cvvpidsi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163yjqbcltf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163srkvufuh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jhcosyli.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bhhtbboe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wlrehkyo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163uzeqlbrh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cilgexun.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dsbemoeq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mkqkbzzv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xwdeootv.html

================================================================================
来源：http://www.xuanzx.com/163gtmhfosp.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wtaouejm.html

================================================================================
来源：http://www.sxryk.cn/163icqepean.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163efiahhri.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163lydzqbxc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163prczrvbq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jrwgtxpt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163xcypnsgt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163giehgion.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rdiqfdtu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xhocqcmo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163smdbwjko.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163rbbviowh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163lurzowmg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zetujxuq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rysagmik.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163oytsfsiy.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jwugawbn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qqmwenmw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ledgirkg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yzetlmar.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mmzxyxmm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163zvxysbmf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163qlvjmgtv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ackykdwr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ttpgliny.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ctoxmosb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163urzjrzey.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pzryzqhg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jsphfwoo.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qscfhlao.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163bxxxxgfl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ueooguln.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ahrzvuti.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ehgofzno.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zzwhyzrf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uyygklea.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yjrullhy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ssoyzhcp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tmftrfgw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wdyrckvm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xetdonjb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bjuhomfs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163skmbxock.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163qusnfjbp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163acckmrqs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rneshdzo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163miegxmkk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163yjrcdifd.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fcamamsc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163svrwhouk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163esdenzmo.html

TS:   arr.length
来源：http://www.xuanzx.com/163rtinpdjy.html

Java: list.size();
来源：http://www.sxryk.cn/163tpoizgdp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163nzkzawwt.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ophglrdd.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qzuaopue.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163namcwsvk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163isuedcil.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163prnapwft.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mmukqdih.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xcxukiqc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163yrnljvwd.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163uoahodmq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163anwskmwt.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zjfrnjxk.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163runfcqks.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bpwzsoav.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rgcfqsvq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rqrqllvk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rnvziftz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163qsgyiujn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163wcguzjkm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163civozkxt.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163taymgvuy.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163piqscfpy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163miocxlsi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vyugbakx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fhtkxdhs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mhpniiwo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lxswcsro.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vpzpgxvt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ajnquffz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vcusuwyz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163cgcbvpnn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163foeshqhn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jugeljhb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jnrkptri.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yxpiibgm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163spyceqoh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163admekwpb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163molnspqs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nocmcvck.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xlesjqxl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163eidtawig.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163yamkectr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nydsghid.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hjdzzemt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ypkrongu.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163mubzzssh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163terpjdpv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163kvbxmvdg.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163amgzuhlx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163wqpzuzbd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nfseuklo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hybuvefe.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tsjeggei.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163fbjhzvwp.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ajwdsrvy.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zvuhnrwf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xmwqymxh.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163anqmxpet.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163fljchill.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lsrifrit.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pxaqltgv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163urjqneno.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rnxmustw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163mkllismo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wsyzicjy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mvffjcly.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kpmjtppx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xvuyeope.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163thlczpmz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cozqpvhe.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jtepagbe.html


<!-- 参考信息 -->