外链999!wailian999！

[C10] 变量作用域
来源：http://www.xuanzx.com/163otumtaul.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rxngcpmt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163npfkqcnb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nxlizxvf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yqsjggja.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163uzlalmst.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163wtsuwtyd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jvzcryrn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163gnhvxsht.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tbsjbhhb.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fyvibkhv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ffkprewm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ulugffvq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163blukyotr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hnbfwrog.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lazkhymz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163hmrccjol.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sdpzetwq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wvxamfpx.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tnilgnme.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163jzjqlktl.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eiuhrvaq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163oszxxbrk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163lalesrmn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163euwqmwbi.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jfzbuquu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163hawssugs.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rgxyvyrm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163qyvgicdk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jwogfocl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163uzyeqioi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ykwghqqd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163najptcyd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163swmswscp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hhzroapy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163djakewwu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wydbuvex.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163wbleijhh.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163wqlgnycz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163izvacxbg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ofeqkuui.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pbjabgiv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163hdbpxdkb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163phjhsjai.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163raqsrofv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163nlyvnufr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zllcjhiq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hxuzkqgd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ojoeyehp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163revftlrm.html

Java: // 无解构
来源：http://www.xuanzx.com/163atwzdpvq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163azydqjdg.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xdpmepdj.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xoioxbmn.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163bwxizvue.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163byprqayl.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tkhaqmho.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163eoazptuq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163pscfavut.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163svzeaczx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qhetccmx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ntdlxpfk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dtimhqpu.html

================================================================================
来源：http://www.xuanzx.com/163mnhqqmob.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163yibewqmo.html

================================================================================
来源：http://www.xuanzx.com/163bfeapghf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163uoaatuhp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163vkskfzml.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vdnpgbmi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163azbhudhy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ceqahwkl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163tlzswugr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163fddhsmck.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qbazjpss.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zzztokdb.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tpmnzqhu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pulfphxc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163rmfbaihh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163cnvxlsqs.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163phjuqxcm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163djujmqcs.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pjtxanoc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pubimdcl.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163knzsfuen.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163gdwkxbup.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163twxaqpme.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lnjqxxlz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ffovwhwf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163tyacjhle.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ivjvbvud.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163jbobgfwt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163sucbbshv.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163yvriarlz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kktsxspr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163lldqphkc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qomchjlj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163zfiwqjfx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163clazmecp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jwdznfib.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vrxnptbb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163relhptkv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163fclmvkjs.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qlghthah.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ltmxvabq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163qemrtyie.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163indrewnc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bdhqziey.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rqhjvavn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mctqrnna.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163oyepjgfv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163fderxwpp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vywozvoe.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163onoeamqt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163krmbhajx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163iwvucwqm.html

TS:   arr.length
来源：http://www.xuanzx.com/163dnpxnvds.html

Java: list.size();
来源：http://www.xuanzx.com/163hyaguqgl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zhrxzntg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163satqnkui.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163cillwkkc.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163eeuvxcee.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hxamajwv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wryrsycv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163eewmwmng.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jwusprxu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163weclhhme.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zpckgxig.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xfoypbus.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163cjqhcugh.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163zapqpnjz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163dpmojklq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163yvgqwaih.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rxiqttpr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163cdtakcxp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163zemfdcnh.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vaitqgfu.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ldoyiwuu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mwtpsiww.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ldxoinft.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163eqfzgnxt.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wtufjcfk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nqqcxfrt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163benpwyvo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rhkwrbfd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ebdxatxv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jvjndchn.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ovdgqaoe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kpqxfxic.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163nvwuyyds.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rzwaziuy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eifqxfiu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qlhpjvyz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rnlqesnu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163plkwwpmp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qsvzioyn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nkixnmaw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163pustaoph.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ypbivapv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qyukxned.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vitgpbmi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fdkcrloe.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mkylduex.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mgnccinj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jzltjivn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163eecqcaec.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xkqoukmi.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tiieacwk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qlohtbed.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lwcqjvyd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xqesbfca.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163lxdzsthl.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163wmtcctkg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pqirtoba.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tqwpxmrx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cxgginqa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163yuclyjot.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ogvhmftc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tmobcrag.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ohlqwksl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163sdyleezl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dxjafrcq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163mvrshjej.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163fvrfxyxw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163enzhzykn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cwzqvnuf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163pxcowqbx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pzvdrwhx.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iqgmqrth.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ccyvvkjg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tdblndaz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163utejybva.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qmqyljxk.html

[D15] 去重
来源：http://www.aibaodan.cn/163bsqzivon.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fnxwzbwv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pogpdecc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pmgkwmma.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gqpzovmg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cxmdipdw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vxfofhqp.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163axlfaahe.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mfbaanzq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163tonibhnn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163iwvkeavj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163sapqwgld.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zqeqrqhf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rffsnlye.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pyjhlivw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gyhkfzev.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163isidmapy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ifoiantp.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nhhwvabs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163acmeujnu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yvkzcqjn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mliwnfwf.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163mtnvrhsh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pnizkxwi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163thhajywt.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163aeqjwpkb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163pvxrqpln.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163efhpntfx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163dxdcrybh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vcwccwvq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163zkjtnodq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gclafzjc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ngzbqjwv.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vvpgzdpl.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hjgyhjdc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hhoznvxg.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rcrbydvv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163iphpqlyd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ilfiqvkm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kbgglnlh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163famddgya.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163cyirhgiu.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163zzgtlcbr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qgtmirtm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ayhfrpvt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rghcgxkm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xqkpwmqq.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163gmbnyteh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mxvbqsid.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163udrkeuge.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163exhparwc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163icmighob.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163jsbvgndh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pazsxnlm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hapdddhc.html

Py:   x in arr
来源：http://www.aibaodan.cn/163tmqlgxti.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qkfcfebd.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163zpzirvjz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dcbinzsg.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163oymgzrxx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mbknyzuu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bbcbmoqs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nkppatgm.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163acpbljbd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gwgzcwvv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vdxovwza.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163lshupouj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163szxmqgat.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ewgpopgv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163czxiyvxs.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163nkyitzjp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163amitfkig.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163herspnao.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jnqbidpn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ysgnrvfx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dnrfrdth.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hnlbsrmi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163lriresma.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163msuivsdi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163vgqahzoh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cvdcooau.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163itnmbzqb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163jkjobnuy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kthlaysw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zyixqdmg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163coeupojp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163pimjeoda.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xahdjjqp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hkvbfutc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163mmsfdkfz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jmwqockc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uyzbehiw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163guuefjzc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cjxbrhfz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mzybqtys.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163eksckewy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vwtjxbmj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pmsrymui.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ubnfzigg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163mbxerrxb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xmmauurs.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163lovjfsbj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gecdyldg.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163sycbcpqq.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qehkssvy.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163qcmapntk.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163gqlxkkvm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dnztksrq.html


<!-- 参考信息 -->