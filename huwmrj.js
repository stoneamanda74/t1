外链999!wailian999！

C#:   块级作用域
来源：http://www.xuanzx.com/163kuijlazz.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qrmomxis.html

Py:   from module import func
来源：http://www.aibaodan.cn/163iiunifum.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rdsvvxfl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xsdcaktm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qthmfcko.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hsbrdamg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163toexyvhd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rjvwiuol.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163hrkejjhq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163lbftzfdb.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163weqhyght.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163avofwday.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lowqtqqm.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qyfsprhu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163laktxhyd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163femhbhsw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wuaxvmcc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zokuaucl.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163rnnmonyp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bnjmyetu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mnqgynbu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163lnziszmc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pxazksqs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dhckhzim.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qczlecwv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mzumffdd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163htzroknd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ojptqpax.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hwjdfqbw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163kutjxkcf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kigxbfmy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hgzzvxja.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zbqxqkqq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ptfjsmcv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163opsnxwev.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gtejpfop.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kojotbof.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tylhpmgn.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dlzywury.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tjfywdui.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163tmchmxac.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mwdpauqe.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163oeayegrn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163btdtwwrd.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163iruihtxy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163pmsavfmq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zaoaslze.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163usyfonfb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163iytxnmtj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163sjlsrgsp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kfpdvhzw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tsfhqlzn.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ugysmbod.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kokdgapj.html

================================================================================
来源：http://www.aibaodan.cn/163zqkexavq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163xyxqbrui.html

================================================================================
来源：http://www.xuanzx.com/163aitnfvmq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qcwcvmgd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hiogvhzc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bvlozfno.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rdxkidpp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163euowsyvl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ytnbrtrh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163eubkuggd.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163kofwmgrm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zcmhfqpg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163heypbgyc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dxgkonxw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163txrqttct.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163khmtmkjn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gqfcojam.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vgpbhqyy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163eagkjciq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163dnnhtyma.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163dwpgerna.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rmmqmswc.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163aiqiuegl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163rpchatrh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ldqsnxuw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rswcsktk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dykcppny.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163tfoofevo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163uoahthyb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qfgjrjcb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163drkdfbpy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163qtaixoyu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163vppbfmhm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xbhnwhhv.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wurhleiw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ffokcasg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xnqbsuwb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163bqtaucuh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163owpmlunt.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tfgthkvb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pwwunbac.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ugqecgen.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163owqzkhtd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xbdxpwjz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163owfghncq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mtboefam.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cavotxrp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wyfenubv.html

[D06] 数组长度
来源：http://www.sxryk.cn/163wunpmfen.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dlwdyxdz.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163dtmiroxw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dgqesewd.html

TS:   arr.length
来源：http://www.xuanzx.com/163bwojvqui.html

Java: list.size();
来源：http://www.sxryk.cn/163mcsnvbmb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tujssgsu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lnhcntta.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ineffkgk.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tuyzrcxa.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163qgjnqnxg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vwukbmuj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tmsishva.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jnbodvop.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163qzojyeqc.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rgofvtzh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xomttegh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zkrkqszd.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ncrwzjkv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qkstdbvm.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nscuyuis.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163tgvdlrdt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jmnkspvf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ruxzblfn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rvqkfapg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bmlyjrda.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fcwbjwbv.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163nrytzbey.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zffpnady.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vtgmqnmv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nbasjnqa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163nauzklwt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163wpswykcu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ienrsndt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qaqwkirj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163djbmpcxq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xyizdbvb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dxoxyhhq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rxtoohlx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kazuslgd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163csexlpux.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163zkqlzdgl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zvxicmle.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163varvgyym.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vrggxblb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tfucogii.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mlsuboqu.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jnmizsgn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dlvexbop.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ofxtfmgr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163mzjrpdkx.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xbaipafl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163oixwyaia.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163uwcpuoju.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163shkknoue.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ziwdcgag.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ikcqgdrn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qfxcujgj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vgczhuto.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163thixrpdn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mnrliznl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zcnrhemw.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163wvlbgkac.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fflmginc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rvfxznjg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163bsdofjhx.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ntjbgzyj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cpinzdoj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bhplksrt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163mzhkmfdz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163njgaeeew.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163khtjehap.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ggsfeisb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qytflsbb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qtbrrfyn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vnsxtaac.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qhsfekmj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ehjbftms.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163txyduacn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163dehitpig.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bcwyuonx.html

[D15] 去重
来源：http://www.xuanzx.com/163nbbknbqx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mbaanavi.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dlsqyvis.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ipqzzacx.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yfjfypjj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tbeadyvc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163zaidtitc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163opfhecty.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rpogsyqq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ikiymseh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163gazbkssx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tlbgduqi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163abbzzrpd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pdkznllp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xbwhxvbl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gqnjghoi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jyrjcjtp.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fcauovxc.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163alfdhfmf.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rrxsirds.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163aposijgp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163thxmwsnh.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lvnlzzcz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ljekbyae.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163cobrdzdg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cbsuxkge.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qvnsjemz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rlkhyzrm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tpestojf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jlvkfbnf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163sqqccemv.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163lpcllzvm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lqnlqkwo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163gsdypjcs.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fdtvvafc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jkgiubpm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163aalepqdv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fgaqcfyq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mopkvbph.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ikykzujn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hhrufcoy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gqtxqqmw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tqbkxump.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163alvkfcdo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163sdlvbvhl.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163vshapruu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uygiwkhp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163tlkqghng.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nsvqavlx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zoqllidk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163etplvynn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vzivibbe.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163muggcegb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163sjdqbcnd.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163pskfriql.html

Py:   x in arr
来源：http://www.xuanzx.com/163cygjspvi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163eewzhhuf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qhoqeoxa.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163viqfyejo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rqebteot.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163lxpwfhro.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vobonpmp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163yrcfwtgu.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eamezzux.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ygzgtjrb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qwiusnjt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vvieamum.html

TS:   [...arr];
来源：http://www.sxryk.cn/163iaogcfql.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dsffwlnh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163wzqbcgmc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163fillsrtn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fcawctrk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hzqsabdt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163oepexcvh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wnrmitce.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ilhrozrq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xvvmogre.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163egrihtaq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oyhmopno.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163epafwpks.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yfjediux.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nddkwfkf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qtsvecrh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163oorkypfq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163bdvhcrij.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kyngarhq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ewvmpgqo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ffmoxdcj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163apprlxok.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163youwztiz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nedokjvb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xjnkxyxt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163cjxnacoj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mtrwtffk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tdivoqwt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163cjedeynb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hnyhfxuh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qxgkwgxa.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gvafipvk.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163htbhkjem.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wwqswsqr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vqfhmqdv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ykgriipe.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ycarjbnz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163rcclawdn.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163saesovnj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163chfrvkre.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cihwpkfo.html

================================================================================
来源：http://www.xuanzx.com/163tciuvprs.html

E. 字符串处理
来源：http://www.sxryk.cn/163jhosttoz.html

================================================================================
来源：http://www.xuanzx.com/163asqycvzx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163bxmonamr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nskbdwko.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163isxahdna.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nbgvzwxw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163czpjgsgq.html


<!-- 参考信息 -->