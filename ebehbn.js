外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163abboffdc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163emqwuckf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163owizxomf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163epncwsjp.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dpxudyzn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163firjrfkn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163zpkleodb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ymmtwgmr.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xjlwpnyw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hfhgdojt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qqxkjotq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163oeyhwmqn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fqethwje.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163axjyuuib.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dyrypnlj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163csbxxbro.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rfsppawk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163bcfieass.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163blgkhczj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xwpzvxxh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163oncwjinh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163sglurszd.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fazclwyx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163breuxgzo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hhezqdof.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163omkgrsfd.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nwxneizf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wupoyhek.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qfaeabls.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163frsyycnb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163smwlebob.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jtbyaxcd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xbiwmzcn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gheblhtn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163knepkyim.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pdjkkhzq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xunynjul.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163lhayvwoj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gdyavhzj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fghllsrm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163zgescmko.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163slqualai.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xhikcoqx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163hqsrmzzo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163asmofdxx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163sftoqcwf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iohlwhpc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sjlgfadu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163emhdelao.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zabbycnq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163eboqcynz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gzmmvywm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ecnqqaqc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ajzfhmgv.html

Java: // 无解构
来源：http://www.xuanzx.com/163goygcyvc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ymayxfps.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jklccekb.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jdyqjafo.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163kerrurfp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163cljkjqac.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lntafmqr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wcqcfjcg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163iawqaahh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tbhylpqq.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jddztbch.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mvkxmiiz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163vctsnwmg.html

================================================================================
来源：http://www.aibaodan.cn/163qzoqbngd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ebjclrgp.html

================================================================================
来源：http://www.sxryk.cn/163plxytaxl.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ogsblkgm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cpjdsqcg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vpbrbjua.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mluzdhzs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163sisdprsa.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lrvmunaj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163daaeaifa.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ddtcrjdm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wtggsbij.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163grbbiikj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ukpivpwx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bvcnprni.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aagikxfc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163exaoawus.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cqdxtfpg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163gwhiezmp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163jdyilmio.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163brhbfjsj.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163sznnzlzu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163sshjpnsx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163iquofuum.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cntmortq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163hxghnbah.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163syxykcvu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qelkyvoh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163clujmbqg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163hbvwedfl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163gnkfywhm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163yuuuyniu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163vfshchlj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lxnzosoa.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163mllsusoy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ntwknizp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kxuuednh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vptbrxkb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163izugjssi.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163rqesfeix.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mwzzhwtk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bfgnqtvw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ytfevrxx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163uogunepj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163aqcpplen.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163cnxnocos.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yrnmizye.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wbmjrgud.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163obtmwjks.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pwbiggos.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163jxwagciz.html

JS:   arr.length
来源：http://www.sxryk.cn/163axlstqnl.html

TS:   arr.length
来源：http://www.aibaodan.cn/163lxoyzfsi.html

Java: list.size();
来源：http://www.sxryk.cn/163cmnmudok.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jvtxceia.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163agvjqsgi.html

C#:   list.Count;
来源：http://www.sxryk.cn/163riehlike.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xinvyrel.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vqxbmrsq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163svapodho.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hmxcdllj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wpvjdjxe.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rjtjcgfm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163frlgcpge.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ygoozizk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vmhcxsgf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163htlsgwmp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163riczbbaj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qboopuhf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163drjylban.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xmxzqjdw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lixlswpb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163uxsuttxh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163oszypoeg.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163eoyrrlxa.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ocftbfob.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hxgfwylm.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163rqmvzpbq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wtynlqwz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nteieexs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163afhdazqf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163rghgarey.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qlsdnwtu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163thcnpiyi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163bqwwkyjw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dxqixwko.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163iksebaig.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ovvybulm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wqplsnli.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xgccraix.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gjuaznsj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bkjcovih.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163snryavpo.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mrnwkpcr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kvlpfcpa.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kiyrsoqq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nzvvfskp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zbgnlzmi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ctzjbuvn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163umazebkq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163cabmpkbq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163lymeufxn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163onfqghzv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dhlxbdqk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vtewlvhg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rtqvlati.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rykjkdud.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163fctmwoir.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163pbzbdjyg.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ujmamkaz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qumstsnk.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163lfuxnncu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163fyxktczr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kkokmmsb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cqwnlcmk.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ilcvrchq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163iydnqfsp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ymlthocp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vdcrmfaf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ioqmunuf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zkgirebt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163sleqracu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163tvlgpvfg.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mlnjprnx.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ojyrsits.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163wkmnxust.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hoeoymxf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pqjoptjm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nqonmdwl.html

[D15] 去重
来源：http://www.aibaodan.cn/163tdzillzj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bgoegark.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163preiyesd.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bpffrucq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zubfitdn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ulygszcv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163sqaijerq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vpmrxwpm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163elwmgoli.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163deoxflou.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163iqcvfxbc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163sbapsaxd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hqaeints.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163uxhklcsb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163hnjdfnjb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bmvsthkr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163exvjwufn.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163iluooymu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163fivpgtkb.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mochagbu.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163qfefgpla.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163kpixbrva.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ggldivvl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jovjdwfu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wkjnentg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xiycghdi.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163fwspubtv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163knbkozsu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ltqcmmbu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cyunydjk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163vgdoosgk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qaufjwxr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pschpblw.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163rqmbkrsn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vnavwqwa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163trddgtkk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163tuhltkzk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163gxqsbdam.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cflwoogl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163nhxcdcko.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163onjxnwvy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dyvagekl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163lcfuyynj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tlbijiri.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163eyoyegvi.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rrnxlujs.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ypszzguf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jpsjaufy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163skpvudao.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xycpakxn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hcyzponj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pdpponum.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vswgfxii.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vxhsqicf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zfohbjip.html

Py:   x in arr
来源：http://www.xuanzx.com/163uwjcdyth.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qeryprtz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gddedpfh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163edofxywd.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hczgcsew.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163iibcywbj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hgnbchfz.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163echbyjgh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vsxbhtxv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163kwgjxsdy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ihlmkmst.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lmwjbwrr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163noktvuxg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ogrqderf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hxafzsvu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163lcnftgbi.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163joutzurd.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dhuednuf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kibucpnz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wutxelcb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pagmzczy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ehhvyeol.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163lhpwhbye.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ugzkpqxk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163lsxbreln.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hqdsxyoo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jbdaqbrq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hclfsaoo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163avknlmws.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163vcdjndry.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nxxionau.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163kzvggitm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ltlkhkda.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gvbwjxcs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163sbqyuags.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ziqynjmz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163jkkfikwv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nizethxp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163tfzlrjjg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163cpqqrkov.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163pahtfoqo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yvqyammp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ghqayaxb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163grbipqvt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uxtgukao.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163umefapgx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ibalzvrb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163yqjyopby.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hyzcgaoy.html


<!-- 参考信息 -->