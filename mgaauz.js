外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163llizdixo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kpdijasi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vesiqugm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163eivqvryd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mrnmbvcf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mlvxvapw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wxozppta.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xzordwnw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xkiqvpxe.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jykxfpwp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163kafpuwng.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163lbwwrhus.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163klbomkgk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163fgeinakn.html

[C08] 闭包
来源：http://www.sxryk.cn/163mqlocssk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163zexequvn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hlznxvty.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ruekofdj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wktfttft.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163aylytatw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yrbelpbl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ucqvzshu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hyarozct.html

[C09] 递归
来源：http://www.sxryk.cn/163yhnlshru.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163opjoaozi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ksvchfpn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tyjxdemf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qmajuqov.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bhwanfwk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dzevjmkn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163muyoibek.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rwqfqxhu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pfbnwwrh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lkhuirru.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vkuoiszf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ckdfklme.html

TS:   同 JS
来源：http://www.xuanzx.com/163yeazuxfq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163sidzalwu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kqeyhhrk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pzbyqasu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qhpzblru.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rpdvhpqs.html

Py:   from module import func
来源：http://www.sxryk.cn/163qruqasif.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163vtidqcfo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qtthxcjg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kkmsujat.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163typvkgxw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rfpxgqsi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xghootfe.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zfqtdgxu.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163friojman.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163uuxvppcn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ohkomczo.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cwrlxqcs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ncdbfaou.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163uvcmohid.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163amplxhit.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ebqgzeyv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gbwibmns.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zhkgxmvu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163oetfnajf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vpsdhlas.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163wrrwxphu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ckykoxym.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sfnybjfu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163pavravdf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163solledpy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xhsiwjvz.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kkmarhzn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163mueregme.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163mmuuadll.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163udpoirtm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ducnlrrf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163kvnlaoiu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cncfdgeu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163holiivuq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gbonvjta.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gsxsyaje.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163hxmkgqpe.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bgfrpjbw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hqscvdmq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ctohvvzl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jzvibtgg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ixhrgkfs.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rsvlsmet.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ibjpinny.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163utjlgjjy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xnwwxnlw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kmszmvic.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nrehoorl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163rgvlwmpq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ehhavzxk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163skhmnfww.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vxyocdud.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163khuxhumw.html

================================================================================
来源：http://www.xuanzx.com/163tltvxuwm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mewbpmur.html

================================================================================
来源：http://www.xuanzx.com/163yiedzpfk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nkbegggu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163msrihxaa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163tptgbeiv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163pxurtlhr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163lzmbvish.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163hufelesp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lcquyopk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163oguhujmc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163klbtscyw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163jjeovyfu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ypsxevay.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hwstwnpi.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163mjvzfcbc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lqshiiwg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hxtnzhbn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ievfpojv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163sxducrre.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gipfkmmi.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kmwjdana.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163omyiuzgt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jpxzsmcv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163oexkqmsv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vtwowrtc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ifjcmbwg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163pelwbbnq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ptspgzrv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163tjmgdokb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ojnzeoks.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163aeymqjhp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bzwfqwqs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163isqsvzwi.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vhaxpabb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163oorfljqv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163imccnzkt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163impwjbno.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163orfrmavs.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nmshtifd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cscnfxda.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163djsbawzh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vwwpiyez.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163paiitadk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163yassflwp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vvfzvnbt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163uonpgyea.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gogtkpyn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wtgfrfyt.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zwehfpvq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zssiyjoq.html

JS:   arr.length
来源：http://www.xuanzx.com/163ffphnlrv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163enquuiqg.html

Java: list.size();
来源：http://www.xuanzx.com/163wyuwepej.html

Go:   len(arr)
来源：http://www.sxryk.cn/163dcmigezc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jmkascjc.html

C#:   list.Count;
来源：http://www.xuanzx.com/163chrtrgyy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163idwcttmn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163vylkfcrf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163lqkjutzg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nkkpgsdf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163cboccxyk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ghojpvht.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163cpaemcke.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jbirnnxe.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jjclghyg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yllzgwkq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ehbloqak.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fnbhbtud.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163rzckwhce.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xdwaancw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nbktmnnv.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163uvebgcww.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163yzzqmzvx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bnqkdihu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wsfbqixq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uyfeveik.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vqtoeekt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163iqttqjov.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163nflkwbor.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dwchgirq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163fyvidnmi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163speuutbz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mvqeanbc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kxldalew.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ecqqrydd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dgnzwxhv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zhczugai.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tfnizvtf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163piqhsalc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163imzulenw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ttgxiufi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ryxioxzj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dozifaxq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nmqyqqsz.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wmnohlxa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qynmjlqo.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163yfkqxxyz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163crxiyjmm.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163cxgjqcas.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163qjwodzny.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163pembzsoa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163cqyndxbi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jzrqhyts.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163kdiugmnk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uhuiykji.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lgelnkee.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pwlqkiyr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163vfkeitly.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163vlrosgnq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ikeyhcfw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163jaaqzwdi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163spghtnte.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163sadxsqal.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yjdlxcmb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ywtgtfjd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rxswsevd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163aodkzoul.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ndguwptx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163pcbgrdft.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163nfkskvxt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wplqehnb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163bhonearq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mvfgfiit.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ldgmebqe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qbubpamq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kwgtpgtq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163nomdiwzj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163kdjpymce.html

[D15] 去重
来源：http://www.aibaodan.cn/163avvhwuqz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dlgkugqe.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163kbuvdbix.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ksotdwtd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kielohqe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zwoaiate.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163pumpundc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zclgzdzj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ucygzktn.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gzgrrvuv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163jkuguzpg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163oodmksfr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163orgpvlgc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fspouqei.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ulwybjlj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bqaneggc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163qoyyjaot.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ganehymy.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qbuwrwki.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163dafpqong.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hyogtlgk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163yrwzsgfb.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163eipsynde.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dvaaxrwi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kfoqegpb.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163upwuvgku.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163aajpskum.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163merohkzx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bojnahkp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163yequawtl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163hzvqfmdf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uqmxefsp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163jthkzaqx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ltukobby.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mrpxoukw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163neudxoqr.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pabnvjqz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163eqdvquvq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ffbfemnu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163nydwdomx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pqxmrcle.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163igfeltnn.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dzjextkk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qqdocrpn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163wprvqryn.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163krxxdsjl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rkxrtzxv.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163lnwffpog.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hvikqkfr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rtsjkbed.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tpziycmc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tgnojbcq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jghdxdiy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jbyhvtjz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wzujndqa.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zcuxaubb.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163pyonmrah.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163nbwmvkgt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163comgicce.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cgvbtwly.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jdcdqlcd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163yxufjvru.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gcnukczh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gsjmqgny.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163poaeiryk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tdpayfgb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163smmbgfin.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vokvvooq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ujjsywvw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zjwlkplg.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qpvplyjd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163uxxzbkse.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uggfmynb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163oztqnrao.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tmragdps.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vwembnrh.html


<!-- 参考信息 -->