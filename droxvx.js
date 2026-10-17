外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xdiifotk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ddmlzarx.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uatvbuat.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163duojifyi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dahixpkc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ylymazjl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163bfwhnwby.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163zrlsyfff.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163olsscbsm.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wmlirjmo.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vlwmmccn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rrbzisum.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wpbbvhmt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pgnbwcwr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163douifqlt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ehnidjdw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163broufbch.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163svgfbtaf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163euyatswy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cdcdtmze.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163okumdhzo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qgbhomzp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qiqjpjjp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163cxbrdhyv.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vqxnpgqi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dwygbfqh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bcewzvec.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xokbtcgc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163yfmbnwqx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163abxnnmfw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ckzgqwuk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163rvdzbaed.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iepvrcvy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rscyfbgk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rtksejmr.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ttsxczcm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zldxffog.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163bffgateg.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lrwwcfez.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kafwkyms.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163cgdyxvhu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jndtkibn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ftgmpkdl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xnlesgjg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ckxhpzwg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163apmseill.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wmfbwmpn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qzaipybr.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163suqjehtt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zlrddlfy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rubghwun.html

================================================================================
来源：http://www.aibaodan.cn/163sbfpnjsb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qzmlmlse.html

================================================================================
来源：http://www.aibaodan.cn/163hvvwkmri.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163yvguukyz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163pwufcykb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ssoancuz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wcpmfetj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pvryxxhx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qrextxzu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163zvdcpzqy.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rukjhmcs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163kgiuehpm.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163bioytkyv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163uqnvfgzg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163uovmrjtj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rvgjyctj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163kmuhcvkp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dwzllanx.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xgqaqlnc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mmukdftm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ipgkabnf.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163bgxfgcrq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163tekklqtm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163moqynokz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163dhbulejr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qazhbtdj.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163kknyvqcq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wefuageq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163deqvidik.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163uroyfrpj.html

[D04] 删除元素
来源：http://www.xuanzx.com/163pulkxrvi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163svcaonxt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tpbbrajb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xqtcezrx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dkofcfkw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163osgutxyh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bhhsuqpp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163pwoojxmp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bcmjwhaa.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163yllguguh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cexatqrx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rmdowgbs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163uvtyckdq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tljivrio.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163igsdmeao.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163gmvzorqa.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rdoqpnzq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ydmasjpb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ncswagmo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163eieblsvo.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163sasbzusw.html

JS:   arr.length
来源：http://www.sxryk.cn/163ntgmsiak.html

TS:   arr.length
来源：http://www.sxryk.cn/163henmmpvx.html

Java: list.size();
来源：http://www.sxryk.cn/163dkqpdxbb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163hxhzpind.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qdvhzila.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wuuvbmov.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hndyjnsv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163kfiekqhb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163qcgirwes.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kbytglls.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vepixpwv.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163syaywnzp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pmucwgvg.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gkofpwih.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163poamakrw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jbfgaqid.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163eyzmeyyi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163iwbkmxrp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xdbzmrgt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163gsftlnbr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163gkoiwsrt.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163knfzfgtn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rnhxruum.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163zzguozkb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rostdiug.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kfuzdpvs.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163wmzirzot.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wwjvbxxu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163txceoptv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163rxgeiwxc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bdjikbik.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163buvjasst.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ynaypmrv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mtuzjtwo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163dizglloe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fcfdrdkk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qblsufqy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163glsvailc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ujflbppo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mhyjtrbg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wmtrgufs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jbpzuwxc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ldynxjfw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163igmpxbcw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ykzumvbt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dzkveulu.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kyvjxvgs.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pnsursdb.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163wiolkljy.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mzhoxhts.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rfcegsul.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163cygwquzo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bauxldfr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nqadqwsv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lwbhtwhs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fkmntizc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vbfrvkwi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kshnoiaj.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163bmrkxbyp.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vcepwunr.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jbaovqgd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163eoolokff.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bfgkaubw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uvajvmiu.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163utgcxlek.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163arbmweef.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163oxxmlufq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ikwlhfud.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163imcxmfom.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gjtthyvl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gvborark.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vbrpnltp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pnpvfedi.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dbejbgti.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163hgfmgjsv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tghfqjtg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ulodtlya.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163abqrahsq.html

[D15] 去重
来源：http://www.aibaodan.cn/163zbswcpwc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yndtmnou.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163lhzazjxg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fojcpuvs.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tudrduaa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rbjjhqjl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mcqxcbja.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163khhwvatk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jsynnzsp.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dwgrerxa.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vcnenuun.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163joedarne.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vcbtdzui.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qoeeezpb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pkrbzoyt.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xmsmjhhn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dxcplyqe.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163dnmpgksc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hrgqkvhz.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ymezocdl.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fwjpsmwd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gapbjlra.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163qaljjxqk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163taldjvnr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ynqhtguy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163yhkalate.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wutxrdug.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163stcawira.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163mdxlivuy.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163uogwebjm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hsfdjwjm.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hhlxsqkt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163raowpbom.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163etlzxtom.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vvlvsmhd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163koeksckv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163xgzjivxm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163sergdtgt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ofvshibh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jvuxulrn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hnijdhhy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mabujtwa.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zyddzvxv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163aisprpww.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mhbqkeod.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163disfcoyc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163txtwpzfn.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ewjiriwg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163brjjqvyo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ljlxcxhi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163bcoxbgtz.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163njybyqgp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zcglfiwg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vdbkuped.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163uagnkmci.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jlpqjiok.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163myfkxqri.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wqxieygo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ynrhccyq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163yrlyxvnc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163eybkyhkf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lkofvqis.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163pjnnwqkl.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lbghdmeb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163sgtitaed.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pqbsmpzb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163pawftwic.html

TS:   [...arr];
来源：http://www.xuanzx.com/163vvcmqlag.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rlbyupjd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163uaxmekhk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cwvazwkf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163jqstjmpy.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dohmatbp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163caahztkf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163skxptryn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163aweiuehi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dqynovmr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rzsumlyx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qdlujnvv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wwuxujwl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ezyanhnr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163tfbiyqxj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163pbfkkpfg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jlrbeavh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163zuorthda.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163nxdoeiuz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dkwwdtta.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dfclamye.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lhraowyh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cvzupyjl.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163sgqvzqvf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qqrkjqku.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163sunaxhyb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163frqfumqf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ynwqxtnb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163iniioaij.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nhmmwhqx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xutmdonz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163lcdvpjmp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163dxauwzre.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163uyfbfqiw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163bduuwqdz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163hkemcrcb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gphjmohs.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uebptecx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163guxjujlt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163kcyhuafm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163xbbpsmyx.html

================================================================================
来源：http://www.sxryk.cn/163kobxlvom.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wdlgigbs.html

================================================================================
来源：http://www.xuanzx.com/163tsaphoel.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tinmdupt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uiuzgvqd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ewmxniyx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sysetqof.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wxxhbpjt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163eoycfhwv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163pcaraybw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163uludabnw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163kabducqe.html


<!-- 参考信息 -->