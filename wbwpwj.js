外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163uuhgyuvm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fwykjhhu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gvgblcai.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163uzeiozno.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163yvpkygep.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163brnnghpc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163doomoqcz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163bbeozmmb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zqdpxymg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fotskozk.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bqjzoubl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yaaatcei.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ksggscxh.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xrdsainf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163oqxmwtet.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cpkvsdjg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qtrizufo.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163pgozvatg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163gkibksdk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163cmkyoftz.html

================================================================================
来源：http://www.xuanzx.com/163acjpiqef.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kwqccdza.html

================================================================================
来源：http://www.sxryk.cn/163kgyuhrtj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ugmexyvb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wqompgqu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vrjvpvtn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kojxbpzh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tovzqjwy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ztmnduhh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163egdgfkwb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163yixtctcw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pbdjabpa.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163favvwvne.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163upgescqh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163iklloxin.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jtefkqwe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163cpmqpyfv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xhtigmcx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yualmand.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ksrissis.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nwaqwylb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163diqlbuzd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163somjybtn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vvavwsfa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mdlurwbh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163scnnykut.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nxkofgpv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pmundzoj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163aagkpkzu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tudcrezg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163txlqkcpm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wildsvto.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zmfnvugl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ucqgarth.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hqjlfbye.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163euuszpod.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qzhrhdsd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jwopmpfv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eijhmlqg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nauaipnu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163njzqjpem.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kuttjplq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ullksvrb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zkpqamsd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yxbgetqf.html

Go:   return a, b
来源：http://www.xuanzx.com/163gxsfagoq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hwpoedlw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zmxjkfol.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163gtujmzds.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163kmlnwhbm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ttoknkem.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163npojmjex.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163emjwjnwg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rvozodrl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xfspfglg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163twbvqpow.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lgayjvqb.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163habewrqf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bujsrork.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bxbtzduo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xbwhwovp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163wwkmtnwh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163yoxpknmd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ykwaxgam.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163luqunnov.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zrufxesb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163drfvvzlt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163afymyfhu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163egqiydjg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xfnkjuio.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163phnifyte.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xdzfjteq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ehqgjhjm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zlswginm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lawyelgz.html

[C09] 递归
来源：http://www.aibaodan.cn/163iacrccwn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163kohwpgzn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163vxzuxyii.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hojanpfq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dlikuaim.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163byugcwmd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uxdtlywr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vgdrsbxd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163rsetbwbd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163acuqomjw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tbpvmmqx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163morgrcac.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163peeiaroy.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dvmhffye.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rdniinoh.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xqnbjuun.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163irqtosgf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ttbdynbh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163utiprgkh.html

Py:   from module import func
来源：http://www.aibaodan.cn/163tymysppd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cyhvolnq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cghkpkut.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qruzdydc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pwovjyuc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kyvdgnph.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rvbbjddw.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163haspqffy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163kvnanotn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163uzclpjuc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nuklztid.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ozlnzuad.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163reccgbnq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xmwqfmqg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rcoabzbv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bhgidkqd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jtaeumsf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163prjjefdy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fvpqbgku.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qfhxxycl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zmrlwoxk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ftebhmad.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oshvsyvq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163nxwpbmrk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dyhxqlua.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163oyqxrcvr.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wncutndf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gjrwhrjd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dyxgcmmz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bhneareh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qrkrcpwi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163oezpciei.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ktoiljlr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163siuzwndq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163flffegin.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163lnhpqhyy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163glphpafv.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163qoygckjs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wdpxcqif.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kukytqnl.html

Java: // 无解构
来源：http://www.xuanzx.com/163uwcljlyu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163qtiviunp.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163didatuqs.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fscfxzhs.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163tafmixoz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163svuvhonz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ugbslwcp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163gjvrdclb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ymumnssj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gfaymvry.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qcpxjahp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163xtstwiyz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163htcldfsq.html

================================================================================
来源：http://www.aibaodan.cn/163jmrfgdyy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163usgtgwwe.html

================================================================================
来源：http://www.sxryk.cn/163iheifvud.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163spighsii.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mgoqotmk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163amibjfmr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163uieqpswn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163cdzzuwoz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163eyuspjgy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kveeejez.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ftzzbulh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163icykkkdt.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163aobnftup.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dbvxalia.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fawpehcr.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163swkxkkxo.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gixgbesi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zkubxhfl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xdhtkncq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mwkkuztv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jaqexehe.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163pkcsrsgn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163mwotgguc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163eptsrpep.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ccxewoqn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163nasvidut.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dmqolndd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163egjapnzi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ueourjyf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mxxdnywz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163cyxdfwlg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ssukdvmc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gbpmzqbi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lrvfcpan.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rxcmypeq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kpjnxern.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163olksofzg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ibapcvxi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qxoachcn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ayrazspy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pbywtyny.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kwgcvjcj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163oehlwzxr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163oowhntrn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qehxmncf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163iwpnvdcj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gwfgwixw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ariunibe.html

[D06] 数组长度
来源：http://www.xuanzx.com/163raajfmrj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vsnbeihc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163czesrjir.html

JS:   arr.length
来源：http://www.xuanzx.com/163uukdixoy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ltvfisea.html

Java: list.size();
来源：http://www.sxryk.cn/163gcyrqgkp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163gcsckvum.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ftwwrlja.html

C#:   list.Count;
来源：http://www.sxryk.cn/163xhyzumoz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163fvsfvdzt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163phmgqhmq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163wtmvpdih.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cpihkjvo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vnjsvbuz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163yctduznt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qjjnzszh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xwwedkfl.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163piqjlgge.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xswcqgeo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163adtwtrel.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163fmugvcwv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hanapimh.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163wgmwptjk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wcoibqqj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163iqanhqwk.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163iqettfrh.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163uewmznok.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163vfjzrers.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163efpzpsgb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163etcpztxy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163txaewtfm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ulssykkx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rqtnceel.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163sqnhqnuq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mhjphxcx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163yhaurykv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mgeeefcd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hkrpscxn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xbnwyjbg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nekbsarf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hmrmcwet.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163jrtnzvor.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163egmaajik.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qrjrrhru.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ubwsvqag.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mjopirdp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163nuebocgd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163pkslmyqk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kwtwgniz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nblypyim.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gsmcqicu.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163lxcwuzed.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rnayuaxf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163sqbzcujw.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163jxvtazry.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163cnahhvsg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163sjdykszu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lvovwxax.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vyevrxad.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163arukeeua.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163bkzaqije.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163dvxpyquh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ocbdkxal.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cuicygly.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zzxphnvo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xxxfqxur.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gyyybumf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163feyukinu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163fojtdnsv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163egemasvw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163llqthcfp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mcnkmjdu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xndlatwz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xxgjtviw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cousruvc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fvqqmvln.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jrjznbyr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wrcekcej.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vosbhmhb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dsztslbl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ivgeccat.html

[D15] 去重
来源：http://www.xuanzx.com/163benfrufy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lfymwwov.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hxyfsyth.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tgkandyg.html


<!-- 参考信息 -->