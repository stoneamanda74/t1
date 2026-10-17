外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pjjqjopz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xnijuojh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163atkzulcd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vaprpybm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yqcyecdt.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zhxayeiq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ijtgvpvt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163sizgnjfi.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ogsmluoc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lnlwrwct.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vxrchavz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163obahkhqx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qyesglcp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163spkmxobh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tnptqujf.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163cngdzdwn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gqcfeska.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163echnfoqk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163rybwkcaw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vfukfdmz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zdqiiubo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dcpumufu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nthiohsp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bnbhgwzi.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163nppimfck.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163mgrdeejd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rlewqpwz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163acfjvhni.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hkewfvse.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163avbyvokq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163cvzpbhtx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163luaetyji.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uqsboopv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qwqdloxu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163deojzgpp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163icyeujyk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xopskutw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dpadvfmr.html

Java: // 无解构
来源：http://www.sxryk.cn/163scpreqep.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mlpauumw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zztjqzoy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jlihytfe.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fogyvruv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wcsnpbnj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163safgoeuz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163dqrsygda.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jhyrvaiu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163euswcezk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ypwzlzdn.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rehgdpuj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163efblfcoa.html

================================================================================
来源：http://www.xuanzx.com/163dvkvefxe.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dpxyapon.html

================================================================================
来源：http://www.sxryk.cn/163rsybzsyy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cdulowrw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ovhnhtlj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nddtmzoj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wtevhrmh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mnvuvlbh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163pbccpzvc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163oodawbbn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yrlpzler.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163kclesdmf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163vjnbrzxj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163aeomvldl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163rcjbcnns.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163uyvlnwyq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ykpflafl.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hxqpvbac.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lndpqvgi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ozobzvvw.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ulgbwngl.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nycpbnsw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vyhqtyma.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163tgnbgyid.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lxltowbm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163feavydjm.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bcohjqud.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jduniioc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nvuwfypw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ldesmrfy.html

[D04] 删除元素
来源：http://www.xuanzx.com/163oivptyze.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163uxjqseiy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163bxjgzahq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163yvwoaktz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163uejxauko.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163rzuqytkm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163fbzclnhm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jljkwzyx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163geoccypo.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ntbriqpn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jqsgtoyo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163rlomdxfi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163llhatess.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163mhuctmrl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qeyfivbw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jxhqjqoa.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163iufrokom.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163uqkqpkmx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fjllwkez.html

Py:   len(arr)
来源：http://www.sxryk.cn/163izqifike.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163drcrlfsm.html

JS:   arr.length
来源：http://www.xuanzx.com/163hmynsypw.html

TS:   arr.length
来源：http://www.sxryk.cn/163zubbzyjl.html

Java: list.size();
来源：http://www.aibaodan.cn/163iouqtqbj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yzgimhvd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lzehahjs.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163xxdxruqk.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kjgxkqij.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xjfqhlwd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ywhbcvwd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iyijabrb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yrdgymzb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163mxjcxeob.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dbhxqcwc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fvqequsj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hbojdhkf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163mrgomxmy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163kolnmsew.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ebbonfgw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ubcfxepl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dcsyqroi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163cnantezc.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163botwyqia.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163igavfqxj.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pomjeoug.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163oibwdpen.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tlkdvkdf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163tbszblpw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163actmlbjv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163igwxfwaq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dzojkhdf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163tvprcour.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gcnbsnkh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xcumrkjr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fehdkjfx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ofbsutyy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kvbvqnkw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cwcbczgz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yupoiymy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163crwcwokr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ddpnyuhe.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qgnbpwpp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mdqgppgp.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qpsnwufw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rdqjncqw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163elzziztt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163gxpxolqe.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fuiyypuv.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wqxciuqz.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163nbjgdkqw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ltadttbm.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cntupjrc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xfghottf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163wrdptriq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kixudqeo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163txsqkcut.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vfzicvno.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163gwmtdyjv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xzclqhmn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163yalbbiyz.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lgdcboim.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163geykuybg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163rwpkauos.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163irgfkggw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ixlcybhy.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vdaxzsfv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jcfanazd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ocbvucfj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ijpwyepq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wfgxrtub.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ddzmcpsy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xcqujxnd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163bdjyvcby.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iuyxvoqn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fhnfwqic.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tsoembxx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163urfmyxlt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163clbdfhwx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163bksrrxtm.html

[D15] 去重
来源：http://www.sxryk.cn/163uvtwjrlo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nbjlboer.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gyiufisg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fkfgbcjz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ygcmeaaw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163eybcrtyj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cjbdsngl.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163eksbsgvr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gqjzldlj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163tfcnpuod.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163oqahcwse.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163gmdmbvxf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163oulfrsdy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vwxmcies.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163phwgimmn.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163uxopnsqm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163wkmckfic.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mfxqjzar.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zljaatvn.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163mydceeyx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fzjkjsyp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dncsgtbm.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wvqkosum.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163aclyyzxa.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163apkcuphx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163lykpgwnq.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xefuidkl.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163rcumlsvg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nkvddsxv.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163dwthuddb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uazlrmnl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163pygdjoxz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163crbuoslr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163rjddkmzw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nhysrjaz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jtjgwtka.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gqbwdqyd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163gdbisfoz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163btmyucmd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jjjynmpp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163wdqdmisj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zlqxfsoo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ceeefqjm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163cjktzegi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ruflgofp.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163utpdxhkm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163lgkebzhm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163rufmhwfs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ivwiaxgl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cmovkyat.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163doqlcllq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163tlkrjhoc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qgremasx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gbyxohcq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wblbywrl.html

Py:   x in arr
来源：http://www.sxryk.cn/163lumnapip.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zqtekvtr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163kecjpllv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163pgbcbyti.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kyhwkqvp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vvtrcsct.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163cmyopdut.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ghjshtmt.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163uwshbtoo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163merqzibd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163dkkzluyd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nbyezviy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163fbihjtpe.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163cuhxhqrk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163iikoxzaj.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163efcdatyj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ebecuwcj.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163corrgdyq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163uhydfzcu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bruokisd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wdfffzji.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ijwaiooo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rckjtzla.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vcyhfrag.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163nbeplfud.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fsyewsjy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163yagigoux.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tjbwvihu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qvhiemhr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163bjqiaupl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163asdgrznr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dpvqkdln.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ooobmpcw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xbgtkmxd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jcandbdv.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163kwvguqgz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hgydgpxn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wwvxymqk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163gyzupqpc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163dcpoqtys.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dasgvmdd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163htnqbsfa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ndbkroxq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163suvcsrsc.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163oqplenfe.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ijeuwxek.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163narrtaft.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zxymrvtd.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bzchstvd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163tekbgwsj.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jopxivix.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yccgtpve.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163llrmkzkq.html

================================================================================
来源：http://www.aibaodan.cn/163zpwubvuc.html

E. 字符串处理
来源：http://www.sxryk.cn/163xqdigxam.html

================================================================================
来源：http://www.aibaodan.cn/163ymeybzvm.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163uyvfdrhe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163teuibhrz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nqalexgj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jkkfwhmr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163axvveprp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163eeymwnqc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163owrbqchn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gimbtrdh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163slhctqba.html


<!-- 参考信息 -->