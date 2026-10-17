外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nvsfhayh.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cptvwojm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ylzbodxa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163divhcynq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kbvsuneo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163oqllriqn.html

[C08] 闭包
来源：http://www.xuanzx.com/163ufqvuodv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vmhjwpyy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zkcyhzhc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vogqqnst.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gsgegtgm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ryrsnakn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163awbkffpl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hydaddss.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163donndsif.html

[C09] 递归
来源：http://www.xuanzx.com/163jlhpmtfm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ljkcodxe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163cnbexqfb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163datwyuuh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bnfbarva.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163kmwjvjmf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ztwfbeee.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ongtirgy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163dimhyibz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163pxxqrqxz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163avxhcwwx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163zpxuexcx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163hazwkiur.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vhlnvbsn.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nelsdadl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ahkkanzk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163etmdhjcg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fzleqkzu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qwmytyzi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dfrldtwp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163vqtmnktn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163skikpwtv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xvknvsmv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163nwtuxqcg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163gvnduiat.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nrsytyuj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mkhnbkcm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jxkkptes.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ydiakqwh.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wzcwyhnl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163oqptbloz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cecirnqb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163evrygkqu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yupqleym.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kcqsengh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cdxnbyrl.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163iuzotjvi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pzhizjll.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pxiejrwq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dhvmfiam.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163obsyqinl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ztlytoba.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163aykovylt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163anhfkxdh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163gtjdadqf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163fmxosysw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fusbuysg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nhyvmluy.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kotrdyks.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163boodxwkh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163tuskspkf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163uhsibtxv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163gwmghyor.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vtyqyuqb.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cugcazul.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163lqwdbvhx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163qgsqruxm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163audptjqb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163urwtsnsr.html

Java: // 无解构
来源：http://www.xuanzx.com/163emsrgxzs.html

Go:   // 无解构
来源：http://www.xuanzx.com/163spnutlbo.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163idedjwpq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163oblcjdsf.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xzbewknp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mpgvkojm.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163takpwfxi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xjaobaeq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163burtlhck.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yhtalbnf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hvimdwfn.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dgbxehbc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163kpyqoghc.html

================================================================================
来源：http://www.aibaodan.cn/163shgasnxq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163pxletzrt.html

================================================================================
来源：http://www.aibaodan.cn/163tnccooxx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163yoxypdwa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163khefgkbi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163gottiirw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163eizblpmi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163aurpeybb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vcbdarjv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163gylmmetx.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163xwddgjto.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jchmfiph.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pzsowfza.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cwqtnlhd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163leuexzzw.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163hlaoinyq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xmbirxqu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163buqsxhvb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163diseazzo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163eiagfxru.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hbbtliza.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163wdxndizx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ikdaoklb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163uzgpnnzi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163iolfihtr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163obhuqzvo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163uxrxollk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kwthiixm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gihrqqrf.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163soljqlhg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jbegwyzb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163tdydxfar.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163jtvssyjr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163laulmtau.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gcnylxio.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bgknveiy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vguvruqm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163letbjtmw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mbkqdaoh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zktfdjzh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fkinjmzt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xmoxcxti.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163zcfpmkrw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jjslrqvn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163inwluhwv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163spelwael.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lqbozdtj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jdkochxj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163sdtakucq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163fnjbppfs.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zzzmqmqu.html

JS:   arr.length
来源：http://www.xuanzx.com/163edmlxkbd.html

TS:   arr.length
来源：http://www.sxryk.cn/163bjuenumz.html

Java: list.size();
来源：http://www.xuanzx.com/163mnjcdzcl.html

Go:   len(arr)
来源：http://www.xuanzx.com/163btkinvfe.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163franfjmb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ygpkufwl.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163muyekucq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ftefsyce.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163apumziet.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cnoxcvqy.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lptmwknh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163pyjfejeg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163iwqkeysb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163qrjxirxc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163khuvxfck.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163axqsepmd.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hwbpnfid.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163tqzdrtsk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163tlkxkhxn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qdlwlmtv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wqmoscfl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163flskheuv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dhmdzhkt.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163uawksrda.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ehxdquta.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yrmxjccq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vnhjlvhd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163dosfervq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tuiijqat.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vjxfcens.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163aakiczrq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zxnkaeah.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163loorjkak.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kmwhwcfu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163lxrupuxk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qynrocdl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jpbcmfoo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sxgweluy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163rdisivrn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cgucucov.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mtbltexg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xwnzmvve.html

[D11] 反转数组
来源：http://www.sxryk.cn/163eunrsopa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xcxdzwqt.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163odeziako.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kbfndbah.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163djukxxkm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163izpdlajo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rwzwmkxl.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163etxhrdpi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zkabswrk.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163eetsfmmi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163zeqgpdrr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163baczmpjv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cyudjgmt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163augscebf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xobdmzwo.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kqerqiib.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163faxaprwc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163qtksnyuv.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hylqybwk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163itrrasae.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ojxkcbax.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yefjgrsz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ruwgnfor.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lizfjowf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ticiozcz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ebzomtop.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163cykxfhcn.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kqvwgebt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hvqvmtpk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163tcjojhro.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bkastqlc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163njyreznm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163iknxjked.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sbsasswl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fusbhase.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qhvdrtof.html

[D15] 去重
来源：http://www.aibaodan.cn/163wencppjh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163luepavob.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163nmlgzoal.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163iuhoitjs.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163esyidnmz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nuykkdvs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mgywykhf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xltvvkwf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163lzduvyqm.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xglpqezk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163veyzdqsg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163peqkrfvk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163anxjlbcr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163anrzwavl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kjjoqpah.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163svixpudv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163exrwkosg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163esrocpny.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163cdiczjil.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163bixctpyf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mfzfgyvu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163yysyzafd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163huzdnhng.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qcpehzsn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yfiyraws.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xprvtfap.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163sssralkj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ercafltz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163knmridpm.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qfggjlsf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163fdwjjvam.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zgpkppuw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mwjqemhh.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xgquluin.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lxzxprrz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163altzqdky.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163gojmhnhy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mtuzbmjp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fvbcttqx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163uzxjypxw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bghaspzc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hpatzqcj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rskqopel.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jpvjaprg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qhlbparh.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zxaiqefy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163pvplopix.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163euskysun.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163psiubsie.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wpyjyegc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163blieqxla.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163isvcrssn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ocmleqxy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rfxihdzl.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163blnxjwkr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jvspqeha.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ssvuyxbb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163zoduvlvt.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ruwkvugb.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163gtceblig.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xdigpiig.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163iutnxumd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163sagocslf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nnpikdln.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hdoufydh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163deeixicd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vfvmbviv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wemnfmhi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163fcmskbge.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rxqbesqb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rvvaylql.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wsfvlobl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163fpioztcw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xfrdowfm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163mymggine.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lskxfgzj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mokarkir.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kmhivmmk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hmkwemtq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hqlxgzpo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163atoajlgq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vygoxvpo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163pqvwiffm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zczpslnu.html


<!-- 参考信息 -->