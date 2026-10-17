外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xsyxdvyy.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rfihnbev.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wdbgxenv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cxbtpymq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163hgxnxvfp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nvwztazm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cvhbtoir.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ivobrpsl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ulihuwld.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163iiwugwva.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kziuhrmw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vyvwfxaj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zdoqydrj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vfaxeqhk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gnyrwjmu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zpqjruow.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jcgkdwvz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163kzzfxaga.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nbkhxglu.html

[C09] 递归
来源：http://www.xuanzx.com/163xbiuhmvj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ztlivmzz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pywialmf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wuvifoyb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ognpaqfu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163uqobtllq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lzbszkrh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163axnjdujg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163huxhpfhy.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ckygpsuc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qtmqxqjz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163uolrdwpp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163lzcxwqht.html

TS:   同 JS
来源：http://www.sxryk.cn/163ywdworrg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163mjzyxukw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bqzdlbby.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163krrgtpbj.html

C#:   块级作用域
来源：http://www.sxryk.cn/163amwstakb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nogrponp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wewcrcsy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jancbtjh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wpwvihcb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163rgkiekqw.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163oiqxdqqw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xtelpenz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163bzhrrgul.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163yqhumyaq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mnlmbawp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kaivbglr.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163btmfzpej.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gtyzwyqw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ttwurgos.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fyrbmkqu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163cplalgki.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jertjtyg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zjoxfduf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pdfcrmvj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163paiipevm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wggxvhbf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zawxlfsq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mzecjhdy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kgvljiob.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163kjvovnjw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163nrdpitct.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ijmxbbxt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163sglqemyu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zdvupyea.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tzumuasr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gcoivnka.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pbhphlem.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wdbyekfu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kpxxuwor.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bohssfhx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ihjjwxwa.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163atquejfn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cfcpzwaf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163glurapnv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ltdpbdpe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163pnthgppf.html

Java: // 无解构
来源：http://www.xuanzx.com/163zhsorjxj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cxvgfyzz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bqmtvyny.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163kzefphdf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fvfcyvgy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163zovdlssd.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163yaantopk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163fzgszfvt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163pepkyfif.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163rbbjrivl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163utiolkpy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hghvgtfk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vghwxchw.html

================================================================================
来源：http://www.aibaodan.cn/163thqirhie.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163symudqnw.html

================================================================================
来源：http://www.aibaodan.cn/163eidtuddr.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163pcuxgmms.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nhtyqykg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163odjuiere.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vhzdqowh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163cikrlqcr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wknrqrzs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163kxmxbica.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163gokojskw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163fumlxeea.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163sxkcunjw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163aayngtga.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qhwybqmo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163cnjylqlw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fmvcjrjy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mmcllycf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qvkogxej.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mjlrnspt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163axpputul.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163pwctywrv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163itrmcuaj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163tqcmwlst.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sjplnvrh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hugbktcd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rvmnkrjd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bqwbxzoo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jdjccleq.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fvjltwgw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mtwkmipt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163sqdfguoe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163aabdsqew.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163npwkulav.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163fdhcwnte.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jnetwqze.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qxfridxe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qcoyiccq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bexmdwkk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vndqzhaz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qowxssyf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cogekcpf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163maglqudb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163mphaxtvs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rvsjewlo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163riluylen.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ziofdljt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wlsfsdlm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zbxtvdbl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163qokigddd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163uxhreofu.html

JS:   arr.length
来源：http://www.xuanzx.com/163zptlaytx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fvlykuyv.html

Java: list.size();
来源：http://www.xuanzx.com/163vichxcrf.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zanabzni.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mthughyh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163noibuzcp.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163fyidrrlv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163wjaployh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163guwdakmh.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163adpmobao.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lzwpihsi.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163prqrfrom.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163nvfmtpzl.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163dfcliwtq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tladahgo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163outhzkuf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163uumojrxj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163akjilxjp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163csjvlhjy.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rmmjlsxh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jrelvqad.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zjlzmrjk.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163pdvuvzou.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kkagrfjs.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zzgjoari.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qmiephah.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jrxgdyov.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163qxhwjfpj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dllplyrs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qrpyucbw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wepqnkbn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163opajxefq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xobmzwsh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fzvxdxnr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163sphqkoud.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vdmrhbex.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lpntuaqp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zqkkzjin.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163twpxxevm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jprkaxwc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bmtnyxpw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iynyurab.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ljwkomjw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163tplruxxs.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163lelqulxa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hcohqhri.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163otebdfck.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rqbpcfli.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163spwpimtk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mhrrwxrz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kncaqaxf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163bblupfwr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kspxwluo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163fxlvpbtm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163erhfikhl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rbfvciqe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vvnodroo.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sihnxrwo.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xmnvjqiv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ksaqmpwc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tcpleive.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163nhwhxseg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wutmdfgv.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ibtluoun.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163brcphlsx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163pmelavek.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163sjwubuza.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qyjqtzqp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163spmjnijw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hiyrcqjw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zwdgfroo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rduucxeo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163axstcwwo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rswpkcfw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163gfzbsrll.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bsmfpmhf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xhvwqlqv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vrxnfott.html

[D15] 去重
来源：http://www.sxryk.cn/163zhksktsf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mkvqosmm.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dlnwuzar.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163aoqjvwqn.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mjbuvcfn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163oqiitotj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mtaubzin.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vlkebebl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163rrujnjzg.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163iklxhoui.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zgyknzbw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163nxbhvdui.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rveiiidg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yrccgung.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163awyltvsd.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ckjpzump.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163hlclpqwh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dkifwapd.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mzfmxzjt.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163akayjyuo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163clxmfgvk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fezilcao.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ojflzmld.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hhyucfwc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tnvxngri.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cvqxcpwf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jozvbmyg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jgpgwrvi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hoyyikuz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vmuymlin.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ggcvaejn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163fbgavxet.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163fzucnovj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163eofwnhsc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163aqnwrsvs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tedumigk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163mbmbyxsy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ppgjdkma.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163slyzhxan.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163whxuusxv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163svsroumd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163edzbftzt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163kvlmvcjy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hixvpjuh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163vvsvkbda.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zxdrrpes.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163oaidimyw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163guhwqaoc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eghrnyns.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163seroqufx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163chjnmijx.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163puuoibrf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163odgeywyh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ipyhlogb.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163osmorjcc.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jbxecapd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163tgsyoemc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163nophausn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163uvcxejpe.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kgfdnshl.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zispjqux.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jyjiutyq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uqcjqsxr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tbdscjpb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gnfrxufo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163inramvfp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163crgqvjvz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hhzcfvva.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163mhcsdupl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zfkwtidg.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163uzmsakng.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163eadkevhm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163kyulldiu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163sarecuee.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wqoopwer.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sjjmibhm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jfhgojwj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mqxexhov.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163orkywtux.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ptrtzgkd.html


<!-- 参考信息 -->