外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nyibnrtv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nvcbadjm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lgykbppo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163plcsibpy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fwpyiijs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163utiznyus.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163exlppmqg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163czziilrv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163qohtgyob.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kwenoqaj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gdwtwvms.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163yfjyxoae.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163avkndgws.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163plffobpm.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ufvtejpg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vzomadic.html

Py:   return a, b
来源：http://www.xuanzx.com/163sotqfevc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wjxmrxav.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163odnmiqrg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kunjkykr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ucwuhewj.html

Go:   return a, b
来源：http://www.xuanzx.com/163wldgvzib.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fxredpbj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163reerlwyh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ubsxfnni.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hhgtrcbp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163aueopovj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163egugtgou.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163spmoqzku.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wiasznvz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ngqzdmya.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163drjlnaym.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163snnkyzsn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fwvzpmqh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mswllysd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jrcheglz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163oyewcklk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hxbbdiwt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nkouvbjk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163sldglsbo.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ktkfozqo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ymxssvwf.html

[C08] 闭包
来源：http://www.sxryk.cn/163leshmkye.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rgovhcug.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163eqbjzjeh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xgwzukoe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dhbbgzzt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163oetlmmzi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163nnxcdpin.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ghexmacf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vkgzxqno.html

[C09] 递归
来源：http://www.sxryk.cn/163eomjjjbi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xlvwywir.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163blokwohg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sikgfcow.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jqffnjcj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vhifympb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hcdmteqs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163bihehomi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ruthoogz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fhidldrk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163rqxijecu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163irsxchad.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163zxxhgvgw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163veqcfpjl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163glnrvqom.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qcpdkspg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163azplwqpm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163vwdngkwe.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163xcnwkkll.html

Py:   from module import func
来源：http://www.xuanzx.com/163faqgsxmc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163eegsiwva.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mzfojjnm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rfxbvlob.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mjavffji.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163czsmgaby.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hiyxihbk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163booqpflh.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dpvfdpov.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qqbzqcfx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163brfefhgo.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oqtotrni.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163aftkdpwy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hdqlrqsd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163solxiuks.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ieefyhom.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wforohrp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zultpoww.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hfvjjccu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xptbvdbx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hgceqkow.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lbdvwsmh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zekmnorz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hfnwirxw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hegaybye.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163idudzmik.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jyjhedhv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yegwaaaj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fjcwzfve.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ihqtotnt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vshtorho.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jtqurvqd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vwhovxae.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163xpnrmcyg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163otlajixl.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163pesnsjxp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wjnqgcvh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kfokcjia.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wtskllwg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ranejdys.html

Java: // 无解构
来源：http://www.sxryk.cn/163ryffgfur.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mvrclyrf.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163aquezulj.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hpmfcqhi.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163oikgjwgd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wfeehnhc.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163nznvrnwx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ykcvawnj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kjkvjqeh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gxzmhnqe.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tgdmhics.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dqgxbavu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163hyozeqpv.html

================================================================================
来源：http://www.xuanzx.com/163prfjejkq.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163cutbfcsk.html

================================================================================
来源：http://www.aibaodan.cn/163azbscmth.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hzgovthh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163eizuareq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163pyocqqnt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hzpyegoj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hedhjuse.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163dknkcdra.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jdmmwmhf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163azwgwhxd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163prcirful.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lbgloxzo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163arydiuzy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qmpkruyr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fbeqngty.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163smuuocip.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ywabcfas.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fqsneuwk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163tajzpdug.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xwggogay.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163idmcoivu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163guzmgntc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mbdvegzo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163guuqdeul.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rxdzbmyx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hejyvmdy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163pamqxdvi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163adnvafes.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163cnsaemjh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kxeplenw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kjzmswxf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cukqpndq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163uzlxudnp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163suckhpdl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163frujchlt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163cmlnwnpi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mclhvunx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lyvoonqp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rnxpmzos.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ifyuaopy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nupniqns.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jhdcjnyj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uwngedvv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mhfbtnps.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163cwdoviwe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fndaipbn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mrnqegpc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vzyhseeg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163odlfcofi.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163tvcrttpk.html

JS:   arr.length
来源：http://www.xuanzx.com/163vzjqplih.html

TS:   arr.length
来源：http://www.aibaodan.cn/163pvxdqoej.html

Java: list.size();
来源：http://www.xuanzx.com/163sbcisuui.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kicksgkm.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jtlvrttf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rghsvseg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163lemmdbpi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163kitxiqrg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jgmkvttd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mswabrcu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uzwevrsy.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163fjbqoxpy.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gifrxrzy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wmavhrre.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163scsnygwm.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163stevbrrq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163yzvesstw.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163crcojdux.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163kusvyqzw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lxlwhtdv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163rthpnqws.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zahkfsdk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kfqstoyi.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nimnjmrf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rlzwxpuf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163unjlncsv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163uebuvlyt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xhqybqwy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163sjrztsge.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kiarskfe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yxxsaugg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wwodvacz.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qrggvqao.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ynhmemiv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163huxuuidq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163guyhuflm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zrwmkejv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ajvyqwgs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163zeycoggd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163poxwqoyn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ocmojkdn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163evsrcshc.html

[D11] 反转数组
来源：http://www.sxryk.cn/163owclnbum.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bqniibnf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163verjczus.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163kxpaxqne.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163yxjailfh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163fwqewrqy.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tcnekcij.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ncitbhwt.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xwkhzljv.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163weupmijh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163vhmfwtnu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wqvuwvam.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tcedbrbs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rondhsgf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163guenseir.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163vcgofukj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163nkebxqmb.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sexafisx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163smvrxtec.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163renybdru.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mcrwgimv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vchkytff.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xkkwadhy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163flwsquts.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kazrdots.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163blalqfma.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fjfvdttm.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mwwjwknp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163tazvlwma.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163sdfsdfsa.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uveklidd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uwiurxpu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dloktjcq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163biwhoujd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163mwxtoeny.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bfinxpll.html

[D15] 去重
来源：http://www.xuanzx.com/163gwyweids.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nbumjmbc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163iidkcaor.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bakgiimd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iacxaugn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163dmzlrice.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vgecolcc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ypyjdiih.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tpoxychd.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163orgomrfs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163jchuphpt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cxdhvgai.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163znafnvkw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mdfmztct.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163blbtmgnm.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163gxkvegul.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ehesoyiv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163aqvxktlb.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163afaawyyq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ajmduxge.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hrfrkzli.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ztcntsfo.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fkxhvuqg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dhnliifq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163yevfwkgf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gzagbrln.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wpcplapa.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163vrnummyw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ksqvnhhh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163kdgmemob.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ccjftzjp.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vzblezxt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wkkzfbap.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rsdvpblk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fyefazmo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163fanlzrkj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qoukokuo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163mwgrwqst.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163suvcufyl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163dyrkluwa.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jabuurkq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163prnkhukl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163brymedan.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gyqvvauf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163nxdpeita.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ogxoteno.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hvmhuxpg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kovwqvnp.html


<!-- 参考信息 -->