外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hdzeabzi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zkmzajoh.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qsnztgnw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cpjabwve.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zzpucnck.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163prhlmcwe.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wjllhbmn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qgasznnz.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ysmsnknh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gpmqamny.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vvnlznde.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mdckhlxj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fgtjdbdh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163huuiherh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qvdeosad.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163odkoadth.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163slbmbqsl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sxfqbois.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lnstrfnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wewyarzf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vwuteipf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163iiovvhuv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163uerrrvxt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163krehlgtv.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163gmssrajx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ocdtxduq.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163nvzzejkz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ifkanhoq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163udusjyuw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vaekuqve.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vtziwqsp.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163icfpedss.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jcsbjugr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ndrfbasx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163spydhxrh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163znemtqhr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ckjdksmf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163duhlhwpk.html

Java: // 无解构
来源：http://www.aibaodan.cn/163pcizrjav.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mlqthruy.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163oowmraiy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ddvfjhen.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vuokldag.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ycmwymcg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163yiijshqi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ioabrdvt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qihtcufp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vjfvsrgh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vqxvpdkt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lwgmdecw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gsifkqiw.html

================================================================================
来源：http://www.sxryk.cn/163auxrkkar.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jxdszpbn.html

================================================================================
来源：http://www.xuanzx.com/163xktvazsg.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xgqxkrlu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qjyywrmv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xibqlibg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163whytfshx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163qvnozurt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163vvapakkv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ydzvkweq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ftxdfttu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bonttyle.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ihwiytot.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163hbcuttei.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fkbztqsn.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lffksucn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yfhobwdr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xyluahcz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163rkjbbqht.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163gjzgqbzv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163svhnojyb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ccrgfssp.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163cpwhihav.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gsufhria.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jzeuylhy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ealpxdeu.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163tubortkn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vgkcmbre.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163likfzrle.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mdvnenuz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fuqbhoti.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ahtzbgjh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163dnxafccb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tpsaxbfl.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vrrzaukx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163iqzkjeat.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163yebpnurh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163arilvxju.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163gcqiaheg.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ckcrxsph.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wstfhbfp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163uxqjngya.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lqldvqoq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163mmbwrsuf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ibdsnzve.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hoammzbc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gkcjzlsy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163fzfrsrun.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163heawzeum.html

Py:   len(arr)
来源：http://www.xuanzx.com/163gybnishg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jyxsknas.html

JS:   arr.length
来源：http://www.sxryk.cn/163euekxmnc.html

TS:   arr.length
来源：http://www.aibaodan.cn/163bdwqnwcs.html

Java: list.size();
来源：http://www.aibaodan.cn/163gwlpzfgo.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xqawlmnh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163heaowzwy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163likfaosu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dxalgadi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jvbssont.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gbqawwbt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bjkiwosk.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hcaczldy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xfurzibz.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tmozinsi.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yljwwdti.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xtzicghh.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163txhtrfkr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163nbwepois.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163esvcvelm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ewdmlzdd.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mkyhudnv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fewewmtz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bdevrkee.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163moeckndn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tjozxvym.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ynmgqile.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kyttkxde.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163rhbnrzzi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nturauhk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163swnengiv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163diadvlpa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163phqedqfe.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lcormnmw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jqojomsq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163anacfpsm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163frgklbqd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fmgkwcgc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163windwoza.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wpfsavqh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163lnxyscdv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163niutxxrv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163titrfyrg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vtndhxve.html

[D11] 反转数组
来源：http://www.sxryk.cn/163reiugtgl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jznjdrga.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163emlawwjc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yvmtfvxm.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163unsitwnl.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163oaexvnpq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nrzoqjye.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nvjkcwyf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wubcsxmy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tiodirfn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ndloqqur.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wstrillx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jflxafsy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163saizybki.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vkkeeodf.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xzkjcbuc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mqzsustw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ppijnlgr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xplpvtao.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163vtszbeda.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mikpyoys.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gcblyavt.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rpucuwsw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163qvoiical.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ckeplxmr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163yeeupkcr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ygsmvown.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gruhtsol.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163bytxgujw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wpkszgxd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163havzgzjb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fxlgtzfx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vizfkymd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tvybljzs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163oynrmzas.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163epuaadfv.html

[D15] 去重
来源：http://www.xuanzx.com/163cwgddxxc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lwomucnz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163xhxemrib.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ycpejeut.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163casvrjuy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fgryyqhn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163niskholb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qakouslz.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163dhvjhblb.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163jjzqadjl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ukeyafzr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qqupmiua.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jcmjrtvp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vfgbdvhl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163zmyprzzi.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163feukfwig.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163khvlvqoc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163klgutfqx.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163oqorossk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wglnplqe.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163uyeuksly.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ndusxkfx.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mraqzcxp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163jmslvdxr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163izxjpmcd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163fcpchwwm.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hwidcbyl.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jjabcahb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163cwpaqnpn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vnnmocmp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163nrbcjvaa.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ploabacm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163czlmzyvj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163tznsnlbj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163brsjdczi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xakyqnht.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163zfrxxcfu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163wjjetand.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163pxxhxcwu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163lnpzwzrn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163csonibxb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163qofzdbor.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163muvdcpwr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163knaiwzyi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zljialgz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163svevekzy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xwlurxzi.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163yrzcvnpf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163krzivqlt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163awkdimwa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163wkmlzazt.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mdhkbkhs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ytirqklp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lvvtndfb.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163novqexif.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ikbonczu.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163trchcwrj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ibarodxs.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hzexwqfo.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163szzuigpx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vwezzeps.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kpvqazgh.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163yvmrguje.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163debehpqg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ohkkaeas.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vzmkgiul.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163oxbbtvmx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ewpkbsxq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gvtuhfnu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mpofvtdf.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163kyuzggim.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163onjacoer.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zgaonxyj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zxlcjbri.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mxsyeels.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163exabpryo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bysunihy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163vfixpjyc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163izflatyl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wzrpxayn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hoenqtkf.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163obdarflx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wuqjeoff.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ucyftdzo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rlmtuoek.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qhjwbkmy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xmsqhnki.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fsllbgsm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163oconcnih.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xsxeqwln.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163geenpmyt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163icicddra.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pclnwdkg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hjrdclwu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163aaxeuypi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hpxjehir.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yrbjuwgx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163krmbudty.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163lhnkumwb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163azfkoudx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mcsqrmli.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cjxfjmev.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163bzqemwth.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zxgjefgo.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163cxbbxdsq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163flxtsjpf.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qiyhoonm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ovbwltvl.html

================================================================================
来源：http://www.xuanzx.com/163pwblhxsd.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qjkaklud.html

================================================================================
来源：http://www.sxryk.cn/163aqdrctzg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zzmppfsh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hxkfrjzs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163kmiannpk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mxtaxmea.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pebvnnns.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gfwarhbj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ujliwyxy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163lledxcoe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wnbizjwr.html


<!-- 参考信息 -->