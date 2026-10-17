外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zoqdmmou.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mhgbgoat.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jamrcbka.html

[C09] 递归
来源：http://www.aibaodan.cn/163bksmbbfc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163orwtrwhh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qtmmtpou.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uaasgnfi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aeulwbpa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163drcdzgmh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163yshzhopy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163dcwbhxvw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163lnfjyqwd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tpetndvv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kqlbfplw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163maotfubd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163faezjjor.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dceidrgm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163vuyduujq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163cnxphviu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163pgvbdgxb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gkpkuthv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kwehzhax.html

Py:   from module import func
来源：http://www.xuanzx.com/163xbrxvxee.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163iimabyrl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rgqwgkhy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wcqtmujr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ikrbjkua.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163yvmvzthk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rgjbnjnb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bzecrzqy.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163mvqjeaic.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163bnpzyuox.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163surdljkc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xgbcgdxg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vdrspvry.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163mfirnzny.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163adapbvxs.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163qbmeaeyh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gpxnlzgc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163sswtmqox.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vhjphzzj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uiwkfwls.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163bympbmxu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nrdxqqss.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ldjtzdbw.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xqxzomlk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163oodcswsq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163apszsrxq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pepcuupc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163uvxlipst.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yszzvpry.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163oehrfyov.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163xybvslia.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163azylngyq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163wefslvkb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163axicmzqn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163stszbcae.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163askcaqsr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ztrxgaur.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ozyrxrzn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163anfuchew.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qujplmxj.html

Java: // 无解构
来源：http://www.xuanzx.com/163zhrvrije.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dqrazrme.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wokorjtb.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ljpbdvmw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163idngvmuy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mglatuvz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wwdhklah.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163buzlxcjo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163rilprjfe.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163glkulnzh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163bklohtbn.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bgorpqxv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nhfdihyw.html

================================================================================
来源：http://www.sxryk.cn/163mkzvtqhk.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163obhvwizm.html

================================================================================
来源：http://www.aibaodan.cn/163xzcftapt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mgxswism.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rmghznua.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163tegnqoev.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tdtfesdy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163bmjfczed.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xpauwjku.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163fuzmjcfk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163qzmqsuyr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wrdwoavq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lvusdebk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163rlurhfdi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xdglxlab.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163iugswumw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rbjmucfr.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163xjtopcqu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ocmrrojg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163bgystpjc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xmmzamty.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kpvihbla.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vivfbkjm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163crdmmnfu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163yljpnkvy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ylswsoca.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163wbwxmqwt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ypwblsut.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163dsjfylce.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163incopgjg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163aorichps.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kqyqdsil.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pclwstxr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gtdyxvyp.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163kxferayu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163yrjsqqjg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tbpivjoj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163klhtfjsc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163neimnduw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163adfbsjjf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qqznsfed.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zgblkohv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pdmzbtkg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163yiospkrp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tsryrzxf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kkkozftm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vkqsfxwj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gtrjgota.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rjhxrdyu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163urbgmknh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163byxexxav.html

JS:   arr.length
来源：http://www.aibaodan.cn/163djzlpscl.html

TS:   arr.length
来源：http://www.xuanzx.com/163olvrrkne.html

Java: list.size();
来源：http://www.aibaodan.cn/163mqrhceub.html

Go:   len(arr)
来源：http://www.xuanzx.com/163goarslnt.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163empmawwr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163apzgdhmz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cpwnyavt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dghxjkvc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163goqlghqz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sfezkmkr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mgxlvunw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163teuphbtc.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yfacovxf.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zmasgmfs.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vdouvjpn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jicksjga.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163epctbbdv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163lwnbfnka.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163usevgcii.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jfkbsdwb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163flglrxxe.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ivmgqwbm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vomgobel.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jixutsau.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ojlodpky.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163iwgwyyoq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gnjnjoay.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163lnlxqejs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163hkqowmjz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nzitnibf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nzbtcskg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kfxtobeu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163whmlovbz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kabaijic.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pxwdtext.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rthahilu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iplufdst.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163morodxod.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163msrxwckw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163viopqwku.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163yjffqvet.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rjihkmeu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163hicpzjxs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163yaiywdri.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163emrkixsa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hvqmsehp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rxjfwxvb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ocwubkei.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qegnjhvr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163minjpqhq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vszakqcx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163sbrikobd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163xrveahbg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163yybotcnn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xupqddde.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163glgjwrmx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jelejqbn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jopttfpg.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xpduardx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zhiwssvv.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lntlrguu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163auzlicfc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pseukpfe.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gnkvfilp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ybreeojf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vvrthbcq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cbpskokr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hitpevno.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163kxgdyuzq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163eksqkcje.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163pxxygvqp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mzlnutep.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vmvihubt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zclexevs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nysrxhen.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mkpqzchi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rfancizx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163wongzjks.html

[D15] 去重
来源：http://www.xuanzx.com/163odagmorv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qmotusqt.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ppiqceoe.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dihctirb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mraicibm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vshoeqdd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mfklcpbm.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yqohscrn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163urangtyt.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163banoaegh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163mykdodle.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163hjqcsira.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lbisnmrr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163iqhstbnw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ineaxhpk.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163yifepjdx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163slbpfphv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163aepjdbqw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163urvmksjx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lkpxdwbh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rodirgaf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pramqfrc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ofabjqpl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163guezqigd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rtcgrqfv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lcixivob.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qiziycvr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163okeeyqeg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tanayntq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ijqrsroi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163anqhuues.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uxfmqhxr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cekxepji.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tdlxybav.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163gwuobmum.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163yxfaocat.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163aiskphly.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163matdodlu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ntdvidys.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dhlaoscg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fbxlspat.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mlwnrknc.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163atnbadcx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rtrjshyb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wwlqmytv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163knchupzd.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rgnowjnx.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ppdeuyvy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ciinyndn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uplssvnm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xhnppspv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tsyvcpnh.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ugwoarsz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163kkdjeosz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163bccobdkl.html

Py:   x in arr
来源：http://www.sxryk.cn/163qirdkemo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163aiojtcej.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163sjrvtqmg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163livjcszz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163inbmosap.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163laclcqib.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tdzjexeo.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mvdhcknw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cjdzswzk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163abyoanbc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nasrytbn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163enjefryu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xobazhdk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163oaycuaga.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lxjyguso.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163dauzvldj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163kllkitvz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lbbuztag.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jlcbiiqh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163udvjuwbq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hfatnsdn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163amgeonbl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qmheilvb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qxqbmtnx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163emwbumat.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yvmtejbz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163fpzqsnqq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dkfithkm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pgbmaaut.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qgyypebo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ypocdrcn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163iixrkviu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vywksmaz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163olwnkjgc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zseqeizz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jdxhbkyv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kdazhvnw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dseednmu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163xsqmhgbc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wvqialom.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ldeujbve.html


<!-- 参考信息 -->