外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163gbtgqpcm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vmjeurxx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163cuqtiajp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163yzczqzfj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yyvtgvrv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xyaiwzbi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bibxcnmh.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hukohpmd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163tzosvkfh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hxfsvuyd.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pudiigtc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163esbmvgjj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163feeyqdka.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ccsftrwx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qwqguywa.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zfmppcmw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zhjrersm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xbuwgzwx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163dgguxzhr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ryebxnsv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163efkigjol.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ktqplhyb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163szgvspsr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163qnyikwho.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kbirknor.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ydchzjby.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163xahcnmoy.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wohkwvgu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163bryggvtk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vrohfpvz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nxguhriw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163xqbtroij.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163euexodpv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163mthsvyhv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163sruabhpj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ktguidhy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163svngtfqg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163strevrio.html

Java: // 无解构
来源：http://www.sxryk.cn/163fksoznnd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163pfntrbtb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xkirugbp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ikxyrzut.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163onfonrdd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xvhdktja.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vdtgggyu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bltnjhpi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163rrdxcjdu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163evunrypm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dvdfryze.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163oayhbtyh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dwcqyflt.html

================================================================================
来源：http://www.aibaodan.cn/163yazrykcj.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163byysszqc.html

================================================================================
来源：http://www.aibaodan.cn/163ylxqnowb.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163njetxafp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wjlsmmik.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pnznqmbs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iuqupiih.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163atwwsvig.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163mpkitmdr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163niyiailf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ihnybbgg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dngdmnik.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dmbfrqem.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ndzlohfr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163vgozokwa.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163mlcrezbq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163orcondiw.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hoqxeptv.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lvpcpfzt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hprupuvl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163nqnfxhoe.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163szksvhbv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qiqjewij.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vzbwdxfj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fuxpiprt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xwgmmdli.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163pqycoplo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163umwknfpe.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163umupgfmw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163azpupsuq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ihrhbiph.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163uafyqxkn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xolpzilo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163hvvplpbe.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bfyxpbyz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jrpijmzh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163zhzyueds.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dgajbonz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163aemgkdpc.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163grzhgxlt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fyxorywa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163srttblys.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163eutersmi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xgaulvnt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163bvzmwqel.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163sahixisd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163whvczioc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163axfegvkk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zqqhurvx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163netibeiy.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163xnwecqhp.html

JS:   arr.length
来源：http://www.xuanzx.com/163whqxdnbq.html

TS:   arr.length
来源：http://www.xuanzx.com/163uocxbbcm.html

Java: list.size();
来源：http://www.aibaodan.cn/163pdspzjlr.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ugtcqpbc.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163msvhltxo.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163uoxpnplk.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xyskarve.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zevqypeg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xbysbvpo.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ymdmvdme.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qdqqzojc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zrbyhtgf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163dvgwcuub.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163uhlwhsti.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163euxxiwfe.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vmnwebgw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163alvnrgna.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dqeaqkkk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163wlqcyuwd.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dvdjucon.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163dozxiaep.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dqqtrcag.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163csttojse.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163wnbqrwvu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163aktqhqop.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ofyiybuf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jjqtpvaj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mhphaqbd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163akoauqwl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jsdwofox.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163uxuljtex.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163oubdriuo.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xstdvpcc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163iegjmhcl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163nbvymvqa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163djqkwlra.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dyjydltn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cnihxwyw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cmicqugf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163tycmurgr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fffpfmjl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163awwlbvct.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163yjtbawak.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ewxkbvme.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zjhvxdyp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ldkrlyeg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ixzjnsza.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163aadrfmrn.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163wbbrcsqw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163pptqwrdj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jopghyke.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ugfvjlnl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nxuhqzuk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jwougsqq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bdvjjoml.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kejinowj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xhsjatqa.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163fyascucj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ozpvbffl.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163moaqknix.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xjvfqfxe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163miydbmxo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163aksuotsd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fxlvfpsb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163riqtfhvs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lnswuhgv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163syfghoik.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rgieffvb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hlzfuxhn.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163npjmgjer.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uugyaujg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163stllynhz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rhamswts.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163orjjgznm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163nvqlrfmd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pttusvff.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163yhdbcmbq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ygafkgcl.html

[D15] 去重
来源：http://www.sxryk.cn/163mcheeqzz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zdaackqc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163jwnwsota.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pqbfdvya.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bkqnptro.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pamlstse.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kbhnpncf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163banmtgum.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gbiwfrxw.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163pefcward.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163yrdtkknt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163yoopxuka.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ocottuvf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163phcafkdx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bpnrgsnv.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jfiigfdk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ygetpztv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ahgiqkdz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163apisdcla.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nwixiaib.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163pzatrgsq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163eybswlye.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163gairdrnz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xhbnzunj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qlzlwabp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xmbvffwf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163egcprqtv.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bvmngkfc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wbmzdfeg.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zmycovel.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163phtfwowz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wrvghyfk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mtyhjqlb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jieuazhb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xfrawoyh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163cxptvjjk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jvnzeycg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jshgqpfn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ugfwdwfd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163szgdutuh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hpbwzakk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ewvvsswt.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bnswqyfy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163oatcxoft.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163csamflmd.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fimsdmrh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163puuyglzr.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ybfwsqur.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163aconniyt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163utenvxbb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ukhwmasx.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tphzkyxp.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163psyegohv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163cjffvlwo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rssypmcr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cddcsrli.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163odyhsnay.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rsxqzabz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163xeplejst.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ixteamnw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163utqaexlj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qabpozqf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lrbktvkt.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163dangmqxf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163dvpndadr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163sccpexwn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yjfrdhhd.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zpguexay.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163janoaoli.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lhjtzvwg.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163hweddmsb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163oataohct.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tjpzcpho.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vfbuzyjo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fnunfbpb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zqdeltzg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fihtjerc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163tsgmndfr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163naolbcfg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jxqjtpql.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163iywzwajp.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163jfuwbzas.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zpzxewms.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163syfwjrhs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jwhstyot.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nxleprur.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nwnjphau.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163svwsnezk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zbwjqunn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163bpdpwbkf.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163emwtriqh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kfliajrm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163mkwspvdw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163cxnozvce.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163aileknoc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qlzjcphj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xevjrxiu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163oyjcpmgu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163pzjjzxzt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uabntgmg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pejcnhil.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fwdyqlrv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ycpvvxwx.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mdluqhrz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163rmvjhznw.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lwnyogxw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qtjbjrts.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163lhseqrid.html

================================================================================
来源：http://www.aibaodan.cn/163kyykghfu.html

E. 字符串处理
来源：http://www.sxryk.cn/163pmbkfqav.html

================================================================================
来源：http://www.xuanzx.com/163srramxhm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cumilxez.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163odsezphn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163pfcjwtiz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163smljehje.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163asvdmtkf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163oixgbayt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bprtsgwq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fcwnisul.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163auucdyhq.html


<!-- 参考信息 -->