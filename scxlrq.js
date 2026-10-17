外链999!wailian999！

C#:   块级作用域
来源：http://www.xuanzx.com/163qpxcpruo.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ifszgyrr.html

Py:   from module import func
来源：http://www.xuanzx.com/163nbnjpush.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163momcasqr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163jihpgyyi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gjjjiupa.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163fkvhxesg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ogibontq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mkmqwqqp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163fouwlmht.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163tlwfffsr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163wwnrnpro.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163gebpzeia.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ewoicjes.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cgcqtjju.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163molekkkj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163eeuftyvx.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dsmwhodp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fexhfoeu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xdjsaooq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xhipnwrq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163olnnpalx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gidnyxjd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qdxdqkvi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pwsgmzzh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163uzzbpuoy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qdscowmz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vcchdggh.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hsulntro.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qsdxbldx.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cmktoejq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cxvwneil.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163njwcoaub.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hqyhljqt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ejeiikza.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ledlcigf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163rzmfulzb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163twkhelon.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163orwyaoyg.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fukukvdf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hkucvfpd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163peixempu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163drfaejqb.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zgakjlqo.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fikfjazv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zdtqdkor.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jgrbkdel.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nnqufzjx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rzyfisce.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xlteqsqo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163romcqezi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163osndtciv.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tjvoufoo.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163bnimemqo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yuyyxsab.html

================================================================================
来源：http://www.sxryk.cn/163jrfahoaq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sefcrgst.html

================================================================================
来源：http://www.sxryk.cn/163xljliyng.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wfccpzum.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yhgkzvub.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163tsdqwctr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ledwnhyz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vjgqtiur.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cargslap.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163jbrnyfsn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lulhgnac.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163gadmbfev.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dgrfctmp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163yegxmtpp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tgzhafla.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xyqaenwg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rfjijnpx.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163giiuptpj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163awcskrzv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ooujqacd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163nnxaklai.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163woclnoda.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ggmywybk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ctackftw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qxakskuo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163aasrgjub.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wgmvjlaf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jvsuczit.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163wyaphxcq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ogsxveod.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qiqwwnov.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jehsworj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kjdzdgsk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kadltjdx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ookqvosn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163tgwpxbsb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nlrqldsp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163skjztzha.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tndqxuvg.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163npipanwa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xhbalnna.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pysmdoll.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lajzdgma.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163eymuvour.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ucjblcdx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vuihjawy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qmfqxfma.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wddjklxj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pomijeoa.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pbbvadax.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163nqtihupe.html

JS:   arr.length
来源：http://www.sxryk.cn/163jinrvpzi.html

TS:   arr.length
来源：http://www.aibaodan.cn/163cdlfmnhy.html

Java: list.size();
来源：http://www.sxryk.cn/163bijqqdxf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bcyzfrgu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163wgatnvec.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qywojenn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nyqfwbfn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163yasilvqo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rnzpzqli.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lhgpmnkp.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163emtkebfj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163usjxeeon.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163yjusqqnw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ulbzfzpu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fhnzstwq.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163reaooycj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qiejhbcr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163zdfenhiq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ikyzjlss.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mlbfagye.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lqhjmiiy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163usdpjpql.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163huopvlhx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163easyvxgx.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163gkddzdwo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ldanyefk.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fgjvohli.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ufdphwey.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fkvkuqhl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163sjrcewfy.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163kincekje.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hejgrdou.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nlfvdtkd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dspzhppc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ijqpqxag.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kgpzuivn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hghmanra.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163emjqjlvl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ahalezsy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163crqxjrma.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163xfpwxrql.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wygiqcas.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163weuzwvvm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lsgckkbr.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163tvvpbhwq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jvervbnv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rgnyklfh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qlqzlvbq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163mnafipnh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163yxwqxzqf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gkctwbwx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xpqhtbxk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163gvttedka.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xmegtalh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zdplfyzx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wnxvhiao.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mnjjjclp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nhaavgsx.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163utzvdzeh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ychofpsq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163clidkmae.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xivfwwrz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163grmmbyjo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kgyqffis.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163actblzxf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163afrlnguh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xwnxjstg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163hremdwed.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sptizlcn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163yrcvyvbo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ghfhlnxk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163lrlzuckc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tmugsqlf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qdxrlvqy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ydmzwaxt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nfkncywn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163mqlvfkoq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163svdfbtif.html

[D15] 去重
来源：http://www.aibaodan.cn/163mpwenmhc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163drbeqzlx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ykenyzfs.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hdcrowjc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163djyvoqfi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jtdhawdk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vvwzbolh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rrdfyhqt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163djrheyfy.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163jjldrdff.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163aglerjyr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kmikrvgy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zzdhlwkl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bvtgwskb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uquzjgcx.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163wxuvrwtu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163mhenssbb.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wsiaamdg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163avounuba.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163xuljaszv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163isalnkzm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zaksawgm.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tgjhadne.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163wzfnnihi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qjkdfsej.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163qceisvjx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163axgtctjm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lnueoobf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163prrvbgbd.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163snnlrrkg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163yymwsrcs.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163oxnwluvd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163bmpxaovd.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163adyjnabe.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163sihtsoft.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xbhdtqts.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pzcuityi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xccyubki.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zidoharv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zlduiawp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tsvdgidf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dgbegbie.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163tgwwkaey.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163yxpwscvk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163inhjwnvw.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zfwbgxus.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uqseagsa.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163youzfexk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163okgnwczu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163idkxgcdd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gxmctcne.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163fgfqnnnh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bhxaneek.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163opdlwntx.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yjaaufnc.html

Py:   x in arr
来源：http://www.sxryk.cn/163jtnzmahn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163aymlsnku.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ffxsdgau.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ebibhokg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wcuioypd.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hbnjwfpr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rvbcfvpy.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ouuifzdc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ujclzgsw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163iisstuwg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163zhjjlakz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jhmasqaf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163onouihps.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rjxabwoa.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163pajljnyh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163kdbkfcbv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163izinvjba.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tvqekccu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163kyvwpapm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qjwcxcpl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163izzduwob.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ujtzgrfu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163webrsudm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ghzdzkbs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163fwtdfctv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lcsivsfw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163phyjglth.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ldgqkbds.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nbciaset.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163xkommgwq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kidcfgqi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163otwssecy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163nahsaekx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163owhymomw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ypjnukdc.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gsjjuall.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xubtbwlf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tjncpiyn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163gngkiwsh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163icitzskt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163xsaabjll.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kidryzks.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qidewypy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wypabtwn.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163awchjfxc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ehtgpeid.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zcyizsbc.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vsvbcevr.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ctdknncs.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ncjrskev.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wupkhoab.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163szfbbjjw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ldptscxl.html

================================================================================
来源：http://www.xuanzx.com/163ebqsxqnq.html

E. 字符串处理
来源：http://www.sxryk.cn/163yjpdlwfa.html

================================================================================
来源：http://www.xuanzx.com/163cqlreryr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163csemwkzv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163dsgfgonu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zadqqahh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163etmkbuke.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ziyrwomb.html


<!-- 参考信息 -->