外链999!wailian999！

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wiqozxrz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ceoiftmw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163eiseqxqf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ckibqaaw.html

================================================================================
来源：http://www.sxryk.cn/163xwyxboya.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rqnotuts.html

================================================================================
来源：http://www.sxryk.cn/163mbbpexwa.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dnoniccv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gnhbbziz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163epnfhssm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ekhsigpw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nlmttste.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nxxfkqyv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163apdumlfr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163uubbvdrf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163plvmnxph.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dtqwtkbp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ihvznsbs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163plqlblwu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163flhykwlt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163qtywboxw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163vrmdjiwg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yuxnbhhc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163tsdsxllz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163meuwxfwz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tozyeblg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163hzplpcfj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vdiwccul.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bxjixjyu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163keuyjdhu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wnyibvhv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163emopibpg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pxitwymz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lpjtgagm.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ceoxfpqc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163nuyzhudr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163uhouvgeq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gcztijfy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fyctrovz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gzgquwvs.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163syhfzlhm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vzoglebq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ehxmejxt.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163vwjjyfcj.html

Py:   return a, b
来源：http://www.xuanzx.com/163aqjjmrby.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dbwyzxfp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rutthqbm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zlokllzh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ztepqsxb.html

Go:   return a, b
来源：http://www.sxryk.cn/163jonujnoi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163nzyrxsgp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bzboaepo.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163iqgainsv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163iijpywfy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163uztuufxr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163aerettio.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ksewcahb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dobhpugk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ciwtsdug.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hchfovrm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163acyjonrd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cwvsgxzm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dkipexdw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163fzwhdrla.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163fwsnlfcz.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nexalulw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hbngnwmb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zkmqeicj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qpwfcfxl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163serqpfwm.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ibslvtwk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163cyojuyyj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tcoqkzrg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yxowrxdc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pcftyihu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163zjzewnmq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ccwaebra.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ysbcigaq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rvktqfxn.html

[C09] 递归
来源：http://www.aibaodan.cn/163ypopznjx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163jjnteljt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163snkumnxb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163spcegxvf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ghlisbyp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163wtxudzob.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163aofbgvuf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fllbgusq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163jvseaqbt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163eknwwols.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jmvioxfl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163jduvgbyd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163kvjmhikg.html

TS:   同 JS
来源：http://www.xuanzx.com/163ixtthjji.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xijvhbee.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163pyqtcsih.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hqegttsk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xusnpqrk.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ombtipzc.html

Py:   from module import func
来源：http://www.sxryk.cn/163mmozflzo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163vzkrpham.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kiaarkyr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ngjovnje.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pgjhzhry.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mmgvlxrr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163muvfjhxr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163dplwbahr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bsljdumf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163weckkjum.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qsryoouo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hvjjmcaq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hrtzoiee.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qopghkyk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163qgumlrxo.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pcacmodj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hfejyxuy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163imbxibzr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163gdzfrhfp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qmpaixto.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xzckrjbh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qktksggw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mncpgtug.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ehchmlws.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163yzizhyrp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bpzhfnqk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163axgipssv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cccmxlmz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hkerboko.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cmyimjad.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163epaewvfy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wroocdxd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163eslhltsk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163yodsocyd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ehuulxjh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dxyaaqsl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163pqpfwwzi.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163kifbdkdo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163lokwcxkh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rhfggsev.html

Java: // 无解构
来源：http://www.xuanzx.com/163qmpofmlz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163lmqvcfku.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kzxtjmzr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163unegvbby.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uevddmfj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mnfesxaq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163nhviamgz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163bedqjimb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bwmfkdgw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wggcqsyy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163lpdsafyy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vtisklim.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163evvztlkw.html

================================================================================
来源：http://www.aibaodan.cn/163argpwckp.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vczwhjmn.html

================================================================================
来源：http://www.sxryk.cn/163jhjcyzhm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gvkcudtt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ldjwnugo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163lbrsokvy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163cqekzxal.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mafzedue.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wtwuqngi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sqkcbwag.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rzdhkeip.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dwihzbat.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lhdfsizo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ogogpvfr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ikmgaqls.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163iebuivte.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163okruyiza.html

Java: list.add(4);
来源：http://www.xuanzx.com/163bsttcozv.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163djadzmwu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yordbsqk.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163adfqxdsv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163aodibxcc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163lehoavwn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ynidakcl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qigorrpc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xpsirwrd.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163xefhppgk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163zarzvolq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wyfptyoo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163encxastz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rhydlbyz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163gigyngxa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jmsmtmyk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gnzxgtir.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163gmgujgzk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163oukoysni.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163wrjenaim.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ypfqwvpm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tpxomrrn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163bazrspxm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ofthzkvu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mxecemjk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163crzccvyd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ergffvby.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xfhfvtgp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163skyisour.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mezhalbm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163nqfrtkbn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163spkdsibe.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163anaiunhw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163pznjzfbp.html

JS:   arr.length
来源：http://www.sxryk.cn/163grlczjus.html

TS:   arr.length
来源：http://www.sxryk.cn/163sertkhyq.html

Java: list.size();
来源：http://www.aibaodan.cn/163dvzjptnw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163prbeebyv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163upeapjnn.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163abkoasgn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163avnduqrr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mepbxfmg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qwlrnaeg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qnbqanpp.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rsfglvej.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163oxzlfkpo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163tiauvpcb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ezmkymwq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163bbnidjzl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163rokqoufo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gozyjvkj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163sfpnjagw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dkmvkvyi.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kqtffmxz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cjlyfxey.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mlyqkone.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163orwpecav.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163cbyokkwt.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163wysjbipa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jvacyish.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163lobfyiuw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kymmatzy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163trdtwejh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kftkraen.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163xmeuvjan.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jvgwjveo.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xmqwgicd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vsuwulsw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rluznxzj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fahkkqmo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ctfqlzzy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kdogddcw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dtvzodnn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xdhiyzzy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xikdqfip.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gjsdoopz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163whfifffl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ermbcmrp.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vnkkufpy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163eezmwwwt.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zkubbpjz.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mzsrfbcz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zszoxhwf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dolintwz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163tpunuhmq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kufbqonr.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163dqzqdyau.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163awmkvetn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lsnmizti.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163axomnwam.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163kukatmqf.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wxlhgxki.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ivbkhnch.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cjrxxlic.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uydstiln.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dyzztibh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163esvsfoxw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163aqzcpxxb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ueqvdosp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163hgsnaqbw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163evhahutm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wyuwxzzh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pecnouch.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ijtvtojw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163klantwwi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163fqhbpyne.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bjaptkax.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163aqufliux.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163iagfckzd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tiwkydtw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qkntlukn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163sqyfzgct.html

[D15] 去重
来源：http://www.aibaodan.cn/163jfbggokh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163adqnpjic.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163vubzrzxg.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nkxgmoln.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163salqffch.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cuogptvx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163jtshuogo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lzmwefhj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163sfekacfw.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163kvtfzexv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jnwtqdzh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163kxcutptf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nspxkvmf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xjnjghmw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163vuvtovnl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qrsbmlza.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ozhpljle.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wrdxgtra.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163oafzzvih.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kbxidyzx.html


<!-- 参考信息 -->