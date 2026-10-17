外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mimgrkek.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gnceawpd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163woviowty.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rfkhswyq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163seipzywr.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163blfuwyle.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163biczbrje.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mretqjpw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ifujcqgh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wafoijjz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163cudioequ.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163coyilqdz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jaepzvkb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ptqjdwbv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zqlftkti.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163jakkhoan.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wgajqozn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nqcsrvah.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gcuqkadf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163fuwinvgz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163njwflrrn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ofsenasu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yantmgik.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163yjeipuum.html

Py:   return a, b
来源：http://www.sxryk.cn/163ltfmehzk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nxhygvqr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zqoayxng.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163exbwhabq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jhfxxgyq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xdxbybee.html

Ruby: return a, b
来源：http://www.sxryk.cn/163izzaidgp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wlinwjyj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163gzzjormq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163cnunqzwb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pklndwwb.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dabgmklf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163bjgrvzsu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163gwnvnfqo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bxwpohzr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jqaneddz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ipdajwjg.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163gwiidelt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dyljtxrw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163inbxrcrp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uubzscon.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ymapydhk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tyynppzi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163oxibvdkr.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163hobsyifc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163lmzlmvvp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ejpvzkub.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163idfwnjbc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ljrrpxaa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wakwthwf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ybuwcoxf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163puvkyiax.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yrdrpndt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mylxinjr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mycurwip.html

[C09] 递归
来源：http://www.aibaodan.cn/163fdkduigw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wzvhtufq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ncnpryhq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nijikvad.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zlwsyfvm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gsfcwuae.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ahvqwwbe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qddpjfbo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163jsxyzbaz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163huwcbbph.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ondrcpom.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163zkkasywm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fgkaqiqq.html

TS:   同 JS
来源：http://www.xuanzx.com/163mmbusksj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163wxdsunat.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163usuilmmq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163xzaslcwy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pymyjvrf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qnzntmnl.html

Py:   from module import func
来源：http://www.sxryk.cn/163mewovgdm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gfgeczdt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tgovmeuz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163gwffkwhm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hahzxyqo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163oiesqwvb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163evrgvyhw.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163jmlcesyf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hnwkbthl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vqhjflkk.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fnosdnkn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jtwehpeq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gscdrpeg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163bxatyyrk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ugrnzuze.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fuiffmep.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163pwmfbkkd.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163buzakrou.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xwuogyum.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163erhfgcjp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dvkulkrk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nbcenxab.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163evdncwvr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163maekpzzr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163czcjhiyz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163febqeizt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lnqdrcot.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jjldmfnt.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163cyitathe.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ezvmlobs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163hqzaxewy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163somhrwkp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163dmukkgac.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qhuphano.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hldijkon.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kbkuzutw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dgndlncg.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uskthrdd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163zzsbmzlw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163klphqhwy.html

Java: // 无解构
来源：http://www.xuanzx.com/163vlpgbtap.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163cwykiuql.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163prnopkkt.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163swvhfuwz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gjvytebz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163tzeehqlj.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hpmnibou.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zgwsdhgt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163htndltbn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pfmtzdng.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163tmqsukmx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163domctkbu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pyzvftvn.html

================================================================================
来源：http://www.xuanzx.com/163sqjroehd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163gmbzkyzs.html

================================================================================
来源：http://www.sxryk.cn/163zdxekkdq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fxtgcfpc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vqiqmgyn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rysklesh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163cdhsrqpr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163fkksokah.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lmzudmbe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dstnoklm.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163enaphozc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mtvpfgzd.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pyjgnmxn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dveumlmb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ggxabwfo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163zkuleeej.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zutccyht.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qkwgpxzp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163crbsnltn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hwnqnrte.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163teyiyfky.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mwyukigl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jvaogwzy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cqpuvgju.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163arfdhbfm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163shzovyap.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zemjskmu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fdiyuvsn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vxumzixj.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163wmfucqcv.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163psxgsnkc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163motqrvtp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163onrobzwa.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fhgjamhb.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gjeiolna.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rarizyav.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163easzqqhg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163advkwvnk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vebwnaph.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163sseawbct.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sbmicehh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qhdfgjzk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163drxtbpus.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163bfmoejuy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163bredsqmp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163slyjffou.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gmpsykti.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163tphwycpf.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vdmfoghr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qknmpfax.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vwppaweo.html

JS:   arr.length
来源：http://www.sxryk.cn/163vokkedqm.html

TS:   arr.length
来源：http://www.xuanzx.com/163fhqytbsu.html

Java: list.size();
来源：http://www.xuanzx.com/163ygfgwurd.html

Go:   len(arr)
来源：http://www.sxryk.cn/163brwltaif.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163zcglwtsm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163sjkhcbhz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163uexdiqzc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gyhejzov.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hwdmmktk.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uhyyljgi.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uiywhuqy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163whospywx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mjvwksfc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gkykfvyf.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163elvetzgc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163mwccswep.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ueirhijk.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163npqgsdjb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163nqsyufpw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dyxxzaie.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dmosecwq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163riotewat.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ihgbuyjc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163gpwwrjwr.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mwlwmunx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lrgdexkj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ijejozxk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ngojhveh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rqsxdphu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163tagmncsd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163suiiczkq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kahhanuo.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hpsdaoyv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163txpoykgz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163eovcemvc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fofgzphe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ovkzbpfx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163oozlbvyz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163orgafxqs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163yrhajvjn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mficoabr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163yryukdtn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163blzykbkg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ttfosokd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163czvlszvz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zifefxys.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163rnsttjqq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wlspcaji.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163akjokwdj.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fnihyiqj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yaiilxzp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163alzrodge.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kcylovqs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jivvkhcz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163btcdzfhd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zcuftzdr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zowqqtqu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163yttnnztk.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gjhsprne.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163volmlgem.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163dtneccyo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zvnajvrv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ltlfsgju.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pijapbeq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dvjxuhmr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ribeiqfb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zatmqtod.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lnhdylpd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163kkivvtoo.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xyesiuqp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cfydsugs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xbxvxgrz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hcyuybns.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qsftsfng.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nvgwyjkw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hwggxckt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163aniveblf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163axbyozdv.html

[D15] 去重
来源：http://www.aibaodan.cn/163zyrnoezo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jaxudeio.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163skxyyqpb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ryfsorsa.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pzurzace.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jwuwzjti.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163cmblfeff.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qwjxehnp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163eebtgmcz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163apxydbkq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tzexrvgf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ptlgjvdo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hxjbwoja.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ybyzvsxp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163gdirnetz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zrjbbgnc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ckwzxdst.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163aboouugv.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zauvrenh.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163gwykfugn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wnkxomih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163iwxqzwkd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163qhqefnrh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163arammzgi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163eheukrcw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ciktdrrs.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vyfghvmz.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163kejqaban.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163lsnaeykl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mirlygtj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163lprdxkyr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ruwxesic.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ubbmhauq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fgczmrpe.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163sfogqgpv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zycajvyz.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163kkinjclt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jfpvsmtn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ercrtldg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163blawtggd.html


<!-- 参考信息 -->