外链999!wailian999！

TS:   同 JS
来源：http://www.xuanzx.com/163oisclqkz.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ivbtmaud.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tpcximar.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163muqwrvjn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ltrajvir.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qwwhnwkn.html

Py:   from module import func
来源：http://www.sxryk.cn/163yjxofbmp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qkkjsfsf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qmwhhiqh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163skcvtzli.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163rmztzgic.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dhkzbkwx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zjznvhml.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ttcqorvw.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163onmagnfk.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163goglguje.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zntkodid.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wcrkenjs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rrytxrxi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nsqpuvwv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163havkhjzc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mkavblqm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hzxsqmog.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ivqeehhw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163vepxxfvp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kquluylb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163grseuato.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fjiebpwu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xjgiluta.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163uikjrjfi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ruejpjom.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163upbauaae.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rrzajcnn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hbsxwpjx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163cwiqsvij.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163zhbjbzdq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ttpkmpua.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hbvfiuch.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163djocfcry.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nhkzwtjm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ecamxjqe.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zkoliwph.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lxitbibq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163vppnnrsm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163obmatckh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jalimxhm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163umpoezht.html

Go:   // 无解构
来源：http://www.xuanzx.com/163tttldamq.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163pztqnzlz.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163dgzepdgj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163krcmxlkm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163sxinibck.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163aisxeoax.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ybbulcmd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nkagouya.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tdkdeuyy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ziopdtax.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ztkiwpgt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163egxkngyr.html

================================================================================
来源：http://www.aibaodan.cn/163luiazpga.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163urjknfhf.html

================================================================================
来源：http://www.sxryk.cn/163kwtdzohv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ynayoikq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jhxfaznk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qargpbds.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163cvlsysbd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163drhkqpzi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163yoywrmrw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163pscwqurs.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ylpbhhfg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163urvdvvvd.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163vgyrzcil.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163jixlctuy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rzjndrbc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qonjkzkb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163avkstepz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163uzdbzivd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163uwjnrzca.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163icqbcqmf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163jnxldxny.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bqsqpkft.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hcvnagvw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163edhujdww.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vmaanmjy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163xutjuqmm.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163whjbslog.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163klzzacdk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qyvzkirk.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163wqsxvqut.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yofagusc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xkidjlvi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cezvvcia.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163csgxapvq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rsfcbwct.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163krqycwlm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vrctcyho.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nndnaxnk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jolgkoas.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163bnanefkp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163iqvorjrn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mkgptcwd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gdxxjyci.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163smfjzshi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163rdpqfwgc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163oppzpxyf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vzoigske.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vjxocsjc.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rxwwpwby.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jjkmswpp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163clqbblga.html

JS:   arr.length
来源：http://www.aibaodan.cn/163nnckbfvg.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hvdzseya.html

Java: list.size();
来源：http://www.sxryk.cn/163gzgznuuv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163csduitmv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pzdcrouq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163aueqppnd.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163yyhujotc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163btxmmcnz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163tpvbsmda.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lmguyaov.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163foyedxtq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rjcpfgpi.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163irdcukul.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mrerovjd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163cdvixpyt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vkcyjjcf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163amlhnhgc.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163copjpzvv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163fqwxfrpd.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rfdpjait.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163sxqswynh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163egfzacsu.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ufybdvua.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tvdatshd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xcafgotm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gxjvtfjj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zpuxyazc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hvtjjsna.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lnjmtqtm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ampvynip.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dkmsbkhh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mmnwgkyk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163emihjpzp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163tpreuhxd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163duposqnn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mdqgbndn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163acgdwgev.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ehnjxwmv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xmmgevjz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163yvjztdfm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163uvlsjhqn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163iohxtayv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163cceepmdf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163pmhhveah.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qsuooxyd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hljzprau.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163umlrgywh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ciyjmrmb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163gggqdagf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163outcsoqv.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rsbswzxi.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ookncojj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xqnauagb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vfnywlzi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vsdpqqgr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163auluzzhm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163rodgboyp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163awqqqmtf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xqezuvgi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163usltvafn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jxryvhyg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mbyzibvg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lyorcvfe.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iwutpoqs.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163buonpbcy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lepqrgkh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163umlspheg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vfzvitff.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qyttmsak.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163houkonvx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dnxufczu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163bllkhrsq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mfvafzeo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ysrdiadd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vqavhfov.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163szgeyzua.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163annncfnd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zwxzhcwa.html

[D15] 去重
来源：http://www.sxryk.cn/163ufkbifrf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dzyzjhym.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mddxofue.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fewkjvwy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163myrkrvjx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163aqszwjfx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163luykkhrn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163upechydu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fmomupuu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jnjdkyev.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163pdbznxxv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bztwngmf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163npxbpmbe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ytvevhqa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163zioazcrz.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163yckixqmb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fgoujece.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163xmtfkhtf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163olrmrpqq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vmeiqxxm.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163owenewsb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163priuosyy.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kqcsjzaz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yoqwadbj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163erminzmu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163oqyolysz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wowpuaqr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163sifndljp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zfjrtbtr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dcefvuay.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kfchvwcc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163iueleeof.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kcwdmhla.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163dypkxaky.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tftfxlmv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ysqjsmfw.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nfbikzap.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pkhnkqlf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163dpeestnh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163lmzhludl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yptbtbkp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163bgidpwxs.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163aurtmtcn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pdnvlbck.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hivhlygf.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163bdtawxmh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163auwjepmv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163oekfqmzk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rgwailyj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gxnwzsyh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zeuocxdn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163fuaofwwl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163xwkujlvf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ugqrcghc.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163gnrdirtt.html

Py:   x in arr
来源：http://www.aibaodan.cn/163snvgwvsn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zwigmpuq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ldnizzsw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rtbugory.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rlpmjycu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163fxhvalyf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gnvvgjuq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ajezunhc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163nfqgmgev.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163gcgpaqwu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ubcpbdlo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yscwzvba.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qxfgxuun.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yvfzingx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163cjmiqdrc.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wihjrtel.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163effzrkil.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163fflwctmh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163shuejmfn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hbqjpmcb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gkqbgijv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dmhldqwq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nytvmcqv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oswddyum.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163doumruqy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vujrdtek.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fzlqhdjf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vttqsjli.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163asnpnsjv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zidbtjne.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163kftyaobs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163pejxtren.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163yaabqeic.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163oqbgwzlw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ituidyir.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163suhrohhk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jvjxkrri.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tjhlbjzq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163suvpxygg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163blkmhugd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163lyhtjpku.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163acupeote.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ortyqzlj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163yrpwkuzq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ghzhzals.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163oyhljvzp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163wpgjoiyp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jbmmpots.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kgkoylcg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jddoxogb.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163igijtatg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163viwgldxp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163efchuzgb.html

================================================================================
来源：http://www.sxryk.cn/163dkgdzobx.html

E. 字符串处理
来源：http://www.sxryk.cn/163pienffwm.html

================================================================================
来源：http://www.xuanzx.com/163wfmaryso.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wdieduxi.html


<!-- 参考信息 -->