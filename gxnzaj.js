外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163erfvwgfn.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cuyoxpww.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163gtafkarn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163oitvxyog.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qtohieqj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163iglimnuk.html

[C08] 闭包
来源：http://www.sxryk.cn/163srgysgjl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bdffpzqa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rmxamfkz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163agjjvcue.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wpbjfrpj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163eptbpdjq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163hrywifzy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163liumkbph.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rquxstde.html

[C09] 递归
来源：http://www.sxryk.cn/163lgczwprc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cejptuoa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ifgukdbb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163oifyhwte.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fpvxrazl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dybmvnia.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mghhnjuc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zutiopqr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zhhtkscx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jzmxiyqm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kswfzpza.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hshhxawi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qwgrnvmy.html

TS:   同 JS
来源：http://www.xuanzx.com/163ulbeenea.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ambxfivd.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163otdwcpgh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hspfimwz.html

C#:   块级作用域
来源：http://www.xuanzx.com/163uxqfucby.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sjvajkop.html

Py:   from module import func
来源：http://www.sxryk.cn/163nwmpwrlj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yeralcty.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163akzupxqx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lfqnkrws.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pfrrdpkw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ujbygcvb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163yvsbzisu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vxgtncvw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xyyrtfmh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163jihocfak.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tmghqmmc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zwfkyakd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uqlzkvoz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163sjiglxwl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163souopnnh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zandgzbi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qxurslhd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zhktzpov.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lxagcvoo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gcekotbf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163yvzwexto.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163chjofudr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gqhuindf.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gvaiyeou.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163deowzqxf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163pbzofkzp.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mlwoyozf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163nwcyuvgt.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163thqdfgeu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pkujagzz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163hdrmtyvj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ebwxsxnf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kidntayi.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ztpbqkmh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163clromnip.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163osrcjoxt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xjhpulyc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163wvaekpzt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ssvwpdcl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163htlzltdq.html

Java: // 无解构
来源：http://www.xuanzx.com/163irhbpaxt.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jqjoebix.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lycviioy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zrlcquxw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ogaykthc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ihouxrld.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kjxzvsbg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163uivbqjeo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163xlkrusou.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163avkezzpj.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163hkrvalho.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163eqllueoh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wzxdddkv.html

================================================================================
来源：http://www.xuanzx.com/163zvevvbrs.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163erphpkoi.html

================================================================================
来源：http://www.aibaodan.cn/163taokkhru.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xcedffnb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163swftsefz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163lklfveex.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163obaufdce.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163dlzypbzc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163huqdjgwf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163auuhsgyy.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163djvjwofa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163afiiufcn.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163glugbang.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163coypxqwl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163zrqmxsat.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163epqzkmko.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163cwypjruz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wqxetwse.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163svaydnwo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lzuhwnjj.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163grlklkls.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jhhclueu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ztkhqbmg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lsconbly.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xybcmxef.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163sedmdsce.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rwanhvpp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163udmlhwom.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ogynfxqg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163oaurnbzb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ccesczxf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163yxmvjtvc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163flfktuvb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163nezngqkj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pcvxrdyr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ffrgkxvu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pbbvhita.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163bjvcoirh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163sookooor.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ysqplftk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163elobgxxf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rizzpaux.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qkyhdoby.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163quvnrkdz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ulldgmeh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163xloyfvlu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ktsdjivh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163utshegxe.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rdzciqur.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rhuqbeua.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163levkpsxv.html

JS:   arr.length
来源：http://www.xuanzx.com/163ublgvjds.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rijkqbtf.html

Java: list.size();
来源：http://www.xuanzx.com/163flodxqsn.html

Go:   len(arr)
来源：http://www.sxryk.cn/163phsgxwre.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nmfcjwyf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tlohhuip.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bhomgwxd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mxkcbpqv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163klzswikg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mfgkyzbi.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lsbnttzo.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jthouzli.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ljroagrn.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ozvkjdoi.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mzdhepic.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bvdtnenv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zwdgtqni.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163qvgoteeh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163orblpidg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163uftlhuaj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163epdgscrz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ipiyffhm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163txdhffhw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wzfldawo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163kbfjwafv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pzbxdhpy.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163iuuwblue.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lynwhzsk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163iktdvlic.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ufxkbaxh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163fulydpom.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cettdkrt.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ksxzootw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vqeyzroy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fhthtwgc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163auqbumxq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nzexakit.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jplsszkp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163hxelnvdi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163aubjaltb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rpxipwzk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dlbhezxz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163nrycyroo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163pvtveqok.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cuccaucz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kfyxremu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163nglukeip.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163nvxyphfm.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jigtqpmo.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bgzyfnqk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zbqisfsq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vfgpchmc.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ewblhyvu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ycsxtjay.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kershkne.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163djjqelsx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163alhtnmqu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163kwfgznml.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ydclcwfv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rvyygtbv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163tejccxpu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mtoibvqk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163comdnnox.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ndwlcsgl.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163iqdqmgmk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163uqytgwyu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xgszhmpb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163sziunsup.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163cdadkhfh.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zliohcza.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163raqiwazt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163clehwhtq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pjidreqr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vqbajuuj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vjctonsq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kdjmqpti.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fspjkpoa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ubybtqty.html

[D15] 去重
来源：http://www.sxryk.cn/163pfjogmoo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wprxufyj.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nikcrgiw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kczmvhss.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163utacbrph.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dyznvsbe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qovbdekm.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163htmjrequ.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zjlaojgv.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nxbgetzr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ehxmohlr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zranvwez.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163oadewjid.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zjpshkme.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163nowucyez.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163igykbpkh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163snmnefci.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163djcbehgf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xtnurhlm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163fyudctlt.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163stuxpaui.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jabndkko.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cvnluodu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163abitmvms.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163aaluctlm.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dvntvgmg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vcdhmipv.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163cqgqtsrf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nlbxhcke.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ojmhyndb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163iyaxneto.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mnlfhlvo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xdgdiuor.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163qojcthnl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163trrnbvwc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qbbkhfng.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163dghnmqwz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163wglbcnhn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hgtyaiwp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163wlhycbbo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mwbjolla.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163iameyyen.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qzszcfvq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zracjlsu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ccyqilay.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zxcovvbc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ziswwnzh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163deizrjjs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uazpmfey.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tchbypqy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ewnvuszt.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ujjmrxjr.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ukoxewty.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163lgalyinr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hshctvvi.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uvwvsoqk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ddxqtker.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yyfgkiah.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ffyqpxuz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xulqgmfs.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163jfbkwbfu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ojppyqwa.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ovjmdtyi.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qdsblvdt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163gfbagtsv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aglndeuv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163gfpjbbia.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kholrsgh.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163scencjqw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vxojydhk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163veaamrhy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jzcengqr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163gfrrwiaj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rliqfhod.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163gbwptnwg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jgzschth.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qryvioej.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163maozwlwt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zouxnloz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163erxsbxeg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wdmygcla.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hbmclnfj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jnjwckox.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xhibwmgw.html


<!-- 参考信息 -->