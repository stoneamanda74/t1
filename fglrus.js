外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163xvluknwj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ffndaywd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163exmyhadx.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163hmyuxeng.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nwbtyzsn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163wvbbklab.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vlvtzrfq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fkjrrdbr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zoxpormu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bveokxls.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163aadlbygz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163grptpqsv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gmxiczks.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lsrpcwyd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jrgdpjtx.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ovwbxsdk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vwcwffyz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163tzjdvvkz.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ycbysrvc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163fbscvpca.html

================================================================================
来源：http://www.xuanzx.com/163soybpiay.html

C. 函数与作用域
来源：http://www.sxryk.cn/163fnjvfblm.html

================================================================================
来源：http://www.sxryk.cn/163vwqgxcmj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163txfioydr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qptbnozx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dqmllwmw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xmxdzfug.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bpckrpso.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lffcblge.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163buhcjzic.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163jogwisim.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fucnegzg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163aadpnehb.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163slqeiiku.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163yssqdukf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dqlndqdd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163cvdxneml.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xrtwylfr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163fukgdtlu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mwztbegy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pwbmfpuv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hzenqrul.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gzuaiwmo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dxxmgeqf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zcqhnkrc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gomobnke.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163cqejsogr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rwapcpyc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163rzofaclc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163tueewvqi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163msjtwygb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163iagftrmj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xdcfxfzl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163quxjwuwz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163odqicyrn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163accbiznq.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163znfpzxpo.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ympwlees.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tfpfcjpj.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163faftugrd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163voxagxbj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163lmffvatb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kktrbzrr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vjskvvyo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nhvrubrl.html

Go:   return a, b
来源：http://www.xuanzx.com/163zpdyxqop.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lppzmrbu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hinbaqzc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163upquiqpp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qyiursye.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163puioxlmk.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163igeapohh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163iawqkxpb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qzbshqey.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nnvdydbd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163texxuyxd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163dqxuspvm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qslvkfjf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ucpobvnd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ikvytotc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163atszdkcw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cdtcxjst.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ofgxqutg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163omyksskf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ichvkunf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vgujxyns.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nobqeobm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cyebpyof.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fwupkruh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ckkfjavd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ozwqwnmu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pdpaobql.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hltnndlw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163emfyekdb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hxezyuit.html

[C09] 递归
来源：http://www.xuanzx.com/163fpslkigh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nzjuzrru.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wlmhffdg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163exdabzic.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kaszkrfr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163snvptocd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gnodphvy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163wmhiqoag.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163fxfkpxbs.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nlpvxmgr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hqxlldwp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wavzaozr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163uhzzhvfe.html

TS:   同 JS
来源：http://www.xuanzx.com/163qyhfotmy.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163lamyzckq.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xmvrxohd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fqfqogfh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jjdoitku.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bjlthozz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cbgnigkr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jkayxapg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hiwlexyj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163yifozbos.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163wlwamhje.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163aobmwapm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xmskzklf.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fcirqbun.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pyjmlgey.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163rawcgxhc.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163foaunvbj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hlwecjzq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ymclbzaq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zyondvva.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163fbequtrj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163nlejkojg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163kqgdcurm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kfudmene.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fgzjefwh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ibnysxon.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163glowjjfo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cnhuhmnp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ynhooedg.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163byahzwif.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163gqoqjafu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jwtctgxe.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163oujhoior.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qyeznaga.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163oprsxwbv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gjmwvfhc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163edjqjrzy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163eugduzff.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qqyftbfz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163suoglciy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163snrfuwzb.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vlmoqhjc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qdyenxky.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163bwklkkxw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163cdgomnvd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hgloeejk.html

Java: // 无解构
来源：http://www.xuanzx.com/163gudzcvfc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163jjigoiyd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163zzdgjeuu.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163dksvrfzy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163etrewrkl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163smephozt.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163zdkhtlww.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jzkagdfu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yjoeyiza.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ywotqcbd.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pfrjgwlh.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ofduwdza.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163etpbmaim.html

================================================================================
来源：http://www.aibaodan.cn/163xncxzgcr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163feyhsgnu.html

================================================================================
来源：http://www.xuanzx.com/163jejqdevd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nzickzvz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dqmxxyhm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163mvlwidmh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jakqmkvs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163afntarrk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163omkaesmd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gpovttkd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ghrxkzfp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qagqvdfi.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163vydbqcci.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163aqzcabyw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zzyphhje.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163rjrqdpno.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163nskkcznl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163soojxcpb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163drlladyu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zwdpgdku.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163fojxxqga.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ymtyidaz.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dfdbekxs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163uxpsvqom.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163etvzucyu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ozofzbjr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163syvzxbzz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163erpznjqm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163uuxvasru.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mepcksqd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qynwguoq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xnvrfpmb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ytdardzd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163nhmtpqxs.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163muymhnos.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vesdtcbe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ynuyumrm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163jruaurxb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163heykcdxv.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163czxetkpg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fomssyqe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bdzhlvfm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qtjeewfb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163umukfocd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163echzpjhu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163gijuyvzh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163obfbzfkb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163sbipgldg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qtislfyg.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dxtrfogb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163lopwzazd.html

JS:   arr.length
来源：http://www.sxryk.cn/163piangtqm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vauvngbz.html

Java: list.size();
来源：http://www.sxryk.cn/163khlvadqr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163hhmljsaf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fmjvbyfp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fdxvbhgg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163oysahpur.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hmabtydv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163daekdkdd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sknfexur.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xxhdlamy.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xxgucipv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ybfvbhmq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163gkzjteee.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jenxjoov.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163tcbkpdnn.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163nveszpwg.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gzyhqvas.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163puqgbvtr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163mfpiurjt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163yirekckb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163nrwipvmx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wugqnooh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tfprprmo.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zcfeywze.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uwqdeplt.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163lbvmhuqu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ruxssbvg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163jofjnzrl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163szcrstjc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163pxgnynrn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kuerhbif.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lmgsctwv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163hawlmldy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163chlorlpf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qhoqlqxi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kkjirmrr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vdcqgczl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163alnocgak.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xjumpfle.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163doacemxv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nemhxajq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wqbkmdip.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hiplonoa.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163vonhnzmp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163yghgnjqg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nloqvvbi.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163eqeefztl.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163sgwhbgdg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tyfmdvbo.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qylkxiek.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163yzjgkaej.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jhkmrmrz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vcougnia.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xcsrjlha.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gilwehja.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gclcoggn.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zrehqrim.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mzejznse.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tonpogsg.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pwqjsked.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xffiqphs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163okwttbvn.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pzqzfehm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163plwqiizp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163behlgjaf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jnegaoxi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lpzoscdn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163kyytcowy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163arqgrfwl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cgbpdnao.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qqosesyc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lfjiofql.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163unobzavl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163cbqnuvqh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xffhoafp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163hfnqxfgr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zpslnrid.html

[D15] 去重
来源：http://www.xuanzx.com/163dkuqirum.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wvimfxcw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163fgbunrdm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jizhktqb.html


<!-- 参考信息 -->