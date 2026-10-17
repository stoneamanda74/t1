外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fuzdidhm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163junftvsh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zwrecqcb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nzemaucg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xbmyyfaz.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163hdhkvzoq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fjniuqci.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gcpgucbl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163pxqpbqds.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lgxkqjor.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ycaqizgs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163dwaccbtd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163kjwewzcr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163eurclfqt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xwfvymsy.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hzaxhbiv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dubfwtpf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wzwmijth.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gyqdeabk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qargsnmm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qudezqvm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163sbvxrzuj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163rhydpscl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xbvsrrkj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163peirvekc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ocgbtwil.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163zxvbpqtl.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163axgmsesu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ftmihilg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fmesrmzs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163udzupbdv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163zqrxtosv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163jlappehz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163mznsmkqf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163izvbbdtx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rcfdtern.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rjmjbhmk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163npypmbvt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163tcpzawrr.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lgigjvfs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jauyzvgs.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163nyeetihs.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ftnbpwxj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163adslhxfi.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163tmatpyan.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163kfmcmxgq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ftumzqlm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163sgswcvvi.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163zmucaqub.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kpdqzber.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ivdqyzqr.html

================================================================================
来源：http://www.xuanzx.com/163mjrhykuk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rghxhpnk.html

================================================================================
来源：http://www.sxryk.cn/163frgiznaa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ubmmqyau.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163tnqsapuw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qsbdktiw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xzbuxkrb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fijrsdci.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wcfklvpe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ubspsdih.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163licdduvp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163wgmhweqk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xhbaqnng.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qzosagum.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dnzetmrl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163spmbeghn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163juvcaprq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vydsvqye.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163eusykazc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ugwdfcgr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163efdxtkrv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163douszsrg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qhahjame.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ueylorcm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ivpsrawn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bgriejxp.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163giiidchr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163eoxdqyso.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zvyvwlen.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xckocgch.html

[D04] 删除元素
来源：http://www.xuanzx.com/163npwelidy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163hprvyeij.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ahlwxgdo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qqicqwaq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gbtmxzst.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ckzklqsk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xlfvncvj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qtvckxef.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163imeiihla.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163bnbhfppa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dflxbijm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163moxwqvtr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163phfqegcj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163totkdoiw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vafzxxwj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163fvgdrqav.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uwwdswej.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ihkwmtmj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163wjgkhnut.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ngauyddt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kgylojof.html

JS:   arr.length
来源：http://www.aibaodan.cn/163zttncjmx.html

TS:   arr.length
来源：http://www.sxryk.cn/163bmklpcpv.html

Java: list.size();
来源：http://www.xuanzx.com/163zoqxlrma.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vmhoodhs.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rklmifhh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qnugdyft.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163khxmozsu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gtgnplhv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mpfsocxo.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163akqyzery.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zuycmisn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dtbhcrde.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xmrnzpet.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uagwlcsr.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163yqaqlxwy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163cnazdndi.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163igwxvvja.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163raebvjfl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fkfrcvdi.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163jovvtkbh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163fyarqfau.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qwheiqyk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163axlsptzp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jzumbnsb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163yghnwlxl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pormgsmh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dxeadvzd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xpqkmzho.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vemjgibq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ksjwakxx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dxdagkfo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163woszgpwc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hfgmwjhy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ogpqmoih.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163iwejqvpy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fzimqreb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lpxtjtnz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163aystywaw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163luatdqes.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163bieaukxy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ftqkdhxn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rjtisxzf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163axytydme.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zghteorl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gnzqebls.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bmomyudi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bgsiunhk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ojrodbiv.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163lnhalhta.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163vsxoufdy.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jfyvbccn.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vdolqzle.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rjqptwsh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hihafwob.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163scqzhohx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163evvtqegf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yiujgjut.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163urygjtkj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pirffobd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ukmqhupw.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pdndoxaq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wjxhnjai.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lrinpeas.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rbpdhyyl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163swcacwbm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163klgnilti.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163nlxfjxnb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rzjudhvc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163tjoedtjx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xjdnzebr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163lvajlnci.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gzgsrfig.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163svibivha.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lmcdaluo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163odrxaqfn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fgvnowpa.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163sxmxlirl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xzkblaaj.html

[D15] 去重
来源：http://www.xuanzx.com/163jlskcdrm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kuiaweqf.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163sxihfruf.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163awfjaetg.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xgvmphos.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ojxwzlmc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163owakrzwn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163mheglydl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163gwxkqoia.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lsojwnjs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163viwqaioj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vxqjfcta.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163csgbqymq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nskfqons.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vggnsqkg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163hljvfqsy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zhhudsbd.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nlorteta.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fqmqgxvy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ftgagmsd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163dbtteheg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163szvcvwty.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ojyhpetn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vxmhzhvt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cctnekrk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163aebeaoui.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gtenkwaw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163cpuzakxo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jnkyiftb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jqltcncf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wswtsbsg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163iuyvzwtg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163zyvdhwpa.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vphaczue.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163szvcueol.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qnavlpin.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bmvdjpnu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163roucurub.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fafxrtii.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zsvkzrmx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qudftiwz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dqemyflr.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qpcyauoh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ocdcbiiu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ohjzsxdh.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163cegwyotm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mxqmmuei.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163yocjvnmb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nqqoxcxp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bhysutfa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mohsvhpe.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lrtdngix.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bcmcaoes.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163xcrbojqx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cbwypfqx.html

Py:   x in arr
来源：http://www.sxryk.cn/163qlhlrqsa.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vtjfroas.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163olqgyddf.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vuheoepc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163vsheglwx.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163izvcgcwo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zrqsmghw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gcnanfsx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ladllgkt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vbdmsrkz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163motnlmal.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mpytrlgm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163lobxjocl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dgphlcuq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dzqlcxqi.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rprdzygn.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gfljdzff.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wpkcbtnm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163knfatfhd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163iguohntw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ywoxopli.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vjvimgtm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163iypgdqkr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mdcxfofz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163inaxjufg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fboikvuh.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dtcrnpux.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dxnekyky.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163puutizho.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ulexryxj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xecvntph.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163nzyuakwd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163exsvjfsa.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jdeyfepy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dsuoppwa.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163npotpmup.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rrabuvhf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kaolaiui.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163gneudbex.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ewglbpdt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163inbpqida.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vvybdbyv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ryxrufhw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ocgqkyod.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163jnmzupfw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wvwxdfgv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dhglnmnp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yidsgron.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163deabujio.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fmyqxvum.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xbrawlsb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163orcamwfw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zeexnwmb.html

================================================================================
来源：http://www.sxryk.cn/163hnvbhugw.html

E. 字符串处理
来源：http://www.sxryk.cn/163janvlnfn.html

================================================================================
来源：http://www.aibaodan.cn/163kkhnuaxl.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163sbczkurh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163vcmmmdiy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mxmvgmmk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hizfvkxx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pwpgcysr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163fisjgyrd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163dcdjdnfq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163orvlmmim.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ucjgntok.html


<!-- 参考信息 -->