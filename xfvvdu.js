外链999!wailian999！

C#:   块级作用域
来源：http://www.aibaodan.cn/163lzhksihf.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hjecgjhm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163tlvntzcz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zqyfigkv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163teexksvt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wlzcrexl.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xjqdudrc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xvwuvsgd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nmseterp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ypacouut.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bynhiqan.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zcavqrwp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ujsiixxc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lzmfgjhf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ijxepncm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zjpxnxnw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cxclokhh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163rdhijcel.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163stffronu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qnekhzpt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163resgkgyn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ulqglgvf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nhfyoohu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163finbnfpn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tymtxvlu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cyyfvdts.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ftcvuntn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ekmqfnrl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rqqkbkji.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163tpbkvpmy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163tndkmfpa.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163guqveeot.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wvknvhem.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163coyniioi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163rlfjdrex.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gfezuizv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163myihcmou.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gvolsnyk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vkegqset.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cbekfdyl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cmfcagki.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163owghiwfn.html

Java: // 无解构
来源：http://www.sxryk.cn/163mnaelrzl.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hetxmyuv.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163trlsbxiu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163lchdeauu.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163phwedkzq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163iwcuzhkp.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rfyxktjg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jimzfnas.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bynlmnhg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kybeozjv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yandwdoq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xficqcsv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163raspovto.html

================================================================================
来源：http://www.sxryk.cn/163ugywtyzl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lmtzzdwq.html

================================================================================
来源：http://www.sxryk.cn/163obkgarcd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fkyvfgfx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wdrscxil.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163nvrjfxqd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163erpshjmh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dogijpio.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fvzliohr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163eznepoev.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163pduqfqtu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163reytkaxs.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163jgnahkjh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163noldtcgt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fifiukrs.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vedtmpsv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qrqmapfs.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zezjoqqv.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163frsrmnmi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yemizpgx.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xqkcefah.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163pjqmdwnq.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mqtciszw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163iposbjyc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zdbnktph.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hmxvqqiw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iorltarr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nluytqsc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pgknkxty.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lvpcjgxd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mgvcauql.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163inpoxsjp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163nncfkwgm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nakadbfk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163tlizfqhk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163krdrmply.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fbauqycz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163apfkzumw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bkwnaqta.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zrhqeypr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nftvowxy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gspqdasf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rjbhtwrh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qzicyvgo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bkoqhvng.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163lrkywtzo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fvweurmv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jujyblgc.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vbvndyvo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ymnqzuvb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163pedycvsi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163utybrusw.html

TS:   arr.length
来源：http://www.sxryk.cn/163mztqadny.html

Java: list.size();
来源：http://www.xuanzx.com/163gwvfsoei.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gkusxnpz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163zdfgbmiy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163igxgzxlj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wkcnbflh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dezosnyk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wexvbrlk.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163owtkanww.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mwunomtl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rdzbfvwu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ydozrbfw.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sflehevq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fxjheadm.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hinahfdo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dibhdqyx.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wzyafnmn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163uhinnzcu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163duppsxkn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bozjsqbf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gutkyecr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163natfdolx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163dedogowe.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wmuikknq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gpiylgud.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163smptxsus.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cgmyrqln.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xjdgqwsk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ffnsedut.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163obxqnrqh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mcnbsakc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qccdhvnn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163phfjcdsq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163johckaul.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fwdnntad.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163eetdilui.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fiqkmpsb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ycwhiiou.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bfnpuprj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163pwnpwcfy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163tppqjuzp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qjjvivws.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163caxnkajk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163dgdqmyiz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163fmhywvhf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163aeupmmua.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gruzbqwr.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163mdmgwgsr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163civnsepb.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rbadzkmr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kvhcawyy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tzrveeyt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163cowzvhzd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nkzrymee.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rutoyoci.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bwmwfgbs.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zklmcxuk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yuvyclai.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ajnzrsov.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163lreljxhi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rnrzpeur.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yaomnulh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wlvjghdr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gjhuknpj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163bvnnmpoc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fvdpixgn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163imxebvbc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163gnanogfi.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163tegfjokx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zrqotimr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xzizggih.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163miiucesb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163atqgypub.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163gqcgssxj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qpyjjupq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163uuphyusz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163wjkshnei.html

[D15] 去重
来源：http://www.sxryk.cn/163dkvzjjto.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163chgyipkd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163tjgbntbs.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fzmlfdpe.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163aljoleop.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dntwsbar.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mkbtusiw.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163hnledleb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ljbbdnlx.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163datqtlxl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fwviovag.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bdiaqmxq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ucbstpwu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rwjxjcol.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xaikcfkn.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cmmrtpjx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ugvmjokb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vhtsuvuu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163atjywqia.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rwpennqc.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wfyxzwgr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163grhkcrmp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163prwtyltp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rvafdfgf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163riauhsax.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jwscpiow.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163bydbmjsx.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163tiwgtprl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hblpncbh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163tncpvtwq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nxhbphhl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hfhwzetn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fhqoggyy.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xdzzlaah.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fdmjdetx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163znhuqlrh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163tqnidwqb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ttqhsjrf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ulcwxxmv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gvytpyei.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fkcgkgeg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jchvsfjr.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163kqbnwsod.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zofwaywk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hnjgficw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wdtagnyq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dijzkckk.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tnooghja.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163akffzulq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vyvcjlki.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163mpmgxdav.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bivpjdfj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qyhrmpbk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163caclffdr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163firhnbds.html

Py:   x in arr
来源：http://www.sxryk.cn/163opnpwqpz.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fhlbfzmc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ypxmrtlv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lbxkdhzw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bkzpnwsm.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rsstidqs.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gqlvxuoe.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gfkayana.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cwlwponk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hpviqgwt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fqglrkrx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163hirugfgp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qutgvvjm.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fjfdlkpw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vhvxqxfi.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fekgjant.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163jfdiiadb.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gvsyrzcs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vsjdslvf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vqyokkmm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dxiqqxzg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vhduguxl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163nxguvwam.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fyvcpdmm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163dzkztjpi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nghomwnc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163vnrkfirw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163zoagnlag.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tzsymrzz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gzxkkyyc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gutbuhnj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hfmfwqwm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163lcesyxwp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gmwmcuil.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fwxlzzmi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hblitxlt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163yaoueupc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163cuzsrnfi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rnnfsdov.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163onyhlwpc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163dkakcdsc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qilijgsi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163bgwgylam.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fejodqjh.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bafymjbc.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163uhhswige.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163yvrthtbt.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163gwxsrhad.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tiboqumu.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gyhmrkys.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163vurxvudv.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163oswxyenc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163kymdjypx.html

================================================================================
来源：http://www.sxryk.cn/163dquzvgmp.html

E. 字符串处理
来源：http://www.xuanzx.com/163zngutaev.html

================================================================================
来源：http://www.sxryk.cn/163uwmmwngt.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bgvdrohi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ovubhnam.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163asyqxcxy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mciesmig.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163loyjfogs.html


<!-- 参考信息 -->