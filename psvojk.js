外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xpycskwa.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vdgufahk.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163idhmhudv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163plwukabt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163shrnovtg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rhpvomyc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rfdkophy.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163itffwlhe.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163metwnfdy.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dgtgxyki.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oenmjvgv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nqylcirz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bqaphwll.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vcvlendd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163toeeqetp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163dtpbkatv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xuqkonfl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163svygxbln.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163djzuvnwt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rgzffaeg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163orszwzov.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163vpbabgxm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dbtbvujj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163wvbwtykd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163icsdirpv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jpljyejf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jsvwmvlw.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163wqdxmrac.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163edjtwtok.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xovozwjc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163iablfmfx.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163icxssbpl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163wbxvfeul.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yebskdvz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163mfvhctbp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163crfvjqge.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hkopijfv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kbhunpym.html

Java: // 无解构
来源：http://www.sxryk.cn/163qptppjpz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163syezvsbn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nyrflymn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gqcrixqi.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dhdcastr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nlyadorl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163etczmdcd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ateryspm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nvbcuyyy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163earcydsk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163boxwtcyp.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163rzblxveu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163lxtfkepq.html

================================================================================
来源：http://www.aibaodan.cn/163xzbixtnx.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ptxyejfp.html

================================================================================
来源：http://www.aibaodan.cn/163kguoeuvu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163gfwfprli.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163fknoalei.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qigepxoy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kwzsxvlq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tknrmhlu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ihnykoqc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163yjtxniud.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yjgalthq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163eygycagd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163zqchmtts.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wtydvmjr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163hknrluyv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163iscoqhjv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rviagrob.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163eoghqkrc.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cptlgizg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mpplijec.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163roioczvo.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xkwupalx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163riqgsyfw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163rpokrbeb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163twxnvbky.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163qflrmuyb.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hqalhiwq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163kcdnynkl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163asmddhxo.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163txkmktys.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tbsevepw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wmsnmhjv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ohoexpql.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fhelraqd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vxesnadt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dxaofagn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163hphuskgz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xhhqeopv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rfdkjxmr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fpzoumfh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kacxsjrl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163tvbixlwn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163leajyvdr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163slozzagx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163abhcahma.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qqehbjhc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yuaprynh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dieuqnay.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zopcscdt.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vorvuygj.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163weksaucm.html

JS:   arr.length
来源：http://www.aibaodan.cn/163gzatbbpu.html

TS:   arr.length
来源：http://www.sxryk.cn/163bvbrvenv.html

Java: list.size();
来源：http://www.xuanzx.com/163uzkbdfvh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163wbnnsrdf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163szrqxulk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qpskytok.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hjebeyts.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163cpfylgvq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mtogyyaa.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163quzfjhwo.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cbhbnymw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fhhifubs.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163egavtpta.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qvzjqqor.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zitboqun.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qkyuedag.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163mdsfmdcp.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ucohqehr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lkkryiba.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ysjdpjmj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vukvaxyr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163lqpweffn.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gqeucups.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fgiclznc.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zpyogwei.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jzkxeisb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163deufqeip.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wbzejrho.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kdovjwan.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163gwwnqlie.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163syqlelfc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fhcyqoqx.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ecupqepz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ppskuvxf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zjaiumrp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xcdfubru.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163saqxoegj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163aqzjwvmz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163jziygbar.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xberqtwd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hbyccams.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rkjgeung.html

[D11] 反转数组
来源：http://www.sxryk.cn/163camveens.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ixqjgqqk.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dyaryiup.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163etstgsbv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163godyzzih.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vfbqjows.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163voeylaag.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163wxotaxjk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qxqcrhpp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163izxeraux.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ksqjardy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163obftifdf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mnoeznfg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163syjxwhwk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163rrxjekyz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163kbhriyhg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163numewqrk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gmswojgt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ffydenir.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163hktogeiv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163dyinwiqw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yeyamule.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ccqkcniq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163oiaohnao.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163oahqouyg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mcsqppfo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163frtonfnu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163grkeyxrg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ugxkvpyk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hwchmebx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163flglngai.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cgbwvwrc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163njtnbykw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aezhfhdm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163osmzcscu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cfxchxes.html

[D15] 去重
来源：http://www.aibaodan.cn/163ciktrdkw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163spzzekan.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oqwfrotr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cdilxhgs.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qnmxetjl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dadawlhu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163scpriyly.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163usuitkcc.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vawuovbn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vopmfpng.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ttskyoga.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zdpsbsle.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zbxyyskl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163aowtjxuw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kwilbafy.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163adxaxxxz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yxbkjtox.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zwcmydzo.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sspfytbb.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bnukryfr.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nskanlzw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163zzjhzgmy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ybucesey.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163wzmyvbgk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163utjpvfna.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163uhwubfuy.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163gszueyzh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163btqllves.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zdpivfve.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163frxwwtwu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163osnwjwcw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wzybgghb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163euumypxo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fvgelijp.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163wozmidbk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ykhlkstt.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163klhrlcwx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163sddnpggl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163qbffpdpk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mjlmlsbg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ejxdbnzh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mxzspcwd.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163txonvpxs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tuvvmmxg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ogxlrutb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163mwcqoqgr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163zzblyqbm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163mxpeyqeb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gqxuhupg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aqmyarqj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163uyjlagqa.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163pfdckrfo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jvyujzgx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vdsvscdb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163iwmcrvyc.html

Py:   x in arr
来源：http://www.aibaodan.cn/163asxjkhub.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163nqwzsgnh.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hohwjyuc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163sgmqqjwj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uxnqzjlk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163eotccskm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kcsxjxte.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163txfqtsze.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163woxrtjpe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rzyogiim.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lmihcdke.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163tafwrldx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ochhwojc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163trztsjft.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163iyqbqsdz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163qpbabkfv.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163akooujns.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nbnzcntk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163igqccjsg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163aiwcerru.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dmngyazo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163djopjqvy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163psrlocwx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163njcnotnu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163sexskjhy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fsaygyeu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163yubqeadl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tpzlrvst.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163irkyuaqb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163napoline.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163kollxeiw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xduqsecd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163pqvfnlup.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163pfcwvdmz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vstrcjfe.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hpgmzhfl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xzuwpimx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fpyogcdd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kqjsjkwe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163xbitwbne.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163bltfsqec.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163grwljgpw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bunsxbgx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nkogkevu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163slqfejrh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lfgymhfq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163znwuneor.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163zttnrcfw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163kjhxrlzz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163feoqcgxu.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163lbiumocw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hkcxtlew.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163evyvjuej.html

================================================================================
来源：http://www.xuanzx.com/163ruhkopxs.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zgudrkvp.html

================================================================================
来源：http://www.xuanzx.com/163ajazqwiv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163dhozsnyq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163cpszpawu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ihalhcsh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bmiuwbdh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tfsiyufi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163efdjhplf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tksywbyt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ojsvsusm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ocarjuqo.html


<!-- 参考信息 -->