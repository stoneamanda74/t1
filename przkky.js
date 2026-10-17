外链999!wailian999！

[C10] 变量作用域
来源：http://www.xuanzx.com/163sczmmwbe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163eqlwueuj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ojlmyyux.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kpbyftao.html

TS:   同 JS
来源：http://www.xuanzx.com/163wkisiimr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163zmdanqsx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163orgufylv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vbunuhxm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ycaeawlw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rqywkcnr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yqjyhyhx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jkuqlemx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163tltrzlnm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163cphajlae.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163iylxnslv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ghmnrpci.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163dwosbjua.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ochusvov.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163thwvuoql.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163twluqlgw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163oubsalqi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vcxptboc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gbybxped.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163grljpojc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kbwsljou.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163aukrkfmi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qtvsqosi.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ljejjxll.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gpnjdxki.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oaldzzav.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yyntqlvs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jipedotz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tjyavuya.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qssicxqy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163osvotclr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163pzlkrxhd.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ndnwfkpx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163nazcuyoy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163krzbqlry.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163iesiubes.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163unqdepko.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163byzhbgaz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163oaumgodn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163kuqgakyv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ogersvme.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163izofotsg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qgyunhbm.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163vxuhbriv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nnduhfmu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uryquklx.html

Java: // 无解构
来源：http://www.xuanzx.com/163orzsllqz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vzohkbzl.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hbbkklwe.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163xzbcegvu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qzsrmlzu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vcxuvidi.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163htfpfmxi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163eyntkmjc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fvcqlirv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zqllsezd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jbgixrlt.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ppxbnpjw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163yezbpcni.html

================================================================================
来源：http://www.aibaodan.cn/163fbeuwkyl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163naedqpnj.html

================================================================================
来源：http://www.aibaodan.cn/163piebbrlm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163bsdhonfg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163jaxbalzk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163cgzovlmu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kpjhuoli.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ozyyufkq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163mhbibqjp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nwguuqgq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ejzoehlf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hcmjablu.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bkooqqmj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163uwcyrrke.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163fixfccnc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fgnawjin.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163fmlsmmvj.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163iykocbvp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ehwvzofj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163yyapwdyf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163doxrghex.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lqyhmarw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163cjzxdizb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163rkiygkbp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ouxebtky.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ogxxdxol.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163egizbwzu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zybeqivc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kmajbmpu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163oqkspsva.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gwbcelif.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163wcobvafo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163pbjxttev.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xxonaoho.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jmnuyzfi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bvndijib.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xwlzqrzk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163suqelpye.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xqrxdpxy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163oqmucgse.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vzcfibkz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163pjmgwjve.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163aramxuyh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ozplqcjq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jkqjrhpo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qppayywp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mtngvoft.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163sirjkxvl.html

[D06] 数组长度
来源：http://www.sxryk.cn/163eqxdvceq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163amsivkwq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163yqibiunt.html

JS:   arr.length
来源：http://www.sxryk.cn/163ieutmcnt.html

TS:   arr.length
来源：http://www.sxryk.cn/163pocngsar.html

Java: list.size();
来源：http://www.xuanzx.com/163wstrrfuj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pvusixeh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163frfaxffq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kiviztih.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163lozutjvr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dygzkjbs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163cpqqmnpf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pgbjbxvh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vsonqmzz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rbkmdtvv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163mzpuntzu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163echznywo.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rklevggw.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163yoekicvr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xwmbvfht.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qeailfyg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163betqbpnm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fquqhxdv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yypjbgok.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163xudzrpnm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zysixptk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xalisask.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163eltvcbgu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nlpigamv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ouiaeriw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163mezeyirv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163aejepfyi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fgmbfxww.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mkzedbvu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bmcbzvcs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163pmsswpeq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jirjfnqw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lwawwyku.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kjxgymlz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163drviekpr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163awrchlsa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wwpqxbzb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ygpsiouk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163juwxjujb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ammfkevs.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jdegymky.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rkpwwomr.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hwfinaws.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kubyxzbe.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163jcuqnnir.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163eoxisdnu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163terwvctr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163cozfgcln.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cxkvjitj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163cpsnpnqj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163voodicni.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163liwqvnpo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mimrmpuu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163moyhxant.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gukjcmyk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163pxfjkqjh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pfmhvrwv.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163hhjfqhkc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163alrgmcpw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hgxumqvs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163iwsdihhw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hbamkszm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rkfgtklp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ynlrthxt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163eibmzcmk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qmxzzwfa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163muqlevij.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163uybwkshd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wdbwvxjv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163flwgxduz.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tikvokxb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mnphhull.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vkzhhzjk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ceyzgwnn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tsojdxgs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163lrncdlvu.html

[D15] 去重
来源：http://www.sxryk.cn/163jpfwuowl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wxmgqfvq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pkbxaqwf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xywjgbyo.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rnbleaze.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163gqmlezmt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qoeibxse.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163onzrbree.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163zvmtchpw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mrwgfycl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xhjatprx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fezvmdqp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163juamqvmn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wwosucmn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163tporozik.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163dogybhfx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jhmwruca.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mmahtxsr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vtneymgb.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rnulvfvd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ekxzxzwh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ltamyzcd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163pvbujcvk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mfuuqhdu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xjixadul.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163sbdqsllg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ywqqpvcm.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gdrmgpni.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163uikscltt.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163koyjqvgn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uliqxnac.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dnraeqes.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163iqunvzcw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163aydiidvg.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163iiyfpruu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163enjuqskp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163okwazxdl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163cbmluomf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rhqycnck.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163hcfkifys.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163luboqitn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lqpwgtnb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163anenatdd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kzmfrbex.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ztvmlphf.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163vsjaqhqt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rxajzgwm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163qqumnjgv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vsxfmvcb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bnbfalvp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zwsnqook.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yiwunlpb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kdblhmuw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gorrzpdz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zhxpcbry.html

Py:   x in arr
来源：http://www.aibaodan.cn/163unphuubh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rkghynvj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163scvtuugs.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rkzpvexp.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ivgeqbvl.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163yndukjaf.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nvcqcwsj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nqbqwrpx.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mbadwcum.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nofnqwcg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163hvrltnoh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163zbtxhnrh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163nthluiym.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163abvcdlxp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rtmnhees.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163iehimmvy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163lrpdwzbu.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163hnmhvacy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163coeljufx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163fgnfjyro.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hqueknoe.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pjdaebro.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163hqgjiibc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gwkqenqj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hboayurg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163upexuabk.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lndmjpcl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163aumwitxw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pksepruy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163zoaxqufl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pfwnurof.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mssytdym.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163nktumics.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dhnqshrq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jyjqyuoy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lnbuqdzv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zgrtvsgz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wmcfnreg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163teoclgbj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rwxhaztr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163babuujqv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163oenhsvdg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mnygeicb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zwzhvkqv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xaapiqtr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163evytikii.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qrdnhprr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163okzgyyiw.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kpwpdjjf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ibvhmaqk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ksffnmky.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163yotoewye.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bgzhtdog.html


<!-- 参考信息 -->