外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mpwsbiar.html

Go:   return a, b
来源：http://www.xuanzx.com/163zlbseeve.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cpffjdbl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163duatplsa.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163cvyftsxl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hoqhulgh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163opoeessa.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163exsfpijp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163oytzvikb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wgjyslml.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ewsbwutf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163abpeexgu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mjmegock.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163lyfvctyu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163oxyqnlql.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xhwkatij.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163felprvxo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163xbjsblgm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fcxbrjqu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fcidekcg.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163fbrppjzl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163sbkaqzks.html

[C08] 闭包
来源：http://www.sxryk.cn/163uhtoyobb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163oumspyte.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mffpebzu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uradxmgc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vsjlunqo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163abnhmlol.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163pouloyoi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ltvqojil.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sjwsyozw.html

[C09] 递归
来源：http://www.sxryk.cn/163omfmakvd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cvyvmjha.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xdlagmug.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ijsocqpc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xpbwswhf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163aptaajiu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163oknhpzil.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pgvaiqnx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pdokqiuj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cywscszk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qxkldvsc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163tcrsleus.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163whtaaqhy.html

TS:   同 JS
来源：http://www.xuanzx.com/163ovpcnbyh.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jegvsmpp.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jkzmrwkl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vsvkawbi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mxrchpza.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163snpaljqa.html

Py:   from module import func
来源：http://www.sxryk.cn/163cigmuzkx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gofhjmrf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163chdwjlxl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163dbeuuxpi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ywyuuvha.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cuahipaf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qcmchcfb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gzxfzuna.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163batlvsqm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gmgnebfa.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163vjvskhmz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163prkiccja.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cyumpoue.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xcowgeac.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hjbxnaiq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163nfgawlrp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fzcdqeeo.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163wmhnnksk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wkmmghic.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gakbephp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163efxoootm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163njhrwshg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fapgnecw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163nqxjqhkx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163bujukxzn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163rpugpwsl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bvfhapse.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163yfgephhz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163aqfcqqjl.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vffgzogd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vcnwdvku.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163qxzpdzim.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163glxuthyc.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fkbhksbw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163tftfwvbh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dupldoek.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pjofuaia.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lrvpbipz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yismafhg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lezatuyb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bazwhgcx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ouazxqbv.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163asiswctw.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zmgslsdi.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jpuhiasl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163skulhebu.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fabauvjj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163luvcnwjm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ohkweenl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163aieovird.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ohjkonvb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163uwuzoyod.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163fggwawrc.html

================================================================================
来源：http://www.xuanzx.com/163yvpudpdi.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163avdgajya.html

================================================================================
来源：http://www.xuanzx.com/163gaeiyfdn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ohkfphys.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dtycxdih.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163svxelndw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rpmdzxml.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163asziziva.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rnbublfb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163diuivawz.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163satocgjm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xneqmyyi.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163jflvtcqv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163juafhkms.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jztruypi.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gfvotbgw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rlzlauaz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wqkqtstx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163abggmlwb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163qplmngpb.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xeydgrpt.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163scoayrfs.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zungssxj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163aqkglmlf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zjyigrxg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fshkcxtb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bcggnvog.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163cbihdunk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163efyusuqe.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163pkpfjxaf.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hdoiznqy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lzxqpayt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xmebnwss.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yadijxcu.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163fgjdvtkl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kbkvduyh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hakvntch.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jkowjnhk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163posyonhj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ornckuzf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zkizpzuj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163joxtlneo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qyvifltl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163pzeugyqz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ltbfrarx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ymeybwds.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fnkivzit.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163oeihafqf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163afkfgted.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jrwgzgjo.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ipkmktxs.html

JS:   arr.length
来源：http://www.aibaodan.cn/163hxiplvyr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tvwfwfdu.html

Java: list.size();
来源：http://www.aibaodan.cn/163ggyrohsu.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xvieaasn.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163mdwshhnb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163kftcpbyl.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ktcmckft.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jkagxmzi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ebnltelj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zevzcypo.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dqwxdeib.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xuzjemwg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ueljbeve.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sybillnx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mxwtdbtr.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163agxabadn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163pzmpnrcr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163tqumpwor.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mdphlnkw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bnyhgomc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163owtdxbgp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163suvhdofz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zmpzjvho.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163psrvjrpx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kaovxqic.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hmargybc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mnebxiwp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163qugpcuvh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163gdknwqxb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lixrdfrs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ifqxigix.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rikysxov.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163sjdisvlq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xfzhqyim.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mrxeezfc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qdvgfdnv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jlcjstfy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bagumobs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wbilglti.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163szvwylke.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tjvabrvg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163zgbdvwbg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163hkyhqpte.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qtmupeek.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163dsojbxqy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nungxunr.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bnzrcdgf.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163wnzgskeo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uyrzspfr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163whacrzyj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163yfacvbel.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ekgzwlyo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163psbgfnaj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kfprlbli.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163atjdkiah.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163czhwthmu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mlykpzjg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vhhizlww.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ufznrfff.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gvokeena.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xtkunvip.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nxpvzrry.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pzbxbirg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163twvonwbh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163oonfhpkw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vhjwilvh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163fmyaswqb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tbgflnbb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ngtmrecc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163epsbcozg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dnevbwlr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vzhstdib.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163efvcvygc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vkcbmnen.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163jyftculc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rdrnpaos.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jlaqyadm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163mmxqyrpw.html

[D15] 去重
来源：http://www.sxryk.cn/163goyrzzdt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kxeayccs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163rochrpus.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tgnsvkwp.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ddlekoid.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gxlnjzuv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fjxbtgub.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pwgcjgav.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163sdsfpzuk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163shwnnsou.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xhlrxnqo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ujonrkok.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163btxmtxxa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uakxujec.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vryojtmf.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163tnwntgqk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tjefqglf.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163cysugdjd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qcocspfb.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lwuzuamd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kopwpjqi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dhxlvuyp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163milqltsk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163mqyhcrnl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qookfeuq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163csqrjihx.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qzhnrxsr.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hkmuqlci.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tkewqums.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163bqbwecvk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163iyjqwpiv.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163isvfbznf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jwdntjcw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163jqeqjovq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bdvyyzzg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163bpbswrrp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vsyvrhvh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163joyegwkw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163pkgslyul.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163uhtgkjmw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ypdsezvb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163uoxwbeiw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ffpwddzv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hwufnjlu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kjdjsehl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163gyrvkdtx.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qxqzquzk.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xekahsrm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163txifdsto.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vvshhdyc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163dpkskzfo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pdohekfd.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ezfoofks.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hbmwurbt.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ukpsfihp.html

Py:   x in arr
来源：http://www.xuanzx.com/163wcbhbtkc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163leaegkvx.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163cmkzeaom.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gropovhx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wmsqxpoy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163qmbaaald.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163mtdujnjo.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163quvcyitz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163iqgwaqst.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163wwmlpmes.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ztiymobe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yxzxgrjv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163akdsxuyx.html


<!-- 参考信息 -->