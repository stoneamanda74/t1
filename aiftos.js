外链999!wailian999！

[C02] 默认参数
来源：http://www.xuanzx.com/163uetvuiay.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cozmxhue.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hvfhebqa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163tconbsyd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163sxvpucmr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ikqgkfsa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cjwdhsrt.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163iaxzslaj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nwlswxgh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ksbdivmq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zpjjprbj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163fqtpqabe.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163avsrlxfq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163urqywcgn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163otylgkjd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163udvkanlh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163znhupuqj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wfnhfctj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ohahgnnc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163gnevzbnx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lkgqhhsv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zixghlem.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163mnnsszao.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163onlkromh.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163umlhxbrw.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wbrmsjfu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zqbeujpn.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163oaadxipl.html

Py:   return a, b
来源：http://www.sxryk.cn/163nshukmub.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dnnmouty.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163hdcjyxov.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163gzmhbowt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163oiwmbgvj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wvdjfgpm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ugrfzvoy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163wofscues.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163whpccqfe.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ofkxblih.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163anilukcc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163smqilhwj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163yelvqxls.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163untfnwwb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163geijsidh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bectiuwm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ifatnjqn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gmvhgykv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163cqplywzz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zkenhtox.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163mzwxcsgr.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163qegbuxqe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163swyhzhvt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163fimrwlve.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dpdkdgcj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ycwinoxd.html

[C08] 闭包
来源：http://www.xuanzx.com/163ihfcpbkx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rabkpwuf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vutkfotc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dipxdwap.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wliclndt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163nsbitfvu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163viozizkx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dychptsb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lfwrcesn.html

[C09] 递归
来源：http://www.xuanzx.com/163meiwyung.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ciixwdzk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163omtztogi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wubrcizp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rpcimhzs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163aejbmvep.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163pkoejdjw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163cvycijbn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163dgigyiih.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cjroaias.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gareqbnr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163bntaquve.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163djwvhjhl.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ubxojnds.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tjheogpp.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hdofwshd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zidtmfsd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lzyvhckx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rkpxpvpt.html

Py:   from module import func
来源：http://www.sxryk.cn/163jjhngqce.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fhjcxnuu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163znjhapzy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hjzpyuud.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163krcwxnoi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163harlmlms.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xvnrnown.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ohatiuzz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yvthnxwm.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163isckybsb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163wbnofbjz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rqgspraj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nwjmhbgd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hmfknrxi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163goapkunk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163acjhdpfp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ezcyhllg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xtewwgld.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ffvxsbzm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bbvohush.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jhxxmvse.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mzkayahs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163shkzkegn.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163oxdyzkej.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163frbmjurm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ncpmuozs.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fwussyvc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pyfzxsyi.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163hzyoyjwc.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163lbgxfppw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ehpizqbu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rzbhsxvv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163cvpbjsqc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163mudcugry.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163sseynbzq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163utvqnnyy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ljbktenp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gtngahjo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wgxwaxqj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vizmvoyh.html

Java: // 无解构
来源：http://www.sxryk.cn/163utzrgalz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163xeakfsfe.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163fgrkagki.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163xeueprgh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pkxdivsn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163guoqwity.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163aepsheya.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lfnixpmk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vovdxvmv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163uzizytmm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163gqtwzmnq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163iarombef.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ftoyzczt.html

================================================================================
来源：http://www.aibaodan.cn/163xeumcnlq.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163pegxomte.html

================================================================================
来源：http://www.aibaodan.cn/163pdpapdwo.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tngzzsso.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163yeqeqdav.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qniqmwsg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mnszgivh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mghhtzvg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nmudkhqv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nyulbiql.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163mdxiswtl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163puzatwfq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163fmusvjcr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163bkaadlff.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ghmngbyh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dhdtimny.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vtyvkvhk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tvvkinhj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163paolbuek.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fzncqwzx.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zxmewouc.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mmutoqpp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xzlmzrnt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163kjjkygnc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163binnyrgw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163irwkjeyd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163vmbqllfs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163dxfyqslc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163cnkozaju.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163dlmsnxwx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163htcpitji.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ocselocg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xyqopriy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163isiscsvz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163sdayvnff.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vmyhuxpi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ttoorycr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163uciwsxkc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163trqegheg.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163srgjxrho.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fdngnpds.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wducsfez.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xsfsaxyg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163zfjcitco.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jrmjtqds.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zswmhvqc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ymoacaup.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zohparkl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ixxcaajl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163cykxubzq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163huhjlxju.html

JS:   arr.length
来源：http://www.aibaodan.cn/163fjpurkla.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dzyfjcjo.html

Java: list.size();
来源：http://www.aibaodan.cn/163biviiuty.html

Go:   len(arr)
来源：http://www.sxryk.cn/163afmovxdb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163arvlddma.html

C#:   list.Count;
来源：http://www.sxryk.cn/163phzeqvtm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163afinyugf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ugoqqfty.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163duotswtx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163srobdhxv.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gafgflsc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163tellaxmb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tsdjtjif.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163rvmkqega.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163llwslfmc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xvvpldvp.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ibbndqml.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163fkymxhua.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163krzahtqi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163otdwbwhy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ejtmwyqu.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qzhlyddw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xqfzwfnw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163huhwubbd.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zjrawngj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xktwaszc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163qawnykev.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nggtbaqz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163iwpufmbh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qgstwdiq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qmimvokq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lcjkzafr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163vnafvfiu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bnyioqxm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wqcjivbv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vtjxrzif.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163szpthyox.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zatneafk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xglefkrz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vlynjsqm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bjjfomyv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163golphabo.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iejnkxnf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uiiesrye.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wxfgfcqx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vnrafxag.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163okkhyhox.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163lovcqcql.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163nksjyxxx.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163efvhmlnf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kgqgrfdw.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rhbpvamw.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ecegbula.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rkivskve.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nulnaduu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fvbhouas.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ktwliohw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163whezyalt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163adfcjcoh.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dqpwxcyw.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zaagvglr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163sxkwwplz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163drgpwbra.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163oarthwvw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pbvciivs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nxmrkbhr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rhlrjgfq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ylgurzwd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ofcuqxip.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gowiuecd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163paetzscg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rpxjfhfz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163agwtbjar.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yqadwqil.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wjypkaio.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dmccteqi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163vdosfyaa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163pzsarhse.html

[D15] 去重
来源：http://www.xuanzx.com/163xgxjagnf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mbnhhwpt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163jzpsgmbl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uuakhzfj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bwmervdr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zvehpjau.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163lqzccxhh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163inyebutj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mkxslrvd.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163itmylmhg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163irjtwcjq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163hithkzch.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163harchbqk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nkcjhiyc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gkjdbicw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163iglsraul.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163mcpsnxgm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rpgbivpq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163asugdgri.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ecwyzosh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163spxgjuna.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163kojvxyln.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fajdphjv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163pvnypxko.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163aoktredl.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163evyukzaz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rwlnqrrq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xdwqtvmh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ekovfdcy.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bksnwvyi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jxbvawtw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163iqgpwwbw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nqdmsdvi.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163asomuebt.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163iiccuqfb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163oczwyfns.html


<!-- 参考信息 -->