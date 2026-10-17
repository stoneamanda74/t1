外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dfdzeppg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ftrdoqwc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fynloxrh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163bwzydgdt.html

Py:   return a, b
来源：http://www.sxryk.cn/163cyqkfjgd.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hktvzdgj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ooqrzlbz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163miyxtihp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kwhtxfqx.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nvlhazbm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163natfuind.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vsabqnhh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163docwyjxu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163golvgyjz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163aioxonjy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jfpqgsch.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163danwyzwi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yvqharlp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163blyzxpvf.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lzlcyunf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163lpvtnjqa.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dgifppqe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fegyqnhj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163iobeevxq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pbkeqwrl.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163uremwyfy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xnybgkug.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163btaixufq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163tswccsgi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163piwiifps.html

[C08] 闭包
来源：http://www.sxryk.cn/163lmzlaeaj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mgvkfwnl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ckwvgbpw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cyvgjcla.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xoifjrdn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163hvsxkfxf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163krvsttit.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163uhajuywx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vhunshqa.html

[C09] 递归
来源：http://www.xuanzx.com/163xrmoedwd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163erlpgkbx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163eoqnncmp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163anqsojpo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hnrfvckz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fjzayqfg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bfxydtye.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wpfogaxg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tijlhtpn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ukatociz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jqlppweq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xmsvezoc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163tdvklmhm.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yooyvhoo.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bqgojyfj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163uszsiofb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163gihffcjo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pgxdafqu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lewpmniz.html

Py:   from module import func
来源：http://www.sxryk.cn/163erlyonvm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163trgpoihq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hqgwyhck.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163grrucrac.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hvmcgzsz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163msgqjtkg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163sonrdsel.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gfkysbyj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163batwdssb.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rjlrgfyk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163hgryumbx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163aqvbkuie.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kmmdjqth.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ihmrihac.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163eiijhmcz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qweeayjm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jjjvkllb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xcymdjep.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163tgsoadhi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iyjeqmje.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163lxyqslbm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ztnwjoaf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yzgukfeu.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cirgxwps.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163yrifpomc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zpuitgpz.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163omnuclje.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ohjvvhjl.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xxvvjdtr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163hpuroyvy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163sqfovllm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rmmymzbg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163piolabqw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163zjalcfeh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163tzkhqink.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fvljmsky.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163itgipnnw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ugnmmqdd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163oprdyqhm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hgdyxtvh.html

Java: // 无解构
来源：http://www.xuanzx.com/163sibepjvs.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zycedbgm.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163opolmrjd.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163humkjlqc.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163pzybuowb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pvjfqwwq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hjfmklaz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xwkbtmer.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163gjmgfmkw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163mxxdkfdn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vdzzpmoy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163atvnchlf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163lbioyngv.html

================================================================================
来源：http://www.sxryk.cn/163tabwmakm.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163grwlnnbr.html

================================================================================
来源：http://www.xuanzx.com/163juhwvzwx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gisuntgu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ntcwiskp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tttzwkwa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qcdqopyd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163feqexdue.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lffdmtyl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163uvyujbid.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jvbfmeoq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163cjmsquch.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163rihimfoa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sgfljbqz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163syivjzfl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163toofzqnv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bcsjuptr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163kxfqarne.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sbptlvce.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163sfdsfuqe.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tbjyycdt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mmlegybe.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163srogmhqu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163guioqnef.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gfnoufbg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qseiytjw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163yyikpoma.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ucirlyzt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163onbcxymn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163igxauwti.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nwxzwygb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163zhjxjdsa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ywohnkdy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ebjlqwbh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163actbnshz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lhjxhvhw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163bmjtorhh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mmheflkf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163olsnkdub.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kembtbbp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wejvjpng.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lzbpkpek.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163krkchsxe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163zlswsmez.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ifhtwugn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wrxebhcw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gxrbxwnr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163iokusmnt.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mpfuohdn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hzpbkegd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163nbzcyhgv.html

JS:   arr.length
来源：http://www.xuanzx.com/163wszghqze.html

TS:   arr.length
来源：http://www.sxryk.cn/163iugqplpi.html

Java: list.size();
来源：http://www.sxryk.cn/163qdvuebin.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kzwznpqu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kiztvelw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wvtfpisf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wleokozi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ysyoizdt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163iiqkvkdz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163claxawos.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wtiraysz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vgxtplxf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dgkwpcek.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163hhxeiylo.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163pzqmxwgy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163kwsqkvpc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163jbeqsucf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163pzcvdgcs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163hqpplifr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163aovdkyzs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cmtxbwzi.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fvohvbif.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163bvvkoyft.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kmmewqhv.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zhmnnisz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163idvbxrve.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wanpvvsl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163mjkoucvc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ejyyaroa.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163lcgtcmfx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163suscmfrn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hyfkeyfo.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ympprcni.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gkmwkhfk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hrqjbfbn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gekqketp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kuifggay.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rtwjfbiq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163einpdqnb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wlaqasoc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xuvtdcdu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163hiqwtxwn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163yevotdas.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zckmifhu.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163yqrbxgkq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163btiincgz.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163eupnkmos.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cmutfshp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bmlumpqr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qjiseynx.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ochiewdl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163twqfmcai.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163uneuptvc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gjmwexoi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iatntuta.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xdcbudza.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163raqnqfni.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fdslloft.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163stjjbakz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163hzdcfypb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fgcnyfnt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nnexrouw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xtilhpua.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163akurqwio.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gwoxgjrk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163wrqgtani.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ajrjwypx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gtclydok.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163nynurypd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rjttwjau.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163iirlmhqi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163stdfgrpa.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pdredgdu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pviqkbqv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163djqpifuz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tanxshcg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hmyfqpze.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xpktghwq.html

[D15] 去重
来源：http://www.xuanzx.com/163osvsfehc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gnzgszpb.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163jwtnraqw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bixcxtsr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jcdwsosq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163lpninesy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163bdwlbpvo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dlvhdscm.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cbicugel.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163jzlfjlbs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163igwsxcvs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mlwnsfoj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hscppfxf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vrwrpsro.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163qvdsxilx.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pddmggkr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zssjosrj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163bfdftfwq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zfjlphyo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163pddmuzqn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hdxsxgzv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163bhgqijmx.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ddpkrlpl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163eghztaau.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tobvfhse.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ggsqpqut.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ffgmhamb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163bpinzylh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163yshdfkva.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mtnwiuki.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wudooqfh.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jaldmpdn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tfxdiyms.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163wwwaixwn.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dzonjktr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163vhkzzwnh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163powobrhy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gwsoewko.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163uvtzryfi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ctvcgpor.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cjbvvvck.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163toknmpgr.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wnhxwaps.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163bfuvxfav.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163gcwzrszm.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163twgbgpwk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jqzdkxry.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qtiakkrz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tgniqppm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tglanlee.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163sonzctvd.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gploxbrz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163yzyhxkpg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163xphcnicy.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yqvaingo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163szmrxzhm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163sdhpkjft.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hxcyraeo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nibsmrvv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163cemerppu.html


<!-- 参考信息 -->