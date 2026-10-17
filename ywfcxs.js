外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bbxcbayl.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163kovpbwlo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jtuhtlur.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lsgvoelk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163dnxonpww.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lfegkyar.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163iggqvbut.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gurmiskg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jnluywcb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163gmhyckje.html

[C08] 闭包
来源：http://www.xuanzx.com/163ydxecqbn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mticfzrd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pktfgbwn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kjddjgbl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zmarccrc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cgakkyvi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wlqdhumy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wifymnny.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wkngszje.html

[C09] 递归
来源：http://www.xuanzx.com/163umeehynq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dtutmgof.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hgfzfvwk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ysldqsfa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jekrjbch.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vrhadvfm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163nlijsjae.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rizporue.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163svoubmhs.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163iedzywhh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163gshjjirh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ozuvmmwc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jqpgnhex.html

TS:   同 JS
来源：http://www.sxryk.cn/163qzfsviey.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gnwjardg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163efwmthuq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163fmqzzlpi.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lvrbvppv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qukmokof.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mqsozrci.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ofpjvziu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iupzvulh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163nclaurhn.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163isohzilm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dzoojvwe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hnmjghjq.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163blqklhkt.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rtvzteoi.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gwzdbsuc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163dmmogfca.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fyzdlulw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mormpmig.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sefmyzxv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163dcrnvubs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163sydelqny.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163aiimcgfo.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nocoshwt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163bzwixfsr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lwwxmqfi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mjegckbt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hzcexbqi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bsdviwzp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jjaaeegy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163pjmutjqs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jgalktaa.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yauumtow.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163chrpvjud.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mfhxtgzl.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163igudgbin.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ztiigbhx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163gqmmglxm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163hrxblatu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163cochbqdp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dsxcnofa.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ebqjjupc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163daavlglg.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163auvpaekk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163snlosibh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yrklqfux.html

Java: // 无解构
来源：http://www.sxryk.cn/163agnezded.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dyhfjpjp.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mifzlouh.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163oovnefds.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163vkgafjgl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yjvxbali.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ikstasvp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163uwgzmkrt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163omebchus.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163jvhawomc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ucslzkpt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tvembhiy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pcpktjem.html

================================================================================
来源：http://www.aibaodan.cn/163cqchnmui.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163eancsltp.html

================================================================================
来源：http://www.aibaodan.cn/163dzfwldzs.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ywttzpqp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kvdqmame.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pblgcjfs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gejoolem.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163gvnacfga.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bxwmhmse.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163vtcrmnrk.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qgpdicji.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ruubmkln.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ekorkbkj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xpgbaxgr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kwqydftq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163lwaiahoc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ylnijtzg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163lnrcsjjg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ncngbdiu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yasfvxjr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163oxbjnzdu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163agbvjohs.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163obslfbca.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zyznzgqw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163aezpsdhn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rhartqeg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qimadxhb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vvazhfhz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163qsaibweb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163pnyyzmuc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163dsusdixl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163iyvmonzj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mmtilhqa.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tkmbafmo.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163tpouummu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hhouigho.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163advkfqcn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qhilqqpd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163njqokexx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ndzczmmo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ygvmipmx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jtsyyvnq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163nxbbhxox.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163hlphrehc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zgxvejkk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163upinnemv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jporcpxe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zkguupqn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163euaeisku.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rldiauox.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ryaveobt.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ldwtqbkh.html

TS:   arr.length
来源：http://www.sxryk.cn/163mwwrptyd.html

Java: list.size();
来源：http://www.sxryk.cn/163yvznhqkn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mrqvrglf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xdoqeyxr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yqvkvylz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163agawnbqy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163onxyrsyq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bivctywl.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vkrrtxog.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ruvajciu.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163dlfyavzr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ssrgrpxo.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163shyysdyu.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tulnbhxe.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yibudrwk.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bvoktnez.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163umaypuhm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163knekndfr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163zjypyjxx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163qqjcvhzw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163cnxtmnkw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uzxrpwjn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mublqfpl.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cfltatzs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dioyxdus.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xawmuvqo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163qqgvytsl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rsogetoq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qgcoznfz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163psprhkle.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ziypevdk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163chrfuicc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163pmsslals.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jplhgfge.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jvrgkqly.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hzjjomgi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lxiogdct.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nikgyikw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qmcvstgv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rwpekzqf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vpiyslgs.html

[D11] 反转数组
来源：http://www.xuanzx.com/163emiuaaul.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163isfuexut.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163cdqyyszt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ybnxagzm.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fabwyrlt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163lzsjomut.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163drfhcojv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wxzklhio.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jqahtlfj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rzbaebtw.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163afvhcuel.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hchsajgt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ycmfvjzg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zedlpgro.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qfxttngr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163amobkdmn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163irqllwst.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sizgbdlb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163sitjcmgt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ucfntrmv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163cncqdbei.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ipgyvame.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163auuctbzb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hpghhdvs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163bcyvapga.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rnlqdxli.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163llhwhhwk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hmpjlpzg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163betukvxy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vbrruydw.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163liojxrka.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jvsjghru.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vmrvjksb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tncafalu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163szzvkgna.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163yuhcociw.html

[D15] 去重
来源：http://www.aibaodan.cn/163wmelmhdo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163udczambm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zltnjaqm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163obevxdmz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pjbmcdzq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163apfmajpr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163tjitffmm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qhdwaisk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yrkcutzl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ogkjrgyl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ejqmcvxx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163sxzuayqm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ijhiisug.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zzyacpvq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163eoosklfu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nnfdufvu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163bnfzofvf.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vimppayx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rkzmfdhc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xhoywcbr.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163mrwlrhaf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163uxikdzpa.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kkrwiawd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163emelhtls.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163mmdgdhub.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ydodupjr.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dafliocu.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bokykefs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163gmhotyvy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hfnzzqmh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163iekvnexj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zcxernmn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mauhtmrq.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vpluuvya.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xaytqzgt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vxpmmucx.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163khzbwfjp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ojtkruzq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cickqgrc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pywzxtkz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163phakjvuh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163yqtikqod.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mokccczf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ssetcbqg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163lukmrviy.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zanacsbt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163yfdnwpug.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163rofxaofe.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163stvqyrjb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gtvclitu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fqtyjyhp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163kyzlttec.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ltzwtgaj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rgetdscp.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zygwowqz.html

Py:   x in arr
来源：http://www.sxryk.cn/163qdygfxcs.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163asexroog.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163lagvwhbn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sphcnccd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yrzlujna.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163sqbanpxd.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163voaduqim.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163voskgauv.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ucoytitc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163lxeowikj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jdhqrqgx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163mnosphvf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163dordhlaj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jibavwdn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ofezyppf.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163feojduwj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wtnnodxi.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163egxptgia.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gqyvignx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163cpthievq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uuatskpq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vrggxkgb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163kcvijgja.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rfltuecu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163oktjxruw.html


<!-- 参考信息 -->