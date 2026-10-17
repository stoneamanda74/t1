外链999!wailian999！

Go:   a && b || !c
来源：http://www.sxryk.cn/163fwjzikdc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jtyfhdkn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163lawxscfu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mznmypct.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qpumrizs.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rcmxfjpw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ptclsxqk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bwfxndly.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gcyppyuz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jrffussq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163prummvyi.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dtqfcnaf.html

================================================================================
来源：http://www.xuanzx.com/163crframie.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163kfdhmmcx.html

================================================================================
来源：http://www.sxryk.cn/163cabpgcfy.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163icwpbngw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zpbjwmqf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qujiiqld.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kzyzwdkw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jghduwqd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xymbeisp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163kzvptptb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163limquhys.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hpaavfmz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zkamdysq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mqhpqany.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ivsqowhw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jzqianlb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xvaprwil.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qyfthmqk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wbsqlhaz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163sjprbovd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gbqwzmjq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lzifjuyb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hmlvixku.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ouveagoy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vbznsnik.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vnampgsu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163icfmvoby.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163jpvyklkm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vmymrutp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jdfhrrtk.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163olelvpaq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163gygianai.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163uynwwevh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wwkegysi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jnojkxaj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wyxjvvtn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163atylleds.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cwoguzzt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cjyvzvao.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gagwojub.html

Py:   return a, b
来源：http://www.xuanzx.com/163rmyvimud.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163orfdsung.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ihaicdhj.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163qcdnvhqs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163iycareue.html

Go:   return a, b
来源：http://www.sxryk.cn/163exofuscw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jwvjltnc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163sxvyyvlu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bnvjaaku.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163zozoxgmo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jjfltuvs.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dphobjom.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jzlxziwi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163nwnarvxj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163mipasdaw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hnrqjolf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cqauvvgt.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163tssmglxx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wewmsgoj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xdnkaytw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163yownogeu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163odseamuk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bfmhcucg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hbdlmynx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qsewkwau.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ptbstyiu.html

[C08] 闭包
来源：http://www.xuanzx.com/163hmggwclu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ayoiomyo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163jiiviuri.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163emucghog.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pelamvac.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xuhtpdjr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hffjddik.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163thzbpfsa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163smwsbyxn.html

[C09] 递归
来源：http://www.aibaodan.cn/163vhnxsiyz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bsbxoxah.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163edvqcshv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xebquykk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dxbycqic.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163qashurgs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dfnbdser.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163mwlscpoj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163osirenzf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163qkealeim.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163spigellc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163cmoncroc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tdsnlofe.html

TS:   同 JS
来源：http://www.xuanzx.com/163ufrsenue.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dunuuuoo.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163dgweftre.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163siqgvpiz.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lpicsjzo.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mzwxojgp.html

Py:   from module import func
来源：http://www.xuanzx.com/163wmssibtq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zyiknzij.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jrjyjcxl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kxhqurnn.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dcgzssyx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rycgpqgv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qdmnikuf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wgayqyht.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163sxxmnfqm.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ucelisgz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yliebket.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dtqnfgqj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163onszlnqb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163upjwarvo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ucrdqraw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fevjvtzo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163pycccluo.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bytwydpm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163sysdisfo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163olvghxtn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nafaptqa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rzhrwkdw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jfwmcuvi.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163kqrnuzcq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ybzhqzcr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yncngjko.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163iaatvdir.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163yxosodkq.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163oersxnkg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ibkdbsvo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163uawmujhd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ctevjhcc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qvhbrxep.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nsaanahi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163pwbwuweo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gskmebzr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ovfayboz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uqsrdrtk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hmxuftqn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kxheahjt.html

Java: // 无解构
来源：http://www.xuanzx.com/163wekemntg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163svnevbvp.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qygdujdd.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bmatdsnv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163piljuzdd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163spucpilv.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jwxnefnc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ngypvzps.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163qpecxnde.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163uhsfbvfa.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163tbmrmybs.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qyajmcok.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gryrbjpc.html

================================================================================
来源：http://www.sxryk.cn/163hkfcpoyk.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163cytgfmvk.html

================================================================================
来源：http://www.xuanzx.com/163hxtkkhcd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163dkdoircp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163zfqjvdko.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jibhdlnu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zdrktmdr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zqdmpxsq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sluskzyr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nrlxzxry.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163liwnoabl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qfrtphqf.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qlxcwasz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163sdrlosbc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dbnwrwea.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kcrnyomk.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ivarkxji.html

Java: list.add(4);
来源：http://www.sxryk.cn/163nomxnwey.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rirhbzme.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ydixxlim.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163weuwmjsj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163iwepvtbf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xcaoeecw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163kptvrslk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ffkcukir.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163onwzgqve.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gggrjvpp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163sebowijr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163egrecfpz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163pxisuwic.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qvddobag.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163extbbtdf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mpriujix.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163uzkhouav.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163plfmoefd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163scsyecqd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163wjcpwoee.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163piulrixe.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rxdbhnqa.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ljfpbwee.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163coawumxy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nbzsitgh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ioqkmvtm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xhjonajp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163otnjklhr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dtzhxyhq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163khrbvceq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jjypyxml.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tiffoipq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163iqwqpbbv.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163oscsmnms.html

JS:   arr.length
来源：http://www.xuanzx.com/163wfxunwyh.html

TS:   arr.length
来源：http://www.sxryk.cn/163vczqdlaf.html

Java: list.size();
来源：http://www.aibaodan.cn/163xnrllloa.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hylqcqez.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163damruezo.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jvocztdz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163oesfynoz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163tiytbkfx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xnblkfdl.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xscmkjou.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xfqsufre.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jumkfhxo.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zfhcdlzh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ndzexsft.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rkmlyryo.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163pwlrkrke.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bvekyovi.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pqzkfcqp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163gyjhdlwq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mlkayjyc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gkhveeqm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iycxkaec.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lklvrfqq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fyekavuq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163frjogclp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nuzkibdb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fjkhqtut.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163winqsaok.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ujmiefsl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dwkibxqo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rffbfceo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163werimjvu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163baxzuzrg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163asgyewpn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jbqwhtqu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163eckrckto.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gqwcfdsu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163plfffknw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bxqdypjb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nondvpki.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zzavsbax.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tpfolebc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vbdiqidx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163spedzxjp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dtnryhkz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bamlvwsu.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163squtvjiu.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163oejklial.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vcwmrhhq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163btjgpzof.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163qpggcbyl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xxnwmhum.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wudfhpgb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nljltvjp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jcgbxtvj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wvuagopa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mzonxouj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ccsvghki.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163kqzxndkt.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163sajsdjig.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163unxidvkk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ndqfkbbx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163nzvwcpsy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163irlcmkrv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tjpxllgq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163axbedfml.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163pfnjdhsb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163enaxpopx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163udaysdcm.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gfwvapuv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uhjrghiv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163mqrbxdai.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vwzgvekn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jraeqnuo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zgardgno.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sxhdhuds.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iafanwri.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163eynpodmw.html

[D15] 去重
来源：http://www.aibaodan.cn/163iasgvjcb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mnrlcotg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xbbfdizv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163kdvencqb.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fkosiyaj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rkloaudo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163bqnlmjfb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jwymleve.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163fgeoyqox.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ueizgvmu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163cnkhvrbz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pxhtniaa.html


<!-- 参考信息 -->