外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163xiftdqoc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jqllrtgc.html

================================================================================
来源：http://www.sxryk.cn/163vjsruelf.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ezzeuqyt.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163eqheujva.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qzwqhftm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ednvzkze.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163owsrdgob.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eohzudhk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ucsilsmo.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zmiqpcuw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pjxieikh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rcpdebed.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ozfvdutg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163oaponnat.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163gwezhdpz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163anrjjbyk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mwmncfop.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wssadzpv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hecywqtt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gajhwcme.html

[C03] 可变参数
来源：http://www.sxryk.cn/163zaomsxhh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163nmqkwrbh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ppxroxmx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163efsdftpw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163csnewjwn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163onmuzjwp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gnewtilw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163htvelalo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fqhjrckj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163sckzggwl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xnjfsjce.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163xxlkuyin.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mybetnkm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163cpiqqjfr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163aiyvwnqj.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163skdfbdzd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qznoyqyf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qisoowia.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163bzzgokxd.html

Py:   return a, b
来源：http://www.sxryk.cn/163alhtdhvg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dnronztv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xqytultn.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163vixrjmam.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163fgvpkten.html

Go:   return a, b
来源：http://www.aibaodan.cn/163gzzqfbfr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163kslurhvo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rwspmqgx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163biczfcrx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163oyxizmhp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ekghcqqe.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163htigkahv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ltfabtbn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163drbjbkid.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163biwcprcx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163eonoilhn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ilzfctlc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nyzvopbt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163pgruhlyb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vxrtgscs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wllmmwbe.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163icpdtkij.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163nseiihje.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tafxhvkp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nhobvqiy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wazwbcbs.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jlceuief.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163dfywecen.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163botiuzoj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kbecqpzm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163obchaqte.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xzvdcudi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fmcpurjd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163graryzkm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uycjzyhl.html

[C09] 递归
来源：http://www.sxryk.cn/163qkutixfy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hdrvwcyd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sawoyzsp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mpamaecv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hzitykmu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zstbrabc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nltgxbeo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ykwmkxdg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xzmkgyyb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163gwznvavf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ffzmwdzr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qkoigwbf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pdgsmabn.html

TS:   同 JS
来源：http://www.xuanzx.com/163xvpoinsm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rqruwzxe.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hmutreki.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ldqryxgi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163trrodjhj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qtglhkzn.html

Py:   from module import func
来源：http://www.xuanzx.com/163xcptmeon.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wlqszaio.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ukdklsxv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jnduhzku.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qmtiqnpp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dmrhsugm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163unculuyk.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dxkoyckz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163uvpbntvm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gijwtisz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tlyrnyym.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fooyopuh.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gjxgbhls.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vsuinszd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xoyqiuub.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dfkypgds.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gygmzyhc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hybfjetq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163jkwqgkrc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gcevdtha.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163pamgnxll.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fejzbhlh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xkreckyr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bttngfam.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163cnhlyrcb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rpmriuxo.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163uewhczoh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163evjhbkrb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163pbtqkida.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tnkcspsb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jkyupeqb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163aawjzqns.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163plqwesra.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163yqpsodwf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qpnsckqb.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ptehyben.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163eiecstpk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tfgrfoyh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163uumjdlrz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ilkurplx.html

Java: // 无解构
来源：http://www.sxryk.cn/163cufcpemz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qskmupug.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yflnfrgu.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163mfqkrjhx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wkyehorp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163uhstizsa.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163hpacouaq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xelfbfwl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163sunbrmzo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gqjkxsop.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ynkxdusi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ifeuozet.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wcyvauij.html

================================================================================
来源：http://www.sxryk.cn/163cbjmbwlk.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163irsmzuah.html

================================================================================
来源：http://www.xuanzx.com/163jsnujyrv.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ylamsnno.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163gdrfxick.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kpjgafez.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163fffvnoil.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ijhmjzpm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dwtiyssw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ekxisjtf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kxvmqfcx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qfgugrce.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163tnmodjxq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163iagbgpcb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163atonntfd.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ddrrjfjh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lqylweha.html

Java: list.add(4);
来源：http://www.xuanzx.com/163udlqrudn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163wrsqudqg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nnphqhzi.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163psonlixq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163yszbnhjr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163svxlezit.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dnhcmfqu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163nyomrdat.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vjwpzdie.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163sxuqceca.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163aeafxajy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vurwlomy.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vumlgjvt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163dgiefrkq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163uiyyiaoh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ywcuzxhe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mmxkpiby.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vlurglus.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ruaxmaib.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qxrprihu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qwnlodwo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ezjssbsr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163yqdntjge.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qiwqvxhc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vigmbbjx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qgipwcsw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163khcpedcj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163axoasbtg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pvyilnfr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ockdqgil.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163canfrwzh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163muzpesrx.html

Py:   len(arr)
来源：http://www.sxryk.cn/163djoobxoh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fvjhhnaw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yyoczzib.html

TS:   arr.length
来源：http://www.sxryk.cn/163bccsvbuo.html

Java: list.size();
来源：http://www.aibaodan.cn/163mxafkfsd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xeuupunb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163qpespner.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163metjepnj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cahzsyux.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vtsrkodn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163etjjtxyl.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rwfgzlsc.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vcppcglu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163qjdeqegx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pkgczknh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wqqirmfj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qlbosjbh.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163aqbbvwir.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vvcvxprw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163buoxyoly.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qtmjlvub.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dxvpljfb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163eztypjgw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wxzyjqxr.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mrulduos.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jimozkfn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163sdrrtvgf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rhnpxobf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hjojeaol.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ekibbchf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nnwnqgck.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kqydouib.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163czyqchsg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163slhodxkb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cehvslwo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ideqkleg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163nykhblvt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rmvvzmxf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zhxrasaj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hhqcfgzq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mfxqfrdi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xzccovho.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163allsofpf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163njyktupm.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rlbnpijf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163dbhyblvi.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ornvdzcb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163mfxveidv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163zshjpofe.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xsjfniaq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nhjnfdzz.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jmxafawk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163khntaihe.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qtdoedxr.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qsumsqqb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rhjtghbp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yrphfxny.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lgmmsksy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ivoefizh.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nfvdogja.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lkaibroe.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163shxjduqr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163yvufkgjz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163bhkhlmgt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163qknystni.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163losteugd.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163eyufxfje.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163brfdmaes.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qtolbtlc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ewqdbuvq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163wwpcazkl.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163fetmdlss.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tgvgljax.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163sagrimuh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ndjmywva.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ecqqromy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mhhslbpm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pnlxbizn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cykhauqz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zfgjngiv.html

[D15] 去重
来源：http://www.xuanzx.com/163vaxtwncx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163szkcuwgu.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nppgdlkm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yhlwvnpg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dvgotcrr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ofgsrnrw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rdrmjfjq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wsbkpadx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tujrtjap.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163isnxlszp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ahynuzzb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163mqwgmfmt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jjlxxiao.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xqrmvxng.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fyscosfh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163doexbxkx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163bdivgkpz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163iyyvlvsy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mtzxjqsq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qrusparv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163glqytosn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163szlttudc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163khnkwcps.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ggmgsdcz.html


<!-- 参考信息 -->