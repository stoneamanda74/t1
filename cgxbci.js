外链999!wailian999！

C#:   块级作用域
来源：http://www.aibaodan.cn/163kkezcfnp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bamdoxkp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163eimdoezz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ukcxkrqn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163bspotofu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163zlapnntq.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zxwyklrl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ffsoutlx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163kvgmlhjq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163toavmzzz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163funnjywl.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163filkcsqv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163onqyozjo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zgybmrpc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163urgojvzs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qouuptfo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163iojezicp.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xeflmlrd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nqpcgyjh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nsqisktg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sxufkoqf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ztpjiata.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mljotivu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nytyrcmq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163enrzdxtw.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163uiurxuvy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fpffuqju.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ddkccxuk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163iypjruzh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jjygahuw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163plipxifn.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163bekgaijj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fmxyfgfp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163smiorprd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fjwonjrz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163yzatahjs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163pziwswrd.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ivwwgdzz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rvkglans.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nwvzonsn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ffhhlmzu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163dkkmdexo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163zqootqea.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kfccqvcl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163zfcbyzxb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vbctouzc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fzptrqxl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ysuapyek.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163olpdbdla.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mlgxpduy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vqgdbiqf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tktxidei.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163swomdane.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lgbilyyj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rrnrgclt.html

================================================================================
来源：http://www.xuanzx.com/163egsrtjdx.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xcrtgenq.html

================================================================================
来源：http://www.sxryk.cn/163ztebyyqd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ftnyvboz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dsxethjq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163liwtlpuy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yteezzrg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163diprrcer.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163oaptrfoj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nepsxgwf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163irhstrnm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163yqcunxxy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ljskfsjt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jkbyrzvm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163nzgpqdwu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163zdejxlus.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163mxpcpavr.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rppdrnau.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163opalrqbu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jjnouilu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ahsyrtdq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hpujxdgi.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163qthypezw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163djkbzgbc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163mznrbgzz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163pguhjfon.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cvxnataw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ghhagped.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163yeurhmqg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163dywovvfk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163lugyxrrw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ohvrrloi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kozcozyh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163bcyilizz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163hwsovxss.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163sbgbvvyr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ezrleixw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jgauyvud.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rizwqdai.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163favvpmca.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163scmpjrui.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jqckghcx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pihpjgkk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jvkztoab.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163bugsasab.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vakwdret.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ndgzowaa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hwijfvlq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rjwbhoge.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kpoiwltt.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zqtreikd.html

JS:   arr.length
来源：http://www.sxryk.cn/163ptuetbwk.html

TS:   arr.length
来源：http://www.sxryk.cn/163cwbfqssb.html

Java: list.size();
来源：http://www.sxryk.cn/163qfbxuale.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ryxddbiq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rklgzszz.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ikmyekwv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163tffzijyo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dznpivlt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ghrnlyxm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zqhyphma.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zmieeejp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nqwkpdza.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163xtcvmpoy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yfcgnndx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qfxzcffo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163listscho.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rahircfh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163tfvojicd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163uouveroh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fmuokaoh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163egfwtwta.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xauevseo.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ttbolvep.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wlvbaznu.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wcrxdjtw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zrvzymgw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qlcmegym.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163utywivzr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tbbygsht.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gudgbojf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163fcwfcwns.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xzxniinr.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bvwnlqix.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jirfadxy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ajwzddoy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163tmgkboou.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tattduak.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nxiwcpvn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jqfnqfvu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163yqfaywdu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bmiujlvn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dzjksjrf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ezrzpfgc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163dcakzetr.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hrborxlf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jbyzcqwu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jesygdjj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hqhrrovg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pbnbcyka.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tuiucuft.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163awpegwwv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163lstvwmtg.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vnvxywvq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163lxecfgcq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fjhzwjjx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mkmhcxow.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nqfrpkbv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wsybluqv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163bvrvkgsk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dylkrozh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163reiafzek.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163prfcyskj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lhmckbde.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jthuxjto.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ieropies.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163caqpfshw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rupabapl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vfqorhpf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bntgrdrd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xyeizmaz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163lkwoczqw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rlpiqkpz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lcaayknu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lyubcard.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163khashcln.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mzxdwwqt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vzmbbkwa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vkpqouuh.html

[D15] 去重
来源：http://www.sxryk.cn/163pnzapune.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rvkgijmw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hsppbuzg.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hspnzcxh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hngwbeas.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pselvssx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uipmwklx.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gjxswiyr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163znkigqax.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qqhjacyl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rbclruil.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vbyikivr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mrqhdvap.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vyktweqc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vmcujyye.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bwgdpyih.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qhxczskp.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163unnoscwi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mmyfvyti.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163zlmbyoig.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163scerncdk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163kfwpjdrp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ksfaqovq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rgxwblcq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qdylbkvn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dtmvospl.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163aikbztpj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ejouosgx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qngyhqmx.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hwlizbgl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163djlddspx.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163eiabvrha.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vbqrdxtz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163fpzlowzb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163yibwzizf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ihjxkwzg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163iyaoyvay.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dghtqbfu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163pdicyhod.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163sgnixczu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dfnrgyuw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jxzgatba.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ehvqnuqj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163iinygaaw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wgzwiuer.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jiavnjlu.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163llullyds.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pjesphbh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163axcqapeg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tpgpmlcr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gnsbvvus.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163btoopesc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163avvwoock.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rjbkndlj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163csiotqwr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pccuxdwy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rlmzvbna.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lqavocrx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163cwcmndpa.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cjyfolqj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tlsrqcvn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gdqbgdcf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gbipluhp.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163svsriiid.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lurrjfow.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163visncbik.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qmszyqnb.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dzywfqnj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jjkmefas.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dbszasow.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163javzysuu.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vlniyxim.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ilxegjih.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163fquntopa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163licuwjmp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ypwwxvth.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mxdlroqf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163luumqzxo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dykbboll.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163viihzayz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163gtpzsiqt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163neyxnubs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vqwwgrdv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163fonfwwhs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qavrpukm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tghvwvho.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163epmmoxez.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163iqnxuonk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lorswjul.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dgdnimbn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163wshurmui.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163thvlmdyb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tlanqdvw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163sejtoufd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163kqeebabn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ntcanzdj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bcthmdrs.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sbjtgxgc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mljxgygq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163akawkefy.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ewqzszjx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163bksckwwr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163epuadonf.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ravfymmm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ikegneie.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fozerpuy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163fapkkuvj.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cmmassxj.html

================================================================================
来源：http://www.xuanzx.com/163kohivcvz.html

E. 字符串处理
来源：http://www.xuanzx.com/163rjadbgir.html

================================================================================
来源：http://www.xuanzx.com/163ppwxzmbj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jrnhdepj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ibobxeem.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163eiafllzx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ogkniiey.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ptncvsjg.html


<!-- 参考信息 -->