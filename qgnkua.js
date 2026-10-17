外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ovjxcale.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mdqdlqnn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qugxajeu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163mebwxnnm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xcsvcjsv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ojqfmbyp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mrbfkkjk.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kgprbfhs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163skanswel.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fkvizfrq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ssqvjqvo.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mixziouk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ynxeocyx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pddhogpr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163lwdxltii.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163khxtadgp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zmrvmbnu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163weqonnbl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163efikbvsx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wmmuosir.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163vlzbjyla.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163lqencvoh.html

[C08] 闭包
来源：http://www.sxryk.cn/163sxvijpim.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163oboeccka.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vfigzhgm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vboszqfv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ldpnezza.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163olbkruwk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tkldpqig.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163qvbtldfz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qkxuhblp.html

[C09] 递归
来源：http://www.aibaodan.cn/163zdibbvri.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rpwaqxqw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ersrvksi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163prgqrvre.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uzzofmsp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jvgpunnw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pakavpoz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163dccrrpnj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163xwdhbosk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163nvpznlkf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ddfoxnlr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163eptayirp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163bxxemzxc.html

TS:   同 JS
来源：http://www.sxryk.cn/163wzxmnwod.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jwswnnyl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rejwlfza.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lingfvrf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nqaazttg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kbjvjvsj.html

Py:   from module import func
来源：http://www.xuanzx.com/163udonagmm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lrmllaac.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nglljfbc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vbccmpus.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qcbleiem.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rjpytfbg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vhcgfrur.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163estyyrjd.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fhowrose.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ipuxnhuf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gpahoeld.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tegckvda.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163udqwvbvd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gwlibejy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163jcxlpseq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uwdbhadd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jphyvrow.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163liqqtalp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163caknkumo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wllwyuux.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ilagpagn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163otmsxbvr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ijklyrse.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ovixregf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rvmxvnlr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jqbtsbnn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163tckqinxr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ejfpfdxj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qyymxyjh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yweamlty.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163qganzpmb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ixqntigk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ztfbmboo.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vefcltks.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163tyevbxiy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yjvjrazl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163odmrpqxh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163cywepegl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lghulnnb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yupdssva.html

Java: // 无解构
来源：http://www.sxryk.cn/163cmgpuelw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fpdsozgr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xgdgithy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kpjnquqw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163aisoepvo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163aoeaagde.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bggmfkmc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163hhhkcnca.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163myysgbed.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163whkpkhcl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163fuojyldm.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163wzafdruc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mdkpaoqx.html

================================================================================
来源：http://www.sxryk.cn/163fewpgglg.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163dxfdfhbo.html

================================================================================
来源：http://www.sxryk.cn/163bvcdptex.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163shuuvnvm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163yhiumhyd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163mrbsrdii.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kxsjxxcn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xxngkceb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sptosfyc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bysjinml.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163cdkabled.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xiveywpt.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ygdccxrf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qaitgfmi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163lfmysmua.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tocxlitm.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zjvvcbmp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jeksxgio.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163avprhjvl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163bxrbdmpr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163swrbbhbc.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163geygjiww.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163unygqutt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jjolelnm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tshtgevp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pocawdvc.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vizzkvol.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bixflexy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bfvastmi.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163aqyqftyu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qdermadp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jyxnsdxu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163wzyrclbr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163oiefxemo.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163idagpyff.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163icdxvpdl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xqemzqln.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jqesybde.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163oempxzuo.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163uwnohiig.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hqulfzij.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gelncyrd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wqunbaak.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163bplzawfa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163wfvidohf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163udkjdygv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fenstcrs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163pfwlhnol.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gsowodii.html

Py:   len(arr)
来源：http://www.sxryk.cn/163kaslrldx.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vekqzdpe.html

JS:   arr.length
来源：http://www.aibaodan.cn/163amiwnqdu.html

TS:   arr.length
来源：http://www.xuanzx.com/163prjijcss.html

Java: list.size();
来源：http://www.aibaodan.cn/163uachiubp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hoknnqum.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vtvzmvro.html

C#:   list.Count;
来源：http://www.sxryk.cn/163qhshkrds.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kgvrxvlt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163deuvknze.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ualolegv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163eecwzqpx.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163upwiettd.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163plelgkke.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163bclldfal.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lopodxwp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163byzamyik.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ybjlbfoq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xrcyacyh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nvmangzm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dqhhqmns.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163tjmofldq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wnyozhfh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iqjtjgxi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ubujpdxf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ffxlpjnk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163stlmyrdq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gfkvipwj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kryufkpr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163poisirrc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163lfliutmk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ywhdcbri.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vcjymmeo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fwaadaxo.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163oxqnbxct.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163unlifdhr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pbiwuyus.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dqyfqnrm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uqikuvmp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xexqhvyh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lnhmxnsq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ceyejiep.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gpvtxwmr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jljuomkr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163aiyvpabe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vpwmsexl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vwglashs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163tdwpvkhw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163pbmobzwy.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qjsmbcrj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zqqafepv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163rmfjwbkr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wqyfgumj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pswrcdgy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mqlurrha.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163drhqxlis.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nnokexgl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xvnkimep.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163tuohceoe.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ndgwnrio.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163padwnxrw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163yojiefss.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163clxrqgtb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163rpxyoxyn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mxdxdodj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xilvedwk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dceacgti.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163afxkcqkz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163olftwthb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jqetcekx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163crrllsno.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163eezhclec.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163clkesasp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bnskwyhv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zutdvveo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hybxqyxq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qomgmvuu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qzdtpgbh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163uildssrq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ndovzodz.html

[D15] 去重
来源：http://www.sxryk.cn/163gfkpyven.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zqtprtna.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oxduliai.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163louerscb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lxanhbaf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rzsfnlji.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163eymmiqto.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xqnqdzio.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163epskikyp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hyhbnway.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163cvssitfc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mtwqmjjn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gyqwueyr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gjtbuqjd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163nemlkpcu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163payevgpd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163zwsijgki.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mthseirx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wclaokqo.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nhdfhqbo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wopsgnxr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ifpvabvb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kdaeitcd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163twqtztwa.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163owtwlisd.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163lwxchagf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163alatnrwh.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qxcyrdxq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ecfazoip.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163baybdgwy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ungovjrf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163omgyigqc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wtwtrldy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xgjgpcud.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fnpncbjq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163iwwajnrg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zgsdnksd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uanrvjen.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zwmecfwc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fwvtuasu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hgzbeolu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tkldclpo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bmgmbdjk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wkcgtusp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163fpkwpxzk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lpzvvqfs.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nztcuqbr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163elmocmbh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cflggged.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163beoobnrt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163aimgkhub.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tpjcisfb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mlvumvpz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163hbztknhn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163llznflpq.html

Py:   x in arr
来源：http://www.xuanzx.com/163zvbtwlnu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163delskbpc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163bldyqrnq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ogrjxkds.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163yfpfcnre.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163smjagtng.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hdrmytxb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163etvottoz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zbqgwlsy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163grosrmmm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163fjshukce.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163icqgdoqs.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qzdfxifd.html


<!-- 参考信息 -->