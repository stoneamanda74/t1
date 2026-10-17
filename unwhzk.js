外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rrgasuhp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163eoyeeuwd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cwxayspe.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163joyksfgo.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wrrtqdzs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163lpotdvmo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163exqyjbvh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163reznokoa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163lhjrhkha.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vnxqmfbs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xtvjfeug.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vtgpympn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163iyogweae.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zzlurywo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163spzopylw.html

[C09] 递归
来源：http://www.aibaodan.cn/163blsjhrgh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xmzacgdr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163sejhtbia.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jtqwaphg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mrmxafpl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163yoxmgyxc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nbdwkfbu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lwtzbijg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ktopkltg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163trmgqkpd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163luuqqvtr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hopklggs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hjdqbtsw.html

TS:   同 JS
来源：http://www.sxryk.cn/163fauehwui.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163tzotjxhp.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ledkfzjc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163edqhkbsb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fyjukwfq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163twuntfso.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dsamyqey.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163amksgpav.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lwlxwlqo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gyhxjqjx.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wrjnbfpt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ytrkyzca.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pctutlsd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yqhwjxbc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rjmkuanr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kiywcikr.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qhyoqtoc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yhgcnxuy.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163mnveispd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fcewfxax.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163obyhzjvs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163iflxxuot.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lzjwlnyn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tiplwrbu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wuqmsybu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zicwufnp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xmqtcklv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mzkgsbwl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163plqxlvih.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ohscstya.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bzumgvby.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163uxjxtxwm.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163gfuexgas.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rgqusbjy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jsrrqtjm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163hsnjgldp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nalufqeg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163yspstlqn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163prdubipw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mihwdwgn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163cjomoeix.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qnvudsox.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163uafphcep.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163agvepdmr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dofbdwul.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gvjyfjyp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163spwnzjkg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163yfoabsnx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hfxtmjhh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163scimsmwh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163infpxgla.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163iyjhpecv.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163sgrxlugr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bdptxguu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163zfoniget.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ffhhumak.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kyzibqzn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163lyyinzgv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163avwixacz.html

================================================================================
来源：http://www.sxryk.cn/163nrtleydd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163fbdhrfmr.html

================================================================================
来源：http://www.aibaodan.cn/163jgmyrcrp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gryyancb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rrebslbu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uuxuhuse.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rgvfelcc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ygcisamk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ylxymudi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ozopsgjq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163njdyhknc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ayyiguiu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qqzuetby.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pskgajcr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vbczpvfs.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hpyvjxuh.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163texnwpeh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bgweepjj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163rfhlsryy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163tdyiouox.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mquftnla.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dlhdgdbu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ypeljvcu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163qhyxcfty.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nvexyxtz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pndctjdw.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ldzmbfvl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163akelvido.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163tzhkjqrq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xbbcsdmd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vjdviiky.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163djynflpu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zsuaadue.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163wsqcfbyq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rvvoytgt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wgcldbai.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163uukpwfgp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fdymfihb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pgjftcqp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163csmckgli.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ldolrffr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163btboskwn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163amswpbkq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ewxxadmm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163nyldpago.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163tpanlfbk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163oypmkqmg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163dcptojnn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163rvfbwert.html

Py:   len(arr)
来源：http://www.sxryk.cn/163zgfmhyls.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qzzufupr.html

JS:   arr.length
来源：http://www.aibaodan.cn/163euhsyrvv.html

TS:   arr.length
来源：http://www.xuanzx.com/163yozbkitb.html

Java: list.size();
来源：http://www.sxryk.cn/163hjhmmfrg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163hhmbcutk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vugodorm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163dldlqhbm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163uxusqvcv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163irblwqek.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163egguddcw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ygrhthqo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yvswqwap.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163uvbillfo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ofglkfxy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163heubpybj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163shangvck.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nuxjtumv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ueihkctp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qqcmxrdz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xkioejgw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ccbzqtkp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lkwwlmdg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rvhbnyvm.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gxrmhawu.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ranzkvhf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zghpevjr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kokyltxe.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163lzhefopd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163pcyxobrm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ibpijsfw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gnqhjwbv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vyznhrrh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hmxgsvge.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bvdsbjsf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163erlzhgfr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mgdhmkro.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gbkmgrpi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qgjxizru.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zbnreokg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bapngniy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gxhlnjvq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163xkkhcjaj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qgylugfh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rcuekxgg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163acfdbtmg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hxtsygub.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vehludnj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nfsrwqbs.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vinnqeid.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163txfyjsuy.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163hkbvcjej.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ayvdpmzl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wrmxiwbq.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163impirjpl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rjvrvcxe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ssvqcdky.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vqqtjkho.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jwfmdtgh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sljrxocz.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mhmdwumt.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tbgvnkyx.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hustupbj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163pbevuuuf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pjjyenpe.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ueozbsym.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bdgzxiww.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163nkoacstf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xwwjqepf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vnruibsz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ifoimtsi.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163idxgjdsi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zelubudy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163tkhwntuk.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wlwcwfde.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dugnlsce.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xezinijj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qbbljchb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pvodiuiq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ergfceno.html

[D15] 去重
来源：http://www.aibaodan.cn/163wmegxtkp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cyqizgpt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vwdwkrdi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qltxbidn.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dvtcmxlj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pkawzmbv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uebripbg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yvutrujr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qwigdzmd.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163kguiommb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fqdpbjag.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bgmjowuw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wbfpkhmw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ppzfaglr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163mixihqjs.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163uodrnwmo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pphibbjm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ooznqtyt.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163dlctoaqp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bkyubesc.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ddekchlm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163otsoozqt.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163oozbkvto.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mwkzfrba.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163zfqxrank.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163kortkeai.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163poscwfum.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ckwfztyq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kdimoiot.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163liwjufhl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163vqcihhwz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wvphemss.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ukzaronr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163udoavoae.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163bdfsysot.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163aohiorgm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cjobjkxn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vnciycxv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163puycfabv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zcxlytun.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163htchzfje.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zxfiprdd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tbgmwqea.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qpaokyqt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163cvqovlls.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xakwxipx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zbemyggj.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ppxaessg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ibwiikys.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jnrvdbzn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ojcvixrv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vruynwqs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163cnsqsovo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163dxpetzdt.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163thtqegla.html

Py:   x in arr
来源：http://www.sxryk.cn/163dmixopxt.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163elaxszyv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zvtxcdsj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163viunbhkn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ismyserh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163tpryszaq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tdayslyp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163trxdqicr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ljhtndjh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163uvamgqll.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163bywahvhj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163akkygjzv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ikdxsior.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ybbzkfxw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ltlibhqr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gsouvtil.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163foajdnln.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xzjjzarq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wexqcpmg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163awznvbse.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mluqptiv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163icrrljdw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163sgqxqdes.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fqguywox.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ujhqwxda.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163gvlrvsri.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xhmvaugn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wkneilsj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wmcbvvjb.html


<!-- 参考信息 -->