外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zertmkjy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qbpfrnik.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163losjgbpb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uauiuhpa.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yllxnkqd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163kerahjjt.html

[C08] 闭包
来源：http://www.xuanzx.com/163dqyorxnz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xfocuctz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163atzwospq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lzupzyxq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zjovhomn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sgojtpqm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163brhnbmhh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pgqwhwgi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dganxdhz.html

[C09] 递归
来源：http://www.xuanzx.com/163juettcnh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wyuvrtwj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zahndpaj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163sxfdvrqx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163sxavfxtf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nzbsqbil.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rstfwgsn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163krryxqac.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163paeqmcav.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vbjovayo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163mushueau.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kubbxoma.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163iyywknhe.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kmuzdgbk.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ltndfvlb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vnrypdva.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uuuercvc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vgbzsacw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163hfikwats.html

Py:   from module import func
来源：http://www.xuanzx.com/163wjxaelwg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gqsilwuc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163otqcrgus.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xdxribge.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163viwshrgx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zurqpwpp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163dfwbetdx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ltepmgra.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wpfoxehu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163opunebii.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qshpctla.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wpyvzmdd.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163myeafhwg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fefjlfte.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163elytxcad.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163gjajazyw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163nrzzesib.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vbqjwagg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jhspziuv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163utwodseq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ndmprgbs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qofpvujp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uxosvsva.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rzkjqakd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ooliuxah.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163drorhlcq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163zkzolhzr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ilfpokmc.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ubcachkz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tuqtbjrn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163maywekpr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163yimaetfk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163pkhgfghs.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163yzknemny.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ltouewuv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163thwoykef.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xzjgwwtd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163jelhdqai.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cssiifgk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ulenybkq.html

Java: // 无解构
来源：http://www.xuanzx.com/163gcepxrrd.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vfphufcl.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163cwhemoqh.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gvypkbzm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163edojauqo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163umsgwgts.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ixobthny.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vlxfmait.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163xijsckvy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gaamitrq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mdhdnanr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163xvlojcph.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kieeqrru.html

================================================================================
来源：http://www.aibaodan.cn/163eyvaatqt.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163morlwakv.html

================================================================================
来源：http://www.xuanzx.com/163uwloakxa.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163tkrngblf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163sobwotmj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gzkbziww.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bmzycmrh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ajppavzy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kfkqoptd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mzxdkcwq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163asgwcsdg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163liqsntqe.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163pruimvkh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163yuizjrxz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jntlfxep.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lgrtroyv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jgriaxcm.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rmwtbmua.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163cdpbcwyd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163cwedlyoj.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hwposayb.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tkrmbydu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ksazrmxf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qzgauzwy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163krvtrllv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163blycacit.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fzshawdz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163sarwqokw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vysqiwpc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163cmyfxfyz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ngghrqhv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ewxjukmh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tatbycts.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xywzjqvg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ittqsbjj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ktwmjhlp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163yehkyqbk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vwdbmwem.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hldkwxkf.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163yxzkguin.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qzfexhzw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bsvzblos.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bjvgsjki.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oyxeimqu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163peczpetm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wwmzsmsk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jyjkdsis.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163esoswpcy.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vogcszfy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163oazqkyzb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163usfyglhc.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lmdptevq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163glskpsmh.html

Java: list.size();
来源：http://www.sxryk.cn/163timxsecv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163swoozfqi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163muwlvtrb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vtbclctb.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163gqxgawws.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163inikqblu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163lyptdtyj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vutmynfi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lizdpscb.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163gymofnll.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ipbdzfks.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hwxwrqix.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ilnrbktr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ekwpecgt.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yeiktjax.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nulqumbs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nkcifofk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yhoyjwpu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ynzlihrr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jmptghlp.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163lnvgemrw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cmgvgnfg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fppbirju.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zjhhuebc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163icosygeh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163soozsnfk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wifzgpnh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nqolekml.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163fhazggyb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gxlcuzpb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xftixixs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zlkrbcjs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ylovxguv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dsonzzwz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163stizrsaa.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vowgmjnn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163juuhbyku.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mhxgvyek.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ziddystr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mkrozyjq.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mdcvcsxw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xrdveigy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jujzbkhq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kozqkcwq.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163vaabxber.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jztjnamw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zrlqtsfc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kqbomhcy.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fccbtxui.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163mcdhbsvr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qinprbjq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163bpdkmbyq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rbanvtbw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iyeucebk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nqzpolbl.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163qrjtapnn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oapmvrtp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ekgltuih.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163kvtrcfjd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163eulopshq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163omxnahtu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ddxxdolf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ublrhfnu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ifllwppa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163rpbpfyti.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163nuofeizf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hebmjufe.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163osirwptn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dlekcvke.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gqelvjlr.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163myhtgwoq.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163puhskpkp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rpnwqdqt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cqtrvbtg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163uxtamtiy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163sowslbcj.html

[D15] 去重
来源：http://www.sxryk.cn/163ygomtukv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bgfzczxx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163mxjaxhwv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fjkjxnjk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kddsvcka.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163touyaqqj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163pmvvuhss.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lnzycrmh.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gehvezzx.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163sgimsfvi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163aibxxion.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163nwuzhwgk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163phezvfty.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gchlflwv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wlmrpexb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nstthgac.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163nbwxqals.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163yunojlls.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zijeukdf.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qyxjgylr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ahdctyzj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lparrgzy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163azuagkwj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163iskedbof.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mqfhyldk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163twvvwjaf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hqazldhp.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163nvnehihr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163sbthmfyc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wjpxcrsa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ddneknff.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163yeivxrcu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nlqjxijc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bkfgfqjf.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163gsfmntfq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cwoajubo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163skdngzja.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fnixheqv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163yecpxqaj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mdouypug.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eelnyhwp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zjmgldcs.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163asnebyrg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gtavlthq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qmlbmewc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jrhzgzic.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163pjjbwamp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vbepzesf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bmwtkqhc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cqzoglgu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zixjaltt.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bdlaiuhn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163oavhvnxs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163yfplwhon.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mpsgndwm.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jergnxkc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163sbboykjw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wkqhrgbf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163oerfxdny.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ghbihvto.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163imvaxvwc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163iybyrijw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163iucsawot.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163upbtpwlb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ysdgzhrf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163stqzraez.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vofyvzqx.html

TS:   [...arr];
来源：http://www.xuanzx.com/163vwkolott.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163noguvwyf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163agusdwxk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gpoyvgkv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qglcopvv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zfxnozpv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163unzzzffc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163xwvjfuzf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mrfzfjos.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dqvopogp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fyxzcytr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fnamgstv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qzsklxab.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163dfwyxsdn.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ejswoijq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wtthfcey.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hyewqpzg.html


<!-- 参考信息 -->