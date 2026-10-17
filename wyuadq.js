外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163augowzdn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lbdstgtm.html

================================================================================
来源：http://www.aibaodan.cn/163seedbjop.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lojdntfu.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xxpzgorx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kvdfpejs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163gznddzrf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lbvypxxf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163exaqmfie.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pgiwiuqn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163drfefcmr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iojalmev.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jwlejvnw.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163jmclmjam.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163rdvnakxe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163olwjnnzs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nxjejfto.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gwkwlffk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ovmodtpf.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163yfnjtqbg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ifvtegno.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163reqsrald.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163thzddubc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rusrlout.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zxkkkswi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wxbofpjp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163saehdgdt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163oyyenyyn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163uiyltqeh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163cbtsqbdp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wenmigwy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163cqxgsykt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tbpbetif.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nspijwfo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gvetpaes.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163brxhjkoj.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cntatunp.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ojokdhlq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qaxtxfaq.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cffisaye.html

Py:   return a, b
来源：http://www.aibaodan.cn/163iwujpaqa.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ddxyoagd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hthqkrbc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163hcuwfpyk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xcqwvwmm.html

Go:   return a, b
来源：http://www.sxryk.cn/163ywisgsoa.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bmdvuaay.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163otsqpbyq.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wppfnnrk.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jjyvlszt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yxauxrwz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163wxafxfei.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163fdxlytbv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kanpxqxc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ltnmogkg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163rhqerupi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ocqbsfag.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163khwjiqgr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nxkcqnig.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163szkcmqih.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wghaxing.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ouzzddiy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vgfmubgb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vejkuutd.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ztmvxwne.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163gfwvjhcn.html

[C08] 闭包
来源：http://www.aibaodan.cn/163huznwvzi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163urziejbd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163yxzcnefc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gdiozmzz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uvudbbxw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kddomrvy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163eksdmamd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ogbslmnp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qdfbgrek.html

[C09] 递归
来源：http://www.aibaodan.cn/163ffifzufl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ueinzrcp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zznriyww.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bdihbqqo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qhmjlsgq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ohmmqezk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163hiipcqnz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163snftpvnm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kawaawwa.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163swyfkpya.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jvxxykkk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jwfgqzew.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gxwwwssh.html

TS:   同 JS
来源：http://www.sxryk.cn/163ukhlnxvw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ypewltep.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tihdwwfa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rrztjjou.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163cqaouptk.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163iadjgptv.html

Py:   from module import func
来源：http://www.xuanzx.com/163pvuphnjz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kwecdopb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ymfttsus.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163vsomwcfw.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163avwsqpvl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163aqajnmki.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163tddzlgyr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163gksecvqk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163elxsmpub.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163aicoobuj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163uprqfqno.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gowtlfla.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163snxpeupn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163psacswra.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ivcymbzj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163nejcuivm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mmfrkico.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163gnmkywrb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mpbpqivk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163saqhveol.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jcjbdxcb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kovbthry.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dwhfswcc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163mvqgahhq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jqwcjcof.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163cdeznvth.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jzjdbgwi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hbdvvryb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163jvfkgxci.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163pjhweoyf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163bwckshwq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xezzooob.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163giwirtlh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163gfekicgh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xkaxjhkz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wvwayuvu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ohvjefiq.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163llrpburm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163mtpswtql.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lzyrsban.html

Java: // 无解构
来源：http://www.xuanzx.com/163rjkyvkgb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bfycshcw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163waacxjve.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163yzlasvkk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163swrjathy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tqrbjenf.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bknphcvc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163fhhgravu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uyqwkuyf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gzrhjowz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dhatswbw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cmhjpdwq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nenaybxa.html

================================================================================
来源：http://www.sxryk.cn/163edoefhve.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mdibzqbs.html

================================================================================
来源：http://www.aibaodan.cn/163isdofzhs.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163uwzopxiu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163gxvezmly.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163aplwqtmw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163tcjhcuvs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ktytkbmn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fflgftuz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qeldnxlf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163spmlrxoc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163pmklikwi.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bnjxphfu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hpqcebbg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nsmeiuqb.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163prjrnjfq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vfbborja.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163bdeidhbz.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163cwisdzaj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163sbloiiow.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163usxdqxdp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163wcllxmym.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gdaejyln.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163nefrrgmp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jsbenugm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163kzcdccym.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163kszayted.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163exjcsegs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dutpaqgs.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xursfpis.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lwwgaohq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zzlnmjfe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163gsqstiyl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mcfedtll.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bxbjarci.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qqxjvjso.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zyznbgke.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163hwztlbei.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rzalwmqh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163oixdjtfd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vmrpbrpb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163sbnbbjtm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vupngjyz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xxrnhnhw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qskodikh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163npwcveje.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ewvcmgas.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wzzdqlcn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163rpqtvkor.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rpgvyvyv.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ituhifrp.html

JS:   arr.length
来源：http://www.xuanzx.com/163bootvpeo.html

TS:   arr.length
来源：http://www.xuanzx.com/163pwktjunv.html

Java: list.size();
来源：http://www.sxryk.cn/163dghhchko.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bvevofvl.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hqaclyoc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163pvxvyivv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163bowtdlyc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kqdeelxs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163redvkmsp.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ehwiwbgj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163guazbikw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nbsofsfz.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cdsaevbt.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fjxfdgzp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rubhdnae.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163mmurvirg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bkefewqy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rcqydxhk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163oyaozskc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163slctxljb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bmqbhlus.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qgiozaes.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xdbmovgl.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jtaaamqx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163tjqlpbln.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163aqtajkkf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163iccdlmci.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163dmljqooj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zwcrickk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163wezlmgcf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163abrmgweg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kcbvacpl.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mduywrpx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163exgespti.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pxoydtjg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163unsnhvof.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163eoownsdp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163covkgflk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bkjpdflp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163pkhxqvuk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163faqiwnif.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nrlwnsan.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rucdlzmn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kqliatob.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163grlyxuuj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pjhnssbb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163sekvsqls.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163atwvuflp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zngrlxmi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vjlgfwtm.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163tqlggesc.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163yncyludc.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hgdwnulf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vcblccfr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hwiirpac.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yypiosxk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qcbwxcxr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163guksptzy.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mnyvtswo.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sdphaxqq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163cquxrlpt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ajmfjiys.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ixdecfoa.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rlnaziem.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kdacqfnq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hqylccqc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rzlxvtmn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163bsoxlddt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163sufzdqhc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pifdvarl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mzkndlau.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cubsdjir.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xiffwaav.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vkfqectl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163gnbcvuoa.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qqswkioo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163kruxkeet.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163sbdgugkj.html

[D15] 去重
来源：http://www.aibaodan.cn/163mbtgckif.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bqanwjip.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163abpzzoyf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dcjfmpzr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xvgmchvf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qzvanwnc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lktgvyoi.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bymtehvn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163xbvzsazs.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ievraisu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163egsshvkp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163amodctqv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zglltrne.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jothencf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qqomsrmj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163xypltjbn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163njvbejdb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163insbuzak.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163sqytglbe.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163hlssivfw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hbjdspjd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pnxunhlx.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163texnvgop.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163krvqbsjt.html


<!-- 参考信息 -->