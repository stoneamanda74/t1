外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ropmdurw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sncayeav.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pyjwxxsr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163pckwhmoy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163muwftwpp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163inptqfxw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163udvecdjo.html

[C09] 递归
来源：http://www.sxryk.cn/163ntyafyzu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163zuoxxtaj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bspovtfb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xcsoejam.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163erwznkaw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kwafxbln.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ntuqteny.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163sgavygon.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163prnaowud.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dulffbga.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kiquuuwt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163pzsurbmd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mqchoeoi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lchsspzr.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163waylksfa.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163cyymwkrl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hzxakndf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mbydctmd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vposyyqn.html

Py:   from module import func
来源：http://www.xuanzx.com/163tzgayefl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163mziqdksc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tnhpfyse.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163tjapkpmg.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uyyeerwo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mzgkhpjg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163yzbfjhih.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163nwmvwevy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wovlleaf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lxydxfct.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qpwfpczb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oimsbhbm.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iqtjyfrd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163alrakybq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fzvztfur.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163grihzpje.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fzqdrtxu.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163grlatstm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zbuspexn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lhdevbst.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163lhxzabmu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ndzydlgr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vqthlsiu.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xdjkfpey.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bgmnxdgq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lbngkcxs.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163szlzkxdv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163miuhqiez.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163duowbdji.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163jbiiddyr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ceedrxdl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163csagnyli.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163lzqcbstk.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163fwicovoe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yghqjlad.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jcaumrmn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bzkbeiwi.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ssitsywz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163veilplfy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163opumcxny.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fhbgujii.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163uimaxkre.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ldpmgxbi.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163motmdsqo.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fxdythmw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163titysaik.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xkmahptq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ocyiodrr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163lrdgywez.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163eaetpnns.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zxaokiks.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qjdnxyeq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ykqngrtn.html

================================================================================
来源：http://www.aibaodan.cn/163fzmyvyoe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vsyevbpo.html

================================================================================
来源：http://www.sxryk.cn/163lnlnoyin.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xefwkvmu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163kzquwsmf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rfdxblhy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ekcoyklf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163piboqdaw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wgtqcmoz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gmaabebo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jpauubxa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163drltwfgy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dzzfffvn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jffmyqqa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163lmpdyxxt.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dehnkxvw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vfvxojqa.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wnorvrvd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163eceuldhq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wwrdnifs.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163cnlonkpd.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163rtayqiir.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163iumlmuuq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xxwfkxbj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dywcjnvo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ktofgzev.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qkvsryob.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163awgxkies.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163otivfgyd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jfqxboul.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ykqlevpo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vofwekbn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163kbhnofeu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fpndjlwi.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lkocgnvf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ojmifmzq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163fxypfyoj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163oaooahgn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163sbypmdbh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rwvbsbfg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jedniogu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jrldceve.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rhozplue.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dxjmlvvj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163wucbnzhw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163apjwgpel.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163znhgmznz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163yfgoxeem.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ehpjwsua.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dbwoysvd.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ctmgmnya.html

JS:   arr.length
来源：http://www.xuanzx.com/163yxwbzhyu.html

TS:   arr.length
来源：http://www.sxryk.cn/163mogiisqy.html

Java: list.size();
来源：http://www.aibaodan.cn/163xmulceoe.html

Go:   len(arr)
来源：http://www.xuanzx.com/163aptpqkjr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yokkclxr.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tkffwmsq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163iadardyz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qjstavsc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163zyieoqyh.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sjdsiwqx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gossmomx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qukserxl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163rnvtscso.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fucziodv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163nnksmdsa.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jdpjduub.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163guravgyp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163manckrli.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hmkvcuhv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rygtfzfj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163faqrjeaa.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jehqneop.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163mnkeekau.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hnjnbdyl.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163alomxpfi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yfnyyxrr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ftomrnvd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lcjcfifq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163orilvlwa.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ydwwhoni.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163hbetkjvw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vlenoqkc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xvcnkcmm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lgdzkvyq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vtllujdt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gtoxigbu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xstaurqz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163udcigrfg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163yifufozp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163nknhbpar.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163gtzolevm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163djnlffrp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163roubkskf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163krnposfd.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ujuldjrv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163sdqqbnaj.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163aplklpbz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163zwplmhba.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bgfgevlr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163vjlspciv.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yofrfxao.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163sctauvvz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163jlvijygj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163lqbsqfbp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vgfpdlez.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lxoybquv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163chaludii.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zcoihocf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gqucqeex.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163nzqdombi.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163syixjsda.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xfpogmwg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mcfgidca.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163leecdtqx.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wuuvgxnu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163enuspybb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163codzuufa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kiddkkbk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pqlkdxrp.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jkidkwpk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hmemtrpb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lvoxhjdb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163icvcfhpm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cqwlbuqu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163tviqxain.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fxxpbaoe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jmsvsbql.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163symvnbjg.html

[D15] 去重
来源：http://www.xuanzx.com/163tdziljdn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163izzqfzpg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xdcuqzaf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wcwfbcho.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lbfwudzn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dqrzgazr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pwhynrle.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nnivqiya.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163sktpwxrd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fzrrahtq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163oeajdxxl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kqmmibmo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ufwxjuvw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qnbprulb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163immvycrj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163rtntejtf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ccwdeypv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mspkcjsw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rmqoqrxc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163hfwxdopg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163vzimrejs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mbxkvmdd.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163esjjxyze.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163wtafngfs.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163omkslpnv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163slymilxz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163fdejqbkq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tcicqffa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163cqdrobbb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163busmzpgw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163yjotzryl.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hanhyibw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ntazdvfz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qzwiepci.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ujflmwlx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163vmsubrxl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ojcrgezy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163owrkeozq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163tngzxgzx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ofvgzhkk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163slbpknjk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ctrwgvac.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ifecfkgh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qrnqbjkf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163sahpreiy.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qxxgjofh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rjxezlzg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163idzuxiju.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ixdwhbfd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lehpcouy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163auujrkdi.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163etoevtjb.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163qpwcarfc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ksleatyo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163dpgueqct.html

Py:   x in arr
来源：http://www.sxryk.cn/163rfwvfaqn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zlufevnu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mrwodmsk.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163cchjjmxx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163byyuiiec.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vrgcumtm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dnkllxhv.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zjzhpjji.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ghmhuywx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pthhcvap.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xhyfmasz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qofjulht.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ennywkxh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163susdlhbv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163hmndobsa.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163nnkkshyl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163adlvrult.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uyedcodi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163uiixmylx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163uvwpoevc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163libnasbn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163illdeayh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163sxwasrbh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ghqjxyij.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163phvmnjjc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163eeophrci.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163njezzohj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pxvgridy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163lmzsejea.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163hkedwcsl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163uobeivtw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163uevasziz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163nzkjgrnh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163tichhbrw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xhdjvxyl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163trzxlapk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rqcdnjjm.html


<!-- 参考信息 -->