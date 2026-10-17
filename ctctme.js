外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hyitawbl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ecezqdlc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hoicapnu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zjstebdp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xvfgllvm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163quwnxhfq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bprhfhro.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zmyweexz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ndeszacq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lkshnaen.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jnvhlbms.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163kglkiarg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uupadoot.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iplitazd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163iqpqymzi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vvewnuhk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163thjhfrxn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fuemhrfl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163unttjgwf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ivewtqng.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eopnkbfq.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jgkoqcic.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163atejsvht.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163dhzuxnmv.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163zuswdwhs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163olpgbdjz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163rocrwwzd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163frkkaqwz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163rgfhyxah.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rhjalngl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dtyrwxsy.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163rbnijjhu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gtvvyolt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163prjffsut.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bkpbjdao.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ovayubtm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163gdcrjwgo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mfqklogc.html

Java: // 无解构
来源：http://www.aibaodan.cn/163tuzbvamd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163oiiemnnh.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nrpymfcm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tijulick.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ekninbay.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dqatjhnu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xdmkwbuv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wnadcsml.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tlkxbqfz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163fombomzq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163urnlpukd.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163kajrotha.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163emejkrnb.html

================================================================================
来源：http://www.xuanzx.com/163wreaerhd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ezymgxph.html

================================================================================
来源：http://www.sxryk.cn/163qkiwomot.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163qexsmvyt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163fkkishwb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vqaviqwb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163sfjmjrfd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163gnzgfomq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hkiksfxw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163aiihbjgo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163gjodtgmm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wvrovnir.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wakoojee.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zpbrwsvc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163vctpunvt.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rwrmcipm.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163oqcivcqi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ptltwwat.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pablqmhn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bxpfuiiv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zfmkarmo.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163rifhafef.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163fqizyuir.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dudhftqn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nvfggpwt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gziwpkwp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qiknbmkg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wljaumrw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163uughleni.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163dmblrhob.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163npxclhso.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ndnlcapp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dxkcgyqw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dylrqyba.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163anznbsqy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163rsmqcqlc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qoiubvvs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163sqhdgmxi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163yytfyirm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163klcikkkl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vzseapie.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fvoqulzv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mllxajlo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163nersccrv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jguzreef.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163givgwioo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hmowvowe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lbugjhrt.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qnvgkyet.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ezmyfyso.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163brnksxed.html

JS:   arr.length
来源：http://www.sxryk.cn/163nhswddvr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jfzitreg.html

Java: list.size();
来源：http://www.sxryk.cn/163ohdhnuyi.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xorgowfq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163talzrouc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163amkvxiwf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163jjpcpqfj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lvksnkaf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163susczuwv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xlthkzpq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pumpvkuo.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163wdjefwbk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dfidqgig.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163oapknyfg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jobsudqy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163klfmqzac.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rfttnkln.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zjngkjlu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163wseymjyy.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163valbfjkf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163luieichz.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163udukdnnp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wfegpqge.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pyxahkgq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ckbdorhg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kxwhmvig.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fncqxqkj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163yftmsofm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163eppbcoae.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ngcwunem.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163lzubfuts.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jlpxwdwk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mtypjoot.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163spqifzzh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163shdqhtel.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fuwybqgq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hagltnly.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vhzkjjzg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vbxcqasj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163rxssnmpv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rrdxmdpf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163prpluqci.html

[D11] 反转数组
来源：http://www.sxryk.cn/163yqbxityl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zuvzakzp.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163firrbxms.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ecjafcmc.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163dynphthu.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163itrvtvdg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163piwnysjt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163fbxhdnie.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163drpikokj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jnhjqggo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163myfpgmis.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163uoqbaoaz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dkjpeppf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vvjbvicf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jbjcrndc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zjpscsyx.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ygzfeiae.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163swpwzdsl.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bnngcyia.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163gishjlcd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163awicybmc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ptlifhwo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pnawtfoo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163kkeiseeq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163hvbqgfwo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vavpqudb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vmupucnk.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163tehcniss.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oopibcey.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gmyhttzd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163daeupfcj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wteokicm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163yirrstxt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163poaozflm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zwhtgtlo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163gkvehlwi.html

[D15] 去重
来源：http://www.aibaodan.cn/163fkajhjgb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bmiwpzcv.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gofwqena.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uzayqzlm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kklhioko.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rnhxzehg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163btqyedmb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ufkvztni.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163rytlibby.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xwgtdoop.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lckcqpzl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rhttuixl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163meprudmz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rupvfqlg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bfxaybcs.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163svyirofj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tnadkbpv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ynjbgonu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163jooxapkh.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ybcjyyxv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163dadnvqzz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zwnbnsbp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163uyeeqzob.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xwdbeqwm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qtzcizri.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xypohugw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163yltlzmji.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163tozdjsaw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163znnffggt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163bupszyyz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ygcxfvbm.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qchsrskc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163halrirur.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163hjtvodzm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ytdqdzbf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163hbewwhba.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163fkcrnrbo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yatkjcum.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kjmffdtc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ggkxxcvz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jygcbfhw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163roqwogne.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xmgeqmuw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zqqhqftp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163oaihhbsd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qcmraspe.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vxdvhktc.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163davqmmvv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163giqcghxl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rbtcwoyk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dfqanahm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xcntbgjy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wigijpce.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qfbzznau.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vymtnyxc.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xrtscamx.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163babtusdb.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163sfkczepj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tfuuawqx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zlyiughp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cgbzufgz.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bqrurzvf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163iiigvsts.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zavohihq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cogczdnw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163idlmmxci.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jaldfjnc.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163bfvmswzh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fgfulgws.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hytrtyqm.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163frwhynur.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bfetlaqm.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163yyiyxwbg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ucpecpmy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163fghhqphr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iflbhnmh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kdvkbvjl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jqjxdmcw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wbeharni.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163eedhoeku.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163xykscnrm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163gasioqwr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163atiphpsu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wydwpdhf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ljoaehkg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163kwuqghlh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tmierxca.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163wokkczkb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gxogmwpw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vvtdgmih.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163acaotivw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163jjnaveqf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tddmprnv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tshwrmtm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163twyfrtob.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qbjceatj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ztenttzf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rlaraoom.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ghzzjlpb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ldwhnalc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qyjdnluc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163wrmykate.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hveplrjh.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dginszrm.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bzkuukpt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vlxybvmp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bpqgbitr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163kkecaitk.html

================================================================================
来源：http://www.xuanzx.com/163shxikwto.html

E. 字符串处理
来源：http://www.aibaodan.cn/163varwkjvh.html

================================================================================
来源：http://www.sxryk.cn/163cfvzefet.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ynumpyzg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163vkmsvrif.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163uftbuyoq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xfbjjzdk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163eghexuuy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qkkwpvhv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zulayeck.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163nuagwfzt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ficgoyvg.html


<!-- 参考信息 -->