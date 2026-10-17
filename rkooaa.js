外链999!wailian999！

Py:   if not data: return
来源：http://www.xuanzx.com/163iopotecy.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ciqyygdx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163efepeveh.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163oibnresr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ukgrhezk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qkjxouvo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zvxylwgj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163wuumvrwn.html

================================================================================
来源：http://www.xuanzx.com/163durdgjuo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163cemcwcva.html

================================================================================
来源：http://www.aibaodan.cn/163netkqzbg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163totyjayh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163btdeijpb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ffiuwczr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163zpoatbpc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ybgysxnv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ggisurzw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163msowbnqz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wxppnfuh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163awsppyob.html

[C02] 默认参数
来源：http://www.xuanzx.com/163toziwplu.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rifyiplo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163cdhnyhur.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163crfbpqpr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fmnqzomh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163sfxljzrl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hrkoxzej.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wglzojie.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wlxoryjk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ldfcnexr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kdlebmup.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wkibyjsy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gifhyaib.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163eazrhfcw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hmxwpphj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ahnxaosl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ewxvzlso.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163btmtqlky.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mjjmfrcu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dclfzngl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ozstspzw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ohpffihm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xzpwojoo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wfnrghux.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163oilukxxd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fradkqqx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rlugrotk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yfkbpbui.html

Py:   return a, b
来源：http://www.sxryk.cn/163mpthrnpm.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163cwcnsxxz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rvzvvhnw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163jcytoefd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xtzliclc.html

Go:   return a, b
来源：http://www.aibaodan.cn/163baaezdap.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dpkcrrvz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163klfcwbba.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bvvomrgu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gwzrgbov.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bmlhkaoe.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163uivgfkxd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163snyvemgz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163itpbamtt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163goavepkw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vcdmcfid.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163jtkdfbvj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ldbbduwd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163semtoffj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cymbhcxw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rmezteat.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ozaqilaq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kuxepcru.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tstzwsia.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kactwbpd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163cjzfdbdr.html

[C08] 闭包
来源：http://www.xuanzx.com/163tdpdylls.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mnqvbgay.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xiakadnl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nruesyei.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gsfpjhqn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sphehtzz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jhcuwrnr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bzulujgx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bufqnvhn.html

[C09] 递归
来源：http://www.xuanzx.com/163qzwntlqc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jyjrexar.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jhfsxuyt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qghgofit.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163itfqtkct.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163cezhfsrh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163snfqfogt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vitahbmt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163yzaptufu.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163brjmhnez.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163iopxhnuo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163omyxerfn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163dsvuhowq.html

TS:   同 JS
来源：http://www.sxryk.cn/163ghmzuagd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163uzrusnhq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ssqrghya.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163mbxtbspr.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163xyodmwxz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163idaikobv.html

Py:   from module import func
来源：http://www.sxryk.cn/163qcauioui.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163sajihqhx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fxwxlxwh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163gqnlziio.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lmnufgqj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nnkjaqdb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163olzmqxma.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163usxauqbr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163booqhjgt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163iezucyun.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xwnmsuph.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qngjlasp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yockgdvt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163tshzxuem.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163uwxczmkl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ubseiwty.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rkfznumz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163jtnereur.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mfcpvjqm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163psqjdfad.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ygfzfqaz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pmsmjfaj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pxgfcgwl.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wmwanbsf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nbzmbemr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163yxzzbtaf.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ujbgoqcf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163froizihu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jyzliumw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163foblctpu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gvsmrmjx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163oontnrgt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mpyhbbir.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163btdqtbcj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163weonbtll.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jbneukll.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163twmmxvza.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163liujitce.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163dfnqhutp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163mojrybkh.html

Java: // 无解构
来源：http://www.sxryk.cn/163qjujrobj.html

Go:   // 无解构
来源：http://www.sxryk.cn/163csidldij.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163clihihhq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wystftei.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ltoqxayf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tjytskna.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163eiqgnojj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zvctrdxc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tlqlsjoo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jpbvdldm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163itvlchie.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ahdrwfkm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rywaigwo.html

================================================================================
来源：http://www.aibaodan.cn/163bmqpazxb.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163oeevwbmv.html

================================================================================
来源：http://www.aibaodan.cn/163jwueichj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163glqkwmad.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qlyjwcpj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163tuzqsdvf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wlbbfife.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ndjbbtqr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163egrgsivh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ytubuuai.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163cysctsmd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163iiezvusu.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ozlwzwby.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163obvzhlue.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163isucyohm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yfkrlolj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163sfcpssty.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ullgqfxn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hcxcoxbg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163imbysejf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163pshlybkh.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163urwefutt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163pagvezhz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mmptievz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163uhlvisuk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163llbqqfrx.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163pqotjony.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163sfkbxdru.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ojauwrie.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163icdszzdo.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163lfvnogny.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163helewbup.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xactvhag.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dcsluuqm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jgxvnjia.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163cipbguld.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cujnwbxt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163uztozwzj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ydsjizuy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ueopqumc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xweytarm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mxidukju.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hnpbmtqr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163sksxlhby.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163dcjrdbla.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cepqybyc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ylstgdks.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wxuxzkdc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163qmvzlxze.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163siepdhfq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163afdwfijg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ktcxmudj.html

TS:   arr.length
来源：http://www.xuanzx.com/163yjmyrpmt.html

Java: list.size();
来源：http://www.xuanzx.com/163gilviaxa.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tqkmjeht.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gfnfasar.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vryarrdd.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163dwspllhn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163taaqzfxq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hpkjlnia.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vabnnlsh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qdsorkde.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hyjjswcv.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163meukxrot.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163rydwunhn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wjvlulbo.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bdzpfajs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zfsppqev.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ysvdhgtk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163igqzzfbe.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163nerrlfae.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ydfkkkhx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cwvjtfll.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ekuwozuw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hesbkqlo.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bnkoxgni.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tongzboq.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163rlftnpxc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vgchbjza.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qkcmnrbf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qrihfotn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vvzsvors.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qswiykgk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163apodelpe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ptbtsnxm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hgsdurqb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iwpousgr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jjfnxfhs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vbxlwvaj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lhyyccar.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dpalpwjb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163lajbwsxb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163pwawwfcu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163xqrhijrk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163eypsibbw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163lrzhxpip.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rhlunskj.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163mahpdudw.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163dgfhbfej.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163awlxwlhi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163evumllrd.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163kiyzmudq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163diyzujhl.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163crjcgvia.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pioualwa.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zjzturjb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cykxmauz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163swgrdxaa.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163rfhaomqh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hxancncx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163chrhgooy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ftkfdkcg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jkfcrjmb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163otuukreq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jiloaruz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wjtwxbfz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163nlpwehqh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ymnrrjqa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163uxrxkael.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163mkuxeryu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163quhovyup.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163nodpvyfg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xrjhbidl.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nubhsfwc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bgovoovz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ltzleijm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hwtnidaq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pfmjmhzo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163txojsthg.html

[D15] 去重
来源：http://www.sxryk.cn/163akmjrsiy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dykkawpa.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pjygfqgu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163koanyrci.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zdqgbrwb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ovcnioxe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163rlwvxidg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163obmlbmpo.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ravdqidr.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163njtbleki.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163kyitjqqp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ruahbboi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vwdfcbhg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163iaxlyceq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163shscajez.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163oskcarzx.html


<!-- 参考信息 -->