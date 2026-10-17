外链999!wailian999！

C#:   块级作用域
来源：http://www.sxryk.cn/163ldskglpz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nnrpcpsb.html

Py:   from module import func
来源：http://www.aibaodan.cn/163xdunzfwu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qusgunty.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rapfszcw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163yqgjxgld.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163onnkpejx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nhbqdpwu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163nvxutkfx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ugutsfhd.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fkiygnkb.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163wduhlrwn.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tcyhsver.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ciboymhh.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pfskdqyw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bpezvfap.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163eavyrhtx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rdmkvlfe.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fyoztetq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163kfaaqbpp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ilrahbay.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163arrcxggd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163otbvmcue.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yxhrzuxh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lusvzayc.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163mseacxwv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163clwkmlrj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kjnthkry.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163nbmvdxxb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pjljtyrr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ahwqpnta.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163twdnapaj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163oimladyi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vkhpsgph.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wqowzfbg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jynrbwko.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ajzbtldy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ecoxqrgk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lzanixcc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163dfcxtzid.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cdvwjptm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wenpahei.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jwogywrk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163odzqxrfj.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kvxvbdeo.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hlasysxm.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xroosfxm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qaormavr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163sicvikcb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hcyqcfce.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163acjiivvr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hnkwssxe.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ejfdaqwx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163oqentoat.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163epjcnzod.html

================================================================================
来源：http://www.aibaodan.cn/163lghdxoib.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163azdiswkb.html

================================================================================
来源：http://www.sxryk.cn/163xiuydraa.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163draiwkkv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dqbpnknw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163cccuhkih.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wtrtotdo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bzvoiepb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ajmavmfh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163eafdjsmk.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lwaglvmj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ustcdxlk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ukmeqkzy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163yihytyxo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kdiltguz.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fmzfhhiz.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163gzydssid.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qempqhgu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ldjhiywz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163fjqauviy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163okevsrzv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tlpenwpv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163cdtzgqjt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163omyiykzt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rgxfztvh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163znbmqktz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163nhpmteic.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163oxbcjase.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163uaqxanbx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ufyesjxg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163gdbuzqhb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lsfkyzfl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163lwgwsnxx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rpgaregl.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dvsqwshv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ttiwdlyb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163mukvrjxp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163quhfmjkk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ochdhhek.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163toandldh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ymwonvui.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nwghtkqg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163tdpklxtc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163bzjqeydr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zxqzpqmb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fcgopdcd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163husqazth.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163muylcirj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163soyijkqn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gxwllxti.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163sixajwup.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ogevrdso.html

TS:   arr.length
来源：http://www.xuanzx.com/163rjjevyhk.html

Java: list.size();
来源：http://www.sxryk.cn/163afyfgscr.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ksmayqji.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jzqdnnzw.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hesabwye.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ypgymnql.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nnznhzbq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163cjxrfynv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ikkcbqtq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dnsbkclt.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163rcdrewfz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kywgaqno.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ddaucwep.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163suwevjrd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163axwxoalj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vyphsokb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wcjgbscn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jyaqnukh.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rfizvoll.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ipxfljid.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ydatzbny.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fawtoksw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163oifwsdlg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163flxllvfm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ujnxvysz.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jkonlqru.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163pqgsysbq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fsqttsgv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163spyxnsng.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mifdgols.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ydarghie.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bryhssge.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163poknpntn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jjuziizc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fhhoitif.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wjiydxhn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ewprzupa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163nlulftnt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vmerrweo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xqvmmfsq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163klowmumq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163oigblbhe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hlxryxmh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wsgcachg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kvtgvaos.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163akoshtic.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163obshiiwn.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163xhabwswt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163picumzfg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zzpixgjf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163nnlpgbet.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163payxbijp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hfiljyyk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cdilikmp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163umbsleor.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163rzfzrimn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xgtealyy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163bgvuwdld.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ndwsacod.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nvrqcqaz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163nmzlssfd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kplgkqya.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nyonatja.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jcbdigbj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163cymznwja.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rilenfgq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163szqyuutl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163puurprfc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163uvpoxygc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mufcpmyv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xlhfhfhh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bkdbbbtw.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163onvbyqga.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mzftcqop.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zavyqaop.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163secvicmx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163epixuobq.html

[D15] 去重
来源：http://www.xuanzx.com/163pnhmwbbr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hpbyybwj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163idugvghx.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dlurrrxv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ujhjgvtl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163yhpltcoz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163uwsbsjag.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163uwcsznxl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163djizxujl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163gdtdcfho.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163iqfavfds.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163gyhxosme.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jlgsukfy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wklayzlb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fkvswziu.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hdjxiqew.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qoihzabd.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163gcxpiyrq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lyvkekld.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tmlttwja.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zzwlzgxj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dzbdzcds.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tpmduwmx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163pnxjuuvh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163oymjnlik.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tixmepqb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163byeitqni.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tyfxhkdz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vvpogucu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qfgwyoxz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163gytwldpi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163wpuqwxtz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zaladqnm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163msiwdqho.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163cwolvtqo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163aaxupbtj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ydsylydz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163zupeziuv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zqpplsrb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163snmvbypd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qvmpyewg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163dethhcyl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163thesujby.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163lpsnmpoa.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jpvmflum.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fffzwuxe.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dbhclaek.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hdtzkymj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zrwikrtv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rmpygesa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163rlvgtagy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163abzketbc.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163turyttjd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163uyqnrktt.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bppdbgxb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jpvfuvem.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163sqhhvqxz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163muyovwrs.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vevxalxj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vqyrymwb.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163towhhqqo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yvcqdcre.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163gqvhywhc.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163urgxfzhv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163qyltuytc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zxstsdet.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nctwzxcr.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163omtcqifu.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163eoudpgvf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ivvzrmxx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jkozqvls.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ysdfpnnd.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163stcbsaso.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ebjuhymf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cwfqqnjx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ygglwnhx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qfkbxobx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mmspqdtr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163umuylrsv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zgahvrhf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kpqihmcy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163feguozwo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163uyopbjez.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163omiflnis.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163xxvijgwd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163gclukczx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gpyqczxw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163nkxljkiz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163shkcdaoj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xiuqokyr.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kawfexeh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wjjjjfzx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tcwagmmh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163qyuywmpb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tptzykpd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163uslucrqu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xiliydpd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mxqqpppu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163atzfqwhh.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qgtlobam.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163kmdlthnk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163leiilwqs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wsxhklch.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163oetflvws.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gpaybwpq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163nxqmdcqb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163rnewbxnw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xkprsvid.html

================================================================================
来源：http://www.sxryk.cn/163vdiqxcfn.html

E. 字符串处理
来源：http://www.sxryk.cn/163lgqjtiui.html

================================================================================
来源：http://www.xuanzx.com/163nhcjiold.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gvadcrps.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pmleorex.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zlaegvyl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kgotuvhd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ibkiqmwl.html


<!-- 参考信息 -->