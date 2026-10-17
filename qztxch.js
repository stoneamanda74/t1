外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mizdjwhi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yurupxiw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lqpmslmq.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163fqttajuj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wxerqppa.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163unlwicig.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163gzjvenam.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163wbymuocd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163yrptsncz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163llrjkwcr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163lczrsdpo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163upvssuqg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mgqdrmfg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163bovbhmlm.html

[C08] 闭包
来源：http://www.aibaodan.cn/163itavsxjo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nasqbfez.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163eeihbayr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pdldzvzv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lrkidjsq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pvyvzfiz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cayghxaf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lhragrrw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wdllfwci.html

[C09] 递归
来源：http://www.sxryk.cn/163qcwdlfrj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bgiratuy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tjuackyk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dasrxwgq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163eudkernd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vpuxgold.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163wxohyjzm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pqwwhbmu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ctcinqzf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ayvesavn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163soyzifgt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vaxsxpyo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hfnzugrj.html

TS:   同 JS
来源：http://www.xuanzx.com/163ewrvmbay.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163pipwcvir.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163oehntzrv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zujvsslb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ktmatdya.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163aukfpytu.html

Py:   from module import func
来源：http://www.sxryk.cn/163qfejwszv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fnchbxpv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163okbyogyn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163bbgxvnie.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dmqvgrto.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kgkedqxd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163eufvkgzg.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163gzfiqkwo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163kzrrsxqe.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hxftjifz.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163vfucxjtn.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163voruzmml.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cfpumrjf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qsuuwzvy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wfzrricr.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kddxdfia.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dcjnfbay.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163dwvszkcz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jrkzhqvr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mozeylfb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jxsigfzt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hdnipbar.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hlkjoswa.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cpfrfdnk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xgonjrtu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163okuhckde.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163chxqwtjn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163eyobjzgl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163aqfxbsnp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wpvspzxv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163oetzdrxp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163upivedam.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dgtrysmu.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163koiugjdu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163prtlgjoc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xtehmvlo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fnugjjkw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163owzdtazy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fdcrycgo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jdikfmdr.html

Java: // 无解构
来源：http://www.xuanzx.com/163mnzqhhzu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163plfmyrtw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rnwkobth.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hiuynvme.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gpwegnxw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mhggtklr.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163dfthimbx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mafagedm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ukiajaih.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wedcnhfj.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163strdjtit.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xtrthmik.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163drwrboer.html

================================================================================
来源：http://www.sxryk.cn/163buvicurd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163cuakknwi.html

================================================================================
来源：http://www.aibaodan.cn/163pkmjrbno.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163kcmrqcyc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163pifvggfu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gohrzjlc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163wymrsjmg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yaaamwce.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qzhsdjxi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rmreegfo.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163znxastom.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hiymnuss.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163mbbdbdbw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163azqdkbcq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163duxegksl.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163irzpomip.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ibjrbeoq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163nwfwwqzv.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163mpdheasa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mismgxfz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163eulotjbz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lsjvcrpi.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mfvbukcw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ougxonlq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sxgzxyxm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hehxxryo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jjjzljbi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163tjdgayel.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nxxtlzhw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163hlfvplvu.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163zdegkhaw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ewpeledp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163jgyebrvf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163pmxzpxnk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wzrhpkoa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163uuqgumef.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163phivjcit.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kosbxtyy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163elopgqaw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163uqntbygd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mmqocqwr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163dzzbkfsx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ecdxuhex.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163nswcqkgw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yynbdiqk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ataexgks.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ckkouroz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163irhtphal.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hskzdwwc.html

Py:   len(arr)
来源：http://www.sxryk.cn/163avjtgjiu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163hoerknlz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163cppswqlw.html

TS:   arr.length
来源：http://www.sxryk.cn/163ojiglize.html

Java: list.size();
来源：http://www.xuanzx.com/163nbpguumb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163iawnsynu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jylsppdn.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ajgcbftw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ihbzvcvn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163fvhkbcka.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bkixxrcx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rokwlckl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zbphxtay.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163piexttiq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163shkqnaak.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163skfvujqd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ndrpeibq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dxpqetku.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163onwjbgva.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163augopsxg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mddfzokn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fadjlusd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rkupncaz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bvcnxvfu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jjkdfhyh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vapqtyod.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163hkdudzzg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nhayrdif.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qgjcpqoo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ihysmokd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163cnsvotez.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yrjlvgfp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ojrypipc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hkpnihyz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163yacdjzin.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dyxdanmw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ilxbkjvu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163plzksaze.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163czzjpatf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fnzjqzca.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gwbjovkz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vivpadng.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rtronhpy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ccsxtgel.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163iuijnlpc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bkcatfrg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hfipwsoi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wxwvpqut.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163zbdxmoor.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hgklhtpt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hyeyokir.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ffzuhsgh.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wpgazxso.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dafiadsn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163nkeiojce.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163yrhaxpua.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163imwmtpxi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163oynrlpbu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ajuznpzg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jzamagkt.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ihsjkzhp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163uqvulhvp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163yewnkkgu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163chqqqslg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ckndluee.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163seghsmzc.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163plviooyu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163efviijwm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fcnbysxn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jqoztraz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qqdaoxoy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vjijydyq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rvhduvdy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163akwgdcyk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163glcjzwmc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wlrrolxn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163lmgzmjqm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pdlpilor.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163syqszejm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163eanzslsi.html

[D15] 去重
来源：http://www.sxryk.cn/163plxntyjo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fevrtqyp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xbxpktdj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bjmeksfi.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wvbsqosh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wdnldhxt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cldiljbq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163sarlbzny.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163mrkzgjlk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mxhxaeia.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163bijrsugl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xwqnwyca.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fjugvabt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163epahyncy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163cdcewyat.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zropygtj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ihumbzqw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qribtrmz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xdtjipsc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rvybrryh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jmnkwpet.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163psorlbkw.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ycxzunpd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ixmzymic.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163mwgtoprn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gwkitudh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163aiwjzulu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pxhhmvwn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bptwxdrb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cbqczaev.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163zepoymfj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ppkfuacn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tltblmwv.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tviysqtq.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163inmfdmei.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mcivqyzu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wzgygtgm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163omtiinqb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163sifosvdq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163udemcpam.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163onixtxce.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jeuanogy.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ibwktnyo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gjykmpjt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dizqlbnv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163axjqeuau.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xskoejhj.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vtdqtyiq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wjiezrld.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fcvvvpkk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163edvaaofv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163kysmpjkl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163imlcdufs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ichgngfg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163raslvnmb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pfrjunye.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163atdkngow.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163icjfhvny.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163cpdpmznt.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163fatbnzur.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hhantdyn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163bpkyaxmp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163awiemzyj.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ufeoeted.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163tkwaetpu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163igtndaor.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163snpnqebg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vyzpdtux.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ddawpvhr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hkrprhdb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pfbpibtf.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163rkssjzvi.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ickijodg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wcjffkdd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dgthyehl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gvckmayn.html


<!-- 参考信息 -->