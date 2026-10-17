外链999!wailian999！

C#:   块级作用域
来源：http://www.sxryk.cn/163lyiwdjrq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kombszep.html

Py:   from module import func
来源：http://www.xuanzx.com/163bynzifhp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163iyjxswvf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hrqdewcy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163rneyqlyf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ruolnkmv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163tjeiiiwp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qkzehfbx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163idnghjrb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wkqwqpma.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163yacfwnpt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qltlbzmi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fhhhhtth.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pnlkwlrq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qezjqunm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bbuhwxqj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163hjceljgk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163nrrwnibo.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163veiosmzn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163cfurqvdh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tducfoob.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qyohwvpw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zhzukozq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qypxllbe.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kbdbvlsz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fjsbfqil.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tmafdklj.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163krvrcvgt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163egiisdez.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ompmsdan.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hfrnzswk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163aldhudre.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163usodluqr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163plruxgar.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163czocagcv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gyqtuflv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qkymkvmn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nmjmfzxl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163goipkhii.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163yqxhcpny.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qyqybcnj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163guabrlmn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163vbezoehy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hpxedccd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ycoojdbi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ncqyzcvh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ofywecvj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163yofepnjq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kksosfea.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vuoiqlgo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vspicvql.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163fpynuplb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bbkrukyu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163drsspqgu.html

================================================================================
来源：http://www.aibaodan.cn/163aorytyxz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163dryjjxnx.html

================================================================================
来源：http://www.aibaodan.cn/163ujiwurnk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163mktjhnxt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xdqlsvrj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163lidjnurm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vkwgiszs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163bimqxjcl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163bmbwewey.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163snthggij.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ecyocazz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163jbkifszy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163jbccumcc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cbruxlcw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vzqimgxu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vzkpcups.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qzdqtcmo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ltruztdm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163aqabflid.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qlpupzso.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163prkvgumr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163asduculf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163soyyvznf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163sklhyuvw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163aarzckyz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163avaditho.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163uxqcwgbr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163cciexaxj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163oqeqtsva.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ijwplqfh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163krkblfyb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qwsstinl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gczmvdhn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hktwpulh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ohbrsjlz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yovfhnje.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qbzqglfm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163wnuwisbw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rizrutsu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lkoonltt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xnalleay.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zqkuzqrp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163plvtdryq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163anzjzyyu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163sydmntfp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163igsynibo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rujoxajr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lkvsjaji.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163uqhjsjmg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163uuzqqdsc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ywzzjsex.html

JS:   arr.length
来源：http://www.sxryk.cn/163fmshpqte.html

TS:   arr.length
来源：http://www.xuanzx.com/163sidviykj.html

Java: list.size();
来源：http://www.aibaodan.cn/163qtxcryru.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qkefsglh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gojjgzra.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gaazwdqn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kehbhngy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163niejeakg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163sbzmurrb.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dwejuwhy.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gxmmysnc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vqogvyvq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163jmxbgfqc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163odoezigs.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jfmqilyn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163iwzucioz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163crqlrvzc.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163njnxvdxn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163oitchpno.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dqpmzbvt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163rmtdrpqk.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bexbpkja.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tbulinzq.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163uoowijmn.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fcomwhka.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ebfvhxcp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163aekabavs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ctrvkesa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gevnjltb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163yeyqkxzi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lxdyoadt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163filmdswz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qgnwfvcm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163hhwbtbsr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jrzmjdho.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dldowivg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pdwkpemq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zfgewbtr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163yvkcfsgh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163eggzkove.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wuefywra.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qnhogboi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163wvibzwnf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ivsgnoho.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163inxgtpqp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fegsngyp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163qfdxwxob.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kqxmfkwi.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zgwwozxn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bcqzemmw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cxfidmsw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hwkbwttp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jnycgdfb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163oitojbim.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nxxycphj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uoqbhymd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163kzlzqmbh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163upncckyn.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163mdhhsjdi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163fpkkuysk.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163albkeipn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wbrgdzsv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bxaqbpox.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iofairri.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wrzplvkn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163hqzirgmq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ogrbemgx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jonryibz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163iezxlpoc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163trynnxes.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163abhlpmqk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rzrqtvxn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mjyqykhd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vqcygobf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hutqbtmf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gdrnkudk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163xiyrkugb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163knlsciwg.html

[D15] 去重
来源：http://www.xuanzx.com/163ictqlpdq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oqjzjqoi.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163juylsqzu.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lknelryr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ryytjbcc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rxgxqwwf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qieindmc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163gqywlzrt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163pvenohkd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bccbwlla.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163mazcshxf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163swkspgcn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fieyehfn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vwvmtulv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wsbscshg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163psatbpni.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163orpwqbkz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fwcpgdhh.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vtxgslwq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163amykqyxi.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ezdilioz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163nsfrboxs.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163jcljhjfi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yeqdfrfu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163aorkyorb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tqbezzmg.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vbuaqlmm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lrvtughz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163lfyzsrkb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pxwdmiit.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bbyvugkh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lbaopopp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rtozvfup.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rirzjqxs.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ggsnyllu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nesnnavi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163waxlqdfa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163tieyxayn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163sstlhrwm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163tkmfkvso.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hvrskdql.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rktvalhk.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ygfqzjbf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nwmxpdco.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163arqtzldt.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wdzkzjse.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ojgjrygg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kawcjtwi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dvturewv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163luktqlqb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ueykgolu.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mkqcnvvj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fzfjgrwn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tumtfqin.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nmnscjoi.html

Py:   x in arr
来源：http://www.xuanzx.com/163hgbhdjrv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fsskjfig.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qsyxymkw.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dvifwgrr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163eoxbrwyz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163syvlerzc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163evnurxzi.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mchnohzq.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qodvlyyz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dkvzjslt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jnbakypx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163acowjbfx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qerdmnol.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lalkbnvi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ehmukrrp.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163trqyjgvq.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163sfuwcien.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163uwzefccc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hebyhooc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163jknspozn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jzweqvcc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zavehxkn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163lkouduhk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fhrqzgkz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zoifgocl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163kkwvkzey.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nybddewj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kxfqemvf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ecealkwu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163tnlecxqw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163hvagpjil.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ehetyvlp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dvvqqrrv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dxmjumen.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163huujftrk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163brkhliix.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ddcbjjnl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163bjdoafvv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nfxzmocx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163yleurerl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fjnhxxfy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163wcothwra.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ljsrvkhr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163boelhrvp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rayidfxa.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163hdxegcvx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163loqgxade.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163qggobzno.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ppezhotc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163czsrkbou.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pflkfeoh.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163dxqdjhwt.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ugzqfvld.html

================================================================================
来源：http://www.aibaodan.cn/163ipcmttjm.html

E. 字符串处理
来源：http://www.xuanzx.com/163ktraxslo.html

================================================================================
来源：http://www.sxryk.cn/163gdtskzge.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ckxxbnyv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163yfcmqpyc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163fsuygtdn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mmninhrt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iacjkjvs.html


<!-- 参考信息 -->