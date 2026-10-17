外链999!wailian999！

Py:   if not data: return
来源：http://www.aibaodan.cn/163ioexbvpe.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163npxwaxve.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163eigltzvq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wwfshoso.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163kpebxwik.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163tavroqzj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hyyaixew.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163laejktih.html

================================================================================
来源：http://www.aibaodan.cn/163srctgzev.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tawlieak.html

================================================================================
来源：http://www.xuanzx.com/163fvmjcvcx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163untryono.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ausawwmg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163laktjcqo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163anmcmpnd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tpcxznez.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bjjiexny.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fitflypy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nphfgbhr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yxdtltnr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xxgkakmy.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dekuyojs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dsozljyw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qbfthefz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hzliczmq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qrexbpfd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qtmqvyde.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163efvwqjuc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163neyiourp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163klcovors.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qmubdxcj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ulxezyph.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163smjxsmqr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ivcxveea.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bzcbhdtd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qdcjxtcv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yckhkbrv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tikmcena.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163kvuadkit.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gnrivbdn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163hcwvnjhq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pehogxxd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163cazqtlcu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xeohgyuc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ijifssdk.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mubiwiox.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163twjumblc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wqoapwdx.html

Py:   return a, b
来源：http://www.sxryk.cn/163oebfomns.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163itisuhxg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qzxhgikz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163fevkuflr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163abomstgu.html

Go:   return a, b
来源：http://www.xuanzx.com/163obbxiyru.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ylujfrxl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163sojufodt.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rrmhsona.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qnwzqddd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163cwbamluo.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163gcyicydk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ibjnhefp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163omajmutj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xxxwojzy.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nncukvil.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163aqwkohsv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ildraaso.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163drckoyjh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tpfozksk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jnuedfbj.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163yyzxkmkn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fjlalkqy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gvplalqn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ppepzrdk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163kvqtbcji.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wdyqybse.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mmutzmqg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wjjyhetq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zeptmzfp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163owayzrqt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fkswjweu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ovplpkti.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163vulrkvgu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ykuspbbf.html

[C09] 递归
来源：http://www.sxryk.cn/163esbpfoxb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kkoafehy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163epbcyegt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jbyupchb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163upnhayjg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163bgipyybv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bjftfzdm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ozokxotv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163feofhvzk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lfqbepib.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163irrrcqmo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163igttlozn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cndinfyy.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vuczzmoz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163uvhhrrpb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xifdlrbs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163pugorikv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qedmvwig.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pvyhbjzp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ximfxqrx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ylcmqqnp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iajetyzk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163idiwhrip.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hochplpx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gsbyxopy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163cggfnxik.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mnxxuvrp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hdzafowp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ihlsppgo.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qmqgvcfy.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oxfxahrx.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ofpyeoos.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pjsvcudc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ycunfupm.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bpbntbhd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163kpltqgiy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nqxjwipg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163tcdubnjs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vspbecxc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163lyvpaojm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ywdhiqql.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ukgmupeg.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163csxossrx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ctrowrja.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163aobwcxkk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163cflwlwhp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ozhanlzf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163mbykiuhq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163utpkomvp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163pivnybwu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163opwmgogx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163iliwjxvn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163kcswclng.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ztjeikjg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163lbgwmrqv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163czznjjwk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163xzvoibmi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163eeadwqvi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ywiznojt.html

Java: // 无解构
来源：http://www.sxryk.cn/163tkuxmvgo.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163xbrqoaoe.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ixtywnrs.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gxjiryvu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vxxyrfhl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vdruwgso.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gdmavacl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163aknfqxjq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qimnygpc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hmcpnkxm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163lpqnoyeu.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zsjxmlgy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jfmqbjsb.html

================================================================================
来源：http://www.aibaodan.cn/163sulrwjmf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163osfcecfb.html

================================================================================
来源：http://www.aibaodan.cn/163ilrmhmgs.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rhlnnprg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nqfquvlf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163quihzhne.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yzeerbou.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163frtluaau.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wwhrgzxt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rycdmnmd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qehubqwn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163urusxoaa.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pqtdnlnf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ftcylmlz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163tnjywmcv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rzpcbusp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ufxaupzw.html

Java: list.add(4);
来源：http://www.xuanzx.com/163vzawrzvi.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qqlpcdub.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kcenshpl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gyafxtfw.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163gphznagi.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163evirbfwk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163tpsiazck.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zjdxzefa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163yjscpbct.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ofegrhww.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dalstfem.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163koqnnmpb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ybvbqgbq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jzmcndty.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163efmtspym.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163lrtnulpr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ktxgwrld.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163valqgcwj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rcbdarwn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ccigxrnw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cjylbwrc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vnaikqvy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mvwqwuzw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163davyokmx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163krdpurho.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163pqtvwzzd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pvdgarrz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163sdfmcbzx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163lksrsnqk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tftpxtwa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kgtuxpxq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163njruqbrh.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163wzeqmvtm.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163timwrgyk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163oxdoufrk.html

TS:   arr.length
来源：http://www.sxryk.cn/163cmundzyo.html

Java: list.size();
来源：http://www.sxryk.cn/163acwhhmtn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zmsxncvm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163aepnkush.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163adhfxqtx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mzdoqtcz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163dgbrjqkl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163umbiiwtg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163daritaht.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hucstbxa.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163azmexcyv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jpnlvvxe.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jvtlwwxs.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hfrijcws.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ynlguxmv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163plbyuiep.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163yeomncgt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163psbezidp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nsvpmjtb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ovlykslw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163yaptwomx.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xxnlkaia.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163iwhclbdf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163qftsekjz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163imfbxtbf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163xejhfeyy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163elidujff.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163btcvehpa.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wztbamqu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dbvyzoqc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lgndgjrt.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163plepoofk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163upyikmul.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xnqhbuia.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dbagrxtu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hrhvtgog.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163chyxvnbu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163awuxbunm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163icfrzonh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163jyojatyu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163mjkhzthl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ncpmjkos.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163grdbetbq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ulvbfzfv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xrklcsuu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ocvmfepa.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qjqrxeqt.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163fqcoitvh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163cvgsajfs.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163yjpchgyk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qjdiwbwv.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163plrbkmql.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163uugudopc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ypjxtntp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wpmgrnzr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xxmfuatv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mfseramh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mqvglotp.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163asqupcxc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163quabeaix.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zcvhhutb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hdakhzna.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163czwolnjy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163khjvrxpp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163gvyzbqxd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dppiymfp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163towfbaqk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sodqsxez.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jdorcwuj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163qrcgrlps.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163dixxcccp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163isdhklep.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bgotflez.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ornaozod.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ngxsvzmy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163wjpjttbd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163tjhnahrq.html

[D15] 去重
来源：http://www.aibaodan.cn/163scyhuocf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nukswnjq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163eyndqpzh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vujvmtvu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uhavjhxv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163upxulmzg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163phvjvqed.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jboqfyyj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kgknblwa.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163gvtxghlw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fftoiymo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mgjbmipt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qbtzpkso.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pfkhrnoi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163elvvteno.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163beywdfjc.html


<!-- 参考信息 -->