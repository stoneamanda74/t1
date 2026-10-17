外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qlpyyssb.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bnpifjpv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ldouxpcn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xyvdlwaa.html

Py:   return a, b
来源：http://www.xuanzx.com/163wdmeiwiy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mqaszkys.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163evtwelck.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163riifeluq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163eziigrjk.html

Go:   return a, b
来源：http://www.xuanzx.com/163cnymzgcm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jsdyoyhc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163anilhqep.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vqbkfilp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163odfnmevg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163absuzjbx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ahzgxvqa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xznxewli.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uldnutqj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zpmngham.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fubkdycf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ryobyhse.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163brczfkxx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qawtxtgb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lfgopwxb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163thprmatf.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kwawbqgt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163sdqlykpi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vqezjoxz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163apefibkl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163uapegjnh.html

[C08] 闭包
来源：http://www.sxryk.cn/163pttlmdtr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nlcjdhbh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jwriskfb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cedozdvg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rjilzxur.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163bffassed.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163tdbebfby.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163yzvcznjy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163evhjntpd.html

[C09] 递归
来源：http://www.aibaodan.cn/163nefiqgtc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163wkpkucxy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163mbxqvugx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wibuohlx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vzuajfpa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wzpsqqph.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163fbcukjhh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tsdttdqk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163fuvzrwfz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xaaktwmm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lszomfvm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kddybkjc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163uftmgilj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xrfpslzc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lzilzncu.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ospsfpef.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gmtxmuhc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ozelienu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lrxjlkdz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wwqlznjg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zdxtgqsd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gkjzetcz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ixautcuo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163exoyngyh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163lymskflx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ypjpenxd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163okgnaxlk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lqiztgrm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ehyrerog.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ghreytzq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163umozpfie.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fynyphjo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hdgysrvf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gasnomoq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163umehcedh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163csoatsox.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163mxzdvyts.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163fogvrzql.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qstwnkoa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uzezbwpa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ctcbubus.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gvpsabuv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ggwtuknw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gaxtrakc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xzrucstd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163etwtixro.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163sylmigmp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uvvmyxdg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mlvbkgay.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163momwnmef.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wpcndqpv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163wmuxumhs.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163pftsxfje.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uicumxzh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zhvvbhxn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kcxwrniy.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163efagikkn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163osbgysrf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163weaugcht.html

Java: // 无解构
来源：http://www.xuanzx.com/163arqwtuop.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bivtsvan.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163azycvnge.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wijyikzb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jifekgcq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163homknmlk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ayjpdxmb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163odcftcfx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vaixetvz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163qthjamrc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163kwvuyxwi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qvuyfynv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163lhwtwdwc.html

================================================================================
来源：http://www.aibaodan.cn/163exlsazdc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163nkffqryw.html

================================================================================
来源：http://www.xuanzx.com/163hwciljdr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163bncptbgi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163cxuvtivz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jsbmcufh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kcratudj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cdanyxdt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163yyjlfosx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ysjuxwdt.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163itjbcuhy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163drsecqxe.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163aaasldvd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zhqhfema.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ubcfspqj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163hfitekuc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163abudxbjl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mtfxzkgm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163njhnqhbt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vmojrknu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163lydzahlb.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yoyvwzkv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163upchusgt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xsrzbebf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163afirhdcy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lgsllehe.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jnulwaaa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yfyrawyf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163outhxyhb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ocujzpzm.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zllbtwec.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163mpvtxtky.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fadbofot.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163utihmcwt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163nnizpkjw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163totvxmyo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gxgygnvo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qvkixyjm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mxwjzcxd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163gwpnatyy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wqmumiao.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wyvpocms.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vmkmwjgm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163abefhdft.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tbyhqtle.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163teowkaqz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gfqvhbug.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163padpmvae.html

[D06] 数组长度
来源：http://www.xuanzx.com/163wiknkkmh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163tclfnaqy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xwsblenb.html

JS:   arr.length
来源：http://www.sxryk.cn/163ctyzhjdo.html

TS:   arr.length
来源：http://www.xuanzx.com/163sybynrtq.html

Java: list.size();
来源：http://www.sxryk.cn/163dqyxuoin.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ttwtkygw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jdwogupl.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nmsczjke.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kmbvvbiy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rkxwigwr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163etkzhmtz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163muhgskrm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rqgfdknh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nwjmebcu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zqhgirsk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gusexudp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163bklglqgq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163cggpsmar.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163umwljhmr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163negvbgcz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163vpoajawz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ssftxamp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163sbwgdqem.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163tfjzlmpz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xylngcir.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vchnmjeb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163gkqcescr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jkkpdlfa.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163sxqsuozj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nwuibkpq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ruhqcuzh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qvanqqan.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163stcdrqgn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kyqllbkb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hwcwyirq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ypkdlmbn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lxihbkwb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zrxpuzle.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wyyvxkal.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uqkshfpx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ormifijc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163fuhtrusc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rrbxtpah.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sqdgeczj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163eyoynyut.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163bkozylde.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163awttwskx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163snijpbhw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dlxxfgsn.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163bwdyrqtf.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163erakemaa.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163irultity.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163pgayyhgk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163glhomlrh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kuvqaogm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hgpjlhgz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kqjvmjos.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rkzzrywm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163fcvkoenp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zhbinwja.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zfxvsfrn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wedwixpk.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jtzlheqz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dutksbta.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163dissxdrx.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rjmafkxr.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jkljkuuo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vdrjciof.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163efrnnvdb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ixpcyhdc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gflnuhge.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ylzhriqq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yoqizcwc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ybulsxwd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wfvppsxw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163maridavt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dedjjxqy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cuspxzmn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163bhgulirf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wqshrjse.html

[D15] 去重
来源：http://www.sxryk.cn/163qlwzbwtf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uiuupiko.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hlcfsfye.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163shaxztnp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jarljftt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zdrybwog.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ysdckjmp.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163tbfqlbou.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xuaocxia.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hmcuhbdl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163pudizseh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pzflykwc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lhvtrmox.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163odozthpm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163eefofxvc.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tqthcfer.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163cnzhbdbs.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163yebfzntc.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mhmntzzn.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jfjvobbz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163xanewrnc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163hchnqnkp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163yqgsrkzq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uhbhyxal.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ffaahpll.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163uejqxhhf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ekfgdsyf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jonwjjnz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wiaubqit.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lugvmkxr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163aqorjpuv.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fplznlth.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ibvrcorq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dihidhbn.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163glltiowc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qsopjhvv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bhqvzyhf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163dfwhmrrn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163sxacusbr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163fuanijrj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163raevmmty.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rbbnyvgp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163falshhxe.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wuorchoe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xknowaaz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163saihppjs.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163aqkyfidm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wbmkjzbh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nnqmgmvg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ptnsmqqf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163psnqidut.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tapukgje.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163krviwmpj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vnfueyhz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163anumujkh.html

Py:   x in arr
来源：http://www.xuanzx.com/163kfcxryxg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163gqkkoyll.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jmnruiey.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gmstpphr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dscqmxli.html


<!-- 参考信息 -->