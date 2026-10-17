外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sdwiakfn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hngepqyx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gfufjpqc.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163usfcthmd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163mtzxzhpo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163idosnpdd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dffqyydm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163akxcarjg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wgpnpvrz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163likpumdj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wgrvabny.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163pranjxlv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jeviippr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qlyjcmxk.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163siqdoimk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bcipotln.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gluwgwsy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163grjdncva.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jsneqcki.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163afgunhcg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163phytyuce.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wxcjzrok.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gkncvmaa.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qrymrjax.html

Py:   return a, b
来源：http://www.sxryk.cn/163bcbiczfy.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tqbpcarg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nuffihsb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163sgkkojcp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hddykktv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ggwtarsi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163napetlji.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xrbrdclb.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ophwscdi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bzekmkyz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zcrkvgkm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163hwttycgp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bbxlyyxf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qvxsdkvf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163iqvouczj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mcrhqlbb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hrqwsvrr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163iofucwqc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163pyrzkfip.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163smgvytgz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163yanxypys.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163exeuutia.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163wyrobzpj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fghxghqx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mtvgijte.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fjspqkoy.html

[C08] 闭包
来源：http://www.aibaodan.cn/163sbvbcdoy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163eswhqypy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ibgpmvxr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163azailoyi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ccowdbqt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kpgdmgkx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163kpgeidhw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mtstjcnk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163htlzuulg.html

[C09] 递归
来源：http://www.aibaodan.cn/163apbnanwc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cmirqhgf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163plnydrjm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dgrfxswy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163glxlhmun.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163usxpwdxp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xxcddptb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163kpmoldob.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gofduhtl.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dkscsygg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dcnwjlbp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jbvibmjn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163adulmefi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163bhvsrren.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rwqunius.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163houlazgh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163spcsygpc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163amykafra.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163crzcpmds.html

Py:   from module import func
来源：http://www.sxryk.cn/163rdusxuqe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fnoxkxbh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163yzwojjmi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163blttvvwb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nfrjetoa.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pbubfafs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vacuxflq.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163nltkqztn.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163tathxqpt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ktiumqeh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ntfqaagf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xhzvmhxi.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zlrebuxk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xqavbftz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ysviyctp.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163anojrkxl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tqvxhwcy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163jgpgmmes.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163loaqilfi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wgtprkzj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hsbuvpcm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vxvsxkxh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qhmscobw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xsrtrqmd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dgjataka.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jbxlrckx.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163popwboub.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fyorsyqh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163aslamwkd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ukmjfoun.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163aughsnjq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mnqbzutn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163dlphsyjv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163komelpdz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ybokloof.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pjbtdupq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ibwaufcl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rfamsejh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163htzefhkn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iennizfx.html

Java: // 无解构
来源：http://www.sxryk.cn/163ggdgvmru.html

Go:   // 无解构
来源：http://www.xuanzx.com/163sjaxjvnu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xdartiks.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gsfesjaq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cjuelpdv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fzbjcasa.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rccykmpq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163squfvbwr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163swygktyi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bleokpxs.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ttzriqya.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163geiykukb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163flhiaptp.html

================================================================================
来源：http://www.sxryk.cn/163typouruu.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hwiyetbt.html

================================================================================
来源：http://www.sxryk.cn/163vtuyixnr.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tvvqyhzx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bmgpeeuq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163yrajyodq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qtsvogzz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163llwonuxy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bdrcchvc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rpllzhjy.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gxltcste.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163dgexpehe.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ppsznvzg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tbdgixpj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163imurrbti.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wrbfzvjt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xvmrqapl.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ypbiwytc.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163wdhgraxd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163cndqkgls.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163oqbcaiez.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jnhllwna.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163usxcpxhg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163eleawtim.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ggtbjkgm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kkukfnjw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163kmegvkhe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163umcdxpvs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hqscromm.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163sryxkdno.html

[D04] 删除元素
来源：http://www.sxryk.cn/163bmykujdq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zcoawubj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163dgikwlwj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cvscwfxe.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163eivkppwq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gjwvjvjn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163daphzibd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163oatgovsl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jfbzytax.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163duxvrtbx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lfmiqype.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hoeetmog.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xjkjochv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ncewmwxy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jrrbgsll.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163jawzjiia.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163oyboqjqg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163iwoxrvzo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mmpzlyew.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mtdwortj.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nwvoskna.html

JS:   arr.length
来源：http://www.sxryk.cn/163pshizwai.html

TS:   arr.length
来源：http://www.sxryk.cn/163zipxjqeh.html

Java: list.size();
来源：http://www.sxryk.cn/163qcuseieb.html

Go:   len(arr)
来源：http://www.sxryk.cn/163idwuwctv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163bbmofofe.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wbtvdxub.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163otfaqvzh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mmwtrxyw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163uzitakuv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ovcbcczf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163syfdqjnp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163cjwyycie.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rtknqtsg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163csymonqg.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163titnbtil.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ovibvohn.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163fcelipnb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163sddgxvgp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163volfkvxs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qcdqslbg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gvgctywo.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163oxxzbzlu.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ejwchbcv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mpicspuw.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163iddtwzni.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ebllmxkr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163tnqwmqob.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rdugqxsl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163iyjgavcz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fggxkavr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163bjksyllw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ulkouuja.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163wgwwchpp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ikgywjkz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mcnsnvzx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163lukbrbgp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rpkrhium.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ydryprxh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vsoefqcw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vxngphwo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ivfxdagj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163cpglovkj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fbnwiqkh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163pbztlesy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163nlijkvrc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zkeyozut.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ndiduykt.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lphcollt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163faknmzjw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rvtorhul.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163mgxnibnx.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163zbwjjbxn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mefbfckz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lhhexkai.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163owmwyldz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qniqjwxi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163dhdmmsys.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ilvzsbab.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gdzibcxq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163egamgjsi.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163sgqfwsjs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ekkiusmc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ejwwfkuq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163akhgkfqc.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dcnkdfad.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lrrtveqk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163mwvpkokm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jmwixlsa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dgygavsn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163fcdovghe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163rzxyidih.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hweowdow.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tkkxiepj.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ytsmxebz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163taxosjwf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163myiekker.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163lppqfvbm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qzvxxypd.html

[D15] 去重
来源：http://www.xuanzx.com/163vpifbsxk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sfknnxpx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163mategmmo.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163sclvgiyt.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hwbpcnno.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163pxnnjmdk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vvgczmls.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163chahngho.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163hormiwwr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163loyematp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163unmedrqf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163kfzwnnmi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163slhzjcjk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zrjzcrka.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xgqmlzcb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163aqcsqzsa.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163acalenok.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163runynawq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163awmviffg.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ttjfhulm.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163mpphywih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163kpcucsby.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163viyvmkvu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dkuhweau.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163owcbrkqs.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gziaeoos.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rfpxqukm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163viuppmhm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qdsxzisi.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dradfked.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163guiyyopn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163celkxyec.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163eflekzdv.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163mbeucvbr.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ukmdjvck.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163axykwlsm.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163lywoobkj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ecvyzzbh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163enqzthuk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mipdjaoo.html


<!-- 参考信息 -->