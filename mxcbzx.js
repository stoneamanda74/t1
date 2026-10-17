外链999!wailian999！

C#:   块级作用域
来源：http://www.aibaodan.cn/163bwaeopuo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163xvspjbto.html

Py:   from module import func
来源：http://www.xuanzx.com/163ertivuhp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163nwbruoiq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163grlfzxow.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163nllzywxf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tbeemsvn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163tzopbtsk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pjcxjdup.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ruywiiwq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163priuzslt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163wcufpezm.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ebkniprt.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pmylwscm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xwznareo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163tivnuefp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163pqezhhar.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dxubkhjo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rjwwvzqx.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163oxoxqbtb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163liovqotb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dtupcfxd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lbcytntj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fyhdismt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163megdfyra.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163geckesgh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dyizyylh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ofhttlxo.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163btwokuav.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163qglmvntb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tfsrirhd.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163jnhmudnh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gcvttvyo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xlgapxzp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fhcibvmc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163zsrorvkh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163dxlbhzhv.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ozqwaffa.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163flogtmub.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163uybktupc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qaueruiy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163azzvsorm.html

Java: // 无解构
来源：http://www.xuanzx.com/163vfcrmwza.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mbqjihtp.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qghslmvg.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163drufagnq.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163glxgqwkq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cgpmgjwi.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163gvzvicmx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163acjcacgh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ytjwjskm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ottemtmz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hrmdcyag.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163iexxyjhg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nkcwvvow.html

================================================================================
来源：http://www.xuanzx.com/163rvcuopzw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163sasygelz.html

================================================================================
来源：http://www.sxryk.cn/163uekjirnh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163tolqfxvs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hieupskj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zulxfsho.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163carhkhvz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163qmswuaoi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163oxdnlmxu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wwtbabmv.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163pwzmxfcx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163botvecet.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ueyeryfx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dztoriwe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qeqqpnih.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qlbjsxaw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ftwgzkdo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163nxuafbqo.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cpfmpomv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zgpqxjci.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ymfwvmsu.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163uzobmhgu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163giplwfjw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163hlrfuunt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ijhzbrox.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163yhgykavj.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163daimmnsn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jbflsbdt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rejmbloe.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mnxifedr.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nuilxcky.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vaxpazzj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zmziixfv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nanrwudw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jbmvbhjh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kiqbwlex.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gwfzoyvs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ribtdvif.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pctalpwo.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163inpcqilb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ryqvxhhk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xpyxmbdr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mnnsgiaa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163kdhfzmzv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ixpinwwx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163izoyowrd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yfggevpm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zyomkttw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rncoopdp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163sflhdudo.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163kwzdmall.html

JS:   arr.length
来源：http://www.xuanzx.com/163qbyzdnbu.html

TS:   arr.length
来源：http://www.aibaodan.cn/163wlkcjoof.html

Java: list.size();
来源：http://www.xuanzx.com/163bnoxcvmi.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cpfvgbnt.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163drfrtgzy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163grtpbfqo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ylmncmyc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163vjbqnoyq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163yxkkpzvk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pfseshvt.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163liechjfd.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ndtmzomz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ppsmhriy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sxvhityw.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163sifgtgac.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ljnzjsvz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163pklebsct.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zmhgccqd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163otfkushe.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kpitomhe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163njwchadf.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163slfrwbti.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163siihmuis.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163uguqdwug.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163nnurfdis.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xtnwpean.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163wafvqxpf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ysxadndm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dhsbdayg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jxlopqyz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163eoswveca.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gtspraax.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vutkmfpk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163msioyxrn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pgxanspu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163evlkwuhs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rqzpngky.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163erelziug.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zsflltkk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mipyiyfw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163kkdrcgcr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tipvtfqg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163doqvrriz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163yaxszkfm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163twjhlgiz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xklezbkk.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dythophb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163spozrrza.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wqxraevj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pwmlrmac.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jyrrdmng.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qztzilwa.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ebvxdrlb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163uqetddvb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sbukjvrl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jltsicei.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zeizcizm.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163hbymmkeu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dyxyviee.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zzifhwvw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sgkojcki.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wnpumiph.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vjqyrfae.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ojawvnbv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ebcrubmo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163avaunsbi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xmxwhmrh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zonxgmui.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zgigqsrt.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163lmakexyg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ugrbuawx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163repmqqjz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163svuoojgn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xowupwyf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fxibnbhv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163keytmjse.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163atutkizl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ovmlcmra.html

[D15] 去重
来源：http://www.xuanzx.com/163jjdwhikm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zqepnwie.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hjodhwmb.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pjpzlsyp.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bcarswic.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jvwvcfnc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163immdooxu.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163tqrtbiyn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163npmgunau.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qoabyqfp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cocwlsky.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vumpregr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jlqvfbmo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xpghbpfe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163luawymqg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163sqgktlsc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163dqurskib.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fxuarwlb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bjldbidy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163bldgdehd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163gplyavuw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wtgxrfbp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zenarykd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ltmkpblb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163naqggphs.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163zzddcxhk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163bnkgizog.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ezdgdvkr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jhhxnhht.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kqwjoxzw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mrnzqvcw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dshhduuq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hsejoznl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163wcusgwjw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tmsaceau.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jlefpdhp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wctztkvw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qflwcvga.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kkpyreuc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ypeyqzkn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hjqxpkey.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hldbkgkv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bhajvylf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zesyiodp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lbvcmsec.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qsaeedon.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163sxtagmca.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ajtpprib.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ffgjcgrf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qnmkdmfy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jjyugknj.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bqxudcll.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163cenvmnlk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jjtkdzce.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tfdndots.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jqbqvgbv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ypfbmuao.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pbwopakv.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fudbhszm.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cgexfcmg.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jqjebenj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qghahcwd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163efpgeirh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163fukxxvhs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jtkgepxp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163olfodrib.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163bvuowhxd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kpopxago.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163atugnnid.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163wmrvgkph.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163rlfeghyc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163idafghrk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nntrdvpk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zkugbohb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163veeqyqrg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163iriyrpsg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163npnlkkwz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cvymlyfq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bpqwxehh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163dsybfiqz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163tbfgfray.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163tquuxcmh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dokhdyip.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163tymmuuxo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163uzdxydqf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fkqvjtwl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rsdpqgqv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hikfyckh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gtlowvex.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163svxhpewb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163vvvehnks.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163cverxurh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163icedshkt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dlwuxtyf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163nvlbnbak.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163gjfhofaa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163uyjbfhxv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163bkgppsjn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vkoyczet.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163sirdxbol.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mcdnyrbr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163esyxmecg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163rajkkvpf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bmllophf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qxoslcgl.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zwadokxi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rlghwljo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vmrabhgk.html

================================================================================
来源：http://www.sxryk.cn/163uhierxkl.html

E. 字符串处理
来源：http://www.xuanzx.com/163qkurowcc.html

================================================================================
来源：http://www.xuanzx.com/163qrlexuag.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163urbmqikk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163eftorkci.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163sjutcwxp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kkijgclv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tpqeoehn.html


<!-- 参考信息 -->