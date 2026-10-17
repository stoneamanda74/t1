外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fpcrwmrj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yrkjrhdv.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ehjbbyqk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zvxbtlar.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rrkhlvyd.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ylqrzjyf.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qyaeqlhc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163watnvrot.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tmjpgtfn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163njriyume.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163giuyktgb.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bfgudnav.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163xyceyusj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vhkzzltv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ucxobcch.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163uqglmhob.html

================================================================================
来源：http://www.xuanzx.com/163rqfivemm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163fcgkxkhd.html

================================================================================
来源：http://www.xuanzx.com/163lqksbbye.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lzxtlade.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163idpdsnyu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163igtmdzac.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163dsbxoazr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163citnfkzi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ypwmwfqq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163lcmemvbg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ckotejaz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uwjixrtp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163czoevzfd.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dhtmhltr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163adxdmcmj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163prrsvyuy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rifusecz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zkyeklrd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jvkndirn.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163sxxdjvht.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dqkfxzfw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uypcvqzq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163nuzhdqhc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vjmeshas.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ccwniqco.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zvmkgoew.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ksczeybm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ieegmfno.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163npgqbhuk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xdbmhrxw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dqcubnix.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ssetqasv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163oiwagiqn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hafukjqp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163cfhkxcec.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kbgvqrkr.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163whpyemts.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ikjhpcyg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tyqtinsk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163jabupcru.html

Py:   return a, b
来源：http://www.sxryk.cn/163sdeeicrt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163eislakir.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163biuakyvg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vecyvilk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xmzfdjgh.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zbkspjjm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hzwusalb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xfzqobvj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163edvekyqy.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jnxzliwa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ylottimr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163iqqguele.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kfovpiyl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yjfoxirc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163dsdqlora.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163gtebpyzm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dnouupwz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ezfdzihf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163whvghhck.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163slemutom.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jochclwx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163xcstieyq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163tbcxzbbk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163oqnmfzjl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wnmvjmte.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dwkgbacu.html

[C08] 闭包
来源：http://www.sxryk.cn/163ezsyjgmp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163eytspmpz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tcdfiiqr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xxecfxug.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tgxqxdrh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wshdbyfr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163fdgpiyxj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nfhsleln.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cskljdsx.html

[C09] 递归
来源：http://www.sxryk.cn/163dgxowens.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cetexsel.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qgwawflc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ypshhlnh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qqdukrxx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lfkpgykg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163scxbhsox.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163yboozsov.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kttoelef.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tzpnnbky.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163strnydjj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163damqkxpa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163enrceesj.html

TS:   同 JS
来源：http://www.xuanzx.com/163fytsrsbu.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hettedxc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163uzgalcpw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163onufyixt.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163xupdohaz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jydhzhry.html

Py:   from module import func
来源：http://www.xuanzx.com/163eamusjwv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zsfnlmxh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zxmzhoss.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vhhuxamp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163uhwfqqxv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ycgecqok.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163uhuenyoy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ojjbeaky.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pevmgpjr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dxlazafs.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rgegueea.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tgjlzerp.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163capmkfcd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jyawzprp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wwqvdhte.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ojjezvoj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nblqobrg.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cscjuqyc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163wzidwslj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ayiojrsx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lznsksig.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cshukpsp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zgrdrgpx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mxjlsyxk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jppnoxvk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163cpjophnb.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wdnhuapy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uxdykuls.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163sgvcycdr.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ggfyvtku.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cumzxtfx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163eohfknnv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163unslhthl.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163kvedetps.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163jjjcfdfj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163pqwrshmv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kgxturbx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zwdwznze.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bepqknyt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vfofemly.html

Java: // 无解构
来源：http://www.xuanzx.com/163glnagrxb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ayirtujh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163uwwkfnff.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163fmgjivgl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bxfehuog.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tbkaojyv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163seoagqiv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163iubegkzy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163doydleib.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163dmedpote.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fdjdgwfp.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ehbczdpy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ihvneyzg.html

================================================================================
来源：http://www.sxryk.cn/163sqadfjkw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163kvlwzvbb.html

================================================================================
来源：http://www.aibaodan.cn/163utcibmkb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fojmvjom.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kuboywpt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kwjsuggm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kcuxmyzb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vgojzhtw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163jdqosfye.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163aodfjugm.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163cuomymgz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xqnwxape.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163npoujqif.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163qrkykaby.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163eutjdjwx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rtxrvhxs.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163jlyzfvor.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kbssbifj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163yahvrumb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ajheuqxp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yogcnrkq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163urndlmeq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mulaqujb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163wwwqxrqn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rldayynr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163yvrhtdsi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ilhjdjca.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163twpkeugo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dobwfxjf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163wghyhdpp.html

[D04] 删除元素
来源：http://www.xuanzx.com/163knvhglke.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wexhilir.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163zkrayola.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163rzkqaucj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163juafeydu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ausjxwrt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xsxjbqbk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163pxlmqehl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163yymeepni.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vecylxgm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jsnfhdql.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163fipbwgrh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vjcvahwh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pzgzmtkp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163dslimplr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163udeasmei.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bbnzjxtu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163fzxkqrio.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qeshaboi.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ddmojjhr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kaibtnrs.html

JS:   arr.length
来源：http://www.sxryk.cn/163irxhcyvs.html

TS:   arr.length
来源：http://www.xuanzx.com/163vqsawguw.html

Java: list.size();
来源：http://www.sxryk.cn/163eaydekke.html

Go:   len(arr)
来源：http://www.xuanzx.com/163yvfminbw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hrouemxl.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ucezhixf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163uszaspzz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163whfatzjv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rfelnhwe.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lnhoknjb.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ynmlhdng.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163aekqlsmy.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nkuoilgy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jkxfqmvp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163uiznwfaq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qikqkhvz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hnpdcfcj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163eymrcjxw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163chxjivbw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hyctmggs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163iveeortg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163iovdzepq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163falkvzwu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163auptphck.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cnfmlzfi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xdpnnfqg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xmkcaynf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vvkqcxpn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163mpairyif.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ubfnxyjj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rjnkolpe.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mscgkxpv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163gkwxcdxj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ismbvvgx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mzafxqph.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lmyzwepb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rwwdsbzo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ywmxxfnv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xhoohvki.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163tyzkzpft.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163nynujlyl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ivnmymjj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bqjigkeu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vmyjivuu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163kwwwgdhg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163uytzxqtr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nziiqdiv.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163suwxauir.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163uymaycdf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163klijjjrm.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vyodxezc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tzfziylx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mymstxjj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vnqrfnqe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ujymodqh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sombgrit.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bogtptxd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fqdwlqru.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163lgytfpvz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jzghiytg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cmvqvmbw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jgqanzjv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163lfpnsooh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mwgmeioi.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rxmwhypi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163nccpveig.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163zpxwqdli.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163eeqpxlrc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163dkfzzqby.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mhwecvdl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163raloinis.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163duuounto.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163riotwjmk.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fdlgmnjd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163pgabpbbn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163febvjosi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zsqmfcli.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163aoetmywh.html

[D15] 去重
来源：http://www.xuanzx.com/163cxlivqoa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wxcxpsfw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qynnbwzh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163trdgkqsa.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bkqdkpbk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163valwkqef.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163dygwehlk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jukagjra.html


<!-- 参考信息 -->