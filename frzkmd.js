外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cghtjwia.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163udcyhcgj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zqxopech.html

[C09] 递归
来源：http://www.xuanzx.com/163acjjqjpd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163eeqbluug.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163cxlskzjf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uqumjauz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163upyfoovd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lrmghsol.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ecbwuwbj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zqmprevs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163jmnkylky.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bkjkapvx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163cfslmmss.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ntkafznw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163eomibklb.html

TS:   同 JS
来源：http://www.sxryk.cn/163yiifvikh.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ryniaqvk.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163uwnmyuqq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ldgffgke.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qjpoqbiq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ucudoumm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163krihdkti.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wsgudctt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dzcchkqo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163fkwwxvqh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ymypdxgl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163umbovirn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163iaowmjyc.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dkfnmneo.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163agcasuth.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pheqpphs.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gvwqafix.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nxuljmgw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qzwfjdue.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hxbzbwtm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rdjncmda.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dcezyqsi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163worahnio.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163majmjleo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ttkbauox.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qkpywkqb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ausxewlw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ojaieulq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hehmohtq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163maupxhcr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163zxzuvdbs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163muknvdmp.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163koryhelc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yqjqkqom.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fvzxtnzk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163znlhtcun.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163mfpdhmly.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163abetdype.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163knxvkkmd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163iqxeyeej.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163yypkpsft.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163axvfnhul.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163sxtsujyt.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163bfxbntfa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ubsxqmat.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163upuhccse.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lmpvuiul.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ukkqzkkj.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wamapgzn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ljyjvvui.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163cuuyjqqe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fbifmdam.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163uwgqwquq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ryldpahv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163eppcpdas.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bifwcwaj.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rfmnjuhq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163fqqvqwem.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nvhswbxa.html

================================================================================
来源：http://www.aibaodan.cn/163flkzemdn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dgdqzsux.html

================================================================================
来源：http://www.sxryk.cn/163madaykou.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163sncjlwxs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sjptkdhx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wawbjwma.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vsijecld.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163krpdvqbp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fhzazhwc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tryhbgjl.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163sdgdmudc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163iukvspme.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163yewwktef.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mfbtxlnx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xfkpgnkl.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vbfkekka.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163spbyuliu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163oranotgu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fromqven.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163oxfzlekg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163rqakvaqd.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163eaaizevj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lxtctyjd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163aldyqdgw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hairvapu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163chtyhsqd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qdvnpdss.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163bfapbjmd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163serkbbzq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163pebtgmvg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ppfnqyxy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mawrroim.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eziqrtgz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ujuqxkqw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rxkmwdag.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163tizwsnig.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163irfxlgmu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163slxwaluy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zklqotek.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163kihykxpb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lzonaxah.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163sehnwlrg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163eilmzpxs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163kmjmaglp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163oxishaka.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163aewncbup.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dqswtenm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163tpeowdwb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163judgettn.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hbhdxeen.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rjcivsnc.html

JS:   arr.length
来源：http://www.sxryk.cn/163mjfdljyf.html

TS:   arr.length
来源：http://www.sxryk.cn/163buxwzevc.html

Java: list.size();
来源：http://www.sxryk.cn/163sesimdle.html

Go:   len(arr)
来源：http://www.xuanzx.com/163agrzyagx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jawhotxl.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vniuufli.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cadgnktp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163holqokch.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vzmrfoqq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163alvgciia.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wzrfrcbn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163vvvkersg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ncrguysz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163kqfewgtv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163imsksvid.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jmfjqrnc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163mzbnwmdh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163aebojuex.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163uwtxojyy.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cdaomtrs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163vzdshcsq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163cthmcgit.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163iysdpjxo.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jtcikbxp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163unifdhmd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163octcjhwk.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hftxlzda.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163czvvghrf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163zdorrvvy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163nckpvovu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163osobgwnc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163crldfehh.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ldwcllge.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kxrxxjne.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rzwqhwjt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163likfytbl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pogjbhcq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163baqlejuz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163kmxxyjko.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163qkxxaooh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hkbdgkvs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163sportfci.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rbwulhaz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163oauzfakh.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ccfebzqo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163pcdtyaih.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ikrjcwwg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lzmwsolx.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ddgwimte.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163onaslkap.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163pvwmmahf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qaafqyyv.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163zniflpkg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163sefpvhtr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hdkcqefo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jpzmidxg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163azcmadsb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163otdeyvnr.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163rmpmqzqk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xicwpsar.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zhjmeind.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ynewdwzs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163txvipgeb.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qjetubpx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sqdukpir.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163jypvalra.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163wsfbqncd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dbmdcrrn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163sclgljbw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163sfzfbfpa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yoyxtgdh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163nyaeblsx.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ytlqpgvo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pvkruqef.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dlkyxrqw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oadxwxnk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dwlhbgln.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jzysczou.html

[D15] 去重
来源：http://www.xuanzx.com/163wsuyprrg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wxjagycv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ekfuoobz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dbqoypdc.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tuyfbnmc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163smcrciie.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163yheqkkxa.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163frryuzjx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tjowsyzq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163okaozwiy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163izcylwkg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zzvufpef.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kskxscta.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163slezqhpv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163mdnddrtb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163tacwzisl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xozswdsp.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163horjflkm.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ibmboeht.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163shtsnisx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163quvttpmu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163oejfwxen.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dmeejsev.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fitnrzoo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ffwfvybb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163najpfhkc.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163oezqhvgm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xhxojqrw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fdpvodpq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163szvobgca.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qbuhhbdz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dyfynmwt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tyxjlmsa.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ljwdraut.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jtpbikup.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mpxxvazu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163sbqzwrlf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cxqirixz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ymbcvini.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rlrfqxqy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163owelkcsp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tkowjrhg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163fclgrtyc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163iasygzih.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163izhkpzbr.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163gqeklgam.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hutdzdco.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dxubszfq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ujppqcrq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wfkiapny.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163jmzftrjz.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163lepmqjhm.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gfoscptn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163eekvzfot.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163eyxsvdry.html

Py:   x in arr
来源：http://www.xuanzx.com/163cclxvbke.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163dfpevpqf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qyjypchh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163moqcyubn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ymgepryz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ewycbrgy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163pfxjnfkj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163nbrftzch.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163iikqtnhd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163knorvbnq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tpodqjpy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lxxqddwz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hkgxgeqb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jushjgff.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pntykaqn.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xfjiyfia.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163mylvehsd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163mbbbhsby.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hnlmufha.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163reqhyzca.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163iuaijbbu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163amohhtvr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163uazxdutk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hfstlxer.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163etbqnhfr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163nkxrvucy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163whburqgj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163afvnjmni.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163kzohksfx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163tqpnsaxj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163coklrvzx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163hzusfqov.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vrkatxcm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163pkxgxjnd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vuxjokmx.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163puqrtneb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163hcbfdpjz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ljffbict.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kumtmaus.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163imvtekzv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163orfexihp.html


<!-- 参考信息 -->