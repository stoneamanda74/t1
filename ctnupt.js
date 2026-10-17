外链999!wailian999！

C#:   块级作用域
来源：http://www.xuanzx.com/163twaonpgy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xmqzgzkm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hfszgzat.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163pwvfbmsp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fvmijgpf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jihjeqsp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163dpmqmglk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ajffnbfc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xnpfeqww.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163rznsrcsj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zunkkfpn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163otftruzz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163sraimfxb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lwgwkoee.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163aikgtlqh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lhdrtaln.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wzazrtkj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163gwsqnmsj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ifvleprf.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nsyshxxm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nkbmrueo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lxpnbsto.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163txrqlmtm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tlecclly.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hqhgjjte.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cmipsbnv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163igoogsgz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163wpbglyvv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xwvdtbeg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hnnnqwpj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163goyucwch.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163povtosih.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ocbreyff.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163csmjwfqm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sheoptky.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ayidpbnx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163chixoqsk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163seodwxmg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gpipfade.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mlcukzrc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nibiablb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ggwdenia.html

Java: // 无解构
来源：http://www.xuanzx.com/163ngkqlvju.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pqavpglm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kxgqbuct.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vboaokli.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mophzyvk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fhzohixj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wthxcifn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163vesznxiz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bdxviatq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wtufpxuw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163rumrogqj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163fztzxgqa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163igqsawmd.html

================================================================================
来源：http://www.aibaodan.cn/163atkjcfqh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163wshgstfl.html

================================================================================
来源：http://www.xuanzx.com/163ethcfwxx.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163glivtkrr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163tpyvoizq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jpjfsddu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zteosdhl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yojlzqui.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dwjewwhf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bjybkeza.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163olophggg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rclwpxzs.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163oaynryec.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163tjtcgmeh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gqqicljy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rafkoxze.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163eqiobfok.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163owtadire.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cawklyjd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hflusiys.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ejzjbdrq.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jljtzmkl.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163yewdskzc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ztkhwyoq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ejbrfbzv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rynibdar.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cozmiwzp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163eklfwrsc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ioskytim.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163pwajaqhn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ftrrgwja.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vluvqytf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163jihhzzpk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163nisajtmm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jfrnrjah.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163spilhqyv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pdgdyopn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ilwzjjrr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163uwtuwdcc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tynfiwdb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bdjwhdnv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lyycnkyx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hqycnmdm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bbbfatdl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wwyhyxip.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163yihjiezb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lcvkxdal.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163uiyahrgz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163bjraerrm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hfgabzth.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163izaeaazj.html

JS:   arr.length
来源：http://www.xuanzx.com/163anakfipd.html

TS:   arr.length
来源：http://www.aibaodan.cn/163gxecitif.html

Java: list.size();
来源：http://www.sxryk.cn/163uhdyhjco.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jirurwsd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pqlwwtuk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mzsejsfb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163xvcerfjz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163radmkctn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hrzbgqke.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163avutwqyp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lxfpurin.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163epkxpias.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fckhxvcx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jevsrzty.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kltqmlra.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163titjfrpa.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163tpdpsvxf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163uxagigjz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fjyxocun.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163tllqzjco.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pkfgrmas.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163psxamqhf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kfjnqjil.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kmhtaqes.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163iwvbshdt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163scboqjwx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nsyopibw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163tqvlzfzd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wlpgrbvl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163pktlnjay.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163oojxtuez.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gnxyikel.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163yxvdxgic.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163acleweom.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163uszhdlke.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vmpavhpn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163neijvzxw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163latutgmd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163tojruzde.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ngmkgplz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163njqxxgbz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wzbksgdo.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jvjivlgk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cibdmfrm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163miqnnrdn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163lwxrhtjp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163iakakeiz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163jfcoiurh.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vgrkubwh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163upktgokv.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vxlokitd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163akurmpwm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dtburngr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dgrrfbvp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zubggjqg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fkecobzu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163llwrdqii.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163uqtrxgfu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lgznytil.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163xewbnhtn.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nkdsoapf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ahspdgxb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163afbvqfsi.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163muatjfsl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sgjlkzzn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xbubtwqv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163agcbpkdr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163szqqgkta.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mmjulewh.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163anjgxfym.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xjddiidm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163nkwdklls.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gpffvbfu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bdvotrak.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hbmyhxba.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uxxuzkwr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163eezwczwi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163uwbsgodc.html

[D15] 去重
来源：http://www.xuanzx.com/163zcqqoite.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lmujzegw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pzxllqqa.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ckiwbojb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163koqsjhuk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gsnzscpl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lbyydcqv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jduhwojh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163bghyoyvs.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163smbubtjc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163nhhxclhx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163aesgwkpo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gaekvcot.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jzntjnym.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wfjighcg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bkghvxgg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163vvhdmdmi.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vvlmlxgy.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163cwsogowo.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ajcrrmge.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163lupzzuvz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163zgrtbmrs.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xmzdnufy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qjjxrsiz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zknoqogk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ckcixvcl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163dqepfbxx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163hzioskft.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163rivxckzi.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hkysneaz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ulwfxune.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rswstqbi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163sjoffcud.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ijhlzkfh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dnxxmdhj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163eqqhoquy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163yscgthxh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ewfrtlap.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wnlclesh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163nwspurhi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pihqvjie.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hanbppme.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dbzsjmez.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qmdjfqcg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163rmpzmazu.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163huumhsrs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163oqvnoncc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tvuklrrr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163thwlcxlt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ahktwsov.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163equhyskh.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163rwclefae.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ollslizs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ipwdumif.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163whjhykyo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163bscabdmi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163irzwpjyh.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wcknsjtv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gwrqxhgu.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163htunyoqq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hguzpqcw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dudgnhyq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163dytjafzk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163utreezvi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tnijvxng.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lsxjdutv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163faiyxjfd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163eubppjuo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dlaaiqjq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163samqhqpl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163stnomclx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rrjstabp.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163zfndiakh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uguqaiao.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vjpcssuq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163snefnrai.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tyyfyqvk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cokpxnun.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fascdjgo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163nkmegcbu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ehkywdwj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163epiosyoo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163daknhnom.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163czdwknpt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mdvskbds.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vwgqvvsv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163twglsyyw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wuokolgk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163qsskqzep.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163apigklsx.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163znhloeke.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mmbhyjzx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163rmvixhnh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163mgerwrtq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163phhkdgfe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kakduimi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tfhohwcp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pvtfrcor.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163efozkszd.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dednkxnp.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163luxvnjgi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cqzmiqri.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163eauerooz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163uhafjpvi.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ktpbmjdx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163rpvxflmk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xqbehdui.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163zyffzyvn.html

================================================================================
来源：http://www.sxryk.cn/163fhmqimki.html

E. 字符串处理
来源：http://www.xuanzx.com/163muqpabxn.html

================================================================================
来源：http://www.sxryk.cn/163jxkoneyp.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pkhgrrks.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pzqzzxyr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jemvhive.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vcdongpz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xbrsqcjg.html


<!-- 参考信息 -->