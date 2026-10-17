外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163pbfovkse.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qzevzyhc.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wdienzsp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kvqljbxv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qkqrnauu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163aiwfzjma.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163okxlcgto.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ztbgwipi.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163shicajvb.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cjiynpli.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163sfkpnsgn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nqnqxolt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163izavtqgn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vtopqzur.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rpytsiwh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nsiixglq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pwfjojiv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163iqflcyfc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xhdrrdxy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163alimcvqo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163blmlkawb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rrragvgf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kzwietmt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163clkyayan.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mvbbvser.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ocksbsim.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bmtmyeuk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vfawbbja.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pjrcobsb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163eqtshyvj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qxgnfuan.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fbjtwtjd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163iguovwwu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163szgdakdo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gedwaehx.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tnpufxft.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163cvstftdp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ayedxdnx.html

Java: // 无解构
来源：http://www.xuanzx.com/163zexpfoxp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163zbjgzftl.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qwytdvqs.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163blcgrsgq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163lfqdzesu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mmstqwif.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dmahwbhy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jpczmejk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163rjnzmcun.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jjsmfoyu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tvjkxwcr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dujnozsh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ftnpduyh.html

================================================================================
来源：http://www.xuanzx.com/163ochhmcuz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vhjtvdsb.html

================================================================================
来源：http://www.sxryk.cn/163dfffaowu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mahmulno.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gnkzokar.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wfofdhxb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rzawuwdx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mfcsrdmd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163yufxhibf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163huvxjofs.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163shyfginc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tpyrkcpo.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ipwfbhaf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ccxqlnxm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163sqhinivu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tcepjfvv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gbkorqnx.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ysxbpjev.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sfhcpcbd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163aiwasecl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163rkjdbdtr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163azxqmuva.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163kieiwhbq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nnsuorps.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163sstasvbg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rgodxjts.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163xpkceeyp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163bpvkvkcd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163orhutcxn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vzbjrcft.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vbjsutju.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gimpsppp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hpnnhmpq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163sfuaizjf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eazobmcn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pyqfqttl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pskphuif.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gledspqf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tqdlghcd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163byudwyux.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vhkygscr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163luzfyhbh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wjkgwppi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163izkisvnq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mjhdbzzh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163aitdzski.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163oznaazvx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xskanzrf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163yneursfd.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jciylhhp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ffpteaqh.html

JS:   arr.length
来源：http://www.xuanzx.com/163kqqgnryr.html

TS:   arr.length
来源：http://www.sxryk.cn/163islosakk.html

Java: list.size();
来源：http://www.aibaodan.cn/163shwphsqy.html

Go:   len(arr)
来源：http://www.sxryk.cn/163laaytdjk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ncypemxl.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rtsilrev.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ggxbboar.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kfrljcwk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pizxjtii.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ugeyisnz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163brlhxkgw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xvrjzybw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lmrtoerr.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xtgnvvjv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163liosdeoc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163uhkrtvyp.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163oblgrbnt.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gwkmqgzq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vhphflua.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hmggujeu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ppsypnlk.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163cnkdwlen.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wnrzoaua.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163lmpronsd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ongydzzn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gjrquruy.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ekxkxjrg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163eekwvrli.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163eeerehbs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163haqcvpov.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bqzekupa.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wtoyvywz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163csxlafyk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163esurtxli.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163bwsmmrmc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kmubtmdj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xnfonquh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bitcvbgk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qegebjzw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mqqfvenz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dccpukfx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qaawadcw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163fnenipcs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163bwdtzamc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kdrwumjr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163flbrpdic.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163scinxdke.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163egwxuvil.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163kueiqror.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163njnmosgt.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vvefbpjr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163kkriwgvi.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qtfkeytd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dckqdiha.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mxuyovuh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ycnzvcab.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nopzeamh.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163bzdurmju.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163smdevvxm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gdraiefj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pawnzfab.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nxllycng.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ncbxzrbg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xhmtopzm.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163zczcpyue.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nboeojaz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qdfqfcpc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163yftmrwxb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163nszfkrqt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fhpghzgm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163pryippas.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yilzmkol.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vvdkjefg.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jxrdsmue.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kpidyxpo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vxdurggk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wdsmbmyi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xyyregyv.html

[D15] 去重
来源：http://www.xuanzx.com/163wttmzaky.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yzaoaxxs.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ummivpes.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ryrqbioy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163edvnkcjt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163eozipntj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wvbsnlhj.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xdkvvhjj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kquqrpff.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163kiihnbgx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wtafvfff.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163analmuxy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vxqhkrge.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jtfzosuq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163kkxvmpvu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cscyrlgk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163shyylguj.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163oepxyfpv.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163yohipopz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163epcaorla.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gwwnbway.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163agmeydmb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163vubvtype.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dxhcmhts.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ztssooor.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ppbwknxp.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163evyectou.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bzeqmrji.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163adpnbrdt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163unosezbd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qymxsuzj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163bleadpgl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163agdnikow.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163boojgbog.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bzenctkw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163nbjxgcty.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wybyrywy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vdgtwgxo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163efwpykwb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mqhimowi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163oqsfihiq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vmrplqlu.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163kgirgyfg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163upivmwam.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163iswrwrqy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ckwscjvh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163eshpdbwq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cszofjve.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kijeagrw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uktnrdlr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xawqqjoi.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pszfdmgi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wpmfimyv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163heumlprw.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ylbczdsd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lrhgmywz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ntwcmegs.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xgzfalnw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163pikpuame.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lfnugeuj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wqptbdru.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wglacdrw.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163porhogzt.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163oeizukgv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hfspllih.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vkbpdoof.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163izegzybo.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qjvelkyl.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ujtteeub.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ypfdehao.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gzhinfxs.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nfgmhkul.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vqkdlftb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163svlicaew.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ugvwpsmm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jmdpjivg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vykqwadb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kbojmsjw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lragjxla.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163gsqdaeto.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163svnnzsjy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ghfxviji.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lxqqlman.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qquhmjsg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mlloutus.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pniborrf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tvpgztku.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hagstwsu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gnameinv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gkptsvfp.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163umbrycei.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163amvyrpjz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tsqgdsax.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163oefbaoaq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163mrvylmxn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163tbrbanrj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tpnrjcxa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163dwugtgnr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163yvgkweqp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163npeksvpo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fxgduvun.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ajuucete.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163nxasmtan.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mmweoskv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163isjdtbfx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163payudqqc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hmepcpsr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163helscisf.html

================================================================================
来源：http://www.sxryk.cn/163vdpcmxik.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ayzpzuro.html

================================================================================
来源：http://www.xuanzx.com/163kezcvjxi.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163yfvcdaeu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163cwtjaxvh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163gkkbqqxl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163csdndrpv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163afjoktkx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bswnhilm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163gynixvfs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163yofhtycr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163dpvdzqlr.html


<!-- 参考信息 -->